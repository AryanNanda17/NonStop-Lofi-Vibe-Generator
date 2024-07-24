import {
  require_react
} from "./chunk-HAZNF34R.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/redux-persist/es/integration/react.js
var import_react = __toESM(require_react());
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PersistGate = function(_PureComponent) {
  _inherits(PersistGate2, _PureComponent);
  function PersistGate2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, PersistGate2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PersistGate2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "state", {
      bootstrapped: false
    });
    _defineProperty(_assertThisInitialized(_this), "_unsubscribe", void 0);
    _defineProperty(_assertThisInitialized(_this), "handlePersistorState", function() {
      var persistor = _this.props.persistor;
      var _persistor$getState = persistor.getState(), bootstrapped = _persistor$getState.bootstrapped;
      if (bootstrapped) {
        if (_this.props.onBeforeLift) {
          Promise.resolve(_this.props.onBeforeLift()).finally(function() {
            return _this.setState({
              bootstrapped: true
            });
          });
        } else {
          _this.setState({
            bootstrapped: true
          });
        }
        _this._unsubscribe && _this._unsubscribe();
      }
    });
    return _this;
  }
  _createClass(PersistGate2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
      this.handlePersistorState();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        if (typeof this.props.children === "function" && this.props.loading)
          console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored.");
      }
      if (typeof this.props.children === "function") {
        return this.props.children(this.state.bootstrapped);
      }
      return this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]);
  return PersistGate2;
}(import_react.PureComponent);
_defineProperty(PersistGate, "defaultProps", {
  children: null,
  loading: null
});
export {
  PersistGate
};
//# sourceMappingURL=redux-persist_integration_react.js.map
