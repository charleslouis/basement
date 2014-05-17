<?php 

if ( function_exists( 'add_image_size' ) ) {

  // Made to work with interchange
  add_image_size( 'small', 340, 224, true ); //(cropped)
  add_image_size( 'small-retina', 680, 449, true ); //(cropped)
  add_image_size( 'medium', 800, 528, true ); //(cropped)
  add_image_size( 'medium-retina', 1600, 1056, true ); //(cropped)
  add_image_size( 'large', 1600, 1056, true ); //(cropped)
  add_image_size( 'large-retina', 2600, 1716, true ); //(cropped)

}

 

add_filter('image_size_names_choose', 'basement_image_sizes');
function basement_image_sizes($sizes) {
  $addsizes = array(
    "small" => __( "Picture Small"),
    "small-retina" => __( "Picture Small Retina"),
    "medium" => __( "Picture Medium"),
    "medium-retina" => __( "Picture Medium Retina"),
    "large" => __( "Picture Large"),
    "large-retina" => __( "Picture Large Retina"),
    );
  $newsizes = array_merge($sizes, $addsizes);
  return $newsizes;
}