<h2><?php _e('Search Results for', 'basement'); ?> "<?php echo get_search_query(); ?>"</h2>

<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part( 'templates/content', get_post_format() ); ?>
	<?php endwhile; ?>
<?php else : ?>
	<?php get_template_part( 'templates/content', 'none' ); ?>
<?php endif; // end have_posts() check ?>

<?php get_template_part( 'templates', 'pagination' ); ?>

