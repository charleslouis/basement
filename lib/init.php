<?php
/**
 * Basement initial setup and constants
 */
if( ! function_exists( 'basement_theme_support' ) ) {
    function basement_theme_support() {
        
        // Make theme available for translation
        load_theme_textdomain('basement', get_template_directory() . '/lang');

	    register_nav_menus(array(
	        'primary' => __('Primary Navigation', 'basement'),
	        'additional' => __('Additional Navigation', 'basement'),
	        'utility' => __('Utility Navigation', 'basement')
	    ));

        // Add custom background support
        add_theme_support( 'custom-background',
            array(
                'default-image' => '',  // background image default
                'default-color' => '', // background color default (dont add the #)
                'wp-head-callback' => '_custom_background_cb',
                'admin-head-callback' => '',
                'admin-preview-callback' => ''
            )
        );
    }
}
add_action('after_setup_theme', 'basement_theme_support'); /* end Basement theme support */


// start all the functions
if( ! function_exists( 'basement_startup ' ) ) {
    function basement_startup() {

        // launching operation cleanup
        add_action('init', 'basement_head_cleanup');
        // remove WP version from RSS
        add_filter('the_generator', 'basement_rss_version');
        // remove pesky injected css for recent comments widget
        add_filter('wp_head', 'basement_remove_wp_widget_recent_comments_style', 1 );
        // clean up comment styles in the head
        add_action('wp_head', 'basement_remove_recent_comments_style', 1);
        // clean up gallery output in wp
        add_filter('gallery_style', 'basement_gallery_style');

        // ie conditional wrapper
        add_filter('style_loader_tag', 'basement_ie_conditional', 10, 2 );
        
        // additional post related cleaning
        add_filter('img_caption_shortcode', 'basement_cleaner_caption', 10, 3 );
        add_filter('get_image_tag_class', 'basement_image_tag_class', 0, 4);
        add_filter('get_image_tag', 'basement_image_editor', 0, 4);
        add_filter('the_content', 'basement_img_unautop', 30 );

    } /* end basement_startup */
}
add_action('after_setup_theme','basement_startup');
