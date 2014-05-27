/*!==============================================================================
Basement - v1.0.0 - 2014-05-27
 https://github.com/kartonnade/basement/
  ====================BASEMENT ==================== Basement is a WordPress starting theme based on ZURB's [Foundation](http://foundation.zurb.com). Basement derives from [Reverie](https://github.com/milohuang/reverie) and [Roots](https://github.com/roots/roots)
Copyright (c) 2014 undefined
Licenced: MIT Licence 
============================================================================== */
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(a, b, c, d) {
    "use strict";
    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), 
        a;
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--; ) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />');
    };
    f([ "foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace" ]), 
    // Enable FastClick if present
    a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body);
    });
    // private Fast Selector wrapper,
    // returns jQuery object. Only use where
    // getElementById is not available.
    var g = function(b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0], !e) return d;
                } else e = d;
                return a(e.querySelectorAll(b));
            }
            return a(c.querySelectorAll(b));
        }
        return a(b, d);
    }, h = function(a) {
        var b = [];
        return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), 
        b.push(this.name), b.join("-");
    }, i = function(a) {
        for (var b = a.split("-"), c = b.length, d = []; c--; ) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
        return d.reverse().join("-");
    }, j = function(b, c) {
        var d = this, e = !g(this).data(this.attr_name(!0));
        return "string" == typeof b ? this[b].call(this, c) : void (g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), 
        e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function() {
            var e = !g(this).data(d.attr_name(!0) + "-init");
            g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), 
            e && d.events(this);
        }));
    }, k = function(a, b) {
        function c() {
            b(a[0]);
        }
        function d() {
            if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                b += "random=" + new Date().getTime(), this.attr("src", a + b);
            }
        }
        return a.attr("src") ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c();
    };
    /*
    https://github.com/paulirish/matchMedia.js
  */
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, // fakeBody required for <FF4 when executed in <head>
        e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(c), /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
    function() {
        function a() {
            c && (f(a), h && jQuery.fx.tick());
        }
        for (// requestAnimationFrame polyfill adapted from Erik Möller
        // fixes from Paul Irish and Tino Zijdel
        // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
        var c, d = 0, e = [ "webkit", "moz" ], f = b.requestAnimationFrame, g = b.cancelAnimationFrame, h = "undefined" != typeof jQuery.fx; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], 
        g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
        f ? (// use rAF
        b.requestAnimationFrame = f, b.cancelAnimationFrame = g, h && (jQuery.fx.timer = function(b) {
            b() && jQuery.timers.push(b) && !c && (c = !0, a());
        }, jQuery.fx.stop = function() {
            c = !1;
        })) : (// polyfill
        b.requestAnimationFrame = function(a) {
            var c = new Date().getTime(), e = Math.max(0, 16 - (c - d)), f = b.setTimeout(function() {
                a(c + e);
            }, e);
            return d = c + e, f;
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
    }(jQuery), b.Foundation = {
        name: "Foundation",
        version: "5.2.2",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function(a, b, c, d, e) {
            var f = [ a, c, d, e ], h = [];
            if (// check RTL
            this.rtl = /rtl/i.test(g("html").attr("dir")), // set foundation global scope
            this.scope = a || this.scope, this.set_namespace(), b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f)); else for (var i in this.libs) h.push(this.init_lib(i, b));
            return a;
        },
        init_lib: function(b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), 
            this.libs[b].init.apply(this.libs[b], [ this.scope, c[b] ])) : (c = c instanceof Array ? c : new Array(c), 
            this.libs[b].init.apply(this.libs[b], c))) : function() {};
        },
        patch: function(a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, 
            a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S;
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length; d--; ) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]]);
        },
        set_namespace: function() {
            // Description:
            //    Don't bother reading the namespace out of the meta tag
            //    if the namespace has been set globally in javascript
            //
            // Example: 
            //    Foundation.global.namespace = 'my-namespace';
            // or make it an empty string:
            //    Foundation.global.namespace = '';
            //
            //
            // If the namespace has not been set (is undefined), try to read it out of the meta element. 
            // Otherwise use the globally defined namespace, even if it's empty ('')
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            // Finally, if the namsepace is either undefined or false, set it to an empty string. 
            // Otherwise use the namespace value.
            this.global.namespace = b === d || /false/i.test(b) ? "" : b;
        },
        libs: {},
        // methods that can be inherited in libraries
        utils: {
            // Description:
            //    Fast Selector wrapper returns jQuery object. Only use where getElementById 
            //    is not available.
            //
            // Arguments:
            //    Selector (String): CSS selector describing the element(s) to be 
            //    returned as a jQuery object.
            //
            //    Scope (String): CSS selector describing the area to be searched. Default 
            //    is document.
            //
            // Returns:
            //    Element (jQuery Object): jQuery object containing elements matching the 
            //    selector within the scope.
            S: g,
            // Description:
            //    Executes a function a max of once every n milliseconds 
            //
            // Arguments:
            //    Func (Function): Function to be throttled.
            //
            //    Delay (Integer): Function execution threshold in milliseconds.
            //
            // Returns:
            //    Lazy_function (Function): Function with throttling applied.
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e), c = null;
                    }, b));
                };
            },
            // Description:
            //    Executes a function when it stops being invoked for n seconds
            //    Modified version of _.debounce() http://underscorejs.org
            //
            // Arguments:
            //    Func (Function): Function to be debounced.
            //
            //    Delay (Integer): Function execution threshold in milliseconds.
            // 
            //    Immediate (Bool): Whether the function should be called at the beginning 
            //    of the delay instead of the end. Default is false.
            //
            // Returns:
            //    Lazy_function (Function): Function with debouncing applied.
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this, g = arguments, h = function() {
                        d = null, c || (e = a.apply(f, g));
                    }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
                };
            },
            // Description:
            //    Parses data-options attribute
            //
            // Arguments:
            //    El (jQuery Object): Element to be parsed.
            //
            // Returns:
            //    Options (Javascript Object): Contents of the element's data-options 
            //    attribute.
            data_options: function(b) {
                function c(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0;
                }
                function d(b) {
                    return "string" == typeof b ? a.trim(b) : b;
                }
                var e, f, g, h = {}, i = function(a) {
                    var b = Foundation.global.namespace;
                    return a.data(b.length > 0 ? b + "-options" : "options");
                }, j = i(b);
                if ("object" == typeof j) return j;
                for (g = (j || ":").split(";"), e = g.length; e--; ) f = g[e].split(":"), /true/i.test(f[1]) && (f[1] = !0), 
                /false/i.test(f[1]) && (f[1] = !1), c(f[1]) && (f[1] = -1 === f[1].indexOf(".") ? parseInt(f[1], 10) : parseFloat(f[1])), 
                2 === f.length && f[0].length > 0 && (h[d(f[0])] = d(f[1]));
                return h;
            },
            // Description:
            //    Adds JS-recognizable media queries
            //
            // Arguments:
            //    Media (String): Key string for the media query to be stored as in 
            //    Foundation.media_queries
            //
            //    Class (String): Class name for the generated <meta> tag
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), 
                Foundation.media_queries[b] = e(a("." + c).css("font-family")));
            },
            // Description:
            //    Add custom CSS within a JS-defined media query
            //
            // Arguments:
            //    Rule (String): CSS rule to be appended to the document.
            //
            //    Media (String): Optional media query string for the CSS rule to be 
            //    nested under.
            add_custom_rule: function(a, b) {
                if (b === d) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }");
                }
            },
            // Description:
            //    Performs a callback function when an image is fully loaded
            //
            // Arguments:
            //    Image (jQuery Object): Image(s) to check if loaded.
            //
            //    Callback (Function): Fundation to execute when image is fully loaded.
            image_loaded: function(a, b) {
                var c = this, d = a.length;
                0 === d && b(a), a.each(function() {
                    k(c.S(this), function() {
                        d -= 1, 0 === d && b(a);
                    });
                });
            },
            // Description:
            //    Returns a random, alphanumeric string
            //
            // Arguments:
            //    Length (Integer): Length of string to be generated. Defaults to random 
            //    integer.
            //
            // Returns:
            //    Rand (String): Pseudo-random, alphanumeric string.
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [ this.name || "F", (+new Date()).toString(36) ].join("-"), 
                this.prefix + (this.fidx++).toString(36);
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [ this ].concat(a)), this;
        });
    };
}(jQuery, this, this.document), function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.2.2",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    // The trigger argument, if called within the directive, fires
                    // an event named after the directive on the element, passing
                    // any parameters along to the event that you pass to trigger.
                    //
                    // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)
                    //
                    // This allows you to bind a callback like so:
                    // $('#interchangeContainer').on('replace', function (e, a, b, c) {
                    //   console.log($(this).html(), a, b, c);
                    // });
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e)) return;
                        return b[0].src = c, d(b[0].src);
                    }
                    var f = b.data(this.data_attr + "-last-path");
                    if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), 
                    b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                        b.html(a), b.data(this.data_attr + "-last-path", c), d();
                    });
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), 
            a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes");
        },
        get_media_hash: function() {
            var a = "";
            for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
            return a;
        },
        events: function() {
            var c, d = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                var a = d.get_media_hash();
                a !== c && d.resize(), c = a;
            }, 50)), this;
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = this.results(c, b[c]);
                d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function() {
                    if (arguments[0] instanceof Array) var a = arguments[0]; else var a = Array.prototype.slice.call(arguments, 0);
                    d.el.trigger(d.scenario[1], a);
                });
            }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0) for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--; ) {
                var e, f = b[c][2];
                if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), 
                e.matches) return {
                    el: d,
                    scenario: b[c]
                };
            }
            return !1;
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), 
            this["cached_" + a];
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"), b = a.length, c = b, d = 0, e = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--; ) {
                if (d++, a[c]) {
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_images.push(a[c]);
                }
                d === b && (this.images_loaded = !0, this.enhance("images"));
            }
            return this;
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"), b = a.length, c = b, d = 0, e = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--; ) {
                d++;
                var f = a[c].getAttribute(e) || "";
                f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, 
                this.enhance("nodes"));
            }
            return this;
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length; d--; ) this.object(a(this["cached_" + c][d]));
            return a(b).trigger("resize");
        },
        parse_params: function(a, b, c) {
            return [ this.trim(a), this.convert_directive(b), this.trim(c) ];
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace";
        },
        object: function(a) {
            var b = this.parse_data_attr(a), c = [], d = b.length;
            if (d > 0) for (;d--; ) {
                var e = b[d].split(/\((.*?)(\))$/);
                if (e.length > 1) {
                    var f = e[0].split(","), g = this.parse_params(f[0], f[1], e[1]);
                    c.push(g);
                }
            }
            return this.store(a, c);
        },
        store: function(a, b) {
            var c = this.random_str(), d = a.data(this.add_namespace("uuid", !0));
            return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), 
            this.cache[c] = b);
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b;
        },
        set_data_attr: function(a) {
            return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr;
        },
        parse_data_attr: function(a) {
            for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--; ) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
            return d;
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0);
        }
    };
}(jQuery, this, this.document), function(a, b, c) {
    "use strict";
    var d = function() {}, e = function(d, e) {
        // Don't reinitialize plugin
        if (d.hasClass(e.slides_container_class)) return this;
        var h, i, j, k, l, m = this, n = d, o = 0, p = n.find("." + e.active_slide_class).length > 0;
        m.cache = {}, m.slides = function() {
            return n.children(e.slide_selector);
        }, p || m.slides().first().addClass(e.active_slide_class), m.update_slide_number = function(b) {
            e.slide_number && (i.find("span:first").text(parseInt(b) + 1), i.find("span:last").text(m.slides().length)), 
            e.bullets && (j.children().removeClass(e.bullets_active_class), a(j.children().get(b)).addClass(e.bullets_active_class));
        }, m.update_active_link = function(b) {
            var c = a('[data-orbit-link="' + m.slides().eq(b).attr("data-orbit-slide") + '"]');
            c.siblings().removeClass(e.bullets_active_class), c.addClass(e.bullets_active_class);
        }, m.build_markup = function() {
            n.wrap('<div class="' + e.container_class + '"></div>'), h = n.parent(), n.addClass(e.slides_container_class), 
            n.addClass(e.animation), e.stack_on_small && h.addClass(e.stack_on_small_class), 
            e.navigation_arrows && (h.append(a('<a href="#"><span></span></a>').addClass(e.prev_class)), 
            h.append(a('<a href="#"><span></span></a>').addClass(e.next_class))), e.timer && (k = a("<div>").addClass(e.timer_container_class), 
            k.append("<span>"), e.timer_show_progress_bar && k.append(a("<div>").addClass(e.timer_progress_class)), 
            k.addClass(e.timer_paused_class), h.append(k)), e.slide_number && (i = a("<div>").addClass(e.slide_number_class), 
            i.append("<span></span> " + e.slide_number_text + " <span></span>"), h.append(i)), 
            e.bullets && (j = a("<ol>").addClass(e.bullets_container_class), h.append(j), j.wrap('<div class="orbit-bullets-container"></div>'), 
            m.slides().each(function(b) {
                var c = a("<li>").attr("data-orbit-slide", b);
                j.append(c);
            }));
        }, m._prepare_direction = function(b) {
            var c = "next";
            o >= b && (c = "prev"), "slide" === e.animation && setTimeout(function() {
                n.removeClass("swipe-prev swipe-next"), "next" === c ? n.addClass("swipe-next") : "prev" === c && n.addClass("swipe-prev");
            }, 0);
            var d = m.slides();
            if (b >= d.length) {
                if (!e.circular) return !1;
                b = 0;
            } else if (0 > b) {
                if (!e.circular) return !1;
                b = d.length - 1;
            }
            var f = a(d.get(o)), g = a(d.get(b));
            return [ c, f, g, b ];
        }, m._goto = function(a, b) {
            if (null === a) return !1;
            if (m.cache.animating) return !1;
            if (a === o) return !1;
            "object" == typeof m.cache.timer && m.cache.timer.restart();
            var c = m.slides();
            m.cache.animating = !0;
            var d = m._prepare_direction(a), f = d[0], g = d[1], h = d[2], a = d[3];
            // This means that circular is disabled and we most likely reached the last slide.
            if (d === !1) return !1;
            n.trigger("before-slide-change.fndtn.orbit"), e.before_slide_change(), o = a, g.css("transitionDuration", e.animation_speed + "ms"), 
            h.css("transitionDuration", e.animation_speed + "ms");
            var i = function() {
                var d = function() {
                    b === !0 && m.cache.timer.restart(), m.update_slide_number(o), h.addClass(e.active_slide_class), 
                    m.update_active_link(a), n.trigger("after-slide-change.fndtn.orbit", [ {
                        slide_number: o,
                        total_slides: c.length
                    } ]), e.after_slide_change(o, c.length), setTimeout(function() {
                        m.cache.animating = !1;
                    }, 100);
                };
                n.height() != h.height() && e.variable_height ? n.animate({
                    height: h.height()
                }, 250, "linear", d) : d();
            };
            if (1 === c.length) return i(), !1;
            var j = function() {
                "next" === f && l.next(g, h, i), "prev" === f && l.prev(g, h, i);
            };
            h.height() > n.height() && e.variable_height ? n.animate({
                height: h.height()
            }, 250, "linear", j) : j();
        }, m.next = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), m._prepare_direction(o + 1), setTimeout(function() {
                m._goto(o + 1);
            }, 100);
        }, m.prev = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), m._prepare_direction(o - 1), setTimeout(function() {
                m._goto(o - 1);
            }, 100);
        }, m.link_custom = function(b) {
            b.preventDefault();
            var c = a(this).attr("data-orbit-link");
            if ("string" == typeof c && "" != (c = a.trim(c))) {
                var d = h.find("[data-orbit-slide=" + c + "]");
                -1 != d.index() && setTimeout(function() {
                    m._goto(d.index());
                }, 100);
            }
        }, m.link_bullet = function() {
            var b = a(this).attr("data-orbit-slide");
            if ("string" == typeof b && "" != (b = a.trim(b))) if (isNaN(parseInt(b))) {
                var c = h.find("[data-orbit-slide=" + b + "]");
                -1 != c.index() && setTimeout(function() {
                    m._goto(c.index() + 1);
                }, 100);
            } else setTimeout(function() {
                m._goto(parseInt(b));
            }, 100);
        }, m.timer_callback = function() {
            m._goto(o + 1, !0);
        }, m.compute_dimensions = function() {
            var b = a(m.slides().get(o)), c = b.height();
            e.variable_height || m.slides().each(function() {
                a(this).height() > c && (c = a(this).height());
            }), n.height(c);
        }, m.create_timer = function() {
            var a = new f(h.find("." + e.timer_container_class), e, m.timer_callback);
            return a;
        }, m.stop_timer = function() {
            "object" == typeof m.cache.timer && m.cache.timer.stop();
        }, m.toggle_timer = function() {
            var a = h.find("." + e.timer_container_class);
            a.hasClass(e.timer_paused_class) ? ("undefined" == typeof m.cache.timer && (m.cache.timer = m.create_timer()), 
            m.cache.timer.start()) : "object" == typeof m.cache.timer && m.cache.timer.stop();
        }, m.init = function() {
            if (m.build_markup(), e.timer && (m.cache.timer = m.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), m.cache.timer.start)), 
            l = new g(e, n), p) {
                var d = n.find("." + e.active_slide_class), f = e.animation_speed;
                e.animation_speed = 1, d.removeClass("active"), m._goto(d.index()), e.animation_speed = f;
            }
            h.on("click", "." + e.next_class, m.next), h.on("click", "." + e.prev_class, m.prev), 
            e.next_on_click && h.on("click", "[data-orbit-slide]", m.link_bullet), h.on("click", m.toggle_timer), 
            e.swipe && n.on("touchstart.fndtn.orbit", function(a) {
                m.cache.animating || (a.touches || (a = a.originalEvent), a.preventDefault(), a.stopPropagation(), 
                m.cache.start_page_x = a.touches[0].pageX, m.cache.start_page_y = a.touches[0].pageY, 
                m.cache.start_time = new Date().getTime(), m.cache.delta_x = 0, m.cache.is_scrolling = null, 
                m.cache.direction = null, m.stop_timer());
            }).on("touchmove.fndtn.orbit", function(a) {
                Math.abs(m.cache.delta_x) > 5 && (a.preventDefault(), a.stopPropagation()), m.cache.animating || requestAnimationFrame(function() {
                    // Ignore pinch/zoom events
                    if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale || (m.cache.delta_x = a.touches[0].pageX - m.cache.start_page_x, 
                    null === m.cache.is_scrolling && (m.cache.is_scrolling = !!(m.cache.is_scrolling || Math.abs(m.cache.delta_x) < Math.abs(a.touches[0].pageY - m.cache.start_page_y))), 
                    m.cache.is_scrolling))) {
                        var b = m.cache.delta_x < 0 ? o + 1 : o - 1;
                        if (m.cache.direction !== b) {
                            var c = m._prepare_direction(b);
                            m.cache.direction = b, m.cache.dir = c[0], m.cache.current = c[1], m.cache.next = c[2];
                        }
                        if ("slide" === e.animation) {
                            var d, f;
                            d = m.cache.delta_x / h.width() * 100, f = d >= 0 ? -(100 - d) : 100 + d, m.cache.current.css("transform", "translate3d(" + d + "%,0,0)"), 
                            m.cache.next.css("transform", "translate3d(" + f + "%,0,0)");
                        }
                    }
                });
            }).on("touchend.fndtn.orbit", function(a) {
                m.cache.animating || (a.preventDefault(), a.stopPropagation(), setTimeout(function() {
                    m._goto(m.cache.direction);
                }, 50));
            }), h.on("mouseenter.fndtn.orbit", function() {
                e.timer && e.pause_on_hover && m.stop_timer();
            }).on("mouseleave.fndtn.orbit", function() {
                e.timer && e.resume_on_mouseout && m.cache.timer.start();
            }), a(c).on("click", "[data-orbit-link]", m.link_custom), a(b).on("load resize", m.compute_dimensions);
            var i = this.slides().find("img");
            Foundation.utils.image_loaded(i, m.compute_dimensions), Foundation.utils.image_loaded(i, function() {
                h.prev("." + e.preloader_class).css("display", "none"), m.update_slide_number(o), 
                m.update_active_link(o), n.trigger("ready.fndtn.orbit");
            });
        }, m.init();
    }, f = function(a, b, c) {
        var d, e, f = this, g = b.timer_speed, h = a.find("." + b.timer_progress_class), i = h && "none" != h.css("display"), j = -1;
        this.update_progress = function(a) {
            var b = h.clone();
            b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b;
        }, this.restart = function() {
            clearTimeout(e), a.addClass(b.timer_paused_class), j = -1, i && f.update_progress(0), 
            f.start();
        }, this.start = function() {
            return a.hasClass(b.timer_paused_class) ? (j = -1 === j ? g : j, a.removeClass(b.timer_paused_class), 
            i && (d = new Date().getTime(), h.animate({
                width: "100%"
            }, j, "linear")), e = setTimeout(function() {
                f.restart(), c();
            }, j), void a.trigger("timer-started.fndtn.orbit")) : !0;
        }, this.stop = function() {
            if (a.hasClass(b.timer_paused_class)) return !0;
            if (clearTimeout(e), a.addClass(b.timer_paused_class), i) {
                var c = new Date().getTime();
                j -= c - d;
                var h = 100 - j / g * 100;
                f.update_progress(h);
            }
            a.trigger("timer-stopped.fndtn.orbit");
        };
    }, g = function(a, b) {
        var c = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
        this.next = function(d, e, f) {
            Modernizr.csstransitions ? e.on(c, function() {
                e.unbind(c), d.removeClass("active animate-out"), e.removeClass("animate-in"), b.children().css({
                    transform: "",
                    "-ms-transform": "",
                    "-webkit-transition-duration": "",
                    "-moz-transition-duration": "",
                    "-o-transition-duration": "",
                    "transition-duration": ""
                }), f();
            }) : setTimeout(function() {
                d.removeClass("active animate-out"), e.removeClass("animate-in"), b.children().css({
                    transform: "",
                    "-ms-transform": "",
                    "-webkit-transition-duration": "",
                    "-moz-transition-duration": "",
                    "-o-transition-duration": "",
                    "transition-duration": ""
                }), f();
            }, a.animation_speed), b.children().css({
                transform: "",
                "-ms-transform": "",
                "-webkit-transition-duration": "",
                "-moz-transition-duration": "",
                "-o-transition-duration": "",
                "transition-duration": ""
            }), d.addClass("animate-out"), e.addClass("animate-in");
        }, this.prev = function(d, e, f) {
            Modernizr.csstransitions ? e.on(c, function() {
                e.unbind(c), d.removeClass("active animate-out"), e.removeClass("animate-in"), b.children().css({
                    transform: "",
                    "-ms-transform": "",
                    "-webkit-transition-duration": "",
                    "-moz-transition-duration": "",
                    "-o-transition-duration": "",
                    "transition-duration": ""
                }), f();
            }) : setTimeout(function() {
                d.removeClass("active animate-out"), e.removeClass("animate-in"), b.children().css({
                    transform: "",
                    "-ms-transform": "",
                    "-webkit-transition-duration": "",
                    "-moz-transition-duration": "",
                    "-o-transition-duration": "",
                    "transition-duration": ""
                }), f();
            }, a.animation_speed), b.children().css({
                transform: "",
                "-ms-transform": "",
                "-webkit-transition-duration": "",
                "-moz-transition-duration": "",
                "-o-transition-duration": "",
                "transition-duration": ""
            }), d.addClass("animate-out"), e.addClass("animate-in");
        };
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.2.2",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            timer_show_progress_bar: !0,
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: d,
            after_slide_change: d
        },
        init: function(a, b, c) {
            this.bindings(b, c);
        },
        events: function(a) {
            var b = new e(this.S(a), this.S(a).data("orbit-init"));
            this.S(a).data(self.name + "-instance", b);
        },
        reflow: function() {
            var a = this;
            if (a.S(a.scope).is("[data-orbit]")) {
                var b = a.S(a.scope), c = b.data(a.name + "-instance");
                c.compute_dimensions();
            } else a.S("[data-orbit]", a.scope).each(function(b, c) {
                var d = a.S(c), e = (a.data_options(d), d.data(a.name + "-instance"));
                e.compute_dimensions();
            });
        }
    };
}(jQuery, this, this.document), function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.2.2",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            is_hover: !0,
            mobile_show_parent_link: !1,
            scrolltop: !0,
            // jump to top when sticky nav menu toggle is clicked
            sticky_on: "all"
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this), c = b.data(e.attr_name(!0) + "-init");
                    e.S("section", this), b.children().filter("ul").first();
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, 
                e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), 
                c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), 
                // Pad body when sticky (scrolled) or fixed.
                e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), 
                d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed");
            });
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class);
            return d && "all" === c.sticky_on ? !0 : d && this.small() && "small" === c.sticky_on ? !0 : d && this.medium() && "medium" === c.sticky_on ? !0 : d && this.large() && "large" === c.sticky_on ? !0 : !1;
        },
        toggle: function(c) {
            var d = this;
            if (c) var e = d.S(c).closest("[" + this.attr_name() + "]"); else var e = d.S("[" + this.attr_name() + "]");
            var f = e.data(this.attr_name(!0) + "-init"), g = d.S("section, .section", e);
            d.breakpoint() && (d.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), d.S("li.moved", g).removeClass("moved"), e.data("index", 0), e.toggleClass("expanded").css("height", "")), 
            f.scrolltop ? e.hasClass("expanded") ? e.parent().hasClass("fixed") && (f.scrolltop ? (e.parent().removeClass("fixed"), 
            e.addClass("fixed"), d.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : e.parent().removeClass("expanded")) : e.hasClass("fixed") && (e.parent().addClass("fixed"), 
            e.removeClass("fixed"), d.S("body").addClass("f-topbar-fixed")) : (d.is_sticky(e, e.parent(), f) && e.parent().addClass("fixed"), 
            e.parent().hasClass("fixed") && (e.hasClass("expanded") ? (e.addClass("fixed"), 
            e.parent().addClass("expanded"), d.S("body").addClass("f-topbar-fixed")) : (e.removeClass("fixed"), 
            e.parent().removeClass("expanded"), d.update_sticky_positioning())));
        },
        timer: null,
        events: function() {
            var c = this, d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this);
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li");
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle();
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this), f = d(b.target), g = e.closest("[" + c.attr_name() + "]"), h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void (c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), 
                e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), 
                a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())));
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
                    var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .section"), g = (b.next(".dropdown").outerHeight(), 
                    b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"));
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c);
            }, 50)).trigger("resize"), d("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover");
            }), // Go up a level on Click
            d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
                var b = d(this), e = b.closest("[" + c.attr_name() + "]"), f = e.find("section, .section"), g = (e.data(c.attr_name(!0) + "-init"), 
                b.closest("li.moved")), h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), 
                setTimeout(function() {
                    g.removeClass("moved");
                }, 300);
            });
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this), e = d.data(a.attr_name(!0) + "-init"), f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d);
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (// Remove the fixed to allow for correct calculation of the offset.
                f.removeClass("fixed"), b = f.offset().top, a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), 
                d.data("stickyoffset", b), f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)));
            });
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches;
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches;
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches;
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches;
        },
        assemble: function(b) {
            {
                var c = this, d = b.data(this.attr_name(!0) + "-init"), e = c.S("section", b);
                a(this).children().filter("ul").first();
            }
            // Pull element out of the DOM for manipulation
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b = c.S(this), e = b.siblings(".dropdown"), f = b.attr("href");
                if (!e.find(".title.back").length) {
                    if (d.mobile_show_parent_link && f && f.length > 1) var g = a('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + f + '">' + b.text() + "</a></li>"); else var g = a('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                    a("h5>a", g).html(// Copy link to subnav
                    1 == d.custom_back_text ? d.back_text : "&laquo; " + b.html()), e.prepend(g);
                }
            }), // Put element back in the DOM
            e.appendTo(b), // check for sticky
            this.sticky(), this.assembled(b);
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }));
        },
        height: function(b) {
            var c = 0, d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0);
            }), c;
        },
        sticky: function() {
            var a = (this.S(b), this);
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning();
            });
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class, c = this.S(b), d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), 
                d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), 
                d.S("body").removeClass("f-topbar-fixed")));
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar");
        },
        reflow: function() {}
    };
}(jQuery, this, this.document), console.log("Hello Basement");