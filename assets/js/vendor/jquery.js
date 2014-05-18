/*! Basement - v1.0.0 - 2014-05-18
* [object Object]
* Copyright (c) 2014 ; Licensed  */
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
!function(a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    // Convert String-formatted options into Object-formatted ones and store in cache
    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e() {
        // Support: Android < 4,
        // Old WebKit does not have Object.preventExtensions/freeze method,
        // return new empty object instead with no [[set]] accessor
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = fb.expando + Math.random();
    }
    function f(a, c, d) {
        var e;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (d === b && 1 === a.nodeType) if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), 
        d = a.getAttribute(e), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : // Only convert to a number if it doesn't change the string
                +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d;
            } catch (f) {}
            // Make sure we set the data so it isn't changed later
            pb.set(a, c, d);
        } else d = b;
        return d;
    }
    function g() {
        return !0;
    }
    function h() {
        return !1;
    }
    function i() {
        try {
            return T.activeElement;
        } catch (a) {}
    }
    function j(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    // Implement the identical functionality for filter and not
    function k(a, b, c) {
        if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
            /* jshint -W018 */
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return fb.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Cb.test(b)) return fb.filter(b, a, c);
            b = fb.filter(b, a);
        }
        return fb.grep(a, function(a) {
            return bb.call(b, a) >= 0 !== c;
        });
    }
    // Support: 1.x compatibility
    // Manipulating tables requires a tbody
    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    // Mark scripts as having already been evaluated
    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"));
    }
    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            // 1. Copy private data: events, handlers, etc.
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fb.event.add(b, e, j[e][c]);
            }
            // 2. Copy user data
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i));
        }
    }
    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([ a ], d) : d;
    }
    // Support: IE >= 9
    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    // return a css property mapped to a potentially vendor prefixed property
    function s(a, b) {
        // shortcut for names that are not vendor prefixed
        if (b in a) return b;
        for (// check for vendor prefixed names
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--; ) if (b = _b[e] + c, 
        b in a) return b;
        return d;
    }
    function t(a, b) {
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a);
    }
    // NOTE: we've included the "window" in window.getComputedStyle
    // because jsdom on node.js will break without it.
    function u(b) {
        return a.getComputedStyle(b, null);
    }
    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), 
        c = d.style.display, b ? (// Reset the inline display of this element to learn if it is
        // being hidden by cascaded rules or not
        f[g] || "none" !== c || (d.style.display = ""), // Set elements which have been overridden with display: none
        // in a stylesheet to whatever the default browser style is
        // for such an element
        "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), 
        (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function w(a, b, c) {
        var d = Ub.exec(b);
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
        4 : // Otherwise initialize for horizontal or vertical properties
        "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) // both box models exclude margin, so add it if we want it
        "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), d ? (// border-box includes padding, so remove it if we want content
        "content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), // at this point, extra isn't border nor margin, so remove border
        "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (// at this point, extra isn't content, so add padding
        g += fb.css(a, "padding" + $b[f], !0, e), // at this point, extra isn't content nor padding, so add border
        "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g;
    }
    function y(a, b, c) {
        // Start with offset property, which is equivalent to the border-box value
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if (0 >= e || null == e) {
            // Computed unit is not pixels. Stop here and return.
            if (// Fall back to computed then uncomputed css if necessary
            e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e)) return e;
            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), // Normalize "", auto, and prepare for extra
            e = parseFloat(e) || 0;
        }
        // use the active box-sizing model to add/subtract irrelevant styles
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    // Try to determine the default display value of an element
    function z(a) {
        var b = T, c = Xb[a];
        // If the simple way fails, read from inside an iframe
        // Use the already-created iframe if possible
        // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
        // Store the correct default display
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c;
    }
    // Called ONLY from within css_defaultDisplay
    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d;
    }
    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b)) // Serialize array item.
        fb.each(b, function(b, e) {
            c || bc.test(a) ? // Treat each array item as a scalar.
            d(a, e) : // Item is non-scalar (array or object), encode its numeric index.
            B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== fb.type(b)) // Serialize scalar item.
        d(a, b); else // Serialize object item.
        for (e in b) B(a + "[" + e + "]", b[e], c, d);
    }
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function C(a) {
        // dataTypeExpression is optional and defaults to "*"
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c)) // For each dataType in the dataTypeExpression
            for (;d = f[e++]; ) // Prepend if requested
            "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    // Base inspection function for prefilters and transports
    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
    function F(a, c, d) {
        // Remove auto dataType and get content-type in the process
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        // Check if we're dealing with a known content-type
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break;
        }
        // Check to see if we have a response for the expected dataType
        if (j[0] in d) g = j[0]; else {
            // Try convertible dataTypes
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break;
                }
                h || (h = f);
            }
            // Or just use first one
            g = g || h;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        k = a.dataTypes.slice();
        // Create converters map with lowercased keys
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        // Convert to each sequential dataType
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        // Apply the dataFilter if provided
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) // There's only work to do if current dataType is non-auto
        if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            // If none found, seek a pair
            if (// Seek a direct converter
            g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (// If conv2 outputs current
            h = e.split(" "), h[1] === f && (// If prev can be converted to accepted input
            g = j[i + " " + h[0]] || j["* " + h[0]])) {
                // Condense equivalence converters
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            // Apply converter (if not an equivalence)
            if (g !== !0) // Unless errors are allowed to bubble, catch and return them
            if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    // Animations created synchronously will run synchronously
    function H() {
        return setTimeout(function() {
            Bc = b;
        }), Bc = fb.now();
    }
    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) // we're done with this property
        return d;
    }
    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function() {
            // don't match elem in the :animated selector
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
            d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: fb.extend({}, b),
            opts: fb.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Bc || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, // if we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                // resolve when we played the last frame
                // otherwise, reject
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++) if (d = Gc[f].call(j, a, k, j.opts)) return d;
        // attach callbacks from options
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function K(a, b) {
        var c, d, e, f, g;
        // camelCase, specialEasing and expand cssHook pass
        for (c in a) if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            // not quite $.extend, this wont overwrite keys already present.
            // also - reusing 'index' from above because we have the correct "name"
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function L(a, c, d) {
        /* jshint validthis: true */
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        // handle queue: false promises
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, 
        j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j();
        }), i.unqueued++, k.always(function() {
            // doing this makes sure that the complete handler will be called
            // before this completes
            k.always(function() {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire();
            });
        })), // height/width overflow pass
        1 === a.nodeType && ("height" in c || "width" in c) && (// Make sure that nothing sneaks out
        // Record all 3 overflow attributes because IE9-10 do not
        // change the overflow attribute when overflowX and
        // overflowY are set to the same value
        d.overflow = [ m.overflow, m.overflowX, m.overflowY ], // Set display property to inline-block for height/width
        // animations on inline elements that are having width/height animated
        "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), 
        d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2];
        }));
        // show/hide pass
        for (e in c) if (f = c[e], Dc.exec(f)) {
            if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
                if ("show" !== f || !o || o[e] === b) continue;
                n = !0;
            }
            l[e] = o && o[e] || fb.style(a, e);
        }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), // store state if its toggle - enables .stop().toggle() to "reverse"
            g && (o.hidden = !n), n ? fb(a).show() : k.done(function() {
                fb(a).hide();
            }), k.done(function() {
                var b;
                qb.remove(a, "fxshow");
                for (b in l) fb.style(a, b, l[b]);
            });
            for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, 
            h.start = "width" === e || "height" === e ? 1 : 0));
        }
    }
    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e);
    }
    // Generate parameters to create a standard animation
    function N(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (// if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        b = b ? 1 : 0; 4 > e; e += 2 - b) c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    // Can't do this because several apps including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    // Support: Firefox 18+
    //"use strict";
    var // A central reference to the root jQuery(document)
    P, // The deferred used on DOM ready
    Q, // Support: IE9
    // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
    R = typeof b, // Use the correct document accordingly with window argument (sandbox)
    S = a.location, T = a.document, U = T.documentElement, // Map over jQuery in case of overwrite
    V = a.jQuery, // Map over the $ in case of overwrite
    W = a.$, // [[Class]] -> type pairs
    X = {}, // List of deleted data cache ids, so we can reuse them
    Y = [], Z = "2.0.3", // Save a reference to some core methods
    $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, // Define a local copy of jQuery
    fb = function(a, b) {
        // The jQuery object is actually just the init constructor 'enhanced'
        return new fb.fn.init(a, b, P);
    }, // Used for matching numbers
    gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, // Used for splitting on whitespace
    hb = /\S+/g, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, // Match a standalone tag
    jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, // Matches dashed string for camelizing
    kb = /^-ms-/, lb = /-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
    mb = function(a, b) {
        return b.toUpperCase();
    }, // The ready event handler and self cleanup method
    nb = function() {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), 
        fb.ready();
    };
    fb.fn = fb.prototype = {
        // The current version of jQuery being used
        jquery: Z,
        constructor: fb,
        init: function(a, c, d) {
            var e, f;
            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!a) return this;
            // Handle HTML strings
            if ("string" == typeof a) {
                // Match html or make sure no context is specified for #id
                if (// Assume that strings that start and end with <> are HTML and skip the regex check
                e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : ib.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                // HANDLE: $(html) -> $(array)
                if (e[1]) {
                    // HANDLE: $(html, props)
                    if (c = c instanceof fb ? c[0] : c, // scripts is true for back-compat
                    fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), 
                    jb.test(e[1]) && fb.isPlainObject(c)) for (e in c) // Properties of context are called as methods if possible
                    fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                // Check parentNode to catch when Blackberry 4.6 returns
                // nodes that are no longer in the document #6963
                // Inject the element directly into the jQuery object
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
                this.context = T, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), fb.makeArray(a, this));
        },
        // Start with an empty selector
        selector: "",
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return ab.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(a) {
            // Return a 'clean' array
            // Return just the object
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(a) {
            // Build a new jQuery matched element set
            var b = fb.merge(this.constructor(), a);
            // Return the newly-formed element set
            // Add the old object onto the stack (as a reference)
            return b.prevObject = this, b.context = this.context, b;
        },
        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        each: function(a, b) {
            return fb.each(this, a, b);
        },
        ready: function(a) {
            // Add the callback
            return fb.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(ab.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: _,
        sort: [].sort,
        splice: [].splice
    }, // Give the init function the jQuery prototype for later instantiation
    fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for (// Handle a deep copy situation
        "boolean" == typeof h && (k = h, h = arguments[1] || {}, // skip the boolean and the target
        i = 2), // Handle case when target is a string or something (possible in deep copy)
        "object" == typeof h || fb.isFunction(h) || (h = {}), // extend jQuery itself if only one argument is passed
        j === i && (h = this, --i); j > i; i++) // Only deal with non-null/undefined values
        if (null != (a = arguments[i])) // Extend the base object
        for (c in a) d = h[c], e = a[c], // Prevent never-ending loop
        h !== e && (// Recurse if we're merging plain objects or arrays
        k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, 
        // Never move original objects, clone them
        h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        // Return the modified object
        return h;
    }, fb.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb;
        },
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: !1,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0);
        },
        // Handle when the DOM is ready
        ready: function(a) {
            // Abort if there are pending holds or we're already ready
            (a === !0 ? --fb.readyWait : fb.isReady) || (// Remember that the DOM is ready
            fb.isReady = !0, // If a normal DOM Ready event fired, decrement, and wait if need be
            a !== !0 && --fb.readyWait > 0 || (// If there are functions bound, to execute
            Q.resolveWith(T, [ fb ]), // Trigger any bound ready events
            fb.fn.trigger && fb(T).trigger("ready").off("ready")));
        },
        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function(a) {
            return "function" === fb.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            // Not plain objects:
            // - Any object or value whose internal [[Class]] property is not "[object Object]"
            // - DOM nodes
            // - window
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
            // Support: Firefox <20
            // The try/catch suppresses exceptions thrown when attempting to access
            // the "constructor" property of certain host objects, ie. |window.location|
            // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (b) {
                return !1;
            }
            // If the function hasn't returned already, we're confident that
            // |obj| is a plain object, created by {} or constructed with new Object
            return !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw new Error(a);
        },
        // data: string of html
        // context (optional): If specified, the fragment will be created in this context, defaults to document
        // keepScripts (optional): If true, will include scripts passed in the html string
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a), e = !c && [];
            // Single tag
            // Single tag
            return d ? [ b.createElement(d[1]) ] : (d = fb.buildFragment([ a ], b, e), e && fb(e).remove(), 
            fb.merge([], d.childNodes));
        },
        parseJSON: JSON.parse,
        // Cross-browser xml parsing
        parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a) return null;
            // Support: IE9
            try {
                d = new DOMParser(), c = d.parseFromString(a, "text/xml");
            } catch (e) {
                c = b;
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), 
            c;
        },
        noop: function() {},
        // Evaluates a script in a global context
        globalEval: function(a) {
            var b, c = eval;
            a = fb.trim(a), a && (// If the code includes a valid, prologue position
            // strict mode pragma, execute code by injecting a
            // script tag into the document.
            1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : // Otherwise, avoid the DOM node creation, insertion
            // and removal by using an indirect global eval
            c(a));
        },
        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function(a) {
            return a.replace(kb, "ms-").replace(lb, mb);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        // args is for internal usage only
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : eb.call(a);
        },
        // results is for internal usage only
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [ a ] : a) : _.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : bb.call(b, a, c);
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            // Go through the array, only saving the items
            // that pass the validator function
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        // arg is for internal usage only
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            // Go through the array, translating each of the items to their
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            // Flatten any nested arrays
            return $.apply([], i);
        },
        // A global GUID counter for objects
        guid: 1,
        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function(a, c) {
            var d, e, f;
            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            // Simulated bind
            // Set the guid of unique handler to the same of original handler, so it can be removed
            return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), 
            f = function() {
                return a.apply(c || this, e.concat(ab.call(arguments)));
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b;
        },
        // Multifunctional method to get and set values of a collection
        // The value/s can optionally be executed if it's a function
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            // Sets many values
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d) fb.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (// Bulk operations run against the entire set
            h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(fb(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            // Gets
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: Date.now,
        // A method for quickly swapping in/out CSS properties to get correct calculations.
        // Note: this method belongs to the css module but it's needed here for the support module.
        // If support gets modularized, this method should be moved back to the css module.
        swap: function(a, b, c, d) {
            var e, f, g = {};
            // Remember the old values, and insert the new ones
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            // Revert the old values
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), fb.ready.promise = function(b) {
        // Catch cases where $(document).ready() is called after the browser event has already occurred.
        // we once tried to use readyState "interactive" here, but it caused issues like the one
        // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        // Use the handy event callback
        // A fallback to window.onload, that will always work
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), 
        a.addEventListener("load", nb, !1))), Q.promise(b);
    }, // Populate the class2type map
    fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        X["[object " + b + "]"] = b.toLowerCase();
    }), // All jQuery objects should point back to these
    P = fb(T), /*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */
    function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, // QSA vars
            i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                // Shortcuts
                if (e = tb.exec(a)) // Speed-up: Sizzle("#ID")
                if (g = e[1]) {
                    if (9 === h) {
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        // Handle the case where IE, Opera, and Webkit return items
                        // by name instead of ID
                        if (f.id === g) return c.push(f), c;
                    } else // Context is not a document
                    if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                // QSA path
                if (x.qsa && (!J || !J.test(a))) {
                    // qSA works strangely on Element-rooted queries
                    // We can work around this by specifying an extra ID on the root
                    // and working up from there (Thanks to Andrew Dupont for the technique)
                    // IE 8 doesn't work on object elements
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",");
                    }
                    if (p) try {
                        return ab.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            // All others
            return v(a.replace(kb, "$1"), b, c, d);
        }
        /**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  deleting the oldest entry
 */
        function d() {
            function a(c, d) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                // Only keep the most recent entries
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
        function e(a) {
            return a[N] = !0, a;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                // Remove from its parent by default
                b.parentNode && b.parentNode.removeChild(b), // release memory in IE
                b = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) z.attrHandle[c[d]] = b;
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            // Use IE sourceIndex if available on both nodes
            if (d) return d;
            // Check if b follows a
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    // Match elements found at the specified indexes
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        // Easy API for creating new setFilters
        function l() {}
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                // Comma and first run
                (!d || (e = lb.exec(h))) && (e && (// Don't consume trailing commas as valid
                h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, // Combinators
                (e = mb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    // Cast descendant combinators to space
                    type: e[0].replace(kb, " ")
                }), h = h.slice(d.length));
                // Filters
                for (g in z.filter) !(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            // Cache the tokens
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0);
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            // Check against closest ancestor/preceding element
            // Check against all ancestor/preceding elements
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || y, i[1] === !0) return !0;
            };
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, // Get initial elements from seed or context
                p = e || u(b || "*", h.nodeType ? [ h ] : h, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                f || (e ? a : o || d) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                g : r;
                // Apply postFilter
                if (// Find primary matches
                c && c(r, s, h, i), d) for (j = q(s, n), d(j, [], h, i), // Un-match failing elements by moving them back to matcherIn
                k = j.length; k--; ) (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (// Get the final matcherOut by condensing this intermediate into postFinder contexts
                            j = [], k = s.length; k--; ) (l = s[k]) && // Restore matcherIn since elem is not yet a final match
                            j.push(r[k] = l);
                            f(null, s = [], j, i);
                        }
                        for (// Move matched elements from seed to results to keep them synchronized
                        k = s.length; k--; ) (l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l));
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            i = o(function(a) {
                return a === b;
            }, g, !0), j = o(function(a) {
                return cb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = z.relative[a[h].type]) k = [ o(p(k), c) ]; else {
                // Return special upon seeing a positional matcher
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (// Find the next relative operator (if any) for proper handling
                    d = ++h; e > d && !z.relative[a[d].type]; d++) ;
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a));
                }
                k.push(c);
            }
            return p(k);
        }
        function t(a, b) {
            // A counter to specify which element is currently being matched
            var d = 0, f = b.length > 0, g = a.length > 0, h = function(e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, // We must always have either seed elements or context
                v = e || g && z.find.TAG("*", k && h.parentNode || h), // Use integer dirruns iff this is the outermost matcher
                w = P += null == u ? 1 : Math.random() || .1;
                // Add elements passing elementMatchers directly to results
                // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        t && (P = w, y = ++d);
                    }
                    // Track unmatched elements for set filters
                    f && (// They will have gone through all possible matchers
                    (l = !n && l) && p--, // Lengthen the array for every element, matched or not
                    e && s.push(l));
                }
                if (// Apply set filters to unmatched elements
                p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; ) n(s, o, h, i);
                    if (e) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (p > 0) for (;r--; ) s[r] || o[r] || (o[r] = $.call(j));
                        // Discard index placeholder values to get only actual matches
                        o = q(o);
                    }
                    // Add matches to results
                    ab.apply(j, o), // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                // Override manipulation of globals by nested matchers
                return t && (P = w, D = u), s;
            };
            return f ? e(h) : h;
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (// Take a shortcut and set the context if the root selector is an ID
                f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (// Fetch a seed set for right-to-left matching
                e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]); ) if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (// If seed is empty or no tokens remain, we can return early
                    f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                    break;
                }
            }
            // Compile and execute a filtering function
            // Provide `match` to avoid retokenization if we modified the selector above
            return C(a, j)(d, b, !I, c, nb.test(a)), c;
        }
        var w, x, y, z, A, B, C, D, E, // Local document vars
        F, G, H, I, J, K, L, M, // Instance-specific data
        N = "sizzle" + -new Date(), O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function(a, b) {
            return a === b ? (U = !0, 0) : 0;
        }, // General-purpose constants
        W = typeof b, X = 1 << 31, // Instance methods
        Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, // Use a stripped-down indexOf if we can't use a native one
        cb = Z.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
        eb = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters
        gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Loosely modeled on CSS identifier characters
        // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
        // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        hb = gb.replace("w", "w#"), // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
        ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]", // Prefer arguments quoted,
        //   then not containing pseudos/brackets,
        //   then attribute selectors/non-parenthetical expressions,
        //   then anything else
        // These preferences are here to reduce the number of selectors
        //   needing tokenize in the PSEUDO preFilter
        jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = new RegExp("^" + eb + "*," + eb + "*"), mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = new RegExp(eb + "*[+~]"), ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = new RegExp(jb), qb = new RegExp("^" + hb + "$"), rb = {
            ID: new RegExp("^#(" + gb + ")"),
            CLASS: new RegExp("^\\.(" + gb + ")"),
            TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ib),
            PSEUDO: new RegExp("^" + jb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + db + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
        }, sb = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function(a, b, c) {
            var d = "0x" + b - 65536;
            // NaN means non-codepoint
            // Support: Firefox
            // Workaround erroneous numeric interpretation of +"0x"
            // BMP codepoint
            // Supplemental Plane codepoint (surrogate pair)
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
        // Optimize for push.apply( _, NodeList )
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), // Support: Android<4.0
            // Detect silently failing push.apply
            Z[O.childNodes.length].nodeType;
        } catch (zb) {
            ab = {
                apply: Z.length ? // Leverage slice if possible
                function(a, b) {
                    _.apply(a, bb.call(b));
                } : // Support: IE<9
                // Otherwise append directly
                function(a, b) {
                    // Can't trust NodeList.length
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        /**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
        B = c.isXML = function(a) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, // Expose support vars for convenience
        x = c.support = {}, /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
        F = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : O, c = b.defaultView;
            // If no document and documentElement is available, return
            // If no document and documentElement is available, return
            // Set our document
            // Support tests
            // Support: IE>8
            // If iframe document is assigned to "document" variable and if iframe has been reloaded,
            // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
            // IE6-8 do not support the defaultView property so parent will be undefined
            /* Attributes
  ---------------------------------------------------------------------- */
            // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
            /* getElement(s)By*
  ---------------------------------------------------------------------- */
            // Check if getElementsByTagName("*") returns only elements
            // Check if getElementsByClassName can be trusted
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programatically-set names,
            // so use a roundabout getElementsByName test
            // ID find and filter
            // Support: IE6/7
            // getElementById is not reliable as a find shortcut
            // Tag
            // Class
            /* QSA/matchesSelector
  ---------------------------------------------------------------------- */
            // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See http://bugs.jquery.com/ticket/13378
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            /* Contains
  ---------------------------------------------------------------------- */
            // Element contains another
            // Purposefully does not implement inclusive descendent
            // As in, an element does not contain itself
            /* Sorting
  ---------------------------------------------------------------------- */
            // Document order sorting
            return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, 
            I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                F();
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length;
            }), x.getElementsByClassName = f(function(a) {
                // Support: Opera<10
                // Catch gEBCN failure to find non-leading classes
                // Support: Safari<4
                // Catch class over-caching
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length;
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    // Check parentNode to catch when Blackberry 4.6 returns
                    // nodes that are no longer in the document #6963
                    return c && c.parentNode ? [ c ] : [];
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                // Filter out possible comments
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function(a) {
                // Select is set to empty string on purpose
                // This is to test IE's treatment of not explicitly
                // setting a boolean content attribute,
                // since its presence should be enough
                // http://bugs.jquery.com/ticket/12359
                a.innerHTML = "<select><option selected=''></option></select>", // Support: IE8
                // Boolean attributes and "value" are not treated correctly
                a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), 
                // Webkit/Opera - :checked should return selected option elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                // IE8 throws error here and will not see later tests
                a.querySelectorAll(":checked").length || J.push(":checked");
            }), f(function(a) {
                // Support: Opera 10-12/IE8
                // ^= $= *= and empty values
                // Should not select anything
                // Support: Windows 8 Native Apps
                // The type attribute is restricted during .innerHTML assignment
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), 
                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                // IE8 throws error here and will not see later tests
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), // Opera 10-11 does not throw on post-comma invalid pseudos
                a.querySelectorAll("*,:x"), J.push(",.*:");
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                x.disconnectedMatch = L.call(a, "div"), // This should fail with an exception
                // Gecko does not error, returns false instead
                L.call(a, "[s!='']:x"), K.push("!=", jb);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, V = H.compareDocumentPosition ? function(a, c) {
                // Flag for duplicate removal
                if (a === c) return U = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                // Disconnected nodes
                // Choose the first element that is related to our preferred document
                return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, i = [ a ], j = [ c ];
                // Exit early if the nodes are identical
                if (a === c) return U = !0, 0;
                if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                if (f === g) return h(a, c);
                for (// Otherwise we need full lists of their ancestors for comparison
                d = a; d = d.parentNode; ) i.unshift(d);
                for (d = c; d = d.parentNode; ) j.unshift(d);
                // Walk down the tree looking for a discrepancy
                for (;i[e] === j[e]; ) e++;
                // Do a sibling check if the nodes have a common ancestor
                // Otherwise nodes in our document sort first
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, b) : G;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if (// Set document vars if needed
            (a.ownerDocument || a) !== G && F(a), // Make sure that attribute selectors are quoted
            b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (d || x.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, G, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            // Set document vars if needed
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, c.attr = function(a, c) {
            // Set document vars if needed
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
        c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (// Unless we *know* we can detect duplicates, assume their presence
            U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
        A = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (see #11153)
                    if ("string" == typeof a.textContent) return a.textContent;
                    // Traverse its children
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else // If no nodeType, this is expected to be an array
            for (;b = a[d]; d++) // Do not traverse comment nodes
            c += A(b);
            // Do not include comment or processing instruction nodes
            return c;
        }, z = c.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: e,
            match: rb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    // Move the given value to match[3] whether quoted or unquoted
                    return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 what (child|of-type)
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        4 xn-component of xn+y argument ([+-]?\d*n|)
        5 sign of xn-component
        6 x of xn-component
        7 sign of y-component
        8 y of y-component
      */
                    // nth-* requires argument
                    // numeric x and y parameters for Expr.filter.CHILD
                    // remember that false/true cast respectively to 0/1
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    // Accept quoted arguments as-is
                    // Get excess from tokenize (recursively)
                    // advance to the next closing parenthesis
                    // excess is a negative index
                    return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    // Shortcut for :nth-*(n)
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            // :(first|last|only)-(child|of-type)
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (// Seek `elem` from a previously-cached index
                                k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (// Fallback to seeking `elem` from the start
                                m = n = 0) || o.pop(); ) // When found, cache indexes on `parent` and break
                                if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else // Use the same loop as above to seek `elem` from the start
                            for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (// Cache the index of each encountered element
                            s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), l !== b)); ) ;
                            // Incorporate the offset, then check against cycle size
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    // But maintain support for old signatures
                    return f[N] ? f(b) : f.length > 1 ? (d = [ a, a, "", b ], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--; ) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, d);
                    }) : f;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: e(function(a) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var b = [], c = [], d = C(a.replace(kb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        // Match elements unmatched by `matcher`
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                lang: e(function(a) {
                    // lang value must be a valid identifier
                    return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                // Miscellaneous
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                // Boolean properties
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                // Contents
                empty: function(a) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
                    //   not comment, processing instructions, or others
                    // Thanks to Diego Perini for the nodeName shortcut
                    //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !z.pseudos.empty(a);
                },
                // Element/input types
                header: function(a) {
                    return vb.test(a.nodeName);
                },
                input: function(a) {
                    return ub.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
                    // use getAttribute instead to test this case
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                // Position-in-collection
                first: k(function() {
                    return [ 0 ];
                }),
                last: k(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: k(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, z.pseudos.nth = z.pseudos.eq;
        // Add button/input type pseudos
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l(), C = c.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (// Generate a function of recursive functions that can be used to check each element
                b || (b = m(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                // Cache the compiled function
                f = T(a, t(e, d));
            }
            return f;
        }, // One-time assignments
        // Sort stability
        x.sortStable = N.split("").sort(V).join("") === N, // Support: Chrome<14
        // Always assume duplicates if they aren't passed to the comparison function
        x.detectDuplicates = U, // Initialize against the default document
        F(), // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        x.sortDetached = f(function(a) {
            // Should return 1, but returns 4 (following)
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), // Support: IE<8
        // Prevent attribute/property "interpolation"
        // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || g("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || g("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        f(function(a) {
            return null == a.getAttribute("disabled");
        }) || g(db, function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null;
        }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, 
        fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains;
    }(a);
    // String to Object options format cache
    var ob = {};
    /*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
    fb.Callbacks = function(a) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var // Last fire value (for non-forgettable lists)
        c, // Flag to know if list was already fired
        e, // Flag to know if list is currently firing
        f, // First callback to fire (used internally by add and fireWith)
        g, // End of the loop when firing
        h, // Index of currently firing callback (modified by remove if needed)
        i, // Actual callback list
        j = [], // Stack of fire calls for repeatable lists
        k = !a.once && [], // Fire callbacks
        l = function(b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                c = !1;
                // To prevent further calls using add
                break;
            }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable());
        }, // Actual Callbacks object
        m = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (j) {
                    // First, we save the current length
                    var b = j.length;
                    !function d(b) {
                        fb.each(b, function(b, c) {
                            var e = fb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && // Inspect recursively
                            d(c);
                        });
                    }(arguments), // Do we need to add the callbacks to the
                    // current firing batch?
                    f ? h = j.length : c && (g = b, l(c));
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                return j && fb.each(arguments, function(a, b) {
                    for (var c; (c = fb.inArray(b, j, c)) > -1; ) j.splice(c, 1), // Handle firing indexes
                    f && (h >= c && h--, i >= c && i--);
                }), this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(a) {
                return a ? fb.inArray(a, j) > -1 : !(!j || !j.length);
            },
            // Remove all callbacks from the list
            empty: function() {
                return j = [], h = 0, this;
            },
            // Have the list do nothing anymore
            disable: function() {
                return j = k = c = b, this;
            },
            // Is it disabled?
            disabled: function() {
                return !j;
            },
            // Lock the list in its current state
            lock: function() {
                return k = b, c || m.disable(), this;
            },
            // Is it locked?
            locked: function() {
                return !k;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(a, b) {
                return !j || e && !k || (b = b || [], b = [ a, b.slice ? b.slice() : b ], f ? k.push(b) : l(b)), 
                this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!e;
            }
        };
        return m;
    }, fb.extend({
        Deferred: function(a) {
            var b = [ // action, add listener, listener list, final state
            [ "resolve", "done", fb.Callbacks("once memory"), "resolved" ], [ "reject", "fail", fb.Callbacks("once memory"), "rejected" ], [ "notify", "progress", fb.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return fb.Deferred(function(c) {
                        fb.each(b, function(b, f) {
                            var g = f[0], h = fb.isFunction(a[b]) && a[b];
                            // deferred[ done | fail | progress ] for forwarding actions to newDefer
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(a) {
                    return null != a ? fb.extend(a, d) : d;
                }
            }, e = {};
            // All done!
            // Keep pipe for back-compat
            // Add list-specific methods
            // Make the deferred a promise
            // Call given func if any
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                // promise[ done | fail | progress ] = list.add
                d[f[1]] = g.add, // Handle state
                h && g.add(function() {
                    // state = [ resolved | rejected ]
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), // deferred[ resolve | reject | notify ]
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        // Deferred helper
        when: function(a) {
            var b, c, d, e = 0, f = ab.call(arguments), g = f.length, // the count of uncompleted subordinates
            h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
            i = 1 === h ? a : fb.Deferred(), // Update function for both resolve and progress values
            j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            // add listeners to Deferred subordinates; treat others as resolved
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            // if we're not waiting on anything, resolve the master
            return h || i.resolveWith(d, f), i.promise();
        }
    }), fb.support = function(b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        // Finish early in limited environments
        // Finish early in limited environments
        // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
        // Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
        // Must access the parent to make an option select properly
        // Support: IE9, IE10
        // Will be defined later
        // Make sure checked status is properly cloned
        // Support: IE9, IE10
        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        // Check if an input maintains its value after becoming a radio
        // Support: IE9, IE10
        // #11217 - WebKit loses check when the name is after the checked attribute
        // Support: Safari 5.1, Android 4.x, Android 2.3
        // old WebKit doesn't clone checked state correctly in fragments
        // Support: Firefox, Chrome, Safari
        // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
        // Run tests that need a body at doc ready
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, 
        b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, 
        b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, 
        c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, 
        c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
            var c, d, // Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
            f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            // Check box-sizing and margin behavior.
            g.appendChild(c).appendChild(e), e.innerHTML = "", // Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
            e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            // Workaround failing boxSizing test due to offsetWidth returning wrong value
            // with some non-1 values of body zoom, ticket #13543
            fb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth;
            }), // Use window.getComputedStyle because jsdom on node.js will break without it.
            a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, // Support: Android 2.3
            // Check if div with explicit width and no margin-right incorrectly
            // gets computed margin-right based on width of container. (#3333)
            // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
            d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            g.removeChild(c));
        }), b) : b;
    }({});
    /*
  Implementation Summary

  1. Enforce API surface and semantic compatibility with 1.9.x branch
  2. Improve the module's maintainability by reducing the storage
    paths to a single mechanism.
  3. Use the same single mechanism to support "private" and "user" data.
  4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  5. Avoid exposing implementation details on user objects (eg. expando properties)
  6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0;
    }, e.prototype = {
        key: function(a) {
            // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return the key for a frozen object.
            if (!e.accepts(a)) return 0;
            var b = {}, // Check if the owner object already has a cache key
            c = a[this.expando];
            // If not, create one
            if (!c) {
                c = e.uid++;
                // Secure it in a non-enumerable, non-writable property
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b);
                }
            }
            // Ensure the cache object
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, // There may be an unlock assigned to this node,
            // if there is no entry for this "owner", create one inline
            // and set the unlock as though an owner entry had always existed
            e = this.key(a), f = this.cache[e];
            // Handle: [ owner, key, value ] args
            if ("string" == typeof b) f[b] = c; else // Fresh assignments by object are shallow copied
            if (fb.isEmptyObject(f)) fb.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, c) {
            // Either a valid cache is found, or will be created.
            // New caches will be created and the unlock returned,
            // allowing direct access to the newly created
            // empty data object. A valid owner object must be provided.
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c];
        },
        access: function(a, c, d) {
            var e;
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            // [*]When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), 
            d !== b ? d : c);
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a), h = this.cache[g];
            if (c === b) this.cache[g] = {}; else {
                // Support array or space separated string of keys
                fb.isArray(c) ? // If "name" is an array of keys...
                // When data is initially created, via ("key", "val") signature,
                // keys will be converted to camelCase.
                // Since there is no way to tell _how_ a key was added, remove
                // both plain key and camelCase key. #12786
                // This will only penalize the array argument path.
                e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), // Try the string as a key before any manipulation
                c in h ? e = [ c, f ] : (// If a key with the spaces exists, use it.
                // Otherwise, create an array by matching non-whitespace
                e = f, e = e in h ? [ e ] : e.match(hb) || [])), d = e.length;
                for (;d--; ) delete h[e[d]];
            }
        },
        hasData: function(a) {
            return !fb.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    }, // These may be used throughout the jQuery core codebase
    pb = new e(), qb = new e(), fb.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return pb.hasData(a) || qb.hasData(a);
        },
        data: function(a, b, c) {
            return pb.access(a, b, c);
        },
        removeData: function(a, b) {
            pb.remove(a, b);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to data_priv methods, these can be deprecated.
        _data: function(a, b, c) {
            return qb.access(a, b, c);
        },
        _removeData: function(a, b) {
            qb.remove(a, b);
        }
    }), fb.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0], h = 0, i = null;
            // Gets all values
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), 
                    f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0);
                }
                return i;
            }
            // Sets multiple values
            // Sets multiple values
            return "object" == typeof a ? this.each(function() {
                pb.set(this, a);
            }) : fb.access(this, function(c) {
                var d, e = fb.camelCase(a);
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (g && c === b) {
                    if (// Attempt to get data from the cache
                    // with the key as-is
                    d = pb.get(g, a), d !== b) return d;
                    if (// Attempt to get data from the cache
                    // with the key camelized
                    d = pb.get(g, e), d !== b) return d;
                    if (// Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    d = f(g, e, b), d !== b) return d;
                } else // Set the data...
                this.each(function() {
                    // First, attempt to store a copy or reference of any
                    // data that might've been store with a camelCased key.
                    var d = pb.get(this, e);
                    // For HTML5 data-* attribute interop, we have to
                    // store property names with dashes in a camelCase form.
                    // This might not apply to all properties...*
                    pb.set(this, e, c), // *... In the case of properties that might _actually_
                    // have dashes, we need to also store a copy of that
                    // unchanged property.
                    -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c);
                });
            }, null, c, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                pb.remove(this, a);
            });
        }
    }), fb.extend({
        queue: function(a, b, c) {
            var d;
            // Speed up dequeue by getting out quickly if this is just a lookup
            return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function() {
                fb.dequeue(a, b);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            "inprogress" === e && (e = c.shift(), d--), e && (// Add a progress sentinel to prevent the fx queue from being
            // automatically dequeued
            "fx" === b && c.unshift("inprogress"), // clear up the last queue stop function
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        // not intended for public consumption - generates a queueHooks object, or returns the current one
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {
                empty: fb.Callbacks("once memory").add(function() {
                    qb.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), fb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fb.queue(this, a, c);
                // ensure a hooks for this queue
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a);
            });
        },
        // Based off of the plugin by Clint Helfers, with permission.
        // http://blindsignals.com/index.php/2009/07/jquery-delay/
        delay: function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(a, c) {
            var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = qb.get(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({
        attr: function(a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fb.propFix[a] || a];
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (// The disjunction here is for better compressibility (see removeClass)
            b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                c.className = fb.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], // This expression is here for better compressibility (see addClass)
            d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                for (f = 0; e = b[f++]; ) // Remove *all* instances
                for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? fb.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (// toggle individual class names
                var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++]; ) // check each className given, space separated list
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === R || "boolean" === c) && (this.className && // store className if set
                qb.set(this, "__className__", this.className), // If the element has a class name or if we're passed "false",
                // then remove the whole classname (if there was one, the above saved it).
                // Otherwise bring back whatever was previously saved (if anything),
                // falling back to the empty string if nothing was stored.
                this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length) return e = fb.isFunction(a), this.each(function(d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, // Treat null/undefined as ""; convert numbers to string
                    null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                        return null == a ? "" : a + "";
                    })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], // If set returns undefined, fall back to normal setting
                    c && "set" in c && c.set(this, f, "value") !== b || (this.value = f));
                });
                if (f) // handle most common string cases
                // handle cases where value is null/undef or number
                return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, 
                "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d);
            }
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    // attributes.value is undefined in Blackberry 4.7 but
                    // uses .value. See #6932
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function(a) {
                    // Loop through all the selected options
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) // IE6-9 doesn't update selected after form reset (#2551)
                    if (c = d[i], !(!c.selected && i !== e || (// Don't return options that are disabled or in a disabled optgroup
                    fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                        // We don't need an array for one selects
                        if (// Get the specific value for the option
                        b = fb(c).val(), f) return b;
                        // Multi-Selects return an array
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    // force browsers to behave consistently when non-matching value is set
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            // don't get/set attributes on text, comment and attribute nodes
            if (a && 3 !== g && 8 !== g && 2 !== g) // Fallback to prop when attributes are not supported
            // Fallback to prop when attributes are not supported
            // All attributes are lowercase
            // Grab necessary hook if one is defined
            return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : void fb.removeAttr(a, c));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(hb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = fb.propFix[c] || c, // Boolean attributes get special treatment (#10870)
            fb.expr.match.bool.test(c) && (// Set corresponding property to false
            a[d] = !1), a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to default in case type is set after value during creation
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            // don't get/set properties on text, comment and attribute nodes
            if (a && 3 !== h && 8 !== h && 2 !== h) // Fix name and attach hooks
            return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, f = fb.propHooks[c]), 
            d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), // Hooks for boolean attributes
    ub = {
        set: function(a, b, c) {
            // Remove boolean attributes when set to false
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function(a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : /* jshint eqeqeq: false */
            // Temporarily disable this handler to check existence
            (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            // Restore handler
            return fb.expr.attrHandle[c] = f, g;
        };
    }), // Support: IE9+
    // Selectedness for an option in an optgroup can be inaccurate
    fb.support.optSelected || (fb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), fb.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fb.propFix[this.toLowerCase()] = this;
    }), // Radios and checkboxes getter/setter
    fb.each([ "radio", "checkbox" ], function() {
        fb.valHooks[this] = {
            set: function(a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0;
            }
        }, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
            // Support: Webkit
            // "" is returned instead of "on" if a value isn't specified
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
    fb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (r) {
                for (// Caller can pass in an object of custom data in lieu of the handler
                d.handler && (g = d, d = g.handler, f = g.selector), // Make sure that the handler has a unique ID, used to find/remove it later
                d.guid || (d.guid = fb.guid++), // Init the element's event structure and main handler, if this is the first
                (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments);
                }, // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                h.elem = a), // Handle multiple events separated by a space
                c = (c || "").match(hb) || [ "" ], k = c.length; k--; ) i = Bb.exec(c[k]) || [], 
                o = q = i[1], p = (i[2] || "").split(".").sort(), // There *must* be a type, no attaching namespace-only handlers
                o && (// If event changes its type, use the special event handlers for the changed type
                m = fb.event.special[o] || {}, // If selector defined, determine special event api type, otherwise given type
                o = (f ? m.delegateType : m.bindType) || o, // Update special based on newly reset type
                m = fb.event.special[o] || {}, // handleObj is passed to all event handlers
                l = fb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), // Init the event handler queue if we're the first
                (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, // Only use addEventListener if the special events handler returns false
                m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), 
                m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), // Add to the element's handler list, delegates in front
                f ? n.splice(n.delegateCount++, 0, l) : n.push(l), // Keep track of which events have ever been used, for event optimization
                fb.event.global[o] = !0);
                // Nullify elem to prevent memory leaks in IE
                a = null;
            }
        },
        // Detach an event or set of events from an element
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (// Once for each type.namespace in types; type may be omitted
                b = (b || "").match(hb) || [ "" ], j = b.length; j--; ) // Unbind all events (on this namespace, if provided) for the element
                if (h = Bb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    // Remove matching events
                    g = f = m.length; f--; ) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    // Remove generic event handler if we removed something and no more handlers exist
                    // (avoids potential for endless recursion during removal of special event handlers)
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) fb.event.remove(a, n + b[j], c, d, !0);
                // Remove the expando if it's no longer used
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || T ], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            // Don't do events on text and comment nodes
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (// Namespaced trigger; create a regexp to match event type in handle()
            p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, 
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            // Clean up the event in case it is being reused
            c.result = b, c.target || (c.target = e), // Clone any incoming data and prepend the event, creating the handler arg list
            d = null == d ? [ c ] : fb.makeArray(d, [ c ]), // Allow special events to draw outside the lines
            m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                // Determine event propagation path in advance, per W3C events spec (#9951)
                // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), 
                    i = h;
                    // Only add window if we got to document (e.g., not plain obj or detached DOM)
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a);
                }
                for (// Fire handlers on the event path
                g = 0; (h = n[g++]) && !c.isPropagationStopped(); ) c.type = g > 1 ? j : m.bindType || o, 
                // jQuery handler
                l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), 
                // Native handler
                l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                // If nobody prevented the default action, do it now
                // Call a native DOM method on the target with the same name name as the event.
                // Don't do default actions on window, that's where global variables be (#6170)
                // Don't re-trigger an onFOO event when we call its FOO() method
                // Prevent re-triggering of the same event, since we already bubbled it above
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], 
                i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), 
                c.result;
            }
        },
        dispatch: function(a) {
            // Make a writable jQuery.Event from the native event object
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (// Use the fix-ed jQuery.Event rather than the (read-only) native event
            i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (// Determine handlers
                h = fb.event.handlers.call(this, a, j), // Run delegates first; they may want to stop propagation beneath us
                c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped(); ) // Triggered event must either 1) have no namespace, or
                // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, 
                e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                // Call the postDispatch hook for the mapped type
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            // Avoid non-left-click bubbling in Firefox (#3861)
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j !== this; j = j.parentNode || this) // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
            if (j.disabled !== !0 || "click" !== a.type) {
                for (e = [], d = 0; i > d; d++) g = c[d], // Don't conflict with Object.prototype properties (#13203)
                f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [ j ]).length), 
                e[f] && e.push(g);
                e.length && h.push({
                    elem: j,
                    handlers: e
                });
            }
            // Add the remaining (directly-bound) handlers
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        // Includes some event props shared by KeyEvent and MouseEvent
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                // Add which for key events
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                // Calculate pageX/Y if missing and clientX/Y available
                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, 
                e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[fb.expando]) return a;
            // Create a writable copy of the event object and normalize some properties
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            // Support: Cordova 2.5 (WebKit) (#13255)
            // All events should have a target; Cordova deviceready doesn't
            // Support: Safari 6.0+, Chrome < 28
            // Target should not be a text node (#504, #13143)
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: !0
            },
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                // For checkbox, fire native event so checked state will be right
                trigger: function() {
                    return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                // For cross-browser consistency, don't fire native .click() on links
                _default: function(a) {
                    return fb.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            var e = fb.extend(new fb.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, fb.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, fb.Event = function(a, b) {
        // Allow instantiation without the 'new' keyword
        // Allow instantiation without the 'new' keyword
        // Event object
        // Events bubbling up the document may have been marked as prevented
        // by a handler lower down the tree; reflect the correct value.
        // Put explicitly provided properties onto the event object
        // Create a timestamp if incoming event doesn't have one
        // Mark it as fixed
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, 
        b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void (this[fb.expando] = !0)) : new fb.Event(a, b);
    }, // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    fb.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation();
        }
    }, // Create mouseenter/leave events using mouseover/out and event-time checks
    // Support: Chrome 15+
    fb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), // Create "bubbling" focus and blur events
    // Support: Firefox, Chrome, Safari
    fb.support.focusinBubbles || fb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        // Attach a single capturing handler while someone wants focusin/focusout
        var c = 0, d = function(a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0);
        };
        fb.event.special[b] = {
            setup: function() {
                0 === c++ && T.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0);
            }
        };
    }), fb.fn.extend({
        on: function(a, c, d, e, /*INTERNAL*/ f) {
            var g, i;
            // Types can be a map of types/handlers
            if ("object" == typeof a) {
                // ( types-Object, selector, data )
                "string" != typeof c && (// ( types-Object, data )
                d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this;
            }
            if (null == d && null == e ? (// ( types, fn )
            e = c, d = c = b) : null == e && ("string" == typeof c ? (// ( types, selector, fn )
            e = d, d = b) : (// ( types, data, fn )
            e = d, d = c, c = b)), e === !1) e = h; else if (!e) return this;
            // Use same guid so caller can remove using origFn
            return 1 === f && (g = e, e = function(a) {
                // Can use an empty set, since event contains the info
                return fb().off(a), g.apply(this, arguments);
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) // ( event )  dispatched jQuery.Event
            return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                // ( types-object [, selector] )
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            // ( types [, fn] )
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), 
            this.each(function() {
                fb.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, // methods guaranteed to produce a unique set when starting from a unique set
    Fb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fb.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                for (b = 0; e > b; b++) if (fb.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) fb.find(a, d[b], c);
            // Needed because $( selector, context ) becomes $( context ).find( selector )
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b = fb(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (fb.contains(this, b[a])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1));
        },
        is: function(a) {
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) // Always skip document fragments
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : // Don't pass non-elements to Sizzle
            1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f);
        },
        // Determine the position of an element within
        // the matched set of elements
        index: function(a) {
            // No argument, return index in parent
            // No argument, return index in parent
            // index in selector
            // If it receives a jQuery object, the first element is used
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [ a ] : a), d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), fb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return fb.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c);
        },
        next: function(a) {
            return j(a, "nextSibling");
        },
        prev: function(a) {
            return j(a, "previousSibling");
        },
        nextAll: function(a) {
            return fb.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return fb.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return fb.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || fb.merge([], a.childNodes);
        }
    }, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            // Remove duplicates
            // Reverse order for parents* and prev-derivatives
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), 
            this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e);
        };
    }), fb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [ d ] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (f && fb(a).is(d)) break;
                e.push(a);
            }
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, // checked="checked" or checked
    Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, // We have to close these tags to support XHTML (#13200)
    Pb = {
        // Support: IE 9
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    // Support: IE 9
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, 
    Pb.th = Pb.td, fb.fn.extend({
        text: function(a) {
            return fb.access(this, function(a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        // keepData is for internal use only--do not document
        remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), 
            c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (// Prevent memory leaks
            fb.cleanData(q(a, !1)), // Remove any remaining nodes
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b);
            });
        },
        html: function(a) {
            return fb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, // Remove element nodes and prevent memory leaks
                        1 === c.nodeType && (fb.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var // Snapshot the DOM in case .domManip sweeps something relevant into its fragment
            a = fb.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            // Force removal if there was no new content (e.g., from empty arguments)
            // Make the changes, replacing each context element with the new content
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (// Don't use the snapshot next if it has moved (#13810)
                d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            // Flatten any nested arrays
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
            // We can't cloneNode fragments that contain checked, in WebKit
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 
            1 === d.childNodes.length && (d = e), e)) {
                // Use the original fragment for the last item instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fb.clone(h, !0, !0), 
                // Keep references to cloned scripts for later restoration
                g && // Support: QtWebKit
                // jQuery.merge because core_push.apply(_, arraylike) throws
                fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g) // Evaluate executable scripts on first document insertion
                for (i = f[f.length - 1].ownerDocument, // Reenable scripts
                fb.map(f, n), j = 0; g > j; j++) h = f[j], Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? // Hope ajax is available...
                fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")));
            }
            return this;
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            fb(e[g])[b](c), // Support: QtWebKit
            // .get() because core_push.apply(_, arraylike) throws
            _.apply(d, c.get());
            return this.pushStack(d);
        };
    }), fb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
            // Support: IE >= 9
            // Fix Cloning issues
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a))) for (// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
            g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            // Copy the events from the original to the clone
            if (b) if (c) for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]); else p(a, h);
            // Return the cloned set
            // Preserve script evaluation history
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++) if (e = a[k], 
            e || 0 === e) // Add nodes directly
            if ("object" === fb.type(e)) // Support: QtWebKit
            // jQuery.merge because core_push.apply(_, arraylike) throws
            fb.merge(n, e.nodeType ? [ e ] : e); else if (Ib.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), // Deserialize a standard representation
                g = (Hb.exec(e) || [ "", "" ])[1].toLowerCase(), h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], 
                // Descend through wrappers to the right content
                j = h[0]; j--; ) f = f.lastChild;
                // Support: QtWebKit
                // jQuery.merge because core_push.apply(_, arraylike) throws
                fb.merge(n, f.childNodes), // Remember the top-level container
                f = m.firstChild, // Fixes #12346
                // Support: Webkit, IE
                f.textContent = "";
            } else n.push(b.createTextNode(e));
            for (// Remove wrapper from fragment
            m.textContent = "", k = 0; e = n[k++]; ) // #4087 - If origin and destination elements are the same, and this is
            // that element, do not do anything
            if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), // Append to fragment
            f = q(m.appendChild(e), "script"), // Preserve script evaluation history
            i && o(f), c)) for (j = 0; e = f[j++]; ) Mb.test(e.type || "") && c.push(e);
            return m;
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length) for (i = 0; (g = f[i]) !== b; i++) j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && // Discard any remaining `private` data
                    delete qb.cache[h];
                }
                // Discard any remaining `user` data
                delete pb.cache[d[pb.expando]];
            }
        },
        _evalUrl: function(a) {
            return fb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), fb.fn.extend({
        wrapAll: function(a) {
            var b;
            // The elements to wrap the target around
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(fb.isFunction(a) ? function(b) {
                fb(this).wrapInner(a.call(this, b));
            } : function() {
                var b = fb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Qb, Rb, // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {
        BODY: "block"
    }, Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Zb = {
        letterSpacing: 0,
        fontWeight: 400
    }, $b = [ "Top", "Right", "Bottom", "Left" ], _b = [ "Webkit", "O", "Moz", "ms" ];
    fb.fn.extend({
        css: function(a, c) {
            return fb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fb.css(a, c[h], !1, e);
                    return g;
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                t(this) ? fb(this).show() : fb(this).hide();
            });
        }
    }), fb.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        // We should always get a number back from opacity
                        var c = Qb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": "cssFloat"
        },
        // Get and set the style property on a DOM Node
        style: function(a, c, d, e) {
            // Don't set styles on text and comment nodes
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                // Make sure that we're working with the right name
                var f, g, h, i = fb.camelCase(c), j = a.style;
                // Check if we're setting a value
                // gets hook for the prefixed version
                // followed by the unprefixed version
                // Check if we're setting a value
                // If a hook was provided get the non-computed value from there
                // convert relative number strings (+= or -=) to relative numbers. #7345
                // Fixes bug #9237
                // Make sure that NaN and null values aren't set. See: #7116
                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                // Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
                // but it would mean to define eight (for every problematic property) identical functions
                // If a hook was provided, use that value, otherwise just set the specified value
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
                d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, 
                "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), 
                g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), 
                fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0);
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            // Make sure that we're working with the right name
            // gets hook for the prefixed version
            // followed by the unprefixed version
            // If a hook was provided get the computed value from there
            // Otherwise, if a way to get the computed value exists, use that
            //convert "normal" to computed value
            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
            h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), 
            "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f;
        }
    }), Qb = function(a, c, d) {
        var e, f, g, h = d || u(a), // Support: IE9
        // getPropertyValue is only needed for .css('filter') in IE9, see #12537
        i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        // Support: Safari 5.1
        // A tribute to the "awesome hack by Dean Edwards"
        // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
        // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
        // Remember the original values
        // Put in the new values to get a computed value out
        // Revert the changed values
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), 
        Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }, fb.each([ "height", "width" ], function(a, b) {
        fb.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                    return y(a, b, d);
                }) : y(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), // These hooks cannot be added until DOM ready because the support test
    // for it is not run until after DOM ready
    fb(function() {
        // Support: Android 2.3
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? fb.swap(a, {
                    display: "inline-block"
                }, Qb, [ a, "marginRight" ]) : void 0;
            }
        }), // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
        // getComputedStyle returns percent when specified for top/left/bottom/right
        // rather than make the css module depend on the offset module, we just check for it here
        !fb.support.pixelPosition && fb.fn.position && fb.each([ "top", "left" ], function(a, b) {
            fb.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0;
                }
            };
        });
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
        // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, fb.expr.filters.visible = function(a) {
        return !fb.expr.filters.hidden(a);
    }), // These hooks are used by animate to expand properties
    fb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, // assumes a single number if not a string
                f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Tb.test(a) || (fb.cssHooks[a + b].set = w);
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({
        serialize: function() {
            return fb.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                // Use .is(":disabled") so that fieldset[disabled] works
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a));
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(cc, "\r\n")
                };
            }).get();
        }
    }), //Serialize an array of form elements or a set of
    //key/values into a query string
    fb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            // If value is a function, invoke it and return its value
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        // If an array was passed in, assume that it is an array of form elements.
        if (// Set traditional to true for jQuery <= 1.3.2 behavior.
        c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) // Serialize the form elements
        fb.each(a, function() {
            f(this.name, this.value);
        }); else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for (d in a) B(d, a[d], c, f);
        // Return the resulting serialization
        return e.join("&").replace(ac, "+");
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        // Handle event binding
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), fb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            // ( namespace ) or ( selector, types [, fn] )
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var // Document location
    fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, // #7653, #8125, #8152: local protocol detection
    mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, // Keep a copy of the old load method
    qc = fb.fn.load, /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
    rc = {}, /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
    sc = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    tc = "*/".concat("*");
    // #8138, IE may throw an exception when accessing
    // a field from window.location if document.domain has been set
    try {
        gc = S.href;
    } catch (uc) {
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        gc = T.createElement("a"), gc.href = "", gc = gc.href;
    }
    // Segment location into parts
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
        if ("string" != typeof a && qc) return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        // If it's a function
        // We assume that it's the callback
        // If we have elements to modify, make the request
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
            url: a,
            // if "type" variable is undefined, then "GET" method will be used
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            // Save response for use in complete callback
            g = arguments, h.html(e ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            fb("<div>").append(fb.parseHTML(a)).find(e) : // Otherwise use the full result
            a);
        }).complete(d && function(a, b) {
            h.each(d, g || [ a.responseText, b, a ]);
        }), this;
    }, // Attach a bunch of functions for handling common AJAX events
    fb.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), fb.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gc,
            type: "GET",
            isLocal: mc.test(fc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */
            accepts: {
                "*": tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": !0,
                // Evaluate text as a json expression
                "text json": fb.parseJSON,
                // Parse text as xml
                "text xml": fb.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(a, b) {
            // Building a settings object
            // Extending ajaxSettings
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a);
        },
        ajaxPrefilter: C(rc),
        ajaxTransport: C(sc),
        // Main method
        ajax: function(a, c) {
            // Callback for when everything is done
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                // Called once
                2 !== u && (// State is "done" now
                u = 2, // Clear timeout if it exists
                i && clearTimeout(i), // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                e = b, // Cache response headers
                g = h || "", // Set readyState
                w.readyState = a > 0 ? 4 : 0, // Determine if successful
                j = a >= 200 && 300 > a || 304 === a, // Get response data
                d && (t = F(m, w, d)), // Convert no matter what (that way responseXXX fields are always set)
                t = G(m, t, w, j), // If successful, handle type chaining
                j ? (// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), 
                v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), // if no content
                204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, j = !s)) : (// We extract error from statusText
                // then normalize statusText and status for non-aborts
                s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), // Set data for the fake xhr object
                w.status = a, w.statusText = (c || x) + "", // Success/Error
                j ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), // Status-dependent callbacks
                w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [ w, m, j ? l : s ]), 
                // Complete
                q.fireWith(n, [ w, x ]), k && (o.trigger("ajaxComplete", [ w, m ]), // Handle the global AJAX counter
                --fb.active || fb.event.trigger("ajaxStop")));
            }
            // If url is an object, simulate pre-1.5 signature
            "object" == typeof a && (c = a, a = b), // Force options to be an object
            c = c || {};
            var e, // URL without anti-cache param
            f, // Response headers
            g, h, // timeout handle
            i, // Cross-domain detection vars
            j, // To know if global events are to be dispatched
            k, // Loop variable
            l, // Create the final options object
            m = fb.ajaxSetup({}, c), // Callbacks context
            n = m.context || m, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, // Deferreds
            p = fb.Deferred(), q = fb.Callbacks("once memory"), // Status-dependent callbacks
            r = m.statusCode || {}, // Headers (they are sent all at once)
            s = {}, t = {}, // The jqXHR state
            u = 0, // Default abort message
            v = "canceled", // Fake xhr
            w = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h) for (h = {}; b = lc.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null;
                },
                // Caches the header
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                // Overrides response content-type header
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                // Status-dependent callbacks
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) // Lazy-add the new callback in a way that preserves old ones
                    r[b] = [ r[b], a[b] ]; else // Execute the appropriate callbacks
                    w.always(a[w.status]);
                    return this;
                },
                // Cancel the request
                abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this;
                }
            };
            // If request was aborted inside a prefilter, stop there
            if (// Attach deferreds
            p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), // Alias method option to type as per ticket #12004
            m.type = c.method || c.type || m.method || m.type, // Extract dataTypes list
            m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [ "" ], // A cross-domain request is in order when we have a protocol:host:port mismatch
            null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), 
            // Convert data if not already a string
            m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), 
            // Apply prefilters
            D(rc, m, c, w), 2 === u) return w;
            // We can fire global events as of now if asked to
            k = m.global, // Watch for a new set of requests
            k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), // Uppercase the type
            m.type = m.type.toUpperCase(), // Determine if request has content
            m.hasContent = !nc.test(m.type), // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            f = m.url, // More options handling for requests with no content
            m.hasContent || (// If data is available, append data to url
            m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, // #9682: remove data so that it's not used in an eventual retry
            delete m.data), // Add anti-cache in url if needed
            m.cache === !1 && (m.url = kc.test(f) ? // If there is already a '_' parameter, set its value
            f.replace(kc, "$1_=" + hc++) : // Otherwise add one to the end
            f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), 
            fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), // Set the correct header, if data is being sent
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            // Set the Accepts header for the server, depending on the dataType
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            // Check for headers option
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            // Allow custom headers/mimetypes and early abort
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) // Abort if not done already and return
            return w.abort();
            // aborting is no longer a cancellation
            v = "abort";
            // Install callbacks on deferreds
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            // If no transport, we auto-abort
            if (// Get transport
            e = D(sc, m, c, w)) {
                w.readyState = 1, // Send global event
                k && o.trigger("ajaxSend", [ w, m ]), // Timeout
                m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, e.send(s, d);
                } catch (x) {
                    // Propagate exception as error if not done
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return fb.get(a, b, c, "script");
        }
    }), fb.each([ "get", "post" ], function(a, c) {
        fb[c] = function(a, d, e, f) {
            // shift arguments if data argument was omitted
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), // Install script dataType
    fb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fb.globalEval(a), a;
            }
        }
    }), // Handle cache's special case and crossDomain
    fb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), // Bind script tag hack transport
    fb.ajaxTransport("script", function(a) {
        // This transport only deals with cross domain requests
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fb("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), T.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    fb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a;
        }
    }), // Detect, normalize options and install callbacks for jsonp requests
    fb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        // Get callback name, remembering preexisting value associated with it
        // Insert callback into url or form data
        // Use data converter to retrieve json after script execution
        // force json dataType
        // Install callback
        // Clean-up function (fires after converters)
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || fb.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            // Restore preexisting value
            a[f] = g, // Save back as free
            c[f] && (// make sure that re-using the options doesn't screw things around
            c.jsonpCallback = d.jsonpCallback, // save the callback name for future use
            vc.push(f)), // Call if it was a function and we have a response
            h && fb.isFunction(g) && g(h[0]), h = g = b;
        }), "script") : void 0;
    }), fb.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var xc = fb.ajaxSettings.xhr(), yc = {
        // file protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE9
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, // Support: IE9
    // We need to keep track of outbound xhr and abort them manually
    // because IE is not smart enough to do it all by itself
    zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in Ac) Ac[a]();
        Ac = b;
    }), fb.support.cors = !!xc && "withCredentials" in xc, fb.support.ajax = xc = !!xc, 
    fb.ajaxTransport(function(a) {
        var c;
        // Cross domain only allowed if supported through XMLHttpRequest
        // Cross domain only allowed if supported through XMLHttpRequest
        return fb.support.cors || xc && !a.crossDomain ? {
            send: function(d, e) {
                var f, g, h = a.xhr();
                // Apply custom fields if provided
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (f in a.xhrFields) h[f] = a.xhrFields[f];
                // Override mime type if needed
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                // Set headers
                for (f in d) h.setRequestHeader(f, d[f]);
                // Callback
                c = function(a) {
                    return function() {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(// file protocol always yields status 0, assume 404
                        h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, // Support: IE9
                        // #11426: When requesting binary data, IE9 will throw an exception
                        // on any attempt to access responseText
                        "string" == typeof h.responseText ? {
                            text: h.responseText
                        } : b, h.getAllResponseHeaders()));
                    };
                }, // Listen to events
                h.onload = c(), h.onerror = c("error"), // Create the abort callback
                c = Ac[g = zc++] = c("abort"), // Do send the request
                // This may raise an exception which is actually
                // handled in jQuery.ajax (so no try/catch here)
                h.send(a.hasContent && a.data || null);
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [ L ], Hc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), // Starting value computation is required for potential unit mismatches
            g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                // Trust units reported by jQuery.css
                f = f || g[3], // Make sure we update the tween properties later on
                e = e || [], // Iteratively approximate from a nonzero starting point
                g = +d || 1;
                do // If previous iteration zeroed out, double until we get *something*
                // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                h = h || ".5", // Adjust and apply
                g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            // Update tween properties
            // If a +=/-= token was provided, we're doing a relative animation
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    fb.Animation = fb.extend(J, {
        tweener: function(a, b) {
            fb.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Gc.unshift(a) : Gc.push(a);
        }
    }), fb.Tween = M, M.prototype = {
        constructor: M,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : M.propHooks._default.set(this), this;
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, // Support: IE9
    // Panic based approach to setting things on disconnected nodes
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, fb.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e);
        };
    }), fb.fn.extend({
        fadeTo: function(a, b, c, d) {
            // show any hidden elements after setting opacity to 0
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var b = J(this, fb.extend({}, a), f);
                // Empty animations, or finishing resolves immediately
                (e || qb.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                (b || !d) && fb.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                // look for any active animations, and finish them
                for (// enable finishing flag on private data
                c.finish = !0, // empty the queue first
                fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                // look for any animations in the old queue and finish them
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                // turn off finishing flag
                delete c.finish;
            });
        }
    }), // Generate shortcuts for custom animations
    fb.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), fb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {
            complete: c || !c && b || fb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fb.isFunction(b) && b
        };
        // normalize opt.queue - true/undefined/null -> "fx"
        // Queueing
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue);
        }, d;
    }, fb.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++) a = c[d], // Checks the timer has not already been removed
        a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b;
    }, fb.fx.timer = function(a) {
        a() && fb.timers.push(a) && fb.fx.start();
    }, fb.fx.interval = 13, fb.fx.start = function() {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval));
    }, fb.fx.stop = function() {
        clearInterval(Cc), Cc = null;
    }, fb.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    }, // Back Compat <1.8 extension point
    fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem;
        }).length;
    }), fb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            fb.offset.setOffset(this, a, b);
        });
        var c, d, e = this[0], f = {
            top: 0,
            left: 0
        }, g = e && e.ownerDocument;
        if (g) // Make sure it's not a disconnected DOM node
        // Make sure it's not a disconnected DOM node
        // If we don't have gBCR, just use 0,0 rather than error
        // BlackBerry 5, iOS 3 (original iPhone)
        return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), 
        d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f;
    }, fb.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
            // Set position first, in-case top/left are set even on static elem
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), 
            i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            // Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, fb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                // Subtract parent offsets and element margins
                // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
                // We assume that getBoundingClientRect is available when computed position is fixed
                // Get *real* offsetParent
                // Get correct offsets
                // Add offsetParent borders
                return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), 
                d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fb.css(c, "marginTop", !0),
                    left: b.left - d.left - fb.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position"); ) a = a.offsetParent;
                return a || U;
            });
        }
    }), // Create scrollLeft and scrollTop methods
    fb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function(f) {
            return fb.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : void (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g);
            }, c, f, arguments.length, null);
        };
    }), // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    fb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        fb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            // margin is only for outerHeight, outerWidth
            fb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function(c, d, e) {
                    var f;
                    // Get document width or height
                    // Get width or height on the element, requesting but not forcing parseFloat
                    // Set width or height on the element
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), // Limit scope pollution from any deprecated API
    // (function() {
    // The number of elements contained in the matched element set
    fb.fn.size = function() {
        return this.length;
    }, fb.fn.andSelf = fb.fn.addBack, // })();
    "object" == typeof module && module && "object" == typeof module.exports ? // Expose jQuery as module.exports in loaders that implement the Node
    // module pattern (including browserify). Do not create the global, since
    // the user will be storing it themselves locally, and globals are frowned
    // upon in the Node module world.
    module.exports = fb : // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb;
    }), // If there is a window object, that at least has a document property,
    // define jQuery and $ identifiers
    "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb);
}(window);