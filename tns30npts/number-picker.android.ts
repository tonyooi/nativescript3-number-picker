import { NumberPickerBase , valueProperty , minValueProperty , maxValueProperty , displayedValuesProperty } from "./number-picker-common";
// import { NumberPickerBase , valueProperty , minValueProperty , maxValueProperty } from "./number-picker-common";

declare var android:any;

export class NumberPicker extends NumberPickerBase {
	public createNativeView() {
        let np = new android.widget.NumberPicker(this._context);
        np.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        np.setValue(this.value);
        np.setMinValue(this.minValue);
        np.setMaxValue(this.maxValue);
        np.setWrapSelectorWheel(true);
        console.log('creating native np');
        console.log(np);

        let that = new WeakRef(this);
        let changeListener = new android.widget.NumberPicker.OnValueChangeListener({
            onValueChange : function(picker, oldVal, newVal){
                let instance = that.get();
                if(instance) {
                    valueProperty.nativeValueChange(instance,newVal);
                }
            }
        })

        console.log(changeListener);
        np.setOnValueChangedListener(changeListener); // from android API
        return np;
    };

    [valueProperty.setNative] (value:number) {
        this.nativeView.setValue(value);
    };

    [minValueProperty.setNative] (value:number) {
        this.nativeView.setMinValue(value);
    };

    [maxValueProperty.setNative] (value:number) {
        this.nativeView.setMaxValue(value);
    };

    [displayedValuesProperty.setNative] (value:any) {
        this.nativeView.setDisplayedValues(value);
    };

}