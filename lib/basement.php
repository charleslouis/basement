<?php

/*==========  basement : include all the theme functions  ==========*/
// Simply require_once this file in the function.php


/*
1. hooks.php
  - Basement hooks go there
*/
require_once ('hooks.php');          // Custom functions

/*
2. config.php
  - enable some theme features
  - dsefine some configuration such as GOOGLE_ANALYTICS_ID, POST_EXCERPT_LENGTH or IMAGES folder
*/
require_once ('config.php');         // Configuration

/*
3. clean.php
  - head cleanup
  - post and images related cleaning
*/
require_once('clean.php'); // do all the cleaning and enqueue here

/*
4. enqueue-style.php
    - enqueue Foundation and Basement CSS
*/
require_once('enqueue-style.php');

/*
5. enqueue-scripts.php
    - enqueue Jquery from google CDN with local fallbakc
    - enqueue modernizr
    - enqueue Foundation and Basement uglified JS
*/
require_once('enqueue-scripts.php');

/*
6. foundation.php
  - add pagination
*/
require_once('foundation.php'); // load Foundation specific functions like top-bar

/*
7. nav.php
  - custom walker for top-bar and related
*/
require_once('nav.php'); // filter default wordpress menu classes and clean wp_nav_menu markup

/*
8. presstrends.php
    - add PressTrends, tracks how many people are using Basement
*/
require_once('presstrends.php'); // load PressTrends to track the usage of Basement across the web, comment this line if you don't want to be tracked

/*
9. menus.php
    - register Basement menus (Primary Navigation, Additional Navigation, Utility Navigation)
*/
require_once('init.php');

/*
10. images.php
    - Add a bunch of image sizes supposed to work with interchange.js
    - see http://foundation.zurb.com/docs/components/interchange.html
*/
require_once('images.php');

/*
11. widget-areas.php
    - register widget-areas such as sidebar and footer
*/
require_once('widget-areas.php');

/*
12. meta.php
    - return entry meta information for posts, used by multiple loops
*/
require_once('meta.php');
/*
12. wrapper.php
    - return wrapper 
*/
require_once('wrapper.php');
/*
12. custom.php
    - store your custom functions here
*/
require_once('custom.php');
