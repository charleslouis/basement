<?php 
function basement_icons(){
?>
<!-- icons -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo IMAGES_BRANDING; ?>/apple-touch-icon-144x144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo IMAGES_BRANDING; ?>/apple-touch-icon-114x114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo IMAGES_BRANDING; ?>/apple-touch-icon-72x72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="<?php echo IMAGES_BRANDING; ?>/apple-touch-icon-precomposed.png">
<link rel="icon" type="image/png" href="<?php echo IMAGES_BRANDING; ?>/speed-dial-icon.png">
<link rel="shortcut icon" type="image/x-icon" href="<?php echo IMAGES_BRANDING; ?>/favicon.ico" />
<link rel="shortcut icon" type="image/png" href="<?php echo IMAGES_BRANDING; ?>/favicon.png" />
<!-- RSS feeds -->
<link rel="alternate" type="application/rss+xml" title="<?php echo get_bloginfo('name'); ?> Feed" href="<?php echo esc_url(get_feed_link()); ?>">
<!-- For Facebook and co. -->
<link rel="image_src" href="<?php echo IMAGES_BRANDING; ?>/logo-FB.png" />
<!-- This is commented by default as we recommend to use WP-SEO and the latter handle og-iamges
<meta property="og:image" content="<?php echo IMAGES_BRANDING; ?>/icone-FB-300x300.png"/> -->
<?php 
}

add_action('basement_head', 'basement_icons');


