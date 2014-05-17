<?php
/**********************
Enqueue CSS and Scripts
**********************/

// loading modernizr and jquery, and reply script
if( ! function_exists( 'basement_scripts ' ) ) {
	function basement_scripts() {
	  // jQuery is loaded using the same method from HTML5 Boilerplate:
    // Grab Google CDN's latest jQuery with a protocol relative URL; fallback to local if offline
    // It's kept in the header instead of footer to avoid conflicts with plugins.
    if (!is_admin() && current_theme_supports('jquery-cdn')) {
      wp_deregister_script('jquery');
      wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', false, null, false);
      add_filter('script_loader_src', 'basement_jquery_local_fallback', 10, 2);
    }

    // modernizr
    wp_register_script( 'basement-modernizr', get_template_directory_uri() . '/assets/js/modernizr.js', array(), '2.6.2', false );


    // comment reply script for threaded comments
    if( get_option( 'thread_comments' ) )  { wp_enqueue_script( 'comment-reply' ); }
    
    // adding uglified Foundation + Basement (your) script file in the footer
    wp_register_script( 'basement-js', get_template_directory_uri() . '/assets/js/script.js', array( 'jquery' ), '', true );
    
    global $is_IE;
    if ($is_IE) {
       wp_register_script ( 'html5shiv', "http://html5shiv.googlecode.com/svn/trunk/html5.js" , false, true);
    }

    // enqueue scripts
    wp_enqueue_script( 'basement-modernizr' );
    wp_enqueue_script( 'jquery' );  
    wp_enqueue_script( 'basement-js' );
    wp_enqueue_script( 'html5shiv' );

  }
}
add_action('wp_enqueue_scripts', 'basement_scripts', 100);


// http://wordpress.stackexchange.com/a/12450
function basement_jquery_local_fallback($src, $handle) {

  static $add_jquery_fallback = false;

  if ($add_jquery_fallback) {
    echo '<script>window.jQuery || document.write(\'<script src="' . get_template_directory_uri() . '/assets/js/src/vendor/jquery.js"><\/script>\')</script>' . "\n";
    $add_jquery_fallback = false;
  }

  if ($handle === 'jquery') {
    $add_jquery_fallback = true;
  }

  return $src;
}


// Load Google Analytics using config file
function basement_google_analytics() { ?>

	<script>
	  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	  e.src='//www.google-analytics.com/analytics.js';
	  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	  ga('create','<?php echo GOOGLE_ANALYTICS_ID; ?>');ga('send','pageview');
	</script>

<?php }

if (GOOGLE_ANALYTICS_ID && !is_admin()) {
  add_action('wp_footer', 'basement_google_analytics', 20);
}
// basement_google_analytics


function embed_gmap() {
    echo "\n\t<script type=\"text/javascript\" src=\"http://maps.googleapis.com/maps/api/js?sensor=false\"></script>\n";
}
// add_action('basement_head', 'embed_gmap');