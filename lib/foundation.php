<?php
// Pagination
if( ! function_exists( 'basement_pagination' ) ) {
	function basement_pagination() {
		global $wp_query;
	 
		$big = 999999999; // This needs to be an unlikely integer
	 
		// For more options and info view the docs for paginate_links()
		// http://codex.wordpress.org/Function_Reference/paginate_links
		$paginate_links = paginate_links( array(
			'base' => str_replace( $big, '%#%', get_pagenum_link($big) ),
			'current' => max( 1, get_query_var('paged') ),
			'total' => $wp_query->max_num_pages,
			'mid_size' => 5,
			'prev_next' => True,
		    'prev_text' => __('&laquo;'),
		    'next_text' => __('&raquo;'),
			'type' => 'list'
		) );
	 
		// Display the pagination if more than one page is found
		if ( $paginate_links ) {
			echo '<div class="pagination-centered">';
			echo $paginate_links;
			echo '</div><!--// end .pagination -->';
		}
	}
}

/**
 * A fallback when no navigation is selected by default, otherwise it throws some nasty errors in your face.
 * From required+ Foundation http://themes.required.ch
 */
if( ! function_exists( 'basement_menu_fallback' ) ) {
	function basement_menu_fallback() {
		echo '<div class="alert-box secondary">';
		// Translators 1: Link to Menus, 2: Link to Customize
	  	printf( __( 'Please assign a menu to the primary menu location under %1$s or %2$s the design.', 'basement' ),
	  		sprintf(  __( '<a href="%s">Menus</a>', 'basement' ),
	  			get_admin_url( get_current_blog_id(), 'nav-menus.php' )
	  		),
	  		sprintf(  __( '<a href="%s">Customize</a>', 'basement' ),
	  			get_admin_url( get_current_blog_id(), 'customize.php' )
	  		)
	  	);
	  	echo '</div>';
	}
}

// Add Foundation 'active' class for the current menu item
if( ! function_exists( 'basement_active_nav_class' ) ) {
	function basement_active_nav_class( $classes, $item ) {
	    if ( $item->current == 1 || $item->current_item_ancestor == true ) {
	        $classes[] = 'active';
	    }
	    return $classes;
	}
}
add_filter( 'nav_menu_css_class', 'basement_active_nav_class', 10, 2 );

/**
 * Use the active class of ZURB Foundation on wp_list_pages output.
 * From required+ Foundation http://themes.required.ch
 */
if( ! function_exists( 'basement_active_list_pages_class' ) ) {
	function basement_active_list_pages_class( $input ) {

		$pattern = '/current_page_item/';
	    $replace = 'current_page_item active';

	    $output = preg_replace( $pattern, $replace, $input );

	    return $output;
	}
}
add_filter( 'wp_list_pages', 'basement_active_list_pages_class', 10, 2 );

?>