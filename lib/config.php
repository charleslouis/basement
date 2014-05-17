<?php
/**
 * Enable theme features
 */
add_theme_support('reverie-relative-urls'); // Enable relative URLs
add_theme_support('rewrites');              // Enable URL rewrites
add_theme_support('nice-search');           // Enable /?s= to /search/ redirect
add_theme_support('jquery-cdn');            // Enable to load jQuery from the Google CDN
add_theme_support('post-thumbnails');       // Add post thumbnail supports. http://codex.wordpress.org/Post_Thumbnails

/**
 * Configuration values
 */
define('GOOGLE_ANALYTICS_ID', 'UA-44566355-1'); // UA-XXXXX-Y
define('POST_EXCERPT_LENGTH', 40);
define('IMAGES', get_template_directory_uri() . '/assets/img');
define('IMAGES_BRANDING', get_template_directory_uri() . '/assets/img/branding');
define('USE_IE_ONLY_STYLE_SHEET', true);


/**
 * $content_width is a global variable used by WordPress for max image upload sizes
 * and media embeds (in pixels).
 *
 * Example: If the content area is 640px wide, set $content_width = 620; so images and videos will not overflow.
 * Default: 1140px is the default Bootstrap container width.
 */
if (!isset($content_width)) { $content_width = 1140; }

/**
 * Define helper constants
 */
$get_theme_name = explode('/themes/', get_template_directory());

define('RELATIVE_PLUGIN_PATH',  str_replace(home_url() . '/', '', plugins_url()));
define('RELATIVE_CONTENT_PATH', str_replace(home_url() . '/', '', content_url()));
define('THEME_NAME',            next($get_theme_name));
define('THEME_PATH',            RELATIVE_CONTENT_PATH . '/themes/' . THEME_NAME);