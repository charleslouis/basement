<?php
/*
Template Name: Home
*/
?>
<?php get_template_part('templates/header'); ?>
<div class="small-12 large-8 columns" id="content" role="main">
	
		<?php get_template_part('templates/content', 'page'); ?>

		<h1>Actualité récente</h1>
		<hr>
		<?php get_template_part('templates/loops', 'posts'); ?>
		

</div>
<?php include basement_sidebar_path(); ?>	
<?php get_template_part('templates/footer'); ?>