<?php wp_reset_query(); ?>
<?php $args = array(
	'posts_per_page'   => 5,
	'offset'           => 0,
	'category'         => '',
	'orderby'          => 'post_date',
	'order'            => 'DESC',
	'include'          => '',
	'exclude'          => '',
	'meta_key'         => '',
	'meta_value'       => '',
	'post_type'        => 'post',
	'post_mime_type'   => '',
	'post_parent'      => '',
	'post_status'      => 'publish',
	'suppress_filters' => true );
?>
<?php $myposts = get_posts( $args ); ?>

<?php  foreach ( $myposts as $post ) : setup_postdata( $post ); ?> 
	<?php get_template_part( 'templates/content', get_post_format() ); ?>
<?php endforeach; ?>
