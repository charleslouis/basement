<?php $photo = get_field('photo'); ?>
<header class="banner">
    <figure class="portrait">
      <img src="<?php echo $photo[sizes]['small']; ?>" alt="<?php echo $photo[alt]; ?>" data-interchange="
      [<?php echo $photo[sizes]['small-retina']; ?>, (small)], 
      [<?php echo $photo[sizes]['medium']; ?>, (medium)],
      [<?php echo $photo[sizes]['large']; ?>, (large)],
      [<?php echo $photo[sizes]['large-retina']; ?>, (retina)]">
      <figcaption class="photo-credit"><?php the_field('credits_photo'); ?></figcaption>      
    </figure>
    <h1 id="headline" data-proportion="<?php echo $data_proportion; ?>" class="entry-title" style="<?php echo $custom_style; ?>;"><?php the_title(); ?></h1>
</header><!-- banner -->