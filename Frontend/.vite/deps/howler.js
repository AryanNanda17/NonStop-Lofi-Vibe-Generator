import {
  __commonJS
} from "./chunk-WXXH56N5.js";

// node_modules/howler/dist/howler.js
var require_howler = __commonJS({
  "node_modules/howler/dist/howler.js"(exports) {
    (function() {
      "use strict";
      var HowlerGlobal2 = function() {
        this.init();
      };
      HowlerGlobal2.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
          var self = this || Howler2;
          self._counter = 1e3;
          self._html5AudioPool = [];
          self.html5PoolSize = 10;
          self._codecs = {};
          self._howls = [];
          self._muted = false;
          self._volume = 1;
          self._canPlayEvent = "canplaythrough";
          self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
          self.masterGain = null;
          self.noAudio = false;
          self.usingWebAudio = true;
          self.autoSuspend = true;
          self.ctx = null;
          self.autoUnlock = true;
          self._setup();
          return self;
        },
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(vol) {
          var self = this || Howler2;
          vol = parseFloat(vol);
          if (!self.ctx) {
            setupAudioContext();
          }
          if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
            self._volume = vol;
            if (self._muted) {
              return self;
            }
            if (self.usingWebAudio) {
              self.masterGain.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
            }
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                var ids = self._howls[i]._getSoundIds();
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
                  if (sound && sound._node) {
                    sound._node.volume = sound._volume * vol;
                  }
                }
              }
            }
            return self;
          }
          return self._volume;
        },
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(muted) {
          var self = this || Howler2;
          if (!self.ctx) {
            setupAudioContext();
          }
          self._muted = muted;
          if (self.usingWebAudio) {
            self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler2.ctx.currentTime);
          }
          for (var i = 0; i < self._howls.length; i++) {
            if (!self._howls[i]._webAudio) {
              var ids = self._howls[i]._getSoundIds();
              for (var j = 0; j < ids.length; j++) {
                var sound = self._howls[i]._soundById(ids[j]);
                if (sound && sound._node) {
                  sound._node.muted = muted ? true : sound._muted;
                }
              }
            }
          }
          return self;
        },
        /**
         * Handle stopping all sounds globally.
         */
        stop: function() {
          var self = this || Howler2;
          for (var i = 0; i < self._howls.length; i++) {
            self._howls[i].stop();
          }
          return self;
        },
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
          var self = this || Howler2;
          for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].unload();
          }
          if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
            self.ctx.close();
            self.ctx = null;
            setupAudioContext();
          }
          return self;
        },
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(ext) {
          return (this || Howler2)._codecs[ext.replace(/^x-/, "")];
        },
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
          var self = this || Howler2;
          self.state = self.ctx ? self.ctx.state || "suspended" : "suspended";
          self._autoSuspend();
          if (!self.usingWebAudio) {
            if (typeof Audio !== "undefined") {
              try {
                var test = new Audio();
                if (typeof test.oncanplaythrough === "undefined") {
                  self._canPlayEvent = "canplay";
                }
              } catch (e) {
                self.noAudio = true;
              }
            } else {
              self.noAudio = true;
            }
          }
          try {
            var test = new Audio();
            if (test.muted) {
              self.noAudio = true;
            }
          } catch (e) {
          }
          if (!self.noAudio) {
            self._setupCodecs();
          }
          return self;
        },
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
          var self = this || Howler2;
          var audioTest = null;
          try {
            audioTest = typeof Audio !== "undefined" ? new Audio() : null;
          } catch (err) {
            return self;
          }
          if (!audioTest || typeof audioTest.canPlayType !== "function") {
            return self;
          }
          var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
          var ua = self._navigator ? self._navigator.userAgent : "";
          var checkOpera = ua.match(/OPR\/(\d+)/g);
          var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
          var checkSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1;
          var safariVersion = ua.match(/Version\/(.*?) /);
          var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
          self._codecs = {
            mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!mpegTest,
            opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
          };
          return self;
        },
        /**
         * Some browsers/devices will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _unlockAudio: function() {
          var self = this || Howler2;
          if (self._audioUnlocked || !self.ctx) {
            return;
          }
          self._audioUnlocked = false;
          self.autoUnlock = false;
          if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
            self._mobileUnloaded = true;
            self.unload();
          }
          self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
          var unlock = function(e) {
            while (self._html5AudioPool.length < self.html5PoolSize) {
              try {
                var audioNode = new Audio();
                audioNode._unlocked = true;
                self._releaseHtml5Audio(audioNode);
              } catch (e2) {
                self.noAudio = true;
                break;
              }
            }
            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                var ids = self._howls[i]._getSoundIds();
                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);
                  if (sound && sound._node && !sound._node._unlocked) {
                    sound._node._unlocked = true;
                    sound._node.load();
                  }
                }
              }
            }
            self._autoResume();
            var source = self.ctx.createBufferSource();
            source.buffer = self._scratchBuffer;
            source.connect(self.ctx.destination);
            if (typeof source.start === "undefined") {
              source.noteOn(0);
            } else {
              source.start(0);
            }
            if (typeof self.ctx.resume === "function") {
              self.ctx.resume();
            }
            source.onended = function() {
              source.disconnect(0);
              self._audioUnlocked = true;
              document.removeEventListener("touchstart", unlock, true);
              document.removeEventListener("touchend", unlock, true);
              document.removeEventListener("click", unlock, true);
              document.removeEventListener("keydown", unlock, true);
              for (var i2 = 0; i2 < self._howls.length; i2++) {
                self._howls[i2]._emit("unlock");
              }
            };
          };
          document.addEventListener("touchstart", unlock, true);
          document.addEventListener("touchend", unlock, true);
          document.addEventListener("click", unlock, true);
          document.addEventListener("keydown", unlock, true);
          return self;
        },
        /**
         * Get an unlocked HTML5 Audio object from the pool. If none are left,
         * return a new Audio object and throw a warning.
         * @return {Audio} HTML5 Audio object.
         */
        _obtainHtml5Audio: function() {
          var self = this || Howler2;
          if (self._html5AudioPool.length) {
            return self._html5AudioPool.pop();
          }
          var testPlay = new Audio().play();
          if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) {
            testPlay.catch(function() {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
          }
          return new Audio();
        },
        /**
         * Return an activated HTML5 Audio object to the pool.
         * @return {Howler}
         */
        _releaseHtml5Audio: function(audio) {
          var self = this || Howler2;
          if (audio._unlocked) {
            self._html5AudioPool.push(audio);
          }
          return self;
        },
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
          var self = this;
          if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler2.usingWebAudio) {
            return;
          }
          for (var i = 0; i < self._howls.length; i++) {
            if (self._howls[i]._webAudio) {
              for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                if (!self._howls[i]._sounds[j]._paused) {
                  return self;
                }
              }
            }
          }
          if (self._suspendTimer) {
            clearTimeout(self._suspendTimer);
          }
          self._suspendTimer = setTimeout(function() {
            if (!self.autoSuspend) {
              return;
            }
            self._suspendTimer = null;
            self.state = "suspending";
            var handleSuspension = function() {
              self.state = "suspended";
              if (self._resumeAfterSuspend) {
                delete self._resumeAfterSuspend;
                self._autoResume();
              }
            };
            self.ctx.suspend().then(handleSuspension, handleSuspension);
          }, 3e4);
          return self;
        },
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
          var self = this;
          if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler2.usingWebAudio) {
            return;
          }
          if (self.state === "running" && self.ctx.state !== "interrupted" && self._suspendTimer) {
            clearTimeout(self._suspendTimer);
            self._suspendTimer = null;
          } else if (self.state === "suspended" || self.state === "running" && self.ctx.state === "interrupted") {
            self.ctx.resume().then(function() {
              self.state = "running";
              for (var i = 0; i < self._howls.length; i++) {
                self._howls[i]._emit("resume");
              }
            });
            if (self._suspendTimer) {
              clearTimeout(self._suspendTimer);
              self._suspendTimer = null;
            }
          } else if (self.state === "suspending") {
            self._resumeAfterSuspend = true;
          }
          return self;
        }
      };
      var Howler2 = new HowlerGlobal2();
      var Howl2 = function(o) {
        var self = this;
        if (!o.src || o.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        self.init(o);
      };
      Howl2.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(o) {
          var self = this;
          if (!Howler2.ctx) {
            setupAudioContext();
          }
          self._autoplay = o.autoplay || false;
          self._format = typeof o.format !== "string" ? o.format : [o.format];
          self._html5 = o.html5 || false;
          self._muted = o.mute || false;
          self._loop = o.loop || false;
          self._pool = o.pool || 5;
          self._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
          self._rate = o.rate || 1;
          self._sprite = o.sprite || {};
          self._src = typeof o.src !== "string" ? o.src : [o.src];
          self._volume = o.volume !== void 0 ? o.volume : 1;
          self._xhr = {
            method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
            headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
            withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
          };
          self._duration = 0;
          self._state = "unloaded";
          self._sounds = [];
          self._endTimers = {};
          self._queue = [];
          self._playLock = false;
          self._onend = o.onend ? [{ fn: o.onend }] : [];
          self._onfade = o.onfade ? [{ fn: o.onfade }] : [];
          self._onload = o.onload ? [{ fn: o.onload }] : [];
          self._onloaderror = o.onloaderror ? [{ fn: o.onloaderror }] : [];
          self._onplayerror = o.onplayerror ? [{ fn: o.onplayerror }] : [];
          self._onpause = o.onpause ? [{ fn: o.onpause }] : [];
          self._onplay = o.onplay ? [{ fn: o.onplay }] : [];
          self._onstop = o.onstop ? [{ fn: o.onstop }] : [];
          self._onmute = o.onmute ? [{ fn: o.onmute }] : [];
          self._onvolume = o.onvolume ? [{ fn: o.onvolume }] : [];
          self._onrate = o.onrate ? [{ fn: o.onrate }] : [];
          self._onseek = o.onseek ? [{ fn: o.onseek }] : [];
          self._onunlock = o.onunlock ? [{ fn: o.onunlock }] : [];
          self._onresume = [];
          self._webAudio = Howler2.usingWebAudio && !self._html5;
          if (typeof Howler2.ctx !== "undefined" && Howler2.ctx && Howler2.autoUnlock) {
            Howler2._unlockAudio();
          }
          Howler2._howls.push(self);
          if (self._autoplay) {
            self._queue.push({
              event: "play",
              action: function() {
                self.play();
              }
            });
          }
          if (self._preload && self._preload !== "none") {
            self.load();
          }
          return self;
        },
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
          var self = this;
          var url = null;
          if (Howler2.noAudio) {
            self._emit("loaderror", null, "No audio support.");
            return;
          }
          if (typeof self._src === "string") {
            self._src = [self._src];
          }
          for (var i = 0; i < self._src.length; i++) {
            var ext, str;
            if (self._format && self._format[i]) {
              ext = self._format[i];
            } else {
              str = self._src[i];
              if (typeof str !== "string") {
                self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              ext = /^data:audio\/([^;,]+);/i.exec(str);
              if (!ext) {
                ext = /\.([^.]+)$/.exec(str.split("?", 1)[0]);
              }
              if (ext) {
                ext = ext[1].toLowerCase();
              }
            }
            if (!ext) {
              console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
            }
            if (ext && Howler2.codecs(ext)) {
              url = self._src[i];
              break;
            }
          }
          if (!url) {
            self._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          self._src = url;
          self._state = "loading";
          if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
            self._html5 = true;
            self._webAudio = false;
          }
          new Sound2(self);
          if (self._webAudio) {
            loadBuffer(self);
          }
          return self;
        },
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(sprite, internal) {
          var self = this;
          var id = null;
          if (typeof sprite === "number") {
            id = sprite;
            sprite = null;
          } else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) {
            return null;
          } else if (typeof sprite === "undefined") {
            sprite = "__default";
            if (!self._playLock) {
              var num = 0;
              for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                  num++;
                  id = self._sounds[i]._id;
                }
              }
              if (num === 1) {
                sprite = null;
              } else {
                id = null;
              }
            }
          }
          var sound = id ? self._soundById(id) : self._inactiveSound();
          if (!sound) {
            return null;
          }
          if (id && !sprite) {
            sprite = sound._sprite || "__default";
          }
          if (self._state !== "loaded") {
            sound._sprite = sprite;
            sound._ended = false;
            var soundId = sound._id;
            self._queue.push({
              event: "play",
              action: function() {
                self.play(soundId);
              }
            });
            return soundId;
          }
          if (id && !sound._paused) {
            if (!internal) {
              self._loadQueue("play");
            }
            return sound._id;
          }
          if (self._webAudio) {
            Howler2._autoResume();
          }
          var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3);
          var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek);
          var timeout = duration * 1e3 / Math.abs(sound._rate);
          var start = self._sprite[sprite][0] / 1e3;
          var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3;
          sound._sprite = sprite;
          sound._ended = false;
          var setParams = function() {
            sound._paused = false;
            sound._seek = seek;
            sound._start = start;
            sound._stop = stop;
            sound._loop = !!(sound._loop || self._sprite[sprite][2]);
          };
          if (seek >= stop) {
            self._ended(sound);
            return;
          }
          var node = sound._node;
          if (self._webAudio) {
            var playWebAudio = function() {
              self._playLock = false;
              setParams();
              self._refreshBuffer(sound);
              var vol = sound._muted || self._muted ? 0 : sound._volume;
              node.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
              sound._playStart = Howler2.ctx.currentTime;
              if (typeof node.bufferSource.start === "undefined") {
                sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
              } else {
                sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
              }
              if (timeout !== Infinity) {
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
              }
              if (!internal) {
                setTimeout(function() {
                  self._emit("play", sound._id);
                  self._loadQueue();
                }, 0);
              }
            };
            if (Howler2.state === "running" && Howler2.ctx.state !== "interrupted") {
              playWebAudio();
            } else {
              self._playLock = true;
              self.once("resume", playWebAudio);
              self._clearTimer(sound._id);
            }
          } else {
            var playHtml5 = function() {
              node.currentTime = seek;
              node.muted = sound._muted || self._muted || Howler2._muted || node.muted;
              node.volume = sound._volume * Howler2.volume();
              node.playbackRate = sound._rate;
              try {
                var play = node.play();
                if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                  self._playLock = true;
                  setParams();
                  play.then(function() {
                    self._playLock = false;
                    node._unlocked = true;
                    if (!internal) {
                      self._emit("play", sound._id);
                    } else {
                      self._loadQueue();
                    }
                  }).catch(function() {
                    self._playLock = false;
                    self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    sound._ended = true;
                    sound._paused = true;
                  });
                } else if (!internal) {
                  self._playLock = false;
                  setParams();
                  self._emit("play", sound._id);
                }
                node.playbackRate = sound._rate;
                if (node.paused) {
                  self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                if (sprite !== "__default" || sound._loop) {
                  self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                } else {
                  self._endTimers[sound._id] = function() {
                    self._ended(sound);
                    node.removeEventListener("ended", self._endTimers[sound._id], false);
                  };
                  node.addEventListener("ended", self._endTimers[sound._id], false);
                }
              } catch (err) {
                self._emit("playerror", sound._id, err);
              }
            };
            if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
              node.src = self._src;
              node.load();
            }
            var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler2._navigator.isCocoonJS;
            if (node.readyState >= 3 || loadedNoReadyState) {
              playHtml5();
            } else {
              self._playLock = true;
              self._state = "loading";
              var listener = function() {
                self._state = "loaded";
                playHtml5();
                node.removeEventListener(Howler2._canPlayEvent, listener, false);
              };
              node.addEventListener(Howler2._canPlayEvent, listener, false);
              self._clearTimer(sound._id);
            }
          }
          return sound._id;
        },
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(id) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "pause",
              action: function() {
                self.pause(id);
              }
            });
            return self;
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            self._clearTimer(ids[i]);
            var sound = self._soundById(ids[i]);
            if (sound && !sound._paused) {
              sound._seek = self.seek(ids[i]);
              sound._rateSeek = 0;
              sound._paused = true;
              self._stopFade(ids[i]);
              if (sound._node) {
                if (self._webAudio) {
                  if (!sound._node.bufferSource) {
                    continue;
                  }
                  if (typeof sound._node.bufferSource.stop === "undefined") {
                    sound._node.bufferSource.noteOff(0);
                  } else {
                    sound._node.bufferSource.stop(0);
                  }
                  self._cleanBuffer(sound._node);
                } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                  sound._node.pause();
                }
              }
            }
            if (!arguments[1]) {
              self._emit("pause", sound ? sound._id : null);
            }
          }
          return self;
        },
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(id, internal) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "stop",
              action: function() {
                self.stop(id);
              }
            });
            return self;
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            self._clearTimer(ids[i]);
            var sound = self._soundById(ids[i]);
            if (sound) {
              sound._seek = sound._start || 0;
              sound._rateSeek = 0;
              sound._paused = true;
              sound._ended = true;
              self._stopFade(ids[i]);
              if (sound._node) {
                if (self._webAudio) {
                  if (sound._node.bufferSource) {
                    if (typeof sound._node.bufferSource.stop === "undefined") {
                      sound._node.bufferSource.noteOff(0);
                    } else {
                      sound._node.bufferSource.stop(0);
                    }
                    self._cleanBuffer(sound._node);
                  }
                } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                  sound._node.currentTime = sound._start || 0;
                  sound._node.pause();
                  if (sound._node.duration === Infinity) {
                    self._clearSound(sound._node);
                  }
                }
              }
              if (!internal) {
                self._emit("stop", sound._id);
              }
            }
          }
          return self;
        },
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(muted, id) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "mute",
              action: function() {
                self.mute(muted, id);
              }
            });
            return self;
          }
          if (typeof id === "undefined") {
            if (typeof muted === "boolean") {
              self._muted = muted;
            } else {
              return self._muted;
            }
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              sound._muted = muted;
              if (sound._interval) {
                self._stopFade(sound._id);
              }
              if (self._webAudio && sound._node) {
                sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler2.ctx.currentTime);
              } else if (sound._node) {
                sound._node.muted = Howler2._muted ? true : muted;
              }
              self._emit("mute", sound._id);
            }
          }
          return self;
        },
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
          var self = this;
          var args = arguments;
          var vol, id;
          if (args.length === 0) {
            return self._volume;
          } else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
            var ids = self._getSoundIds();
            var index = ids.indexOf(args[0]);
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else {
              vol = parseFloat(args[0]);
            }
          } else if (args.length >= 2) {
            vol = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          }
          var sound;
          if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "volume",
                action: function() {
                  self.volume.apply(self, args);
                }
              });
              return self;
            }
            if (typeof id === "undefined") {
              self._volume = vol;
            }
            id = self._getSoundIds(id);
            for (var i = 0; i < id.length; i++) {
              sound = self._soundById(id[i]);
              if (sound) {
                sound._volume = vol;
                if (!args[2]) {
                  self._stopFade(id[i]);
                }
                if (self._webAudio && sound._node && !sound._muted) {
                  sound._node.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
                } else if (sound._node && !sound._muted) {
                  sound._node.volume = vol * Howler2.volume();
                }
                self._emit("volume", sound._id);
              }
            }
          } else {
            sound = id ? self._soundById(id) : self._sounds[0];
            return sound ? sound._volume : 0;
          }
          return self;
        },
        /**
         * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(from, to, len, id) {
          var self = this;
          if (self._state !== "loaded" || self._playLock) {
            self._queue.push({
              event: "fade",
              action: function() {
                self.fade(from, to, len, id);
              }
            });
            return self;
          }
          from = Math.min(Math.max(0, parseFloat(from)), 1);
          to = Math.min(Math.max(0, parseFloat(to)), 1);
          len = parseFloat(len);
          self.volume(from, id);
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            var sound = self._soundById(ids[i]);
            if (sound) {
              if (!id) {
                self._stopFade(ids[i]);
              }
              if (self._webAudio && !sound._muted) {
                var currentTime = Howler2.ctx.currentTime;
                var end = currentTime + len / 1e3;
                sound._volume = from;
                sound._node.gain.setValueAtTime(from, currentTime);
                sound._node.gain.linearRampToValueAtTime(to, end);
              }
              self._startFadeInterval(sound, from, to, len, ids[i], typeof id === "undefined");
            }
          }
          return self;
        },
        /**
         * Starts the internal interval to fade a sound.
         * @param  {Object} sound Reference to sound to fade.
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id to fade.
         * @param  {Boolean} isGroup   If true, set the volume on the group.
         */
        _startFadeInterval: function(sound, from, to, len, id, isGroup) {
          var self = this;
          var vol = from;
          var diff = to - from;
          var steps = Math.abs(diff / 0.01);
          var stepLen = Math.max(4, steps > 0 ? len / steps : len);
          var lastTick = Date.now();
          sound._fadeTo = to;
          sound._interval = setInterval(function() {
            var tick = (Date.now() - lastTick) / len;
            lastTick = Date.now();
            vol += diff * tick;
            vol = Math.round(vol * 100) / 100;
            if (diff < 0) {
              vol = Math.max(to, vol);
            } else {
              vol = Math.min(to, vol);
            }
            if (self._webAudio) {
              sound._volume = vol;
            } else {
              self.volume(vol, sound._id, true);
            }
            if (isGroup) {
              self._volume = vol;
            }
            if (to < from && vol <= to || to > from && vol >= to) {
              clearInterval(sound._interval);
              sound._interval = null;
              sound._fadeTo = null;
              self.volume(to, sound._id);
              self._emit("fade", sound._id);
            }
          }, stepLen);
        },
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(id) {
          var self = this;
          var sound = self._soundById(id);
          if (sound && sound._interval) {
            if (self._webAudio) {
              sound._node.gain.cancelScheduledValues(Howler2.ctx.currentTime);
            }
            clearInterval(sound._interval);
            sound._interval = null;
            self.volume(sound._fadeTo, id);
            sound._fadeTo = null;
            self._emit("fade", id);
          }
          return self;
        },
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
          var self = this;
          var args = arguments;
          var loop, id, sound;
          if (args.length === 0) {
            return self._loop;
          } else if (args.length === 1) {
            if (typeof args[0] === "boolean") {
              loop = args[0];
              self._loop = loop;
            } else {
              sound = self._soundById(parseInt(args[0], 10));
              return sound ? sound._loop : false;
            }
          } else if (args.length === 2) {
            loop = args[0];
            id = parseInt(args[1], 10);
          }
          var ids = self._getSoundIds(id);
          for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);
            if (sound) {
              sound._loop = loop;
              if (self._webAudio && sound._node && sound._node.bufferSource) {
                sound._node.bufferSource.loop = loop;
                if (loop) {
                  sound._node.bufferSource.loopStart = sound._start || 0;
                  sound._node.bufferSource.loopEnd = sound._stop;
                  if (self.playing(ids[i])) {
                    self.pause(ids[i], true);
                    self.play(ids[i], true);
                  }
                }
              }
            }
          }
          return self;
        },
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
          var self = this;
          var args = arguments;
          var rate, id;
          if (args.length === 0) {
            id = self._sounds[0]._id;
          } else if (args.length === 1) {
            var ids = self._getSoundIds();
            var index = ids.indexOf(args[0]);
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else {
              rate = parseFloat(args[0]);
            }
          } else if (args.length === 2) {
            rate = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          }
          var sound;
          if (typeof rate === "number") {
            if (self._state !== "loaded" || self._playLock) {
              self._queue.push({
                event: "rate",
                action: function() {
                  self.rate.apply(self, args);
                }
              });
              return self;
            }
            if (typeof id === "undefined") {
              self._rate = rate;
            }
            id = self._getSoundIds(id);
            for (var i = 0; i < id.length; i++) {
              sound = self._soundById(id[i]);
              if (sound) {
                if (self.playing(id[i])) {
                  sound._rateSeek = self.seek(id[i]);
                  sound._playStart = self._webAudio ? Howler2.ctx.currentTime : sound._playStart;
                }
                sound._rate = rate;
                if (self._webAudio && sound._node && sound._node.bufferSource) {
                  sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler2.ctx.currentTime);
                } else if (sound._node) {
                  sound._node.playbackRate = rate;
                }
                var seek = self.seek(id[i]);
                var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek;
                var timeout = duration * 1e3 / Math.abs(sound._rate);
                if (self._endTimers[id[i]] || !sound._paused) {
                  self._clearTimer(id[i]);
                  self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                }
                self._emit("rate", sound._id);
              }
            }
          } else {
            sound = self._soundById(id);
            return sound ? sound._rate : self._rate;
          }
          return self;
        },
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
          var self = this;
          var args = arguments;
          var seek, id;
          if (args.length === 0) {
            if (self._sounds.length) {
              id = self._sounds[0]._id;
            }
          } else if (args.length === 1) {
            var ids = self._getSoundIds();
            var index = ids.indexOf(args[0]);
            if (index >= 0) {
              id = parseInt(args[0], 10);
            } else if (self._sounds.length) {
              id = self._sounds[0]._id;
              seek = parseFloat(args[0]);
            }
          } else if (args.length === 2) {
            seek = parseFloat(args[0]);
            id = parseInt(args[1], 10);
          }
          if (typeof id === "undefined") {
            return 0;
          }
          if (typeof seek === "number" && (self._state !== "loaded" || self._playLock)) {
            self._queue.push({
              event: "seek",
              action: function() {
                self.seek.apply(self, args);
              }
            });
            return self;
          }
          var sound = self._soundById(id);
          if (sound) {
            if (typeof seek === "number" && seek >= 0) {
              var playing = self.playing(id);
              if (playing) {
                self.pause(id, true);
              }
              sound._seek = seek;
              sound._ended = false;
              self._clearTimer(id);
              if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                sound._node.currentTime = seek;
              }
              var seekAndEmit = function() {
                if (playing) {
                  self.play(id, true);
                }
                self._emit("seek", id);
              };
              if (playing && !self._webAudio) {
                var emitSeek = function() {
                  if (!self._playLock) {
                    seekAndEmit();
                  } else {
                    setTimeout(emitSeek, 0);
                  }
                };
                setTimeout(emitSeek, 0);
              } else {
                seekAndEmit();
              }
            } else {
              if (self._webAudio) {
                var realTime = self.playing(id) ? Howler2.ctx.currentTime - sound._playStart : 0;
                var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
              } else {
                return sound._node.currentTime;
              }
            }
          }
          return self;
        },
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(id) {
          var self = this;
          if (typeof id === "number") {
            var sound = self._soundById(id);
            return sound ? !sound._paused : false;
          }
          for (var i = 0; i < self._sounds.length; i++) {
            if (!self._sounds[i]._paused) {
              return true;
            }
          }
          return false;
        },
        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function(id) {
          var self = this;
          var duration = self._duration;
          var sound = self._soundById(id);
          if (sound) {
            duration = self._sprite[sound._sprite][1] / 1e3;
          }
          return duration;
        },
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
          return this._state;
        },
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
          var self = this;
          var sounds = self._sounds;
          for (var i = 0; i < sounds.length; i++) {
            if (!sounds[i]._paused) {
              self.stop(sounds[i]._id);
            }
            if (!self._webAudio) {
              self._clearSound(sounds[i]._node);
              sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
              sounds[i]._node.removeEventListener(Howler2._canPlayEvent, sounds[i]._loadFn, false);
              sounds[i]._node.removeEventListener("ended", sounds[i]._endFn, false);
              Howler2._releaseHtml5Audio(sounds[i]._node);
            }
            delete sounds[i]._node;
            self._clearTimer(sounds[i]._id);
          }
          var index = Howler2._howls.indexOf(self);
          if (index >= 0) {
            Howler2._howls.splice(index, 1);
          }
          var remCache = true;
          for (i = 0; i < Howler2._howls.length; i++) {
            if (Howler2._howls[i]._src === self._src || self._src.indexOf(Howler2._howls[i]._src) >= 0) {
              remCache = false;
              break;
            }
          }
          if (cache && remCache) {
            delete cache[self._src];
          }
          Howler2.noAudio = false;
          self._state = "unloaded";
          self._sounds = [];
          self = null;
          return null;
        },
        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function(event, fn, id, once) {
          var self = this;
          var events = self["_on" + event];
          if (typeof fn === "function") {
            events.push(once ? { id, fn, once } : { id, fn });
          }
          return self;
        },
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(event, fn, id) {
          var self = this;
          var events = self["_on" + event];
          var i = 0;
          if (typeof fn === "number") {
            id = fn;
            fn = null;
          }
          if (fn || id) {
            for (i = 0; i < events.length; i++) {
              var isId = id === events[i].id;
              if (fn === events[i].fn && isId || !fn && isId) {
                events.splice(i, 1);
                break;
              }
            }
          } else if (event) {
            self["_on" + event] = [];
          } else {
            var keys = Object.keys(self);
            for (i = 0; i < keys.length; i++) {
              if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) {
                self[keys[i]] = [];
              }
            }
          }
          return self;
        },
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(event, fn, id) {
          var self = this;
          self.on(event, fn, id, 1);
          return self;
        },
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(event, id, msg) {
          var self = this;
          var events = self["_on" + event];
          for (var i = events.length - 1; i >= 0; i--) {
            if (!events[i].id || events[i].id === id || event === "load") {
              setTimeout((function(fn) {
                fn.call(this, id, msg);
              }).bind(self, events[i].fn), 0);
              if (events[i].once) {
                self.off(event, events[i].fn, events[i].id);
              }
            }
          }
          self._loadQueue(event);
          return self;
        },
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function(event) {
          var self = this;
          if (self._queue.length > 0) {
            var task = self._queue[0];
            if (task.event === event) {
              self._queue.shift();
              self._loadQueue();
            }
            if (!event) {
              task.action();
            }
          }
          return self;
        },
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(sound) {
          var self = this;
          var sprite = sound._sprite;
          if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
            setTimeout(self._ended.bind(self, sound), 100);
            return self;
          }
          var loop = !!(sound._loop || self._sprite[sprite][2]);
          self._emit("end", sound._id);
          if (!self._webAudio && loop) {
            self.stop(sound._id, true).play(sound._id);
          }
          if (self._webAudio && loop) {
            self._emit("play", sound._id);
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            sound._playStart = Howler2.ctx.currentTime;
            var timeout = (sound._stop - sound._start) * 1e3 / Math.abs(sound._rate);
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }
          if (self._webAudio && !loop) {
            sound._paused = true;
            sound._ended = true;
            sound._seek = sound._start || 0;
            sound._rateSeek = 0;
            self._clearTimer(sound._id);
            self._cleanBuffer(sound._node);
            Howler2._autoSuspend();
          }
          if (!self._webAudio && !loop) {
            self.stop(sound._id, true);
          }
          return self;
        },
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(id) {
          var self = this;
          if (self._endTimers[id]) {
            if (typeof self._endTimers[id] !== "function") {
              clearTimeout(self._endTimers[id]);
            } else {
              var sound = self._soundById(id);
              if (sound && sound._node) {
                sound._node.removeEventListener("ended", self._endTimers[id], false);
              }
            }
            delete self._endTimers[id];
          }
          return self;
        },
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(id) {
          var self = this;
          for (var i = 0; i < self._sounds.length; i++) {
            if (id === self._sounds[i]._id) {
              return self._sounds[i];
            }
          }
          return null;
        },
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
          var self = this;
          self._drain();
          for (var i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._ended) {
              return self._sounds[i].reset();
            }
          }
          return new Sound2(self);
        },
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
          var self = this;
          var limit = self._pool;
          var cnt = 0;
          var i = 0;
          if (self._sounds.length < limit) {
            return;
          }
          for (i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._ended) {
              cnt++;
            }
          }
          for (i = self._sounds.length - 1; i >= 0; i--) {
            if (cnt <= limit) {
              return;
            }
            if (self._sounds[i]._ended) {
              if (self._webAudio && self._sounds[i]._node) {
                self._sounds[i]._node.disconnect(0);
              }
              self._sounds.splice(i, 1);
              cnt--;
            }
          }
        },
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(id) {
          var self = this;
          if (typeof id === "undefined") {
            var ids = [];
            for (var i = 0; i < self._sounds.length; i++) {
              ids.push(self._sounds[i]._id);
            }
            return ids;
          } else {
            return [id];
          }
        },
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(sound) {
          var self = this;
          sound._node.bufferSource = Howler2.ctx.createBufferSource();
          sound._node.bufferSource.buffer = cache[self._src];
          if (sound._panner) {
            sound._node.bufferSource.connect(sound._panner);
          } else {
            sound._node.bufferSource.connect(sound._node);
          }
          sound._node.bufferSource.loop = sound._loop;
          if (sound._loop) {
            sound._node.bufferSource.loopStart = sound._start || 0;
            sound._node.bufferSource.loopEnd = sound._stop || 0;
          }
          sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler2.ctx.currentTime);
          return self;
        },
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(node) {
          var self = this;
          var isIOS = Howler2._navigator && Howler2._navigator.vendor.indexOf("Apple") >= 0;
          if (!node.bufferSource) {
            return self;
          }
          if (Howler2._scratchBuffer && node.bufferSource) {
            node.bufferSource.onended = null;
            node.bufferSource.disconnect(0);
            if (isIOS) {
              try {
                node.bufferSource.buffer = Howler2._scratchBuffer;
              } catch (e) {
              }
            }
          }
          node.bufferSource = null;
          return self;
        },
        /**
         * Set the source to a 0-second silence to stop any downloading (except in IE).
         * @param  {Object} node Audio node to clear.
         */
        _clearSound: function(node) {
          var checkIE = /MSIE |Trident\//.test(Howler2._navigator && Howler2._navigator.userAgent);
          if (!checkIE) {
            node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
          }
        }
      };
      var Sound2 = function(howl) {
        this._parent = howl;
        this.init();
      };
      Sound2.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
          var self = this;
          var parent = self._parent;
          self._muted = parent._muted;
          self._loop = parent._loop;
          self._volume = parent._volume;
          self._rate = parent._rate;
          self._seek = 0;
          self._paused = true;
          self._ended = true;
          self._sprite = "__default";
          self._id = ++Howler2._counter;
          parent._sounds.push(self);
          self.create();
          return self;
        },
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
          var self = this;
          var parent = self._parent;
          var volume = Howler2._muted || self._muted || self._parent._muted ? 0 : self._volume;
          if (parent._webAudio) {
            self._node = typeof Howler2.ctx.createGain === "undefined" ? Howler2.ctx.createGainNode() : Howler2.ctx.createGain();
            self._node.gain.setValueAtTime(volume, Howler2.ctx.currentTime);
            self._node.paused = true;
            self._node.connect(Howler2.masterGain);
          } else if (!Howler2.noAudio) {
            self._node = Howler2._obtainHtml5Audio();
            self._errorFn = self._errorListener.bind(self);
            self._node.addEventListener("error", self._errorFn, false);
            self._loadFn = self._loadListener.bind(self);
            self._node.addEventListener(Howler2._canPlayEvent, self._loadFn, false);
            self._endFn = self._endListener.bind(self);
            self._node.addEventListener("ended", self._endFn, false);
            self._node.src = parent._src;
            self._node.preload = parent._preload === true ? "auto" : parent._preload;
            self._node.volume = volume * Howler2.volume();
            self._node.load();
          }
          return self;
        },
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
          var self = this;
          var parent = self._parent;
          self._muted = parent._muted;
          self._loop = parent._loop;
          self._volume = parent._volume;
          self._rate = parent._rate;
          self._seek = 0;
          self._rateSeek = 0;
          self._paused = true;
          self._ended = true;
          self._sprite = "__default";
          self._id = ++Howler2._counter;
          return self;
        },
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
          var self = this;
          self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
          self._node.removeEventListener("error", self._errorFn, false);
        },
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
          var self = this;
          var parent = self._parent;
          parent._duration = Math.ceil(self._node.duration * 10) / 10;
          if (Object.keys(parent._sprite).length === 0) {
            parent._sprite = { __default: [0, parent._duration * 1e3] };
          }
          if (parent._state !== "loaded") {
            parent._state = "loaded";
            parent._emit("load");
            parent._loadQueue();
          }
          self._node.removeEventListener(Howler2._canPlayEvent, self._loadFn, false);
        },
        /**
         * HTML5 Audio ended listener callback.
         */
        _endListener: function() {
          var self = this;
          var parent = self._parent;
          if (parent._duration === Infinity) {
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            if (parent._sprite.__default[1] === Infinity) {
              parent._sprite.__default[1] = parent._duration * 1e3;
            }
            parent._ended(self);
          }
          self._node.removeEventListener("ended", self._endFn, false);
        }
      };
      var cache = {};
      var loadBuffer = function(self) {
        var url = self._src;
        if (cache[url]) {
          self._duration = cache[url].duration;
          loadSound(self);
          return;
        }
        if (/^data:[^;]+;base64,/.test(url)) {
          var data = atob(url.split(",")[1]);
          var dataView = new Uint8Array(data.length);
          for (var i = 0; i < data.length; ++i) {
            dataView[i] = data.charCodeAt(i);
          }
          decodeAudioData(dataView.buffer, self);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open(self._xhr.method, url, true);
          xhr.withCredentials = self._xhr.withCredentials;
          xhr.responseType = "arraybuffer";
          if (self._xhr.headers) {
            Object.keys(self._xhr.headers).forEach(function(key) {
              xhr.setRequestHeader(key, self._xhr.headers[key]);
            });
          }
          xhr.onload = function() {
            var code = (xhr.status + "")[0];
            if (code !== "0" && code !== "2" && code !== "3") {
              self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
              return;
            }
            decodeAudioData(xhr.response, self);
          };
          xhr.onerror = function() {
            if (self._webAudio) {
              self._html5 = true;
              self._webAudio = false;
              self._sounds = [];
              delete cache[url];
              self.load();
            }
          };
          safeXhrSend(xhr);
        }
      };
      var safeXhrSend = function(xhr) {
        try {
          xhr.send();
        } catch (e) {
          xhr.onerror();
        }
      };
      var decodeAudioData = function(arraybuffer, self) {
        var error = function() {
          self._emit("loaderror", null, "Decoding audio data failed.");
        };
        var success = function(buffer) {
          if (buffer && self._sounds.length > 0) {
            cache[self._src] = buffer;
            loadSound(self, buffer);
          } else {
            error();
          }
        };
        if (typeof Promise !== "undefined" && Howler2.ctx.decodeAudioData.length === 1) {
          Howler2.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
        } else {
          Howler2.ctx.decodeAudioData(arraybuffer, success, error);
        }
      };
      var loadSound = function(self, buffer) {
        if (buffer && !self._duration) {
          self._duration = buffer.duration;
        }
        if (Object.keys(self._sprite).length === 0) {
          self._sprite = { __default: [0, self._duration * 1e3] };
        }
        if (self._state !== "loaded") {
          self._state = "loaded";
          self._emit("load");
          self._loadQueue();
        }
      };
      var setupAudioContext = function() {
        if (!Howler2.usingWebAudio) {
          return;
        }
        try {
          if (typeof AudioContext !== "undefined") {
            Howler2.ctx = new AudioContext();
          } else if (typeof webkitAudioContext !== "undefined") {
            Howler2.ctx = new webkitAudioContext();
          } else {
            Howler2.usingWebAudio = false;
          }
        } catch (e) {
          Howler2.usingWebAudio = false;
        }
        if (!Howler2.ctx) {
          Howler2.usingWebAudio = false;
        }
        var iOS = /iP(hone|od|ad)/.test(Howler2._navigator && Howler2._navigator.platform);
        var appVersion = Howler2._navigator && Howler2._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
          var safari = /safari/.test(Howler2._navigator && Howler2._navigator.userAgent.toLowerCase());
          if (Howler2._navigator && !safari) {
            Howler2.usingWebAudio = false;
          }
        }
        if (Howler2.usingWebAudio) {
          Howler2.masterGain = typeof Howler2.ctx.createGain === "undefined" ? Howler2.ctx.createGainNode() : Howler2.ctx.createGain();
          Howler2.masterGain.gain.setValueAtTime(Howler2._muted ? 0 : Howler2._volume, Howler2.ctx.currentTime);
          Howler2.masterGain.connect(Howler2.ctx.destination);
        }
        Howler2._setup();
      };
      if (typeof define === "function" && define.amd) {
        define([], function() {
          return {
            Howler: Howler2,
            Howl: Howl2
          };
        });
      }
      if (typeof exports !== "undefined") {
        exports.Howler = Howler2;
        exports.Howl = Howl2;
      }
      if (typeof global !== "undefined") {
        global.HowlerGlobal = HowlerGlobal2;
        global.Howler = Howler2;
        global.Howl = Howl2;
        global.Sound = Sound2;
      } else if (typeof window !== "undefined") {
        window.HowlerGlobal = HowlerGlobal2;
        window.Howler = Howler2;
        window.Howl = Howl2;
        window.Sound = Sound2;
      }
    })();
    (function() {
      "use strict";
      HowlerGlobal.prototype._pos = [0, 0, 0];
      HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
      HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
          return self;
        }
        for (var i = self._howls.length - 1; i >= 0; i--) {
          self._howls[i].stereo(pan);
        }
        return self;
      };
      HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
          return self;
        }
        y = typeof y !== "number" ? self._pos[1] : y;
        z = typeof z !== "number" ? self._pos[2] : z;
        if (typeof x === "number") {
          self._pos = [x, y, z];
          if (typeof self.ctx.listener.positionX !== "undefined") {
            self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
            self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
            self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
          } else {
            self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
          }
        } else {
          return self._pos;
        }
        return self;
      };
      HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;
        if (!self.ctx || !self.ctx.listener) {
          return self;
        }
        var or = self._orientation;
        y = typeof y !== "number" ? or[1] : y;
        z = typeof z !== "number" ? or[2] : z;
        xUp = typeof xUp !== "number" ? or[3] : xUp;
        yUp = typeof yUp !== "number" ? or[4] : yUp;
        zUp = typeof zUp !== "number" ? or[5] : zUp;
        if (typeof x === "number") {
          self._orientation = [x, y, z, xUp, yUp, zUp];
          if (typeof self.ctx.listener.forwardX !== "undefined") {
            self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
            self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
          } else {
            self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
          }
        } else {
          return or;
        }
        return self;
      };
      Howl.prototype.init = /* @__PURE__ */ function(_super) {
        return function(o) {
          var self = this;
          self._orientation = o.orientation || [1, 0, 0];
          self._stereo = o.stereo || null;
          self._pos = o.pos || null;
          self._pannerAttr = {
            coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
            coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
            coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
            distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
            maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 1e4,
            panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
            refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
            rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
          };
          self._onstereo = o.onstereo ? [{ fn: o.onstereo }] : [];
          self._onpos = o.onpos ? [{ fn: o.onpos }] : [];
          self._onorientation = o.onorientation ? [{ fn: o.onorientation }] : [];
          return _super.call(this, o);
        };
      }(Howl.prototype.init);
      Howl.prototype.stereo = function(pan, id) {
        var self = this;
        if (!self._webAudio) {
          return self;
        }
        if (self._state !== "loaded") {
          self._queue.push({
            event: "stereo",
            action: function() {
              self.stereo(pan, id);
            }
          });
          return self;
        }
        var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        if (typeof id === "undefined") {
          if (typeof pan === "number") {
            self._stereo = pan;
            self._pos = [pan, 0, 0];
          } else {
            return self._stereo;
          }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          var sound = self._soundById(ids[i]);
          if (sound) {
            if (typeof pan === "number") {
              sound._stereo = pan;
              sound._pos = [pan, 0, 0];
              if (sound._node) {
                sound._pannerAttr.panningModel = "equalpower";
                if (!sound._panner || !sound._panner.pan) {
                  setupPanner(sound, pannerType);
                }
                if (pannerType === "spatial") {
                  if (typeof sound._panner.positionX !== "undefined") {
                    sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                    sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                    sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setPosition(pan, 0, 0);
                  }
                } else {
                  sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                }
              }
              self._emit("stereo", sound._id);
            } else {
              return sound._stereo;
            }
          }
        }
        return self;
      };
      Howl.prototype.pos = function(x, y, z, id) {
        var self = this;
        if (!self._webAudio) {
          return self;
        }
        if (self._state !== "loaded") {
          self._queue.push({
            event: "pos",
            action: function() {
              self.pos(x, y, z, id);
            }
          });
          return self;
        }
        y = typeof y !== "number" ? 0 : y;
        z = typeof z !== "number" ? -0.5 : z;
        if (typeof id === "undefined") {
          if (typeof x === "number") {
            self._pos = [x, y, z];
          } else {
            return self._pos;
          }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          var sound = self._soundById(ids[i]);
          if (sound) {
            if (typeof x === "number") {
              sound._pos = [x, y, z];
              if (sound._node) {
                if (!sound._panner || sound._panner.pan) {
                  setupPanner(sound, "spatial");
                }
                if (typeof sound._panner.positionX !== "undefined") {
                  sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                  sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                  sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                } else {
                  sound._panner.setPosition(x, y, z);
                }
              }
              self._emit("pos", sound._id);
            } else {
              return sound._pos;
            }
          }
        }
        return self;
      };
      Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;
        if (!self._webAudio) {
          return self;
        }
        if (self._state !== "loaded") {
          self._queue.push({
            event: "orientation",
            action: function() {
              self.orientation(x, y, z, id);
            }
          });
          return self;
        }
        y = typeof y !== "number" ? self._orientation[1] : y;
        z = typeof z !== "number" ? self._orientation[2] : z;
        if (typeof id === "undefined") {
          if (typeof x === "number") {
            self._orientation = [x, y, z];
          } else {
            return self._orientation;
          }
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          var sound = self._soundById(ids[i]);
          if (sound) {
            if (typeof x === "number") {
              sound._orientation = [x, y, z];
              if (sound._node) {
                if (!sound._panner) {
                  if (!sound._pos) {
                    sound._pos = self._pos || [0, 0, -0.5];
                  }
                  setupPanner(sound, "spatial");
                }
                if (typeof sound._panner.orientationX !== "undefined") {
                  sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                  sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                  sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                } else {
                  sound._panner.setOrientation(x, y, z);
                }
              }
              self._emit("orientation", sound._id);
            } else {
              return sound._orientation;
            }
          }
        }
        return self;
      };
      Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;
        if (!self._webAudio) {
          return self;
        }
        if (args.length === 0) {
          return self._pannerAttr;
        } else if (args.length === 1) {
          if (typeof args[0] === "object") {
            o = args[0];
            if (typeof id === "undefined") {
              if (!o.pannerAttr) {
                o.pannerAttr = {
                  coneInnerAngle: o.coneInnerAngle,
                  coneOuterAngle: o.coneOuterAngle,
                  coneOuterGain: o.coneOuterGain,
                  distanceModel: o.distanceModel,
                  maxDistance: o.maxDistance,
                  refDistance: o.refDistance,
                  rolloffFactor: o.rolloffFactor,
                  panningModel: o.panningModel
                };
              }
              self._pannerAttr = {
                coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
                maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
                refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
                rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
              };
            }
          } else {
            sound = self._soundById(parseInt(args[0], 10));
            return sound ? sound._pannerAttr : self._pannerAttr;
          }
        } else if (args.length === 2) {
          o = args[0];
          id = parseInt(args[1], 10);
        }
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
          sound = self._soundById(ids[i]);
          if (sound) {
            var pa = sound._pannerAttr;
            pa = {
              coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
              coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
              coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
              distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
              maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
              refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
              rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
              panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
            };
            var panner = sound._panner;
            if (!panner) {
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }
              setupPanner(sound, "spatial");
              panner = sound._panner;
            }
            panner.coneInnerAngle = pa.coneInnerAngle;
            panner.coneOuterAngle = pa.coneOuterAngle;
            panner.coneOuterGain = pa.coneOuterGain;
            panner.distanceModel = pa.distanceModel;
            panner.maxDistance = pa.maxDistance;
            panner.refDistance = pa.refDistance;
            panner.rolloffFactor = pa.rolloffFactor;
            panner.panningModel = pa.panningModel;
          }
        }
        return self;
      };
      Sound.prototype.init = /* @__PURE__ */ function(_super) {
        return function() {
          var self = this;
          var parent = self._parent;
          self._orientation = parent._orientation;
          self._stereo = parent._stereo;
          self._pos = parent._pos;
          self._pannerAttr = parent._pannerAttr;
          _super.call(this);
          if (self._stereo) {
            parent.stereo(self._stereo);
          } else if (self._pos) {
            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
          }
        };
      }(Sound.prototype.init);
      Sound.prototype.reset = /* @__PURE__ */ function(_super) {
        return function() {
          var self = this;
          var parent = self._parent;
          self._orientation = parent._orientation;
          self._stereo = parent._stereo;
          self._pos = parent._pos;
          self._pannerAttr = parent._pannerAttr;
          if (self._stereo) {
            parent.stereo(self._stereo);
          } else if (self._pos) {
            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
          } else if (self._panner) {
            self._panner.disconnect(0);
            self._panner = void 0;
            parent._refreshBuffer(self);
          }
          return _super.call(this);
        };
      }(Sound.prototype.reset);
      var setupPanner = function(sound, type) {
        type = type || "spatial";
        if (type === "spatial") {
          sound._panner = Howler.ctx.createPanner();
          sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
          sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
          sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
          sound._panner.distanceModel = sound._pannerAttr.distanceModel;
          sound._panner.maxDistance = sound._pannerAttr.maxDistance;
          sound._panner.refDistance = sound._pannerAttr.refDistance;
          sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
          sound._panner.panningModel = sound._pannerAttr.panningModel;
          if (typeof sound._panner.positionX !== "undefined") {
            sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
            sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
            sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
          } else {
            sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
          }
          if (typeof sound._panner.orientationX !== "undefined") {
            sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
            sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
            sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
          } else {
            sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
          }
        } else {
          sound._panner = Howler.ctx.createStereoPanner();
          sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
        sound._panner.connect(sound._node);
        if (!sound._paused) {
          sound._parent.pause(sound._id, true).play(sound._id, true);
        }
      };
    })();
  }
});
export default require_howler();
/*! Bundled license information:

howler/dist/howler.js:
  (*!
   *  howler.js v2.2.4
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
  (*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.4
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
*/
//# sourceMappingURL=howler.js.map
