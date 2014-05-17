<?php 

// return entry meta information for posts, used by multiple loops, you can override this function by defining them first in your child theme's functions.php file
if ( ! function_exists( 'basement_entry_meta' ) ) {
    function basement_entry_meta() {
        echo '<span class="byline author">'. __('Written by', 'basement') .' <a href="'. get_author_posts_url(get_the_author_meta('ID')) .'" rel="author" class="fn">'. get_the_author() .', </a></span>';
        echo '<time class="updated" datetime="'. get_the_time('c') .'" pubdate>'. get_the_time('F jS, Y') .'</time>';
    }
};
?>
