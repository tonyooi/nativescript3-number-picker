/*******************************************************
** NativeScript Number Picker ui/plugin
** Author : Tony Ooi
** File : number-picker.android.js
*******************************************************/

var common = require("./number-picker-common");

require("utils/module-merge").merge(common, module.exports);

var NumberPicker = (function(_super){

    global.__extends(NumberPicker,_super);
    function NumberPicker(){
        _super.apply(this,arguments);
    }

    NumberPicker.prototype.createNativeView = function () {
        var np = new android.widget.NumberPicker(this._context);
        np.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        np.setValue(this.value);
        np.setMinValue(this.minValue);
        np.setMaxValue(this.maxValue);
        np.setWrapSelectorWheel(true);

        var that = new WeakRef(this);
        var changeListener = new android.widget.NumberPicker.OnValueChangeListener({
            onValueChange : function(picker, oldVal, newVal){
                var instance = that.get();
                if(instance) {
                    common.valueProperty.nativeValueChange(instance,newVal);
                }
            }
        })

        np.setOnValueChangedListener(changeListener); // from android API
        return np;
    };

    NumberPicker.prototype[common.minValueProperty.setNative] = function (value) {
        this.nativeView.setMinValue(value);
    };

    NumberPicker.prototype[common.maxValueProperty.setNative] = function (value) {
        this.nativeView.setMaxValue(value);
    };

    NumberPicker.prototype[common.valueProperty.setNative] = function (value) {
        this.nativeView.setValue(value);
    };

    NumberPicker.prototype[common.displayedValuesProperty.setNative] = function (value) {
        this.nativeView.setDisplayedValues(value);
    };


    return NumberPicker;

})(common.NumberPicker);

exports.NumberPicker = NumberPicker;
