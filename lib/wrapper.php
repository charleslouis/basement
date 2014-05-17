<?php
/**
 * Theme wrapper
 *
 * @link http://root.io/an-introduction-to-the-root-theme-wrapper/
 * @link http://scribu.net/wordpress/theme-wrappers.html
 */


// basement_template_path is not ready for basement (yet)
// // function basement_template_path() {
//   // return Basement_Wrapping::$main_template;
// }

function basement_sidebar_path() {
  return new Basement_Wrapping('templates/sidebar.php');
}

// Basement_Wrapping is not really ready for basement (yet)
// but we use it still for the above basement_sidebar_path
class Basement_Wrapping {
  // Stores the full path to the main template file
  static $main_template;

  // Stores the base name of the template file; e.g. 'page' for 'page.php' etc.
  static $base;

  public function __construct($template = 'base.php') {
    $this->slug = basename($template, '.php');
    $this->templates = array($template);

    if (self::$base) {
      $str = substr($template, 0, -4);
      array_unshift($this->templates, sprintf($str . '-%s.php', self::$base));
    }
  }

  public function __toString() {
    $this->templates = apply_filters('basement_wrap_' . $this->slug, $this->templates);
    return locate_template($this->templates);
  }

  static function wrap($main) {
    self::$main_template = $main;
    self::$base = basename(self::$main_template, '.php');

    if (self::$base === 'index') {
      self::$base = false;
    }

    return new Basement_Wrapping();
  }
}
// add_filter('template_include', array('Basement_Wrapping', 'wrap'), 99);
