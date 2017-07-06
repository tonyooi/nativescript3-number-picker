/*******************************************************
** NativeScript Number Picker ui/plugin
** Author : Tony Ooi
** File : number-picker-common.js
*******************************************************/

var view = require("ui/core/view");

var NumberPicker = (function(_super) {
    /*************** Properties definition ******************
    ** valueProperty, value
    ** minValueProperty, minValue
    ** maxValueProperty, maxValue
    ** displayedValuesProperty, displayedValue
    ********************************************************/

    global.__extends(NumberPicker, _super);
    function NumberPicker() {
        _super.call(this);
    }

    return NumberPicker;

})(view.View);

exports.NumberPicker = NumberPicker;

exports.minValueProperty = new view.Property({
    name: "minValue",
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
});
exports.minValueProperty.register(NumberPicker);

exports.maxValueProperty = new view.Property({
    name: "maxValue",
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
});
exports.maxValueProperty.register(NumberPicker);

exports.valueProperty = new view.Property({
    name: "value",
    affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); },
    // valueChanged : function(target,oldValue,newValue){
    //     console.log(target);
    //     target.valueProperty = newValue ;
    // }
});
exports.valueProperty.register(NumberPicker);

exports.displayedValuesProperty = new view.Property({
    name: "displayedValues",
    affectsLayout: true,
});
exports.displayedValuesProperty.register(NumberPicker);


