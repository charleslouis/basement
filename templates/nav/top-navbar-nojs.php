<nav id="menu" class="main-menu" role="navigation">
	<div class="row">
		<div class="column main-menu-column">
		<?php
				$args = array(
		        'theme_location' => 'primary',
		        'container' => false,
		        'depth' => 0,
		        'items_wrap' => '<ul id="nav" class="navlist"><li class="navtop"><a class="navtoplink" href="#top"><span>TOP</span></a></li>%3$s</ul>',
	          'fallback_cb' => 'reverie_menu_fallback', // workaround to show a message to set up a menu
	          'walker' => new basement_walker( array(
					      // 'item_type' => 'li',
					      // 'in_top_bar' => false,
					      // 'menu_type' => 'main-menu' //enable menu differenciation, used in preg_replace classes[]
	          	) ),
		    );
		    wp_nav_menu($args);
		?>
		</div>
	</div>
</nav>