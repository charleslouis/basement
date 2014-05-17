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