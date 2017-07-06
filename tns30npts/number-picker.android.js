"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_picker_common_1 = require("./number-picker-common");
var NumberPicker = (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberPicker.prototype.createNativeView = function () {
        var np = new android.widget.NumberPicker(this._context);
        np.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        np.setValue(this.value);
        np.setMinValue(this.minValue);
        np.setMaxValue(this.maxValue);
        np.setWrapSelectorWheel(true);
        console.log('creating native np');
        console.log(np);
        var that = new WeakRef(this);
        var changeListener = new android.widget.NumberPicker.OnValueChangeListener({
            onValueChange: function (picker, oldVal, newVal) {
                var instance = that.get();
                if (instance) {
                    number_picker_common_1.valueProperty.nativeValueChange(instance, newVal);
                }
            }
        });
        console.log(changeListener);
        np.setOnValueChangedListener(changeListener);
        return np;
    };
    ;
    NumberPicker.prototype[number_picker_common_1.valueProperty.setNative] = function (value) {
        this.nativeView.setValue(value);
    };
    ;
    NumberPicker.prototype[number_picker_common_1.minValueProperty.setNative] = function (value) {
        this.nativeView.setMinValue(value);
    };
    ;
    NumberPicker.prototype[number_picker_common_1.maxValueProperty.setNative] = function (value) {
        this.nativeView.setMaxValue(value);
    };
    ;
    NumberPicker.prototype[number_picker_common_1.displayedValuesProperty.setNative] = function (value) {
        this.nativeView.setDisplayedValues(value);
    };
    ;
    return NumberPicker;
}(number_picker_common_1.NumberPickerBase));
exports.NumberPicker = NumberPicker;
