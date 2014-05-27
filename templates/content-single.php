ls
<?php while (have_posts()) : the_post(); ?>
	<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
		<header>
			<h1 class="entry-title"><?php the_title(); ?></h1>
			<?php basement_entry_meta(); ?>
		</header>
		<div class="entry-content">
			<?php the_content(); ?>
		</div>
		<footer>
			<?php wp_link_pages(array('before' => '<nav id="page-nav"><p>' . __('Pages:', 'basement'), 'after' => '</p></nav>' )); ?>
			<p class="entry-tags"><?php the_tags(); ?></p>
			<?php edit_post_link(__('Edit this Post','basement')); ?>
		</footer>
		<?php comments_template('/templates/comments.php'); ?>
	</article>
<?php endwhile; // End the loop ?>
