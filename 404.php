<?php get_header(); ?>

<!-- Row for main content area -->
	<div class="small-12 large-8 columns" id="content" role="main">
	
		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
			<header>
				<h1 class="entry-title"><?php _e('File Not Found', 'reverie'); ?></h1>
			</header>
			<div class="entry-content">
				<div class="error">
					<p class="bottom"><?php _e('The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.', 'reverie'); ?></p>
				</div>
				<p><?php _e('Please try the following:', 'reverie'); ?></p>
				<ul> 
					<li><?php _e('Check your spelling', 'reverie'); ?></li>
					<li><?php printf(__('Return to the <a href="%s">home page</a>', 'reverie'), home_url()); ?></li>
					<li><?php _e('Click the <a href="javascript:history.back()">Back</a> button', 'reverie'); ?></li>
				</ul>
			</div>
		</article>

	</div>
	<?php get_sidebar(); ?>
		
<?php get_footer(); ?>