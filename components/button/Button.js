"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (props) {
    var label = props.label, onClick = props.onClick, styleType = props.styleType, disabled = props.disabled;
    return (react_1.default.createElement("button", { className: "btn ".concat(styleType), onClick: onClick, disabled: disabled }, label));
};
exports.Button = Button;
