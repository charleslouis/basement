	</div><!-- Row End -->
</div><!-- Container End -->

<div class="full-width footer-widget">
	
	<div class="row">
		<?php dynamic_sidebar("Actualites Footer"); ?>
		<?php dynamic_sidebar("Contact"); ?>
		<?php dynamic_sidebar("Adhesion"); ?>
	</div>
	<hr>
	
	<div class="row">
		<h3  class="large-12 columns">Découvrez les projets web de l'Institut Renaudot</h3>
		<hr>
		<section class="large-6 columns">
			<h4>Santé Ensemblee</h4>
			<p>Rechercher des projets et expériences menés dans une démarche communautaire en santé. Echanger sur les expériences, donner son avis, poser des questions et rentrer en contact. Contribuer à enrichir le site en présentant une action/un projet/un programme.</p>
<!-- 			<a href="http://sante-ensemble.org/">
				<figure>
					<img src="http://sante-ensemble.org/wp/wp-content/themes/bp-santeensemble/_inc/img/logo-santeensemble.png" alt="">
				</figure>
			</a> -->
			<a class="button expand" href="http://sante-ensemble.org/">sante-ensemble.org</a>
		</section>
		<section class="large-6 columns">
			<h4>Centre documentaire</h4>
			<p>En tant que centre de ressources en santé communautaire, l'Institut Renaudot met à votre disposition des documents à consulter sur place ou en ligne.</p><br>
<!-- 			<a href="http://www.santecommunautaire.com/opac_css/">
				<figure>
					<img src="http://www.santecommunautaire.com/opac_css/images/site/livre.png" alt="">
				</figure>
			</a> -->
			<a class="button expand" href="http://www.santecommunautaire.com/opac_css/">Centre Documentaire</a>
		</section>
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