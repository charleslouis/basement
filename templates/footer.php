	</div><!-- Row End -->
</div><!-- Container End -->

<div class="full-width footer-widget">
	<div class="row">
		<?php dynamic_sidebar("Footer"); ?>
	</div>
</div>

<footer class="full-width" role="contentinfo">
	<div class="row">
		<div class="large-12 columns">
			<?php wp_nav_menu(array('theme_location' => 'utility', 'container' => false, 'menu_class' => 'inline-list')); ?>
		</div>
	</div>
	<div class="row love-basement">
		<div class="large-12 columns">
			<p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
<?php basement_footer(); ?>
 
</body>
</html>