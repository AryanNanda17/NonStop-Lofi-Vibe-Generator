import {
  __commonJS
} from "./chunk-WXXH56N5.js";

// node_modules/redux-persist/lib/storage/getStorage.js
var require_getStorage = __commonJS({
  "node_modules/redux-persist/lib/storage/getStorage.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = getStorage;
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function noop() {
    }
    var noopStorage = {
      getItem: noop,
      setItem: noop,
      removeItem: noop
    };
    function hasStorage(storageType) {
      if ((typeof self === "undefined" ? "undefined" : _typeof(self)) !== "object" || !(storageType in self)) {
        return false;
      }
      try {
        var storage = self[storageType];
        var testKey = "redux-persist ".concat(storageType, " test");
        storage.setItem(testKey, "test");
        storage.getItem(testKey);
        storage.removeItem(testKey);
      } catch (e) {
        if (true)
          console.warn("redux-persist ".concat(storageType, " test failed, persistence will be disabled."));
        return false;
      }
      return true;
    }
    function getStorage(type) {
      var storageType = "".concat(type, "Storage");
      if (hasStorage(storageType))
        return self[storageType];
      else {
        if (true) {
          console.error("redux-persist failed to create sync storage. falling back to noop storage.");
        }
        return noopStorage;
      }
    }
  }
});

// node_modules/redux-persist/lib/storage/createWebStorage.js
var require_createWebStorage = __commonJS({
  "node_modules/redux-persist/lib/storage/createWebStorage.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = createWebStorage;
    var _getStorage = _interopRequireDefault(require_getStorage());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function createWebStorage(type) {
      var storage = (0, _getStorage.default)(type);
      return {
        getItem: function getItem(key) {
          return new Promise(function(resolve, reject) {
            resolve(storage.getItem(key));
          });
        },
        setItem: function setItem(key, item) {
          return new Promise(function(resolve, reject) {
            resolve(storage.setItem(key, item));
          });
        },
        removeItem: function removeItem(key) {
          return new Promise(function(resolve, reject) {
            resolve(storage.removeItem(key));
          });
        }
      };
    }
  }
});

// node_modules/redux-persist/lib/storage/index.js
var require_storage = __commonJS({
  "node_modules/redux-persist/lib/storage/index.js"(exports) {
    exports.__esModule = true;
    exports.default = void 0;
    var _createWebStorage = _interopRequireDefault(require_createWebStorage());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _default = (0, _createWebStorage.default)("local");
    exports.default = _default;
  }
});
export default require_storage();
//# sourceMappingURL=redux-persist_lib_storage.js.map
