!function(e) {
    function t(a) {
        if (n[a])
            return n[a].exports;
        var s = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, t),
        s.l = !0,
        s.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 130)
}([function(e, t, n) {
    (function(e) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function t() {
                return Sa.apply(null, arguments)
            }
            function a(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }
            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }
            function r(e) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t))
                        return !1;
                return !0
            }
            function i(e) {
                return void 0 === e
            }
            function d(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }
            function o(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }
            function _(e, t) {
                var n, a = [];
                for (n = 0; n < e.length; ++n)
                    a.push(t(e[n], n));
                return a
            }
            function u(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function m(e, t) {
                for (var n in t)
                    u(t, n) && (e[n] = t[n]);
                return u(t, "toString") && (e.toString = t.toString),
                u(t, "valueOf") && (e.valueOf = t.valueOf),
                e
            }
            function l(e, t, n, a) {
                return wt(e, t, n, a, !0).utc()
            }
            function c() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }
            function h(e) {
                return null == e._pf && (e._pf = c()),
                e._pf
            }
            function M(e) {
                if (null == e._isValid) {
                    var t = h(e)
                      , n = Ha.call(t.parsedDateParts, function(e) {
                        return null != e
                    })
                      , a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
                    null != Object.isFrozen && Object.isFrozen(e))
                        return a;
                    e._isValid = a
                }
                return e._isValid
            }
            function f(e) {
                var t = l(NaN);
                return null != e ? m(h(t), e) : h(t).userInvalidated = !0,
                t
            }
            function L(e, t) {
                var n, a, s;
                if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                i(t._i) || (e._i = t._i),
                i(t._f) || (e._f = t._f),
                i(t._l) || (e._l = t._l),
                i(t._strict) || (e._strict = t._strict),
                i(t._tzm) || (e._tzm = t._tzm),
                i(t._isUTC) || (e._isUTC = t._isUTC),
                i(t._offset) || (e._offset = t._offset),
                i(t._pf) || (e._pf = h(t)),
                i(t._locale) || (e._locale = t._locale),
                ja.length > 0)
                    for (n = 0; n < ja.length; n++)
                        a = ja[n],
                        s = t[a],
                        i(s) || (e[a] = s);
                return e
            }
            function y(e) {
                L(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === xa && (xa = !0,
                t.updateOffset(this),
                xa = !1)
            }
            function Y(e) {
                return e instanceof y || null != e && null != e._isAMomentObject
            }
            function p(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }
            function k(e) {
                var t = +e
                  , n = 0;
                return 0 !== t && isFinite(t) && (n = p(t)),
                n
            }
            function D(e, t, n) {
                var a, s = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0;
                for (a = 0; a < s; a++)
                    (n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && i++;
                return i + r
            }
            function g(e) {
                !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }
            function T(e, n) {
                var a = !0;
                return m(function() {
                    if (null != t.deprecationHandler && t.deprecationHandler(null, e),
                    a) {
                        for (var s, r = [], i = 0; i < arguments.length; i++) {
                            if (s = "",
                            "object" == typeof arguments[i]) {
                                s += "\n[" + i + "] ";
                                for (var d in arguments[0])
                                    s += d + ": " + arguments[0][d] + ", ";
                                s = s.slice(0, -2)
                            } else
                                s = arguments[i];
                            r.push(s)
                        }
                        g(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack),
                        a = !1
                    }
                    return n.apply(this, arguments)
                }, n)
            }
            function w(e, n) {
                null != t.deprecationHandler && t.deprecationHandler(e, n),
                Oa[e] || (g(n),
                Oa[e] = !0)
            }
            function v(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            function b(e) {
                var t, n;
                for (n in e)
                    t = e[n],
                    v(t) ? this[n] = t : this["_" + n] = t;
                this._config = e,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            function S(e, t) {
                var n, a = m({}, e);
                for (n in t)
                    u(t, n) && (s(e[n]) && s(t[n]) ? (a[n] = {},
                    m(a[n], e[n]),
                    m(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                for (n in e)
                    u(e, n) && !u(t, n) && s(e[n]) && (a[n] = m({}, a[n]));
                return a
            }
            function H(e) {
                null != e && this.set(e)
            }
            function j(e, t, n) {
                var a = this._calendar[e] || this._calendar.sameElse;
                return v(a) ? a.call(t, n) : a
            }
            function x(e) {
                var t = this._longDateFormat[e]
                  , n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }),
                this._longDateFormat[e])
            }
            function O() {
                return this._invalidDate
            }
            function P(e) {
                return this._ordinal.replace("%d", e)
            }
            function A(e, t, n, a) {
                var s = this._relativeTime[n];
                return v(s) ? s(e, t, n, a) : s.replace(/%d/i, e)
            }
            function E(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return v(n) ? n(t) : n.replace(/%s/i, t)
            }
            function W(e, t) {
                var n = e.toLowerCase();
                za[n] = za[n + "s"] = za[t] = e
            }
            function F(e) {
                return "string" == typeof e ? za[e] || za[e.toLowerCase()] : void 0
            }
            function z(e) {
                var t, n, a = {};
                for (n in e)
                    u(e, n) && (t = F(n)) && (a[t] = e[n]);
                return a
            }
            function N(e, t) {
                Na[e] = t
            }
            function C(e) {
                var t = [];
                for (var n in e)
                    t.push({
                        unit: n,
                        priority: Na[n]
                    });
                return t.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                t
            }
            function R(e, t, n) {
                var a = "" + Math.abs(e)
                  , s = t - a.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
            }
            function J(e, t, n, a) {
                var s = a;
                "string" == typeof a && (s = function() {
                    return this[a]()
                }
                ),
                e && (Ia[e] = s),
                t && (Ia[t[0]] = function() {
                    return R(s.apply(this, arguments), t[1], t[2])
                }
                ),
                n && (Ia[n] = function() {
                    return this.localeData().ordinal(s.apply(this, arguments), e)
                }
                )
            }
            function I(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }
            function U(e) {
                var t, n, a = e.match(Ca);
                for (t = 0,
                n = a.length; t < n; t++)
                    Ia[a[t]] ? a[t] = Ia[a[t]] : a[t] = I(a[t]);
                return function(t) {
                    var s, r = "";
                    for (s = 0; s < n; s++)
                        r += v(a[s]) ? a[s].call(t, e) : a[s];
                    return r
                }
            }
            function G(e, t) {
                return e.isValid() ? (t = V(t, e.localeData()),
                Ja[t] = Ja[t] || U(t),
                Ja[t](e)) : e.localeData().invalidDate()
            }
            function V(e, t) {
                function n(e) {
                    return t.longDateFormat(e) || e
                }
                var a = 5;
                for (Ra.lastIndex = 0; a >= 0 && Ra.test(e); )
                    e = e.replace(Ra, n),
                    Ra.lastIndex = 0,
                    a -= 1;
                return e
            }
            function B(e, t, n) {
                ds[e] = v(t) ? t : function(e, a) {
                    return e && n ? n : t
                }
            }
            function q(e, t) {
                return u(ds, e) ? ds[e](t._strict, t._locale) : new RegExp(K(e))
            }
            function K(e) {
                return $(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, s) {
                    return t || n || a || s
                }))
            }
            function $(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function Z(e, t) {
                var n, a = t;
                for ("string" == typeof e && (e = [e]),
                d(t) && (a = function(e, n) {
                    n[t] = k(e)
                }
                ),
                n = 0; n < e.length; n++)
                    os[e[n]] = a
            }
            function Q(e, t) {
                Z(e, function(e, n, a, s) {
                    a._w = a._w || {},
                    t(e, a._w, a, s)
                })
            }
            function X(e, t, n) {
                null != t && u(os, e) && os[e](t, n._a, n, e)
            }
            function ee(e) {
                return te(e) ? 366 : 365
            }
            function te(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            function ne() {
                return te(this.year())
            }
            function ae(e, n) {
                return function(a) {
                    return null != a ? (re(this, e, a),
                    t.updateOffset(this, n),
                    this) : se(this, e)
                }
            }
            function se(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }
            function re(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), _e(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }
            function ie(e) {
                return e = F(e),
                v(this[e]) ? this[e]() : this
            }
            function de(e, t) {
                if ("object" == typeof e) {
                    e = z(e);
                    for (var n = C(e), a = 0; a < n.length; a++)
                        this[n[a].unit](e[n[a].unit])
                } else if (e = F(e),
                v(this[e]))
                    return this[e](t);
                return this
            }
            function oe(e, t) {
                return (e % t + t) % t
            }
            function _e(e, t) {
                if (isNaN(e) || isNaN(t))
                    return NaN;
                var n = oe(t, 12);
                return e += (t - n) / 12,
                1 === n ? te(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            function ue(e, t) {
                return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ps).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
            }
            function me(e, t) {
                return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ps.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            function le(e, t, n) {
                var a, s, r, i = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    a = 0; a < 12; ++a)
                        r = l([2e3, a]),
                        this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(),
                        this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
                return n ? "MMM" === t ? (s = ys.call(this._shortMonthsParse, i),
                -1 !== s ? s : null) : (s = ys.call(this._longMonthsParse, i),
                -1 !== s ? s : null) : "MMM" === t ? -1 !== (s = ys.call(this._shortMonthsParse, i)) ? s : (s = ys.call(this._longMonthsParse, i),
                -1 !== s ? s : null) : -1 !== (s = ys.call(this._longMonthsParse, i)) ? s : (s = ys.call(this._shortMonthsParse, i),
                -1 !== s ? s : null)
            }
            function ce(e, t, n) {
                var a, s, r;
                if (this._monthsParseExact)
                    return le.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                a = 0; a < 12; a++) {
                    if (s = l([2e3, a]),
                    n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$","i")),
                    n || this._monthsParse[a] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""),
                    this._monthsParse[a] = new RegExp(r.replace(".", ""),"i")),
                    n && "MMMM" === t && this._longMonthsParse[a].test(e))
                        return a;
                    if (n && "MMM" === t && this._shortMonthsParse[a].test(e))
                        return a;
                    if (!n && this._monthsParse[a].test(e))
                        return a
                }
            }
            function he(e, t) {
                var n;
                if (!e.isValid())
                    return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t))
                        t = k(t);
                    else if (t = e.localeData().monthsParse(t),
                    !d(t))
                        return e;
                return n = Math.min(e.date(), _e(e.year(), t)),
                e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
                e
            }
            function Me(e) {
                return null != e ? (he(this, e),
                t.updateOffset(this, !0),
                this) : se(this, "Month")
            }
            function fe() {
                return _e(this.year(), this.month())
            }
            function Le(e) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || Ye.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = gs),
                this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            function ye(e) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || Ye.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Ts),
                this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }
            function Ye() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, a = [], s = [], r = [];
                for (t = 0; t < 12; t++)
                    n = l([2e3, t]),
                    a.push(this.monthsShort(n, "")),
                    s.push(this.months(n, "")),
                    r.push(this.months(n, "")),
                    r.push(this.monthsShort(n, ""));
                for (a.sort(e),
                s.sort(e),
                r.sort(e),
                t = 0; t < 12; t++)
                    a[t] = $(a[t]),
                    s[t] = $(s[t]);
                for (t = 0; t < 24; t++)
                    r[t] = $(r[t]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")","i")
            }
            function pe(e, t, n, a, s, r, i) {
                var d = new Date(e,t,n,a,s,r,i);
                return e < 100 && e >= 0 && isFinite(d.getFullYear()) && d.setFullYear(e),
                d
            }
            function ke(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
                t
            }
            function De(e, t, n) {
                var a = 7 + t - n;
                return -(7 + ke(e, 0, a).getUTCDay() - t) % 7 + a - 1
            }
            function ge(e, t, n, a, s) {
                var r, i, d = (7 + n - a) % 7, o = De(e, a, s), _ = 1 + 7 * (t - 1) + d + o;
                return _ <= 0 ? (r = e - 1,
                i = ee(r) + _) : _ > ee(e) ? (r = e + 1,
                i = _ - ee(e)) : (r = e,
                i = _),
                {
                    year: r,
                    dayOfYear: i
                }
            }
            function Te(e, t, n) {
                var a, s, r = De(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                return i < 1 ? (s = e.year() - 1,
                a = i + we(s, t, n)) : i > we(e.year(), t, n) ? (a = i - we(e.year(), t, n),
                s = e.year() + 1) : (s = e.year(),
                a = i),
                {
                    week: a,
                    year: s
                }
            }
            function we(e, t, n) {
                var a = De(e, t, n)
                  , s = De(e + 1, t, n);
                return (ee(e) - a + s) / 7
            }
            function ve(e) {
                return Te(e, this._week.dow, this._week.doy).week
            }
            function be() {
                return this._week.dow
            }
            function Se() {
                return this._week.doy
            }
            function He(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }
            function je(e) {
                var t = Te(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }
            function xe(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e),
                "number" == typeof e ? e : null) : parseInt(e, 10)
            }
            function Oe(e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }
            function Pe(e, t) {
                return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }
            function Ae(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }
            function Ee(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }
            function We(e, t, n) {
                var a, s, r, i = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    a = 0; a < 7; ++a)
                        r = l([2e3, 1]).day(a),
                        this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                        this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
                return n ? "dddd" === t ? (s = ys.call(this._weekdaysParse, i),
                -1 !== s ? s : null) : "ddd" === t ? (s = ys.call(this._shortWeekdaysParse, i),
                -1 !== s ? s : null) : (s = ys.call(this._minWeekdaysParse, i),
                -1 !== s ? s : null) : "dddd" === t ? -1 !== (s = ys.call(this._weekdaysParse, i)) ? s : -1 !== (s = ys.call(this._shortWeekdaysParse, i)) ? s : (s = ys.call(this._minWeekdaysParse, i),
                -1 !== s ? s : null) : "ddd" === t ? -1 !== (s = ys.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = ys.call(this._weekdaysParse, i)) ? s : (s = ys.call(this._minWeekdaysParse, i),
                -1 !== s ? s : null) : -1 !== (s = ys.call(this._minWeekdaysParse, i)) ? s : -1 !== (s = ys.call(this._weekdaysParse, i)) ? s : (s = ys.call(this._shortWeekdaysParse, i),
                -1 !== s ? s : null)
            }
            function Fe(e, t, n) {
                var a, s, r;
                if (this._weekdaysParseExact)
                    return We.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                a = 0; a < 7; a++) {
                    if (s = l([2e3, 1]).day(a),
                    n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$","i"),
                    this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$","i"),
                    this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$","i")),
                    this._weekdaysParse[a] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""),
                    this._weekdaysParse[a] = new RegExp(r.replace(".", ""),"i")),
                    n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
                        return a;
                    if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e))
                        return a;
                    if (n && "dd" === t && this._minWeekdaysParse[a].test(e))
                        return a;
                    if (!n && this._weekdaysParse[a].test(e))
                        return a
                }
            }
            function ze(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = xe(e, this.localeData()),
                this.add(e - t, "d")) : t
            }
            function Ne(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }
            function Ce(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                if (null != e) {
                    var t = Oe(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }
            function Re(e) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ue.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Hs),
                this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            function Je(e) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ue.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = js),
                this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            function Ie(e) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ue.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xs),
                this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            function Ue() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, a, s, r, i = [], d = [], o = [], _ = [];
                for (t = 0; t < 7; t++)
                    n = l([2e3, 1]).day(t),
                    a = this.weekdaysMin(n, ""),
                    s = this.weekdaysShort(n, ""),
                    r = this.weekdays(n, ""),
                    i.push(a),
                    d.push(s),
                    o.push(r),
                    _.push(a),
                    _.push(s),
                    _.push(r);
                for (i.sort(e),
                d.sort(e),
                o.sort(e),
                _.sort(e),
                t = 0; t < 7; t++)
                    d[t] = $(d[t]),
                    o[t] = $(o[t]),
                    _[t] = $(_[t]);
                this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")","i")
            }
            function Ge() {
                return this.hours() % 12 || 12
            }
            function Ve() {
                return this.hours() || 24
            }
            function Be(e, t) {
                J(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }
            function qe(e, t) {
                return t._meridiemParse
            }
            function Ke(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }
            function $e(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            function Ze(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function Qe(e) {
                for (var t, n, a, s, r = 0; r < e.length; ) {
                    for (s = Ze(e[r]).split("-"),
                    t = s.length,
                    n = Ze(e[r + 1]),
                    n = n ? n.split("-") : null; t > 0; ) {
                        if (a = Xe(s.slice(0, t).join("-")))
                            return a;
                        if (n && n.length >= t && D(s, n, !0) >= t - 1)
                            break;
                        t--
                    }
                    r++
                }
                return null
            }
            function Xe(t) {
                var a = null;
                if (!Ws[t] && void 0 !== e && e && e.exports)
                    try {
                        a = Os._abbr;
                        n(159)("./" + t),
                        et(a)
                    } catch (e) {}
                return Ws[t]
            }
            function et(e, t) {
                var n;
                return e && (n = i(t) ? at(e) : tt(e, t)) && (Os = n),
                Os._abbr
            }
            function tt(e, t) {
                if (null !== t) {
                    var n = Es;
                    if (t.abbr = e,
                    null != Ws[e])
                        w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        n = Ws[e]._config;
                    else if (null != t.parentLocale) {
                        if (null == Ws[t.parentLocale])
                            return Fs[t.parentLocale] || (Fs[t.parentLocale] = []),
                            Fs[t.parentLocale].push({
                                name: e,
                                config: t
                            }),
                            null;
                        n = Ws[t.parentLocale]._config
                    }
                    return Ws[e] = new H(S(n, t)),
                    Fs[e] && Fs[e].forEach(function(e) {
                        tt(e.name, e.config)
                    }),
                    et(e),
                    Ws[e]
                }
                return delete Ws[e],
                null
            }
            function nt(e, t) {
                if (null != t) {
                    var n, a, s = Es;
                    a = Xe(e),
                    null != a && (s = a._config),
                    t = S(s, t),
                    n = new H(t),
                    n.parentLocale = Ws[e],
                    Ws[e] = n,
                    et(e)
                } else
                    null != Ws[e] && (null != Ws[e].parentLocale ? Ws[e] = Ws[e].parentLocale : null != Ws[e] && delete Ws[e]);
                return Ws[e]
            }
            function at(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                !e)
                    return Os;
                if (!a(e)) {
                    if (t = Xe(e))
                        return t;
                    e = [e]
                }
                return Qe(e)
            }
            function st() {
                return Pa(Ws)
            }
            function rt(e) {
                var t, n = e._a;
                return n && -2 === h(e).overflow && (t = n[us] < 0 || n[us] > 11 ? us : n[ms] < 1 || n[ms] > _e(n[_s], n[us]) ? ms : n[ls] < 0 || n[ls] > 24 || 24 === n[ls] && (0 !== n[cs] || 0 !== n[hs] || 0 !== n[Ms]) ? ls : n[cs] < 0 || n[cs] > 59 ? cs : n[hs] < 0 || n[hs] > 59 ? hs : n[Ms] < 0 || n[Ms] > 999 ? Ms : -1,
                h(e)._overflowDayOfYear && (t < _s || t > ms) && (t = ms),
                h(e)._overflowWeeks && -1 === t && (t = fs),
                h(e)._overflowWeekday && -1 === t && (t = Ls),
                h(e).overflow = t),
                e
            }
            function it(e, t, n) {
                return null != e ? e : null != t ? t : n
            }
            function dt(e) {
                var n = new Date(t.now());
                return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }
            function ot(e) {
                var t, n, a, s, r, i = [];
                if (!e._d) {
                    for (a = dt(e),
                    e._w && null == e._a[ms] && null == e._a[us] && _t(e),
                    null != e._dayOfYear && (r = it(e._a[_s], a[_s]),
                    (e._dayOfYear > ee(r) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0),
                    n = ke(r, 0, e._dayOfYear),
                    e._a[us] = n.getUTCMonth(),
                    e._a[ms] = n.getUTCDate()),
                    t = 0; t < 3 && null == e._a[t]; ++t)
                        e._a[t] = i[t] = a[t];
                    for (; t < 7; t++)
                        e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[ls] && 0 === e._a[cs] && 0 === e._a[hs] && 0 === e._a[Ms] && (e._nextDay = !0,
                    e._a[ls] = 0),
                    e._d = (e._useUTC ? ke : pe).apply(null, i),
                    s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
                    null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    e._nextDay && (e._a[ls] = 24),
                    e._w && void 0 !== e._w.d && e._w.d !== s && (h(e).weekdayMismatch = !0)
                }
            }
            function _t(e) {
                var t, n, a, s, r, i, d, o;
                if (t = e._w,
                null != t.GG || null != t.W || null != t.E)
                    r = 1,
                    i = 4,
                    n = it(t.GG, e._a[_s], Te(vt(), 1, 4).year),
                    a = it(t.W, 1),
                    ((s = it(t.E, 1)) < 1 || s > 7) && (o = !0);
                else {
                    r = e._locale._week.dow,
                    i = e._locale._week.doy;
                    var _ = Te(vt(), r, i);
                    n = it(t.gg, e._a[_s], _.year),
                    a = it(t.w, _.week),
                    null != t.d ? ((s = t.d) < 0 || s > 6) && (o = !0) : null != t.e ? (s = t.e + r,
                    (t.e < 0 || t.e > 6) && (o = !0)) : s = r
                }
                a < 1 || a > we(n, r, i) ? h(e)._overflowWeeks = !0 : null != o ? h(e)._overflowWeekday = !0 : (d = ge(n, a, s, r, i),
                e._a[_s] = d.year,
                e._dayOfYear = d.dayOfYear)
            }
            function ut(e) {
                var t, n, a, s, r, i, d = e._i, o = zs.exec(d) || Ns.exec(d);
                if (o) {
                    for (h(e).iso = !0,
                    t = 0,
                    n = Rs.length; t < n; t++)
                        if (Rs[t][1].exec(o[1])) {
                            s = Rs[t][0],
                            a = !1 !== Rs[t][2];
                            break
                        }
                    if (null == s)
                        return void (e._isValid = !1);
                    if (o[3]) {
                        for (t = 0,
                        n = Js.length; t < n; t++)
                            if (Js[t][1].exec(o[3])) {
                                r = (o[2] || " ") + Js[t][0];
                                break
                            }
                        if (null == r)
                            return void (e._isValid = !1)
                    }
                    if (!a && null != r)
                        return void (e._isValid = !1);
                    if (o[4]) {
                        if (!Cs.exec(o[4]))
                            return void (e._isValid = !1);
                        i = "Z"
                    }
                    e._f = s + (r || "") + (i || ""),
                    yt(e)
                } else
                    e._isValid = !1
            }
            function mt(e, t, n, a, s, r) {
                var i = [lt(e), Ds.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(s, 10)];
                return r && i.push(parseInt(r, 10)),
                i
            }
            function lt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            function ct(e) {
                return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
            }
            function ht(e, t, n) {
                if (e) {
                    if (bs.indexOf(e) !== new Date(t[0],t[1],t[2]).getDay())
                        return h(n).weekdayMismatch = !0,
                        n._isValid = !1,
                        !1
                }
                return !0
            }
            function Mt(e, t, n) {
                if (e)
                    return Gs[e];
                if (t)
                    return 0;
                var a = parseInt(n, 10)
                  , s = a % 100;
                return (a - s) / 100 * 60 + s
            }
            function ft(e) {
                var t = Us.exec(ct(e._i));
                if (t) {
                    var n = mt(t[4], t[3], t[2], t[5], t[6], t[7]);
                    if (!ht(t[1], n, e))
                        return;
                    e._a = n,
                    e._tzm = Mt(t[8], t[9], t[10]),
                    e._d = ke.apply(null, e._a),
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    h(e).rfc2822 = !0
                } else
                    e._isValid = !1
            }
            function Lt(e) {
                var n = Is.exec(e._i);
                if (null !== n)
                    return void (e._d = new Date(+n[1]));
                ut(e),
                !1 === e._isValid && (delete e._isValid,
                ft(e),
                !1 === e._isValid && (delete e._isValid,
                t.createFromInputFallback(e)))
            }
            function yt(e) {
                if (e._f === t.ISO_8601)
                    return void ut(e);
                if (e._f === t.RFC_2822)
                    return void ft(e);
                e._a = [],
                h(e).empty = !0;
                var n, a, s, r, i, d = "" + e._i, o = d.length, _ = 0;
                for (s = V(e._f, e._locale).match(Ca) || [],
                n = 0; n < s.length; n++)
                    r = s[n],
                    a = (d.match(q(r, e)) || [])[0],
                    a && (i = d.substr(0, d.indexOf(a)),
                    i.length > 0 && h(e).unusedInput.push(i),
                    d = d.slice(d.indexOf(a) + a.length),
                    _ += a.length),
                    Ia[r] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(r),
                    X(r, a, e)) : e._strict && !a && h(e).unusedTokens.push(r);
                h(e).charsLeftOver = o - _,
                d.length > 0 && h(e).unusedInput.push(d),
                e._a[ls] <= 12 && !0 === h(e).bigHour && e._a[ls] > 0 && (h(e).bigHour = void 0),
                h(e).parsedDateParts = e._a.slice(0),
                h(e).meridiem = e._meridiem,
                e._a[ls] = Yt(e._locale, e._a[ls], e._meridiem),
                ot(e),
                rt(e)
            }
            function Yt(e, t, n) {
                var a;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n),
                a && t < 12 && (t += 12),
                a || 12 !== t || (t = 0),
                t) : t
            }
            function pt(e) {
                var t, n, a, s, r;
                if (0 === e._f.length)
                    return h(e).invalidFormat = !0,
                    void (e._d = new Date(NaN));
                for (s = 0; s < e._f.length; s++)
                    r = 0,
                    t = L({}, e),
                    null != e._useUTC && (t._useUTC = e._useUTC),
                    t._f = e._f[s],
                    yt(t),
                    M(t) && (r += h(t).charsLeftOver,
                    r += 10 * h(t).unusedTokens.length,
                    h(t).score = r,
                    (null == a || r < a) && (a = r,
                    n = t));
                m(e, n || t)
            }
            function kt(e) {
                if (!e._d) {
                    var t = z(e._i);
                    e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                        return e && parseInt(e, 10)
                    }),
                    ot(e)
                }
            }
            function Dt(e) {
                var t = new y(rt(gt(e)));
                return t._nextDay && (t.add(1, "d"),
                t._nextDay = void 0),
                t
            }
            function gt(e) {
                var t = e._i
                  , n = e._f;
                return e._locale = e._locale || at(e._l),
                null === t || void 0 === n && "" === t ? f({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                Y(t) ? new y(rt(t)) : (o(t) ? e._d = t : a(n) ? pt(e) : n ? yt(e) : Tt(e),
                M(e) || (e._d = null),
                e))
            }
            function Tt(e) {
                var n = e._i;
                i(n) ? e._d = new Date(t.now()) : o(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? Lt(e) : a(n) ? (e._a = _(n.slice(0), function(e) {
                    return parseInt(e, 10)
                }),
                ot(e)) : s(n) ? kt(e) : d(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
            }
            function wt(e, t, n, i, d) {
                var o = {};
                return !0 !== n && !1 !== n || (i = n,
                n = void 0),
                (s(e) && r(e) || a(e) && 0 === e.length) && (e = void 0),
                o._isAMomentObject = !0,
                o._useUTC = o._isUTC = d,
                o._l = n,
                o._i = e,
                o._f = t,
                o._strict = i,
                Dt(o)
            }
            function vt(e, t, n, a) {
                return wt(e, t, n, a, !1)
            }
            function bt(e, t) {
                var n, s;
                if (1 === t.length && a(t[0]) && (t = t[0]),
                !t.length)
                    return vt();
                for (n = t[0],
                s = 1; s < t.length; ++s)
                    t[s].isValid() && !t[s][e](n) || (n = t[s]);
                return n
            }
            function St() {
                return bt("isBefore", [].slice.call(arguments, 0))
            }
            function Ht() {
                return bt("isAfter", [].slice.call(arguments, 0))
            }
            function jt(e) {
                for (var t in e)
                    if (-1 === ys.call(Ks, t) || null != e[t] && isNaN(e[t]))
                        return !1;
                for (var n = !1, a = 0; a < Ks.length; ++a)
                    if (e[Ks[a]]) {
                        if (n)
                            return !1;
                        parseFloat(e[Ks[a]]) !== k(e[Ks[a]]) && (n = !0)
                    }
                return !0
            }
            function xt() {
                return this._isValid
            }
            function Ot() {
                return Zt(NaN)
            }
            function Pt(e) {
                var t = z(e)
                  , n = t.year || 0
                  , a = t.quarter || 0
                  , s = t.month || 0
                  , r = t.week || 0
                  , i = t.day || 0
                  , d = t.hour || 0
                  , o = t.minute || 0
                  , _ = t.second || 0
                  , u = t.millisecond || 0;
                this._isValid = jt(t),
                this._milliseconds = +u + 1e3 * _ + 6e4 * o + 1e3 * d * 60 * 60,
                this._days = +i + 7 * r,
                this._months = +s + 3 * a + 12 * n,
                this._data = {},
                this._locale = at(),
                this._bubble()
            }
            function At(e) {
                return e instanceof Pt
            }
            function Et(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }
            function Wt(e, t) {
                J(e, 0, 0, function() {
                    var e = this.utcOffset()
                      , n = "+";
                    return e < 0 && (e = -e,
                    n = "-"),
                    n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
                })
            }
            function Ft(e, t) {
                var n = (t || "").match(e);
                if (null === n)
                    return null;
                var a = n[n.length - 1] || []
                  , s = (a + "").match($s) || ["-", 0, 0]
                  , r = 60 * s[1] + k(s[2]);
                return 0 === r ? 0 : "+" === s[0] ? r : -r
            }
            function zt(e, n) {
                var a, s;
                return n._isUTC ? (a = n.clone(),
                s = (Y(e) || o(e) ? e.valueOf() : vt(e).valueOf()) - a.valueOf(),
                a._d.setTime(a._d.valueOf() + s),
                t.updateOffset(a, !1),
                a) : vt(e).local()
            }
            function Nt(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }
            function Ct(e, n, a) {
                var s, r = this._offset || 0;
                if (!this.isValid())
                    return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Ft(ss, e)))
                            return this
                    } else
                        Math.abs(e) < 16 && !a && (e *= 60);
                    return !this._isUTC && n && (s = Nt(this)),
                    this._offset = e,
                    this._isUTC = !0,
                    null != s && this.add(s, "m"),
                    r !== e && (!n || this._changeInProgress ? nn(this, Zt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    t.updateOffset(this, !0),
                    this._changeInProgress = null)),
                    this
                }
                return this._isUTC ? r : Nt(this)
            }
            function Rt(e, t) {
                return null != e ? ("string" != typeof e && (e = -e),
                this.utcOffset(e, t),
                this) : -this.utcOffset()
            }
            function Jt(e) {
                return this.utcOffset(0, e)
            }
            function It(e) {
                return this._isUTC && (this.utcOffset(0, e),
                this._isUTC = !1,
                e && this.subtract(Nt(this), "m")),
                this
            }
            function Ut() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Ft(as, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }
            function Gt(e) {
                return !!this.isValid() && (e = e ? vt(e).utcOffset() : 0,
                (this.utcOffset() - e) % 60 == 0)
            }
            function Vt() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function Bt() {
                if (!i(this._isDSTShifted))
                    return this._isDSTShifted;
                var e = {};
                if (L(e, this),
                e = gt(e),
                e._a) {
                    var t = e._isUTC ? l(e._a) : vt(e._a);
                    this._isDSTShifted = this.isValid() && D(e._a, t.toArray()) > 0
                } else
                    this._isDSTShifted = !1;
                return this._isDSTShifted
            }
            function qt() {
                return !!this.isValid() && !this._isUTC
            }
            function Kt() {
                return !!this.isValid() && this._isUTC
            }
            function $t() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }
            function Zt(e, t) {
                var n, a, s, r = e, i = null;
                return At(e) ? r = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : d(e) ? (r = {},
                t ? r[t] = e : r.milliseconds = e) : (i = Zs.exec(e)) ? (n = "-" === i[1] ? -1 : 1,
                r = {
                    y: 0,
                    d: k(i[ms]) * n,
                    h: k(i[ls]) * n,
                    m: k(i[cs]) * n,
                    s: k(i[hs]) * n,
                    ms: k(Et(1e3 * i[Ms])) * n
                }) : (i = Qs.exec(e)) ? (n = "-" === i[1] ? -1 : (i[1],
                1),
                r = {
                    y: Qt(i[2], n),
                    M: Qt(i[3], n),
                    w: Qt(i[4], n),
                    d: Qt(i[5], n),
                    h: Qt(i[6], n),
                    m: Qt(i[7], n),
                    s: Qt(i[8], n)
                }) : null == r ? r = {} : "object" == typeof r && ("from"in r || "to"in r) && (s = en(vt(r.from), vt(r.to)),
                r = {},
                r.ms = s.milliseconds,
                r.M = s.months),
                a = new Pt(r),
                At(e) && u(e, "_locale") && (a._locale = e._locale),
                a
            }
            function Qt(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }
            function Xt(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
                e.clone().add(n.months, "M").isAfter(t) && --n.months,
                n.milliseconds = +t - +e.clone().add(n.months, "M"),
                n
            }
            function en(e, t) {
                var n;
                return e.isValid() && t.isValid() ? (t = zt(t, e),
                e.isBefore(t) ? n = Xt(e, t) : (n = Xt(t, e),
                n.milliseconds = -n.milliseconds,
                n.months = -n.months),
                n) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function tn(e, t) {
                return function(n, a) {
                    var s, r;
                    return null === a || isNaN(+a) || (w(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    r = n,
                    n = a,
                    a = r),
                    n = "string" == typeof n ? +n : n,
                    s = Zt(n, a),
                    nn(this, s, e),
                    this
                }
            }
            function nn(e, n, a, s) {
                var r = n._milliseconds
                  , i = Et(n._days)
                  , d = Et(n._months);
                e.isValid() && (s = null == s || s,
                d && he(e, se(e, "Month") + d * a),
                i && re(e, "Date", se(e, "Date") + i * a),
                r && e._d.setTime(e._d.valueOf() + r * a),
                s && t.updateOffset(e, i || d))
            }
            function an(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }
            function sn(e, n) {
                var a = e || vt()
                  , s = zt(a, this).startOf("day")
                  , r = t.calendarFormat(this, s) || "sameElse"
                  , i = n && (v(n[r]) ? n[r].call(this, a) : n[r]);
                return this.format(i || this.localeData().calendar(r, this, vt(a)))
            }
            function rn() {
                return new y(this)
            }
            function dn(e, t) {
                var n = Y(e) ? e : vt(e);
                return !(!this.isValid() || !n.isValid()) && (t = F(i(t) ? "millisecond" : t),
                "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }
            function on(e, t) {
                var n = Y(e) ? e : vt(e);
                return !(!this.isValid() || !n.isValid()) && (t = F(i(t) ? "millisecond" : t),
                "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }
            function _n(e, t, n, a) {
                return a = a || "()",
                ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            }
            function un(e, t) {
                var n, a = Y(e) ? e : vt(e);
                return !(!this.isValid() || !a.isValid()) && (t = F(t || "millisecond"),
                "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(),
                this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }
            function mn(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }
            function ln(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }
            function cn(e, t, n) {
                var a, s, r;
                if (!this.isValid())
                    return NaN;
                if (a = zt(e, this),
                !a.isValid())
                    return NaN;
                switch (s = 6e4 * (a.utcOffset() - this.utcOffset()),
                t = F(t)) {
                case "year":
                    r = hn(this, a) / 12;
                    break;
                case "month":
                    r = hn(this, a);
                    break;
                case "quarter":
                    r = hn(this, a) / 3;
                    break;
                case "second":
                    r = (this - a) / 1e3;
                    break;
                case "minute":
                    r = (this - a) / 6e4;
                    break;
                case "hour":
                    r = (this - a) / 36e5;
                    break;
                case "day":
                    r = (this - a - s) / 864e5;
                    break;
                case "week":
                    r = (this - a - s) / 6048e5;
                    break;
                default:
                    r = this - a
                }
                return n ? r : p(r)
            }
            function hn(e, t) {
                var n, a, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), r = e.clone().add(s, "months");
                return t - r < 0 ? (n = e.clone().add(s - 1, "months"),
                a = (t - r) / (r - n)) : (n = e.clone().add(s + 1, "months"),
                a = (t - r) / (n - r)),
                -(s + a) || 0
            }
            function Mn() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function fn(e) {
                if (!this.isValid())
                    return null;
                var t = !0 !== e
                  , n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? G(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : v(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", G(n, "Z")) : G(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            function Ln() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var e = "moment"
                  , t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                t = "Z");
                var n = "[" + e + '("]'
                  , a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
                  , s = t + '[")]';
                return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + s)
            }
            function yn(e) {
                e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                var n = G(this, e);
                return this.localeData().postformat(n)
            }
            function Yn(e, t) {
                return this.isValid() && (Y(e) && e.isValid() || vt(e).isValid()) ? Zt({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }
            function pn(e) {
                return this.from(vt(), e)
            }
            function kn(e, t) {
                return this.isValid() && (Y(e) && e.isValid() || vt(e).isValid()) ? Zt({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }
            function Dn(e) {
                return this.to(vt(), e)
            }
            function gn(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = at(e),
                null != t && (this._locale = t),
                this)
            }
            function Tn() {
                return this._locale
            }
            function wn(e) {
                switch (e = F(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
                }
                return "week" === e && this.weekday(0),
                "isoWeek" === e && this.isoWeekday(1),
                "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
                this
            }
            function vn(e) {
                return void 0 === (e = F(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"),
                this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }
            function bn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function Sn() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function Hn() {
                return new Date(this.valueOf())
            }
            function jn() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }
            function xn() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }
            function On() {
                return this.isValid() ? this.toISOString() : null
            }
            function Pn() {
                return M(this)
            }
            function An() {
                return m({}, h(this))
            }
            function En() {
                return h(this).overflow
            }
            function Wn() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function Fn(e, t) {
                J(0, [e, e.length], 0, t)
            }
            function zn(e) {
                return Jn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function Nn(e) {
                return Jn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function Cn() {
                return we(this.year(), 1, 4)
            }
            function Rn() {
                var e = this.localeData()._week;
                return we(this.year(), e.dow, e.doy)
            }
            function Jn(e, t, n, a, s) {
                var r;
                return null == e ? Te(this, a, s).year : (r = we(e, a, s),
                t > r && (t = r),
                In.call(this, e, t, n, a, s))
            }
            function In(e, t, n, a, s) {
                var r = ge(e, t, n, a, s)
                  , i = ke(r.year, 0, r.dayOfYear);
                return this.year(i.getUTCFullYear()),
                this.month(i.getUTCMonth()),
                this.date(i.getUTCDate()),
                this
            }
            function Un(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }
            function Gn(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }
            function Vn(e, t) {
                t[Ms] = k(1e3 * ("0." + e))
            }
            function Bn() {
                return this._isUTC ? "UTC" : ""
            }
            function qn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            function Kn(e) {
                return vt(1e3 * e)
            }
            function $n() {
                return vt.apply(null, arguments).parseZone()
            }
            function Zn(e) {
                return e
            }
            function Qn(e, t, n, a) {
                var s = at()
                  , r = l().set(a, t);
                return s[n](r, e)
            }
            function Xn(e, t, n) {
                if (d(e) && (t = e,
                e = void 0),
                e = e || "",
                null != t)
                    return Qn(e, t, n, "month");
                var a, s = [];
                for (a = 0; a < 12; a++)
                    s[a] = Qn(e, a, n, "month");
                return s
            }
            function ea(e, t, n, a) {
                "boolean" == typeof e ? (d(t) && (n = t,
                t = void 0),
                t = t || "") : (t = e,
                n = t,
                e = !1,
                d(t) && (n = t,
                t = void 0),
                t = t || "");
                var s = at()
                  , r = e ? s._week.dow : 0;
                if (null != n)
                    return Qn(t, (n + r) % 7, a, "day");
                var i, o = [];
                for (i = 0; i < 7; i++)
                    o[i] = Qn(t, (i + r) % 7, a, "day");
                return o
            }
            function ta(e, t) {
                return Xn(e, t, "months")
            }
            function na(e, t) {
                return Xn(e, t, "monthsShort")
            }
            function aa(e, t, n) {
                return ea(e, t, n, "weekdays")
            }
            function sa(e, t, n) {
                return ea(e, t, n, "weekdaysShort")
            }
            function ra(e, t, n) {
                return ea(e, t, n, "weekdaysMin")
            }
            function ia() {
                var e = this._data;
                return this._milliseconds = _r(this._milliseconds),
                this._days = _r(this._days),
                this._months = _r(this._months),
                e.milliseconds = _r(e.milliseconds),
                e.seconds = _r(e.seconds),
                e.minutes = _r(e.minutes),
                e.hours = _r(e.hours),
                e.months = _r(e.months),
                e.years = _r(e.years),
                this
            }
            function da(e, t, n, a) {
                var s = Zt(t, n);
                return e._milliseconds += a * s._milliseconds,
                e._days += a * s._days,
                e._months += a * s._months,
                e._bubble()
            }
            function oa(e, t) {
                return da(this, e, t, 1)
            }
            function _a(e, t) {
                return da(this, e, t, -1)
            }
            function ua(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }
            function ma() {
                var e, t, n, a, s, r = this._milliseconds, i = this._days, d = this._months, o = this._data;
                return r >= 0 && i >= 0 && d >= 0 || r <= 0 && i <= 0 && d <= 0 || (r += 864e5 * ua(ca(d) + i),
                i = 0,
                d = 0),
                o.milliseconds = r % 1e3,
                e = p(r / 1e3),
                o.seconds = e % 60,
                t = p(e / 60),
                o.minutes = t % 60,
                n = p(t / 60),
                o.hours = n % 24,
                i += p(n / 24),
                s = p(la(i)),
                d += s,
                i -= ua(ca(s)),
                a = p(d / 12),
                d %= 12,
                o.days = i,
                o.months = d,
                o.years = a,
                this
            }
            function la(e) {
                return 4800 * e / 146097
            }
            function ca(e) {
                return 146097 * e / 4800
            }
            function ha(e) {
                if (!this.isValid())
                    return NaN;
                var t, n, a = this._milliseconds;
                if ("month" === (e = F(e)) || "year" === e)
                    return t = this._days + a / 864e5,
                    n = this._months + la(t),
                    "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(ca(this._months)),
                e) {
                case "week":
                    return t / 7 + a / 6048e5;
                case "day":
                    return t + a / 864e5;
                case "hour":
                    return 24 * t + a / 36e5;
                case "minute":
                    return 1440 * t + a / 6e4;
                case "second":
                    return 86400 * t + a / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + a;
                default:
                    throw new Error("Unknown unit " + e)
                }
            }
            function Ma() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
            }
            function fa(e) {
                return function() {
                    return this.as(e)
                }
            }
            function La() {
                return Zt(this)
            }
            function ya(e) {
                return e = F(e),
                this.isValid() ? this[e + "s"]() : NaN
            }
            function Ya(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            function pa() {
                return p(this.days() / 7)
            }
            function ka(e, t, n, a, s) {
                return s.relativeTime(t || 1, !!n, e, a)
            }
            function Da(e, t, n) {
                var a = Zt(e).abs()
                  , s = wr(a.as("s"))
                  , r = wr(a.as("m"))
                  , i = wr(a.as("h"))
                  , d = wr(a.as("d"))
                  , o = wr(a.as("M"))
                  , _ = wr(a.as("y"))
                  , u = s <= vr.ss && ["s", s] || s < vr.s && ["ss", s] || r <= 1 && ["m"] || r < vr.m && ["mm", r] || i <= 1 && ["h"] || i < vr.h && ["hh", i] || d <= 1 && ["d"] || d < vr.d && ["dd", d] || o <= 1 && ["M"] || o < vr.M && ["MM", o] || _ <= 1 && ["y"] || ["yy", _];
                return u[2] = t,
                u[3] = +e > 0,
                u[4] = n,
                ka.apply(null, u)
            }
            function ga(e) {
                return void 0 === e ? wr : "function" == typeof e && (wr = e,
                !0)
            }
            function Ta(e, t) {
                return void 0 !== vr[e] && (void 0 === t ? vr[e] : (vr[e] = t,
                "s" === e && (vr.ss = t - 1),
                !0))
            }
            function wa(e) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var t = this.localeData()
                  , n = Da(this, !e, t);
                return e && (n = t.pastFuture(+this, n)),
                t.postformat(n)
            }
            function va(e) {
                return (e > 0) - (e < 0) || +e
            }
            function ba() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var e, t, n, a = br(this._milliseconds) / 1e3, s = br(this._days), r = br(this._months);
                e = p(a / 60),
                t = p(e / 60),
                a %= 60,
                e %= 60,
                n = p(r / 12),
                r %= 12;
                var i = n
                  , d = r
                  , o = s
                  , _ = t
                  , u = e
                  , m = a ? a.toFixed(3).replace(/\.?0+$/, "") : ""
                  , l = this.asSeconds();
                if (!l)
                    return "P0D";
                var c = l < 0 ? "-" : ""
                  , h = va(this._months) !== va(l) ? "-" : ""
                  , M = va(this._days) !== va(l) ? "-" : ""
                  , f = va(this._milliseconds) !== va(l) ? "-" : "";
                return c + "P" + (i ? h + i + "Y" : "") + (d ? h + d + "M" : "") + (o ? M + o + "D" : "") + (_ || u || m ? "T" : "") + (_ ? f + _ + "H" : "") + (u ? f + u + "M" : "") + (m ? f + m + "S" : "")
            }
            var Sa, Ha;
            Ha = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                    if (a in t && e.call(this, t[a], a, t))
                        return !0;
                return !1
            }
            ;
            var ja = t.momentProperties = []
              , xa = !1
              , Oa = {};
            t.suppressDeprecationWarnings = !1,
            t.deprecationHandler = null;
            var Pa;
            Pa = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e)
                    u(e, t) && n.push(t);
                return n
            }
            ;
            var Aa = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }
              , Ea = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }
              , Wa = /\d{1,2}/
              , Fa = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }
              , za = {}
              , Na = {}
              , Ca = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
              , Ra = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
              , Ja = {}
              , Ia = {}
              , Ua = /\d/
              , Ga = /\d\d/
              , Va = /\d{3}/
              , Ba = /\d{4}/
              , qa = /[+-]?\d{6}/
              , Ka = /\d\d?/
              , $a = /\d\d\d\d?/
              , Za = /\d\d\d\d\d\d?/
              , Qa = /\d{1,3}/
              , Xa = /\d{1,4}/
              , es = /[+-]?\d{1,6}/
              , ts = /\d+/
              , ns = /[+-]?\d+/
              , as = /Z|[+-]\d\d:?\d\d/gi
              , ss = /Z|[+-]\d\d(?::?\d\d)?/gi
              , rs = /[+-]?\d+(\.\d{1,3})?/
              , is = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
              , ds = {}
              , os = {}
              , _s = 0
              , us = 1
              , ms = 2
              , ls = 3
              , cs = 4
              , hs = 5
              , Ms = 6
              , fs = 7
              , Ls = 8;
            J("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }),
            J(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }),
            J(0, ["YYYY", 4], 0, "year"),
            J(0, ["YYYYY", 5], 0, "year"),
            J(0, ["YYYYYY", 6, !0], 0, "year"),
            W("year", "y"),
            N("year", 1),
            B("Y", ns),
            B("YY", Ka, Ga),
            B("YYYY", Xa, Ba),
            B("YYYYY", es, qa),
            B("YYYYYY", es, qa),
            Z(["YYYYY", "YYYYYY"], _s),
            Z("YYYY", function(e, n) {
                n[_s] = 2 === e.length ? t.parseTwoDigitYear(e) : k(e)
            }),
            Z("YY", function(e, n) {
                n[_s] = t.parseTwoDigitYear(e)
            }),
            Z("Y", function(e, t) {
                t[_s] = parseInt(e, 10)
            }),
            t.parseTwoDigitYear = function(e) {
                return k(e) + (k(e) > 68 ? 1900 : 2e3)
            }
            ;
            var ys, Ys = ae("FullYear", !0);
            ys = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e)
                        return t;
                return -1
            }
            ,
            J("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }),
            J("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }),
            J("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }),
            W("month", "M"),
            N("month", 8),
            B("M", Ka),
            B("MM", Ka, Ga),
            B("MMM", function(e, t) {
                return t.monthsShortRegex(e)
            }),
            B("MMMM", function(e, t) {
                return t.monthsRegex(e)
            }),
            Z(["M", "MM"], function(e, t) {
                t[us] = k(e) - 1
            }),
            Z(["MMM", "MMMM"], function(e, t, n, a) {
                var s = n._locale.monthsParse(e, a, n._strict);
                null != s ? t[us] = s : h(n).invalidMonth = e
            });
            var ps = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
              , ks = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , Ds = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
              , gs = is
              , Ts = is;
            J("w", ["ww", 2], "wo", "week"),
            J("W", ["WW", 2], "Wo", "isoWeek"),
            W("week", "w"),
            W("isoWeek", "W"),
            N("week", 5),
            N("isoWeek", 5),
            B("w", Ka),
            B("ww", Ka, Ga),
            B("W", Ka),
            B("WW", Ka, Ga),
            Q(["w", "ww", "W", "WW"], function(e, t, n, a) {
                t[a.substr(0, 1)] = k(e)
            });
            var ws = {
                dow: 0,
                doy: 6
            };
            J("d", 0, "do", "day"),
            J("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }),
            J("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }),
            J("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }),
            J("e", 0, 0, "weekday"),
            J("E", 0, 0, "isoWeekday"),
            W("day", "d"),
            W("weekday", "e"),
            W("isoWeekday", "E"),
            N("day", 11),
            N("weekday", 11),
            N("isoWeekday", 11),
            B("d", Ka),
            B("e", Ka),
            B("E", Ka),
            B("dd", function(e, t) {
                return t.weekdaysMinRegex(e)
            }),
            B("ddd", function(e, t) {
                return t.weekdaysShortRegex(e)
            }),
            B("dddd", function(e, t) {
                return t.weekdaysRegex(e)
            }),
            Q(["dd", "ddd", "dddd"], function(e, t, n, a) {
                var s = n._locale.weekdaysParse(e, a, n._strict);
                null != s ? t.d = s : h(n).invalidWeekday = e
            }),
            Q(["d", "e", "E"], function(e, t, n, a) {
                t[a] = k(e)
            });
            var vs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , bs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , Ss = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
              , Hs = is
              , js = is
              , xs = is;
            J("H", ["HH", 2], 0, "hour"),
            J("h", ["hh", 2], 0, Ge),
            J("k", ["kk", 2], 0, Ve),
            J("hmm", 0, 0, function() {
                return "" + Ge.apply(this) + R(this.minutes(), 2)
            }),
            J("hmmss", 0, 0, function() {
                return "" + Ge.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2)
            }),
            J("Hmm", 0, 0, function() {
                return "" + this.hours() + R(this.minutes(), 2)
            }),
            J("Hmmss", 0, 0, function() {
                return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2)
            }),
            Be("a", !0),
            Be("A", !1),
            W("hour", "h"),
            N("hour", 13),
            B("a", qe),
            B("A", qe),
            B("H", Ka),
            B("h", Ka),
            B("k", Ka),
            B("HH", Ka, Ga),
            B("hh", Ka, Ga),
            B("kk", Ka, Ga),
            B("hmm", $a),
            B("hmmss", Za),
            B("Hmm", $a),
            B("Hmmss", Za),
            Z(["H", "HH"], ls),
            Z(["k", "kk"], function(e, t, n) {
                var a = k(e);
                t[ls] = 24 === a ? 0 : a
            }),
            Z(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e),
                n._meridiem = e
            }),
            Z(["h", "hh"], function(e, t, n) {
                t[ls] = k(e),
                h(n).bigHour = !0
            }),
            Z("hmm", function(e, t, n) {
                var a = e.length - 2;
                t[ls] = k(e.substr(0, a)),
                t[cs] = k(e.substr(a)),
                h(n).bigHour = !0
            }),
            Z("hmmss", function(e, t, n) {
                var a = e.length - 4
                  , s = e.length - 2;
                t[ls] = k(e.substr(0, a)),
                t[cs] = k(e.substr(a, 2)),
                t[hs] = k(e.substr(s)),
                h(n).bigHour = !0
            }),
            Z("Hmm", function(e, t, n) {
                var a = e.length - 2;
                t[ls] = k(e.substr(0, a)),
                t[cs] = k(e.substr(a))
            }),
            Z("Hmmss", function(e, t, n) {
                var a = e.length - 4
                  , s = e.length - 2;
                t[ls] = k(e.substr(0, a)),
                t[cs] = k(e.substr(a, 2)),
                t[hs] = k(e.substr(s))
            });
            var Os, Ps = /[ap]\.?m?\.?/i, As = ae("Hours", !0), Es = {
                calendar: Aa,
                longDateFormat: Ea,
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: Wa,
                relativeTime: Fa,
                months: ks,
                monthsShort: Ds,
                week: ws,
                weekdays: vs,
                weekdaysMin: Ss,
                weekdaysShort: bs,
                meridiemParse: Ps
            }, Ws = {}, Fs = {}, zs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ns = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Cs = /Z|[+-]\d\d(?::?\d\d)?/, Rs = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Js = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Is = /^\/?Date\((\-?\d+)/i, Us = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Gs = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            t.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }),
            t.ISO_8601 = function() {}
            ,
            t.RFC_2822 = function() {}
            ;
            var Vs = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : f()
            })
              , Bs = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : f()
            })
              , qs = function() {
                return Date.now ? Date.now() : +new Date
            }
              , Ks = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            Wt("Z", ":"),
            Wt("ZZ", ""),
            B("Z", ss),
            B("ZZ", ss),
            Z(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0,
                n._tzm = Ft(ss, e)
            });
            var $s = /([\+\-]|\d\d)/gi;
            t.updateOffset = function() {}
            ;
            var Zs = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
              , Qs = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            Zt.fn = Pt.prototype,
            Zt.invalid = Ot;
            var Xs = tn(1, "add")
              , er = tn(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var tr = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            J(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }),
            J(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }),
            Fn("gggg", "weekYear"),
            Fn("ggggg", "weekYear"),
            Fn("GGGG", "isoWeekYear"),
            Fn("GGGGG", "isoWeekYear"),
            W("weekYear", "gg"),
            W("isoWeekYear", "GG"),
            N("weekYear", 1),
            N("isoWeekYear", 1),
            B("G", ns),
            B("g", ns),
            B("GG", Ka, Ga),
            B("gg", Ka, Ga),
            B("GGGG", Xa, Ba),
            B("gggg", Xa, Ba),
            B("GGGGG", es, qa),
            B("ggggg", es, qa),
            Q(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
                t[a.substr(0, 2)] = k(e)
            }),
            Q(["gg", "GG"], function(e, n, a, s) {
                n[s] = t.parseTwoDigitYear(e)
            }),
            J("Q", 0, "Qo", "quarter"),
            W("quarter", "Q"),
            N("quarter", 7),
            B("Q", Ua),
            Z("Q", function(e, t) {
                t[us] = 3 * (k(e) - 1)
            }),
            J("D", ["DD", 2], "Do", "date"),
            W("date", "D"),
            N("date", 9),
            B("D", Ka),
            B("DD", Ka, Ga),
            B("Do", function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }),
            Z(["D", "DD"], ms),
            Z("Do", function(e, t) {
                t[ms] = k(e.match(Ka)[0])
            });
            var nr = ae("Date", !0);
            J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            W("dayOfYear", "DDD"),
            N("dayOfYear", 4),
            B("DDD", Qa),
            B("DDDD", Va),
            Z(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = k(e)
            }),
            J("m", ["mm", 2], 0, "minute"),
            W("minute", "m"),
            N("minute", 14),
            B("m", Ka),
            B("mm", Ka, Ga),
            Z(["m", "mm"], cs);
            var ar = ae("Minutes", !1);
            J("s", ["ss", 2], 0, "second"),
            W("second", "s"),
            N("second", 15),
            B("s", Ka),
            B("ss", Ka, Ga),
            Z(["s", "ss"], hs);
            var sr = ae("Seconds", !1);
            J("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }),
            J(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }),
            J(0, ["SSS", 3], 0, "millisecond"),
            J(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }),
            J(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }),
            J(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }),
            J(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }),
            J(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }),
            J(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }),
            W("millisecond", "ms"),
            N("millisecond", 16),
            B("S", Qa, Ua),
            B("SS", Qa, Ga),
            B("SSS", Qa, Va);
            var rr;
            for (rr = "SSSS"; rr.length <= 9; rr += "S")
                B(rr, ts);
            for (rr = "S"; rr.length <= 9; rr += "S")
                Z(rr, Vn);
            var ir = ae("Milliseconds", !1);
            J("z", 0, 0, "zoneAbbr"),
            J("zz", 0, 0, "zoneName");
            var dr = y.prototype;
            dr.add = Xs,
            dr.calendar = sn,
            dr.clone = rn,
            dr.diff = cn,
            dr.endOf = vn,
            dr.format = yn,
            dr.from = Yn,
            dr.fromNow = pn,
            dr.to = kn,
            dr.toNow = Dn,
            dr.get = ie,
            dr.invalidAt = En,
            dr.isAfter = dn,
            dr.isBefore = on,
            dr.isBetween = _n,
            dr.isSame = un,
            dr.isSameOrAfter = mn,
            dr.isSameOrBefore = ln,
            dr.isValid = Pn,
            dr.lang = tr,
            dr.locale = gn,
            dr.localeData = Tn,
            dr.max = Bs,
            dr.min = Vs,
            dr.parsingFlags = An,
            dr.set = de,
            dr.startOf = wn,
            dr.subtract = er,
            dr.toArray = jn,
            dr.toObject = xn,
            dr.toDate = Hn,
            dr.toISOString = fn,
            dr.inspect = Ln,
            dr.toJSON = On,
            dr.toString = Mn,
            dr.unix = Sn,
            dr.valueOf = bn,
            dr.creationData = Wn,
            dr.year = Ys,
            dr.isLeapYear = ne,
            dr.weekYear = zn,
            dr.isoWeekYear = Nn,
            dr.quarter = dr.quarters = Un,
            dr.month = Me,
            dr.daysInMonth = fe,
            dr.week = dr.weeks = He,
            dr.isoWeek = dr.isoWeeks = je,
            dr.weeksInYear = Rn,
            dr.isoWeeksInYear = Cn,
            dr.date = nr,
            dr.day = dr.days = ze,
            dr.weekday = Ne,
            dr.isoWeekday = Ce,
            dr.dayOfYear = Gn,
            dr.hour = dr.hours = As,
            dr.minute = dr.minutes = ar,
            dr.second = dr.seconds = sr,
            dr.millisecond = dr.milliseconds = ir,
            dr.utcOffset = Ct,
            dr.utc = Jt,
            dr.local = It,
            dr.parseZone = Ut,
            dr.hasAlignedHourOffset = Gt,
            dr.isDST = Vt,
            dr.isLocal = qt,
            dr.isUtcOffset = Kt,
            dr.isUtc = $t,
            dr.isUTC = $t,
            dr.zoneAbbr = Bn,
            dr.zoneName = qn,
            dr.dates = T("dates accessor is deprecated. Use date instead.", nr),
            dr.months = T("months accessor is deprecated. Use month instead", Me),
            dr.years = T("years accessor is deprecated. Use year instead", Ys),
            dr.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Rt),
            dr.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Bt);
            var or = H.prototype;
            or.calendar = j,
            or.longDateFormat = x,
            or.invalidDate = O,
            or.ordinal = P,
            or.preparse = Zn,
            or.postformat = Zn,
            or.relativeTime = A,
            or.pastFuture = E,
            or.set = b,
            or.months = ue,
            or.monthsShort = me,
            or.monthsParse = ce,
            or.monthsRegex = ye,
            or.monthsShortRegex = Le,
            or.week = ve,
            or.firstDayOfYear = Se,
            or.firstDayOfWeek = be,
            or.weekdays = Pe,
            or.weekdaysMin = Ee,
            or.weekdaysShort = Ae,
            or.weekdaysParse = Fe,
            or.weekdaysRegex = Re,
            or.weekdaysShortRegex = Je,
            or.weekdaysMinRegex = Ie,
            or.isPM = Ke,
            or.meridiem = $e,
            et("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }),
            t.lang = T("moment.lang is deprecated. Use moment.locale instead.", et),
            t.langData = T("moment.langData is deprecated. Use moment.localeData instead.", at);
            var _r = Math.abs
              , ur = fa("ms")
              , mr = fa("s")
              , lr = fa("m")
              , cr = fa("h")
              , hr = fa("d")
              , Mr = fa("w")
              , fr = fa("M")
              , Lr = fa("y")
              , yr = Ya("milliseconds")
              , Yr = Ya("seconds")
              , pr = Ya("minutes")
              , kr = Ya("hours")
              , Dr = Ya("days")
              , gr = Ya("months")
              , Tr = Ya("years")
              , wr = Math.round
              , vr = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }
              , br = Math.abs
              , Sr = Pt.prototype;
            return Sr.isValid = xt,
            Sr.abs = ia,
            Sr.add = oa,
            Sr.subtract = _a,
            Sr.as = ha,
            Sr.asMilliseconds = ur,
            Sr.asSeconds = mr,
            Sr.asMinutes = lr,
            Sr.asHours = cr,
            Sr.asDays = hr,
            Sr.asWeeks = Mr,
            Sr.asMonths = fr,
            Sr.asYears = Lr,
            Sr.valueOf = Ma,
            Sr._bubble = ma,
            Sr.clone = La,
            Sr.get = ya,
            Sr.milliseconds = yr,
            Sr.seconds = Yr,
            Sr.minutes = pr,
            Sr.hours = kr,
            Sr.days = Dr,
            Sr.weeks = pa,
            Sr.months = gr,
            Sr.years = Tr,
            Sr.humanize = wa,
            Sr.toISOString = ba,
            Sr.toString = ba,
            Sr.toJSON = ba,
            Sr.locale = gn,
            Sr.localeData = Tn,
            Sr.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ba),
            Sr.lang = tr,
            J("X", 0, 0, "unix"),
            J("x", 0, 0, "valueOf"),
            B("x", ns),
            B("X", rs),
            Z("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }),
            Z("x", function(e, t, n) {
                n._d = new Date(k(e))
            }),
            t.version = "2.20.1",
            function(e) {
                Sa = e
            }(vt),
            t.fn = dr,
            t.min = St,
            t.max = Ht,
            t.now = qs,
            t.utc = l,
            t.unix = Kn,
            t.months = ta,
            t.isDate = o,
            t.locale = et,
            t.invalid = f,
            t.duration = Zt,
            t.isMoment = Y,
            t.weekdays = aa,
            t.parseZone = $n,
            t.localeData = at,
            t.isDuration = At,
            t.monthsShort = na,
            t.weekdaysMin = ra,
            t.defineLocale = tt,
            t.updateLocale = nt,
            t.locales = st,
            t.weekdaysShort = sa,
            t.normalizeUnits = F,
            t.relativeTimeRounding = ga,
            t.relativeTimeThreshold = Ta,
            t.calendarFormat = an,
            t.prototype = dr,
            t.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            },
            t
        })
    }
    ).call(t, n(158)(e))
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        return "[object Array]" === T.call(e)
    }
    function s(e) {
        return "[object ArrayBuffer]" === T.call(e)
    }
    function r(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function i(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }
    function d(e) {
        return "string" == typeof e
    }
    function o(e) {
        return "number" == typeof e
    }
    function _(e) {
        return void 0 === e
    }
    function u(e) {
        return null !== e && "object" == typeof e
    }
    function m(e) {
        return "[object Date]" === T.call(e)
    }
    function l(e) {
        return "[object File]" === T.call(e)
    }
    function c(e) {
        return "[object Blob]" === T.call(e)
    }
    function h(e) {
        return "[object Function]" === T.call(e)
    }
    function M(e) {
        return u(e) && h(e.pipe)
    }
    function f(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function L(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }
    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }
    function Y(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" != typeof e && (e = [e]),
            a(e))
                for (var n = 0, s = e.length; n < s; n++)
                    t.call(null, e[n], n, e);
            else
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
    }
    function p() {
        function e(e, n) {
            "object" == typeof t[n] && "object" == typeof e ? t[n] = p(t[n], e) : t[n] = e
        }
        for (var t = {}, n = 0, a = arguments.length; n < a; n++)
            Y(arguments[n], e);
        return t
    }
    function k(e, t, n) {
        return Y(t, function(t, a) {
            e[a] = n && "function" == typeof t ? D(t, n) : t
        }),
        e
    }
    var D = n(6)
      , g = n(135)
      , T = Object.prototype.toString;
    e.exports = {
        isArray: a,
        isArrayBuffer: s,
        isBuffer: g,
        isFormData: r,
        isArrayBufferView: i,
        isString: d,
        isNumber: o,
        isObject: u,
        isUndefined: _,
        isDate: m,
        isFile: l,
        isBlob: c,
        isFunction: h,
        isStream: M,
        isURLSearchParams: f,
        isStandardBrowserEnv: y,
        forEach: Y,
        merge: p,
        extend: k,
        trim: L
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.get = function(e) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelector(e)
    }
    ,
    t.getAll = function(e) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(e)
    }
    ,
    t.add = function(e, t, n) {
        return e.addEventListener(t, n)
    }
    ,
    t.addEach = function(e, t, n) {
        return e.forEach(function(e) {
            return e.addEventListener(t, n)
        })
    }
}
, function(e, t, n) {
    e.exports = n(134)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.renderModal = t.showModal = t.closeModal = void 0;
    var a = n(2);
    t.closeModal = function(e) {
        modal.classList.remove("modal__show"),
        (0,
        a.get)("body").classList.remove("stop-scrolling"),
        e.stopPropagation()
    }
    ,
    t.showModal = function() {
        modal.classList.add("modal__show"),
        (0,
        a.get)("body").classList.add("stop-scrolling")
    }
    ,
    t.renderModal = function(e) {
        return e.map(function(e) {
            var t = e.avatar ? e.avatar.includes("http") ? e.avatar : "/uploads/avatar/" + e.avatar : e.gravatar + "&s=30";
            return "\n      <li data-user=" + e.username + '>\n        <a href="/' + e.slug + '" class="img">\n          <img src="' + t + '" alt="' + e.username + '\'s avatar">\n        </a>\n        <div class="user-name">\n          <a href="/' + e.slug + '">' + e.username + "</a>\n          <span> " + (e.name ? e.name : "") + " </span>\n        </div>\n      </li>\n    "
        })
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function a(e, t) {
            !s.isUndefined(e) && s.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var s = n(1)
          , r = n(138)
          , i = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , d = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(7) : void 0 !== t && (e = n(7)),
                e
            }(),
            transformRequest: [function(e, t) {
                return r(t, "Content-Type"),
                s.isFormData(e) || s.isArrayBuffer(e) || s.isBuffer(e) || s.isStream(e) || s.isFile(e) || s.isBlob(e) ? e : s.isArrayBufferView(e) ? e.buffer : s.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : s.isObject(e) ? (a(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        d.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        s.forEach(["delete", "get", "head"], function(e) {
            d.headers[e] = {}
        }),
        s.forEach(["post", "put", "patch"], function(e) {
            d.headers[e] = s.merge(i)
        }),
        e.exports = d
    }
    ).call(t, n(137))
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
                n[a] = arguments[a];
            return e.apply(t, n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(1)
      , s = n(139)
      , r = n(141)
      , i = n(142)
      , d = n(143)
      , o = n(8)
      , _ = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(144);
    e.exports = function(e) {
        return new Promise(function(t, u) {
            var m = e.data
              , l = e.headers;
            a.isFormData(m) && delete l["Content-Type"];
            var c = new XMLHttpRequest
              , h = "onreadystatechange"
              , M = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials"in c || d(e.url) || (c = new window.XDomainRequest,
            h = "onload",
            M = !0,
            c.onprogress = function() {}
            ,
            c.ontimeout = function() {}
            ),
            e.auth) {
                var f = e.auth.username || ""
                  , L = e.auth.password || "";
                l.Authorization = "Basic " + _(f + ":" + L)
            }
            if (c.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0),
            c.timeout = e.timeout,
            c[h] = function() {
                if (c && (4 === c.readyState || M) && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders"in c ? i(c.getAllResponseHeaders()) : null
                      , a = e.responseType && "text" !== e.responseType ? c.response : c.responseText
                      , r = {
                        data: a,
                        status: 1223 === c.status ? 204 : c.status,
                        statusText: 1223 === c.status ? "No Content" : c.statusText,
                        headers: n,
                        config: e,
                        request: c
                    };
                    s(t, u, r),
                    c = null
                }
            }
            ,
            c.onerror = function() {
                u(o("Network Error", e, null, c)),
                c = null
            }
            ,
            c.ontimeout = function() {
                u(o("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", c)),
                c = null
            }
            ,
            a.isStandardBrowserEnv()) {
                var y = n(145)
                  , Y = (e.withCredentials || d(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                Y && (l[e.xsrfHeaderName] = Y)
            }
            if ("setRequestHeader"in c && a.forEach(l, function(e, t) {
                void 0 === m && "content-type" === t.toLowerCase() ? delete l[t] : c.setRequestHeader(t, e)
            }),
            e.withCredentials && (c.withCredentials = !0),
            e.responseType)
                try {
                    c.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType)
                        throw t
                }
            "function" == typeof e.onDownloadProgress && c.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken && e.cancelToken.promise.then(function(e) {
                c && (c.abort(),
                u(e),
                c = null)
            }),
            void 0 === m && (m = null),
            c.send(m)
        }
        )
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(140);
    e.exports = function(e, t, n, s, r) {
        var i = new Error(e);
        return a(i, t, n, s, r)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        this.message = e
    }
    a.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    a.prototype.__CANCEL__ = !0,
    e.exports = a
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }
          , a = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , s = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , r = function(e) {
            return function(t, n, r, i) {
                var d = a(t)
                  , o = s[e][a(t)];
                return 2 === d && (o = o[n ? 0 : 1]),
                o.replace(/%d/i, t)
            }
        }
          , i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        }
          , n = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , a = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , s = function(e) {
            return function(t, s, r, i) {
                var d = n(t)
                  , o = a[e][n(t)];
                return 2 === d && (o = o[s ? 0 : 1]),
                o.replace(/%d/i, t)
            }
        }
          , r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , n = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
        return e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        return e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e)
                    return e + "-ıncı";
                var n = e % 10
                  , a = e % 100 - n
                  , s = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[s])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }
        function n(e, n, a) {
            var s = {
                ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(s[a], +e)
        }
        return e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[У мінулую] dddd [ў] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "дзень",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                case "D":
                    return e + "-га";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10
                  , n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
        }
          , n = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        };
        return e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
        }
          , n = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        };
        return e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n) {
            return e + " " + s({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e)
        }
        function n(e) {
            switch (a(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return e + " bloaz";
            default:
                return e + " vloaz"
            }
        }
        function a(e) {
            return e > 9 ? a(e % 10) : e
        }
        function s(e, t) {
            return 2 === t ? r(e) : e
        }
        function r(e) {
            var t = {
                m: "v",
                b: "v",
                d: "z"
            };
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }
        return e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
            case "ss":
                return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return a += 1 === e ? "dan" : "dana";
            case "MM":
                return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        return e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"),
                e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }
        function n(e, n, a, s) {
            var r = e + " ";
            switch (a) {
            case "s":
                return n || s ? "pár sekund" : "pár sekundami";
            case "ss":
                return n || s ? r + (t(e) ? "sekundy" : "sekund") : r + "sekundami";
            case "m":
                return n ? "minuta" : s ? "minutu" : "minutou";
            case "mm":
                return n || s ? r + (t(e) ? "minuty" : "minut") : r + "minutami";
            case "h":
                return n ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                return n || s ? r + (t(e) ? "hodiny" : "hodin") : r + "hodinami";
            case "d":
                return n || s ? "den" : "dnem";
            case "dd":
                return n || s ? r + (t(e) ? "dny" : "dní") : r + "dny";
            case "M":
                return n || s ? "měsíc" : "měsícem";
            case "MM":
                return n || s ? r + (t(e) ? "měsíce" : "měsíců") : r + "měsíci";
            case "y":
                return n || s ? "rok" : "rokem";
            case "yy":
                return n || s ? r + (t(e) ? "roky" : "let") : r + "lety"
            }
        }
        var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")
          , s = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return e.defineLocale("cs", {
            months: a,
            monthsShort: s,
            monthsParse: function(e, t) {
                var n, a = [];
                for (n = 0; n < 12; n++)
                    a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$","i");
                return a
            }(a, s),
            shortMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++)
                    n[t] = new RegExp("^" + e[t] + "$","i");
                return n
            }(s),
            longMonthsParse: function(e) {
                var t, n = [];
                for (t = 0; t < 12; t++)
                    n[t] = new RegExp("^" + e[t] + "$","i");
                return n
            }(a),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = e
                  , n = ""
                  , a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]),
                e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[n][0] : s[n][1]
        }
        return e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[n][0] : s[n][1]
        }
        return e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[n][0] : s[n][1]
        }
        return e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
          , n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        return e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }
        return e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 6:
                        return "[το προηγούμενο] dddd [{}] LT";
                    default:
                        return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, n) {
                var a = this._calendarEl[e]
                  , s = n && n.hours();
                return t(a) && (a = a.apply(n)),
                a.replace("{}", s % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "MMMM [de] D [de] YYYY",
                LLL: "MMMM [de] D [de] YYYY h:mm A",
                LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? s[n][2] ? s[n][2] : s[n][1] : a ? s[n][0] : s[n][1]
        }
        return e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
        }
          , n = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        };
        return e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, function(e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, a, s) {
            var r = "";
            switch (a) {
            case "s":
                return s ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                return s ? "sekunnin" : "sekuntia";
            case "m":
                return s ? "minuutin" : "minuutti";
            case "mm":
                r = s ? "minuutin" : "minuuttia";
                break;
            case "h":
                return s ? "tunnin" : "tunti";
            case "hh":
                r = s ? "tunnin" : "tuntia";
                break;
            case "d":
                return s ? "päivän" : "päivä";
            case "dd":
                r = s ? "päivän" : "päivää";
                break;
            case "M":
                return s ? "kuukauden" : "kuukausi";
            case "MM":
                r = s ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return s ? "vuoden" : "vuosi";
            case "yy":
                r = s ? "vuoden" : "vuotta"
            }
            return r = n(e, s) + " " + r
        }
        function n(e, t) {
            return e < 10 ? t ? s[e] : a[e] : e
        }
        var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
          , s = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
        return e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                case "D":
                    return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
          , n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        return e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
          , n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"]
          , a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
          , s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"]
          , r = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        return e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: a,
            weekdaysShort: s,
            weekdaysMin: r,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka horan", "ek hor"],
                hh: [e + " horanim", e + " hor"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? s[n][0] : s[n][1]
        }
        return e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                case "D":
                    return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦"
        }
          , n = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0"
        };
        return e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        return e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
            case "ss":
                return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return a += 1 === e ? "dan" : "dana";
            case "MM":
                return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        return e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = e;
            switch (n) {
            case "s":
                return a || t ? "néhány másodperc" : "néhány másodperce";
            case "ss":
                return s + (a || t) ? " másodperc" : " másodperce";
            case "m":
                return "egy" + (a || t ? " perc" : " perce");
            case "mm":
                return s + (a || t ? " perc" : " perce");
            case "h":
                return "egy" + (a || t ? " óra" : " órája");
            case "hh":
                return s + (a || t ? " óra" : " órája");
            case "d":
                return "egy" + (a || t ? " nap" : " napja");
            case "dd":
                return s + (a || t ? " nap" : " napja");
            case "M":
                return "egy" + (a || t ? " hónap" : " hónapja");
            case "MM":
                return s + (a || t ? " hónap" : " hónapja");
            case "y":
                return "egy" + (a || t ? " év" : " éve");
            case "yy":
                return s + (a || t ? " év" : " éve")
            }
            return ""
        }
        function n(e) {
            return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
        }
        var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        return e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }
        function n(e, n, a, s) {
            var r = e + " ";
            switch (a) {
            case "s":
                return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
                return t(e) ? r + (n || s ? "sekúndur" : "sekúndum") : r + "sekúnda";
            case "m":
                return n ? "mínúta" : "mínútu";
            case "mm":
                return t(e) ? r + (n || s ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
            case "hh":
                return t(e) ? r + (n || s ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
            case "d":
                return n ? "dagur" : s ? "dag" : "degi";
            case "dd":
                return t(e) ? n ? r + "dagar" : r + (s ? "daga" : "dögum") : n ? r + "dagur" : r + (s ? "dag" : "degi");
            case "M":
                return n ? "mánuður" : s ? "mánuð" : "mánuði";
            case "MM":
                return t(e) ? n ? r + "mánuðir" : r + (s ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (s ? "mánuð" : "mánuði");
            case "y":
                return n || s ? "ár" : "ári";
            case "yy":
                return t(e) ? r + (n || s ? "ár" : "árum") : r + (n || s ? "ár" : "ári")
            }
        }
        return e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 HH:mm dddd",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日 HH:mm dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        return e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                var n = e % 10
                  , a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦"
        }
          , n = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0"
        };
        return e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "일";
                case "M":
                    return e + "월";
                case "w":
                case "W":
                    return e + "주";
                default:
                    return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        return e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                var n = e % 10
                  , a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? s[n][0] : s[n][1]
        }
        function n(e) {
            return s(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
        }
        function a(e) {
            return s(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
        }
        function s(e) {
            if (e = parseInt(e, 10),
            isNaN(e))
                return !1;
            if (e < 0)
                return !0;
            if (e < 10)
                return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10
                  , n = e / 10;
                return s(0 === t ? n : t)
            }
            if (e < 1e4) {
                for (; e >= 10; )
                    e /= 10;
                return s(e)
            }
            return e /= 1e3,
            s(e)
        }
        return e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: n,
                past: a,
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
        }
        function n(e, t, n, a) {
            return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
        }
        function a(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }
        function s(e) {
            return i[e].split("_")
        }
        function r(e, t, r, i) {
            var d = e + " ";
            return 1 === e ? d + n(e, t, r[0], i) : t ? d + (a(e) ? s(r)[1] : s(r)[0]) : i ? d + s(r)[1] : d + (a(e) ? s(r)[1] : s(r)[2])
        }
        var i = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        return e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: t,
                ss: r,
                m: n,
                mm: r,
                h: n,
                hh: r,
                d: n,
                dd: r,
                M: n,
                MM: r,
                y: n,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }
        function n(e, n, a) {
            return e + " " + t(r[a], e, n)
        }
        function a(e, n, a) {
            return t(r[a], e, n)
        }
        function s(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
        }
        var r = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        return e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: s,
                ss: n,
                m: a,
                mm: n,
                h: a,
                hh: n,
                d: a,
                dd: n,
                M: a,
                MM: n,
                y: a,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var s = t.words[a];
                return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
            }
        };
        return e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[Изминатата] dddd [во] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10
                  , n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = "";
            if (t)
                switch (n) {
                case "s":
                    s = "काही सेकंद";
                    break;
                case "ss":
                    s = "%d सेकंद";
                    break;
                case "m":
                    s = "एक मिनिट";
                    break;
                case "mm":
                    s = "%d मिनिटे";
                    break;
                case "h":
                    s = "एक तास";
                    break;
                case "hh":
                    s = "%d तास";
                    break;
                case "d":
                    s = "एक दिवस";
                    break;
                case "dd":
                    s = "%d दिवस";
                    break;
                case "M":
                    s = "एक महिना";
                    break;
                case "MM":
                    s = "%d महिने";
                    break;
                case "y":
                    s = "एक वर्ष";
                    break;
                case "yy":
                    s = "%d वर्षे"
                }
            else
                switch (n) {
                case "s":
                    s = "काही सेकंदां";
                    break;
                case "ss":
                    s = "%d सेकंदां";
                    break;
                case "m":
                    s = "एका मिनिटा";
                    break;
                case "mm":
                    s = "%d मिनिटां";
                    break;
                case "h":
                    s = "एका तासा";
                    break;
                case "hh":
                    s = "%d तासां";
                    break;
                case "d":
                    s = "एका दिवसा";
                    break;
                case "dd":
                    s = "%d दिवसां";
                    break;
                case "M":
                    s = "एका महिन्या";
                    break;
                case "MM":
                    s = "%d महिन्यां";
                    break;
                case "y":
                    s = "एका वर्षा";
                    break;
                case "yy":
                    s = "%d वर्षां"
                }
            return s.replace(/%d/i, e)
        }
        var n = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        return e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return a[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return n[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
        }
          , n = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        };
        return e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , n = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        return e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦"
        }
          , n = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
        };
        return e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }
        function n(e, n, a) {
            var s = e + " ";
            switch (a) {
            case "ss":
                return s + (t(e) ? "sekundy" : "sekund");
            case "m":
                return n ? "minuta" : "minutę";
            case "mm":
                return s + (t(e) ? "minuty" : "minut");
            case "h":
                return n ? "godzina" : "godzinę";
            case "hh":
                return s + (t(e) ? "godziny" : "godzin");
            case "MM":
                return s + (t(e) ? "miesiące" : "miesięcy");
            case "yy":
                return s + (t(e) ? "lata" : "lat")
            }
        }
        var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
          , s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        return e.defineLocale("pl", {
            months: function(e, t) {
                return e ? "" === t ? "(" + s[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? s[e.month()] : a[e.month()] : a
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W niedzielę o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W środę o] LT";
                    case 6:
                        return "[W sobotę o] LT";
                    default:
                        return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: n,
                y: "rok",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n) {
            var a = {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }
              , s = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (s = " de "),
            e + s + a[n]
        }
        return e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }
        function n(e, n, a) {
            var s = {
                ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === a ? n ? "минута" : "минуту" : e + " " + t(s[a], +e)
        }
        var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        return e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                    case 0:
                        return "[В следующее] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В следующий] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: n,
                m: n,
                mm: n,
                h: "час",
                hh: n,
                d: "день",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-й";
                case "D":
                    return e + "-го";
                case "w":
                case "W":
                    return e + "-я";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
          , n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        return e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e) {
            return e > 1 && e < 5
        }
        function n(e, n, a, s) {
            var r = e + " ";
            switch (a) {
            case "s":
                return n || s ? "pár sekúnd" : "pár sekundami";
            case "ss":
                return n || s ? r + (t(e) ? "sekundy" : "sekúnd") : r + "sekundami";
            case "m":
                return n ? "minúta" : s ? "minútu" : "minútou";
            case "mm":
                return n || s ? r + (t(e) ? "minúty" : "minút") : r + "minútami";
            case "h":
                return n ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                return n || s ? r + (t(e) ? "hodiny" : "hodín") : r + "hodinami";
            case "d":
                return n || s ? "deň" : "dňom";
            case "dd":
                return n || s ? r + (t(e) ? "dni" : "dní") : r + "dňami";
            case "M":
                return n || s ? "mesiac" : "mesiacom";
            case "MM":
                return n || s ? r + (t(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
            case "y":
                return n || s ? "rok" : "rokom";
            case "yy":
                return n || s ? r + (t(e) ? "roky" : "rokov") : r + "rokmi"
            }
        }
        var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
          , s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return e.defineLocale("sk", {
            months: a,
            monthsShort: s,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = e + " ";
            switch (n) {
            case "s":
                return t || a ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return s += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
            case "m":
                return t ? "ena minuta" : "eno minuto";
            case "mm":
                return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
            case "h":
                return t ? "ena ura" : "eno uro";
            case "hh":
                return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
            case "d":
                return t || a ? "en dan" : "enim dnem";
            case "dd":
                return s += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
            case "M":
                return t || a ? "en mesec" : "enim mesecem";
            case "MM":
                return s += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
            case "y":
                return t || a ? "eno leto" : "enim letom";
            case "yy":
                return s += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
            }
        }
        return e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prejšnjo] [sredo] [ob] LT";
                    case 6:
                        return "[prejšnjo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var s = t.words[a];
                return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
            }
        };
        return e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var s = t.words[a];
                return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
            }
        };
        return e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[у] [недељу] [у] LT";
                    case 3:
                        return "[у] [среду] [у] LT";
                    case 6:
                        return "[у] [суботу] [у] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦"
        }
          , n = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
        };
        return e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                    return n[e]
                })
            },
            postformat: function(e) {
                return e.replace(/\d/g, function(e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutus %d",
                h: "horas ida",
                hh: "horas %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
        }
        function n(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
        }
        function a(e, t, n, a) {
            var r = s(e);
            switch (n) {
            case "ss":
                return r + " lup";
            case "mm":
                return r + " tup";
            case "hh":
                return r + " rep";
            case "dd":
                return r + " jaj";
            case "MM":
                return r + " jar";
            case "yy":
                return r + " DIS"
            }
        }
        function s(e) {
            var t = Math.floor(e % 1e3 / 100)
              , n = Math.floor(e % 100 / 10)
              , a = e % 10
              , s = "";
            return t > 0 && (s += r[t] + "vatlh"),
            n > 0 && (s += ("" !== s ? " " : "") + r[n] + "maH"),
            a > 0 && (s += ("" !== s ? " " : "") + r[a]),
            "" === s ? "pagh" : s
        }
        var r = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        return e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: t,
                past: n,
                s: "puS lup",
                ss: a,
                m: "wa’ tup",
                mm: a,
                h: "wa’ rep",
                hh: a,
                d: "wa’ jaj",
                dd: a,
                M: "wa’ jar",
                MM: a,
                y: "wa’ DIS",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        return e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function(e) {
                if (0 === e)
                    return e + "'ıncı";
                var n = e % 10
                  , a = e % 100 - n
                  , s = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[s])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t, n, a) {
            var s = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return a ? s[n][0] : t ? s[n][0] : s[n][1]
        }
        return e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }
        function n(e, n, a) {
            var s = {
                ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: n ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(s[a], +e)
        }
        function a(e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            };
            return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
        }
        function s(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        return e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: a,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: s("[Сьогодні "),
                nextDay: s("[Завтра "),
                lastDay: s("[Вчора "),
                nextWeek: s("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return s("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return s("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: n,
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-й";
                case "D":
                    return e + "-го";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
          , n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        return e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "周";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })
}
, function(e, t, n) {
    !function(e, t) {
        t(n(0))
    }(0, function(e) {
        "use strict";
        return e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })
}
, function(e, t, n) {
    "use strict";
    n(131),
    n(132);
    var a = n(2)
      , s = n(133)
      , r = n(4)
      , i = n(154)
      , d = n(155)
      , o = n(156)
      , _ = n(157)
      , u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(_)
      , m = n(160)
      , l = (0,
    a.getAll)("form.comment")
      , c = (0,
    a.getAll)("a.remove-comment");
    l && (0,
    a.addEach)(l, "submit", s.addComment),
    c && (0,
    a.addEach)(c, "click", s.removeComment);
    var h = (0,
    a.get)(".modal__overlay");
    h && (0,
    a.add)(h, "click", r.closeModal);
    var M = (0,
    a.getAll)("form.icon")
      , f = (0,
    a.getAll)("a.likes");
    M && (0,
    a.addEach)(M, "submit", i.addLike),
    f && (0,
    a.addEach)(f, "click", i.showLikes);
    var L = (0,
    a.getAll)("a.remove-image")
      , y = (0,
    a.get)("a.remove-avatar")
      , Y = (0,
    a.get)("label.avatar__change");
    L && (0,
    a.addEach)(L, "click", d.removeImage),
    y && (0,
    a.add)(y, "click", d.removeAvatar),
    Y && (0,
    a.add)(Y, "change", d.loaderAvatar);
    var p = (0,
    a.get)("form.follow")
      , k = (0,
    a.get)("a.followers")
      , D = (0,
    a.get)("a.following");
    k && (0,
    a.add)(k, "click", o.showFollowers),
    D && (0,
    a.add)(D, "click", o.showFollowing),
    p && (0,
    a.add)(p, "submit", o.addFollower);
    var g = (0,
    a.get)("a.notifications");
    g && (0,
    a.add)(g, "click", u.default);
    var T = (0,
    a.get)("a.upload__image")
      , w = (0,
    a.get)("input.upload-image")
      , v = (0,
    a.get)("form.form__image");
    T && (0,
    a.add)(T, "click", m.uploadImage),
    w && (w.onchange = function() {
        return (0,
        m.preUpload)(event)
    }
    ),
    v && (0,
    a.add)(v, "submit", m.loader),
    (0,
    a.add)(window, "keydown", function(e) {
        if (window.location.pathname.includes("/p/")) {
            var t = (0,
            a.get)("a.next")
              , n = (0,
            a.get)("a.prev");
            39 === e.keyCode && t && t.click(),
            37 === e.keyCode && n && n.click()
        }
    })
}
, function(e, t) {}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function s(e) {
        e.preventDefault();
        var t = this.parentNode.previousSibling
          , n = (0,
        o.get)("ul.comments", t)
          , a = this.firstChild
          , s = a.value.trim()
          , i = u.default.sanitize(s)
          , _ = (0,
        o.get)("div.content__comments", t);
        i.length < 1 || d.default.post(this.action, {
            text: i
        }).then(function(e) {
            var t = '\n        <li>\n          <div class="row">\n            <a href="/' + e.data.slug + '">' + e.data.username + "</a>\n            <span>" + i + '</span>\n          </div>\n          <a class="remove-comment" href="/comment/' + e.data.comment._id + '/remove">✕</a>\n        </li>\n      ';
            n.insertAdjacentHTML("beforeend", t),
            a.value = "";
            var s = Math.max(_.scrollHeight, _.clientHeight);
            _.scrollTop = s - _.clientHeight;
            var d = (0,
            o.getAll)("a.remove-comment");
            (0,
            o.addEach)(d, "click", r)
        }).catch(function(e) {
            return l(e.message)
        })
    }
    function r(e) {
        e.preventDefault();
        var t = this.parentNode;
        d.default.get("/api" + this.pathname).then(function() {
            return t.parentNode.removeChild(t)
        }).catch(function(e) {
            return l(e.message)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.removeComment = t.addComment = void 0;
    var i = n(3)
      , d = a(i)
      , o = n(2)
      , _ = n(153)
      , u = a(_)
      , m = console
      , l = m.error;
    t.addComment = s,
    t.removeComment = r
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        var t = new i(e)
          , n = r(i.prototype.request, t);
        return s.extend(n, i.prototype, t),
        s.extend(n, t),
        n
    }
    var s = n(1)
      , r = n(6)
      , i = n(136)
      , d = n(5)
      , o = a(d);
    o.Axios = i,
    o.create = function(e) {
        return a(s.merge(d, e))
    }
    ,
    o.Cancel = n(10),
    o.CancelToken = n(151),
    o.isCancel = n(9),
    o.all = function(e) {
        return Promise.all(e)
    }
    ,
    o.spread = n(152),
    e.exports = o,
    e.exports.default = o
}
, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    function a(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function(e) {
        return null != e && (n(e) || a(e) || !!e._isBuffer)
    }
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        this.defaults = e,
        this.interceptors = {
            request: new i,
            response: new i
        }
    }
    var s = n(5)
      , r = n(1)
      , i = n(146)
      , d = n(147);
    a.prototype.request = function(e) {
        "string" == typeof e && (e = r.merge({
            url: arguments[0]
        }, arguments[1])),
        e = r.merge(s, this.defaults, {
            method: "get"
        }, e),
        e.method = e.method.toLowerCase();
        var t = [d, void 0]
          , n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
            t.unshift(e.fulfilled, e.rejected)
        }),
        this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length; )
            n = n.then(t.shift(), t.shift());
        return n
    }
    ,
    r.forEach(["delete", "get", "head", "options"], function(e) {
        a.prototype[e] = function(t, n) {
            return this.request(r.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }),
    r.forEach(["post", "put", "patch"], function(e) {
        a.prototype[e] = function(t, n, a) {
            return this.request(r.merge(a || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }),
    e.exports = a
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (u === setTimeout)
            return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout)
            return u = setTimeout,
            setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }
    function r(e) {
        if (m === clearTimeout)
            return clearTimeout(e);
        if ((m === a || !m) && clearTimeout)
            return m = clearTimeout,
            clearTimeout(e);
        try {
            return m(e)
        } catch (t) {
            try {
                return m.call(null, e)
            } catch (t) {
                return m.call(this, e)
            }
        }
    }
    function i() {
        M && c && (M = !1,
        c.length ? h = c.concat(h) : f = -1,
        h.length && d())
    }
    function d() {
        if (!M) {
            var e = s(i);
            M = !0;
            for (var t = h.length; t; ) {
                for (c = h,
                h = []; ++f < t; )
                    c && c[f].run();
                f = -1,
                t = h.length
            }
            c = null,
            M = !1,
            r(e)
        }
    }
    function o(e, t) {
        this.fun = e,
        this.array = t
    }
    function _() {}
    var u, m, l = e.exports = {};
    !function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            u = n
        }
        try {
            m = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            m = a
        }
    }();
    var c, h = [], M = !1, f = -1;
    l.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        h.push(new o(e,t)),
        1 !== h.length || M || s(d)
    }
    ,
    o.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    l.title = "browser",
    l.browser = !0,
    l.env = {},
    l.argv = [],
    l.version = "",
    l.versions = {},
    l.on = _,
    l.addListener = _,
    l.once = _,
    l.off = _,
    l.removeListener = _,
    l.removeAllListeners = _,
    l.emit = _,
    l.prependListener = _,
    l.prependOnceListener = _,
    l.listeners = function(e) {
        return []
    }
    ,
    l.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    l.cwd = function() {
        return "/"
    }
    ,
    l.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    l.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(1);
    e.exports = function(e, t) {
        a.forEach(e, function(n, a) {
            a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n,
            delete e[a])
        })
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(8);
    e.exports = function(e, t, n) {
        var s = n.config.validateStatus;
        n.status && s && !s(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, a, s) {
        return e.config = t,
        n && (e.code = n),
        e.request = a,
        e.response = s,
        e
    }
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var s = n(1);
    e.exports = function(e, t, n) {
        if (!t)
            return e;
        var r;
        if (n)
            r = n(t);
        else if (s.isURLSearchParams(t))
            r = t.toString();
        else {
            var i = [];
            s.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (s.isArray(e) && (t += "[]"),
                s.isArray(e) || (e = [e]),
                s.forEach(e, function(e) {
                    s.isDate(e) ? e = e.toISOString() : s.isObject(e) && (e = JSON.stringify(e)),
                    i.push(a(t) + "=" + a(e))
                }))
            }),
            r = i.join("&")
        }
        return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(1)
      , s = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
        var t, n, r, i = {};
        return e ? (a.forEach(e.split("\n"), function(e) {
            if (r = e.indexOf(":"),
            t = a.trim(e.substr(0, r)).toLowerCase(),
            n = a.trim(e.substr(r + 1)),
            t) {
                if (i[t] && s.indexOf(t) >= 0)
                    return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
            }
        }),
        i) : i
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(1);
    e.exports = a.isStandardBrowserEnv() ? function() {
        function e(e) {
            var t = e;
            return n && (s.setAttribute("href", t),
            t = s.href),
            s.setAttribute("href", t),
            {
                href: s.href,
                protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                host: s.host,
                search: s.search ? s.search.replace(/^\?/, "") : "",
                hash: s.hash ? s.hash.replace(/^#/, "") : "",
                hostname: s.hostname,
                port: s.port,
                pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname
            }
        }
        var t, n = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
        return t = e(window.location.href),
        function(n) {
            var s = a.isString(n) ? e(n) : n;
            return s.protocol === t.protocol && s.host === t.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }()
}
, function(e, t, n) {
    "use strict";
    function a() {
        this.message = "String contains an invalid character"
    }
    function s(e) {
        for (var t, n, s = String(e), i = "", d = 0, o = r; s.charAt(0 | d) || (o = "=",
        d % 1); i += o.charAt(63 & t >> 8 - d % 1 * 8)) {
            if ((n = s.charCodeAt(d += .75)) > 255)
                throw new a;
            t = t << 8 | n
        }
        return i
    }
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    a.prototype = new Error,
    a.prototype.code = 5,
    a.prototype.name = "InvalidCharacterError",
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    var a = n(1);
    e.exports = a.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, n, s, r, i) {
                var d = [];
                d.push(e + "=" + encodeURIComponent(t)),
                a.isNumber(n) && d.push("expires=" + new Date(n).toGMTString()),
                a.isString(s) && d.push("path=" + s),
                a.isString(r) && d.push("domain=" + r),
                !0 === i && d.push("secure"),
                document.cookie = d.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}
, function(e, t, n) {
    "use strict";
    function a() {
        this.handlers = []
    }
    var s = n(1);
    a.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }),
        this.handlers.length - 1
    }
    ,
    a.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    ,
    a.prototype.forEach = function(e) {
        s.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }
    ,
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var s = n(1)
      , r = n(148)
      , i = n(9)
      , d = n(5)
      , o = n(149)
      , _ = n(150);
    e.exports = function(e) {
        return a(e),
        e.baseURL && !o(e.url) && (e.url = _(e.baseURL, e.url)),
        e.headers = e.headers || {},
        e.data = r(e.data, e.headers, e.transformRequest),
        e.headers = s.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
        s.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }),
        (e.adapter || d.adapter)(e).then(function(t) {
            return a(e),
            t.data = r(t.data, t.headers, e.transformResponse),
            t
        }, function(t) {
            return i(t) || (a(e),
            t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))),
            Promise.reject(t)
        })
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(1);
    e.exports = function(e, t, n) {
        return a.forEach(n, function(n) {
            e = n(e, t)
        }),
        e
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        }
        );
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new s(e),
            t(n.reason))
        })
    }
    var s = n(10);
    a.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    a.source = function() {
        var e;
        return {
            token: new a(function(t) {
                e = t
            }
            ),
            cancel: e
        }
    }
    ,
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}
, function(e, t, n) {
    !function(t, n) {
        e.exports = n()
    }(0, function() {
        "use strict";
        function e(e, t) {
            for (var n = t.length; n--; )
                "string" == typeof t[n] && (t[n] = t[n].toLowerCase()),
                e[t[n]] = !0;
            return e
        }
        function t(e) {
            var t = {}
              , n = void 0;
            for (n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function a() {
            var D = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k()
              , g = function(e) {
                return a(e)
            };
            if (g.version = "1.0.3",
            g.removed = [],
            !D || !D.document || 9 !== D.document.nodeType)
                return g.isSupported = !1,
                g;
            var T = D.document
              , w = !1
              , v = !1
              , b = D.document
              , S = D.DocumentFragment
              , H = D.HTMLTemplateElement
              , j = D.Node
              , x = D.NodeFilter
              , O = D.NamedNodeMap
              , P = void 0 === O ? D.NamedNodeMap || D.MozNamedAttrMap : O
              , A = D.Text
              , E = D.Comment
              , W = D.DOMParser
              , F = D.XMLHttpRequest
              , z = void 0 === F ? D.XMLHttpRequest : F
              , N = D.encodeURI
              , C = void 0 === N ? D.encodeURI : N;
            if ("function" == typeof H) {
                var R = b.createElement("template");
                R.content && R.content.ownerDocument && (b = R.content.ownerDocument)
            }
            var J = b
              , I = J.implementation
              , U = J.createNodeIterator
              , G = J.getElementsByTagName
              , V = J.createDocumentFragment
              , B = T.importNode
              , q = {};
            g.isSupported = I && void 0 !== I.createHTMLDocument && 9 !== b.documentMode;
            var K = c
              , $ = h
              , Z = M
              , Q = f
              , X = y
              , ee = Y
              , te = L
              , ne = null
              , ae = e({}, [].concat(n(s), n(r), n(i), n(d), n(o)))
              , se = null
              , re = e({}, [].concat(n(_), n(u), n(m), n(l)))
              , ie = null
              , de = null
              , oe = !0
              , _e = !0
              , ue = !1
              , me = !1
              , le = !1
              , ce = !1
              , he = !1
              , Me = !1
              , fe = !1
              , Le = !1
              , ye = !1
              , Ye = !0
              , pe = !0
              , ke = {}
              , De = e({}, ["audio", "head", "math", "script", "style", "template", "svg", "video"])
              , ge = e({}, ["audio", "video", "img", "source", "image"])
              , Te = e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"])
              , we = null
              , ve = b.createElement("form")
              , be = function(a) {
                "object" !== (void 0 === a ? "undefined" : p(a)) && (a = {}),
                ne = "ALLOWED_TAGS"in a ? e({}, a.ALLOWED_TAGS) : ae,
                se = "ALLOWED_ATTR"in a ? e({}, a.ALLOWED_ATTR) : re,
                ie = "FORBID_TAGS"in a ? e({}, a.FORBID_TAGS) : {},
                de = "FORBID_ATTR"in a ? e({}, a.FORBID_ATTR) : {},
                ke = "USE_PROFILES"in a && a.USE_PROFILES,
                oe = !1 !== a.ALLOW_ARIA_ATTR,
                _e = !1 !== a.ALLOW_DATA_ATTR,
                ue = a.ALLOW_UNKNOWN_PROTOCOLS || !1,
                me = a.SAFE_FOR_JQUERY || !1,
                le = a.SAFE_FOR_TEMPLATES || !1,
                ce = a.WHOLE_DOCUMENT || !1,
                fe = a.RETURN_DOM || !1,
                Le = a.RETURN_DOM_FRAGMENT || !1,
                ye = a.RETURN_DOM_IMPORT || !1,
                Me = a.FORCE_BODY || !1,
                Ye = !1 !== a.SANITIZE_DOM,
                pe = !1 !== a.KEEP_CONTENT,
                te = a.ALLOWED_URI_REGEXP || te,
                le && (_e = !1),
                Le && (fe = !0),
                ke && (ne = e({}, [].concat(n(o))),
                se = [],
                !0 === ke.html && (e(ne, s),
                e(se, _)),
                !0 === ke.svg && (e(ne, r),
                e(se, u),
                e(se, l)),
                !0 === ke.svgFilters && (e(ne, i),
                e(se, u),
                e(se, l)),
                !0 === ke.mathMl && (e(ne, d),
                e(se, m),
                e(se, l))),
                a.ADD_TAGS && (ne === ae && (ne = t(ne)),
                e(ne, a.ADD_TAGS)),
                a.ADD_ATTR && (se === re && (se = t(se)),
                e(se, a.ADD_ATTR)),
                a.ADD_URI_SAFE_ATTR && e(Te, a.ADD_URI_SAFE_ATTR),
                pe && (ne["#text"] = !0),
                Object && "freeze"in Object && Object.freeze(a),
                we = a
            }
              , Se = function(e) {
                g.removed.push({
                    element: e
                });
                try {
                    e.parentNode.removeChild(e)
                } catch (t) {
                    e.outerHTML = ""
                }
            }
              , He = function(e, t) {
                g.removed.push({
                    attribute: t.getAttributeNode(e),
                    from: t
                }),
                t.removeAttribute(e)
            }
              , je = function(e) {
                var t = void 0
                  , n = void 0;
                if (Me && (e = "<remove></remove>" + e),
                v) {
                    try {
                        e = C(e)
                    } catch (e) {}
                    var a = new z;
                    a.responseType = "document",
                    a.open("GET", "data:text/html;charset=utf-8," + e, !1),
                    a.send(null),
                    t = a.response
                }
                if (w)
                    try {
                        t = (new W).parseFromString(e, "text/html")
                    } catch (e) {}
                return t && t.documentElement || (t = I.createHTMLDocument(""),
                n = t.body,
                n.parentNode.removeChild(n.parentNode.firstElementChild),
                n.outerHTML = e),
                G.call(t, ce ? "html" : "body")[0]
            };
            g.isSupported && function() {
                var e = je('<svg><g onload="this.parentNode.remove()"></g></svg>');
                e.querySelector("svg") || (v = !0);
                try {
                    e = je('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                    e.querySelector("svg img") && (w = !0)
                } catch (e) {}
            }();
            var xe = function(e) {
                return U.call(e.ownerDocument || e, e, x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT, function() {
                    return x.FILTER_ACCEPT
                }, !1)
            }
              , Oe = function(e) {
                return !(e instanceof A || e instanceof E) && !("string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof P && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute)
            }
              , Pe = function(e) {
                return "object" === (void 0 === j ? "undefined" : p(j)) ? e instanceof j : e && "object" === (void 0 === e ? "undefined" : p(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }
              , Ae = function(e, t, n) {
                q[e] && q[e].forEach(function(e) {
                    e.call(g, t, n, we)
                })
            }
              , Ee = function(e) {
                var t = void 0;
                if (Ae("beforeSanitizeElements", e, null),
                Oe(e))
                    return Se(e),
                    !0;
                var n = e.nodeName.toLowerCase();
                if (Ae("uponSanitizeElement", e, {
                    tagName: n,
                    allowedTags: ne
                }),
                !ne[n] || ie[n]) {
                    if (pe && !De[n] && "function" == typeof e.insertAdjacentHTML)
                        try {
                            e.insertAdjacentHTML("AfterEnd", e.innerHTML)
                        } catch (e) {}
                    return Se(e),
                    !0
                }
                return !me || e.firstElementChild || e.content && e.content.firstElementChild || !/</g.test(e.textContent) || (g.removed.push({
                    element: e.cloneNode()
                }),
                e.innerHTML = e.textContent.replace(/</g, "&lt;")),
                le && 3 === e.nodeType && (t = e.textContent,
                t = t.replace(K, " "),
                t = t.replace($, " "),
                e.textContent !== t && (g.removed.push({
                    element: e.cloneNode()
                }),
                e.textContent = t)),
                Ae("afterSanitizeElements", e, null),
                !1
            }
              , We = function(e) {
                var t = void 0
                  , n = void 0
                  , a = void 0
                  , s = void 0
                  , r = void 0
                  , i = void 0
                  , d = void 0;
                if (Ae("beforeSanitizeAttributes", e, null),
                i = e.attributes) {
                    var o = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: se
                    };
                    for (d = i.length; d--; ) {
                        if (t = i[d],
                        n = t.name,
                        a = t.value.trim(),
                        s = n.toLowerCase(),
                        o.attrName = s,
                        o.attrValue = a,
                        o.keepAttr = !0,
                        Ae("uponSanitizeAttribute", e, o),
                        a = o.attrValue,
                        "name" === s && "IMG" === e.nodeName && i.id)
                            r = i.id,
                            i = Array.prototype.slice.apply(i),
                            He("id", e),
                            He(n, e),
                            i.indexOf(r) > d && e.setAttribute("id", r.value);
                        else {
                            if ("INPUT" === e.nodeName && "type" === s && "file" === a && (se[s] || !de[s]))
                                continue;
                            "id" === n && e.setAttribute(n, ""),
                            He(n, e)
                        }
                        if (o.keepAttr && (!Ye || "id" !== s && "name" !== s || !(a in b || a in ve))) {
                            if (le && (a = a.replace(K, " "),
                            a = a.replace($, " ")),
                            _e && Z.test(s))
                                ;
                            else if (oe && Q.test(s))
                                ;
                            else {
                                if (!se[s] || de[s])
                                    continue;
                                if (Te[s])
                                    ;
                                else if (te.test(a.replace(ee, "")))
                                    ;
                                else if ("src" !== s && "xlink:href" !== s || 0 !== a.indexOf("data:") || !ge[e.nodeName.toLowerCase()]) {
                                    if (ue && !X.test(a.replace(ee, "")))
                                        ;
                                    else if (a)
                                        continue
                                } else
                                    ;
                            }
                            try {
                                e.setAttribute(n, a),
                                g.removed.pop()
                            } catch (e) {}
                        }
                    }
                    Ae("afterSanitizeAttributes", e, null)
                }
            }
              , Fe = function e(t) {
                var n = void 0
                  , a = xe(t);
                for (Ae("beforeSanitizeShadowDOM", t, null); n = a.nextNode(); )
                    Ae("uponSanitizeShadowNode", n, null),
                    Ee(n) || (n.content instanceof S && e(n.content),
                    We(n));
                Ae("afterSanitizeShadowDOM", t, null)
            };
            return g.sanitize = function(e, t) {
                var n = void 0
                  , a = void 0
                  , s = void 0
                  , r = void 0
                  , i = void 0;
                if (e || (e = "\x3c!--\x3e"),
                "string" != typeof e && !Pe(e)) {
                    if ("function" != typeof e.toString)
                        throw new TypeError("toString is not a function");
                    if ("string" != typeof (e = e.toString()))
                        throw new TypeError("dirty is not a string, aborting")
                }
                if (!g.isSupported) {
                    if ("object" === p(D.toStaticHTML) || "function" == typeof D.toStaticHTML) {
                        if ("string" == typeof e)
                            return D.toStaticHTML(e);
                        if (Pe(e))
                            return D.toStaticHTML(e.outerHTML)
                    }
                    return e
                }
                if (he || be(t),
                g.removed = [],
                e instanceof j)
                    n = je("\x3c!--\x3e"),
                    a = n.ownerDocument.importNode(e, !0),
                    1 === a.nodeType && "BODY" === a.nodeName ? n = a : n.appendChild(a);
                else {
                    if (!fe && !ce && -1 === e.indexOf("<"))
                        return e;
                    if (!(n = je(e)))
                        return fe ? null : ""
                }
                Me && Se(n.firstChild);
                for (var d = xe(n); s = d.nextNode(); )
                    3 === s.nodeType && s === r || Ee(s) || (s.content instanceof S && Fe(s.content),
                    We(s),
                    r = s);
                if (fe) {
                    if (Le)
                        for (i = V.call(n.ownerDocument); n.firstChild; )
                            i.appendChild(n.firstChild);
                    else
                        i = n;
                    return ye && (i = B.call(T, i, !0)),
                    i
                }
                return ce ? n.outerHTML : n.innerHTML
            }
            ,
            g.setConfig = function(e) {
                be(e),
                he = !0
            }
            ,
            g.clearConfig = function() {
                we = null,
                he = !1
            }
            ,
            g.addHook = function(e, t) {
                "function" == typeof t && (q[e] = q[e] || [],
                q[e].push(t))
            }
            ,
            g.removeHook = function(e) {
                q[e] && q[e].pop()
            }
            ,
            g.removeHooks = function(e) {
                q[e] && (q[e] = [])
            }
            ,
            g.removeAllHooks = function() {
                q = {}
            }
            ,
            g
        }
        var s = ["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]
          , r = ["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]
          , i = ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence"]
          , d = ["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmuliscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mpspace", "msqrt", "mystyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]
          , o = ["#text"]
          , _ = ["accept", "action", "align", "alt", "autocomplete", "background", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "coords", "crossorigin", "datetime", "default", "dir", "disabled", "download", "enctype", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "integrity", "ismap", "label", "lang", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "multiple", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "type", "usemap", "valign", "value", "width", "xmlns"]
          , u = ["accent-height", "accumulate", "additivive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]
          , m = ["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]
          , l = ["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]
          , c = /\{\{[\s\S]*|[\s\S]*\}\}/gm
          , h = /<%[\s\S]*|[\s\S]*%>/gm
          , M = /^data-[\-\w.\u00B7-\uFFFF]/
          , f = /^aria-[\-\w]+$/
          , L = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          , y = /^(?:\w+script|data):/i
          , Y = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g
          , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , k = function() {
            return "undefined" == typeof window ? null : window
        };
        return a()
    })
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        var t = this;
        e.preventDefault();
        var n = this.nextSibling;
        i.default.post(this.action).then(function(e) {
            var a = e.data
              , s = 1 === a ? a + " like" : 0 === a ? "Be the first to like this" : a + " likes";
            t.likes.classList.toggle("on"),
            n.textContent = s
        }).catch(function(e) {
            return u(e.message)
        })
    }
    function s(e) {
        e.preventDefault();
        var t = (0,
        d.get)(".modal")
          , n = (0,
        d.get)(".modal__content", t);
        i.default.get("/api" + this.pathname).then(function(e) {
            n.innerHTML = '\n        <div class="header row"> Likes </div>\n        <ul class="contact-list">\n          ' + (0,
            o.renderModal)(e.data).join(" ") + "\n        </ul>\n      ",
            (0,
            o.showModal)()
        }).catch(function(e) {
            return u(e.message)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.showLikes = t.addLike = void 0;
    var r = n(3)
      , i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(r)
      , d = n(2)
      , o = n(4)
      , _ = console
      , u = _.error;
    t.addLike = a,
    t.showLikes = s
}
, function(e, t, n) {
    "use strict";
    function a(e, t) {
        if (!this.nextElementSibling) {
            var n = '\n  <div class="sure-modal">\n    <a class="sure-modal__yes" href=' + t + '> remove </a>\n    <span class="sure-modal__no"> cancel </span>\n  </div>\n  ';
            e.insertAdjacentHTML("beforeend", n);
            var a = this.nextElementSibling.lastElementChild;
            (0,
            _.add)(a, "click", function() {
                var e = this.parentNode;
                e.parentNode.removeChild(e)
            })
        }
    }
    function s(e) {
        var t = this;
        e.preventDefault();
        var n = this.parentNode;
        o.default.get(this.href).then(function(e) {
            return a.call(t, n, "/p/" + e.data + "/remove-confirm")
        }).catch(function(e) {
            return m(e.message)
        })
    }
    function r(e) {
        e.preventDefault();
        var t = this.parentNode;
        a.call(this, t, "/api/remove-avatar-confirm")
    }
    function i() {
        var e = (0,
        _.get)("a.remove-avatar");
        this.parentNode.removeChild(this),
        e && e.parentNode.removeChild(e);
        (0,
        _.get)("div.avatar").insertAdjacentHTML("beforeend", '\n    <div class="loader-cont">\n      <div class="loader"></div>\n    </div>\n  ')
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.loaderAvatar = t.removeAvatar = t.removeImage = void 0;
    var d = n(3)
      , o = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(d)
      , _ = n(2)
      , u = console
      , m = u.error;
    t.removeImage = s,
    t.removeAvatar = r,
    t.loaderAvatar = i
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        e.preventDefault(),
        d.default.get("/api" + this.pathname).then(function(e) {
            c.innerHTML = '\n        <div class="header"> Followers </div>\n        <ul class="contact-list">\n          ' + (0,
            _.renderModal)(e.data).join(" ") + "\n        </ul>\n      ",
            (0,
            _.showModal)()
        }).catch(function(e) {
            return m(e.message)
        })
    }
    function s(e) {
        e.preventDefault(),
        d.default.get("/api" + this.pathname).then(function(e) {
            c.innerHTML = '\n        <div class="header"> Following </div>\n        <ul class="contact-list">\n          ' + (0,
            _.renderModal)(e.data).join(" ") + "\n        </ul>\n        ",
            (0,
            _.showModal)()
        }).catch(function(e) {
            return m(e.message)
        })
    }
    function r(e) {
        var t = this
          , n = (0,
        o.get)("a.followers");
        e.preventDefault(),
        d.default.post(this.action).then(function(e) {
            var a = '<div class="number">' + e.data + "</div><span>followers</span>"
              , s = t.firstChild;
            n.innerHTML = a,
            s.classList.toggle("Following"),
            s.classList.value.includes("Following") ? s.innerHTML = "Following" : s.innerHTML = "Follow"
        }).catch(function(e) {
            return m(e.message)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.addFollower = t.showFollowing = t.showFollowers = void 0;
    var i = n(3)
      , d = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(i)
      , o = n(2)
      , _ = n(4)
      , u = console
      , m = u.error
      , l = (0,
    o.get)(".modal")
      , c = (0,
    o.get)(".modal__content", l);
    t.showFollowers = a,
    t.showFollowing = s,
    t.addFollower = r
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function s(e) {
        e.preventDefault();
        var t = (0,
        _.get)(".modal")
          , n = (0,
        _.get)(".modal__content", t);
        o.default.get("/api" + this.pathname).then(function(e) {
            var t = e.data
              , a = t.length
              , s = 1 === a ? a + " new notification" : a + " new notifications"
              , r = "\n        " + s + '\n        <a href="/api/notifications/clear"> clear all </a>\n      ';
            n.innerHTML = '\n        <div class="header"> ' + (a ? r : "No new notifications") + ' </div>\n        <ul class="contact-list">\n          ' + c(t).join(" ") + "\n        </ul>\n      ",
            (0,
            u.showModal)()
        }).catch(function(e) {
            return l(e.message)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0)
      , i = a(r)
      , d = n(3)
      , o = a(d)
      , _ = n(2)
      , u = n(4)
      , m = console
      , l = m.error
      , c = function(e) {
        return e.map(function(e) {
            var t = e.author
              , n = t.username
              , a = t.slug
              , s = t.avatar
              , r = e.image
              , d = r.url
              , o = r.name
              , _ = s.includes("http") ? s : "/uploads/avatar/" + s
              , u = (0,
            i.default)(e.created).fromNow()
              , m = '\n      <div>\n        <a href="/p/' + d + '" class="profile-image">\n          <img src="/uploads/gallery/' + o + '" alt="' + o + '" class="thumb-img">\n        </a>\n      </div>\n      ';
            return "\n      <li data-user=" + n + '>\n        <a href="/' + a + '" class="img">\n          <img src="' + _ + '" alt="' + n + '\'s avatar">\n        </a>\n        <div class="user-name">\n          <a href="/' + a + '">' + n + '</a>\n          <span style="color: #262626"> ' + e.notify + ' </span>\n          <span style="display: block; font-size: 12px"> <time datetime="' + e.created + '"> ' + u + " </time> </span>\n        </div>\n          " + (o ? m : "") + "\n      </li>\n    "
        })
    };
    t.default = s
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    function a(e) {
        return n(s(e))
    }
    function s(e) {
        var t = r[e];
        if (!(t + 1))
            throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var r = {
        "./af": 11,
        "./af.js": 11,
        "./ar": 12,
        "./ar-dz": 13,
        "./ar-dz.js": 13,
        "./ar-kw": 14,
        "./ar-kw.js": 14,
        "./ar-ly": 15,
        "./ar-ly.js": 15,
        "./ar-ma": 16,
        "./ar-ma.js": 16,
        "./ar-sa": 17,
        "./ar-sa.js": 17,
        "./ar-tn": 18,
        "./ar-tn.js": 18,
        "./ar.js": 12,
        "./az": 19,
        "./az.js": 19,
        "./be": 20,
        "./be.js": 20,
        "./bg": 21,
        "./bg.js": 21,
        "./bm": 22,
        "./bm.js": 22,
        "./bn": 23,
        "./bn.js": 23,
        "./bo": 24,
        "./bo.js": 24,
        "./br": 25,
        "./br.js": 25,
        "./bs": 26,
        "./bs.js": 26,
        "./ca": 27,
        "./ca.js": 27,
        "./cs": 28,
        "./cs.js": 28,
        "./cv": 29,
        "./cv.js": 29,
        "./cy": 30,
        "./cy.js": 30,
        "./da": 31,
        "./da.js": 31,
        "./de": 32,
        "./de-at": 33,
        "./de-at.js": 33,
        "./de-ch": 34,
        "./de-ch.js": 34,
        "./de.js": 32,
        "./dv": 35,
        "./dv.js": 35,
        "./el": 36,
        "./el.js": 36,
        "./en-au": 37,
        "./en-au.js": 37,
        "./en-ca": 38,
        "./en-ca.js": 38,
        "./en-gb": 39,
        "./en-gb.js": 39,
        "./en-ie": 40,
        "./en-ie.js": 40,
        "./en-nz": 41,
        "./en-nz.js": 41,
        "./eo": 42,
        "./eo.js": 42,
        "./es": 43,
        "./es-do": 44,
        "./es-do.js": 44,
        "./es-us": 45,
        "./es-us.js": 45,
        "./es.js": 43,
        "./et": 46,
        "./et.js": 46,
        "./eu": 47,
        "./eu.js": 47,
        "./fa": 48,
        "./fa.js": 48,
        "./fi": 49,
        "./fi.js": 49,
        "./fo": 50,
        "./fo.js": 50,
        "./fr": 51,
        "./fr-ca": 52,
        "./fr-ca.js": 52,
        "./fr-ch": 53,
        "./fr-ch.js": 53,
        "./fr.js": 51,
        "./fy": 54,
        "./fy.js": 54,
        "./gd": 55,
        "./gd.js": 55,
        "./gl": 56,
        "./gl.js": 56,
        "./gom-latn": 57,
        "./gom-latn.js": 57,
        "./gu": 58,
        "./gu.js": 58,
        "./he": 59,
        "./he.js": 59,
        "./hi": 60,
        "./hi.js": 60,
        "./hr": 61,
        "./hr.js": 61,
        "./hu": 62,
        "./hu.js": 62,
        "./hy-am": 63,
        "./hy-am.js": 63,
        "./id": 64,
        "./id.js": 64,
        "./is": 65,
        "./is.js": 65,
        "./it": 66,
        "./it.js": 66,
        "./ja": 67,
        "./ja.js": 67,
        "./jv": 68,
        "./jv.js": 68,
        "./ka": 69,
        "./ka.js": 69,
        "./kk": 70,
        "./kk.js": 70,
        "./km": 71,
        "./km.js": 71,
        "./kn": 72,
        "./kn.js": 72,
        "./ko": 73,
        "./ko.js": 73,
        "./ky": 74,
        "./ky.js": 74,
        "./lb": 75,
        "./lb.js": 75,
        "./lo": 76,
        "./lo.js": 76,
        "./lt": 77,
        "./lt.js": 77,
        "./lv": 78,
        "./lv.js": 78,
        "./me": 79,
        "./me.js": 79,
        "./mi": 80,
        "./mi.js": 80,
        "./mk": 81,
        "./mk.js": 81,
        "./ml": 82,
        "./ml.js": 82,
        "./mr": 83,
        "./mr.js": 83,
        "./ms": 84,
        "./ms-my": 85,
        "./ms-my.js": 85,
        "./ms.js": 84,
        "./mt": 86,
        "./mt.js": 86,
        "./my": 87,
        "./my.js": 87,
        "./nb": 88,
        "./nb.js": 88,
        "./ne": 89,
        "./ne.js": 89,
        "./nl": 90,
        "./nl-be": 91,
        "./nl-be.js": 91,
        "./nl.js": 90,
        "./nn": 92,
        "./nn.js": 92,
        "./pa-in": 93,
        "./pa-in.js": 93,
        "./pl": 94,
        "./pl.js": 94,
        "./pt": 95,
        "./pt-br": 96,
        "./pt-br.js": 96,
        "./pt.js": 95,
        "./ro": 97,
        "./ro.js": 97,
        "./ru": 98,
        "./ru.js": 98,
        "./sd": 99,
        "./sd.js": 99,
        "./se": 100,
        "./se.js": 100,
        "./si": 101,
        "./si.js": 101,
        "./sk": 102,
        "./sk.js": 102,
        "./sl": 103,
        "./sl.js": 103,
        "./sq": 104,
        "./sq.js": 104,
        "./sr": 105,
        "./sr-cyrl": 106,
        "./sr-cyrl.js": 106,
        "./sr.js": 105,
        "./ss": 107,
        "./ss.js": 107,
        "./sv": 108,
        "./sv.js": 108,
        "./sw": 109,
        "./sw.js": 109,
        "./ta": 110,
        "./ta.js": 110,
        "./te": 111,
        "./te.js": 111,
        "./tet": 112,
        "./tet.js": 112,
        "./th": 113,
        "./th.js": 113,
        "./tl-ph": 114,
        "./tl-ph.js": 114,
        "./tlh": 115,
        "./tlh.js": 115,
        "./tr": 116,
        "./tr.js": 116,
        "./tzl": 117,
        "./tzl.js": 117,
        "./tzm": 118,
        "./tzm-latn": 119,
        "./tzm-latn.js": 119,
        "./tzm.js": 118,
        "./uk": 120,
        "./uk.js": 120,
        "./ur": 121,
        "./ur.js": 121,
        "./uz": 122,
        "./uz-latn": 123,
        "./uz-latn.js": 123,
        "./uz.js": 122,
        "./vi": 124,
        "./vi.js": 124,
        "./x-pseudo": 125,
        "./x-pseudo.js": 125,
        "./yo": 126,
        "./yo.js": 126,
        "./zh-cn": 127,
        "./zh-cn.js": 127,
        "./zh-hk": 128,
        "./zh-hk.js": 128,
        "./zh-tw": 129,
        "./zh-tw.js": 129
    };
    a.keys = function() {
        return Object.keys(r)
    }
    ,
    a.resolve = s,
    e.exports = a,
    a.id = 159
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        var t = e.target.files[0]
          , n = new FileReader
          , a = (0,
        i.get)("img.thumb");
        n.onload = function(e) {
            return a.src = e.target.result
        }
        ,
        n.readAsDataURL(t)
    }
    function s(e) {
        e.preventDefault();
        var t = (0,
        i.get)(".modal");
        (0,
        i.get)(".modal__content", t).innerHTML = '\n    <div class="upload form">\n      <p class="upload__message"> Share a new image! </p>\n      <form class="form__image" action="/api/upload" method="POST" enctype="multipart/form-data">\n        <label for="photo" class="upload__label">\n          <div class="thumb-cont col">\n            <img class="thumb">\n          </div>\n          <div class="icon-modal__upload"> ⬆︎ </div>\n          <input type="file" name="photo" id="photo" accept="image/png, image/jpeg" required />\n        </label>\n        <textarea type="text" name="caption" placeholder="Write a caption..." maxlength="140" autocomplete="off"></textarea>\n        <input class="button submit-image" type="submit" value="Share"/>\n      </form>\n    </div>\n  ',
        (0,
        d.showModal)(),
        (0,
        i.get)('input[type="file"]', t).onchange = function() {
            return a(event)
        }
        ;
        var n = (0,
        i.get)("form.form__image");
        (0,
        i.add)(n, "submit", r)
    }
    function r() {
        var e = (0,
        i.get)("input.submit-image")
          , t = e.parentNode;
        t.removeChild(e);
        t.insertAdjacentHTML("beforeend", '\n    <div class="loader-cont">\n      <div class="loader"></div>\n    </div>\n  ')
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.loader = t.preUpload = t.uploadImage = void 0;
    var i = n(2)
      , d = n(4);
    t.uploadImage = s,
    t.preUpload = a,
    t.loader = r
}
]);
