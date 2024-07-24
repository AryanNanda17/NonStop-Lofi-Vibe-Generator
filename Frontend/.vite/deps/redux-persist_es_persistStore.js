import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from "./chunk-TQWTMSAS.js";
import {
  createStore
} from "./chunk-MBT3EELI.js";
import "./chunk-WXXH56N5.js";

// node_modules/redux-persist/es/persistStore.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initialState = {
  registry: [],
  bootstrapped: false
};
var persistorReducer = function persistorReducer2() {
  var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : void 0;
  switch (action.type) {
    case REGISTER:
      return _objectSpread({}, state, {
        registry: [].concat(_toConsumableArray(state.registry), [action.key])
      });
    case REHYDRATE:
      var firstIndex = state.registry.indexOf(action.key);
      var registry = _toConsumableArray(state.registry);
      registry.splice(firstIndex, 1);
      return _objectSpread({}, state, {
        registry,
        bootstrapped: registry.length === 0
      });
    default:
      return state;
  }
};
function persistStore(store, options, cb) {
  if (true) {
    var optionsToTest = options || {};
    var bannedKeys = ["blacklist", "whitelist", "transforms", "storage", "keyPrefix", "migrate"];
    bannedKeys.forEach(function(k) {
      if (!!optionsToTest[k])
        console.error('redux-persist: invalid option passed to persistStore: "'.concat(k, '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.'));
    });
  }
  var boostrappedCb = cb || false;
  var _pStore = createStore(persistorReducer, initialState, options && options.enhancer ? options.enhancer : void 0);
  var register = function register2(key) {
    _pStore.dispatch({
      type: REGISTER,
      key
    });
  };
  var rehydrate = function rehydrate2(key, payload, err) {
    var rehydrateAction = {
      type: REHYDRATE,
      payload,
      err,
      key
      // dispatch to `store` to rehydrate and `persistor` to track result
    };
    store.dispatch(rehydrateAction);
    _pStore.dispatch(rehydrateAction);
    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };
  var persistor = _objectSpread({}, _pStore, {
    purge: function purge() {
      var results = [];
      store.dispatch({
        type: PURGE,
        result: function result(purgeResult) {
          results.push(purgeResult);
        }
      });
      return Promise.all(results);
    },
    flush: function flush() {
      var results = [];
      store.dispatch({
        type: FLUSH,
        result: function result(flushResult) {
          results.push(flushResult);
        }
      });
      return Promise.all(results);
    },
    pause: function pause() {
      store.dispatch({
        type: PAUSE
      });
    },
    persist: function persist() {
      store.dispatch({
        type: PERSIST,
        register,
        rehydrate
      });
    }
  });
  if (!(options && options.manualPersist)) {
    persistor.persist();
  }
  return persistor;
}
export {
  persistStore as default
};
//# sourceMappingURL=redux-persist_es_persistStore.js.map
