<?php 
if ( function_exists( 'add_image_size' ) ) {
  add_image_size( 'portrait-small', 340, 224, true ); //(cropped)
  add_image_size( 'portrait-small-retina', 680, 449, true ); //(cropped)
  add_image_size( 'portrait-medium', 800, 528, true ); //(cropped)
  add_image_size( 'portrait-medium-retina', 1600, 1056, true ); //(cropped)
  add_image_size( 'portrait-large', 1600, 1056, true ); //(cropped)
  add_image_size( 'portrait-large-retina', 2600, 1716, true ); //(cropped)
}
 
add_filter('image_size_names_choose', 'basement_image_sizes');
function basement_image_sizes($sizes) {
  $addsizes = array(
          "portrait-small" => __( "Portrait Small"),
          "portrait-small-retina" => __( "Portrait Small Retina"),
          "portrait-medium" => __( "Portrait Medium"),
          "portrait-medium-retina" => __( "Portrait Medium Retina"),
          "portrait-large" => __( "Portrait Large"),
          "portrait-large-retina" => __( "Portrait Large Retina"),
          );
  $newsizes = array_merge($sizes, $addsizes);
  return $newsizes;
}