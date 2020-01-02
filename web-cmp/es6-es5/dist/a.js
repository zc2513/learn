// 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = document.createElement('template');
template.innerHTML = '\n        <style>\n            .container {\n            padding: 8px;\n            }\n            button {\n            display: block;\n            overflow: hidden;\n            position: relative;\n            padding: 0 16px;\n            font-size: 16px;\n            font-weight: bold;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            cursor: pointer;\n            outline: none;\n            width: 100%;\n            height: 40px;\n            box-sizing: border-box;\n            border: 1px solid #a1a1a1;\n            background: #ffffff;\n            box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);\n            color: #363636;\n            cursor: pointer;\n            }\n        </style>\n        <div class="container">\n            <button>Label</button>\n        </div>\n        ';
console.log(HTMLElement)
var Button = function (_HTMLElement) {
    _inherits(Button, _HTMLElement);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this._shadowRoot = _this.attachShadow({ mode: 'open' });
        _this._shadowRoot.appendChild(template.content.cloneNode(true));
        _this.$button = _this._shadowRoot.querySelector('button');
        _this.$button.addEventListener('click', function () {
            eval(_this.onTest + '(\'' + _this.label + '\')');
        });
        return _this;
    }

    _createClass(Button, [{
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldVal, newVal) {
            this.render();
        }
    }, {
        key: 'render',
        value: function render() {
            this.$button.innerHTML = this.label;
        }
    }, {
        key: 'onTest',
        get: function get() {
            return this.getAttribute('onTest');
        }
    }, {
        key: 'label',
        get: function get() {
            return this.getAttribute('label');
        },
        set: function set(value) {
            this.setAttribute('label', value);
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return ['label'];
        }
    }]);

    return Button;
}(HTMLElement);

window.customElements.define('my-button', Button);