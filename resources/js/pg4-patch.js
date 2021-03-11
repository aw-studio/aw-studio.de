var CABLES = (function(t) {
    var e = {};
    function i(s) {
        if (e[s]) return e[s].exports;
        var r = (e[s] = { i: s, l: !1, exports: {} });
        return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
        (i.m = t),
        (i.c = e),
        (i.d = function(t, e, s) {
            i.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: s });
        }),
        (i.r = function(t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (i.t = function(t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (
                (i.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var r in t)
                    i.d(
                        s,
                        r,
                        function(e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return s;
        }),
        (i.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t.default;
                      }
                    : function() {
                          return t;
                      };
            return i.d(e, 'a', e), e;
        }),
        (i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ''),
        i((i.s = 0))
    );
})([
    function(t, e, i) {
        t.exports = i(2);
    },
    function(t, e) {
        t.exports = {
            timestamp: 1610523835610,
            created: '2021-01-13T07:43:55.610Z',
            git: {
                branch: 'master',
                commit: '23ff8761980d7d0ffbe66da8c6253e457a032a73',
                date: null,
            },
        };
    },
    function(t, e, i) {
        'use strict';
        i.r(e);
        var s = {};
        i.r(s),
            i.d(s, 'base64Chars', function() {
                return h;
            }),
            i.d(s, 'base64lookup', function() {
                return l;
            }),
            i.d(s, 'b64encTypesArray', function() {
                return u;
            }),
            i.d(s, 'b64decTypedArray', function() {
                return c;
            });
        var r = {};
        i.r(r),
            i.d(r, 'shuffleArray', function() {
                return g;
            }),
            i.d(r, 'shortId', function() {
                return T;
            }),
            i.d(r, 'uuid', function() {
                return b;
            }),
            i.d(r, 'generateUUID', function() {
                return y;
            }),
            i.d(r, 'simpleId', function() {
                return x;
            }),
            i.d(r, 'smoothStep', function() {
                return I;
            }),
            i.d(r, 'smootherStep', function() {
                return v;
            }),
            i.d(r, 'map', function() {
                return P;
            }),
            i.d(r, 'cacheBust', function() {
                return R;
            }),
            i.d(r, 'basename', function() {
                return N;
            }),
            i.d(r, 'jsonp', function() {
                return S;
            }),
            i.d(r, 'ajaxSync', function() {
                return M;
            }),
            i.d(r, 'ajax', function() {
                return C;
            }),
            i.d(r, 'request', function() {
                return w;
            }),
            i.d(r, 'UTILS', function() {
                return f;
            });
        var n = {};
        i.r(n),
            i.d(n, 'easeExpoIn', function() {
                return D;
            }),
            i.d(n, 'easeExpoOut', function() {
                return G;
            }),
            i.d(n, 'easeExpoInOut', function() {
                return H;
            }),
            i.d(n, 'easeCubicIn', function() {
                return z;
            }),
            i.d(n, 'easeCubicOut', function() {
                return Y;
            }),
            i.d(n, 'easeCubicInOut', function() {
                return W;
            }),
            i.d(n, 'ANIM', function() {
                return V;
            }),
            i.d(n, 'Anim', function() {
                return K;
            }),
            i.d(n, 'TL', function() {
                return X;
            });
        var o = {};
        i.r(o),
            i.d(o, 'PatchConnectionReceiver', function() {
                return Ct;
            }),
            i.d(o, 'PatchConnectionSender', function() {
                return wt;
            }),
            i.d(o, 'PatchConnectorBroadcastChannel', function() {
                return kt;
            });
        const h =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            a = new Uint8Array(256);
        for (let t = 0; t < h.length; t++) a[h.charCodeAt(t)] = t;
        const l = a,
            u = function(t) {
                t.buffer && (t = t.buffer);
                let e,
                    i = new Uint8Array(t),
                    s = i.length,
                    r = '';
                for (e = 0; e < s; e += 3)
                    (r += h[i[e] >> 2]),
                        (r += h[((3 & i[e]) << 4) | (i[e + 1] >> 4)]),
                        (r += h[((15 & i[e + 1]) << 2) | (i[e + 2] >> 6)]),
                        (r += h[63 & i[e + 2]]);
                return (
                    s % 3 == 2
                        ? (r = r.substring(0, r.length - 1) + '=')
                        : s % 3 == 1 &&
                          (r = r.substring(0, r.length - 2) + '=='),
                    r
                );
            },
            c = function(t) {
                let e,
                    i,
                    s,
                    r,
                    n,
                    o = 0.75 * t.length,
                    h = t.length,
                    a = 0;
                '=' === t[t.length - 1] &&
                    (o--, '=' === t[t.length - 2] && o--);
                let u = new ArrayBuffer(o),
                    c = new Uint8Array(u);
                for (e = 0; e < h; e += 4)
                    (i = l[t.charCodeAt(e)]),
                        (s = l[t.charCodeAt(e + 1)]),
                        (r = l[t.charCodeAt(e + 2)]),
                        (n = l[t.charCodeAt(e + 3)]),
                        (c[a++] = (i << 2) | (s >> 4)),
                        (c[a++] = ((15 & s) << 4) | (r >> 2)),
                        (c[a++] = ((3 & r) << 6) | (63 & n));
                return u;
            };
        let p = !1;
        const d = {
                log() {
                    if (p) return;
                    const t = ['[core]'];
                    t.push.apply(t, arguments),
                        Function.prototype.apply.apply(console.log, [
                            console,
                            t,
                        ]);
                },
                warn(t) {
                    if (p) return;
                    const e = ['[core]'];
                    e.push.apply(e, arguments),
                        Function.prototype.apply.apply(console.warn, [
                            console,
                            e,
                        ]);
                },
                error(t) {
                    const e = ['[core]'];
                    e.push.apply(e, arguments),
                        Function.prototype.apply.apply(console.error, [
                            console,
                            e,
                        ]);
                },
                setSilent(t) {
                    p = t;
                },
                stack() {
                    console.log(new Error().stack);
                },
            },
            _ = function() {
                (this._eventCallbacks = {}),
                    (this._logName = ''),
                    (this._log = !1),
                    (this._listeners = {}),
                    (this.addEventListener = this.on = function(t, e, i) {
                        const s = {
                            id: (i || '') + CABLES.uuid(),
                            name: t,
                            cb: e,
                        };
                        return (
                            this._eventCallbacks[t]
                                ? this._eventCallbacks[t].push(s)
                                : (this._eventCallbacks[t] = [s]),
                            (this._listeners[s.id] = s),
                            s.id
                        );
                    }),
                    (this.hasEventListener = function(t, e) {
                        if (
                            (console.warn(
                                'old eventtarget function haseventlistener!'
                            ),
                            t && e)
                        ) {
                            if (this._eventCallbacks[t]) {
                                return -1 != this._eventCallbacks[t].indexOf(e);
                            }
                        } else d.warn('hasListener: missing parameters');
                    }),
                    (this.removeEventListener = this.off = function(t, e) {
                        if (null == t) return;
                        if (!e) {
                            const e = this._listeners[t];
                            if (!e) return;
                            let i = !0;
                            for (; i; ) {
                                i = !1;
                                let s = -1;
                                for (
                                    let r = 0;
                                    r < this._eventCallbacks[e.name].length;
                                    r++
                                )
                                    0 ===
                                        this._eventCallbacks[e.name][
                                            r
                                        ].id.indexOf(t) && ((i = !0), (s = r));
                                -1 !== s &&
                                    (this._eventCallbacks[e.name].splice(s, 1),
                                    delete this._listeners[t]);
                            }
                            return;
                        }
                        console.warn(
                            '[eventtarget] old function signature: removeEventListener!'
                        );
                        let i = null;
                        for (let s = 0; s < this._eventCallbacks[t].length; s++)
                            this._eventCallbacks[t][s].cb == e && (i = s);
                        null !== i
                            ? delete this._eventCallbacks[i]
                            : console.warn(
                                  '[removeEventListener] not found ' + t
                              );
                    }),
                    (this.logEvents = function(t, e) {
                        (this._log = t), (this._logName = e);
                    }),
                    (this.emitEvent = function(t, e, i, s, r, n, o) {
                        if (
                            (this._log &&
                                console.log(
                                    '[event] ',
                                    this._logName,
                                    t,
                                    this._eventCallbacks
                                ),
                            this._eventCallbacks[t])
                        )
                            for (
                                let h = 0;
                                h < this._eventCallbacks[t].length;
                                h++
                            )
                                this._eventCallbacks[t][h] &&
                                    this._eventCallbacks[t][h].cb(
                                        e,
                                        i,
                                        s,
                                        r,
                                        n,
                                        o
                                    );
                        else
                            this._log &&
                                console.log(
                                    '[event] has no event callback',
                                    t,
                                    this._eventCallbacks
                                );
                    });
            },
            f = {
                float32Concat: function(t, e) {
                    t instanceof Float32Array || (t = new Float32Array(t)),
                        e instanceof Float32Array || (e = new Float32Array(e));
                    const i = new Float32Array(t.length + e.length);
                    return i.set(t), i.set(e, t.length), i;
                },
            },
            g = function(t) {
                for (let e = t.length - 1; e > 0; e--) {
                    const i = Math.floor(Math.seededRandom() * (e + 1)),
                        s = t[e];
                    (t[e] = t[i]), (t[i] = s);
                }
                return t;
            },
            m = {},
            E = function() {
                let t = Math.random()
                    .toString(36)
                    .substr(2, 9);
                return m.hasOwnProperty(t) && (t = E()), (m[t] = !0), t;
            },
            T = E,
            A = function() {
                let t = new Date().getTime();
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                    /[xy]/g,
                    e => {
                        const i = (t + 16 * Math.random()) % 16 | 0;
                        return (
                            (t = Math.floor(t / 16)),
                            ('x' == e ? i : (3 & i) | 8).toString(16)
                        );
                    }
                );
            },
            b = A,
            y = A;
        let O = 0;
        const x = function() {
                return O++, O;
            },
            I = function(t) {
                const e = Math.max(0, Math.min(1, (t - 0) / 1));
                return (t = e * e * (3 - 2 * e));
            },
            v = function(t) {
                const e = Math.max(0, Math.min(1, (t - 0) / 1));
                return (t = e * e * e * (e * (6 * e - 15) + 10));
            },
            P = function(t, e, i, s, r, n) {
                if (t >= i) return r;
                if (t <= e) return s;
                let o = !1;
                const h = Math.min(e, i),
                    a = Math.max(e, i);
                h != e && (o = !0);
                let l = !1;
                const u = Math.min(s, r),
                    c = Math.max(s, r);
                u != s && (l = !0);
                let p = 0,
                    d = 0;
                return (
                    (p = o
                        ? ((a - t) * (c - u)) / (a - h)
                        : ((t - h) * (c - u)) / (a - h)),
                    (d = l ? c - p : p + u),
                    n
                        ? 1 == n
                            ? s +
                              (t = Math.max(
                                  0,
                                  Math.min(1, (d - s) / (r - s))
                              )) *
                                  t *
                                  (3 - 2 * t) *
                                  (r - s)
                            : 2 == n
                            ? s +
                              (t = Math.max(
                                  0,
                                  Math.min(1, (d - s) / (r - s))
                              )) *
                                  t *
                                  t *
                                  (t * (6 * t - 15) + 10) *
                                  (r - s)
                            : d
                        : d
                );
            };
        (Math.randomSeed = 1),
            (Math.seededRandom = function(t, e) {
                0 === Math.randomSeed &&
                    (Math.randomSeed = 999 * Math.random()),
                    (t = t || 1),
                    (e = e || 0),
                    (Math.randomSeed =
                        (9301 * Math.randomSeed + 49297) % 233280);
                return e + (Math.randomSeed / 233280) * (t - e);
            }),
            (f.arrayWriteToEnd = function(t, e) {
                for (let e = 1; e < t.length; e++) t[e - 1] = t[e];
                t[t.length - 1] = e;
            }),
            (f.isNumeric = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
            }),
            (f.isArray = function(t) {
                return '[object Array]' === Object.prototype.toString.call(t);
            }),
            (String.prototype.endl = function() {
                return this + '\n';
            }),
            (String.prototype.startsWith = function(t) {
                return 0 === this.indexOf(t);
            }),
            (String.prototype.endsWith = function(t) {
                return this.match(t + '$') == t;
            });
        const R = function(t) {
                return (
                    t.indexOf('?') > -1 ? (t += '&') : (t += '?'),
                    t + 'cb=' + CABLES.uuid()
                );
            },
            N = function(t) {
                let e = '';
                if (!t) return '';
                const i = (t + '').split('/');
                if (i.length > 0) {
                    let t = i[i.length - 1].split('?');
                    (e = t[0]), (t = e.split('.')), (e = t[0]);
                }
                return e;
            };
        let F = null;
        const S = function(t, e) {
                (F = F || 0), F++;
                const i = F;
                CABLES['jsonpFunc' + i] = function(t) {
                    e(!1, t);
                };
                let s = '?';
                t.indexOf(s) > -1 && (s = '&');
                const r = document.createElement('script');
                r.setAttribute('src', t + s + 'callback=CABLES.jsonpFunc' + i),
                    document.body.appendChild(r);
            },
            M = function(t, e, i, s, r) {
                w({
                    url: t,
                    cb: e,
                    method: i,
                    data: s,
                    contenttype: r,
                    sync: !0,
                });
            },
            C = function(t, e, i, s, r, n, o = {}) {
                w({
                    url: t,
                    cb: e,
                    method: i,
                    data: s,
                    contenttype: r,
                    sync: !1,
                    jsonP: n,
                    headers: o,
                });
            },
            w = function(t) {
                let e;
                t.hasOwnProperty('asynch') || (t.asynch = !0);
                try {
                    e = new XMLHttpRequest();
                } catch (t) {}
                if (
                    ((e.onreadystatechange = function() {
                        4 == e.readyState &&
                            t.cb &&
                            (200 == e.status || 0 == e.status
                                ? t.cb(!1, e.responseText, e)
                                : t.cb(!0, e.responseText, e));
                    }),
                    e.addEventListener('progress', t => {}),
                    e.open(
                        t.method ? t.method.toUpperCase() : 'GET',
                        t.url,
                        !t.sync
                    ),
                    'object' == typeof t.headers)
                ) {
                    const i = Object.keys(t.headers);
                    for (let s = 0; s < i.length; s++) {
                        const r = i[s],
                            n = t.headers[r];
                        e.setRequestHeader(r, n);
                    }
                }
                t.post || t.data
                    ? (e.setRequestHeader(
                          'Content-type',
                          t.contenttype
                              ? t.contenttype
                              : 'application/x-www-form-urlencoded'
                      ),
                      e.send(t.data || t.post))
                    : e.send();
            };
        window.performance = window.performance || {
            offset: Date.now(),
            now: function() {
                return Date.now() - this.offset;
            },
        };
        const k = {
                ANIM: {
                    EASINGS: [
                        'linear',
                        'absolute',
                        'smoothstep',
                        'smootherstep',
                        'Cubic In',
                        'Cubic Out',
                        'Cubic In Out',
                        'Expo In',
                        'Expo Out',
                        'Expo In Out',
                        'Sin In',
                        'Sin Out',
                        'Sin In Out',
                        'Quart In',
                        'Quart Out',
                        'Quart In Out',
                        'Quint In',
                        'Quint Out',
                        'Quint In Out',
                        'Back In',
                        'Back Out',
                        'Back In Out',
                        'Elastic In',
                        'Elastic Out',
                        'Bounce In',
                        'Bounce Out',
                    ],
                    EASING_LINEAR: 0,
                    EASING_ABSOLUTE: 1,
                    EASING_SMOOTHSTEP: 2,
                    EASING_SMOOTHERSTEP: 3,
                    EASING_BEZIER: 4,
                    EASING_CUBIC_IN: 5,
                    EASING_CUBIC_OUT: 6,
                    EASING_CUBIC_INOUT: 7,
                    EASING_EXPO_IN: 8,
                    EASING_EXPO_OUT: 9,
                    EASING_EXPO_INOUT: 10,
                    EASING_SIN_IN: 11,
                    EASING_SIN_OUT: 12,
                    EASING_SIN_INOUT: 13,
                    EASING_BACK_IN: 14,
                    EASING_BACK_OUT: 15,
                    EASING_BACK_INOUT: 16,
                    EASING_ELASTIC_IN: 17,
                    EASING_ELASTIC_OUT: 18,
                    EASING_BOUNCE_IN: 19,
                    EASING_BOUNCE_OUT: 21,
                    EASING_QUART_IN: 22,
                    EASING_QUART_OUT: 23,
                    EASING_QUART_INOUT: 24,
                    EASING_QUINT_IN: 25,
                    EASING_QUINT_OUT: 26,
                    EASING_QUINT_INOUT: 27,
                },
                OP: {
                    OP_PORT_TYPE_VALUE: 0,
                    OP_PORT_TYPE_FUNCTION: 1,
                    OP_PORT_TYPE_OBJECT: 2,
                    OP_PORT_TYPE_TEXTURE: 2,
                    OP_PORT_TYPE_ARRAY: 3,
                    OP_PORT_TYPE_DYNAMIC: 4,
                    OP_PORT_TYPE_STRING: 5,
                    OP_VERSION_PREFIX: '_v',
                },
                PORT: { PORT_DIR_IN: 0, PORT_DIR_OUT: 1 },
                PACO: {
                    PACO_CLEAR: 0,
                    PACO_VALUECHANGE: 1,
                    PACO_OP_DELETE: 2,
                    PACO_UNLINK: 3,
                    PACO_LINK: 4,
                    PACO_LOAD: 5,
                    PACO_OP_CREATE: 6,
                    PACO_OP_ENABLE: 7,
                    PACO_OP_DISABLE: 8,
                },
            },
            U = function(t, e, i, s) {
                _.apply(this),
                    (this.data = {}),
                    (this.direction = k.PORT.PORT_DIR_IN),
                    (this.id = y()),
                    (this.parent = t),
                    (this.links = []),
                    (this.value = 0),
                    (this.name = e),
                    (this.type = i || k.OP.OP_PORT_TYPE_VALUE),
                    (this.uiAttribs = s || {}),
                    (this.anim = null),
                    (this._oldAnimVal = -5711),
                    (this.defaultValue = null),
                    (this._uiActiveState = !0),
                    (this.ignoreValueSerialize = !1),
                    (this.onLinkChanged = null),
                    (this.crashed = !1),
                    (this._valueBeforeLink = null),
                    (this._lastAnimFrame = -1),
                    (this._animated = !1),
                    (this.onValueChanged = null),
                    (this.onTriggered = null),
                    (this.onUiActiveStateChange = null),
                    (this.changeAlways = !1),
                    (this._warnedDeprecated = !1),
                    (this._useVariableName = null),
                    (this._tempLastUiValue = null),
                    Object.defineProperty(this, 'val', {
                        get() {
                            return (this._warnedDeprecated = !0), this.get();
                        },
                        set(t) {
                            this.setValue(t), (this._warnedDeprecated = !0);
                        },
                    });
            };
        (U.prototype.getValueForDisplay = function() {
            let t = String(this.val);
            return (
                !this.uiAttribs ||
                ('bool' != this.uiAttribs.display &&
                    'bool' != this.uiAttribs.type)
                    ? t.length > 100 && (t = t.substring(0, 100))
                    : (t = this.val ? 'true' : 'false'),
                t
            );
        }),
            (U.prototype.onAnimToggle = function() {}),
            (U.prototype._onAnimToggle = function() {
                this.onAnimToggle();
            }),
            (U.prototype.hidePort = function() {
                this.setUiAttribs({ hidePort: !0 });
            }),
            (U.prototype.remove = function() {
                this.removeLinks(), this.parent.removePort(this);
            }),
            (U.prototype.setUiAttribs = function(t) {
                let e = !1;
                this.uiAttribs || (this.uiAttribs = {});
                for (const i in t)
                    this.uiAttribs[i] != t[i] && (e = !0),
                        (this.uiAttribs[i] = t[i]);
                e && this.emitEvent('onUiAttrChange', t);
            }),
            (U.prototype.getUiAttribs = function() {
                return this.uiAttribs;
            }),
            (U.prototype.getUiAttrib = function(t) {
                return this.uiAttribs && this.uiAttribs.hasOwnProperty(t)
                    ? this.uiAttribs[t]
                    : null;
            }),
            (U.prototype.get = function() {
                return (
                    this._animated &&
                        this._lastAnimFrame !=
                            this.parent.patch.getFrameNum() &&
                        ((this._lastAnimFrame = this.parent.patch.getFrameNum()),
                        (this.value = this.anim.getValue(
                            this.parent.patch.timer.getTime()
                        )),
                        (this._oldAnimVal = this.value),
                        this.forceChange()),
                    this.value
                );
            }),
            (U.prototype.set = U.prototype.setValue = function(t) {
                if (
                    void 0 !== t &&
                    this.parent.enabled &&
                    !this.crashed &&
                    (t !== this.value ||
                        this.changeAlways ||
                        this.type == k.OP.OP_PORT_TYPE_TEXTURE ||
                        this.type == k.OP.OP_PORT_TYPE_ARRAY)
                ) {
                    if (this._animated)
                        this.anim.setValue(
                            this.parent.patch.timer.getTime(),
                            t
                        );
                    else {
                        try {
                            (this.value = t), this.forceChange();
                        } catch (t) {
                            (this.crashed = !0),
                                (this.setValue = function(t) {}),
                                (this.onTriggered = function() {}),
                                console.error(
                                    'onvaluechanged exception cought',
                                    t
                                ),
                                d.log(t.stack),
                                d.log('exception in: ' + this.parent.name),
                                this.parent.patch.isEditorMode() &&
                                    gui.showOpCrash(this.parent),
                                this.parent.patch.emitEvent(
                                    'exception'.ex,
                                    this.parent
                                );
                        }
                        this.parent.patch.isEditorMode() &&
                            this.type == k.OP.OP_PORT_TYPE_TEXTURE &&
                            gui.texturePreview().updateTexturePort(this);
                    }
                    if (this.direction == k.PORT.PORT_DIR_OUT)
                        for (let t = 0; t < this.links.length; ++t)
                            this.links[t].setValue();
                }
            }),
            (U.prototype.updateAnim = function() {
                this._animated &&
                    ((this.value = this.get()),
                    (this._oldAnimVal != this.value || this.changeAlways) &&
                        ((this._oldAnimVal = this.value), this.forceChange()),
                    (this._oldAnimVal = this.value));
            }),
            (U.args = function(t) {
                return (t + '')
                    .replace(/[/][/].*$/gm, '')
                    .replace(/\s+/g, '')
                    .replace(/[/][*][^/*]*[*][/]/g, '')
                    .split('){', 1)[0]
                    .replace(/^[^(]*[(]/, '')
                    .replace(/=[^,]+/g, '')
                    .split(',')
                    .filter(Boolean);
            }),
            (U.prototype.forceChange = function() {
                this.onValueChanged || this.onChange,
                    this.emitEvent('change', this.value, this),
                    this.onChange
                        ? this.onChange(this, this.value)
                        : this.onValueChanged &&
                          this.onValueChanged(this, this.value);
            }),
            (U.prototype.getTypeString = function() {
                return this.type == k.OP.OP_PORT_TYPE_VALUE
                    ? 'Number'
                    : this.type == k.OP.OP_PORT_TYPE_FUNCTION
                    ? 'Trigger'
                    : this.type == k.OP.OP_PORT_TYPE_OBJECT
                    ? 'Object'
                    : this.type == k.OP.OP_PORT_TYPE_DYNAMIC
                    ? 'Dynamic'
                    : this.type == k.OP.OP_PORT_TYPE_ARRAY
                    ? 'Array'
                    : this.type == k.OP.OP_PORT_TYPE_STRING
                    ? 'String'
                    : 'Unknown';
            }),
            (U.prototype.getSerialized = function() {
                const t = {};
                if (
                    ((t.name = this.getName()),
                    this.ignoreValueSerialize ||
                        0 !== this.links.length ||
                        (this.type == k.OP.OP_PORT_TYPE_OBJECT &&
                            this.value &&
                            this.value.tex) ||
                        (t.value = this.value),
                    this._useVariableName &&
                        (t.useVariable = this._useVariableName),
                    this._animated && (t.animated = !0),
                    this.anim && (t.anim = this.anim.getSerialized()),
                    'file' == this.uiAttribs.display &&
                        (t.display = this.uiAttribs.display),
                    this.direction == k.PORT.PORT_DIR_IN &&
                        this.links.length > 0)
                ) {
                    t.links = [];
                    for (const e in this.links)
                        this.links[e].portIn &&
                            this.links[e].portOut &&
                            t.links.push(this.links[e].getSerialized());
                }
                return t;
            }),
            (U.prototype.shouldLink = function() {
                return !0;
            }),
            (U.prototype.removeLinks = function() {
                let t = 0;
                for (; this.links.length > 0; ) {
                    if ((t++, t > 5e3)) {
                        console.warn(
                            'could not delete links... / infinite loop'
                        ),
                            (this.links.length = 0);
                        break;
                    }
                    this.links[0].remove();
                }
            }),
            (U.prototype.removeLink = function(t) {
                for (const e in this.links)
                    this.links[e] == t && this.links.splice(e, 1);
                this.direction == k.PORT.PORT_DIR_IN &&
                    (this.type == k.OP.OP_PORT_TYPE_VALUE
                        ? this.setValue(this._valueBeforeLink || 0)
                        : this.setValue(this._valueBeforeLink || null)),
                    this.onLinkChanged && this.onLinkChanged(),
                    this.emitEvent('onLinkChanged');
            }),
            (U.prototype.getName = function() {
                return this.name;
            }),
            (U.prototype.addLink = function(t) {
                (this._valueBeforeLink = this.value),
                    this.links.push(t),
                    this.onLinkChanged && this.onLinkChanged(),
                    this.emitEvent('onLinkChanged');
            }),
            (U.prototype.getLinkTo = function(t) {
                for (const e in this.links)
                    if (this.links[e].portIn == t || this.links[e].portOut == t)
                        return this.links[e];
            }),
            (U.prototype.removeLinkTo = function(t) {
                for (const e in this.links)
                    if (this.links[e].portIn == t || this.links[e].portOut == t)
                        return (
                            this.links[e].remove(),
                            this.onLinkChanged && this.onLinkChanged(),
                            void this.emitEvent('onLinkChanged')
                        );
            }),
            (U.prototype.isLinkedTo = function(t) {
                for (const e in this.links)
                    if (this.links[e].portIn == t || this.links[e].portOut == t)
                        return !0;
                return !1;
            }),
            (U.prototype.trigger = function() {
                if (0 === this.links.length) return;
                if (!this.parent.enabled) return;
                let t = null;
                try {
                    for (let e = 0; e < this.links.length; ++e)
                        this.links[e].portIn &&
                            ((t = this.links[e].portIn), t._onTriggered()),
                            this.links[e] && this.links[e].activity();
                } catch (e) {
                    (this.parent.enabled = !1),
                        this.parent.patch.isEditorMode() &&
                            (this.parent.patch.emitEvent(
                                'exception',
                                e,
                                t.parent
                            ),
                            this.parent.patch.emitEvent('opcrash', t)),
                        d.log('exception!'),
                        console.error('ontriggered exception cought', e),
                        d.log(e.stack),
                        d.log('exception in: ' + t.parent.name);
                }
            }),
            (U.prototype.call = function() {
                d.log('call deprecated - use trigger() '), this.trigger();
            }),
            (U.prototype.execute = function() {
                d.log('### execute port: ' + this.getName(), this.goals.length);
            }),
            (U.prototype.setVariableName = function(t) {
                this._useVariableName = t;
            }),
            (U.prototype.getVariableName = function() {
                return this._useVariableName;
            }),
            (U.prototype.setVariable = function(t) {
                this.setAnimated(!1);
                const e = { useVariable: !1 };
                this._variableIn &&
                    (this._variableIn.removeListener(this.set.bind(this)),
                    (this._variableIn = null)),
                    t
                        ? ((this._variableIn = this.parent.patch.getVar(t)),
                          this._variableIn
                              ? (this._variableIn.addListener(
                                    this.set.bind(this)
                                ),
                                this.set(this._variableIn.getValue()))
                              : console.log('PORT VAR NOT FOUND!!!'),
                          (this._useVariableName = t),
                          (e.useVariable = !0),
                          (e.variableName = this._useVariableName))
                        : ((e.variableName = this._useVariableName = null),
                          (e.useVariable = !1)),
                    this.setUiAttribs(e);
            }),
            (U.prototype.setAnimated = function(t) {
                this._animated != t &&
                    ((this._animated = t),
                    this._animated && !this.anim && (this.anim = new K()),
                    this._onAnimToggle()),
                    this.setUiAttribs({ isAnimated: this._animated });
            }),
            (U.prototype.toggleAnim = function(t) {
                (this._animated = !this._animated),
                    this._animated && !this.anim && (this.anim = new K()),
                    this.setAnimated(this._animated),
                    this._onAnimToggle(),
                    this.setUiAttribs({ isAnimated: this._animated });
            }),
            (U.prototype.getType = function() {
                return this.type;
            }),
            (U.prototype.isLinked = function() {
                return this.links.length > 0;
            }),
            (U.prototype.isBoundToVar = function() {
                return null != this._useVariableName;
            }),
            (U.prototype.isAnimated = function() {
                return this._animated;
            }),
            (U.prototype.isHidden = function() {
                return this.uiAttribs.hidePort;
            }),
            (U.prototype._onTriggered = function(t) {
                this.parent.updateAnims(),
                    this.parent.enabled &&
                        this.onTriggered &&
                        this.onTriggered(t);
            }),
            (U.prototype._onSetProfiling = function(t) {
                this.parent.patch.profiler.add('port', this),
                    this.setValue(t),
                    this.parent.patch.profiler.add('port', null);
            }),
            (U.prototype._onTriggeredProfiling = function() {
                this.parent.enabled &&
                    this.onTriggered &&
                    (this.parent.patch.profiler.add('port', this),
                    this.onTriggered(),
                    this.parent.patch.profiler.add('port', null));
            }),
            (U.prototype.onValueChange = function(t) {
                this.onChange = t;
            }),
            (U.prototype.getUiActiveState = function() {
                return this._uiActiveState;
            }),
            (U.prototype.setUiActiveState = function(t) {
                (this._uiActiveState = t),
                    this.onUiActiveStateChange && this.onUiActiveStateChange();
            }),
            (U.portTypeNumberToString = function(t) {
                return t == k.OP.OP_PORT_TYPE_VALUE
                    ? 'value'
                    : t == k.OP.OP_PORT_TYPE_FUNCTION
                    ? 'function'
                    : t == k.OP.OP_PORT_TYPE_OBJECT
                    ? 'object'
                    : t == k.OP.OP_PORT_TYPE_ARRAY
                    ? 'array'
                    : t == k.OP.OP_PORT_TYPE_STRING
                    ? 'string'
                    : t == k.OP.OP_PORT_TYPE_DYNAMIC
                    ? 'dynamic'
                    : 'unknown';
            });
        class L extends U {
            constructor(t, e, i, s, r) {
                super(t, e, i, s),
                    (this.indexPort = r),
                    (this.indexPort.set = t => {
                        const e = s.values;
                        if (!e) return;
                        let i = Math.floor(t);
                        (i = Math.min(i, e.length - 1)),
                            (i = Math.max(i, 0)),
                            this.indexPort.setValue(i),
                            this.set(e[i]),
                            this.parent.patch.isEditorMode() &&
                                window.gui &&
                                gui.patchView.isCurrentOp(this.parent) &&
                                gui.opParams.show(this.parent);
                    });
            }
            setUiAttribs(t) {
                const e = t.hidePort;
                (t.hidePort = !0),
                    super.setUiAttribs(t),
                    void 0 !== e &&
                        this.indexPort.setUiAttribs({ hidePort: e });
            }
        }
        class B extends L {}
        const V = {
            Key: function(t) {
                (this.time = 0),
                    (this.value = 0),
                    (this.ui = {}),
                    (this.onChange = null),
                    (this._easing = 0),
                    (this.bezTime = 0.5),
                    (this.bezValue = 0),
                    (this.bezTimeIn = -0.5),
                    (this.bezValueIn = 0),
                    (this.cb = null),
                    (this.cbTriggered = !1);
                (this._updateBezier = !1),
                    this.setEasing(k.ANIM.EASING_LINEAR),
                    this.set(t);
            },
        };
        (V.Key.linear = function(t, e, i) {
            return parseFloat(e.value) + parseFloat(i.value - e.value) * t;
        }),
            (V.Key.easeLinear = function(t, e) {
                return V.Key.linear(t, this, e);
            }),
            (V.Key.easeAbsolute = function(t, e) {
                return this.value;
            });
        const D = function(t) {
            return Math.pow(2, 10 * (t - 1));
        };
        V.Key.easeExpoIn = function(t, e) {
            return (t = D(t)), V.Key.linear(t, this, e);
        };
        const G = function(t) {
            return (t = 1 - Math.pow(2, -10 * t));
        };
        V.Key.easeExpoOut = function(t, e) {
            return (t = G(t)), V.Key.linear(t, this, e);
        };
        const H = function(t) {
            return (
                (t *= 2) < 1
                    ? (t = 0.5 * Math.pow(2, 10 * (t - 1)))
                    : (t--, (t = 0.5 * (2 - Math.pow(2, -10 * t)))),
                t
            );
        };
        (V.Key.easeExpoInOut = function(t, e) {
            return (t = H(t)), V.Key.linear(t, this, e);
        }),
            (V.Key.easeSinIn = function(t, e) {
                return (
                    (t = -1 * Math.cos((t * Math.PI) / 2) + 1),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeSinOut = function(t, e) {
                return (
                    (t = Math.sin((t * Math.PI) / 2)), V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeSinInOut = function(t, e) {
                return (
                    (t = -0.5 * (Math.cos(Math.PI * t) - 1)),
                    V.Key.linear(t, this, e)
                );
            });
        const z = function(t) {
            return (t *= t * t);
        };
        (V.Key.easeCubicIn = function(t, e) {
            return (t = z(t)), V.Key.linear(t, this, e);
        }),
            (V.Key.easeInQuint = function(t, e) {
                return (t *= t * t * t * t), V.Key.linear(t, this, e);
            }),
            (V.Key.easeOutQuint = function(t, e) {
                return (
                    (t = (t -= 1) * t * t * t * t + 1), V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeInOutQuint = function(t, e) {
                return (
                    (t /= 0.5) < 1
                        ? (t *= 0.5 * t * t * t * t)
                        : (t = 0.5 * ((t -= 2) * t * t * t * t + 2)),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeInQuart = function(t, e) {
                return (t *= t * t * t), V.Key.linear(t, this, e);
            }),
            (V.Key.easeOutQuart = function(t, e) {
                return (
                    (t = -1 * ((t -= 1) * t * t * t - 1)),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeInOutQuart = function(t, e) {
                return (
                    (t /= 0.5) < 1
                        ? (t *= 0.5 * t * t * t)
                        : (t = -0.5 * ((t -= 2) * t * t * t - 2)),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.bounce = function(t) {
                return (
                    (t /= 1) < 1 / 2.75
                        ? (t *= 7.5625 * t)
                        : (t =
                              t < 2 / 2.75
                                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                                  : t < 2.5 / 2.75
                                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                                  : 7.5625 * (t -= 2.625 / 2.75) * t +
                                    0.984375),
                    t
                );
            }),
            (V.Key.easeInBounce = function(t, e) {
                return V.Key.linear(V.Key.bounce(t), this, e);
            }),
            (V.Key.easeOutBounce = function(t, e) {
                return V.Key.linear(V.Key.bounce(t), this, e);
            }),
            (V.Key.easeInElastic = function(t, e) {
                let i = 1.70158,
                    s = 0,
                    r = 1;
                return (
                    0 === t
                        ? (t = 0)
                        : 1 == (t /= 1)
                        ? (t = 1)
                        : (s || (s = 0.3),
                          r < Math.abs(1)
                              ? ((r = 1), (i = s / 4))
                              : (i = (s / (2 * Math.PI)) * Math.asin(1 / r)),
                          (t =
                              -r *
                                  Math.pow(2, 10 * (t -= 1)) *
                                  Math.sin(((1 * t - i) * (2 * Math.PI)) / s) +
                              0)),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeOutElastic = function(t, e) {
                let i = 1.70158,
                    s = 0,
                    r = 1;
                return (
                    0 === t
                        ? (t = 0)
                        : 1 == (t /= 1)
                        ? (t = 1)
                        : (s || (s = 0.3),
                          r < Math.abs(1)
                              ? ((r = 1), (i = s / 4))
                              : (i = (s / (2 * Math.PI)) * Math.asin(1 / r)),
                          (t =
                              r *
                                  Math.pow(2, -10 * t) *
                                  Math.sin(((1 * t - i) * (2 * Math.PI)) / s) +
                              1 +
                              0)),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeInBack = function(t, e) {
                const i = 1.70158;
                return (
                    (t = t * t * ((i + 1) * t - i)), V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeOutBack = function(t, e) {
                const i = 1.70158;
                return (
                    (t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.easeInOutBack = function(t, e) {
                let i = 1.70158;
                return (
                    (t =
                        (t /= 0.5) < 1
                            ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5
                            : 0.5 *
                              ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) +
                                  2)),
                    V.Key.linear(t, this, e)
                );
            });
        const Y = function(t) {
            return (t = --t * t * t + 1);
        };
        V.Key.easeCubicOut = function(t, e) {
            return (t = Y(t)), V.Key.linear(t, this, e);
        };
        const W = function(t) {
            return (
                (t *= 2) < 1
                    ? (t *= 0.5 * t * t)
                    : (t = 0.5 * ((t -= 2) * t * t + 2)),
                t
            );
        };
        (V.Key.easeCubicInOut = function(t, e) {
            return (t = W(t)), V.Key.linear(t, this, e);
        }),
            (V.Key.easeSmoothStep = function(t, e) {
                const i = Math.max(0, Math.min(1, t));
                return (t = i * i * (3 - 2 * i)), V.Key.linear(t, this, e);
            }),
            (V.Key.easeSmootherStep = function(t, e) {
                const i = Math.max(0, Math.min(1, (t - 0) / 1));
                return (
                    (t = i * i * i * (i * (6 * i - 15) + 10)),
                    V.Key.linear(t, this, e)
                );
            }),
            (V.Key.prototype.setEasing = function(t) {
                (this._easing = t),
                    this._easing == k.ANIM.EASING_ABSOLUTE
                        ? (this.ease = V.Key.easeAbsolute)
                        : this._easing == k.ANIM.EASING_SMOOTHSTEP
                        ? (this.ease = V.Key.easeSmoothStep)
                        : this._easing == k.ANIM.EASING_SMOOTHERSTEP
                        ? (this.ease = V.Key.easeSmootherStep)
                        : this._easing == k.ANIM.EASING_CUBIC_IN
                        ? (this.ease = V.Key.easeCubicIn)
                        : this._easing == k.ANIM.EASING_CUBIC_OUT
                        ? (this.ease = V.Key.easeCubicOut)
                        : this._easing == k.ANIM.EASING_CUBIC_INOUT
                        ? (this.ease = V.Key.easeCubicInOut)
                        : this._easing == k.ANIM.EASING_EXPO_IN
                        ? (this.ease = V.Key.easeExpoIn)
                        : this._easing == k.ANIM.EASING_EXPO_OUT
                        ? (this.ease = V.Key.easeExpoOut)
                        : this._easing == k.ANIM.EASING_EXPO_INOUT
                        ? (this.ease = V.Key.easeExpoInOut)
                        : this._easing == k.ANIM.EASING_SIN_IN
                        ? (this.ease = V.Key.easeSinIn)
                        : this._easing == k.ANIM.EASING_SIN_OUT
                        ? (this.ease = V.Key.easeSinOut)
                        : this._easing == k.ANIM.EASING_SIN_INOUT
                        ? (this.ease = V.Key.easeSinInOut)
                        : this._easing == k.ANIM.EASING_BACK_OUT
                        ? (this.ease = V.Key.easeOutBack)
                        : this._easing == k.ANIM.EASING_BACK_IN
                        ? (this.ease = V.Key.easeInBack)
                        : this._easing == k.ANIM.EASING_BACK_INOUT
                        ? (this.ease = V.Key.easeInOutBack)
                        : this._easing == k.ANIM.EASING_ELASTIC_IN
                        ? (this.ease = V.Key.easeInElastic)
                        : this._easing == k.ANIM.EASING_ELASTIC_OUT
                        ? (this.ease = V.Key.easeOutElastic)
                        : this._easing == k.ANIM.EASING_ELASTIC_INOUT
                        ? (this.ease = V.Key.easeElasticInOut)
                        : this._easing == k.ANIM.EASING_BOUNCE_IN
                        ? (this.ease = V.Key.easeInBounce)
                        : this._easing == k.ANIM.EASING_BOUNCE_OUT
                        ? (this.ease = V.Key.easeOutBounce)
                        : this._easing == k.ANIM.EASING_QUART_OUT
                        ? (this.ease = V.Key.easeOutQuart)
                        : this._easing == k.ANIM.EASING_QUART_IN
                        ? (this.ease = V.Key.easeInQuart)
                        : this._easing == k.ANIM.EASING_QUART_INOUT
                        ? (this.ease = V.Key.easeInOutQuart)
                        : this._easing == k.ANIM.EASING_QUINT_OUT
                        ? (this.ease = V.Key.easeOutQuint)
                        : this._easing == k.ANIM.EASING_QUINT_IN
                        ? (this.ease = V.Key.easeInQuint)
                        : this._easing == k.ANIM.EASING_QUINT_INOUT
                        ? (this.ease = V.Key.easeInOutQuint)
                        : this._easing == k.ANIM.EASING_BEZIER
                        ? ((this._updateBezier = !0),
                          (this.ease = V.Key.easeBezier))
                        : ((this._easing = k.ANIM.EASING_LINEAR),
                          (this.ease = V.Key.easeLinear));
            }),
            (V.Key.prototype.trigger = function() {
                this.cb(), (this.cbTriggered = !0);
            }),
            (V.Key.prototype.setValue = function(t) {
                (this.value = t),
                    (this._updateBezier = !0),
                    null !== this.onChange && this.onChange();
            }),
            (V.Key.prototype.set = function(t) {
                t &&
                    (t.e && this.setEasing(t.e),
                    t.cb && ((this.cb = t.cb), (this.cbTriggered = !1)),
                    t.b &&
                        ((this.bezTime = t.b[0]),
                        (this.bezValue = t.b[1]),
                        (this.bezTimeIn = t.b[2]),
                        (this.bezValueIn = t.b[3]),
                        (this._updateBezier = !0)),
                    t.hasOwnProperty('t') && (this.time = t.t),
                    t.hasOwnProperty('time') && (this.time = t.time),
                    t.hasOwnProperty('v')
                        ? (this.value = t.v)
                        : t.hasOwnProperty('value') && (this.value = t.value)),
                    null !== this.onChange && this.onChange();
            }),
            (V.Key.prototype.getSerialized = function() {
                const t = {};
                return (
                    (t.t = this.time),
                    (t.v = this.value),
                    (t.e = this._easing),
                    this._easing == k.ANIM.EASING_BEZIER &&
                        (t.b = [
                            this.bezTime,
                            this.bezValue,
                            this.bezTimeIn,
                            this.bezValueIn,
                        ]),
                    t
                );
            }),
            (V.Key.prototype.getEasing = function() {
                return this._easing;
            });
        const K = function(t) {
            (t = t || {}),
                (this.keys = []),
                (this.onChange = null),
                (this.stayInTimeline = !1),
                (this.loop = !1),
                (this.defaultEasing = t.defaultEasing || k.ANIM.EASING_LINEAR),
                (this.onLooped = null),
                (this._timesLooped = 0),
                (this._needsSort = !1);
        };
        (K.prototype.forceChangeCallback = function() {
            null !== this.onChange && this.onChange();
        }),
            (K.prototype.hasEnded = function(t) {
                return (
                    0 === this.keys.length ||
                    this.keys[this.keys.length - 1].time <= t
                );
            }),
            (K.prototype.isRising = function(t) {
                if (this.hasEnded(t)) return !1;
                const e = this.getKeyIndex(t);
                return this.keys[e].value < this.keys[e + 1].value;
            }),
            (K.prototype.clearBefore = function(t) {
                const e = this.getValue(t),
                    i = this.getKeyIndex(t);
                this.setValue(t, e), i > 1 && this.keys.splice(0, i);
            }),
            (K.prototype.clear = function(t) {
                let e = 0;
                t && (e = this.getValue(t)),
                    (this.keys.length = 0),
                    t && this.setValue(t, e),
                    null !== this.onChange && this.onChange();
            }),
            (K.prototype.sortKeys = function() {
                this.keys.sort(
                    (t, e) => parseFloat(t.time) - parseFloat(e.time)
                ),
                    (this._needsSort = !1);
            }),
            (K.prototype.getLength = function() {
                return 0 === this.keys.length
                    ? 0
                    : this.keys[this.keys.length - 1].time;
            }),
            (K.prototype.getKeyIndex = function(t) {
                let e = 0;
                for (let i = 0; i < this.keys.length; i++)
                    if (
                        (t >= this.keys[i].time && (e = i),
                        this.keys[i].time > t)
                    )
                        return e;
                return e;
            }),
            (K.prototype.setValue = function(t, e, i) {
                let s = !1;
                for (const r in this.keys)
                    if (this.keys[r].time == t) {
                        (s = this.keys[r]),
                            this.keys[r].setValue(e),
                            (this.keys[r].cb = i);
                        break;
                    }
                s ||
                    this.keys.push(
                        new V.Key({
                            time: t,
                            value: e,
                            e: this.defaultEasing,
                            cb: i,
                        })
                    ),
                    this.onChange && this.onChange(),
                    (this._needsSort = !0);
            }),
            (K.prototype.getSerialized = function() {
                const t = { keys: [] };
                t.loop = this.loop;
                for (const e in this.keys)
                    t.keys.push(this.keys[e].getSerialized());
                return t;
            }),
            (K.prototype.getKey = function(t) {
                const e = this.getKeyIndex(t);
                return this.keys[e];
            }),
            (K.prototype.getNextKey = function(t) {
                let e = this.getKeyIndex(t) + 1;
                return (
                    e >= this.keys.length && (e = this.keys.length - 1),
                    this.keys[e]
                );
            }),
            (K.prototype.isFinished = function(t) {
                return (
                    this.keys.length <= 0 ||
                    t > this.keys[this.keys.length - 1].time
                );
            }),
            (K.prototype.isStarted = function(t) {
                return !(this.keys.length <= 0) && t >= this.keys[0].time;
            }),
            (K.prototype.getValue = function(t) {
                if (0 === this.keys.length) return 0;
                if ((this._needsSort && this.sortKeys(), t < this.keys[0].time))
                    return this.keys[0].value;
                const e = this.keys.length - 1;
                if (this.loop && t > this.keys[e].time) {
                    t / this.keys[e].time > this._timesLooped &&
                        (this._timesLooped++, this.onLooped && this.onLooped()),
                        (t =
                            (t - this.keys[0].time) %
                            (this.keys[e].time - this.keys[0].time)),
                        (t += this.keys[0].time);
                }
                const i = this.getKeyIndex(t);
                if (i >= e)
                    return (
                        this.keys[e].cb &&
                            !this.keys[e].cbTriggered &&
                            this.keys[e].trigger(),
                        this.keys[e].value
                    );
                const s = parseInt(i, 10) + 1,
                    r = this.keys[i],
                    n = this.keys[s];
                if ((r.cb && !r.cbTriggered && r.trigger(), !n)) return -1;
                const o = (t - r.time) / (n.time - r.time);
                return r.ease || console.log('has no ease', r, n), r.ease(o, n);
            }),
            (K.prototype.addKey = function(t) {
                void 0 === t.time
                    ? d.log('key time undefined, ignoring!')
                    : (this.keys.push(t),
                      null !== this.onChange && this.onChange());
            }),
            (K.prototype.easingFromString = function(t) {
                return 'linear' == t
                    ? k.ANIM.EASING_LINEAR
                    : 'absolute' == t
                    ? k.ANIM.EASING_ABSOLUTE
                    : 'smoothstep' == t
                    ? k.ANIM.EASING_SMOOTHSTEP
                    : 'smootherstep' == t
                    ? k.ANIM.EASING_SMOOTHERSTEP
                    : 'Cubic In' == t
                    ? k.ANIM.EASING_CUBIC_IN
                    : 'Cubic Out' == t
                    ? k.ANIM.EASING_CUBIC_OUT
                    : 'Cubic In Out' == t
                    ? k.ANIM.EASING_CUBIC_INOUT
                    : 'Expo In' == t
                    ? k.ANIM.EASING_EXPO_IN
                    : 'Expo Out' == t
                    ? k.ANIM.EASING_EXPO_OUT
                    : 'Expo In Out' == t
                    ? k.ANIM.EASING_EXPO_INOUT
                    : 'Sin In' == t
                    ? k.ANIM.EASING_SIN_IN
                    : 'Sin Out' == t
                    ? k.ANIM.EASING_SIN_OUT
                    : 'Sin In Out' == t
                    ? k.ANIM.EASING_SIN_INOUT
                    : 'Back In' == t
                    ? k.ANIM.EASING_BACK_IN
                    : 'Back Out' == t
                    ? k.ANIM.EASING_BACK_OUT
                    : 'Back In Out' == t
                    ? k.ANIM.EASING_BACK_INOUT
                    : 'Elastic In' == t
                    ? k.ANIM.EASING_ELASTIC_IN
                    : 'Elastic Out' == t
                    ? k.ANIM.EASING_ELASTIC_OUT
                    : 'Bounce In' == t
                    ? k.ANIM.EASING_BOUNCE_IN
                    : 'Bounce Out' == t
                    ? k.ANIM.EASING_BOUNCE_OUT
                    : 'Quart Out' == t
                    ? k.ANIM.EASING_QUART_OUT
                    : 'Quart In' == t
                    ? k.ANIM.EASING_QUART_IN
                    : 'Quart In Out' == t
                    ? k.ANIM.EASING_QUART_INOUT
                    : 'Quint Out' == t
                    ? k.ANIM.EASING_QUINT_OUT
                    : 'Quint In' == t
                    ? k.ANIM.EASING_QUINT_IN
                    : 'Quint In Out' == t
                    ? k.ANIM.EASING_QUINT_INOUT
                    : void 0;
            }),
            (K.prototype.createPort = function(t, e, i) {
                const s = t.addInPort(
                    new U(t, e, k.OP.OP_PORT_TYPE_VALUE, {
                        display: 'dropdown',
                        values: k.ANIM.EASINGS,
                    })
                );
                return (
                    s.set('linear'),
                    (s.defaultValue = 'linear'),
                    (s.onChange = function() {
                        (this.defaultEasing = this.easingFromString(s.get())),
                            i && i();
                    }.bind(this)),
                    s
                );
            }),
            (K.slerpQuaternion = function(t, e, i, s, r, n) {
                K.slerpQuaternion.q1 ||
                    ((K.slerpQuaternion.q1 = quat.create()),
                    (K.slerpQuaternion.q2 = quat.create()));
                const o = i.getKeyIndex(t);
                let h = o + 1;
                if ((h >= i.keys.length && (h = i.keys.length - 1), o == h))
                    quat.set(
                        e,
                        i.keys[o].value,
                        s.keys[o].value,
                        r.keys[o].value,
                        n.keys[o].value
                    );
                else {
                    const a = i.keys[o].time,
                        l = (t - a) / (i.keys[h].time - a);
                    quat.set(
                        K.slerpQuaternion.q1,
                        i.keys[o].value,
                        s.keys[o].value,
                        r.keys[o].value,
                        n.keys[o].value
                    ),
                        quat.set(
                            K.slerpQuaternion.q2,
                            i.keys[h].value,
                            s.keys[h].value,
                            r.keys[h].value,
                            n.keys[h].value
                        ),
                        quat.slerp(
                            e,
                            K.slerpQuaternion.q1,
                            K.slerpQuaternion.q2,
                            l
                        );
                }
                return e;
            });
        const X = V;
        X.Anim = K;
        const j = function(t) {
            _.apply(this),
                (this.id = CABLES.uuid()),
                (this.portIn = null),
                (this.portOut = null),
                (this.scene = t),
                (this.activityCounter = 0);
        };
        (j.prototype.setValue = function(t) {
            void 0 === t ? this._setValue() : this.portIn.set(t);
        }),
            (j.prototype.activity = function() {
                this.activityCounter++;
            }),
            (j.prototype._setValue = function() {
                if (!this.portOut) return void this.remove();
                const t = this.portOut.get();
                t == t &&
                    (this.portIn.type != k.OP.OP_PORT_TYPE_FUNCTION &&
                        this.activity(),
                    (this.portIn.get() !== t || this.portIn.changeAlways) &&
                        this.portIn.set(t));
            }),
            (j.prototype.getOtherPort = function(t) {
                return t == this.portIn ? this.portOut : this.portIn;
            }),
            (j.prototype.remove = function() {
                this.portIn && this.portIn.removeLink(this),
                    this.portOut && this.portOut.removeLink(this),
                    this.scene &&
                        this.scene.emitEvent(
                            'onUnLink',
                            this.portIn,
                            this.portOut,
                            this
                        ),
                    !this.portIn ||
                        (this.portIn.type != k.OP.OP_PORT_TYPE_OBJECT &&
                            this.portIn.type != k.OP.OP_PORT_TYPE_ARRAY) ||
                        (this.portIn.set(null),
                        this.portIn.links.length > 0 &&
                            this.portIn.set(
                                this.portIn.links[0]
                                    .getOtherPort(this.portIn)
                                    .get()
                            )),
                    this.portIn && this.portIn.parent._checkLinksNeededToWork(),
                    this.portOut &&
                        this.portOut.parent._checkLinksNeededToWork(),
                    (this.portIn = null),
                    (this.portOut = null),
                    (this.scene = null);
            }),
            (j.prototype.link = function(t, e) {
                if (!j.canLink(t, e)) return d.log('cannot link ports!'), !1;
                t.direction == k.PORT.PORT_DIR_IN
                    ? ((this.portIn = t), (this.portOut = e))
                    : ((this.portIn = e), (this.portOut = t)),
                    t.addLink(this),
                    e.addLink(this),
                    this.setValue(),
                    t.onLink && t.onLink(this),
                    e.onLink && e.onLink(this),
                    t.parent._checkLinksNeededToWork(),
                    e.parent._checkLinksNeededToWork();
            }),
            (j.prototype.getSerialized = function() {
                const t = {};
                return (
                    (t.portIn = this.portIn.getName()),
                    (t.portOut = this.portOut.getName()),
                    (t.objIn = this.portIn.parent.id),
                    (t.objOut = this.portOut.parent.id),
                    t
                );
            }),
            (j.canLinkText = function(t, e) {
                if (t.direction == e.direction) {
                    let t = '(out)';
                    return (
                        e.direction == k.PORT.PORT_DIR_IN && (t = '(in)'),
                        'can not link: same direction ' + t
                    );
                }
                return t.parent == e.parent
                    ? 'can not link: same op'
                    : t.type != k.OP.OP_PORT_TYPE_DYNAMIC &&
                      e.type != k.OP.OP_PORT_TYPE_DYNAMIC &&
                      t.type != e.type
                    ? 'can not link: different type'
                    : t
                    ? e
                        ? (t.direction == k.PORT.PORT_DIR_IN &&
                              t.isAnimated()) ||
                          (e.direction == k.PORT.PORT_DIR_IN && e.isAnimated())
                            ? 'can not link: is animated'
                            : t.isLinkedTo(e)
                            ? 'ports already linked'
                            : (t.canLink && !t.canLink(e)) ||
                              (e.canLink && !e.canLink(t))
                            ? 'Incompatible'
                            : 'can link'
                        : 'can not link: port 2 invalid'
                    : 'can not link: port 1 invalid';
            }),
            (j.canLink = function(t, e) {
                return (
                    !!t &&
                    !!e &&
                        (t.direction != k.PORT.PORT_DIR_IN ||
                            !t.isAnimated()) &&
                            (e.direction != k.PORT.PORT_DIR_IN ||
                                !e.isAnimated()) &&
                                !t.isHidden() &&
                                    !e.isHidden() &&
                                    !t.isLinkedTo(e) &&
                                        t.direction != e.direction &&
                                            (t.type == e.type ||
                                                t.type ==
                                                    k.OP.OP_PORT_TYPE_DYNAMIC ||
                                                e.type ==
                                                    k.OP
                                                        .OP_PORT_TYPE_DYNAMIC) &&
                                                (t.type ==
                                                    k.OP.OP_PORT_TYPE_DYNAMIC ||
                                                    e.type ==
                                                        k.OP
                                                            .OP_PORT_TYPE_DYNAMIC ||
                                                    (t.parent != e.parent &&
                                                        !(
                                                            t.canLink &&
                                                            !t.canLink(e)
                                                        ) &&
                                                            !(
                                                                e.canLink &&
                                                                !e.canLink(t)
                                                            )))
                );
            });
        const q = function() {
            if (
                (_.apply(this),
                (this.data = {}),
                (this.objName = ''),
                (this.portsOut = []),
                (this.portsIn = []),
                (this.portsInData = []),
                (this.opId = ''),
                (this.uiAttribs = {}),
                (this.enabled = !0),
                (this.patch = arguments[0]),
                (this.name = arguments[1]),
                (this._needsLinkedToWork = []),
                (this._needsParentOp = null),
                (this._shortOpName = ''),
                (this.hasUiErrors = !1),
                (this._uiErrors = {}),
                arguments[1])
            ) {
                if (
                    ((this._shortOpName = arguments[1].split('.')[
                        arguments[1].split('.').length - 1
                    ]),
                    this._shortOpName.indexOf(k.OP.OP_VERSION_PREFIX) > 0)
                ) {
                    const t = this._shortOpName.split(
                        k.OP.OP_VERSION_PREFIX
                    )[1];
                    this._shortOpName = this._shortOpName.substring(
                        0,
                        this._shortOpName.length -
                            (k.OP.OP_VERSION_PREFIX + t).length
                    );
                }
                this.uiAttribs.title = this._shortOpName;
            }
            (this.id = arguments[2] || b()),
                (this.onAddPort = null),
                (this.onCreate = null),
                (this.onResize = null),
                (this.onLoaded = null),
                (this.onDelete = null),
                (this.onUiAttrChange = null),
                (this._eventCallbacks = {}),
                (this._instances = null),
                (this.preRender = null),
                (this.init = null);
        };
        {
            (q.prototype.clearUiAttrib = function(t) {
                const e = { name: null };
                this.uiAttrib(e);
            }),
                (q.prototype.getTitle = function(t) {
                    return this.uiAttribs.title || this.name;
                }),
                (q.prototype.setTitle = function(t) {
                    const e = this.name != t;
                    (this.name = t),
                        this.uiAttr({ title: t }),
                        e && this.fireEvent('onTitleChange', t);
                });
            const t = function(t) {
                if (t) {
                    t.error &&
                        console.warn(
                            'old ui warning attribute in ' +
                                this.name +
                                ', use op.setUiError !'
                        ),
                        t.warning &&
                            console.warn(
                                'old ui warning attribute in ' +
                                    this.name +
                                    ', use op.setUiError !'
                            ),
                        t.hint &&
                            console.warn(
                                'old ui hint attribute in ' +
                                    this.name +
                                    ', use op.setUiError !'
                            ),
                        'object' != typeof t &&
                            console.error('op.uiAttrib attribs are not string'),
                        this.uiAttribs || (this.uiAttribs = {});
                    for (const e in t) this.uiAttribs[e] = t[e];
                    t.title && t.title != this.name && this.setTitle(t.title),
                        this.fireEvent('onUiAttribsChange', t);
                }
            };
            (q.prototype.setUiAttrib = t),
                (q.prototype.uiAttr = t),
                (q.prototype.getName = function() {
                    return this.uiAttribs.name
                        ? this.uiAttribs.name
                        : this.objName.split('.');
                }),
                (q.prototype.addOutPort = function(t) {
                    return (
                        (t.direction = k.PORT.PORT_DIR_OUT),
                        (t.parent = this),
                        this.portsOut.push(t),
                        this.onAddPort && this.onAddPort(t),
                        t
                    );
                }),
                (q.prototype.hasDynamicPort = function() {
                    let t = 0;
                    for (t = 0; t < this.portsIn.length; t++) {
                        if (this.portsIn[t].type == k.OP.OP_PORT_TYPE_DYNAMIC)
                            return !0;
                        if ('dyn' == this.portsIn[t].getName()) return !0;
                    }
                    for (t = 0; t < this.portsOut.length; t++) {
                        if (this.portsOut[t].type == k.OP.OP_PORT_TYPE_DYNAMIC)
                            return !0;
                        if ('dyn' == this.portsOut[t].getName()) return !0;
                    }
                    return !1;
                }),
                (q.prototype.addInPort = function(t) {
                    if (!(t instanceof U))
                        throw new Error('parameter is not a port!');
                    return (
                        (t.direction = k.PORT.PORT_DIR_IN),
                        (t.parent = this),
                        this.portsIn.push(t),
                        this.onAddPort && this.onAddPort(t),
                        t
                    );
                }),
                (q.prototype.inFunction = q.prototype.inTrigger = function(
                    t,
                    e
                ) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION)
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.inFunctionButton = q.prototype.inTriggerButton = function(
                    t,
                    e
                ) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION, {
                            display: 'button',
                        })
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.inFunctionButton = q.prototype.inUiTriggerButtons = function(
                    t,
                    e
                ) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION, {
                            display: 'buttons',
                        })
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.inValueFloat = q.prototype.inValue = q.prototype.inFloat = function(
                    t,
                    e
                ) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE)
                    );
                    return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
                }),
                (q.prototype.inValueBool = q.prototype.inBool = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            display: 'bool',
                        })
                    );
                    return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
                }),
                (q.prototype.inValueString = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            type: 'string',
                        })
                    );
                    return (
                        (i.value = ''),
                        void 0 !== e && (i.set(e), (i.defaultValue = e)),
                        i
                    );
                }),
                (q.prototype.inString = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
                            type: 'string',
                        })
                    );
                    return (
                        (e = e || ''),
                        (i.value = e),
                        i.set(e),
                        (i.defaultValue = e),
                        i
                    );
                }),
                (q.prototype.inValueText = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            type: 'string',
                            display: 'text',
                        })
                    );
                    return (
                        (i.value = ''),
                        void 0 !== e && (i.set(e), (i.defaultValue = e)),
                        i
                    );
                }),
                (q.prototype.inTextarea = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
                            type: 'string',
                            display: 'text',
                        })
                    );
                    return (
                        (i.value = ''),
                        void 0 !== e && (i.set(e), (i.defaultValue = e)),
                        i
                    );
                }),
                (q.prototype.inStringEditor = function(t, e, i, s = !0) {
                    const r = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
                            type: 'string',
                            display: 'editor',
                            editorSyntax: i,
                            hideFormatButton: s,
                        })
                    );
                    return (
                        (r.value = ''),
                        void 0 !== e && (r.set(e), (r.defaultValue = e)),
                        r
                    );
                }),
                (q.prototype.inValueEditor = function(t, e, i, s = !0) {
                    const r = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            type: 'string',
                            display: 'editor',
                            editorSyntax: i,
                            hideFormatButton: s,
                        })
                    );
                    return (
                        (r.value = ''),
                        void 0 !== e && (r.set(e), (r.defaultValue = e)),
                        r
                    );
                }),
                (q.prototype.inValueSelect = q.prototype.inDropDown = function(
                    t,
                    e,
                    i,
                    s
                ) {
                    let r = null;
                    if (s) {
                        const i = new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            display: 'dropdown',
                            hidePort: !0,
                            type: 'string',
                            values: e,
                        });
                        r = this.addInPort(i);
                    } else {
                        const s = new U(
                                this,
                                t + ' index',
                                k.OP.OP_PORT_TYPE_VALUE,
                                { increment: 'integer', hideParam: !0 }
                            ),
                            n = this.addInPort(s),
                            o = new B(
                                this,
                                t,
                                k.OP.OP_PORT_TYPE_VALUE,
                                {
                                    display: 'dropdown',
                                    hidePort: !0,
                                    type: 'string',
                                    values: e,
                                },
                                n
                            );
                        if (
                            ((s.onLinkChanged = function() {
                                o.setUiAttribs({ greyout: s.isLinked() });
                            }),
                            (r = this.addInPort(o)),
                            void 0 !== i)
                        ) {
                            r.set(i);
                            const t = e.findIndex(t => t == i);
                            n.setValue(t),
                                (r.defaultValue = i),
                                (n.defaultValue = t);
                        }
                    }
                    return r;
                }),
                (q.prototype.inSwitch = function(t, e, i, s) {
                    let r = null;
                    if (s) {
                        const i = new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
                            display: 'switch',
                            hidePort: !0,
                            type: 'string',
                            values: e,
                        });
                        r = this.addInPort(i);
                    } else {
                        const s = new U(
                                this,
                                t + ' index',
                                k.OP.OP_PORT_TYPE_VALUE,
                                { increment: 'integer', hideParam: !0 }
                            ),
                            n = this.addInPort(s),
                            o = new L(
                                this,
                                t,
                                k.OP.OP_PORT_TYPE_STRING,
                                {
                                    display: 'switch',
                                    hidePort: !0,
                                    type: 'string',
                                    values: e,
                                },
                                n
                            );
                        if (
                            ((s.onLinkChanged = function() {
                                o.setUiAttribs({ greyout: s.isLinked() });
                            }),
                            (r = this.addInPort(o)),
                            void 0 !== i)
                        ) {
                            r.set(i);
                            const t = e.findIndex(t => t == i);
                            n.setValue(t),
                                (r.defaultValue = i),
                                (n.defaultValue = t);
                        }
                    }
                    return r;
                }),
                (q.prototype.inValueInt = q.prototype.inInt = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            increment: 'integer',
                        })
                    );
                    return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
                }),
                (q.prototype.inFile = function(t, e, i) {
                    const s = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            display: 'file',
                            type: 'string',
                            filter: e,
                        })
                    );
                    return void 0 !== i && (s.set(i), (s.defaultValue = i)), s;
                }),
                (q.prototype.inUrl = function(t, e, i) {
                    const s = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
                            display: 'file',
                            type: 'string',
                            filter: e,
                        })
                    );
                    return void 0 !== i && (s.set(i), (s.defaultValue = i)), s;
                }),
                (q.prototype.inTexture = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
                            display: 'texture',
                            objTypr: 'texture',
                            preview: !0,
                        })
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.inObject = function(t, e, i) {
                    const s = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, { objType: i })
                    );
                    return void 0 !== e && s.set(e), s;
                }),
                (q.prototype.inGradient = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            display: 'gradient',
                            hidePort: !0,
                        })
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.inArray = function(t, e) {
                    const i = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_ARRAY)
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.inValueSlider = q.prototype.inFloatSlider = function(
                    t,
                    e,
                    i,
                    s
                ) {
                    const r = { display: 'range' };
                    null != i && null != s && ((r.min = i), (r.max = s));
                    const n = this.addInPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, r)
                    );
                    return void 0 !== e && (n.set(e), (n.defaultValue = e)), n;
                }),
                (q.prototype.outFunction = q.prototype.outTrigger = function(
                    t,
                    e
                ) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_FUNCTION)
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.outValue = q.prototype.outNumber = function(t, e) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE)
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.outValueBool = q.prototype.outBool = function(
                    t,
                    e
                ) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            display: 'bool',
                        })
                    );
                    return void 0 !== e ? i.set(e) : i.set(!1), i;
                }),
                (q.prototype.outValueString = function(t, e) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                            type: 'string',
                        })
                    );
                    return void 0 !== e && i.set(e), i;
                }),
                (q.prototype.outString = function(t, e) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_STRING, {
                            type: 'string',
                        })
                    );
                    return void 0 !== e ? i.set(e) : i.set(''), i;
                }),
                (q.prototype.outObject = function(t, e, i) {
                    const s = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
                            objType: i || null,
                        })
                    );
                    return (
                        void 0 !== e && s.set(e),
                        (s.ignoreValueSerialize = !0),
                        s
                    );
                }),
                (q.prototype.outArray = function(t, e) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_ARRAY)
                    );
                    return (
                        void 0 !== e && i.set(e),
                        (i.ignoreValueSerialize = !0),
                        i
                    );
                }),
                (q.prototype.outTexture = function(t, e) {
                    const i = this.addOutPort(
                        new U(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
                            preview: !0,
                            objType: 'texture',
                        })
                    );
                    return (
                        void 0 !== e && i.set(e),
                        (i.ignoreValueSerialize = !0),
                        i
                    );
                }),
                (q.prototype.inDynamic = function(t, e, i, s) {
                    const r = new U(this, t, k.OP.OP_PORT_TYPE_DYNAMIC, i);
                    return (
                        (r.shouldLink = function(t, i) {
                            if (e && f.isArray(e)) {
                                for (let s = 0; s < e.length; s++) {
                                    if (t == this && i.type === e[s]) return !0;
                                    if (i == this && t.type === e[s]) return !0;
                                }
                                return !1;
                            }
                            return !0;
                        }),
                        this.addInPort(r),
                        void 0 !== s && (r.set(s), (r.defaultValue = s)),
                        r
                    );
                }),
                (q.prototype.printInfo = function() {
                    for (let t = 0; t < this.portsIn.length; t++)
                        d.log('in: ' + this.portsIn[t].getName());
                    for (const t in this.portsOut)
                        d.log('out: ' + this.portsOut[t].getName());
                }),
                (q.prototype.getOutChilds = function() {
                    const t = [];
                    for (const e in this.portsOut)
                        for (const i in this.portsOut[e].links)
                            this.portsOut[e].type ==
                                k.OP.OP_PORT_TYPE_FUNCTION &&
                                t.push(this.portsOut[e].links[i].portIn.parent);
                    return t;
                }),
                (q.prototype.markChilds = function() {
                    this.marked = !0;
                    for (const t in this.portsOut)
                        for (const e in this.portsOut[t].links)
                            (this.portsOut[t].parent.marked = !0),
                                this.portsOut[t].links[e].portIn.parent !=
                                    this &&
                                    this.portsOut[t].links[
                                        e
                                    ].portIn.parent.markChilds();
                }),
                (q.prototype.selectChilds = function() {
                    this.setUiAttrib({ selected: !0 });
                    for (const t in this.portsOut)
                        for (const e in this.portsOut[t].links)
                            this.portsOut[t].parent.setUiAttrib({
                                selected: !0,
                            }),
                                this.portsOut[t].links[e].portIn.parent !=
                                    this &&
                                    this.portsOut[t].links[
                                        e
                                    ].portIn.parent.selectChilds();
                }),
                (q.prototype.deleteChilds = function() {
                    const t = [];
                    for (const e in this.portsOut)
                        for (const i in this.portsOut[e].links)
                            this.portsOut[e].links[i].portIn.parent != this &&
                                (this.portsOut[e].parent != this &&
                                    t.push(this.portsOut[e].parent),
                                t.push(this.portsOut[e].links[i].portIn.parent),
                                this.portsOut[e].links[
                                    i
                                ].portIn.parent.deleteChilds());
                    for (const e in t) this.patch.deleteOp(t[e].id);
                }),
                (q.prototype.removeLinks = function() {
                    for (let t = 0; t < this.portsIn.length; t++)
                        this.portsIn[t].removeLinks();
                    for (let t = 0; t < this.portsOut.length; t++)
                        this.portsOut[t].removeLinks();
                }),
                (q.prototype.countFittingPorts = function(t) {
                    let e = 0;
                    for (const i in this.portsOut)
                        j.canLink(t, this.portsOut[i]) && e++;
                    for (const i in this.portsIn)
                        j.canLink(t, this.portsIn[i]) && e++;
                    return e;
                }),
                (q.prototype.findFittingPort = function(t, e = !1) {
                    if (e) {
                        for (const e in this.portsIn)
                            if (j.canLink(t, this.portsIn[e]))
                                return this.portsIn[e];
                        for (const e in this.portsOut)
                            if (j.canLink(t, this.portsOut[e]))
                                return this.portsOut[e];
                    } else {
                        for (const e in this.portsOut)
                            if (j.canLink(t, this.portsOut[e]))
                                return this.portsOut[e];
                        for (const e in this.portsIn)
                            if (j.canLink(t, this.portsIn[e]))
                                return this.portsIn[e];
                    }
                }),
                (q.prototype.getSerialized = function(t) {
                    const e = {};
                    this.opId && (e.opId = this.opId),
                        (e.objName = this.objName),
                        (e.id = this.id),
                        (e.uiAttribs = this.uiAttribs),
                        this.uiAttribs.title == this._shortOpName &&
                            delete this.uiAttribs.title,
                        this.uiAttribs.hasOwnProperty('working') &&
                            1 == this.uiAttribs.working &&
                            delete this.uiAttribs.working,
                        t &&
                            this.uiAttribs.hasOwnProperty('uierrors') &&
                            delete this.uiAttribs.uierrors,
                        (e.portsIn = []),
                        (e.portsOut = []);
                    for (let t = 0; t < this.portsIn.length; t++)
                        e.portsIn.push(this.portsIn[t].getSerialized());
                    for (const t in this.portsOut)
                        e.portsOut.push(this.portsOut[t].getSerialized());
                    return e;
                }),
                (q.prototype.getFirstOutPortByType = function(t) {
                    for (const e in this.portsOut)
                        if (this.portsOut[e].type == t) return this.portsOut[e];
                }),
                (q.prototype.getPort = q.prototype.getPortByName = function(
                    t,
                    e
                ) {
                    if (e) {
                        for (let e = 0; e < this.portsIn.length; e++)
                            if (this.portsIn[e].getName().toLowerCase() == t)
                                return this.portsIn[e];
                        for (let e = 0; e < this.portsOut.length; e++)
                            if (this.portsOut[e].getName().toLowerCase() == t)
                                return this.portsOut[e];
                    } else {
                        for (let e = 0; e < this.portsIn.length; e++)
                            if (this.portsIn[e].getName() == t)
                                return this.portsIn[e];
                        for (let e = 0; e < this.portsOut.length; e++)
                            if (this.portsOut[e].getName() == t)
                                return this.portsOut[e];
                    }
                }),
                (q.prototype.getPortById = function(t) {
                    for (let e = 0; e < this.portsIn.length; e++)
                        if (this.portsIn[e].id == t) return this.portsIn[e];
                    for (let e = 0; e < this.portsOut.length; e++)
                        if (this.portsOut[e].id == t) return this.portsOut[e];
                }),
                (q.prototype.updateAnims = function() {
                    for (let t = 0; t < this.portsIn.length; t++)
                        this.portsIn[t].updateAnim();
                }),
                (q.prototype.log = function() {
                    if (this.patch.silent) return;
                    const t = ['[op ' + this._shortOpName + ']'];
                    t.push.apply(t, arguments),
                        Function.prototype.apply.apply(console.log, [
                            console,
                            t,
                        ]);
                }),
                (q.prototype.error = function() {
                    if (this.patch.silent) return;
                    const t = ['[op ' + this._shortOpName + ']'];
                    t.push.apply(t, arguments),
                        Function.prototype.apply.apply(console.error, [
                            console,
                            t,
                        ]);
                }),
                (q.prototype.warn = function() {
                    if (this.patch.silent) return;
                    const t = ['[op ' + this._shortOpName + ']'];
                    t.push.apply(t, arguments),
                        Function.prototype.apply.apply(console.warn, [
                            console,
                            t,
                        ]);
                }),
                (q.prototype.unLink = function() {
                    for (let t = 0; t < this.portsOut.length; t++)
                        this.portsOut[t].removeLinks();
                    for (let t = 0; t < this.portsIn.length; t++)
                        this.portsIn[t].removeLinks();
                }),
                (q.unLinkTempReLinkP1 = null),
                (q.unLinkTempReLinkP2 = null),
                (q.prototype.undoUnLinkTemporary = function() {
                    if (
                        (this.shakeLink && this.shakeLink.remove(),
                        (this.shakeLink = null),
                        this.oldLinks)
                    ) {
                        for (let t = 0; t < this.oldLinks.length; t++)
                            this.patch.link(
                                this.oldLinks[t].in.parent,
                                this.oldLinks[t].in.getName(),
                                this.oldLinks[t].out.parent,
                                this.oldLinks[t].out.getName()
                            );
                        this.oldLinks.length = 0;
                    }
                    (q.unLinkTempReLinkP1 = null),
                        (q.unLinkTempReLinkP2 = null);
                }),
                (q.prototype.unLinkTemporary = function() {
                    let t = 0;
                    (this.shakeLink = null),
                        (this.oldLinks = []),
                        this.portsIn.length > 0 &&
                            this.portsIn[0].isLinked() &&
                            this.portsOut.length > 0 &&
                            this.portsOut[0].isLinked() &&
                            this.portsIn[0].getType() ==
                                this.portsOut[0].getType() &&
                            ((q.unLinkTempReLinkP1 = this.portsIn[0].links[0].getOtherPort(
                                this.portsIn[0]
                            )),
                            (q.unLinkTempReLinkP2 = this.portsOut[0].links[0].getOtherPort(
                                this.portsOut[0]
                            )));
                    for (let e = 0; e < this.portsIn.length; e++)
                        for (t = 0; t < this.portsIn[e].links.length; t++)
                            this.oldLinks.push({
                                in: this.portsIn[e].links[t].portIn,
                                out: this.portsIn[e].links[t].portOut,
                            });
                    for (let e = 0; e < this.portsOut.length; e++)
                        for (t = 0; t < this.portsOut[e].links.length; t++)
                            this.oldLinks.push({
                                in: this.portsOut[e].links[t].portIn,
                                out: this.portsOut[e].links[t].portOut,
                            });
                    this.unLink(),
                        q.unLinkTempReLinkP1 &&
                            q.unLinkTempReLinkP2 &&
                            (this.shakeLink = this.patch.link(
                                q.unLinkTempReLinkP1.parent,
                                q.unLinkTempReLinkP1.getName(),
                                q.unLinkTempReLinkP2.parent,
                                q.unLinkTempReLinkP2.getName()
                            ));
                }),
                (q.prototype.profile = function(t) {
                    for (let t = 0; t < this.portsIn.length; t++)
                        (this.portsIn[t]._onTriggered = this.portsIn[
                            t
                        ]._onTriggeredProfiling),
                            (this.portsIn[t].set = this.portsIn[
                                t
                            ]._onSetProfiling);
                }),
                (q.prototype.findParent = function(t) {
                    for (let e = 0; e < this.portsIn.length; e++)
                        if (this.portsIn[e].isLinked()) {
                            if (
                                this.portsIn[e].links[0].portOut.parent
                                    .objName == t
                            )
                                return this.portsIn[e].links[0].portOut.parent;
                            let i = null;
                            if (
                                ((i = this.portsIn[
                                    e
                                ].links[0].portOut.parent.findParent(t)),
                                i)
                            )
                                return i;
                        }
                    return null;
                }),
                (q.prototype.cleanUp = function() {
                    if (this._instances) {
                        for (let t = 0; t < this._instances.length; t++)
                            this._instances[t].onDelete &&
                                this._instances[t].onDelete();
                        this._instances.length = 0;
                    }
                }),
                (q.prototype.instanced = function(t) {
                    if (0 === this.patch.instancing.numCycles()) return !1;
                    let e = 0,
                        i = 0;
                    if (
                        !this._instances ||
                        this._instances.length !=
                            this.patch.instancing.numCycles()
                    ) {
                        for (
                            this._instances || (this._instances = []),
                                d.log(
                                    'creating instances of ',
                                    this.objName,
                                    this.patch.instancing.numCycles(),
                                    this._instances.length
                                ),
                                this._instances.length = this.patch.instancing.numCycles(),
                                e = 0;
                            e < this._instances.length;
                            e++
                        ) {
                            (this._instances[e] = this.patch.createOp(
                                this.objName,
                                !0
                            )),
                                (this._instances[e].instanced = function() {
                                    return !1;
                                }),
                                this._instances[e].uiAttr(this.uiAttribs);
                            for (let t = 0; t < this.portsOut.length; t++)
                                this.portsOut[t].type ==
                                    k.OP.OP_PORT_TYPE_FUNCTION &&
                                    (this._instances[e].getPortByName(
                                        this.portsOut[t].name
                                    ).trigger = this.portsOut[t].trigger.bind(
                                        this.portsOut[t]
                                    ));
                        }
                        for (i = 0; i < this.portsIn.length; i++)
                            (this.portsIn[i].onChange = null),
                                (this.portsIn[i].onValueChanged = null);
                    }
                    for (i = 0; i < this.portsIn.length; i++)
                        (this.portsIn[i].type != k.OP.OP_PORT_TYPE_VALUE &&
                            this.portsIn[i].type != k.OP.OP_PORT_TYPE_ARRAY) ||
                            this._instances[
                                this.patch.instancing.index()
                            ].portsIn[i].set(this.portsIn[i].get()),
                            this.portsIn[i].type,
                            k.OP.OP_PORT_TYPE_FUNCTION;
                    for (i = 0; i < this.portsOut.length; i++)
                        this.portsOut[i].type == k.OP.OP_PORT_TYPE_VALUE &&
                            this.portsOut[i].set(
                                this._instances[
                                    this.patch.instancing.index()
                                ].portsOut[i].get()
                            );
                    return !0;
                }),
                (q.prototype.initInstancable = function() {}),
                (q.prototype.setValues = function(t) {
                    for (const e in t) {
                        const i = this.getPortByName(e);
                        i
                            ? i.set(t[e])
                            : d.log('op.setValues: port not found:', e);
                    }
                }),
                (q.prototype.setUiError = function(t, e, i) {
                    if (!e && !this.hasUiErrors) return;
                    if (!e && !this._uiErrors.hasOwnProperty(t)) return;
                    if (
                        this._uiErrors.hasOwnProperty(t) &&
                        this._uiErrors[t].txt == e
                    )
                        return;
                    t.indexOf(' ') > -1 &&
                        console.warn('setuierror id cant have spaces!'),
                        !e && this._uiErrors.hasOwnProperty(t)
                            ? delete this._uiErrors[t]
                            : !e ||
                              (this._uiErrors.hasOwnProperty(t) &&
                                  this._uiErrors[t].txt == e) ||
                              (null == i && (i = 2),
                              (this._uiErrors[t] = {
                                  txt: e,
                                  level: i,
                                  id: t,
                              }));
                    const s = [];
                    for (const t in this._uiErrors) s.push(this._uiErrors[t]);
                    this.uiAttr({ uierrors: s }),
                        (this.hasUiErrors = Object.keys(this._uiErrors).length);
                }),
                (q.prototype.setError = function(t, e) {
                    if (
                        (console.warn(
                            'old error message op.error() - use op.setUiError()'
                        ),
                        void 0 === e)
                    )
                        this.uiAttr({ error: t });
                    else if (this._uiErrors[t] != e) {
                        (this._uiErrors[t] = e), e || delete this._uiErrors[t];
                        const i = [];
                        for (const t in this._uiErrors)
                            i.push(this._uiErrors[t]);
                        this.uiAttr({ errors: i }), console.log(i);
                    }
                }),
                (q.prototype.addListener = q.prototype.addEventListener = function(
                    t,
                    e
                ) {
                    this._eventCallbacks[t]
                        ? this._eventCallbacks[t].push(e)
                        : (this._eventCallbacks[t] = [e]);
                }),
                (q.prototype.hasEventListener = function(t, e) {
                    if (t && e) {
                        if (this._eventCallbacks[t]) {
                            return -1 != this._eventCallbacks[t].indexOf(e);
                        }
                    } else d.log('hasListener: missing parameters');
                }),
                (q.prototype.removeEventListener = function(t, e) {
                    if (this._eventCallbacks[t]) {
                        const i = this._eventCallbacks[t].indexOf(e);
                        -1 == i
                            ? d.log('eventlistener ' + t + ' not found...')
                            : this._eventCallbacks[t].slice(i);
                    }
                }),
                (q.prototype.fireEvent = function(t, e) {
                    if (this._eventCallbacks[t])
                        for (let i = 0; i < this._eventCallbacks[t].length; i++)
                            this._eventCallbacks[t][i] &&
                                this._eventCallbacks[t][i].cb(e);
                    this.onUiAttrChange &&
                        'onUiAttribsChange' == t &&
                        this.onUiAttrChange(e);
                }),
                (q.prototype.setEnabled = function(t) {
                    (this.enabled = t), this.fireEvent('onEnabledChange', t);
                }),
                (q.prototype.setPortGroup = function(t, e) {
                    for (let i = 0; i < e.length; i++)
                        e[i] && e[i].setUiAttribs
                            ? e[i].setUiAttribs({ group: t })
                            : console.error('setPortGroup: invalid port!');
                }),
                (q.prototype.setUiAxisPorts = function(t, e, i) {
                    t && t.setUiAttribs({ axis: 'X' }),
                        e && e.setUiAttribs({ axis: 'Y' }),
                        i && i.setUiAttribs({ axis: 'Z' });
                }),
                (q.prototype.removePort = function(t) {
                    for (let e = 0; e < this.portsIn.length; e++)
                        if (this.portsIn[e] == t)
                            return (
                                this.portsIn.splice(e, 1),
                                this.fireEvent('onUiAttribsChange', {}),
                                void this.fireEvent('onPortRemoved', {})
                            );
                }),
                (q.prototype._checkLinksNeededToWork = function() {}),
                (q.prototype.toWorkNeedsParent = function(t) {
                    this.patch.isEditorMode() && (this._needsParentOp = t);
                }),
                (q.prototype.toWorkPortsNeedToBeLinked = function() {
                    if (this.patch.isEditorMode())
                        for (let t = 0; t < arguments.length; t++)
                            -1 ==
                                this._needsLinkedToWork.indexOf(arguments[t]) &&
                                this._needsLinkedToWork.push(arguments[t]);
                }),
                (q.prototype.toWorkPortsNeedToBeLinkedReset = function() {
                    this.patch.isEditorMode() &&
                        ((this._needsLinkedToWork.length = 0),
                        this.checkLinkTimeWarnings &&
                            this.checkLinkTimeWarnings());
                }),
                (q.prototype.initVarPorts = function() {
                    for (let t = 0; t < this.portsIn.length; t++)
                        this.portsIn[t].getVariableName() &&
                            this.portsIn[t].setVariable(
                                this.portsIn[t].getVariableName()
                            );
                }),
                (q.prototype.refreshParams = function() {
                    this.patch &&
                        this.patch.isEditorMode() &&
                        this.isCurrentUiOp() &&
                        gui.opParams.show(this);
                }),
                (q.prototype.isCurrentUiOp = function() {
                    if (this.patch.isEditorMode())
                        return gui.patchView.isCurrentOp(this);
                });
        }
        (q.getNamespaceClassName = function(t) {
            return t
                ? t.startsWith('Ops.Gl')
                    ? 'gl'
                    : t.startsWith('Ops.WebAudio')
                    ? 'audio'
                    : t.startsWith('Ops.Devices')
                    ? 'devices'
                    : t.startsWith('Ops.Html') || t.startsWith('Ops.Sidebar')
                    ? 'html'
                    : t.startsWith('Ops.Math')
                    ? 'math'
                    : t.startsWith('Ops.User')
                    ? 'user'
                    : 'default'
                : 'default';
        }),
            (q.isSubpatchOp = function(t) {
                return 'Ops.Ui.Patch' == t || 'Ops.Ui.SubPatch' == t;
            });
        const Q = new (class {
                constructor() {
                    (this._lastTime = 0),
                        (this.pause = !1),
                        (this.profileUniformCount = 0),
                        (this.profileShaderBinds = 0),
                        (this.profileUniformCount = 0),
                        (this.profileShaderCompiles = 0),
                        (this.profileVideosPlaying = 0),
                        (this.profileMVPMatrixCount = 0),
                        (this.profileEffectBuffercreate = 0),
                        (this.profileShaderGetUniform = 0),
                        (this.profileFrameBuffercreate = 0),
                        (this.profileMeshSetGeom = 0),
                        (this.profileTextureNew = 0),
                        (this.profileGenMipMap = 0),
                        (this.profileOnAnimFrameOps = 0),
                        (this.profileMainloopMs = 0),
                        (this.profileMeshDraw = 0),
                        (this.profileTextureEffect = 0),
                        (this.profileTexPreviews = 0),
                        (this.shaderCompileTime = 0),
                        (this.profileMeshNumElements = 0),
                        (this.profileMeshAttributes = 0);
                }
                clear() {
                    (this.profileMeshAttributes = 0),
                        (this.profileUniformCount = 0),
                        (this.profileShaderGetUniform = 0),
                        (this.profileShaderCompiles = 0),
                        (this.profileShaderBinds = 0),
                        (this.profileTextureResize = 0),
                        (this.profileFrameBuffercreate = 0),
                        (this.profileEffectBuffercreate = 0),
                        (this.profileTextureDelete = 0),
                        (this.profileMeshSetGeom = 0),
                        (this.profileVideosPlaying = 0),
                        (this.profileMVPMatrixCount = 0),
                        (this.profileNonTypedAttrib = 0),
                        (this.profileNonTypedAttribNames = ''),
                        (this.profileTextureNew = 0),
                        (this.profileGenMipMap = 0),
                        (this.profileFramebuffer = 0),
                        (this.profileMeshDraw = 0),
                        (this.profileTextureEffect = 0),
                        (this.profileTexPreviews = 0),
                        (this.profileMeshNumElements = 0);
                }
            })(),
            J = function(t, e) {
                if (!t) throw new Error('no cgl');
                (this._cgl = t),
                    (this.tex = this._cgl.gl.createTexture()),
                    (this.id = b()),
                    (this.width = 0),
                    (this.height = 0),
                    (this.loading = !1),
                    (this.flip = !0),
                    (this.flipped = !1),
                    (this.shadowMap = !1),
                    (this.anisotropic = 0),
                    (this.filter = J.FILTER_NEAREST),
                    (this.wrap = J.WRAP_CLAMP_TO_EDGE),
                    (this.texTarget = this._cgl.gl.TEXTURE_2D),
                    e && e.type && (this.texTarget = e.type),
                    (this.textureType = J.TYPE_DEFAULT),
                    (this.unpackAlpha = !0),
                    (this._fromData = !0),
                    (this.name = 'unknown'),
                    e
                        ? ((this.name = e.name || this.name),
                          e.isDepthTexture && (this.textureType = J.TYPE_DEPTH),
                          e.isFloatingPointTexture &&
                              (this.textureType = J.TYPE_FLOAT),
                          'textureType' in e &&
                              (this.textureType = e.textureType),
                          'filter' in e && (this.filter = e.filter),
                          'wrap' in e && (this.wrap = e.wrap),
                          'unpackAlpha' in e &&
                              (this.unpackAlpha = e.unpackAlpha),
                          'flip' in e && (this.flip = e.flip),
                          'shadowMap' in e && (this.shadowMap = e.shadowMap),
                          'anisotropic' in e &&
                              (this.anisotropic = e.anisotropic))
                        : (e = {}),
                    e.width || (e.width = 8),
                    e.height || (e.height = 8),
                    Q.profileTextureNew++,
                    this.setSize(e.width, e.height);
            };
        (J.prototype.compareSettings = function(t) {
            return (
                !!t &&
                t.width == this.width &&
                    t.height == this.height &&
                    t.filter == this.filter &&
                    t.wrap == this.wrap &&
                    t.textureType == this.textureType &&
                    t.unpackAlpha == this.unpackAlpha &&
                    t.flip == this.flip
            );
        }),
            (J.prototype.clone = function() {
                const t = new J(this._cgl, {
                    name: this.name,
                    filter: this.filter,
                    wrap: this.wrap,
                    textureType: this.textureType,
                    unpackAlpha: this.unpackAlpha,
                    flip: this.flip,
                    width: this.width,
                    height: this.height,
                });
                return (
                    this.compareSettings(t) ||
                        (console.error(
                            'Cloned texture settings do not compare!'
                        ),
                        d.log(this),
                        d.log(t)),
                    t
                );
            }),
            (J.prototype.setSize = function(t, e) {
                if (
                    ((t != t || t <= 0 || !t) && (t = 8),
                    (e != e || e <= 0 || !e) && (e = 8),
                    (t > this._cgl.maxTexSize || e > this._cgl.maxTexSize) &&
                        console.error(
                            'texture size too big! ' +
                                t +
                                'x' +
                                e +
                                ' / max: ' +
                                this._cgl.maxTexSize
                        ),
                    (t = Math.min(t, this._cgl.maxTexSize)),
                    (e = Math.min(e, this._cgl.maxTexSize)),
                    (t = Math.floor(t)),
                    (e = Math.floor(e)),
                    this.width == t && this.height == e)
                )
                    return;
                (this.width = t),
                    (this.height = e),
                    this._cgl.gl.bindTexture(this.texTarget, this.tex),
                    Q.profileTextureResize++;
                if (
                    (this.textureType != J.TYPE_FLOAT ||
                        this.filter != J.FILTER_LINEAR ||
                        this._cgl.gl.getExtension('OES_texture_float_linear') ||
                        (console.warn(
                            'this graphics card does not support floating point texture linear interpolation!'
                        ),
                        (this.filter = J.FILTER_NEAREST)),
                    this._setFilter(),
                    this.textureType == J.TYPE_FLOAT)
                )
                    if (1 == this._cgl.glVersion)
                        if (this._cgl.glUseHalfFloatTex) {
                            const i = this._cgl.gl.getExtension(
                                'OES_texture_half_float'
                            );
                            if (1 == this._cgl.glVersion && !i)
                                throw new Error(
                                    'no half float texture extension'
                                );
                            this._cgl.gl.texImage2D(
                                this.texTarget,
                                0,
                                this._cgl.gl.RGBA,
                                t,
                                e,
                                0,
                                this._cgl.gl.RGBA,
                                i.HALF_FLOAT_OES,
                                null
                            );
                        } else {
                            this._cgl.gl.getExtension('OES_texture_float');
                            this._cgl.gl.texImage2D(
                                this.texTarget,
                                0,
                                this._cgl.gl.RGBA,
                                t,
                                e,
                                0,
                                this._cgl.gl.RGBA,
                                this._cgl.gl.FLOAT,
                                null
                            );
                        }
                    else
                        this._cgl.gl.texImage2D(
                            this.texTarget,
                            0,
                            this._cgl.gl.RGBA32F,
                            t,
                            e,
                            0,
                            this._cgl.gl.RGBA,
                            this._cgl.gl.FLOAT,
                            null
                        );
                else if (this.textureType == J.TYPE_DEPTH)
                    if (1 == this._cgl.glVersion) {
                        const i = this._cgl.gl.DEPTH_COMPONENT;
                        this._cgl.gl.texImage2D(
                            this.texTarget,
                            0,
                            i,
                            t,
                            e,
                            0,
                            this._cgl.gl.DEPTH_COMPONENT,
                            this._cgl.gl.UNSIGNED_SHORT,
                            null
                        );
                    } else {
                        const i = this._cgl.gl.DEPTH_COMPONENT32F;
                        this._cgl.gl.texImage2D(
                            this.texTarget,
                            0,
                            i,
                            t,
                            e,
                            0,
                            this._cgl.gl.DEPTH_COMPONENT,
                            this._cgl.gl.FLOAT,
                            null
                        );
                    }
                else
                    this._cgl.gl.texImage2D(
                        this.texTarget,
                        0,
                        this._cgl.gl.RGBA,
                        t,
                        e,
                        0,
                        this._cgl.gl.RGBA,
                        this._cgl.gl.UNSIGNED_BYTE,
                        null
                    );
                this._cgl.printError('cgltex') &&
                    (this.printInfo(), console.log(new Error().stack)),
                    this.updateMipMap(),
                    this._cgl.gl.bindTexture(this.texTarget, null);
            }),
            (J.prototype.initFromData = function(t, e, i, s, r) {
                (this.filter = s),
                    (this.wrap = r),
                    null == s && (this.filter = J.FILTER_LINEAR),
                    null == r && (this.wrap = J.CLAMP_TO_EDGE),
                    (this.width = e),
                    (this.height = i),
                    (this._fromData = !0),
                    this._cgl.gl.bindTexture(this.texTarget, this.tex),
                    this._cgl.gl.texImage2D(
                        this.texTarget,
                        0,
                        this._cgl.gl.RGBA,
                        e,
                        i,
                        0,
                        this._cgl.gl.RGBA,
                        this._cgl.gl.UNSIGNED_BYTE,
                        t
                    ),
                    this._setFilter(),
                    this.updateMipMap(),
                    this._cgl.gl.bindTexture(this.texTarget, null);
            }),
            (J.prototype.updateMipMap = function() {
                (2 != this._cgl.glVersion && !this.isPowerOfTwo()) ||
                    this.filter != J.FILTER_MIPMAP ||
                    (this._cgl.gl.generateMipmap(this.texTarget),
                    Q.profileGenMipMap++);
            }),
            (J.prototype.initTexture = function(t, e) {
                this._cgl.checkFrameStarted('texture inittexture'),
                    (this._fromData = !1),
                    this._cgl.gl.pixelStorei(
                        this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                        this.unpackAlpha
                    ),
                    t.width && (this.width = t.width),
                    t.height && (this.height = t.height),
                    e && (this.filter = e),
                    t.width > this._cgl.maxTexSize &&
                        console.error(
                            '[cgl_texture] texture size to big!!!',
                            t.width,
                            this._cgl.maxTexSize
                        ),
                    t.height > this._cgl.maxTexSize &&
                        console.error(
                            '[cgl_texture] texture size to big!!!',
                            t.height,
                            this._cgl.maxTexSize
                        ),
                    this._cgl.gl.bindTexture(this.texTarget, this.tex),
                    (this.flipped = !this.flip),
                    this._cgl.gl.pixelStorei(
                        this._cgl.gl.UNPACK_FLIP_Y_WEBGL,
                        this.flipped
                    ),
                    this._cgl.gl.texImage2D(
                        this.texTarget,
                        0,
                        this._cgl.gl.RGBA,
                        this._cgl.gl.RGBA,
                        this._cgl.gl.UNSIGNED_BYTE,
                        t
                    ),
                    this._setFilter(),
                    this.updateMipMap(),
                    this._cgl.gl.bindTexture(this.texTarget, null),
                    this._cgl.gl.pixelStorei(
                        this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                        !1
                    );
            }),
            (J.prototype.delete = function() {
                this.loading
                    ? setTimeout(this.delete.bind(this), 50)
                    : ((this.width = 0),
                      (this.height = 0),
                      Q.profileTextureDelete++,
                      this._cgl.gl.deleteTexture(this.tex));
            }),
            (J.prototype.isPowerOfTwo = function() {
                return (
                    J.isPowerOfTwo(this.width) && J.isPowerOfTwo(this.height)
                );
            }),
            (J.prototype.printInfo = function() {
                d.log(this.getInfo());
            }),
            (J.prototype.getInfoReadable = function() {
                const t = this.getInfo();
                let e = '';
                t.name = t.name.substr(0, t.name.indexOf('?rnd='));
                for (const i in t) e += '* ' + i + ':  **' + t[i] + '**\n';
                return e;
            }),
            (J.prototype.getInfo = function() {
                const t = {};
                (t.name = this.name),
                    (t['power of two'] = this.isPowerOfTwo()),
                    (t.size = this.width + ' x ' + this.height);
                let e = this.texTarget;
                return (
                    this.texTarget == this._cgl.gl.TEXTURE_2D &&
                        (e = 'TEXTURE_2D'),
                    (t.target = e),
                    (t.unpackAlpha = this.unpackAlpha),
                    this.textureType == J.TYPE_FLOAT
                        ? (t.textureType = 'TYPE_FLOAT')
                        : this.textureType == J.TYPE_DEPTH
                        ? (t.textureType = 'TYPE_DEPTH')
                        : this.textureType == J.TYPE_DEFAULT
                        ? (t.textureType = 'TYPE_DEFAULT')
                        : (t.textureType = 'UNKNOWN'),
                    this.wrap == J.WRAP_CLAMP_TO_EDGE
                        ? (t.wrap = 'CLAMP_TO_EDGE')
                        : this.wrap == J.WRAP_REPEAT
                        ? (t.wrap = 'WRAP_REPEAT')
                        : this.wrap == J.WRAP_MIRRORED_REPEAT
                        ? (t.wrap = 'WRAP_MIRRORED_REPEAT')
                        : (t.wrap = 'UNKNOWN'),
                    this.filter == J.FILTER_NEAREST
                        ? (t.filter = 'FILTER_NEAREST')
                        : this.filter == J.FILTER_LINEAR
                        ? (t.filter = 'FILTER_LINEAR')
                        : this.filter == J.FILTER_MIPMAP
                        ? (t.filter = 'FILTER_MIPMAP')
                        : (t.filter = 'UNKNOWN'),
                    t
                );
            }),
            (J.prototype._setFilter = function() {
                if (
                    (this._fromData ||
                        this._cgl.gl.pixelStorei(
                            this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                            this.unpackAlpha
                        ),
                    this.shadowMap &&
                        (d.log('shadowmap tex'),
                        this._cgl.gl.texParameteri(
                            this._cgl.gl.TEXTURE_2D,
                            this._cgl.gl.TEXTURE_COMPARE_MODE,
                            this._cgl.gl.COMPARE_REF_TO_TEXTURE
                        ),
                        this._cgl.gl.texParameteri(
                            this._cgl.gl.TEXTURE_2D,
                            this._cgl.gl.TEXTURE_COMPARE_FUNC,
                            this._cgl.gl.LEQUAL
                        )),
                    this.textureType == J.TYPE_FLOAT &&
                        this.filter == J.FILTER_MIPMAP &&
                        (d.log(
                            'texture: HDR and mipmap filtering at the same time is not possible'
                        ),
                        (this.filter = J.FILTER_LINEAR),
                        d.stack()),
                    1 != this._cgl.glVersion || this.isPowerOfTwo())
                ) {
                    if (
                        (this.wrap == J.WRAP_CLAMP_TO_EDGE
                            ? (this._cgl.gl.texParameteri(
                                  this.texTarget,
                                  this._cgl.gl.TEXTURE_WRAP_S,
                                  this._cgl.gl.CLAMP_TO_EDGE
                              ),
                              this._cgl.gl.texParameteri(
                                  this.texTarget,
                                  this._cgl.gl.TEXTURE_WRAP_T,
                                  this._cgl.gl.CLAMP_TO_EDGE
                              ))
                            : this.wrap == J.WRAP_REPEAT
                            ? (this._cgl.gl.texParameteri(
                                  this.texTarget,
                                  this._cgl.gl.TEXTURE_WRAP_S,
                                  this._cgl.gl.REPEAT
                              ),
                              this._cgl.gl.texParameteri(
                                  this.texTarget,
                                  this._cgl.gl.TEXTURE_WRAP_T,
                                  this._cgl.gl.REPEAT
                              ))
                            : this.wrap == J.WRAP_MIRRORED_REPEAT &&
                              (this._cgl.gl.texParameteri(
                                  this.texTarget,
                                  this._cgl.gl.TEXTURE_WRAP_S,
                                  this._cgl.gl.MIRRORED_REPEAT
                              ),
                              this._cgl.gl.texParameteri(
                                  this.texTarget,
                                  this._cgl.gl.TEXTURE_WRAP_T,
                                  this._cgl.gl.MIRRORED_REPEAT
                              )),
                        this.filter == J.FILTER_NEAREST)
                    )
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_MAG_FILTER,
                            this._cgl.gl.NEAREST
                        ),
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MIN_FILTER,
                                this._cgl.gl.NEAREST
                            );
                    else if (this.filter == J.FILTER_LINEAR)
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_MIN_FILTER,
                            this._cgl.gl.LINEAR
                        ),
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MAG_FILTER,
                                this._cgl.gl.LINEAR
                            );
                    else {
                        if (this.filter != J.FILTER_MIPMAP)
                            throw (d.log(
                                'unknown texture filter!',
                                this.filter
                            ),
                            new Error('unknown texture filter!' + this.filter));
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_MAG_FILTER,
                            this._cgl.gl.LINEAR
                        ),
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MIN_FILTER,
                                this._cgl.gl.LINEAR_MIPMAP_LINEAR
                            );
                    }
                    if (this.anisotropic) {
                        const t = this._cgl.gl.getExtension(
                            'EXT_texture_filter_anisotropic'
                        );
                        if (t) {
                            const e = this._cgl.gl.getParameter(
                                t.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                            );
                            this._cgl.gl.texParameterf(
                                this._cgl.gl.TEXTURE_2D,
                                t.TEXTURE_MAX_ANISOTROPY_EXT,
                                Math.min(e, this.anisotropic)
                            );
                        }
                    }
                } else
                    this._cgl.gl.texParameteri(
                        this.texTarget,
                        this._cgl.gl.TEXTURE_MAG_FILTER,
                        this._cgl.gl.NEAREST
                    ),
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_MIN_FILTER,
                            this._cgl.gl.NEAREST
                        ),
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_WRAP_S,
                            this._cgl.gl.CLAMP_TO_EDGE
                        ),
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_WRAP_T,
                            this._cgl.gl.CLAMP_TO_EDGE
                        ),
                        (this.filter = J.FILTER_NEAREST),
                        (this.wrap = J.WRAP_CLAMP_TO_EDGE);
            }),
            (J.load = function(t, e, i, s) {
                const r = t.patch.loading.start('texture', e),
                    n = new J(t);
                return (
                    (n.name = e),
                    t.patch.isEditorMode() &&
                        gui
                            .jobs()
                            .start({
                                id: 'loadtexture' + r,
                                title: 'loading texture ' + CABLES.basename(e),
                            }),
                    (n.image = new Image()),
                    (n.image.crossOrigin = 'anonymous'),
                    (n.loading = !0),
                    s && s.hasOwnProperty('filter') && (n.filter = s.filter),
                    s && s.hasOwnProperty('flip') && (n.flip = s.flip),
                    s && s.hasOwnProperty('wrap') && (n.wrap = s.wrap),
                    s &&
                        s.hasOwnProperty('anisotropic') &&
                        (n.anisotropic = s.anisotropic),
                    s &&
                        s.hasOwnProperty('unpackAlpha') &&
                        (n.unpackAlpha = s.unpackAlpha),
                    (n.image.onabort = n.image.onerror = s => {
                        d.warn(
                            '[cgl.texture.load] error loading texture',
                            e,
                            s
                        ),
                            (n.loading = !1),
                            t.patch.loading.finished(r);
                        i && i({ error: !0 }),
                            t.patch.isEditorMode() &&
                                gui.jobs().finish('loadtexture' + r);
                    }),
                    (n.image.onload = function(e) {
                        t.addNextFrameOnceCallback(() => {
                            n.initTexture(n.image),
                                t.patch.loading.finished(r),
                                (n.loading = !1),
                                t.patch.isEditorMode() &&
                                    gui.jobs().finish('loadtexture' + r),
                                i && i(null, n);
                        });
                    }),
                    (n.image.src = e),
                    n
                );
            }),
            (J.getTempTexture = function(t) {
                return (
                    t || console.error('[getTempTexture] no cgl!'),
                    t.tempTexture ||
                        (t.tempTexture = J.getTemporaryTexture(
                            t,
                            256,
                            J.FILTER_LINEAR,
                            J.REPEAT
                        )),
                    t.tempTexture
                );
            }),
            (J.getEmptyTexture = function(t) {
                if (
                    (t || console.error('[getEmptyTexture] no cgl!'),
                    t.tempTextureEmpty)
                )
                    return t.tempTextureEmpty;
                t.tempTextureEmpty = new J(t, { name: 'emptyTexture' });
                const e = new Uint8Array(256);
                return (
                    t.tempTextureEmpty.initFromData(
                        e,
                        8,
                        8,
                        J.FILTER_NEAREST,
                        J.WRAP_REPEAT
                    ),
                    t.tempTextureEmpty
                );
            }),
            (J.getRandomTexture = function(t) {
                if (
                    (t || console.error('[getRandomTexture] no cgl!'),
                    t.randomTexture)
                )
                    return t.randomTexture;
                const e = new Uint8Array(262144);
                for (let t = 0; t < 65536; t++)
                    (e[4 * t + 0] = 255 * Math.random()),
                        (e[4 * t + 1] = 255 * Math.random()),
                        (e[4 * t + 2] = 255 * Math.random()),
                        (e[4 * t + 3] = 255);
                return (
                    (t.randomTexture = new J(t)),
                    t.randomTexture.initFromData(
                        e,
                        256,
                        256,
                        J.FILTER_NEAREST,
                        J.WRAP_REPEAT
                    ),
                    t.randomTexture
                );
            }),
            (J.getTempGradientTexture = function(t) {
                if (
                    (t || console.error('[getTempGradientTexture] no cgl!'),
                    t.tempTextureGradient)
                )
                    return t.tempTextureGradient;
                const e = new J(t),
                    i = new Uint8Array(262144);
                for (let t = 0; t < 256; t++)
                    for (let e = 0; e < 256; e++)
                        (i[4 * (e + 256 * t) + 0] = i[
                            4 * (e + 256 * t) + 1
                        ] = i[4 * (e + 256 * t) + 2] = 255 - t),
                            (i[4 * (e + 256 * t) + 3] = 255);
                return (
                    e.initFromData(
                        i,
                        256,
                        256,
                        J.FILTER_NEAREST,
                        J.WRAP_REPEAT
                    ),
                    (t.tempTextureGradient = e),
                    e
                );
            }),
            (J.getTemporaryTexture = function(t, e, i, s) {
                const r = new J(t),
                    n = [];
                for (let t = 0; t < e; t++)
                    for (let i = 0; i < e; i++)
                        (i + t) % 64 < 32
                            ? (n.push(200 + (t / e) * 25 + (i / e) * 25),
                              n.push(200 + (t / e) * 25 + (i / e) * 25),
                              n.push(200 + (t / e) * 25 + (i / e) * 25))
                            : (n.push(40 + (t / e) * 25 + (i / e) * 25),
                              n.push(40 + (t / e) * 25 + (i / e) * 25),
                              n.push(40 + (t / e) * 25 + (i / e) * 25)),
                            n.push(255);
                const o = new Uint8Array(n);
                return r.initFromData(o, e, e, i, s), r;
            }),
            (J.createFromImage = function(t, e, i) {
                const s = new J(t, (i = i || {}));
                return (
                    (s.flip = !1),
                    (s.image = e),
                    (s.width = e.width),
                    (s.height = e.height),
                    s.initTexture(e, i.filter),
                    s
                );
            }),
            (J.fromImage = function(t, e, i, s) {
                d.error('deprecated texture from image...');
                const r = new J(t);
                return (
                    (r.flip = !1),
                    i && (r.filter = i),
                    s && (r.wrap = s),
                    (r.image = e),
                    r.initTexture(e),
                    r
                );
            }),
            (J.isPowerOfTwo = function(t) {
                return (
                    1 == t ||
                    2 == t ||
                    4 == t ||
                    8 == t ||
                    16 == t ||
                    32 == t ||
                    64 == t ||
                    128 == t ||
                    256 == t ||
                    512 == t ||
                    1024 == t ||
                    2048 == t ||
                    4096 == t ||
                    8192 == t ||
                    16384 == t
                );
            }),
            (J.FILTER_NEAREST = 0),
            (J.FILTER_LINEAR = 1),
            (J.FILTER_MIPMAP = 2),
            (J.WRAP_REPEAT = 0),
            (J.WRAP_MIRRORED_REPEAT = 1),
            (J.WRAP_CLAMP_TO_EDGE = 2),
            (J.TYPE_DEFAULT = 0),
            (J.TYPE_DEPTH = 1),
            (J.TYPE_FLOAT = 2);
        const Z = function(t, e, i, s) {
            (this.Framebuffer2DrawTargetsDefault = null),
                (this.Framebuffer2BlittingFramebuffer = null),
                (this.Framebuffer2FinalFramebuffer = null),
                (this._cgl = t),
                (this._width = 0),
                (this._height = 0),
                (this._depthRenderbuffer = null),
                (this._frameBuffer = null),
                (this._textureFrameBuffer = null),
                (this._colorRenderbuffers = []),
                (this._drawTargetArray = []),
                this.Framebuffer2BlittingFramebuffer ||
                    (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()),
                this.Framebuffer2FinalFramebuffer ||
                    (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()),
                this.Framebuffer2DrawTargetsDefault ||
                    (this.Framebuffer2DrawTargetsDefault = [
                        t.gl.COLOR_ATTACHMENT0,
                    ]),
                (this._options = s || { isFloatingPointTexture: !1 }),
                (this.name = this._options.name || 'unknown'),
                this._options.hasOwnProperty('numRenderBuffers') ||
                    (this._options.numRenderBuffers = 1),
                this._options.hasOwnProperty('depth') ||
                    (this._options.depth = !0),
                this._options.hasOwnProperty('clear') ||
                    (this._options.clear = !0),
                this._options.hasOwnProperty('multisampling') ||
                    ((this._options.multisampling = !1),
                    (this._options.multisamplingSamples = 0)),
                this._options.multisamplingSamples &&
                    (this._cgl.glSlowRenderer &&
                        (this._options.multisamplingSamples = 0),
                    this._cgl.gl.MAX_SAMPLES
                        ? (this._options.multisamplingSamples = Math.min(
                              this._cgl.maxSamples,
                              this._options.multisamplingSamples
                          ))
                        : (this._options.multisamplingSamples = 0)),
                this._options.hasOwnProperty('filter') ||
                    (this._options.filter = J.FILTER_LINEAR),
                this._options.hasOwnProperty('wrap') ||
                    (this._options.wrap = J.WRAP_REPEAT),
                (this._numRenderBuffers = this._options.numRenderBuffers),
                (this._colorTextures = []);
            for (let e = 0; e < this._numRenderBuffers; e++)
                this._colorTextures[e] = new J(t, {
                    name: 'fb2 ' + this.name + ' ' + e,
                    isFloatingPointTexture: this._options
                        .isFloatingPointTexture,
                    filter: this._options.filter,
                    wrap: this._options.wrap,
                });
            let r = J.FILTER_NEAREST;
            this._options.shadowMap && (r = J.FILTER_LINEAR);
            this._options.depth &&
                (this._textureDepth = new J(t, {
                    name: 'fb2 depth ' + this.name,
                    isDepthTexture: !0,
                    filter: r,
                    shadowMap: this._options.shadowMap || !1,
                    width: e || 512,
                    height: i || 512,
                })),
                t.aborted || this.setSize(e || 512, i || 512);
        };
        (Z.prototype.getWidth = function() {
            return this._width;
        }),
            (Z.prototype.getHeight = function() {
                return this._height;
            }),
            (Z.prototype.getGlFrameBuffer = function() {
                return this._frameBuffer;
            }),
            (Z.prototype.getDepthRenderBuffer = function() {
                return this._depthRenderbuffer;
            }),
            (Z.prototype.getTextureColor = function() {
                return this._colorTextures[0];
            }),
            (Z.prototype.getTextureColorNum = function(t) {
                return this._colorTextures[t];
            }),
            (Z.prototype.getTextureDepth = function() {
                return this._textureDepth;
            }),
            (Z.prototype.setFilter = function(t) {
                for (let e = 0; e < this._numRenderBuffers; e++)
                    (this._colorTextures[e].filter = t),
                        this._colorTextures[e].setSize(
                            this._width,
                            this._height
                        );
            }),
            (Z.prototype.delete = Z.prototype.dispose = function() {
                let t = 0;
                for (t = 0; t < this._numRenderBuffers; t++)
                    this._colorTextures[t].delete();
                for (
                    this._textureDepth.delete(), t = 0;
                    t < this._numRenderBuffers;
                    t++
                )
                    this._cgl.gl.deleteRenderbuffer(
                        this._colorRenderbuffers[t]
                    );
                this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
                    this._cgl.gl.deleteFramebuffer(this._frameBuffer),
                    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
            }),
            (Z.prototype.setSize = function(t, e) {
                let i = 0;
                if (
                    ((this._width = Math.floor(t)),
                    (this._height = Math.floor(e)),
                    (this._width = Math.min(this._width, this._cgl.maxTexSize)),
                    (this._height = Math.min(
                        this._height,
                        this._cgl.maxTexSize
                    )),
                    Q.profileFrameBuffercreate++,
                    this._frameBuffer)
                ) {
                    for (i = 0; i < this._numRenderBuffers; i++)
                        this._cgl.gl.deleteRenderbuffer(
                            this._colorRenderbuffers[i]
                        );
                    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
                        this._cgl.gl.deleteFramebuffer(this._frameBuffer),
                        this._cgl.gl.deleteFramebuffer(
                            this._textureFrameBuffer
                        );
                }
                (this._frameBuffer = this._cgl.gl.createFramebuffer()),
                    (this._textureFrameBuffer = this._cgl.gl.createFramebuffer());
                const s = this._options.depth;
                for (i = 0; i < this._numRenderBuffers; i++)
                    this._colorTextures[i].setSize(this._width, this._height);
                for (i = 0; i < this._numRenderBuffers; i++) {
                    const t = this._cgl.gl.createRenderbuffer();
                    this._cgl.gl.getExtension('EXT_color_buffer_float');
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._frameBuffer
                    ),
                        this._cgl.gl.bindRenderbuffer(
                            this._cgl.gl.RENDERBUFFER,
                            t
                        ),
                        this._options.isFloatingPointTexture
                            ? this._options.multisampling
                                ? this._cgl.gl.renderbufferStorageMultisample(
                                      this._cgl.gl.RENDERBUFFER,
                                      this._options.multisamplingSamples,
                                      this._cgl.gl.RGBA32F,
                                      this._width,
                                      this._height
                                  )
                                : this._cgl.gl.renderbufferStorage(
                                      this._cgl.gl.RENDERBUFFER,
                                      this._cgl.gl.RGBA32F,
                                      this._width,
                                      this._height
                                  )
                            : this._options.multisampling
                            ? this._cgl.gl.renderbufferStorageMultisample(
                                  this._cgl.gl.RENDERBUFFER,
                                  this._options.multisamplingSamples,
                                  this._cgl.gl.RGBA8,
                                  this._width,
                                  this._height
                              )
                            : this._cgl.gl.renderbufferStorage(
                                  this._cgl.gl.RENDERBUFFER,
                                  this._cgl.gl.RGBA8,
                                  this._width,
                                  this._height
                              ),
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.COLOR_ATTACHMENT0 + i,
                            this._cgl.gl.RENDERBUFFER,
                            t
                        ),
                        (this._colorRenderbuffers[i] = t);
                }
                for (
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._textureFrameBuffer
                    ),
                        i = 0;
                    i < this._numRenderBuffers;
                    i++
                )
                    this._cgl.gl.framebufferTexture2D(
                        this._cgl.gl.FRAMEBUFFER,
                        this._cgl.gl.COLOR_ATTACHMENT0 + i,
                        this._cgl.gl.TEXTURE_2D,
                        this._colorTextures[i].tex,
                        0
                    );
                this._options.depth &&
                    this._cgl.gl.framebufferTexture2D(
                        this._cgl.gl.FRAMEBUFFER,
                        this._cgl.gl.DEPTH_ATTACHMENT,
                        this._cgl.gl.TEXTURE_2D,
                        this._textureDepth.tex,
                        0
                    ),
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._frameBuffer
                    );
                let r = this._cgl.gl.DEPTH_COMPONENT32F;
                for (
                    this._cgl.glSlowRenderer &&
                        (r = this._cgl.gl.DEPTH_COMPONENT16),
                        s &&
                            (this._textureDepth.setSize(
                                this._width,
                                this._height
                            ),
                            (this._depthRenderbuffer = this._cgl.gl.createRenderbuffer()),
                            this._cgl.gl.bindRenderbuffer(
                                this._cgl.gl.RENDERBUFFER,
                                this._depthRenderbuffer
                            ),
                            this._options.isFloatingPointTexture,
                            this._options.multisampling
                                ? this._cgl.gl.renderbufferStorageMultisample(
                                      this._cgl.gl.RENDERBUFFER,
                                      this._options.multisamplingSamples,
                                      r,
                                      this._width,
                                      this._height
                                  )
                                : this._cgl.gl.renderbufferStorage(
                                      this._cgl.gl.RENDERBUFFER,
                                      r,
                                      this._width,
                                      this._height
                                  ),
                            this._cgl.gl.framebufferRenderbuffer(
                                this._cgl.gl.FRAMEBUFFER,
                                this._cgl.gl.DEPTH_ATTACHMENT,
                                this._cgl.gl.RENDERBUFFER,
                                this._depthRenderbuffer
                            )),
                        this._drawTargetArray.length = 0,
                        i = 0;
                    i < this._numRenderBuffers;
                    i++
                )
                    this._drawTargetArray.push(
                        this._cgl.gl.COLOR_ATTACHMENT0 + i
                    );
                const n = this._cgl.printError('fb setsize1');
                n && console.log(n),
                    this._cgl.gl.isFramebuffer(this._textureFrameBuffer) ||
                        console.warn('invalid framebuffer');
                const o = this._cgl.gl.checkFramebufferStatus(
                    this._cgl.gl.FRAMEBUFFER
                );
                if (o != this._cgl.gl.FRAMEBUFFER_COMPLETE)
                    switch (
                        (console.log(
                            'framebuffer incomplete: ' + this.name,
                            this
                        ),
                        o)
                    ) {
                        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                            throw (d.warn(
                                'FRAMEBUFFER_INCOMPLETE_ATTACHMENT...',
                                this
                            ),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT'
                            ));
                        case this._cgl.gl
                            .FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                            throw (d.warn(
                                'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'
                            ),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'
                            ));
                        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                            throw (d.warn('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS'
                            ));
                        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
                            throw (d.warn('FRAMEBUFFER_UNSUPPORTED'),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED'
                            ));
                        default:
                            throw (d.warn('incomplete framebuffer', o),
                            new Error('Incomplete framebuffer: ' + o));
                    }
                this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
                    this._cgl.gl.bindRenderbuffer(
                        this._cgl.gl.RENDERBUFFER,
                        null
                    ),
                    this._cgl.printError('fb setsize');
            }),
            (Z.prototype.renderStart = function() {
                this._cgl.checkFrameStarted('fb2 renderstart'),
                    this._cgl.pushModelMatrix(),
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._frameBuffer
                    ),
                    this._cgl.pushGlFrameBuffer(this._frameBuffer),
                    this._cgl.pushFrameBuffer(this),
                    this._cgl.pushPMatrix(),
                    this._cgl.gl.viewport(0, 0, this._width, this._height),
                    this._cgl.gl.drawBuffers(this._drawTargetArray),
                    this._options.clear &&
                        (this._cgl.gl.clearColor(0, 0, 0, 0),
                        this._cgl.gl.clear(
                            this._cgl.gl.COLOR_BUFFER_BIT |
                                this._cgl.gl.DEPTH_BUFFER_BIT
                        ));
            }),
            (Z.prototype.renderEnd = function() {
                if (
                    (this._cgl.popPMatrix(),
                    Q.profileFramebuffer++,
                    this._numRenderBuffers <= 1)
                )
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.READ_FRAMEBUFFER,
                        this._frameBuffer
                    ),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.DRAW_FRAMEBUFFER,
                            this._textureFrameBuffer
                        ),
                        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [
                            0,
                            0,
                            0,
                            1,
                        ]),
                        this._cgl.gl.blitFramebuffer(
                            0,
                            0,
                            this._width,
                            this._height,
                            0,
                            0,
                            this._width,
                            this._height,
                            this._cgl.gl.COLOR_BUFFER_BIT |
                                this._cgl.gl.DEPTH_BUFFER_BIT,
                            this._cgl.gl.NEAREST
                        );
                else {
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this.Framebuffer2BlittingFramebuffer
                    ),
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.RENDERBUFFER,
                            this._depthRenderbuffer
                        ),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this.Framebuffer2FinalFramebuffer
                        ),
                        this._cgl.gl.framebufferTexture2D(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.TEXTURE_2D,
                            this._textureDepth.tex,
                            0
                        );
                    for (let t = 0; t < this._numRenderBuffers; t++) {
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this.Framebuffer2BlittingFramebuffer
                        ),
                            this._cgl.gl.framebufferRenderbuffer(
                                this._cgl.gl.FRAMEBUFFER,
                                this._cgl.gl.COLOR_ATTACHMENT0,
                                this._cgl.gl.RENDERBUFFER,
                                this._colorRenderbuffers[t]
                            ),
                            this._cgl.gl.bindFramebuffer(
                                this._cgl.gl.FRAMEBUFFER,
                                this.Framebuffer2FinalFramebuffer
                            ),
                            this._cgl.gl.framebufferTexture2D(
                                this._cgl.gl.FRAMEBUFFER,
                                this._cgl.gl.COLOR_ATTACHMENT0,
                                this._cgl.gl.TEXTURE_2D,
                                this._colorTextures[t].tex,
                                0
                            ),
                            this._cgl.gl.bindFramebuffer(
                                this._cgl.gl.FRAMEBUFFER,
                                null
                            ),
                            this._cgl.gl.bindFramebuffer(
                                this._cgl.gl.READ_FRAMEBUFFER,
                                this.Framebuffer2BlittingFramebuffer
                            ),
                            this._cgl.gl.bindFramebuffer(
                                this._cgl.gl.DRAW_FRAMEBUFFER,
                                this.Framebuffer2FinalFramebuffer
                            ),
                            this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [
                                0,
                                0,
                                0,
                                1,
                            ]);
                        let e = this._cgl.gl.COLOR_BUFFER_BIT;
                        0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT),
                            this._cgl.gl.blitFramebuffer(
                                0,
                                0,
                                this._width,
                                this._height,
                                0,
                                0,
                                this._width,
                                this._height,
                                e,
                                this._cgl.gl.NEAREST
                            );
                    }
                }
                if (
                    (this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._cgl.popGlFrameBuffer()
                    ),
                    this._cgl.popFrameBuffer(),
                    this._cgl.popModelMatrix(),
                    this._cgl.resetViewPort(),
                    this._colorTextures[0].filter == J.FILTER_MIPMAP)
                )
                    for (let t = 0; t < this._numRenderBuffers; t++)
                        this._cgl.gl.bindTexture(
                            this._cgl.gl.TEXTURE_2D,
                            this._colorTextures[t].tex
                        ),
                            this._colorTextures[t].updateMipMap(),
                            this._cgl.gl.bindTexture(
                                this._cgl.gl.TEXTURE_2D,
                                null
                            );
            });
        class $ {
            constructor(t) {
                (this._max = [
                    -Number.MAX_VALUE,
                    -Number.MAX_VALUE,
                    -Number.MAX_VALUE,
                ]),
                    (this._min = [
                        Number.MAX_VALUE,
                        Number.MAX_VALUE,
                        Number.MAX_VALUE,
                    ]),
                    (this._center = []),
                    (this._size = []),
                    (this._first = !0),
                    (this._wireMesh = null),
                    t && this.apply(t);
            }
            get maxAxis() {
                return this._maxAxis;
            }
            get size() {
                return this._size;
            }
            get center() {
                return this._center;
            }
            get x() {
                return this._center[0];
            }
            get y() {
                return this._center[1];
            }
            get z() {
                return this._center[2];
            }
            get minX() {
                return this._min[0];
            }
            get minY() {
                return this._min[1];
            }
            get minZ() {
                return this._min[2];
            }
            get maxX() {
                return this._max[0];
            }
            get maxY() {
                return this._max[1];
            }
            get maxZ() {
                return this._max[2];
            }
            apply(t, e) {
                if (t) {
                    if (t instanceof $) {
                        const e = t;
                        this.applyPos(e.maxX, e.maxY, e.maxZ),
                            this.applyPos(e.minX, e.minY, e.minZ);
                    } else {
                        let e = 0;
                        for (e = 0; e < t.vertices.length; e += 3)
                            t.vertices[e + 0] == t.vertices[e + 0] &&
                                this.applyPos(
                                    t.vertices[e + 0],
                                    t.vertices[e + 1],
                                    t.vertices[e + 2]
                                );
                    }
                    this.calcCenterSize();
                }
            }
            copy() {
                return new $(this);
            }
            get changed() {
                return !(
                    this._max[0] == -Number.MAX_VALUE &&
                    this._max[1] == -Number.MAX_VALUE &&
                    this._max[2] == -Number.MAX_VALUE
                );
            }
            applyPos(t, e, i) {
                if (this._first)
                    return (
                        (this._max[0] = t),
                        (this._max[1] = e),
                        (this._max[2] = i),
                        (this._min[0] = t),
                        (this._min[1] = e),
                        (this._min[2] = i),
                        void (this._first = !1)
                    );
                (this._max[0] = Math.max(this._max[0], t)),
                    (this._max[1] = Math.max(this._max[1], e)),
                    (this._max[2] = Math.max(this._max[2], i)),
                    (this._min[0] = Math.min(this._min[0], t)),
                    (this._min[1] = Math.min(this._min[1], e)),
                    (this._min[2] = Math.min(this._min[2], i));
            }
            calcCenterSize() {
                (this._size[0] = this._max[0] - this._min[0]),
                    (this._size[1] = this._max[1] - this._min[1]),
                    (this._size[2] = this._max[2] - this._min[2]),
                    (this._center[0] = (this._min[0] + this._max[0]) / 2),
                    (this._center[1] = (this._min[1] + this._max[1]) / 2),
                    (this._center[2] = (this._min[2] + this._max[2]) / 2),
                    (this._maxAxis = Math.max(
                        this._size[2],
                        Math.max(this._size[0], this._size[1])
                    ));
            }
            mulMat4(t) {
                vec3.transformMat4(this._max, this._max, t),
                    vec3.transformMat4(this._min, this._min, t),
                    this.calcCenterSize();
            }
            render(t, e) {
                this._wireMesh || (this._wireMesh = new CGL.WireCube(t)),
                    t.pushModelMatrix(),
                    mat4.translate(t.mMatrix, t.mMatrix, this._center),
                    this._wireMesh.render(
                        t,
                        this._size[0] / 2,
                        this._size[1] / 2,
                        this._size[2] / 2
                    ),
                    t.popModelMatrix();
            }
        }
        const tt = function(t) {
            (this.name = t),
                (this.faceVertCount = 3),
                (this._vertices = []),
                (this.verticesIndices = []),
                (this.texCoords = new Float32Array()),
                (this.texCoordsIndices = []),
                (this.vertexNormals = []),
                (this.tangents = []),
                (this.biTangents = []),
                (this.barycentrics = []),
                (this.morphTargets = []),
                (this.vertexColors = []),
                (this._attributes = {}),
                (this.glPrimitive = null),
                Object.defineProperty(this, 'vertices', {
                    get() {
                        return this._vertices;
                    },
                    set(t) {
                        this.setVertices(t);
                    },
                });
        };
        (tt.prototype.clear = function() {
            (this.vertices = new Float32Array([])),
                (this.verticesIndices.length = 0),
                (this.texCoords = new Float32Array([])),
                (this.texCoordsIndices.length = 0),
                (this.vertexNormals = new Float32Array([]));
        }),
            (tt.prototype.getAttributes = function() {
                return this._attributes;
            }),
            (tt.prototype.getAttribute = function(t) {
                for (const e in this._attributes)
                    if (this._attributes[e].name == t)
                        return this._attributes[e];
                return null;
            }),
            (tt.prototype.setAttribute = function(t, e, i) {
                let s = '';
                1 == i
                    ? (s = 'float')
                    : 2 == i
                    ? (s = 'vec2')
                    : 3 == i
                    ? (s = 'vec3')
                    : 4 == i && (s = 'vec4');
                const r = { name: t, data: e, itemSize: i, type: s };
                this._attributes[t] = r;
            }),
            (tt.prototype.setVertices = function(t) {
                t instanceof Float32Array
                    ? (this._vertices = t)
                    : (this._vertices = new Float32Array(t));
            }),
            (tt.prototype.setTexCoords = function(t) {
                t instanceof Float32Array
                    ? (this.texCoords = t)
                    : (this.texCoords = new Float32Array(t));
            }),
            (tt.prototype.calcNormals = function(t) {
                t || this.unIndex(), this.calculateNormals({});
            }),
            (tt.prototype.setPointVertices = function(t) {
                if (t.length % 3 == 0) {
                    t instanceof Float32Array
                        ? (this.vertices = t)
                        : (this.vertices = new Float32Array(t)),
                        this.texCoords instanceof Float32Array ||
                            (this.texCoords = new Float32Array(
                                (t.length / 3) * 2
                            )),
                        (this.verticesIndices.length = t.length / 3);
                    for (let e = 0; e < t.length / 3; e++)
                        (this.verticesIndices[e] = e),
                            (this.texCoords[2 * e] = 0),
                            (this.texCoords[2 * e + 1] = 0);
                } else
                    console.error(
                        'CGL MESH : SetPointVertices: Array must be multiple of three.'
                    );
            }),
            (tt.prototype.merge = function(t) {
                if (!t) return;
                const e = this.verticesIndices.length,
                    i = this.vertices.length / 3;
                this.verticesIndices.length =
                    this.verticesIndices.length + t.verticesIndices.length;
                for (let s = 0; s < t.verticesIndices.length; s++)
                    this.verticesIndices[e + s] = t.verticesIndices[s] + i;
                (this.vertices = f.float32Concat(this.vertices, t.vertices)),
                    (this.texCoords = f.float32Concat(
                        this.texCoords,
                        t.texCoords
                    )),
                    (this.vertexNormals = f.float32Concat(
                        this.vertexNormals,
                        t.vertexNormals
                    )),
                    (this.tangents = f.float32Concat(
                        this.tangents,
                        t.tangents
                    )),
                    (this.bitangents = f.float32Concat(
                        this.bitangents,
                        t.bitangents
                    ));
            }),
            (tt.prototype.copy = function() {
                let t = 0;
                const e = new tt();
                if (
                    ((e.faceVertCount = this.faceVertCount),
                    e.setVertices(this._vertices.slice(0)),
                    this.verticesIndices)
                )
                    for (
                        e.verticesIndices.length = this.verticesIndices.length,
                            t = 0;
                        t < this.verticesIndices.length;
                        t++
                    )
                        e.verticesIndices[t] = this.verticesIndices[t];
                for (
                    e.texCoords = new Float32Array(this.texCoords.length),
                        t = 0;
                    t < this.texCoords.length;
                    t++
                )
                    e.texCoords[t] = this.texCoords[t];
                for (
                    e.texCoordsIndices.length = this.texCoordsIndices.length,
                        t = 0;
                    t < this.texCoordsIndices.length;
                    t++
                )
                    e.texCoordsIndices[t] = this.texCoordsIndices[t];
                for (
                    e.vertexNormals = new Float32Array(
                        this.vertexNormals.length
                    ),
                        t = 0;
                    t < this.vertexNormals.length;
                    t++
                )
                    e.vertexNormals[t] = this.vertexNormals[t];
                if (this.tangents)
                    for (
                        e.tangents = [],
                            e.tangents.length = this.tangents.length,
                            t = 0;
                        t < this.tangents.length;
                        t++
                    )
                        e.tangents[t] = this.tangents[t];
                if (this.biTangents)
                    for (
                        e.biTangents = [],
                            e.biTangents.length = this.biTangents.length,
                            t = 0;
                        t < this.biTangents.length;
                        t++
                    )
                        e.biTangents[t] = this.biTangents[t];
                for (
                    e.barycentrics.length = this.barycentrics.length, t = 0;
                    t < this.barycentrics.length;
                    t++
                )
                    e.barycentrics[t] = this.barycentrics[t];
                for (
                    e.morphTargets.length = this.morphTargets.length, t = 0;
                    t < this.morphTargets.length;
                    t++
                )
                    e.morphTargets[t] = this.morphTargets[t];
                for (
                    e.vertexColors.length = this.vertexColors.length, t = 0;
                    t < this.vertexColors.length;
                    t++
                )
                    e.vertexColors[t] = this.vertexColors[t];
                return e;
            }),
            (tt.prototype.calculateNormals = function(t) {
                const e = vec3.create(),
                    i = vec3.create(),
                    s = vec3.create();
                function r(r) {
                    return (
                        vec3.subtract(e, r[0], r[1]),
                        vec3.subtract(i, r[0], r[2]),
                        vec3.cross(s, e, i),
                        vec3.normalize(s, s),
                        t &&
                            t.forceZUp &&
                            s[2] < 0 &&
                            ((s[0] *= -1), (s[1] *= -1), (s[2] *= -1)),
                        s
                    );
                }
                (this.getVertexVec = function(t) {
                    const e = [0, 0, 0];
                    return (
                        (e[0] = this.vertices[3 * t + 0]),
                        (e[1] = this.vertices[3 * t + 1]),
                        (e[2] = this.vertices[3 * t + 2]),
                        e
                    );
                }),
                    (this.vertexNormals instanceof Float32Array &&
                        this.vertexNormals.length == this.vertices.length) ||
                        (this.vertexNormals = new Float32Array(
                            this.vertices.length
                        ));
                for (let t = 0; t < this.vertices.length; t++)
                    this.vertexNormals[t] = 0;
                if (this.isIndexed()) {
                    const t = [];
                    t.length = this.verticesIndices.length / 3;
                    for (let e = 0; e < this.verticesIndices.length; e += 3) {
                        const i = [
                            this.getVertexVec(this.verticesIndices[e + 0]),
                            this.getVertexVec(this.verticesIndices[e + 1]),
                            this.getVertexVec(this.verticesIndices[e + 2]),
                        ];
                        (t[e / 3] = r(i)),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 0] + 0
                            ] += t[e / 3][0]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 0] + 1
                            ] += t[e / 3][1]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 0] + 2
                            ] += t[e / 3][2]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 1] + 0
                            ] += t[e / 3][0]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 1] + 1
                            ] += t[e / 3][1]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 1] + 2
                            ] += t[e / 3][2]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 2] + 0
                            ] += t[e / 3][0]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 2] + 1
                            ] += t[e / 3][1]),
                            (this.vertexNormals[
                                3 * this.verticesIndices[e + 2] + 2
                            ] += t[e / 3][2]);
                    }
                    for (let t = 0; t < this.verticesIndices.length; t += 3)
                        for (let e = 0; e < 3; e++) {
                            const i = [
                                this.vertexNormals[
                                    3 * this.verticesIndices[t + e] + 0
                                ],
                                this.vertexNormals[
                                    3 * this.verticesIndices[t + e] + 1
                                ],
                                this.vertexNormals[
                                    3 * this.verticesIndices[t + e] + 2
                                ],
                            ];
                            vec3.normalize(i, i),
                                (this.vertexNormals[
                                    3 * this.verticesIndices[t + e] + 0
                                ] = i[0]),
                                (this.vertexNormals[
                                    3 * this.verticesIndices[t + e] + 1
                                ] = i[1]),
                                (this.vertexNormals[
                                    3 * this.verticesIndices[t + e] + 2
                                ] = i[2]);
                        }
                } else {
                    const t = [];
                    for (let e = 0; e < this.vertices.length; e += 9) {
                        const i = r([
                            [
                                this.vertices[e + 0],
                                this.vertices[e + 1],
                                this.vertices[e + 2],
                            ],
                            [
                                this.vertices[e + 3],
                                this.vertices[e + 4],
                                this.vertices[e + 5],
                            ],
                            [
                                this.vertices[e + 6],
                                this.vertices[e + 7],
                                this.vertices[e + 8],
                            ],
                        ]);
                        t.push(
                            i[0],
                            i[1],
                            i[2],
                            i[0],
                            i[1],
                            i[2],
                            i[0],
                            i[1],
                            i[2]
                        );
                    }
                    this.vertexNormals = t;
                }
            }),
            (tt.prototype.calcTangentsBitangents = function() {
                if (!this.vertices.length)
                    return void console.error(
                        'Cannot calculate tangents/bitangents without vertices.'
                    );
                if (!this.vertexNormals.length)
                    return void console.error(
                        'Cannot calculate tangents/bitangents without normals.'
                    );
                if (!this.texCoords.length) {
                    console.warn(
                        'No texcoords. Replacing with default values [0, 0].'
                    );
                    const t = (this.vertices.length / 3) * 2;
                    this.texCoords = new Float32Array(t);
                    for (let e = 0; e < t; e += 1) this.texCoords[e] = 0;
                }
                if (!this.verticesIndices || !this.verticesIndices.length)
                    return void console.error(
                        'Cannot calculate tangents/bitangents without vertex indices.'
                    );
                if (this.verticesIndices.length % 3 != 0)
                    return void console.error('Vertex indices mismatch!');
                const t = this.verticesIndices.length / 3,
                    e = this.vertices.length / 3;
                (this.tangents = new Float32Array(this.vertexNormals.length)),
                    (this.biTangents = new Float32Array(
                        this.vertexNormals.length
                    ));
                const i = [];
                i.length = 2 * e;
                const s = vec3.create(),
                    r = vec3.create(),
                    n = vec3.create(),
                    o = vec2.create(),
                    h = vec2.create(),
                    a = vec2.create(),
                    l = vec3.create(),
                    u = vec3.create();
                for (let c = 0; c < t; c += 1) {
                    const t = this.verticesIndices[3 * c],
                        p = this.verticesIndices[3 * c + 1],
                        d = this.verticesIndices[3 * c + 2];
                    vec3.set(
                        s,
                        this.vertices[3 * t],
                        this.vertices[3 * t + 1],
                        this.vertices[3 * t + 2]
                    ),
                        vec3.set(
                            r,
                            this.vertices[3 * p],
                            this.vertices[3 * p + 1],
                            this.vertices[3 * p + 2]
                        ),
                        vec3.set(
                            n,
                            this.vertices[3 * d],
                            this.vertices[3 * d + 1],
                            this.vertices[3 * d + 2]
                        ),
                        vec2.set(
                            o,
                            this.texCoords[2 * t],
                            this.texCoords[2 * t + 1]
                        ),
                        vec2.set(
                            h,
                            this.texCoords[2 * p],
                            this.texCoords[2 * p + 1]
                        ),
                        vec2.set(
                            a,
                            this.texCoords[2 * d],
                            this.texCoords[2 * d + 1]
                        );
                    const _ = r[0] - s[0],
                        f = n[0] - s[0],
                        g = r[1] - s[1],
                        m = n[1] - s[1],
                        E = r[2] - s[2],
                        T = n[2] - s[2],
                        A = h[0] - o[0],
                        b = a[0] - o[0],
                        y = h[1] - o[1],
                        O = a[1] - o[1],
                        x = 1 / (A * O - b * y);
                    vec3.set(
                        l,
                        (O * _ - y * f) * x,
                        (O * g - y * m) * x,
                        (O * E - y * T) * x
                    ),
                        vec3.set(
                            u,
                            (A * f - b * _) * x,
                            (A * m - b * g) * x,
                            (A * T - b * E) * x
                        ),
                        (i[t] = l),
                        (i[p] = l),
                        (i[d] = l),
                        (i[t + e] = u),
                        (i[p + e] = u),
                        (i[d + e] = u);
                }
                const c = vec3.create(),
                    p = vec3.create(),
                    d = vec3.create(),
                    _ = vec3.create(),
                    f = vec3.create(),
                    g = vec3.create(),
                    m = vec3.create(),
                    E = vec3.create();
                for (let t = 0; t < e; t += 1) {
                    if (!i[t]) continue;
                    vec3.set(
                        c,
                        this.vertexNormals[3 * t],
                        this.vertexNormals[3 * t + 1],
                        this.vertexNormals[3 * t + 2]
                    ),
                        vec3.set(p, i[t][0], i[t][1], i[t][2]);
                    const s = vec3.dot(c, p);
                    vec3.scale(f, c, s),
                        vec3.subtract(g, p, f),
                        vec3.normalize(E, g),
                        vec3.cross(m, c, p);
                    vec3.dot(m, i[t + e]);
                    const r = 1;
                    vec3.scale(d, E, 1 / r),
                        vec3.cross(_, c, d),
                        (this.tangents[3 * t + 0] = d[0]),
                        (this.tangents[3 * t + 1] = d[1]),
                        (this.tangents[3 * t + 2] = d[2]),
                        (this.biTangents[3 * t + 0] = _[0]),
                        (this.biTangents[3 * t + 1] = _[1]),
                        (this.biTangents[3 * t + 2] = _[2]);
                }
            }),
            (tt.prototype.isIndexed = function() {
                return 0 != this.verticesIndices.length;
            }),
            (tt.prototype.unIndex = function(t) {
                const e = [],
                    i = [],
                    s = [],
                    r = [];
                let n = 0,
                    o = 0;
                for (
                    this.vertexNormals = [], o = 0;
                    o < this.verticesIndices.length;
                    o += 3
                )
                    e.push(this.vertices[3 * this.verticesIndices[o + 0] + 0]),
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 0] + 1]
                        ),
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 0] + 2]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 0] + 0
                            ]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 0] + 1
                            ]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 0] + 2
                            ]
                        ),
                        this.texCoords
                            ? (s.push(
                                  this.texCoords[
                                      2 * this.verticesIndices[o + 0] + 0
                                  ]
                              ),
                              s.push(
                                  this.texCoords[
                                      2 * this.verticesIndices[o + 0] + 1
                                  ]
                              ))
                            : (s.push(0), s.push(0)),
                        i.push(n),
                        n++,
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 1] + 0]
                        ),
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 1] + 1]
                        ),
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 1] + 2]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 1] + 0
                            ]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 1] + 1
                            ]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 1] + 2
                            ]
                        ),
                        this.texCoords
                            ? (s.push(
                                  this.texCoords[
                                      2 * this.verticesIndices[o + 1] + 0
                                  ]
                              ),
                              s.push(
                                  this.texCoords[
                                      2 * this.verticesIndices[o + 1] + 1
                                  ]
                              ))
                            : (s.push(0), s.push(0)),
                        i.push(n),
                        n++,
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 2] + 0]
                        ),
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 2] + 1]
                        ),
                        e.push(
                            this.vertices[3 * this.verticesIndices[o + 2] + 2]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 2] + 0
                            ]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 2] + 1
                            ]
                        ),
                        r.push(
                            this.vertexNormals[
                                3 * this.verticesIndices[o + 2] + 2
                            ]
                        ),
                        this.texCoords
                            ? (s.push(
                                  this.texCoords[
                                      2 * this.verticesIndices[o + 2] + 0
                                  ]
                              ),
                              s.push(
                                  this.texCoords[
                                      2 * this.verticesIndices[o + 2] + 1
                                  ]
                              ))
                            : (s.push(0), s.push(0)),
                        i.push(n),
                        n++;
                (this.vertices = e),
                    (this.texCoords = s),
                    (this.vertexNormals = r),
                    (this.verticesIndices.length = 0),
                    t && (this.verticesIndices = i),
                    this.calculateNormals();
            }),
            (tt.prototype.calcBarycentric = function() {
                this.barycentrics.length = this.vertices.length;
                let t = 0;
                for (t = 0; t < this.vertices.length; t++)
                    this.barycentrics[t] = 0;
                let e = 0;
                for (t = 0; t < this.vertices.length; t += 3)
                    (this.barycentrics[t + e] = 1), e++, 3 == e && (e = 0);
            }),
            (tt.prototype.getBounds = function() {
                return new $(this);
            }),
            (tt.prototype.center = function(t, e, i) {
                void 0 === t && ((t = !0), (e = !0), (i = !0));
                let s = 0;
                const r = this.getBounds(),
                    n = [
                        r.minX + (r.maxX - r.minX) / 2,
                        r.minY + (r.maxY - r.minY) / 2,
                        r.minZ + (r.maxZ - r.minZ) / 2,
                    ];
                for (s = 0; s < this.vertices.length; s += 3)
                    this.vertices[s + 0] == this.vertices[s + 0] &&
                        (t && (this.vertices[s + 0] -= n[0]),
                        e && (this.vertices[s + 1] -= n[1]),
                        i && (this.vertices[s + 2] -= n[2]));
                return n;
            }),
            (tt.prototype.mapTexCoords2d = function() {
                const t = this.getBounds(),
                    e = this.vertices.length / 3;
                this.texCoords = new Float32Array(2 * e);
                for (let i = 0; i < e; i++) {
                    const e = this.vertices[3 * i + 0],
                        s = this.vertices[3 * i + 1];
                    (this.texCoords[2 * i + 0] = e / (t.maxX - t.minX) + 0.5),
                        (this.texCoords[2 * i + 1] =
                            1 - s / (t.maxY - t.minY) + 0.5);
                }
            }),
            (tt.buildFromFaces = function(t) {
                const e = [],
                    i = [];
                for (let s = 0; s < t.length; s += 3) {
                    const r = t[s + 0],
                        n = t[s + 1],
                        o = t[s + 2],
                        h = [-1, -1, -1];
                    for (let t = 0; t < e; t += 3)
                        e[t + 0] == r[0] &&
                            e[t + 1] == r[1] &&
                            e[t + 2] == r[2] &&
                            (h[0] = t / 3),
                            e[t + 0] == n[0] &&
                                e[t + 1] == n[1] &&
                                e[t + 2] == n[2] &&
                                (h[1] = t / 3),
                            e[t + 0] == o[0] &&
                                e[t + 1] == o[1] &&
                                e[t + 2] == o[2] &&
                                (h[2] = t / 3);
                    -1 == h[0] &&
                        (e.push(r[0], r[1], r[2]), (h[0] = (e.length - 1) / 3)),
                        -1 == h[1] &&
                            (e.push(n[0], n[1], n[2]),
                            (h[1] = (e.length - 1) / 3)),
                        -1 == h[2] &&
                            (e.push(o[0], o[1], o[2]),
                            (h[2] = (e.length - 1) / 3)),
                        i.push(parseInt(h[0], 10)),
                        i.push(parseInt(h[1], 10)),
                        i.push(parseInt(h[2], 10));
                }
                const s = new tt();
                return (s.vertices = e), (s.verticesIndices = i), s;
            }),
            (tt.json2geom = function(t) {
                const e = new tt();
                if (
                    ((e.verticesIndices = []),
                    (e.vertices = t.vertices || []),
                    (e.vertexNormals = t.normals || []),
                    (e.vertexColors = t.colors || []),
                    (e.tangents = t.tangents || []),
                    (e.biTangents = t.bitangents || []),
                    t.texturecoords && e.setTexCoords(t.texturecoords[0]),
                    t.vertices_b64 &&
                        (e.vertices = new Float32Array(c(t.vertices_b64))),
                    t.normals_b64 &&
                        (e.vertexNormals = new Float32Array(c(t.normals_b64))),
                    t.tangents_b64 &&
                        (e.tangents = new Float32Array(c(t.tangents_b64))),
                    t.bitangents_b64 &&
                        (e.biTangents = new Float32Array(c(t.bitangents_b64))),
                    t.texturecoords_b64 &&
                        e.setTexCoords(
                            new Float32Array(c(t.texturecoords_b64[0]))
                        ),
                    t.faces_b64)
                )
                    e.verticesIndices = new Uint32Array(c(t.faces_b64));
                else {
                    e.verticesIndices.length = 3 * t.faces.length;
                    for (let i = 0; i < t.faces.length; i++)
                        (e.verticesIndices[3 * i] = t.faces[i][0]),
                            (e.verticesIndices[3 * i + 1] = t.faces[i][1]),
                            (e.verticesIndices[3 * i + 2] = t.faces[i][2]);
                }
                return e;
            });
        const et = function(t, e, i, s, r, n, o, h, a, l) {
            if (
                ((this._loc = -1),
                (this._type = e),
                (this._name = i),
                (this._shader = t),
                (this._value = 1e-5),
                (this._oldValue = null),
                (this._port = null),
                (this._structName = a),
                (this._structUniformName = h),
                (this._propertyName = l),
                this._shader._addUniform(this),
                (this.needsUpdate = !0),
                (this.shaderType = null),
                (this.comment = null),
                'f' == e)
            )
                (this.set = this.setValue = this.setValueF.bind(this)),
                    (this.updateValue = this.updateValueF.bind(this));
            else if ('f[]' == e)
                (this.set = this.setValue = this.setValueArrayF.bind(this)),
                    (this.updateValue = this.updateValueArrayF.bind(this));
            else if ('2f[]' == e)
                (this.set = this.setValue = this.setValueArray2F.bind(this)),
                    (this.updateValue = this.updateValueArray2F.bind(this));
            else if ('3f[]' == e)
                (this.set = this.setValue = this.setValueArray3F.bind(this)),
                    (this.updateValue = this.updateValueArray3F.bind(this));
            else if ('4f[]' == e)
                (this.set = this.setValue = this.setValueArray4F.bind(this)),
                    (this.updateValue = this.updateValueArray4F.bind(this));
            else if ('i' == e)
                (this.set = this.setValue = this.setValueI.bind(this)),
                    (this.updateValue = this.updateValueI.bind(this));
            else if ('2i' == e)
                (this.set = this.setValue = this.setValue2I.bind(this)),
                    (this.updateValue = this.updateValue2I.bind(this));
            else if ('3i' == e)
                (this.set = this.setValue = this.setValue3I.bind(this)),
                    (this.updateValue = this.updateValue3I.bind(this));
            else if ('4i' == e)
                (this.set = this.setValue = this.setValue4I.bind(this)),
                    (this.updateValue = this.updateValue4I.bind(this));
            else if ('b' == e)
                (this.set = this.setValue = this.setValueBool.bind(this)),
                    (this.updateValue = this.updateValueBool.bind(this));
            else if ('4f' == e)
                (this.set = this.setValue = this.setValue4F.bind(this)),
                    (this.updateValue = this.updateValue4F.bind(this));
            else if ('3f' == e)
                (this.set = this.setValue = this.setValue3F.bind(this)),
                    (this.updateValue = this.updateValue3F.bind(this));
            else if ('2f' == e)
                (this.set = this.setValue = this.setValue2F.bind(this)),
                    (this.updateValue = this.updateValue2F.bind(this));
            else if ('t' == e)
                (this.set = this.setValue = this.setValueT.bind(this)),
                    (this.updateValue = this.updateValueT.bind(this));
            else if ('tc' == e)
                (this.set = this.setValue = this.setValueT.bind(this)),
                    (this.updateValue = this.updateValueT.bind(this));
            else if ('t[]' == e)
                (this.set = this.setValue = this.setValueArrayT.bind(this)),
                    (this.updateValue = this.updateValueArrayT.bind(this));
            else {
                if ('m4' != e) throw new Error('Unknown uniform type');
                (this.set = this.setValue = this.setValueM4.bind(this)),
                    (this.updateValue = this.updateValueM4.bind(this));
            }
            'object' == typeof s && s instanceof U
                ? ((this._port = s),
                  (this._value = this._port.get()),
                  r && n && o
                      ? ((this._value = [0, 0, 0, 0]),
                        (this._port2 = r),
                        (this._port3 = n),
                        (this._port4 = o),
                        this._port.on(
                            'change',
                            this.updateFromPort4f.bind(this)
                        ),
                        this._port2.on(
                            'change',
                            this.updateFromPort4f.bind(this)
                        ),
                        this._port3.on(
                            'change',
                            this.updateFromPort4f.bind(this)
                        ),
                        this._port4.on(
                            'change',
                            this.updateFromPort4f.bind(this)
                        ),
                        this.updateFromPort4f())
                      : r && n
                      ? ((this._value = [0, 0, 0]),
                        (this._port2 = r),
                        (this._port3 = n),
                        this._port.on(
                            'change',
                            this.updateFromPort3f.bind(this)
                        ),
                        this._port2.on(
                            'change',
                            this.updateFromPort3f.bind(this)
                        ),
                        this._port3.on(
                            'change',
                            this.updateFromPort3f.bind(this)
                        ),
                        this.updateFromPort3f())
                      : r
                      ? ((this._value = [0, 0]),
                        (this._port2 = r),
                        this._port.on(
                            'change',
                            this.updateFromPort2f.bind(this)
                        ),
                        this._port2.on(
                            'change',
                            this.updateFromPort2f.bind(this)
                        ),
                        this.updateFromPort2f())
                      : this._port.on('change', this.updateFromPort.bind(this)))
                : (this._value = s),
                this.setValue(this._value),
                (this.needsUpdate = !0);
        };
        (et.prototype.copy = function(t) {
            const e = new et(
                t,
                this._type,
                this._name,
                this._value,
                this._port2,
                this._port3,
                this._port4,
                this._structUniformName,
                this._structName,
                this._propertyName
            );
            return (e.shaderType = this.shaderType), e;
        }),
            (et.prototype.getGlslTypeString = function() {
                return 'f' == this._type
                    ? 'float'
                    : 'i' == this._type
                    ? 'int'
                    : '2i' == this._type
                    ? 'ivec2'
                    : '2f' == this._type
                    ? 'vec2'
                    : '3f' == this._type
                    ? 'vec3'
                    : '4f' == this._type
                    ? 'vec4'
                    : 'm4' == this._type
                    ? 'mat4'
                    : 't' == this._type
                    ? 'sampler2D'
                    : 'tc' == this._type
                    ? 'samplerCube'
                    : void console.log(
                          '[CGL UNIFORM] unknown glsl type string ',
                          this._type
                      );
            }),
            (et.prototype._isValidLoc = function() {
                return -1 != this._loc;
            }),
            (et.prototype.getType = function() {
                return this._type;
            }),
            (et.prototype.getName = function() {
                return this._name;
            }),
            (et.prototype.getValue = function() {
                return this._value;
            }),
            (et.prototype.getShaderType = function() {
                return this.shaderType;
            }),
            (et.prototype.isStructMember = function() {
                return !!this._structName;
            }),
            (et.prototype.resetLoc = function() {
                (this._loc = -1), (this.needsUpdate = !0);
            }),
            (et.prototype.bindTextures = function() {
                return this._value;
            }),
            (et.prototype.resetLoc = function() {
                (this._loc = -1), (this.needsUpdate = !0);
            }),
            (et.prototype.bindTextures = function() {}),
            (et.prototype.getLoc = function() {
                return this._loc;
            }),
            (et.prototype.updateFromPort4f = function() {
                (this._value[0] = this._port.get()),
                    (this._value[1] = this._port2.get()),
                    (this._value[2] = this._port3.get()),
                    (this._value[3] = this._port4.get()),
                    this.setValue(this._value);
            }),
            (et.prototype.updateFromPort3f = function() {
                (this._value[0] = this._port.get()),
                    (this._value[1] = this._port2.get()),
                    (this._value[2] = this._port3.get()),
                    this.setValue(this._value);
            }),
            (et.prototype.updateFromPort2f = function() {
                (this._value[0] = this._port.get()),
                    (this._value[1] = this._port2.get()),
                    this.setValue(this._value);
            }),
            (et.prototype.updateFromPort = function() {
                this.setValue(this._port.get());
            }),
            (et.prototype.updateValueF = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._shader.getCgl().gl.uniform1f(this._loc, this._value),
                    Q.profileUniformCount++;
            }),
            (et.prototype.setValueF = function(t) {
                t != this._value &&
                    ((this.needsUpdate = !0), (this._value = t));
            }),
            (et.prototype.updateValueI = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._shader.getCgl().gl.uniform1i(this._loc, this._value),
                    Q.profileUniformCount++;
            }),
            (et.prototype.updateValue2I = function() {
                this._value &&
                    (this._isValidLoc() ||
                        ((this._loc = this._shader
                            .getCgl()
                            .gl.getUniformLocation(
                                this._shader.getProgram(),
                                this._name
                            )),
                        Q.profileShaderGetUniform++,
                        (Q.profileShaderGetUniformName = this._name)),
                    this._shader
                        .getCgl()
                        .gl.uniform2i(
                            this._loc,
                            this._value[0],
                            this._value[1]
                        ),
                    (this.needsUpdate = !1),
                    Q.profileUniformCount++);
            }),
            (et.prototype.updateValue3I = function() {
                this._value &&
                    (this._isValidLoc() ||
                        ((this._loc = this._shader
                            .getCgl()
                            .gl.getUniformLocation(
                                this._shader.getProgram(),
                                this._name
                            )),
                        Q.profileShaderGetUniform++,
                        (Q.profileShaderGetUniformName = this._name)),
                    this._shader
                        .getCgl()
                        .gl.uniform3i(
                            this._loc,
                            this._value[0],
                            this._value[1],
                            this._value[2]
                        ),
                    (this.needsUpdate = !1),
                    Q.profileUniformCount++);
            }),
            (et.prototype.updateValue4I = function() {
                this._isValidLoc() ||
                    ((this._loc = this._shader
                        .getCgl()
                        .gl.getUniformLocation(
                            this._shader.getProgram(),
                            this._name
                        )),
                    Q.profileShaderGetUniform++,
                    (Q.profileShaderGetUniformName = this._name)),
                    this._shader
                        .getCgl()
                        .gl.uniform4i(
                            this._loc,
                            this._value[0],
                            this._value[1],
                            this._value[2],
                            this._value[3]
                        ),
                    Q.profileUniformCount++;
            }),
            (et.prototype.setValueI = function(t) {
                t != this._value &&
                    ((this.needsUpdate = !0), (this._value = t));
            }),
            (et.prototype.setValue2I = function(t) {
                t &&
                    (this._oldValue
                        ? (t[0] == this._oldValue[0] &&
                              t[1] == this._oldValue[1]) ||
                          ((this._oldValue[0] = t[0]),
                          (this._oldValue[1] = t[1]),
                          (this.needsUpdate = !0))
                        : ((this._oldValue = [t[0] - 1, 1]),
                          (this.needsUpdate = !0)),
                    (this._value = t));
            }),
            (et.prototype.setValue3I = function(t) {
                t &&
                    (this._oldValue
                        ? (t[0] == this._oldValue[0] &&
                              t[1] == this._oldValue[1] &&
                              t[2] == this._oldValue[2]) ||
                          ((this._oldValue[0] = t[0]),
                          (this._oldValue[1] = t[1]),
                          (this._oldValue[2] = t[2]),
                          (this.needsUpdate = !0))
                        : ((this._oldValue = [t[0] - 1, 1, 2]),
                          (this.needsUpdate = !0)),
                    (this._value = t));
            }),
            (et.prototype.setValue4I = function(t) {
                (this.needsUpdate = !0), (this._value = t || vec4.create());
            }),
            (et.prototype.updateValueBool = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._shader
                        .getCgl()
                        .gl.uniform1i(this._loc, this._value ? 1 : 0),
                    Q.profileUniformCount++;
            }),
            (et.prototype.setValueBool = function(t) {
                t != this._value &&
                    ((this.needsUpdate = !0), (this._value = t));
            }),
            (et.prototype.setValueArray4F = function(t) {
                (this.needsUpdate = !0), (this._value = t);
            }),
            (et.prototype.updateValueArray4F = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._value &&
                        (this._shader
                            .getCgl()
                            .gl.uniform4fv(this._loc, this._value),
                        Q.profileUniformCount++);
            }),
            (et.prototype.setValueArray3F = function(t) {
                (this.needsUpdate = !0), (this._value = t);
            }),
            (et.prototype.updateValueArray3F = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._value &&
                        (this._shader
                            .getCgl()
                            .gl.uniform3fv(this._loc, this._value),
                        Q.profileUniformCount++);
            }),
            (et.prototype.setValueArray2F = function(t) {
                (this.needsUpdate = !0), (this._value = t);
            }),
            (et.prototype.updateValueArray2F = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._value &&
                        (this._shader
                            .getCgl()
                            .gl.uniform2fv(this._loc, this._value),
                        Q.profileUniformCount++);
            }),
            (et.prototype.setValueArrayF = function(t) {
                (this.needsUpdate = !0), (this._value = t);
            }),
            (et.prototype.updateValueArrayF = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._value &&
                        (this._shader
                            .getCgl()
                            .gl.uniform1fv(this._loc, this._value),
                        Q.profileUniformCount++);
            }),
            (et.prototype.setValueArrayT = function(t) {
                (this.needsUpdate = !0), (this._value = t);
            }),
            (et.prototype.updateValueArrayT = function() {
                this._isValidLoc()
                    ? (this.needsUpdate = !1)
                    : (this._loc = this._shader
                          .getCgl()
                          .gl.getUniformLocation(
                              this._shader.getProgram(),
                              this._name
                          )),
                    this._value &&
                        (this._shader
                            .getCgl()
                            .gl.uniform1iv(this._loc, this._value),
                        Q.profileUniformCount++);
            }),
            (et.prototype.updateValue3F = function() {
                this._value &&
                    (this._isValidLoc() ||
                        ((this._loc = this._shader
                            .getCgl()
                            .gl.getUniformLocation(
                                this._shader.getProgram(),
                                this._name
                            )),
                        Q.profileShaderGetUniform++,
                        (Q.profileShaderGetUniformName = this._name)),
                    this._shader
                        .getCgl()
                        .gl.uniform3f(
                            this._loc,
                            this._value[0],
                            this._value[1],
                            this._value[2]
                        ),
                    (this.needsUpdate = !1),
                    Q.profileUniformCount++);
            }),
            (et.prototype.setValue3F = function(t) {
                t &&
                    (this._oldValue
                        ? (t[0] == this._oldValue[0] &&
                              t[1] == this._oldValue[1] &&
                              t[2] == this._oldValue[2]) ||
                          ((this._oldValue[0] = t[0]),
                          (this._oldValue[1] = t[1]),
                          (this._oldValue[2] = t[2]),
                          (this.needsUpdate = !0))
                        : ((this._oldValue = [t[0] - 1, 1, 2]),
                          (this.needsUpdate = !0)),
                    (this._value = t));
            }),
            (et.prototype.updateValue2F = function() {
                this._value &&
                    (this._isValidLoc() ||
                        ((this._loc = this._shader
                            .getCgl()
                            .gl.getUniformLocation(
                                this._shader.getProgram(),
                                this._name
                            )),
                        Q.profileShaderGetUniform++,
                        (Q.profileShaderGetUniformName = this._name)),
                    this._shader
                        .getCgl()
                        .gl.uniform2f(
                            this._loc,
                            this._value[0],
                            this._value[1]
                        ),
                    (this.needsUpdate = !1),
                    Q.profileUniformCount++);
            }),
            (et.prototype.setValue2F = function(t) {
                t &&
                    (this._oldValue
                        ? (t[0] == this._oldValue[0] &&
                              t[1] == this._oldValue[1]) ||
                          ((this._oldValue[0] = t[0]),
                          (this._oldValue[1] = t[1]),
                          (this.needsUpdate = !0))
                        : ((this._oldValue = [t[0] - 1, 1]),
                          (this.needsUpdate = !0)),
                    (this._value = t));
            }),
            (et.prototype.updateValueT = function() {
                this._isValidLoc() ||
                    ((this._loc = this._shader
                        .getCgl()
                        .gl.getUniformLocation(
                            this._shader.getProgram(),
                            this._name
                        )),
                    Q.profileShaderGetUniform++,
                    (Q.profileShaderGetUniformName = this._name)),
                    Q.profileUniformCount++,
                    this._shader.getCgl().gl.uniform1i(this._loc, this._value),
                    (this.needsUpdate = !1);
            }),
            (et.prototype.setValueT = function(t) {
                (this.needsUpdate = !0), (this._value = t);
            }),
            (et.prototype.updateValue4F = function() {
                this._isValidLoc() ||
                    ((this._loc = this._shader
                        .getCgl()
                        .gl.getUniformLocation(
                            this._shader.getProgram(),
                            this._name
                        )),
                    Q.profileShaderGetUniform++,
                    (Q.profileShaderGetUniformName = this._name)),
                    (this.needsUpdate = !1),
                    this._shader
                        .getCgl()
                        .gl.uniform4f(
                            this._loc,
                            this._value[0],
                            this._value[1],
                            this._value[2],
                            this._value[3]
                        ),
                    Q.profileUniformCount++;
            }),
            (et.prototype.setValue4F = function(t) {
                (this.needsUpdate = !0), (this._value = t || vec4.create());
            }),
            (et.prototype.updateValueM4 = function() {
                this._isValidLoc() ||
                    ((this._loc = this._shader
                        .getCgl()
                        .gl.getUniformLocation(
                            this._shader.getProgram(),
                            this._name
                        )),
                    Q.profileShaderGetUniform++,
                    (Q.profileShaderGetUniformName = this._name)),
                    this._shader
                        .getCgl()
                        .gl.uniformMatrix4fv(this._loc, !1, this._value),
                    Q.profileUniformCount++;
            }),
            (et.prototype.setValueM4 = function(t) {
                (this.needsUpdate = !0), (this._value = t || mat4.create());
            });
        const it = 180 / Math.PI,
            st = {
                MATH: { DEG2RAD: Math.PI / 180, RAD2DEG: it },
                SHADER: {
                    SHADERVAR_VERTEX_POSITION: 'vPosition',
                    SHADERVAR_VERTEX_NUMBER: 'attrVertIndex',
                    SHADERVAR_VERTEX_NORMAL: 'attrVertNormal',
                    SHADERVAR_VERTEX_TEXCOORD: 'attrTexCoord',
                    SHADERVAR_INSTANCE_MMATRIX: 'instMat',
                    SHADERVAR_UNI_PROJMAT: 'projMatrix',
                    SHADERVAR_UNI_VIEWMAT: 'viewMatrix',
                    SHADERVAR_UNI_MODELMAT: 'modelMatrix',
                    SHADERVAR_UNI_NORMALMAT: 'normalMatrix',
                    SHADERVAR_UNI_INVVIEWMAT: 'inverseViewMatrix',
                    SHADERVAR_UNI_VIEWPOS: 'camPos',
                },
                BLEND_MODES: {
                    BLEND_NONE: 0,
                    BLEND_NORMAL: 1,
                    BLEND_ADD: 2,
                    BLEND_SUB: 3,
                    BLEND_MUL: 4,
                },
            };
        const rt = { lastMesh: null },
            nt = function(t, e, i) {
                (this._cgl = t),
                    (this._bufVertexAttrib = null),
                    (this._bufVerticesIndizes = this._cgl.gl.createBuffer()),
                    (this._attributes = []),
                    (this._attribLocs = {}),
                    (this._geom = null),
                    (this._lastShader = null),
                    (this._numInstances = 0),
                    (this._glPrimitive = i),
                    (this._preWireframeGeom = null),
                    (this.addVertexNumbers = !1),
                    (this.feedBackAttributes = []),
                    this.setGeom(e),
                    (this._feedBacks = []),
                    (this._feedBacksChanged = !1),
                    (this._transformFeedBackLoc = -1),
                    (this._lastAttrUpdate = 0),
                    Object.defineProperty(this, 'numInstances', {
                        get() {
                            return this._numInstances;
                        },
                        set(t) {
                            this.setNumInstances(t);
                        },
                    });
            };
        var ot;
        (nt.prototype.updateVertices = function(t) {
            this.setAttribute(
                st.SHADER.SHADERVAR_VERTEX_POSITION,
                t.vertices,
                3
            );
        }),
            (nt.prototype.setAttributePointer = function(t, e, i, s) {
                for (let r = 0; r < this._attributes.length; r++)
                    this._attributes[r].name == t &&
                        (this._attributes[r].pointer ||
                            (this._attributes[r].pointer = []),
                        this._attributes[r].pointer.push({
                            loc: -1,
                            name: e,
                            stride: i,
                            offset: s,
                            instanced:
                                t == st.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                        }));
            }),
            (nt.prototype.getAttribute = function(t) {
                for (let e = 0; e < this._attributes.length; e++)
                    if (this._attributes[e].name == t)
                        return this._attributes[e];
            }),
            (nt.prototype.setAttributeRange = function(t, e, i, s) {
                t &&
                    (i || s) &&
                    (this._cgl.gl.bindBuffer(
                        this._cgl.gl.ARRAY_BUFFER,
                        t.buffer
                    ),
                    (Q.profileMeshAttributes += s - i || 0),
                    this._cgl.gl.bufferSubData(
                        this._cgl.gl.ARRAY_BUFFER,
                        4 * i,
                        e,
                        i,
                        s - i
                    ));
            }),
            (nt.prototype._bufferArray = function(t, e) {
                let i = null;
                t &&
                    (this._cgl.debugOneFrame &&
                        console.log('_bufferArray', t.length, e.name),
                    t instanceof Float32Array
                        ? (i = t)
                        : e && e.floatArray && e.floatArray.length == t.length
                        ? (e.floatArray.set(t), (i = e.floatArray))
                        : ((i = new Float32Array(t)),
                          this._cgl.debugOneFrame &&
                              console.log(
                                  '_bufferArray create new float32array',
                                  t.length,
                                  e.name
                              ),
                          Q.profileNonTypedAttrib++,
                          (Q.profileNonTypedAttribNames =
                              this._geom.name + ' ' + e.name)),
                    e && i && (e.floatArray = i),
                    this._cgl.gl.bufferData(
                        this._cgl.gl.ARRAY_BUFFER,
                        i,
                        this._cgl.gl.DYNAMIC_DRAW
                    ));
            }),
            (nt.prototype.addAttribute = nt.prototype.updateAttribute = nt.prototype.setAttribute = function(
                t,
                e,
                i,
                s
            ) {
                let r = null,
                    n = !1,
                    o = 0;
                const h = e.length / i;
                for (
                    Q.profileMeshAttributes += h || 0,
                        0 === h &&
                            console.warn(
                                'CGL_MESH: ' +
                                    this._geom.name +
                                    ' num items in attribute ' +
                                    t +
                                    ' is ZERO'
                            ),
                        'function' == typeof s && (r = s),
                        'object' == typeof s &&
                            (s.cb && (r = s.cb),
                            s.instanced && (n = s.instanced)),
                        t == st.SHADER.SHADERVAR_INSTANCE_MMATRIX && (n = !0),
                        o = 0;
                    o < this._attributes.length;
                    o++
                )
                    if (this._attributes[o].name == t)
                        return (
                            (this._attributes[o].numItems = h),
                            this._cgl.gl.bindBuffer(
                                this._cgl.gl.ARRAY_BUFFER,
                                this._attributes[o].buffer
                            ),
                            this._bufferArray(e, this._attributes[o]),
                            this._attributes[o]
                        );
                const a = this._cgl.gl.createBuffer();
                this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, a);
                let l = this._cgl.gl.FLOAT;
                s && s.type && (l = s.type);
                const u = {
                    buffer: a,
                    name: t,
                    cb: r,
                    itemSize: i,
                    numItems: h,
                    startItem: 0,
                    instanced: n,
                    type: l,
                };
                return (
                    this._bufferArray(e, u),
                    t == st.SHADER.SHADERVAR_VERTEX_POSITION &&
                        (this._bufVertexAttrib = u),
                    this._attributes.push(u),
                    (this._attribLocs = {}),
                    u
                );
            }),
            (nt.prototype.getAttributes = function() {
                return this._attributes;
            }),
            (nt.prototype.updateTexCoords = function(t) {
                if (t.texCoords && t.texCoords.length > 0)
                    this.setAttribute(
                        st.SHADER.SHADERVAR_VERTEX_TEXCOORD,
                        t.texCoords,
                        2
                    );
                else {
                    const e = new Float32Array(
                        Math.round((t.vertices.length / 3) * 2)
                    );
                    this.setAttribute(
                        st.SHADER.SHADERVAR_VERTEX_TEXCOORD,
                        e,
                        2
                    );
                }
            }),
            (nt.prototype.updateNormals = function(t) {
                if (t.vertexNormals && t.vertexNormals.length > 0)
                    this.setAttribute('attrVertNormal', t.vertexNormals, 3);
                else {
                    const e = new Float32Array(Math.round(t.vertices.length));
                    this.setAttribute('attrVertNormal', e, 3);
                }
            }),
            (nt.prototype._setVertexNumbers = function() {
                const t = this._geom.vertices.length / 3;
                if (
                    !this._verticesNumbers ||
                    this._verticesNumbers.length != t
                ) {
                    this._verticesNumbers = new Float32Array(t);
                    for (let e = 0; e < t; e++) this._verticesNumbers[e] = e;
                    this.setAttribute(
                        st.SHADER.SHADERVAR_VERTEX_NUMBER,
                        this._verticesNumbers,
                        1,
                        (e, i, s) => {
                            s.uniformNumVertices ||
                                (s.uniformNumVertices = new et(
                                    s,
                                    'f',
                                    'numVertices',
                                    t
                                )),
                                s.uniformNumVertices.setValue(t);
                        }
                    );
                }
            }),
            (nt.prototype.setVertexIndices = function(t) {
                if (this._bufVerticesIndizes)
                    if (t.length > 0) {
                        for (let e = 0; e < t.length; e++)
                            if (t[e] >= this._geom.vertices.length / 3)
                                return void console.warn(
                                    'invalid index in ' + this._geom.name
                                );
                        this._cgl.gl.bindBuffer(
                            this._cgl.gl.ELEMENT_ARRAY_BUFFER,
                            this._bufVerticesIndizes
                        ),
                            t instanceof Uint16Array
                                ? (this.vertIndicesTyped = t)
                                : (this.vertIndicesTyped = new Uint16Array(t)),
                            this._cgl.gl.bufferData(
                                this._cgl.gl.ELEMENT_ARRAY_BUFFER,
                                this.vertIndicesTyped,
                                this._cgl.gl.DYNAMIC_DRAW
                            ),
                            (this._bufVerticesIndizes.itemSize = 1),
                            (this._bufVerticesIndizes.numItems = t.length);
                    } else this._bufVerticesIndizes.numItems = 0;
                else d.warn('no bufVerticesIndizes');
            }),
            (nt.prototype.setGeom = function(t) {
                (this._geom = t),
                    null != t.glPrimitive &&
                        (this._glPrimitive = t.glPrimitive),
                    (rt.lastMesh = null),
                    Q.profileMeshSetGeom++,
                    this._disposeAttributes(),
                    this.updateVertices(this._geom),
                    this.setVertexIndices(this._geom.verticesIndices),
                    this.updateTexCoords(this._geom),
                    this.updateNormals(this._geom),
                    this._geom.hasOwnProperty('tangents') &&
                        this._geom.tangents &&
                        this._geom.tangents.length > 0 &&
                        this.setAttribute(
                            'attrTangent',
                            this._geom.tangents,
                            3
                        ),
                    this._geom.hasOwnProperty('biTangents') &&
                        this._geom.biTangents &&
                        this._geom.biTangents.length > 0 &&
                        this.setAttribute(
                            'attrBiTangent',
                            this._geom.biTangents,
                            3
                        ),
                    this._geom.vertexColors.length > 0 &&
                        (this._geom.vertexColors.flat &&
                            this._geom.vertexColors.flat(100),
                        this.setAttribute(
                            'attrVertColor',
                            this._geom.vertexColors,
                            4
                        )),
                    this.addVertexNumbers && this._setVertexNumbers();
                const e = this._geom.getAttributes();
                for (const t in e)
                    this.setAttribute(t, e[t].data, e[t].itemSize);
            }),
            (nt.prototype._preBind = function(t) {
                for (let e = 0; e < this._attributes.length; e++)
                    this._attributes[e].cb &&
                        this._attributes[e].cb(
                            this._attributes[e],
                            this._geom,
                            t
                        );
            }),
            (nt.prototype._checkAttrLengths = function() {
                for (let t = 0; t < this._attributes.length; t++)
                    this._attributes[0].floatArray.length,
                        this._attributes[0].itemSize,
                        this._attributes[t].floatArray.length,
                        this._attributes[t].itemSize;
            }),
            (nt.prototype._bind = function(t) {
                if (!t.isValid()) return;
                t != this._lastShader && this.unBind();
                let e = [];
                this._attribLocs[t.id]
                    ? (e = this._attribLocs[t.id])
                    : (this._attribLocs[t.id] = e),
                    (this._lastShader = t);
                let i = 0;
                if (
                    t.lastCompile > this._lastAttrUpdate ||
                    e.length != this._attributes.length
                ) {
                    for (
                        this._lastAttrUpdate = t.lastCompile, i = 0;
                        i < this._attributes.length;
                        i++
                    )
                        e[i] = -1;
                    this._checkAttrLengths();
                }
                for (i = 0; i < this._attributes.length; i++) {
                    const s = this._attributes[i];
                    if (
                        (-1 == e[i] &&
                            s._attrLocationLastShaderTime != t.lastCompile &&
                            ((s._attrLocationLastShaderTime = t.lastCompile),
                            (e[i] = this._cgl.glGetAttribLocation(
                                t.getProgram(),
                                s.name
                            )),
                            Q.profileAttrLoc++),
                        -1 != e[i])
                    )
                        if (
                            (this._cgl.gl.enableVertexAttribArray(e[i]),
                            this._cgl.gl.bindBuffer(
                                this._cgl.gl.ARRAY_BUFFER,
                                s.buffer
                            ),
                            s.instanced)
                        )
                            if (s.itemSize <= 4)
                                (s.itemSize && 0 != s.itemSize) ||
                                    d.log(
                                        'instanced attrib itemsize error',
                                        this._geom.name,
                                        s
                                    ),
                                    this._cgl.gl.vertexAttribPointer(
                                        e[i],
                                        s.itemSize,
                                        s.type,
                                        !1,
                                        4 * s.itemSize,
                                        0
                                    ),
                                    this._cgl.gl.vertexAttribDivisor(e[i], 1);
                            else if (16 == s.itemSize) {
                                const t = 64;
                                this._cgl.gl.vertexAttribPointer(
                                    e[i],
                                    4,
                                    s.type,
                                    !1,
                                    t,
                                    0
                                ),
                                    this._cgl.gl.enableVertexAttribArray(
                                        e[i] + 1
                                    ),
                                    this._cgl.gl.vertexAttribPointer(
                                        e[i] + 1,
                                        4,
                                        s.type,
                                        !1,
                                        t,
                                        16
                                    ),
                                    this._cgl.gl.enableVertexAttribArray(
                                        e[i] + 2
                                    ),
                                    this._cgl.gl.vertexAttribPointer(
                                        e[i] + 2,
                                        4,
                                        s.type,
                                        !1,
                                        t,
                                        32
                                    ),
                                    this._cgl.gl.enableVertexAttribArray(
                                        e[i] + 3
                                    ),
                                    this._cgl.gl.vertexAttribPointer(
                                        e[i] + 3,
                                        4,
                                        s.type,
                                        !1,
                                        t,
                                        48
                                    ),
                                    this._cgl.gl.vertexAttribDivisor(e[i], 1),
                                    this._cgl.gl.vertexAttribDivisor(
                                        e[i] + 1,
                                        1
                                    ),
                                    this._cgl.gl.vertexAttribDivisor(
                                        e[i] + 2,
                                        1
                                    ),
                                    this._cgl.gl.vertexAttribDivisor(
                                        e[i] + 3,
                                        1
                                    );
                            } else
                                d.log('unknown instance attrib size', s.name);
                        else {
                            if (
                                ((s.itemSize && 0 != s.itemSize) ||
                                    d.log(
                                        'attrib itemsize error',
                                        this._geom.name,
                                        s
                                    ),
                                this._cgl.gl.vertexAttribPointer(
                                    e[i],
                                    s.itemSize,
                                    s.type,
                                    !1,
                                    4 * s.itemSize,
                                    0
                                ),
                                s.pointer)
                            )
                                for (let e = 0; e < s.pointer.length; e++) {
                                    const i = s.pointer[e];
                                    -1 == i.loc &&
                                        (i.loc = this._cgl.glGetAttribLocation(
                                            t.getProgram(),
                                            i.name
                                        )),
                                        Q.profileAttrLoc++,
                                        this._cgl.gl.enableVertexAttribArray(
                                            i.loc
                                        ),
                                        this._cgl.gl.vertexAttribPointer(
                                            i.loc,
                                            s.itemSize,
                                            s.type,
                                            !1,
                                            i.stride,
                                            i.offset
                                        );
                                }
                            this.bindFeedback(s);
                        }
                }
                0 !== this._bufVerticesIndizes.numItems &&
                    this._cgl.gl.bindBuffer(
                        this._cgl.gl.ELEMENT_ARRAY_BUFFER,
                        this._bufVerticesIndizes
                    );
            }),
            (nt.prototype.unBind = function() {
                const t = this._lastShader;
                if (((this._lastShader = null), !t)) return;
                let e = [];
                this._attribLocs[t.id]
                    ? (e = this._attribLocs[t.id])
                    : (this._attribLocs[t.id] = e),
                    (rt.lastMesh = null);
                for (let t = 0; t < this._attributes.length; t++)
                    this._attributes[t].instanced &&
                        (this._attributes[t].itemSize <= 4
                            ? (-1 != e[t] &&
                                  this._cgl.gl.vertexAttribDivisor(e[t], 0),
                              e[t] >= 0 &&
                                  this._cgl.gl.disableVertexAttribArray(e[t]))
                            : (this._cgl.gl.vertexAttribDivisor(e[t], 0),
                              this._cgl.gl.vertexAttribDivisor(e[t] + 1, 0),
                              this._cgl.gl.vertexAttribDivisor(e[t] + 2, 0),
                              this._cgl.gl.vertexAttribDivisor(e[t] + 3, 0),
                              this._cgl.gl.disableVertexAttribArray(e[t] + 1),
                              this._cgl.gl.disableVertexAttribArray(e[t] + 2),
                              this._cgl.gl.disableVertexAttribArray(e[t] + 3))),
                        -1 != e[t] &&
                            this._cgl.gl.disableVertexAttribArray(e[t]);
            }),
            (nt.prototype.meshChanged = function() {
                return this._cgl.lastMesh && this._cgl.lastMesh != this;
            }),
            (nt.prototype.printDebug = function(t) {
                d.log('--attributes');
                for (let t = 0; t < this._attributes.length; t++)
                    d.log('attribute ' + t + ' ' + this._attributes[t].name);
            }),
            (nt.prototype.setNumVertices = function(t) {
                this._bufVertexAttrib.numItems = t;
            }),
            (nt.prototype.render = function(t) {
                if (!t || !t.isValid()) return;
                t.wireframe ||
                    this._geom.isIndexed() ||
                    !this._preWireframeGeom ||
                    this.setGeom(this._preWireframeGeom),
                    t.wireframe &&
                        this._geom.isIndexed() &&
                        ((this._preWireframeGeom = this._geom),
                        (this._geom = this._geom.copy()),
                        this._geom.unIndex(),
                        this._geom.calcBarycentric(),
                        this.setGeom(this._geom),
                        this.setAttribute(
                            'attrBarycentric',
                            this._geom.barycentrics,
                            3
                        ));
                let e = !1;
                rt.lastMesh != this &&
                    (rt.lastMesh && rt.lastMesh.unBind(), (e = !0)),
                    e && this._preBind(t),
                    t.bind(),
                    t.bindTextures && t.bindTextures(),
                    this._bind(t),
                    this.addVertexNumbers && this._setVertexNumbers(),
                    (rt.lastMesh = this);
                let i = this._cgl.gl.TRIANGLES;
                void 0 !== this._glPrimitive && (i = this._glPrimitive),
                    null !== t.glPrimitive && (i = t.glPrimitive);
                let s = 1;
                this.hasFeedbacks()
                    ? this.drawFeedbacks(t, i)
                    : 0 === this._bufVerticesIndizes.numItems
                    ? (i == this._cgl.gl.TRIANGLES && (s = 3),
                      0 === this._numInstances
                          ? this._cgl.gl.drawArrays(
                                i,
                                this._bufVertexAttrib.startItem,
                                this._bufVertexAttrib.numItems -
                                    this._bufVertexAttrib.startItem
                            )
                          : this._cgl.gl.drawArraysInstanced(
                                i,
                                this._bufVertexAttrib.startItem,
                                this._bufVertexAttrib.numItems,
                                this._numInstances
                            ))
                    : 0 === this._numInstances
                    ? this._cgl.gl.drawElements(
                          i,
                          this._bufVerticesIndizes.numItems,
                          this._cgl.gl.UNSIGNED_SHORT,
                          0
                      )
                    : this._cgl.gl.drawElementsInstanced(
                          i,
                          this._bufVerticesIndizes.numItems,
                          this._cgl.gl.UNSIGNED_SHORT,
                          0,
                          this._numInstances
                      ),
                    (Q.profileMeshNumElements +=
                        (this._bufVertexAttrib.numItems / s) *
                        (this._numInstances || 1)),
                    Q.profileMeshDraw++;
            }),
            (nt.prototype.setNumInstances = function(t) {
                if (((t = Math.max(0, t)), this._numInstances != t)) {
                    this._numInstances = t;
                    const e = new Float32Array(t);
                    for (let i = 0; i < t; i++) e[i] = i;
                    this.setAttribute('instanceIndex', e, 1, { instanced: !0 });
                }
            }),
            (nt.prototype._disposeAttributes = function() {
                if (this._attributes) {
                    for (let t = 0; t < this._attributes.length; t++)
                        this._attributes[t].buffer &&
                            (this._cgl.gl.deleteBuffer(
                                this._attributes[t].buffer
                            ),
                            (this._attributes[t].buffer = null));
                    this._attributes.length = 0;
                }
            }),
            (nt.prototype.dispose = function() {
                this._bufVertexAttrib &&
                    this._bufVertexAttrib.buffer &&
                    this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),
                    this._bufVerticesIndizes &&
                        this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),
                    this._disposeAttributes();
            }),
            ((ot = nt).prototype.hasFeedbacks = function() {
                return this._feedBacks.length > 0;
            }),
            (ot.prototype.removeFeedbacks = function(t) {
                this._feedbacks &&
                    ((this._feedbacks.length = 0),
                    (this._feedBacksChanged = !0));
            }),
            (ot.prototype.setAttributeFeedback = function() {}),
            (ot.prototype.setFeedback = function(t, e, i) {
                let s = { nameOut: e },
                    r = !1;
                this.unBindFeedbacks();
                for (let t = 0; t < this._feedBacks.length; t++)
                    this._feedBacks[t].nameOut == e &&
                        ((s = this._feedBacks[t]), (r = !0));
                return (
                    r || (this._feedBacksChanged = !0),
                    (s.initialArr = i),
                    (s.attrib = t),
                    s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer),
                    (s.outBuffer = this._cgl.gl.createBuffer()),
                    this._cgl.gl.bindBuffer(
                        this._cgl.gl.ARRAY_BUFFER,
                        s.outBuffer
                    ),
                    this._cgl.gl.bufferData(
                        this._cgl.gl.ARRAY_BUFFER,
                        s.initialArr,
                        this._cgl.gl.STATIC_DRAW
                    ),
                    this._cgl.gl.bindBuffer(
                        this._cgl.gl.ARRAY_BUFFER,
                        s.attrib.buffer
                    ),
                    this._cgl.gl.bufferData(
                        this._cgl.gl.ARRAY_BUFFER,
                        s.initialArr,
                        this._cgl.gl.STATIC_DRAW
                    ),
                    r || this._feedBacks.push(s),
                    s
                );
            }),
            (ot.prototype.bindFeedback = function(t) {
                if (!this._feedBacks || 0 === this._feedBacks.length) return;
                -1 == this._transformFeedBackLoc &&
                    (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()),
                    this._cgl.gl.bindTransformFeedback(
                        this._cgl.gl.TRANSFORM_FEEDBACK,
                        this._transformFeedBackLoc
                    );
                let e = !1;
                for (let i = 0; i < this._feedBacks.length; i++) {
                    const s = this._feedBacks[i];
                    s.attrib == t &&
                        ((e = !0),
                        this._cgl.gl.bindBufferBase(
                            this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,
                            i,
                            s.outBuffer
                        ));
                }
            }),
            (ot.prototype.drawFeedbacks = function(t, e) {
                let i = 0;
                if (this._feedBacksChanged) {
                    const e = [];
                    for (
                        this._cgl.gl.bindTransformFeedback(
                            this._cgl.gl.TRANSFORM_FEEDBACK,
                            this._transformFeedBackLoc
                        ),
                            i = 0;
                        i < this._feedBacks.length;
                        i++
                    )
                        e.push(this._feedBacks[i].nameOut);
                    return (
                        t.setFeedbackNames(e),
                        d.log('feedbacknames', e),
                        t.compile(),
                        (this._feedBacksChanged = !1),
                        this._cgl.gl.bindTransformFeedback(
                            this._cgl.gl.TRANSFORM_FEEDBACK,
                            null
                        ),
                        void d.log('changed finished')
                    );
                }
                this._cgl.gl.beginTransformFeedback(this.glPrimitive),
                    this._cgl.gl.drawArrays(
                        e,
                        0,
                        this._feedBacks[0].attrib.numItems
                    ),
                    this._cgl.gl.endTransformFeedback(),
                    this.unBindFeedbacks(),
                    this.feedBacksSwapBuffers();
            }),
            (ot.prototype.unBindFeedbacks = function() {
                for (let t = 0; t < this._feedBacks.length; t++)
                    this._cgl.gl.bindBufferBase(
                        this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,
                        t,
                        null
                    );
                this._cgl.gl.bindTransformFeedback(
                    this._cgl.gl.TRANSFORM_FEEDBACK,
                    null
                );
            }),
            (ot.prototype.feedBacksSwapBuffers = function() {
                for (let t = 0; t < this._feedBacks.length; t++) {
                    const e = this._feedBacks[t].attrib.buffer;
                    (this._feedBacks[t].attrib.buffer = this._feedBacks[
                        t
                    ].outBuffer),
                        (this._feedBacks[t].outBuffer = e);
                }
            });
        const ht = {
                getSimpleRect: function(t, e) {
                    const i = new tt(e);
                    return (
                        (i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]),
                        (i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0]),
                        (i.verticesIndices = [0, 1, 2, 2, 1, 3]),
                        (i.vertexNormals = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                        ]),
                        new nt(t, i)
                    );
                },
            },
            at = function(t, e) {
                (this._cgl = t),
                    t.TextureEffectMesh || this.createMesh(),
                    (this._textureSource = null),
                    (this._options = e),
                    (this._textureTarget = null),
                    (this._frameBuf = this._cgl.gl.createFramebuffer()),
                    (this._frameBuf2 = this._cgl.gl.createFramebuffer()),
                    (this._renderbuffer = this._cgl.gl.createRenderbuffer()),
                    (this._renderbuffer2 = this._cgl.gl.createRenderbuffer()),
                    (this.switched = !1),
                    (this.depth = !1);
            };
        (at.prototype.setSourceTexture = function(t) {
            t.textureType == J.TYPE_FLOAT &&
                this._cgl.gl.getExtension('EXT_color_buffer_float'),
                null === t
                    ? ((this._textureSource = new J(this._cgl)),
                      this._textureSource.setSize(16, 16))
                    : (this._textureSource = t),
                this._textureSource.compareSettings(this._textureTarget) ||
                    (this._textureTarget && this._textureTarget.delete(),
                    (this._textureTarget = this._textureSource.clone()),
                    Q.profileEffectBuffercreate++,
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._frameBuf
                    ),
                    this._cgl.gl.bindRenderbuffer(
                        this._cgl.gl.RENDERBUFFER,
                        this._renderbuffer
                    ),
                    this.depth &&
                        this._cgl.gl.renderbufferStorage(
                            this._cgl.gl.RENDERBUFFER,
                            this._cgl.gl.DEPTH_COMPONENT16,
                            this._textureSource.width,
                            this._textureSource.height
                        ),
                    this._cgl.gl.framebufferTexture2D(
                        this._cgl.gl.FRAMEBUFFER,
                        this._cgl.gl.COLOR_ATTACHMENT0,
                        this._cgl.gl.TEXTURE_2D,
                        this._textureTarget.tex,
                        0
                    ),
                    this.depth &&
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.RENDERBUFFER,
                            this._renderbuffer
                        ),
                    this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
                    this._cgl.gl.bindRenderbuffer(
                        this._cgl.gl.RENDERBUFFER,
                        null
                    ),
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        null
                    ),
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        this._frameBuf2
                    ),
                    this._cgl.gl.bindRenderbuffer(
                        this._cgl.gl.RENDERBUFFER,
                        this._renderbuffer2
                    ),
                    this.depth &&
                        this._cgl.gl.renderbufferStorage(
                            this._cgl.gl.RENDERBUFFER,
                            this._cgl.gl.DEPTH_COMPONENT16,
                            this._textureSource.width,
                            this._textureSource.height
                        ),
                    this._cgl.gl.framebufferTexture2D(
                        this._cgl.gl.FRAMEBUFFER,
                        this._cgl.gl.COLOR_ATTACHMENT0,
                        this._cgl.gl.TEXTURE_2D,
                        this._textureSource.tex,
                        0
                    ),
                    this.depth &&
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.RENDERBUFFER,
                            this._renderbuffer2
                        ),
                    this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
                    this._cgl.gl.bindRenderbuffer(
                        this._cgl.gl.RENDERBUFFER,
                        null
                    ),
                    this._cgl.gl.bindFramebuffer(
                        this._cgl.gl.FRAMEBUFFER,
                        null
                    ));
        }),
            (at.prototype.startEffect = function() {
                this._textureTarget
                    ? ((this.switched = !1),
                      this._cgl.pushDepthTest(!1),
                      this._cgl.pushModelMatrix(),
                      this._cgl.pushPMatrix(),
                      this._cgl.gl.viewport(
                          0,
                          0,
                          this.getCurrentTargetTexture().width,
                          this.getCurrentTargetTexture().height
                      ),
                      mat4.perspective(
                          this._cgl.pMatrix,
                          45,
                          this.getCurrentTargetTexture().width /
                              this.getCurrentTargetTexture().height,
                          0.1,
                          1100
                      ),
                      this._cgl.pushPMatrix(),
                      mat4.identity(this._cgl.pMatrix),
                      this._cgl.pushViewMatrix(),
                      mat4.identity(this._cgl.vMatrix),
                      this._cgl.pushModelMatrix(),
                      mat4.identity(this._cgl.mvMatrix))
                    : d.log('effect has no target');
            }),
            (at.prototype.endEffect = function() {
                this._cgl.popDepthTest(!1),
                    this._cgl.popModelMatrix(),
                    this._cgl.popPMatrix(),
                    this._cgl.popModelMatrix(),
                    this._cgl.popViewMatrix(),
                    this._cgl.popPMatrix(),
                    this._cgl.resetViewPort();
            }),
            (at.prototype.bind = function() {
                null !== this._textureSource
                    ? this.switched
                        ? (this._cgl.gl.bindFramebuffer(
                              this._cgl.gl.FRAMEBUFFER,
                              this._frameBuf2
                          ),
                          this._cgl.pushGlFrameBuffer(this._frameBuf2))
                        : (this._cgl.gl.bindFramebuffer(
                              this._cgl.gl.FRAMEBUFFER,
                              this._frameBuf
                          ),
                          this._cgl.pushGlFrameBuffer(this._frameBuf))
                    : d.log('no base texture set!');
            }),
            (at.prototype.finish = function() {
                null !== this._textureSource
                    ? (this._cgl.TextureEffectMesh.render(
                          this._cgl.getShader()
                      ),
                      this._cgl.gl.bindFramebuffer(
                          this._cgl.gl.FRAMEBUFFER,
                          this._cgl.popGlFrameBuffer()
                      ),
                      Q.profileTextureEffect++,
                      this._textureTarget.filter == J.FILTER_MIPMAP &&
                          (this.switched
                              ? (this._cgl.gl.bindTexture(
                                    this._cgl.gl.TEXTURE_2D,
                                    this._textureSource.tex
                                ),
                                this._textureSource.updateMipMap())
                              : (this._cgl.gl.bindTexture(
                                    this._cgl.gl.TEXTURE_2D,
                                    this._textureTarget.tex
                                ),
                                this._textureTarget.updateMipMap()),
                          this._cgl.gl.bindTexture(
                              this._cgl.gl.TEXTURE_2D,
                              null
                          )),
                      (this.switched = !this.switched))
                    : d.log('no base texture set!');
            }),
            (at.prototype.getCurrentTargetTexture = function() {
                return this.switched
                    ? this._textureSource
                    : this._textureTarget;
            }),
            (at.prototype.getCurrentSourceTexture = function() {
                return this.switched
                    ? this._textureTarget
                    : this._textureSource;
            }),
            (at.prototype.delete = function() {
                this._textureTarget && this._textureTarget.delete(),
                    this._textureSource && this._textureSource.delete(),
                    this._cgl.gl.deleteRenderbuffer(this._renderbuffer),
                    this._cgl.gl.deleteFramebuffer(this._frameBuf);
            }),
            (at.prototype.createMesh = function() {
                this._cgl.TextureEffectMesh = ht.getSimpleRect(
                    this._cgl,
                    'textureEffect rect'
                );
            }),
            (at.checkOpNotInTextureEffect = function(t) {
                return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect
                    ? (t.uiAttr({ error: null }), !0)
                    : !t.patch.cgl.currentTextureEffect ||
                          (t.patch.cgl.currentTextureEffect &&
                          !t.uiAttribs.error
                              ? (t.setUiError(
                                    'textureeffect',
                                    'This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.',
                                    0
                                ),
                                !1)
                              : !t.patch.cgl.currentTextureEffect);
            }),
            (at.checkOpInEffect = function(t) {
                return t.patch.cgl.currentTextureEffect && t.uiAttribs.error
                    ? (t.uiAttr({ error: null }), !0)
                    : !!t.patch.cgl.currentTextureEffect ||
                          (t.patch.cgl.currentTextureEffect || t.uiAttribs.error
                              ? !!t.patch.cgl.currentTextureEffect
                              : (t.setUiError(
                                    'texeffect',
                                    'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.',
                                    1
                                ),
                                !1));
            }),
            (at.getBlendCode = function() {
                return (
                    ''.endl() +
                    'vec3 _blend(vec3 base,vec3 blend)'.endl() +
                    '{'.endl() +
                    '   vec3 colNew=blend;'.endl() +
                    '   #ifdef BM_MULTIPLY'.endl() +
                    '       colNew=base*blend;'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_MULTIPLY_INV'.endl() +
                    '       colNew=base* vec3(1.0)-blend;'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_AVERAGE'.endl() +
                    '       colNew=((base + blend) / 2.0);'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_ADD'.endl() +
                    '       colNew=min(base + blend, vec3(1.0));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_SUBSTRACT'.endl() +
                    '       colNew=max(base + blend - vec3(1.0), vec3(0.0));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_DIFFERENCE'.endl() +
                    '       colNew=abs(base - blend);'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_NEGATION'.endl() +
                    '       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_EXCLUSION'.endl() +
                    '       colNew=(base + blend - 2.0 * base * blend);'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_LIGHTEN'.endl() +
                    '       colNew=max(blend, base);'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_DARKEN'.endl() +
                    '       colNew=min(blend, base);'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_OVERLAY'.endl() +
                    '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() +
                    '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_SCREEN'.endl() +
                    '      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))'.endl() +
                    '      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_SOFTLIGHT'.endl() +
                    '      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))'.endl() +
                    '      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_HARDLIGHT'.endl() +
                    '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() +
                    '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_COLORDODGE'.endl() +
                    '      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))'.endl() +
                    '      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));'.endl() +
                    '   #endif'.endl() +
                    '   #ifdef BM_COLORBURN'.endl() +
                    '      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))'.endl() +
                    '      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));'.endl() +
                    '   #endif'.endl() +
                    '   return colNew;'.endl() +
                    '}'.endl() +
                    'vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)'.endl() +
                    '{'.endl() +
                    '   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);'.endl() +
                    '   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);'.endl() +
                    '   return col;'.endl() +
                    '}'
                );
            }),
            (at.onChangeBlendSelect = function(t, e) {
                'normal' == e
                    ? t.define('BM_NORMAL')
                    : t.removeDefine('BM_NORMAL'),
                    'multiply' == e
                        ? t.define('BM_MULTIPLY')
                        : t.removeDefine('BM_MULTIPLY'),
                    'multiply invert' == e
                        ? t.define('BM_MULTIPLY_INV')
                        : t.removeDefine('BM_MULTIPLY_INV'),
                    'average' == e
                        ? t.define('BM_AVERAGE')
                        : t.removeDefine('BM_AVERAGE'),
                    'add' == e ? t.define('BM_ADD') : t.removeDefine('BM_ADD'),
                    'substract' == e
                        ? t.define('BM_SUBSTRACT')
                        : t.removeDefine('BM_SUBSTRACT'),
                    'difference' == e
                        ? t.define('BM_DIFFERENCE')
                        : t.removeDefine('BM_DIFFERENCE'),
                    'negation' == e
                        ? t.define('BM_NEGATION')
                        : t.removeDefine('BM_NEGATION'),
                    'exclusion' == e
                        ? t.define('BM_EXCLUSION')
                        : t.removeDefine('BM_EXCLUSION'),
                    'lighten' == e
                        ? t.define('BM_LIGHTEN')
                        : t.removeDefine('BM_LIGHTEN'),
                    'darken' == e
                        ? t.define('BM_DARKEN')
                        : t.removeDefine('BM_DARKEN'),
                    'overlay' == e
                        ? t.define('BM_OVERLAY')
                        : t.removeDefine('BM_OVERLAY'),
                    'screen' == e
                        ? t.define('BM_SCREEN')
                        : t.removeDefine('BM_SCREEN'),
                    'softlight' == e
                        ? t.define('BM_SOFTLIGHT')
                        : t.removeDefine('BM_SOFTLIGHT'),
                    'hardlight' == e
                        ? t.define('BM_HARDLIGHT')
                        : t.removeDefine('BM_HARDLIGHT'),
                    'color dodge' == e
                        ? t.define('BM_COLORDODGE')
                        : t.removeDefine('BM_COLORDODGE'),
                    'color burn' == e
                        ? t.define('BM_COLORBURN')
                        : t.removeDefine('BM_COLORBURN');
            }),
            (at.AddBlendSelect = function(t, e) {
                return t.inValueSelect(
                    e,
                    [
                        'normal',
                        'lighten',
                        'darken',
                        'multiply',
                        'multiply invert',
                        'average',
                        'add',
                        'substract',
                        'difference',
                        'negation',
                        'exclusion',
                        'overlay',
                        'screen',
                        'color dodge',
                        'color burn',
                        'softlight',
                        'hardlight',
                    ],
                    'normal'
                );
            }),
            (at.setupBlending = function(t, e, i, s) {
                t.setPortGroup('Blending', [i, s]),
                    (i.onChange = function() {
                        at.onChangeBlendSelect(e, i.get());
                        let s = i.get();
                        'normal' == s
                            ? (s = null)
                            : 'multiply' == s
                            ? (s = 'mul')
                            : 'multiply invert' == s
                            ? (s = 'mulinv')
                            : 'lighten' == s
                            ? (s = 'light')
                            : 'darken' == s
                            ? (s = 'darken')
                            : 'average' == s
                            ? (s = 'avg')
                            : 'substract' == s
                            ? (s = 'sub')
                            : 'difference' == s
                            ? (s = 'diff')
                            : 'negation' == s ||
                              'negation' == s ||
                              'negation' == s
                            ? (s = 'neg')
                            : 'exclusion' == s
                            ? (s = 'exc')
                            : 'overlay' == s
                            ? (s = 'ovl')
                            : 'color dodge' == s
                            ? (s = 'dodge')
                            : 'color burn' == s
                            ? (s = 'burn')
                            : 'softlight' == s
                            ? (s = 'soft')
                            : 'hardlight' == s && (s = 'hard'),
                            t.setUiAttrib({ extendTitle: s });
                    });
            });
        const lt = {
                'CGL.BLENDMODES': function() {
                    (this.name = 'blendmodes'),
                        (this.srcHeadFrag = at.getBlendCode());
                },
                'CGL.RANDOM_OLD': function() {
                    (this.name = 'randomNumber'),
                        (this.srcHeadFrag =
                            ''.endl() +
                            'float cgl_random(vec2 co)'.endl() +
                            '{'.endl() +
                            '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);'.endl() +
                            '}'.endl() +
                            'vec3 cgl_random3(vec2 co)'.endl() +
                            '{'.endl() +
                            '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() +
                            '}');
                },
                'CGL.RANDOM_LOW': function() {
                    (this.name = 'randomNumber'),
                        (this.srcHeadFrag =
                            ''.endl() +
                            'float cgl_random(vec2 co)'.endl() +
                            '{'.endl() +
                            '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);'.endl() +
                            '}'.endl() +
                            'vec3 cgl_random3(vec2 co)'.endl() +
                            '{'.endl() +
                            '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() +
                            '}');
                },
                'CGL.RANDOM_TEX': function() {
                    (this.name = 'randomNumbertex'),
                        (this.srcHeadFrag =
                            ''.endl() +
                            'UNI sampler2D CGLRNDTEX;'.endl() +
                            'float cgl_random(vec2 co)'.endl() +
                            '{'.endl() +
                            '    return texture(CGLRNDTEX,co*5711.0).r;'.endl() +
                            '}'.endl() +
                            'vec3 cgl_random3(vec2 co)'.endl() +
                            '{'.endl() +
                            '    return texture(CGLRNDTEX,co*5711.0).rgb;'.endl() +
                            '}'),
                        (this.initUniforms = function(t) {
                            return [new et(t, 't', 'CGLRNDTEX', 7)];
                        }),
                        (this.onBind = function(t, e) {
                            J.getRandomTexture(t),
                                t.setTexture(7, J.getRandomTexture(t).tex);
                        });
                },
            },
            ut = function() {
                return window.performance.now();
            },
            ct = function() {
                return ut();
            },
            pt = function() {
                (this._timeStart = ut()),
                    (this._timeOffset = 0),
                    (this._currentTime = 0),
                    (this._lastTime = 0),
                    (this._paused = !0),
                    (this._delay = 0),
                    (this._eventsPaused = !1),
                    (this.overwriteTime = -1),
                    (this.cbPlayPause = []),
                    (this.cbTimeChange = []);
            };
        (pt.prototype._getTime = function() {
            return (
                (this._lastTime = (ut() - this._timeStart) / 1e3),
                this._lastTime + this._timeOffset
            );
        }),
            (pt.prototype._eventPlayPause = function() {
                if (!this._eventsPaused)
                    for (const t in this.cbPlayPause) this.cbPlayPause[t]();
            }),
            (pt.prototype._eventTimeChange = function() {
                if (!this._eventsPaused)
                    for (const t in this.cbTimeChange) this.cbTimeChange[t]();
            }),
            (pt.prototype.setDelay = function(t) {
                (this._delay = t), this._eventTimeChange();
            }),
            (pt.prototype.isPlaying = function() {
                return !this._paused;
            }),
            (pt.prototype.update = function() {
                if (!this._paused)
                    return (
                        (this._currentTime = this._getTime()), this._currentTime
                    );
            }),
            (pt.prototype.getMillis = function() {
                return 1e3 * this.get();
            }),
            (pt.prototype.get = pt.prototype.getTime = function() {
                return this.overwriteTime >= 0
                    ? this.overwriteTime - this._delay
                    : this._currentTime - this._delay;
            }),
            (pt.prototype.togglePlay = function() {
                this._paused ? this.play() : this.pause();
            }),
            (pt.prototype.setTime = function(t) {
                t < 0 && (t = 0),
                    (this._timeStart = ut()),
                    (this._timeOffset = t),
                    (this._currentTime = t),
                    this._eventTimeChange();
            }),
            (pt.prototype.setOffset = function(t) {
                this._currentTime + t < 0
                    ? ((this._timeStart = ut()),
                      (this._timeOffset = 0),
                      (this._currentTime = 0))
                    : ((this._timeOffset += t),
                      (this._currentTime = this._lastTime + this._timeOffset)),
                    this._eventTimeChange();
            }),
            (pt.prototype.play = function() {
                (this._timeStart = ut()),
                    (this._paused = !1),
                    this._eventPlayPause();
            }),
            (pt.prototype.pause = function() {
                (this._timeOffset = this._currentTime),
                    (this._paused = !0),
                    this._eventPlayPause();
            }),
            (pt.prototype.pauseEvents = function(t) {
                this._eventsPaused = t;
            }),
            (pt.prototype.onPlayPause = function(t) {
                t && 'function' == typeof t && this.cbPlayPause.push(t);
            }),
            (pt.prototype.onTimeChange = function(t) {
                t && 'function' == typeof t && this.cbTimeChange.push(t);
            });
        const dt = Math.PI / 180,
            _t = (Math.PI, -1 != window.navigator.userAgent.indexOf('Windows')),
            ft = function(t) {
                let e;
                if (t.wheelDelta)
                    (e =
                        (t.wheelDelta % 120) - 0 == -0
                            ? t.wheelDelta / 120
                            : t.wheelDelta / 30),
                        (e *= -1.5),
                        _t && (e *= 2);
                else {
                    let i = t.deltaY;
                    t.shiftKey && (i = t.deltaX);
                    const s = i || t.detail;
                    (e = -(s % 3 ? 10 * s : s / 3)), (e *= -3);
                }
                return e > 20 && (e = 20), e < -20 && (e = -20), e;
            },
            gt = ft,
            mt = ft,
            Et = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
            },
            Tt = /[&<>"']/g,
            At = RegExp(Tt.source),
            bt = function(t, e) {
                if (!t) throw new Error('shader constructed without cgl ' + e);
                (this._cgl = t),
                    (this._name = e || 'unknown'),
                    (this.glslVersion = 0),
                    t.glVersion > 1 && (this.glslVersion = 300),
                    (this.id = x()),
                    (this._isValid = !0),
                    (this._program = null),
                    (this._uniforms = []),
                    (this._drawBuffers = [!0]),
                    (this._defines = []),
                    (this._needsRecompile = !0),
                    (this._projMatrixUniform = null),
                    (this._mvMatrixUniform = null),
                    (this._mMatrixUniform = null),
                    (this._vMatrixUniform = null),
                    (this._camPosUniform = null),
                    (this._normalMatrixUniform = null),
                    (this._inverseViewMatrixUniform = null),
                    (this._attrVertexPos = -1),
                    (this.precision = t.patch.config.glslPrecision || 'highp'),
                    (this._pMatrixState = -1),
                    (this._vMatrixState = -1),
                    (this._modGroupCount = 0),
                    (this._feedBackNames = []),
                    (this._attributes = []),
                    (this.glPrimitive = null),
                    (this.offScreenPass = !1),
                    (this._extensions = []),
                    (this.srcVert = this.getDefaultVertexShader()),
                    (this.srcFrag = this.getDefaultFragmentShader()),
                    (this.lastCompile = 0),
                    (this._moduleNames = []),
                    (this._modules = []),
                    (this._moduleNumId = 0),
                    (this._libs = []),
                    (this._structNames = []),
                    (this._structUniformNames = []),
                    (this._textureStackUni = []),
                    (this._textureStackTex = []),
                    (this._textureStackType = []),
                    (this._textureStackTexCgl = []),
                    (this._tempNormalMatrix = mat4.create()),
                    (this._tempCamPosMatrix = mat4.create()),
                    (this._tempInverseViewMatrix = mat4.create()),
                    this.setModules([
                        'MODULE_VERTEX_POSITION',
                        'MODULE_COLOR',
                        'MODULE_BEGIN_FRAG',
                    ]);
            };
        (bt.prototype.isValid = function() {
            return this._isValid;
        }),
            (bt.prototype.getCgl = function() {
                return this._cgl;
            }),
            (bt.prototype.getName = function() {
                return this._name;
            }),
            (bt.prototype.enableExtension = function(t) {
                this.setWhyCompile('enable extension ' + t),
                    (this._needsRecompile = !0),
                    this._extensions.push(t);
            }),
            (bt.prototype.getAttrVertexPos = function() {
                return this._attrVertexPos;
            }),
            (bt.prototype.hasTextureUniforms = function() {
                for (let t = 0; t < this._uniforms.length; t++)
                    if ('t' == this._uniforms[t].getType()) return !0;
                return !1;
            }),
            (bt.prototype.setWhyCompile = function(t) {}),
            (bt.prototype.copyUniformValues = function(t) {
                for (let e = 0; e < t._uniforms.length; e++)
                    this._uniforms[e] &&
                        this._uniforms[e].set(t._uniforms[e].getValue());
                this.popTextures();
                for (let e = 0; e < t._textureStackUni.length; e++)
                    (this._textureStackUni[e] = t._textureStackUni[e]),
                        (this._textureStackTex[e] = t._textureStackTex[e]),
                        (this._textureStackType[e] = t._textureStackType[e]),
                        (this._textureStackTexCgl[e] =
                            t._textureStackTexCgl[e]);
            }),
            (bt.prototype.copy = function() {
                const t = new bt(this._cgl, this._name + ' copy');
                t.setSource(this.srcVert, this.srcFrag),
                    (t._modules = JSON.parse(JSON.stringify(this._modules))),
                    (t._defines = JSON.parse(JSON.stringify(this._defines))),
                    (t._modGroupCount = this._modGroupCount),
                    (t._moduleNames = this._moduleNames),
                    (t.glPrimitive = this.glPrimitive),
                    (t.offScreenPass = this.offScreenPass),
                    (t._extensions = this._extensions);
                for (let e = 0; e < this._uniforms.length; e++) {
                    this._uniforms[e].copy(t).resetLoc();
                }
                return (t._needsRecompile = !0), t;
            }),
            (bt.prototype.setSource = function(t, e) {
                (this.srcVert = t),
                    (this.srcFrag = e),
                    this.setWhyCompile('Source changed'),
                    (this._needsRecompile = !0);
            }),
            (bt.prototype._addLibs = function(t) {
                for (const e in lt)
                    if (t.indexOf(e) > -1) {
                        const i = new lt[e]();
                        (t = t.replace('{{' + e + '}}', i.srcHeadFrag)),
                            this._libs.push(i),
                            i.initUniforms && i.initUniforms(this);
                    }
                return t;
            }),
            (bt.prototype.createStructUniforms = function() {
                let t = '',
                    e = '';
                (this._structNames = []),
                    (this._injectedStringsFrag = {}),
                    (this._injectedStringsVert = {}),
                    (this._structUniformNamesIndicesFrag = []),
                    (this._structUniformNamesIndicesVert = []);
                for (let i = 0; i < this._uniforms.length; i++)
                    if (this._uniforms[i].isStructMember()) {
                        const s =
                            '{{INJECTION_POINT_STRUCT_' +
                            this._uniforms[i]._structName +
                            '}}';
                        if (
                            -1 ===
                            this._structNames.indexOf(
                                this._uniforms[i]._structName
                            )
                        ) {
                            const r =
                                'struct ' +
                                this._uniforms[i]._structName +
                                ' {'.endl() +
                                s +
                                '};'.endl().endl();
                            ('both' !== this._uniforms[i].getShaderType() &&
                                'frag' !== this._uniforms[i].getShaderType()) ||
                                (t = t.concat(r)),
                                ('both' !== this._uniforms[i].getShaderType() &&
                                    'vert' !==
                                        this._uniforms[i].getShaderType()) ||
                                    (e = e.concat(r)),
                                this._structNames.push(
                                    this._uniforms[i]._structName
                                ),
                                (this._injectedStringsFrag[
                                    this._uniforms[i]._structName
                                ] = []),
                                (this._injectedStringsVert[
                                    this._uniforms[i]._structName
                                ] = []);
                        }
                        let r = '';
                        this._uniforms[i].comment &&
                            (r = ' // ' + this._uniforms[i].comment);
                        let n = '';
                        if (
                            (null == this._uniforms[i].getGlslTypeString() &&
                                (n += '//'),
                            (n +=
                                '  ' +
                                this._uniforms[i].getGlslTypeString() +
                                ' ' +
                                this._uniforms[i]._propertyName +
                                ';' +
                                r),
                            'both' === this._uniforms[i].getShaderType())
                        ) {
                            if (
                                -1 ===
                                    this._injectedStringsFrag[
                                        this._uniforms[i]._structName
                                    ].indexOf(n) &&
                                -1 ===
                                    this._injectedStringsVert[
                                        this._uniforms[i]._structName
                                    ].indexOf(n)
                            ) {
                                const r = t.lastIndexOf(s),
                                    o = e.lastIndexOf(s);
                                (t = t.slice(0, r) + n + t.slice(r - 1)),
                                    (e = e.slice(0, o) + n + e.slice(o - 1)),
                                    this._injectedStringsFrag[
                                        this._uniforms[i]._structName
                                    ].push(n),
                                    this._injectedStringsVert[
                                        this._uniforms[i]._structName
                                    ].push(n);
                            }
                            -1 ===
                                this._structUniformNamesIndicesFrag.indexOf(
                                    i
                                ) &&
                                this._structUniformNamesIndicesFrag.push(i),
                                -1 ===
                                    this._structUniformNamesIndicesVert.indexOf(
                                        i
                                    ) &&
                                    this._structUniformNamesIndicesVert.push(i);
                        } else if (
                            'frag' === this._uniforms[i].getShaderType()
                        ) {
                            if (
                                -1 ===
                                this._injectedStringsFrag[
                                    this._uniforms[i]._structName
                                ].indexOf(n)
                            ) {
                                const e = t.lastIndexOf(s);
                                (t = t.slice(0, e) + n + t.slice(e - 1)),
                                    this._injectedStringsFrag[
                                        this._uniforms[i]._structName
                                    ].push(n);
                            }
                            -1 ===
                                this._structUniformNamesIndicesFrag.indexOf(
                                    i
                                ) &&
                                this._structUniformNamesIndicesFrag.push(i);
                        } else if (
                            'vert' === this._uniforms[i].getShaderType()
                        ) {
                            if (
                                -1 ===
                                this._injectedStringsVert[
                                    this._uniforms[i]._structName
                                ].indexOf(n)
                            ) {
                                const t = e.lastIndexOf(s);
                                (e = e.slice(0, t) + n + e.slice(t - 1)),
                                    this._injectedStringsVert[
                                        this._uniforms[i]._structName
                                    ].push(n);
                            }
                            -1 ===
                                this._structUniformNamesIndicesVert.indexOf(
                                    i
                                ) &&
                                this._structUniformNamesIndicesVert.push(i);
                        }
                    }
                (this._uniDeclarationsFrag = []),
                    (this._uniDeclarationsVert = []);
                for (
                    let e = 0;
                    e < this._structUniformNamesIndicesFrag.length;
                    e += 1
                ) {
                    const i = this._structUniformNamesIndicesFrag[e],
                        s =
                            'UNI ' +
                            this._uniforms[i]._structName +
                            ' ' +
                            this._uniforms[i]._structUniformName +
                            ';'.endl();
                    if (-1 === this._uniDeclarationsFrag.indexOf(s)) {
                        const e =
                            '{{INJECTION_POINT_STRUCT_' +
                            this._uniforms[i]._structName +
                            '}}';
                        (t = t.replace(e, '')),
                            (t += s),
                            this._uniDeclarationsFrag.push(s);
                    }
                }
                for (
                    let t = 0;
                    t < this._structUniformNamesIndicesVert.length;
                    t += 1
                ) {
                    const i = this._structUniformNamesIndicesVert[t],
                        s =
                            'UNI ' +
                            this._uniforms[i]._structName +
                            ' ' +
                            this._uniforms[i]._structUniformName +
                            ';'.endl();
                    if (-1 === this._uniDeclarationsVert.indexOf(s)) {
                        const t =
                            '{{INJECTION_POINT_STRUCT_' +
                            this._uniforms[i]._structName +
                            '}}';
                        (e = e.replace(t, '')),
                            (e += s),
                            this._uniDeclarationsVert.push(s);
                    }
                }
                return [e, t];
            }),
            (bt.prototype.compile = function() {
                const t = performance.now();
                Q.profileShaderCompiles++,
                    (Q.profileShaderCompileName = this._name);
                let e = '';
                if (this._extensions)
                    for (let t = 0; t < this._extensions.length; t++)
                        e +=
                            '#extension ' +
                            this._extensions[t] +
                            ' : enable'.endl();
                let i = '';
                this._defines.length && (i = '\n// cgl generated'.endl());
                for (let t = 0; t < this._defines.length; t++)
                    i +=
                        '#define ' +
                        this._defines[t][0] +
                        ' ' +
                        this._defines[t][1] +
                        ''.endl();
                const s = this.createStructUniforms();
                if (this._uniforms) {
                    const t = this._uniforms.map(t => t._name),
                        e = [];
                    for (let i = 0; i < this._uniforms.length; i++) {
                        const s = this._uniforms[i];
                        t.indexOf(s._name, i + 1) > -1 && e.push(i);
                    }
                    for (let t = this._uniforms.length - 1; t >= 0; t -= 1)
                        e.indexOf(t) > -1
                            ? this._uniforms.splice(t, 1)
                            : this._uniforms[t].resetLoc();
                }
                this.hasTextureUniforms() &&
                    (i += '#define HAS_TEXTURES'.endl());
                let r = '',
                    n = '';
                if (
                    (this.srcFrag ||
                        (console.error('[cgl shader] has no fragment source!'),
                        (this.srcVert = this.getDefaultVertexShader()),
                        (this.srcFrag = this.getDefaultFragmentShader())),
                    300 == this.glslVersion)
                ) {
                    let t = '';
                    if (
                        (this.srcFrag.indexOf('outColor0') > -1 &&
                            (this._drawBuffers[0] = !0),
                        this.srcFrag.indexOf('outColor1') > -1 &&
                            (this._drawBuffers[1] = !0),
                        this.srcFrag.indexOf('outColor2') > -1 &&
                            (this._drawBuffers[2] = !0),
                        this.srcFrag.indexOf('outColor3') > -1 &&
                            (this._drawBuffers[3] = !0),
                        1 == this._drawBuffers.length)
                    )
                        (t = 'out vec4 outColor;'.endl()),
                            (t += '#define gl_FragColor outColor'.endl());
                    else {
                        let e = 0;
                        t += 'vec4 outColor;'.endl();
                        for (let i = 0; i < this._drawBuffers.length; i++)
                            0 == e &&
                                (t +=
                                    '#define gl_FragColor outColor' +
                                    i +
                                    ''.endl()),
                                (t +=
                                    'layout(location = ' +
                                    i +
                                    ') out vec4 outColor' +
                                    i +
                                    ';'.endl()),
                                e++;
                    }
                    (r =
                        '#version 300 es'.endl() +
                        '// '.endl() +
                        '// vertex shader ' +
                        this._name.endl() +
                        '// '.endl() +
                        'precision ' +
                        this.precision +
                        ' float;'.endl() +
                        ''.endl() +
                        '#define WEBGL2'.endl() +
                        '#define texture2D texture'.endl() +
                        '#define UNI uniform'.endl() +
                        '#define IN in'.endl() +
                        '#define OUT out'.endl()),
                        (n =
                            '#version 300 es'.endl() +
                            '// '.endl() +
                            '// fragment shader ' +
                            this._name.endl() +
                            '// '.endl() +
                            'precision ' +
                            this.precision +
                            ' float;'.endl() +
                            ''.endl() +
                            '#define WEBGL2'.endl() +
                            '#define texture2D texture'.endl() +
                            '#define IN in'.endl() +
                            '#define UNI uniform'.endl() +
                            t.endl());
                } else
                    (n =
                        ''.endl() +
                        '// '.endl() +
                        '// fragment shader ' +
                        this._name.endl() +
                        '// '.endl() +
                        '#define WEBGL1'.endl() +
                        '#define texture texture2D'.endl() +
                        '#define outColor gl_FragColor'.endl() +
                        '#define IN varying'.endl() +
                        '#define UNI uniform'.endl()),
                        (r =
                            ''.endl() +
                            '// '.endl() +
                            '// vertex shader ' +
                            this._name.endl() +
                            '// '.endl() +
                            '#define WEBGL1'.endl() +
                            '#define texture texture2D'.endl() +
                            '#define OUT varying'.endl() +
                            '#define IN attribute'.endl() +
                            '#define UNI uniform'.endl());
                let o = '\n// cgl generated'.endl(),
                    h = '\n// cgl generated'.endl();
                (n += '\n// active mods: --------------- '),
                    (r += '\n// active mods: --------------- ');
                let a = !1,
                    l = !1;
                for (let t = 0; t < this._moduleNames.length; t++)
                    for (let e = 0; e < this._modules.length; e++)
                        this._modules[e].name == this._moduleNames[t] &&
                            ((this._modules[e].srcBodyFrag ||
                                this._modules[e].srcHeadFrag) &&
                                ((a = !0),
                                (n +=
                                    '\n// ' +
                                    t +
                                    '.' +
                                    e +
                                    '. ' +
                                    this._modules[e].title +
                                    ' (' +
                                    this._modules[e].name +
                                    ')')),
                            (this._modules[e].srcBodyVert ||
                                this._modules[e].srcHeadVert) &&
                                ((r +=
                                    '\n// ' +
                                    t +
                                    '.' +
                                    e +
                                    '. ' +
                                    this._modules[e].title +
                                    ' (' +
                                    this._modules[e].name +
                                    ')'),
                                (l = !0)));
                l || (n += '\n// no mods used...'),
                    a || (n += '\n// no mods used...'),
                    (n += '\n'),
                    (r += '\n');
                for (let t = 0; t < this._uniforms.length; t++)
                    if (
                        this._uniforms[t].shaderType &&
                        !this._uniforms[t].isStructMember()
                    ) {
                        let e = '';
                        this._uniforms[t].getGlslTypeString() || (e += '// '),
                            (e +=
                                'UNI ' +
                                this._uniforms[t].getGlslTypeString() +
                                ' ' +
                                this._uniforms[t].getName());
                        let i = '';
                        this._uniforms[t].comment &&
                            (i = ' // ' + this._uniforms[t].comment),
                            ('vert' != this._uniforms[t].shaderType &&
                                'both' != this._uniforms[t].shaderType) ||
                                (-1 == this.srcVert.indexOf(e) &&
                                    -1 ==
                                        this.srcVert.indexOf(
                                            'uniform ' +
                                                this._uniforms[
                                                    t
                                                ].getGlslTypeString() +
                                                ' ' +
                                                this._uniforms[t].getName()
                                        ) &&
                                    (o += e + ';' + i.endl())),
                            ('frag' != this._uniforms[t].shaderType &&
                                'both' != this._uniforms[t].shaderType) ||
                                (-1 == this.srcFrag.indexOf(e) &&
                                    -1 ==
                                        this.srcFrag.indexOf(
                                            'uniform ' +
                                                this._uniforms[
                                                    t
                                                ].getGlslTypeString() +
                                                ' ' +
                                                this._uniforms[t].getName()
                                        ) &&
                                    (h += e + ';' + i.endl()));
                    }
                let u = 0,
                    c = 0;
                for (let t = 0; t < this._uniforms.length; t++)
                    this._uniforms[t].shaderType &&
                        !this._uniforms[t].isStructMember() &&
                        (('vert' != this._uniforms[t].shaderType &&
                            'both' != this._uniforms[t].shaderType) ||
                            c++,
                        ('frag' != this._uniforms[t].shaderType &&
                            'both' != this._uniforms[t].shaderType) ||
                            u++);
                u >= this._cgl.maxUniformsFrag &&
                    console.warn(
                        '[cgl_shader] num uniforms frag: ' +
                            u +
                            ' / ' +
                            this._cgl.maxUniformsFrag
                    ),
                    c >= this._cgl.maxUniformsVert &&
                        console.warn(
                            '[cgl_shader] num uniforms vert: ' +
                                c +
                                ' / ' +
                                this._cgl.maxUniformsVert
                        ),
                    -1 == n.indexOf('precision') &&
                        (n =
                            'precision ' +
                            this.precision +
                            ' float;'.endl() +
                            n),
                    -1 == r.indexOf('precision') &&
                        (r =
                            'precision ' +
                            this.precision +
                            ' float;'.endl() +
                            r),
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    ) &&
                        ((n += '#define MOBILE'.endl()),
                        (r += '#define MOBILE'.endl())),
                    (r = e + r + i + s[0] + o + '\n// -- \n' + this.srcVert),
                    (n = e + n + i + s[1] + h + '\n// -- \n' + this.srcFrag);
                let p = '',
                    d = '';
                this._modules.sort(function(t, e) {
                    return t.group - e.group;
                }),
                    this._modules.sort(function(t, e) {
                        return t.priority || 0 - e.priority || 0;
                    });
                let _ = !1;
                for (let t = 0; t < this._moduleNames.length; t++) {
                    let e = '',
                        i = '';
                    for (let s = 0; s < this._modules.length; s++)
                        if (this._modules[s].name == this._moduleNames[t]) {
                            if (
                                ((p +=
                                    '\n//---- MOD: group:' +
                                    this._modules[s].group +
                                    ': idx:' +
                                    s +
                                    ' - prfx:' +
                                    this._modules[s].prefix +
                                    ' - ' +
                                    this._modules[s].title +
                                    ' ------\n'),
                                (d +=
                                    '\n//---- MOD: group:' +
                                    this._modules[s].group +
                                    ': idx:' +
                                    s +
                                    ' - prfx:' +
                                    this._modules[s].prefix +
                                    ' - ' +
                                    this._modules[s].title +
                                    ' ------\n'),
                                (e +=
                                    '\n\n//---- MOD: ' +
                                    this._modules[s].title +
                                    ' ------\n'),
                                (i +=
                                    '\n\n//---- MOD: ' +
                                    this._modules[s].title +
                                    ' ------\n'),
                                !_)
                            ) {
                                _ = !0;
                                for (
                                    let t = 0;
                                    t < this._attributes.length;
                                    t++
                                )
                                    this._attributes[t].name &&
                                        this._attributes[t].type &&
                                        ((p +=
                                            ''.endl() +
                                            '#ifndef ATTRIB_' +
                                            this._attributes[t].name.endl() +
                                            '  #define ATTRIB_' +
                                            this._attributes[t].name.endl() +
                                            '  IN ' +
                                            this._attributes[t].type +
                                            ' ' +
                                            this._attributes[t].name +
                                            ';'.endl() +
                                            '#endif'),
                                        this._attributes[t].nameFrag &&
                                            ((p +=
                                                ''.endl() +
                                                '#ifndef ATTRIB_' +
                                                this._attributes[
                                                    t
                                                ].nameFrag.endl() +
                                                '  #define ATTRIB_' +
                                                this._attributes[
                                                    t
                                                ].nameFrag.endl() +
                                                '  OUT ' +
                                                this._attributes[t].type +
                                                ' ' +
                                                this._attributes[t].nameFrag +
                                                ';'.endl() +
                                                '#endif'),
                                            (e +=
                                                ''.endl() +
                                                this._attributes[t].nameFrag +
                                                '=' +
                                                this._attributes[t].name +
                                                ';')),
                                        (d +=
                                            ''.endl() +
                                            '#ifndef ATTRIB_' +
                                            this._attributes[
                                                t
                                            ].nameFrag.endl() +
                                            '  #define ATTRIB_' +
                                            this._attributes[
                                                t
                                            ].nameFrag.endl() +
                                            '  IN ' +
                                            this._attributes[t].type +
                                            ' ' +
                                            this._attributes[t].nameFrag +
                                            ';'.endl() +
                                            '#endif'));
                            }
                            (p += this._modules[s].srcHeadVert || ''),
                                (d += this._modules[s].srcHeadFrag || ''),
                                (e += this._modules[s].srcBodyVert || ''),
                                (i += this._modules[s].srcBodyFrag || ''),
                                (p += '\n//---- end mod ------\n'),
                                (d += '\n//---- end mod ------\n'),
                                (e += '\n//---- end mod ------\n'),
                                (i += '\n//---- end mod ------\n'),
                                (e = e.replace(
                                    /{{mod}}/g,
                                    this._modules[s].prefix
                                )),
                                (i = i.replace(
                                    /{{mod}}/g,
                                    this._modules[s].prefix
                                )),
                                (p = p.replace(
                                    /{{mod}}/g,
                                    this._modules[s].prefix
                                )),
                                (d = d.replace(
                                    /{{mod}}/g,
                                    this._modules[s].prefix
                                )),
                                (e = e.replace(
                                    /MOD_/g,
                                    this._modules[s].prefix
                                )),
                                (i = i.replace(
                                    /MOD_/g,
                                    this._modules[s].prefix
                                )),
                                (p = p.replace(
                                    /MOD_/g,
                                    this._modules[s].prefix
                                )),
                                (d = d.replace(
                                    /MOD_/g,
                                    this._modules[s].prefix
                                ));
                        }
                    (r = r.replace('{{' + this._moduleNames[t] + '}}', e)),
                        (n = n.replace('{{' + this._moduleNames[t] + '}}', i));
                }
                if (
                    ((r = r.replace('{{MODULES_HEAD}}', p)),
                    (n = n.replace('{{MODULES_HEAD}}', d)),
                    (r = this._addLibs(r)),
                    (n = this._addLibs(n)),
                    this._program)
                ) {
                    (this._program = this._createProgram(r, n)),
                        (this._projMatrixUniform = null);
                    for (let t = 0; t < this._uniforms.length; t++)
                        this._uniforms[t].resetLoc();
                } else this._program = this._createProgram(r, n);
                (this.finalShaderFrag = n),
                    (this.finalShaderVert = r),
                    (rt.lastMesh = null),
                    (rt.lastShader = null),
                    (this._needsRecompile = !1),
                    (this.lastCompile = ct()),
                    this._cgl.printError('shader compile'),
                    (CGL.profileData.shaderCompileTime +=
                        performance.now() - t);
            }),
            (bt.hasChanged = function() {
                return this._needsRecompile;
            }),
            (bt.prototype.bind = function() {
                if (this._isValid) {
                    if (
                        ((rt.lastShader = this),
                        (this._program && !this._needsRecompile) ||
                            this.compile(),
                        !this._projMatrixUniform)
                    ) {
                        (this._attrVertexPos = this._cgl.glGetAttribLocation(
                            this._program,
                            st.SHADER.SHADERVAR_VERTEX_POSITION
                        )),
                            (this._projMatrixUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                st.SHADER.SHADERVAR_UNI_PROJMAT
                            )),
                            (this._mvMatrixUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                'mvMatrix'
                            )),
                            (this._vMatrixUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                st.SHADER.SHADERVAR_UNI_VIEWMAT
                            )),
                            (this._mMatrixUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                st.SHADER.SHADERVAR_UNI_MODELMAT
                            )),
                            (this._camPosUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                st.SHADER.SHADERVAR_UNI_VIEWPOS
                            )),
                            (this._normalMatrixUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                st.SHADER.SHADERVAR_UNI_NORMALMAT
                            )),
                            (this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(
                                this._program,
                                st.SHADER.SHADERVAR_UNI_INVVIEWMAT
                            ));
                        for (let t = 0; t < this._uniforms.length; t++)
                            this._uniforms[t].needsUpdate = !0;
                    }
                    this._cgl.currentProgram != this._program &&
                        (Q.profileShaderBinds++,
                        this._cgl.gl.useProgram(this._program),
                        (this._cgl.currentProgram = this._program));
                    for (let t = 0; t < this._uniforms.length; t++)
                        this._uniforms[t].needsUpdate &&
                            this._uniforms[t].updateValue();
                    if (
                        (this._pMatrixState !=
                            this._cgl.getProjectionMatrixStateCount() &&
                            ((this._pMatrixState = this._cgl.getProjectionMatrixStateCount()),
                            this._cgl.gl.uniformMatrix4fv(
                                this._projMatrixUniform,
                                !1,
                                this._cgl.pMatrix
                            ),
                            Q.profileMVPMatrixCount++),
                        this._vMatrixUniform)
                    )
                        this._vMatrixState !=
                            this._cgl.getViewMatrixStateCount() &&
                            (this._cgl.gl.uniformMatrix4fv(
                                this._vMatrixUniform,
                                !1,
                                this._cgl.vMatrix
                            ),
                            Q.profileMVPMatrixCount++,
                            (this._vMatrixState = this._cgl.getViewMatrixStateCount()),
                            this._inverseViewMatrixUniform &&
                                (mat4.invert(
                                    this._tempInverseViewMatrix,
                                    this._cgl.vMatrix
                                ),
                                this._cgl.gl.uniformMatrix4fv(
                                    this._inverseViewMatrixUniform,
                                    !1,
                                    this._tempInverseViewMatrix
                                ),
                                Q.profileMVPMatrixCount++)),
                            this._cgl.gl.uniformMatrix4fv(
                                this._mMatrixUniform,
                                !1,
                                this._cgl.mMatrix
                            ),
                            Q.profileMVPMatrixCount++,
                            this._camPosUniform &&
                                (mat4.invert(
                                    this._tempCamPosMatrix,
                                    this._cgl.vMatrix
                                ),
                                this._cgl.gl.uniform3f(
                                    this._camPosUniform,
                                    this._tempCamPosMatrix[12],
                                    this._tempCamPosMatrix[13],
                                    this._tempCamPosMatrix[14]
                                ),
                                Q.profileMVPMatrixCount++);
                    else {
                        const t = mat4.create();
                        mat4.mul(t, this._cgl.vMatrix, this._cgl.mMatrix),
                            this._cgl.gl.uniformMatrix4fv(
                                this._mvMatrixUniform,
                                !1,
                                t
                            ),
                            Q.profileMVPMatrixCount++;
                    }
                    this._normalMatrixUniform &&
                        (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix),
                        mat4.transpose(
                            this._tempNormalMatrix,
                            this._tempNormalMatrix
                        ),
                        this._cgl.gl.uniformMatrix4fv(
                            this._normalMatrixUniform,
                            !1,
                            this._tempNormalMatrix
                        ),
                        Q.profileMVPMatrixCount++);
                    for (let t = 0; t < this._libs.length; t++)
                        this._libs[t].onBind &&
                            this._libs[t].onBind.bind(this._libs[t])(
                                this._cgl,
                                this
                            );
                    this._bindTextures();
                }
            }),
            (bt.prototype.toggleDefine = function(t, e) {
                e &&
                    'object' == typeof e &&
                    e.addEventListener &&
                    (e.removeEventListener('change', e.onToggleDefine),
                    (e.onToggleDefine = e => {
                        this.toggleDefine(t, e);
                    }),
                    e.on('change', e.onToggleDefine),
                    (e = e.get())),
                    e ? this.define(t) : this.removeDefine(t);
            }),
            (bt.prototype.define = function(t, e) {
                null == e && (e = ''),
                    'object' == typeof e &&
                        (e.removeEventListener('change', e.onDefineChange),
                        (e.onDefineChange = e => {
                            this.define(t, e);
                        }),
                        e.on('change', e.onDefineChange),
                        (e = e.get()));
                for (let i = 0; i < this._defines.length; i++) {
                    if (this._defines[i][0] == t && this._defines[i][1] == e)
                        return;
                    if (this._defines[i][0] == t)
                        return (
                            (this._defines[i][1] = e),
                            void (this._needsRecompile = !0)
                        );
                }
                this._defines.push([t, e]),
                    (this._needsRecompile = !0),
                    this.setWhyCompile('define ' + t + ' ' + e);
            }),
            (bt.prototype.getDefines = function() {
                return this._defines;
            }),
            (bt.prototype.getDefine = function(t) {
                for (let e = 0; e < this._defines.length; e++)
                    if (this._defines[e][0] == t) return this._defines[e][1];
                return null;
            }),
            (bt.prototype.hasDefine = function(t) {
                for (let e = 0; e < this._defines.length; e++)
                    if (this._defines[e][0] == t) return !0;
            }),
            (bt.prototype.removeDefine = function(t) {
                for (let e = 0; e < this._defines.length; e++)
                    if (this._defines[e][0] == t)
                        return (
                            this._defines.splice(e, 1),
                            void (this._needsRecompile = !0)
                        );
            }),
            (bt.prototype.removeModule = function(t) {
                for (let e = 0; e < this._modules.length; e++)
                    if (
                        t &&
                        t.id &&
                        (this._modules[e].id == t.id || !this._modules[e])
                    ) {
                        let i = !0;
                        for (; i; ) {
                            i = !1;
                            for (let e = 0; e < this._uniforms.length; e++)
                                0 !=
                                    this._uniforms[e]
                                        .getName()
                                        .indexOf(t.prefix) ||
                                    (this._uniforms.splice(e, 1), (i = !0));
                        }
                        (this._needsRecompile = !0),
                            this.setWhyCompile('remove module ' + t.title),
                            this._modules.splice(e, 1);
                        break;
                    }
            }),
            (bt.prototype.getNumModules = function() {
                return this._modules.length;
            }),
            (bt.prototype.getCurrentModules = function() {
                return this._modules;
            }),
            (bt.prototype.addModule = function(t, e) {
                return (
                    t.id || (t.id = y()),
                    t.numId || (t.numId = this._moduleNumId),
                    t.num || (t.num = this._modules.length),
                    e && !e.group && (e.group = x()),
                    t.group || (t.group = e ? e.group : x()),
                    (t.prefix = 'mod' + t.group + '_'),
                    this._modules.push(t),
                    (this._needsRecompile = !0),
                    this.setWhyCompile('add module ' + t.title),
                    this._moduleNumId++,
                    t
                );
            }),
            (bt.prototype.hasModule = function(t) {
                for (let e = 0; e < this._modules.length; e++)
                    if (this._modules[e].id == t) return !0;
                return !1;
            }),
            (bt.prototype.setModules = function(t) {
                this._moduleNames = t;
            }),
            (bt.prototype.dispose = function() {
                this._cgl.gl.deleteProgram(this._program);
            }),
            (bt.prototype.setDrawBuffers = function(t) {
                (this._drawBuffers = t), (this._needsRecompile = !0);
            }),
            (bt.prototype.getUniforms = function() {
                return this._uniforms;
            }),
            (bt.prototype.getUniform = function(t) {
                for (let e = 0; e < this._uniforms.length; e++)
                    if (this._uniforms[e].getName() == t)
                        return this._uniforms[e];
                return null;
            }),
            (bt.prototype.removeUniform = function(t) {
                for (let e = 0; e < this._uniforms.length; e++)
                    this._uniforms[e].getName() == t &&
                        this._uniforms.splice(e, 1);
                (this._needsRecompile = !0),
                    this.setWhyCompile('remove uniform ' + t);
            }),
            (bt.prototype._addUniform = function(t) {
                this._uniforms.push(t),
                    this.setWhyCompile('add uniform ' + name),
                    (this._needsRecompile = !0);
            }),
            (bt.prototype.addUniformFrag = function(t, e, i, s, r, n) {
                const o = new CGL.Uniform(this, t, e, i, s, r, n);
                return (o.shaderType = 'frag'), o;
            }),
            (bt.prototype.addUniformVert = function(t, e, i, s, r, n) {
                const o = new CGL.Uniform(this, t, e, i, s, r, n);
                return (o.shaderType = 'vert'), o;
            }),
            (bt.prototype.addUniformBoth = function(t, e, i, s, r, n) {
                const o = new CGL.Uniform(this, t, e, i, s, r, n);
                return (o.shaderType = 'both'), o;
            }),
            (bt.prototype.addUniformStructFrag = function(t, e, i) {
                const s = {};
                if (!i) return s;
                for (let r = 0; r < i.length; r += 1) {
                    const n = i[r];
                    if (!this.hasUniform(e + '.' + n.name)) {
                        const i = new CGL.Uniform(
                            this,
                            n.type,
                            e + '.' + n.name,
                            n.v1,
                            n.v2,
                            n.v3,
                            n.v4,
                            e,
                            t,
                            n.name
                        );
                        (i.shaderType = 'frag'), (s[e + '.' + n.name] = i);
                    }
                }
                return s;
            }),
            (bt.prototype.addUniformStructVert = function(t, e, i) {
                const s = {};
                if (!i) return s;
                for (let r = 0; r < i.length; r += 1) {
                    const n = i[r];
                    if (!this.hasUniform(e + '.' + n.name)) {
                        const i = new CGL.Uniform(
                            this,
                            n.type,
                            e + '.' + n.name,
                            n.v1,
                            n.v2,
                            n.v3,
                            n.v4,
                            e,
                            t,
                            n.name
                        );
                        (i.shaderType = 'vert'), (s[e + '.' + n.name] = i);
                    }
                }
                return s;
            }),
            (bt.prototype.addUniformStructBoth = function(t, e, i) {
                const s = {};
                if (!i) return s;
                for (let r = 0; r < i.length; r += 1) {
                    const n = i[r];
                    if (
                        (('2i' !== n.type &&
                            'i' !== n.type &&
                            '3i' !== n.type) ||
                            console.error(
                                'Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:',
                                t,
                                ' with member:',
                                n.name,
                                ' of type:',
                                n.type,
                                '.'
                            ),
                        !this.hasUniform(e + '.' + n.name))
                    ) {
                        const i = new CGL.Uniform(
                            this,
                            n.type,
                            e + '.' + n.name,
                            n.v1,
                            n.v2,
                            n.v3,
                            n.v4,
                            e,
                            t,
                            n.name
                        );
                        (i.shaderType = 'both'), (s[e + '.' + n.name] = i);
                    }
                }
                return s;
            }),
            (bt.prototype.hasUniform = function(t) {
                for (let e = 0; e < this._uniforms.length; e++)
                    if (this._uniforms[e].getName() == t) return !0;
                return !1;
            }),
            (bt.prototype._createProgram = function(t, e) {
                const i = this._cgl.gl.createProgram();
                return (
                    (this.vshader = bt.createShader(
                        this._cgl,
                        t,
                        this._cgl.gl.VERTEX_SHADER,
                        this
                    )),
                    (this.fshader = bt.createShader(
                        this._cgl,
                        e,
                        this._cgl.gl.FRAGMENT_SHADER,
                        this
                    )),
                    this._cgl.gl.attachShader(i, this.vshader),
                    this._cgl.gl.attachShader(i, this.fshader),
                    this._linkProgram(i),
                    i
                );
            }),
            (bt.prototype.hasErrors = function() {
                return this._hasErrors;
            }),
            (bt.prototype._linkProgram = function(t) {
                this._feedBackNames.length > 0 &&
                    this._cgl.gl.transformFeedbackVaryings(
                        t,
                        this._feedBackNames,
                        this._cgl.gl.SEPARATE_ATTRIBS
                    ),
                    this._cgl.gl.linkProgram(t),
                    (this._isValid = !0),
                    !1 !== this._cgl.patch.config.glValidateShader &&
                        (this._cgl.gl.validateProgram(t),
                        this._cgl.gl.getProgramParameter(
                            t,
                            this._cgl.gl.LINK_STATUS
                        ) ||
                            (console.warn(
                                this._cgl.gl.getShaderInfoLog(this.fshader) ||
                                    'empty shader infolog'
                            ),
                            console.warn(
                                this._cgl.gl.getShaderInfoLog(this.vshader) ||
                                    'empty shader infolog'
                            ),
                            console.error(name + ' shader linking fail...'),
                            d.log('srcFrag', this.srcFrag),
                            d.log('srcVert', this.srcVert),
                            d.log(
                                name + ' programinfo: ',
                                this._cgl.gl.getProgramInfoLog(t)
                            ),
                            d.log('--------------------------------------'),
                            d.log(this),
                            d.log('--------------------------------------'),
                            (this._isValid = !1),
                            (this._name = 'errorshader'),
                            this.setSource(
                                bt.getDefaultVertexShader(),
                                bt.getErrorFragmentShader()
                            )));
            }),
            (bt.prototype.getProgram = function() {
                return this._program;
            }),
            (bt.prototype.setFeedbackNames = function(t) {
                (this._needsRecompile = !0), (this._feedBackNames = t);
            }),
            (bt.prototype.getDefaultVertexShader = bt.getDefaultVertexShader = function() {
                return (
                    ''.endl() +
                    '{{MODULES_HEAD}}'.endl() +
                    'IN vec3 vPosition;'.endl() +
                    'IN vec2 attrTexCoord;'.endl() +
                    'IN vec3 attrVertNormal;'.endl() +
                    'IN vec3 attrTangent,attrBiTangent;'.endl() +
                    'IN float attrVertIndex;'.endl() +
                    'OUT vec2 texCoord;'.endl() +
                    'OUT vec3 norm;'.endl() +
                    'UNI mat4 projMatrix;'.endl() +
                    'UNI mat4 viewMatrix;'.endl() +
                    'UNI mat4 modelMatrix;'.endl() +
                    'void main()'.endl() +
                    '{'.endl() +
                    '   texCoord=attrTexCoord;'.endl() +
                    '   norm=attrVertNormal;'.endl() +
                    '   vec4 pos=vec4(vPosition,  1.0);'.endl() +
                    '   mat4 mMatrix=modelMatrix;'.endl() +
                    '   {{MODULE_VERTEX_POSITION}}'.endl() +
                    '   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;'.endl() +
                    '}'
                );
            }),
            (bt.prototype.getDefaultFragmentShader = bt.getDefaultFragmentShader = function(
                t,
                e,
                i
            ) {
                return (
                    null == t && ((t = 0.5), (e = 0.5), (i = 0.5)),
                    ''.endl() +
                        'IN vec2 texCoord;'.endl() +
                        '{{MODULES_HEAD}}'.endl() +
                        'void main()'.endl() +
                        '{'.endl() +
                        '    vec4 col=vec4(' +
                        t +
                        ',' +
                        e +
                        ',' +
                        i +
                        ',1.0);'.endl() +
                        '    {{MODULE_COLOR}}'.endl() +
                        '    outColor = col;'.endl() +
                        '}'
                );
            }),
            (bt.prototype.addAttribute = function(t) {
                for (let e = 0; e < this._attributes.length; e++)
                    if (
                        this._attributes[e].name == t.name &&
                        this._attributes[e].nameFrag == t.nameFrag
                    )
                        return;
                this._attributes.push(t), (this._needsRecompile = !0);
            }),
            (bt.prototype.bindTextures = bt.prototype._bindTextures = function() {
                this._textureStackTex.length > this._cgl.maxTextureUnits &&
                    console.log(
                        '[shader._bindTextures] too many textures bound',
                        this._textureStackTex.length +
                            '/' +
                            this._cgl.maxTextureUnits
                    );
                for (let t = 0; t < this._textureStackTex.length; t++)
                    this._textureStackTex[t]
                        ? this._textureStackUni[t]
                            ? (this._textureStackUni[t].setValue(t),
                              this._cgl.setTexture(
                                  t,
                                  this._textureStackTex[t],
                                  this._textureStackType[t]
                              ))
                            : (console.log(
                                  'no uniform for pushtexture',
                                  this._name
                              ),
                              this._cgl.setTexture(
                                  t,
                                  this._textureStackTex[t],
                                  this._textureStackType[t]
                              ))
                        : console.log('no texture for pushtexture', this._name);
            }),
            (bt.prototype.pushTexture = function(t, e, i) {
                if (!t) throw new Error('no uniform given to texturestack');
                if (!e) throw new Error('no texture given to texturestack');
                this._textureStackUni.push(t),
                    e.tex
                        ? (this._textureStackTexCgl.push(e),
                          this._textureStackTex.push(e.tex))
                        : (this._textureStackTexCgl.push(null),
                          this._textureStackTex.push(e)),
                    this._textureStackType.push(i);
            }),
            (bt.prototype.popTexture = function() {
                this._textureStackUni.pop(),
                    this._textureStackTex.pop(),
                    this._textureStackType.pop();
            }),
            (bt.prototype.popTextures = function() {
                this._textureStackTex.length = this._textureStackTexCgl.length = this._textureStackType.length = this._textureStackUni.length = 0;
            }),
            (bt.getErrorFragmentShader = function() {
                return (
                    ''.endl() +
                    'void main()'.endl() +
                    '{'.endl() +
                    '   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;'.endl() +
                    '   g= step(0.1,g);'.endl() +
                    '   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);'.endl() +
                    '}'
                );
            }),
            (bt.createShader = function(t, e, i, s) {
                if (t.aborted) return;
                t.printError('shader create1');
                const r = t.gl.createShader(i);
                if (
                    (t.gl.shaderSource(r, e),
                    t.gl.compileShader(r),
                    !t.gl.getShaderParameter(r, t.gl.COMPILE_STATUS))
                ) {
                    d.log('compile status: '),
                        i == t.gl.VERTEX_SHADER && d.log('VERTEX_SHADER'),
                        i == t.gl.FRAGMENT_SHADER && d.log('FRAGMENT_SHADER');
                    let o = t.gl.getShaderInfoLog(r) || 'empty shader info log';
                    const h = (function(t) {
                        const e = [],
                            i = t.split('\n');
                        for (const t in i) {
                            const s = i[t].split(':');
                            parseInt(s[2], 10) && e.push(parseInt(s[2], 10));
                        }
                        return e;
                    })(o);
                    let a = '<div class="shaderErrorCode">';
                    const l = e.match(/^.*((\r\n|\n|\r)|$)/gm);
                    for (const t in l) {
                        const e = parseInt(t, 10) + 1,
                            i = e + ': ' + l[t];
                        d.log(i);
                        let s = !1;
                        for (const t in h) h[t] == e && (s = !0);
                        s && (a += '<span class="error">'),
                            (a +=
                                (n = i) && At.test(n)
                                    ? n.replace(Tt, function(t) {
                                          return Et[t];
                                      })
                                    : n || ''),
                            s && (a += '</span>');
                    }
                    console.warn(o),
                        (o = o.replace(/\n/g, '<br/>')),
                        (a = o + '<br/>' + a + '<br/><br/>'),
                        t.patch.emitEvent(
                            'criticalError',
                            'Shader error ' + name,
                            a
                        ),
                        t.patch.isEditorMode() &&
                            d.log('Shader error ' + name, a),
                        (a += '</div>'),
                        (this._name = 'errorshader'),
                        s.setSource(
                            bt.getDefaultVertexShader(),
                            bt.getErrorFragmentShader()
                        );
                }
                var n;
                return t.printError('shader create2'), r;
            });
        const yt = function() {
            (this._arr = [mat4.create()]),
                (this._index = 0),
                (this.stateCounter = 0);
        };
        (yt.prototype.push = function(t) {
            if (
                (this._index++,
                this.stateCounter++,
                this._index == this._arr.length)
            ) {
                const t = mat4.create();
                this._arr.push(t);
            }
            return (
                mat4.copy(
                    this._arr[this._index],
                    t || this._arr[this._index - 1]
                ),
                this._arr[this._index]
            );
        }),
            (yt.prototype.pop = function() {
                return (
                    this.stateCounter++,
                    this._index--,
                    this._index < 0 && (this._index = 0),
                    this._arr[this._index]
                );
            }),
            (yt.prototype.length = function() {
                return this._index;
            });
        const Ot = function(t) {
            _.apply(this);
            const e = [0, 0, 0, 0];
            (this.glVersion = 0),
                (this.glUseHalfFloatTex = !1),
                (this.clearCanvasTransparent = !0),
                (this.clearCanvasDepth = !0),
                (this.patch = t),
                (this.debugOneFrame = !1),
                (this.maxTextureUnits = 0),
                (this.currentProgram = null),
                (this._hadStackError = !1),
                (this.glSlowRenderer = !1),
                (this.temporaryTexture = null),
                (this.frameStore = {}),
                (this._onetimeCallbacks = []),
                (this.gl = null),
                (this._cursor = 'auto'),
                (this._currentCursor = ''),
                (this.pMatrix = mat4.create()),
                (this.mMatrix = mat4.create()),
                (this.vMatrix = mat4.create()),
                (this._textureslots = []),
                (this._pMatrixStack = new yt()),
                (this._mMatrixStack = new yt()),
                (this._vMatrixStack = new yt()),
                (this._glFrameBufferStack = []),
                (this._frameBufferStack = []),
                (this._shaderStack = []),
                Object.defineProperty(this, 'mvMatrix', {
                    get() {
                        return this.mMatrix;
                    },
                    set(t) {
                        this.mMatrix = t;
                    },
                }),
                (this.canvas = null),
                (this.pixelDensity = 1),
                mat4.identity(this.mMatrix),
                mat4.identity(this.vMatrix);
            const i = new bt(this, 'simpleshader');
            i.setModules([
                'MODULE_VERTEX_POSITION',
                'MODULE_COLOR',
                'MODULE_BEGIN_FRAG',
            ]),
                i.setSource(
                    bt.getDefaultVertexShader(),
                    bt.getDefaultFragmentShader()
                );
            let s = i;
            this.aborted = !1;
            const r = [];
            (this.addEventListener = function(t, e) {
                'resize' == t && r.push(e);
            }),
                (this.removeEventListener = function(t, e) {
                    if ('resize' == t)
                        for (const t in r)
                            if (r[t] == e) return void r.splice(t, 1);
                }),
                (this.exitError = function(t, e) {
                    this.patch.exitError(t, e), (this.aborted = !0);
                }),
                (this.setCanvas = function(t) {
                    if (
                        ((this.canvas =
                            'string' == typeof t
                                ? document.getElementById(t)
                                : t),
                        this.patch.config.canvas ||
                            (this.patch.config.canvas = {}),
                        this.patch.config.canvas.hasOwnProperty(
                            'preserveDrawingBuffer'
                        ) ||
                            (this.patch.config.canvas.preserveDrawingBuffer = !1),
                        this.patch.config.canvas.hasOwnProperty(
                            'premultipliedAlpha'
                        ) || (this.patch.config.canvas.premultipliedAlpha = !1),
                        this.patch.config.canvas.hasOwnProperty('alpha') ||
                            (this.patch.config.canvas.alpha = !1),
                        this.patch.config.hasOwnProperty('clearCanvasColor') &&
                            (this.clearCanvasTransparent = this.patch.config.clearCanvasColor),
                        this.patch.config.hasOwnProperty('clearCanvasDepth') &&
                            (this.clearCanvasDepth = this.patch.config.clearCanvasDepth),
                        this.patch.config.canvas.forceWebGl1 ||
                            (this.gl = this.canvas.getContext(
                                'webgl2',
                                this.patch.config.canvas
                            )),
                        this.gl &&
                        'WebGL 1.0' != this.gl.getParameter(this.gl.VERSION)
                            ? (this.glVersion = 2)
                            : ((this.gl =
                                  this.canvas.getContext(
                                      'webgl',
                                      this.patch.config.canvas
                                  ) ||
                                  this.canvas.getContext(
                                      'experimental-webgl',
                                      this.patch.config.canvas
                                  )),
                              (this.glVersion = 1),
                              /^((?!chrome|android).)*safari/i.test(
                                  navigator.userAgent
                              ) && (this.glUseHalfFloatTex = !0),
                              /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                                  !window.MSStream &&
                                  (this.patch.config.canvas.hasOwnProperty(
                                      'powerPreference'
                                  ) ||
                                      (this.patch.config.canvas.powerPreference =
                                          'high-performance'))),
                        !this.gl)
                    )
                        return void this.exitError(
                            'NO_WEBGL',
                            'sorry, could not initialize WebGL. Please check if your Browser supports WebGL.'
                        );
                    const e = this.gl.getExtension('WEBGL_debug_renderer_info');
                    if (e) {
                        'Google SwiftShader' ===
                            this.gl.getParameter(e.UNMASKED_RENDERER_WEBGL) &&
                            (this.glSlowRenderer = !0);
                    }
                    this.gl.getExtension('OES_standard_derivatives');
                    const i =
                        this.gl.getExtension('ANGLE_instanced_arrays') ||
                        this.gl;
                    this.canvas.addEventListener('webglcontextlost', t => {
                        console.log('canvas lost...', t), (this.aborted = !0);
                    }),
                        (this.maxTextureUnits = this.gl.getParameter(
                            this.gl.MAX_TEXTURE_IMAGE_UNITS
                        )),
                        (this.maxTexSize = this.gl.getParameter(
                            this.gl.MAX_TEXTURE_SIZE
                        )),
                        (this.maxUniformsFrag = this.gl.getParameter(
                            this.gl.MAX_FRAGMENT_UNIFORM_VECTORS
                        )),
                        (this.maxUniformsVert = this.gl.getParameter(
                            this.gl.MAX_VERTEX_UNIFORM_VECTORS
                        )),
                        (this.maxSamples = 0),
                        this.gl.MAX_SAMPLES &&
                            (this.maxSamples = this.gl.getParameter(
                                this.gl.MAX_SAMPLES
                            )),
                        i.vertexAttribDivisorANGLE &&
                            ((this.gl.vertexAttribDivisor = i.vertexAttribDivisorANGLE.bind(
                                i
                            )),
                            (this.gl.drawElementsInstanced = i.drawElementsInstancedANGLE.bind(
                                i
                            ))),
                        this.updateSize();
                }),
                (this.updateSize = function() {
                    (this.canvas.width = this.canvasWidth =
                        this.canvas.clientWidth * this.pixelDensity),
                        (this.canvas.height = this.canvasHeight =
                            this.canvas.clientHeight * this.pixelDensity);
                }),
                (this.canvasWidth = -1),
                (this.canvasHeight = -1),
                (this.canvasScale = 1);
            let n = -1,
                o = -1;
            (this.getViewPort = function() {
                return e;
            }),
                (this.resetViewPort = function() {
                    this.gl.viewport(e[0], e[1], e[2], e[3]);
                }),
                (this.setViewPort = function(t, i, s, r) {
                    (e[0] = Math.round(t)),
                        (e[1] = Math.round(i)),
                        (e[2] = Math.round(s)),
                        (e[3] = Math.round(r)),
                        this.gl.viewport(e[0], e[1], e[2], e[3]);
                }),
                (this.screenShot = function(t, e, i, s) {
                    e &&
                        (this.gl.clearColor(1, 1, 1, 1),
                        this.gl.colorMask(!1, !1, !1, !0),
                        this.gl.clear(this.gl.COLOR_BUFFER_BIT),
                        this.gl.colorMask(!0, !0, !0, !0)),
                        this.canvas &&
                            this.canvas.toBlob &&
                            this.canvas.toBlob(
                                e => {
                                    t
                                        ? t(e)
                                        : d.log('no screenshot callback...');
                                },
                                i,
                                s
                            );
                }),
                (this.endFrame = function() {
                    if (
                        (this.patch.isEditorMode() &&
                            CABLES.GL_MARKER.drawMarkerLayer(this),
                        this.setPreviousShader(),
                        this._vMatrixStack.length() > 0 &&
                            this.logStackError(
                                'view matrix stack length !=0 at end of rendering...'
                            ),
                        this._mMatrixStack.length() > 0 &&
                            this.logStackError(
                                'mvmatrix stack length !=0 at end of rendering...'
                            ),
                        this._pMatrixStack.length() > 0 &&
                            this.logStackError(
                                'pmatrix stack length !=0 at end of rendering...'
                            ),
                        this._glFrameBufferStack.length > 0 &&
                            this.logStackError(
                                'glFrameBuffer stack length !=0 at end of rendering...'
                            ),
                        this._stackDepthTest.length > 0 &&
                            this.logStackError(
                                'depthtest stack length !=0 at end of rendering...'
                            ),
                        this._stackDepthWrite.length > 0 &&
                            this.logStackError(
                                'depthwrite stack length !=0 at end of rendering...'
                            ),
                        this._stackDepthFunc.length > 0 &&
                            this.logStackError(
                                'depthfunc stack length !=0 at end of rendering...'
                            ),
                        this._stackBlend.length > 0 &&
                            this.logStackError(
                                'blend stack length !=0 at end of rendering...'
                            ),
                        this._stackBlendMode.length > 0 &&
                            this.logStackError(
                                'blendMode stack length !=0 at end of rendering...'
                            ),
                        this._shaderStack.length > 0 &&
                            this.logStackError(
                                'this._shaderStack length !=0 at end of rendering...'
                            ),
                        this._stackCullFace.length > 0 &&
                            this.logStackError(
                                'this._stackCullFace length !=0 at end of rendering...'
                            ),
                        this._stackCullFaceFacing.length > 0 &&
                            this.logStackError(
                                'this._stackCullFaceFacing length !=0 at end of rendering...'
                            ),
                        (this._frameStarted = !1),
                        n != this.canvasWidth || o != this.canvasHeight)
                    ) {
                        (n = this.canvasWidth),
                            (o = this.canvasHeight),
                            this.setSize(
                                this.canvasWidth / this.pixelDensity,
                                this.canvasHeight / this.pixelDensity
                            ),
                            this.updateSize();
                        for (let t = 0; t < r.length; t++) r[t]();
                    }
                    this._cursor != this._currentCursor &&
                        (this._currentCursor = this.canvas.style.cursor = this._cursor);
                }),
                (this.logStackError = function(t) {
                    this._hadStackError ||
                        ((this._hadStackError = !0), console.warn(t));
                }),
                (this.getShader = function() {
                    if (
                        s &&
                        (!this.frameStore ||
                            ((!0 === this.frameStore.renderOffscreen) ==
                                s.offScreenPass) ==
                                !0)
                    )
                        return s;
                    for (let t = this._shaderStack.length - 1; t >= 0; t--)
                        if (
                            this._shaderStack[t] &&
                            this.frameStore.renderOffscreen ==
                                this._shaderStack[t].offScreenPass
                        )
                            return this._shaderStack[t];
                }),
                (this.getDefaultShader = function() {
                    return i;
                }),
                (this.pushShader = this.setShader = function(t) {
                    this._shaderStack.push(t), (s = t);
                }),
                (this.popShader = this.setPreviousShader = function() {
                    if (0 === this._shaderStack.length)
                        throw new Error('Invalid shader stack pop!');
                    this._shaderStack.pop(),
                        (s = this._shaderStack[this._shaderStack.length - 1]);
                }),
                (this.pushGlFrameBuffer = function(t) {
                    this._glFrameBufferStack.push(t);
                }),
                (this.popGlFrameBuffer = function() {
                    return 0 == this._glFrameBufferStack.length
                        ? null
                        : (this._glFrameBufferStack.pop(),
                          this._glFrameBufferStack[
                              this._glFrameBufferStack.length - 1
                          ]);
                }),
                (this.getCurrentGlFrameBuffer = function() {
                    return 0 === this._glFrameBufferStack.length
                        ? null
                        : this._glFrameBufferStack[
                              this._glFrameBufferStack.length - 1
                          ];
                }),
                (this.pushFrameBuffer = function(t) {
                    this._frameBufferStack.push(t);
                }),
                (this.popFrameBuffer = function() {
                    return 0 == this._frameBufferStack.length
                        ? null
                        : (this._frameBufferStack.pop(),
                          this._frameBufferStack[
                              this._frameBufferStack.length - 1
                          ]);
                }),
                (this.getCurrentFrameBuffer = function() {
                    return 0 === this._frameBufferStack.length
                        ? null
                        : this._frameBufferStack[
                              this._frameBufferStack.length - 1
                          ];
                });
            const h = vec3.create();
            vec3.set(h, 0, 0, 2);
            const a = vec3.create();
            vec3.set(a, 0, 0, 0),
                (this.renderStart = function(t, e, s) {
                    e || (e = a),
                        s || (s = h),
                        this.pushDepthTest(!0),
                        this.pushDepthWrite(!0),
                        this.pushDepthFunc(t.gl.LEQUAL),
                        this.pushCullFaceFacing(t.gl.BACK),
                        this.pushCullFace(!1),
                        this.clearCanvasTransparent &&
                            (t.gl.clearColor(0, 0, 0, 0),
                            t.gl.clear(t.gl.COLOR_BUFFER_BIT)),
                        this.clearCanvasDepth &&
                            t.gl.clear(t.gl.DEPTH_BUFFER_BIT),
                        t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight),
                        mat4.perspective(
                            t.pMatrix,
                            45,
                            t.canvasWidth / t.canvasHeight,
                            0.1,
                            1e3
                        ),
                        mat4.identity(t.mMatrix),
                        mat4.identity(t.vMatrix),
                        mat4.translate(t.mMatrix, t.mMatrix, e),
                        mat4.translate(t.vMatrix, t.vMatrix, s),
                        t.pushPMatrix(),
                        t.pushModelMatrix(),
                        t.pushViewMatrix(),
                        t.pushBlendMode(st.BLEND_MODES.BLEND_NORMAL, !1);
                    for (let t = 0; t < this._textureslots.length; t++)
                        this._textureslots[t] = null;
                    if (
                        (this.pushShader(i),
                        (this._frameStarted = !0),
                        this._onetimeCallbacks.length > 0)
                    ) {
                        for (let t = 0; t < this._onetimeCallbacks.length; t++)
                            this._onetimeCallbacks[t]();
                        this._onetimeCallbacks.length = 0;
                    }
                    this.emitEvent('beginFrame');
                }),
                (this.renderEnd = function(t) {
                    t.popViewMatrix(),
                        t.popModelMatrix(),
                        t.popPMatrix(),
                        this.popDepthTest(),
                        this.popDepthWrite(),
                        this.popDepthFunc(),
                        this.popCullFaceFacing(),
                        this.popCullFace(),
                        this.popBlend(),
                        this.popBlendMode(),
                        t.endFrame(),
                        this.emitEvent('endFrame');
                }),
                (this.getTexture = function(t) {
                    return this._textureslots[t];
                }),
                (this.checkFrameStarted = function(t) {
                    this._frameStarted ||
                        console.warn('frame not started ' + t);
                }),
                (this.setTexture = function(t, e, i) {
                    this.checkFrameStarted('cgl setTexture'),
                        this._textureslots[t] != e &&
                            (this.gl.activeTexture(this.gl.TEXTURE0 + t),
                            this.gl.bindTexture(i || this.gl.TEXTURE_2D, e),
                            (this._textureslots[t] = e));
                }),
                (this.fullScreen = function() {
                    this.canvas.requestFullscreen
                        ? this.canvas.requestFullscreen()
                        : this.canvas.mozRequestFullScreen
                        ? this.canvas.mozRequestFullScreen()
                        : this.canvas.webkitRequestFullscreen
                        ? this.canvas.webkitRequestFullscreen()
                        : this.canvas.msRequestFullscreen &&
                          this.canvas.msRequestFullscreen();
                }),
                (this.setSize = function(t, e) {
                    (this.canvas.style.width = t + 'px'),
                        (this.canvas.style.height = e + 'px'),
                        (this.canvas.width = t * this.pixelDensity),
                        (this.canvas.height = e * this.pixelDensity),
                        this.updateSize();
                }),
                (this._resizeToWindowSize = function() {
                    this.setSize(window.innerWidth, window.innerHeight),
                        this.updateSize();
                }),
                (this._resizeToParentSize = function() {
                    const t = this.canvas.parentElement;
                    t
                        ? (this.setSize(t.clientWidth, t.clientHeight),
                          this.updateSize())
                        : console.error(
                              'cables: can not resize to container element'
                          );
                }),
                (this.setAutoResize = function(t) {
                    window.removeEventListener(
                        'resize',
                        this._resizeToWindowSize.bind(this)
                    ),
                        window.removeEventListener(
                            'resize',
                            this._resizeToParentSize.bind(this)
                        ),
                        'window' == t &&
                            (window.addEventListener(
                                'resize',
                                this._resizeToWindowSize.bind(this)
                            ),
                            window.addEventListener(
                                'orientationchange',
                                this._resizeToWindowSize.bind(this)
                            ),
                            this._resizeToWindowSize()),
                        'parent' == t &&
                            (window.addEventListener(
                                'resize',
                                this._resizeToParentSize.bind(this)
                            ),
                            this._resizeToParentSize());
                }),
                (this.printError = function(t) {
                    const e = this.gl.getError();
                    if (e != this.gl.NO_ERROR) {
                        let i = '';
                        return (
                            e == this.gl.OUT_OF_MEMORY && (i = 'OUT_OF_MEMORY'),
                            e == this.gl.INVALID_ENUM && (i = 'INVALID_ENUM'),
                            e == this.gl.INVALID_OPERATION &&
                                (i = 'INVALID_OPERATION'),
                            e == this.gl.INVALID_FRAMEBUFFER_OPERATION &&
                                (i = 'INVALID_FRAMEBUFFER_OPERATION'),
                            e == this.gl.INVALID_VALUE && (i = 'INVALID_VALUE'),
                            e == this.gl.CONTEXT_LOST_WEBGL &&
                                ((this.aborted = !0),
                                (i = 'CONTEXT_LOST_WEBGL')),
                            e == this.gl.NO_ERROR && (i = 'NO_ERROR'),
                            d.log('gl error: ', t, e, i),
                            !0
                        );
                    }
                    return !1;
                }),
                (this.saveScreenshot = function(t, e, i, s, r) {
                    this.patch.renderOneFrame();
                    let n = this.canvas.clientWidth,
                        o = this.canvas.clientHeight;
                    function h(t, e, i) {
                        return (
                            Array(e - String(t).length + 1).join(i || '0') + t
                        );
                    }
                    i && ((this.canvas.width = i), (n = i)),
                        s && ((this.canvas.height = s), (o = s));
                    const a = new Date(),
                        l = ''
                            .concat(
                                String(a.getFullYear()) +
                                    String(a.getMonth() + 1) +
                                    String(a.getDate()),
                                '_'
                            )
                            .concat(h(a.getHours(), 2))
                            .concat(h(a.getMinutes(), 2))
                            .concat(h(a.getSeconds(), 2));
                    t ? (t += '.png') : (t = 'cables_' + l + '.png'),
                        this.patch.cgl.screenShot(
                            function(i) {
                                if (
                                    ((this.canvas.width = n),
                                    (this.canvas.height = o),
                                    i)
                                ) {
                                    const s = document.createElement('a');
                                    (s.download = t),
                                        (s.href = URL.createObjectURL(i)),
                                        setTimeout(function() {
                                            s.click(), e && e(i);
                                        }, 100);
                                } else d.log('screenshot: no blob');
                            }.bind(this),
                            r
                        );
                });
        };
        (Ot.prototype.addNextFrameOnceCallback = function(t) {
            t && this._onetimeCallbacks.push(t);
        }),
            (Ot.prototype.pushViewMatrix = function() {
                this.vMatrix = this._vMatrixStack.push(this.vMatrix);
            }),
            (Ot.prototype.popViewMatrix = function() {
                this.vMatrix = this._vMatrixStack.pop();
            }),
            (Ot.prototype.getViewMatrixStateCount = function() {
                return this._vMatrixStack.stateCounter;
            }),
            (Ot.prototype.pushPMatrix = function() {
                this.pMatrix = this._pMatrixStack.push(this.pMatrix);
            }),
            (Ot.prototype.popPMatrix = function() {
                return (this.pMatrix = this._pMatrixStack.pop()), this.pMatrix;
            }),
            (Ot.prototype.getProjectionMatrixStateCount = function() {
                return this._pMatrixStack.stateCounter;
            }),
            (Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix = function() {
                this.mMatrix = this._mMatrixStack.push(this.mMatrix);
            }),
            (Ot.prototype.popMvMatrix = Ot.prototype.popmMatrix = Ot.prototype.popModelMatrix = function() {
                return (this.mMatrix = this._mMatrixStack.pop()), this.mMatrix;
            }),
            (Ot.prototype.modelMatrix = function() {
                return this.mMatrix;
            }),
            (Ot.prototype._stackDepthTest = []),
            (Ot.prototype.pushDepthTest = function(t) {
                this._stackDepthTest.push(t),
                    t
                        ? this.gl.enable(this.gl.DEPTH_TEST)
                        : this.gl.disable(this.gl.DEPTH_TEST);
            }),
            (Ot.prototype.stateDepthTest = function() {
                return this._stackDepthTest[this._stackDepthTest.length - 1];
            }),
            (Ot.prototype.popDepthTest = function() {
                this._stackDepthTest.pop(),
                    this._stackDepthTest[this._stackDepthTest.length - 1]
                        ? this.gl.enable(this.gl.DEPTH_TEST)
                        : this.gl.disable(this.gl.DEPTH_TEST);
            }),
            (Ot.prototype._stackDepthWrite = []),
            (Ot.prototype.pushDepthWrite = function(t) {
                this._stackDepthWrite.push(t), this.gl.depthMask(t);
            }),
            (Ot.prototype.stateDepthWrite = function() {
                return this._stackDepthWrite[this._stackDepthWrite.length - 1];
            }),
            (Ot.prototype.popDepthWrite = function() {
                this._stackDepthWrite.pop(),
                    this.gl.depthMask(
                        this._stackDepthWrite[this._stackDepthWrite.length - 1]
                    );
            }),
            (Ot.prototype._stackCullFace = []),
            (Ot.prototype.pushCullFace = function(t) {
                this._stackCullFace.push(t),
                    t
                        ? this.gl.enable(this.gl.CULL_FACE)
                        : this.gl.disable(this.gl.CULL_FACE);
            }),
            (Ot.prototype.stateCullFace = function() {
                return this._stackCullFace[this._stackCullFace.length - 1];
            }),
            (Ot.prototype.popCullFace = function() {
                this._stackCullFace.pop(),
                    this._stackCullFace[this._stackCullFace.length - 1]
                        ? this.gl.enable(this.gl.CULL_FACE)
                        : this.gl.disable(this.gl.CULL_FACE);
            }),
            (Ot.prototype._stackCullFaceFacing = []),
            (Ot.prototype.pushCullFaceFacing = function(t) {
                this._stackCullFaceFacing.push(t),
                    this.gl.cullFace(
                        this._stackCullFaceFacing[
                            this._stackCullFaceFacing.length - 1
                        ]
                    );
            }),
            (Ot.prototype.stateCullFaceFacing = function() {
                return this._stackCullFaceFacing[
                    this._stackCullFaceFacing.length - 1
                ];
            }),
            (Ot.prototype.popCullFaceFacing = function() {
                this._stackCullFaceFacing.pop(),
                    this._stackCullFaceFacing.length > 0 &&
                        this.gl.cullFace(
                            this._stackCullFaceFacing[
                                this._stackCullFaceFacing.length - 1
                            ]
                        );
            }),
            (Ot.prototype._stackDepthFunc = []),
            (Ot.prototype.pushDepthFunc = function(t) {
                this._stackDepthFunc.push(t), this.gl.depthFunc(t);
            }),
            (Ot.prototype.stateDepthFunc = function() {
                return (
                    this._stackDepthFunc.length > 0 &&
                    this._stackDepthFunc[this._stackDepthFunc.length - 1]
                );
            }),
            (Ot.prototype.popDepthFunc = function() {
                this._stackDepthFunc.pop(),
                    this._stackDepthFunc.length > 0 &&
                        this.gl.depthFunc(
                            this._stackDepthFunc[
                                this._stackDepthFunc.length - 1
                            ]
                        );
            }),
            (Ot.prototype._stackBlend = []),
            (Ot.prototype.pushBlend = function(t) {
                this._stackBlend.push(t),
                    t
                        ? this.gl.enable(this.gl.BLEND)
                        : this.gl.disable(this.gl.BLEND);
            }),
            (Ot.prototype.popBlend = function() {
                this._stackBlend.pop(),
                    this._stackBlend[this._stackBlend.length - 1]
                        ? this.gl.enable(this.gl.BLEND)
                        : this.gl.disable(this.gl.BLEND);
            }),
            (Ot.prototype.stateBlend = function() {
                return this._stackBlend[this._stackBlend.length - 1];
            });
        (Ot.prototype._stackBlendMode = []),
            (Ot.prototype._stackBlendModePremul = []),
            (Ot.prototype.pushBlendMode = function(t, e) {
                this._stackBlendMode.push(t),
                    this._stackBlendModePremul.push(e);
                const i = this._stackBlendMode.length - 1;
                this.pushBlend(
                    this._stackBlendMode[i] !== st.BLEND_MODES.BLEND_NONE
                ),
                    this._setBlendMode(
                        this._stackBlendMode[i],
                        this._stackBlendModePremul[i]
                    );
            }),
            (Ot.prototype.popBlendMode = function() {
                this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
                const t = this._stackBlendMode.length - 1;
                this.popBlend(
                    this._stackBlendMode[t] !== st.BLEND_MODES.BLEND_NONE
                ),
                    t >= 0 &&
                        this._setBlendMode(
                            this._stackBlendMode[t],
                            this._stackBlendModePremul[t]
                        );
            }),
            (Ot.prototype.glGetAttribLocation = function(t, e) {
                const i = this.gl.getAttribLocation(t, e);
                return i;
            }),
            (Ot.prototype.shouldDrawHelpers = function(t) {
                return (
                    !this.frameStore.shadowPass &&
                    !!t.patch.isEditorMode() &&
                        (CABLES.UI.renderHelper ||
                            (CABLES.UI.renderHelperCurrent &&
                                t.isCurrentUiOp()))
                );
            }),
            (Ot.prototype._setBlendMode = function(t, e) {
                const i = this.gl;
                t == st.BLEND_MODES.BLEND_NONE ||
                    (t == st.BLEND_MODES.BLEND_ADD
                        ? e
                            ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                              i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE))
                            : (i.blendEquation(i.FUNC_ADD),
                              i.blendFunc(i.SRC_ALPHA, i.ONE))
                        : t == st.BLEND_MODES.BLEND_SUB
                        ? e
                            ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                              i.blendFuncSeparate(
                                  i.ZERO,
                                  i.ZERO,
                                  i.ONE_MINUS_SRC_COLOR,
                                  i.ONE_MINUS_SRC_ALPHA
                              ))
                            : (i.blendEquation(i.FUNC_ADD),
                              i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR))
                        : t == st.BLEND_MODES.BLEND_MUL
                        ? e
                            ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                              i.blendFuncSeparate(
                                  i.ZERO,
                                  i.SRC_COLOR,
                                  i.ZERO,
                                  i.SRC_ALPHA
                              ))
                            : (i.blendEquation(i.FUNC_ADD),
                              i.blendFunc(i.ZERO, i.SRC_COLOR))
                        : t == st.BLEND_MODES.BLEND_NORMAL
                        ? e
                            ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                              i.blendFuncSeparate(
                                  i.ONE,
                                  i.ONE_MINUS_SRC_ALPHA,
                                  i.ONE,
                                  i.ONE_MINUS_SRC_ALPHA
                              ))
                            : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                              i.blendFuncSeparate(
                                  i.SRC_ALPHA,
                                  i.ONE_MINUS_SRC_ALPHA,
                                  i.ONE,
                                  i.ONE_MINUS_SRC_ALPHA
                              ))
                        : d.log('setblendmode: unknown blendmode'));
            }),
            (Ot.prototype.setCursor = function(t) {
                this._cursor = t;
            });
        const xt = Object.assign(
            {
                Framebuffer: function(t, e, i, s) {
                    const r = t,
                        n =
                            r.gl.getExtension('WEBGL_depth_texture') ||
                            r.gl.getExtension('WEBKIT_WEBGL_depth_texture') ||
                            r.gl.getExtension('MOZ_WEBGL_depth_texture') ||
                            r.gl.DEPTH_TEXTURE;
                    n ||
                        r.exitError(
                            'NO_DEPTH_TEXTURE',
                            'no depth texture support'
                        );
                    let o = e || 512,
                        h = i || 512;
                    (s = s || { isFloatingPointTexture: !1 }).hasOwnProperty(
                        'filter'
                    ) || (s.filter = J.FILTER_LINEAR);
                    const a = new J(r, {
                        isFloatingPointTexture: s.isFloatingPointTexture,
                        filter: s.filter,
                        wrap: s.wrap || J.CLAMP_TO_EDGE,
                    });
                    let l = null;
                    n && (l = new J(r, { isDepthTexture: !0 }));
                    const u = r.gl.createFramebuffer(),
                        c = r.gl.createRenderbuffer();
                    (this.getWidth = function() {
                        return o;
                    }),
                        (this.getHeight = function() {
                            return h;
                        }),
                        (this.getGlFrameBuffer = function() {
                            return u;
                        }),
                        (this.getDepthRenderBuffer = function() {
                            return c;
                        }),
                        (this.getTextureColor = function() {
                            return a;
                        }),
                        (this.getTextureDepth = function() {
                            return l;
                        }),
                        (this.setFilter = function(t) {
                            (a.filter = t), a.setSize(o, h);
                        }),
                        (this.setSize = function(t, e) {
                            if (
                                (t < 2 && (t = 2),
                                e < 2 && (e = 2),
                                (o = Math.ceil(t)),
                                (h = Math.ceil(e)),
                                Q.profileFrameBuffercreate++,
                                r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
                                r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, c),
                                a.setSize(o, h),
                                l && l.setSize(o, h),
                                n &&
                                    r.gl.renderbufferStorage(
                                        r.gl.RENDERBUFFER,
                                        r.gl.DEPTH_COMPONENT16,
                                        o,
                                        h
                                    ),
                                r.gl.framebufferTexture2D(
                                    r.gl.FRAMEBUFFER,
                                    r.gl.COLOR_ATTACHMENT0,
                                    r.gl.TEXTURE_2D,
                                    a.tex,
                                    0
                                ),
                                n &&
                                    (r.gl.framebufferRenderbuffer(
                                        r.gl.FRAMEBUFFER,
                                        r.gl.DEPTH_ATTACHMENT,
                                        r.gl.RENDERBUFFER,
                                        c
                                    ),
                                    r.gl.framebufferTexture2D(
                                        r.gl.FRAMEBUFFER,
                                        r.gl.DEPTH_ATTACHMENT,
                                        r.gl.TEXTURE_2D,
                                        l.tex,
                                        0
                                    )),
                                !r.gl.isFramebuffer(u))
                            )
                                throw new Error('Invalid framebuffer');
                            const i = r.gl.checkFramebufferStatus(
                                r.gl.FRAMEBUFFER
                            );
                            switch (i) {
                                case r.gl.FRAMEBUFFER_COMPLETE:
                                    break;
                                case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                                    throw (d.warn(
                                        'FRAMEBUFFER_INCOMPLETE_ATTACHMENT...',
                                        o,
                                        h,
                                        a.tex,
                                        c
                                    ),
                                    new Error(
                                        'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT'
                                    ));
                                case r.gl
                                    .FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                                    throw (d.warn(
                                        'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'
                                    ),
                                    new Error(
                                        'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'
                                    ));
                                case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                                    throw (d.warn(
                                        'FRAMEBUFFER_INCOMPLETE_DIMENSIONS'
                                    ),
                                    new Error(
                                        'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS'
                                    ));
                                case r.gl.FRAMEBUFFER_UNSUPPORTED:
                                    throw (d.warn('FRAMEBUFFER_UNSUPPORTED'),
                                    new Error(
                                        'Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED'
                                    ));
                                case 36059:
                                    d.warn(
                                        'Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.'
                                    );
                                    break;
                                default:
                                    throw (d.warn('incomplete framebuffer', i),
                                    new Error('Incomplete framebuffer: ' + i));
                            }
                            r.gl.bindTexture(r.gl.TEXTURE_2D, null),
                                r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null),
                                r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null);
                        }),
                        (this.renderStart = function() {
                            r.pushModelMatrix(),
                                r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
                                r.pushGlFrameBuffer(u),
                                r.pushFrameBuffer(this),
                                r.pushPMatrix(),
                                r.gl.viewport(0, 0, o, h),
                                r.gl.clearColor(0, 0, 0, 0),
                                r.gl.clear(
                                    r.gl.COLOR_BUFFER_BIT |
                                        r.gl.DEPTH_BUFFER_BIT
                                );
                        }),
                        (this.renderEnd = function() {
                            r.popPMatrix(),
                                r.gl.bindFramebuffer(
                                    r.gl.FRAMEBUFFER,
                                    r.popGlFrameBuffer()
                                ),
                                r.popFrameBuffer(),
                                r.popModelMatrix(),
                                r.resetViewPort();
                        }),
                        (this.delete = function() {
                            a.delete(),
                                l && l.delete(),
                                r.gl.deleteRenderbuffer(c),
                                r.gl.deleteFramebuffer(u);
                        }),
                        this.setSize(o, h);
                },
                Framebuffer2: Z,
                Geometry: tt,
                BoundingBox: $,
                Marker: function(t) {
                    const e = new tt('marker');
                    e.setPointVertices([
                        1e-5,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1e-5,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1e-5,
                        0,
                        0,
                        1,
                    ]);
                    const i = new nt(t, e, t.gl.LINES);
                    i.setGeom(e);
                    const s = new bt(t, 'markermaterial'),
                        r =
                            ''.endl() +
                            'precision highp float;'.endl() +
                            'IN vec3 axisColor;'.endl() +
                            'void main()'.endl() +
                            '{'.endl() +
                            '    vec4 col=vec4(axisColor,1.0);'.endl() +
                            '    outColor = col;'.endl() +
                            '}',
                        n =
                            ''.endl() +
                            'IN vec3 vPosition;'.endl() +
                            'UNI mat4 projMatrix;'.endl() +
                            'UNI mat4 mvMatrix;'.endl() +
                            'OUT vec3 axisColor;'.endl() +
                            'void main()'.endl() +
                            '{'.endl() +
                            '   vec4 pos=vec4(vPosition, 1.0);'.endl() +
                            '   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);'.endl() +
                            '   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);'.endl() +
                            '   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);'.endl() +
                            '   gl_Position = projMatrix * mvMatrix * pos;'.endl() +
                            '}';
                    s.setSource(n, r),
                        (this._vScale = vec3.create()),
                        (this.draw = function(t, e, r) {
                            const n = e || 2;
                            t.pushModelMatrix(),
                                t.pushShader(s),
                                vec3.set(this._vScale, n, n, n),
                                mat4.scale(
                                    t.mvMatrix,
                                    t.mvMatrix,
                                    this._vScale
                                ),
                                t.pushDepthTest(1 == r),
                                i.render(t.getShader()),
                                t.popDepthTest(),
                                t.popShader(),
                                t.popModelMatrix();
                        });
                },
                WirePoint: function(t) {
                    const e = t.gl.createBuffer(),
                        i = vec3.create();
                    (this.render = function(t, s) {
                        t.pushModelMatrix(),
                            vec3.set(i, s, s, s),
                            mat4.scale(t.mvMatrix, t.mvMatrix, i);
                        const r = t.getShader();
                        r.bind(),
                            t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                            t.gl.vertexAttribPointer(
                                r.getAttrVertexPos(),
                                e.itemSize,
                                t.gl.FLOAT,
                                !1,
                                0,
                                0
                            ),
                            t.gl.enableVertexAttribArray(r.getAttrVertexPos()),
                            t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                            t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems),
                            t.popModelMatrix();
                    }),
                        (function() {
                            const i = [];
                            let s = 0,
                                r = 0;
                            for (s = 0; s <= Math.round(24); s++)
                                (r = (360 / Math.round(24)) * s * dt),
                                    i.push(0.5 * Math.cos(r)),
                                    i.push(0),
                                    i.push(0.5 * Math.sin(r));
                            for (s = 0; s <= Math.round(24); s++)
                                (r = (360 / Math.round(24)) * s * dt),
                                    i.push(0.5 * Math.cos(r)),
                                    i.push(0.5 * Math.sin(r)),
                                    i.push(0);
                            for (s = 0; s <= Math.round(24); s++)
                                (r = (360 / Math.round(24)) * s * dt),
                                    i.push(0),
                                    i.push(0.5 * Math.cos(r)),
                                    i.push(0.5 * Math.sin(r));
                            t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                                t.gl.bufferData(
                                    t.gl.ARRAY_BUFFER,
                                    new Float32Array(i),
                                    t.gl.STATIC_DRAW
                                ),
                                (e.itemSize = 3),
                                (e.numItems = i.length / e.itemSize);
                        })();
                },
                WireCube: function(t) {
                    const e = t.gl.createBuffer(),
                        i = vec3.create();
                    (this.render = function(t, s, r, n) {
                        t.pushModelMatrix(),
                            vec3.set(i, s || 1, r || 1, n || 1),
                            mat4.scale(t.mvMatrix, t.mvMatrix, i);
                        const o = t.getShader();
                        o.bind(),
                            t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                            t.gl.vertexAttribPointer(
                                o.getAttrVertexPos(),
                                e.itemSize,
                                t.gl.FLOAT,
                                !1,
                                0,
                                0
                            ),
                            t.gl.enableVertexAttribArray(o.getAttrVertexPos()),
                            t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                            t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems),
                            t.popModelMatrix();
                    }),
                        (function() {
                            const i = [];
                            i.push(-1, -1, 1),
                                i.push(1, -1, 1),
                                i.push(1, 1, 1),
                                i.push(-1, 1, 1),
                                i.push(-1, -1, 1),
                                i.push(-1, -1, -1),
                                i.push(1, -1, -1),
                                i.push(1, 1, -1),
                                i.push(-1, 1, -1),
                                i.push(-1, -1, -1),
                                i.push(-1, -1, -1),
                                i.push(-1, 1, -1),
                                i.push(-1, 1, 1),
                                i.push(-1, -1, 1),
                                i.push(-1, -1, -1),
                                i.push(1, -1, -1),
                                i.push(1, 1, -1),
                                i.push(1, 1, 1),
                                i.push(1, -1, 1),
                                i.push(1, -1, -1),
                                t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                                t.gl.bufferData(
                                    t.gl.ARRAY_BUFFER,
                                    new Float32Array(i),
                                    t.gl.STATIC_DRAW
                                ),
                                (e.itemSize = 3),
                                (e.numItems = i.length / e.itemSize);
                        })();
                },
                MatrixStack: yt,
                Mesh: nt,
                MESH: rt,
                ShaderLibMods: lt,
                Shader: bt,
                Uniform: et,
                MESHES: ht,
                Context: Ot,
                Texture: J,
                TextureEffect: at,
                isWindows: _t,
                getWheelSpeed: gt,
                getWheelDelta: mt,
                onLoadingAssetsFinished: null,
                profileData: Q,
                UniColorShader: class {
                    constructor(t) {
                        this.shader = new CGL.Shader(t, 'markermaterial');
                        const e =
                                ''.endl() +
                                'void main()'.endl() +
                                '{'.endl() +
                                '    outColor = vec4(color.rgb,1.0);'.endl() +
                                '}',
                            i =
                                ''.endl() +
                                'IN vec3 vPosition;'.endl() +
                                'UNI mat4 projMatrix;'.endl() +
                                'UNI mat4 mvMatrix;'.endl() +
                                'void main()'.endl() +
                                '{'.endl() +
                                '   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);'.endl() +
                                '}';
                        this.shader.setSource(i, e),
                            (this.coloruni = this.shader.addUniformFrag(
                                '4f',
                                'color',
                                [1, 0.777, 1, 1]
                            ));
                    }
                    setColor(t, e, i, s) {
                        this.coloruni.set(t, e, i, s);
                    }
                },
            },
            st.BLEND_MODES,
            st.SHADER,
            st.MATH,
            st.BLEND_MODES
        );
        window.CGL = xt;
        const It = function(t) {
            (this._loadingAssets = {}),
                (this._cbFinished = []),
                (this._assetTasks = []),
                (this._percent = 0),
                (this._count = 0),
                (this._countFinished = 0),
                (this._order = 0),
                (this._startTime = 0),
                (this._patch = t),
                (this._wasFinishedPrinted = !1),
                (this._loadingAssetTaskCb = !1);
        };
        (It.prototype.setOnFinishedLoading = function(t) {
            this._cbFinished.push(t);
        }),
            (It.prototype.getNumAssets = function() {
                return this._countFinished;
            }),
            (It.prototype.getProgress = function() {
                return this._percent;
            }),
            (It.prototype.checkStatus = function() {
                (this._countFinished = 0), (this._count = 0);
                for (const t in this._loadingAssets)
                    this._count++,
                        this._loadingAssets[t].finished ||
                            this._countFinished++;
                if (
                    ((this._percent =
                        (this._count - this._countFinished) / this._count),
                    0 === this._countFinished)
                ) {
                    for (let t = 0; t < this._cbFinished.length; t++)
                        if (this._cbFinished[t]) {
                            const e = this._cbFinished[t];
                            setTimeout(() => {
                                e(this._patch);
                            }, 200);
                        }
                    this._wasFinishedPrinted ||
                        ((this._wasFinishedPrinted = !0), this.print());
                }
            }),
            (It.prototype.print = function() {
                if (this._patch.config.silent) return;
                const t = [];
                for (const e in this._loadingAssets)
                    t.push([
                        this._loadingAssets[e].order,
                        this._loadingAssets[e].type,
                        this._loadingAssets[e].name,
                        (this._loadingAssets[e].timeEnd -
                            this._loadingAssets[e].timeStart) /
                            1e3 +
                            's',
                    ]);
                console.groupCollapsed(
                    'finished loading ' +
                        this._order +
                        ' assets in ' +
                        (Date.now() - this._startTime) / 1e3 +
                        's'
                ),
                    console.table(t),
                    console.groupEnd();
            }),
            (It.prototype.finished = function(t) {
                this._loadingAssets[t] &&
                    ((this._loadingAssets[t].finished = !0),
                    (this._loadingAssets[t].timeEnd = Date.now())),
                    this.checkStatus();
            }),
            (It.prototype._startAssetTasks = function() {
                for (let t = 0; t < this._assetTasks.length; t++)
                    this._assetTasks[t]();
                this._assetTasks.length = 0;
            }),
            (It.prototype.addAssetLoadingTask = function(t) {
                this._patch.isEditorMode() && !CABLES.UI.loaded
                    ? (this._assetTasks.push(t),
                      this._loadingAssetTaskCb ||
                          window.gui.addEventListener(
                              'uiloaded',
                              this._startAssetTasks.bind(this)
                          ),
                      (this._loadingAssetTaskCb = !0))
                    : t();
            }),
            (It.prototype.start = function(t, e) {
                0 == this._startTime && (this._startTime = Date.now());
                const i = y();
                return (
                    (this._loadingAssets[i] = {
                        id: i,
                        type: t,
                        name: e,
                        finished: !1,
                        timeStart: Date.now(),
                        order: this._order,
                    }),
                    this._order++,
                    i
                );
            });
        const vt = function() {
            (this._loops = []), (this._indizes = []), (this._index = 0);
        };
        (vt.prototype.pushLoop = function(t) {
            this._loops.push(Math.abs(Math.floor(t))),
                this._indizes.push(this._index);
        }),
            (vt.prototype.popLoop = function() {
                this._loops.pop(),
                    (this._index = this._indizes.pop()),
                    0 === this._loops.length && (this._index = 0);
            }),
            (vt.prototype.numLoops = function() {
                return this._loops.length;
            }),
            (vt.prototype.numCycles = function() {
                if (0 === this._loops.length) return 0;
                let t = this._loops[0];
                for (let e = 1; e < this._loops.length; e++)
                    t *= this._loops[e];
                return t;
            }),
            (vt.prototype.inLoop = function() {
                return this._loops.length > 0;
            }),
            (vt.prototype.increment = function() {
                this._index++;
            }),
            (vt.prototype.index = function() {
                return this._index;
            });
        const Pt = function() {
                let t = {},
                    e = null,
                    i = 0;
                (this.getItems = function() {
                    return t;
                }),
                    (this.clear = function() {
                        t = {};
                    }),
                    (this.add = function(s, r) {
                        null !== e &&
                            ((r && r.id == e) ||
                                (t[e] &&
                                    ((t[e].timeUsed += performance.now() - i),
                                    (!t[e].peakTime ||
                                        ct() - t[e].peakTime > 5e3) &&
                                        ((t[e].peak = 0),
                                        (t[e].peakTime = ct())),
                                    (t[e].peak = Math.max(
                                        t[e].peak,
                                        performance.now() - i
                                    ))))),
                            null !== r
                                ? (t[r.id] ||
                                      (t[r.id] = {
                                          numTriggers: 0,
                                          timeUsed: 0,
                                      }),
                                  t[r.id].numTriggers++,
                                  (t[r.id].opid = r.parent.id),
                                  (t[r.id].title =
                                      r.parent.name + '.' + r.name),
                                  (t[r.id].subPatch =
                                      r.parent.uiAttribs.subPatch),
                                  (e = r.id),
                                  (i = performance.now()))
                                : (e = null);
                    }),
                    (this.print = function() {
                        d.log('--------');
                        for (const e in t)
                            d.log(
                                t[e].title +
                                    ': ' +
                                    t[e].numTriggers +
                                    ' / ' +
                                    t[e].timeUsed
                            );
                    });
            },
            Rt = function(t) {
                (this._patch = t), (this.result = []);
            };
        (Rt.MIDI = 0),
            (Rt.POINTERLOCK = 1),
            (Rt.WEBAUDIO = 2),
            (Rt.WEBGL2 = 3),
            ((Rt.infos = [])[Rt.POINTERLOCK] = {
                title: 'pointerLock',
                caniuse: 'https://caniuse.com/#search=pointerlock',
            }),
            (Rt.infos[Rt.MIDI] = {
                title: 'midi API',
                caniuse: 'https://caniuse.com/#search=midi',
            }),
            (Rt.infos[Rt.WEBAUDIO] = {
                title: 'web audio',
                caniuse: 'https://caniuse.com/#search=webaudio',
            }),
            (Rt.infos[Rt.WEBGL2] = { title: 'WebGL 2' }),
            (Rt.prototype.checkRequirement = function(t, e) {
                switch (((this.result = []), t)) {
                    case Rt.WEBGL2:
                        return e.patch.cgl.glVersion >= 2;
                    case Rt.POINTERLOCK:
                        return 'exitPointerLock' in document;
                    case Rt.MIDI:
                        return 'MIDIAccess' in window;
                    case Rt.WEBAUDIO:
                        let t = !1;
                        return (
                            window.audioContext && (t = !0),
                            t ||
                                (!('webkitAudioContext' in window) &&
                                    !('AudioContext' in window)) ||
                                (t = !0),
                            t
                        );
                }
            }),
            (Rt.prototype.checkOp = function(t) {
                if (t && t.requirements)
                    for (let e = 0; e < t.requirements.length; e++) {
                        const i = t.requirements[e];
                        if (!this.result[i]) {
                            const e = this.checkRequirement(i, t);
                            if (!e) {
                                t.patch.cgl &&
                                    t.patch.cgl.canvas &&
                                    t.patch.cgl.canvas.remove();
                                let e = Rt.infos[i].title;
                                throw (Rt.infos[i].caniuse &&
                                    (e =
                                        '<a href="' +
                                        Rt.infos[i].caniuse +
                                        '" target="_blank">' +
                                        Rt.infos[i].title +
                                        ' (' +
                                        t.objName +
                                        ')</a>'),
                                new Error(
                                    'this browser does not meet requirement: ' +
                                        Rt.infos[i].title +
                                        ' (' +
                                        t.objName +
                                        ')'
                                ));
                            }
                            this.result[i] = { success: e, info: Rt.infos[i] };
                        }
                    }
            });
        const Nt = function(t) {
            _.apply(this),
                (this.ops = []),
                (this.settings = {}),
                (this.config = t || {
                    glCanvasResizeToWindow: !1,
                    prefixAssetPath: '',
                    silent: !1,
                    onError: null,
                    onFinishedLoading: null,
                    onFirstFrameRendered: null,
                    onPatchLoaded: null,
                    fpsLimit: 0,
                }),
                (this.timer = new pt()),
                (this.freeTimer = new pt()),
                (this.animFrameOps = []),
                (this.animFrameCallbacks = []),
                (this.gui = !1),
                (this.silent = !1),
                (this.profiler = null),
                (this.onLoadStart = null),
                (this.onLoadEnd = null),
                (this.aborted = !1),
                (this._crashedOps = []),
                (this._renderOneFrame = !1),
                (this._animReq = null),
                (this._opIdCache = {}),
                (this.loading = new It(this)),
                (this._perf = {
                    fps: 0,
                    ms: 0,
                    _fpsFrameCount: 0,
                    _fpsMsCount: 0,
                    _fpsStart: 0,
                }),
                (this._volumeListeners = []),
                (this._paused = !1),
                (this._frameNum = 0),
                (this.instancing = new vt()),
                (this.onOneFrameRendered = null),
                (this.namedTriggers = {}),
                (this._origData = null),
                (this._frameNext = 0),
                (this._frameInterval = 0),
                (this._lastFrameTime = 0),
                (this._frameWasdelayed = !0),
                (function() {
                    return !this;
                })() || console.log('not in strict mode: core patch'),
                (this._isLocal = 0 === document.location.href.indexOf('file:')),
                d.setSilent(this.config.silent),
                this.config.hasOwnProperty('doRequestAnimation') ||
                    (this.config.doRequestAnimation = !0),
                this.config.prefixAssetPath ||
                    (this.config.prefixAssetPath = ''),
                this.config.masterVolume || (this.config.masterVolume = 1),
                (this._variables = {}),
                (this._variableListeners = []),
                (this.vars = {}),
                t && t.vars && (this.vars = t.vars),
                (this.cgl = new Ot(this)),
                this.cgl.setCanvas(
                    this.config.glCanvasId || this.config.glCanvas || 'glcanvas'
                ),
                !0 === this.config.glCanvasResizeToWindow &&
                    this.cgl.setAutoResize('window'),
                !0 === this.config.glCanvasResizeToParent &&
                    this.cgl.setAutoResize('parent'),
                this.loading.setOnFinishedLoading(
                    this.config.onFinishedLoading
                ),
                this.cgl.aborted && (this.aborted = !0),
                this.cgl.silent && (this.silent = !0),
                this.freeTimer.play(),
                this.exec(),
                this.aborted ||
                    (this.config.patch
                        ? this.deSerialize(this.config.patch)
                        : this.config.patchFile &&
                          C(this.config.patchFile, (t, e) => {
                              const i = JSON.parse(e);
                              if (t) {
                                  return (
                                      d.error('err', t),
                                      d.error('data', i),
                                      void d.error('data', i.msg)
                                  );
                              }
                              this.deSerialize(i);
                          }),
                    this.timer.play()),
                console.log('made with https://cables.gl');
        };
        (Nt.prototype.isPlaying = function() {
            return !this._paused;
        }),
            (Nt.prototype.isRenderingOneFrame = function() {
                return this._renderOneFrame;
            }),
            (Nt.prototype.renderOneFrame = function() {
                (this._paused = !0),
                    (this._renderOneFrame = !0),
                    this.exec(),
                    (this._renderOneFrame = !1);
            }),
            (Nt.prototype.getFPS = function() {
                return this._perf.fps;
            }),
            (Nt.prototype.isEditorMode = function() {
                return !0 === this.config.editorMode;
            }),
            (Nt.prototype.pause = function() {
                cancelAnimationFrame(this._animReq),
                    this.emitEvent('pause'),
                    (this._animReq = null),
                    (this._paused = !0),
                    this.freeTimer.pause();
            }),
            (Nt.prototype.resume = function() {
                this._paused &&
                    (cancelAnimationFrame(this._animReq),
                    this.emitEvent('resume'),
                    (this._paused = !1),
                    this.freeTimer.play(),
                    this.exec());
            }),
            (Nt.prototype.setVolume = function(t) {
                this.config.masterVolume = t;
                for (let e = 0; e < this._volumeListeners.length; e++)
                    this._volumeListeners[e].onMasterVolumeChanged(t);
            }),
            (Nt.prototype.getAssetPath = function() {
                if (this.isEditorMode())
                    return '/assets/' + gui.project()._id + '/';
                if (document.location.href.indexOf('cables.gl') > 0) {
                    const t = document.location.href.split('/');
                    return '/assets/' + t[t.length - 1] + '/';
                }
                return 'assets/';
            }),
            (Nt.prototype.getFilePath = function(t) {
                return (
                    this._isLocal &&
                        !this.config.allowLocalFileAccess &&
                        this.exitError(
                            'localAccess',
                            'Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this.'
                        ),
                    t
                        ? 0 === (t = String(t)).indexOf('https:') ||
                          0 === t.indexOf('http:')
                            ? t
                            : ((t = t.replace('//', '/')),
                              this.config.prefixAssetPath +
                                  t +
                                  (this.config.suffixAssetPath || ''))
                        : t
                );
            }),
            (Nt.prototype.clear = function() {
                for (
                    this.cgl.TextureEffectMesh = null,
                        this.animFrameOps.length = 0,
                        this.timer = new pt();
                    this.ops.length > 0;

                )
                    this.deleteOp(this.ops[0].id);
            }),
            (Nt.getOpClass = function(t) {
                const e = t.split('.');
                let i = null;
                try {
                    return (
                        2 == e.length
                            ? (i = window[e[0]][e[1]])
                            : 3 == e.length
                            ? (i = window[e[0]][e[1]][e[2]])
                            : 4 == e.length
                            ? (i = window[e[0]][e[1]][e[2]][e[3]])
                            : 5 == e.length
                            ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]])
                            : 6 == e.length
                            ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]])
                            : 7 == e.length
                            ? (i =
                                  window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][
                                      e[6]
                                  ])
                            : 8 == e.length
                            ? (i =
                                  window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][
                                      e[6]
                                  ][e[7]])
                            : 9 == e.length
                            ? (i =
                                  window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][
                                      e[6]
                                  ][e[7]][e[8]])
                            : 10 == e.length &&
                              (i =
                                  window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][
                                      e[6]
                                  ][e[7]][e[8]][e[9]]),
                        i
                    );
                } catch (t) {
                    return null;
                }
            }),
            (Nt.prototype.createOp = function(t, e) {
                const i = t.split('.');
                let s = null,
                    r = '';
                try {
                    if (-1 == t.indexOf('Ops.')) {
                        const i = t;
                        if (!CABLES.OPS[i])
                            throw new Error('could not find op by id: ' + i);
                        (r = CABLES.OPS[i].objName),
                            (s = new CABLES.OPS[i].f(this, r, e, i)),
                            (s.opId = i);
                    }
                    if (!s) {
                        r = t;
                        if (!Nt.getOpClass(r))
                            throw (this.emitEvent(
                                'criticalError',
                                'unknown op',
                                'unknown op: ' + r
                            ),
                            d.error('unknown op: ' + r),
                            new Error('unknown op: ' + r));
                        if (
                            (2 == i.length
                                ? (s = new window[i[0]][i[1]](this, r, e))
                                : 3 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]](this, r, e))
                                : 4 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]](
                                      this,
                                      r,
                                      e
                                  ))
                                : 5 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](
                                      this,
                                      r,
                                      e
                                  ))
                                : 6 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][
                                      i[5]
                                  ](this, r, e))
                                : 7 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][
                                      i[5]
                                  ][i[6]](this, r, e))
                                : 8 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][
                                      i[5]
                                  ][i[6]][i[7]](this, r, e))
                                : 9 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][
                                      i[5]
                                  ][i[6]][i[7]][i[8]](this, r, e))
                                : 10 == i.length
                                ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][
                                      i[5]
                                  ][i[6]][i[7]][i[8]][i[9]](this, r, e))
                                : d.log('parts.length', i.length),
                            s)
                        ) {
                            s.opId = null;
                            for (const t in CABLES.OPS)
                                CABLES.OPS[t].objName == r && (s.opId = t);
                        }
                    }
                } catch (t) {
                    if (
                        (this._crashedOps.push(r),
                        console.error(t),
                        this.emitEvent('exceptionOp', t, r),
                        !this.isEditorMode())
                    )
                        throw (d.log(t),
                        d.error('[instancing error] ' + r, t),
                        CABLES.api && CABLES.api.sendErrorReport(t),
                        this.exitError(
                            'INSTANCE_ERR',
                            'Instancing Error ' + r,
                            t
                        ),
                        new Error('instancing error ' + r));
                }
                return (
                    s
                        ? ((s.objName = r), (s.patch = this))
                        : console.log('no op was created!?'),
                    s
                );
            }),
            (Nt.prototype.addOp = function(t, e, i) {
                const s = this.createOp(t, i);
                return (
                    s
                        ? (e && e.hasOwnProperty('errors') && delete e.errors,
                          e && e.hasOwnProperty('error') && delete e.error,
                          s.uiAttr(e),
                          s.onCreate && s.onCreate(),
                          s.hasOwnProperty('onAnimFrame') &&
                              this.addOnAnimFrame(s),
                          s.hasOwnProperty('onMasterVolumeChanged') &&
                              this._volumeListeners.push(s),
                          this.ops.push(s),
                          (this._opIdCache[s.id] = s),
                          this.emitEvent('onOpAdd', s),
                          s.init && s.init())
                        : console.error('addop: no op.....'),
                    s
                );
            }),
            (Nt.prototype.addOnAnimFrame = function(t) {
                for (let e = 0; e < this.animFrameOps.length; e++)
                    if (this.animFrameOps[e] == t) return;
                this.animFrameOps.push(t);
            }),
            (Nt.prototype.removeOnAnimFrame = function(t) {
                for (let e = 0; e < this.animFrameOps.length; e++)
                    if (this.animFrameOps[e] == t)
                        return void this.animFrameOps.splice(e, 1);
            }),
            (Nt.prototype.addOnAnimFrameCallback = function(t) {
                this.animFrameCallbacks.push(t);
            }),
            (Nt.prototype.removeOnAnimCallback = function(t) {
                for (let e = 0; e < this.animFrameCallbacks.length; e++)
                    if (this.animFrameCallbacks[e] == t)
                        return void this.animFrameCallbacks.splice(e, 1);
            }),
            (Nt.prototype.deleteOp = function(t, e, i) {
                let s = !1;
                for (const r in this.ops)
                    if (this.ops[r].id == t) {
                        let n = null,
                            o = null;
                        if (this.ops[r]) {
                            (s = !0),
                                e &&
                                    this.ops[r].portsIn.length > 0 &&
                                    this.ops[r].portsIn[0].isLinked() &&
                                    this.ops[r].portsOut.length > 0 &&
                                    this.ops[r].portsOut[0].isLinked() &&
                                    this.ops[r].portsIn[0].getType() ==
                                        this.ops[r].portsOut[0].getType() &&
                                    ((n = this.ops[
                                        r
                                    ].portsIn[0].links[0].getOtherPort(
                                        this.ops[r].portsIn[0]
                                    )),
                                    (o = this.ops[
                                        r
                                    ].portsOut[0].links[0].getOtherPort(
                                        this.ops[r].portsOut[0]
                                    )));
                            const h = this.ops[r];
                            h.removeLinks(),
                                this.onDelete &&
                                    (d.warn(
                                        'deprecated this.onDelete',
                                        this.onDelete
                                    ),
                                    this.onDelete(h)),
                                this.ops.splice(r, 1),
                                this.emitEvent('onOpDelete', h, i),
                                h.onDelete && h.onDelete(i),
                                h.cleanUp(),
                                null !== n &&
                                    null !== o &&
                                    this.link(
                                        n.parent,
                                        n.getName(),
                                        o.parent,
                                        o.getName()
                                    ),
                                delete this._opIdCache[t];
                        }
                    }
                s || console.log('core patch deleteop: not found...');
            }),
            (Nt.prototype.getFrameNum = function() {
                return this._frameNum;
            }),
            (Nt.prototype.renderFrame = function(t) {
                this.timer.update(), this.freeTimer.update();
                const e = this.timer.getTime(),
                    i = performance.now();
                for (let t = 0; t < this.animFrameCallbacks.length; ++t)
                    this.animFrameCallbacks[t] &&
                        this.animFrameCallbacks[t](e, this._frameNum);
                for (let t = 0; t < this.animFrameOps.length; ++t)
                    this.animFrameOps[t].onAnimFrame &&
                        this.animFrameOps[t].onAnimFrame(e);
                (CGL.profileData.profileOnAnimFrameOps = performance.now() - i),
                    this.emitEvent('onRenderFrame', e),
                    this._frameNum++,
                    1 == this._frameNum &&
                        this.config.onFirstFrameRendered &&
                        this.config.onFirstFrameRendered();
            }),
            (Nt.prototype.exec = function(t) {
                if (!this._renderOneFrame && (this._paused || this.aborted))
                    return;
                (this.config.fpsLimit = this.config.fpsLimit || 0),
                    this.config.fpsLimit &&
                        (this._frameInterval = 1e3 / this.config.fpsLimit);
                const e = CABLES.now(),
                    i = e - this._frameNext;
                if (
                    this.isEditorMode() &&
                    !this._renderOneFrame &&
                    e - this._lastFrameTime >= 500 &&
                    0 !== this._lastFrameTime &&
                    !this._frameWasdelayed
                )
                    return (
                        (this._lastFrameTime = 0),
                        setTimeout(this.exec.bind(this), 500),
                        this.emitEvent('renderDelayStart'),
                        void (this._frameWasdelayed = !0)
                    );
                if (
                    this._renderOneFrame ||
                    0 === this.config.fpsLimit ||
                    i > this._frameInterval ||
                    this._frameWasdelayed
                ) {
                    const t = CABLES.now();
                    this.renderFrame(),
                        (this._perf._lastFrameTime = CABLES.now()),
                        this._perf._fpsFrameCount++,
                        (this._perf._fpsMsCount += CABLES.now() - t),
                        this._frameInterval &&
                            (this._frameNext = e - (i % this._frameInterval));
                }
                this._frameWasdelayed &&
                    (this.emitEvent('renderDelayEnd'),
                    (this._frameWasdelayed = !1)),
                    this._renderOneFrame &&
                        (this.onOneFrameRendered && this.onOneFrameRendered(),
                        this.emitEvent('renderedOneFrame'),
                        (this._renderOneFrame = !1)),
                    CABLES.now() - this._perf._fpsStart >= 1e3 &&
                        this._perf.fps != this._perf._fpsFrameCount &&
                        ((this._perf.fps = this._perf._fpsFrameCount),
                        (this._perf.ms = Math.round(
                            this._perf._fpsMsCount / this._perf._fpsFrameCount
                        )),
                        this.emitEvent('performance', this._perf),
                        (this._perf._fpsFrameCount = 0),
                        (this._perf._fpsMsCount = 0),
                        (this._perf._fpsStart = CABLES.now())),
                    this.config.doRequestAnimation &&
                        (this._animReq = requestAnimationFrame(
                            this.exec.bind(this)
                        ));
            }),
            (Nt.prototype.link = function(t, e, i, s, r) {
                if (!t) return void d.log('link: op1 is null ');
                if (!i) return void d.log('link: op2 is null');
                const n = t.getPort(e, r),
                    o = i.getPort(s, r);
                if (n)
                    if (o) {
                        if (!n.shouldLink(n, o) || !o.shouldLink(n, o))
                            return !1;
                        if (j.canLink(n, o)) {
                            const t = new j(this);
                            return (
                                t.link(n, o),
                                this.emitEvent('onLink', n, o, t),
                                t
                            );
                        }
                    } else
                        console.warn(
                            'port not found! ' +
                                s +
                                ' of ' +
                                i.name +
                                '(' +
                                i.objName +
                                ')'
                        );
                else
                    console.warn(
                        'port not found! ' + e + '(' + t.objName + ')'
                    );
            }),
            (Nt.prototype.serialize = function(t) {
                const e = { ops: [] };
                e.settings = this.settings;
                for (const t in this.ops)
                    e.ops.push(this.ops[t].getSerialized());
                return t ? e : JSON.stringify(e);
            }),
            (Nt.prototype.getOpById = function(t) {
                return this._opIdCache[t];
            }),
            (Nt.prototype.getOpsById = function(t) {
                const e = [];
                for (const i in this.ops)
                    for (let s = 0; s < t.length; s++)
                        if (this.ops[i].id === t[s]) {
                            e.push(this.ops[i]);
                            break;
                        }
                return e;
            }),
            (Nt.prototype.getOpsByName = function(t) {
                const e = [];
                for (const i in this.ops)
                    this.ops[i].name == t && e.push(this.ops[i]);
                return e;
            }),
            (Nt.prototype.getOpsByObjName = function(t) {
                const e = [];
                for (const i in this.ops)
                    this.ops[i].objName == t && e.push(this.ops[i]);
                return e;
            }),
            (Nt.prototype.loadLib = function(t) {
                M(
                    '/ui/libs/' + t + '.js',
                    (t, e) => {
                        const i = document.createElement('script');
                        (i.type = 'text/javascript'),
                            (i.text = e),
                            document
                                .getElementsByTagName('head')[0]
                                .appendChild(i);
                    },
                    'GET'
                );
            }),
            (Nt.prototype.reloadOp = function(t, e) {
                let i = 0;
                const s = [],
                    r = [];
                for (const e in this.ops)
                    this.ops[e].objName == t && r.push(this.ops[e]);
                for (let e = 0; e < r.length; e++) {
                    i++;
                    const n = r[e];
                    n.deleted = !0;
                    const o = this,
                        h = this.addOp(t, n.uiAttribs);
                    let a, l;
                    for (a in (s.push(h), n.portsIn))
                        if (0 === n.portsIn[a].links.length) {
                            const t = h.getPort(n.portsIn[a].name);
                            t
                                ? t.set(n.portsIn[a].get())
                                : d.error(
                                      '[reloadOp] could not set port ' +
                                          n.portsIn[a].name +
                                          ', propably renamed port ?'
                                  );
                        } else
                            for (; n.portsIn[a].links.length; ) {
                                const t = n.portsIn[a].links[0].portIn.name,
                                    e = n.portsIn[a].links[0].portOut.name,
                                    i = n.portsIn[a].links[0].portOut.parent;
                                n.portsIn[a].links[0].remove(),
                                    (l = o.link(h, t, i, e)),
                                    l
                                        ? l.setValue()
                                        : d.log(
                                              '[reloadOp] relink after op reload not successfull for port ' +
                                                  e
                                          );
                            }
                    for (a in n.portsOut)
                        for (; n.portsOut[a].links.length; ) {
                            const t = n.portsOut[a].links[0].portOut.name,
                                e = n.portsOut[a].links[0].portIn.name,
                                i = n.portsOut[a].links[0].portIn.parent;
                            n.portsOut[a].links[0].remove(),
                                (l = o.link(h, t, i, e)),
                                l
                                    ? l.setValue()
                                    : d.log(
                                          'relink after op reload not successfull for port ' +
                                              e
                                      );
                        }
                    this.deleteOp(n.id, !1, !0);
                }
                e(i, s);
            }),
            (Nt.prototype.getSubPatchOps = function(t) {
                const e = [];
                for (const i in this.ops)
                    this.ops[i].uiAttribs &&
                        this.ops[i].uiAttribs.subPatch == t &&
                        e.push(this.ops[i]);
                return e;
            }),
            (Nt.prototype.getSubPatchOp = function(t, e) {
                for (const i in this.ops)
                    if (
                        this.ops[i].uiAttribs &&
                        this.ops[i].uiAttribs.subPatch == t &&
                        this.ops[i].objName == e
                    )
                        return this.ops[i];
                return !1;
            }),
            (Nt.prototype.deSerialize = function(t, e) {
                if (this.aborted) return;
                const i = this.loading.start('core', 'deserialize');
                this.onLoadStart && this.onLoadStart(),
                    (this.namespace = t.namespace || ''),
                    (this.name = t.name || ''),
                    'string' == typeof t && (t = JSON.parse(t));
                const s = this;
                this.settings = t.settings;
                const r = new Rt(this);
                for (const i in t.ops) {
                    const s = CABLES.now(),
                        n = t.ops[i];
                    let o = null;
                    try {
                        o = n.opId
                            ? this.addOp(n.opId, n.uiAttribs, n.id)
                            : this.addOp(n.objName, n.uiAttribs, n.id);
                    } catch (t) {
                        throw (console.warn(
                            '[instancing error] op data:',
                            n,
                            t
                        ),
                        new Error('instancing error: ' + n.objName));
                    }
                    if ((r.checkOp(o), o)) {
                        e && (o.id = b()),
                            (o.portsInData = n.portsIn),
                            (o._origData = n);
                        for (const t in n.portsIn) {
                            const e = n.portsIn[t],
                                i = o.getPort(e.name);
                            if (
                                (!i ||
                                    ('bool' != i.uiAttribs.display &&
                                        'bool' != i.uiAttribs.type) ||
                                    isNaN(e.value) ||
                                    (e.value = !0 === e.value),
                                i &&
                                    void 0 !== e.value &&
                                    i.type != k.OP.OP_PORT_TYPE_TEXTURE &&
                                    i.set(e.value),
                                i &&
                                    e &&
                                    e.animated &&
                                    i.setAnimated(e.animated),
                                i &&
                                    e &&
                                    e.useVariable &&
                                    i.setVariableName(e.useVariable),
                                i && e && e.anim)
                            ) {
                                i.anim || (i.anim = new K()),
                                    e.anim.loop && (i.anim.loop = e.anim.loop);
                                for (const t in e.anim.keys)
                                    i.anim.keys.push(new V.Key(e.anim.keys[t]));
                            }
                        }
                        for (const e in n.portsOut) {
                            const s = o.getPort(n.portsOut[e].name);
                            s &&
                                s.type != k.OP.OP_PORT_TYPE_TEXTURE &&
                                n.portsOut[e].hasOwnProperty('value') &&
                                s.set(t.ops[i].portsOut[e].value);
                        }
                    }
                    const h = Math.round(100 * (CABLES.now() - s)) / 100;
                    !this.silent &&
                        h > 200 &&
                        console.warn('long op init ', t.ops[i].objName, h);
                }
                for (const t in this.ops)
                    this.ops[t].onLoadedValueSet &&
                        (this.ops[t].onLoadedValueSet(this.ops[t]._origData),
                        (this.ops[t].onLoadedValueSet = null),
                        (this.ops[t]._origData = null));
                if (t.ops)
                    for (let e = 0; e < t.ops.length; e++)
                        if (t.ops[e].portsIn)
                            for (let i = 0; i < t.ops[e].portsIn.length; i++)
                                if (t.ops[e].portsIn[i].links)
                                    for (
                                        let r = 0;
                                        r < t.ops[e].portsIn[i].links.length;
                                        r++
                                    )
                                        t.ops[e].portsIn[i].links[r] &&
                                            ((n =
                                                t.ops[e].portsIn[i].links[r]
                                                    .objIn),
                                            (o =
                                                t.ops[e].portsIn[i].links[r]
                                                    .objOut),
                                            (h =
                                                t.ops[e].portsIn[i].links[r]
                                                    .portIn),
                                            (a =
                                                t.ops[e].portsIn[i].links[r]
                                                    .portOut),
                                            s.link(
                                                s.getOpById(n),
                                                h,
                                                s.getOpById(o),
                                                a
                                            ));
                var n, o, h, a;
                for (const t in this.ops)
                    this.ops[t].onLoaded &&
                        (this.ops[t].onLoaded(), (this.ops[t].onLoaded = null));
                for (const t in this.ops)
                    this.ops[t].init &&
                        (this.ops[t].init(), (this.ops[t].init = null));
                if (this.config.variables)
                    for (const t in this.config.variables)
                        this.setVarValue(t, this.config.variables[t]);
                for (const t in this.ops) this.ops[t].initVarPorts();
                setTimeout(() => {
                    this.loading.finished(i);
                }, 100),
                    this.config.onPatchLoaded &&
                        this.config.onPatchLoaded(this),
                    this.onLoadEnd && this.onLoadEnd();
            }),
            (Nt.prototype.profile = function(t) {
                this.profiler = new Pt();
                for (const e in this.ops) this.ops[e].profile(t);
            }),
            ((Nt.Variable = function(t, e, i) {
                (this._name = t),
                    (this._changeListeners = []),
                    (this.type = i),
                    this.setValue(e);
            }).prototype.getValue = function() {
                return this._v;
            }),
            (Nt.Variable.prototype.getName = function() {
                return this._name;
            }),
            (Nt.Variable.prototype.setValue = function(t) {
                this._v = t;
                for (let e = 0; e < this._changeListeners.length; e++)
                    this._changeListeners[e](t);
            }),
            (Nt.Variable.prototype.addListener = function(t) {
                this._changeListeners.push(t);
            }),
            (Nt.Variable.prototype.removeListener = function(t) {
                const e = this._changeListeners.indexOf(t);
                this._changeListeners.splice(e, 1);
            }),
            (Nt.prototype.setVariable = function(t, e) {
                this._variables.hasOwnProperty(t)
                    ? this._variables[t].setValue(e)
                    : console.warn('variable ' + t + ' not found!');
            }),
            (Nt.prototype._sortVars = function() {
                if (!this.isEditorMode()) return;
                const t = {};
                Object.keys(this._variables)
                    .sort()
                    .forEach(e => {
                        t[e] = this._variables[e];
                    }),
                    (this._variables = t);
            }),
            (Nt.prototype.hasVar = function(t) {
                return this._variables.hasOwnProperty('name');
            }),
            (Nt.prototype.setVarValue = function(t, e) {
                return (
                    this._variables.hasOwnProperty(t)
                        ? this._variables[t].setValue(e)
                        : ((this._variables[t] = new Nt.Variable(t, e)),
                          this._sortVars(),
                          this.emitEvent('variablesChanged')),
                    this._variables[t]
                );
            }),
            (Nt.prototype.getVarValue = function(t, e) {
                if (this._variables.hasOwnProperty(t))
                    return this._variables[t].getValue();
            }),
            (Nt.prototype.getVar = function(t) {
                if (this._variables.hasOwnProperty(t))
                    return this._variables[t];
            }),
            (Nt.prototype.getVars = function() {
                return this._variables;
            }),
            (Nt.prototype.deleteVar = function(t) {
                for (let e = 0; e < this.ops.length; e++)
                    for (let i = 0; i < this.ops[e].portsIn.length; i++)
                        this.ops[e].portsIn[i].getVariableName() == t &&
                            this.ops[e].portsIn[i].setVariable(null);
                delete this._variables[t],
                    this.emitEvent('variableDeleted', t),
                    this.emitEvent('variablesChanged');
            }),
            (Nt.prototype.getVars = function() {
                return this._variables;
            }),
            (Nt.prototype.exitError = function(t, e, i) {
                if (
                    ((this.aborted = !0),
                    this && this.config && this.config.onError)
                )
                    this.config.onError(t, e);
                else if (!this.isEditorMode()) {
                    const s = document.createElement('div'),
                        r = this.cgl.canvas.getBoundingClientRect();
                    s.setAttribute(
                        'style',
                        'position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;'
                    ),
                        (s.style.top = r.top + 'px'),
                        (s.style.left = r.left + 'px');
                    let n = 'cables - An error occured:<br/>';
                    (n += '[' + t + '] - ' + e),
                        i && (n += '<br/>Exception: ' + i.message),
                        (s.innerHTML = n);
                    const o = this.cgl.canvas.parentElement;
                    for (; o.hasChildNodes(); ) o.removeChild(o.lastChild);
                    document.body.appendChild(s);
                }
            }),
            (Nt.prototype.preRenderOps = function() {
                d.log('prerendering...');
                let t = null;
                CABLES.StopWatch && (t = new CABLES.StopWatch('prerendering'));
                for (let t = 0; t < this.ops.length; t++)
                    this.ops[t].preRender &&
                        (this.ops[t].preRender(),
                        d.log('prerender ' + this.ops[t].objName));
                t && t.stop('prerendering');
            }),
            (Nt.prototype.dispose = function() {
                this.pause(), this.clear();
            });
        var Ft = Nt;
        const St = {
                addPatch: function(t, e) {
                    let i = t,
                        s = y();
                    if (
                        'string' == typeof t &&
                        ((s = t), (i = document.getElementById(s)), !i)
                    )
                        return void console.error(
                            s + ' Polyshape Container Element not found!'
                        );
                    const r = document.createElement('canvas');
                    return (
                        (r.id = 'glcanvas_' + s),
                        (r.width = i.clientWidth),
                        (r.height = i.clientHeight),
                        window.addEventListener(
                            'resize',
                            function() {
                                this.setAttribute('width', i.clientWidth),
                                    (this.height = i.clientHeight);
                            }.bind(r)
                        ),
                        i.appendChild(r),
                        ((e = e || {}).glCanvasId = r.id),
                        e.onError ||
                            (e.onError = function(t) {
                                d.error(t);
                            }),
                        (CABLES.patch = new Ft(e)),
                        r
                    );
                },
            },
            Mt = {
                toneJsInitialized: !1,
                createAudioContext: function(t) {
                    if (
                        ((window.AudioContext =
                            window.AudioContext || window.webkitAudioContext),
                        window.AudioContext)
                    )
                        return (
                            window.audioContext ||
                                (window.audioContext = new AudioContext()),
                            window.Tone &&
                                !Mt.toneJsInitialized &&
                                (Tone.setContext(window.audioContext),
                                (Mt.toneJsInitialized = !0)),
                            window.audioContext
                        );
                    t.patch.config.onError(
                        'NO_WEBAUDIO',
                        'Web Audio is not supported in this browser.'
                    );
                },
                getAudioContext: function() {
                    return window.audioContext;
                },
                createAudioInPort: function(t, e, i, s) {
                    if (!t || !e || !i) {
                        const e =
                            'ERROR: createAudioInPort needs three parameters, op, portName and audioNode';
                        throw (t.log(e), new Error(e));
                    }
                    s || (s = 0),
                        (t.webAudio = t.webAudio || {}),
                        (t.webAudio.audioInPorts =
                            t.webAudio.audioInPorts || []);
                    const r = t.inObject(e);
                    return (
                        (r.webAudio = {}),
                        (r.webAudio.previousAudioInNode = null),
                        (r.webAudio.audioNode = i),
                        (t.webAudio.audioInPorts[e] = r),
                        (r.onChange = function() {
                            const e = r.get();
                            if (e)
                                try {
                                    e.connect
                                        ? (e.connect(
                                              r.webAudio.audioNode,
                                              0,
                                              s
                                          ),
                                          t.setUiError('audioCtx', null))
                                        : t.setUiError(
                                              'audioCtx',
                                              'The passed input is not an audio context. Please make sure you connect an audio context to the input.',
                                              2
                                          );
                                } catch (i) {
                                    throw (t.log(
                                        'Error: Failed to connect web audio node!',
                                        i
                                    ),
                                    t.log(
                                        'port.webAudio.audioNode',
                                        r.webAudio.audioNode
                                    ),
                                    t.log('audioInNode: ', e),
                                    t.log('inputChannelIndex:', s),
                                    t.log('audioInNode.connect: ', e.connect),
                                    i);
                                }
                            else if (r.webAudio.previousAudioInNode)
                                try {
                                    r.webAudio.previousAudioInNode.disconnect &&
                                        r.webAudio.previousAudioInNode.disconnect(
                                            r.webAudio.audioNode,
                                            0,
                                            s
                                        ),
                                        t.setUiError('audioCtx', null);
                                } catch (e) {
                                    try {
                                        r.webAudio.previousAudioInNode.disconnect(
                                            r.webAudio.audioNode
                                        );
                                    } catch (i) {
                                        throw (t.log(
                                            'Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ',
                                            e
                                        ),
                                        e.printStackTrace &&
                                            e.printStackTrace(),
                                        e);
                                    }
                                }
                            r.webAudio.previousAudioInNode = e;
                        }),
                        r
                    );
                },
                replaceNodeInPort: function(t, e, i) {
                    const s = t.webAudio.previousAudioInNode;
                    if (s && s.disconnect) {
                        try {
                            s.disconnect(e);
                        } catch (t) {
                            throw (t.printStackTrace && t.printStackTrace(),
                            new Error(
                                'replaceNodeInPort: Could not disconnect old audio node. ' +
                                    t.name +
                                    ' ' +
                                    t.message
                            ));
                        }
                        t.webAudio.audioNode = i;
                        try {
                            s.connect(i);
                        } catch (t) {
                            throw (t.printStackTrace && t.printStackTrace(),
                            new Error(
                                'replaceNodeInPort: Could not connect to new node. ' +
                                    t.name +
                                    ' ' +
                                    t.message
                            ));
                        }
                    }
                },
                createAudioOutPort: function(t, e, i) {
                    if (!t || !e || !i) {
                        const e =
                            'ERROR: createAudioOutPort needs three parameters, op, portName and audioNode';
                        throw (t.log(e), new Error(e));
                    }
                    const s = t.outObject(e);
                    return s.set(i), s;
                },
                createAudioParamInPort: function(t, e, i, s, r) {
                    if (!t || !e || !i)
                        return (
                            t.log(
                                'ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode'
                            ),
                            t && t.name && t.log('opname: ', t.name),
                            t.log('portName', e),
                            void t.log('audioNode: ', i)
                        );
                    (t.webAudio = t.webAudio || {}),
                        (t.webAudio.audioInPorts =
                            t.webAudio.audioInPorts || []);
                    const n = t.inDynamic(
                        e,
                        [k.OP.OP_PORT_TYPE_VALUE, k.OP.OP_PORT_TYPE_OBJECT],
                        s,
                        r
                    );
                    return (
                        (n.webAudio = {}),
                        (n.webAudio.previousAudioInNode = null),
                        (n.webAudio.audioNode = i),
                        (t.webAudio.audioInPorts[e] = n),
                        (n.onChange = function() {
                            const e = n.get(),
                                i = n.webAudio.audioNode,
                                s = Mt.getAudioContext();
                            if (null != e)
                                if ('object' == typeof e && e.connect) {
                                    try {
                                        e.connect(i);
                                    } catch (e) {
                                        throw (t.log(
                                            'Could not connect audio node: ',
                                            e
                                        ),
                                        e.printStackTrace &&
                                            e.printStackTrace(),
                                        e);
                                    }
                                    n.webAudio.previousAudioInNode = e;
                                } else {
                                    if (
                                        i._param &&
                                        i._param.minValue &&
                                        i._param.maxValue
                                    )
                                        if (
                                            e >= i._param.minValue &&
                                            e <= i._param.maxValue
                                        )
                                            try {
                                                i.setValueAtTime
                                                    ? i.setValueAtTime(
                                                          e,
                                                          s.currentTime
                                                      )
                                                    : (i.value = e);
                                            } catch (e) {
                                                throw (t.log(
                                                    'Possible AudioParam problem with tone.js op: ',
                                                    e
                                                ),
                                                e.printStackTrace &&
                                                    e.printStackTrace(),
                                                e);
                                            }
                                        else
                                            t.log(
                                                'Warning: The value for an audio parameter is out of range!'
                                            );
                                    else if (i.minValue && i.maxValue)
                                        if (e >= i.minValue && e <= i.maxValue)
                                            try {
                                                i.setValueAtTime
                                                    ? i.setValueAtTime(
                                                          e,
                                                          s.currentTime
                                                      )
                                                    : (i.value = e);
                                            } catch (e) {
                                                throw (t.log(
                                                    'AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ',
                                                    e
                                                ),
                                                e.printStackTrace &&
                                                    e.printStackTrace(),
                                                e);
                                            }
                                        else
                                            t.log(
                                                'Warning: The value for an audio parameter is out of range!'
                                            );
                                    else
                                        try {
                                            i.setValueAtTime
                                                ? i.setValueAtTime(
                                                      e,
                                                      s.currentTime
                                                  )
                                                : (i.value = e);
                                        } catch (e) {
                                            throw (t.log(
                                                'Possible AudioParam problem (without minValue / maxValue): ',
                                                e
                                            ),
                                            e.printStackTrace &&
                                                e.printStackTrace(),
                                            e);
                                        }
                                    if (
                                        n.webAudio.previousAudioInNode &&
                                        n.webAudio.previousAudioInNode
                                            .disconnect
                                    ) {
                                        try {
                                            n.webAudio.previousAudioInNode.disconnect(
                                                i
                                            );
                                        } catch (e) {
                                            throw (t.log(
                                                'Could not disconnect previous audio node: ',
                                                e
                                            ),
                                            e);
                                        }
                                        n.webAudio.previousAudioInNode = void 0;
                                    }
                                }
                            else n.webAudio.previousAudioInNode;
                        }),
                        n
                    );
                },
                loadAudioFile: function(t, e, i, s) {
                    const r = Mt.createAudioContext(),
                        n = t.loading.start('audio', e);
                    t.isEditorMode() &&
                        gui
                            .jobs()
                            .start({
                                id: 'loadaudio' + n,
                                title: ' loading audio (' + e + ')',
                            });
                    const o = new XMLHttpRequest();
                    e &&
                        (o.open('GET', e, !0),
                        (o.responseType = 'arraybuffer'),
                        (o.onload = function() {
                            t.loading.finished(n),
                                t.isEditorMode() &&
                                    gui.jobs().finish('loadaudio' + n),
                                r.decodeAudioData(o.response, i, s);
                        }),
                        o.send());
                },
                isValidToneTime: function(t) {
                    try {
                        new Tone.Time(t);
                    } catch (t) {
                        return !1;
                    }
                    return !0;
                },
                isValidToneNote: function(t) {
                    try {
                        Tone.Frequency(t);
                    } catch (t) {
                        return !1;
                    }
                    return !0;
                },
            },
            Ct = function(t, e, i) {
                (this._patch = t), (this.connector = i);
            };
        Ct.prototype._receive = function(t) {
            console.log('ev', t);
            let e = {};
            if (
                ((e = t.hasOwnProperty('event') ? t : JSON.parse(t.data)),
                e.event == k.PACO.PACO_OP_CREATE)
            ) {
                if (
                    (d.log('op create: data.vars.objName'),
                    this._patch.getOpById(e.vars.opId))
                )
                    return;
                let t = null;
                window.gui
                    ? gui.serverOps.loadOpLibs(e.vars.objName, () => {
                          (t = this._patch.addOp(
                              e.vars.objName,
                              null,
                              e.vars.opId
                          )),
                              (t.id = e.vars.opId);
                      })
                    : ((t = this._patch.addOp(
                          e.vars.objName,
                          null,
                          e.vars.opId
                      )),
                      (t.id = e.vars.opId));
            } else if (e.event == k.PACO.PACO_LOAD)
                d.log('PACO load patch.....'),
                    this._patch.clear(),
                    this._patch.deSerialize(e.vars.patch);
            else if (e.event == k.PACO.PACO_CLEAR)
                this._patch.clear(), d.log('clear');
            else if (e.event == k.PACO.PACO_OP_DELETE)
                d.log('op delete'), this._patch.deleteOp(e.vars.op, !0);
            else if (e.event == k.PACO.PACO_OP_ENABLE) {
                const t = this._patch.getOpById(e.vars.op);
                t && (t.enabled = !0);
            } else if (e.event == k.PACO.PACO_OP_DISABLE) {
                const t = this._patch.getOpById(e.vars.op);
                t && (t.enabled = !1);
            } else if (e.event == k.PACO.PACO_UNLINK) {
                const t = this._patch.getOpById(e.vars.op1),
                    i = this._patch.getOpById(e.vars.op2);
                if (!t || !i)
                    return void console.log('[paco] unlink op not found ');
                const s = t.getPort(e.vars.port1),
                    r = i.getPort(e.vars.port2);
                s.removeLinkTo(r);
            } else if (e.event == k.PACO.PACO_LINK) {
                const t = this._patch.getOpById(e.vars.op1),
                    i = this._patch.getOpById(e.vars.op2);
                this._patch.link(t, e.vars.port1, i, e.vars.port2);
            } else if (e.event == k.PACO.PACO_VALUECHANGE) {
                this._patch
                    .getOpById(e.vars.op)
                    .getPort(e.vars.port)
                    .set(e.vars.v);
            } else d.log('unknown patchConnectionEvent!', t);
        };
        const wt = function(t) {
            (this.connectors = []),
                t.addEventListener('onOpDelete', t => {
                    this.send(CABLES.PACO_OP_DELETE, { op: t.id });
                }),
                t.addEventListener('onOpAdd', t => {
                    this.send(CABLES.PACO_OP_CREATE, {
                        opId: t.id,
                        objName: t.objName,
                    });
                }),
                t.addEventListener('onUnLink', (t, e) => {
                    this.send(CABLES.PACO_UNLINK, {
                        op1: t.parent.id,
                        op2: e.parent.id,
                        port1: t.getName(),
                        port2: e.getName(),
                    });
                }),
                t.addEventListener('onLink', (t, e) => {
                    this.send(CABLES.PACO_LINK, {
                        op1: t.parent.id,
                        op2: e.parent.id,
                        port1: t.name,
                        port2: e.name,
                    });
                });
        };
        wt.prototype.send = function(t, e) {
            for (let i = 0; i < this.connectors.length; i++)
                this.connectors[i].send(t, e);
        };
        const kt = function() {
            window.BroadcastChannel &&
                (this.bc = new BroadcastChannel('test_channel'));
        };
        (kt.prototype.receive = function(t) {
            this.bc &&
                (d.log('init'), (this.bc.onmessage = t._receive.bind(t)));
        }),
            (kt.prototype.send = function(t, e) {
                if (!this.bc) return;
                const i = {};
                (i.event = t),
                    (i.vars = e),
                    this.bc.postMessage(JSON.stringify(i));
            });
        const Ut = Object.assign(
            {
                EventTarget: _,
                EMBED: St,
                Link: j,
                Port: U,
                Op: q,
                Profiler: Pt,
                Requirements: Rt,
                Patch: Ft,
                Instancing: vt,
                Timer: pt,
                WEBAUDIO: Mt,
                Variable: function() {
                    let t = null;
                    const e = [];
                    (this.onChanged = function(t) {
                        e.push(t);
                    }),
                        (this.getValue = function() {
                            return t;
                        }),
                        (this.setValue = function(e) {
                            (t = e), this.emitChanged();
                        }),
                        (this.emitChanged = function() {
                            for (let t = 0; t < e.length; t++) e[t]();
                        });
                },
                LoadingStatus: It,
                now: ct,
                internalNow: ut,
            },
            s,
            r,
            n,
            k.ANIM,
            o,
            k.PORT,
            k.PACO,
            k.ANIM,
            k.OP
        );
        Ut.build = i(1);
        e.default = Ut;
        (function() {
            return !this;
        })() || console.log('not in strict mode: index core');
    },
]).default;
//# sourceMappingURL=cables.min.js.map
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.1.0

Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!(function(t, n) {
    'object' == typeof exports && 'undefined' != typeof module
        ? n(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], n)
        : n(((t = t || self).glMatrix = {}));
})(this, function(t) {
    'use strict';
    var n = 1e-6,
        a = 'undefined' != typeof Float32Array ? Float32Array : Array,
        r = Math.random;
    var u = Math.PI / 180;
    Math.hypot ||
        (Math.hypot = function() {
            for (var t = 0, n = arguments.length; n--; )
                t += arguments[n] * arguments[n];
            return Math.sqrt(t);
        });
    var e = Object.freeze({
        EPSILON: n,
        get ARRAY_TYPE() {
            return a;
        },
        RANDOM: r,
        setMatrixArrayType: function(t) {
            a = t;
        },
        toRadian: function(t) {
            return t * u;
        },
        equals: function(t, a) {
            return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a));
        },
    });
    function o(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
        return (
            (t[0] = r * i + e * c),
            (t[1] = u * i + o * c),
            (t[2] = r * h + e * s),
            (t[3] = u * h + o * s),
            t
        );
    }
    function i(t, n, a) {
        return (
            (t[0] = n[0] - a[0]),
            (t[1] = n[1] - a[1]),
            (t[2] = n[2] - a[2]),
            (t[3] = n[3] - a[3]),
            t
        );
    }
    var c = o,
        h = i,
        s = Object.freeze({
            create: function() {
                var t = new a(4);
                return (
                    a != Float32Array && ((t[1] = 0), (t[2] = 0)),
                    (t[0] = 1),
                    (t[3] = 1),
                    t
                );
            },
            clone: function(t) {
                var n = new a(4);
                return (
                    (n[0] = t[0]),
                    (n[1] = t[1]),
                    (n[2] = t[2]),
                    (n[3] = t[3]),
                    n
                );
            },
            copy: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = n[1]),
                    (t[2] = n[2]),
                    (t[3] = n[3]),
                    t
                );
            },
            identity: function(t) {
                return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
            },
            fromValues: function(t, n, r, u) {
                var e = new a(4);
                return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e;
            },
            set: function(t, n, a, r, u) {
                return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t;
            },
            transpose: function(t, n) {
                if (t === n) {
                    var a = n[1];
                    (t[1] = n[2]), (t[2] = a);
                } else
                    (t[0] = n[0]), (t[1] = n[2]), (t[2] = n[1]), (t[3] = n[3]);
                return t;
            },
            invert: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a * e - u * r;
                return o
                    ? ((o = 1 / o),
                      (t[0] = e * o),
                      (t[1] = -r * o),
                      (t[2] = -u * o),
                      (t[3] = a * o),
                      t)
                    : null;
            },
            adjoint: function(t, n) {
                var a = n[0];
                return (
                    (t[0] = n[3]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = a), t
                );
            },
            determinant: function(t) {
                return t[0] * t[3] - t[2] * t[1];
            },
            multiply: o,
            rotate: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = Math.sin(a),
                    c = Math.cos(a);
                return (
                    (t[0] = r * c + e * i),
                    (t[1] = u * c + o * i),
                    (t[2] = r * -i + e * c),
                    (t[3] = u * -i + o * c),
                    t
                );
            },
            scale: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = a[0],
                    c = a[1];
                return (
                    (t[0] = r * i),
                    (t[1] = u * i),
                    (t[2] = e * c),
                    (t[3] = o * c),
                    t
                );
            },
            fromRotation: function(t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), t;
            },
            fromScaling: function(t, n) {
                return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), t;
            },
            str: function(t) {
                return (
                    'mat2(' +
                    t[0] +
                    ', ' +
                    t[1] +
                    ', ' +
                    t[2] +
                    ', ' +
                    t[3] +
                    ')'
                );
            },
            frob: function(t) {
                return Math.hypot(t[0], t[1], t[2], t[3]);
            },
            LDU: function(t, n, a, r) {
                return (
                    (t[2] = r[2] / r[0]),
                    (a[0] = r[0]),
                    (a[1] = r[1]),
                    (a[3] = r[3] - t[2] * a[1]),
                    [t, n, a]
                );
            },
            add: function(t, n, a) {
                return (
                    (t[0] = n[0] + a[0]),
                    (t[1] = n[1] + a[1]),
                    (t[2] = n[2] + a[2]),
                    (t[3] = n[3] + a[3]),
                    t
                );
            },
            subtract: i,
            exactEquals: function(t, n) {
                return (
                    t[0] === n[0] &&
                    t[1] === n[1] &&
                    t[2] === n[2] &&
                    t[3] === n[3]
                );
            },
            equals: function(t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = a[0],
                    c = a[1],
                    h = a[2],
                    s = a[3];
                return (
                    Math.abs(r - i) <=
                        n * Math.max(1, Math.abs(r), Math.abs(i)) &&
                    Math.abs(u - c) <=
                        n * Math.max(1, Math.abs(u), Math.abs(c)) &&
                    Math.abs(e - h) <=
                        n * Math.max(1, Math.abs(e), Math.abs(h)) &&
                    Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
                );
            },
            multiplyScalar: function(t, n, a) {
                return (
                    (t[0] = n[0] * a),
                    (t[1] = n[1] * a),
                    (t[2] = n[2] * a),
                    (t[3] = n[3] * a),
                    t
                );
            },
            multiplyScalarAndAdd: function(t, n, a, r) {
                return (
                    (t[0] = n[0] + a[0] * r),
                    (t[1] = n[1] + a[1] * r),
                    (t[2] = n[2] + a[2] * r),
                    (t[3] = n[3] + a[3] * r),
                    t
                );
            },
            mul: c,
            sub: h,
        });
    function M(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = a[0],
            s = a[1],
            M = a[2],
            f = a[3],
            l = a[4],
            v = a[5];
        return (
            (t[0] = r * h + e * s),
            (t[1] = u * h + o * s),
            (t[2] = r * M + e * f),
            (t[3] = u * M + o * f),
            (t[4] = r * l + e * v + i),
            (t[5] = u * l + o * v + c),
            t
        );
    }
    function f(t, n, a) {
        return (
            (t[0] = n[0] - a[0]),
            (t[1] = n[1] - a[1]),
            (t[2] = n[2] - a[2]),
            (t[3] = n[3] - a[3]),
            (t[4] = n[4] - a[4]),
            (t[5] = n[5] - a[5]),
            t
        );
    }
    var l = M,
        v = f,
        b = Object.freeze({
            create: function() {
                var t = new a(6);
                return (
                    a != Float32Array &&
                        ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)),
                    (t[0] = 1),
                    (t[3] = 1),
                    t
                );
            },
            clone: function(t) {
                var n = new a(6);
                return (
                    (n[0] = t[0]),
                    (n[1] = t[1]),
                    (n[2] = t[2]),
                    (n[3] = t[3]),
                    (n[4] = t[4]),
                    (n[5] = t[5]),
                    n
                );
            },
            copy: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = n[1]),
                    (t[2] = n[2]),
                    (t[3] = n[3]),
                    (t[4] = n[4]),
                    (t[5] = n[5]),
                    t
                );
            },
            identity: function(t) {
                return (
                    (t[0] = 1),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 1),
                    (t[4] = 0),
                    (t[5] = 0),
                    t
                );
            },
            fromValues: function(t, n, r, u, e, o) {
                var i = new a(6);
                return (
                    (i[0] = t),
                    (i[1] = n),
                    (i[2] = r),
                    (i[3] = u),
                    (i[4] = e),
                    (i[5] = o),
                    i
                );
            },
            set: function(t, n, a, r, u, e, o) {
                return (
                    (t[0] = n),
                    (t[1] = a),
                    (t[2] = r),
                    (t[3] = u),
                    (t[4] = e),
                    (t[5] = o),
                    t
                );
            },
            invert: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = a * e - r * u;
                return c
                    ? ((c = 1 / c),
                      (t[0] = e * c),
                      (t[1] = -r * c),
                      (t[2] = -u * c),
                      (t[3] = a * c),
                      (t[4] = (u * i - e * o) * c),
                      (t[5] = (r * o - a * i) * c),
                      t)
                    : null;
            },
            determinant: function(t) {
                return t[0] * t[3] - t[1] * t[2];
            },
            multiply: M,
            rotate: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = Math.sin(a),
                    s = Math.cos(a);
                return (
                    (t[0] = r * s + e * h),
                    (t[1] = u * s + o * h),
                    (t[2] = r * -h + e * s),
                    (t[3] = u * -h + o * s),
                    (t[4] = i),
                    (t[5] = c),
                    t
                );
            },
            scale: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = a[0],
                    s = a[1];
                return (
                    (t[0] = r * h),
                    (t[1] = u * h),
                    (t[2] = e * s),
                    (t[3] = o * s),
                    (t[4] = i),
                    (t[5] = c),
                    t
                );
            },
            translate: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = a[0],
                    s = a[1];
                return (
                    (t[0] = r),
                    (t[1] = u),
                    (t[2] = e),
                    (t[3] = o),
                    (t[4] = r * h + e * s + i),
                    (t[5] = u * h + o * s + c),
                    t
                );
            },
            fromRotation: function(t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return (
                    (t[0] = r),
                    (t[1] = a),
                    (t[2] = -a),
                    (t[3] = r),
                    (t[4] = 0),
                    (t[5] = 0),
                    t
                );
            },
            fromScaling: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = n[1]),
                    (t[4] = 0),
                    (t[5] = 0),
                    t
                );
            },
            fromTranslation: function(t, n) {
                return (
                    (t[0] = 1),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 1),
                    (t[4] = n[0]),
                    (t[5] = n[1]),
                    t
                );
            },
            str: function(t) {
                return (
                    'mat2d(' +
                    t[0] +
                    ', ' +
                    t[1] +
                    ', ' +
                    t[2] +
                    ', ' +
                    t[3] +
                    ', ' +
                    t[4] +
                    ', ' +
                    t[5] +
                    ')'
                );
            },
            frob: function(t) {
                return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
            },
            add: function(t, n, a) {
                return (
                    (t[0] = n[0] + a[0]),
                    (t[1] = n[1] + a[1]),
                    (t[2] = n[2] + a[2]),
                    (t[3] = n[3] + a[3]),
                    (t[4] = n[4] + a[4]),
                    (t[5] = n[5] + a[5]),
                    t
                );
            },
            subtract: f,
            multiplyScalar: function(t, n, a) {
                return (
                    (t[0] = n[0] * a),
                    (t[1] = n[1] * a),
                    (t[2] = n[2] * a),
                    (t[3] = n[3] * a),
                    (t[4] = n[4] * a),
                    (t[5] = n[5] * a),
                    t
                );
            },
            multiplyScalarAndAdd: function(t, n, a, r) {
                return (
                    (t[0] = n[0] + a[0] * r),
                    (t[1] = n[1] + a[1] * r),
                    (t[2] = n[2] + a[2] * r),
                    (t[3] = n[3] + a[3] * r),
                    (t[4] = n[4] + a[4] * r),
                    (t[5] = n[5] + a[5] * r),
                    t
                );
            },
            exactEquals: function(t, n) {
                return (
                    t[0] === n[0] &&
                    t[1] === n[1] &&
                    t[2] === n[2] &&
                    t[3] === n[3] &&
                    t[4] === n[4] &&
                    t[5] === n[5]
                );
            },
            equals: function(t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = t[4],
                    c = t[5],
                    h = a[0],
                    s = a[1],
                    M = a[2],
                    f = a[3],
                    l = a[4],
                    v = a[5];
                return (
                    Math.abs(r - h) <=
                        n * Math.max(1, Math.abs(r), Math.abs(h)) &&
                    Math.abs(u - s) <=
                        n * Math.max(1, Math.abs(u), Math.abs(s)) &&
                    Math.abs(e - M) <=
                        n * Math.max(1, Math.abs(e), Math.abs(M)) &&
                    Math.abs(o - f) <=
                        n * Math.max(1, Math.abs(o), Math.abs(f)) &&
                    Math.abs(i - l) <=
                        n * Math.max(1, Math.abs(i), Math.abs(l)) &&
                    Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
                );
            },
            mul: l,
            sub: v,
        });
    function m() {
        var t = new a(9);
        return (
            a != Float32Array &&
                ((t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0)),
            (t[0] = 1),
            (t[4] = 1),
            (t[8] = 1),
            t
        );
    }
    function d(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = n[8],
            f = a[0],
            l = a[1],
            v = a[2],
            b = a[3],
            m = a[4],
            d = a[5],
            x = a[6],
            p = a[7],
            y = a[8];
        return (
            (t[0] = f * r + l * o + v * h),
            (t[1] = f * u + l * i + v * s),
            (t[2] = f * e + l * c + v * M),
            (t[3] = b * r + m * o + d * h),
            (t[4] = b * u + m * i + d * s),
            (t[5] = b * e + m * c + d * M),
            (t[6] = x * r + p * o + y * h),
            (t[7] = x * u + p * i + y * s),
            (t[8] = x * e + p * c + y * M),
            t
        );
    }
    function x(t, n, a) {
        return (
            (t[0] = n[0] - a[0]),
            (t[1] = n[1] - a[1]),
            (t[2] = n[2] - a[2]),
            (t[3] = n[3] - a[3]),
            (t[4] = n[4] - a[4]),
            (t[5] = n[5] - a[5]),
            (t[6] = n[6] - a[6]),
            (t[7] = n[7] - a[7]),
            (t[8] = n[8] - a[8]),
            t
        );
    }
    var p = d,
        y = x,
        q = Object.freeze({
            create: m,
            fromMat4: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = n[1]),
                    (t[2] = n[2]),
                    (t[3] = n[4]),
                    (t[4] = n[5]),
                    (t[5] = n[6]),
                    (t[6] = n[8]),
                    (t[7] = n[9]),
                    (t[8] = n[10]),
                    t
                );
            },
            clone: function(t) {
                var n = new a(9);
                return (
                    (n[0] = t[0]),
                    (n[1] = t[1]),
                    (n[2] = t[2]),
                    (n[3] = t[3]),
                    (n[4] = t[4]),
                    (n[5] = t[5]),
                    (n[6] = t[6]),
                    (n[7] = t[7]),
                    (n[8] = t[8]),
                    n
                );
            },
            copy: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = n[1]),
                    (t[2] = n[2]),
                    (t[3] = n[3]),
                    (t[4] = n[4]),
                    (t[5] = n[5]),
                    (t[6] = n[6]),
                    (t[7] = n[7]),
                    (t[8] = n[8]),
                    t
                );
            },
            fromValues: function(t, n, r, u, e, o, i, c, h) {
                var s = new a(9);
                return (
                    (s[0] = t),
                    (s[1] = n),
                    (s[2] = r),
                    (s[3] = u),
                    (s[4] = e),
                    (s[5] = o),
                    (s[6] = i),
                    (s[7] = c),
                    (s[8] = h),
                    s
                );
            },
            set: function(t, n, a, r, u, e, o, i, c, h) {
                return (
                    (t[0] = n),
                    (t[1] = a),
                    (t[2] = r),
                    (t[3] = u),
                    (t[4] = e),
                    (t[5] = o),
                    (t[6] = i),
                    (t[7] = c),
                    (t[8] = h),
                    t
                );
            },
            identity: function(t) {
                return (
                    (t[0] = 1),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 1),
                    (t[5] = 0),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 1),
                    t
                );
            },
            transpose: function(t, n) {
                if (t === n) {
                    var a = n[1],
                        r = n[2],
                        u = n[5];
                    (t[1] = n[3]),
                        (t[2] = n[6]),
                        (t[3] = a),
                        (t[5] = n[7]),
                        (t[6] = r),
                        (t[7] = u);
                } else
                    (t[0] = n[0]),
                        (t[1] = n[3]),
                        (t[2] = n[6]),
                        (t[3] = n[1]),
                        (t[4] = n[4]),
                        (t[5] = n[7]),
                        (t[6] = n[2]),
                        (t[7] = n[5]),
                        (t[8] = n[8]);
                return t;
            },
            invert: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = s * o - i * h,
                    f = -s * e + i * c,
                    l = h * e - o * c,
                    v = a * M + r * f + u * l;
                return v
                    ? ((v = 1 / v),
                      (t[0] = M * v),
                      (t[1] = (-s * r + u * h) * v),
                      (t[2] = (i * r - u * o) * v),
                      (t[3] = f * v),
                      (t[4] = (s * a - u * c) * v),
                      (t[5] = (-i * a + u * e) * v),
                      (t[6] = l * v),
                      (t[7] = (-h * a + r * c) * v),
                      (t[8] = (o * a - r * e) * v),
                      t)
                    : null;
            },
            adjoint: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8];
                return (
                    (t[0] = o * s - i * h),
                    (t[1] = u * h - r * s),
                    (t[2] = r * i - u * o),
                    (t[3] = i * c - e * s),
                    (t[4] = a * s - u * c),
                    (t[5] = u * e - a * i),
                    (t[6] = e * h - o * c),
                    (t[7] = r * c - a * h),
                    (t[8] = a * o - r * e),
                    t
                );
            },
            determinant: function(t) {
                var n = t[0],
                    a = t[1],
                    r = t[2],
                    u = t[3],
                    e = t[4],
                    o = t[5],
                    i = t[6],
                    c = t[7],
                    h = t[8];
                return (
                    n * (h * e - o * c) +
                    a * (-h * u + o * i) +
                    r * (c * u - e * i)
                );
            },
            multiply: d,
            translate: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = n[6],
                    s = n[7],
                    M = n[8],
                    f = a[0],
                    l = a[1];
                return (
                    (t[0] = r),
                    (t[1] = u),
                    (t[2] = e),
                    (t[3] = o),
                    (t[4] = i),
                    (t[5] = c),
                    (t[6] = f * r + l * o + h),
                    (t[7] = f * u + l * i + s),
                    (t[8] = f * e + l * c + M),
                    t
                );
            },
            rotate: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = n[6],
                    s = n[7],
                    M = n[8],
                    f = Math.sin(a),
                    l = Math.cos(a);
                return (
                    (t[0] = l * r + f * o),
                    (t[1] = l * u + f * i),
                    (t[2] = l * e + f * c),
                    (t[3] = l * o - f * r),
                    (t[4] = l * i - f * u),
                    (t[5] = l * c - f * e),
                    (t[6] = h),
                    (t[7] = s),
                    (t[8] = M),
                    t
                );
            },
            scale: function(t, n, a) {
                var r = a[0],
                    u = a[1];
                return (
                    (t[0] = r * n[0]),
                    (t[1] = r * n[1]),
                    (t[2] = r * n[2]),
                    (t[3] = u * n[3]),
                    (t[4] = u * n[4]),
                    (t[5] = u * n[5]),
                    (t[6] = n[6]),
                    (t[7] = n[7]),
                    (t[8] = n[8]),
                    t
                );
            },
            fromTranslation: function(t, n) {
                return (
                    (t[0] = 1),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 1),
                    (t[5] = 0),
                    (t[6] = n[0]),
                    (t[7] = n[1]),
                    (t[8] = 1),
                    t
                );
            },
            fromRotation: function(t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return (
                    (t[0] = r),
                    (t[1] = a),
                    (t[2] = 0),
                    (t[3] = -a),
                    (t[4] = r),
                    (t[5] = 0),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 1),
                    t
                );
            },
            fromScaling: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = n[1]),
                    (t[5] = 0),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 1),
                    t
                );
            },
            fromMat2d: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = n[1]),
                    (t[2] = 0),
                    (t[3] = n[2]),
                    (t[4] = n[3]),
                    (t[5] = 0),
                    (t[6] = n[4]),
                    (t[7] = n[5]),
                    (t[8] = 1),
                    t
                );
            },
            fromQuat: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a + a,
                    i = r + r,
                    c = u + u,
                    h = a * o,
                    s = r * o,
                    M = r * i,
                    f = u * o,
                    l = u * i,
                    v = u * c,
                    b = e * o,
                    m = e * i,
                    d = e * c;
                return (
                    (t[0] = 1 - M - v),
                    (t[3] = s - d),
                    (t[6] = f + m),
                    (t[1] = s + d),
                    (t[4] = 1 - h - v),
                    (t[7] = l - b),
                    (t[2] = f - m),
                    (t[5] = l + b),
                    (t[8] = 1 - h - M),
                    t
                );
            },
            normalFromMat4: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = n[9],
                    f = n[10],
                    l = n[11],
                    v = n[12],
                    b = n[13],
                    m = n[14],
                    d = n[15],
                    x = a * i - r * o,
                    p = a * c - u * o,
                    y = a * h - e * o,
                    q = r * c - u * i,
                    g = r * h - e * i,
                    A = u * h - e * c,
                    w = s * b - M * v,
                    R = s * m - f * v,
                    z = s * d - l * v,
                    P = M * m - f * b,
                    j = M * d - l * b,
                    I = f * d - l * m,
                    S = x * I - p * j + y * P + q * z - g * R + A * w;
                return S
                    ? ((S = 1 / S),
                      (t[0] = (i * I - c * j + h * P) * S),
                      (t[1] = (c * z - o * I - h * R) * S),
                      (t[2] = (o * j - i * z + h * w) * S),
                      (t[3] = (u * j - r * I - e * P) * S),
                      (t[4] = (a * I - u * z + e * R) * S),
                      (t[5] = (r * z - a * j - e * w) * S),
                      (t[6] = (b * A - m * g + d * q) * S),
                      (t[7] = (m * y - v * A - d * p) * S),
                      (t[8] = (v * g - b * y + d * x) * S),
                      t)
                    : null;
            },
            projection: function(t, n, a) {
                return (
                    (t[0] = 2 / n),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = -2 / a),
                    (t[5] = 0),
                    (t[6] = -1),
                    (t[7] = 1),
                    (t[8] = 1),
                    t
                );
            },
            str: function(t) {
                return (
                    'mat3(' +
                    t[0] +
                    ', ' +
                    t[1] +
                    ', ' +
                    t[2] +
                    ', ' +
                    t[3] +
                    ', ' +
                    t[4] +
                    ', ' +
                    t[5] +
                    ', ' +
                    t[6] +
                    ', ' +
                    t[7] +
                    ', ' +
                    t[8] +
                    ')'
                );
            },
            frob: function(t) {
                return Math.hypot(
                    t[0],
                    t[1],
                    t[2],
                    t[3],
                    t[4],
                    t[5],
                    t[6],
                    t[7],
                    t[8]
                );
            },
            add: function(t, n, a) {
                return (
                    (t[0] = n[0] + a[0]),
                    (t[1] = n[1] + a[1]),
                    (t[2] = n[2] + a[2]),
                    (t[3] = n[3] + a[3]),
                    (t[4] = n[4] + a[4]),
                    (t[5] = n[5] + a[5]),
                    (t[6] = n[6] + a[6]),
                    (t[7] = n[7] + a[7]),
                    (t[8] = n[8] + a[8]),
                    t
                );
            },
            subtract: x,
            multiplyScalar: function(t, n, a) {
                return (
                    (t[0] = n[0] * a),
                    (t[1] = n[1] * a),
                    (t[2] = n[2] * a),
                    (t[3] = n[3] * a),
                    (t[4] = n[4] * a),
                    (t[5] = n[5] * a),
                    (t[6] = n[6] * a),
                    (t[7] = n[7] * a),
                    (t[8] = n[8] * a),
                    t
                );
            },
            multiplyScalarAndAdd: function(t, n, a, r) {
                return (
                    (t[0] = n[0] + a[0] * r),
                    (t[1] = n[1] + a[1] * r),
                    (t[2] = n[2] + a[2] * r),
                    (t[3] = n[3] + a[3] * r),
                    (t[4] = n[4] + a[4] * r),
                    (t[5] = n[5] + a[5] * r),
                    (t[6] = n[6] + a[6] * r),
                    (t[7] = n[7] + a[7] * r),
                    (t[8] = n[8] + a[8] * r),
                    t
                );
            },
            exactEquals: function(t, n) {
                return (
                    t[0] === n[0] &&
                    t[1] === n[1] &&
                    t[2] === n[2] &&
                    t[3] === n[3] &&
                    t[4] === n[4] &&
                    t[5] === n[5] &&
                    t[6] === n[6] &&
                    t[7] === n[7] &&
                    t[8] === n[8]
                );
            },
            equals: function(t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = t[4],
                    c = t[5],
                    h = t[6],
                    s = t[7],
                    M = t[8],
                    f = a[0],
                    l = a[1],
                    v = a[2],
                    b = a[3],
                    m = a[4],
                    d = a[5],
                    x = a[6],
                    p = a[7],
                    y = a[8];
                return (
                    Math.abs(r - f) <=
                        n * Math.max(1, Math.abs(r), Math.abs(f)) &&
                    Math.abs(u - l) <=
                        n * Math.max(1, Math.abs(u), Math.abs(l)) &&
                    Math.abs(e - v) <=
                        n * Math.max(1, Math.abs(e), Math.abs(v)) &&
                    Math.abs(o - b) <=
                        n * Math.max(1, Math.abs(o), Math.abs(b)) &&
                    Math.abs(i - m) <=
                        n * Math.max(1, Math.abs(i), Math.abs(m)) &&
                    Math.abs(c - d) <=
                        n * Math.max(1, Math.abs(c), Math.abs(d)) &&
                    Math.abs(h - x) <=
                        n * Math.max(1, Math.abs(h), Math.abs(x)) &&
                    Math.abs(s - p) <=
                        n * Math.max(1, Math.abs(s), Math.abs(p)) &&
                    Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
                );
            },
            mul: p,
            sub: y,
        });
    function g(t) {
        return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
        );
    }
    function A(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = n[8],
            f = n[9],
            l = n[10],
            v = n[11],
            b = n[12],
            m = n[13],
            d = n[14],
            x = n[15],
            p = a[0],
            y = a[1],
            q = a[2],
            g = a[3];
        return (
            (t[0] = p * r + y * i + q * M + g * b),
            (t[1] = p * u + y * c + q * f + g * m),
            (t[2] = p * e + y * h + q * l + g * d),
            (t[3] = p * o + y * s + q * v + g * x),
            (p = a[4]),
            (y = a[5]),
            (q = a[6]),
            (g = a[7]),
            (t[4] = p * r + y * i + q * M + g * b),
            (t[5] = p * u + y * c + q * f + g * m),
            (t[6] = p * e + y * h + q * l + g * d),
            (t[7] = p * o + y * s + q * v + g * x),
            (p = a[8]),
            (y = a[9]),
            (q = a[10]),
            (g = a[11]),
            (t[8] = p * r + y * i + q * M + g * b),
            (t[9] = p * u + y * c + q * f + g * m),
            (t[10] = p * e + y * h + q * l + g * d),
            (t[11] = p * o + y * s + q * v + g * x),
            (p = a[12]),
            (y = a[13]),
            (q = a[14]),
            (g = a[15]),
            (t[12] = p * r + y * i + q * M + g * b),
            (t[13] = p * u + y * c + q * f + g * m),
            (t[14] = p * e + y * h + q * l + g * d),
            (t[15] = p * o + y * s + q * v + g * x),
            t
        );
    }
    function w(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = r + r,
            c = u + u,
            h = e + e,
            s = r * i,
            M = r * c,
            f = r * h,
            l = u * c,
            v = u * h,
            b = e * h,
            m = o * i,
            d = o * c,
            x = o * h;
        return (
            (t[0] = 1 - (l + b)),
            (t[1] = M + x),
            (t[2] = f - d),
            (t[3] = 0),
            (t[4] = M - x),
            (t[5] = 1 - (s + b)),
            (t[6] = v + m),
            (t[7] = 0),
            (t[8] = f + d),
            (t[9] = v - m),
            (t[10] = 1 - (s + l)),
            (t[11] = 0),
            (t[12] = a[0]),
            (t[13] = a[1]),
            (t[14] = a[2]),
            (t[15] = 1),
            t
        );
    }
    function R(t, n) {
        return (t[0] = n[12]), (t[1] = n[13]), (t[2] = n[14]), t;
    }
    function z(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[4],
            o = n[5],
            i = n[6],
            c = n[8],
            h = n[9],
            s = n[10];
        return (
            (t[0] = Math.hypot(a, r, u)),
            (t[1] = Math.hypot(e, o, i)),
            (t[2] = Math.hypot(c, h, s)),
            t
        );
    }
    function P(t, n) {
        var r = new a(3);
        z(r, n);
        var u = 1 / r[0],
            e = 1 / r[1],
            o = 1 / r[2],
            i = n[0] * u,
            c = n[1] * e,
            h = n[2] * o,
            s = n[4] * u,
            M = n[5] * e,
            f = n[6] * o,
            l = n[8] * u,
            v = n[9] * e,
            b = n[10] * o,
            m = i + M + b,
            d = 0;
        return (
            m > 0
                ? ((d = 2 * Math.sqrt(m + 1)),
                  (t[3] = 0.25 * d),
                  (t[0] = (f - v) / d),
                  (t[1] = (l - h) / d),
                  (t[2] = (c - s) / d))
                : i > M && i > b
                ? ((d = 2 * Math.sqrt(1 + i - M - b)),
                  (t[3] = (f - v) / d),
                  (t[0] = 0.25 * d),
                  (t[1] = (c + s) / d),
                  (t[2] = (l + h) / d))
                : M > b
                ? ((d = 2 * Math.sqrt(1 + M - i - b)),
                  (t[3] = (l - h) / d),
                  (t[0] = (c + s) / d),
                  (t[1] = 0.25 * d),
                  (t[2] = (f + v) / d))
                : ((d = 2 * Math.sqrt(1 + b - i - M)),
                  (t[3] = (c - s) / d),
                  (t[0] = (l + h) / d),
                  (t[1] = (f + v) / d),
                  (t[2] = 0.25 * d)),
            t
        );
    }
    function j(t, n, a) {
        return (
            (t[0] = n[0] - a[0]),
            (t[1] = n[1] - a[1]),
            (t[2] = n[2] - a[2]),
            (t[3] = n[3] - a[3]),
            (t[4] = n[4] - a[4]),
            (t[5] = n[5] - a[5]),
            (t[6] = n[6] - a[6]),
            (t[7] = n[7] - a[7]),
            (t[8] = n[8] - a[8]),
            (t[9] = n[9] - a[9]),
            (t[10] = n[10] - a[10]),
            (t[11] = n[11] - a[11]),
            (t[12] = n[12] - a[12]),
            (t[13] = n[13] - a[13]),
            (t[14] = n[14] - a[14]),
            (t[15] = n[15] - a[15]),
            t
        );
    }
    var I = A,
        S = j,
        E = Object.freeze({
            create: function() {
                var t = new a(16);
                return (
                    a != Float32Array &&
                        ((t[1] = 0),
                        (t[2] = 0),
                        (t[3] = 0),
                        (t[4] = 0),
                        (t[6] = 0),
                        (t[7] = 0),
                        (t[8] = 0),
                        (t[9] = 0),
                        (t[11] = 0),
                        (t[12] = 0),
                        (t[13] = 0),
                        (t[14] = 0)),
                    (t[0] = 1),
                    (t[5] = 1),
                    (t[10] = 1),
                    (t[15] = 1),
                    t
                );
            },
            clone: function(t) {
                var n = new a(16);
                return (
                    (n[0] = t[0]),
                    (n[1] = t[1]),
                    (n[2] = t[2]),
                    (n[3] = t[3]),
                    (n[4] = t[4]),
                    (n[5] = t[5]),
                    (n[6] = t[6]),
                    (n[7] = t[7]),
                    (n[8] = t[8]),
                    (n[9] = t[9]),
                    (n[10] = t[10]),
                    (n[11] = t[11]),
                    (n[12] = t[12]),
                    (n[13] = t[13]),
                    (n[14] = t[14]),
                    (n[15] = t[15]),
                    n
                );
            },
            copy: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = n[1]),
                    (t[2] = n[2]),
                    (t[3] = n[3]),
                    (t[4] = n[4]),
                    (t[5] = n[5]),
                    (t[6] = n[6]),
                    (t[7] = n[7]),
                    (t[8] = n[8]),
                    (t[9] = n[9]),
                    (t[10] = n[10]),
                    (t[11] = n[11]),
                    (t[12] = n[12]),
                    (t[13] = n[13]),
                    (t[14] = n[14]),
                    (t[15] = n[15]),
                    t
                );
            },
            fromValues: function(
                t,
                n,
                r,
                u,
                e,
                o,
                i,
                c,
                h,
                s,
                M,
                f,
                l,
                v,
                b,
                m
            ) {
                var d = new a(16);
                return (
                    (d[0] = t),
                    (d[1] = n),
                    (d[2] = r),
                    (d[3] = u),
                    (d[4] = e),
                    (d[5] = o),
                    (d[6] = i),
                    (d[7] = c),
                    (d[8] = h),
                    (d[9] = s),
                    (d[10] = M),
                    (d[11] = f),
                    (d[12] = l),
                    (d[13] = v),
                    (d[14] = b),
                    (d[15] = m),
                    d
                );
            },
            set: function(t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
                return (
                    (t[0] = n),
                    (t[1] = a),
                    (t[2] = r),
                    (t[3] = u),
                    (t[4] = e),
                    (t[5] = o),
                    (t[6] = i),
                    (t[7] = c),
                    (t[8] = h),
                    (t[9] = s),
                    (t[10] = M),
                    (t[11] = f),
                    (t[12] = l),
                    (t[13] = v),
                    (t[14] = b),
                    (t[15] = m),
                    t
                );
            },
            identity: g,
            transpose: function(t, n) {
                if (t === n) {
                    var a = n[1],
                        r = n[2],
                        u = n[3],
                        e = n[6],
                        o = n[7],
                        i = n[11];
                    (t[1] = n[4]),
                        (t[2] = n[8]),
                        (t[3] = n[12]),
                        (t[4] = a),
                        (t[6] = n[9]),
                        (t[7] = n[13]),
                        (t[8] = r),
                        (t[9] = e),
                        (t[11] = n[14]),
                        (t[12] = u),
                        (t[13] = o),
                        (t[14] = i);
                } else
                    (t[0] = n[0]),
                        (t[1] = n[4]),
                        (t[2] = n[8]),
                        (t[3] = n[12]),
                        (t[4] = n[1]),
                        (t[5] = n[5]),
                        (t[6] = n[9]),
                        (t[7] = n[13]),
                        (t[8] = n[2]),
                        (t[9] = n[6]),
                        (t[10] = n[10]),
                        (t[11] = n[14]),
                        (t[12] = n[3]),
                        (t[13] = n[7]),
                        (t[14] = n[11]),
                        (t[15] = n[15]);
                return t;
            },
            invert: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = n[9],
                    f = n[10],
                    l = n[11],
                    v = n[12],
                    b = n[13],
                    m = n[14],
                    d = n[15],
                    x = a * i - r * o,
                    p = a * c - u * o,
                    y = a * h - e * o,
                    q = r * c - u * i,
                    g = r * h - e * i,
                    A = u * h - e * c,
                    w = s * b - M * v,
                    R = s * m - f * v,
                    z = s * d - l * v,
                    P = M * m - f * b,
                    j = M * d - l * b,
                    I = f * d - l * m,
                    S = x * I - p * j + y * P + q * z - g * R + A * w;
                return S
                    ? ((S = 1 / S),
                      (t[0] = (i * I - c * j + h * P) * S),
                      (t[1] = (u * j - r * I - e * P) * S),
                      (t[2] = (b * A - m * g + d * q) * S),
                      (t[3] = (f * g - M * A - l * q) * S),
                      (t[4] = (c * z - o * I - h * R) * S),
                      (t[5] = (a * I - u * z + e * R) * S),
                      (t[6] = (m * y - v * A - d * p) * S),
                      (t[7] = (s * A - f * y + l * p) * S),
                      (t[8] = (o * j - i * z + h * w) * S),
                      (t[9] = (r * z - a * j - e * w) * S),
                      (t[10] = (v * g - b * y + d * x) * S),
                      (t[11] = (M * y - s * g - l * x) * S),
                      (t[12] = (i * R - o * P - c * w) * S),
                      (t[13] = (a * P - r * R + u * w) * S),
                      (t[14] = (b * p - v * q - m * x) * S),
                      (t[15] = (s * q - M * p + f * x) * S),
                      t)
                    : null;
            },
            adjoint: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = n[9],
                    f = n[10],
                    l = n[11],
                    v = n[12],
                    b = n[13],
                    m = n[14],
                    d = n[15];
                return (
                    (t[0] =
                        i * (f * d - l * m) -
                        M * (c * d - h * m) +
                        b * (c * l - h * f)),
                    (t[1] = -(
                        r * (f * d - l * m) -
                        M * (u * d - e * m) +
                        b * (u * l - e * f)
                    )),
                    (t[2] =
                        r * (c * d - h * m) -
                        i * (u * d - e * m) +
                        b * (u * h - e * c)),
                    (t[3] = -(
                        r * (c * l - h * f) -
                        i * (u * l - e * f) +
                        M * (u * h - e * c)
                    )),
                    (t[4] = -(
                        o * (f * d - l * m) -
                        s * (c * d - h * m) +
                        v * (c * l - h * f)
                    )),
                    (t[5] =
                        a * (f * d - l * m) -
                        s * (u * d - e * m) +
                        v * (u * l - e * f)),
                    (t[6] = -(
                        a * (c * d - h * m) -
                        o * (u * d - e * m) +
                        v * (u * h - e * c)
                    )),
                    (t[7] =
                        a * (c * l - h * f) -
                        o * (u * l - e * f) +
                        s * (u * h - e * c)),
                    (t[8] =
                        o * (M * d - l * b) -
                        s * (i * d - h * b) +
                        v * (i * l - h * M)),
                    (t[9] = -(
                        a * (M * d - l * b) -
                        s * (r * d - e * b) +
                        v * (r * l - e * M)
                    )),
                    (t[10] =
                        a * (i * d - h * b) -
                        o * (r * d - e * b) +
                        v * (r * h - e * i)),
                    (t[11] = -(
                        a * (i * l - h * M) -
                        o * (r * l - e * M) +
                        s * (r * h - e * i)
                    )),
                    (t[12] = -(
                        o * (M * m - f * b) -
                        s * (i * m - c * b) +
                        v * (i * f - c * M)
                    )),
                    (t[13] =
                        a * (M * m - f * b) -
                        s * (r * m - u * b) +
                        v * (r * f - u * M)),
                    (t[14] = -(
                        a * (i * m - c * b) -
                        o * (r * m - u * b) +
                        v * (r * c - u * i)
                    )),
                    (t[15] =
                        a * (i * f - c * M) -
                        o * (r * f - u * M) +
                        s * (r * c - u * i)),
                    t
                );
            },
            determinant: function(t) {
                var n = t[0],
                    a = t[1],
                    r = t[2],
                    u = t[3],
                    e = t[4],
                    o = t[5],
                    i = t[6],
                    c = t[7],
                    h = t[8],
                    s = t[9],
                    M = t[10],
                    f = t[11],
                    l = t[12],
                    v = t[13],
                    b = t[14],
                    m = t[15];
                return (
                    (n * o - a * e) * (M * m - f * b) -
                    (n * i - r * e) * (s * m - f * v) +
                    (n * c - u * e) * (s * b - M * v) +
                    (a * i - r * o) * (h * m - f * l) -
                    (a * c - u * o) * (h * b - M * l) +
                    (r * c - u * i) * (h * v - s * l)
                );
            },
            multiply: A,
            translate: function(t, n, a) {
                var r,
                    u,
                    e,
                    o,
                    i,
                    c,
                    h,
                    s,
                    M,
                    f,
                    l,
                    v,
                    b = a[0],
                    m = a[1],
                    d = a[2];
                return (
                    n === t
                        ? ((t[12] = n[0] * b + n[4] * m + n[8] * d + n[12]),
                          (t[13] = n[1] * b + n[5] * m + n[9] * d + n[13]),
                          (t[14] = n[2] * b + n[6] * m + n[10] * d + n[14]),
                          (t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]))
                        : ((r = n[0]),
                          (u = n[1]),
                          (e = n[2]),
                          (o = n[3]),
                          (i = n[4]),
                          (c = n[5]),
                          (h = n[6]),
                          (s = n[7]),
                          (M = n[8]),
                          (f = n[9]),
                          (l = n[10]),
                          (v = n[11]),
                          (t[0] = r),
                          (t[1] = u),
                          (t[2] = e),
                          (t[3] = o),
                          (t[4] = i),
                          (t[5] = c),
                          (t[6] = h),
                          (t[7] = s),
                          (t[8] = M),
                          (t[9] = f),
                          (t[10] = l),
                          (t[11] = v),
                          (t[12] = r * b + i * m + M * d + n[12]),
                          (t[13] = u * b + c * m + f * d + n[13]),
                          (t[14] = e * b + h * m + l * d + n[14]),
                          (t[15] = o * b + s * m + v * d + n[15])),
                    t
                );
            },
            scale: function(t, n, a) {
                var r = a[0],
                    u = a[1],
                    e = a[2];
                return (
                    (t[0] = n[0] * r),
                    (t[1] = n[1] * r),
                    (t[2] = n[2] * r),
                    (t[3] = n[3] * r),
                    (t[4] = n[4] * u),
                    (t[5] = n[5] * u),
                    (t[6] = n[6] * u),
                    (t[7] = n[7] * u),
                    (t[8] = n[8] * e),
                    (t[9] = n[9] * e),
                    (t[10] = n[10] * e),
                    (t[11] = n[11] * e),
                    (t[12] = n[12]),
                    (t[13] = n[13]),
                    (t[14] = n[14]),
                    (t[15] = n[15]),
                    t
                );
            },
            rotate: function(t, a, r, u) {
                var e,
                    o,
                    i,
                    c,
                    h,
                    s,
                    M,
                    f,
                    l,
                    v,
                    b,
                    m,
                    d,
                    x,
                    p,
                    y,
                    q,
                    g,
                    A,
                    w,
                    R,
                    z,
                    P,
                    j,
                    I = u[0],
                    S = u[1],
                    E = u[2],
                    O = Math.hypot(I, S, E);
                return O < n
                    ? null
                    : ((I *= O = 1 / O),
                      (S *= O),
                      (E *= O),
                      (e = Math.sin(r)),
                      (i = 1 - (o = Math.cos(r))),
                      (c = a[0]),
                      (h = a[1]),
                      (s = a[2]),
                      (M = a[3]),
                      (f = a[4]),
                      (l = a[5]),
                      (v = a[6]),
                      (b = a[7]),
                      (m = a[8]),
                      (d = a[9]),
                      (x = a[10]),
                      (p = a[11]),
                      (y = I * I * i + o),
                      (q = S * I * i + E * e),
                      (g = E * I * i - S * e),
                      (A = I * S * i - E * e),
                      (w = S * S * i + o),
                      (R = E * S * i + I * e),
                      (z = I * E * i + S * e),
                      (P = S * E * i - I * e),
                      (j = E * E * i + o),
                      (t[0] = c * y + f * q + m * g),
                      (t[1] = h * y + l * q + d * g),
                      (t[2] = s * y + v * q + x * g),
                      (t[3] = M * y + b * q + p * g),
                      (t[4] = c * A + f * w + m * R),
                      (t[5] = h * A + l * w + d * R),
                      (t[6] = s * A + v * w + x * R),
                      (t[7] = M * A + b * w + p * R),
                      (t[8] = c * z + f * P + m * j),
                      (t[9] = h * z + l * P + d * j),
                      (t[10] = s * z + v * P + x * j),
                      (t[11] = M * z + b * P + p * j),
                      a !== t &&
                          ((t[12] = a[12]),
                          (t[13] = a[13]),
                          (t[14] = a[14]),
                          (t[15] = a[15])),
                      t);
            },
            rotateX: function(t, n, a) {
                var r = Math.sin(a),
                    u = Math.cos(a),
                    e = n[4],
                    o = n[5],
                    i = n[6],
                    c = n[7],
                    h = n[8],
                    s = n[9],
                    M = n[10],
                    f = n[11];
                return (
                    n !== t &&
                        ((t[0] = n[0]),
                        (t[1] = n[1]),
                        (t[2] = n[2]),
                        (t[3] = n[3]),
                        (t[12] = n[12]),
                        (t[13] = n[13]),
                        (t[14] = n[14]),
                        (t[15] = n[15])),
                    (t[4] = e * u + h * r),
                    (t[5] = o * u + s * r),
                    (t[6] = i * u + M * r),
                    (t[7] = c * u + f * r),
                    (t[8] = h * u - e * r),
                    (t[9] = s * u - o * r),
                    (t[10] = M * u - i * r),
                    (t[11] = f * u - c * r),
                    t
                );
            },
            rotateY: function(t, n, a) {
                var r = Math.sin(a),
                    u = Math.cos(a),
                    e = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    h = n[8],
                    s = n[9],
                    M = n[10],
                    f = n[11];
                return (
                    n !== t &&
                        ((t[4] = n[4]),
                        (t[5] = n[5]),
                        (t[6] = n[6]),
                        (t[7] = n[7]),
                        (t[12] = n[12]),
                        (t[13] = n[13]),
                        (t[14] = n[14]),
                        (t[15] = n[15])),
                    (t[0] = e * u - h * r),
                    (t[1] = o * u - s * r),
                    (t[2] = i * u - M * r),
                    (t[3] = c * u - f * r),
                    (t[8] = e * r + h * u),
                    (t[9] = o * r + s * u),
                    (t[10] = i * r + M * u),
                    (t[11] = c * r + f * u),
                    t
                );
            },
            rotateZ: function(t, n, a) {
                var r = Math.sin(a),
                    u = Math.cos(a),
                    e = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    h = n[4],
                    s = n[5],
                    M = n[6],
                    f = n[7];
                return (
                    n !== t &&
                        ((t[8] = n[8]),
                        (t[9] = n[9]),
                        (t[10] = n[10]),
                        (t[11] = n[11]),
                        (t[12] = n[12]),
                        (t[13] = n[13]),
                        (t[14] = n[14]),
                        (t[15] = n[15])),
                    (t[0] = e * u + h * r),
                    (t[1] = o * u + s * r),
                    (t[2] = i * u + M * r),
                    (t[3] = c * u + f * r),
                    (t[4] = h * u - e * r),
                    (t[5] = s * u - o * r),
                    (t[6] = M * u - i * r),
                    (t[7] = f * u - c * r),
                    t
                );
            },
            fromTranslation: function(t, n) {
                return (
                    (t[0] = 1),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = 1),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 0),
                    (t[9] = 0),
                    (t[10] = 1),
                    (t[11] = 0),
                    (t[12] = n[0]),
                    (t[13] = n[1]),
                    (t[14] = n[2]),
                    (t[15] = 1),
                    t
                );
            },
            fromScaling: function(t, n) {
                return (
                    (t[0] = n[0]),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = n[1]),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 0),
                    (t[9] = 0),
                    (t[10] = n[2]),
                    (t[11] = 0),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = 0),
                    (t[15] = 1),
                    t
                );
            },
            fromRotation: function(t, a, r) {
                var u,
                    e,
                    o,
                    i = r[0],
                    c = r[1],
                    h = r[2],
                    s = Math.hypot(i, c, h);
                return s < n
                    ? null
                    : ((i *= s = 1 / s),
                      (c *= s),
                      (h *= s),
                      (u = Math.sin(a)),
                      (o = 1 - (e = Math.cos(a))),
                      (t[0] = i * i * o + e),
                      (t[1] = c * i * o + h * u),
                      (t[2] = h * i * o - c * u),
                      (t[3] = 0),
                      (t[4] = i * c * o - h * u),
                      (t[5] = c * c * o + e),
                      (t[6] = h * c * o + i * u),
                      (t[7] = 0),
                      (t[8] = i * h * o + c * u),
                      (t[9] = c * h * o - i * u),
                      (t[10] = h * h * o + e),
                      (t[11] = 0),
                      (t[12] = 0),
                      (t[13] = 0),
                      (t[14] = 0),
                      (t[15] = 1),
                      t);
            },
            fromXRotation: function(t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return (
                    (t[0] = 1),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = r),
                    (t[6] = a),
                    (t[7] = 0),
                    (t[8] = 0),
                    (t[9] = -a),
                    (t[10] = r),
                    (t[11] = 0),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = 0),
                    (t[15] = 1),
                    t
                );
            },
            fromYRotation: function(t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return (
                    (t[0] = r),
                    (t[1] = 0),
                    (t[2] = -a),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = 1),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = a),
                    (t[9] = 0),
                    (t[10] = r),
                    (t[11] = 0),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = 0),
                    (t[15] = 1),
                    t
                );
            },
            fromZRotation: function(t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return (
                    (t[0] = r),
                    (t[1] = a),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = -a),
                    (t[5] = r),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 0),
                    (t[9] = 0),
                    (t[10] = 1),
                    (t[11] = 0),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = 0),
                    (t[15] = 1),
                    t
                );
            },
            fromRotationTranslation: w,
            fromQuat2: function(t, n) {
                var r = new a(3),
                    u = -n[0],
                    e = -n[1],
                    o = -n[2],
                    i = n[3],
                    c = n[4],
                    h = n[5],
                    s = n[6],
                    M = n[7],
                    f = u * u + e * e + o * o + i * i;
                return (
                    f > 0
                        ? ((r[0] = (2 * (c * i + M * u + h * o - s * e)) / f),
                          (r[1] = (2 * (h * i + M * e + s * u - c * o)) / f),
                          (r[2] = (2 * (s * i + M * o + c * e - h * u)) / f))
                        : ((r[0] = 2 * (c * i + M * u + h * o - s * e)),
                          (r[1] = 2 * (h * i + M * e + s * u - c * o)),
                          (r[2] = 2 * (s * i + M * o + c * e - h * u))),
                    w(t, n, r),
                    t
                );
            },
            getTranslation: R,
            getScaling: z,
            getRotation: P,
            fromRotationTranslationScale: function(t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    o = n[2],
                    i = n[3],
                    c = u + u,
                    h = e + e,
                    s = o + o,
                    M = u * c,
                    f = u * h,
                    l = u * s,
                    v = e * h,
                    b = e * s,
                    m = o * s,
                    d = i * c,
                    x = i * h,
                    p = i * s,
                    y = r[0],
                    q = r[1],
                    g = r[2];
                return (
                    (t[0] = (1 - (v + m)) * y),
                    (t[1] = (f + p) * y),
                    (t[2] = (l - x) * y),
                    (t[3] = 0),
                    (t[4] = (f - p) * q),
                    (t[5] = (1 - (M + m)) * q),
                    (t[6] = (b + d) * q),
                    (t[7] = 0),
                    (t[8] = (l + x) * g),
                    (t[9] = (b - d) * g),
                    (t[10] = (1 - (M + v)) * g),
                    (t[11] = 0),
                    (t[12] = a[0]),
                    (t[13] = a[1]),
                    (t[14] = a[2]),
                    (t[15] = 1),
                    t
                );
            },
            fromRotationTranslationScaleOrigin: function(t, n, a, r, u) {
                var e = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    h = e + e,
                    s = o + o,
                    M = i + i,
                    f = e * h,
                    l = e * s,
                    v = e * M,
                    b = o * s,
                    m = o * M,
                    d = i * M,
                    x = c * h,
                    p = c * s,
                    y = c * M,
                    q = r[0],
                    g = r[1],
                    A = r[2],
                    w = u[0],
                    R = u[1],
                    z = u[2],
                    P = (1 - (b + d)) * q,
                    j = (l + y) * q,
                    I = (v - p) * q,
                    S = (l - y) * g,
                    E = (1 - (f + d)) * g,
                    O = (m + x) * g,
                    T = (v + p) * A,
                    D = (m - x) * A,
                    F = (1 - (f + b)) * A;
                return (
                    (t[0] = P),
                    (t[1] = j),
                    (t[2] = I),
                    (t[3] = 0),
                    (t[4] = S),
                    (t[5] = E),
                    (t[6] = O),
                    (t[7] = 0),
                    (t[8] = T),
                    (t[9] = D),
                    (t[10] = F),
                    (t[11] = 0),
                    (t[12] = a[0] + w - (P * w + S * R + T * z)),
                    (t[13] = a[1] + R - (j * w + E * R + D * z)),
                    (t[14] = a[2] + z - (I * w + O * R + F * z)),
                    (t[15] = 1),
                    t
                );
            },
            fromQuat: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a + a,
                    i = r + r,
                    c = u + u,
                    h = a * o,
                    s = r * o,
                    M = r * i,
                    f = u * o,
                    l = u * i,
                    v = u * c,
                    b = e * o,
                    m = e * i,
                    d = e * c;
                return (
                    (t[0] = 1 - M - v),
                    (t[1] = s + d),
                    (t[2] = f - m),
                    (t[3] = 0),
                    (t[4] = s - d),
                    (t[5] = 1 - h - v),
                    (t[6] = l + b),
                    (t[7] = 0),
                    (t[8] = f + m),
                    (t[9] = l - b),
                    (t[10] = 1 - h - M),
                    (t[11] = 0),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = 0),
                    (t[15] = 1),
                    t
                );
            },
            frustum: function(t, n, a, r, u, e, o) {
                var i = 1 / (a - n),
                    c = 1 / (u - r),
                    h = 1 / (e - o);
                return (
                    (t[0] = 2 * e * i),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = 2 * e * c),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = (a + n) * i),
                    (t[9] = (u + r) * c),
                    (t[10] = (o + e) * h),
                    (t[11] = -1),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = o * e * 2 * h),
                    (t[15] = 0),
                    t
                );
            },
            perspective: function(t, n, a, r, u) {
                var e,
                    o = 1 / Math.tan(n / 2);
                return (
                    (t[0] = o / a),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = o),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 0),
                    (t[9] = 0),
                    (t[11] = -1),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[15] = 0),
                    null != u && u !== 1 / 0
                        ? ((e = 1 / (r - u)),
                          (t[10] = (u + r) * e),
                          (t[14] = 2 * u * r * e))
                        : ((t[10] = -1), (t[14] = -2 * r)),
                    t
                );
            },
            perspectiveFromFieldOfView: function(t, n, a, r) {
                var u = Math.tan((n.upDegrees * Math.PI) / 180),
                    e = Math.tan((n.downDegrees * Math.PI) / 180),
                    o = Math.tan((n.leftDegrees * Math.PI) / 180),
                    i = Math.tan((n.rightDegrees * Math.PI) / 180),
                    c = 2 / (o + i),
                    h = 2 / (u + e);
                return (
                    (t[0] = c),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = h),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = -(o - i) * c * 0.5),
                    (t[9] = (u - e) * h * 0.5),
                    (t[10] = r / (a - r)),
                    (t[11] = -1),
                    (t[12] = 0),
                    (t[13] = 0),
                    (t[14] = (r * a) / (a - r)),
                    (t[15] = 0),
                    t
                );
            },
            ortho: function(t, n, a, r, u, e, o) {
                var i = 1 / (n - a),
                    c = 1 / (r - u),
                    h = 1 / (e - o);
                return (
                    (t[0] = -2 * i),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[3] = 0),
                    (t[4] = 0),
                    (t[5] = -2 * c),
                    (t[6] = 0),
                    (t[7] = 0),
                    (t[8] = 0),
                    (t[9] = 0),
                    (t[10] = 2 * h),
                    (t[11] = 0),
                    (t[12] = (n + a) * i),
                    (t[13] = (u + r) * c),
                    (t[14] = (o + e) * h),
                    (t[15] = 1),
                    t
                );
            },
            lookAt: function(t, a, r, u) {
                var e,
                    o,
                    i,
                    c,
                    h,
                    s,
                    M,
                    f,
                    l,
                    v,
                    b = a[0],
                    m = a[1],
                    d = a[2],
                    x = u[0],
                    p = u[1],
                    y = u[2],
                    q = r[0],
                    A = r[1],
                    w = r[2];
                return Math.abs(b - q) < n &&
                    Math.abs(m - A) < n &&
                    Math.abs(d - w) < n
                    ? g(t)
                    : ((M = b - q),
                      (f = m - A),
                      (l = d - w),
                      (e =
                          p * (l *= v = 1 / Math.hypot(M, f, l)) -
                          y * (f *= v)),
                      (o = y * (M *= v) - x * l),
                      (i = x * f - p * M),
                      (v = Math.hypot(e, o, i))
                          ? ((e *= v = 1 / v), (o *= v), (i *= v))
                          : ((e = 0), (o = 0), (i = 0)),
                      (c = f * i - l * o),
                      (h = l * e - M * i),
                      (s = M * o - f * e),
                      (v = Math.hypot(c, h, s))
                          ? ((c *= v = 1 / v), (h *= v), (s *= v))
                          : ((c = 0), (h = 0), (s = 0)),
                      (t[0] = e),
                      (t[1] = c),
                      (t[2] = M),
                      (t[3] = 0),
                      (t[4] = o),
                      (t[5] = h),
                      (t[6] = f),
                      (t[7] = 0),
                      (t[8] = i),
                      (t[9] = s),
                      (t[10] = l),
                      (t[11] = 0),
                      (t[12] = -(e * b + o * m + i * d)),
                      (t[13] = -(c * b + h * m + s * d)),
                      (t[14] = -(M * b + f * m + l * d)),
                      (t[15] = 1),
                      t);
            },
            targetTo: function(t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    o = n[2],
                    i = r[0],
                    c = r[1],
                    h = r[2],
                    s = u - a[0],
                    M = e - a[1],
                    f = o - a[2],
                    l = s * s + M * M + f * f;
                l > 0 && ((s *= l = 1 / Math.sqrt(l)), (M *= l), (f *= l));
                var v = c * f - h * M,
                    b = h * s - i * f,
                    m = i * M - c * s;
                return (
                    (l = v * v + b * b + m * m) > 0 &&
                        ((v *= l = 1 / Math.sqrt(l)), (b *= l), (m *= l)),
                    (t[0] = v),
                    (t[1] = b),
                    (t[2] = m),
                    (t[3] = 0),
                    (t[4] = M * m - f * b),
                    (t[5] = f * v - s * m),
                    (t[6] = s * b - M * v),
                    (t[7] = 0),
                    (t[8] = s),
                    (t[9] = M),
                    (t[10] = f),
                    (t[11] = 0),
                    (t[12] = u),
                    (t[13] = e),
                    (t[14] = o),
                    (t[15] = 1),
                    t
                );
            },
            str: function(t) {
                return (
                    'mat4(' +
                    t[0] +
                    ', ' +
                    t[1] +
                    ', ' +
                    t[2] +
                    ', ' +
                    t[3] +
                    ', ' +
                    t[4] +
                    ', ' +
                    t[5] +
                    ', ' +
                    t[6] +
                    ', ' +
                    t[7] +
                    ', ' +
                    t[8] +
                    ', ' +
                    t[9] +
                    ', ' +
                    t[10] +
                    ', ' +
                    t[11] +
                    ', ' +
                    t[12] +
                    ', ' +
                    t[13] +
                    ', ' +
                    t[14] +
                    ', ' +
                    t[15] +
                    ')'
                );
            },
            frob: function(t) {
                return Math.hypot(
                    t[0],
                    t[1],
                    t[3],
                    t[4],
                    t[5],
                    t[6],
                    t[7],
                    t[8],
                    t[9],
                    t[10],
                    t[11],
                    t[12],
                    t[13],
                    t[14],
                    t[15]
                );
            },
            add: function(t, n, a) {
                return (
                    (t[0] = n[0] + a[0]),
                    (t[1] = n[1] + a[1]),
                    (t[2] = n[2] + a[2]),
                    (t[3] = n[3] + a[3]),
                    (t[4] = n[4] + a[4]),
                    (t[5] = n[5] + a[5]),
                    (t[6] = n[6] + a[6]),
                    (t[7] = n[7] + a[7]),
                    (t[8] = n[8] + a[8]),
                    (t[9] = n[9] + a[9]),
                    (t[10] = n[10] + a[10]),
                    (t[11] = n[11] + a[11]),
                    (t[12] = n[12] + a[12]),
                    (t[13] = n[13] + a[13]),
                    (t[14] = n[14] + a[14]),
                    (t[15] = n[15] + a[15]),
                    t
                );
            },
            subtract: j,
            multiplyScalar: function(t, n, a) {
                return (
                    (t[0] = n[0] * a),
                    (t[1] = n[1] * a),
                    (t[2] = n[2] * a),
                    (t[3] = n[3] * a),
                    (t[4] = n[4] * a),
                    (t[5] = n[5] * a),
                    (t[6] = n[6] * a),
                    (t[7] = n[7] * a),
                    (t[8] = n[8] * a),
                    (t[9] = n[9] * a),
                    (t[10] = n[10] * a),
                    (t[11] = n[11] * a),
                    (t[12] = n[12] * a),
                    (t[13] = n[13] * a),
                    (t[14] = n[14] * a),
                    (t[15] = n[15] * a),
                    t
                );
            },
            multiplyScalarAndAdd: function(t, n, a, r) {
                return (
                    (t[0] = n[0] + a[0] * r),
                    (t[1] = n[1] + a[1] * r),
                    (t[2] = n[2] + a[2] * r),
                    (t[3] = n[3] + a[3] * r),
                    (t[4] = n[4] + a[4] * r),
                    (t[5] = n[5] + a[5] * r),
                    (t[6] = n[6] + a[6] * r),
                    (t[7] = n[7] + a[7] * r),
                    (t[8] = n[8] + a[8] * r),
                    (t[9] = n[9] + a[9] * r),
                    (t[10] = n[10] + a[10] * r),
                    (t[11] = n[11] + a[11] * r),
                    (t[12] = n[12] + a[12] * r),
                    (t[13] = n[13] + a[13] * r),
                    (t[14] = n[14] + a[14] * r),
                    (t[15] = n[15] + a[15] * r),
                    t
                );
            },
            exactEquals: function(t, n) {
                return (
                    t[0] === n[0] &&
                    t[1] === n[1] &&
                    t[2] === n[2] &&
                    t[3] === n[3] &&
                    t[4] === n[4] &&
                    t[5] === n[5] &&
                    t[6] === n[6] &&
                    t[7] === n[7] &&
                    t[8] === n[8] &&
                    t[9] === n[9] &&
                    t[10] === n[10] &&
                    t[11] === n[11] &&
                    t[12] === n[12] &&
                    t[13] === n[13] &&
                    t[14] === n[14] &&
                    t[15] === n[15]
                );
            },
            equals: function(t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = t[4],
                    c = t[5],
                    h = t[6],
                    s = t[7],
                    M = t[8],
                    f = t[9],
                    l = t[10],
                    v = t[11],
                    b = t[12],
                    m = t[13],
                    d = t[14],
                    x = t[15],
                    p = a[0],
                    y = a[1],
                    q = a[2],
                    g = a[3],
                    A = a[4],
                    w = a[5],
                    R = a[6],
                    z = a[7],
                    P = a[8],
                    j = a[9],
                    I = a[10],
                    S = a[11],
                    E = a[12],
                    O = a[13],
                    T = a[14],
                    D = a[15];
                return (
                    Math.abs(r - p) <=
                        n * Math.max(1, Math.abs(r), Math.abs(p)) &&
                    Math.abs(u - y) <=
                        n * Math.max(1, Math.abs(u), Math.abs(y)) &&
                    Math.abs(e - q) <=
                        n * Math.max(1, Math.abs(e), Math.abs(q)) &&
                    Math.abs(o - g) <=
                        n * Math.max(1, Math.abs(o), Math.abs(g)) &&
                    Math.abs(i - A) <=
                        n * Math.max(1, Math.abs(i), Math.abs(A)) &&
                    Math.abs(c - w) <=
                        n * Math.max(1, Math.abs(c), Math.abs(w)) &&
                    Math.abs(h - R) <=
                        n * Math.max(1, Math.abs(h), Math.abs(R)) &&
                    Math.abs(s - z) <=
                        n * Math.max(1, Math.abs(s), Math.abs(z)) &&
                    Math.abs(M - P) <=
                        n * Math.max(1, Math.abs(M), Math.abs(P)) &&
                    Math.abs(f - j) <=
                        n * Math.max(1, Math.abs(f), Math.abs(j)) &&
                    Math.abs(l - I) <=
                        n * Math.max(1, Math.abs(l), Math.abs(I)) &&
                    Math.abs(v - S) <=
                        n * Math.max(1, Math.abs(v), Math.abs(S)) &&
                    Math.abs(b - E) <=
                        n * Math.max(1, Math.abs(b), Math.abs(E)) &&
                    Math.abs(m - O) <=
                        n * Math.max(1, Math.abs(m), Math.abs(O)) &&
                    Math.abs(d - T) <=
                        n * Math.max(1, Math.abs(d), Math.abs(T)) &&
                    Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
                );
            },
            mul: I,
            sub: S,
        });
    function O() {
        var t = new a(3);
        return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
    }
    function T(t) {
        var n = t[0],
            a = t[1],
            r = t[2];
        return Math.hypot(n, a, r);
    }
    function D(t, n, r) {
        var u = new a(3);
        return (u[0] = t), (u[1] = n), (u[2] = r), u;
    }
    function F(t, n, a) {
        return (
            (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), t
        );
    }
    function L(t, n, a) {
        return (
            (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), t
        );
    }
    function V(t, n, a) {
        return (
            (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), t
        );
    }
    function Q(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2];
        return Math.hypot(a, r, u);
    }
    function Y(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2];
        return a * a + r * r + u * u;
    }
    function X(t) {
        var n = t[0],
            a = t[1],
            r = t[2];
        return n * n + a * a + r * r;
    }
    function Z(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = a * a + r * r + u * u;
        return (
            e > 0 && (e = 1 / Math.sqrt(e)),
            (t[0] = n[0] * e),
            (t[1] = n[1] * e),
            (t[2] = n[2] * e),
            t
        );
    }
    function _(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
    }
    function B(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = a[0],
            i = a[1],
            c = a[2];
        return (
            (t[0] = u * c - e * i),
            (t[1] = e * o - r * c),
            (t[2] = r * i - u * o),
            t
        );
    }
    var N,
        k = F,
        U = L,
        W = V,
        C = Q,
        G = Y,
        H = T,
        J = X,
        K =
            ((N = O()),
            function(t, n, a, r, u, e) {
                var o, i;
                for (
                    n || (n = 3),
                        a || (a = 0),
                        i = r ? Math.min(r * n + a, t.length) : t.length,
                        o = a;
                    o < i;
                    o += n
                )
                    (N[0] = t[o]),
                        (N[1] = t[o + 1]),
                        (N[2] = t[o + 2]),
                        u(N, N, e),
                        (t[o] = N[0]),
                        (t[o + 1] = N[1]),
                        (t[o + 2] = N[2]);
                return t;
            }),
        $ = Object.freeze({
            create: O,
            clone: function(t) {
                var n = new a(3);
                return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), n;
            },
            length: T,
            fromValues: D,
            copy: function(t, n) {
                return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t;
            },
            set: function(t, n, a, r) {
                return (t[0] = n), (t[1] = a), (t[2] = r), t;
            },
            add: function(t, n, a) {
                return (
                    (t[0] = n[0] + a[0]),
                    (t[1] = n[1] + a[1]),
                    (t[2] = n[2] + a[2]),
                    t
                );
            },
            subtract: F,
            multiply: L,
            divide: V,
            ceil: function(t, n) {
                return (
                    (t[0] = Math.ceil(n[0])),
                    (t[1] = Math.ceil(n[1])),
                    (t[2] = Math.ceil(n[2])),
                    t
                );
            },
            floor: function(t, n) {
                return (
                    (t[0] = Math.floor(n[0])),
                    (t[1] = Math.floor(n[1])),
                    (t[2] = Math.floor(n[2])),
                    t
                );
            },
            min: function(t, n, a) {
                return (
                    (t[0] = Math.min(n[0], a[0])),
                    (t[1] = Math.min(n[1], a[1])),
                    (t[2] = Math.min(n[2], a[2])),
                    t
                );
            },
            max: function(t, n, a) {
                return (
                    (t[0] = Math.max(n[0], a[0])),
                    (t[1] = Math.max(n[1], a[1])),
                    (t[2] = Math.max(n[2], a[2])),
                    t
                );
            },
            round: function(t, n) {
                return (
                    (t[0] = Math.round(n[0])),
                    (t[1] = Math.round(n[1])),
                    (t[2] = Math.round(n[2])),
                    t
                );
            },
            scale: function(t, n, a) {
                return (
                    (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), t
                );
            },
            scaleAndAdd: function(t, n, a, r) {
                return (
                    (t[0] = n[0] + a[0] * r),
                    (t[1] = n[1] + a[1] * r),
                    (t[2] = n[2] + a[2] * r),
                    t
                );
            },
            distance: Q,
            squaredDistance: Y,
            squaredLength: X,
            negate: function(t, n) {
                return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t;
            },
            inverse: function(t, n) {
                return (
                    (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t
                );
            },
            normalize: Z,
            dot: _,
            cross: B,
            lerp: function(t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    o = n[2];
                return (
                    (t[0] = u + r * (a[0] - u)),
                    (t[1] = e + r * (a[1] - e)),
                    (t[2] = o + r * (a[2] - o)),
                    t
                );
            },
            hermite: function(t, n, a, r, u, e) {
                var o = e * e,
                    i = o * (2 * e - 3) + 1,
                    c = o * (e - 2) + e,
                    h = o * (e - 1),
                    s = o * (3 - 2 * e);
                return (
                    (t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s),
                    (t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s),
                    (t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s),
                    t
                );
            },
            bezier: function(t, n, a, r, u, e) {
                var o = 1 - e,
                    i = o * o,
                    c = e * e,
                    h = i * o,
                    s = 3 * e * i,
                    M = 3 * c * o,
                    f = c * e;
                return (
                    (t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f),
                    (t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f),
                    (t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f),
                    t
                );
            },
            random: function(t, n) {
                n = n || 1;
                var a = 2 * r() * Math.PI,
                    u = 2 * r() - 1,
                    e = Math.sqrt(1 - u * u) * n;
                return (
                    (t[0] = Math.cos(a) * e),
                    (t[1] = Math.sin(a) * e),
                    (t[2] = u * n),
                    t
                );
            },
            transformMat4: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = a[3] * r + a[7] * u + a[11] * e + a[15];
                return (
                    (o = o || 1),
                    (t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o),
                    (t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o),
                    (t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o),
                    t
                );
            },
            transformMat3: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2];
                return (
                    (t[0] = r * a[0] + u * a[3] + e * a[6]),
                    (t[1] = r * a[1] + u * a[4] + e * a[7]),
                    (t[2] = r * a[2] + u * a[5] + e * a[8]),
                    t
                );
            },
            transformQuat: function(t, n, a) {
                var r = a[0],
                    u = a[1],
                    e = a[2],
                    o = a[3],
                    i = n[0],
                    c = n[1],
                    h = n[2],
                    s = u * h - e * c,
                    M = e * i - r * h,
                    f = r * c - u * i,
                    l = u * f - e * M,
                    v = e * s - r * f,
                    b = r * M - u * s,
                    m = 2 * o;
                return (
                    (s *= m),
                    (M *= m),
                    (f *= m),
                    (l *= 2),
                    (v *= 2),
                    (b *= 2),
                    (t[0] = i + s + l),
                    (t[1] = c + M + v),
                    (t[2] = h + f + b),
                    t
                );
            },
            rotateX: function(t, n, a, r) {
                var u = [],
                    e = [];
                return (
                    (u[0] = n[0] - a[0]),
                    (u[1] = n[1] - a[1]),
                    (u[2] = n[2] - a[2]),
                    (e[0] = u[0]),
                    (e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r)),
                    (e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r)),
                    (t[0] = e[0] + a[0]),
                    (t[1] = e[1] + a[1]),
                    (t[2] = e[2] + a[2]),
                    t
                );
            },
            rotateY: function(t, n, a, r) {
                var u = [],
                    e = [];
                return (
                    (u[0] = n[0] - a[0]),
                    (u[1] = n[1] - a[1]),
                    (u[2] = n[2] - a[2]),
                    (e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r)),
                    (e[1] = u[1]),
                    (e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r)),
                    (t[0] = e[0] + a[0]),
                    (t[1] = e[1] + a[1]),
                    (t[2] = e[2] + a[2]),
                    t
                );
            },
            rotateZ: function(t, n, a, r) {
                var u = [],
                    e = [];
                return (
                    (u[0] = n[0] - a[0]),
                    (u[1] = n[1] - a[1]),
                    (u[2] = n[2] - a[2]),
                    (e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r)),
                    (e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r)),
                    (e[2] = u[2]),
                    (t[0] = e[0] + a[0]),
                    (t[1] = e[1] + a[1]),
                    (t[2] = e[2] + a[2]),
                    t
                );
            },
            angle: function(t, n) {
                var a = D(t[0], t[1], t[2]),
                    r = D(n[0], n[1], n[2]);
                Z(a, a), Z(r, r);
                var u = _(a, r);
                return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
            },
            zero: function(t) {
                return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
            },
            str: function(t) {
                return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
            },
            exactEquals: function(t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
            },
            equals: function(t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = a[0],
                    i = a[1],
                    c = a[2];
                return (
                    Math.abs(r - o) <=
                        n * Math.max(1, Math.abs(r), Math.abs(o)) &&
                    Math.abs(u - i) <=
                        n * Math.max(1, Math.abs(u), Math.abs(i)) &&
                    Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
                );
            },
            sub: k,
            mul: U,
            div: W,
            dist: C,
            sqrDist: G,
            len: H,
            sqrLen: J,
            forEach: K,
        });
    function tt() {
        var t = new a(4);
        return (
            a != Float32Array &&
                ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)),
            t
        );
    }
    function nt(t) {
        var n = new a(4);
        return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n;
    }
    function at(t, n, r, u) {
        var e = new a(4);
        return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e;
    }
    function rt(t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
    }
    function ut(t, n, a, r, u) {
        return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t;
    }
    function et(t, n, a) {
        return (
            (t[0] = n[0] + a[0]),
            (t[1] = n[1] + a[1]),
            (t[2] = n[2] + a[2]),
            (t[3] = n[3] + a[3]),
            t
        );
    }
    function ot(t, n, a) {
        return (
            (t[0] = n[0] - a[0]),
            (t[1] = n[1] - a[1]),
            (t[2] = n[2] - a[2]),
            (t[3] = n[3] - a[3]),
            t
        );
    }
    function it(t, n, a) {
        return (
            (t[0] = n[0] * a[0]),
            (t[1] = n[1] * a[1]),
            (t[2] = n[2] * a[2]),
            (t[3] = n[3] * a[3]),
            t
        );
    }
    function ct(t, n, a) {
        return (
            (t[0] = n[0] / a[0]),
            (t[1] = n[1] / a[1]),
            (t[2] = n[2] / a[2]),
            (t[3] = n[3] / a[3]),
            t
        );
    }
    function ht(t, n, a) {
        return (
            (t[0] = n[0] * a),
            (t[1] = n[1] * a),
            (t[2] = n[2] * a),
            (t[3] = n[3] * a),
            t
        );
    }
    function st(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2],
            e = n[3] - t[3];
        return Math.hypot(a, r, u, e);
    }
    function Mt(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2],
            e = n[3] - t[3];
        return a * a + r * r + u * u + e * e;
    }
    function ft(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            u = t[3];
        return Math.hypot(n, a, r, u);
    }
    function lt(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            u = t[3];
        return n * n + a * a + r * r + u * u;
    }
    function vt(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = a * a + r * r + u * u + e * e;
        return (
            o > 0 && (o = 1 / Math.sqrt(o)),
            (t[0] = a * o),
            (t[1] = r * o),
            (t[2] = u * o),
            (t[3] = e * o),
            t
        );
    }
    function bt(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
    }
    function mt(t, n, a, r) {
        var u = n[0],
            e = n[1],
            o = n[2],
            i = n[3];
        return (
            (t[0] = u + r * (a[0] - u)),
            (t[1] = e + r * (a[1] - e)),
            (t[2] = o + r * (a[2] - o)),
            (t[3] = i + r * (a[3] - i)),
            t
        );
    }
    function dt(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
    }
    function xt(t, a) {
        var r = t[0],
            u = t[1],
            e = t[2],
            o = t[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
        return (
            Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
            Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
            Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
            Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
        );
    }
    var pt = ot,
        yt = it,
        qt = ct,
        gt = st,
        At = Mt,
        wt = ft,
        Rt = lt,
        zt = (function() {
            var t = tt();
            return function(n, a, r, u, e, o) {
                var i, c;
                for (
                    a || (a = 4),
                        r || (r = 0),
                        c = u ? Math.min(u * a + r, n.length) : n.length,
                        i = r;
                    i < c;
                    i += a
                )
                    (t[0] = n[i]),
                        (t[1] = n[i + 1]),
                        (t[2] = n[i + 2]),
                        (t[3] = n[i + 3]),
                        e(t, t, o),
                        (n[i] = t[0]),
                        (n[i + 1] = t[1]),
                        (n[i + 2] = t[2]),
                        (n[i + 3] = t[3]);
                return n;
            };
        })(),
        Pt = Object.freeze({
            create: tt,
            clone: nt,
            fromValues: at,
            copy: rt,
            set: ut,
            add: et,
            subtract: ot,
            multiply: it,
            divide: ct,
            ceil: function(t, n) {
                return (
                    (t[0] = Math.ceil(n[0])),
                    (t[1] = Math.ceil(n[1])),
                    (t[2] = Math.ceil(n[2])),
                    (t[3] = Math.ceil(n[3])),
                    t
                );
            },
            floor: function(t, n) {
                return (
                    (t[0] = Math.floor(n[0])),
                    (t[1] = Math.floor(n[1])),
                    (t[2] = Math.floor(n[2])),
                    (t[3] = Math.floor(n[3])),
                    t
                );
            },
            min: function(t, n, a) {
                return (
                    (t[0] = Math.min(n[0], a[0])),
                    (t[1] = Math.min(n[1], a[1])),
                    (t[2] = Math.min(n[2], a[2])),
                    (t[3] = Math.min(n[3], a[3])),
                    t
                );
            },
            max: function(t, n, a) {
                return (
                    (t[0] = Math.max(n[0], a[0])),
                    (t[1] = Math.max(n[1], a[1])),
                    (t[2] = Math.max(n[2], a[2])),
                    (t[3] = Math.max(n[3], a[3])),
                    t
                );
            },
            round: function(t, n) {
                return (
                    (t[0] = Math.round(n[0])),
                    (t[1] = Math.round(n[1])),
                    (t[2] = Math.round(n[2])),
                    (t[3] = Math.round(n[3])),
                    t
                );
            },
            scale: ht,
            scaleAndAdd: function(t, n, a, r) {
                return (
                    (t[0] = n[0] + a[0] * r),
                    (t[1] = n[1] + a[1] * r),
                    (t[2] = n[2] + a[2] * r),
                    (t[3] = n[3] + a[3] * r),
                    t
                );
            },
            distance: st,
            squaredDistance: Mt,
            length: ft,
            squaredLength: lt,
            negate: function(t, n) {
                return (
                    (t[0] = -n[0]),
                    (t[1] = -n[1]),
                    (t[2] = -n[2]),
                    (t[3] = -n[3]),
                    t
                );
            },
            inverse: function(t, n) {
                return (
                    (t[0] = 1 / n[0]),
                    (t[1] = 1 / n[1]),
                    (t[2] = 1 / n[2]),
                    (t[3] = 1 / n[3]),
                    t
                );
            },
            normalize: vt,
            dot: bt,
            cross: function(t, n, a, r) {
                var u = a[0] * r[1] - a[1] * r[0],
                    e = a[0] * r[2] - a[2] * r[0],
                    o = a[0] * r[3] - a[3] * r[0],
                    i = a[1] * r[2] - a[2] * r[1],
                    c = a[1] * r[3] - a[3] * r[1],
                    h = a[2] * r[3] - a[3] * r[2],
                    s = n[0],
                    M = n[1],
                    f = n[2],
                    l = n[3];
                return (
                    (t[0] = M * h - f * c + l * i),
                    (t[1] = -s * h + f * o - l * e),
                    (t[2] = s * c - M * o + l * u),
                    (t[3] = -s * i + M * e - f * u),
                    t
                );
            },
            lerp: mt,
            random: function(t, n) {
                var a, u, e, o, i, c;
                n = n || 1;
                do {
                    i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u;
                } while (i >= 1);
                do {
                    c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o;
                } while (c >= 1);
                var h = Math.sqrt((1 - i) / c);
                return (
                    (t[0] = n * a),
                    (t[1] = n * u),
                    (t[2] = n * e * h),
                    (t[3] = n * o * h),
                    t
                );
            },
            transformMat4: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3];
                return (
                    (t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o),
                    (t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o),
                    (t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o),
                    (t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o),
                    t
                );
            },
            transformQuat: function(t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = a[0],
                    i = a[1],
                    c = a[2],
                    h = a[3],
                    s = h * r + i * e - c * u,
                    M = h * u + c * r - o * e,
                    f = h * e + o * u - i * r,
                    l = -o * r - i * u - c * e;
                return (
                    (t[0] = s * h + l * -o + M * -c - f * -i),
                    (t[1] = M * h + l * -i + f * -o - s * -c),
                    (t[2] = f * h + l * -c + s * -i - M * -o),
                    (t[3] = n[3]),
                    t
                );
            },
            zero: function(t) {
                return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
            },
            str: function(t) {
                return (
                    'vec4(' +
                    t[0] +
                    ', ' +
                    t[1] +
                    ', ' +
                    t[2] +
                    ', ' +
                    t[3] +
                    ')'
                );
            },
            exactEquals: dt,
            equals: xt,
            sub: pt,
            mul: yt,
            div: qt,
            dist: gt,
            sqrDist: At,
            len: wt,
            sqrLen: Rt,
            forEach: zt,
        });
    function jt() {
        var t = new a(4);
        return (
            a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)),
            (t[3] = 1),
            t
        );
    }
    function It(t, n, a) {
        a *= 0.5;
        var r = Math.sin(a);
        return (
            (t[0] = r * n[0]),
            (t[1] = r * n[1]),
            (t[2] = r * n[2]),
            (t[3] = Math.cos(a)),
            t
        );
    }
    function St(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
        return (
            (t[0] = r * s + o * i + u * h - e * c),
            (t[1] = u * s + o * c + e * i - r * h),
            (t[2] = e * s + o * h + r * c - u * i),
            (t[3] = o * s - r * i - u * c - e * h),
            t
        );
    }
    function Et(t, n, a) {
        a *= 0.5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
        return (
            (t[0] = r * c + o * i),
            (t[1] = u * c + e * i),
            (t[2] = e * c - u * i),
            (t[3] = o * c - r * i),
            t
        );
    }
    function Ot(t, n, a) {
        a *= 0.5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
        return (
            (t[0] = r * c - e * i),
            (t[1] = u * c + o * i),
            (t[2] = e * c + r * i),
            (t[3] = o * c - u * i),
            t
        );
    }
    function Tt(t, n, a) {
        a *= 0.5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
        return (
            (t[0] = r * c + u * i),
            (t[1] = u * c - r * i),
            (t[2] = e * c + o * i),
            (t[3] = o * c - e * i),
            t
        );
    }
    function Dt(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = Math.sqrt(a * a + r * r + u * u),
            i = Math.exp(e),
            c = o > 0 ? (i * Math.sin(o)) / o : 0;
        return (
            (t[0] = a * c),
            (t[1] = r * c),
            (t[2] = u * c),
            (t[3] = i * Math.cos(o)),
            t
        );
    }
    function Ft(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = Math.sqrt(a * a + r * r + u * u),
            i = o > 0 ? Math.atan2(o, e) / o : 0;
        return (
            (t[0] = a * i),
            (t[1] = r * i),
            (t[2] = u * i),
            (t[3] = 0.5 * Math.log(a * a + r * r + u * u + e * e)),
            t
        );
    }
    function Lt(t, a, r, u) {
        var e,
            o,
            i,
            c,
            h,
            s = a[0],
            M = a[1],
            f = a[2],
            l = a[3],
            v = r[0],
            b = r[1],
            m = r[2],
            d = r[3];
        return (
            (o = s * v + M * b + f * m + l * d) < 0 &&
                ((o = -o), (v = -v), (b = -b), (m = -m), (d = -d)),
            1 - o > n
                ? ((e = Math.acos(o)),
                  (i = Math.sin(e)),
                  (c = Math.sin((1 - u) * e) / i),
                  (h = Math.sin(u * e) / i))
                : ((c = 1 - u), (h = u)),
            (t[0] = c * s + h * v),
            (t[1] = c * M + h * b),
            (t[2] = c * f + h * m),
            (t[3] = c * l + h * d),
            t
        );
    }
    function Vt(t, n) {
        var a,
            r = n[0] + n[4] + n[8];
        if (r > 0)
            (a = Math.sqrt(r + 1)),
                (t[3] = 0.5 * a),
                (a = 0.5 / a),
                (t[0] = (n[5] - n[7]) * a),
                (t[1] = (n[6] - n[2]) * a),
                (t[2] = (n[1] - n[3]) * a);
        else {
            var u = 0;
            n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
            var e = (u + 1) % 3,
                o = (u + 2) % 3;
            (a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1)),
                (t[u] = 0.5 * a),
                (a = 0.5 / a),
                (t[3] = (n[3 * e + o] - n[3 * o + e]) * a),
                (t[e] = (n[3 * e + u] + n[3 * u + e]) * a),
                (t[o] = (n[3 * o + u] + n[3 * u + o]) * a);
        }
        return t;
    }
    var Qt,
        Yt,
        Xt,
        Zt,
        _t,
        Bt,
        Nt = nt,
        kt = at,
        Ut = rt,
        Wt = ut,
        Ct = et,
        Gt = St,
        Ht = ht,
        Jt = bt,
        Kt = mt,
        $t = ft,
        tn = $t,
        nn = lt,
        an = nn,
        rn = vt,
        un = dt,
        en = xt,
        on =
            ((Qt = O()),
            (Yt = D(1, 0, 0)),
            (Xt = D(0, 1, 0)),
            function(t, n, a) {
                var r = _(n, a);
                return r < -0.999999
                    ? (B(Qt, Yt, n),
                      H(Qt) < 1e-6 && B(Qt, Xt, n),
                      Z(Qt, Qt),
                      It(t, Qt, Math.PI),
                      t)
                    : r > 0.999999
                    ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
                    : (B(Qt, n, a),
                      (t[0] = Qt[0]),
                      (t[1] = Qt[1]),
                      (t[2] = Qt[2]),
                      (t[3] = 1 + r),
                      rn(t, t));
            }),
        cn =
            ((Zt = jt()),
            (_t = jt()),
            function(t, n, a, r, u, e) {
                return (
                    Lt(Zt, n, u, e),
                    Lt(_t, a, r, e),
                    Lt(t, Zt, _t, 2 * e * (1 - e)),
                    t
                );
            }),
        hn =
            ((Bt = m()),
            function(t, n, a, r) {
                return (
                    (Bt[0] = a[0]),
                    (Bt[3] = a[1]),
                    (Bt[6] = a[2]),
                    (Bt[1] = r[0]),
                    (Bt[4] = r[1]),
                    (Bt[7] = r[2]),
                    (Bt[2] = -n[0]),
                    (Bt[5] = -n[1]),
                    (Bt[8] = -n[2]),
                    rn(t, Vt(t, Bt))
                );
            }),
        sn = Object.freeze({
            create: jt,
            identity: function(t) {
                return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
            },
            setAxisAngle: It,
            getAxisAngle: function(t, a) {
                var r = 2 * Math.acos(a[3]),
                    u = Math.sin(r / 2);
                return (
                    u > n
                        ? ((t[0] = a[0] / u),
                          (t[1] = a[1] / u),
                          (t[2] = a[2] / u))
                        : ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
                    r
                );
            },
            getAngle: function(t, n) {
                var a = Jt(t, n);
                return Math.acos(2 * a * a - 1);
            },
            multiply: St,
            rotateX: Et,
            rotateY: Ot,
            rotateZ: Tt,
            calculateW: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2];
                return (
                    (t[0] = a),
                    (t[1] = r),
                    (t[2] = u),
                    (t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u))),
                    t
                );
            },
            exp: Dt,
            ln: Ft,
            pow: function(t, n, a) {
                return Ft(t, n), Ht(t, t, a), Dt(t, t), t;
            },
            slerp: Lt,
            random: function(t) {
                var n = r(),
                    a = r(),
                    u = r(),
                    e = Math.sqrt(1 - n),
                    o = Math.sqrt(n);
                return (
                    (t[0] = e * Math.sin(2 * Math.PI * a)),
                    (t[1] = e * Math.cos(2 * Math.PI * a)),
                    (t[2] = o * Math.sin(2 * Math.PI * u)),
                    (t[3] = o * Math.cos(2 * Math.PI * u)),
                    t
                );
            },
            invert: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a * a + r * r + u * u + e * e,
                    i = o ? 1 / o : 0;
                return (
                    (t[0] = -a * i),
                    (t[1] = -r * i),
                    (t[2] = -u * i),
                    (t[3] = e * i),
                    t
                );
            },
            conjugate: function(t, n) {
                return (
                    (t[0] = -n[0]),
                    (t[1] = -n[1]),
                    (t[2] = -n[2]),
                    (t[3] = n[3]),
                    t
                );
            },
            fromMat3: Vt,
            fromEuler: function(t, n, a, r) {
                var u = (0.5 * Math.PI) / 180;
                (n *= u), (a *= u), (r *= u);
                var e = Math.sin(n),
                    o = Math.cos(n),
                    i = Math.sin(a),
                    c = Math.cos(a),
                    h = Math.sin(r),
                    s = Math.cos(r);
                return (
                    (t[0] = e * c * s - o * i * h),
                    (t[1] = o * i * s + e * c * h),
                    (t[2] = o * c * h - e * i * s),
                    (t[3] = o * c * s + e * i * h),
                    t
                );
            },
            str: function(t) {
                return (
                    'quat(' +
                    t[0] +
                    ', ' +
                    t[1] +
                    ', ' +
                    t[2] +
                    ', ' +
                    t[3] +
                    ')'
                );
            },
            clone: Nt,
            fromValues: kt,
            copy: Ut,
            set: Wt,
            add: Ct,
            mul: Gt,
            scale: Ht,
            dot: Jt,
            lerp: Kt,
            length: $t,
            len: tn,
            squaredLength: nn,
            sqrLen: an,
            normalize: rn,
            exactEquals: un,
            equals: en,
            rotationTo: on,
            sqlerp: cn,
            setAxes: hn,
        });
    function Mn(t, n, a) {
        var r = 0.5 * a[0],
            u = 0.5 * a[1],
            e = 0.5 * a[2],
            o = n[0],
            i = n[1],
            c = n[2],
            h = n[3];
        return (
            (t[0] = o),
            (t[1] = i),
            (t[2] = c),
            (t[3] = h),
            (t[4] = r * h + u * c - e * i),
            (t[5] = u * h + e * o - r * c),
            (t[6] = e * h + r * i - u * o),
            (t[7] = -r * o - u * i - e * c),
            t
        );
    }
    function fn(t, n) {
        return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            t
        );
    }
    var ln = Ut;
    var vn = Ut;
    function bn(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[4],
            c = a[5],
            h = a[6],
            s = a[7],
            M = n[4],
            f = n[5],
            l = n[6],
            v = n[7],
            b = a[0],
            m = a[1],
            d = a[2],
            x = a[3];
        return (
            (t[0] = r * x + o * b + u * d - e * m),
            (t[1] = u * x + o * m + e * b - r * d),
            (t[2] = e * x + o * d + r * m - u * b),
            (t[3] = o * x - r * b - u * m - e * d),
            (t[4] =
                r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m),
            (t[5] =
                u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d),
            (t[6] =
                e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b),
            (t[7] =
                o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d),
            t
        );
    }
    var mn = bn;
    var dn = Jt;
    var xn = $t,
        pn = xn,
        yn = nn,
        qn = yn;
    var gn = Object.freeze({
        create: function() {
            var t = new a(8);
            return (
                a != Float32Array &&
                    ((t[0] = 0),
                    (t[1] = 0),
                    (t[2] = 0),
                    (t[4] = 0),
                    (t[5] = 0),
                    (t[6] = 0),
                    (t[7] = 0)),
                (t[3] = 1),
                t
            );
        },
        clone: function(t) {
            var n = new a(8);
            return (
                (n[0] = t[0]),
                (n[1] = t[1]),
                (n[2] = t[2]),
                (n[3] = t[3]),
                (n[4] = t[4]),
                (n[5] = t[5]),
                (n[6] = t[6]),
                (n[7] = t[7]),
                n
            );
        },
        fromValues: function(t, n, r, u, e, o, i, c) {
            var h = new a(8);
            return (
                (h[0] = t),
                (h[1] = n),
                (h[2] = r),
                (h[3] = u),
                (h[4] = e),
                (h[5] = o),
                (h[6] = i),
                (h[7] = c),
                h
            );
        },
        fromRotationTranslationValues: function(t, n, r, u, e, o, i) {
            var c = new a(8);
            (c[0] = t), (c[1] = n), (c[2] = r), (c[3] = u);
            var h = 0.5 * e,
                s = 0.5 * o,
                M = 0.5 * i;
            return (
                (c[4] = h * u + s * r - M * n),
                (c[5] = s * u + M * t - h * r),
                (c[6] = M * u + h * n - s * t),
                (c[7] = -h * t - s * n - M * r),
                c
            );
        },
        fromRotationTranslation: Mn,
        fromTranslation: function(t, n) {
            return (
                (t[0] = 0),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = 0.5 * n[0]),
                (t[5] = 0.5 * n[1]),
                (t[6] = 0.5 * n[2]),
                (t[7] = 0),
                t
            );
        },
        fromRotation: function(t, n) {
            return (
                (t[0] = n[0]),
                (t[1] = n[1]),
                (t[2] = n[2]),
                (t[3] = n[3]),
                (t[4] = 0),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                t
            );
        },
        fromMat4: function(t, n) {
            var r = jt();
            P(r, n);
            var u = new a(3);
            return R(u, n), Mn(t, r, u), t;
        },
        copy: fn,
        identity: function(t) {
            return (
                (t[0] = 0),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = 0),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                t
            );
        },
        set: function(t, n, a, r, u, e, o, i, c) {
            return (
                (t[0] = n),
                (t[1] = a),
                (t[2] = r),
                (t[3] = u),
                (t[4] = e),
                (t[5] = o),
                (t[6] = i),
                (t[7] = c),
                t
            );
        },
        getReal: ln,
        getDual: function(t, n) {
            return (
                (t[0] = n[4]), (t[1] = n[5]), (t[2] = n[6]), (t[3] = n[7]), t
            );
        },
        setReal: vn,
        setDual: function(t, n) {
            return (
                (t[4] = n[0]), (t[5] = n[1]), (t[6] = n[2]), (t[7] = n[3]), t
            );
        },
        getTranslation: function(t, n) {
            var a = n[4],
                r = n[5],
                u = n[6],
                e = n[7],
                o = -n[0],
                i = -n[1],
                c = -n[2],
                h = n[3];
            return (
                (t[0] = 2 * (a * h + e * o + r * c - u * i)),
                (t[1] = 2 * (r * h + e * i + u * o - a * c)),
                (t[2] = 2 * (u * h + e * c + a * i - r * o)),
                t
            );
        },
        translate: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = 0.5 * a[0],
                c = 0.5 * a[1],
                h = 0.5 * a[2],
                s = n[4],
                M = n[5],
                f = n[6],
                l = n[7];
            return (
                (t[0] = r),
                (t[1] = u),
                (t[2] = e),
                (t[3] = o),
                (t[4] = o * i + u * h - e * c + s),
                (t[5] = o * c + e * i - r * h + M),
                (t[6] = o * h + r * c - u * i + f),
                (t[7] = -r * i - u * c - e * h + l),
                t
            );
        },
        rotateX: function(t, n, a) {
            var r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                h = n[6],
                s = n[7],
                M = i * o + s * r + c * e - h * u,
                f = c * o + s * u + h * r - i * e,
                l = h * o + s * e + i * u - c * r,
                v = s * o - i * r - c * u - h * e;
            return (
                Et(t, n, a),
                (r = t[0]),
                (u = t[1]),
                (e = t[2]),
                (o = t[3]),
                (t[4] = M * o + v * r + f * e - l * u),
                (t[5] = f * o + v * u + l * r - M * e),
                (t[6] = l * o + v * e + M * u - f * r),
                (t[7] = v * o - M * r - f * u - l * e),
                t
            );
        },
        rotateY: function(t, n, a) {
            var r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                h = n[6],
                s = n[7],
                M = i * o + s * r + c * e - h * u,
                f = c * o + s * u + h * r - i * e,
                l = h * o + s * e + i * u - c * r,
                v = s * o - i * r - c * u - h * e;
            return (
                Ot(t, n, a),
                (r = t[0]),
                (u = t[1]),
                (e = t[2]),
                (o = t[3]),
                (t[4] = M * o + v * r + f * e - l * u),
                (t[5] = f * o + v * u + l * r - M * e),
                (t[6] = l * o + v * e + M * u - f * r),
                (t[7] = v * o - M * r - f * u - l * e),
                t
            );
        },
        rotateZ: function(t, n, a) {
            var r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                h = n[6],
                s = n[7],
                M = i * o + s * r + c * e - h * u,
                f = c * o + s * u + h * r - i * e,
                l = h * o + s * e + i * u - c * r,
                v = s * o - i * r - c * u - h * e;
            return (
                Tt(t, n, a),
                (r = t[0]),
                (u = t[1]),
                (e = t[2]),
                (o = t[3]),
                (t[4] = M * o + v * r + f * e - l * u),
                (t[5] = f * o + v * u + l * r - M * e),
                (t[6] = l * o + v * e + M * u - f * r),
                (t[7] = v * o - M * r - f * u - l * e),
                t
            );
        },
        rotateByQuatAppend: function(t, n, a) {
            var r = a[0],
                u = a[1],
                e = a[2],
                o = a[3],
                i = n[0],
                c = n[1],
                h = n[2],
                s = n[3];
            return (
                (t[0] = i * o + s * r + c * e - h * u),
                (t[1] = c * o + s * u + h * r - i * e),
                (t[2] = h * o + s * e + i * u - c * r),
                (t[3] = s * o - i * r - c * u - h * e),
                (i = n[4]),
                (c = n[5]),
                (h = n[6]),
                (s = n[7]),
                (t[4] = i * o + s * r + c * e - h * u),
                (t[5] = c * o + s * u + h * r - i * e),
                (t[6] = h * o + s * e + i * u - c * r),
                (t[7] = s * o - i * r - c * u - h * e),
                t
            );
        },
        rotateByQuatPrepend: function(t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = a[0],
                c = a[1],
                h = a[2],
                s = a[3];
            return (
                (t[0] = r * s + o * i + u * h - e * c),
                (t[1] = u * s + o * c + e * i - r * h),
                (t[2] = e * s + o * h + r * c - u * i),
                (t[3] = o * s - r * i - u * c - e * h),
                (i = a[4]),
                (c = a[5]),
                (h = a[6]),
                (s = a[7]),
                (t[4] = r * s + o * i + u * h - e * c),
                (t[5] = u * s + o * c + e * i - r * h),
                (t[6] = e * s + o * h + r * c - u * i),
                (t[7] = o * s - r * i - u * c - e * h),
                t
            );
        },
        rotateAroundAxis: function(t, a, r, u) {
            if (Math.abs(u) < n) return fn(t, a);
            var e = Math.hypot(r[0], r[1], r[2]);
            u *= 0.5;
            var o = Math.sin(u),
                i = (o * r[0]) / e,
                c = (o * r[1]) / e,
                h = (o * r[2]) / e,
                s = Math.cos(u),
                M = a[0],
                f = a[1],
                l = a[2],
                v = a[3];
            (t[0] = M * s + v * i + f * h - l * c),
                (t[1] = f * s + v * c + l * i - M * h),
                (t[2] = l * s + v * h + M * c - f * i),
                (t[3] = v * s - M * i - f * c - l * h);
            var b = a[4],
                m = a[5],
                d = a[6],
                x = a[7];
            return (
                (t[4] = b * s + x * i + m * h - d * c),
                (t[5] = m * s + x * c + d * i - b * h),
                (t[6] = d * s + x * h + b * c - m * i),
                (t[7] = x * s - b * i - m * c - d * h),
                t
            );
        },
        add: function(t, n, a) {
            return (
                (t[0] = n[0] + a[0]),
                (t[1] = n[1] + a[1]),
                (t[2] = n[2] + a[2]),
                (t[3] = n[3] + a[3]),
                (t[4] = n[4] + a[4]),
                (t[5] = n[5] + a[5]),
                (t[6] = n[6] + a[6]),
                (t[7] = n[7] + a[7]),
                t
            );
        },
        multiply: bn,
        mul: mn,
        scale: function(t, n, a) {
            return (
                (t[0] = n[0] * a),
                (t[1] = n[1] * a),
                (t[2] = n[2] * a),
                (t[3] = n[3] * a),
                (t[4] = n[4] * a),
                (t[5] = n[5] * a),
                (t[6] = n[6] * a),
                (t[7] = n[7] * a),
                t
            );
        },
        dot: dn,
        lerp: function(t, n, a, r) {
            var u = 1 - r;
            return (
                dn(n, a) < 0 && (r = -r),
                (t[0] = n[0] * u + a[0] * r),
                (t[1] = n[1] * u + a[1] * r),
                (t[2] = n[2] * u + a[2] * r),
                (t[3] = n[3] * u + a[3] * r),
                (t[4] = n[4] * u + a[4] * r),
                (t[5] = n[5] * u + a[5] * r),
                (t[6] = n[6] * u + a[6] * r),
                (t[7] = n[7] * u + a[7] * r),
                t
            );
        },
        invert: function(t, n) {
            var a = yn(n);
            return (
                (t[0] = -n[0] / a),
                (t[1] = -n[1] / a),
                (t[2] = -n[2] / a),
                (t[3] = n[3] / a),
                (t[4] = -n[4] / a),
                (t[5] = -n[5] / a),
                (t[6] = -n[6] / a),
                (t[7] = n[7] / a),
                t
            );
        },
        conjugate: function(t, n) {
            return (
                (t[0] = -n[0]),
                (t[1] = -n[1]),
                (t[2] = -n[2]),
                (t[3] = n[3]),
                (t[4] = -n[4]),
                (t[5] = -n[5]),
                (t[6] = -n[6]),
                (t[7] = n[7]),
                t
            );
        },
        length: xn,
        len: pn,
        squaredLength: yn,
        sqrLen: qn,
        normalize: function(t, n) {
            var a = yn(n);
            if (a > 0) {
                a = Math.sqrt(a);
                var r = n[0] / a,
                    u = n[1] / a,
                    e = n[2] / a,
                    o = n[3] / a,
                    i = n[4],
                    c = n[5],
                    h = n[6],
                    s = n[7],
                    M = r * i + u * c + e * h + o * s;
                (t[0] = r),
                    (t[1] = u),
                    (t[2] = e),
                    (t[3] = o),
                    (t[4] = (i - r * M) / a),
                    (t[5] = (c - u * M) / a),
                    (t[6] = (h - e * M) / a),
                    (t[7] = (s - o * M) / a);
            }
            return t;
        },
        str: function(t) {
            return (
                'quat2(' +
                t[0] +
                ', ' +
                t[1] +
                ', ' +
                t[2] +
                ', ' +
                t[3] +
                ', ' +
                t[4] +
                ', ' +
                t[5] +
                ', ' +
                t[6] +
                ', ' +
                t[7] +
                ')'
            );
        },
        exactEquals: function(t, n) {
            return (
                t[0] === n[0] &&
                t[1] === n[1] &&
                t[2] === n[2] &&
                t[3] === n[3] &&
                t[4] === n[4] &&
                t[5] === n[5] &&
                t[6] === n[6] &&
                t[7] === n[7]
            );
        },
        equals: function(t, a) {
            var r = t[0],
                u = t[1],
                e = t[2],
                o = t[3],
                i = t[4],
                c = t[5],
                h = t[6],
                s = t[7],
                M = a[0],
                f = a[1],
                l = a[2],
                v = a[3],
                b = a[4],
                m = a[5],
                d = a[6],
                x = a[7];
            return (
                Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) &&
                Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) &&
                Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) &&
                Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) &&
                Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) &&
                Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) &&
                Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) &&
                Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
            );
        },
    });
    function An() {
        var t = new a(2);
        return a != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
    }
    function wn(t, n, a) {
        return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), t;
    }
    function Rn(t, n, a) {
        return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), t;
    }
    function zn(t, n, a) {
        return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), t;
    }
    function Pn(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1];
        return Math.hypot(a, r);
    }
    function jn(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1];
        return a * a + r * r;
    }
    function In(t) {
        var n = t[0],
            a = t[1];
        return Math.hypot(n, a);
    }
    function Sn(t) {
        var n = t[0],
            a = t[1];
        return n * n + a * a;
    }
    var En = In,
        On = wn,
        Tn = Rn,
        Dn = zn,
        Fn = Pn,
        Ln = jn,
        Vn = Sn,
        Qn = (function() {
            var t = An();
            return function(n, a, r, u, e, o) {
                var i, c;
                for (
                    a || (a = 2),
                        r || (r = 0),
                        c = u ? Math.min(u * a + r, n.length) : n.length,
                        i = r;
                    i < c;
                    i += a
                )
                    (t[0] = n[i]),
                        (t[1] = n[i + 1]),
                        e(t, t, o),
                        (n[i] = t[0]),
                        (n[i + 1] = t[1]);
                return n;
            };
        })(),
        Yn = Object.freeze({
            create: An,
            clone: function(t) {
                var n = new a(2);
                return (n[0] = t[0]), (n[1] = t[1]), n;
            },
            fromValues: function(t, n) {
                var r = new a(2);
                return (r[0] = t), (r[1] = n), r;
            },
            copy: function(t, n) {
                return (t[0] = n[0]), (t[1] = n[1]), t;
            },
            set: function(t, n, a) {
                return (t[0] = n), (t[1] = a), t;
            },
            add: function(t, n, a) {
                return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), t;
            },
            subtract: wn,
            multiply: Rn,
            divide: zn,
            ceil: function(t, n) {
                return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), t;
            },
            floor: function(t, n) {
                return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), t;
            },
            min: function(t, n, a) {
                return (
                    (t[0] = Math.min(n[0], a[0])),
                    (t[1] = Math.min(n[1], a[1])),
                    t
                );
            },
            max: function(t, n, a) {
                return (
                    (t[0] = Math.max(n[0], a[0])),
                    (t[1] = Math.max(n[1], a[1])),
                    t
                );
            },
            round: function(t, n) {
                return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), t;
            },
            scale: function(t, n, a) {
                return (t[0] = n[0] * a), (t[1] = n[1] * a), t;
            },
            scaleAndAdd: function(t, n, a, r) {
                return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), t;
            },
            distance: Pn,
            squaredDistance: jn,
            length: In,
            squaredLength: Sn,
            negate: function(t, n) {
                return (t[0] = -n[0]), (t[1] = -n[1]), t;
            },
            inverse: function(t, n) {
                return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), t;
            },
            normalize: function(t, n) {
                var a = n[0],
                    r = n[1],
                    u = a * a + r * r;
                return (
                    u > 0 && (u = 1 / Math.sqrt(u)),
                    (t[0] = n[0] * u),
                    (t[1] = n[1] * u),
                    t
                );
            },
            dot: function(t, n) {
                return t[0] * n[0] + t[1] * n[1];
            },
            cross: function(t, n, a) {
                var r = n[0] * a[1] - n[1] * a[0];
                return (t[0] = t[1] = 0), (t[2] = r), t;
            },
            lerp: function(t, n, a, r) {
                var u = n[0],
                    e = n[1];
                return (
                    (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), t
                );
            },
            random: function(t, n) {
                n = n || 1;
                var a = 2 * r() * Math.PI;
                return (t[0] = Math.cos(a) * n), (t[1] = Math.sin(a) * n), t;
            },
            transformMat2: function(t, n, a) {
                var r = n[0],
                    u = n[1];
                return (
                    (t[0] = a[0] * r + a[2] * u),
                    (t[1] = a[1] * r + a[3] * u),
                    t
                );
            },
            transformMat2d: function(t, n, a) {
                var r = n[0],
                    u = n[1];
                return (
                    (t[0] = a[0] * r + a[2] * u + a[4]),
                    (t[1] = a[1] * r + a[3] * u + a[5]),
                    t
                );
            },
            transformMat3: function(t, n, a) {
                var r = n[0],
                    u = n[1];
                return (
                    (t[0] = a[0] * r + a[3] * u + a[6]),
                    (t[1] = a[1] * r + a[4] * u + a[7]),
                    t
                );
            },
            transformMat4: function(t, n, a) {
                var r = n[0],
                    u = n[1];
                return (
                    (t[0] = a[0] * r + a[4] * u + a[12]),
                    (t[1] = a[1] * r + a[5] * u + a[13]),
                    t
                );
            },
            rotate: function(t, n, a, r) {
                var u = n[0] - a[0],
                    e = n[1] - a[1],
                    o = Math.sin(r),
                    i = Math.cos(r);
                return (
                    (t[0] = u * i - e * o + a[0]),
                    (t[1] = u * o + e * i + a[1]),
                    t
                );
            },
            angle: function(t, n) {
                var a = t[0],
                    r = t[1],
                    u = n[0],
                    e = n[1],
                    o = a * a + r * r;
                o > 0 && (o = 1 / Math.sqrt(o));
                var i = u * u + e * e;
                i > 0 && (i = 1 / Math.sqrt(i));
                var c = (a * u + r * e) * o * i;
                return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c);
            },
            zero: function(t) {
                return (t[0] = 0), (t[1] = 0), t;
            },
            str: function(t) {
                return 'vec2(' + t[0] + ', ' + t[1] + ')';
            },
            exactEquals: function(t, n) {
                return t[0] === n[0] && t[1] === n[1];
            },
            equals: function(t, a) {
                var r = t[0],
                    u = t[1],
                    e = a[0],
                    o = a[1];
                return (
                    Math.abs(r - e) <=
                        n * Math.max(1, Math.abs(r), Math.abs(e)) &&
                    Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
                );
            },
            len: En,
            sub: On,
            mul: Tn,
            div: Dn,
            dist: Fn,
            sqrDist: Ln,
            sqrLen: Vn,
            forEach: Qn,
        });
    (t.glMatrix = e),
        (t.mat2 = s),
        (t.mat2d = b),
        (t.mat3 = q),
        (t.mat4 = E),
        (t.quat = sn),
        (t.quat2 = gn),
        (t.vec2 = Yn),
        (t.vec3 = $),
        (t.vec4 = Pt),
        Object.defineProperty(t, '__esModule', { value: !0 });
});

// ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
window.glMatrix = glMatrix;
window.mat2 = glMatrix.mat2;
window.mat2d = glMatrix.mat2d;
window.mat3 = glMatrix.mat3;
window.mat4 = glMatrix.mat4;
window.quat = glMatrix.quat;
window.quat2 = glMatrix.quat2;
window.vec2 = glMatrix.vec2;
window.vec3 = glMatrix.vec3;
window.vec4 = glMatrix.vec4;

CABLES.exportedPatches || (CABLES.exportedPatches = {}),
    (CABLES.exportedPatches['6app0s'] = {
        settings: { opExample: [], licence: 'cc0', isPublic: !0 },
        ops: [
            {
                opId: 'b0472a1d-db16-4ba6-8787-f300fbdc77bb',
                objName: 'Ops.Gl.MainLoop',
                id: 'e73ac36b-4848-4090-96b2-481f52b06890',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    notWorkingMsg: null,
                    selected: !1,
                },
                portsIn: [
                    { name: 'FPS Limit', value: 0 },
                    { name: 'Reduce FPS not focussed', value: !0 },
                    { name: 'Reduce FPS loading', value: !1 },
                    { name: 'Clear', value: !0 },
                    { name: 'ClearAlpha', value: !0 },
                    { name: 'Fullscreen Button', value: !1 },
                    { name: 'Active', value: !0 },
                    { name: 'Hires Displays', value: !1 },
                ],
                portsOut: [
                    { name: 'trigger' },
                    { name: 'width', value: 640 },
                    { name: 'height', value: 359 },
                ],
            },
            {
                opId: 'eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1',
                objName: 'Ops.Gl.Matrix.OrbitControls',
                id: '50c8c99b-da80-40e0-87dd-7e228bf43058',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    notWorkingMsg: null,
                    selected: !1,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger',
                                objIn: '50c8c99b-da80-40e0-87dd-7e228bf43058',
                                objOut: 'e73ac36b-4848-4090-96b2-481f52b06890',
                            },
                        ],
                    },
                    { name: 'min distance', value: 2 },
                    { name: 'max distance', value: 3 },
                    { name: 'min rot y', value: 0 },
                    { name: 'max rot y', value: 0 },
                    { name: 'initial radius', value: 0.12 },
                    { name: 'initial axis y', value: 0.712 },
                    { name: 'initial axis x', value: 0.303 },
                    { name: 'mul', value: 1 },
                    { name: 'Smoothness', value: 1 },
                    { name: 'Speed X', value: 1 },
                    { name: 'Speed Y', value: 1 },
                    { name: 'Active', value: !0 },
                    { name: 'Allow Panning', value: !0 },
                    { name: 'Allow Zooming', value: !0 },
                    { name: 'Allow Rotation', value: !0 },
                    { name: 'restricted', value: !1 },
                    { name: 'Pointerlock', value: !1 },
                    { name: 'Reset', value: 0 },
                ],
                portsOut: [
                    { name: 'trigger' },
                    { name: 'radius', value: 2 },
                    { name: 'Rot X', value: 111.17017644744193 },
                    { name: 'Rot Y', value: 124.22953064764648 },
                ],
            },
            {
                opId: 'daafedce-998a-4b34-8af3-6b62a66948ed',
                objName: 'Ops.Gl.GLTF.GltfScene_v2',
                id: '9d315de3-daa7-4f72-a9b5-1088ed9388a6',
                uiAttribs: { subPatch: 0, notWorkingMsg: null, selected: !1 },
                portsIn: [
                    { name: 'data', value: '' },
                    {
                        name: 'Render',
                        links: [
                            {
                                portIn: 'Render',
                                portOut: 'trigger',
                                objIn: '9d315de3-daa7-4f72-a9b5-1088ed9388a6',
                                objOut: 'f80be044-8fac-4f34-8a23-964022340d7b',
                            },
                        ],
                    },
                    {
                        name: 'glb File',
                        value: 'assets/AW_Ables_2021.glb',
                        display: 'file',
                    },
                    { name: 'Draw', value: !0 },
                    { name: 'Camera index', value: 0 },
                    { name: 'Camera', value: 'None' },
                    { name: 'Show Structure', value: 0 },
                    { name: 'Center index', value: 1 },
                    { name: 'Center', value: 'XYZ' },
                    { name: 'Rescale', value: !0 },
                    { name: 'Rescale Size', value: 2.5 },
                    { name: 'Time', value: 0 },
                    { name: 'Sync to timeline', value: !1 },
                    { name: 'Loop', value: !1 },
                    { name: 'Normals Format index', value: 0 },
                    { name: 'Normals Format', value: 'XYZ' },
                    { name: 'Vertices Format index', value: 0 },
                    { name: 'Vertices Format', value: 'XYZ' },
                    { name: 'Calc Normals', value: !1 },
                    { name: 'Materials', value: 0 },
                    { name: 'Hide Nodes', value: 0 },
                ],
                portsOut: [
                    { name: 'Render Before', value: 0 },
                    { name: 'Next', value: 0 },
                    {
                        name: 'Generator',
                        value: 'Khronos glTF Blender I/O v1.3.48',
                    },
                    { name: 'GLTF Version', value: 2 },
                    { name: 'Anim Length', value: 0 },
                    { name: 'Anim Time', value: 0 },
                    { name: 'Json' },
                    { name: 'BoundingPoints' },
                    { name: 'Bounds' },
                    { name: 'Finished', value: 0 },
                    { name: 'Loaded', value: !0 },
                ],
            },
            {
                opId: 'd69316f1-bde9-4645-8280-c635a8982e0d',
                objName: 'Ops.Gl.Phong.LambertMaterial_v2',
                id: '5bc3ea76-84f3-4c48-873b-16e6c4d6fcdb',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Execute',
                        links: [
                            {
                                portIn: 'Execute',
                                portOut: 'Trigger Out',
                                objIn: '5bc3ea76-84f3-4c48-873b-16e6c4d6fcdb',
                                objOut: 'a43406e2-6d24-4821-9ebd-e516edb05661',
                            },
                        ],
                    },
                    { name: 'Diffuse R', value: 0.64105224609375 },
                    { name: 'Diffuse G', value: 0.64105224609375 },
                    { name: 'Diffuse B', value: 0.64105224609375 },
                    { name: 'Diffuse A', value: 1 },
                    { name: 'Double Sided', value: !1 },
                    { name: 'Diffuse Texture', value: 0 },
                    { name: 'Colorize Texture', value: !1 },
                ],
                portsOut: [{ name: 'next' }, { name: 'Shader' }],
            },
            {
                opId: 'a466bc1f-06e9-4595-8849-bffb9fe22f99',
                objName: 'Ops.Sequence',
                id: 'eb5251d6-3e40-4ff0-bb81-637468d13bf0',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'exe',
                        links: [
                            {
                                portIn: 'exe',
                                portOut: 'trigger',
                                objIn: 'eb5251d6-3e40-4ff0-bb81-637468d13bf0',
                                objOut: 'd3ba76ba-a7c5-498b-8a34-0b4bc20a797c',
                            },
                        ],
                    },
                    { name: 'exe 0', value: 0 },
                    { name: 'exe 1', value: 0 },
                    { name: 'exe 2', value: 0 },
                    { name: 'exe 3', value: 0 },
                    { name: 'exe 4', value: 0 },
                    { name: 'exe 5', value: 0 },
                    { name: 'exe 6', value: 0 },
                    { name: 'exe 7', value: 0 },
                    { name: 'exe 8', value: 0 },
                    { name: 'exe 9', value: 0 },
                    { name: 'exe 10', value: 0 },
                    { name: 'exe 11', value: 0 },
                    { name: 'exe 12', value: 0 },
                    { name: 'exe 13', value: 0 },
                    { name: 'exe 14', value: 0 },
                ],
                portsOut: [
                    { name: 'trigger 0' },
                    { name: 'trigger 1' },
                    { name: 'trigger 2' },
                    { name: 'trigger 3', value: 0 },
                    { name: 'trigger 4', value: 0 },
                    { name: 'trigger 5', value: 0 },
                    { name: 'trigger 6', value: 0 },
                    { name: 'trigger 7', value: 0 },
                    { name: 'trigger 8', value: 0 },
                    { name: 'trigger 9', value: 0 },
                    { name: 'trigger 10', value: 0 },
                    { name: 'trigger 11', value: 0 },
                    { name: 'trigger 12', value: 0 },
                    { name: 'trigger 13', value: 0 },
                    { name: 'trigger 14', value: 0 },
                    { name: 'trigger 15', value: 0 },
                ],
            },
            {
                opId: '37b92ba4-cea5-42ae-bf28-a513ca28549c',
                objName: 'Ops.Gl.Meshes.Cube_v2',
                id: '102af8f9-fb6f-4951-a2a7-82203e2221f0',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Render',
                        links: [
                            {
                                portIn: 'Render',
                                portOut: 'trigger',
                                objIn: '102af8f9-fb6f-4951-a2a7-82203e2221f0',
                                objOut: 'fc4c5a55-12a5-4378-9c36-7abac4e8968c',
                            },
                        ],
                    },
                    { name: 'Render Mesh', value: !0 },
                    { name: 'Width', value: 1.5 },
                    { name: 'Length', value: 1.2 },
                    { name: 'Height', value: '0.05' },
                    { name: 'Center', value: !0 },
                    { name: 'Mapping index', value: 0 },
                    { name: 'Mapping', value: 'Side' },
                    { name: 'Bias', value: 0 },
                    { name: 'Flip X', value: !0 },
                    { name: 'Top', value: !0 },
                    { name: 'Bottom', value: !0 },
                    { name: 'Left', value: !0 },
                    { name: 'Right', value: !0 },
                    { name: 'Front', value: !0 },
                    { name: 'Back', value: !0 },
                ],
                portsOut: [{ name: 'Next', value: 0 }, { name: 'geometry' }],
            },
            {
                opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
                objName: 'Ops.Gl.Matrix.Transform',
                id: 'fc4c5a55-12a5-4378-9c36-7abac4e8968c',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'next',
                                objIn: 'fc4c5a55-12a5-4378-9c36-7abac4e8968c',
                                objOut: 'c47519d4-3a9c-4c37-8cec-0e740012c0e9',
                            },
                        ],
                    },
                    { name: 'posX', value: '0' },
                    { name: 'posY', value: '-0.27' },
                    { name: 'posZ', value: 0.66 },
                    { name: 'scale', value: 7.43 },
                    { name: 'rotX', value: 0 },
                    { name: 'rotY', value: '0' },
                    { name: 'rotZ', value: 180 },
                ],
                portsOut: [{ name: 'trigger' }],
            },
            {
                opId: 'd69316f1-bde9-4645-8280-c635a8982e0d',
                objName: 'Ops.Gl.Phong.LambertMaterial_v2',
                id: 'c47519d4-3a9c-4c37-8cec-0e740012c0e9',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Execute',
                        links: [
                            {
                                portIn: 'Execute',
                                portOut: 'Trigger Out',
                                objIn: 'c47519d4-3a9c-4c37-8cec-0e740012c0e9',
                                objOut: '0b52d7ff-dcdb-4bab-84ff-10ac8608b23a',
                            },
                        ],
                    },
                    { name: 'Diffuse R', value: 0 },
                    { name: 'Diffuse G', value: 0 },
                    { name: 'Diffuse B', value: 0 },
                    { name: 'Diffuse A', value: 1 },
                    { name: 'Double Sided', value: !1 },
                    {
                        name: 'Diffuse Texture',
                        links: [
                            {
                                portIn: 'Diffuse Texture',
                                portOut: 'texture',
                                objIn: 'c47519d4-3a9c-4c37-8cec-0e740012c0e9',
                                objOut: '2555548d-e48a-4d90-bb2c-5c5a4646c69f',
                            },
                        ],
                    },
                    { name: 'Colorize Texture', value: !1 },
                ],
                portsOut: [{ name: 'next' }, { name: 'Shader' }],
            },
            {
                opId: '76418c17-abd5-401b-82e2-688db6f966ee',
                objName: 'Ops.Gl.Phong.SpotLight_v5',
                id: 'a43406e2-6d24-4821-9ebd-e516edb05661',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Trigger In',
                        links: [
                            {
                                portIn: 'Trigger In',
                                portOut: 'trigger 1',
                                objIn: 'a43406e2-6d24-4821-9ebd-e516edb05661',
                                objOut: 'eb5251d6-3e40-4ff0-bb81-637468d13bf0',
                            },
                        ],
                    },
                    { name: 'Cast Light', value: !0 },
                    { name: 'Intensity', value: 4.36 },
                    { name: 'Radius', value: 49.53 },
                    { name: 'X', value: 0 },
                    { name: 'Y', value: '2.31' },
                    { name: 'Z', value: 0 },
                    { name: 'Point At X', value: -0.07 },
                    { name: 'Point At Y', value: 1.06 },
                    { name: 'Point At Z', value: 0.01 },
                    { name: 'R', value: 1 },
                    { name: 'G', value: 1 },
                    { name: 'B', value: 1 },
                    { name: 'Specular R', value: 1 },
                    { name: 'Specular G', value: 1 },
                    { name: 'Specular B', value: 1 },
                    { name: 'Cone Angle', value: 120 },
                    { name: 'Inner Cone Angle', value: 60 },
                    { name: 'Spot Exponent', value: 0.97 },
                    { name: 'Falloff', value: 1e-5 },
                    { name: 'Cast Shadow', value: !1 },
                    { name: 'Rendering Active', value: !0 },
                    { name: 'Map Size index', value: 1 },
                    { name: 'Map Size', value: 512 },
                    { name: 'Shadow Strength', value: 0.98 },
                    { name: 'Near', value: '2.09' },
                    { name: 'Far', value: 232.87 },
                    { name: 'Bias', value: 1e-4 },
                    { name: 'Polygon Offset', value: 0 },
                    { name: 'Normal Offset', value: 0 },
                    { name: 'Blur Amount', value: 0 },
                    { name: 'Enable Advanced', value: !1 },
                    { name: 'MSAA index', value: 0 },
                    { name: 'MSAA', value: 'none' },
                    { name: 'Texture Filter index', value: 0 },
                    { name: 'Texture Filter', value: 'Linear' },
                    { name: 'Anisotropic index', value: 0 },
                    { name: 'Anisotropic', value: '0' },
                ],
                portsOut: [
                    { name: 'Trigger Out' },
                    { name: 'Shadow Map' },
                    { name: 'World Position X', value: 0 },
                    { name: 'World Position Y', value: 2.309999942779541 },
                    { name: 'World Position Z', value: 0 },
                ],
            },
            {
                opId: '466394d4-6c1a-4e5d-a057-0063ab0f096a',
                objName: 'Ops.Gl.Texture',
                id: '2555548d-e48a-4d90-bb2c-5c5a4646c69f',
                uiAttribs: { subPatch: 0, selected: !1, notWorkingMsg: null },
                portsIn: [
                    {
                        name: 'file',
                        value: 'assets/AW_Ux_Layout_Flip.png',
                        display: 'file',
                    },
                    { name: 'filter index', value: 0 },
                    { name: 'filter', value: 'mipmap' },
                    { name: 'wrap index', value: 2 },
                    { name: 'wrap', value: 'mirrored repeat' },
                    { name: 'flip', value: !1 },
                    { name: 'unpackPreMultipliedAlpha', value: !1 },
                    { name: 'Anisotropic index', value: 0 },
                    { name: 'Anisotropic', value: '16' },
                ],
                portsOut: [
                    { name: 'texture' },
                    { name: 'width', value: 7312 },
                    { name: 'height', value: 6346 },
                    { name: 'loading', value: !0 },
                    { name: 'Aspect Ratio', value: 1.152221872045383 },
                ],
            },
            {
                opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
                objName: 'Ops.Gl.Matrix.Transform',
                id: 'f80be044-8fac-4f34-8a23-964022340d7b',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'next',
                                objIn: 'f80be044-8fac-4f34-8a23-964022340d7b',
                                objOut: '5bc3ea76-84f3-4c48-873b-16e6c4d6fcdb',
                            },
                        ],
                    },
                    { name: 'posX', value: 0.57 },
                    { name: 'posY', value: 0.045 },
                    { name: 'posZ', value: 0.47 },
                    { name: 'scale', value: 1.25 },
                    { name: 'rotX', value: 0 },
                    { name: 'rotY', value: 0 },
                    { name: 'rotZ', value: 0 },
                ],
                portsOut: [{ name: 'trigger' }],
            },
            {
                opId: '76418c17-abd5-401b-82e2-688db6f966ee',
                objName: 'Ops.Gl.Phong.SpotLight_v5',
                id: '0b52d7ff-dcdb-4bab-84ff-10ac8608b23a',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Trigger In',
                        links: [
                            {
                                portIn: 'Trigger In',
                                portOut: 'trigger 0',
                                objIn: '0b52d7ff-dcdb-4bab-84ff-10ac8608b23a',
                                objOut: 'eb5251d6-3e40-4ff0-bb81-637468d13bf0',
                            },
                        ],
                    },
                    { name: 'Cast Light', value: !0 },
                    { name: 'Intensity', value: 4.36 },
                    { name: 'Radius', value: 49.53 },
                    { name: 'X', value: 0 },
                    { name: 'Y', value: '2.31' },
                    { name: 'Z', value: 0 },
                    { name: 'Point At X', value: -0.07 },
                    { name: 'Point At Y', value: 1.06 },
                    { name: 'Point At Z', value: 0.01 },
                    { name: 'R', value: 1 },
                    { name: 'G', value: 1 },
                    { name: 'B', value: 1 },
                    { name: 'Specular R', value: 1 },
                    { name: 'Specular G', value: 1 },
                    { name: 'Specular B', value: 1 },
                    { name: 'Cone Angle', value: 120 },
                    { name: 'Inner Cone Angle', value: 60 },
                    { name: 'Spot Exponent', value: 0.97 },
                    { name: 'Falloff', value: 1e-5 },
                    { name: 'Cast Shadow', value: !1 },
                    { name: 'Rendering Active', value: !0 },
                    { name: 'Map Size index', value: 1 },
                    { name: 'Map Size', value: 512 },
                    { name: 'Shadow Strength', value: 0.98 },
                    { name: 'Near', value: 2.09 },
                    { name: 'Far', value: 232.87 },
                    { name: 'Bias', value: 1e-4 },
                    { name: 'Polygon Offset', value: 0 },
                    { name: 'Normal Offset', value: 0 },
                    { name: 'Blur Amount', value: 0 },
                    { name: 'Enable Advanced', value: !1 },
                    { name: 'MSAA index', value: 0 },
                    { name: 'MSAA', value: 'none' },
                    { name: 'Texture Filter index', value: 0 },
                    { name: 'Texture Filter', value: 'Linear' },
                    { name: 'Anisotropic index', value: 0 },
                    { name: 'Anisotropic', value: '0' },
                ],
                portsOut: [
                    { name: 'Trigger Out' },
                    { name: 'Shadow Map' },
                    { name: 'World Position X', value: 0 },
                    { name: 'World Position Y', value: 2.309999942779541 },
                    { name: 'World Position Z', value: 0 },
                ],
            },
            {
                opId: 'b9235490-eaf2-4960-b1be-4279a4051ec6',
                objName: 'Ops.Gl.Orthogonal_v2',
                id: '4c23ab94-10cb-4b18-a0b3-7c17037df09a',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !0,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger',
                                objIn: '4c23ab94-10cb-4b18-a0b3-7c17037df09a',
                                objOut: '50c8c99b-da80-40e0-87dd-7e228bf43058',
                            },
                        ],
                    },
                    { name: 'bounds', value: 2.3 },
                    { name: 'Axis index', value: 0 },
                    { name: 'Axis', value: 'X' },
                    { name: 'frustum near', value: '0.01' },
                    { name: 'frustum far', value: 100 },
                ],
                portsOut: [
                    { name: 'trigger' },
                    { name: 'Ratio', value: 0.5609375 },
                    { name: 'Width', value: 4.6 },
                    { name: 'Height', value: 2.5803125 },
                ],
            },
            {
                opId: 'd01fa820-396c-4cb5-9d78-6b14762852af',
                objName: 'Ops.Gl.Render2Texture',
                id: 'd3ba76ba-a7c5-498b-8a34-0b4bc20a797c',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger 0',
                                objIn: 'd3ba76ba-a7c5-498b-8a34-0b4bc20a797c',
                                objOut: 'beef7a3c-1f48-48df-94f7-fa842e2f7997',
                            },
                        ],
                    },
                    { name: 'use viewport size', value: !0 },
                    { name: 'texture width', value: 640 },
                    { name: 'texture height', value: 359 },
                    { name: 'Auto Aspect', value: !1 },
                    { name: 'filter index', value: 1 },
                    { name: 'filter', value: 'mipmap' },
                    { name: 'Wrap index', value: 1 },
                    { name: 'Wrap', value: 'Repeat' },
                    { name: 'MSAA index', value: 0 },
                    { name: 'MSAA', value: '8x' },
                    { name: 'HDR', value: !1 },
                    { name: 'Depth', value: !0 },
                    { name: 'Clear', value: !0 },
                ],
                portsOut: [
                    { name: 'trigger' },
                    { name: 'texture' },
                    { name: 'textureDepth' },
                ],
            },
            {
                opId: 'a5b43d4c-a9ea-4eaf-9ed0-f257d222659d',
                objName: 'Ops.Gl.TextureEffects.ImageCompose_v2',
                id: '4e043ab2-2d2f-4f5c-89b9-889341e925db',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Render',
                        links: [
                            {
                                portIn: 'Render',
                                portOut: 'trigger 1',
                                objIn: '4e043ab2-2d2f-4f5c-89b9-889341e925db',
                                objOut: 'beef7a3c-1f48-48df-94f7-fa842e2f7997',
                            },
                        ],
                    },
                    { name: 'Use viewport size', value: !0 },
                    { name: 'Width', value: 640 },
                    { name: 'Height', value: 359 },
                    { name: 'Filter index', value: 1 },
                    { name: 'Filter', value: 'mipmap' },
                    { name: 'Wrap index', value: 1 },
                    { name: 'Wrap', value: 'repeat' },
                    { name: 'HDR', value: !1 },
                    { name: 'Transparent', value: !1 },
                ],
                portsOut: [
                    { name: 'Next' },
                    { name: 'texture_out' },
                    { name: 'Aspect Ratio', value: 1.7827298050139275 },
                ],
            },
            {
                opId: 'a466bc1f-06e9-4595-8849-bffb9fe22f99',
                objName: 'Ops.Sequence',
                id: 'beef7a3c-1f48-48df-94f7-fa842e2f7997',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'exe',
                        links: [
                            {
                                portIn: 'exe',
                                portOut: 'trigger',
                                objIn: 'beef7a3c-1f48-48df-94f7-fa842e2f7997',
                                objOut: '4c23ab94-10cb-4b18-a0b3-7c17037df09a',
                            },
                        ],
                    },
                    { name: 'exe 0', value: 0 },
                    { name: 'exe 1', value: 0 },
                    { name: 'exe 2', value: 0 },
                    { name: 'exe 3', value: 0 },
                    { name: 'exe 4', value: 0 },
                    { name: 'exe 5', value: 0 },
                    { name: 'exe 6', value: 0 },
                    { name: 'exe 7', value: 0 },
                    { name: 'exe 8', value: 0 },
                    { name: 'exe 9', value: 0 },
                    { name: 'exe 10', value: 0 },
                    { name: 'exe 11', value: 0 },
                    { name: 'exe 12', value: 0 },
                    { name: 'exe 13', value: 0 },
                    { name: 'exe 14', value: 0 },
                ],
                portsOut: [
                    { name: 'trigger 0' },
                    { name: 'trigger 1' },
                    { name: 'trigger 2' },
                    { name: 'trigger 3', value: 0 },
                    { name: 'trigger 4', value: 0 },
                    { name: 'trigger 5', value: 0 },
                    { name: 'trigger 6', value: 0 },
                    { name: 'trigger 7', value: 0 },
                    { name: 'trigger 8', value: 0 },
                    { name: 'trigger 9', value: 0 },
                    { name: 'trigger 10', value: 0 },
                    { name: 'trigger 11', value: 0 },
                    { name: 'trigger 12', value: 0 },
                    { name: 'trigger 13', value: 0 },
                    { name: 'trigger 14', value: 0 },
                    { name: 'trigger 15', value: 0 },
                ],
            },
            {
                opId: '8f6b2f15-fcb0-4597-90c0-e5173f2969fe',
                objName: 'Ops.Gl.TextureEffects.DrawImage_v3',
                id: '295a068e-1111-4cfc-80b9-05a38ad919f2',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'Next',
                                objIn: '295a068e-1111-4cfc-80b9-05a38ad919f2',
                                objOut: '4e043ab2-2d2f-4f5c-89b9-889341e925db',
                            },
                        ],
                    },
                    { name: 'blendMode index', value: 0 },
                    { name: 'blendMode', value: 'normal' },
                    { name: 'amount', value: 1 },
                    {
                        name: 'Image',
                        links: [
                            {
                                portIn: 'Image',
                                portOut: 'texture',
                                objIn: '295a068e-1111-4cfc-80b9-05a38ad919f2',
                                objOut: 'd3ba76ba-a7c5-498b-8a34-0b4bc20a797c',
                            },
                        ],
                    },
                    { name: 'removeAlphaSrc', value: !1 },
                    { name: 'Mask', value: 0 },
                    { name: 'Mask Src index', value: 1 },
                    { name: 'Mask Src', value: 'alpha channel' },
                    { name: 'Invert alpha channel', value: !1 },
                    { name: 'Aspect Ratio', value: !1 },
                    { name: 'Stretch Axis index', value: 0 },
                    { name: 'Stretch Axis', value: 'X' },
                    { name: 'Position', value: 0 },
                    { name: 'Crop', value: !1 },
                    { name: 'flip x', value: !1 },
                    { name: 'flip y', value: !1 },
                    { name: 'Transform', value: !1 },
                    { name: 'Scale X', value: 1 },
                    { name: 'Scale Y', value: 1 },
                    { name: 'Position X', value: 0 },
                    { name: 'Position Y', value: 0 },
                    { name: 'Rotation', value: 0 },
                    { name: 'Clip Repeat', value: !1 },
                ],
                portsOut: [{ name: 'trigger' }],
            },
            {
                opId: '255bd15b-cc91-4a12-9b4e-53c710cbb282',
                objName: 'Ops.Gl.Meshes.FullscreenRectangle',
                id: '637a402b-1323-4b23-9058-411f7838e7c6',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger 2',
                                objIn: '637a402b-1323-4b23-9058-411f7838e7c6',
                                objOut: 'beef7a3c-1f48-48df-94f7-fa842e2f7997',
                            },
                        ],
                    },
                    { name: 'Center in Canvas', value: !1 },
                    { name: 'Flip Y', value: !1 },
                    { name: 'Flip X', value: !1 },
                    {
                        name: 'Texture',
                        links: [
                            {
                                portIn: 'Texture',
                                portOut: 'texture_out',
                                objIn: '637a402b-1323-4b23-9058-411f7838e7c6',
                                objOut: '4e043ab2-2d2f-4f5c-89b9-889341e925db',
                            },
                        ],
                    },
                ],
                portsOut: [{ name: 'trigger', value: 0 }],
            },
            {
                opId: '3e679c17-f050-4bc8-bfe5-5b9190e7ce40',
                objName: 'Ops.Gl.TextureEffects.FXAA',
                id: '615bc9c8-6c98-4f63-87db-c470ad56e8fe',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger',
                                objIn: '615bc9c8-6c98-4f63-87db-c470ad56e8fe',
                                objOut: '295a068e-1111-4cfc-80b9-05a38ad919f2',
                            },
                        ],
                    },
                    { name: 'span index', value: 0 },
                    { name: 'span', value: '0' },
                    { name: 'reduceMin', value: 400 },
                    { name: 'reduceMul', value: 1e3 },
                    { name: 'use viewport size', value: !1 },
                    { name: 'width', value: 0 },
                    { name: 'height', value: 0 },
                ],
                portsOut: [{ name: 'trigger' }],
            },
            {
                opId: '3e679c17-f050-4bc8-bfe5-5b9190e7ce40',
                objName: 'Ops.Gl.TextureEffects.FXAA',
                id: '021f455e-802b-4b0f-8176-aaed19ae86d0',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger',
                                objIn: '021f455e-802b-4b0f-8176-aaed19ae86d0',
                                objOut: '615bc9c8-6c98-4f63-87db-c470ad56e8fe',
                            },
                        ],
                    },
                    { name: 'span index', value: 0 },
                    { name: 'span', value: '0' },
                    { name: 'reduceMin', value: 128 },
                    { name: 'reduceMul', value: 8 },
                    { name: 'use viewport size', value: !1 },
                    { name: 'width', value: 0 },
                    { name: 'height', value: 0 },
                ],
                portsOut: [{ name: 'trigger', value: 0 }],
            },
            {
                opId: '37b92ba4-cea5-42ae-bf28-a513ca28549c',
                objName: 'Ops.Gl.Meshes.Cube_v2',
                id: '99d22f4c-8fe8-4702-b565-569f50a115b5',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'Render',
                        links: [
                            {
                                portIn: 'Render',
                                portOut: 'trigger',
                                objIn: '99d22f4c-8fe8-4702-b565-569f50a115b5',
                                objOut: '830f8717-902e-4982-8ab3-1f634b28ab6c',
                            },
                        ],
                    },
                    { name: 'Render Mesh', value: !0 },
                    { name: 'Width', value: 1.5 },
                    { name: 'Length', value: 1.2 },
                    { name: 'Height', value: -0.14 },
                    { name: 'Center', value: !0 },
                    { name: 'Mapping index', value: 0 },
                    { name: 'Mapping', value: 'Side' },
                    { name: 'Bias', value: 0 },
                    { name: 'Flip X', value: !0 },
                    { name: 'Top', value: !0 },
                    { name: 'Bottom', value: !0 },
                    { name: 'Left', value: !0 },
                    { name: 'Right', value: !0 },
                    { name: 'Front', value: !0 },
                    { name: 'Back', value: !0 },
                ],
                portsOut: [{ name: 'Next', value: 0 }, { name: 'geometry' }],
            },
            {
                opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
                objName: 'Ops.Gl.Matrix.Transform',
                id: '830f8717-902e-4982-8ab3-1f634b28ab6c',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger',
                                objIn: '830f8717-902e-4982-8ab3-1f634b28ab6c',
                                objOut: '608c454f-c93a-4516-bae5-a0531f673dd6',
                            },
                        ],
                    },
                    { name: 'posX', value: '0' },
                    { name: 'posY', value: -0.612 },
                    { name: 'posZ', value: 0.66 },
                    { name: 'scale', value: 7.43 },
                    { name: 'rotX', value: 0 },
                    { name: 'rotY', value: '0' },
                    { name: 'rotZ', value: 180 },
                ],
                portsOut: [{ name: 'trigger' }],
            },
            {
                opId: 'ec55d252-3843-41b1-b731-0482dbd9e72b',
                objName: 'Ops.Gl.Shader.BasicMaterial_v3',
                id: '608c454f-c93a-4516-bae5-a0531f673dd6',
                uiAttribs: {
                    createdLocally: !0,
                    subPatch: 0,
                    selected: !1,
                    notWorkingMsg: null,
                },
                portsIn: [
                    {
                        name: 'render',
                        links: [
                            {
                                portIn: 'render',
                                portOut: 'trigger 2',
                                objIn: '608c454f-c93a-4516-bae5-a0531f673dd6',
                                objOut: 'eb5251d6-3e40-4ff0-bb81-637468d13bf0',
                            },
                        ],
                    },
                    { name: 'r', value: 0 },
                    { name: 'g', value: 0 },
                    { name: 'b', value: 0 },
                    { name: 'a', value: 1 },
                    { name: 'texture', value: 0 },
                    { name: 'colorizeTexture', value: !1 },
                    { name: 'textureOpacity', value: 0 },
                    { name: 'Alpha Mask Source index', value: 0 },
                    { name: 'Alpha Mask Source', value: 'Luminance' },
                    { name: 'Opacity TexCoords Transform', value: !1 },
                    { name: 'Discard Transparent Pixels', value: !1 },
                    { name: 'diffuseRepeatX', value: 1 },
                    { name: 'diffuseRepeatY', value: 1 },
                    { name: 'Tex Offset X', value: 0 },
                    { name: 'Tex Offset Y', value: 0 },
                    { name: 'Crop TexCoords', value: !1 },
                    { name: 'billboard', value: !1 },
                ],
                portsOut: [{ name: 'trigger' }, { name: 'shader' }],
            },
        ],
        users: [],
        userOps: [],
        tags: ['aw', '2021'],
        _id: '60001a002f5883619f531fde',
        name: 'AW 2021',
        userId: '5f91d7924537936e4db9841a',
        created: '2021-01-14T10:16:32.594Z',
        updated: '2021-01-16T21:07:21.904Z',
        log: [],
        __v: 27,
        shortId: '6app0s',
        description: 'AW, 2021,',
        namespace: 'AW, 2021,',
        published: '2021-01-14T11:42:32.222Z',
        buildInfo: {
            core: {
                timestamp: 1610523835610,
                created: '2021-01-13T07:43:55.610Z',
                git: {
                    branch: 'master',
                    commit: '23ff8761980d7d0ffbe66da8c6253e457a032a73',
                    date: null,
                },
            },
            ui: {
                timestamp: 1610553660883,
                created: '2021-01-13T16:01:00.883Z',
                git: {
                    branch: 'master',
                    commit: 'e55e23da99f900d1265b521915aca98ab2f2c3eb',
                    date: '2021-01-13T15:58:36.000Z',
                },
            },
            host: 'cables.gl',
            api: {
                timestamp: 1610523892604,
                created: '2021-01-13T07:44:52.604Z',
                git: {
                    branch: 'master',
                    commit: '22108ec65a5e5a6155480e8881487305763feb18',
                    date: null,
                },
            },
        },
        opsHash: '68d5d2d45c95e38ea25d4aee5ac3dfc53a410685',
        ui: {
            viewBox: { x: -200, y: -200, w: 400, h: 400 },
            timeLineLength: 20,
            bookmarks: [],
            subPatchViewBoxes: [],
            renderer: { w: 640, h: 359, s: 1 },
        },
        updatedByUser: 'Softbread',
        cachedUsername: 'Softbread',
        views: 22,
        cachedNumComments: 0,
        cachedNumFavs: 0,
        statsAdmin: {
            filenameScreenshots: [
                '_screenshots/screenshot.png',
                '_screenshots/screenshot.webp',
                '_screenshots/screenshot_1610624589610.png',
                '_screenshots/screenshot_1610624651936.png',
                '_screenshots/screenshot_1610626111940.png',
                '_screenshots/screenshot_1610626180136.png',
                '_screenshots/screenshot_1610626268065.png',
                '_screenshots/screenshot_1610626297880.png',
                '_screenshots/screenshot_1610626331226.png',
                '_screenshots/screenshot_1610626397239.png',
                '_screenshots/screenshot_1610626484898.png',
                '_screenshots/screenshot_1610626677148.png',
                '_screenshots/screenshot_1610626727431.png',
                '_screenshots/screenshot_1610626776173.png',
                '_screenshots/screenshot_1610626793669.png',
                '_screenshots/screenshot_1610626813640.png',
                '_screenshots/screenshot_1610626833419.png',
                '_screenshots/screenshot_1610627003755.png',
                '_screenshots/screenshot_1610627229794.png',
                '_screenshots/screenshot_1610627415597.png',
                '_screenshots/screenshot_1610627653940.png',
                '_screenshots/screenshot_1610627701289.png',
                '_screenshots/screenshot_1610627764148.png',
                '_screenshots/screenshot_1610627823531.png',
                '_screenshots/screenshot_1610627869251.png',
                '_screenshots/screenshot_1610629115252.png',
                '_screenshots/screenshot_1610630223287.png',
                '_screenshots/screenshot_1610831242328.png',
            ],
            filenameExports: ['_exports/cables_AW_20211.zip'],
            filenameAssets: ['AW_Ables_2021.glb', 'AW_Ux_Layout_Flip.png'],
            hasOldScreenshots: !1,
            hasOldExports: !1,
            sizeScreenshots: 2398.685546875,
            sizeExports: 724.123046875,
            sizeAssets: 699.59765625,
        },
        exports: 2,
    }),
    CABLES.exportedPatch ||
        (CABLES.exportedPatch = CABLES.exportedPatches['6app0s']);
var CABLES = CABLES || {};
CABLES.OPS = CABLES.OPS || {};
var Ops = Ops || {};
(Ops.Gl = Ops.Gl || {}),
    (Ops.Gl.GLTF = Ops.Gl.GLTF || {}),
    (Ops.Gl.Phong = Ops.Gl.Phong || {}),
    (Ops.Gl.Matrix = Ops.Gl.Matrix || {}),
    (Ops.Gl.Meshes = Ops.Gl.Meshes || {}),
    (Ops.Gl.Shader = Ops.Gl.Shader || {}),
    (Ops.Gl.TextureEffects = Ops.Gl.TextureEffects || {}),
    (Ops.Gl.MainLoop = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inValue('FPS Limit', 0),
            n = e.outTrigger('trigger'),
            a = e.outValue('width'),
            i = e.outValue('height'),
            r = e.inValueBool('Reduce FPS not focussed', !0),
            o = e.inValueBool('Reduce FPS loading'),
            s = e.inValueBool('Clear', !0),
            l = e.inValueBool('ClearAlpha', !0),
            c = e.inValueBool('Fullscreen Button', !1),
            u = e.inValueBool('Active', !0),
            h = e.inValueBool('Hires Displays', !1);
        (e.onAnimFrame = E),
            (h.onChange = function() {
                h.get()
                    ? (e.patch.cgl.pixelDensity = window.devicePixelRatio)
                    : (e.patch.cgl.pixelDensity = 1),
                    e.patch.cgl.updateSize(),
                    CABLES.UI && gui.setLayout();
            }),
            (u.onChange = function() {
                e.patch.removeOnAnimFrame(e),
                    u.get()
                        ? (e.setUiAttrib({ extendTitle: '' }),
                          (e.onAnimFrame = E),
                          e.patch.addOnAnimFrame(e),
                          e.log('adding again!'))
                        : e.setUiAttrib({ extendTitle: 'Inactive' });
            });
        const g = e.patch.cgl;
        let d = 0,
            f = 0;
        e.patch.cgl || e.uiAttr({ error: 'No webgl cgl context' });
        const m = vec3.create();
        vec3.set(m, 0, 0, 0);
        const p = vec3.create();
        vec3.set(p, 0, 0, -2), (c.onChange = b), setTimeout(b, 100);
        let _ = null,
            v = !0,
            x = !0;
        function b() {
            function t() {
                _ && (_.style.display = 'block');
            }
            if (
                (e.patch.cgl.canvas.addEventListener('mouseleave', function() {
                    _ && (_.style.display = 'none');
                }),
                e.patch.cgl.canvas.addEventListener('mouseenter', t),
                c.get())
            ) {
                if (!_) {
                    _ = document.createElement('div');
                    const n = e.patch.cgl.canvas.parentElement;
                    n && n.appendChild(_),
                        _.addEventListener('mouseenter', t),
                        _.addEventListener('click', function(e) {
                            CABLES.UI && !e.shiftKey
                                ? gui.cycleRendererSize()
                                : g.fullScreen();
                        });
                }
                (_.style.padding = '10px'),
                    (_.style.position = 'absolute'),
                    (_.style.right = '5px'),
                    (_.style.top = '5px'),
                    (_.style.width = '20px'),
                    (_.style.height = '20px'),
                    (_.style.cursor = 'pointer'),
                    (_.style['border-radius'] = '40px'),
                    (_.style.background = '#444'),
                    (_.style['z-index'] = '9999'),
                    (_.style.display = 'none'),
                    (_.innerHTML =
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>');
            } else _ && ((_.style.display = 'none'), _.remove(), (_ = null));
        }
        function E(c) {
            if (!u.get()) return;
            if (
                g.aborted ||
                0 === g.canvas.clientWidth ||
                0 === g.canvas.clientHeight
            )
                return;
            const h = performance.now();
            (e.patch.config.fpsLimit = (function() {
                if (o.get() && e.patch.loading.getProgress() < 1) return 5;
                if (r.get()) {
                    if (!x) return 10;
                    if (!v) return 30;
                }
                return t.get();
            })()),
                -1 != g.canvasWidth
                    ? ((g.canvasWidth == a.get() &&
                          g.canvasHeight == i.get()) ||
                          (a.set(g.canvasWidth), i.set(g.canvasHeight)),
                      CABLES.now() - f > 1e3 &&
                          ((CGL.fpsReport = CGL.fpsReport || []),
                          e.patch.loading.getProgress() >= 1 &&
                              0 !== f &&
                              CGL.fpsReport.push(d),
                          (d = 0),
                          (f = CABLES.now())),
                      (CGL.MESH.lastShader = null),
                      (CGL.MESH.lastMesh = null),
                      g.renderStart(g, m, p),
                      s.get() &&
                          (g.gl.clearColor(0, 0, 0, 1),
                          g.gl.clear(
                              g.gl.COLOR_BUFFER_BIT | g.gl.DEPTH_BUFFER_BIT
                          )),
                      n.trigger(),
                      CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(),
                      CGL.Texture.previewTexture &&
                          (CGL.Texture.texturePreviewer ||
                              (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(
                                  g
                              )),
                          CGL.Texture.texturePreviewer.render(
                              CGL.Texture.previewTexture
                          )),
                      g.renderEnd(g),
                      l.get() &&
                          (g.gl.clearColor(1, 1, 1, 1),
                          g.gl.colorMask(!1, !1, !1, !0),
                          g.gl.clear(g.gl.COLOR_BUFFER_BIT),
                          g.gl.colorMask(!0, !0, !0, !0)),
                      g.frameStore.phong || (g.frameStore.phong = {}),
                      d++,
                      (CGL.profileData.profileMainloopMs =
                          performance.now() - h))
                    : g.setCanvas(e.patch.config.glCanvasId);
        }
        window.addEventListener('blur', () => {
            v = !1;
        }),
            window.addEventListener('focus', () => {
                v = !0;
            }),
            document.addEventListener('visibilitychange', () => {
                x = !document.hidden;
            }),
            (e.onDelete = function() {
                g.gl.clearColor(0, 0, 0, 0),
                    g.gl.clear(g.gl.COLOR_BUFFER_BIT | g.gl.DEPTH_BUFFER_BIT);
            });
    }),
    (Ops.Gl.MainLoop.prototype = new CABLES.Op()),
    (CABLES.OPS['b0472a1d-db16-4ba6-8787-f300fbdc77bb'] = {
        f: Ops.Gl.MainLoop,
        objName: 'Ops.Gl.MainLoop',
    }),
    (Ops.Gl.Matrix.OrbitControls = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inTrigger('render'),
            n = e.inValueFloat('min distance'),
            a = e.inValueFloat('max distance'),
            i = e.inValue('min rot y', 0),
            r = e.inValue('max rot y', 0),
            o = e.inValue('initial radius', 0),
            s = e.inValueSlider('initial axis y'),
            l = e.inValueSlider('initial axis x'),
            c = e.inValueFloat('mul'),
            u = e.inValueSlider('Smoothness', 1),
            h = e.inValue('Speed X', 1),
            g = e.inValue('Speed Y', 1),
            d = e.inValueBool('Active', !0),
            f = e.inValueBool('Allow Panning', !0),
            m = e.inValueBool('Allow Zooming', !0),
            p = e.inValueBool('Allow Rotation', !0),
            _ = e.inValueBool('restricted', !0),
            v = e.inValueBool('Pointerlock', !1),
            x = e.outTrigger('trigger'),
            b = e.outValue('radius'),
            E = e.outValue('Rot X'),
            T = e.outValue('Rot Y'),
            A = e.inTriggerButton('Reset');
        e.setPortGroup('Initial Values', [s, l, o]),
            e.setPortGroup('Interaction', [c, u, h, g]),
            e.setPortGroup('Boundaries', [i, r, n, a]),
            c.set(1),
            n.set(0.05),
            a.set(99999),
            (A.onTriggered = W);
        const C = e.patch.cgl;
        let S = vec3.create();
        const M = vec3.create(),
            L = vec3.create(),
            P = mat4.create(),
            O = (mat4.create(), vec3.create());
        vec3.create();
        s.set(0.5);
        let R = !1,
            I = 5;
        b.set(I);
        let y = 0,
            F = 0,
            w = 0,
            U = 0;
        vec3.set(L, 0, 0, 0), vec3.set(M, 0, 1, 0);
        const N = vec3.create(),
            G = vec3.create(),
            B = vec3.create(),
            D = vec3.create();
        let V = 0,
            X = 0,
            j = 1,
            k = null;
        Z(), (e.onDelete = oe);
        let H = !1;
        v.onChange = function() {
            (H = v.get()), e.log('doLockPointer', H);
        };
        const z = Math.PI,
            Y = 2 * Math.PI;
        function W() {
            let e = 0;
            V % Y < -z
                ? ((e = -Y), (V %= -Y))
                : V % Y > z
                ? ((e = Y), (V %= Y))
                : (V %= Y),
                (X %= Math.PI),
                vec3.set(O, 0, 0, 0),
                vec3.set(L, 0, 0, 0),
                vec3.set(M, 0, 1, 0),
                (w = l.get() * Math.PI * 2 + e),
                (U = s.get() - 0.5),
                (I = o.get()),
                (S = $(U));
        }
        function Z() {
            j = 10 * u.get() + 1;
        }
        u.onChange = Z;
        let q = !0;
        function K(e, t) {
            return q ? t : e + (t - e) / j;
        }
        let Q = 0;
        function $(e) {
            const t = c.get();
            I < n.get() * t && (I = n.get() * t),
                I > a.get() * t && (I = a.get() * t),
                b.set(I * t);
            let i = 0;
            const r = vec3.create();
            return (
                (i = ((360 * e) / 2) * CGL.DEG2RAD),
                vec3.set(r, Math.cos(i) * I * t, Math.sin(i) * I * t, 0),
                r
            );
        }
        function J(e) {
            if (!R) return;
            const t = e.clientX,
                n = e.clientY;
            let a = t - y,
                i = n - F;
            H && ((a = e.movementX * c.get()), (i = e.movementY * c.get())),
                (a *= h.get()),
                (i *= g.get()),
                2 == e.buttons && f.get()
                    ? ((O[2] += 0.01 * a * c.get()),
                      (O[1] += 0.01 * i * c.get()))
                    : 4 == e.buttons && m.get()
                    ? ((I += 0.05 * i), (S = $(U)))
                    : p.get() &&
                      ((w += 0.003 * a),
                      (U += 0.002 * i),
                      _.get() &&
                          (U > 0.5 && (U = 0.5), U < -0.5 && (U = -0.5))),
                (y = t),
                (F = n);
        }
        function ee(t) {
            (y = t.clientX), (F = t.clientY), (R = !0);
            try {
                k.setPointerCapture(t.pointerId);
            } catch (e) {}
            if (H) {
                const t = e.patch.cgl.canvas;
                (t.requestPointerLock =
                    t.requestPointerLock ||
                    t.mozRequestPointerLock ||
                    t.webkitRequestPointerLock),
                    t.requestPointerLock
                        ? t.requestPointerLock()
                        : e.warn('no requestPointerLock found'),
                    document.addEventListener('pointerlockchange', ne, !1),
                    document.addEventListener('mozpointerlockchange', ne, !1),
                    document.addEventListener(
                        'webkitpointerlockchange',
                        ne,
                        !1
                    );
            }
        }
        function te(e) {
            R = !1;
            try {
                k.releasePointerCapture(e.pointerId);
            } catch (e) {}
            H &&
                (document.removeEventListener('pointerlockchange', ne, !1),
                document.removeEventListener('mozpointerlockchange', ne, !1),
                document.removeEventListener('webkitpointerlockchange', ne, !1),
                document.exitPointerLock && document.exitPointerLock(),
                document.removeEventListener('mousemove', v, !1));
        }
        function ne() {
            const t = e.patch.cgl.canvas;
            (document.pointerLockElement !== t &&
                document.mozPointerLockElement !== t &&
                document.webkitPointerLockElement !== t) ||
                document.addEventListener('mousemove', J, !1);
        }
        function ae(e) {}
        (t.onTriggered = function() {
            C.pushViewMatrix(), (V = K(V, w));
            let e = 180 * ((X = K(X, U)) + 0.5);
            0 !== i.get() && e < i.get()
                ? ((e = i.get()), (X = Q))
                : 0 !== r.get() && e > r.get()
                ? ((e = r.get()), (X = Q))
                : (Q = X);
            const t = V * CGL.RAD2DEG;
            T.set(e),
                E.set(t),
                (function(e, t) {
                    const i = c.get();
                    I < n.get() * i && (I = n.get() * i);
                    I > a.get() * i && (I = a.get() * i);
                    b.set(I * i);
                    let r = 0;
                    (r = ((360 * t) / 2) * CGL.DEG2RAD),
                        vec3.set(
                            e,
                            Math.cos(r) * I * i,
                            Math.sin(r) * I * i,
                            0
                        );
                })(S, X),
                vec3.add(N, S, O),
                vec3.add(B, L, O),
                (G[0] = K(G[0], N[0])),
                (G[1] = K(G[1], N[1])),
                (G[2] = K(G[2], N[2])),
                (D[0] = K(D[0], B[0])),
                (D[1] = K(D[1], B[1])),
                (D[2] = K(D[2], B[2]));
            vec3.create();
            mat4.lookAt(P, G, D, M),
                mat4.rotate(P, P, V, M),
                mat4.multiply(C.vMatrix, C.vMatrix, P),
                x.trigger(),
                C.popViewMatrix(),
                (q = !1);
        }),
            (o.onChange = function() {
                (I = o.get()), W();
            }),
            (l.onChange = function() {
                V = w = l.get() * Math.PI * 2;
            }),
            (s.onChange = function() {
                (X = U = s.get() - 0.5), (S = $(U));
            });
        const ie = function(e) {
            if (m.get()) {
                const t = 0.06 * CGL.getWheelSpeed(e);
                (I += 1.2 * parseFloat(t)), (S = $(U));
            }
        };
        function re() {
            k.addEventListener('pointermove', J),
                k.addEventListener('pointerdown', ee),
                k.addEventListener('pointerup', te),
                k.addEventListener('pointerleave', te),
                k.addEventListener('pointerenter', ae),
                k.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                }),
                k.addEventListener('wheel', ie, { passive: !0 });
        }
        function oe() {
            k &&
                (k.removeEventListener('pointermove', J),
                k.removeEventListener('pointerdown', ee),
                k.removeEventListener('pointerup', te),
                k.removeEventListener('pointerleave', te),
                k.removeEventListener('pointerenter', te),
                k.removeEventListener('wheel', ie));
        }
        var se;
        (d.onChange = function() {
            d.get() ? re() : oe();
        }),
            (S = $(0)),
            (se = C.canvas),
            oe(),
            (k = se),
            re(),
            re(),
            l.set(0.25),
            o.set(0.05);
    }),
    (Ops.Gl.Matrix.OrbitControls.prototype = new CABLES.Op()),
    (CABLES.OPS['eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1'] = {
        f: Ops.Gl.Matrix.OrbitControls,
        objName: 'Ops.Gl.Matrix.OrbitControls',
    }),
    (Ops.Gl.GLTF.GltfScene_v2 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = class {
                constructor(e, t) {
                    (this.name = t.name || 'unknown'),
                        (this.config = t),
                        (this.node = e.getNode(this.name)),
                        this.node &&
                            ((this.pos = vec3.create()),
                            (this.quat = quat.create()),
                            (this.quatOr = quat.create()),
                            (this.vCenter = vec3.create()),
                            (this.vUp = vec3.create()),
                            (this.transMatrix = mat4.create()),
                            vec3.set(
                                this.pos,
                                this.node._node.translation[0],
                                this.node._node.translation[1],
                                this.node._node.translation[2]
                            ),
                            quat.set(
                                this.quat,
                                this.node._node.rotation[0],
                                this.node._node.rotation[1],
                                this.node._node.rotation[2],
                                this.node._node.rotation[3]
                            ));
                }
                updateAnim(e) {
                    this.node._animTrans &&
                        (vec3.set(
                            this.pos,
                            this.node._animTrans[0].getValue(e),
                            this.node._animTrans[1].getValue(e),
                            this.node._animTrans[2].getValue(e)
                        ),
                        quat.set(
                            this.quat,
                            this.node._animRot[0].getValue(e),
                            this.node._animRot[1].getValue(e),
                            this.node._animRot[2].getValue(e),
                            this.node._animRot[3].getValue(e)
                        ));
                }
                start(e) {
                    if (z.frameStore.shadowPass) return;
                    this.updateAnim(e);
                    const t = z.getViewPort()[2] / z.getViewPort()[3];
                    z.pushPMatrix(),
                        mat4.perspective(
                            z.pMatrix,
                            this.config.perspective.yfov,
                            t,
                            this.config.perspective.znear,
                            this.config.perspective.zfar
                        ),
                        z.pushViewMatrix(),
                        vec3.set(this.vUp, 0, 1, 0),
                        vec3.set(this.vCenter, 0, -1, 0),
                        vec3.transformQuat(
                            this.vCenter,
                            this.vCenter,
                            this.quat
                        ),
                        vec3.normalize(this.vCenter, this.vCenter),
                        vec3.add(this.vCenter, this.vCenter, this.pos),
                        mat4.lookAt(
                            z.vMatrix,
                            this.pos,
                            this.vCenter,
                            this.vUp
                        );
                }
                end() {
                    z.frameStore.shadowPass ||
                        (z.popPMatrix(), z.popViewMatrix());
                }
            },
            n = 8,
            a = class {
                constructor() {
                    (this.json = {}),
                        (this.accBuffers = []),
                        (this.meshes = []),
                        (this.nodes = []),
                        (this.shaders = []),
                        (this.timing = []),
                        (this.cams = []),
                        (this.startTime = performance.now()),
                        (this.bounds = new CGL.BoundingBox()),
                        (this.loaded = Date.now());
                }
                getNode(e) {
                    for (let t = 0; t < this.nodes.length; t++)
                        if (this.nodes[t].name == e) return this.nodes[t];
                }
                unHideAll() {
                    for (let e = 0; e < this.nodes.length; e++)
                        this.nodes[e].unHide();
                }
            };
        function i(e) {
            if (window.TextDecoder) return new TextDecoder('utf-8').decode(e);
            let t, n, a, i, r, o;
            for (t = '', a = e.length, n = 0; n < a; )
                switch ((i = e[n++]) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t += String.fromCharCode(i);
                        break;
                    case 12:
                    case 13:
                        (r = e[n++]),
                            (t += String.fromCharCode(
                                ((31 & i) << 6) | (63 & r)
                            ));
                        break;
                    case 14:
                        (r = e[n++]),
                            (o = e[n++]),
                            (t += String.fromCharCode(
                                ((15 & i) << 12) |
                                    ((63 & r) << 6) |
                                    ((63 & o) << 0)
                            ));
                }
            return t;
        }
        function r(e, t, n, a) {
            const r = {};
            if (
                ((r.size = e.getUint32(a + 0, H)),
                (r.type = i(t.subarray(a + 4, a + 4 + 4))),
                'BIN\0' == r.type)
            )
                r.dataView = new DataView(n, a + 8, r.size);
            else if ('JSON' == r.type) {
                const e = i(t.subarray(a + 8, a + 8 + r.size));
                try {
                    const t = JSON.parse(e);
                    (r.data = t), U.set(t.asset.generator);
                } catch (e) {}
            }
            return r;
        }
        function o(e) {
            let o = 0,
                s = 0;
            const u = new a();
            if (!e) return;
            const h = new Uint8Array(e);
            let g = 0;
            const d = i(h.subarray(g, 4));
            if (((g += 4), 'glTF' != d)) return;
            u.timing.push(
                'Start parsing',
                Math.round(performance.now() - u.startTime)
            );
            const f = new DataView(e),
                m = f.getUint32(g, H);
            g += 4;
            f.getUint32(g, H);
            (g += 4), N.set(m);
            const p = [];
            (u.chunks = p),
                p.push(r(f, h, e, g)),
                (g += p[0].size + n),
                (u.json = p[0].data),
                D.set(u.json),
                p.push(r(f, h, e, g));
            const _ = p[0].data.bufferViews,
                v = p[0].data.accessors;
            if (
                (u.timing.push(
                    'Parse buffers',
                    Math.round(performance.now() - u.startTime)
                ),
                _)
            )
                for (s = 0; s < v.length; s++) {
                    const e = v[s],
                        t = _[e.bufferView];
                    let n = 0;
                    'SCALAR' == e.type
                        ? (n = 1)
                        : 'VEC2' == e.type
                        ? (n = 2)
                        : 'VEC3' == e.type
                        ? (n = 3)
                        : 'VEC4' == e.type
                        ? (n = 4)
                        : console.error('unknown accessor type', e.type);
                    const a = e.count * n;
                    let i = (t.byteOffset || 0) + (e.byteOffset || 0),
                        r = t.byteStride || 0,
                        l = null;
                    if (p[1].dataView)
                        if (5126 == e.componentType || 5125 == e.componentType)
                            for (
                                r = r || 4, l = new Float32Array(a), o = 0;
                                o < a;
                                o++
                            )
                                (l[o] = p[1].dataView.getFloat32(i, H)),
                                    4 != r &&
                                        (o + 1) % n == 0 &&
                                        (i += r - 4 * n),
                                    (i += 4);
                        else if (5123 == e.componentType)
                            for (
                                r = r || 2, l = new Uint16Array(a), o = 0;
                                o < a;
                                o++
                            )
                                (l[o] = p[1].dataView.getUint16(i, H)),
                                    2 != r &&
                                        (o + 1) % n == 0 &&
                                        (i += r - 2 * n),
                                    (i += 2);
                        else
                            console.error(
                                'unknown component type',
                                e.componentType
                            );
                    u.accBuffers.push(l);
                }
            if (
                (u.timing.push(
                    'Parse mesh groups',
                    Math.round(performance.now() - u.startTime)
                ),
                (u.json.meshes = u.json.meshes || []),
                u.json.meshes)
            )
                for (s = 0; s < u.json.meshes.length; s++) {
                    const e = new l(u, u.json.meshes[s]);
                    u.meshes.push(e);
                }
            for (
                u.timing.push(
                    'Parse nodes',
                    Math.round(performance.now() - u.startTime)
                ),
                    s = 0;
                s < u.json.nodes.length;
                s++
            ) {
                const e = new c(u.json.nodes[s], u);
                u.nodes.push(e);
            }
            for (s = 0; s < u.nodes.length; s++) {
                const e = u.nodes[s];
                e.isChild || e.calcBounds(u, null, u.bounds);
            }
            return (
                (Q = !0),
                u.timing.push(
                    'load anims',
                    Math.round(performance.now() - u.startTime)
                ),
                u.json.animations &&
                    (function(e) {
                        let t = 0;
                        for (let n = 0; n < e.json.animations.length; n++) {
                            const a = e.json.animations[n];
                            for (let n = 0; n < a.channels.length; n++) {
                                const i = a.channels[n],
                                    r = e.nodes[i.target.node],
                                    o = a.samplers[i.sampler],
                                    s =
                                        (e.json.accessors[o.input],
                                        e.accBuffers[o.input]),
                                    l = e.json.accessors[o.output],
                                    c = e.accBuffers[o.output];
                                let u = 1;
                                'VEC2' == l.type
                                    ? (u = 2)
                                    : 'VEC3' == l.type
                                    ? (u = 3)
                                    : 'VEC4' == l.type && (u = 4);
                                const h = [];
                                for (t = 0; t < u; t++)
                                    h.push(new CABLES.TL.Anim());
                                if ('LINEAR' == o.interpolation);
                                else if ('STEP' == o.interpolation)
                                    for (t = 0; t < u; t++)
                                        h[t].defaultEasing =
                                            CONSTANTS.ANIM.EASING_ABSOLUTE;
                                else
                                    console.warn(
                                        '[gltf] unknown interpolation',
                                        o.interpolation
                                    );
                                for (let e = 0; e < s.length; e++)
                                    for (
                                        q = Math.max(s[e], q), t = 0;
                                        t < u;
                                        t++
                                    )
                                        h[t].setValue(s[e], c[e * u + t]);
                                r.setAnim(i.target.path, h);
                            }
                        }
                    })(u),
                u.timing.push(
                    'load cameras',
                    Math.round(performance.now() - u.startTime)
                ),
                u.json.cameras &&
                    (function(e) {
                        if (e && e.json.cameras)
                            for (let n = 0; n < e.json.cameras.length; n++)
                                e.cams.push(new t(e, e.json.cameras[n]));
                    })(u),
                u.timing.push(
                    'finished',
                    Math.round(performance.now() - u.startTime)
                ),
                u
            );
        }
        var s = class {
                constructor(e, t, n) {
                    if (
                        ((this.test = 0),
                        (this.name = e),
                        (this.material = t.material),
                        (this.mesh = null),
                        (this.geom = new CGL.Geometry('gltf_' + this.name)),
                        (this.geom.verticesIndices = []),
                        t.hasOwnProperty('indices') &&
                            (this.geom.verticesIndices =
                                n.accBuffers[t.indices]),
                        this.fillGeomAttribs(n, this.geom, t.attributes),
                        t.targets)
                    )
                        for (var a = 0; a < t.targets.length; a++) {
                            var i = new CGL.Geometry('gltf_' + this.name);
                            t.hasOwnProperty('indices') &&
                                (i.verticesIndices = n.accBuffers[t.indices]),
                                this.fillGeomAttribs(n, i, t.targets[a]),
                                this.geom.morphTargets.push(i);
                        }
                    (this.morphGeom = this.geom.copy()),
                        (this.bounds = this.geom.getBounds());
                }
                fillGeomAttribs(e, t, n) {
                    if (
                        (n.hasOwnProperty('POSITION') &&
                            (t.vertices = e.accBuffers[n.POSITION]),
                        n.hasOwnProperty('NORMAL') &&
                            (t.vertexNormals = e.accBuffers[n.NORMAL]),
                        n.hasOwnProperty('TEXCOORD_0') &&
                            (t.texCoords = e.accBuffers[n.TEXCOORD_0]),
                        n.hasOwnProperty('TANGENT') &&
                            (t.tangents = e.accBuffers[n.TANGENT]),
                        n.hasOwnProperty('COLOR_0') &&
                            (t.vertexColors = e.accBuffers[n.COLOR_0]),
                        'X-ZY' == P.get())
                    )
                        for (let e = 0; e < t.vertexNormals.length; e += 3) {
                            let n = t.vertexNormals[e + 2];
                            (t.vertexNormals[e + 2] = t.vertexNormals[e + 1]),
                                (t.vertexNormals[e + 1] = -n);
                        }
                    if ('XZ-Y' == O.get())
                        for (let e = 0; e < t.vertices.length; e += 3) {
                            let n = t.vertices[e + 2];
                            (t.vertices[e + 2] = -t.vertices[e + 1]),
                                (t.vertices[e + 1] = n);
                        }
                    (t.vertexNormals.length && !R.get()) ||
                        t.calculateNormals(),
                        t.calcTangentsBitangents();
                }
                render(e, t) {
                    if (this.geom)
                        if (this.mesh) {
                            if (this.geom.morphTargets.length) {
                                (this.test = 11.7 * K),
                                    this.test >=
                                        this.geom.morphTargets.length - 1 &&
                                        (this.test = 0);
                                const e = this.geom.morphTargets[
                                        Math.floor(this.test)
                                    ],
                                    t = this.geom.morphTargets[
                                        Math.floor(this.test + 1)
                                    ];
                                if (e && e.vertices) {
                                    const a = this.test % 1;
                                    for (
                                        var n = 0;
                                        n < this.morphGeom.vertices.length;
                                        n++
                                    )
                                        this.morphGeom.vertices[n] =
                                            this.geom.vertices[n] +
                                            (1 - a) * e.vertices[n] +
                                            a * t.vertices[n];
                                    this.mesh.updateVertices(this.morphGeom);
                                }
                            }
                            const a =
                                !t &&
                                -1 != this.material &&
                                Z.shaders[this.material];
                            a && e.pushShader(Z.shaders[this.material]),
                                this.mesh.render(e.getShader(), t),
                                a && e.popShader();
                        } else this.mesh = new CGL.Mesh(e, this.geom);
                }
            },
            l = class {
                constructor(e, t) {
                    (this.bounds = new CGL.BoundingBox()),
                        (this.meshes = []),
                        (this.name = t.name);
                    const n = t.primitives;
                    for (var a = 0; a < n.length; a++) {
                        var i = new s(this.name, n[a], e);
                        this.meshes.push(i), this.bounds.apply(i.bounds);
                    }
                }
                render(e, t) {
                    for (var n = 0; n < this.meshes.length; n++)
                        this.meshes[n].render(e, t);
                }
            };
        const c = class {
            constructor(e, t) {
                (this.isChild = e.isChild || !1),
                    (this.name = e.name),
                    (this.hidden = !1),
                    (this.mat = mat4.create()),
                    (this._animMat = mat4.create()),
                    (this._tempMat = mat4.create()),
                    (this._tempQuat = quat.create()),
                    (this._tempRotmat = mat4.create()),
                    (this.mesh = null),
                    (this.children = []),
                    (this._node = e),
                    (this._gltf = t),
                    (this.absMat = mat4.create()),
                    this.updateMatrix();
            }
            updateMatrix() {
                if (
                    (mat4.identity(this.mat),
                    this._node.translation &&
                        mat4.translate(
                            this.mat,
                            this.mat,
                            this._node.translation
                        ),
                    this._node.rotation)
                ) {
                    const e = mat4.create();
                    (this._rot = this._node.rotation),
                        mat4.fromQuat(e, this._node.rotation),
                        mat4.mul(this.mat, this.mat, e);
                }
                if (
                    (this._node.scale &&
                        ((this._scale = this._node.scale),
                        mat4.scale(this.mat, this.mat, this._scale)),
                    this._node.hasOwnProperty('mesh') &&
                        (this.mesh = this._gltf.meshes[this._node.mesh]),
                    this._node.children)
                )
                    for (let e = 0; e < this._node.children.length; e++)
                        (this._gltf.json.nodes[e].isChild = !0),
                            this._gltf.nodes[this._node.children[e]] &&
                                (this._gltf.nodes[
                                    this._node.children[e]
                                ].isChild = !0),
                            this.children.push(this._node.children[e]);
            }
            unHide() {
                this.hidden = !1;
                for (let e = 0; e < this.children.length; e++)
                    this.children[e].unHide && this.children[e].unHide();
            }
            calcBounds(e, t, n) {
                const a = mat4.create();
                if (
                    (t && mat4.copy(a, t),
                    this.mat && mat4.mul(a, a, this.mat),
                    this.mesh)
                ) {
                    const e = this.mesh.bounds.copy();
                    e.mulMat4(a),
                        n.apply(e),
                        W.push(e._min[0], e._min[1], e._min[2]),
                        W.push(e._max[0], e._max[1], e._max[2]);
                }
                for (let t = 0; t < this.children.length; t++)
                    e.nodes[this.children[t]] &&
                        e.nodes[this.children[t]].calcBounds &&
                        n.apply(e.nodes[this.children[t]].calcBounds(e, a, n));
                return n.changed ? n : null;
            }
            setAnim(e, t) {
                'translation' == e
                    ? (this._animTrans = t)
                    : 'rotation' == e
                    ? (this._animRot = t)
                    : 'scale' == e
                    ? (this._animScale = t)
                    : console.warn('unknown anim path', e, t);
            }
            modelMatAbs() {
                return this.absMat;
            }
            transform(e, t) {
                if ((t || (t = K), this._animTrans)) {
                    mat4.identity(this._animMat);
                    const t = !0;
                    t && this._animTrans
                        ? mat4.translate(this._animMat, this._animMat, [
                              this._animTrans[0].getValue(K),
                              this._animTrans[1].getValue(K),
                              this._animTrans[2].getValue(K),
                          ])
                        : this.translation &&
                          mat4.translate(
                              this._animMat,
                              this._animMat,
                              this.translation
                          ),
                        t && this._animRot
                            ? (CABLES.TL.Anim.slerpQuaternion(
                                  K,
                                  this._tempQuat,
                                  this._animRot[0],
                                  this._animRot[1],
                                  this._animRot[2],
                                  this._animRot[3]
                              ),
                              mat4.fromQuat(this._tempMat, this._tempQuat),
                              mat4.mul(
                                  this._animMat,
                                  this._animMat,
                                  this._tempMat
                              ))
                            : this._rot &&
                              (mat4.fromQuat(this._tempRotmat, this._rot),
                              mat4.mul(
                                  this._animMat,
                                  this._animMat,
                                  this._tempRotmat
                              )),
                        t && this._animScale
                            ? mat4.scale(this._animMat, this._animMat, [
                                  this._animScale[0].getValue(K),
                                  this._animScale[1].getValue(K),
                                  this._animScale[2].getValue(K),
                              ])
                            : this._scale &&
                              mat4.scale(
                                  this._animMat,
                                  this._animMat,
                                  this._scale
                              ),
                        mat4.mul(e.mMatrix, e.mMatrix, this._animMat);
                } else mat4.mul(e.mMatrix, e.mMatrix, this.mat);
                mat4.copy(this.absMat, e.mMatrix);
            }
            render(e, t, n, a, i, r, o) {
                if (
                    (t || e.pushModelMatrix(),
                    t || this.transform(e, o || K),
                    (this.hidden && !r) ||
                        (this.mesh && !n && this.mesh.render(e, a)),
                    !i)
                )
                    for (let s = 0; s < this.children.length; s++)
                        Z.nodes[this.children[s]] &&
                            Z.nodes[this.children[s]].render(
                                e,
                                t,
                                n,
                                a,
                                i,
                                r,
                                o
                            );
                t || e.popModelMatrix();
            }
        };
        var u = null;
        function h() {
            u && gui.mainTabs.closeTab(u.id);
        }
        function g(t, n, a) {
            if (Z) {
                t += '<tr class="row">';
                var i = 0,
                    r = '';
                for (i = 0; i < a; i++) {
                    var o = 'identBg';
                    0 == i && (o = 'identBgLevel0'),
                        (r +=
                            '<td class="ident  ' +
                            o +
                            '" ><div style=""></div></td>');
                }
                CABLES.uuid();
                if (
                    ((t += r),
                    (t += '<td colspan="' + (20 - a) + '">'),
                    n.mesh && n.mesh.meshes.length
                        ? (t += '<span class="icon icon-cube"></span>&nbsp;')
                        : (t +=
                              '<span class="icon icon-circle"></span> &nbsp;'),
                    (t += n.name),
                    (t += '</td>'),
                    (t += '<td>'),
                    (t += '</td>'),
                    n.mesh)
                ) {
                    for (t += '<td>', i = 0; i < n.mesh.meshes.length; i++)
                        t += n.mesh.meshes[i].name;
                    for (
                        t += '</td>', t += '<td>', i = 0;
                        i < n.mesh.meshes.length;
                        i++
                    )
                        n.mesh.meshes[i].material &&
                            (t +=
                                Z.json.materials[n.mesh.meshes[i].material]
                                    .name);
                    t += '</td>';
                } else t += '<td>-</td><td>-</td>';
                (t += '<td>'),
                    n._animRot || n._animScale || n._animTrans
                        ? (t += 'Yes')
                        : (t += '-'),
                    (t += '</td>'),
                    (t += '<td>');
                var s = '';
                if (
                    (n.hidden && (s = 'node-hidden'),
                    (t += 'Expose: '),
                    (t +=
                        '<a onclick="gui.corePatch().getOpById(\'' +
                        e.id +
                        "').exposeNode('" +
                        n.name +
                        '\',true)" class="treebutton">Hierarchy</a>'),
                    (t +=
                        ' <a onclick="gui.corePatch().getOpById(\'' +
                        e.id +
                        "').exposeNode('" +
                        n.name +
                        '\')" class="treebutton">Node</a>'),
                    (t += '&nbsp;'),
                    (t +=
                        '<span class="icon iconhover icon-eye ' +
                        s +
                        '" onclick="gui.corePatch().getOpById(\'' +
                        e.id +
                        "').toggleNodeVisibility('" +
                        n.name +
                        "');this.classList.toggle('node-hidden');\"></span>"),
                    (t += '</td>'),
                    (t += '</tr>'),
                    n.children)
                )
                    for (i = 0; i < n.children.length; i++)
                        t = g(t, Z.nodes[n.children[i]], a + 1);
                return t;
            }
        }
        function d(t, n) {
            var a = '<tr>';
            if (
                ((a += ' <td>' + n + '</td>'),
                (a += ' <td>' + t.name + '</td>'),
                (a += ' <td>'),
                t.pbrMetallicRoughness &&
                    t.pbrMetallicRoughness.baseColorFactor)
            ) {
                var i = '';
                (i +=
                    '' +
                    Math.round(
                        255 * t.pbrMetallicRoughness.baseColorFactor[0]
                    )),
                    (i +=
                        ',' +
                        Math.round(
                            255 * t.pbrMetallicRoughness.baseColorFactor[1]
                        )),
                    (a +=
                        '<div style="width:15px;height:15px;;background-color:rgb(' +
                        (i +=
                            ',' +
                            Math.round(
                                255 * t.pbrMetallicRoughness.baseColorFactor[2]
                            )) +
                        ')">&nbsp;</a>');
            }
            return (
                (a +=
                    ' <td style="">' +
                    (Z.shaders[n]
                        ? '-'
                        : '<a onclick="gui.corePatch().getOpById(\'' +
                          e.id +
                          "').assignMaterial('" +
                          t.name +
                          '\')" class="treebutton">Assign</a>') +
                    '<td>'),
                (a += '<td>'),
                (a += '</tr>')
            );
        }
        function f() {
            if (!Z) return;
            console.log(Z);
            const t = {};
            var n = '<div style="overflow:scroll;width:100%;height:100%">';
            if (
                ((n += 'generator:' + Z.json.asset.generator),
                Z.json.materials && 0 != Z.json.materials.length)
            ) {
                (n += '<h3>Materials (' + Z.json.materials.length + ')</h3>'),
                    (n += '<table class="table treetable">'),
                    (n += '<tr>'),
                    (n += ' <th>Index</th>'),
                    (n += ' <th>Name</th>'),
                    (n += ' <th>Color</th>'),
                    (n += ' <th>Function</th>'),
                    (n += ' <th></th>'),
                    (n += '</tr>');
                for (var a = 0; a < Z.json.materials.length; a++)
                    n += d(Z.json.materials[a], a);
                n += '</table>';
            } else (n += '<h3>Materials</h3>'), (n += 'No materials');
            (n += '<h3>Nodes (' + Z.nodes.length + ')</h3>'),
                (n += '<table class="table treetable">'),
                (n += '<tr>'),
                (n += ' <th colspan="21">Name</th>'),
                (n += ' <th>Mesh</th>'),
                (n += ' <th>Material</th>'),
                (n += ' <th>Anim</th>'),
                (n += ' <th>Show</th>'),
                (n += '</tr>');
            for (a = 0; a < Z.nodes.length; a++)
                Z.nodes[a].isChild || (n = g(n, Z.nodes[a], 1));
            (n += '</table>'),
                (n += '<h3>Meshes (' + Z.json.meshes.length + ')</h3>'),
                (n += '<table class="table treetable">'),
                (n += '<tr>'),
                (n += ' <th>Name</th>'),
                (n += ' <th>Material</th>'),
                (n += ' <th>Vertices</th>'),
                (n += ' <th>Attributes</th>'),
                (n += '</tr>');
            var i = [];
            t.meshes = 0;
            for (a = 0; a < Z.json.meshes.length; a++) {
                (n += '<tr>'),
                    (n += '<td>' + Z.json.meshes[a].name + '</td>'),
                    (n += '<td>');
                for (var r = 0; r < Z.json.meshes[a].primitives.length; r++)
                    Z.json.meshes[a].primitives[r].material
                        ? (n +=
                              Z.json.materials[
                                  Z.json.meshes[a].primitives[r].material
                              ].name)
                        : (n += 'None');
                (n += '</td>'), (n += '<td>');
                for (r = 0; r < Z.json.meshes[a].primitives.length; r++)
                    Z.json.meshes[a].primitives[r].attributes.POSITION &&
                        (n +=
                            Z.json.accessors[
                                Z.json.meshes[a].primitives[r].attributes
                                    .POSITION
                            ].count);
                (n += '</td>'), (n += '<td>');
                for (r = 0; r < Z.json.meshes[a].primitives.length; r++)
                    n += Object.keys(Z.json.meshes[a].primitives[r].attributes);
                (n += '</td>'), (n += '</tr>');
                for (r = 0; r < Z.json.meshes[a].primitives.length; r++) {
                    var o =
                        Z.json.accessors[Z.json.meshes[a].primitives[r].indices]
                            .bufferView;
                    for (var s in (-1 == i.indexOf(o) &&
                        (i.push(o),
                        (t.meshes += Z.json.bufferViews[o].byteLength)),
                    Z.json.meshes[a].primitives[r].attributes)) {
                        const e = Z.json.meshes[a].primitives[r].attributes[s],
                            n = Z.json.accessors[e].bufferView;
                        -1 == i.indexOf(n) &&
                            (i.push(n),
                            (t.meshes += Z.json.bufferViews[n].byteLength));
                    }
                }
            }
            if (((n += '</table>'), Z.json.animations)) {
                (n += '<h3>Animations (' + Z.json.animations.length + ')</h3>'),
                    (n += '<table class="table treetable">'),
                    (n += '<tr>'),
                    (n += '  <th>Name</th>'),
                    (n += '  <th>Target node</th>'),
                    (n += '  <th>Path</th>'),
                    (n += '  <th>Interpolation</th>'),
                    (n += '  <th>Keys</th>'),
                    (n += '</tr>'),
                    (t.animations = 0);
                for (a = 0; a < Z.json.animations.length; a++) {
                    for (r = 0; r < Z.json.animations[a].samplers.length; r++) {
                        o =
                            Z.json.accessors[
                                Z.json.animations[a].samplers[r].input
                            ].bufferView;
                        -1 == i.indexOf(o) &&
                            (i.push(o),
                            (t.animations += Z.json.bufferViews[o].byteLength));
                        o =
                            Z.json.accessors[
                                Z.json.animations[a].samplers[r].output
                            ].bufferView;
                        -1 == i.indexOf(o) &&
                            (i.push(o),
                            (t.animations += Z.json.bufferViews[o].byteLength));
                    }
                    for (r = 0; r < Z.json.animations[a].channels.length; r++) {
                        (n += '<tr>'),
                            (n +=
                                '  <td>' +
                                Z.json.animations[a].name +
                                ' (' +
                                a +
                                ')</td>'),
                            (n +=
                                '  <td>' +
                                Z.nodes[
                                    Z.json.animations[a].channels[r].target.node
                                ].name +
                                '</td>'),
                            (n += '  <td>'),
                            (n +=
                                Z.json.animations[a].channels[r].target.path +
                                ' '),
                            (n += '  </td>');
                        const e = Z.json.animations[a].channels[r].sampler,
                            t = Z.json.animations[a].samplers[e];
                        (n += '  <td>' + t.interpolation + '</td>'),
                            (n += '  <td>' + Z.json.accessors[t.output].count),
                            (n += '</tr>');
                    }
                }
                n += '</table>';
            } else n += '<h3>Animations (0)</h3>';
            if (Z.json.images) {
                (n += '<h3>Images (' + Z.json.images.length + ')</h3>'),
                    (n += '<table class="table treetable">'),
                    (n += '<tr>'),
                    (n += '  <th>name</th>'),
                    (n += '  <th>type</th>'),
                    (n += '  <th>func</th>'),
                    (n += '</tr>'),
                    (t.images = 0);
                for (a = 0; a < Z.json.images.length; a++)
                    Z.json.images[a].bufferView &&
                        (t.images +=
                            Z.json.bufferViews[
                                Z.json.images[a].bufferView
                            ].byteLength),
                        (n += '<tr>'),
                        (n += '<td>' + Z.json.images[a].name + '</td>'),
                        (n += '<td>' + Z.json.images[a].mimeType + '</td>'),
                        (n += '<td>'),
                        (n +=
                            '<a onclick="gui.corePatch().getOpById(\'' +
                            e.id +
                            "').exposeTexture('" +
                            Z.json.images[a].name +
                            '\')" class="treebutton">Expose</a>'),
                        (n += '</td>'),
                        (n += '<tr>');
                n += '</table>';
            }
            if (Z.json.cameras) {
                (n += '<h3>Cameras (' + Z.json.cameras.length + ')</h3>'),
                    (n += '<table class="table treetable">'),
                    (n += '<tr>'),
                    (n += '  <th>name</th>'),
                    (n += '  <th>type</th>'),
                    (n += '  <th>info</th>'),
                    (n += '</tr>');
                for (a = 0; a < Z.json.cameras.length; a++)
                    (n += '<tr>'),
                        (n += '<td>' + Z.json.cameras[a].name + '</td>'),
                        (n += '<td>' + Z.json.cameras[a].type + '</td>'),
                        (n += '<td>'),
                        (n +=
                            'yfov: ' +
                            Math.round(
                                100 * Z.json.cameras[a].perspective.yfov
                            ) /
                                100),
                        (n += ', '),
                        (n +=
                            'zfar: ' +
                            Math.round(
                                100 * Z.json.cameras[a].perspective.zfar
                            ) /
                                100),
                        (n += ', '),
                        (n +=
                            'znear: ' +
                            Math.round(
                                100 * Z.json.cameras[a].perspective.znear
                            ) /
                                100),
                        (n += '</td>'),
                        (n += '<tr>');
                n += '</table>';
            }
            const l = Z.json.buffers[0].byteLength;
            (n += '<h3>Binary Data (' + m(l) + ')</h3>'),
                (n += '<table class="table treetable">'),
                (n += '<tr>'),
                (n += '  <th>name</th>'),
                (n += '  <th>size</th>'),
                (n += '  <th>%</th>'),
                (n += '</tr>');
            var c = l;
            for (var a in t)
                (n += '<tr>'),
                    (n += '<td>' + a + '</td>'),
                    (n += '<td>' + m(t[a]) + ' </td>'),
                    (n += '<td>' + Math.round((t[a] / l) * 100) + '% </td>'),
                    (n += '<tr>'),
                    (c -= t[a]);
            0 != c &&
                ((n += '<tr>'),
                (n += '<td>unknown</td>'),
                (n += '<td>' + m(c) + ' </td>'),
                (n += '<td>' + Math.round((c / l) * 100) + '% </td>'),
                (n += '<tr>')),
                (n += '</table>'),
                (n += '</div>'),
                (u = new CABLES.UI.Tab('GLTF', {
                    icon: 'cube',
                    infotext: 'tab_gltf',
                    padding: !0,
                    singleton: !0,
                })),
                gui.mainTabs.addTab(u, !0),
                u.html(n),
                console.log(Z);
        }
        function m(e) {
            return e > 1024
                ? Math.round(e / 1024) + ' kb'
                : e > 512e3
                ? Math.round(e / 1024) + ' mb'
                : e + ' bytes';
        }
        const p = e.inString('data'),
            _ = e.inTrigger('Render'),
            v = e.inUrl('glb File', ['.glb']),
            x = e.inBool('Draw', !0),
            b = e.inDropDown('Camera', ['Ncaone'], 'None'),
            E = e.inTriggerButton('Show Structure'),
            T = e.inSwitch('Center', ['None', 'XYZ', 'XZ'], 'XYZ'),
            A = e.inBool('Rescale', !0),
            C = e.inFloat('Rescale Size', 2.5),
            S = e.inFloat('Time'),
            M = e.inBool('Sync to timeline', !1),
            L = e.inBool('Loop', !0),
            P = e.inSwitch('Normals Format', ['XYZ', 'X-ZY'], 'XYZ'),
            O = e.inSwitch('Vertices Format', ['XYZ', 'XZ-Y'], 'XYZ'),
            R = e.inBool('Calc Normals', !1),
            I = e.inObject('Materials'),
            y = e.inArray('Hide Nodes'),
            F = e.outTrigger('Render Before'),
            w = e.outTrigger('Next'),
            U = e.outString('Generator'),
            N = e.outNumber('GLTF Version'),
            G = e.outNumber('Anim Length', 0),
            B = e.outNumber('Anim Time', 0),
            D = e.outObject('Json'),
            V = e.outArray('BoundingPoints'),
            X = e.outObject('Bounds'),
            j = e.outTrigger('Finished'),
            k = e.outBool('Loaded');
        e.setPortGroup('Timing', [S, M, L]);
        const H = !0,
            z = e.patch.cgl;
        v.onChange = O.onChange = R.onChange = P.onChange = le;
        let Y = null,
            W = [],
            Z = null,
            q = 0,
            K = 0,
            Q = !0,
            $ = null,
            J = null,
            ee = null;
        const te = vec3.create();
        let ne = 0,
            ae = !1;
        const ie = vec3.create();
        function re() {
            (ae = 'None' != T.get()),
                Z &&
                    Z.bounds &&
                    (ie.set(Z.bounds.center),
                    (ie[0] = -ie[0]),
                    (ie[1] = -ie[1]),
                    (ie[2] = -ie[2]),
                    'XZ' == T.get() && (ie[1] = -Z.bounds.minY));
        }
        function oe() {
            if (((Y = null), Z))
                for (let e = 0; e < Z.cams.length; e++)
                    Z.cams[e].name == b.get() && (Y = Z.cams[e]);
        }
        function se(t) {
            J || (J = z.patch.loading.start('gltf' + v.get(), v.get()));
            let n = e.patch.getFilePath(String(v.get()));
            t && (n += '?rnd=' + CABLES.generateUUID()), k.set(!1);
            const a = new XMLHttpRequest();
            a.open('GET', n, !0),
                (a.responseType = 'arraybuffer'),
                h(),
                z.patch.loading.addAssetLoadingTask(() => {
                    (a.onload = function(t) {
                        (W = []), (q = 0);
                        const n = a.response;
                        (Z = o(n)),
                            z.patch.loading.finished(J),
                            (J = null),
                            (Q = !0),
                            e.refreshParams(),
                            G.set(q),
                            ce(),
                            u && f(),
                            (function() {
                                const e = ['None'];
                                if (Z && Z.json.cameras)
                                    for (
                                        let t = 0;
                                        t < Z.json.cameras.length;
                                        t++
                                    )
                                        e.push(Z.json.cameras[t].name);
                                b.uiAttribs.values = e;
                            })(),
                            oe(),
                            V.set(W),
                            Z &&
                                ((Z.loaded = Date.now()),
                                Z.bounds && X.set(Z.bounds)),
                            re(),
                            k.set(!0);
                    }),
                        a.send(null);
                });
        }
        function le(e) {
            clearTimeout($),
                ($ = setTimeout(function() {
                    se(e);
                }, 30));
        }
        function ce() {
            if ((ee || ue(), Z)) {
                if ((Z.unHideAll(), ee && ee.hiddenNodes))
                    for (const t in ee.hiddenNodes) {
                        const n = Z.getNode(t);
                        n
                            ? (n.hidden = !0)
                            : e.warn('node to be hidden not found', t, n);
                    }
                !(function() {
                    const e = y.get();
                    if (Z && ee && ee.hiddenNodes && e)
                        for (let t = 0; t < e.length; t++) {
                            const n = Z.getNode(e[t]);
                            n && (n.hidden = !0);
                        }
                })();
            }
        }
        function ue() {
            return (
                (ee = (ee = p.get()) && '' !== ee ? JSON.parse(ee) : {}),
                Z && ce(),
                ee
            );
        }
        function he(e, t) {
            for (let n = 0; n < Z.nodes.length; n++)
                Z.nodes[n].children.indexOf(t) >= 0 &&
                    (e.push(Z.nodes[n]), Z.nodes[n].isChild && he(e, n));
        }
        (E.onTriggered = f),
            p.setUiAttribs({ hideParam: !0, hidePort: !0 }),
            (p.onChange = ue),
            (y.onChange = ce),
            e.setPortGroup('Transform', [A, C, T]),
            (T.onChange = re),
            (A.onChange = function() {
                C.setUiAttribs({ greyout: !A.get() });
            }),
            (I.onChange = function() {
                Q = !0;
            }),
            (e.onDelete = function() {
                h();
            }),
            (M.onChange = function() {
                S.setUiAttribs({ greyout: M.get() });
            }),
            (b.onChange = oe),
            (_.onTriggered = function() {
                if (
                    ((K = M.get()
                        ? e.patch.timer.getTime()
                        : Math.max(0, S.get())),
                    L.get()
                        ? (K %= q) < ne && j.trigger()
                        : q > 0 && K >= q && j.trigger(),
                    (ne = K),
                    z.pushModelMatrix(),
                    B.set(K || 0),
                    Z && Z.bounds)
                ) {
                    if (A.get()) {
                        const e = C.get() / Z.bounds.maxAxis;
                        (Z.scale = e),
                            vec3.set(te, e, e, e),
                            mat4.scale(z.mMatrix, z.mMatrix, te);
                    }
                    ae && mat4.translate(z.mMatrix, z.mMatrix, ie);
                }
                if (
                    ((z.frameStore.currentScene = Z),
                    F.trigger(),
                    Q &&
                        (function() {
                            if (!Z) return;
                            Z.shaders = {};
                            for (let e = 0; e < I.links.length; e++) {
                                const t = I.links[e].portOut.parent,
                                    n = t.getPort('Shader'),
                                    a = t.getPort('Material Name');
                                if (n && a && n.get()) {
                                    const e = a.get();
                                    if (Z.json.materials)
                                        for (
                                            let a = 0;
                                            a < Z.json.materials.length;
                                            a++
                                        )
                                            Z.json.materials[a].name == e &&
                                                (Z.shaders[a] &&
                                                    t.warn(
                                                        'double material assignment:',
                                                        e
                                                    ),
                                                (Z.shaders[a] = n.get()));
                                }
                            }
                            (Q = !1), u && f();
                        })(),
                    Y && Y.start(K),
                    Z && x.get())
                ) {
                    (Z.time = K),
                        Z.bounds &&
                            z.shouldDrawHelpers(e) &&
                            (CABLES.UI.renderHelper
                                ? z.pushShader(
                                      CABLES.GL_MARKER.getDefaultShader(z)
                                  )
                                : z.pushShader(
                                      CABLES.GL_MARKER.getSelectedShader(z)
                                  ),
                            Z.bounds.render(z),
                            z.popShader());
                    for (let e = 0; e < Z.nodes.length; e++)
                        Z.nodes[e].isChild || Z.nodes[e].render(z);
                }
                w.trigger(),
                    (z.frameStore.currentScene = null),
                    z.popModelMatrix(),
                    Y && Y.end();
            }),
            (e.onFileChanged = function(e) {
                e &&
                    e.length > 3 &&
                    v.get() &&
                    v.get().indexOf(e) > -1 &&
                    le(!0);
            }),
            (e.onFileChanged = function(e) {
                v.get() && v.get().indexOf(e) > -1 && le(!0);
            }),
            (e.exposeTexture = function(t) {
                const n = gui.corePatch().addOp('Ops.Gl.GLTF.GltfTexture');
                n.getPort('Name').set(t),
                    e.patch.link(e, w.name, n, 'Render'),
                    gui.patch().focusOp(n.id, !0);
            }),
            (e.exposeNode = function(t, n) {
                if (n) {
                    for (let n = 0; n < Z.nodes.length; n++)
                        if (Z.nodes[n].name == t) {
                            const t = Z.nodes[n],
                                a = [];
                            he(a, n), a.push(t, t);
                            let i = w.name,
                                r = e;
                            for (let t = 0; t < a.length; t++) {
                                const n = gui
                                    .corePatch()
                                    .addOp('Ops.Gl.GLTF.GltfNode_v2');
                                n.getPort('Node Name').set(a[t].name),
                                    e.patch.link(r, i, n, 'Render'),
                                    t == a.length - 1
                                        ? n.getPort('Transformation').set(!1)
                                        : (n.getPort('Draw Mesh').set(!1),
                                          n.getPort('Draw Childs').set(!1)),
                                    (i = 'Next'),
                                    (r = n);
                            }
                        }
                } else {
                    const n = gui.corePatch().addOp('Ops.Gl.GLTF.GltfNode_v2');
                    n.getPort('Node Name').set(t),
                        e.patch.link(e, w.name, n, 'Render'),
                        gui.patch().focusOp(n.id, !0);
                }
                CABLES.UI.MODAL.hide();
            }),
            (e.assignMaterial = function(t) {
                const n = gui.corePatch().addOp('Ops.Gl.GLTF.GltfSetMaterial');
                n.getPort('Material Name').set(t),
                    e.patch.link(e, I.name, n, 'Material'),
                    gui.patch().focusOp(n.id, !0),
                    CABLES.UI.MODAL.hide();
            }),
            (e.toggleNodeVisibility = function(e) {
                const t = Z.getNode(e);
                (t.hidden = !t.hidden),
                    (ee.hiddenNodes = ee.hiddenNodes || {}),
                    t &&
                        (t.hidden
                            ? (ee.hiddenNodes[e] = !0)
                            : delete ee.hiddenNodes[e]),
                    p.set(JSON.stringify(ee));
            });
    }),
    (Ops.Gl.GLTF.GltfScene_v2.prototype = new CABLES.Op()),
    (CABLES.OPS['daafedce-998a-4b34-8af3-6b62a66948ed'] = {
        f: Ops.Gl.GLTF.GltfScene_v2,
        objName: 'Ops.Gl.GLTF.GltfScene_v2',
    }),
    (Ops.Gl.Phong.LambertMaterial_v2 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t =
                '{{MODULES_HEAD}}\n\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\nIN vec3 norm;\nIN vec4 modelPos;\n\n// UNI mat4 normalMatrix;\nIN mat3 normalMatrix; // when instancing...\n\nIN vec2 texCoord;\n\nIN vec3 mvNormal;\nIN vec3 mvTangent;\nIN vec3 mvBiTangent;\n\nUNI vec4 materialColor;//r,g,b,a;\n\nstruct Light {\n    vec3 position;\n    vec3 color;\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int type;\n    int castLight;\n    #define CASTLIGHT x\n    #define TYPE y\n    ivec2 castLightType;\n};\n#ifdef HAS_TEXTURES\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n#endif\n\nUNI Light lights[NUM_LIGHTS];\n\n// * UTILITY FUNCTIONS */\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\n\n\n// * LIGHT CALCULATIONS */\nfloat CalculateFalloff(float radius, float falloff, float distLight)\n{\n    float denom = distLight / radius + 1.0;\n    float attenuation = 1.0 / (denom*denom);\n    float t = (attenuation - 0.1) / (1.0 - 0.1);\n\n    t = t * (20.0 * (1. - falloff) * 20.0 * (1. - falloff));\n\n    return min(1.0,max(t, 0.0));\n}\n\nfloat Falloff2(vec3 lightDirection, float falloff) {\n    float distanceSquared = dot(lightDirection, lightDirection);\n    float factor = distanceSquared * falloff;\n    float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n    float attenuation = smoothFactor * smoothFactor;\n\n    return attenuation * 1. / max(distanceSquared, 0.00001);\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\nvec3 CalculateDiffuseColor(vec3 lightDirection, vec3 normal, vec3 lightColor, vec3 materialColor, inout float lambert) {\n    lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\n\n// MAIN\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0.0);\n    vec3 normal = normalize(mat3(normalMatrix)*norm);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal*-1.0;\n    #endif\n\n    vec3 matColor = materialColor.rgb;\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            matColor = texture(texDiffuse, texCoord).rgb;\n            #ifdef COLORIZE_TEXTURE\n                matColor *= materialColor.rgb;\n            #endif\n        #endif\n    #endif\n\n    for(int l=0;l<NUM_LIGHTS;l++) {\n        if (lights[l].castLightType.TYPE == AMBIENT) {\n            col.rgb += lights[l].lightProperties.INTENSITY * lights[l].color;\n        } else {\n            if (lights[l].castLightType.CASTLIGHT == 0) continue;\n\n            vec3 lightModelDiff= lights[l].position - modelPos.xyz;\n            vec3 lightDirection = normalize(lightModelDiff);\n\n            if (lights[l].castLightType.TYPE == DIRECTIONAL) lightDirection = lights[l].position;\n\n            float lambert = 1.; // inout variable\n            vec3 diffuseColor = CalculateDiffuseColor(lightDirection, normal, lights[l].color, matColor, lambert);\n\n            if (lights[l].castLightType.TYPE != DIRECTIONAL) diffuseColor *= Falloff2(lightDirection, lights[l].lightProperties.FALLOFF);\n\n            #ifdef HAS_SPOT\n                if (lights[l].castLightType.TYPE == SPOT) diffuseColor *= CalculateSpotLightEffect(\n                    lights[l].position, lights[l].conePointAt, lights[l].spotProperties.COSCONEANGLE,\n                    lights[l].spotProperties.COSCONEANGLEINNER, lights[l].spotProperties.SPOTEXPONENT,\n                    lightDirection\n                );\n            #endif\n\n            diffuseColor *= lights[l].lightProperties.INTENSITY;\n            col.rgb += diffuseColor;\n        }\n    }\n\n\n    col.a = materialColor.a;\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}\n',
            n =
                '#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec3 attrVertNormal;\nIN vec2 attrTexCoord;\n\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\nIN float attrVertIndex;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nOUT vec3 norm;\nOUT mat4 mvMatrix;\nOUT mat3 normalMatrix;\nOUT vec4 modelPos;\nOUT vec2 texCoord;\n{{MODULES_HEAD}}\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    vec4 pos = vec4( vPosition, 1. );\n    mat4 mMatrix=modelMatrix;\n    vec3 tangent=attrTangent,\n        bitangent=attrBiTangent;\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n\n    norm=attrVertNormal;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n\n\n    // this needs only to be done when instancing....\n\n    mvMatrix=viewMatrix*mMatrix;\n    modelPos=mMatrix*pos;\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n',
            a = { ambient: 0, point: 1, directional: 2, spot: 3 },
            i = e.inTrigger('Execute'),
            r = e.inValueSlider('Diffuse R', Math.random()),
            o = e.inValueSlider('Diffuse G', Math.random()),
            s = e.inValueSlider('Diffuse B', Math.random()),
            l = e.inValueSlider('Diffuse A', 1);
        r.setUiAttribs({ colorPick: !0 }),
            e.setPortGroup('Diffuse Color', [r, o, s, l]);
        const c = e.inBool('Double Sided', !1);
        c.setUiAttribs({ hidePort: !0 }),
            (c.onChange = function() {
                p.toggleDefine('DOUBLE_SIDED', c.get());
            }),
            e.setPortGroup('Material Properties', [c]);
        const u = e.inTexture('Diffuse Texture');
        let h = null;
        u.onChange = d;
        const g = e.inBool('Colorize Texture', !1);
        function d() {
            u.get()
                ? p.hasDefine('HAS_TEXTURE_DIFFUSE') ||
                  (p.define('HAS_TEXTURE_DIFFUSE'),
                  h || (h = new CGL.Uniform(p, 't', 'texDiffuse', 0)))
                : (p.removeUniform('texDiffuse'),
                  p.removeDefine('HAS_TEXTURE_DIFFUSE'),
                  (h = null));
        }
        (g.onChange = function() {
            p.toggleDefine('COLORIZE_TEXTURE', g.get());
        }),
            e.setPortGroup('Texture', [u, g]);
        const f = e.outTrigger('next'),
            m = e.patch.cgl,
            p = new CGL.Shader(m, 'LambertMaterial');
        p.define('NUM_LIGHTS', '1');
        new CGL.Uniform(p, '4f', 'materialColor', r, o, s, l);
        e.outObject('Shader').set(p);
        const _ = 64 === m.maxUniformsFrag ? 6 : 16;
        p.setSource(n, t);
        const v = [
            {
                type: 'point',
                position: [0, 2, 1],
                intensity: 1,
                attenuation: 0,
                falloff: 0.5,
                radius: 80,
                castLight: 1,
            },
        ];
        p.define('MAX_LIGHTS', _.toString());
        let x = null;
        const b = [],
            E = { directional: !1, spot: !1, ambient: !1, point: !1 };
        function T(e) {
            for (let t = 0; t < e.length; t += 1) {
                const n = e[t];
                (n.isUsed = !0),
                    b[t].position.setValue(n.position),
                    b[t].color.setValue(n.color),
                    b[t].lightProperties.setValue([
                        n.intensity,
                        n.attenuation,
                        n.falloff,
                        n.radius,
                    ]),
                    b[t].conePointAt.setValue(n.conePointAt),
                    b[t].spotProperties.setValue([
                        n.cosConeAngle,
                        n.cosConeAngleInner,
                        n.spotExponent,
                    ]),
                    b[t].castLightType.setValue([
                        Number(n.castLight),
                        a[n.type],
                    ]);
            }
        }
        let A = 0;
        function C(e) {
            e.length !== A
                ? (!(function(e) {
                      for (let e = 0; e < b.length; e += 1) b[e] = null;
                      (E.directional = !1),
                          (E.spot = !1),
                          (E.ambient = !1),
                          (E.point = !1);
                      for (let t = 0; t < e.length; t += 1) {
                          if (t === _) return;
                          b[t] = null;
                          const n = e[t].type;
                          E[n] || (E[n] = !0),
                              b[t] ||
                                  (b[t] = {
                                      color: new CGL.Uniform(
                                          p,
                                          '3f',
                                          'lights[' + t + '].color',
                                          [1, 1, 1]
                                      ),
                                      position: new CGL.Uniform(
                                          p,
                                          '3f',
                                          'lights[' + t + '].position',
                                          [0, 11, 0]
                                      ),
                                      lightProperties: new CGL.Uniform(
                                          p,
                                          '4f',
                                          'lights[' + t + '].lightProperties',
                                          [1, 1, 1, 1]
                                      ),
                                      conePointAt: new CGL.Uniform(
                                          p,
                                          '3f',
                                          'lights[' + t + '].conePointAt',
                                          vec3.create()
                                      ),
                                      spotProperties: new CGL.Uniform(
                                          p,
                                          '3f',
                                          'lights[' + t + '].spotProperties',
                                          [0, 0, 0, 0]
                                      ),
                                      castLightType: new CGL.Uniform(
                                          p,
                                          '2i',
                                          'lights[' + t + '].castLightType',
                                          [0, 0]
                                      ),
                                  });
                      }
                      for (
                          let e = 0, t = Object.keys(E);
                          e < t.length;
                          e += 1
                      ) {
                          const n = t[e];
                          p.toggleDefine('HAS_' + n.toUpperCase(), E[n]);
                      }
                  })(e),
                  (A = e.length),
                  p.define('NUM_LIGHTS', '' + Math.max(A, 1)),
                  T(e))
                : T(e);
        }
        const S = mat4.create();
        function M() {
            var e;
            m.frameStore.lightStack && m.frameStore.lightStack.length
                ? p &&
                  m.frameStore.lightStack &&
                  m.frameStore.lightStack.length &&
                  ((x = null), C(m.frameStore.lightStack))
                : (x ||
                      (x = {
                          color: new CGL.Uniform(p, '3f', 'lights[0].color', [
                              1,
                              1,
                              1,
                          ]),
                          position: new CGL.Uniform(
                              p,
                              '3f',
                              'lights[0].position',
                              [0, 11, 0]
                          ),
                          lightProperties: new CGL.Uniform(
                              p,
                              '4f',
                              'lights[0].lightProperties',
                              [1, 1, 1, 1]
                          ),
                          conePointAt: new CGL.Uniform(
                              p,
                              '3f',
                              'lights[0].conePointAt',
                              vec3.create()
                          ),
                          spotProperties: new CGL.Uniform(
                              p,
                              '3f',
                              'lights[0].spotProperties',
                              [0, 0, 0, 0]
                          ),
                          castLightType: new CGL.Uniform(
                              p,
                              '2i',
                              'lights[0].castLightType',
                              [0, 0]
                          ),
                      }),
                  mat4.invert(S, m.vMatrix),
                  (v[0].position = [S[12], S[13], S[14]]),
                  (e = v[0]),
                  p.define('NUM_LIGHTS', '1'),
                  p.hasDefine('HAS_SPOT') && p.removeDefine('HAS_SPOT'),
                  p.hasDefine('HAS_DIRECTIONAL') &&
                      p.removeDefine('HAS_DIRECTIONAL'),
                  p.hasDefine('HAS_AMBIENT') && p.removeDefine('HAS_AMBIENT'),
                  p.hasDefine('HAS_POINT') || p.define('HAS_POINT'),
                  x.position.setValue(e.position),
                  x.color.setValue(e.color),
                  x.lightProperties.setValue([
                      e.intensity,
                      e.attenuation,
                      e.falloff,
                      e.radius,
                  ]),
                  x.castLightType.setValue([1, a[e.type]]),
                  x.conePointAt.setValue(e.conePointAt),
                  x.spotProperties.setValue([
                      e.cosConeAngle,
                      e.cosConeAngleInner,
                      e.spotExponent,
                  ]),
                  (A = -1));
        }
        (i.onTriggered = function() {
            p
                ? (m.frameStore.lightStack &&
                      (0 === m.frameStore.lightStack.length
                          ? e.setUiError(
                                'deflight',
                                'Default light is enabled. Please add lights to your patch to make this warning disappear.',
                                1
                            )
                          : e.setUiError('deflight', null)),
                  m.pushShader(p),
                  p.popTextures(),
                  M(),
                  u.get() && p.pushTexture(h, u.get().tex),
                  f.trigger(),
                  m.popShader())
                : e.log('lambert has no shader...');
        }),
            d();
    }),
    (Ops.Gl.Phong.LambertMaterial_v2.prototype = new CABLES.Op()),
    (CABLES.OPS['d69316f1-bde9-4645-8280-c635a8982e0d'] = {
        f: Ops.Gl.Phong.LambertMaterial_v2,
        objName: 'Ops.Gl.Phong.LambertMaterial_v2',
    }),
    (Ops.Sequence = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = [],
            n = [];
        function a() {
            for (var e = 0; e < n.length; e++) n[e].trigger();
        }
        e.inTrigger('exe').onTriggered = a;
        for (var i = 0; i < 16; i++)
            if ((n.push(e.outTrigger('trigger ' + i)), i < 15)) {
                var r = e.inTrigger('exe ' + i);
                (r.onTriggered = a), t.push(r);
            }
    }),
    (Ops.Sequence.prototype = new CABLES.Op()),
    (CABLES.OPS['a466bc1f-06e9-4595-8849-bffb9fe22f99'] = {
        f: Ops.Sequence,
        objName: 'Ops.Sequence',
    }),
    (Ops.Gl.Meshes.Cube_v2 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inTrigger('Render'),
            n = e.inValueBool('Render Mesh', !0),
            a = e.inValue('Width', 1),
            i = e.inValue('Length', 1),
            r = e.inValue('Height', 1),
            o = e.inValueBool('Center', !0),
            s = e.inSwitch('Mapping', ['Side', 'Cube +-'], 'Side'),
            l = e.inValue('Bias', 0),
            c = e.inValueBool('Flip X', !0),
            u = e.inValueBool('Top', !0),
            h = e.inValueBool('Bottom', !0),
            g = e.inValueBool('Left', !0),
            d = e.inValueBool('Right', !0),
            f = e.inValueBool('Front', !0),
            m = e.inValueBool('Back', !0),
            p = e.outTrigger('Next'),
            _ = e.outObject('geometry'),
            v = e.patch.cgl;
        e.toWorkPortsNeedToBeLinked(t),
            e.setPortGroup('Mapping', [s, l, c]),
            e.setPortGroup('Geometry', [a, r, i, o]),
            e.setPortGroup('Sides', [u, h, g, d, f, m]);
        let x = null,
            b = null,
            E = !0,
            T = !0;
        function A() {
            x || (x = new CGL.Geometry('cubemesh')), x.clear();
            let e = a.get(),
                t = -1 * a.get(),
                n = r.get(),
                p = -1 * r.get(),
                A = i.get(),
                C = -1 * i.get();
            o.get()
                ? ((e *= 0.5),
                  (t *= 0.5),
                  (n *= 0.5),
                  (p *= 0.5),
                  (A *= 0.5),
                  (C *= 0.5))
                : ((t = 0), (p = 0), (C = 0)),
                'Side' == s.get()
                    ? (function(e, t, n, a, i, r, o) {
                          e.vertices = [
                              i,
                              r,
                              a,
                              t,
                              r,
                              a,
                              t,
                              n,
                              a,
                              i,
                              n,
                              a,
                              i,
                              r,
                              o,
                              i,
                              n,
                              o,
                              t,
                              n,
                              o,
                              t,
                              r,
                              o,
                              i,
                              n,
                              o,
                              i,
                              n,
                              a,
                              t,
                              n,
                              a,
                              t,
                              n,
                              o,
                              i,
                              r,
                              o,
                              t,
                              r,
                              o,
                              t,
                              r,
                              a,
                              i,
                              r,
                              a,
                              t,
                              r,
                              o,
                              t,
                              n,
                              o,
                              t,
                              n,
                              a,
                              t,
                              r,
                              a,
                              i,
                              r,
                              o,
                              i,
                              r,
                              a,
                              i,
                              n,
                              a,
                              i,
                              n,
                              o,
                          ];
                          const s = l.get();
                          let u = 1,
                              h = 0;
                          c.get() && ((u = 0), (h = 1));
                          e.setTexCoords([
                              h + s,
                              1 - s,
                              u - s,
                              1 - s,
                              u - s,
                              0 + s,
                              h + s,
                              0 + s,
                              u - s,
                              1 - s,
                              u - s,
                              0 + s,
                              h + s,
                              0 + s,
                              h + s,
                              1 - s,
                              h + s,
                              0 + s,
                              h + s,
                              1 - s,
                              u - s,
                              1 - s,
                              u - s,
                              0 + s,
                              u - s,
                              0 + s,
                              h + s,
                              0 + s,
                              h + s,
                              1 - s,
                              u - s,
                              1 - s,
                              u - s,
                              1 - s,
                              u - s,
                              0 + s,
                              h + s,
                              0 + s,
                              h + s,
                              1 - s,
                              h + s,
                              1 - s,
                              u - s,
                              1 - s,
                              u - s,
                              0 + s,
                              h + s,
                              0 + s,
                          ]),
                              (e.vertexNormals = new Float32Array([
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                              ])),
                              (e.tangents = new Float32Array([
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                              ])),
                              (e.biTangents = new Float32Array([
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                              ]));
                      })(x, e, n, A, t, p, C)
                    : (function(e, t, n, a, i, r, o) {
                          e.vertices = [
                              i,
                              r,
                              a,
                              t,
                              r,
                              a,
                              t,
                              n,
                              a,
                              i,
                              n,
                              a,
                              i,
                              r,
                              o,
                              i,
                              n,
                              o,
                              t,
                              n,
                              o,
                              t,
                              r,
                              o,
                              i,
                              n,
                              o,
                              i,
                              n,
                              a,
                              t,
                              n,
                              a,
                              t,
                              n,
                              o,
                              i,
                              r,
                              o,
                              t,
                              r,
                              o,
                              t,
                              r,
                              a,
                              i,
                              r,
                              a,
                              t,
                              r,
                              o,
                              t,
                              n,
                              o,
                              t,
                              n,
                              a,
                              t,
                              r,
                              a,
                              i,
                              r,
                              o,
                              i,
                              r,
                              a,
                              i,
                              n,
                              a,
                              i,
                              n,
                              o,
                          ];
                          const s = 0.25,
                              u = 1 / 3,
                              h = l.get();
                          let g = 0;
                          c.get() && (g = 1);
                          const d = [];
                          d.push(
                              g + s + h,
                              2 * u - h,
                              g + 0.5 - h,
                              2 * u - h,
                              g + 0.5 - h,
                              u + h,
                              g + s + h,
                              u + h,
                              g + 1 - h,
                              2 * u - h,
                              g + 1 - h,
                              u + h,
                              g + 0.75 + h,
                              u + h,
                              g + 0.75 + h,
                              2 * u - h
                          ),
                              c.get()
                                  ? d.push(
                                        s + h,
                                        0 - h,
                                        0.5 - h,
                                        0 - h,
                                        0.5 - h,
                                        1 * u + h,
                                        s + h,
                                        1 * u + h,
                                        s + h,
                                        1 + h,
                                        s + h,
                                        2 * u - h,
                                        0.5 - h,
                                        2 * u - h,
                                        0.5 - h,
                                        1 + h
                                    )
                                  : d.push(
                                        s + h,
                                        0 + h,
                                        s + h,
                                        1 * u - h,
                                        0.5 - h,
                                        1 * u - h,
                                        0.5 - h,
                                        0 + h,
                                        s + h,
                                        1 - h,
                                        0.5 - h,
                                        1 - h,
                                        0.5 - h,
                                        2 * u + h,
                                        s + h,
                                        2 * u + h
                                    );
                          d.push(
                              g + 0.75 - h,
                              1 - u - h,
                              g + 0.75 - h,
                              1 - 2 * u + h,
                              g + 0.5 + h,
                              1 - 2 * u + h,
                              g + 0.5 + h,
                              1 - u - h,
                              g + 0 + h,
                              1 - u - h,
                              g + 0.25 - h,
                              1 - u - h,
                              g + 0.25 - h,
                              1 - 2 * u + h,
                              g + 0 + h,
                              1 - 2 * u + h
                          ),
                              e.setTexCoords(d),
                              (e.vertexNormals = [
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                              ]),
                              (e.tangents = new Float32Array([
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                              ])),
                              (e.biTangents = new Float32Array([
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  -1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                                  0,
                                  1,
                                  0,
                              ]));
                      })(x, e, n, A, t, p, C),
                (x.verticesIndices = []),
                u.get() && x.verticesIndices.push(8, 9, 10, 8, 10, 11),
                h.get() && x.verticesIndices.push(12, 13, 14, 12, 14, 15),
                g.get() && x.verticesIndices.push(20, 21, 22, 20, 22, 23),
                d.get() && x.verticesIndices.push(16, 17, 18, 16, 18, 19),
                m.get() && x.verticesIndices.push(4, 5, 6, 4, 6, 7),
                f.get() && x.verticesIndices.push(0, 1, 2, 0, 2, 3),
                (E = 0 !== x.verticesIndices.length),
                b && b.dispose(),
                (b = new CGL.Mesh(v, x)),
                _.set(null),
                _.set(x),
                (T = !1);
        }
        (l.onChange = c.onChange = u.onChange = h.onChange = g.onChange = d.onChange = f.onChange = m.onChange = s.onChange = a.onChange = r.onChange = i.onChange = o.onChange = function() {
            T = !0;
        }),
            (t.onLinkChanged = function() {
                t.isLinked() ? A() : _.set(null);
            }),
            (t.onTriggered = function() {
                T && A(),
                    n.get() && b && E && b.render(v.getShader()),
                    p.trigger();
            }),
            (e.preRender = function() {
                A(), b.render(v.getShader());
            }),
            (e.onDelete = function() {
                b && b.dispose();
            });
    }),
    (Ops.Gl.Meshes.Cube_v2.prototype = new CABLES.Op()),
    (CABLES.OPS['37b92ba4-cea5-42ae-bf28-a513ca28549c'] = {
        f: Ops.Gl.Meshes.Cube_v2,
        objName: 'Ops.Gl.Meshes.Cube_v2',
    }),
    (Ops.Gl.Matrix.Transform = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inTrigger('render'),
            n = e.inValue('posX', 0),
            a = e.inValue('posY', 0),
            i = e.inValue('posZ', 0),
            r = e.inValue('scale', 1),
            o = e.inValue('rotX', 0),
            s = e.inValue('rotY', 0),
            l = e.inValue('rotZ', 0),
            c = e.outTrigger('trigger');
        e.setPortGroup('Rotation', [o, s, l]),
            e.setPortGroup('Position', [n, a, i]),
            e.setPortGroup('Scale', [r]),
            e.setUiAxisPorts(n, a, i);
        const u = e.patch.cgl,
            h = vec3.create(),
            g = vec3.create(),
            d = mat4.create();
        mat4.identity(d);
        let f = !1,
            m = !1,
            p = !0,
            _ = !0,
            v = !0;
        function x() {
            mat4.identity(d),
                m && mat4.translate(d, d, h),
                0 !== o.get() && mat4.rotateX(d, d, o.get() * CGL.DEG2RAD),
                0 !== s.get() && mat4.rotateY(d, d, s.get() * CGL.DEG2RAD),
                0 !== l.get() && mat4.rotateZ(d, d, l.get() * CGL.DEG2RAD),
                f && mat4.scale(d, d, g),
                (v = !1);
        }
        (o.onChange = s.onChange = l.onChange = function() {
            v = !0;
        }),
            (n.onChange = a.onChange = i.onChange = function() {
                p = !0;
            }),
            (r.onChange = function() {
                _ = !0;
            }),
            (t.onTriggered = function() {
                let t = !1;
                p &&
                    (!(function() {
                        (m = !1),
                            (0 !== n.get() || 0 !== a.get() || 0 !== i.get()) &&
                                (m = !0);
                        vec3.set(h, n.get(), a.get(), i.get()), (p = !1);
                    })(),
                    (t = !0)),
                    _ &&
                        ((f = !0),
                        vec3.set(g, r.get(), r.get(), r.get()),
                        (_ = !1),
                        (t = !0)),
                    v && (t = !0),
                    t && x(),
                    u.pushModelMatrix(),
                    mat4.multiply(u.mMatrix, u.mMatrix, d),
                    c.trigger(),
                    u.popModelMatrix(),
                    CABLES.UI &&
                        CABLES.UI.showCanvasTransforms &&
                        gui.setTransform(e.id, n.get(), a.get(), i.get()),
                    e.isCurrentUiOp() &&
                        gui.setTransformGizmo({ posX: n, posY: a, posZ: i });
            }),
            (e.transform3d = function() {
                return { pos: [n, a, i] };
            }),
            x();
    }),
    (Ops.Gl.Matrix.Transform.prototype = new CABLES.Op()),
    (CABLES.OPS['650baeb1-db2d-4781-9af6-ab4e9d4277be'] = {
        f: Ops.Gl.Matrix.Transform,
        objName: 'Ops.Gl.Matrix.Transform',
    }),
    (Ops.Gl.Phong.SpotLight_v5 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.patch.cgl,
            n = e.inTrigger('Trigger In'),
            a = e.inBool('Cast Light', !0),
            i = e.inFloat('Intensity', 2),
            r = e.inFloat('Radius', 10),
            o = e.inFloat('X', 1),
            s = e.inFloat('Y', 3),
            l = e.inFloat('Z', 1),
            c = [o, s, l];
        e.setPortGroup('Position', c);
        const u = e.inFloat('Point At X', 0),
            h = e.inFloat('Point At Y', 0),
            g = e.inFloat('Point At Z', 0),
            d = [u, h, g];
        e.setPortGroup('Point At', d);
        const f = e.inFloatSlider('R', 1),
            m = e.inFloatSlider('G', 1),
            p = e.inFloatSlider('B', 1);
        f.setUiAttribs({ colorPick: !0 });
        const _ = [f, m, p];
        e.setPortGroup('Color', _);
        const v = e.inFloatSlider('Specular R', 1),
            x = e.inFloatSlider('Specular G', 1),
            b = e.inFloatSlider('Specular B', 1);
        v.setUiAttribs({ colorPick: !0 });
        const E = [v, x, b];
        e.setPortGroup('Specular Color', E);
        const T = e.inFloat('Cone Angle', 120),
            A = e.inFloat('Inner Cone Angle', 60),
            C = e.inFloat('Spot Exponent', 0.97),
            S = [T, A, C];
        e.setPortGroup('Cone Attributes', S);
        const M = e.inFloatSlider('Falloff', 1e-5),
            L = [a, i, r];
        e.setPortGroup('Light Attributes', L);
        const P = e.inBool('Cast Shadow', !1),
            O = e.inBool('Rendering Active', !0),
            R = e.inSwitch('Map Size', [256, 512, 1024, 2048], 512),
            I = e.inFloatSlider('Shadow Strength', 0.99),
            y = e.inFloat('Near', 0.1),
            F = e.inFloat('Far', 30),
            w = e.inFloatSlider('Bias', 1e-4),
            U = e.inInt('Polygon Offset', 0),
            N = e.inFloatSlider('Normal Offset', 0),
            G = e.inFloatSlider('Blur Amount', 0);
        e.setPortGroup('', [P]),
            e.setPortGroup('Shadow Map Settings', [R, O, I, y, F, w, U, N, G]),
            R.setUiAttribs({ greyout: !0, hidePort: !0 }),
            O.setUiAttribs({ greyout: !0 }),
            I.setUiAttribs({ greyout: !0 }),
            y.setUiAttribs({ greyout: !0, hidePort: !0 }),
            F.setUiAttribs({ greyout: !0, hidePort: !0 }),
            G.setUiAttribs({ greyout: !0, hidePort: !0 }),
            U.setUiAttribs({ greyout: !0, hidePort: !0 }),
            N.setUiAttribs({ greyout: !0, hidePort: !0 }),
            w.setUiAttribs({ greyout: !0, hidePort: !0 });
        const B = e.inBool('Enable Advanced', !1),
            D = e.inSwitch('MSAA', ['none', '2x', '4x', '8x'], 'none'),
            V = e.inSwitch(
                'Texture Filter',
                ['Linear', 'Nearest', 'Mip Map'],
                'Linear'
            ),
            X = e.inSwitch('Anisotropic', [0, 1, 2, 4, 8, 16], '0');
        D.setUiAttribs({ greyout: !0, hidePort: !0 }),
            V.setUiAttribs({ greyout: !0, hidePort: !0 }),
            X.setUiAttribs({ greyout: !0, hidePort: !0 }),
            e.setPortGroup('Advanced Options', [B, D, V, X]);
        let j = !1;
        B.setUiAttribs({ hidePort: !0 }),
            (B.onChange = function() {
                D.setUiAttribs({ greyout: !B.get() }),
                    V.setUiAttribs({ greyout: !B.get() }),
                    X.setUiAttribs({ greyout: !B.get() });
            });
        const k = e.outTrigger('Trigger Out'),
            H = e.outTexture('Shadow Map'),
            z = e.outNumber('World Position X'),
            Y = e.outNumber('World Position Y'),
            W = e.outNumber('World Position Z'),
            Z = new CGL.Light(t, {
                type: 'spot',
                position: [0, 1, 2].map(function(e) {
                    return c[e].get();
                }),
                color: [0, 1, 2].map(function(e) {
                    return _[e].get();
                }),
                specular: [0, 1, 2].map(function(e) {
                    return E[e].get();
                }),
                conePointAt: [0, 1, 2].map(function(e) {
                    return d[e].get();
                }),
                intensity: i.get(),
                radius: r.get(),
                falloff: M.get(),
                cosConeAngleInner: Math.cos(CGL.DEG2RAD * A.get()),
                cosConeAngle: Math.cos(CGL.DEG2RAD * T.get()),
                spotExponent: C.get(),
                castShadow: !1,
                shadowStrength: I.get(),
                shadowBias: w.get(),
                normalOffset: N.get(),
            });
        Z.castLight = a.get();
        let q = !1;
        (f.onChange = m.onChange = p.onChange = v.onChange = x.onChange = b.onChange = u.onChange = h.onChange = g.onChange = o.onChange = s.onChange =
            l.onChange),
            (a.onChange = i.onChange = r.onChange = M.onChange = T.onChange = A.onChange = C.onChange = I.onChange = y.onChange = F.onChange = function() {
                q = !0;
            }),
            (P.onChange = function() {
                j = !0;
                const e = P.get();
                R.setUiAttribs({ greyout: !e }),
                    O.setUiAttribs({ greyout: !e }),
                    I.setUiAttribs({ greyout: !e }),
                    y.setUiAttribs({ greyout: !e }),
                    F.setUiAttribs({ greyout: !e }),
                    N.setUiAttribs({ greyout: !e }),
                    G.setUiAttribs({ greyout: !e }),
                    w.setUiAttribs({ greyout: !e }),
                    U.setUiAttribs({ greyout: !e }),
                    (q = !0);
            });
        let K = 1 / Number(R.get());
        function Q() {
            const e = Number(R.get());
            (K = 1 / e),
                P.get() &&
                    (Z.createFramebuffer(Number(R.get()), Number(R.get()), {}),
                    Z.createShadowMapShader(),
                    Z.createBlurEffect({}),
                    Z.createBlurShader(),
                    Z.updateProjectionMatrix(null, y.get(), F.get(), T.get())),
                B.get() &&
                    (function() {
                        const e = Number(D.get().charAt(0));
                        let t = null;
                        const n = Number(X.get());
                        'Linear' == V.get()
                            ? (t = CGL.Texture.FILTER_LINEAR)
                            : 'Nearest' == V.get()
                            ? (t = CGL.Texture.FILTER_NEAREST)
                            : 'Mip Map' == V.get() &&
                              (t = CGL.Texture.FILTER_MIPMAP);
                        const a = Number(R.get()),
                            i = { isFloatingPointTexture: !0, filter: t };
                        e &&
                            Object.assign(i, {
                                multisampling: !0,
                                multisamplingSamples: e,
                            }),
                            Object.assign(i, { anisotropic: n }),
                            Z.createFramebuffer(a, a, i),
                            Z.createBlurEffect(i);
                    })(),
                (j = !1);
        }
        D.onChange = X.onChange = V.onChange = R.onChange = function() {
            j = !0;
        };
        const $ = vec3.create(),
            J = vec3.create(),
            ee = vec3.create(),
            te = vec3.create();
        let ne = !1;
        n.onTriggered = function() {
            if (j) {
                if (t.frameStore.shadowPass) return;
                Q();
            }
            if (
                (t.frameStore.shadowPass ||
                    (Z.isUsed || ne
                        ? (!Z.isUsed && ne) ||
                          (Z.isUsed && ne
                              ? (e.setUiError('lightUsed', null), (ne = !1))
                              : Z.isUsed)
                        : (e.setUiError(
                              'lightUsed',
                              'No operator is using this light. Make sure this op is positioned before an operator that uses lights. Also make sure there is an operator that uses lights after this.',
                              1
                          ),
                          (ne = !0)),
                    (Z.isUsed = !1)),
                q &&
                    ((Z.position = [0, 1, 2].map(function(e) {
                        return c[e].get();
                    })),
                    (Z.color = [0, 1, 2].map(function(e) {
                        return _[e].get();
                    })),
                    (Z.specular = [0, 1, 2].map(function(e) {
                        return E[e].get();
                    })),
                    (Z.conePointAt = [0, 1, 2].map(function(e) {
                        return d[e].get();
                    })),
                    (Z.intensity = i.get()),
                    (Z.castLight = a.get()),
                    (Z.radius = r.get()),
                    (Z.falloff = M.get()),
                    (Z.cosConeAngleInner = Math.cos(CGL.DEG2RAD * A.get())),
                    (Z.cosConeAngle = Math.cos(CGL.DEG2RAD * T.get())),
                    (Z.spotExponent = C.get()),
                    (Z.castShadow = P.get()),
                    Z.updateProjectionMatrix(null, y.get(), F.get(), T.get())),
                t.frameStore.lightStack || (t.frameStore.lightStack = []),
                vec3.set($, o.get(), s.get(), l.get()),
                vec3.set(J, u.get(), h.get(), g.get()),
                vec3.transformMat4(ee, $, t.mMatrix),
                vec3.transformMat4(te, J, t.mMatrix),
                (Z.position = ee),
                (Z.conePointAt = te),
                z.set(Z.position[0]),
                Y.set(Z.position[1]),
                W.set(Z.position[2]),
                t.frameStore.shadowPass ||
                    t.frameStore.shadowPass ||
                    (t.shouldDrawHelpers(e) &&
                        (gui.setTransformGizmo({ posX: o, posY: s, posZ: l }),
                        CABLES.GL_MARKER.drawLineSourceDest({
                            op: e,
                            sourceX: Z.position[0],
                            sourceY: Z.position[1],
                            sourceZ: Z.position[2],
                            destX: Z.conePointAt[0],
                            destY: Z.conePointAt[1],
                            destZ: Z.conePointAt[2],
                        }))),
                t.frameStore.lightStack.push(Z),
                P.get())
            ) {
                const e = 1.5 * G.get() * K;
                O.get() &&
                    Z.renderPasses(U.get(), e, function() {
                        k.trigger();
                    }),
                    H.set(null),
                    H.set(Z.getShadowMapDepth()),
                    t.frameStore.lightStack.pop(),
                    (Z.castShadow = P.get()),
                    (Z.blurAmount = G.get()),
                    (Z.normalOffset = N.get()),
                    (Z.shadowBias = w.get()),
                    (Z.shadowStrength = I.get()),
                    t.frameStore.lightStack.push(Z);
            }
            k.trigger(), t.frameStore.lightStack.pop();
        };
    }),
    (Ops.Gl.Phong.SpotLight_v5.prototype = new CABLES.Op()),
    (CABLES.OPS['76418c17-abd5-401b-82e2-688db6f966ee'] = {
        f: Ops.Gl.Phong.SpotLight_v5,
        objName: 'Ops.Gl.Phong.SpotLight_v5',
    }),
    (Ops.Gl.Texture = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inFile('file', 'image'),
            n = e.inSwitch('filter', ['nearest', 'linear', 'mipmap']),
            a = e.inValueSelect(
                'wrap',
                ['repeat', 'mirrored repeat', 'clamp to edge'],
                'clamp to edge'
            ),
            i = e.inValueBool('flip', !1),
            r = e.inValueBool('unpackPreMultipliedAlpha', !1),
            o = e.inSwitch('Anisotropic', [0, 1, 2, 4, 8, 16], 0),
            s = e.outTexture('texture'),
            l = e.outValue('width'),
            c = e.outValue('height'),
            u = e.outValue('loading'),
            h = e.outValue('Aspect Ratio');
        e.setPortGroup('Size', [l, c]),
            r.hidePort(),
            e.toWorkPortsNeedToBeLinked(s);
        const g = e.patch.cgl;
        let d = 0,
            f = 0,
            m = 0;
        (t.onChange = i.onChange = function() {
            b();
        }),
            (o.onChange = n.onChange = function() {
                'nearest' == n.get()
                    ? (d = CGL.Texture.FILTER_NEAREST)
                    : 'linear' == n.get()
                    ? (d = CGL.Texture.FILTER_LINEAR)
                    : 'mipmap' == n.get()
                    ? (d = CGL.Texture.FILTER_MIPMAP)
                    : 'Anisotropic' == n.get() &&
                      (d = CGL.Texture.FILTER_ANISOTROPIC);
                (m = parseFloat(o.get())), b();
            }),
            (a.onChange = function() {
                'repeat' == a.get() && (f = CGL.Texture.WRAP_REPEAT);
                'mirrored repeat' == a.get() &&
                    (f = CGL.Texture.WRAP_MIRRORED_REPEAT);
                'clamp to edge' == a.get() &&
                    (f = CGL.Texture.WRAP_CLAMP_TO_EDGE);
                b();
            }),
            (r.onChange = function() {
                b();
            });
        let p = 0;
        n.set('mipmap'), a.set('repeat'), s.set(CGL.Texture.getEmptyTexture(g));
        const _ = function() {
            const e = CGL.Texture.getTempTexture(g);
            s.set(e);
        };
        let v = null,
            x = null;
        function b(e) {
            clearTimeout(p),
                (p = setTimeout(function() {
                    E(e);
                }, 30));
        }
        function E(n) {
            v || (v = g.patch.loading.start('textureOp', t.get()));
            let a = e.patch.getFilePath(String(t.get()));
            n && (a += '?rnd=' + CABLES.generateUUID()),
                t.get() && t.get().length > 1
                    ? (u.set(!0),
                      x && x.delete(),
                      (x = CGL.Texture.load(
                          g,
                          a,
                          function(n) {
                              if (n)
                                  return (
                                      _(),
                                      e.setUiError(
                                          'errorload',
                                          'could not load texture "' +
                                              t.get() +
                                              '"',
                                          2
                                      ),
                                      void g.patch.loading.finished(v)
                                  );
                              e.setUiError('errorload', null),
                                  s.set(x),
                                  l.set(x.width),
                                  c.set(x.height),
                                  h.set(x.width / x.height),
                                  x.isPowerOfTwo()
                                      ? e.setUiError('hintnpot', null)
                                      : e.setUiError(
                                            'hintnpot',
                                            'texture dimensions not power of two! - texture filtering will not work.',
                                            0
                                        ),
                                  s.set(null),
                                  s.set(x);
                          },
                          {
                              anisotropic: m,
                              wrap: f,
                              flip: i.get(),
                              unpackAlpha: r.get(),
                              filter: d,
                          }
                      )),
                      s.set(null),
                      s.set(x),
                      s.get(),
                      g.patch.loading.finished(v))
                    : (g.patch.loading.finished(v), _());
        }
        e.onFileChanged = function(e) {
            t.get() &&
                t.get().indexOf(e) > -1 &&
                (s.set(null), s.set(CGL.Texture.getTempTexture(g)), E(!0));
        };
    }),
    (Ops.Gl.Texture.prototype = new CABLES.Op()),
    (CABLES.OPS['466394d4-6c1a-4e5d-a057-0063ab0f096a'] = {
        f: Ops.Gl.Texture,
        objName: 'Ops.Gl.Texture',
    }),
    (Ops.Gl.Orthogonal_v2 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inTrigger('render'),
            n = e.inValue('bounds', 2),
            a = e.inSwitch('Axis', ['X', 'Y'], 'X'),
            i = e.inValue('frustum near', 0.01),
            r = e.inValue('frustum far', 100),
            o = e.outTrigger('trigger'),
            s = e.outValue('Ratio'),
            l = e.outValue('Width'),
            c = e.outValue('Height'),
            u = e.patch.cgl;
        t.onTriggered = function() {
            const e = u.getViewPort();
            if ('X' == a.get()) {
                const t = e[3] / e[2];
                u.pushPMatrix(),
                    mat4.ortho(
                        u.pMatrix,
                        -n.get(),
                        n.get(),
                        -n.get() * t,
                        n.get() * t,
                        parseFloat(i.get()),
                        parseFloat(r.get())
                    ),
                    l.set(2 * n.get()),
                    c.set(n.get() * t * 2),
                    s.set(t);
            } else {
                const t = e[2] / e[3];
                u.pushPMatrix(),
                    mat4.ortho(
                        u.pMatrix,
                        -n.get() * t,
                        n.get() * t,
                        -n.get(),
                        n.get(),
                        parseFloat(i.get()),
                        parseFloat(r.get())
                    ),
                    l.set(n.get() * t * 2),
                    c.set(2 * n.get()),
                    s.set(t);
            }
            o.trigger(), u.popPMatrix();
        };
    }),
    (Ops.Gl.Orthogonal_v2.prototype = new CABLES.Op()),
    (CABLES.OPS['b9235490-eaf2-4960-b1be-4279a4051ec6'] = {
        f: Ops.Gl.Orthogonal_v2,
        objName: 'Ops.Gl.Orthogonal_v2',
    }),
    (Ops.Gl.Render2Texture = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.patch.cgl,
            n = e.inTrigger('render'),
            a = e.inValueBool('use viewport size', !0),
            i = e.inValueInt('texture width', 512),
            r = e.inValueInt('texture height', 512),
            o = e.inBool('Auto Aspect', !1),
            s = e.inSwitch('filter', ['nearest', 'linear', 'mipmap'], 'linear'),
            l = e.inSwitch('Wrap', ['Clamp', 'Repeat', 'Mirror'], 'Repeat'),
            c = e.inSwitch('MSAA', ['none', '2x', '4x', '8x'], 'none'),
            u = e.outTrigger('trigger'),
            h = e.outTexture('texture'),
            g = e.outTexture('textureDepth'),
            d = e.inValueBool('HDR'),
            f = e.inValueBool('Depth', !0),
            m = e.inValueBool('Clear', !0);
        let p = null,
            _ = !0;
        function v() {
            i.setUiAttribs({ greyout: a.get() }),
                r.setUiAttribs({ greyout: a.get() }),
                o.setUiAttribs({ greyout: a.get() });
        }
        function x() {
            if (!p || _) {
                p && p.delete();
                let n = CGL.Texture.WRAP_REPEAT;
                if (
                    ('Clamp' == l.get()
                        ? (n = CGL.Texture.WRAP_CLAMP_TO_EDGE)
                        : 'Mirror' == l.get() &&
                          (n = CGL.Texture.WRAP_MIRRORED_REPEAT),
                    d.get() && 'mipmap' == s.get()
                        ? e.setUiError(
                              'fpmipmap',
                              "Don't use mipmap and HDR at the same time, many systems do not support this."
                          )
                        : e.setUiError('fpmipmap', null),
                    t.glVersion >= 2)
                ) {
                    let a = !0,
                        i = 4;
                    'none' == c.get() && ((i = 0), (a = !1)),
                        '2x' == c.get() && (i = 2),
                        '4x' == c.get() && (i = 4),
                        '8x' == c.get() && (i = 8),
                        (p = new CGL.Framebuffer2(t, 8, 8, {
                            name: 'render2texture ' + e.id,
                            isFloatingPointTexture: d.get(),
                            multisampling: a,
                            wrap: n,
                            depth: f.get(),
                            multisamplingSamples: i,
                            clear: m.get(),
                        }));
                } else
                    p = new CGL.Framebuffer(t, 8, 8, {
                        isFloatingPointTexture: d.get(),
                    });
                'nearest' == s.get()
                    ? p.setFilter(CGL.Texture.FILTER_NEAREST)
                    : 'linear' == s.get()
                    ? p.setFilter(CGL.Texture.FILTER_LINEAR)
                    : 'mipmap' == s.get() &&
                      p.setFilter(CGL.Texture.FILTER_MIPMAP),
                    g.set(p.getTextureDepth()),
                    (_ = !1);
            }
            a.val && (i.set(t.getViewPort()[2]), r.set(t.getViewPort()[3])),
                (p.getWidth() == Math.ceil(i.get()) &&
                    p.getHeight() == Math.ceil(r.get())) ||
                    p.setSize(
                        Math.max(1, Math.ceil(i.get())),
                        Math.max(1, Math.ceil(r.get()))
                    ),
                p.renderStart(t),
                o.get() &&
                    mat4.perspective(
                        t.pMatrix,
                        45,
                        i.get() / r.get(),
                        0.1,
                        1e3
                    ),
                u.trigger(),
                p.renderEnd(t),
                t.resetViewPort(),
                h.set(CGL.Texture.getEmptyTexture(e.patch.cgl)),
                h.set(p.getTextureColor());
        }
        h.set(CGL.Texture.getEmptyTexture(t)),
            e.setPortGroup('Size', [a, i, r, o]),
            (a.onChange = v),
            (d.onChange = f.onChange = m.onChange = s.onChange = l.onChange = c.onChange = function() {
                _ = !0;
            }),
            (n.onTriggered = x),
            (e.preRender = x),
            v();
    }),
    (Ops.Gl.Render2Texture.prototype = new CABLES.Op()),
    (CABLES.OPS['d01fa820-396c-4cb5-9d78-6b14762852af'] = {
        f: Ops.Gl.Render2Texture,
        objName: 'Ops.Gl.Render2Texture',
    }),
    (Ops.Gl.TextureEffects.ImageCompose_v2 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t = e.inTrigger('Render'),
            n = e.inBool('Use viewport size', !0),
            a = e.inValueInt('Width', 640),
            i = e.inValueInt('Height', 480),
            r = e.inSwitch('Filter', ['nearest', 'linear', 'mipmap'], 'linear'),
            o = e.inValueSelect(
                'Wrap',
                ['clamp to edge', 'repeat', 'mirrored repeat'],
                'repeat'
            ),
            s = e.inValueBool('HDR'),
            l = e.inValueBool('Transparent', !1),
            c = e.outTrigger('Next'),
            u = e.outTexture('texture_out'),
            h = e.outValue('Aspect Ratio'),
            g = e.patch.cgl;
        e.setPortGroup('Texture Size', [n, a, i]),
            e.setPortGroup('Texture Settings', [o, r, s, l]),
            u.set(CGL.Texture.getEmptyTexture(g));
        let d = null,
            f = null,
            m = 8,
            p = 8;
        const _ = [0, 0, 0, 0];
        let v = !0;
        const x = new CGL.Shader(g, 'imgcompose bg');
        x.setSource(
            x.getDefaultVertexShader(),
            'UNI float a;\nvoid main()\n{\n   outColor= vec4(0.0,0.0,0.0,a);\n}\n'
        );
        const b = new CGL.Uniform(x, 'f', 'a', !l.get());
        let E = CGL.Texture.FILTER_LINEAR,
            T = CGL.Texture.WRAP_CLAMP_TO_EDGE;
        function A() {
            d && d.delete(),
                f && f.delete(),
                s.get() && 'mipmap' == r.get()
                    ? e.setUiError(
                          'fpmipmap',
                          "Don't use mipmap and HDR at the same time, many systems do not support this."
                      )
                    : e.setUiError('fpmipmap', null),
                (d = new CGL.TextureEffect(g, {
                    isFloatingPointTexture: s.get(),
                })),
                (f = new CGL.Texture(g, {
                    name: 'image_compose_v2' + e.id,
                    isFloatingPointTexture: s.get(),
                    filter: E,
                    wrap: T,
                    width: Math.ceil(a.get()),
                    height: Math.ceil(i.get()),
                })),
                d.setSourceTexture(f),
                u.set(CGL.Texture.getEmptyTexture(g)),
                (v = !1);
        }
        function C() {
            a.setUiAttribs({ greyout: n.get() }),
                i.setUiAttribs({ greyout: n.get() });
        }
        function S() {
            (d && !v) || A();
            const t = g.getViewPort();
            (_[0] = t[0]),
                (_[1] = t[1]),
                (_[2] = t[2]),
                (_[3] = t[3]),
                g.pushBlend(!1),
                d || A(),
                n.get()
                    ? ((m = g.getViewPort()[2]), (p = g.getViewPort()[3]))
                    : ((m = Math.ceil(a.get())), (p = Math.ceil(i.get()))),
                (m == f.width && p == f.height) ||
                    0 === m ||
                    0 === p ||
                    (i.set(p),
                    a.set(m),
                    f.setSize(m, p),
                    h.set(m / p),
                    d.setSourceTexture(f),
                    u.set(CGL.Texture.getEmptyTexture(g)),
                    u.set(f)),
                u.get() && E != CGL.Texture.FILTER_NEAREST
                    ? u.get().isPowerOfTwo()
                        ? e.setUiError('hintnpot', null, 0)
                        : e.setUiError(
                              'hintnpot',
                              'texture dimensions not power of two! - texture filtering when scaling will not work on ios devices.',
                              0
                          )
                    : e.setUiError('hintnpot', null, 0),
                (g.currentTextureEffect = d),
                d.setSourceTexture(f),
                d.startEffect(),
                g.pushShader(x),
                g.currentTextureEffect.bind(),
                g.setTexture(
                    0,
                    g.currentTextureEffect.getCurrentSourceTexture().tex
                ),
                g.currentTextureEffect.finish(),
                g.popShader(),
                c.trigger(),
                u.set(d.getCurrentSourceTexture()),
                d.endEffect(),
                g.setViewPort(_[0], _[1], _[2], _[3]),
                g.popBlend(!1),
                (g.currentTextureEffect = null);
        }
        function M() {
            'repeat' == o.get() && (T = CGL.Texture.WRAP_REPEAT),
                'mirrored repeat' == o.get() &&
                    (T = CGL.Texture.WRAP_MIRRORED_REPEAT),
                'clamp to edge' == o.get() &&
                    (T = CGL.Texture.WRAP_CLAMP_TO_EDGE),
                (v = !0);
        }
        function L() {
            'nearest' == r.get() && (E = CGL.Texture.FILTER_NEAREST),
                'linear' == r.get() && (E = CGL.Texture.FILTER_LINEAR),
                'mipmap' == r.get() && (E = CGL.Texture.FILTER_MIPMAP),
                (v = !0);
        }
        (o.onChange = M),
            (r.onChange = L),
            (t.onTriggered = e.preRender = S),
            L(),
            M(),
            C(),
            (l.onChange = () => {
                b.setValue(!l.get());
            }),
            (s.onChange = function() {
                v = !0;
            }),
            (n.onChange = function() {
                C();
            }),
            (e.preRender = function() {
                S(), x.bind();
            });
    }),
    (Ops.Gl.TextureEffects.ImageCompose_v2.prototype = new CABLES.Op()),
    (CABLES.OPS['a5b43d4c-a9ea-4eaf-9ed0-f257d222659d'] = {
        f: Ops.Gl.TextureEffects.ImageCompose_v2,
        objName: 'Ops.Gl.TextureEffects.ImageCompose_v2',
    }),
    (Ops.Gl.TextureEffects.DrawImage_v3 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t =
                '#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n    UNI sampler2D tex;\n    UNI sampler2D image;\n#endif\n\nIN mat3 transform;\nUNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\n#ifdef ASPECT_RATIO\n    UNI float aspectTex;\n    UNI float aspectPos;\n#endif\n\nvoid main()\n{\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n    #ifdef HAS_TEXTURES\n        vec2 tc=texCoord;\n\n        #ifdef TEX_FLIP_X\n            tc.x=1.0-tc.x;\n        #endif\n        #ifdef TEX_FLIP_Y\n            tc.y=1.0-tc.y;\n        #endif\n\n        #ifdef ASPECT_RATIO\n            #ifdef ASPECT_AXIS_X\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\n            #endif\n            #ifdef ASPECT_AXIS_Y\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\n            #endif\n        #endif\n\n        #ifdef TEX_TRANSFORM\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\n            tc=(transform * coordinates ).xy;\n        #endif\n\n        blendRGBA=texture(image,tc);\n\n        vec3 blend=blendRGBA.rgb;\n        vec4 baseRGBA=texture(tex,texCoord);\n        vec3 base=baseRGBA.rgb;\n        vec3 colNew=_blend(base,blend);\n\n        #ifdef REMOVE_ALPHA_SRC\n            blendRGBA.a=1.0;\n        #endif\n\n        #ifdef HAS_TEXTUREALPHA\n            vec4 colImgAlpha=texture(imageAlpha,tc);\n            float colImgAlphaAlpha=colImgAlpha.a;\n\n            #ifdef ALPHA_FROM_LUMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef ALPHA_FROM_INV_UMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef INVERT_ALPHA\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\n            #endif\n\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n        #endif\n    #endif\n\n    float am=amount;\n\n    #ifdef CLIP_REPEAT\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n        {\n            // colNew.rgb=vec3(0.0);\n            am=0.0;\n        }\n    #endif\n\n    #ifdef ASPECT_RATIO\n        #ifdef ASPECT_CROP\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n            {\n                colNew.rgb=base.rgb;\n                am=0.0;\n            }\n\n        #endif\n    #endif\n\n\n\n    // blendRGBA.rgb=mix( colNew, base ,1.0-am);\n\n    // blendRGBA.a=clamp((blendRGBA.a*am),0.,1.);\n\n    blendRGBA.rgb=mix( colNew, base ,1.0-(am*blendRGBA.a));\n    blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\n\n\n    outColor= blendRGBA;\n\n}\n\n',
            n =
                'IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nUNI float posX;\nUNI float posY;\nUNI float scaleX;\nUNI float scaleY;\nUNI float rotate;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nOUT mat3 transform;\n\nvoid main()\n{\n   texCoord=attrTexCoord;\n   norm=attrVertNormal;\n\n   #ifdef TEX_TRANSFORM\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n        float angle = radians( rotate );\n        vec2 scale= vec2(scaleX,scaleY);\n        vec2 translate= vec2(posX,posY);\n\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n   #endif\n\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}\n',
            a = e.inTrigger('render'),
            i = CGL.TextureEffect.AddBlendSelect(e, 'blendMode'),
            r = e.inValueSlider('amount', 1),
            o = e.inTexture('Image'),
            s = e.inValueBool('removeAlphaSrc', !1),
            l = e.inTexture('Mask'),
            c = e.inValueSelect(
                'Mask Src',
                ['alpha channel', 'luminance', 'luminance inv'],
                'luminance'
            ),
            u = e.inValueBool('Invert alpha channel'),
            h = e.inValueBool('Aspect Ratio', !1),
            g = e.inValueSelect('Stretch Axis', ['X', 'Y'], 'X'),
            d = e.inValueSlider('Position', 0),
            f = e.inValueBool('Crop', !1),
            m = e.outTrigger('trigger');
        i.set('normal');
        const p = e.patch.cgl,
            _ = new CGL.Shader(p, 'drawimage');
        function v() {
            l.isLinked()
                ? (s.setUiAttribs({ greyout: !0 }),
                  c.setUiAttribs({ greyout: !1 }),
                  u.setUiAttribs({ greyout: !1 }))
                : (s.setUiAttribs({ greyout: !1 }),
                  c.setUiAttribs({ greyout: !0 }),
                  u.setUiAttribs({ greyout: !0 }));
        }
        (l.onLinkChanged = v),
            e.setPortGroup('Mask', [l, c, u]),
            e.setPortGroup('Aspect Ratio', [h, d, f, g]),
            (s.onChange = E),
            e.toWorkPortsNeedToBeLinked(o),
            _.setSource(n, t);
        new CGL.Uniform(_, 't', 'tex', 0),
            new CGL.Uniform(_, 't', 'image', 1),
            new CGL.Uniform(_, 't', 'imageAlpha', 2);
        const x = new CGL.Uniform(_, 'f', 'aspectTex', 1);
        new CGL.Uniform(_, 'f', 'aspectPos', d);
        function b() {
            _.removeDefine('ASPECT_AXIS_X'),
                _.removeDefine('ASPECT_AXIS_Y'),
                h.get()
                    ? (_.define('ASPECT_RATIO'),
                      f.get()
                          ? _.define('ASPECT_CROP')
                          : _.removeDefine('ASPECT_CROP'),
                      'X' == g.get() && _.define('ASPECT_AXIS_X'),
                      'Y' == g.get() && _.define('ASPECT_AXIS_Y'),
                      d.setUiAttribs({ greyout: !1 }),
                      f.setUiAttribs({ greyout: !1 }),
                      g.setUiAttribs({ greyout: !1 }))
                    : (_.removeDefine('ASPECT_RATIO'),
                      f.get()
                          ? _.define('ASPECT_CROP')
                          : _.removeDefine('ASPECT_CROP'),
                      'X' == g.get() && _.define('ASPECT_AXIS_X'),
                      'Y' == g.get() && _.define('ASPECT_AXIS_Y'),
                      d.setUiAttribs({ greyout: !0 }),
                      f.setUiAttribs({ greyout: !0 }),
                      g.setUiAttribs({ greyout: !0 }));
        }
        function E() {
            s.get()
                ? _.define('REMOVE_ALPHA_SRC')
                : _.removeDefine('REMOVE_ALPHA_SRC');
        }
        (u.onChange = function() {
            u.get() ? _.define('INVERT_ALPHA') : _.removeDefine('INVERT_ALPHA');
        }),
            (h.onChange = b),
            (f.onChange = b),
            (g.onChange = b),
            (c.onChange = function() {
                _.toggleDefine('ALPHA_FROM_LUMINANCE', 'luminance' == c.get()),
                    _.toggleDefine(
                        'ALPHA_FROM_INV_UMINANCE',
                        'luminance_inv' == c.get()
                    );
            }),
            c.set('alpha channel');
        {
            const t = e.inValueBool('flip x'),
                n = e.inValueBool('flip y');
            (t.onChange = function() {
                t.get() ? _.define('TEX_FLIP_X') : _.removeDefine('TEX_FLIP_X');
            }),
                (n.onChange = function() {
                    n.get()
                        ? _.define('TEX_FLIP_Y')
                        : _.removeDefine('TEX_FLIP_Y');
                });
        }
        {
            var T = e.inValueBool('Transform'),
                A = e.inValueSlider('Scale X', 1),
                C = e.inValueSlider('Scale Y', 1),
                S = e.inValue('Position X', 0),
                M = e.inValue('Position Y', 0),
                L = e.inValue('Rotation', 0);
            const t = e.inValueBool('Clip Repeat', !1);
            t.onChange = function() {
                t.get()
                    ? _.define('CLIP_REPEAT')
                    : _.removeDefine('CLIP_REPEAT');
            };
            new CGL.Uniform(_, 'f', 'scaleX', A),
                new CGL.Uniform(_, 'f', 'scaleY', C),
                new CGL.Uniform(_, 'f', 'posX', S),
                new CGL.Uniform(_, 'f', 'posY', M),
                new CGL.Uniform(_, 'f', 'rotate', L);
            T.onChange = P;
        }
        function P() {
            _.toggleDefine('TEX_TRANSFORM', T.get()),
                T.get()
                    ? (A.setUiAttribs({ greyout: !1 }),
                      C.setUiAttribs({ greyout: !1 }),
                      S.setUiAttribs({ greyout: !1 }),
                      M.setUiAttribs({ greyout: !1 }),
                      L.setUiAttribs({ greyout: !1 }))
                    : (A.setUiAttribs({ greyout: !0 }),
                      C.setUiAttribs({ greyout: !0 }),
                      S.setUiAttribs({ greyout: !0 }),
                      M.setUiAttribs({ greyout: !0 }),
                      L.setUiAttribs({ greyout: !0 }));
        }
        CGL.TextureEffect.setupBlending(e, _, i, r);
        new CGL.Uniform(_, 'f', 'amount', r);
        (l.onChange = function() {
            l.get() && l.get().tex
                ? _.define('HAS_TEXTUREALPHA')
                : _.removeDefine('HAS_TEXTUREALPHA');
        }),
            (a.onTriggered = function() {
                if (!CGL.TextureEffect.checkOpInEffect(e)) return;
                const t = o.get();
                if (t && t.tex && r.get() > 0) {
                    p.pushShader(_), p.currentTextureEffect.bind();
                    const e = p.currentTextureEffect.getCurrentSourceTexture();
                    p.setTexture(0, e.tex),
                        x.setValue(
                            1 / (((t.height / t.width) * e.width) / e.height)
                        ),
                        p.setTexture(1, t.tex),
                        l.get() && l.get().tex && p.setTexture(2, l.get().tex),
                        p.pushBlendMode(CGL.BLEND_NONE, !0),
                        p.currentTextureEffect.finish(),
                        p.popBlendMode(),
                        p.popShader();
                }
                m.trigger();
            }),
            P(),
            E(),
            v(),
            b();
    }),
    (Ops.Gl.TextureEffects.DrawImage_v3.prototype = new CABLES.Op()),
    (CABLES.OPS['8f6b2f15-fcb0-4597-90c0-e5173f2969fe'] = {
        f: Ops.Gl.TextureEffects.DrawImage_v3,
        objName: 'Ops.Gl.TextureEffects.DrawImage_v3',
    }),
    (Ops.Gl.Meshes.FullscreenRectangle = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t =
                'UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n   outColor= texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\n}\n',
            n =
                '{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=attrTexCoord;\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n',
            a = e.inTrigger('render'),
            i = e.inValueBool('Center in Canvas'),
            r = e.inValueBool('Flip Y'),
            o = e.inValueBool('Flip X'),
            s = e.inTexture('Texture'),
            l = e.outTrigger('trigger'),
            c = e.patch.cgl;
        var u = null,
            h = new CGL.Geometry('fullscreen rectangle'),
            g = 0,
            d = 0;
        (i.onChange = b), (o.onChange = x), (r.onChange = x);
        const f = new CGL.Shader(c, 'fullscreenrectangle');
        f.setModules([
            'MODULE_VERTEX_POSITION',
            'MODULE_COLOR',
            'MODULE_BEGIN_FRAG',
        ]),
            f.setSource(n, t),
            (f.fullscreenRectUniform = new CGL.Uniform(f, 't', 'tex', 0));
        var m = !1,
            p = !0;
        function _() {
            var e = s.get();
            m = !!e;
        }
        function v() {
            if (
                ((c.getViewPort()[2] == g && c.getViewPort()[3] == d && u) ||
                    b(),
                p && _(),
                c.pushPMatrix(),
                mat4.identity(c.pMatrix),
                mat4.ortho(c.pMatrix, 0, g, d, 0, -10, 1e3),
                c.pushModelMatrix(),
                mat4.identity(c.mMatrix),
                c.pushViewMatrix(),
                mat4.identity(c.vMatrix),
                i.get())
            ) {
                var e = 0,
                    t = 0;
                g < c.canvasWidth && (e = (c.canvasWidth - g) / 2),
                    d < c.canvasHeight && (t = (c.canvasHeight - d) / 2),
                    c.setViewPort(e, t, g, d);
            }
            m
                ? (s.get() && c.setTexture(0, s.get().tex), u.render(f))
                : u.render(c.getShader()),
                c.gl.clear(c.gl.DEPTH_BUFFER_BIT),
                c.popPMatrix(),
                c.popModelMatrix(),
                c.popViewMatrix(),
                l.trigger();
        }
        function x() {
            u = null;
        }
        function b() {
            const e = c.getViewPort();
            if (e[2] != g || e[3] != d || !u) {
                (g = e[2]),
                    (d = e[3]),
                    (h.vertices = new Float32Array([
                        0 + g,
                        0 + d,
                        0,
                        0,
                        0 + d,
                        0,
                        0 + g,
                        0,
                        0,
                        0,
                        0,
                        0,
                    ]));
                var t = null;
                (t = r.get()
                    ? new Float32Array([1, 0, 0, 0, 1, 1, 0, 1])
                    : new Float32Array([1, 1, 0, 1, 1, 0, 0, 0])),
                    o.get() && ((t[0] = 0), (t[2] = 1), (t[4] = 0), (t[6] = 1)),
                    h.setTexCoords(t),
                    (h.verticesIndices = new Float32Array([2, 1, 0, 3, 1, 2])),
                    (h.vertexNormals = new Float32Array([
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                    ])),
                    (h.tangents = new Float32Array([
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                    ])),
                    h.biTangents,
                    new Float32Array([0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0]),
                    u ? u.setGeom(h) : (u = new CGL.Mesh(c, h));
            }
        }
        (a.onTriggered = v),
            e.toWorkPortsNeedToBeLinked(a),
            (s.onChange = function() {
                p = !0;
            }),
            (e.preRender = function() {
                _(), f.bind(), u && u.render(f), v();
            });
    }),
    (Ops.Gl.Meshes.FullscreenRectangle.prototype = new CABLES.Op()),
    (CABLES.OPS['255bd15b-cc91-4a12-9b4e-53c710cbb282'] = {
        f: Ops.Gl.Meshes.FullscreenRectangle,
        objName: 'Ops.Gl.Meshes.FullscreenRectangle',
    }),
    (Ops.Gl.TextureEffects.FXAA = function() {
        CABLES.Op.apply(this, arguments);
        const e = this;
        var t = e.inTrigger('render'),
            n = e.outTrigger('trigger'),
            a = e.inValueSelect('span', [0, 2, 4, 8, 16, 32, 64]),
            i = e.inValueFloat('reduceMin'),
            r = e.inValueFloat('reduceMul'),
            o = e.inValueBool('use viewport size', !0),
            s = e.inValueInt('width'),
            l = e.inValueInt('height'),
            c = e.patch.cgl,
            u = new CGL.Shader(c);
        u.setSource(
            u.getDefaultVertexShader(),
            'IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float FXAA_SPAN_MAX;\nUNI float FXAA_REDUCE_MUL;\nUNI float FXAA_REDUCE_MIN;\nUNI float width;\nUNI float height;\n\nvec4 getColorFXAA(vec2 coord)\n{\n    vec2 invtexsize=vec2(1.0/width,1.0/height);\n\n    float step=1.0;\n\n    vec3 rgbNW = texture(tex, coord.xy + (vec2(-step, -step)*invtexsize )).xyz;\n    vec3 rgbNE = texture(tex, coord.xy + (vec2(+step, -step)*invtexsize )).xyz;\n    vec3 rgbSW = texture(tex, coord.xy + (vec2(-step, +step)*invtexsize )).xyz;\n    vec3 rgbSE = texture(tex, coord.xy + (vec2(+step, +step)*invtexsize )).xyz;\n    vec3 rgbM  = texture(tex, coord.xy).xyz;\n\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot( rgbM, luma);\n\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);\n\n    dir = min(vec2(FXAA_SPAN_MAX,  FXAA_SPAN_MAX),\n          max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin))*invtexsize ;\n\n    vec3 rgbA = (1.0/2.0) * (\n                texture(tex, coord.xy + dir * (1.0/3.0 - 0.5)).xyz +\n                texture(tex, coord.xy + dir * (2.0/3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n                texture(tex, coord.xy + dir * (0.0/3.0 - 0.5)).xyz +\n                texture(tex, coord.xy + dir * (3.0/3.0 - 0.5)).xyz);\n    float lumaB = dot(rgbB, luma);\n\n    vec4 color=texture(tex,coord).rgba;\n\n    if((lumaB < lumaMin) || (lumaB > lumaMax)){\n      color.xyz=rgbA;\n    } else {\n      color.xyz=rgbB;\n    }\n    return color;\n}\n\nvoid main()\n{\n   vec4 col=vec4(1.0,0.0,0.0,1.0);\n   outColor= getColorFXAA(texCoord);\n}'
        );
        new CGL.Uniform(u, 't', 'tex', 0);
        t.onTriggered = function() {
            CGL.TextureEffect.checkOpInEffect(e) &&
                (c.pushShader(u),
                (c.getViewPort()[2] == s.get() &&
                    c.getViewPort()[3] == l.get()) ||
                    p(),
                c.currentTextureEffect.bind(),
                c.setTexture(
                    0,
                    c.currentTextureEffect.getCurrentSourceTexture().tex
                ),
                c.currentTextureEffect.finish(),
                c.popShader(),
                n.trigger());
        };
        var h = new CGL.Uniform(u, 'f', 'FXAA_SPAN_MAX', 0),
            g = new CGL.Uniform(u, 'f', 'FXAA_REDUCE_MUL', 0),
            d = new CGL.Uniform(u, 'f', 'FXAA_REDUCE_MIN', 0);
        a.onChange = function() {
            h.setValue(parseInt(a.get(), 10));
        };
        var f = new CGL.Uniform(u, 'f', 'width', 0),
            m = new CGL.Uniform(u, 'f', 'height', 0);
        function p() {
            if (o.get()) {
                var e = c.getViewPort()[2],
                    t = c.getViewPort()[3];
                f.setValue(e), m.setValue(t);
            } else f.setValue(s.get()), m.setValue(l.get());
        }
        (s.onChange = p),
            (l.onChange = p),
            (o.onChange = p),
            (e.onResize = p),
            a.set(8),
            (r.onChange = function() {
                g.setValue(1 / r.get());
            }),
            (i.onChange = function() {
                d.setValue(1 / i.get());
            }),
            r.set(8),
            i.set(128);
    }),
    (Ops.Gl.TextureEffects.FXAA.prototype = new CABLES.Op()),
    (CABLES.OPS['3e679c17-f050-4bc8-bfe5-5b9190e7ce40'] = {
        f: Ops.Gl.TextureEffects.FXAA,
        objName: 'Ops.Gl.TextureEffects.FXAA',
    }),
    (Ops.Gl.Shader.BasicMaterial_v3 = function() {
        CABLES.Op.apply(this, arguments);
        const e = this,
            t =
                '{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    outColor = col;\n}\n',
            n =
                'IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\n{{MODULES_HEAD}}\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n',
            a = e.inTrigger('render'),
            i = e.outTrigger('trigger'),
            r = e.outObject('shader', null, 'shader');
        (r.ignoreValueSerialize = !0), e.toWorkPortsNeedToBeLinked(a);
        const o = e.patch.cgl,
            s = new CGL.Shader(o, 'basicmaterialnew');
        s.setModules([
            'MODULE_VERTEX_POSITION',
            'MODULE_COLOR',
            'MODULE_BEGIN_FRAG',
        ]),
            s.setSource(n, t),
            r.set(s),
            (a.onTriggered = M);
        const l = e.inValueSlider('r', Math.random()),
            c = e.inValueSlider('g', Math.random()),
            u = e.inValueSlider('b', Math.random()),
            h = e.inValueSlider('a', 1);
        l.setUiAttribs({ colorPick: !0 }),
            s.addUniformFrag('4f', 'color', l, c, u, h);
        const g = e.inTexture('texture');
        let d = null;
        g.onChange = P;
        const f = e.inValueBool('colorizeTexture', !1),
            m = e.inTexture('textureOpacity');
        let p = null;
        const _ = e.inSwitch(
            'Alpha Mask Source',
            ['Luminance', 'R', 'G', 'B', 'A'],
            'Luminance'
        );
        _.setUiAttribs({ greyout: !0 }), (m.onChange = L);
        const v = e.inValueBool('Opacity TexCoords Transform', !1),
            x = e.inValueBool('Discard Transparent Pixels'),
            b = e.inValue('diffuseRepeatX', 1),
            E = e.inValue('diffuseRepeatY', 1),
            T = e.inValue('Tex Offset X', 0),
            A = e.inValue('Tex Offset Y', 0),
            C = e.inBool('Crop TexCoords', !1);
        s.addUniformFrag('f', 'diffuseRepeatX', b),
            s.addUniformFrag('f', 'diffuseRepeatY', E),
            s.addUniformFrag('f', 'texOffsetX', T),
            s.addUniformFrag('f', 'texOffsetY', A);
        const S = e.inValueBool('billboard', !1);
        function M() {
            s &&
                (o.pushShader(s),
                s.popTextures(),
                d && g.get() && s.pushTexture(d, g.get().tex),
                p && m.get() && s.pushTexture(p, m.get().tex),
                i.trigger(),
                o.popShader());
        }
        function L() {
            if (m.get()) {
                if (null !== p) return;
                s.removeUniform('texOpacity'),
                    s.define('HAS_TEXTURE_OPACITY'),
                    p || (p = new CGL.Uniform(s, 't', 'texOpacity')),
                    _.setUiAttribs({ greyout: !1 }),
                    v.setUiAttribs({ greyout: !1 });
            } else
                s.removeUniform('texOpacity'),
                    s.removeDefine('HAS_TEXTURE_OPACITY'),
                    (p = null),
                    _.setUiAttribs({ greyout: !0 }),
                    v.setUiAttribs({ greyout: !0 });
            O();
        }
        function P() {
            g.get()
                ? (s.hasDefine('HAS_TEXTURE_DIFFUSE') ||
                      s.define('HAS_TEXTURE_DIFFUSE'),
                  d || (d = new CGL.Uniform(s, 't', 'texDiffuse')),
                  b.setUiAttribs({ greyout: !1 }),
                  E.setUiAttribs({ greyout: !1 }),
                  T.setUiAttribs({ greyout: !1 }),
                  A.setUiAttribs({ greyout: !1 }),
                  f.setUiAttribs({ greyout: !1 }))
                : (s.removeUniform('texDiffuse'),
                  s.removeDefine('HAS_TEXTURE_DIFFUSE'),
                  (d = null),
                  b.setUiAttribs({ greyout: !0 }),
                  E.setUiAttribs({ greyout: !0 }),
                  T.setUiAttribs({ greyout: !0 }),
                  A.setUiAttribs({ greyout: !0 }),
                  f.setUiAttribs({ greyout: !0 }));
        }
        function O() {
            s.toggleDefine('CROP_TEXCOORDS', C.get()),
                s.toggleDefine('COLORIZE_TEXTURE', f.get()),
                s.toggleDefine('TRANSFORMALPHATEXCOORDS', v.get()),
                s.toggleDefine('DISCARDTRANS', x.get()),
                s.toggleDefine('BILLBOARD', S.get()),
                s.toggleDefine('ALPHA_MASK_ALPHA', 'A' == _.get()),
                s.toggleDefine('ALPHA_MASK_LUMI', 'Luminance' == _.get()),
                s.toggleDefine('ALPHA_MASK_R', 'R' == _.get()),
                s.toggleDefine('ALPHA_MASK_G', 'G' == _.get()),
                s.toggleDefine('ALPHA_MASK_B', 'B' == _.get());
        }
        (_.onChange = S.onChange = x.onChange = v.onChange = C.onChange = f.onChange = O),
            e.setPortGroup('Color', [l, c, u, h]),
            e.setPortGroup('Color Texture', [g, f]),
            e.setPortGroup('Opacity', [m, _, x, v]),
            e.setPortGroup('Texture Transform', [b, E, T, A, C]),
            L(),
            P(),
            (e.preRender = function() {
                s.bind(), M();
            });
    }),
    (Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op()),
    (CABLES.OPS['ec55d252-3843-41b1-b731-0482dbd9e72b'] = {
        f: Ops.Gl.Shader.BasicMaterial_v3,
        objName: 'Ops.Gl.Shader.BasicMaterial_v3',
    }),
    window.addEventListener('load', function(e) {
        (CABLES.jsLoaded = new Event('CABLES.jsLoaded')),
            document.dispatchEvent(CABLES.jsLoaded);
    }),
    (this.CGL = this.CGL || {}),
    (this.CGL.COREMODULES = this.CGL.COREMODULES || {}),
    (this.CGL.COREMODULES.Cubemap = (function(e) {
        var t = {};
        function n(a) {
            if (t[a]) return t[a].exports;
            var i = (t[a] = { i: a, l: !1, exports: {} });
            return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, a) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: a });
            }),
            (n.r = function(e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var a = Object.create(null);
                if (
                    (n.r(a),
                    Object.defineProperty(a, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var i in e)
                        n.d(
                            a,
                            i,
                            function(t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return a;
            }),
            (n.n = function(e) {
                var t =
                    e && e.__esModule
                        ? function() {
                              return e.default;
                          }
                        : function() {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 0))
        );
    })([
        function(e, t, n) {
            'use strict';
            n.r(t);
            class a {
                constructor(e, t) {
                    t || (t = { width: 8, height: 8 }),
                        (this._cgl = e),
                        (this._cubemapFaces = [
                            this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
                            this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
                            this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
                            this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                            this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
                            this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                        ]),
                        (this.tex = this._cgl.gl.createTexture()),
                        (this.cubemap = this.tex),
                        (this.id = CABLES.uuid()),
                        (this.texTarget = this._cgl.gl.TEXTURE_CUBE_MAP),
                        (this.anisotropic = 0),
                        (this.filter = t.filter || CGL.Texture.FILTER_NEAREST),
                        (this.wrap = t.wrap || CGL.Texture.WRAP_CLAMP_TO_EDGE),
                        (this.unpackAlpha = t.unpackAlpha || !0),
                        (this.flip = t.flip || !0),
                        (this.flipped = !1),
                        (this._fromData = !0),
                        (this.name = 'cubemap unknown'),
                        CGL.profileData.profileTextureNew++,
                        this.setSize(t.width, t.height);
                }
                setSize(e, t) {
                    if (
                        ((e != e || e <= 0 || !e) && (e = 8),
                        (t != t || t <= 0 || !t) && (t = 8),
                        (e > this._cgl.maxTexSize ||
                            t > this._cgl.maxTexSize) &&
                            console.error(
                                'texture size too big! ' +
                                    e +
                                    'x' +
                                    t +
                                    ' / max: ' +
                                    this._cgl.maxTexSize
                            ),
                        (e = Math.min(e, this._cgl.maxTexSize)),
                        (t = Math.min(t, this._cgl.maxTexSize)),
                        (e = Math.floor(e)),
                        (t = Math.floor(t)),
                        this.width != e || this.height != t)
                    ) {
                        (this.width = e),
                            (this.height = t),
                            this._cgl.gl.bindTexture(this.texTarget, this.tex),
                            CGL.profileData.profileTextureResize++,
                            this.textureType != CGL.Texture.TYPE_FLOAT ||
                                this.filter != CGL.Texture.FILTER_LINEAR ||
                                this._cgl.gl.getExtension(
                                    'OES_texture_float_linear'
                                ) ||
                                (console.warn(
                                    'this graphics card does not support floating point texture linear interpolation!'
                                ),
                                (this.filter = CGL.Texture.FILTER_NEAREST)),
                            this._setFilter();
                        for (let e = 0; e < 6; e++)
                            if (1 == this._cgl.glVersion)
                                if (this._cgl.glUseHalfFloatTex) {
                                    const t = this._cgl.gl.getExtension(
                                        'OES_texture_half_float'
                                    );
                                    if (1 == this._cgl.glVersion && !t)
                                        throw new Error(
                                            'no half float texture extension'
                                        );
                                    this._cgl.gl.texImage2D(
                                        this._cubemapFaces[e],
                                        0,
                                        this._cgl.gl.RGBA,
                                        this.width,
                                        this.height,
                                        0,
                                        this._cgl.gl.RGBA,
                                        t.HALF_FLOAT_OES,
                                        null
                                    );
                                } else
                                    this._cgl.gl.getExtension(
                                        'OES_texture_float'
                                    ),
                                        this._cgl.gl.texImage2D(
                                            this._cubemapFaces[e],
                                            0,
                                            this._cgl.gl.RGBA,
                                            this.width,
                                            this.height,
                                            0,
                                            this._cgl.gl.RGBA,
                                            this._cgl.gl.FLOAT,
                                            null
                                        );
                            else
                                this._cgl.gl.texImage2D(
                                    this._cubemapFaces[e],
                                    0,
                                    this._cgl.gl.RGBA,
                                    this.width,
                                    this.height,
                                    0,
                                    this._cgl.gl.RGBA,
                                    this._cgl.gl.UNSIGNED_BYTE,
                                    null
                                );
                        this._cgl.gl.bindTexture(
                            this._cgl.gl.TEXTURE_CUBE_MAP,
                            null
                        );
                    }
                }
                _setFilter() {
                    if (
                        (this._fromData ||
                            this._cgl.gl.pixelStorei(
                                this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                                this.unpackAlpha
                            ),
                        this.textureType == CGL.Texture.TYPE_FLOAT &&
                            this.filter == CGL.Texture.FILTER_MIPMAP &&
                            (console.log(
                                'texture: HDR and mipmap filtering at the same time is not possible'
                            ),
                            (this.filter = CGL.Texture.FILTER_LINEAR)),
                        1 != this._cgl.glVersion || this.isPowerOfTwo())
                    )
                        if (
                            (this.wrap == CGL.Texture.WRAP_CLAMP_TO_EDGE
                                ? (this._cgl.gl.texParameteri(
                                      this.texTarget,
                                      this._cgl.gl.TEXTURE_WRAP_S,
                                      this._cgl.gl.CLAMP_TO_EDGE
                                  ),
                                  this._cgl.gl.texParameteri(
                                      this.texTarget,
                                      this._cgl.gl.TEXTURE_WRAP_T,
                                      this._cgl.gl.CLAMP_TO_EDGE
                                  ))
                                : this.wrap == CGL.Texture.WRAP_REPEAT
                                ? (this._cgl.gl.texParameteri(
                                      this.texTarget,
                                      this._cgl.gl.TEXTURE_WRAP_S,
                                      this._cgl.gl.REPEAT
                                  ),
                                  this._cgl.gl.texParameteri(
                                      this.texTarget,
                                      this._cgl.gl.TEXTURE_WRAP_T,
                                      this._cgl.gl.REPEAT
                                  ))
                                : this.wrap ==
                                      CGL.Texture.WRAP_MIRRORED_REPEAT &&
                                  (this._cgl.gl.texParameteri(
                                      this.texTarget,
                                      this._cgl.gl.TEXTURE_WRAP_S,
                                      this._cgl.gl.MIRRORED_REPEAT
                                  ),
                                  this._cgl.gl.texParameteri(
                                      this.texTarget,
                                      this._cgl.gl.TEXTURE_WRAP_T,
                                      this._cgl.gl.MIRRORED_REPEAT
                                  )),
                            this.filter == CGL.Texture.FILTER_NEAREST)
                        )
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MAG_FILTER,
                                this._cgl.gl.NEAREST
                            ),
                                this._cgl.gl.texParameteri(
                                    this.texTarget,
                                    this._cgl.gl.TEXTURE_MIN_FILTER,
                                    this._cgl.gl.NEAREST
                                );
                        else if (this.filter == CGL.Texture.FILTER_LINEAR)
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MIN_FILTER,
                                this._cgl.gl.LINEAR
                            ),
                                this._cgl.gl.texParameteri(
                                    this.texTarget,
                                    this._cgl.gl.TEXTURE_MAG_FILTER,
                                    this._cgl.gl.LINEAR
                                );
                        else {
                            if (this.filter != CGL.Texture.FILTER_MIPMAP)
                                throw (console.log(
                                    'unknown texture filter!',
                                    this.filter
                                ),
                                new Error(
                                    'unknown texture filter!' + this.filter
                                ));
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MAG_FILTER,
                                this._cgl.gl.LINEAR
                            ),
                                this._cgl.gl.texParameteri(
                                    this.texTarget,
                                    this._cgl.gl.TEXTURE_MIN_FILTER,
                                    this._cgl.gl.LINEAR_MIPMAP_LINEAR
                                );
                        }
                    else
                        this._cgl.gl.texParameteri(
                            this.texTarget,
                            this._cgl.gl.TEXTURE_MAG_FILTER,
                            this._cgl.gl.NEAREST
                        ),
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_MIN_FILTER,
                                this._cgl.gl.NEAREST
                            ),
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_WRAP_S,
                                this._cgl.gl.CLAMP_TO_EDGE
                            ),
                            this._cgl.gl.texParameteri(
                                this.texTarget,
                                this._cgl.gl.TEXTURE_WRAP_T,
                                this._cgl.gl.CLAMP_TO_EDGE
                            ),
                            (this.filter = CGL.Texture.FILTER_NEAREST),
                            (this.wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE);
                }
                isPowerOfTwo(e) {
                    return (
                        1 == e ||
                        2 == e ||
                        4 == e ||
                        8 == e ||
                        16 == e ||
                        32 == e ||
                        64 == e ||
                        128 == e ||
                        256 == e ||
                        512 == e ||
                        1024 == e ||
                        2048 == e ||
                        4096 == e ||
                        8192 == e ||
                        16384 == e
                    );
                }
            }
            class i {
                constructor(e, t, n, i) {
                    (this._cgl = e),
                        (this.width = t || 8),
                        (this.height = n || 8),
                        (this._cubemapProperties = [
                            {
                                face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
                                lookAt: vec3.fromValues(1, 0, 0),
                                up: vec3.fromValues(0, -1, 0),
                            },
                            {
                                face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
                                lookAt: vec3.fromValues(-1, 0, 0),
                                up: vec3.fromValues(0, -1, 0),
                            },
                            {
                                face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
                                lookAt: vec3.fromValues(0, 1, 0),
                                up: vec3.fromValues(0, 0, 1),
                            },
                            {
                                face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                                lookAt: vec3.fromValues(0, -1, 0),
                                up: vec3.fromValues(0, 0, -1),
                            },
                            {
                                face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
                                lookAt: vec3.fromValues(0, 0, 1),
                                up: vec3.fromValues(0, -1, 0),
                            },
                            {
                                face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                                lookAt: vec3.fromValues(0, 0, -1),
                                up: vec3.fromValues(0, -1, 0),
                            },
                        ]),
                        (this._lookAtTemp = vec3.fromValues(0, 0, 0)),
                        (this.camPos = vec3.fromValues(0, 0, 0)),
                        (this._modelMatrix = mat4.create()),
                        (this._viewMatrix = mat4.create()),
                        (this._projectionMatrix = mat4.perspective(
                            mat4.create(),
                            90 * CGL.DEG2RAD,
                            1,
                            0.1,
                            1e3
                        )),
                        (this._depthRenderbuffer = null),
                        (this._framebuffer = null),
                        (this._depthbuffer = null),
                        (this._textureFrameBuffer = null),
                        (this._textureDepth = null),
                        (this._options = i || { isFloatingPointTexture: !1 }),
                        this._options.hasOwnProperty('numRenderBuffers') ||
                            (this._options.numRenderBuffers = 1),
                        this._options.hasOwnProperty('depth') ||
                            (this._options.depth = !0),
                        this._options.hasOwnProperty('clear') ||
                            (this._options.clear = !0),
                        this._options.hasOwnProperty('multisampling') ||
                            ((this._options.multisampling = !1),
                            (this._options.multisamplingSamples = 0)),
                        this._options.multisamplingSamples &&
                            (this._cgl.glSlowRenderer &&
                                (this._options.multisamplingSamples = 0),
                            this._cgl.gl.MAX_SAMPLES
                                ? (this._options.multisamplingSamples = Math.min(
                                      this._cgl.gl.getParameter(
                                          this._cgl.gl.MAX_SAMPLES
                                      ),
                                      this._options.multisamplingSamples
                                  ))
                                : (this._options.multisamplingSamples = 0)),
                        this._options.hasOwnProperty('filter') ||
                            (this._options.filter = CGL.Texture.FILTER_LINEAR),
                        (this.texture = new a(this._cgl, {
                            width: this.width,
                            height: this.height,
                            isFloatingPointTexture: !0,
                            filter: CGL.Texture.FILTER_LINEAR,
                            wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE,
                        })),
                        this.initializeRenderbuffers(),
                        this.setSize(this.width, this.height);
                }
                initializeRenderbuffers() {
                    (this._framebuffer = this._cgl.gl.createFramebuffer()),
                        (this._depthbuffer = this._cgl.gl.createRenderbuffer()),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._framebuffer
                        ),
                        this._cgl.gl.bindRenderbuffer(
                            this._cgl.gl.RENDERBUFFER,
                            this._depthbuffer
                        ),
                        this._cgl.gl.renderbufferStorage(
                            this._cgl.gl.RENDERBUFFER,
                            this._cgl.gl.DEPTH_COMPONENT16,
                            this.width,
                            this.height
                        ),
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.RENDERBUFFER,
                            this._depthbuffer
                        ),
                        this._cgl.gl.bindRenderbuffer(
                            this._cgl.gl.RENDERBUFFER,
                            null
                        ),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            null
                        );
                }
                getWidth() {
                    return this.width;
                }
                getHeight() {
                    return this.height;
                }
                getGlFrameBuffer() {
                    return this._framebuffer;
                }
                getDepthRenderBuffer() {
                    return this._depthRenderbuffer;
                }
                getTextureColor() {
                    return this.texture;
                }
                getTextureDepth() {
                    return this._textureDepth;
                }
                dispose() {
                    (this.texture = null),
                        this._cgl.gl.deleteRenderbuffer(
                            this._depthRenderbuffer
                        ),
                        this._cgl.gl.deleteFramebuffer(this._framebuffer),
                        this._cgl.gl.deleteFramebuffer(
                            this._textureFrameBuffer
                        );
                }
                delete() {
                    this.dispose();
                }
                setSize(e, t) {
                    if (
                        ((this.width = Math.floor(e)),
                        (this.height = Math.floor(t)),
                        (this.width = Math.min(
                            this.width,
                            this._cgl.maxTexSize
                        )),
                        (this.height = Math.min(
                            this.height,
                            this._cgl.maxTexSize
                        )),
                        CGL.profileData.profileFrameBuffercreate++,
                        this._framebuffer &&
                            (this._cgl.gl.deleteRenderbuffer(
                                this._depthRenderbuffer
                            ),
                            this._cgl.gl.deleteFramebuffer(this._framebuffer)),
                        (this._framebuffer = this._cgl.gl.createFramebuffer()),
                        (this._depthbuffer = this._cgl.gl.createRenderbuffer()),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._framebuffer
                        ),
                        this._cgl.gl.bindRenderbuffer(
                            this._cgl.gl.RENDERBUFFER,
                            this._depthbuffer
                        ),
                        this._cgl.gl.renderbufferStorage(
                            this._cgl.gl.RENDERBUFFER,
                            this._cgl.gl.DEPTH_COMPONENT16,
                            this.width,
                            this.height
                        ),
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.RENDERBUFFER,
                            this._depthbuffer
                        ),
                        this.texture.setSize(this.width, this.height),
                        !this._cgl.gl.isFramebuffer(this._framebuffer))
                    )
                        throw new Error('Invalid framebuffer');
                    const n = this._cgl.gl.checkFramebufferStatus(
                        this._cgl.gl.FRAMEBUFFER
                    );
                    this.checkErrorsByStatus(n),
                        this._cgl.gl.bindTexture(
                            this._cgl.gl.TEXTURE_CUBE_MAP,
                            null
                        ),
                        this._cgl.gl.bindRenderbuffer(
                            this._cgl.gl.RENDERBUFFER,
                            null
                        ),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            null
                        );
                }
                checkErrorsByStatus(e) {
                    switch (e) {
                        case this._cgl.gl.FRAMEBUFFER_COMPLETE:
                            break;
                        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                            throw (console.error(
                                'FRAMEBUFFER_INCOMPLETE_ATTACHMENT...',
                                this.width,
                                this.height,
                                this.texture.tex,
                                this._depthBuffer
                            ),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT'
                            ));
                        case this._cgl.gl
                            .FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                            throw (console.error(
                                'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'
                            ),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'
                            ));
                        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                            throw (console.error(
                                'FRAMEBUFFER_INCOMPLETE_DIMENSIONS'
                            ),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS'
                            ));
                        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
                            throw (console.error('FRAMEBUFFER_UNSUPPORTED'),
                            new Error(
                                'Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED'
                            ));
                        case 36059:
                            console.error(
                                'Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.'
                            );
                            break;
                        default:
                            throw (console.error('incomplete framebuffer', e),
                            new Error('Incomplete framebuffer: ' + e));
                    }
                }
                setFilter(e) {
                    (this.texture.filter = e),
                        this.texture.setSize(this.width, this.height);
                }
                setCamPos(e) {
                    this.camPos = e || this.camPos;
                }
                setMatrices(e, t, n) {
                    (this._modelMatrix = e || this._modelMatrix),
                        (this._viewMatrix = t || this._viewMatrix),
                        (this._projectionMatrix = n || this._projectionMatrix);
                }
                renderStart() {
                    this._cgl.gl.bindTexture(
                        this._cgl.gl.TEXTURE_CUBE_MAP,
                        this.texture.tex
                    ),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._framebuffer
                        ),
                        this._cgl.gl.bindRenderbuffer(
                            this._cgl.gl.RENDERBUFFER,
                            this._depthbuffer
                        ),
                        this._cgl.gl.viewport(0, 0, this.width, this.height),
                        this._cgl.pushGlFrameBuffer(this._framebuffer),
                        this._cgl.pushFrameBuffer(this);
                }
                renderStartCubemapFace(e) {
                    this._cgl.pushModelMatrix(),
                        this._cgl.pushViewMatrix(),
                        this._cgl.pushPMatrix(),
                        this._cgl.gl.framebufferTexture2D(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.COLOR_ATTACHMENT0,
                            this._cubemapProperties[e].face,
                            this.texture.tex,
                            0
                        ),
                        this._cgl.gl.framebufferRenderbuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.gl.DEPTH_ATTACHMENT,
                            this._cgl.gl.RENDERBUFFER,
                            this._depthbuffer
                        ),
                        this._options.clear &&
                            (this._cgl.gl.clearColor(1, 1, 1, 1),
                            this._cgl.gl.clear(
                                this._cgl.gl.COLOR_BUFFER_BIT |
                                    this._cgl.gl.DEPTH_BUFFER_BIT
                            )),
                        this.setMatricesCubemapFace(e);
                }
                setMatricesCubemapFace(e) {
                    mat4.copy(this._cgl.mMatrix, this._modelMatrix),
                        vec3.add(
                            this._lookAtTemp,
                            this.camPos,
                            this._cubemapProperties[e].lookAt
                        ),
                        mat4.lookAt(
                            this._cgl.vMatrix,
                            this.camPos,
                            this._lookAtTemp,
                            this._cubemapProperties[e].up
                        ),
                        mat4.copy(this._cgl.pMatrix, this._projectionMatrix);
                }
                renderEndCubemapFace() {
                    this._cgl.popPMatrix(),
                        this._cgl.popModelMatrix(),
                        this._cgl.popViewMatrix();
                }
                renderEnd() {
                    CGL.profileData.profileFramebuffer++,
                        1 !== this._cgl.glVersion &&
                            (this._cgl.gl.bindFramebuffer(
                                this._cgl.gl.READ_FRAMEBUFFER,
                                this._framebuffer
                            ),
                            this._cgl.gl.bindFramebuffer(
                                this._cgl.gl.DRAW_FRAMEBUFFER,
                                this._textureFrameBuffer
                            )),
                        this._cgl.gl.bindFramebuffer(
                            this._cgl.gl.FRAMEBUFFER,
                            this._cgl.popGlFrameBuffer()
                        ),
                        this._cgl.popFrameBuffer(),
                        this._cgl.resetViewPort();
                }
            }
            CGL.CubemapFramebuffer = i;
            const r = function(e, t) {
                (this._cgl = e),
                    (this._modelMatrix = mat4.create()),
                    (this._projectionMatrix = mat4.perspective(
                        mat4.create(),
                        90 * CGL.DEG2RAD,
                        1,
                        0.1,
                        10
                    )),
                    (this._viewMatrix = mat4.create()),
                    (this._lookAtTemp = vec3.fromValues(0, 0, 0)),
                    (this.cubemap = null),
                    (this.isInitialized = !1),
                    (this.size = t.size || 512),
                    (this.camPos = t.camPos || vec3.fromValues(0, 0, 0)),
                    (this._framebuffer = new i(
                        this._cgl,
                        this.size,
                        this.size,
                        {}
                    )),
                    this._framebuffer.setMatrices(
                        this._modelMatrix,
                        null,
                        this._projectionMatrix
                    ),
                    this._framebuffer.setCamPos(this.camPos),
                    (this._depthbuffer = null),
                    (this.depthAttachment = null),
                    (this.colorAttachment = null),
                    (this._cubemapProperties = [
                        {
                            face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
                            lookAt: vec3.fromValues(1, 0, 0),
                            up: vec3.fromValues(0, -1, 0),
                        },
                        {
                            face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
                            lookAt: vec3.fromValues(-1, 0, 0),
                            up: vec3.fromValues(0, -1, 0),
                        },
                        {
                            face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
                            lookAt: vec3.fromValues(0, 1, 0),
                            up: vec3.fromValues(0, 0, 1),
                        },
                        {
                            lookAt: vec3.fromValues(0, -1, 0),
                            up: vec3.fromValues(0, 0, -1),
                            face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                        },
                        {
                            face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
                            lookAt: vec3.fromValues(0, 0, 1),
                            up: vec3.fromValues(0, -1, 0),
                        },
                        {
                            face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                            lookAt: vec3.fromValues(0, 0, -1),
                            up: vec3.fromValues(0, -1, 0),
                        },
                    ]);
            };
            (r.prototype.setMatrices = function(e, t, n) {
                (this._modelMatrix = e || this._modelMatrix),
                    (this._viewMatrix = t || this._viewMatrix),
                    (this._projectionMatrix = n || this._projectionMatrix),
                    this._framebuffer.setMatrices(e, t, n);
            }),
                (r.prototype.setCamPos = function(e) {
                    (this.camPos = e || this.camPos),
                        this._framebuffer.setCamPos(this.camPos);
                }),
                (r.prototype.hasFramebuffer = function() {
                    return !!this._framebuffer;
                }),
                (r.prototype.deleteFramebuffer = function() {
                    this._framebuffer && this._framebuffer.dispose();
                }),
                (r.prototype.setSize = function(e) {
                    (this.size = e),
                        (this.isInitialized = !1),
                        this.initializeCubemap();
                }),
                (r.prototype.checkError = function(e) {
                    const t = this._cgl.gl.getError();
                    t != this._cgl.gl.NO_ERROR &&
                        (console.log('error ' + e),
                        console.log('error size', this.size),
                        t == this._cgl.gl.NO_ERROR && console.error('NO_ERROR'),
                        t == this._cgl.gl.OUT_OF_MEMORY &&
                            console.error('OUT_OF_MEMORY'),
                        t == this._cgl.gl.INVALID_ENUM &&
                            console.error('INVALID_ENUM'),
                        t == this._cgl.gl.INVALID_OPERATION &&
                            console.error('INVALID_OPERATION'),
                        t == this._cgl.gl.INVALID_FRAMEBUFFER_OPERATION &&
                            console.error('INVALID_FRAMEBUFFER_OPERATION'),
                        t == this._cgl.gl.INVALID_VALUE &&
                            console.error('INVALID_VALUE'),
                        t == this._cgl.gl.CONTEXT_LOST_WEBGL &&
                            console.error('CONTEXT_LOST_WEBGL'));
                }),
                (r.prototype.initializeCubemap = function() {
                    this.checkError(221),
                        this.cubemap ||
                            (this.cubemap = new i(
                                this._cgl,
                                this.size,
                                this.size,
                                {}
                            )),
                        (this.isInitialized = !0);
                }),
                (r.prototype.getCubemap = function() {
                    return this._framebuffer
                        ? this._framebuffer.getTextureColor()
                        : null;
                }),
                (r.prototype.renderCubemap = function(e) {
                    this._framebuffer.renderStart();
                    for (let t = 0; t < 6; t += 1)
                        this._framebuffer.renderStartCubemapFace(t),
                            e && e(),
                            this._framebuffer.renderEndCubemapFace();
                    this._framebuffer.renderEnd();
                }),
                (CGL.Cubemap = r);
        },
    ]).Cubemap),
    (this.CGL = this.CGL || {}),
    (this.CGL.COREMODULES = this.CGL.COREMODULES || {}),
    (this.CGL.COREMODULES.Light = (function(e) {
        var t = {};
        function n(a) {
            if (t[a]) return t[a].exports;
            var i = (t[a] = { i: a, l: !1, exports: {} });
            return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, a) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: a });
            }),
            (n.r = function(e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var a = Object.create(null);
                if (
                    (n.r(a),
                    Object.defineProperty(a, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var i in e)
                        n.d(
                            a,
                            i,
                            function(t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return a;
            }),
            (n.n = function(e) {
                var t =
                    e && e.__esModule
                        ? function() {
                              return e.default;
                          }
                        : function() {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 0))
        );
    })([
        function(e, t, n) {
            'use strict';
            function a(e, t) {
                return (
                    (this.type = t.type || 'point'),
                    (this.color = t.color || [1, 1, 1]),
                    (this.specular = t.specular || [0, 0, 0]),
                    (this.position = t.position || null),
                    (this.intensity = t.intensity || 1),
                    (this.radius = t.radius || 1),
                    (this.falloff = t.falloff || 1),
                    (this.spotExponent = t.spotExponent || 1),
                    (this.cosConeAngleInner = t.cosConeAngleInner || 0),
                    (this.cosConeAngle = t.cosConeAngle || 0),
                    (this.conePointAt = t.conePointAt || [0, 0, 0]),
                    (this.castShadow = t.castShadow || !1),
                    (this.nearFar = t.nearFar || [0, 0]),
                    (this.normalOffset = t.normalOffset || 0),
                    (this.shadowBias = t.shadowBias || 0),
                    (this.shadowStrength = t.shadowStrength || 0),
                    (this.lightMatrix = null),
                    (this.shadowMap = null),
                    (this.shadowMapDepth = null),
                    (this.shadowCubeMap = null),
                    (this._cgl = e),
                    (this.state = { isUpdating: !1 }),
                    (this._framebuffer = null),
                    (this._shaderShadowMap = {
                        shader: null,
                        uniforms: { lightPosition: null, nearFar: null },
                        matrices: {
                            modelMatrix: mat4.create(),
                            viewMatrix: mat4.create(),
                            projMatrix: mat4.create(),
                            biasMatrix: mat4.fromValues(
                                0.5,
                                0,
                                0,
                                0,
                                0,
                                0.5,
                                0,
                                0,
                                0,
                                0,
                                0.5,
                                0,
                                0.5,
                                0.5,
                                0.5,
                                1
                            ),
                        },
                        vectors: {
                            lookAt: vec3.create(),
                            camPos: vec3.create(),
                            up: vec3.fromValues(0, 1, 0),
                        },
                    }),
                    (this._effectBlur = null),
                    (this._shaderBlur = {
                        shader: null,
                        uniforms: { XY: null },
                    }),
                    (this._cubemap = null),
                    this
                );
            }
            n.r(t),
                (a.prototype.getModifiableParameters = function() {
                    return [
                        'color',
                        'specular',
                        'position',
                        'intensity',
                        'radius',
                        'falloff',
                        'spotExponent',
                        'cosConeAngleInner',
                        'cosConeAngle',
                        'conePointAt',
                    ];
                }),
                (a.prototype.createProjectionMatrix = a.prototype.updateProjectionMatrix = function(
                    e,
                    t,
                    n,
                    a
                ) {
                    'spot' === this.type
                        ? mat4.perspective(
                              this._shaderShadowMap.matrices.projMatrix,
                              -2 * CGL.DEG2RAD * a,
                              1,
                              t,
                              n
                          )
                        : 'directional' === this.type
                        ? mat4.ortho(
                              this._shaderShadowMap.matrices.projMatrix,
                              -1 * e,
                              e,
                              -1 * e,
                              e,
                              t,
                              n
                          )
                        : 'point' === this.type &&
                          (mat4.perspective(
                              this._shaderShadowMap.matrices.projMatrix,
                              90 * CGL.DEG2RAD,
                              1,
                              t,
                              n
                          ),
                          (this.nearFar = [t, n]));
                }),
                (a.prototype.hasFramebuffer = function() {
                    return !!this._framebuffer;
                }),
                (a.prototype.hasShadowMapShader = function() {
                    return !!this._shaderShadowMap.shader;
                }),
                (a.prototype.hasBlurShader = function() {
                    return !!this._shaderBlur.shader;
                }),
                (a.prototype.hasBlurEffect = function() {
                    return !!this._effectBlur;
                }),
                (a.prototype.getShadowMap = function() {
                    return 'point' === this.type
                        ? null
                        : this._framebuffer.getTextureColor();
                }),
                (a.prototype.getShadowMapDepth = function() {
                    return 'point' === this.type
                        ? null
                        : this._framebuffer.getTextureDepth();
                }),
                (a.prototype.createFramebuffer = function(e, t, n) {
                    this.state.isUpdating = !0;
                    const a = e || 512,
                        i = t || 512;
                    if ('point' === this.type)
                        return (
                            this.hasCubemap() ||
                                (this._cubemap = new CGL.Cubemap(this._cgl, {
                                    camPos: this.position,
                                    cullFaces: !0,
                                    size: a,
                                    isShadowMap: !0,
                                })),
                            this._cubemap.initializeCubemap(),
                            void (this.state.isUpdating = !1)
                        );
                    this.hasFramebuffer() && this._framebuffer.delete(),
                        n &&
                            n.filter &&
                            (n.isFloatingPointTexture =
                                n.filter !== CGL.Texture.FILTER_MIPMAP),
                        1 == this._cgl.glVersion
                            ? (this._framebuffer = new CGL.Framebuffer(
                                  this._cgl,
                                  a,
                                  i,
                                  Object.assign(
                                      {
                                          isFloatingPointTexture: !0,
                                          filter: CGL.Texture.FILTER_LINEAR,
                                          wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE,
                                      },
                                      n
                                  )
                              ))
                            : (this._framebuffer = new CGL.Framebuffer2(
                                  this._cgl,
                                  a,
                                  i,
                                  Object.assign(
                                      {
                                          isFloatingPointTexture: !0,
                                          filter: CGL.Texture.FILTER_LINEAR,
                                          wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE,
                                      },
                                      n
                                  )
                              )),
                        (this.state.isUpdating = !1);
                }),
                (a.prototype.hasCubemap = function() {
                    return !!this._cubemap;
                }),
                (a.prototype.setFramebufferSize = function(e) {
                    this.hasFramebuffer() && this._framebuffer.setSize(e, e);
                }),
                (a.prototype.createShadowMapShader = function(e, t) {
                    if (this.hasShadowMapShader()) return;
                    (this.state.isUpdating = !0),
                        (this._shaderShadowMap.shader = new CGL.Shader(
                            this._cgl,
                            'shadowPass' +
                                this.type.charAt(0).toUpperCase() +
                                this.type.slice(1)
                        )),
                        this._shaderShadowMap.shader.setModules([
                            'MODULE_VERTEX_POSITION',
                            'MODULE_COLOR',
                            'MODULE_BEGIN_FRAG',
                        ]);
                    const n = e || this.getShadowPassVertexShader(),
                        a = t || this.getShadowPassFragmentShader();
                    this._shaderShadowMap.shader.setSource(n, a),
                        (this._shaderShadowMap.shader.offScreenPass = !0),
                        'point' === this.type &&
                            ((this._shaderShadowMap.uniforms.lightPosition = new CGL.Uniform(
                                this._shaderShadowMap.shader,
                                '3f',
                                'inLightPosition',
                                vec3.create()
                            )),
                            (this._shaderShadowMap.uniforms.nearFar = new CGL.Uniform(
                                this._shaderShadowMap.shader,
                                '2f',
                                'inNearFar',
                                vec2.create()
                            ))),
                        1 == this._cgl.glVersion &&
                            (this._cgl.gl.getExtension('OES_texture_float'),
                            this._cgl.gl.getExtension(
                                'OES_texture_float_linear'
                            ),
                            this._cgl.gl.getExtension('OES_texture_half_float'),
                            this._cgl.gl.getExtension(
                                'OES_texture_half_float_linear'
                            ),
                            this._shaderShadowMap.shader.enableExtension(
                                'GL_OES_standard_derivatives'
                            ),
                            this._shaderShadowMap.shader.enableExtension(
                                'GL_OES_texture_float'
                            ),
                            this._shaderShadowMap.shader.enableExtension(
                                'GL_OES_texture_float_linear'
                            ),
                            this._shaderShadowMap.shader.enableExtension(
                                'GL_OES_texture_half_float'
                            ),
                            this._shaderShadowMap.shader.enableExtension(
                                'GL_OES_texture_half_float_linear'
                            )),
                        (this.state.isUpdating = !1);
                }),
                (a.prototype.createBlurEffect = function(e) {
                    'point' !== this.type &&
                        ((this.state.isUpdating = !0),
                        this.hasBlurEffect() && this._effectBlur.delete(),
                        (this._effectBlur = new CGL.TextureEffect(
                            this._cgl,
                            Object.assign(
                                {
                                    isFloatingPointTexture: !0,
                                    filter: CGL.Texture.FILTER_LINEAR,
                                    wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE,
                                },
                                e
                            )
                        )),
                        (this.state.isUpdating = !1));
                }),
                (a.prototype.createBlurShader = function(e, t) {
                    if (this.hasBlurShader()) return;
                    if ('point' === this.type) return;
                    this.state.isUpdating = !0;
                    const n = e || this.getBlurPassVertexShader(),
                        a = t || this.getBlurPassFragmentShader();
                    (this._shaderBlur.shader = new CGL.Shader(
                        this._cgl,
                        'blurPass' +
                            this.type.charAt(0).toUpperCase() +
                            this.type.slice(1)
                    )),
                        this._shaderBlur.shader.setModules([
                            'MODULE_VERTEX_POSITION',
                            'MODULE_COLOR',
                            'MODULE_BEGIN_FRAG',
                        ]),
                        this._shaderBlur.shader.setSource(n, a),
                        (this._shaderBlur.uniforms.XY = new CGL.Uniform(
                            this._shaderBlur.shader,
                            '2f',
                            'inXY',
                            vec2.create()
                        )),
                        (this._shaderBlur.shader.offScreenPass = !0),
                        (this.state.isUpdating = !1);
                }),
                (a.prototype.renderPasses = function(e, t, n) {
                    this.state.isUpdating ||
                        this._cgl.frameStore.shadowPass ||
                        (this._cgl.pushCullFace(!0),
                        this._cgl.pushCullFaceFacing(this._cgl.gl.FRONT),
                        this._cgl.gl.enable(this._cgl.gl.POLYGON_OFFSET_FILL),
                        this._cgl.gl.polygonOffset(e, e),
                        (this._cgl.frameStore.renderOffscreen = !0),
                        (this._cgl.frameStore.shadowPass = !0),
                        this._cgl.pushBlend(!1),
                        this._cgl.gl.colorMask(
                            !0,
                            !0,
                            'point' === this.type,
                            'point' === this.type
                        ),
                        this.renderShadowPass(n),
                        this._cgl.gl.cullFace(this._cgl.gl.BACK),
                        this._cgl.gl.disable(this._cgl.gl.CULL_FACE),
                        this._cgl.gl.disable(this._cgl.gl.POLYGON_OFFSET_FILL),
                        'point' !== this.type && this.renderBlurPass(t),
                        this._cgl.gl.colorMask(!0, !0, !0, !0),
                        this._cgl.popBlend(),
                        this._cgl.popCullFaceFacing(),
                        this._cgl.popCullFace(),
                        (this._cgl.frameStore.shadowPass = !1),
                        (this._cgl.frameStore.renderOffscreen = !1),
                        'point' !== this.type
                            ? ((this.shadowMap = this._framebuffer.getTextureColor()),
                              (this.shadowMapDepth = this._framebuffer.getTextureDepth()))
                            : ((this.shadowMap = null),
                              (this.shadowMapDepth = null)));
                }),
                (a.prototype.renderShadowPass = function(e) {
                    if (!this.state.isUpdating) {
                        if ('point' === this.type)
                            return (
                                this._shaderShadowMap.uniforms.nearFar.setValue(
                                    this.nearFar
                                ),
                                this._shaderShadowMap.uniforms.lightPosition.setValue(
                                    this.position
                                ),
                                this._cubemap.setCamPos(this.position),
                                this._cubemap.setMatrices(
                                    this._shaderShadowMap.matrices.modelMatrix,
                                    this._shaderShadowMap.matrices.viewMatrix,
                                    this._shaderShadowMap.matrices.projMatrix
                                ),
                                this._cgl.pushShader(
                                    this._shaderShadowMap.shader
                                ),
                                this._cubemap.renderCubemap(e),
                                this._cgl.popShader(),
                                void (this.shadowCubeMap = this._cubemap._framebuffer.getTextureColor())
                            );
                        this._cgl.pushShader(this._shaderShadowMap.shader),
                            this._cgl.pushModelMatrix(),
                            this._cgl.pushViewMatrix(),
                            this._cgl.pushPMatrix(),
                            this._framebuffer.renderStart(this._cgl),
                            mat4.copy(
                                this._cgl.mMatrix,
                                this._shaderShadowMap.matrices.modelMatrix
                            ),
                            vec3.set(
                                this._shaderShadowMap.vectors.camPos,
                                this.position[0],
                                this.position[1],
                                this.position[2]
                            ),
                            'spot' === this.type &&
                                vec3.set(
                                    this._shaderShadowMap.vectors.lookAt,
                                    this.conePointAt[0],
                                    this.conePointAt[1],
                                    this.conePointAt[2]
                                ),
                            mat4.lookAt(
                                this._cgl.vMatrix,
                                this._shaderShadowMap.vectors.camPos,
                                this._shaderShadowMap.vectors.lookAt,
                                this._shaderShadowMap.vectors.up
                            ),
                            mat4.copy(
                                this._cgl.pMatrix,
                                this._shaderShadowMap.matrices.projMatrix
                            ),
                            this.lightMatrix ||
                                (this.lightMatrix = mat4.create()),
                            mat4.mul(
                                this.lightMatrix,
                                this._cgl.pMatrix,
                                this._cgl.vMatrix
                            ),
                            mat4.mul(
                                this.lightMatrix,
                                this._cgl.mMatrix,
                                this.lightMatrix
                            ),
                            mat4.mul(
                                this.lightMatrix,
                                this._shaderShadowMap.matrices.biasMatrix,
                                this.lightMatrix
                            ),
                            this._cgl.gl.clearColor(1, 1, 1, 1),
                            this._cgl.gl.clear(
                                this._cgl.gl.DEPTH_BUFFER_BIT |
                                    this._cgl.gl.COLOR_BUFFER_BIT
                            ),
                            e && e(),
                            this._framebuffer.renderEnd(this._cgl),
                            this._cgl.popPMatrix(),
                            this._cgl.popModelMatrix(),
                            this._cgl.popViewMatrix(),
                            this._cgl.popShader();
                    }
                }),
                (a.prototype.renderBlurPass = function(e) {
                    this.state.isUpdating ||
                        (this._cgl.pushShader(this._shaderBlur.shader),
                        this._effectBlur.setSourceTexture(
                            this._framebuffer.getTextureColor()
                        ),
                        this._effectBlur.startEffect(),
                        this._effectBlur.bind(),
                        this._cgl.setTexture(
                            0,
                            this._effectBlur.getCurrentSourceTexture().tex
                        ),
                        this._shaderBlur.uniforms.XY.setValue([e, 0]),
                        this._effectBlur.finish(),
                        this._effectBlur.bind(),
                        this._cgl.setTexture(
                            0,
                            this._effectBlur.getCurrentSourceTexture().tex
                        ),
                        this._shaderBlur.uniforms.XY.setValue([0, e]),
                        this._effectBlur.finish(),
                        this._effectBlur.endEffect(),
                        this._cgl.popShader());
                }),
                (a.prototype.getShadowPassVertexShader = function() {
                    return `\n{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n\nOUT vec2 texCoord;\nOUT vec3 norm;\n\n${
                        'point' === this.type ? 'OUT vec3 modelPos;' : ''
                    }\nvoid main() {\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n    norm=attrVertNormal;\n    vec4 pos = vec4(vPosition, 1.0);\n    mat4 mMatrix=modelMatrix;\n\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 mvMatrix=viewMatrix * mMatrix;\n    vec4 vPos = projMatrix * mvMatrix * vec4(vPosition, 1.);\n    ${
                        'point' === this.type
                            ? 'modelPos = (mMatrix * pos).xyz;'
                            : ''
                    }\n    gl_Position = vPos;\n}\n`;
                }),
                (a.prototype.getShadowPassFragmentShader = function() {
                    return `\n   {{MODULES_HEAD}}\n   ${
                        'point' === this.type ? 'IN vec3 modelPos;' : ''
                    }\n   ${
                        'point' === this.type ? 'UNI vec3 inLightPosition;' : ''
                    }\n   ${
                        'point' === this.type ? 'UNI vec2 inNearFar;' : ''
                    }\n\n    IN vec2 texCoord;\n\n    void main() {\n        {{MODULE_BEGIN_FRAG}}\n        vec4 col = vec4(1.);\n\n\n        outColor = vec4(1.);\n\n        {{MODULE_COLOR}}\n\n        ${
                        'point' === this.type
                            ? 'vec3 fromLightToFrag = (modelPos - inLightPosition);'
                            : ''
                    }\n\n\n        ${
                        'point' === this.type
                            ? 'float depth = (length(fromLightToFrag) - inNearFar.x) / (inNearFar.y - inNearFar.x);'
                            : 'float depth = gl_FragCoord.z;'
                    }\n\n        float dx = dFdx(depth); // for biasing depth-per-pixel\n        float dy = dFdy(depth); // for biasing depth-per-pixel\n\n        float clampedDerivative = clamp(dot(dx, dx) + dot(dy, dy), 0., 1.);\n        float moment2 = dot(depth, depth) + 0.25 * clampedDerivative;\n\n        outColor.x = depth;\n        outColor.y = moment2;\n        outColor.z = depth;\n    }\n`;
                }),
                (a.prototype.getBlurPassVertexShader = function() {
                    return 'point' === this.type
                        ? ''
                        : '\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\n\nOUT vec2 texCoord;\nOUT vec2 coord0;\nOUT vec2 coord1;\nOUT vec2 coord2;\nOUT vec2 coord3;\nOUT vec2 coord4;\nOUT vec2 coord5;\nOUT vec2 coord6;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\nUNI mat4 modelMatrix;\n\nUNI vec2 inXY;\n\nvoid main() {\n    texCoord=attrTexCoord;\n\n    vec4 pos = vec4(vPosition,  1.0);\n\n    {{MODULE_VERTEX_POSITION}}\n\n    coord3 = attrTexCoord;\n\n\n    coord0 = attrTexCoord + (-3.0368997744118595 * inXY);\n    coord0 = clamp(coord0, 0., 1.);\n    coord1 = attrTexCoord + (-2.089778445362373 * inXY);\n    coord1 = clamp(coord1, 0., 1.);\n    coord2 = attrTexCoord + (-1.2004366090034069 * inXY);\n    coord2 = clamp(coord2, 0., 1.);\n    coord4 = attrTexCoord + (1.2004366090034069 * inXY);\n    coord4 = clamp(coord4, 0., 1.);\n    coord5 = attrTexCoord + (2.089778445362373* inXY);\n    coord5 = clamp(coord5, 0., 1.);\n    coord6 = attrTexCoord + (3.0368997744118595 * inXY);\n    coord6 = clamp(coord6, 0., 1.);\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n    ';
                }),
                (a.prototype.getBlurPassFragmentShader = function() {
                    return 'point' === this.type
                        ? ''
                        : '\nUNI sampler2D tex;\n\nIN vec2 coord0;\nIN vec2 coord1;\nIN vec2 coord2;\nIN vec2 coord3;\nIN vec2 coord4;\nIN vec2 coord5;\nIN vec2 coord6;\n\nvoid main() {\n\n    vec4 color = vec4(0.0);\n\n\n    color.xyz += texture(tex, coord0).xyz * 0.06927096443792478;  // 1/64\n    color.xyz += texture(tex, coord1).xyz * 0.1383328848652136;   // 6/64\n    color.xyz += texture(tex, coord2).xyz * 0.21920904690397863;  // 15/64\n    color.xyz += texture(tex, coord3).xyz * 0.14637421;           // 20/64\n    color.xyz += texture(tex, coord4).xyz * 0.21920904690397863;  // 15/64\n    color.xyz += texture(tex, coord5).xyz * 0.1383328848652136;   // 6/64\n    color.xyz += texture(tex, coord6).xyz * 0.06927096443795711;  // 1/64\n\n    color.a = 1.;\n\n    outColor = color;\n}\n    ';
                }),
                (CGL.Light = a);
        },
    ]).Light);
