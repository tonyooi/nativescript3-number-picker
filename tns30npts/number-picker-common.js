"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var NumberPickerBase = (function (_super) {
    __extends(NumberPickerBase, _super);
    function NumberPickerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberPickerBase;
}(view_1.View));
exports.NumberPickerBase = NumberPickerBase;
exports.valueProperty = new view_1.Property({
    name: "value",
    defaultValue: 0,
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
});
exports.valueProperty.register(NumberPickerBase);
exports.minValueProperty = new view_1.Property({
    name: "minValue",
    defaultValue: 0,
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
});
exports.minValueProperty.register(NumberPickerBase);
exports.maxValueProperty = new view_1.Property({
    name: "maxValue",
    defaultValue: 100,
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
});
exports.maxValueProperty.register(NumberPickerBase);
exports.displayedValuesProperty = new view_1.Property({
    name: "displayedValues",
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
});
exports.displayedValuesProperty.register(NumberPickerBase);
