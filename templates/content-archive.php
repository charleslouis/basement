<!-- Row for main content area -->
<div class="small-12 large-8 columns" id="content" role="main">

<?php if ( have_posts() ) : ?>

	<?php /* Start the Loop */ ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part( 'templates/content', get_post_format() ); ?>
	<?php endwhile; ?>
	
	<?php else : ?>
		<?php get_template_part( 'templates/content', 'none' ); ?>
	
<?php endif; // end have_posts() check ?>

<?php /* Display navigation to next/previous pages when applicable */ ?>
<?php if ( function_exists('basement_pagination') ) { basement_pagination(); } else if ( is_paged() ) { ?>
	<nav id="post-nav">
		<div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'basement' ) ); ?></div>
		<div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'basement' ) ); ?></div>
	</nav>
<?php } ?>

</div>