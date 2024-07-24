import "./chunk-WXXH56N5.js";

// node_modules/@mediapipe/tasks-vision/vision_bundle.mjs
var t = "undefined" != typeof self ? self : {};
function e(e2, n2) {
  t: {
    for (var r2 = ["CLOSURE_FLAGS"], i2 = t, s2 = 0; s2 < r2.length; s2++)
      if (null == (i2 = i2[r2[s2]])) {
        r2 = null;
        break t;
      }
    r2 = i2;
  }
  return null != (e2 = r2 && r2[e2]) ? e2 : n2;
}
function n() {
  throw Error("Invalid UTF8");
}
function r(t2, e2) {
  return e2 = String.fromCharCode.apply(null, e2), null == t2 ? e2 : t2 + e2;
}
var i;
var s;
var o = "undefined" != typeof TextDecoder;
var a;
var c = "undefined" != typeof TextEncoder;
function h(t2) {
  if (c)
    t2 = (a || (a = new TextEncoder())).encode(t2);
  else {
    let n2 = 0;
    const r2 = new Uint8Array(3 * t2.length);
    for (let i2 = 0; i2 < t2.length; i2++) {
      var e2 = t2.charCodeAt(i2);
      if (128 > e2)
        r2[n2++] = e2;
      else {
        if (2048 > e2)
          r2[n2++] = e2 >> 6 | 192;
        else {
          if (55296 <= e2 && 57343 >= e2) {
            if (56319 >= e2 && i2 < t2.length) {
              const s2 = t2.charCodeAt(++i2);
              if (56320 <= s2 && 57343 >= s2) {
                e2 = 1024 * (e2 - 55296) + s2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                continue;
              }
              i2--;
            }
            e2 = 65533;
          }
          r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
        }
        r2[n2++] = 63 & e2 | 128;
      }
    }
    t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
  }
  return t2;
}
var u;
var l = e(610401301, false);
var f = e(572417392, e(1, true));
var d = t.navigator;
function p(t2) {
  return !!l && (!!u && u.brands.some(({ brand: e2 }) => e2 && -1 != e2.indexOf(t2)));
}
function g(e2) {
  var n2;
  return (n2 = t.navigator) && (n2 = n2.userAgent) || (n2 = ""), -1 != n2.indexOf(e2);
}
function m() {
  return !!l && (!!u && 0 < u.brands.length);
}
function y() {
  return m() ? p("Chromium") : (g("Chrome") || g("CriOS")) && !(!m() && g("Edge")) || g("Silk");
}
u = d && d.userAgentData || null;
var v = !m() && (g("Trident") || g("MSIE"));
!g("Android") || y(), y(), g("Safari") && (y() || !m() && g("Coast") || !m() && g("Opera") || !m() && g("Edge") || (m() ? p("Microsoft Edge") : g("Edg/")) || m() && p("Opera"));
var _ = {};
var w = null;
function b(t2) {
  var e2 = t2.length, n2 = 3 * e2 / 4;
  n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
  var r2 = new Uint8Array(n2), i2 = 0;
  return function(t3, e3) {
    function n3(e4) {
      for (; r3 < t3.length; ) {
        var n4 = t3.charAt(r3++), i4 = w[n4];
        if (null != i4)
          return i4;
        if (!/^[\s\xa0]*$/.test(n4))
          throw Error("Unknown base64 encoding at char: " + n4);
      }
      return e4;
    }
    E();
    for (var r3 = 0; ; ) {
      var i3 = n3(-1), s2 = n3(0), o2 = n3(64), a2 = n3(64);
      if (64 === a2 && -1 === i3)
        break;
      e3(i3 << 2 | s2 >> 4), 64 != o2 && (e3(s2 << 4 & 240 | o2 >> 2), 64 != a2 && e3(o2 << 6 & 192 | a2));
    }
  }(t2, function(t3) {
    r2[i2++] = t3;
  }), i2 !== n2 ? r2.subarray(0, i2) : r2;
}
function E() {
  if (!w) {
    w = {};
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"], n2 = 0; 5 > n2; n2++) {
      var r2 = t2.concat(e2[n2].split(""));
      _[n2] = r2;
      for (var i2 = 0; i2 < r2.length; i2++) {
        var s2 = r2[i2];
        void 0 === w[s2] && (w[s2] = i2);
      }
    }
  }
}
var A = "undefined" != typeof Uint8Array;
var T = !v && "function" == typeof btoa;
function k(t2) {
  if (!T) {
    var e2;
    void 0 === e2 && (e2 = 0), E(), e2 = _[e2];
    var n2 = Array(Math.floor(t2.length / 3)), r2 = e2[64] || "";
    let c2 = 0, h2 = 0;
    for (; c2 < t2.length - 2; c2 += 3) {
      var i2 = t2[c2], s2 = t2[c2 + 1], o2 = t2[c2 + 2], a2 = e2[i2 >> 2];
      i2 = e2[(3 & i2) << 4 | s2 >> 4], s2 = e2[(15 & s2) << 2 | o2 >> 6], o2 = e2[63 & o2], n2[h2++] = a2 + i2 + s2 + o2;
    }
    switch (a2 = 0, o2 = r2, t2.length - c2) {
      case 2:
        o2 = e2[(15 & (a2 = t2[c2 + 1])) << 2] || r2;
      case 1:
        t2 = t2[c2], n2[h2] = e2[t2 >> 2] + e2[(3 & t2) << 4 | a2 >> 4] + o2 + r2;
    }
    return n2.join("");
  }
  for (e2 = "", n2 = 0, r2 = t2.length - 10240; n2 < r2; )
    e2 += String.fromCharCode.apply(null, t2.subarray(n2, n2 += 10240));
  return e2 += String.fromCharCode.apply(null, n2 ? t2.subarray(n2) : t2), btoa(e2);
}
var S = /[-_.]/g;
var x = { "-": "+", _: "/", ".": "=" };
function F(t2) {
  return x[t2] || "";
}
function L(t2) {
  if (!T)
    return b(t2);
  S.test(t2) && (t2 = t2.replace(S, F)), t2 = atob(t2);
  const e2 = new Uint8Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++)
    e2[n2] = t2.charCodeAt(n2);
  return e2;
}
function M(t2) {
  return A && null != t2 && t2 instanceof Uint8Array;
}
var O;
function P() {
  return O || (O = new Uint8Array(0));
}
var I = {};
var C;
function R(t2) {
  if (t2 !== I)
    throw Error("illegal external caller");
}
function D() {
  return C || (C = new U(null, I));
}
function B(t2) {
  R(I);
  var e2 = t2.T;
  return null == (e2 = null == e2 || M(e2) ? e2 : "string" == typeof e2 ? L(e2) : null) ? e2 : t2.T = e2;
}
var U = class {
  constructor(t2, e2) {
    if (R(e2), this.T = t2, null != t2 && 0 === t2.length)
      throw Error("ByteString should be constructed with non-empty values");
  }
  qa() {
    const t2 = B(this);
    return t2 ? new Uint8Array(t2) : P();
  }
};
function N(t2, e2) {
  return Error(`Invalid wire type: ${t2} (at position ${e2})`);
}
function G() {
  return Error("Failed to read varint, encoding is invalid.");
}
function j(t2, e2) {
  return Error(`Tried to read past the end of the data ${e2} > ${t2}`);
}
function V(t2) {
  return 0 == t2.length ? D() : new U(t2, I);
}
function z(t2) {
  if ("string" == typeof t2)
    return { buffer: L(t2), H: false };
  if (Array.isArray(t2))
    return { buffer: new Uint8Array(t2), H: false };
  if (t2.constructor === Uint8Array)
    return { buffer: t2, H: false };
  if (t2.constructor === ArrayBuffer)
    return { buffer: new Uint8Array(t2), H: false };
  if (t2.constructor === U)
    return { buffer: B(t2) || P(), H: true };
  if (t2 instanceof Uint8Array)
    return { buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), H: false };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function W() {
  return "function" == typeof BigInt;
}
var X = !f;
var H = !f;
var Y = "function" == typeof Uint8Array.prototype.slice;
var K;
var $ = 0;
var q = 0;
function J(t2) {
  const e2 = 0 > t2;
  let n2 = (t2 = Math.abs(t2)) >>> 0;
  if (t2 = Math.floor((t2 - n2) / 4294967296), e2) {
    const [e3, r2] = st(n2, t2);
    t2 = r2, n2 = e3;
  }
  $ = n2 >>> 0, q = t2 >>> 0;
}
function Z(t2) {
  const e2 = K || (K = new DataView(new ArrayBuffer(8)));
  e2.setFloat32(0, +t2, true), q = 0, $ = e2.getUint32(0, true);
}
function Q(t2, e2) {
  return 4294967296 * e2 + (t2 >>> 0);
}
function tt(t2, e2) {
  const n2 = 2147483648 & e2;
  return n2 && (e2 = ~e2 >>> 0, 0 == (t2 = 1 + ~t2 >>> 0) && (e2 = e2 + 1 >>> 0)), t2 = Q(t2, e2), n2 ? -t2 : t2;
}
function et(t2, e2) {
  if (t2 >>>= 0, 2097151 >= (e2 >>>= 0))
    var n2 = "" + (4294967296 * e2 + t2);
  else
    W() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, 1e7 <= t2 && (n2 += Math.floor(t2 / 1e7), t2 %= 1e7), 1e7 <= n2 && (e2 += Math.floor(n2 / 1e7), n2 %= 1e7), n2 = e2 + nt(n2) + nt(t2));
  return n2;
}
function nt(t2) {
  return t2 = String(t2), "0000000".slice(t2.length) + t2;
}
function rt() {
  var t2 = $, e2 = q;
  if (2147483648 & e2)
    if (W())
      t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
    else {
      const [n2, r2] = st(t2, e2);
      t2 = "-" + et(n2, r2);
    }
  else
    t2 = et(t2, e2);
  return t2;
}
function it(t2) {
  if (16 > t2.length)
    J(Number(t2));
  else if (W())
    t2 = BigInt(t2), $ = Number(t2 & BigInt(4294967295)) >>> 0, q = Number(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const e2 = +("-" === t2[0]);
    q = $ = 0;
    const n2 = t2.length;
    for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
      const e3 = Number(t2.slice(r2, i2));
      q *= 1e6, $ = 1e6 * $ + e3, 4294967296 <= $ && (q += Math.trunc($ / 4294967296), q >>>= 0, $ >>>= 0);
    }
    if (e2) {
      const [t3, e3] = st($, q);
      $ = t3, q = e3;
    }
  }
}
function st(t2, e2) {
  return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
}
function ot(t2, e2, { W: n2 = false } = {}) {
  t2.W = n2, e2 && (e2 = z(e2), t2.h = e2.buffer, t2.u = e2.H, t2.v = 0, t2.l = t2.h.length, t2.g = t2.v);
}
function at(t2, e2) {
  if (t2.g = e2, e2 > t2.l)
    throw j(t2.l, e2);
}
function ct(t2, e2) {
  let n2, r2 = 0, i2 = 0, s2 = 0;
  const o2 = t2.h;
  let a2 = t2.g;
  do {
    n2 = o2[a2++], r2 |= (127 & n2) << s2, s2 += 7;
  } while (32 > s2 && 128 & n2);
  for (32 < s2 && (i2 |= (127 & n2) >> 4), s2 = 3; 32 > s2 && 128 & n2; s2 += 7)
    n2 = o2[a2++], i2 |= (127 & n2) << s2;
  if (at(t2, a2), 128 > n2)
    return e2(r2 >>> 0, i2 >>> 0);
  throw G();
}
function ht(t2) {
  let e2 = 0, n2 = t2.g;
  const r2 = n2 + 10, i2 = t2.h;
  for (; n2 < r2; ) {
    const r3 = i2[n2++];
    if (e2 |= r3, 0 == (128 & r3))
      return at(t2, n2), !!(127 & e2);
  }
  throw G();
}
function ut(t2) {
  var e2 = t2.h;
  const n2 = t2.g, r2 = e2[n2], i2 = e2[n2 + 1], s2 = e2[n2 + 2];
  return e2 = e2[n2 + 3], at(t2, t2.g + 4), (r2 << 0 | i2 << 8 | s2 << 16 | e2 << 24) >>> 0;
}
function lt(t2, e2) {
  if (0 > e2)
    throw Error(`Tried to read a negative byte length: ${e2}`);
  const n2 = t2.g, r2 = n2 + e2;
  if (r2 > t2.l)
    throw j(e2, t2.l - n2);
  return t2.g = r2, n2;
}
function ft(t2, e2) {
  if (0 == e2)
    return D();
  var n2 = lt(t2, e2);
  return t2.W && t2.u ? n2 = t2.h.subarray(n2, n2 + e2) : (t2 = t2.h, n2 = n2 === (e2 = n2 + e2) ? P() : Y ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), V(n2);
}
var dt = class {
  constructor(t2, e2) {
    this.h = null, this.u = false, this.g = this.l = this.v = 0, ot(this, t2, e2);
  }
  clear() {
    this.h = null, this.u = false, this.g = this.l = this.v = 0, this.W = false;
  }
  m() {
    const t2 = this.h;
    let e2 = this.g, n2 = t2[e2++], r2 = 127 & n2;
    if (128 & n2 && (n2 = t2[e2++], r2 |= (127 & n2) << 7, 128 & n2 && (n2 = t2[e2++], r2 |= (127 & n2) << 14, 128 & n2 && (n2 = t2[e2++], r2 |= (127 & n2) << 21, 128 & n2 && (n2 = t2[e2++], r2 |= n2 << 28, 128 & n2 && 128 & t2[e2++] && 128 & t2[e2++] && 128 & t2[e2++] && 128 & t2[e2++] && 128 & t2[e2++])))))
      throw G();
    return at(this, e2), r2;
  }
  j() {
    return this.m() >>> 0;
  }
  B() {
    var t2 = ut(this);
    const e2 = 2 * (t2 >> 31) + 1, n2 = t2 >>> 23 & 255;
    return t2 &= 8388607, 255 == n2 ? t2 ? NaN : 1 / 0 * e2 : 0 == n2 ? e2 * Math.pow(2, -149) * t2 : e2 * Math.pow(2, n2 - 150) * (t2 + Math.pow(2, 23));
  }
  C() {
    return this.m();
  }
};
var pt = [];
function gt(t2) {
  var e2 = t2.g;
  if (e2.g == e2.l)
    return false;
  t2.l = t2.g.g;
  var n2 = t2.g.j();
  if (e2 = n2 >>> 3, !(0 <= (n2 &= 7) && 5 >= n2))
    throw N(n2, t2.l);
  if (1 > e2)
    throw Error(`Invalid field number: ${e2} (at position ${t2.l})`);
  return t2.m = e2, t2.h = n2, true;
}
function mt(t2) {
  switch (t2.h) {
    case 0:
      0 != t2.h ? mt(t2) : ht(t2.g);
      break;
    case 1:
      at(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (2 != t2.h)
        mt(t2);
      else {
        var e2 = t2.g.j();
        at(t2 = t2.g, t2.g + e2);
      }
      break;
    case 5:
      at(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (e2 = t2.m; ; ) {
        if (!gt(t2))
          throw Error("Unmatched start-group tag: stream EOF");
        if (4 == t2.h) {
          if (t2.m != e2)
            throw Error("Unmatched end-group tag");
          break;
        }
        mt(t2);
      }
      break;
    default:
      throw N(t2.h, t2.l);
  }
}
function yt(t2, e2, n2) {
  const r2 = t2.g.l, i2 = t2.g.j(), s2 = t2.g.g + i2;
  let o2 = s2 - r2;
  if (0 >= o2 && (t2.g.l = s2, n2(e2, t2, void 0, void 0, void 0), o2 = s2 - t2.g.g), o2)
    throw Error(`Message parsing ended unexpectedly. Expected to read ${i2} bytes, instead read ${i2 - o2} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return t2.g.g = s2, t2.g.l = r2, e2;
}
function vt(t2) {
  var e2 = t2.g.j(), a2 = lt(t2 = t2.g, e2);
  if (t2 = t2.h, o) {
    var c2, h2 = t2;
    (c2 = s) || (c2 = s = new TextDecoder("utf-8", { fatal: true })), t2 = a2 + e2, h2 = 0 === a2 && t2 === h2.length ? h2 : h2.subarray(a2, t2);
    try {
      var u2 = c2.decode(h2);
    } catch (t3) {
      if (void 0 === i) {
        try {
          c2.decode(new Uint8Array([128]));
        } catch (t4) {
        }
        try {
          c2.decode(new Uint8Array([97])), i = true;
        } catch (t4) {
          i = false;
        }
      }
      throw !i && (s = void 0), t3;
    }
  } else {
    e2 = (u2 = a2) + e2, a2 = [];
    let i2, s2 = null;
    for (; u2 < e2; ) {
      var l2 = t2[u2++];
      128 > l2 ? a2.push(l2) : 224 > l2 ? u2 >= e2 ? n() : (i2 = t2[u2++], 194 > l2 || 128 != (192 & i2) ? (u2--, n()) : a2.push((31 & l2) << 6 | 63 & i2)) : 240 > l2 ? u2 >= e2 - 1 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 224 === l2 && 160 > i2 || 237 === l2 && 160 <= i2 || 128 != (192 & (h2 = t2[u2++])) ? (u2--, n()) : a2.push((15 & l2) << 12 | (63 & i2) << 6 | 63 & h2)) : 244 >= l2 ? u2 >= e2 - 2 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 0 != i2 - 144 + (l2 << 28) >> 30 || 128 != (192 & (h2 = t2[u2++])) || 128 != (192 & (c2 = t2[u2++])) ? (u2--, n()) : (l2 = (7 & l2) << 18 | (63 & i2) << 12 | (63 & h2) << 6 | 63 & c2, l2 -= 65536, a2.push(55296 + (l2 >> 10 & 1023), 56320 + (1023 & l2)))) : n(), 8192 <= a2.length && (s2 = r(s2, a2), a2.length = 0);
    }
    u2 = r(s2, a2);
  }
  return u2;
}
function _t(t2) {
  const e2 = t2.g.j();
  return ft(t2.g, e2);
}
function wt(t2, e2, n2) {
  var r2 = t2.g.j();
  for (r2 = t2.g.g + r2; t2.g.g < r2; )
    n2.push(e2.call(t2.g));
}
var bt = [];
function Et(t2) {
  return t2 ? /^\d+$/.test(t2) ? (it(t2), new At($, q)) : null : Tt || (Tt = new At(0, 0));
}
var At = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var Tt;
function kt(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (it(t2), new St($, q)) : null : xt || (xt = new St(0, 0));
}
var St = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var xt;
function Ft(t2, e2, n2) {
  for (; 0 < n2 || 127 < e2; )
    t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
  t2.g.push(e2);
}
function Lt(t2, e2) {
  for (; 127 < e2; )
    t2.g.push(127 & e2 | 128), e2 >>>= 7;
  t2.g.push(e2);
}
function Mt(t2, e2) {
  if (0 <= e2)
    Lt(t2, e2);
  else {
    for (let n2 = 0; 9 > n2; n2++)
      t2.g.push(127 & e2 | 128), e2 >>= 7;
    t2.g.push(1);
  }
}
function Ot(t2, e2) {
  t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
}
function Pt(t2, e2) {
  0 !== e2.length && (t2.l.push(e2), t2.h += e2.length);
}
function It(t2, e2, n2) {
  Lt(t2.g, 8 * e2 + n2);
}
function Ct(t2, e2) {
  return It(t2, e2, 2), e2 = t2.g.end(), Pt(t2, e2), e2.push(t2.h), e2;
}
function Rt(t2, e2) {
  var n2 = e2.pop();
  for (n2 = t2.h + t2.g.length() - n2; 127 < n2; )
    e2.push(127 & n2 | 128), n2 >>>= 7, t2.h++;
  e2.push(n2), t2.h++;
}
function Dt(t2, e2, n2) {
  It(t2, e2, 2), Lt(t2.g, n2.length), Pt(t2, t2.g.end()), Pt(t2, n2);
}
function Bt(t2, e2, n2, r2) {
  null != n2 && (e2 = Ct(t2, e2), r2(n2, t2), Rt(t2, e2));
}
var Ut = class {
  constructor(t2, e2, n2, r2) {
    this.g = t2, this.h = e2, this.l = n2, this.la = r2;
  }
};
function Nt(t2) {
  return Array.prototype.slice.call(t2);
}
var Gt = "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : void 0;
var jt = Gt ? (t2, e2) => {
  t2[Gt] |= e2;
} : (t2, e2) => {
  void 0 !== t2.D ? t2.D |= e2 : Object.defineProperties(t2, { D: { value: e2, configurable: true, writable: true, enumerable: false } });
};
function Vt(t2) {
  const e2 = Xt(t2);
  1 != (1 & e2) && (Object.isFrozen(t2) && (t2 = Nt(t2)), Yt(t2, 1 | e2));
}
var zt = Gt ? (t2, e2) => {
  t2[Gt] &= ~e2;
} : (t2, e2) => {
  void 0 !== t2.D && (t2.D &= ~e2);
};
function Wt(t2, e2, n2) {
  return n2 ? t2 | e2 : t2 & ~e2;
}
var Xt = Gt ? (t2) => 0 | t2[Gt] : (t2) => 0 | t2.D;
var Ht = Gt ? (t2) => t2[Gt] : (t2) => t2.D;
var Yt = Gt ? (t2, e2) => {
  t2[Gt] = e2;
} : (t2, e2) => {
  void 0 !== t2.D ? t2.D = e2 : Object.defineProperties(t2, { D: { value: e2, configurable: true, writable: true, enumerable: false } });
};
function Kt() {
  var t2 = [];
  return jt(t2, 1), t2;
}
function $t(t2) {
  return jt(t2, 34), t2;
}
function qt(t2, e2) {
  Yt(e2, -14591 & (0 | t2));
}
function Jt(t2, e2) {
  Yt(e2, -14557 & (34 | t2));
}
function Zt(t2) {
  return 0 === (t2 = t2 >> 14 & 1023) ? 536870912 : t2;
}
var Qt = {};
var te = {};
function ee(t2) {
  return !(!t2 || "object" != typeof t2 || t2.Ia !== te);
}
function ne(t2) {
  return null !== t2 && "object" == typeof t2 && !Array.isArray(t2) && t2.constructor === Object;
}
var re = !f;
function ie(t2, e2, n2) {
  if (null != t2) {
    if ("string" == typeof t2)
      t2 = t2 ? new U(t2, I) : D();
    else if (t2.constructor !== U)
      if (M(t2))
        t2 = n2 ? V(t2) : t2.length ? new U(new Uint8Array(t2), I) : D();
      else {
        if (!e2)
          throw Error();
        t2 = void 0;
      }
  }
  return t2;
}
function se(t2, e2, n2) {
  if (!Array.isArray(t2) || t2.length)
    return false;
  const r2 = Xt(t2);
  return !!(1 & r2) || !(!e2 || !(Array.isArray(e2) ? e2.includes(n2) : e2.has(n2))) && (Yt(t2, 1 | r2), true);
}
var oe;
var ae = [];
function ce(t2) {
  if (2 & t2)
    throw Error();
}
Yt(ae, 55), oe = Object.freeze(ae);
var he = class _he {
  constructor(t2, e2, n2) {
    this.l = 0, this.g = t2, this.h = e2, this.m = n2;
  }
  next() {
    if (this.l < this.g.length) {
      const t2 = this.g[this.l++];
      return { done: false, value: this.h ? this.h.call(this.m, t2) : t2 };
    }
    return { done: true, value: void 0 };
  }
  [Symbol.iterator]() {
    return new _he(this.g, this.h, this.m);
  }
};
var ue = {};
var le;
var fe;
function de(t2, e2) {
  (e2 = le ? e2[le] : void 0) && (t2[le] = Nt(e2));
}
function pe(t2, e2) {
  t2.__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = e2;
}
function ge(t2) {
  return pe(t2 = Error(t2), "warning"), t2;
}
function me(t2) {
  return null == t2 ? t2 : "number" == typeof t2 || "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
}
function ye(t2) {
  return null == t2 ? t2 : "boolean" == typeof t2 || "number" == typeof t2 ? !!t2 : void 0;
}
var ve = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function _e(t2) {
  const e2 = typeof t2;
  return "number" === e2 ? Number.isFinite(t2) : "string" === e2 && ve.test(t2);
}
function we(t2) {
  if (null == t2)
    return t2;
  if ("string" == typeof t2) {
    if (!t2)
      return;
    t2 = +t2;
  }
  return "number" == typeof t2 ? t2 : void 0;
}
function be(t2) {
  if (null == t2)
    return t2;
  if ("string" == typeof t2) {
    if (!t2)
      return;
    t2 = +t2;
  }
  return "number" == typeof t2 ? t2 : void 0;
}
function Ee(t2) {
  return Math.trunc(t2);
}
function Ae(t2, e2) {
  var n2 = Math.trunc(Number(t2));
  return Number.isSafeInteger(n2) ? String(n2) : (-1 !== (n2 = t2.indexOf(".")) && (t2 = t2.substring(0, n2)), e2 && (it(t2), t2 = rt()), t2);
}
function Te(t2) {
  return null == t2 ? t2 : _e(t2) ? "number" == typeof t2 ? Ee(t2) : Ae(t2, false) : void 0;
}
function ke(t2) {
  if ("string" != typeof t2)
    throw Error();
  return t2;
}
function Se(t2) {
  if (null != t2 && "string" != typeof t2)
    throw Error();
  return t2;
}
function xe(t2) {
  return null == t2 || "string" == typeof t2 ? t2 : void 0;
}
function Fe(t2, e2, n2, r2) {
  if (null != t2 && "object" == typeof t2 && t2.P === Qt)
    return t2;
  if (!Array.isArray(t2))
    return n2 ? 2 & r2 ? (t2 = e2[Le]) ? e2 = t2 : ($t((t2 = new e2()).s), e2 = e2[Le] = t2) : e2 = new e2() : e2 = void 0, e2;
  let i2 = n2 = Xt(t2);
  return 0 === i2 && (i2 |= 32 & r2), i2 |= 2 & r2, i2 !== n2 && Yt(t2, i2), new e2(t2);
}
var Le = "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : "di";
function Me(t2) {
  return t2;
}
function Oe(t2, e2, n2) {
  if (e2) {
    var r2 = !!r2;
    if (!_e(e2 = t2))
      throw ge("int64");
    "string" == typeof e2 ? r2 = Ae(e2, r2) : r2 ? (e2 = Math.trunc(e2), !r2 || Number.isSafeInteger(e2) ? r2 = String(e2) : (J(e2), r2 = rt())) : r2 = Ee(e2);
  } else
    r2 = Te(t2);
  return "string" == typeof (n2 = null == (t2 = r2) ? n2 ? 0 : void 0 : t2) && (r2 = +n2, Number.isSafeInteger(r2)) ? r2 : n2;
}
var Pe;
var Ie;
var Ce;
function Re(t2) {
  switch (typeof t2) {
    case "boolean":
      return Ie || (Ie = [0, void 0, true]);
    case "number":
      return 0 < t2 ? void 0 : 0 === t2 ? Ce || (Ce = [0, void 0]) : [-t2, void 0];
    case "string":
      return [0, t2];
    case "object":
      return t2;
  }
}
function De(t2, e2) {
  return Be(t2, e2[0], e2[1]);
}
function Be(t2, e2, n2) {
  if (null == t2 && (t2 = Pe), Pe = void 0, null == t2) {
    var r2 = 96;
    n2 ? (t2 = [n2], r2 |= 512) : t2 = [], e2 && (r2 = -16760833 & r2 | (1023 & e2) << 14);
  } else {
    if (!Array.isArray(t2))
      throw Error();
    if (64 & (r2 = Xt(t2)))
      return fe && delete t2[fe], t2;
    if (r2 |= 64, n2 && (r2 |= 512, n2 !== t2[0]))
      throw Error();
    t: {
      if (n2 = r2, r2 = t2.length) {
        const i2 = r2 - 1;
        if (ne(t2[i2])) {
          if (1024 <= (e2 = i2 - (+!!(512 & (n2 |= 256)) - 1)))
            throw Error();
          r2 = -16760833 & n2 | (1023 & e2) << 14;
          break t;
        }
      }
      if (e2) {
        if (1024 < (e2 = Math.max(e2, r2 - (+!!(512 & n2) - 1))))
          throw Error();
        r2 = -16760833 & n2 | (1023 & e2) << 14;
      } else
        r2 = n2;
    }
  }
  return Yt(t2, r2), t2;
}
var Ue = function() {
  try {
    return new class extends Map {
      constructor() {
        super();
      }
    }(), false;
  } catch {
    return true;
  }
}();
var Ne = class {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t2) {
    return this.g.get(t2);
  }
  set(t2, e2) {
    return this.g.set(t2, e2), this.size = this.g.size, this;
  }
  delete(t2) {
    return t2 = this.g.delete(t2), this.size = this.g.size, t2;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t2) {
    return this.g.has(t2);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t2, e2) {
    return this.g.forEach(t2, e2);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var Ge = Ue ? (Object.setPrototypeOf(Ne.prototype, Map.prototype), Object.defineProperties(Ne.prototype, { size: { value: 0, configurable: true, enumerable: true, writable: true } }), Ne) : class extends Map {
  constructor() {
    super();
  }
};
function je(t2) {
  if (2 & t2.I)
    throw Error("Cannot mutate an immutable Map");
}
var Ve = class extends Ge {
  constructor(t2, e2, n2 = Me, r2 = Me) {
    super();
    let i2 = Xt(t2);
    i2 |= 64, Yt(t2, i2), this.I = i2, this.O = e2, this.J = n2 || Me, this.S = this.O ? ze : r2 || Me;
    for (let s2 = 0; s2 < t2.length; s2++) {
      const o2 = t2[s2], a2 = n2(o2[0], false, true);
      let c2 = o2[1];
      e2 ? void 0 === c2 && (c2 = null) : c2 = r2(o2[1], false, true, void 0, void 0, i2), super.set(a2, c2);
    }
  }
  ka(t2 = We) {
    return this.R(t2);
  }
  R(t2 = We) {
    const e2 = [], n2 = super.entries();
    for (var r2; !(r2 = n2.next()).done; )
      (r2 = r2.value)[0] = t2(r2[0]), r2[1] = t2(r2[1]), e2.push(r2);
    return e2;
  }
  clear() {
    je(this), super.clear();
  }
  delete(t2) {
    return je(this), super.delete(this.J(t2, true, false));
  }
  entries() {
    var t2 = this.ha();
    return new he(t2, Xe, this);
  }
  keys() {
    return this.Ha();
  }
  values() {
    var t2 = this.ha();
    return new he(t2, Ve.prototype.get, this);
  }
  forEach(t2, e2) {
    super.forEach((n2, r2) => {
      t2.call(e2, this.get(r2), r2, this);
    });
  }
  set(t2, e2) {
    return je(this), null == (t2 = this.J(t2, true, false)) ? this : null == e2 ? (super.delete(t2), this) : super.set(t2, this.S(e2, true, true, this.O, false, this.I));
  }
  Oa(t2) {
    const e2 = this.J(t2[0], false, true);
    t2 = t2[1], t2 = this.O ? void 0 === t2 ? null : t2 : this.S(t2, false, true, void 0, false, this.I), super.set(e2, t2);
  }
  has(t2) {
    return super.has(this.J(t2, false, false));
  }
  get(t2) {
    t2 = this.J(t2, false, false);
    const e2 = super.get(t2);
    if (void 0 !== e2) {
      var n2 = this.O;
      return n2 ? ((n2 = this.S(e2, false, true, n2, this.ra, this.I)) !== e2 && super.set(t2, n2), n2) : e2;
    }
  }
  ha() {
    return Array.from(super.keys());
  }
  Ha() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function ze(t2, e2, n2, r2, i2, s2) {
  return t2 = Fe(t2, r2, n2, s2), i2 && (t2 = Qe(t2)), t2;
}
function We(t2) {
  return t2;
}
function Xe(t2) {
  return [t2, this.get(t2)];
}
function He(t2, e2, n2, r2, i2, s2) {
  if (null != t2) {
    if (Array.isArray(t2))
      t2 = i2 && 0 == t2.length && 1 & Xt(t2) ? void 0 : s2 && 2 & Xt(t2) ? t2 : Ye(t2, e2, n2, void 0 !== r2, i2, s2);
    else if (ne(t2)) {
      const o2 = {};
      for (let a2 in t2)
        o2[a2] = He(t2[a2], e2, n2, r2, i2, s2);
      t2 = o2;
    } else
      t2 = e2(t2, r2);
    return t2;
  }
}
function Ye(t2, e2, n2, r2, i2, s2) {
  const o2 = r2 || n2 ? Xt(t2) : 0;
  r2 = r2 ? !!(32 & o2) : void 0;
  const a2 = Nt(t2);
  for (let t3 = 0; t3 < a2.length; t3++)
    a2[t3] = He(a2[t3], e2, n2, r2, i2, s2);
  return n2 && (de(a2, t2), n2(o2, a2)), a2;
}
function Ke(t2) {
  return He(t2, $e, void 0, void 0, false, false);
}
function $e(t2) {
  return t2.P === Qt ? t2.toJSON() : t2 instanceof Ve ? t2.ka(Ke) : function(t3) {
    switch (typeof t3) {
      case "number":
        return isFinite(t3) ? t3 : String(t3);
      case "boolean":
        return t3 ? 1 : 0;
      case "object":
        if (t3) {
          if (Array.isArray(t3))
            return re || !se(t3, void 0, 9999) ? t3 : void 0;
          if (M(t3))
            return k(t3);
          if (t3 instanceof U) {
            const e2 = t3.T;
            return null == e2 ? "" : "string" == typeof e2 ? e2 : t3.T = k(e2);
          }
          if (t3 instanceof Ve)
            return t3 = t3.ka(), X || 0 !== t3.length ? t3 : void 0;
        }
    }
    return t3;
  }(t2);
}
function qe(t2, e2, n2 = Jt) {
  if (null != t2) {
    if (A && t2 instanceof Uint8Array)
      return e2 ? t2 : new Uint8Array(t2);
    if (Array.isArray(t2)) {
      var r2 = Xt(t2);
      return 2 & r2 ? t2 : (e2 && (e2 = 0 === r2 || !!(32 & r2) && !(64 & r2 || !(16 & r2))), e2 ? (Yt(t2, -12293 & (34 | r2)), t2) : Ye(t2, qe, 4 & r2 ? Jt : n2, true, false, true));
    }
    return t2.P === Qt ? (n2 = t2.s, t2 = 2 & (r2 = Ht(n2)) ? t2 : Je(t2, n2, r2, true)) : t2 instanceof Ve && (n2 = $t(t2.R(qe)), t2 = new Ve(n2, t2.O, t2.J, t2.S)), t2;
  }
}
function Je(t2, e2, n2, r2) {
  return t2 = t2.constructor, Pe = e2 = Ze(e2, n2, r2), e2 = new t2(e2), Pe = void 0, e2;
}
function Ze(t2, e2, n2) {
  const r2 = n2 || 2 & e2 ? Jt : qt, i2 = !!(32 & e2);
  return t2 = function(t3, e3, n3) {
    const r3 = Nt(t3);
    var i3 = r3.length;
    const s2 = 256 & e3 ? r3[i3 - 1] : void 0;
    for (i3 += s2 ? -1 : 0, e3 = 512 & e3 ? 1 : 0; e3 < i3; e3++)
      r3[e3] = n3(r3[e3]);
    if (s2) {
      e3 = r3[e3] = {};
      for (const t4 in s2)
        e3[t4] = n3(s2[t4]);
    }
    return de(r3, t3), r3;
  }(t2, e2, (t3) => qe(t3, i2, r2)), jt(t2, 32 | (n2 ? 2 : 0)), t2;
}
function Qe(t2) {
  const e2 = t2.s, n2 = Ht(e2);
  return 2 & n2 ? Je(t2, e2, n2, false) : t2;
}
function tn(t2, e2) {
  return en(t2 = t2.s, Ht(t2), e2);
}
function en(t2, e2, n2, r2) {
  if (-1 === n2)
    return null;
  if (n2 >= Zt(e2)) {
    if (256 & e2)
      return t2[t2.length - 1][n2];
  } else {
    var i2 = t2.length;
    if (r2 && 256 & e2 && null != (r2 = t2[i2 - 1][n2]))
      return r2;
    if ((e2 = n2 + (+!!(512 & e2) - 1)) < i2)
      return t2[e2];
  }
}
function nn(t2, e2, n2, r2) {
  const i2 = t2.s;
  let s2 = Ht(i2);
  return ce(s2), rn(i2, s2, e2, n2, r2), t2;
}
function rn(t2, e2, n2, r2, i2) {
  var s2 = Zt(e2);
  if (n2 >= s2 || i2) {
    if (i2 = e2, 256 & e2)
      s2 = t2[t2.length - 1];
    else {
      if (null == r2)
        return i2;
      s2 = t2[s2 + (+!!(512 & e2) - 1)] = {}, i2 |= 256;
    }
    return s2[n2] = r2, i2 !== e2 && Yt(t2, i2), i2;
  }
  return t2[n2 + (+!!(512 & e2) - 1)] = r2, 256 & e2 && (n2 in (t2 = t2[t2.length - 1]) && delete t2[n2]), e2;
}
function sn(t2, e2, n2, r2, i2) {
  var s2 = 2 & e2;
  let o2 = en(t2, e2, n2, i2);
  Array.isArray(o2) || (o2 = oe);
  const a2 = !(2 & r2);
  r2 = !(1 & r2);
  const c2 = !!(32 & e2);
  let h2 = Xt(o2);
  return 0 !== h2 || !c2 || s2 || a2 ? 1 & h2 || (h2 |= 1, Yt(o2, h2)) : (h2 |= 33, Yt(o2, h2)), s2 ? (t2 = false, 2 & h2 || ($t(o2), t2 = !!(4 & h2)), (r2 || t2) && Object.freeze(o2)) : (s2 = !!(2 & h2) || !!(2048 & h2), r2 && s2 ? (o2 = Nt(o2), r2 = 1, c2 && !a2 && (r2 |= 32), Yt(o2, r2), rn(t2, e2, n2, o2, i2)) : a2 && 32 & h2 && !s2 && zt(o2, 32)), o2;
}
function on(t2, e2) {
  t2 = t2.s;
  let n2 = Ht(t2);
  const r2 = en(t2, n2, e2), i2 = me(r2);
  return null != i2 && i2 !== r2 && rn(t2, n2, e2, i2), i2;
}
function an(t2) {
  t2 = t2.s;
  let e2 = Ht(t2);
  const n2 = en(t2, e2, 1), r2 = ie(n2, true, !!(34 & e2));
  return null != r2 && r2 !== n2 && rn(t2, e2, 1, r2), r2;
}
function cn(t2, e2, n2) {
  var r2 = 2;
  t2 = t2.s;
  let i2 = Ht(t2);
  2 & i2 && (r2 = 1);
  let s2 = sn(t2, i2, e2, 1);
  i2 = Ht(t2);
  var o2 = Xt(s2);
  let a2 = o2, c2 = !!(2 & o2);
  const h2 = c2 && !!(4 & o2);
  if (!(4 & o2)) {
    Object.isFrozen(s2) && (s2 = Nt(s2), a2 = 0, c2 = !!(2 & (o2 = Tn(o2, i2, false))), i2 = rn(t2, i2, e2, s2)), o2 = Wt(o2, 4, false), o2 = Wt(o2, 4096, false), o2 = Wt(o2, 8192, false);
    let r3 = 0, h3 = 0;
    for (; r3 < s2.length; r3++) {
      const t3 = n2(s2[r3]);
      null != t3 && (s2[h3++] = t3);
    }
    h3 < r3 && (s2.length = h3), o2 = Wt(o2, 20, true);
  }
  return h2 || ((n2 = 1 === r2) && (o2 = Wt(o2, 2, true)), o2 !== a2 && Yt(s2, o2), (n2 || c2) && Object.freeze(s2)), 2 === r2 && c2 && (s2 = Nt(s2), o2 = Tn(o2, i2, false), Yt(s2, o2), rn(t2, i2, e2, s2)), s2;
}
var hn;
function un() {
  return hn ?? (hn = new Ve($t([]), void 0, void 0, void 0, ue));
}
function ln(t2) {
  t2 = Nt(t2);
  for (let e2 = 0; e2 < t2.length; e2++) {
    const n2 = t2[e2] = Nt(t2[e2]);
    Array.isArray(n2[1]) && (n2[1] = $t(n2[1]));
  }
  return t2;
}
function fn(t2, e2, n2) {
  {
    const o2 = t2.s;
    let a2 = Ht(o2);
    if (ce(a2), null == n2)
      rn(o2, a2, e2);
    else {
      var r2 = t2 = Xt(n2), i2 = !!(2 & t2) || Object.isFrozen(n2), s2 = !i2 && false;
      if (!(4 & t2)) {
        t2 = 21, i2 && (n2 = Nt(n2), r2 = 0, t2 = Tn(t2, a2, true)), i2 = !!(4 & t2) && !!(4096 & t2);
        for (let t3 = 0; t3 < n2.length; t3++)
          n2[t3] = ke(n2[t3]);
      }
      s2 && (t2 = Wt(t2, 2, true)), t2 !== r2 && Yt(n2, t2), s2 && Object.freeze(n2), rn(o2, a2, e2, n2);
    }
  }
}
function dn(t2, e2, n2, r2) {
  const i2 = Ht(t2);
  ce(i2), t2 = sn(t2, i2, e2, 2), r2 = n2(r2, !!(4 & (e2 = Xt(t2))) && !!(4096 & e2)), t2.push(r2);
}
function pn(t2) {
  return t2;
}
function gn(t2, e2) {
  return mn(t2 = t2.s, Ht(t2), os) === e2 ? e2 : -1;
}
function mn(t2, e2, n2) {
  let r2 = 0;
  for (let i2 = 0; i2 < n2.length; i2++) {
    const s2 = n2[i2];
    null != en(t2, e2, s2) && (0 !== r2 && (e2 = rn(t2, e2, r2)), r2 = s2);
  }
  return r2;
}
function yn(t2, e2, n2, r2) {
  let i2 = Ht(t2);
  ce(i2);
  const s2 = en(t2, i2, n2, r2);
  let o2;
  if (null != s2 && s2.P === Qt)
    return (e2 = Qe(s2)) !== s2 && rn(t2, i2, n2, e2, r2), e2.s;
  if (Array.isArray(s2)) {
    const t3 = Xt(s2);
    o2 = 2 & t3 ? Ze(s2, t3, false) : s2, o2 = De(o2, e2);
  } else
    o2 = De(void 0, e2);
  return o2 !== s2 && rn(t2, i2, n2, o2, r2), o2;
}
function vn(t2, e2, n2, r2) {
  t2 = t2.s;
  let i2 = Ht(t2);
  const s2 = en(t2, i2, n2, r2);
  return (e2 = Fe(s2, e2, false, i2)) !== s2 && null != e2 && rn(t2, i2, n2, e2, r2), e2;
}
function _n(t2, e2, n2, r2 = false) {
  if (null == (e2 = vn(t2, e2, n2, r2)))
    return e2;
  t2 = t2.s;
  let i2 = Ht(t2);
  if (!(2 & i2)) {
    const s2 = Qe(e2);
    s2 !== e2 && rn(t2, i2, n2, e2 = s2, r2);
  }
  return e2;
}
function wn(t2, e2, n2, r2, i2, s2, o2) {
  const a2 = 1 === i2;
  i2 = 2 === i2, s2 = !!s2;
  var c2 = !!(2 & e2) && i2;
  let h2 = sn(t2, e2, r2, 3);
  e2 = Ht(t2);
  var u2 = Xt(h2), l2 = !!(2 & u2);
  const f2 = !!(4 & u2), d2 = !!(32 & u2);
  let p2 = l2 && f2 || !!(2048 & u2);
  if (!f2) {
    var g2 = h2, m2 = e2;
    const t3 = !!(2 & u2);
    t3 && (m2 = Wt(m2, 2, true));
    let r3 = !t3, i3 = true, s3 = 0, o3 = 0;
    for (; s3 < g2.length; s3++) {
      const e3 = Fe(g2[s3], n2, false, m2);
      if (e3 instanceof n2) {
        if (!t3) {
          const t4 = !!(2 & Xt(e3.s));
          r3 && (r3 = !t4), i3 && (i3 = t4);
        }
        g2[o3++] = e3;
      }
    }
    o3 < s3 && (g2.length = o3), u2 = Wt(u2, 4, true), u2 = Wt(u2, 16, i3), u2 = Wt(u2, 8, r3), Yt(g2, u2), l2 && !c2 && (Object.freeze(h2), p2 = true);
  }
  if (n2 = u2, c2 = !!(8 & u2) || a2 && !h2.length, o2 && !c2) {
    for (p2 && (h2 = Nt(h2), p2 = false, n2 = 0, u2 = Tn(u2, e2, s2), e2 = rn(t2, e2, r2, h2)), o2 = h2, c2 = u2, l2 = 0; l2 < o2.length; l2++)
      (g2 = o2[l2]) !== (u2 = Qe(g2)) && (o2[l2] = u2);
    c2 = Wt(c2, 8, true), u2 = c2 = Wt(c2, 16, !o2.length);
  }
  return p2 || (a2 ? u2 = Wt(u2, !h2.length || 16 & u2 && (!f2 || d2) ? 2 : 2048, true) : s2 || (u2 = Wt(u2, 32, false)), u2 !== n2 && Yt(h2, u2), a2 && (Object.freeze(h2), p2 = true)), i2 && p2 && (h2 = Nt(h2), u2 = Tn(u2, e2, s2), Yt(h2, u2), rn(t2, e2, r2, h2)), h2;
}
function bn(t2, e2, n2) {
  t2 = t2.s;
  const r2 = Ht(t2), i2 = !!(2 & r2);
  return wn(t2, r2, e2, n2, i2 ? 1 : 2, false, !i2);
}
function En(t2, e2, n2, r2, i2) {
  return null == r2 && (r2 = void 0), nn(t2, n2, r2, i2);
}
function An(t2, e2, n2, r2) {
  null == r2 && (r2 = void 0), t2 = t2.s;
  let i2 = Ht(t2);
  ce(i2), (n2 = mn(t2, i2, n2)) && n2 !== e2 && null != r2 && (i2 = rn(t2, i2, n2)), rn(t2, i2, e2, r2);
}
function Tn(t2, e2, n2) {
  return t2 = Wt(t2, 2, !!(2 & e2)), t2 = Wt(t2, 32, !!(32 & e2) && n2), Wt(t2, 2048, false);
}
function kn(t2, e2, n2) {
  t2 = t2.s;
  const r2 = Ht(t2);
  ce(r2), t2 = wn(t2, r2, e2, 1, 2), e2 = null != n2 ? n2 : new e2(), t2.push(e2), 2 & Xt(e2.s) ? zt(t2, 8) : zt(t2, 16);
}
function Sn(t2, e2) {
  return we(tn(t2, e2));
}
function xn(t2, e2) {
  return xe(tn(t2, e2));
}
function Fn(t2) {
  return t2 ?? 0;
}
function Ln(t2, e2) {
  return Fn(on(t2, e2));
}
function Mn(t2, e2, n2) {
  if (null != n2) {
    if ("boolean" != typeof n2)
      throw t2 = typeof n2, Error(`Expected boolean but got ${"object" != t2 ? t2 : n2 ? Array.isArray(n2) ? "array" : t2 : "null"}: ${n2}`);
    n2 = !!n2;
  }
  nn(t2, e2, n2);
}
function On(e2, n2, r2) {
  if (null != r2) {
    if ("number" != typeof r2)
      throw ge("int32");
    if (!Number.isFinite(r2)) {
      const e3 = Error();
      pe(e3, "incident"), function(e4) {
        t.setTimeout(() => {
          throw e4;
        }, 0);
      }(e3);
    }
  }
  nn(e2, n2, r2);
}
function Pn(t2, e2, n2) {
  if (null != n2 && "number" != typeof n2)
    throw Error(`Value of float/double field must be a number, found ${typeof n2}: ${n2}`);
  nn(t2, e2, n2);
}
function In(t2, e2, n2) {
  e2.g ? e2.m(t2, e2.g, e2.h, n2, true) : e2.m(t2, e2.h, n2, true);
}
Ve.prototype.toJSON = void 0, Ve.prototype.Ia = te, Object.freeze({});
var Cn = class {
  constructor(t2, e2) {
    this.s = Be(t2, e2);
  }
  toJSON() {
    return Rn(this, Ye(this.s, $e, void 0, void 0, false, false), true);
  }
  l() {
    var t2 = no;
    return t2.g ? t2.l(this, t2.g, t2.h, true, 2) : t2.l(this, t2.h, t2.defaultValue, true);
  }
  clone() {
    const t2 = this.s;
    return Je(this, t2, Ht(t2), false);
  }
  H() {
    return !!(2 & Xt(this.s));
  }
};
function Rn(t2, e2, n2) {
  const r2 = t2.constructor.A;
  var i2 = Ht(n2 ? t2.s : e2), s2 = Zt(i2), o2 = false;
  if (r2 && re) {
    if (!n2) {
      var a2;
      if ((e2 = Nt(e2)).length && ne(a2 = e2[e2.length - 1])) {
        for (o2 = 0; o2 < r2.length; o2++)
          if (r2[o2] >= s2) {
            Object.assign(e2[e2.length - 1] = {}, a2);
            break;
          }
      }
      o2 = true;
    }
    var c2;
    s2 = e2, n2 = !n2, t2 = Zt(a2 = Ht(t2.s)), a2 = +!!(512 & a2) - 1;
    for (let e3 = 0; e3 < r2.length; e3++) {
      var h2 = r2[e3];
      if (h2 < t2) {
        var u2 = s2[h2 += a2];
        null == u2 ? s2[h2] = n2 ? oe : Kt() : n2 && u2 !== oe && Vt(u2);
      } else {
        if (!c2) {
          var l2 = void 0;
          s2.length && ne(l2 = s2[s2.length - 1]) ? c2 = l2 : s2.push(c2 = {});
        }
        u2 = c2[h2], null == c2[h2] ? c2[h2] = n2 ? oe : Kt() : n2 && u2 !== oe && Vt(u2);
      }
    }
  }
  if (!(c2 = e2.length))
    return e2;
  let f2, d2;
  if (ne(l2 = e2[c2 - 1])) {
    t: {
      var p2 = l2;
      for (var g2 in s2 = {}, n2 = false, p2)
        t2 = p2[g2], Array.isArray(t2) && (a2 = t2, (!H && se(t2, r2, +g2) || !X && ee(t2) && 0 === t2.size) && (t2 = null), t2 != a2 && (n2 = true)), null != t2 ? s2[g2] = t2 : n2 = true;
      if (n2) {
        for (let t3 in s2) {
          p2 = s2;
          break t;
        }
        p2 = null;
      }
    }
    p2 != l2 && (f2 = true), c2--;
  }
  for (i2 = +!!(512 & i2) - 1; 0 < c2 && (null == (l2 = e2[g2 = c2 - 1]) || !H && se(l2, r2, g2 - i2) || !X && ee(l2) && 0 === l2.size); c2--)
    d2 = true;
  return f2 || d2 ? (e2 = o2 ? e2 : Array.prototype.slice.call(e2, 0, c2), o2 && (e2.length = c2), p2 && e2.push(p2), e2) : e2;
}
function Dn(t2) {
  return Array.isArray(t2) ? t2[0] instanceof Ut ? t2 : [Rr, t2] : [t2, void 0];
}
function Bn(t2, e2) {
  if (Array.isArray(e2)) {
    var n2 = Xt(e2);
    if (4 & n2)
      return e2;
    for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
      const n3 = t2(e2[r2]);
      null != n3 && (e2[i2++] = n3);
    }
    return i2 < r2 && (e2.length = i2), Yt(e2, -12289 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
  }
}
Cn.prototype.P = Qt, Cn.prototype.toString = function() {
  return Rn(this, this.s, false).toString();
};
var Un = Symbol();
function Nn(t2) {
  let e2 = t2[Un];
  if (!e2) {
    const n2 = Hn(t2), r2 = ir(t2), i2 = r2.g;
    e2 = i2 ? (t3, e3) => i2(t3, e3, r2) : (t3, e3) => {
      for (; gt(e3) && 4 != e3.h; ) {
        var i3 = e3.m, s2 = r2[i3];
        if (!s2) {
          var o2 = r2.fa;
          o2 && (o2 = o2[i3]) && (s2 = r2[i3] = Gn(o2));
        }
        s2 && s2(e3, t3, i3) || (i3 = (s2 = e3).l, mt(s2), s2.ea ? s2 = void 0 : (o2 = s2.g.g - i3, s2.g.g = i3, s2 = ft(s2.g, o2)), i3 = t3, s2 && (le || (le = Symbol()), (o2 = i3[le]) ? o2.push(s2) : i3[le] = [s2]));
      }
      n2 === jn || n2 === Vn || n2.Ja || (t3[fe || (fe = Symbol())] = n2);
    }, t2[Un] = e2;
  }
  return e2;
}
function Gn(t2) {
  const e2 = (t2 = Dn(t2))[0].g;
  if (t2 = t2[1]) {
    const n2 = Nn(t2), r2 = ir(t2).K;
    return (t3, i2, s2) => e2(t3, i2, s2, r2, n2);
  }
  return e2;
}
var jn;
var Vn;
var zn = Symbol();
function Wn(t2, e2, n2) {
  const r2 = n2[1];
  let i2;
  if (r2) {
    const n3 = r2[zn];
    i2 = n3 ? n3.K : Re(r2[0]), t2[e2] = n3 ?? r2;
  }
  i2 && i2 === Ie ? (t2.ia || (t2.ia = [])).push(e2) : n2[0] && (t2.ja || (t2.ja = [])).push(e2);
}
function Xn(t2, e2) {
  return [t2.l, !e2 || 0 < e2[0] ? void 0 : e2];
}
function Hn(t2) {
  var e2 = t2[zn];
  if (e2)
    return e2;
  if (!(e2 = Kn(t2, t2[zn] = {}, Xn, Xn, Wn)).ja && !e2.ia) {
    let n2 = true;
    for (let t3 in e2) {
      isNaN(t3) || (n2 = false);
      break;
    }
    n2 ? (e2 = Re(t2[0]) === Ie, e2 = t2[zn] = e2 ? Vn || (Vn = { K: Re(true) }) : jn || (jn = {})) : e2.Ja = true;
  }
  return e2;
}
function Yn(t2, e2, n2) {
  t2[e2] = n2;
}
function Kn(t2, e2, n2, r2, i2 = Yn) {
  e2.K = Re(t2[0]);
  let s2 = 0;
  var o2 = t2[++s2];
  o2 && o2.constructor === Object && (e2.fa = o2, "function" == typeof (o2 = t2[++s2]) && (e2.g = o2, e2.h = t2[++s2], o2 = t2[++s2]));
  const a2 = {};
  for (; Array.isArray(o2) && "number" == typeof o2[0] && 0 < o2[0]; ) {
    for (var c2 = 0; c2 < o2.length; c2++)
      a2[o2[c2]] = o2;
    o2 = t2[++s2];
  }
  for (c2 = 1; void 0 !== o2; ) {
    let l2;
    "number" == typeof o2 && (c2 += o2, o2 = t2[++s2]);
    var h2 = void 0;
    if (o2 instanceof Ut ? l2 = o2 : (l2 = Dr, s2--), l2.la) {
      o2 = t2[++s2], h2 = t2;
      var u2 = s2;
      "function" == typeof o2 && (o2 = o2(), h2[u2] = o2), h2 = o2;
    }
    for (u2 = c2 + 1, "number" == typeof (o2 = t2[++s2]) && 0 > o2 && (u2 -= o2, o2 = t2[++s2]); c2 < u2; c2++) {
      const t3 = a2[c2];
      i2(e2, c2, h2 ? r2(l2, h2, t3) : n2(l2, t3));
    }
  }
  return e2;
}
var $n = Symbol();
function qn(t2) {
  let e2 = t2[$n];
  if (!e2) {
    const n2 = tr(t2);
    e2 = (t3, e3) => or(t3, e3, n2), t2[$n] = e2;
  }
  return e2;
}
var Jn = Symbol();
function Zn(t2) {
  return t2.h;
}
function Qn(t2, e2) {
  let n2, r2;
  const i2 = t2.h;
  return (t3, s2, o2) => i2(t3, s2, o2, r2 || (r2 = tr(e2).K), n2 || (n2 = qn(e2)));
}
function tr(t2) {
  let e2 = t2[Jn];
  return e2 || (e2 = Kn(t2, t2[Jn] = {}, Zn, Qn), er in t2 && Jn in t2 && (t2.length = 0), e2);
}
var er = Symbol();
function nr(t2, e2) {
  const n2 = t2.g;
  return e2 ? (t3, r2, i2) => n2(t3, r2, i2, e2) : n2;
}
function rr(t2, e2, n2) {
  const r2 = t2.g;
  let i2, s2;
  return (t3, o2, a2) => r2(t3, o2, a2, s2 || (s2 = ir(e2).K), i2 || (i2 = Nn(e2)), n2);
}
function ir(t2) {
  let e2 = t2[er];
  return e2 || (Hn(t2), e2 = Kn(t2, t2[er] = {}, nr, rr), er in t2 && Jn in t2 && (t2.length = 0), e2);
}
function sr(t2, e2) {
  var n2 = t2[e2];
  if (n2)
    return n2;
  if ((n2 = t2.fa) && (n2 = n2[e2])) {
    var r2 = (n2 = Dn(n2))[0].h;
    if (n2 = n2[1]) {
      const e3 = qn(n2), i2 = tr(n2).K;
      n2 = (n2 = t2.h) ? n2(i2, e3) : (t3, n3, s2) => r2(t3, n3, s2, i2, e3);
    } else
      n2 = r2;
    return t2[e2] = n2;
  }
}
function or(t2, e2, n2) {
  for (var r2 = Ht(t2), i2 = +!!(512 & r2) - 1, s2 = t2.length, o2 = 512 & r2 ? 1 : 0, a2 = s2 + (256 & r2 ? -1 : 0); o2 < a2; o2++) {
    const r3 = t2[o2];
    if (null == r3)
      continue;
    const s3 = o2 - i2, a3 = sr(n2, s3);
    a3 && a3(e2, r3, s3);
  }
  if (256 & r2) {
    r2 = t2[s2 - 1];
    for (let t3 in r2)
      i2 = +t3, Number.isNaN(i2) || null != (s2 = r2[t3]) && (a2 = sr(n2, i2)) && a2(e2, s2, i2);
  }
  if (t2 = le ? t2[le] : void 0)
    for (Pt(e2, e2.g.end()), n2 = 0; n2 < t2.length; n2++)
      Pt(e2, B(t2[n2]) || P());
}
function ar(t2, e2) {
  return new Ut(t2, e2, false, false);
}
function cr(t2, e2) {
  return new Ut(t2, e2, true, false);
}
function hr(t2, e2) {
  return new Ut(t2, e2, false, true);
}
function ur(t2, e2, n2) {
  rn(t2, Ht(t2), e2, n2);
}
var lr = hr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (t2 = yt(t2, De([void 0, void 0], r2), i2), ce(r2 = Ht(e2)), (i2 = en(e2, r2, n2)) instanceof Ve ? 0 != (2 & i2.I) ? ((i2 = i2.R()).push(t2), rn(e2, r2, n2, i2)) : i2.Oa(t2) : Array.isArray(i2) ? (2 & Xt(i2) && rn(e2, r2, n2, i2 = ln(i2)), i2.push(t2)) : rn(e2, r2, n2, [t2]), true);
}, function(t2, e2, n2, r2, i2) {
  if (e2 instanceof Ve)
    e2.forEach((e3, s2) => {
      Bt(t2, n2, De([s2, e3], r2), i2);
    });
  else if (Array.isArray(e2))
    for (let s2 = 0; s2 < e2.length; s2++) {
      const o2 = e2[s2];
      Array.isArray(o2) && Bt(t2, n2, De(o2, r2), i2);
    }
});
function fr(t2, e2, n2) {
  t:
    if (null != e2) {
      if (_e(e2)) {
        if ("string" == typeof e2) {
          e2 = Ae(e2, false);
          break t;
        }
        if ("number" == typeof e2) {
          e2 = Ee(e2);
          break t;
        }
      }
      e2 = void 0;
    }
  null != e2 && ("string" == typeof e2 && kt(e2), null != e2 && (It(t2, n2, 0), "number" == typeof e2 ? (t2 = t2.g, J(e2), Ft(t2, $, q)) : (n2 = kt(e2), Ft(t2.g, n2.h, n2.g))));
}
function dr(t2, e2, n2) {
  null != (e2 = we(e2)) && null != e2 && (It(t2, n2, 0), Mt(t2.g, e2));
}
function pr(t2, e2, n2) {
  null != (e2 = ye(e2)) && (It(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
}
function gr(t2, e2, n2) {
  null != (e2 = xe(e2)) && Dt(t2, n2, h(e2));
}
function mr(t2, e2, n2, r2, i2) {
  Bt(t2, n2, e2 instanceof Cn ? e2.s : Array.isArray(e2) ? De(e2, r2) : void 0, i2);
}
function yr(t2, e2, n2) {
  null != (e2 = null == e2 || "string" == typeof e2 || M(e2) || e2 instanceof U ? e2 : void 0) && Dt(t2, n2, z(e2).buffer);
}
function vr(t2, e2, n2) {
  return (5 === t2.h || 2 === t2.h) && (e2 = sn(e2, Ht(e2), n2, 2, false), 2 == t2.h ? wt(t2, dt.prototype.B, e2) : e2.push(t2.g.B()), true);
}
var _r;
var wr = ar(function(t2, e2, n2) {
  if (1 !== t2.h)
    return false;
  var r2 = t2.g;
  t2 = ut(r2);
  const i2 = ut(r2);
  r2 = 2 * (i2 >> 31) + 1;
  const s2 = i2 >>> 20 & 2047;
  return t2 = 4294967296 * (1048575 & i2) + t2, ur(e2, n2, 2047 == s2 ? t2 ? NaN : 1 / 0 * r2 : 0 == s2 ? r2 * Math.pow(2, -1074) * t2 : r2 * Math.pow(2, s2 - 1075) * (t2 + 4503599627370496)), true;
}, function(t2, e2, n2) {
  null != (e2 = me(e2)) && (It(t2, n2, 1), t2 = t2.g, (n2 = K || (K = new DataView(new ArrayBuffer(8)))).setFloat64(0, +e2, true), $ = n2.getUint32(0, true), q = n2.getUint32(4, true), Ot(t2, $), Ot(t2, q));
});
var br = ar(function(t2, e2, n2) {
  return 5 === t2.h && (ur(e2, n2, t2.g.B()), true);
}, function(t2, e2, n2) {
  null != (e2 = me(e2)) && (It(t2, n2, 5), t2 = t2.g, Z(e2), Ot(t2, $));
});
var Er = cr(vr, function(t2, e2, n2) {
  if (null != (e2 = Bn(me, e2)))
    for (let s2 = 0; s2 < e2.length; s2++) {
      var r2 = t2, i2 = e2[s2];
      null != i2 && (It(r2, n2, 5), r2 = r2.g, Z(i2), Ot(r2, $));
    }
});
var Ar = cr(vr, function(t2, e2, n2) {
  if (null != (e2 = Bn(me, e2)) && e2.length) {
    It(t2, n2, 2), Lt(t2.g, 4 * e2.length);
    for (let r2 = 0; r2 < e2.length; r2++)
      n2 = t2.g, Z(e2[r2]), Ot(n2, $);
  }
});
var Tr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, ct(t2.g, tt)), true);
}, fr);
var kr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, 0 === (t2 = ct(t2.g, tt)) ? void 0 : t2), true);
}, fr);
var Sr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, ct(t2.g, Q)), true);
}, function(t2, e2, n2) {
  t:
    if (null != e2) {
      if (_e(e2)) {
        if ("string" == typeof e2) {
          var r2 = Math.trunc(Number(e2));
          Number.isSafeInteger(r2) ? e2 = String(r2) : (-1 !== (r2 = e2.indexOf(".")) && (e2 = e2.substring(0, r2)), it(e2), e2 = et($, q));
          break t;
        }
        if ("number" == typeof e2) {
          e2 = Math.trunc(e2);
          break t;
        }
      }
      e2 = void 0;
    }
  null != e2 && ("string" == typeof e2 && Et(e2), null != e2 && (It(t2, n2, 0), "number" == typeof e2 ? (t2 = t2.g, J(e2), Ft(t2, $, q)) : (n2 = Et(e2), Ft(t2.g, n2.h, n2.g))));
});
var xr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, t2.g.m()), true);
}, dr);
var Fr = cr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = sn(e2, Ht(e2), n2, 2, false), 2 == t2.h ? wt(t2, dt.prototype.m, e2) : e2.push(t2.g.m()), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Bn(we, e2)) && e2.length) {
    n2 = Ct(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++)
      Mt(t2.g, e2[n3]);
    Rt(t2, n2);
  }
});
var Lr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, 0 === (t2 = t2.g.m()) ? void 0 : t2), true);
}, dr);
var Mr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, ht(t2.g)), true);
}, pr);
var Or = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, false === (t2 = ht(t2.g)) ? void 0 : t2), true);
}, pr);
var Pr = cr(function(t2, e2, n2) {
  return 2 === t2.h && (dn(e2, n2, pn, t2 = vt(t2)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Bn(xe, e2)))
    for (let i2 = 0; i2 < e2.length; i2++) {
      var r2 = e2[i2];
      null != r2 && Dt(t2, n2, h(r2));
    }
});
var Ir = ar(function(t2, e2, n2) {
  return 2 === t2.h && (ur(e2, n2, "" === (t2 = vt(t2)) ? void 0 : t2), true);
}, gr);
var Cr = ar(function(t2, e2, n2) {
  return 2 === t2.h && (ur(e2, n2, vt(t2)), true);
}, gr);
var Rr = hr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (yt(t2, yn(e2, r2, n2, true), i2), true);
}, mr);
var Dr = hr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (yt(t2, yn(e2, r2, n2), i2), true);
}, mr);
_r = new Ut(function(t2, e2, n2, r2, i2) {
  if (2 !== t2.h)
    return false;
  r2 = De(void 0, r2);
  let s2 = Ht(e2);
  ce(s2);
  let o2 = sn(e2, s2, n2, 3);
  return s2 = Ht(e2), 4 & Xt(o2) && (o2 = Nt(o2), Yt(o2, -2079 & (1 | Xt(o2))), rn(e2, s2, n2, o2)), o2.push(r2), yt(t2, r2, i2), true;
}, function(t2, e2, n2, r2, i2) {
  if (Array.isArray(e2))
    for (let s2 = 0; s2 < e2.length; s2++)
      mr(t2, e2[s2], n2, r2, i2);
}, true, true);
var Br = hr(function(t2, e2, n2, r2, i2, s2) {
  if (2 !== t2.h)
    return false;
  let o2 = Ht(e2);
  return ce(o2), (s2 = mn(e2, o2, s2)) && n2 !== s2 && rn(e2, o2, s2), yt(t2, e2 = yn(e2, r2, n2), i2), true;
}, mr);
var Ur = ar(function(t2, e2, n2) {
  return 2 === t2.h && (ur(e2, n2, _t(t2)), true);
}, yr);
var Nr = cr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = sn(e2, Ht(e2), n2, 2, false), 2 == t2.h ? wt(t2, dt.prototype.j, e2) : e2.push(t2.g.j()), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Bn(be, e2)))
    for (let s2 = 0; s2 < e2.length; s2++) {
      var r2 = t2, i2 = e2[s2];
      null != i2 && (It(r2, n2, 0), Lt(r2.g, i2));
    }
});
var Gr = ar(function(t2, e2, n2) {
  return 0 === t2.h && (ur(e2, n2, t2.g.m()), true);
}, function(t2, e2, n2) {
  null != (e2 = we(e2)) && (e2 = parseInt(e2, 10), It(t2, n2, 0), Mt(t2.g, e2));
});
var jr = cr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = sn(e2, Ht(e2), n2, 2, false), 2 == t2.h ? wt(t2, dt.prototype.C, e2) : e2.push(t2.g.m()), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Bn(we, e2)) && e2.length) {
    n2 = Ct(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++)
      Mt(t2.g, e2[n3]);
    Rt(t2, n2);
  }
});
var Vr = class {
  constructor(t2, e2) {
    this.h = t2, this.g = e2, this.l = _n, this.m = En, this.defaultValue = void 0;
  }
};
function zr(t2, e2) {
  return new Vr(t2, e2);
}
function Wr(t2, e2) {
  return (n2, r2) => {
    t: {
      if (bt.length) {
        const t3 = bt.pop();
        t3.o(r2), ot(t3.g, n2, r2), n2 = t3;
      } else
        n2 = new class {
          constructor(t3, e3) {
            if (pt.length) {
              const n3 = pt.pop();
              ot(n3, t3, e3), t3 = n3;
            } else
              t3 = new dt(t3, e3);
            this.g = t3, this.l = this.g.g, this.h = this.m = -1, this.o(e3);
          }
          o({ ea: t3 = false } = {}) {
            this.ea = t3;
          }
        }(n2, r2);
      try {
        const r3 = new t2(), s2 = r3.s;
        Nn(e2)(s2, n2), fe && delete s2[fe];
        var i2 = r3;
        break t;
      } finally {
        n2.g.clear(), n2.m = -1, n2.h = -1, 100 > bt.length && bt.push(n2);
      }
      i2 = void 0;
    }
    return i2;
  };
}
function Xr(t2) {
  return function() {
    const e2 = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const t3 = this.g;
            return this.g = [], t3;
          }
        }();
      }
    }();
    or(this.s, e2, tr(t2)), Pt(e2, e2.g.end());
    const n2 = new Uint8Array(e2.h), r2 = e2.l, i2 = r2.length;
    let s2 = 0;
    for (let t3 = 0; t3 < i2; t3++) {
      const e3 = r2[t3];
      n2.set(e3, s2), s2 += e3.length;
    }
    return e2.l = [n2], n2;
  };
}
var Hr = [0, Ir, ar(function(t2, e2, n2) {
  return 2 === t2.h && (ur(e2, n2, (t2 = _t(t2)) === D() ? void 0 : t2), true);
}, function(t2, e2, n2) {
  if (null != e2) {
    if (e2 instanceof Cn) {
      const r2 = e2.Qa;
      return void (r2 && (e2 = r2(e2), null != e2 && Dt(t2, n2, z(e2).buffer)));
    }
    if (Array.isArray(e2))
      return;
  }
  yr(t2, e2, n2);
})];
var Yr = [0, Cr];
var Kr = [0, xr, Gr, Mr, -1, Fr, Gr, -1];
var $r = [0, Mr, -1];
var qr = class extends Cn {
  constructor() {
    super();
  }
};
qr.A = [6];
var Jr = [0, Mr, Cr, Mr, Gr, -1, jr, Cr, -1, $r, Gr];
var Zr = [0, Cr, -2];
var Qr = class extends Cn {
  constructor() {
    super();
  }
};
var ti = [0];
var ei = [0, xr, Mr, -2];
var ni = class extends Cn {
  constructor(t2) {
    super(t2, 2);
  }
};
var ri = {};
var ii = [-2, ri, Mr];
ri[336783863] = [0, Cr, Mr, -1, xr, [0, [1, 2, 3, 4, 5], Br, ti, Br, Jr, Br, Zr, Br, ei, Br, Kr], Yr];
var si = [0, Ir, Or];
var oi = [0, kr, -1, Or, -3, kr, Fr, Ir, Lr, kr, -1, Or, Lr, Or, -2, Ir];
var ai = [-1, {}];
var ci = [0, Cr, 1, ai];
var hi = [0, Cr, Pr, ai];
function ui(t2, e2) {
  e2 = Se(e2), t2 = t2.s;
  let n2 = Ht(t2);
  ce(n2), rn(t2, n2, 2, "" === e2 ? void 0 : e2);
}
function li(t2, e2) {
  dn(t2.s, 3, ke, e2);
}
function fi(t2, e2) {
  dn(t2.s, 4, ke, e2);
}
var di = class extends Cn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return En(this, 0, 7, t2);
  }
};
di.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var pi = [-500, Ir, -1, Pr, -3, ii, _r, Hr, Lr, -1, ci, hi, _r, si, Ir, oi, Lr, Pr, 987, Pr];
var gi = [0, Ir, -1, ai];
var mi = [-500, Cr, -1, [-1, {}], 998, Cr];
var yi = [-500, Cr, Pr, -1, [-2, {}, Mr], 997, Pr, -1];
var vi = [-500, Cr, Pr, ai, 998, Pr];
function _i(t2, e2) {
  kn(t2, di, e2);
}
function wi(t2, e2) {
  dn(t2.s, 10, ke, e2);
}
function bi(t2, e2) {
  dn(t2.s, 15, ke, e2);
}
var Ei = class extends Cn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return En(this, 0, 1001, t2);
  }
};
Ei.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var Ai = [-500, _r, pi, 4, _r, mi, _r, yi, Lr, _r, vi, Pr, Lr, ci, hi, _r, gi, Pr, -2, oi, Ir, -1, Or, 979, ai, _r, Hr];
var Ti = Wr(Ei, Ai);
Ei.prototype.g = Xr(Ai);
var ki = [0, _r, [0, xr, -2]];
var Si = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var xi = [0, xr, br, Cr, -1];
var Fi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return bn(this, Si, 1);
  }
};
Fi.A = [1];
var Li = [0, _r, xi];
var Mi = Wr(Fi, Li);
var Oi = [0, xr, br];
var Pi = [0, xr, -1, ki];
var Ii = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Ci = [0, xr, -3];
var Ri = [0, br, -3];
var Di = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Bi = [0, br, -1, Cr, br];
var Ui = class extends Cn {
  constructor(t2) {
    super(t2);
  }
  h() {
    return _n(this, Ii, 2);
  }
  g() {
    return bn(this, Di, 5);
  }
};
Ui.A = [5];
var Ni = [0, Gr, Ci, Ri, Pi, _r, Bi];
var Gi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
Gi.A = [1, 2, 3, 8, 9];
var ji = Wr(Gi, [0, Pr, Fr, Ar, Ni, Cr, -1, Tr, _r, Oi, Pr, Tr]);
var Vi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var zi = [0, br, -4];
var Wi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
Wi.A = [1];
var Xi = Wr(Wi, [0, _r, zi]);
var Hi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Yi = [0, br, -4];
var Ki = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
Ki.A = [1];
var $i = Wr(Ki, [0, _r, Yi]);
var qi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
qi.A = [3];
var Ji = [0, xr, -1, Ar, Gr];
var Zi = class extends Cn {
  constructor() {
    super();
  }
};
Zi.prototype.g = Xr([0, br, -4, Tr]);
var Qi = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var ts = [0, 1, xr, Cr, Li];
var es = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
es.A = [1];
var ns = Wr(es, [0, _r, ts, Tr]);
var rs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
rs.A = [1];
var is = class extends Cn {
  constructor(t2) {
    super(t2);
  }
  oa() {
    const t2 = an(this);
    return null == t2 ? D() : t2;
  }
};
var ss = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var os = [1, 2];
var as = [0, os, Br, [0, Ar], Br, [0, Ur], xr, Cr];
var cs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
cs.A = [1];
var hs = Wr(cs, [0, _r, as, Tr]);
var us = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
us.A = [4, 5];
var ls = [0, Cr, xr, br, Pr, -1];
var fs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var ds = [0, Mr, -1];
var ps = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var gs = [1, 2, 3, 4, 5];
var ms = class extends Cn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return null != an(this);
  }
  h() {
    return null != xn(this, 2);
  }
};
var ys = [0, Ur, Cr, [0, xr, Tr, -1], [0, Sr, Tr]];
var vs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return ye(tn(this, 2)) ?? false;
  }
};
var _s = [0, ys, Mr, [0, gs, Br, ei, Br, Jr, Br, Kr, Br, ti, Br, Zr], Gr];
var ws = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var bs = [0, _s, br, -1, xr];
var Es = zr(502141897, ws);
ri[502141897] = bs;
var As = [0, ys];
ri[512499200] = As;
var Ts = [0, As];
ri[515723506] = Ts;
var ks = Wr(class extends Cn {
  constructor(t2) {
    super(t2);
  }
}, [0, [0, Gr, -1, Er, Nr], Ji]);
var Ss = [0, _s];
ri[508981768] = Ss;
var xs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Fs = [0, _s, br, Ss, Mr];
var Ls = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Ms = [0, _s, bs, Fs, br, Ts];
ri[508968149] = Fs;
var Os = zr(508968150, Ls);
ri[508968150] = Ms;
var Ps = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Is = zr(513916220, Ps);
ri[513916220] = [0, _s, Ms, xr];
var Cs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
  h() {
    return _n(this, us, 2);
  }
  g() {
    nn(this, 2);
  }
};
var Rs = [0, _s, ls];
ri[478825465] = Rs;
var Ds = [0, _s];
ri[478825422] = Ds;
var Bs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Us = [0, _s, Ds, Rs, -1];
var Ns = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Gs = [0, _s, br, xr];
var js = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Vs = [0, _s, br];
var zs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Ws = [0, _s, Gs, Vs, br];
var Xs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Hs = [0, _s, Ws, Us];
ri[463370452] = Us, ri[464864288] = Gs, ri[474472470] = Vs;
var Ys = zr(462713202, zs);
ri[462713202] = Ws;
var Ks = zr(479097054, Xs);
ri[479097054] = Hs;
var $s = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var qs = zr(456383383, $s);
ri[456383383] = [0, _s, ls];
var Js = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Zs = zr(476348187, Js);
ri[476348187] = [0, _s, ds];
var Qs = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var to = [0, Gr, -1];
var eo = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
eo.A = [3];
var no = zr(458105876, class extends Cn {
  constructor(t2) {
    super(t2);
  }
  g() {
    var t2 = this.s;
    const e2 = Ht(t2);
    var n2 = 2 & e2;
    return t2 = function(t3, e3, n3) {
      var r2 = eo;
      const i2 = 2 & e3;
      let s2 = false;
      if (null == n3) {
        if (i2)
          return un();
        n3 = [];
      } else if (n3.constructor === Ve) {
        if (0 == (2 & n3.I) || i2)
          return n3;
        n3 = n3.R();
      } else
        Array.isArray(n3) ? s2 = !!(2 & Xt(n3)) : n3 = [];
      if (i2) {
        if (!n3.length)
          return un();
        s2 || (s2 = true, $t(n3));
      } else
        s2 && (s2 = false, n3 = ln(n3));
      return s2 || (64 & Xt(n3) ? zt(n3, 32) : 32 & e3 && jt(n3, 32)), rn(t3, e3, 2, r2 = new Ve(n3, r2, Oe, void 0), false), r2;
    }(t2, e2, en(t2, e2, 2)), null == t2 || !n2 && eo && (t2.ra = true), n2 = t2;
  }
});
ri[458105876] = [0, to, lr, [true, Tr, [0, Cr, -1, Pr]]];
var ro = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var io = zr(458105758, ro);
ri[458105758] = [0, _s, Cr, to];
var so = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
so.A = [5, 6];
var oo = zr(443442058, so);
ri[443442058] = [0, _s, Cr, xr, br, Pr, -1];
var ao = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var co = [0, _s, br, -1, xr];
ri[514774813] = co;
var ho = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var uo = [0, _s, br, Mr];
var lo = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var fo = [0, _s, co, uo, br];
ri[518928384] = uo;
var po = zr(516587230, lo);
function go(t2, e2) {
  return e2 = e2 ? e2.clone() : new us(), void 0 !== t2.displayNamesLocale ? nn(e2, 1, Se(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && nn(e2, 1), void 0 !== t2.maxResults ? On(e2, 2, t2.maxResults) : "maxResults" in t2 && nn(e2, 2), void 0 !== t2.scoreThreshold ? Pn(e2, 3, t2.scoreThreshold) : "scoreThreshold" in t2 && nn(e2, 3), void 0 !== t2.categoryAllowlist ? fn(e2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && nn(e2, 4), void 0 !== t2.categoryDenylist ? fn(e2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && nn(e2, 5), e2;
}
function mo(t2, e2 = -1, n2 = "") {
  return { categories: t2.map((t3) => ({ index: Fn(Sn(t3, 1)) ?? -1, score: Ln(t3, 2) ?? 0, categoryName: xn(t3, 3) ?? "" ?? "", displayName: xn(t3, 4) ?? "" ?? "" })), headIndex: e2, headName: n2 };
}
function yo(t2) {
  var _a2, _b;
  var e2 = cn(t2, 3, me), n2 = cn(t2, 2, we);
  const r2 = cn(t2, 1, xe), i2 = cn(t2, 9, xe), s2 = { categories: [], keypoints: [] };
  for (let t3 = 0; t3 < e2.length; t3++)
    s2.categories.push({ score: e2[t3], index: n2[t3] ?? -1, categoryName: r2[t3] ?? "", displayName: i2[t3] ?? "" });
  if ((e2 = (_a2 = _n(t2, Ui, 4)) == null ? void 0 : _a2.h()) && (s2.boundingBox = { originX: Sn(e2, 1) ?? 0, originY: Sn(e2, 2) ?? 0, width: Sn(e2, 3) ?? 0, height: Sn(e2, 4) ?? 0, angle: 0 }), (_b = _n(t2, Ui, 4)) == null ? void 0 : _b.g().length)
    for (const e3 of _n(t2, Ui, 4).g())
      s2.keypoints.push({ x: on(e3, 1) ?? 0, y: on(e3, 2) ?? 0, score: on(e3, 4) ?? 0, label: xn(e3, 3) ?? "" });
  return s2;
}
function vo(t2) {
  const e2 = [];
  for (const n2 of bn(t2, Hi, 1))
    e2.push({ x: Ln(n2, 1) ?? 0, y: Ln(n2, 2) ?? 0, z: Ln(n2, 3) ?? 0 });
  return e2;
}
function _o(t2) {
  const e2 = [];
  for (const n2 of bn(t2, Vi, 1))
    e2.push({ x: Ln(n2, 1) ?? 0, y: Ln(n2, 2) ?? 0, z: Ln(n2, 3) ?? 0 });
  return e2;
}
function wo(t2) {
  return Array.from(t2, (t3) => 127 < t3 ? t3 - 256 : t3);
}
function bo(t2, e2) {
  if (t2.length !== e2.length)
    throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${e2.length}).`);
  let n2 = 0, r2 = 0, i2 = 0;
  for (let s2 = 0; s2 < t2.length; s2++)
    n2 += t2[s2] * e2[s2], r2 += t2[s2] * t2[s2], i2 += e2[s2] * e2[s2];
  if (0 >= r2 || 0 >= i2)
    throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return n2 / Math.sqrt(r2 * i2);
}
var Eo;
ri[516587230] = fo;
var Ao = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function To() {
  if (void 0 === Eo)
    try {
      await WebAssembly.instantiate(Ao), Eo = true;
    } catch {
      Eo = false;
    }
  return Eo;
}
async function ko(t2, e2 = "") {
  const n2 = await To() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${e2}/${t2}_${n2}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm` };
}
var So = class {
};
function xo() {
  const t2 = navigator.userAgent;
  return t2.includes("Safari") && !t2.includes("Chrome");
}
async function Fo(t2) {
  if ("function" != typeof importScripts) {
    const e2 = document.createElement("script");
    return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
      e2.addEventListener("load", () => {
        t3();
      }, false), e2.addEventListener("error", (t4) => {
        n2(t4);
      }, false), document.body.appendChild(e2);
    });
  }
  importScripts(t2.toString());
}
function Lo(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.i.stringToNewUTF8(e2)), t2.i._free(e2);
}
function Mo(t2, e2, n2) {
  if (!t2.i.canvas)
    throw Error("No OpenGL canvas configured.");
  if (n2 ? t2.i._bindTextureToStream(n2) : t2.i._bindTextureToCanvas(), !(n2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl")))
    throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  return t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, e2), t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, false), e2.videoWidth ? (n2 = e2.videoWidth, e2 = e2.videoHeight) : e2.naturalWidth ? (n2 = e2.naturalWidth, e2 = e2.naturalHeight) : (n2 = e2.width, e2 = e2.height), !t2.l || n2 === t2.i.canvas.width && e2 === t2.i.canvas.height || (t2.i.canvas.width = n2, t2.i.canvas.height = e2), [n2, e2];
}
function Oo(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const r2 = new Uint32Array(e2.length);
  for (let n3 = 0; n3 < e2.length; n3++)
    r2[n3] = t2.i.stringToNewUTF8(e2[n3]);
  e2 = t2.i._malloc(4 * r2.length), t2.i.HEAPU32.set(r2, e2 >> 2), n2(e2);
  for (const e3 of r2)
    t2.i._free(e3);
  t2.i._free(e2);
}
function Po(t2, e2, n2) {
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = n2;
}
function Io(t2, e2, n2) {
  let r2 = [];
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = (t3, e3, i2) => {
    e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
  };
}
So.forVisionTasks = function(t2) {
  return ko("vision", t2);
}, So.forTextTasks = function(t2) {
  return ko("text", t2);
}, So.forAudioTasks = function(t2) {
  return ko("audio", t2);
}, So.isSimdSupported = function() {
  return To();
};
async function Co(t2, e2, n2, r2) {
  return t2 = await (async (t3, e3, n3, r3, i2) => {
    if (e3 && await Fo(e3), !self.ModuleFactory)
      throw Error("ModuleFactory not set.");
    if (n3 && (await Fo(n3), !self.ModuleFactory))
      throw Error("ModuleFactory not set.");
    return self.Module && i2 && ((e3 = self.Module).locateFile = i2.locateFile, i2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = i2.mainScriptUrlOrBlob)), i2 = await self.ModuleFactory(self.Module || i2), self.ModuleFactory = self.Module = void 0, new t3(i2, r3);
  })(t2, n2.wasmLoaderPath, n2.assetLoaderPath, e2, { locateFile: (t3) => t3.endsWith(".wasm") ? n2.wasmBinaryPath.toString() : n2.assetBinaryPath && t3.endsWith(".data") ? n2.assetBinaryPath.toString() : t3 }), await t2.o(r2), t2;
}
function Ro(t2, e2) {
  const n2 = _n(t2.baseOptions, ms, 1) || new ms();
  "string" == typeof e2 ? (nn(n2, 2, Se(e2)), nn(n2, 1)) : e2 instanceof Uint8Array && (nn(n2, 1, ie(e2, false, false)), nn(n2, 2)), En(t2.baseOptions, 0, 1, n2);
}
function Do(t2) {
  try {
    const e2 = t2.L.length;
    if (1 === e2)
      throw Error(t2.L[0].message);
    if (1 < e2)
      throw Error("Encountered multiple errors: " + t2.L.map((t3) => t3.message).join(", "));
  } finally {
    t2.L = [];
  }
}
function Bo(t2, e2) {
  t2.N = Math.max(t2.N, e2);
}
function Uo(t2, e2) {
  t2.B = new di(), ui(t2.B, "PassThroughCalculator"), li(t2.B, "free_memory"), fi(t2.B, "free_memory_unused_out"), wi(e2, "free_memory"), _i(e2, t2.B);
}
function No(t2, e2) {
  li(t2.B, e2), fi(t2.B, e2 + "_unused_out");
}
function Go(t2) {
  t2.g.addBoolToStream(true, "free_memory", t2.N);
}
var jo = class {
  constructor(t2) {
    this.g = t2, this.L = [], this.N = 0, this.g.setAutoRenderToScreen(false);
  }
  l(t2, e2 = true) {
    var _a2, _b, _c2, _d, _e2, _f;
    if (e2) {
      const e3 = t2.baseOptions || {};
      if (((_a2 = t2.baseOptions) == null ? void 0 : _a2.modelAssetBuffer) && ((_b = t2.baseOptions) == null ? void 0 : _b.modelAssetPath))
        throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(((_c2 = _n(this.baseOptions, ms, 1)) == null ? void 0 : _c2.g()) || ((_d = _n(this.baseOptions, ms, 1)) == null ? void 0 : _d.h()) || ((_e2 = t2.baseOptions) == null ? void 0 : _e2.modelAssetBuffer) || ((_f = t2.baseOptions) == null ? void 0 : _f.modelAssetPath)))
        throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (function(t3, e4) {
        let n2 = _n(t3.baseOptions, ps, 3);
        if (!n2) {
          var r2 = n2 = new ps(), i2 = new Qr();
          An(r2, 4, gs, i2);
        }
        "delegate" in e4 && ("GPU" === e4.delegate ? (e4 = n2, r2 = new qr(), An(e4, 2, gs, r2)) : (e4 = n2, r2 = new Qr(), An(e4, 4, gs, r2))), En(t3.baseOptions, 0, 3, n2);
      }(this, e3), e3.modelAssetPath)
        return fetch(e3.modelAssetPath.toString()).then((t3) => {
          if (t3.ok)
            return t3.arrayBuffer();
          throw Error(`Failed to fetch model: ${e3.modelAssetPath} (${t3.status})`);
        }).then((t3) => {
          try {
            this.g.i.FS_unlink("/model.dat");
          } catch {
          }
          this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), Ro(this, "/model.dat"), this.m(), this.V();
        });
      Ro(this, e3.modelAssetBuffer);
    }
    return this.m(), this.V(), Promise.resolve();
  }
  V() {
  }
  aa() {
    let t2;
    if (this.g.aa((e2) => {
      t2 = Ti(e2);
    }), !t2)
      throw Error("Failed to retrieve CalculatorGraphConfig");
    return t2;
  }
  setGraph(t2, e2) {
    this.g.attachErrorListener((t3, e3) => {
      this.L.push(Error(e3));
    }), this.g.Ma(), this.g.setGraph(t2, e2), this.B = void 0, Do(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), Do(this);
  }
  close() {
    this.B = void 0, this.g.closeGraph();
  }
};
function Vo(t2, e2) {
  if (null === t2)
    throw Error(`Unable to obtain required WebGL resource: ${e2}`);
  return t2;
}
jo.prototype.close = jo.prototype.close;
var zo = class {
  constructor(t2, e2, n2, r2) {
    this.g = t2, this.h = e2, this.m = n2, this.l = r2;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
};
function Wo(t2, e2, n2) {
  const r2 = t2.h;
  if (n2 = Vo(r2.createShader(n2), "Failed to create WebGL shader"), r2.shaderSource(n2, e2), r2.compileShader(n2), !r2.getShaderParameter(n2, r2.COMPILE_STATUS))
    throw Error(`Could not compile WebGL shader: ${r2.getShaderInfoLog(n2)}`);
  return r2.attachShader(t2.g, n2), n2;
}
function Xo(t2, e2) {
  const n2 = t2.h, r2 = Vo(n2.createVertexArray(), "Failed to create vertex array");
  n2.bindVertexArray(r2);
  const i2 = Vo(n2.createBuffer(), "Failed to create buffer");
  n2.bindBuffer(n2.ARRAY_BUFFER, i2), n2.enableVertexAttribArray(t2.u), n2.vertexAttribPointer(t2.u, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), n2.STATIC_DRAW);
  const s2 = Vo(n2.createBuffer(), "Failed to create buffer");
  return n2.bindBuffer(n2.ARRAY_BUFFER, s2), n2.enableVertexAttribArray(t2.B), n2.vertexAttribPointer(t2.B, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array(e2 ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), n2.STATIC_DRAW), n2.bindBuffer(n2.ARRAY_BUFFER, null), n2.bindVertexArray(null), new zo(n2, r2, i2, s2);
}
function Ho(t2, e2) {
  if (t2.h) {
    if (e2 !== t2.h)
      throw Error("Cannot change GL context once initialized");
  } else
    t2.h = e2;
}
function Yo(t2, e2, n2, r2) {
  if (Ho(t2, e2), !t2.g) {
    const e3 = t2.h;
    if (t2.g = Vo(e3.createProgram(), "Failed to create WebGL program"), t2.C = Wo(t2, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", e3.VERTEX_SHADER), t2.v = Wo(t2, "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ", e3.FRAGMENT_SHADER), e3.linkProgram(t2.g), !e3.getProgramParameter(t2.g, e3.LINK_STATUS))
      throw Error(`Error during program linking: ${e3.getProgramInfoLog(t2.g)}`);
    t2.u = e3.getAttribLocation(t2.g, "aVertex"), t2.B = e3.getAttribLocation(t2.g, "aTex");
  }
  return n2 ? (t2.m || (t2.m = Xo(t2, true)), n2 = t2.m) : (t2.j || (t2.j = Xo(t2, false)), n2 = t2.j), e2.useProgram(t2.g), n2.bind(), t2 = r2(), n2.g.bindVertexArray(null), t2;
}
function Ko(t2, e2, n2) {
  Ho(t2, e2), t2.l || (t2.l = Vo(e2.createFramebuffer(), "Failed to create framebuffe.")), e2.bindFramebuffer(e2.FRAMEBUFFER, t2.l), e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, n2, 0);
}
function $o(t2) {
  var _a2;
  (_a2 = t2.h) == null ? void 0 : _a2.bindFramebuffer(t2.h.FRAMEBUFFER, null);
}
var qo = class {
  close() {
    if (this.g) {
      const t2 = this.h;
      t2.deleteProgram(this.g), t2.deleteShader(this.C), t2.deleteShader(this.v);
    }
    this.l && this.h.deleteFramebuffer(this.l), this.j && this.j.close(), this.m && this.m.close();
  }
};
function Jo(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof Uint8Array);
    case 1:
      return t2.g.find((t3) => t3 instanceof Float32Array);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function Zo(t2) {
  var e2 = Jo(t2, 1);
  if (!e2) {
    if (e2 = Jo(t2, 0))
      e2 = new Float32Array(e2).map((t3) => t3 / 255);
    else {
      e2 = new Float32Array(t2.width * t2.height);
      const r2 = ta(t2);
      var n2 = na(t2);
      if (Ko(n2, r2, Qo(t2)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        n2 = new Float32Array(t2.width * t2.height * 4), r2.readPixels(0, 0, t2.width, t2.height, r2.RGBA, r2.FLOAT, n2);
        for (let t3 = 0, r3 = 0; t3 < e2.length; ++t3, r3 += 4)
          e2[t3] = n2[r3];
      } else
        r2.readPixels(0, 0, t2.width, t2.height, r2.RED, r2.FLOAT, e2);
    }
    t2.g.push(e2);
  }
  return e2;
}
function Qo(t2) {
  let e2 = Jo(t2, 2);
  if (!e2) {
    const n2 = ta(t2);
    e2 = ia(t2);
    const r2 = Zo(t2), i2 = ea(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, i2, t2.width, t2.height, 0, n2.RED, n2.FLOAT, r2), sa(t2);
  }
  return e2;
}
function ta(t2) {
  if (!t2.canvas)
    throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t2.h || (t2.h = Vo(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function ea(t2) {
  if (t2 = ta(t2), !oa)
    if (t2.getExtension("EXT_color_buffer_float") && t2.getExtension("OES_texture_float_linear") && t2.getExtension("EXT_float_blend"))
      oa = t2.R32F;
    else {
      if (!t2.getExtension("EXT_color_buffer_half_float"))
        throw Error("GPU does not fully support 4-channel float32 or float16 formats");
      oa = t2.R16F;
    }
  return oa;
}
function na(t2) {
  return t2.l || (t2.l = new qo()), t2.l;
}
function ra(t2) {
  (t2 = ta(t2)).texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MIN_FILTER, t2.NEAREST), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
}
function ia(t2) {
  const e2 = ta(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = Jo(t2, 2);
  return n2 ? e2.bindTexture(e2.TEXTURE_2D, n2) : (n2 = Vo(e2.createTexture(), "Failed to create texture"), t2.g.push(n2), t2.m = true, e2.bindTexture(e2.TEXTURE_2D, n2), ra(t2)), n2;
}
function sa(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
var oa;
var aa = class {
  constructor(t2, e2, n2, r2, i2, s2) {
    this.g = t2, this.m = e2, this.canvas = n2, this.l = r2, this.width = i2, this.height = s2, this.m && (0 === --ca && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."));
  }
  Ga() {
    return !!Jo(this, 0);
  }
  Ea() {
    return !!Jo(this, 1);
  }
  M() {
    return !!Jo(this, 2);
  }
  Ca() {
    return (e2 = Jo(t2 = this, 0)) || (e2 = Zo(t2), e2 = new Uint8Array(e2.map((t3) => 255 * t3)), t2.g.push(e2)), e2;
    var t2, e2;
  }
  za() {
    return Zo(this);
  }
  Z() {
    return Qo(this);
  }
  clone() {
    const t2 = [];
    for (const e2 of this.g) {
      let n2;
      if (e2 instanceof Uint8Array)
        n2 = new Uint8Array(e2);
      else if (e2 instanceof Float32Array)
        n2 = new Float32Array(e2);
      else {
        if (!(e2 instanceof WebGLTexture))
          throw Error(`Type is not supported: ${e2}`);
        {
          const t3 = ta(this), e3 = na(this);
          t3.activeTexture(t3.TEXTURE1), n2 = Vo(t3.createTexture(), "Failed to create texture"), t3.bindTexture(t3.TEXTURE_2D, n2), ra(this);
          const r2 = ea(this);
          t3.texImage2D(t3.TEXTURE_2D, 0, r2, this.width, this.height, 0, t3.RED, t3.FLOAT, null), t3.bindTexture(t3.TEXTURE_2D, null), Ko(e3, t3, n2), Yo(e3, t3, false, () => {
            ia(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), sa(this);
          }), $o(e3), sa(this);
        }
      }
      t2.push(n2);
    }
    return new aa(t2, this.M(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.m && ta(this).deleteTexture(Jo(this, 2)), ca = -1;
  }
};
aa.prototype.close = aa.prototype.close, aa.prototype.clone = aa.prototype.clone, aa.prototype.getAsWebGLTexture = aa.prototype.Z, aa.prototype.getAsFloat32Array = aa.prototype.za, aa.prototype.getAsUint8Array = aa.prototype.Ca, aa.prototype.hasWebGLTexture = aa.prototype.M, aa.prototype.hasFloat32Array = aa.prototype.Ea, aa.prototype.hasUint8Array = aa.prototype.Ga;
var ca = 250;
var ha = { color: "white", lineWidth: 4, radius: 6 };
function ua(t2) {
  return { ...ha, fillColor: (t2 = t2 || {}).color, ...t2 };
}
function la(t2, e2) {
  return t2 instanceof Function ? t2(e2) : t2;
}
function fa(t2, e2, n2) {
  return Math.max(Math.min(e2, n2), Math.min(Math.max(e2, n2), t2));
}
function da(t2) {
  if (!t2.g)
    throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return t2.g;
}
var pa = class {
  constructor(t2) {
    (t2 instanceof CanvasRenderingContext2D || t2 instanceof OffscreenCanvasRenderingContext2D) && (this.g = t2);
  }
  wa(t2, e2) {
    if (t2) {
      var n2 = da(this);
      e2 = ua(e2), n2.save();
      var r2 = n2.canvas, i2 = 0;
      for (const s2 of t2)
        n2.fillStyle = la(e2.fillColor, { index: i2, from: s2 }), n2.strokeStyle = la(e2.color, { index: i2, from: s2 }), n2.lineWidth = la(e2.lineWidth, { index: i2, from: s2 }), (t2 = new Path2D()).arc(s2.x * r2.width, s2.y * r2.height, la(e2.radius, { index: i2, from: s2 }), 0, 2 * Math.PI), n2.fill(t2), n2.stroke(t2), ++i2;
      n2.restore();
    }
  }
  va(t2, e2, n2) {
    if (t2 && e2) {
      var r2 = da(this);
      n2 = ua(n2), r2.save();
      var i2 = r2.canvas, s2 = 0;
      for (const o2 of e2) {
        r2.beginPath(), e2 = t2[o2.start];
        const a2 = t2[o2.end];
        e2 && a2 && (r2.strokeStyle = la(n2.color, { index: s2, from: e2, to: a2 }), r2.lineWidth = la(n2.lineWidth, { index: s2, from: e2, to: a2 }), r2.moveTo(e2.x * i2.width, e2.y * i2.height), r2.lineTo(a2.x * i2.width, a2.y * i2.height)), ++s2, r2.stroke();
      }
      r2.restore();
    }
  }
  ua(t2, e2) {
    const n2 = da(this);
    e2 = ua(e2), n2.save(), n2.beginPath(), n2.lineWidth = la(e2.lineWidth, {}), n2.strokeStyle = la(e2.color, {}), n2.fillStyle = la(e2.fillColor, {}), n2.moveTo(t2.originX, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY), n2.stroke(), n2.fill(), n2.restore();
  }
  close() {
    var _a2, _b;
    (_a2 = this.h) == null ? void 0 : _a2.close(), this.h = void 0, (_b = this.l) == null ? void 0 : _b.close(), this.l = void 0;
  }
};
function ga(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof ImageData);
    case 1:
      return t2.g.find((t3) => "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function ma(t2) {
  var e2 = ga(t2, 0);
  if (!e2) {
    e2 = va(t2);
    const n2 = _a(t2), r2 = new Uint8Array(t2.width * t2.height * 4);
    Ko(n2, e2, ya(t2)), e2.readPixels(0, 0, t2.width, t2.height, e2.RGBA, e2.UNSIGNED_BYTE, r2), $o(n2), e2 = new ImageData(new Uint8ClampedArray(r2.buffer), t2.width, t2.height), t2.g.push(e2);
  }
  return e2;
}
function ya(t2) {
  let e2 = ga(t2, 2);
  if (!e2) {
    const n2 = va(t2);
    e2 = ba(t2);
    const r2 = ga(t2, 1) || ma(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, r2), Ea(t2);
  }
  return e2;
}
function va(t2) {
  if (!t2.canvas)
    throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return t2.h || (t2.h = Vo(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function _a(t2) {
  return t2.l || (t2.l = new qo()), t2.l;
}
function wa(t2) {
  (t2 = va(t2)).texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MIN_FILTER, t2.LINEAR), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MAG_FILTER, t2.LINEAR);
}
function ba(t2) {
  const e2 = va(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = ga(t2, 2);
  return n2 ? e2.bindTexture(e2.TEXTURE_2D, n2) : (n2 = Vo(e2.createTexture(), "Failed to create texture"), t2.g.push(n2), t2.m = true, e2.bindTexture(e2.TEXTURE_2D, n2), wa(t2)), n2;
}
function Ea(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
function Aa(t2) {
  const e2 = va(t2);
  return Yo(_a(t2), e2, true, () => function(t3, e3) {
    const n2 = t3.canvas;
    if (n2.width === t3.width && n2.height === t3.height)
      return e3();
    const r2 = n2.width, i2 = n2.height;
    return n2.width = t3.width, n2.height = t3.height, t3 = e3(), n2.width = r2, n2.height = i2, t3;
  }(t2, () => {
    if (e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.clearColor(0, 0, 0, 0), e2.clear(e2.COLOR_BUFFER_BIT), e2.drawArrays(e2.TRIANGLE_FAN, 0, 4), !(t2.canvas instanceof OffscreenCanvas))
      throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return t2.canvas.transferToImageBitmap();
  }));
}
pa.prototype.close = pa.prototype.close, pa.prototype.drawBoundingBox = pa.prototype.ua, pa.prototype.drawConnectors = pa.prototype.va, pa.prototype.drawLandmarks = pa.prototype.wa, pa.lerp = function(t2, e2, n2, r2, i2) {
  return fa(r2 * (1 - (t2 - e2) / (n2 - e2)) + i2 * (1 - (n2 - t2) / (n2 - e2)), r2, i2);
}, pa.clamp = fa;
var Ta = class {
  constructor(t2, e2, n2, r2, i2, s2, o2) {
    this.g = t2, this.j = e2, this.m = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, (this.j || this.m) && (0 === --ka && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."));
  }
  Fa() {
    return !!ga(this, 0);
  }
  ga() {
    return !!ga(this, 1);
  }
  M() {
    return !!ga(this, 2);
  }
  Ba() {
    return ma(this);
  }
  Aa() {
    var t2 = ga(this, 1);
    return t2 || (ya(this), ba(this), t2 = Aa(this), Ea(this), this.g.push(t2), this.j = true), t2;
  }
  Z() {
    return ya(this);
  }
  clone() {
    const t2 = [];
    for (const e2 of this.g) {
      let n2;
      if (e2 instanceof ImageData)
        n2 = new ImageData(e2.data, this.width, this.height);
      else if (e2 instanceof WebGLTexture) {
        const t3 = va(this), e3 = _a(this);
        t3.activeTexture(t3.TEXTURE1), n2 = Vo(t3.createTexture(), "Failed to create texture"), t3.bindTexture(t3.TEXTURE_2D, n2), wa(this), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, this.width, this.height, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.bindTexture(t3.TEXTURE_2D, null), Ko(e3, t3, n2), Yo(e3, t3, false, () => {
          ba(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Ea(this);
        }), $o(e3), Ea(this);
      } else {
        if (!(e2 instanceof ImageBitmap))
          throw Error(`Type is not supported: ${e2}`);
        ya(this), ba(this), n2 = Aa(this), Ea(this);
      }
      t2.push(n2);
    }
    return new Ta(t2, this.ga(), this.M(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && ga(this, 1).close(), this.m && va(this).deleteTexture(ga(this, 2)), ka = -1;
  }
};
Ta.prototype.close = Ta.prototype.close, Ta.prototype.clone = Ta.prototype.clone, Ta.prototype.getAsWebGLTexture = Ta.prototype.Z, Ta.prototype.getAsImageBitmap = Ta.prototype.Aa, Ta.prototype.getAsImageData = Ta.prototype.Ba, Ta.prototype.hasWebGLTexture = Ta.prototype.M, Ta.prototype.hasImageBitmap = Ta.prototype.ga, Ta.prototype.hasImageData = Ta.prototype.Fa;
var ka = 250;
function Sa(...t2) {
  return t2.map(([t3, e2]) => ({ start: t3, end: e2 }));
}
var xa = /* @__PURE__ */ function(t2) {
  return class extends t2 {
    Ma() {
      this.i._registerModelResourcesGraphService();
    }
  };
}((Fa = class {
  constructor(t2, e2) {
    this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e2 ? this.i.canvas = e2 : "undefined" == typeof OffscreenCanvas || xo() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
  }
  async initializeGraph(t2) {
    const e2 = await (await fetch(t2)).arrayBuffer();
    t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
  }
  setGraphFromString(t2) {
    this.setGraph(new TextEncoder().encode(t2), false);
  }
  setGraph(t2, e2) {
    const n2 = t2.length, r2 = this.i._malloc(n2);
    this.i.HEAPU8.set(t2, r2), e2 ? this.i._changeBinaryGraph(n2, r2) : this.i._changeTextGraph(n2, r2), this.i._free(r2);
  }
  configureAudio(t2, e2, n2, r2, i2) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), Lo(this, r2 || "input_audio", (r3) => {
      Lo(this, i2 = i2 || "audio_header", (i3) => {
        this.i._configureAudio(r3, i3, t2, e2, n2);
      });
    });
  }
  setAutoResizeCanvas(t2) {
    this.l = t2;
  }
  setAutoRenderToScreen(t2) {
    this.i._setAutoRenderToScreen(t2);
  }
  setGpuBufferVerticalFlip(t2) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
  }
  aa(t2) {
    Po(this, "__graph_config__", (e2) => {
      t2(e2);
    }), Lo(this, "__graph_config__", (t3) => {
      this.i._getGraphConfig(t3, void 0);
    }), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(t2) {
    this.i.errorListener = t2;
  }
  attachEmptyPacketListener(t2, e2) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = e2;
  }
  addAudioToStream(t2, e2, n2) {
    this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
  }
  addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
    const s2 = 4 * t2.length;
    this.h !== s2 && (this.g && this.i._free(this.g), this.g = this.i._malloc(s2), this.h = s2), this.i.HEAPF32.set(t2, this.g / 4), Lo(this, r2, (t3) => {
      this.i._addAudioToInputStream(this.g, e2, n2, t3, i2);
    });
  }
  addGpuBufferToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const [r2, i2] = Mo(this, t2, e3);
      this.i._addBoundTextureToStream(e3, r2, i2, n2);
    });
  }
  addBoolToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      this.i._addBoolToInputStream(t2, e3, n2);
    });
  }
  addDoubleToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      this.i._addDoubleToInputStream(t2, e3, n2);
    });
  }
  addFloatToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      this.i._addFloatToInputStream(t2, e3, n2);
    });
  }
  addIntToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      this.i._addIntToInputStream(t2, e3, n2);
    });
  }
  addStringToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      Lo(this, t2, (t3) => {
        this.i._addStringToInputStream(t3, e3, n2);
      });
    });
  }
  addStringRecordToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      Oo(this, Object.keys(t2), (r2) => {
        Oo(this, Object.values(t2), (i2) => {
          this.i._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
        });
      });
    });
  }
  addProtoToStream(t2, e2, n2, r2) {
    Lo(this, n2, (n3) => {
      Lo(this, e2, (e3) => {
        const i2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, i2), this.i._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.i._free(i2);
      });
    });
  }
  addEmptyPacketToStream(t2, e2) {
    Lo(this, t2, (t3) => {
      this.i._addEmptyPacketToInputStream(t3, e2);
    });
  }
  addBoolVectorToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const r2 = this.i._allocateBoolVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2)
        this.i._addBoolVectorEntry(r2, e4);
      this.i._addBoolVectorToInputStream(r2, e3, n2);
    });
  }
  addDoubleVectorToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const r2 = this.i._allocateDoubleVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2)
        this.i._addDoubleVectorEntry(r2, e4);
      this.i._addDoubleVectorToInputStream(r2, e3, n2);
    });
  }
  addFloatVectorToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const r2 = this.i._allocateFloatVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2)
        this.i._addFloatVectorEntry(r2, e4);
      this.i._addFloatVectorToInputStream(r2, e3, n2);
    });
  }
  addIntVectorToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const r2 = this.i._allocateIntVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2)
        this.i._addIntVectorEntry(r2, e4);
      this.i._addIntVectorToInputStream(r2, e3, n2);
    });
  }
  addStringVectorToStream(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const r2 = this.i._allocateStringVector(t2.length);
      if (!r2)
        throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2)
        Lo(this, e4, (t3) => {
          this.i._addStringVectorEntry(r2, t3);
        });
      this.i._addStringVectorToInputStream(r2, e3, n2);
    });
  }
  addBoolToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      this.i._addBoolToInputSidePacket(t2, e3);
    });
  }
  addDoubleToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      this.i._addDoubleToInputSidePacket(t2, e3);
    });
  }
  addFloatToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      this.i._addFloatToInputSidePacket(t2, e3);
    });
  }
  addIntToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      this.i._addIntToInputSidePacket(t2, e3);
    });
  }
  addStringToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      Lo(this, t2, (t3) => {
        this.i._addStringToInputSidePacket(t3, e3);
      });
    });
  }
  addProtoToInputSidePacket(t2, e2, n2) {
    Lo(this, n2, (n3) => {
      Lo(this, e2, (e3) => {
        const r2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, r2), this.i._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.i._free(r2);
      });
    });
  }
  addBoolVectorToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      const n2 = this.i._allocateBoolVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2)
        this.i._addBoolVectorEntry(n2, e4);
      this.i._addBoolVectorToInputSidePacket(n2, e3);
    });
  }
  addDoubleVectorToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      const n2 = this.i._allocateDoubleVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2)
        this.i._addDoubleVectorEntry(n2, e4);
      this.i._addDoubleVectorToInputSidePacket(n2, e3);
    });
  }
  addFloatVectorToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      const n2 = this.i._allocateFloatVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2)
        this.i._addFloatVectorEntry(n2, e4);
      this.i._addFloatVectorToInputSidePacket(n2, e3);
    });
  }
  addIntVectorToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      const n2 = this.i._allocateIntVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2)
        this.i._addIntVectorEntry(n2, e4);
      this.i._addIntVectorToInputSidePacket(n2, e3);
    });
  }
  addStringVectorToInputSidePacket(t2, e2) {
    Lo(this, e2, (e3) => {
      const n2 = this.i._allocateStringVector(t2.length);
      if (!n2)
        throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2)
        Lo(this, e4, (t3) => {
          this.i._addStringVectorEntry(n2, t3);
        });
      this.i._addStringVectorToInputSidePacket(n2, e3);
    });
  }
  attachBoolListener(t2, e2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachBoolListener(t3);
    });
  }
  attachBoolVectorListener(t2, e2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachBoolVectorListener(t3);
    });
  }
  attachIntListener(t2, e2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachIntListener(t3);
    });
  }
  attachIntVectorListener(t2, e2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachIntVectorListener(t3);
    });
  }
  attachDoubleListener(t2, e2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachDoubleListener(t3);
    });
  }
  attachDoubleVectorListener(t2, e2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachDoubleVectorListener(t3);
    });
  }
  attachFloatListener(t2, e2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachFloatListener(t3);
    });
  }
  attachFloatVectorListener(t2, e2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachFloatVectorListener(t3);
    });
  }
  attachStringListener(t2, e2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachStringListener(t3);
    });
  }
  attachStringVectorListener(t2, e2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachStringVectorListener(t3);
    });
  }
  attachProtoListener(t2, e2, n2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachProtoListener(t3, n2 || false);
    });
  }
  attachProtoVectorListener(t2, e2, n2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.i._attachProtoVectorListener(t3, n2 || false);
    });
  }
  attachAudioListener(t2, e2, n2) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Po(this, t2, (t3, n3) => {
      t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
    }), Lo(this, t2, (t3) => {
      this.i._attachAudioListener(t3, n2 || false);
    });
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Fa {
  get ca() {
    return this.i;
  }
  pa(t2, e2, n2) {
    Lo(this, e2, (e3) => {
      const [r2, i2] = Mo(this, t2, e3);
      this.ca._addBoundTextureAsImageToStream(e3, r2, i2, n2);
    });
  }
  X(t2, e2) {
    Po(this, t2, e2), Lo(this, t2, (t3) => {
      this.ca._attachImageListener(t3);
    });
  }
  Y(t2, e2) {
    Io(this, t2, e2), Lo(this, t2, (t3) => {
      this.ca._attachImageVectorListener(t3);
    });
  }
}));
var Fa;
var La = class extends xa {
};
async function Ma(t2, e2, n2) {
  return async function(t3, e3, n3, r2) {
    return Co(t3, e3, n3, r2);
  }(t2, n2.canvas ?? ("undefined" == typeof OffscreenCanvas || xo() ? document.createElement("canvas") : void 0), e2, n2);
}
function Oa(t2, e2, n2, r2) {
  if (t2.da) {
    const s2 = new Zi();
    if (n2 == null ? void 0 : n2.regionOfInterest) {
      if (!t2.na)
        throw Error("This task doesn't support region-of-interest.");
      var i2 = n2.regionOfInterest;
      if (i2.left >= i2.right || i2.top >= i2.bottom)
        throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > i2.left || 0 > i2.top || 1 < i2.right || 1 < i2.bottom)
        throw Error("Expected RectF values to be in [0,1].");
      Pn(s2, 1, (i2.left + i2.right) / 2), Pn(s2, 2, (i2.top + i2.bottom) / 2), Pn(s2, 4, i2.right - i2.left), Pn(s2, 3, i2.bottom - i2.top);
    } else
      Pn(s2, 1, 0.5), Pn(s2, 2, 0.5), Pn(s2, 4, 1), Pn(s2, 3, 1);
    if (n2 == null ? void 0 : n2.rotationDegrees) {
      if (0 != (n2 == null ? void 0 : n2.rotationDegrees) % 90)
        throw Error("Expected rotation to be a multiple of 90°.");
      if (Pn(s2, 5, -Math.PI * n2.rotationDegrees / 180), 0 != (n2 == null ? void 0 : n2.rotationDegrees) % 180) {
        const [t3, r3] = void 0 !== e2.videoWidth ? [e2.videoWidth, e2.videoHeight] : void 0 !== e2.naturalWidth ? [e2.naturalWidth, e2.naturalHeight] : [e2.width, e2.height];
        n2 = Ln(s2, 3) * r3 / t3, i2 = Ln(s2, 4) * t3 / r3, Pn(s2, 4, n2), Pn(s2, 3, i2);
      }
    }
    t2.g.addProtoToStream(s2.g(), "mediapipe.NormalizedRect", t2.da, r2);
  }
  t2.g.pa(e2, t2.ma, r2 ?? performance.now()), t2.finishProcessing();
}
function Pa(t2, e2, n2) {
  var _a2;
  if ((_a2 = t2.baseOptions) == null ? void 0 : _a2.g())
    throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  Oa(t2, e2, n2, t2.N + 1);
}
function Ia(t2, e2, n2, r2) {
  var _a2;
  if (!((_a2 = t2.baseOptions) == null ? void 0 : _a2.g()))
    throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  Oa(t2, e2, n2, r2);
}
function Ca(t2, e2, n2) {
  var r2 = e2.data;
  const i2 = e2.width, s2 = i2 * (e2 = e2.height);
  if ((r2 instanceof Uint8Array || r2 instanceof Float32Array) && r2.length !== s2)
    throw Error("Unsupported channel count: " + r2.length / s2);
  return t2 = new aa([r2], false, t2.g.i.canvas, t2.U, i2, e2), n2 ? t2.clone() : t2;
}
var Ra = class extends jo {
  constructor(t2, e2, n2, r2) {
    super(t2), this.g = t2, this.ma = e2, this.da = n2, this.na = r2, this.U = new qo();
  }
  l(t2, e2 = true) {
    if ("runningMode" in t2 && Mn(this.baseOptions, 2, !!t2.runningMode && "IMAGE" !== t2.runningMode), void 0 !== t2.canvas && this.g.i.canvas !== t2.canvas)
      throw Error("You must create a new task to reset the canvas.");
    return super.l(t2, e2);
  }
  close() {
    this.U.close(), super.close();
  }
};
Ra.prototype.close = Ra.prototype.close;
var Da = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect_in", false), this.j = { detections: [] }, this.h = new ws(), t2 = new vs(), En(this.h, 0, 1, t2), Pn(this.h, 2, 0.5), Pn(this.h, 3, 0.3);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    return "minDetectionConfidence" in t2 && Pn(this.h, 2, t2.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in t2 && Pn(this.h, 3, t2.minSuppressionThreshold ?? 0.3), this.l(t2);
  }
  F(t2, e2) {
    return this.j = { detections: [] }, Pa(this, t2, e2), this.j;
  }
  G(t2, e2, n2) {
    return this.j = { detections: [] }, Ia(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect_in"), bi(t2, "detections");
    const e2 = new ni();
    In(e2, Es, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect_in"), fi(n2, "DETECTIONS:detections"), n2.o(e2), _i(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3)
        t3 = ji(e4), this.j.detections.push(yo(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Da.prototype.detectForVideo = Da.prototype.G, Da.prototype.detect = Da.prototype.F, Da.prototype.setOptions = Da.prototype.o, Da.createFromModelPath = async function(t2, e2) {
  return Ma(Da, t2, { baseOptions: { modelAssetPath: e2 } });
}, Da.createFromModelBuffer = function(t2, e2) {
  return Ma(Da, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Da.createFromOptions = function(t2, e2) {
  return Ma(Da, t2, e2);
};
var Ba = Sa([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
var Ua = Sa([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
var Na = Sa([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
var Ga = Sa([474, 475], [475, 476], [476, 477], [477, 474]);
var ja = Sa([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
var Va = Sa([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
var za = Sa([469, 470], [470, 471], [471, 472], [472, 469]);
var Wa = Sa([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
var Xa = [...Ba, ...Ua, ...Na, ...ja, ...Va, ...Wa];
var Ha = Sa([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function Ya(t2) {
  t2.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var Ka = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", false), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = false, this.h = new Ls(), t2 = new vs(), En(this.h, 0, 1, t2), this.v = new xs(), En(this.h, 0, 3, this.v), this.u = new ws(), En(this.h, 0, 2, this.u), On(this.u, 4, 1), Pn(this.u, 2, 0.5), Pn(this.v, 2, 0.5), Pn(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    return "numFaces" in t2 && On(this.u, 4, t2.numFaces ?? 1), "minFaceDetectionConfidence" in t2 && Pn(this.u, 2, t2.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Pn(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in t2 && Pn(this.v, 2, t2.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t2 && (this.outputFacialTransformationMatrixes = !!t2.outputFacialTransformationMatrixes), this.l(t2);
  }
  F(t2, e2) {
    return Ya(this), Pa(this, t2, e2), this.j;
  }
  G(t2, e2, n2) {
    return Ya(this), Ia(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect"), bi(t2, "face_landmarks");
    const e2 = new ni();
    In(e2, Os, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "NORM_LANDMARKS:face_landmarks"), n2.o(e2), _i(t2, n2), this.g.attachProtoVectorListener("face_landmarks", (t3, e3) => {
      for (const e4 of t3)
        t3 = $i(e4), this.j.faceLandmarks.push(vo(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
      Bo(this, t3);
    }), this.outputFaceBlendshapes && (bi(t2, "blendshapes"), fi(n2, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t3, e3) => {
      if (this.outputFaceBlendshapes)
        for (const e4 of t3)
          t3 = Mi(e4), this.j.faceBlendshapes.push(mo(t3.g() ?? []));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("blendshapes", (t3) => {
      Bo(this, t3);
    })), this.outputFacialTransformationMatrixes && (bi(t2, "face_geometry"), fi(n2, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t3, e3) => {
      if (this.outputFacialTransformationMatrixes)
        for (const e4 of t3)
          (t3 = _n(ks(e4), qi, 2)) && this.j.facialTransformationMatrixes.push({ rows: Fn(Sn(t3, 1)) ?? 0, columns: Fn(Sn(t3, 2)) ?? 0, data: cn(t3, 3, me) ?? [] });
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("face_geometry", (t3) => {
      Bo(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Ka.prototype.detectForVideo = Ka.prototype.G, Ka.prototype.detect = Ka.prototype.F, Ka.prototype.setOptions = Ka.prototype.o, Ka.createFromModelPath = function(t2, e2) {
  return Ma(Ka, t2, { baseOptions: { modelAssetPath: e2 } });
}, Ka.createFromModelBuffer = function(t2, e2) {
  return Ma(Ka, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Ka.createFromOptions = function(t2, e2) {
  return Ma(Ka, t2, e2);
}, Ka.FACE_LANDMARKS_LIPS = Ba, Ka.FACE_LANDMARKS_LEFT_EYE = Ua, Ka.FACE_LANDMARKS_LEFT_EYEBROW = Na, Ka.FACE_LANDMARKS_LEFT_IRIS = Ga, Ka.FACE_LANDMARKS_RIGHT_EYE = ja, Ka.FACE_LANDMARKS_RIGHT_EYEBROW = Va, Ka.FACE_LANDMARKS_RIGHT_IRIS = za, Ka.FACE_LANDMARKS_FACE_OVAL = Wa, Ka.FACE_LANDMARKS_CONTOURS = Xa, Ka.FACE_LANDMARKS_TESSELATION = Ha;
var $a = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", true), this.j = new Ps(), t2 = new vs(), En(this.j, 0, 1, t2);
  }
  get baseOptions() {
    return _n(this.j, vs, 1);
  }
  set baseOptions(t2) {
    En(this.j, 0, 1, t2);
  }
  o(t2) {
    return super.l(t2);
  }
  Pa(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    if (this.h = "function" == typeof e2 ? e2 : n2, Pa(this, t2, r2 ?? {}), !this.h)
      return this.u;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect"), bi(t2, "stylized_image");
    const e2 = new ni();
    In(e2, Is, this.j);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "STYLIZED_IMAGE:stylized_image"), n2.o(e2), _i(t2, n2), this.g.X("stylized_image", (t3, e3) => {
      var n3 = !this.h, r2 = t3.data, i2 = t3.width;
      const s2 = i2 * (t3 = t3.height);
      if (r2 instanceof Uint8Array)
        if (r2.length === 3 * s2) {
          const e4 = new Uint8ClampedArray(4 * s2);
          for (let t4 = 0; t4 < s2; ++t4)
            e4[4 * t4] = r2[3 * t4], e4[4 * t4 + 1] = r2[3 * t4 + 1], e4[4 * t4 + 2] = r2[3 * t4 + 2], e4[4 * t4 + 3] = 255;
          r2 = new ImageData(e4, i2, t3);
        } else {
          if (r2.length !== 4 * s2)
            throw Error("Unsupported channel count: " + r2.length / s2);
          r2 = new ImageData(new Uint8ClampedArray(r2.buffer, r2.byteOffset, r2.length), i2, t3);
        }
      else if (!(r2 instanceof WebGLTexture))
        throw Error(`Unsupported format: ${r2.constructor.name}`);
      i2 = new Ta([r2], false, false, this.g.i.canvas, this.U, i2, t3), this.u = n3 = n3 ? i2.clone() : i2, this.h && this.h(n3), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("stylized_image", (t3) => {
      this.u = null, this.h && this.h(null), Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
$a.prototype.stylize = $a.prototype.Pa, $a.prototype.setOptions = $a.prototype.o, $a.createFromModelPath = function(t2, e2) {
  return Ma($a, t2, { baseOptions: { modelAssetPath: e2 } });
}, $a.createFromModelBuffer = function(t2, e2) {
  return Ma($a, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, $a.createFromOptions = function(t2, e2) {
  return Ma($a, t2, e2);
};
var qa = Sa([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function Ja(t2) {
  t2.gestures = [], t2.landmarks = [], t2.worldLandmarks = [], t2.handedness = [];
}
function Za(t2) {
  return 0 === t2.gestures.length ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t2.gestures, landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handedness: t2.handedness, handednesses: t2.handedness };
}
function Qa(t2, e2 = true) {
  const n2 = [];
  for (const i2 of t2) {
    var r2 = Mi(i2);
    t2 = [];
    for (const n3 of r2.g())
      r2 = e2 && null != Sn(n3, 1) ? Fn(Sn(n3, 1)) : -1, t2.push({ score: Ln(n3, 2) ?? 0, index: r2, categoryName: xn(n3, 3) ?? "" ?? "", displayName: xn(n3, 4) ?? "" ?? "" });
    n2.push(t2);
  }
  return n2;
}
var tc = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", false), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], this.v = new Xs(), t2 = new vs(), En(this.v, 0, 1, t2), this.C = new zs(), En(this.v, 0, 2, this.C), this.u = new js(), En(this.C, 0, 3, this.u), this.h = new Ns(), En(this.C, 0, 2, this.h), this.j = new Bs(), En(this.v, 0, 3, this.j), Pn(this.h, 2, 0.5), Pn(this.C, 4, 0.5), Pn(this.u, 2, 0.5);
  }
  get baseOptions() {
    return _n(this.v, vs, 1);
  }
  set baseOptions(t2) {
    En(this.v, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c2, _d;
    if (On(this.h, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && Pn(this.h, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Pn(this.C, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && Pn(this.u, 2, t2.minHandPresenceConfidence ?? 0.5), t2.cannedGesturesClassifierOptions) {
      var e2 = new Cs(), n2 = go(t2.cannedGesturesClassifierOptions, (_a2 = _n(this.j, Cs, 3)) == null ? void 0 : _a2.h());
      En(e2, 0, 2, n2), En(this.j, 0, 3, e2);
    } else
      void 0 === t2.cannedGesturesClassifierOptions && ((_b = _n(this.j, Cs, 3)) == null ? void 0 : _b.g());
    return t2.customGesturesClassifierOptions ? (En(e2 = new Cs(), 0, 2, n2 = go(t2.customGesturesClassifierOptions, (_c2 = _n(this.j, Cs, 4)) == null ? void 0 : _c2.h())), En(this.j, 0, 4, e2)) : void 0 === t2.customGesturesClassifierOptions && ((_d = _n(this.j, Cs, 4)) == null ? void 0 : _d.g()), this.l(t2);
  }
  Ka(t2, e2) {
    return Ja(this), Pa(this, t2, e2), Za(this);
  }
  La(t2, e2, n2) {
    return Ja(this), Ia(this, t2, n2, e2), Za(this);
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect"), bi(t2, "hand_gestures"), bi(t2, "hand_landmarks"), bi(t2, "world_hand_landmarks"), bi(t2, "handedness");
    const e2 = new ni();
    In(e2, Ks, this.v);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "HAND_GESTURES:hand_gestures"), fi(n2, "LANDMARKS:hand_landmarks"), fi(n2, "WORLD_LANDMARKS:world_hand_landmarks"), fi(n2, "HANDEDNESS:handedness"), n2.o(e2), _i(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
      for (const e4 of t3) {
        t3 = $i(e4);
        const n3 = [];
        for (const e5 of bn(t3, Hi, 1))
          n3.push({ x: Ln(e5, 1) ?? 0, y: Ln(e5, 2) ?? 0, z: Ln(e5, 3) ?? 0 });
        this.landmarks.push(n3);
      }
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      Bo(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
      for (const e4 of t3) {
        t3 = Xi(e4);
        const n3 = [];
        for (const e5 of bn(t3, Vi, 1))
          n3.push({ x: Ln(e5, 1) ?? 0, y: Ln(e5, 2) ?? 0, z: Ln(e5, 3) ?? 0 });
        this.worldLandmarks.push(n3);
      }
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      Bo(this, t3);
    }), this.g.attachProtoVectorListener("hand_gestures", (t3, e3) => {
      this.gestures.push(...Qa(t3, false)), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("hand_gestures", (t3) => {
      Bo(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
      this.handedness.push(...Qa(t3)), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
function ec(t2) {
  return { landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handednesses: t2.handedness, handedness: t2.handedness };
}
tc.prototype.recognizeForVideo = tc.prototype.La, tc.prototype.recognize = tc.prototype.Ka, tc.prototype.setOptions = tc.prototype.o, tc.createFromModelPath = function(t2, e2) {
  return Ma(tc, t2, { baseOptions: { modelAssetPath: e2 } });
}, tc.createFromModelBuffer = function(t2, e2) {
  return Ma(tc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, tc.createFromOptions = function(t2, e2) {
  return Ma(tc, t2, e2);
}, tc.HAND_CONNECTIONS = qa;
var nc = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], this.j = new zs(), t2 = new vs(), En(this.j, 0, 1, t2), this.u = new js(), En(this.j, 0, 3, this.u), this.h = new Ns(), En(this.j, 0, 2, this.h), On(this.h, 3, 1), Pn(this.h, 2, 0.5), Pn(this.u, 2, 0.5), Pn(this.j, 4, 0.5);
  }
  get baseOptions() {
    return _n(this.j, vs, 1);
  }
  set baseOptions(t2) {
    En(this.j, 0, 1, t2);
  }
  o(t2) {
    return "numHands" in t2 && On(this.h, 3, t2.numHands ?? 1), "minHandDetectionConfidence" in t2 && Pn(this.h, 2, t2.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Pn(this.j, 4, t2.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in t2 && Pn(this.u, 2, t2.minHandPresenceConfidence ?? 0.5), this.l(t2);
  }
  F(t2, e2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Pa(this, t2, e2), ec(this);
  }
  G(t2, e2, n2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ia(this, t2, n2, e2), ec(this);
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect"), bi(t2, "hand_landmarks"), bi(t2, "world_hand_landmarks"), bi(t2, "handedness");
    const e2 = new ni();
    In(e2, Ys, this.j);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "LANDMARKS:hand_landmarks"), fi(n2, "WORLD_LANDMARKS:world_hand_landmarks"), fi(n2, "HANDEDNESS:handedness"), n2.o(e2), _i(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
      for (const e4 of t3)
        t3 = $i(e4), this.landmarks.push(vo(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      Bo(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
      for (const e4 of t3)
        t3 = Xi(e4), this.worldLandmarks.push(_o(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      Bo(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
      var n3 = this.handedness, r2 = n3.push;
      const i2 = [];
      for (const e4 of t3) {
        t3 = Mi(e4);
        const n4 = [];
        for (const e5 of t3.g())
          n4.push({ score: Ln(e5, 2) ?? 0, index: Fn(Sn(e5, 1)) ?? -1, categoryName: xn(e5, 3) ?? "" ?? "", displayName: xn(e5, 4) ?? "" ?? "" });
        i2.push(n4);
      }
      r2.call(n3, ...i2), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
nc.prototype.detectForVideo = nc.prototype.G, nc.prototype.detect = nc.prototype.F, nc.prototype.setOptions = nc.prototype.o, nc.createFromModelPath = function(t2, e2) {
  return Ma(nc, t2, { baseOptions: { modelAssetPath: e2 } });
}, nc.createFromModelBuffer = function(t2, e2) {
  return Ma(nc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, nc.createFromOptions = function(t2, e2) {
  return Ma(nc, t2, e2);
}, nc.HAND_CONNECTIONS = qa;
var rc = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "input_image", "norm_rect", true), this.j = { classifications: [] }, this.h = new $s(), t2 = new vs(), En(this.h, 0, 1, t2);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    var e2 = go(t2, _n(this.h, us, 2));
    return En(this.h, 0, 2, e2), this.l(t2);
  }
  sa(t2, e2) {
    return this.j = { classifications: [] }, Pa(this, t2, e2), this.j;
  }
  ta(t2, e2, n2) {
    return this.j = { classifications: [] }, Ia(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "input_image"), wi(t2, "norm_rect"), bi(t2, "classifications");
    const e2 = new ni();
    In(e2, qs, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), li(n2, "IMAGE:input_image"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "CLASSIFICATIONS:classifications"), n2.o(e2), _i(t2, n2), this.g.attachProtoListener("classifications", (t3, e3) => {
      this.j = function(t4) {
        const e4 = { classifications: bn(t4, Qi, 1).map((t5) => {
          var _a2;
          return mo(((_a2 = _n(t5, Fi, 4)) == null ? void 0 : _a2.g()) ?? [], Fn(Sn(t5, 2)), xn(t5, 3) ?? "");
        }) };
        return null != Te(tn(t4, 2)) && (e4.timestampMs = Fn(Te(tn(t4, 2)))), e4;
      }(ns(t3)), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("classifications", (t3) => {
      Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
rc.prototype.classifyForVideo = rc.prototype.ta, rc.prototype.classify = rc.prototype.sa, rc.prototype.setOptions = rc.prototype.o, rc.createFromModelPath = function(t2, e2) {
  return Ma(rc, t2, { baseOptions: { modelAssetPath: e2 } });
}, rc.createFromModelBuffer = function(t2, e2) {
  return Ma(rc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, rc.createFromOptions = function(t2, e2) {
  return Ma(rc, t2, e2);
};
var ic = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", true), this.h = new Js(), this.embeddings = { embeddings: [] }, t2 = new vs(), En(this.h, 0, 1, t2);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    var e2 = this.h, n2 = _n(this.h, fs, 2);
    return n2 = n2 ? n2.clone() : new fs(), void 0 !== t2.l2Normalize ? Mn(n2, 1, t2.l2Normalize) : "l2Normalize" in t2 && nn(n2, 1), void 0 !== t2.quantize ? Mn(n2, 2, t2.quantize) : "quantize" in t2 && nn(n2, 2), En(e2, 0, 2, n2), this.l(t2);
  }
  xa(t2, e2) {
    return Pa(this, t2, e2), this.embeddings;
  }
  ya(t2, e2, n2) {
    return Ia(this, t2, n2, e2), this.embeddings;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect"), bi(t2, "embeddings_out");
    const e2 = new ni();
    In(e2, Zs, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "EMBEDDINGS:embeddings_out"), n2.o(e2), _i(t2, n2), this.g.attachProtoListener("embeddings_out", (t3, e3) => {
      t3 = hs(t3), this.embeddings = function(t4) {
        return { embeddings: bn(t4, ss, 1).map((t5) => {
          var _a2, _b;
          const e4 = { headIndex: Fn(Sn(t5, 3)) ?? -1, headName: xn(t5, 4) ?? "" ?? "" };
          if (void 0 !== vn(t5, rs, gn(t5, 1)))
            t5 = cn(t5 = _n(t5, rs, gn(t5, 1)), 1, me), e4.floatEmbedding = t5;
          else {
            const n3 = new Uint8Array(0);
            e4.quantizedEmbedding = ((_b = (_a2 = _n(t5, is, gn(t5, 2))) == null ? void 0 : _a2.oa()) == null ? void 0 : _b.qa()) ?? n3;
          }
          return e4;
        }), timestampMs: Fn(Te(tn(t4, 2))) };
      }(t3), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("embeddings_out", (t3) => {
      Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
ic.cosineSimilarity = function(t2, e2) {
  if (t2.floatEmbedding && e2.floatEmbedding)
    t2 = bo(t2.floatEmbedding, e2.floatEmbedding);
  else {
    if (!t2.quantizedEmbedding || !e2.quantizedEmbedding)
      throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    t2 = bo(wo(t2.quantizedEmbedding), wo(e2.quantizedEmbedding));
  }
  return t2;
}, ic.prototype.embedForVideo = ic.prototype.ya, ic.prototype.embed = ic.prototype.xa, ic.prototype.setOptions = ic.prototype.o, ic.createFromModelPath = function(t2, e2) {
  return Ma(ic, t2, { baseOptions: { modelAssetPath: e2 } });
}, ic.createFromModelBuffer = function(t2, e2) {
  return Ma(ic, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, ic.createFromOptions = function(t2, e2) {
  return Ma(ic, t2, e2);
};
var sc = class {
  constructor(t2, e2, n2) {
    this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
  }
  close() {
    var _a2, _b;
    (_a2 = this.confidenceMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    }), (_b = this.categoryMask) == null ? void 0 : _b.close();
  }
};
function oc(t2) {
  t2.categoryMask = void 0, t2.confidenceMasks = void 0, t2.qualityScores = void 0;
}
function ac(t2) {
  try {
    const e2 = new sc(t2.confidenceMasks, t2.categoryMask, t2.qualityScores);
    if (!t2.j)
      return e2;
    t2.j(e2);
  } finally {
    Go(t2);
  }
}
sc.prototype.close = sc.prototype.close;
var cc = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", false), this.u = [], this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new ro(), this.v = new Qs(), En(this.h, 0, 3, this.v), t2 = new vs(), En(this.h, 0, 1, t2);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    return void 0 !== t2.displayNamesLocale ? nn(this.h, 2, Se(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && nn(this.h, 2), "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
  }
  V() {
    !function(t2) {
      var _a2, _b;
      const e2 = bn(t2.aa(), di, 1).filter((t3) => (xn(t3, 1) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
      if (t2.u = [], 1 < e2.length)
        throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      1 === e2.length && (((_b = (_a2 = _n(e2[0], ni, 7)) == null ? void 0 : _a2.l()) == null ? void 0 : _b.g()) ?? /* @__PURE__ */ new Map()).forEach((e3, n2) => {
        t2.u[Number(n2)] = xn(e3, 1) ?? "";
      });
    }(this);
  }
  ba(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.j = "function" == typeof e2 ? e2 : n2, oc(this), Pa(this, t2, r2), ac(this);
  }
  Na(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.j = "function" == typeof n2 ? n2 : r2, oc(this), Ia(this, t2, i2, e2), ac(this);
  }
  Da() {
    return this.u;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect");
    const e2 = new ni();
    In(e2, io, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), n2.o(e2), _i(t2, n2), Uo(this, t2), this.outputConfidenceMasks && (bi(t2, "confidence_masks"), fi(n2, "CONFIDENCE_MASKS:confidence_masks"), No(this, "confidence_masks"), this.g.Y("confidence_masks", (t3, e3) => {
      this.confidenceMasks = t3.map((t4) => Ca(this, t4, !this.j)), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], Bo(this, t3);
    })), this.outputCategoryMask && (bi(t2, "category_mask"), fi(n2, "CATEGORY_MASK:category_mask"), No(this, "category_mask"), this.g.X("category_mask", (t3, e3) => {
      this.categoryMask = Ca(this, t3, !this.j), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, Bo(this, t3);
    })), bi(t2, "quality_scores"), fi(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
      this.qualityScores = t3, Bo(this, e3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
cc.prototype.getLabels = cc.prototype.Da, cc.prototype.segmentForVideo = cc.prototype.Na, cc.prototype.segment = cc.prototype.ba, cc.prototype.setOptions = cc.prototype.o, cc.createFromModelPath = function(t2, e2) {
  return Ma(cc, t2, { baseOptions: { modelAssetPath: e2 } });
}, cc.createFromModelBuffer = function(t2, e2) {
  return Ma(cc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, cc.createFromOptions = function(t2, e2) {
  return Ma(cc, t2, e2);
};
var hc = class {
  constructor(t2, e2, n2) {
    this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
  }
  close() {
    var _a2, _b;
    (_a2 = this.confidenceMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    }), (_b = this.categoryMask) == null ? void 0 : _b.close();
  }
};
hc.prototype.close = hc.prototype.close;
var uc = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var lc = [0, xr, -2];
var fc = [0, wr, -3, Mr];
var dc = [0, wr, -3, Mr, wr, -1];
var pc = [0, dc];
var gc = [0, pc, lc];
var mc = [0, dc, lc];
var yc = [0, dc, xr, -1];
var vc = [0, yc, lc];
var _c = [0, wr, -3, Mr, lc, -1];
var wc = [0, wr, -3, Mr, Gr];
var bc = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var Ec = [0, wr, -1, Mr];
var Ac = class extends Cn {
  constructor() {
    super();
  }
};
Ac.A = [1];
var Tc = class extends Cn {
  constructor(t2) {
    super(t2);
  }
};
var kc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15];
var Sc = [0, kc, Br, dc, Br, mc, Br, pc, Br, gc, Br, Ec, Br, wc, Br, fc, Br, [0, Cr, wr, -2, Mr, xr, Mr, -1, 2, wr, lc], Br, yc, Br, vc, wr, lc, Cr, Br, _c, Br, [0, _r, Ec]];
var xc = [0, Cr, xr, -1, Mr];
var Fc = class extends Cn {
  constructor() {
    super();
  }
};
Fc.A = [1], Fc.prototype.g = Xr([0, _r, Sc, Cr, xc]);
var Lc = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect_in", false), this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new ro(), this.v = new Qs(), En(this.h, 0, 3, this.v), t2 = new vs(), En(this.h, 0, 1, t2);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    return "outputCategoryMask" in t2 && (this.outputCategoryMask = t2.outputCategoryMask ?? false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = t2.outputConfidenceMasks ?? true), super.l(t2);
  }
  ba(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    this.j = "function" == typeof n2 ? n2 : r2, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n2 = this.N + 1, r2 = new Fc();
    const s2 = new Tc();
    var o2 = new uc();
    if (On(o2, 1, 255), En(s2, 0, 12, o2), e2.keypoint && e2.scribble)
      throw Error("Cannot provide both keypoint and scribble.");
    if (e2.keypoint) {
      var a2 = new bc();
      Mn(a2, 3, true), Pn(a2, 1, e2.keypoint.x), Pn(a2, 2, e2.keypoint.y), An(s2, 5, kc, a2);
    } else {
      if (!e2.scribble)
        throw Error("Must provide either a keypoint or a scribble.");
      for (a2 of (o2 = new Ac(), e2.scribble))
        Mn(e2 = new bc(), 3, true), Pn(e2, 1, a2.x), Pn(e2, 2, a2.y), kn(o2, bc, e2);
      An(s2, 15, kc, o2);
    }
    kn(r2, Tc, s2), this.g.addProtoToStream(r2.g(), "drishti.RenderData", "roi_in", n2), Pa(this, t2, i2);
    t: {
      try {
        const t3 = new hc(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var c2 = t3;
          break t;
        }
        this.j(t3);
      } finally {
        Go(this);
      }
      c2 = void 0;
    }
    return c2;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "roi_in"), wi(t2, "norm_rect_in");
    const e2 = new ni();
    In(e2, io, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), li(n2, "IMAGE:image_in"), li(n2, "ROI:roi_in"), li(n2, "NORM_RECT:norm_rect_in"), n2.o(e2), _i(t2, n2), Uo(this, t2), this.outputConfidenceMasks && (bi(t2, "confidence_masks"), fi(n2, "CONFIDENCE_MASKS:confidence_masks"), No(this, "confidence_masks"), this.g.Y("confidence_masks", (t3, e3) => {
      this.confidenceMasks = t3.map((t4) => Ca(this, t4, !this.j)), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], Bo(this, t3);
    })), this.outputCategoryMask && (bi(t2, "category_mask"), fi(n2, "CATEGORY_MASK:category_mask"), No(this, "category_mask"), this.g.X("category_mask", (t3, e3) => {
      this.categoryMask = Ca(this, t3, !this.j), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, Bo(this, t3);
    })), bi(t2, "quality_scores"), fi(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
      this.qualityScores = t3, Bo(this, e3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Lc.prototype.segment = Lc.prototype.ba, Lc.prototype.setOptions = Lc.prototype.o, Lc.createFromModelPath = function(t2, e2) {
  return Ma(Lc, t2, { baseOptions: { modelAssetPath: e2 } });
}, Lc.createFromModelBuffer = function(t2, e2) {
  return Ma(Lc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Lc.createFromOptions = function(t2, e2) {
  return Ma(Lc, t2, e2);
};
var Mc = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "input_frame_gpu", "norm_rect", false), this.j = { detections: [] }, this.h = new so(), t2 = new vs(), En(this.h, 0, 1, t2);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    return void 0 !== t2.displayNamesLocale ? nn(this.h, 2, Se(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && nn(this.h, 2), void 0 !== t2.maxResults ? On(this.h, 3, t2.maxResults) : "maxResults" in t2 && nn(this.h, 3), void 0 !== t2.scoreThreshold ? Pn(this.h, 4, t2.scoreThreshold) : "scoreThreshold" in t2 && nn(this.h, 4), void 0 !== t2.categoryAllowlist ? fn(this.h, 5, t2.categoryAllowlist) : "categoryAllowlist" in t2 && nn(this.h, 5), void 0 !== t2.categoryDenylist ? fn(this.h, 6, t2.categoryDenylist) : "categoryDenylist" in t2 && nn(this.h, 6), this.l(t2);
  }
  F(t2, e2) {
    return this.j = { detections: [] }, Pa(this, t2, e2), this.j;
  }
  G(t2, e2, n2) {
    return this.j = { detections: [] }, Ia(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new Ei();
    wi(t2, "input_frame_gpu"), wi(t2, "norm_rect"), bi(t2, "detections");
    const e2 = new ni();
    In(e2, oo, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.ObjectDetectorGraph"), li(n2, "IMAGE:input_frame_gpu"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "DETECTIONS:detections"), n2.o(e2), _i(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3)
        t3 = ji(e4), this.j.detections.push(yo(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      Bo(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Mc.prototype.detectForVideo = Mc.prototype.G, Mc.prototype.detect = Mc.prototype.F, Mc.prototype.setOptions = Mc.prototype.o, Mc.createFromModelPath = async function(t2, e2) {
  return Ma(Mc, t2, { baseOptions: { modelAssetPath: e2 } });
}, Mc.createFromModelBuffer = function(t2, e2) {
  return Ma(Mc, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Mc.createFromOptions = function(t2, e2) {
  return Ma(Mc, t2, e2);
};
function Oc(t2) {
  t2.landmarks = [], t2.worldLandmarks = [], t2.v = void 0;
}
function Pc(t2) {
  try {
    const e2 = new class {
      constructor(t3, e3, n2) {
        this.landmarks = t3, this.worldLandmarks = e3, this.g = n2;
      }
      close() {
        var _a2;
        (_a2 = this.g) == null ? void 0 : _a2.forEach((t3) => {
          t3.close();
        });
      }
    }(t2.landmarks, t2.worldLandmarks, t2.v);
    if (!t2.u)
      return e2;
    t2.u(e2);
  } finally {
    Go(t2);
  }
}
var Ic = class extends Ra {
  constructor(t2, e2) {
    super(new La(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = false, this.h = new lo(), t2 = new vs(), En(this.h, 0, 1, t2), this.C = new ho(), En(this.h, 0, 3, this.C), this.j = new ao(), En(this.h, 0, 2, this.j), On(this.j, 4, 1), Pn(this.j, 2, 0.5), Pn(this.C, 2, 0.5), Pn(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _n(this.h, vs, 1);
  }
  set baseOptions(t2) {
    En(this.h, 0, 1, t2);
  }
  o(t2) {
    return "numPoses" in t2 && On(this.j, 4, t2.numPoses ?? 1), "minPoseDetectionConfidence" in t2 && Pn(this.j, 2, t2.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in t2 && Pn(this.h, 4, t2.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in t2 && Pn(this.C, 2, t2.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in t2 && (this.outputSegmentationMasks = t2.outputSegmentationMasks ?? false), this.l(t2);
  }
  F(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.u = "function" == typeof e2 ? e2 : n2, Oc(this), Pa(this, t2, r2), Pc(this);
  }
  G(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.u = "function" == typeof n2 ? n2 : r2, Oc(this), Ia(this, t2, i2, e2), Pc(this);
  }
  m() {
    var t2 = new Ei();
    wi(t2, "image_in"), wi(t2, "norm_rect"), bi(t2, "normalized_landmarks"), bi(t2, "world_landmarks"), bi(t2, "segmentation_masks");
    const e2 = new ni();
    In(e2, po, this.h);
    const n2 = new di();
    ui(n2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), li(n2, "IMAGE:image_in"), li(n2, "NORM_RECT:norm_rect"), fi(n2, "NORM_LANDMARKS:normalized_landmarks"), fi(n2, "WORLD_LANDMARKS:world_landmarks"), n2.o(e2), _i(t2, n2), Uo(this, t2), this.g.attachProtoVectorListener("normalized_landmarks", (t3, e3) => {
      this.landmarks = [];
      for (const e4 of t3)
        t3 = $i(e4), this.landmarks.push(vo(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("normalized_landmarks", (t3) => {
      this.landmarks = [], Bo(this, t3);
    }), this.g.attachProtoVectorListener("world_landmarks", (t3, e3) => {
      this.worldLandmarks = [];
      for (const e4 of t3)
        t3 = Xi(e4), this.worldLandmarks.push(_o(t3));
      Bo(this, e3);
    }), this.g.attachEmptyPacketListener("world_landmarks", (t3) => {
      this.worldLandmarks = [], Bo(this, t3);
    }), this.outputSegmentationMasks && (fi(n2, "SEGMENTATION_MASK:segmentation_masks"), No(this, "segmentation_masks"), this.g.Y("segmentation_masks", (t3, e3) => {
      this.v = t3.map((t4) => Ca(this, t4, !this.u)), Bo(this, e3);
    }), this.g.attachEmptyPacketListener("segmentation_masks", (t3) => {
      this.v = [], Bo(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Ic.prototype.detectForVideo = Ic.prototype.G, Ic.prototype.detect = Ic.prototype.F, Ic.prototype.setOptions = Ic.prototype.o, Ic.createFromModelPath = function(t2, e2) {
  return Ma(Ic, t2, { baseOptions: { modelAssetPath: e2 } });
}, Ic.createFromModelBuffer = function(t2, e2) {
  return Ma(Ic, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Ic.createFromOptions = function(t2, e2) {
  return Ma(Ic, t2, e2);
}, Ic.POSE_CONNECTIONS = Sa([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
export {
  pa as DrawingUtils,
  Da as FaceDetector,
  Ka as FaceLandmarker,
  $a as FaceStylizer,
  So as FilesetResolver,
  tc as GestureRecognizer,
  nc as HandLandmarker,
  rc as ImageClassifier,
  ic as ImageEmbedder,
  cc as ImageSegmenter,
  sc as ImageSegmenterResult,
  Lc as InteractiveSegmenter,
  hc as InteractiveSegmenterResult,
  Ta as MPImage,
  aa as MPMask,
  Mc as ObjectDetector,
  Ic as PoseLandmarker,
  jo as TaskRunner,
  Ra as VisionTaskRunner
};
//# sourceMappingURL=vision_bundle-5UNFCVB7.js.map
