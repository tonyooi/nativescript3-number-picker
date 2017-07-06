import { View , Property , CoercibleProperty } from "ui/core/view";

export class NumberPickerBase extends View {
    /*************** Properties definition ******************
    ** valueProperty, value
    ** minValueProperty, minValue
    ** maxValueProperty, maxValue
    ** displayedValueProperty, displayedValue
    ********************************************************/	
    public value;
    public minValue;
    public maxValue;
    public displayedValue;
}

export const valueProperty = new Property<NumberPickerBase,number>({
    name : "value",
    defaultValue : 0,
    affectsLayout: true,
    // coerceValue : function(target,value){
    //     value = Math.max(value,target.minValue);
    //     value = Math.min(value,target.maxValue);
    //     return value;
    // },
    // valueChanged: function(target,oldValue,newValue){
    //     console.log(target);
    //     console.log(oldValue);
    //     console.log(newValue);
    // },
    valueConverter: function (v) { return parseInt(v); },
});
valueProperty.register(NumberPickerBase);

export const minValueProperty = new Property<NumberPickerBase,number>({
	name : "minValue",
    defaultValue : 0,
	affectsLayout: true,
    // valueChanged : function(target,oldValue,newValue){
    //     maxValueProperty.coerce(target);
    //     valueProperty.coerce(target);
    // },
    valueConverter: function (v) { return parseInt(v); },
});
minValueProperty.register(NumberPickerBase);

export const maxValueProperty = new Property<NumberPickerBase,number>({
	name : "maxValue",
    defaultValue : 100,
	affectsLayout: true,
    // coerceValue : function(target,value){
    //     let minValue = target.minValue;
    //     if ( value < minValue ) {
    //         value = minValue;
    //     }
    //     return value;
    // },
    // valueChanged: function(target,oldValue,newValue){
    //     valueProperty.coerce(target)
    // },
    valueConverter: function (v) { return parseInt(v); }, 
});
maxValueProperty.register(NumberPickerBase);

export const displayedValuesProperty = new Property<NumberPickerBase,number>({
	name : "displayedValues",
	affectsLayout: true,
    valueConverter: function (v) { return parseInt(v); }, 
});
displayedValuesProperty.register(NumberPickerBase);
