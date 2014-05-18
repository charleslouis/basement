<?php
/**
 * Enable theme features
 */
add_theme_support('basement-relative-urls'); // Enable relative URLs
add_theme_support('rewrites');              // Enable URL rewrites
add_theme_support('nice-search');           // Enable /?s= to /search/ redirect
add_theme_support('jquery-cdn');            // Enable to load jQuery from the Google CDN
add_theme_support('post-thumbnails');       // Add post thumbnail supports. http://codex.wordpress.org/Post_Thumbnails
add_theme_support('automatic-feed-links');  // rss thingy

// Add post formats support. http://codex.wordpress.org/Post_Formats
add_theme_support('post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat'));

add_theme_support('menus'); // Add menu support. http://codex.wordpress.org/Function_Reference/register_nav_menus


/**
 * Configuration values
 */
define('LOAD_FOUNDATION_JS ', true);
define('GOOGLE_ANALYTICS_ID', ''); // UA-XXXXX-Y
define('POST_EXCERPT_LENGTH', 40);
define('USE_IE_ONLY_STYLE_SHEET', true);

define('IMAGES', get_template_directory_uri() . '/assets/img');
define('IMAGES_BRANDING', IMAGES . '/assets/img/branding');

define('DATE_FORMAT', 'j F Y'); 
// English 'F jS, Y'
// French 'j F Y'

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