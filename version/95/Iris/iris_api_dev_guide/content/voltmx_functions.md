
voltmx Namespace
==============

The voltmx namespace provides the following API elements.

Functions
---------

The voltmx namespace provides the following functions.


<details close markdown="block"><summary>voltmx.convertToBase64</summary>

* * *

Converts rawbytes (returned by the camera or the encryption API) to a base64 encoded string.

### Syntax

```

voltmx.convertToBase64 ([rawbytes](#rawbytes))
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| rawbytes | The rawbytes that you want to convert to an encoded base64 string. These rawbytes can be those that are returned from a camera or the encryption API. The datatype for the rawbytes differs per platform |

### Example

```

var base64 = "MIICKTCCAZKgAwIBAgIESrI6bzANBgkqhkiG9w0BAQUFADBZMQswCQYDVQQGEwJp
bjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ue
TERMA8GA1UEAxMIcGF0dGFiaGkwHhcNMDkwOTE3MTMzMjMxWhcNMDkxMjE2MTMzMjMxWjBZMQswCQ
YDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1U
ECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAIGP
dqCQCtFgsy1sM494o1F07aN+UXgsilTuKsNRExOb03RGrg2WpAI8PqMXD1XzGZAg+qC9iQexpWHUj
XgCYCbYrETvB3wNAToOrRE6mhZ0iaJij/0tLZACocLiTnvmzZU1B/xowvlioD3zsEs5N5n0U0fIsv
W/22MZ6WtZuAZTAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAXfOB1Mhx2R9ameeZz0hvCzYYSGcWsWN
ZaM7lMdBHFPzASYcVrmLj7JlLpuMm679A2p2JwXBsfetmhKse1ixqVeWdbe/FUfESU+8Krdvkcknv
ZaDqXYFxQAaVjTwWOn+zcDHf7LjjDohgDsMOJWXHkVQj2jooXqiktrBrpccm864=";
var rawBytes = voltmx.convertToRawBytes(base64);		
var newbase64 = voltmx.convertToBase64(rawBytes);
```

### Return Values

The encoded base64 string that was converted from the provided rawbytes. This converted encoded base64 string can be displayed on the screen to the user whenever required as this string is readable. If the conversion could not be performed, this function returns `null`.

### Exceptions

An error is thrown if the input type is invalid or follows an unexpected structure.

102-Invalid input error

### Remarks

The rawbytes returned by the camera or the encryption API are a set of junk characters that are not readable. When you want to display this data in a readable format to the user, you can use this API.

### Platform Availability

    Available on all platforms except Desktop Web and Server Side Mobile Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.convertToRawBytes</summary>

* * *

Provides your app with the ability to read rawbytes from a base 64 encoded string.

### Syntax

```

voltmx.convertToRawBytes([base64String](#base64String));
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| base64String | The base64 encoded string from which you want to read the rawbytes. |

### Example

```

var base64 = "MIICKTCCAZKgAwIBAgIESrI6bzANBgkqhkiG9w0BAQUFADBZMQswCQYDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwHhcNMDkwOTE3MTMzMjMxWhcNMDkxMjE2MTMzMjMxWjBZMQswCQYDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAIGPdqCQCtFgsy1sM494o1F07aN+UXgsilTuKsNRExOb03RGrg2WpAI8PqMXD1XzGZAg+qC9iQexpWHUjXgCYCbYrETvB3wNAToOrRE6mhZ0iaJij/0tLZACocLiTnvmzZU1B/xowvlioD3zsEs5N5n0U0fIsv
W/22MZ6WtZuAZTAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAXfOB1Mhx2R9ameeZz0hvCzYYSGcWsWNZaM7lMdBHFPzASYcVrmLj7JlLpuMm679A2p2JwXBsfetmhKse1ixqVeWdbe/FUfESU+8Krdvkcknv
ZaDqXYFxQAaVjTwWOn+zcDHf7LjjDohgDsMOJWXHkVQj2jooXqiktrBrpccm864=";
voltmx.convertToBase64(myVal);
var rawBytes = voltmx.convertToRawBytes(base64);		
```

### Return Values

This API returns the modified rawbytes of the image. The data type of the rawbytes varies per platform. In JavaScript, there is no specific type for rawbytes and every platform represents the rawbytes in a unique way.

If the base64String parameter does not contain a valid value, this function returns `null`.

### Exceptions

An error occurs if input type is invalid or does not follow the expected structure.

### Platform Availability

Available on all platforms except Desktop Web and Server Side Mobile Web. On SPA, reading base64 from an image src is not supported, but you can read the base64 from an image which is displayed through base64.

</details>
<details close markdown="block"><summary>voltmx.evaluateJavaScriptInNativeContext</summary>

* * *

The voltmx.evaluateJavaScriptInNativeContext API enables a web app JavaScript module, which is running in the Browser widget, to execute JavaScript code in the Volt MX native context. This API works only when the [enableNativeCommunication](../../../Iris/iris_widget_prog_guide/Content/Browser_Properties.md#enableNativeCommunication) property of the Browser / CordovaBrowser widget is set to true.

> **_Note:_** This API is applicable for the widgets Browser and CordovaBrowser.

### Syntax

```

The syntax of the API varies depending on the application type.

The syntax for native platforms is as follows.

voltmx.evaluateJavaScriptInNativeContext(methodName, args)

The syntax for SPA and Desktop Web platforms is as follows.

voltmx.evaluateJavaScriptInNativeContext(methodName('args'))
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| methodName | The name of the function executed in native context. The function name must be provided as a string. Further, the definition of the function must be provided in the **Modules** section of the application. |
| args | The array of arguments passed to the function given in the _methodName_ parameter.The array must be converted to string using `JSON.stringify` function before passing it to the _args_ parameter. |

### Example

### Example 1

```

/*In this sample code, the evaluateJavaScriptInNativeContext API invokes the noparamsfunction method in the native context without any parameters.*/  
var arr = [];
voltmx.evaluateJavaScriptInNativeContext("noparamsfunction", JSON.stringify(arr));

//function definition in modules
function noparamsfunction() {
    alert("noparamsfunction invoked");
}

//Output: Displays an alert with message "noparamsfunction invoked".
```

### Example 2

```

/*In this sample code, the evaluateJavaScriptInNativeContext API invokes the twoparamsfunction method in the native context with two parameters.*/  
/*Here, the arr Array contains all the arguments required for invoking the twoparamsfunction method.*/  
  
var arr = [];  
//First Argument  
arr.push("hi");  
//Second Argument  
arr.push("helloworld");  
  
voltmx.evaluateJavaScriptInNativeContext("twoparamsfunction", JSON.stringify(arr));  
  
//Function definition in the modules section of the project.  
function twoparamsfunction (arg1, arg2){  
alert("twoparamsfunction invoked with arg1: "+arg1+" and arg2: "+arg2);  
}  
/*Output: Displays an alert with the following message:  
"twoparamsfunction invoked with arg1: hi and arg2: helloworld".*/  

```

### Example 3

```

/*Sample code for the implementation of the evaluateJavaScriptInNativeContext API in the SPA and the Desktop Web platforms.*/  
  
var arr = [];  
arr.push("hello world");  
voltmx.evaluateJavaScriptInNativeContext ('sampleMethod('+JSON.stringify(arr)+')');  
  
//Function method in modules  
function sampleMethod(arg1){  
alert("sampleMethod invoked with the parameter: "+arg1);  
}  
/*Output: Displays an alert with the following message:  
"sampleMethod invoked with the parameter: hello world"*/
```

### Return Values

None

### Platform Availability

*   iOS, Android, Windows, SPA, and Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.getError</summary>

* * *

Retrieves an error object from a handle to the error object.

### Syntax

```

voltmx.getError([error](#error))
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| error | An object that is either the Original Error object or a handle received in try/catch block. |

### Example

```

try {
    // Label to check UserData Type.
    var basicconf = {
        id: "lblWithUserData",
        text: "userdata",
        isVisible: true,
        skin: "sknlbl"
    };
    var layoutconf = {
        containerWeight: 100,
        hExpand: true,
        vExpand: true
    };
    var lbl1 = new voltmx.ui.Label(basicconf, layoutconf, {});

    hbox.add(lbl1);
} catch (e) {
    var err = voltmx.getError(e);

    if (err instanceof VoltMXError)

        alert("A Volt MX error");
    else if(err instanceof EvalError)
    alert("A JavaScript Eval Eror");
}
```

### Return Values

Returns the JavaScript error object.

### Exceptions

If the input type is invalid or there is an unexpected structure.

### Remarks

Use _getError_ APIs for cross platform applications to handle exceptions consistently.

### Platform Availability

    Available on all platforms except Windows.

* * *

</details>
<details close markdown="block"><summary>voltmx.props.getProperty</summary>

* * *

This API is used to access parameters from an external properties file.

### Syntax

```

voltmx.props.getProperty(  
    group,  
    key)
```

### Input  Parameters
 
| Parameter | Description |
| --- | --- |
| group | Set this to _null_. Reserved for future use. |
| key | A string containing the key for the property value your app needs to retrieve. |

### Example

```

frmhome.label103982946332169.text = voltmx.props.getProperty(null,"key1");
```

### Return Values

Returns a string containing the property value that matches the given key, or null if there is no value matching the given input key in the properties file.

### Remarks

All the external properties files must be appended to the `<appID>.properties` file and be deployed at the following folder on the Volt MX Iris Application Server:

`<middlewarehome>\middleware\middleware-bootconfig\tc\<appID>.properties`

### Platform Availability

    Available on Mobile Web and SPA.

* * *

</details>
<details close markdown="block"><summary>voltmx.print</summary>

* * *

Prints debugging output.

### Syntax

```

voltmx.print(  
    myString);
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| myString | Specifies the string to be printed. |

### Example

```

voltmx.print("This is a test message.");
```

### Return Values

None.

### Remarks

If any other type of argument is passed a string representation of that input is passed. It prints the value to the Standard Output specific to the platform. It prints their values to _stdout_, using the `tostring` function to convert them to strings. print is not intended for formatted output, but only as a quick way to show a value, typically for debugging. For formatted output, use `string.format`.

### Platform Availability

    Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.runOnMainThread</summary> 

* * *

This API helps you run the JavaScript code on the main thread. It is an asynchronous API. It posts a message to the main thread to invoke a function f with parameters arguments.

> **_Note:_** If runonMainThread is invoked in a JavaScript function that is already running on the main thread, then the function is executed in synchronous mode.

### Syntax

```

voltmx.runOnMainThread (f, args)
```

### Input Parameters
 
| Parameters | Description |
| --- | --- |
| f \[Function\] - Mandatory | Specifies the callback function that must be executed. |
| args \[Array\] - Mandatory | Specifies the JavaScript array that holds the parameters to be passed to function f. |

### Example

```

voltmx.runOnMainThread(mainthread, []);
function mainthread () {
   voltmx.print ("Running on On Main Thread");
}
```

### Return Values

None

### Platform Availability

*   Android
*   iOS

</details>
<details close markdown="block"><summary>voltmx.runOnWorkerThread</summary>

* * *

Provides apps with multithreading capabilities.

### Syntax

```

voltmx.runOnWorkerThread(f,args)
```

### Input Parameters

| Parameters | Description |
| --- | --- |
| f | Specifies the callback function that must be executed. |
| args | Specifies an array that holds the parameters to be passed to the function indicated by the _f_  parameter. |

### Example

```

voltmx.runOnWorkerThread(workermethod, []);
function workermethod () {
   voltmx.print ("Running on On Worker Thread");
}
```

### Return Values

None.

### Remarks

This function helps you run JavaScript code asynchronously on a worker thread. It posts a message to the worker thread that owns the current JavaScript context to invoke the function specified in the _f_ parameter.

> **_Important:_** The assumption here is that main thread does not own any JavaScript context. The VM/closure thread and worker threads own the JavaScript context. When the voltmx.runOnWorkerThread is invoked from the main thread, a message is posted to the thread that originally invoked the voltmx.runOnMainThread. If the runonWorkerThread is invoked in a JavaScript function that is already running on the worker thread, then the function would be executed in synchronous mode.

### Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.screenshot</summary>

* * *

You can use the voltmx.screenshot API to capture the whole web page or screen of your application.

### Syntax

```

voltmx.screenshot(config)
```

### Input Parameters

_config_

The _config_ parameter consists of a JavaScript object. It contains the following attribute.
 
| Parameter | Description |
| --- | --- |
| callback | This parameter contains the function that is invoked when the screen capture is complete.The syntax of the _callback_ parameter is as follows:`{"callback":function(imageData){}};`Here, the_imageData_ parameter contains the base64 String of the screenshot. callback is a mandatory parameter. |

### Example

```

config = {
"callback": function(imageData) {
  voltmx.print(imageData);
 } //The imageData parameter contains the base64 String of the screenshot.
};
voltmx.screenshot(config);
```

### Return Values

None

### Important Considerations

*   When you use the voltmx.screenshot API to get a screenshot of your web browser, the screen capture does not include the images and videos that use an external URL.
*   When you use the voltmx.screenshot API to get a screen capture, the scrollable containers (such as FlexScrollContainer and Segment) do not display the whole content. The screen capture only displays the content within the height of the scrollable containers.

### Platform Availability

*   Desktop Web (Google Chrome (v72 and later),Mozilla FireFox (v66), Opera (v60), Microsoft Edge, and Safari).

* * *

</details>
<details close markdown="block"><summary>voltmx.type</summary>

* * *

This API retrieves the data type of the specified input. The possible return values in JavaScript are:

*   string
*   number
*   boolean
*   function
*   userdata - not JavaScript type but the platform specific type that platform returns and consumes like rawBytes.
*   In case of voltmx custom objects, this API returns the fully qualified name of the class from which object is instantiated. for e.g _voltmx.ui.Form2_
*   null

Use the _typeof_ operator instead of _voltmx.type_ to achieve the same result. If the _typeof_ operator cannot be used, use _voltmx.type_ instead.

### Syntax

```

voltmx.type([variable](#variable))
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| variable \[String\] or \[Number\] or \[Boolean\] or \[Function\] - or \[userdata\] or nil/null - Mandatory | Specifies the value for which you want to retrieve the data type. |

### Example

```

var myVal = 2000;
var varType = voltmx.type(myVal);//Returns a number
var myVal1 = "hello";
var varType = voltmx.type(myVal1);//Returns a string
```

### Return Values

returnValue \[String\]

Returns a string that determines the data type of the specified input. Possible values are:

| Return Value | Description |
| --- | --- |
| string | this value is returned when you pass a string as the input parameter. |
| number | this value is returned when you pass a number as the input parameter. |
| boolean | this value is returned when you pass a boolean value as the input parameter. |
| function | this value is returned when you pass a function as the input parameter. |
| userdata | this value is returned when the input parameter is not a string, number, boolean or function.> **_Note:_** Any data type which is not a string, number, boolean, or function is treated as userdata. |
| null/nil | this value is returned when the variable is assigned null/nil |

> *   In case of voltmx custom objects, this API returns the fully qualified name of the class from which object is instantiated. for e.g _voltmx.ui.Form2_. When you pass any custom / built in JSObject to this API, it should return the name of the custom JSObject.

### Platform Availability

    Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.web.WebAuthenticationSession</summary>

* * *

This API helps you to manage the sharing of a one-time login credentials between the Safari web browser and an app. The one-time login credentials can also be used to automatically log on to associated apps. The voltmx.web.WebAuthenticationSession API is available from V9 SP2 onwards.
<!-- This API helps you to manage the sharing of a one-time login credentials between the Safari web browser and an app. The one-time login credentials can also be used to automatically log on to associated apps. The voltmx.web.WebAuthenticationSession API is available from V8 SP4 onwards. -->

In addition, this API facilitates a single sign-on (SSO) experience when used with standards such as OAuth. It puts users in control of whether they want to use their existing logged-in session from Safari browser.

When users try to authenticate an URL from your application by using this API, the API displays an alert containing two buttons: **Continue** and **Cancel**. The following scenarios can occur when the Login screen of the web service is displayed:

*   If the user taps **Continue**, one secure controller will be opened with authenticationURL. If the user has already authenticated the URL in Safari browser, it calls the redirectionURL (the URL scheme that points to this app), which is then passed in the API.
*   If the user cancels the alert, the session will be canceled and the constants.WEB\_AUTH\_SESSION\_ERROR\_CANCELLED\_LOGIN error message will be displayed.
*   If the user taps **Cancel**, the session will be canceled and the constants.WEB\_AUTH\_SESSION\_ERROR\_CANCELLED\_LOGIN error message will be displayed.

This will also dismiss the view controller that displays the login page of the web service.

### Syntax

```

voltmx.web.WebAuthenticationSession(authenticationURL, redirectionURL, callbackfun)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| authenticationURL | A String that points to the authentication web page. After the authentication process is complete, the server/service sends a callbackURL along with an authentication token to the completion handler. The authenticationURL parameter only supports URLs with http:// or https:// schemes. |
| redirectionURL | A String URL scheme. This is a redirection URL for the app to receive callbacks when the authentication process is complete. |
| callbackfun | A callback function with one argument. It is a dictionary with **callbackURL** and **errorCode** keys. The argument is invoked when the session is either completed successfully or is canceled by the user. If the session is successful, the errorCode value is null and the callbackURL is sent to the callback. If the session fails or is canceled, the callbackURL value is null and the respective errorCode value is sent to the callback. |

### Methods

| Method | Description |
| --- | --- |
| session.start() | Returns boolean value (yes/no), based on whether the session starts successfully or if it fails to start. |
| session.cancel() | Cancels the session. |

### Example

```

var session = new voltmx.web.WebAuthenticationSession(authenticationURL, redirectionURL, callbackfun);
session.start();

function callbackfun(response) {
    if (constants.WEB_AUTH_SESSION_ERROR_CANCELLED_LOGIN == callbackURL.errorCode) {
        voltmx.print("Error occured during authentication ", response.errorCode);
    } else {
        //user-defined flow 
    }
    voltmx.print("resonse callbackURL ", response.callbackURL);
}
```

### Return Values

None

### Platform Availability

*   iOS

* * *

</details>

voltmx.nosql APIs
---------------

### Available Constants

<table style="width: 100%;"><colgroup><col style="width: 30%;"> <col style="width: 70%;"></colgroup><tbody><tr><td style="text-align: center;font-weight: bold;">Constant</td><td style="text-align: center;"><b>Used in</b></td></tr><tr><td style="text-align: center;">voltmx.nosql.AND</td><td style="text-align: center;">condition.addRule or condition.addCondition API.</td></tr><tr><td style="text-align: center;">voltmx.nosql.OR</td><td style="text-align: center;">conditionInstance.addRule or conditionInstance.addCondition API.</td></tr><tr><td style="text-align: center;">voltmx.nosql.EQ</td><td style="text-align: center;">While instantiating voltmx.nosql.Rule class, represents "=" operator.</td></tr><tr><td style="text-align: center;">voltmx.nosql.NEQ</td><td style="text-align: center;">While instantiating voltmx.nosql.Rule class, represents "!=" operator.</td></tr><tr><td style="text-align: center;">voltmx.nosql.GT</td><td style="text-align: center;">While instantiating voltmx.nosql.Rule class, represents "&gt;" operator.</td></tr><tr><td style="text-align: center;">voltmx.nosql.GTE</td><td style="text-align: center;">While instantiating voltmx.nosql.Rule class, represents "&gt;=" operator.</td></tr><tr><td style="text-align: center;">voltmx.nosql.LT</td><td style="text-align: center;">While instantiating voltmx.nosql.Rule class, represents "&lt;" operator.</td></tr><tr><td style="text-align: center;">voltmx.nosql.LTE</td><td style="text-align: center;">While instantiating voltmx.nosql.Rule class, represents "&lt;=" operator.</td></tr><tr><td style="text-align: center;">voltmx.nosql.READ</td><td style="text-align: center;">voltmx.nosql.openTransaction API. The voltmx.nosql.READ constant specifies that the transaction is to be opened in read mode.</td></tr><tr><td style="text-align: center;">voltmx.nosql.READ_WRITE</td><td style="text-align: center;">voltmx.nosql.openTransaction API. The voltmx.nosql.READ_WRITE constant specifies that the transaction is to be opened in read/write mode.</td></tr><tr><td style="text-align: center;">voltmx.nosql.ASCENDING</td><td style="text-align: center;">result.sort API. The voltmx.nosql.ASCENDING constant sorts the records in ascending order.</td></tr><tr><td style="text-align: center;">voltmx.nosql.DESCENDING</td><td style="text-align: center;">result.sort API. The voltmx.nosql.DESCENDING constant sorts the records in descending order.</td></tr></tbody></table>

### Functions

> **_Note:_** Performing update, delete, or fetch operations on a table that contains a large number of records may have an affect on the performance when the condition object contains more than one rule/condition.

> **_Note:_** Usage of Boolean values in the condition object may also cause a performance issue. You must use either 0/1 or 'false'/'true', instead of Boolean false/true.

The functions of the voltmx.nosql Namespace are as follows.

<details close markdown="block"><summary>voltmx.nosql.addRecords</summary>

* * *

Replaces a record if the primary key matches, else the record is added.

### Syntax

```

voltmx.nosql.addRecords(transactionObject, tableName, records)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | The object returned by [voltmx.nosql.openTransaction API](#voltmx.nosql.openTransaction). |
| tableName | The table on which the insert operation is to be applied. |
| records \[Array\]: \[{},{},{}\] | Array of rows containing key-value pairs that are to be inserted in the table. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject)   
{
    voltmx.nosql.addRecords(transactionObject, 'EMP', [{
        'Emp_id': 1234,
        'Emp_name': 'abc',
        'Emp_manager': 'def'
    }, {
        'Emp_id': 1235,
        'Emp_name': 'efg',
        'Emp_manager': 'xyz'
    }, {
        'Emp_id': 1236,
        'Emp_name': 'ijk',
        'Emp_manager': 'def'
    }]).then(function() {
        //add records success callback
    }).
    catch(function(errorObject) {
        //add records error callback
    });
}).then(function(transactionObject) {
    //transaction complete callback
});
```

### Return Values

### Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    
### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.addOrReplaceRecords</summary>

* * *

Replaces a record if the primary key matches, else the record is added.

### Syntax

```

voltmx.nosql.addOrReplaceRecords(transactionObject, tableName, records)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | The object returned by [voltmx.nosql.openTransaction API](#voltmx.nosql.openTransaction). |
| tableName | The table on which the addOrReplace operation is to be applied. |
| records\[Array\]: \[{},{},{}\] | Array of rows containing key-value pairs that are to be added or replaced. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject) {
    voltmx.nosql.addOrReplaceRecords(transactionObject, 'EMP', {
        Emp_manager: 'updated manager name'
    }).then(function() {
        //addOrReplaceRecords records success callback
    }).
    catch (function(errorObject) {
        //addOrReplaceRecords records error callback
    });
}).then(function(transactionObject) {
    // transaction complete callback
});
```

### Return Values

### Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.clearTable</summary>

* * *

Clears the existing data in a table in the callback of [openTransaction API](#voltmx.nosql.openDatabase).

### Syntax

```

voltmx.nosql.clearTable(transactionObject, tableName)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | Object returned in callback of [openTransaction API](#voltmx.nosql.openDatabase). |
| tableName | The name of the table for which the data is to be cleared. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject) {
    voltmx.nosql.clearTable(transactionObject, 'EMP').then(function() {
        //clear table success callback
    }).
    catch(function(errorObject) {
        //clear table error callback
    });
}).then(function(transactionObject) {
    // transaction complete callback
});
```

### Return Values

Promise.

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.closeDatabase</summary>

* * *

Closes the database connection.

### Syntax

```

voltmx.nosql.closeDatabase(dbObject)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The dbObject returned in successcallback of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase) |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    //upgrade callback
}).then(function(dbObject) {
    //success callback
    voltmx.nosql.closeDatabase(dbObject).then(function() {
        //close database success callback
    }).
    catch (function(errorObject) {
        //close database error callback
    });
}).
catch (function(errorObject) {
    //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.createIndices</summary>

* * *

Creates indices for the specified table in the database. You can only create indices in the upgrade callback of an open database.

### Syntax

```

voltmx.nosql.createIndices(dbObject, tableName, indexes)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The object that is returned in the [upgradecallback](#upgradecallback) parameter of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase). |
| tableName | The name of the table for which the indices are to be created. |
| indexes\[Object\] | Indexes to be created on the specified table. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
        voltmx.nosql.createIndices(dbObject, 'EMP', {
                'Emp_sal': {
                    unique: true
                },
                'Emp_loc': {}
            }
        });
}).then(function(dbObject) {
    //success callback
}).
catch (function(errorObject) {
    //error callback
});
```

### Return Values

| Return Value | Description |
| --- | --- |
| Promise | This value has the following parameters:Resolve: The Resolve callback is executed if the indices are created successfully on the table.Reject: Reject callback is executed if any error occurs. An error occurs when index is being created while it already exists.errorObject {errorMsg:" ", errorCode: " "} |

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.createTable</summary>

* * *

Creates a table (object store) in the indexed database. You can only create tables in the upgradebcallback.

### Syntax

```

voltmx.nosql.createTable(dbObject, tableName, config)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The object that is returned in the [upgradecallback](#upgradecallback) parameter of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase). |
| tableName \[String\] | The name of the table to be created. |
| config \[Object\] | Stores the following optional properties:primarykey: \[String\]; If primarykey is of single value.\[Array\]; If primarykey is of composite value.indexes \[Object\]: Indexes to be created along with metadata.autoIncrement \[Boolean\]: If you set this property as true and do not specify the primarykey value while inserting a record, the primarykey value is generated automatically. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    voltmx.nosql.createTable(dbObject, 'EMP', {
        primaryKey: 'Emp_id',
        indexes: {
            'Emp_id': {},
            'Emp_name': {},
            'Emp_manager': {},
            'Emp_DOJ': {},
            'Emp_email': {
                unique: true
            }
        }
    });
}).then(function(dbObject) {
    //success callback
}).catch(function(errorObject) {
    //error callback
});
```

### Return Values

None.

### Remarks

*   If there is any error in creating a table, you will be directed to the reject callback.
    
*   If you successfully create a table, you will be directed to the success callback of [openDatabase API](#voltmx.nosql.openDatabase).
*   Error in the creation of the table results in any one of the following scenarios:
    
    *   If the database already exists: roll-back to the previous version of database occurs.
        
    *   If this is the first version of the database: no new database is created.
        
*   The autoIncrement property is not applicable when the primarykey is of composite value.
    
*   Unlike SQL, you do not need to specify all properties but only the one you wish to index.
    
*   Do not index properties that contain images, movies, or large-sized strings. Store them in IndexedDB, but do not index them; it may affect the performance.

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.databaseExists</summary>

* * *

Specifies whether the required database exists or not.

### Syntax

```

voltmx.nosql.databaseExists(dbName)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| dbName | The name of the database that you want to verify if it exists. |

### Example

```

voltmx.nosql.databaseExists('dbName').then(function(isExists) {
    //successcallback
}).
catch(function(errorObject) {
    //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: true if database exists; else, false
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.deleteDatabase</summary>

* * *

Deletes an existing database.

### Syntax

```

voltmx.nosql.deleteDatabase(dbname)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbname | Name of the database to be deleted. |

### Example

```

voltmx.nosql.deleteDatabase('Company').then(function()   
{
   //success callback
}).
catch(function(errorObject)   
{
   //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.deleteIndices</summary>

* * *

Deletes indices for the specified table in the database. You can only delete indices in the upgrade callback of an open database.

### Syntax

```

voltmx.nosql.deleteIndices(dbObject, tableName, indexes)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The object that is returned in the [upgradecallback](#upgradecallback) parameter of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase). |
| tableName | The name of the table for which the indices are to be deleted. |
| indexes\[Object\] | Indexes to be deleted on the specified table. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
        voltmx.nosql.deleteIndices(dbObject, 'EMP', {
                'Emp_sal': {
                    unique: true
                },
                'Emp_loc': {}
            }
        });
}).then(function(dbObject) {
    //success callback
}).
catch (function(errorObject) {
    //error callback
});

```

### Return Values

| Return Value | Description |
| --- | --- |
| Promise | This value has the following parameters:Resolve: This callback is executed if the indices are deleted succesfully.Reject: This callback is executed if an error occurs.errorObject {errorMsg:" ", errorCode: " "} |

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.deleteRecords</summary>

* * *

Deletes the rows that match the specified condition.

### Syntax

```

voltmx.nosql.deleteRecords(transactionObject, tableName, condition)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | Object returned by [openTransaction API](#voltmx.nosql.openTransaction). |
| tableName | The name of the table on which the delete operation is to be applied. |
| condition | It has two parameters: voltmx.nosql.Condition instance and null.voltmx.nosql.Condition instance: Deletes the records based on the given condition.null: Deletes all records in the table. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject)   
{
    voltmx.nosql.deleteRecords(
        transactionObject,
        'EMP',
        condition
    ).then(function() {
        //delete records success callback
    }).
    catch(function(errorObject) {
        //delete records error callback
    });
}).then(function(transactionObject) {
    // transaction complete callback
});
```

### Return Values

Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}

### Remarks

*   If you do not pass any condition, the voltmx.nosql.deleteRecords API deletes all the records.
    
*   If you want to delete all the records, use the [voltmx.nosql.clearTable API](#voltmx.nosql.clearTable) for better performance efficiency.

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.deleteTable</summary>

* * *

Deletes a table in the database. This can only be done in the [upgradecallback](#upgradecallback) parameter of [openDatabase API](#voltmx.nosql.openDatabase).

### Syntax

```

voltmx.nosql.deleteTable(dbObject, tableName)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | dbObject returned in the [upgradecallback](#upgradecallback) parameter of [openDatabase API](#voltmx.nosql.openDatabase). |
| tableName | The name of the table that is to be deleted. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    voltmx.nosql.deleteTable(dbObject, 'EMP');
}).then(function(dbObject) {
    //success callback
}).
catch(function(errorObject) {
    //error callback
});
```

### Return Values

None.

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.fetchRecords</summary>

* * *

This API retrieves the records from the table depending on the condition set by user.

### Syntax

```

voltmx.nosql.fetchRecords(transactionObject, tableName, condition)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | Object returned by [openTransaction API](#voltmx.nosql.openTransaction). |
| tableName | The name of the table from which the records are to be fetched. |
| condition | It has two keys: voltmx.nosql.Condition instance and null.voltmx.nosql.Condition instance: Filters the records based on the condition. To see the list of conditions, refer [here](#available-constants).null: Returns all records in the table. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject) {
    /*
    For example, to form a condition like - "((Emp_name = 'Joe' || Emp_name = 'John') &amp;&amp; (Emp_manager = 'Albert' || Emp_manager = 'Bill'))"
 
        var rule1 = new voltmx.nosql.Rule('Emp_name', voltmx.nosql.EQ, 'Joe');
        var rule2 = new voltmx.nosql.Rule('Emp_name', voltmx.nosql.EQ, 'John');
        var rule3 = new voltmx.nosql.Rule('Emp_manager', voltmx.nosql.EQ, 'Albert');
        var rule4 = new voltmx.nosql.Rule('Emp_manager', voltmx.nosql.EQ, 'Bill');
 
        var cond1 = new voltmx.nosql.Condition(rule1);
        cond1.addRule(voltmx.nosql.OR, rule2);
 
        var cond2 = new voltmx.nosql.Condition(rule3);
        cond2.addRule(voltmx.nosql.OR, rule4);
 
        var condition = new voltmx.nosql.Condition(cond1);
        cond2.addCondition(voltmx.nosql.AND, cond2);
 
        condition.toString() will return the below line, so that one can verify their condition.
        "((Emp_name = 'Joe' || Emp_name = 'John') &amp;&amp; (Emp_manager = 'Albert' || Emp_manager = 'Bill'))"
 
        //Now pass "condition" to voltmx.nosql.fetchRecords API
    */

    voltmx.nosql.fetchRecords(transactionObject, 'EMP', condition).then(function(result) {
        //fetch records success callback

        /* To know about the properties and methods of the result object, refer [Remarks](#Remarks). */
     
    }).
    catch (function(errorObject) {
        //fetch records error callback
    });
}).then(function(transactionObject) {
    // transaction complete callback
});
```

### Return Values
 
| Return Value | Description |
| --- | --- |
| Promise | This value has the following parameters: Resolve: This callback is executed if the records are fetched successfully. Reject: This callback is executed if an error occurs. errorObject {errorMsg:" ", errorCode: " "} |

**Remarks**

The [result](#result) object has the following properties and methods:

**Properties:**

*   result.data: Returns list of records (i.e. an array).
*   result.length: Returns the number of records fetched.
*   result.next: Moves the internal array index by 1, and returns true or false depending on, if record exists at that index.
*   result.record: Returns a single record. Make sure "result.next" is called before calling "result.record"  
    For example, Iterating through a result object
```

//Considering "result.next" was not called before
//if "result.record" is called here, it would return "null"
while (result.next) {
    voltmx.print(result.record);
    voltmx.print(result.record); //prints the same record as that of above line.
}
//if "result.record" is called here, it would return "null"  

```

**Methods:**

*   **result.sort:** This method can be invoked in the following ways:
    *   result.sort(compareFunction) returns the list of sorted records depending on the compareFunction passed.
    *   result.sort(columnName, sortType) returns the list of sorted records of specified column in ascending or descending order.
    *   result.sort(\[columnName1,columnName2, ...\], sortType) returns the list of sorted records of multiple columns in ascending or descending order.
*   **result.limit(startIndex, recordCount):** This method returns the count of records from the startIndex. This API is chainable and mutates the output of result.data list.  
    Here are a few examples:
    *   result.sort(columnName, sortType).limit(0, 10).data: Sorts all the records and on then returns the first 10 records.
    *   result.limit(0, 10).sort(columnName, sortType).data: Picks up the first 10 records and then sorts those 10 records.  
        
*   **result.groupBy(\[columnName1,...\], index):** This method returns a 1D array or a 2D array by grouping the records of multiple columns. This API is not chainable and does not mutate the output of result.data list.  
    Depending on the index provided, the result varies in the following ways:  
    *   if index is not given, a 2D array is returned with all the records grouped based on the column names.
    *   if index is positive, it picks the records from the beginning of the grouped data and returns the array.
    *   if index is negative, it picks the records from the end of the grouped data and returns the array.  

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.getPrimaryKeys</summary>

* * *

Fetches the primary key of the required table.

### Syntax

```

voltmx.nosql.getPrimaryKeys(dbObject, tableName, transactionObject)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| dbObject | The dbObject returned in successcallback of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase) |
| tableName | Name of the table for which the primary key is to be fetched. |
| transactionObject \[Optional\] | The object returned by [openTransaction API](#voltmx.nosql.openTransaction).> **_Note:_** You must open the transactionObject parameter for the tableName mentioned in the input. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    //upgrade callback
}).then(function(dbObject) {
    //success callback
    voltmx.nosql.getPrimaryKeys(dbObject, tableName).then(function(primayKeyList) {
        //getPrimaryKeys success callback
    }).
    catch(function(errorObject) {
        //getPrimaryKeys error callback
    });
}).
catch(function(errorObject) {
    //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: \[Array\] list of primary keys
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.getTables</summary>

* * *

Returns the list of tables in the selected database.

### Syntax

```

voltmx.nosql.getTables(dbObject)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The dbObject returned in successcallback of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase) |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    //upgrade callback
}).then(function(dbObject) {
    //success callback
    voltmx.nosql.getTables(dbObject).then(function(tableNames) {
        //getTables success callback
    }).
    catch(function(errorObject) {
        //getTables error callback
    });
}). 
catch(function(errorObject) {
    //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: tableNames\[Array\]
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.openDatabase</summary>

* * *

Opens an existing database; if the database does not exist, however, the API creates the database and then opens it.

### Syntax

```

voltmx.nosql.openDatabase(dbname, version, upgradecallback)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbname \[String\] | Name of the database to be opened. |
| version \[Integer\] | Version of the database. |
| upgradecallback \[function\] | Called when you open a new database or when you upgrade an existing database. Upgrading an existing database involves adding new tables or removing existing tables. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    //upgrade callback
}).then(function(dbObject) {
    //success callback
}).catch(function(errorObject) {
    //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: dbObject
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.openTransaction</summary>

* * *

Opens a transaction in which you can execute any of the insert, update, or delete operations.

### Syntax

```

voltmx.nosql.openTransaction(dbObject, tableNames, mode, callback)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The dbObject returned in the success callback of [openDatabase API](#voltmx.nosql.openDatabase). |
| tableNames\[Array\] | The tables that are to be part of this transaction. |
| mode | The mode in which you open the transaction, for example, voltmx.nosql.READ or voltmx.nosql.READ\_WRITE). |
| callback | The openTransaction callback in which transaction-based operations are possible.Parameter of callback: transactionObject. |

### Example

```

voltmx.nosql.openDatabase('Company', 1).then(function(dbObject) {
    voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject) {
        //transaction callback
    }).then(function(transactionObject) {
        //transaction complete callback
    }).
    catch(function(errorObject) {
        //transaction error callback
    });
}).
catch(function(errorObject) {
    //open database error callback
});
```

### Return Values

Promise.

*   Resolve parameter: transactionObject
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Remarks

*   In case of nested transactions, ensure that the child and parent transactions are not opened in the same table.
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.replaceRecords</summary>

* * *

Replaces the records that match the provided condition. The API also updates the full record with a new set of columns.

### Syntax

```

voltmx.nosql.replaceRecords(transactionObject, tableName, columnValuePair, condition)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | The object returned by [voltmx.nosql.openTransaction API](#voltmx.nosql.openTransaction). |
| tableName | The name of the table on which the replace operation is to be applied. |
| columnValuePair | Values of the columns to be replaced.> **_Note:_** The replace columnValuePair must not contain primarykey; otherwise columnValuePair will be ignored even if it is passed. |
| condition | It has two parameters: voltmx.nosql.Condition instance and null.voltmx.nosql.Condition instance: Replaces the records that satisfy the given condition.null: Replaces all records in the table. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject) {
    voltmx.nosql.replaceRecords(
        transactionObject,
        'EMP', {
            Emp_manager: 'updated manager name'
        },
        condition
    ).then(function() {
        //replace records success callback
    }).
    catch (function(errorObject) {
        //replace records error callback
    });
}).then(function(transactionObject) {
    // transaction complete callback
});
```

### Return Values

Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.tableExists</summary>

* * *

Returns the appropriate Boolean value depending if the required table exists or not.

### Syntax

```

voltmx.nosql.tableExists(dbObject, tableName)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| dbObject | The dbObject returned in successcallback of [voltmx.nosql.openDatabase API](#voltmx.nosql.openDatabase) |
| tableName | Name of the table that you want to verify if it exists. |

### Example

```

voltmx.nosql.openDatabase('Company', 1, function(dbObject) {
    //upgrade callback
}).then(function(dbObject) {
    //success callback
    voltmx.nosql.tableExists(dbObject, tableName).then(function(isExists) {
        //tableExists success callback
    }).
    catch(function(errorObject) {
        //tableExists error callback
    });
}).
catch(function(errorObject) {
    //error callback
});
```

### Return Values

Promise.

*   Resolve parameter: true if table exists; else, false
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}

### Platform Availability

*   SPA
*   Desktop Web

* * *

</details>
<details close markdown="block"><summary>voltmx.nosql.updateRecords</summary>

* * *

Updates rows and specific columns that match the provided condition.

### Syntax

```

voltmx.nosql.updateRecords(transactionObject, tableName, columnValuePair, condition)
```

### Input Parameters
 
| Parameter | Description |
| --- | --- |
| transactionObject | The object returned by [voltmx.nosql.openTransaction API](#voltmx.nosql.openTransaction). |
| tableName | The name of the table on which the update operation is to be applied. |
| columnValuePair | Values of the columns to be updated. |
| condition | It has two parameters: voltmx.nosql.Condition instance and null.voltmx.nosql.Condition instance: Updates the records that satisfy the given condition.null: Updates all records in the table. |

### Example

```

voltmx.nosql.openTransaction(dbObject, 'EMP', voltmx.nosql.READ_WRITE, function(transactionObject) {
    voltmx.nosql.updateRecords(
        transactionObject,
        'EMP', {
            Emp_manager: 'updated manager name'
        },
        condition
    ).then(function() {
        //update records success callback
    }).
    catch (function(errorObject) {
        //update records error callback
    });
}).then(function(transactionObject) {
    // transaction complete callback
});
```

### Return Values

Promise.

*   Resolve parameter: none
    
*   Reject parameter: errorObject {errorMsg:" ", errorCode: " "}
    

### Platform Availability

*   SPA
*   Desktop Web

* * *
</details>

![](resources/prettify/onload.png)
