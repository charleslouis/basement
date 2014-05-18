Basement
========

Basement is a starting Wordpress theme based on [Foundation 5](http://foundation.zurb.com/) whith a bit of [Bourbon](http://bourbon.io/) magic and [Html5 Bolierplate](http://html5boilerplate.com/).
It derives from [Roots](http://roots.io/) and [Reverie](http://themefortress.com/reverie/).
It uses Foundation, Bower, Sass, Libsass and Grunt.

## Prerequisites and dependancies
All the dependencies for Basement are contained contained in package.json `npm install` and bower.json `bower install``:
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

All in the console you can go like 
````
cd yoursite/wp-content/themes
git clone git@github.com:kartonnade/basement.git
npm install
bower install
````

## Theme development
Once installed you can simply use : `grunt dev` during theme development.
This will watch your repo for updates to your SCSS, JS and PHP files and Grunt will automatically :
- compile your SCSS to CSS in a single file in an **expanded style** with **sourcemap** and **debugInfo**
- check your JS using [jshint](http://www.jshint.com/). This can be configured in the .jshint file
- ~~uglify~~ beautify your JS in a single file with `console.log()` and comments preserved so that debug is easier
- reload your web page using [livereload](http://livereload.com/) browser extension

When you feel ready to go on production, run `grunt dist`. This will automatically :
- compile your SCSS to CSS in a single file in an **compressed style** with no **debugInfo**
- check your JS using [jshint](http://www.jshint.com/). This can be configured in the .jshint file
- **uglify** your JS in a single file **without** `console.log()` and only some comments preserved
- optimize your images :
-- SVG using [grunt svgmin](https://github.com/sindresorhus/grunt-svgmin)
-- PNGs using [grunt smushit](https://github.com/heldr/grunt-smushit)


You might also need to run `grunt img` when you add images (svg/png) to optimize them before storing them in the proper folder.


## Licence
Basement is released under the MIT License (MIT), the same as Foundation, Roots and Reverie.

