Basement
========

[![Based on Foundation](http://foundation.zurb.com/assets/img/support/goodies/why-the-yeti.svg)](http://foundation.zurb.com/)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Basement is a starting Wordpress theme based on [Foundation 5](http://foundation.zurb.com/) whith a bit of [Bourbon](http://bourbon.io/) magic and [Html5 Boilerplate](http://html5boilerplate.com/).
It derives from [Roots](http://roots.io/) and [Reverie](http://themefortress.com/reverie/).
It uses Foundation, Bower, Sass, Libsass and Grunt.

## Prerequisites and dependancies
All the dependencies for Basement are contained contained in package.json (npm) and bower.json (bower).
Before installation, you need to have the following :
- [nodejs](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [bower](http://bower.io/) 

## Installation
Clone the git repo `git clone git@github.com:kartonnade/basement.git` or [download it a zip file](https://github.com/kartonnade/basement/archive/master.zip).
Then run :
````
npm install
bower install
````
Notes: 
- cygwin user : as you might know, [you can't](https://www.npmjs.org/doc/README.html) run `npm install` in cygwin. Use another bash to run it. Once installed, you can, however, run `grunt dev` from cygwin.
- you need to run `grunt dist` once to generate style.css for the first time (excluded in .gitignore)
- bower_components and node_modules are excluded in .gitignore

All in the console you can go like 
````
cd yoursite/wp-content/themes
git clone git@github.com:kartonnade/basement.git
cd basement
npm install
bower install
````

## Theme development and usage
#### Compile and reload
Once installed you can simply use : `grunt dev` during theme development.
This will watch your repo for updates to your SCSS, JS and PHP files and Grunt will automatically :
- compile your SCSS to CSS in a single file in an **expanded style** with **sourcemap** and **debugInfo**
- check your JS using [jshint](http://www.jshint.com/). This can be configured in the .jshintrc file
- ~~uglify~~ beautify your JS in a single file with `console.log()` and comments preserved so that debug is easier
- reload your web page using [livereload](http://livereload.com/) browser extension

#### Optimize images
You might also need to run `grunt img` when you add images (svg/png) to optimize them before storing them in the proper folder (see below).

#### Get ready for production
When you feel ready to go on production, run `grunt dist`. This will automatically :
- compile your SCSS to CSS in a single file in an **compressed style** with no **debugInfo**
- check your JS using [jshint](http://www.jshint.com/). This can be configured in the .jshint file
- uglify your JS in a single file **without** `console.log()` and only some comments preserved
- optimize your images : SVG using [svgmin](https://github.com/sindresorhus/grunt-svgmin) and PNGs using [smushit](https://github.com/heldr/grunt-smushit)

## Configuration
Edit **lib/config.php** to enable or disable support for various theme functions and to define constants that are used throughout the theme such as :
- GOOGLE_ANALYTICS_ID
- DATE_FORMAT (default is dd/mm/yyyy but you can switch to mm/dd/yyyy)
- POST_EXCERPT_LENGTH
- IMAGES (folder)

Edit **lib/init.php** to setup custom navigation menus 

Edit **lib/imgages.php** to setup post thumbnail and custom image size. This is supposed to make things easier for you to implement [interchange.js](http://foundation.zurb.com/docs/components/interchange.html)

Use **lib/custom.php** to store your own functions or, alternatively, use **functions.php**

## Features

#### Menu
* cleaner menu output using basement_walker (derives from root/reverie nav_walker)
* adds `.not-click` css class for dropdown items that have '#' or empty url

## Licence
Basement is released under the MIT License (MIT), the same as Foundation, Roots and Reverie.

