<?php
//This is where you can paste your own functions

function shortlink_by_id( $post_id ) {
  return home_url().'/?p='.$post_id;
}

// This displays the date as dd/mm/yyyy (instead of mm/dd/yyyy)
// Comment if not needed
function locale_date($field_name, $format = "%A %#d %B %Y"){
	setlocale(LC_TIME, '');
	return strftime($format, strtotime(get_field($field_name)));
}