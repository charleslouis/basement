  <?php if( get_field('photo_list') ): ?>
    
    <ul class="example-orbit" data-orbit data-options="timer_speed:3000; slide_number:false; timer_show_progress_bar: false;">  
    <?php while( has_sub_field('photo_list') ) :  ?>
      
      <li>
        
      <?php $photo = get_sub_field('photo'); ?>
      <img src="<?php echo $photo[sizes]['small']; ?>" alt="<?php echo $photo[alt]; ?>" data-interchange="
            [<?php echo $photo[sizes]['small-retina']; ?>, (small)], 
            [<?php echo $photo[sizes]['medium']; ?>, (medium)],
            [<?php echo $photo[sizes]['large']; ?>, (large)],
            [<?php echo $photo[sizes]['large-retina']; ?>, (retina)]" />    
    </li>  
    <?php endwhile; ?>
  </ul>
  <?php endif; ?>
