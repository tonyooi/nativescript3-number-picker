# nativescript3-number-picker
Number Picker Plugin for {N} ver 3.0

_Declaration_
```
<Page loaded="pageLoaded" 
	xmlns="http://schemas.nativescript.org/tns.xsd"
	xmlns:NumberPicker="./tns30npjs">
```
_Usage_
```
<NumberPicker:number-picker row="0" value="2" minValue="1" maxValue="3" displayedValues="{{ np.displayedValues }}" id="np" horizontalAlignment="left"/>
```
_main_page.js_
```
exports.pageLoaded = function(args) {
	console.log("Main page loaded");
	page = args.object;
    page.bindingContext = {
        np : observableModule.fromObject({displayedValues : ['one','two','three']})
    }
};
```

a. Files in tns30npjs are for NativeScript JS

b. Files in tns30npts are for NativeScript TypeScript
