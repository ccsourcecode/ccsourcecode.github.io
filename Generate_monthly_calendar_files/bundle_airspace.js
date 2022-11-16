(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        ! function(t, e) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e()
        }(this, (function() {
            "use strict";
            var t = 1e3,
                e = 6e4,
                n = 36e5,
                r = "millisecond",
                i = "second",
                s = "minute",
                u = "hour",
                a = "day",
                o = "week",
                f = "month",
                h = "quarter",
                c = "year",
                d = "date",
                l = "Invalid Date",
                $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                M = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function(t) {
                        var e = ["th", "st", "nd", "rd"],
                            n = t % 100;
                        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                    }
                },
                m = function(t, e, n) {
                    var r = String(t);
                    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                },
                v = {
                    s: m,
                    z: function(t) {
                        var e = -t.utcOffset(),
                            n = Math.abs(e),
                            r = Math.floor(n / 60),
                            i = n % 60;
                        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0")
                    },
                    m: function t(e, n) {
                        if (e.date() < n.date()) return -t(n, e);
                        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                            i = e.clone().add(r, f),
                            s = n - i < 0,
                            u = e.clone().add(r + (s ? -1 : 1), f);
                        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0)
                    },
                    a: function(t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    },
                    p: function(t) {
                        return {
                            M: f,
                            y: c,
                            w: o,
                            d: a,
                            D: d,
                            h: u,
                            m: s,
                            s: i,
                            ms: r,
                            Q: h
                        } [t] || String(t || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function(t) {
                        return void 0 === t
                    }
                },
                g = "en",
                D = {};
            D[g] = M;
            var p = function(t) {
                    return t instanceof _
                },
                S = function t(e, n, r) {
                    var i;
                    if (!e) return g;
                    if ("string" == typeof e) {
                        var s = e.toLowerCase();
                        D[s] && (i = s), n && (D[s] = n, i = s);
                        var u = e.split("-");
                        if (!i && u.length > 1) return t(u[0])
                    } else {
                        var a = e.name;
                        D[a] = e, i = a
                    }
                    return !r && i && (g = i), i || !r && g
                },
                w = function(t, e) {
                    if (p(t)) return t.clone();
                    var n = "object" == typeof e ? e : {};
                    return n.date = t, n.args = arguments, new _(n)
                },
                O = v;
            O.l = S, O.i = p, O.w = function(t, e) {
                return w(t, {
                    locale: e.$L,
                    utc: e.$u,
                    x: e.$x,
                    $offset: e.$offset
                })
            };
            var _ = function() {
                    function M(t) {
                        this.$L = S(t.locale, null, !0), this.parse(t)
                    }
                    var m = M.prototype;
                    return m.parse = function(t) {
                        this.$d = function(t) {
                            var e = t.date,
                                n = t.utc;
                            if (null === e) return new Date(NaN);
                            if (O.u(e)) return new Date;
                            if (e instanceof Date) return new Date(e);
                            if ("string" == typeof e && !/Z$/i.test(e)) {
                                var r = e.match($);
                                if (r) {
                                    var i = r[2] - 1 || 0,
                                        s = (r[7] || "0").substring(0, 3);
                                    return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                }
                            }
                            return new Date(e)
                        }(t), this.$x = t.x || {}, this.init()
                    }, m.init = function() {
                        var t = this.$d;
                        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                    }, m.$utils = function() {
                        return O
                    }, m.isValid = function() {
                        return !(this.$d.toString() === l)
                    }, m.isSame = function(t, e) {
                        var n = w(t);
                        return this.startOf(e) <= n && n <= this.endOf(e)
                    }, m.isAfter = function(t, e) {
                        return w(t) < this.startOf(e)
                    }, m.isBefore = function(t, e) {
                        return this.endOf(e) < w(t)
                    }, m.$g = function(t, e, n) {
                        return O.u(t) ? this[e] : this.set(n, t)
                    }, m.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }, m.valueOf = function() {
                        return this.$d.getTime()
                    }, m.startOf = function(t, e) {
                        var n = this,
                            r = !!O.u(e) || e,
                            h = O.p(t),
                            l = function(t, e) {
                                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                return r ? i : i.endOf(a)
                            },
                            $ = function(t, e) {
                                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                            },
                            y = this.$W,
                            M = this.$M,
                            m = this.$D,
                            v = "set" + (this.$u ? "UTC" : "");
                        switch (h) {
                            case c:
                                return r ? l(1, 0) : l(31, 11);
                            case f:
                                return r ? l(1, M) : l(0, M + 1);
                            case o:
                                var g = this.$locale().weekStart || 0,
                                    D = (y < g ? y + 7 : y) - g;
                                return l(r ? m - D : m + (6 - D), M);
                            case a:
                            case d:
                                return $(v + "Hours", 0);
                            case u:
                                return $(v + "Minutes", 1);
                            case s:
                                return $(v + "Seconds", 2);
                            case i:
                                return $(v + "Milliseconds", 3);
                            default:
                                return this.clone()
                        }
                    }, m.endOf = function(t) {
                        return this.startOf(t, !1)
                    }, m.$set = function(t, e) {
                        var n, o = O.p(t),
                            h = "set" + (this.$u ? "UTC" : ""),
                            l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
                            $ = o === a ? this.$D + (e - this.$W) : e;
                        if (o === f || o === c) {
                            var y = this.clone().set(d, 1);
                            y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d
                        } else l && this.$d[l]($);
                        return this.init(), this
                    }, m.set = function(t, e) {
                        return this.clone().$set(t, e)
                    }, m.get = function(t) {
                        return this[O.p(t)]()
                    }, m.add = function(r, h) {
                        var d, l = this;
                        r = Number(r);
                        var $ = O.p(h),
                            y = function(t) {
                                var e = w(l);
                                return O.w(e.date(e.date() + Math.round(t * r)), l)
                            };
                        if ($ === f) return this.set(f, this.$M + r);
                        if ($ === c) return this.set(c, this.$y + r);
                        if ($ === a) return y(1);
                        if ($ === o) return y(7);
                        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
                            m = this.$d.getTime() + r * M;
                        return O.w(m, this)
                    }, m.subtract = function(t, e) {
                        return this.add(-1 * t, e)
                    }, m.format = function(t) {
                        var e = this,
                            n = this.$locale();
                        if (!this.isValid()) return n.invalidDate || l;
                        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                            i = O.z(this),
                            s = this.$H,
                            u = this.$m,
                            a = this.$M,
                            o = n.weekdays,
                            f = n.months,
                            h = function(t, n, i, s) {
                                return t && (t[n] || t(e, r)) || i[n].slice(0, s)
                            },
                            c = function(t) {
                                return O.s(s % 12 || 12, t, "0")
                            },
                            d = n.meridiem || function(t, e, n) {
                                var r = t < 12 ? "AM" : "PM";
                                return n ? r.toLowerCase() : r
                            },
                            $ = {
                                YY: String(this.$y).slice(-2),
                                YYYY: this.$y,
                                M: a + 1,
                                MM: O.s(a + 1, 2, "0"),
                                MMM: h(n.monthsShort, a, f, 3),
                                MMMM: h(f, a),
                                D: this.$D,
                                DD: O.s(this.$D, 2, "0"),
                                d: String(this.$W),
                                dd: h(n.weekdaysMin, this.$W, o, 2),
                                ddd: h(n.weekdaysShort, this.$W, o, 3),
                                dddd: o[this.$W],
                                H: String(s),
                                HH: O.s(s, 2, "0"),
                                h: c(1),
                                hh: c(2),
                                a: d(s, u, !0),
                                A: d(s, u, !1),
                                m: String(u),
                                mm: O.s(u, 2, "0"),
                                s: String(this.$s),
                                ss: O.s(this.$s, 2, "0"),
                                SSS: O.s(this.$ms, 3, "0"),
                                Z: i
                            };
                        return r.replace(y, (function(t, e) {
                            return e || $[t] || i.replace(":", "")
                        }))
                    }, m.utcOffset = function() {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                    }, m.diff = function(r, d, l) {
                        var $, y = O.p(d),
                            M = w(r),
                            m = (M.utcOffset() - this.utcOffset()) * e,
                            v = this - M,
                            g = O.m(this, M);
                        return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g)
                    }, m.daysInMonth = function() {
                        return this.endOf(f).$D
                    }, m.$locale = function() {
                        return D[this.$L]
                    }, m.locale = function(t, e) {
                        if (!t) return this.$L;
                        var n = this.clone(),
                            r = S(t, e, !0);
                        return r && (n.$L = r), n
                    }, m.clone = function() {
                        return O.w(this.$d, this)
                    }, m.toDate = function() {
                        return new Date(this.valueOf())
                    }, m.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }, m.toISOString = function() {
                        return this.$d.toISOString()
                    }, m.toString = function() {
                        return this.$d.toUTCString()
                    }, M
                }(),
                T = _.prototype;
            return w.prototype = T, [
                ["$ms", r],
                ["$s", i],
                ["$m", s],
                ["$H", u],
                ["$W", a],
                ["$M", f],
                ["$y", c],
                ["$D", d]
            ].forEach((function(t) {
                T[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1])
                }
            })), w.extend = function(t, e) {
                return t.$i || (t(e, _, w), t.$i = !0), w
            }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
                return w(1e3 * t)
            }, w.en = D[g], w.Ls = D, w.p = {}, w
        }));
    }, {}],
    2: [function(require, module, exports) {
        ! function(e, t) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t()
        }(this, (function() {
            "use strict";
            var e = "week",
                t = "year";
            return function(i, n, r) {
                var f = n.prototype;
                f.week = function(i) {
                    if (void 0 === i && (i = null), null !== i) return this.add(7 * (i - this.week()), "day");
                    var n = this.$locale().yearStart || 1;
                    if (11 === this.month() && this.date() > 25) {
                        var f = r(this).startOf(t).add(1, t).date(n),
                            s = r(this).endOf(e);
                        if (f.isBefore(s)) return 1
                    }
                    var a = r(this).startOf(t).date(n).startOf(e).subtract(1, "millisecond"),
                        o = this.diff(a, e, !0);
                    return o < 0 ? r(this).startOf("week").week() : Math.ceil(o)
                }, f.weeks = function(e) {
                    return void 0 === e && (e = null), this.week(e)
                }
            }
        }));
    }, {}],
    3: [function(require, module, exports) {
        ! function(e, t) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekday = t()
        }(this, (function() {
            "use strict";
            return function(e, t) {
                t.prototype.weekday = function(e) {
                    var t = this.$locale().weekStart || 0,
                        i = this.$W,
                        n = (i < t ? i + 7 : i) - t;
                    return this.$utils().u(e) ? n : this.subtract(n, "day").add(e, "day")
                }
            }
        }));
    }, {}],
    4: [function(require, module, exports) {
        "use strict";

        var _dayjs = _interopRequireDefault(require("dayjs"));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        const weekday = require("dayjs/plugin/weekday");
        const weekOfYear = require("dayjs/plugin/weekOfYear");
        _dayjs.default.extend(weekday);
        _dayjs.default.extend(weekOfYear);
        
        console.warn('Hey');

        // static template
        document.getElementById("app").innerHTML = `
<div class="calendar-month">
  <section class="calendar-month-header">
  <!-- Month name -->
    <div
      id="selected-month"
      class="calendar-month-header-selected-month"
    ></div>

    <!-- Pagination -->
    <section class="calendar-month-header-selectors">
      <span id="previous-month-selector"><</span>
      <span id="present-month-selector">Today</span>
      <span id="next-month-selector">></span>
    </section>

  </section>

  <!-- Calendar grid header -->
  <ol
    id="days-of-week"
    class="day-of-week"
  /></ol>

  <ol
    id="calendar-days"
    class="days-grid"
  >
  </ol>
</div>
`;

// Step 2: Setting up current month calendar
        const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const TODAY = (0, _dayjs.default)().format("YYYY-MM-DD");
        // fetch the current year and set in in YYYY format:
        const INITIAL_YEAR = (0, _dayjs.default)().format("YYYY");
        // set the current month as the starting point when initially loading the calendar, 
        // where M formats the month as a numeric value (e.g. January equals 1):
        const INITIAL_MONTH = (0, _dayjs.default)().format("M");
        let selectedMonth = (0, _dayjs.default)(new Date(INITIAL_YEAR, INITIAL_MONTH - 1, 1));
        let currentMonthDays;
        let previousMonthDays;
        let nextMonthDays;

        // Select the calendar grid header element
        const daysOfWeekElement = document.getElementById("days-of-week");

        // Loop through the array of weekdays
        // Add weekdays to calendar header
        WEEKDAYS.forEach(weekday => {
            // For each item in the array, make a list item element
            const weekDayElement = document.createElement("li");
            // Append a child element inside the list item...
            daysOfWeekElement.appendChild(weekDayElement);
            // ...that contains the value in the array
            weekDayElement.innerText = weekday;
        });
        createCalendar();
        initMonthSelectors();

        // Step 3: Creating the calendar grid
        // This method will accept two attributes — year and month  — and based on that, the calend
        function createCalendar(year = INITIAL_YEAR, month = INITIAL_MONTH) {
            // container for the calendar grid, #calendar-days
            const calendarDaysElement = document.getElementById("calendar-days");

            document.getElementById("selected-month").innerText = (0, _dayjs.default)(new Date(year, month - 1)).format("MMMM YYYY");
            // remove all existing days
            removeAllDayElements(calendarDaysElement);
            // When the calendar is cleared, it will calculate new days that should be displayed
            currentMonthDays = createDaysForCurrentMonth(year, month, (0, _dayjs.default)(`${year}-${month}-01`).daysInMonth());
            previousMonthDays = createDaysForPreviousMonth(year, month);
            nextMonthDays = createDaysForNextMonth(year, month);
            // merge all days into a single array of all the days we want to show in the current month
            const days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
            
            console.log(days);

            // append a day element for each day.
            days.forEach(day => {
                appendDay(day, calendarDaysElement);
            });
        }

        // append a day to the calendar view
        function appendDay(day, calendarDaysElement) {
            const dayElement = document.createElement("li");
            const dayElementClassList = dayElement.classList;
            // Generic calendar day class
            dayElementClassList.add("calendar-day");
            // Container for day of month number
            const dayOfMonthElement = document.createElement("span");
            // Content
            dayOfMonthElement.innerText = day.dayOfMonth;
            dayElement.appendChild(dayOfMonthElement);
            // Append the element to the container element
            calendarDaysElement.appendChild(dayElement);
            // Add an extra class to differentiate current month days from prev/next month days
            if (!day.isCurrentMonth) {
                dayElementClassList.add("calendar-day--not-current");
            }

            // add a class  to current day
            if (day.date === TODAY) {
                dayElementClassList.add("calendar-day--today");
            }

            console.error('SSSSSSCS' );
            console.error(day );
            // add a class  to current day
            if (day.dayOfWeek === 'Sunday') {
                dayElementClassList.add("calendar-day--sunday");
            }

            dayElementClassList.add("day_" + day.dayOfMonth);
        }

        // This method takes the first calendar day element, removes it, and replaces it with another one. 
        // From there, it will run the logic in a loop until all of the elements are removed.
        function removeAllDayElements(calendarDaysElement) {
            let first = calendarDaysElement.firstElementChild;
            while (first) {
                first.remove();
                first = calendarDaysElement.firstElementChild;
            }
        }

        // Create days for the current month
        function getNumberOfDaysInMonth(year, month) {
            return (0, _dayjs.default)(`${year}-${month}-01`).daysInMonth();
        }

        // Then we map() that array and create a day object for each one. 
        // The object we create has an arbitrary structure, so you can add other properties if you need them.
        // isCurrentMonth checks whether the date is in the current month or outside of it (previous or next month)
        // return a dayOfMonth property that acts as the label (e.g. 1, 2, 3 and so on)
        function createDaysForCurrentMonth(year, month) {
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
                return {
                    date: (0, _dayjs.default)(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
                    dayOfMonth: index + 1,
                    isCurrentMonth: true,
                    dayOfWeek: weekday[new Date(year, month-1 , index+1 ).getDay()],
                    dayOfMonth: index +1
                };
            });
        }

        // if first day of the month is Wednesday, we need to subtract 3 days to get last Monday of the previous month.
        function createDaysForPreviousMonth(year, month) {
            const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
            const previousMonth = (0, _dayjs.default)(`${year}-${month}-01`).subtract(1, "month");

            // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
            // Account for first day of the month on a Sunday (firstDayOfTheMonthWeekday === 0)
            const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday ? firstDayOfTheMonthWeekday - 1 : 6;
            const previousMonthLastMondayDayOfMonth = (0, _dayjs.default)(currentMonthDays[0].date).subtract(visibleNumberOfDaysFromPreviousMonth, "day").date();
            return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
                return {
                    date: (0, _dayjs.default)(`${previousMonth.year()}-${previousMonth.month() + 1}-${previousMonthLastMondayDayOfMonth + index}`).format("YYYY-MM-DD"),
                    dayOfMonth: previousMonthLastMondayDayOfMonth + index,
                    isCurrentMonth: false
                };
            });
        }

        // calculate how many days from the next month should be visible by subtracting that weekday numeric value from 7.
        // e.g., if the last day of the month is Saturday, we need to subtract 1 day from 7 to construct an array of dates needed from next month (Sunday).
        function createDaysForNextMonth(year, month) {
            const lastDayOfTheMonthWeekday = getWeekday(`${year}-${month}-${currentMonthDays.length}`);
            const nextMonth = (0, _dayjs.default)(`${year}-${month}-01`).add(1, "month");
            const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ? 7 - lastDayOfTheMonthWeekday : lastDayOfTheMonthWeekday;
            return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
                return {
                    date: (0, _dayjs.default)(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format("YYYY-MM-DD"),
                    dayOfMonth: index + 1,
                    isCurrentMonth: false
                };
            });
        }

        // use the WeekDay plugin, check what is the weekday of the first day in selected month
        function getWeekday(date) {
            return (0, _dayjs.default)(date).weekday();
        }

        // add event listeners to the selector elements. 
        // It will listen for click events and update the value of selectedMonth to the name of the newly selected month before running the createCalendar method with proper year and month values.
        function initMonthSelectors() {
            document.getElementById("previous-month-selector").addEventListener("click", function() {
                selectedMonth = (0, _dayjs.default)(selectedMonth).subtract(1, "month");
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
            });

            document.getElementById("present-month-selector").addEventListener("click", function() {
                selectedMonth = (0, _dayjs.default)(new Date(INITIAL_YEAR, INITIAL_MONTH - 1, 1));
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
            });

            document.getElementById("next-month-selector").addEventListener("click", function() {
                selectedMonth = (0, _dayjs.default)(selectedMonth).add(1, "month");
                createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
            });
        }

    }, {
        "dayjs": 1,
        "dayjs/plugin/weekOfYear": 2,
        "dayjs/plugin/weekday": 3
    }]
}, {}, [4]);