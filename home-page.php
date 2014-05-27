<?php
/*
Template Name: Home page
*/
?>
<?php get_template_part('templates/header'); ?>
<?php include(locate_template('templates/banners/banner-orbit.php')); ?>
<div class="small-12 large-8 columns" id="content" role="main">
	
		<?php get_template_part('templates/content', 'page'); ?>
		
</div>
<?php include basement_sidebar_path(); ?>	
<?php get_template_part('templates/footer'); ?>