
<?php
/*
Author: Zhen Huang
URL: http://themefortress.com/

This place is much cleaner. Put your theme specific codes here,
anything else you may want to use plugins to keep things tidy.

*/

/*
1. lib/hooks.php
  - Basement hooks go there
*/
require_once locate_template('lib/hooks.php');          // Custom functions

/*
2. lib/config.php
  - enable some theme features
  - dsefine some configuration such as GOOGLE_ANALYTICS_ID, POST_EXCERPT_LENGTH or IMAGES folder
*/
require_once locate_template('lib/config.php');         // Configuration

/*
3. lib/clean.php
  - head cleanup
	- post and images related cleaning
*/
require_once('lib/clean.php'); // do all the cleaning and enqueue here

/*
4. lib/enqueue-style.php
    - enqueue Foundation and Basement CSS
*/
require_once('lib/enqueue-style.php');

/*
5. lib/enqueue-scripts.php
    - enqueue Jquery from google CDN with local fallbakc
    - enqueue modernizr
    - enqueue Foundation and Basement uglified JS
*/
require_once('lib/enqueue-scripts.php');

/*
6. lib/foundation.php
	- add pagination
*/
require_once('lib/foundation.php'); // load Foundation specific functions like top-bar

/*
7. lib/nav.php
	- custom walker for top-bar and related
*/
require_once('lib/nav.php'); // filter default wordpress menu classes and clean wp_nav_menu markup

/*
8. lib/presstrends.php
    - add PressTrends, tracks how many people are using Basement
*/
require_once('lib/presstrends.php'); // load PressTrends to track the usage of Basement across the web, comment this line if you don't want to be tracked

/*
9. lib/menus.php
    - register Basement menus (Primary Navigation, Additional Navigation, Utility Navigation)
*/
require_once('lib/init.php');

/*
10. lib/images.php
    - Add a bunch of image sizes supposed to work with interchange.js
    - see http://foundation.zurb.com/docs/components/interchange.html
*/
require_once('lib/images.php');

/*
11. lib/widget-areas.php
    - register widget-areas such as sidebar and footer
*/
require_once('lib/widget-areas.php');

/*
12. lib/meta.php
    - return entry meta information for posts, used by multiple loops
*/
require_once('lib/meta.php');

