<?php
/**
 * The default template for displaying content. Used for both single and index/archive/search.
 *
 * @subpackage Basement
 * @since Basement 4.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('index-card'); ?>>
	<header>
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<?php basement_entry_meta(); ?>
	</header>
	<div class="entry-content">
		<figure><a href="<?php the_permalink(); ?>"><?php if ( has_post_thumbnail() ) {the_post_thumbnail('large'); } ?></a></figure> <?php the_excerpt(); ?>
	</div>
</article>