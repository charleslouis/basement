/*! Basement - v1.0.0 - 2014-05-17
* Copyright (c) 2014 ; Licensed  */
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
    a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body);
    });
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
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(c), function() {
        function a() {
            c && (f(a), h && jQuery.fx.tick());
        }
        for (var c, d = 0, e = [ "webkit", "moz" ], f = b.requestAnimationFrame, g = b.cancelAnimationFrame, h = "undefined" != typeof jQuery.fx; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], 
        g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
        f ? (b.requestAnimationFrame = f, b.cancelAnimationFrame = g, h && (jQuery.fx.timer = function(b) {
            b() && jQuery.timers.push(b) && !c && (c = !0, a());
        }, jQuery.fx.stop = function() {
            c = !1;
        })) : (b.requestAnimationFrame = function(a) {
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
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, 
            this.set_namespace(), b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f)); else for (var i in this.libs) h.push(this.init_lib(i, b));
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
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b;
        },
        libs: {},
        utils: {
            S: g,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e), c = null;
                    }, b));
                };
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this, g = arguments, h = function() {
                        d = null, c || (e = a.apply(f, g));
                    }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
                };
            },
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
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), 
                Foundation.media_queries[b] = e(a("." + c).css("font-family")));
            },
            add_custom_rule: function(a, b) {
                if (b === d) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }");
                }
            },
            image_loaded: function(a, b) {
                var c = this, d = a.length;
                0 === d && b(a), a.each(function() {
                    k(c.S(this), function() {
                        d -= 1, 0 === d && b(a);
                    });
                });
            },
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
}(jQuery, this, this.document), console.log("Hello Basement");