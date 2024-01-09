"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.Type = exports.Action = void 0;
var Type = exports.Type = /* @__PURE__ */(Type2 => {
  Type2[Type2["Foo"] = 0] = "Foo";
  Type2[Type2["Bar"] = 1] = "Bar";
  return Type2;
})(Type || {});
class Action {}
exports.Action = Action;
module.exports = Action;