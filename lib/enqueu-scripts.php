<?php
/**********************
Enqueue CSS and Scripts
**********************/

// loading modernizr and jquery, and reply script
if( ! function_exists( 'basement_scripts_and_styles ' ) ) {
	function basement_scripts_and_styles() {
	  if (!is_admin()) {

	    // modernizr (without media query polyfill)
	    wp_register_script( 'basement-modernizr', get_template_directory_uri() . '/assets/js/modernizr.js', array(), '2.6.2', false );

	    // register Google font
	    wp_register_style('google-font', 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Lora:400,700|Droid+Sans+Mono');

	    // ie-only style sheet
	    wp_register_style( 'basement-ie-only', get_template_directory_uri() . '/css/ie.css', array(), '' );

	    // comment reply script for threaded comments
	    if( get_option( 'thread_comments' ) )  { wp_enqueue_script( 'comment-reply' ); }
	    
	    // adding Foundation scripts file in the footer
	    wp_register_script( 'basement-js', get_template_directory_uri() . '/assets/js/script.js', array(), '', true );
	    
	    global $is_IE;
	    if ($is_IE) {
	       wp_register_script ( 'html5shiv', "http://html5shiv.googlecode.com/svn/trunk/html5.js" , false, true);
	    }

	    // enqueue styles and scripts
	    wp_enqueue_script( 'basement-modernizr' );
	    wp_enqueue_style( 'google-font' );
	    wp_enqueue_style('basement-ie-only');
	    /*
	    I recommend using a plugin to call jQuery
	    using the google cdn. That way it stays cached
	    and your site will load faster.
	    */
	    wp_enqueue_script( 'jquery' );
		
	    wp_enqueue_script( 'basement-js' );
	    wp_enqueue_script( 'html5shiv' );

	  }
	}
}
