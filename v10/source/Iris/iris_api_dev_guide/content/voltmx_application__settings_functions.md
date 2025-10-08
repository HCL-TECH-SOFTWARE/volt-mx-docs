                             


voltmx.application.settings Namespace
===================================

The voltmx.application.settings Namespace provides the following API elements.

Functions
---------


<details close markdown="block"><summary>voltmx.application.settings.read</summary>

* * *

This function enables your app to read the configuration values associated with specified keys.

### Syntax

```

voltmx.application.settings.read(  
    key,  
    onsuccesscallback,  
    onfailureback)
```

### Input Parameters

  
| Parameters | Description |
| --- | --- |
| key | A string that specifies the keys for the settings to read. |
| onsuccesscallback | A function that is executed when the key-value pair specified in the _key_ parameter is read successfully. For details, see the **Remarks** section below. |
| onfailurecallback | A callback function is executed when there is an error in fetching the app's settings. This callback function receives the error code and the error message. For details, see the **Remarks** section below. |

 

### Example

```

read: function() {

    voltmx.application.settings.read("key1", this.onsuccesscallbackR, this.onfailureback);
    voltmx.application.settings.read("key2", this.onsuccesscallbackR, this.onfailurebackR);
},

onfailureback: function(errorcode, errormessage) {
    alert("err is :" + errormessage);
},
onsuccesscallbackR: function(key, value) {
    var params = {};
    params.value = value;

    switch (value) {
        case "Table view":
            params.viewType = constants.SEGUI_VIEW_TYPE_TABLEVIEW;
            break;
        case "Page view":
            params.viewType = constants.SEGUI_VIEW_TYPE_PAGEVIEW;
            params.pageOffDotImage = "orngsld";
            params.pageOnDotImage = "whitesld";
            break;
        case "Coverflow view":
            params.viewType = constants.SEGUI_VIEW_TYPE_COVERFLOW;
            break;
        case "Cylinder view":
            params.viewType = constants.SEGUI_VIEW_TYPE_CYLINDER;
            break;
        case "Linear view":
            params.viewType = constants.SEGUI_VIEW_TYPE_LINEAR;
            break;
        case "Stack view":
            params.viewType = constants.SEGUI_VIEW_TYPE_STACK;
            break;

    }
    var ntf = new voltmx.mvc.Navigation("frmAppSetRead");
    ntf.navigate(params);
},

onfailurebackR: function(errorcode, errormessage) {
    alert("Err is :" + errormessage);
}
``` 

### Return Values

None.

### Remarks

This function reads an app's settings from the settings file that is bundled with the application's binary. Your app can use this function to read, among other things, the user-defined values such as the preferred locations.

This is an asynchronous call so it returns immediately. Upon successfully reading the app’s settings, the Volt MX Iris API framework automatically invokes the callback your app passes in the _onsuccesscallback_ parameter. The callback function has the following signature.

onsuccess(key, value);

When this callback function is invoked, the _key_ parameter contains a string that specifies the name of the key whose value is being retrieved.

The _value_ parameter contains the settings that were read. It can be `Boolean`, `string`, `double`, or an object. It contains an object when _Display option_ is set to multiselect.

If the Volt MX Iris API framework cannot read the settings associated with the _key_ parameter to the `voltmx.application.settings.read` function, then the framework automatically invokes the function in the _onfailurecallback_ parameter. The callback function has the following signature.

onfailure(errorcode,errormessage);

When the framework calls the `onfailure` callback function _errorcode_ parameter of contains a numeric error code and the _errormessage_ parameter contains the corresponding error message as a `string`.

### Platform Availability

Available only on iPhone

* * *

</details>
<details close markdown="block"><summary>voltmx.application.settings.write</summary>

* * *

This function enables your app to write values associated with specified keys.

### Syntax

```

voltmx.application.settings.write(  
    key,  
    value,  
    onsuccesscallback,  
    onfailurecallback);
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| key | A string that specifies the unique key. The key that you specify must exist. You cannot introduce a new key. |
| value | A string that holds the value to be set for a key. If this function is called multiple times using the same key, existing value for the key is replaced with the new value. A key's value can be Boolean, string, double, or an object. It can contain an object only when _Display option_ is set to multiselect. |
| onsuccesscallback | The callback function that is executed when the new value is successfully assigned to the specified key. For details, see the **Remarks** section below. |
| onfailurecallback | The callback function that is executed when there is an error in updating the configuration. This callback function receives an error code and an error message. For details, see the **Remarks** section below. |

 

### Example

```

write: function() {

    var str1 = this.view.txtMsg.text + " ";
    var str2 = this.view.lstBxType.selectedKey;

    voltmx.application.settings.write("key1", str1, this.onsuccesscallbackw, this.onfailurebackw);
    voltmx.application.settings.write("key2", str2, this.onsuccesscallbackWrite, this.onfailurebackWrite);

},
onsuccesscallbackw: function(key, value) {
    voltmx.print("Value is :" + value);
},

onfailurebackw: function(errorcode, errormessage) {
    alert("Error is :" + errormessage);
},


onsuccesscallbackWrite: function(key, value) {

    this.view.lblAppAfterSet.text = "App settings are successful";


},
onfailurebackWrite: function(errorcode, errormessage) {
    alert("Error is :" + errormessage);
}
```

### Return Values

None.

### Remarks

This function sets the value of configuration options in the configuration file that is associated with the app. New keys cannot be introduced with this function. Your app can only write to existing keys. This is an asynchronous call, so it returns immediately and does not wait for the underlying hardware to write the value to the specified key. It uses callback functions to communicate success or failure. The callback functions for success and failure are set using this function's _onsuccesscallback_ and _onfailurecallback_, respectively.

The callback function for the _onsuccesscallback_ parameter of the `voltmx.application.settings.write` function has the following 

### syntax.

```

onsuccesscallback(key,value);
```

where the `key` parameter to this callback is a string containing the name of the key that was set, and the callback function's `value` parameter contains the value that the key was set to. The callback function's `value` parameter can be `boolean`, `string`, `double`, or an object. An object is only passed in through the _value_ parameter when "_Display option_" is multiselect.

If the `voltmx.application.settings.write` function cannot set the value of the specified key, in invokes another callback function. The callback function for the `voltmx.application.settings.write` function's _onfailurecallback_ parameter has the following syntax.

```

onfailurecallback(errorcode,errormessage);
```

where the `errorcode` parameter contains a numeric error code and the `errormessage` parameter holds a string that specifies the error message.

### Platform Availability

Available only on iPhone

</details>

![](resources/prettify/onload.png)
