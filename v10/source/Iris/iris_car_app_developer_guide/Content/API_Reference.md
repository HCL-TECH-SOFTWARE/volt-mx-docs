<!-- ## API Reference -->

**Namespaces and their uses**

* **voltmx.auto API** \- Namespace for API’s.  
* **voltmx.auto.CarForm** \- Namespace for the car app forms.  
* **voltmx.auto.\*Template** \- Namespace for the templates.



## Other supported helper namespaces

Volt MX supports other namespaces for Car Application development. 
Use the APIs provided in these namespaces to access CarApp related data from the device data base, download CarApp related data from a remote server, and more.

* [voltmx.net](./../../iris_api_dev_guide/content/voltmx.net_functions.md)  
* [voltmx.crypto](./../../iris_api_dev_guide/content/voltmx.crypto_functions.md)  
* [voltmx.keychain](./../../iris_api_dev_guide/content/voltmx.keychain_functions.md)  
* [voltmx.db](./../../iris_api_dev_guide/content/voltmx.db_functions.md)  
* [voltmx.ds](./../../iris_api_dev_guide/content/voltmx.ds_functions.md)  
* [voltmx.os](./../../iris_api_dev_guide/content/voltmx.os_functions.md)  
* [voltmx.application](./../../iris_api_dev_guide/content/voltmx.application_functions.md)  
* [voltmx.location](./../../iris_api_dev_guide/content/voltmx.location_functions.md)

> **_Note_**: Only the voltmx.application namespace supports permission related API’s. It is not recommended to use other APIs from that namespace. 

## voltmx.auto API’s


<details close markdown="block"><summary>voltmx.auto.setApplicationCallbacks</summary>
* * *
This API is used to register and manage various lifecycle events for a car application. 

### Syntax  

```javascript
voltmx.auto.setApplicationCallbacks({
  onCarAppInit,
  onCarAppDataUpdated,
  onCarAppForeground,
  onCarAppBackground,
  onCarAppTerminate
});
```  

### Input Parameters

| Parameter | Description |
| --- | --- |
| onCarAppInit | Mandatory callback function parameter which gets executed when the user taps the application icon on their device. CarPlay CarForm `show` needs to be invoked where `carform1` is the CarForm identifier, which is defined globally. |
| onCarAppDataUpdated | Optional callback function gets executed when data within the application is modified by the phone app. Accepts a `data` parameter. |
| onCarAppForeground | Optional callback function gets executed when the application transitions from the background to the foreground. |
| onCarAppBackground | Optional callback function gets executed when the application moves from the foreground to the background. |
| onCarAppTerminate | Optional callback function gets executed when the system terminates the application.|


### Example

```javascript
voltmx.auto.setApplicationCallbacks({
  "onCarAppInit": function() {
    /* CarPlay CarForm show needs to be invoked where carform1 is CarForm identifier and which is defined globally.*/
    carform1.show()
  },
  "onCarAppDataUpdated": function onUpdate(data) {},
  "onCarAppForeground": function() {},
  "onCarAppBackground": function() {},
  "onCarAppTerminate": function() {}
});
```  

### Return Values  
None

### Platform Availability  
*   Android
*   iOS


> **_Note_**: The events are described in the [CarApp Integration Guide](./Introduction.md) topic.  

* * *
</details>






<details close markdown="block"><summary>voltmx.auto.setUncaughtExceptionHandler</summary>
* * *
Exceptions that occur during runtime are usually handled by using try/catch blocks. This API is implemented for exceptions that are not handled using try/catch blocks.  

### Syntax  

```javascript
voltmx.auto.setUncaughtExceptionHandler(uncaughtExceptionHandler);
``` 



### Input Parameters

| Parameter | Description |
| --- | --- |
| uncaughtExceptionHandler | Mandatory Call back function that is called when an uncaught exception is raised by JavaScript engine. |  


### Example  


```javascript

function uncaughtExceptionHandler(exceptionObject) {
    // Converting exception object into a readable string
    var exceptionString = "";

    if ("sourceURL" in exceptionObject) {
        exceptionString += exceptionObject.sourceURL;
    }
    if ("line" in exceptionObject) {
        exceptionString += " line # " + exceptionObject.line;
    }
    if ("message" in exceptionObject) {
        exceptionString += " : " + exceptionObject.message;
    }

    //Logging the exception string to console
    voltmx.print("Unhandled Exception:" + exceptionString);
}

voltmx.auto.setUncaughtExceptionHandler(uncaughtExceptionHandler);
```

### Return Values  
None

### Platform Availability  
*   Android
*   iOS

* * *
</details>




<details close markdown="block"><summary>voltmx.auto.invokeCarApp</summary>
* * *  

This API is used to invoke native call and map applications in car systems. The specific protocol to be followed depends on whether the system is Android or Apple. If the invocation is successful the success callback is executed; otherwise the failure callback is executed.  

### Syntax  

```javascript
voltmx.auto.invokeCarApp(URL,onSuccessCallback,onFailureCallback);
```  



### Input Parameters

| Parameter | Description |
| --- | --- |
| URL | Mandatory supported URL schemes for invoking dial and maps applications based on the platform. Refer to the note section for valid URL schemes on Android and iOS. |  
| onSuccessCallback | Mandatory callback function which gets triggered if the application invoked successfully with the given URL scheme.  | 
| onFailureCallback | Mandatory callback function which gets triggered if the system fails to invoke the CarApplication with the URL scheme. The function takes an input parameter errorMessage as String. | 


> **_Note_**: tel:// & maps:// are supported URL schemes for invoking dial and maps applications in Apple supported car systems.

For Android, below are the supported URL schemes:  
To invoke Maps application  
  1\) "geo:12.345,14.8767" for a latitude, longitude pair.  
  2\) "geo:0,0?q=123+Main+St,+Seattle,+WA+98101" for an address.  
  3\) "geo:0,0?q=a+place+name" for a place to search for.  
To invoke dialer application, use a URL like this.  
“tel:123456”  
where 123456 is the number to dial.

### Example

```javascript

// For invoking dialer application to make a call on iOS
voltmx.auto.invokeCarApp("tel://+1234567890",onSuccessCallback,onFailureCallback);

/* For invoking maps application on iOS */
voltmx.auto.invokeCarApp("maps://?daddr=37.7749,-122.4194",onSuccessCallback,onFailureCallback);

//Android example
//Dial number
voltmx.auto.invokeCarApp("tel:1234567890",onSuccessCallback,onFailureCallback);
//Invoke map application
voltmx.auto.invokeCarApp("geo:12.345,14.8767",onSuccessCallback,onFailureCallback);


function onSuccessCallback(){
voltmx.print();
}

function onFailureCallback(exceptionMsg){
voltmx.print("error occured: "+exceptionMsg);
}
```

### Return Values  
None

### Platform Availability  
*   Android
*   iOS


* * *
</details>


<details close markdown="block"><summary>voltmx.application.updateCarAppData</summary>
* * *

This API is used to update the car application with data changes from the phone application.   
The phone application calls this API by sending a dictionary.  

### Syntax  

```javascript
voltmx.application.updateCarAppDatar(jsObject);
```  

### Input Parameters

| Parameter | Description |
| --- | --- |
| jsObject | This contains the updated data. |  


### Example


```javascript
voltmx.application.updateCarAppData({
    "key" : {// key is an example, can be anything and value is of type Dictionary
     }	
});
```  

### Return Values  
None

### Platform Availability  
*   Android
*   iOS

* * *  
</details>








