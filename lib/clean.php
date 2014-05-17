<?php
/**********************
WP_HEAD GOODNESS
The default WordPress head is
a mess. Let's clean it up.

Thanks for Bones
http://themble.com/bones/
**********************/

if( ! function_exists( 'basement_head_cleanup ' ) ) {
	function basement_head_cleanup() {
		// category feeds
		// remove_action( 'wp_head', 'feed_links_extra', 3 );
		// post and comment feeds
		// remove_action( 'wp_head', 'feed_links', 2 );
		// EditURI link
		remove_action( 'wp_head', 'rsd_link' );
		// windows live writer
		remove_action( 'wp_head', 'wlwmanifest_link' );
		// index link
		remove_action( 'wp_head', 'index_rel_link' );
		// previous link
		remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
		// start link
		remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
		// links for adjacent posts
		remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
		// WP version
		remove_action( 'wp_head', 'wp_generator' );
	  // remove WP version from css
	  add_filter( 'style_loader_src', 'basement_remove_wp_ver_css_js', 9999 );
	  // remove Wp version from scripts
	  add_filter( 'script_loader_src', 'basement_remove_wp_ver_css_js', 9999 );

	} /* end head cleanup */
}

// remove WP version from RSS
if( ! function_exists( 'basement_rss_version ' ) ) {
	function basement_rss_version() { return ''; }
}

// remove WP version from scripts
if( ! function_exists( 'basement_remove_wp_ver_css_js ' ) ) {
	function basement_remove_wp_ver_css_js( $src ) {
	    if ( strpos( $src, 'ver=' ) )
	        $src = remove_query_arg( 'ver', $src );
	    return $src;
	}
}

// remove injected CSS for recent comments widget
if( ! function_exists( 'basement_remove_wp_widget_recent_comments_style ' ) ) {
	function basement_remove_wp_widget_recent_comments_style() {
	   if ( has_filter('wp_head', 'wp_widget_recent_comments_style') ) {
	      remove_filter('wp_head', 'wp_widget_recent_comments_style' );
	   }
	}
}

// remove injected CSS from recent comments widget
if( ! function_exists( 'basement_remove_recent_comments_style ' ) ) {
	function basement_remove_recent_comments_style() {
	  global $wp_widget_factory;
	  if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
	    remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
	  }
	}
}

// remove injected CSS from gallery
if( ! function_exists( 'basement_gallery_style ' ) ) {
	function basement_gallery_style($css) {
	  return preg_replace("!<style type='text/css'>(.*?)</style>!s", '', $css);
	}
}


// adding the conditional wrapper around ie stylesheet
// source: http://code.garyjones.co.uk/ie-conditional-style-sheets-wordpress/
if( ! function_exists( 'basement_ie_conditional ' ) ) {
	function basement_ie_conditional( $tag, $handle ) {
		if ( 'basement-ie-only' == $handle )
			$tag = '<!--[if lt IE 9]>' . "\n" . $tag . '<![endif]-->' . "\n";
		return $tag;
	}
}


/**
 * Tell WordPress to use searchform.php from the templates/ directory
 */
function roots_get_search_form($form) {
  $form = '';
  locate_template('/templates/searchform.php', true, false);
  return $form;
}
add_filter('get_search_form', 'roots_get_search_form');


/*********************
Post related cleaning
*********************/
/* Customized the output of caption, you can remove the filter to restore back to the WP default output. Courtesy of DevPress. http://devpress.com/blog/captions-in-wordpress/ */
if( ! function_exists( 'basement_cleaner_caption ' ) ) {
	function basement_cleaner_caption( $output, $attr, $content ) {

		/* We're not worried abut captions in feeds, so just return the output here. */
		if ( is_feed() )
			return $output;

		/* Set up the default arguments. */
		$defaults = array(
			'id' => '',
			'align' => 'alignnone',
			'width' => '',
			'caption' => ''
		);

		/* Merge the defaults with user input. */
		$attr = shortcode_atts( $defaults, $attr );

		/* If the width is less than 1 or there is no caption, return the content wrapped between the [caption]< tags. */
		if ( 1 > $attr['width'] || empty( $attr['caption'] ) )
			return $content;

		/* Set up the attributes for the caption <div>. */
		$attributes = ' class="figure ' . esc_attr( $attr['align'] ) . '"';

		/* Open the caption <div>. */
		$output = '<figure' . $attributes .'>';

		/* Allow shortcodes for the content the caption was created for. */
		$output .= do_shortcode( $content );

		/* Append the caption text. */
		$output .= '<figcaption>' . $attr['caption'] . '</figcaption>';

		/* Close the caption </div>. */
		$output .= '</figure>';

		/* Return the formatted, clean caption. */
		return $output;
		
	} /* end basement_cleaner_caption */
}

// Clean the output of attributes of images in editor. Courtesy of SitePoint. http://www.sitepoint.com/wordpress-change-img-tag-html/
if( ! function_exists( 'basement_image_tag_class ' ) ) {
	function basement_image_tag_class($class, $id, $align, $size) {
		$align = 'align' . esc_attr($align);
		return $align;
	} /* end basement_image_tag_class */
}

// Remove width and height in editor, for a better responsive world.
if( ! function_exists( 'basement_image_editor ' ) ) {
	function basement_image_editor($html, $id, $alt, $title) {
		return preg_replace(array(
				'/\s+width="\d+"/i',
				'/\s+height="\d+"/i',
				'/alt=""/i'
			),
			array(
				'',
				'',
				'',
				'alt="' . $title . '"'
			),
			$html);
	} /* end basement_image_editor */
}

// Wrap images with figure tag. Courtesy of Interconnectit http://interconnectit.com/2175/how-to-remove-p-tags-from-images-in-wordpress/
if( ! function_exists( 'basement_img_unautop ' ) ) {
	function basement_img_unautop($pee) {
	    $pee = preg_replace('/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '<figure>$1</figure>', $pee);
	    return $pee;
	} /* end basement_img_unautop */
}
?>