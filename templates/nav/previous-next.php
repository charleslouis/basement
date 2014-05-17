<?php 
	$current_post = $post;
	$args = array(
		'orderby'          => 'post_date',
		'order'            => 'DESC',
		'exclude'          => '',
		'post_type'        => 'interviews',
		'post_status'      => 'publish',
		'suppress_filters' => true );
	
	$myposts = get_posts( $args );
	
	$current_post_key = array_keys($myposts, $current_post);
	$current_post_key_value = $current_post_key[0];

	$older_post_key = $current_post_key_value - 1;
	$newer_post_key = $current_post_key_value + 1;

	$older_post_id = $myposts[$older_post_key]->ID;
	$newer_post_id = $myposts[$newer_post_key]->ID;
?>

<?php if ($older_post_id || $newer_post_id): ?>	
	<div id="nav-entry" class="nav-entry">
		<?php if ($older_post_id): ?>
	  	<a href="<?php echo get_permalink($older_post_id); ?>" class="prev-next-link older">
	  		<?php echo get_the_title($older_post_id); ?>
	  	</a>
		<?php endif ?>
		<?php if ($newer_post_id): ?>
	  	<a href="<?php echo get_permalink($newer_post_id); ?>" class="prev-next-link newer">
	  		<?php echo get_the_title($newer_post_id); ?>
	  	</a>
		<?php endif ?>
	</div>
<?php endif; ?>