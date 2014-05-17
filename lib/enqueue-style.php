<?php
/*********************
Enqueue the proper CSS
if you use Sass.
*********************/
if( ! function_exists( 'basement_enqueue_style' ) ) {
	function basement_enqueue_style()
	{
		// foundation stylesheet
		// wp_register_style( 'basement-foundation-stylesheet', get_stylesheet_directory_uri() . '/assets/css/app.css', array(), '' );

		// Register the main style
		wp_register_style( 'basement-stylesheet', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), '', 'all' );
		
		// wp_enqueue_style( 'basement-foundation-stylesheet' );
		wp_enqueue_style( 'basement-stylesheet' );
		
	}
}
add_action( 'wp_enqueue_scripts', 'basement_enqueue_style' );
?>
