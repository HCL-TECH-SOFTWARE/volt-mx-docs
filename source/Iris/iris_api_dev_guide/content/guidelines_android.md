                            

Android Guidelines for Using Native Function APIs in Volt MX Iris Classic
===============================================================================

To use the Native Function APIs in Iris Classic, follow these guidelines:

  
| Category | Description |
| --- | --- |
| Accessing classes | To access a class, use the following API:
java.import
-----------

This API helps you import any Android native class into JavaScript. You must use the keyword "new" to instantiate (create an object) an instance of a JavaScript class. All the APIs, methods, constants, and all members of the native class are directly accessible with the instantiated object.

### Signature

JavaScript: java.import (native\_class\_name)

### Input Parameters

native\_class\_name \[String\] - Mandatory Specifies the native class name including the package name that you want to use in JavaScript.

### Return Values

Returns a JavaScript constructor function that can be used to instantiate the class. The constructor function also has properties that map to the following:

Static fields: Any static fields that the Java class exposes. Static methods: Any static methods that the Java class exposes. Inner classes: Any inner classes that the Java class defines.

### Platform Availability

Available on Android platform.

### JavaScript Example

//Sample codevar Thread = java.import('java.lang.Thread'); |
| Instantiating Java classes | The instances of a Java class can be created with the keyword "new" on the constructor function returned by the API java.import. For example, Example 1var ArrayList = java.import('java.util.ArrayList');var alist = new ArrayList(); **Example 2** var ArrayList = java.import('java.util.ArrayList'); var a = new ArrayList(); a.add(1); a.add(2); var alist = java.newInstance('java.util.ArrayList', a); alert(alist.size()); If the class has overloaded constructor methods, each of them can be called with the keyword "new" by passing the correct parameter types. Defining a new method or a new class (which contains new methods) that is not in native, is not supported. Alternatively, the API java.newInstance can be used to instantiate a Java class by passing the instance name as its first argument and the arguments to the constructor method enclosed in a JavaScript array as the second argument.java.newInstance('class\_name', \[arg1, arg2, ...\]); |
| Invoking static methods | Static methods can be accessed as properties of the constructor function returned by the API java.import. Static methods can be invoked using the following syntax:var c = java.import('...');c.static\_method(arg1, arg2, ...); Alternatively, the API java.callStaticMethod can be used as follows:java.callStaticMethod('class\_name', 'static\_method', \[arg1, arg2, ...\]); |
| Accessing static fields | Static fields can be accessed as properties of the constructor function.c.static\_field = 10;var f = c.static\_field; Alternatively, you can use the following APIs: The API java.getStaticFieldValue can be used to retrieve a static field by passing the class name as the first argument and the field name as the second argument.java.getStaticFieldValue('class\_name', 'field\_name') The API java.setStaticFieldValue can be used to set a static field by passing the class name as the first argument, and the field name as second argument and the value to set as last argument.java.setStaticFieldValue('class\_name', 'field\_name', value) |
| Accessing inner classes defined by a Java class. | When a Java class defines inner classes, these classes can be accessed as properties of the constructor function that java.import returns. The value returned when such properties are accessed is again another JavaScript constructor function.var c = java.import('class\_name');var ic = c.ic;var i = new ic(arg1, arg2, ...); > **_Note:_** It is possible for a Java class to have a static field, a static method, and an inner class with the same name. In such case, the inner class gets highest priority. Between the field and method, field gets higher priority. When a method is unavailable as a property, then use the API java.callStaticMethod to access the static method. When a field is unavailable as a property, then use the API java.setStaticField or java.getStaticField.   |
| Using Java objects | The value returned by calling new on the constructor function returned by java.import is a JavaScript object that represents the underlying Java object. It has properties that represent the following:

Instance methods of the object. Instance fields of the object.

 |
| Invoking instance methods | You can invoke instance methods as follows:var c = java.import('class\_name');var i = new c(arg1, arg2, ...);i.instance\_method(); Alternatively, the API java.callMethod can be used as follows:java.callMethod(i, 'instance\_method',\[arg1,arg2,....\]); |
| Accessing instance fields | You can access the instance fields as follows:var if = i.instance\_field;i.instance\_field = 'abc'; > **_Note:_** In Java a class can have an instance method and instance field with same name. Fields get priority over method. Therefore when a method is shadowed by a field, the method can be invoked using java.callMethod. |
| Types | Java to JavaScript When Java returns a value to JavaScript, or passes a value to a callback, Java values are converted to JavaScript values, as follows: null -> null void -> undefined boolean -> boolean String -> string byte -> Byte object long -> Long object int -> Integer object short -> Short object double -> Double object float -> Float object Java arrays are converted to JavaScript arrays with individual elements converted, as above. All other Java objects are wrapped in JavaScript objects. These objects behave as described in [Using Java objects](#Using_Java_objects). JavaScript to Java When invoking Java methods, JavaScript values passed are converted to Java values, as below: null, undefined -> null string -> String object int -> Integer object number - >Double object boolean -> Boolean object JavaScript objects that represent Java objects -> Java objects All other JavaScript Objects - > null JavaScript arrays are converted to Java object arrays with individual elements converted as above. When a Java method parameter type is byte, short, long, char, and float (that do not have an equivalent representation in JavaScript), the APIs java.newByte, java.newShort, java.newLong, java.newChar, and java.newFloat can be used to create correct type. Each of these APIs accepts a JavaScript number as argument.var b = java.newByte (10); When a Java method parameter type is an array, the API java.newArray can be used to create a Java array. The first argument to java.newArray can be 'byte', 'char', 'short', 'double', 'int', 'boolean' or a class name. The second argument to java.newArray is a JavaScript array with individual elements that belong to the type described by the first argument.var byteArray = java.newArray(‘byte’, \[ java.newByte(1), java.newByte(2), java.newByte(3) \]);   |
| Exceptions | When Java throws an exception while performing any of the following operations, an error is thrown in JavaScript. The message property of the error object contains the Java exception in its entirety - exception type, exception message, and stack trace. Import a Java class Create instances of a class Invoke static methods Get/Set static fields (including inner classes) Invoke instance methods Get/Set instance fields |
| Creating classes | To create a class, use the following API:

java.newClass
-------------

This API allows you to extend or implement any Android native, Java class, or interface. > **_Note:_** This API can only be used from the main thread and JavaScript thread. Do not call it from a worker thread.

### Signature

JavaScript: java.newClass(native\_class\_name)

### Input Parameters

native\_class\_name \[String\] - Mandatory Specifies the native class name including the package name. base\_class\_name \[String\] - Mandatory Specifies the class name from which the new class is extended or inherited. Interface\_name \[String\] - Mandatory Specifies the interface name that is implemented by the new class. Interface\_name\_to\_override \[String\] - Mandatory Specifies the interface name that must be overridden or implemented by the new class.

### Return Values

Returns the class that is created.

### Platform Availability

Available on Android platform.

### JavaScript Example

//Sample codevar c = java.newClass('MyRunnable', 'java.lang.Object', \[ 'java.lang.Runnable' \], { run: function () { print('hello from thread'); } }); var i = new c(); var Thread = java.import('java.lang.Thread'); var thread = new Thread(i); thread.start(); > **_Note:_** Memory Management: An Instance of a class created using the API java.newClass requires a JavaScript object to operate. This JavaScript object becomes “this” in the JavaScript functions that implement the methods of the class. As such the JavaScript object holds a reference to the Java object (for example, to be able to call super methods) and the Java object holds a reference to the JavaScript object (to be able pass it as “this”), creating a circular reference. Hence it is required to call the API java.unref on an instance of a class created by using java.newClass when the instance is no longer needed. For example, if a class is created to make an HTTP request, when the HTTP request finishes, java.unref needs to be called on “this” in both success and failure callbacks. |
| Other APIs | The following is an API that must be used in Native Function APIs, Classic only:

java.instanceOf
---------------

This API is used to find out if a Java object wrapped in a JavaScript object is an instance of a class.

### Signature

JavaScript: java.instanceOf (firstargument, secondargument)

### Input Parameters

firstargument \[String\] - Mandatory Specifies the JavaScript object. secondargument \[String\] - Mandatory Specifies the class name.

### Return Values

Returns true if the passed Java object is an instance of the class else it returns false.

### Platform Availability

Available on Android platform. |
| Threads | In a Volt MX Iris application, most of a JavaScript execution happens on a separate thread (JavaScript thread). When you need to invoke a Java API that can only be called from the main thread, use the API [voltmx.runOnMainThread](voltmx_functions.md#voltmx.run). To resume execution back on the JavaScript thread, use the API [voltmx.runOnWorkerThread](voltmx_functions.md#voltmx.run2). For more information on Threading APIs, [click here](threading_apis.md#threading-api). |
| Getting Android activity context | The following is a sample code to get the Android activity context:var VoltMXMain = java.import('com.konylabs.android.KonyMain');var context = VoltMXMain.getActivityContext();   |
| Lifecycle events | The Volt MX Iris Android UI framework is based on a single Activity model, and all the application forms are rendered in the same VoltMXMain activity. You need to be notified about VoltMXMain activity life cycle events in Native Android Implementation and Volt MX Foundry APIs. The Volt MX Iris Android platform helps you register for VoltMXMain activity life cycle events using the following steps:

Create a class to override the android life cycle methods, by using the [java.newClass](#java-newclass) API. The Volt MX Iris Android platform helps you register for VoltMXMain activity life cycle events by using the following API: VoltMXMain.addActivityLifeCycleListener(VoltMXActivityLifeCycleListener listener); You can also unregister for Activity life cycle events using following API. VoltMXMain.removeActivityLifeCycleListener(VoltMXActivityLifeCycleListener listener)

For more information on Activity lifecycle events, [click here](http://developer.android.com/reference/android/app/Activity.html). Code:public class MyVoltMXActivityLifeCycleListener extends VoltMXActivityLifeCycleListener { @Overridepublic void onCreate(Bundle savedInstanceState) {}@Overridepublic void onStart() {}@Overridepublic void onRestart() {}@Overridepublic void onResume() {}@Overridepublic void onPause() {}@Overridepublic void onStop() {}@Overridepublic void onDestroy() {}@Overridepublic void onNewIntent(Intent intent) {}@Overridepublic void onActivityResult(int requestCode, int resultCode, Intent data) {}}//Registering listener VoltMXActivityLifeCycleListener listener = new MyVoltMXActivityLifeCycleListener(); VoltMXMain.addActivityLifeCycleListener(listener); //Unregistering listener when not needed VoltMXMain.removeActivityLifeCycleListener(listener); NFI implementation of listening to LifeCycle Events:var cls = java.newClass("MyVoltMXActivityLifeCycleListener", "com.konylabs.ffi.KonyActivityLifeCycleListener", \[\], { onCreate: function(savedInstanceState) { voltmx.print("onCreate"); }, onStart: function() { voltmx.print("onStart"); }, onStop: function() { voltmx.print("onStop"); }, onPause: function() { voltmx.print("onPause"); }, /\* onPause: function () { voltmx.print("onPause"); }.bind(this), // “this” usually refers to a native Java class this. Incase , you want to get current Javascript context(this), you can bind that using bind(this). \*/ onResume: function() { voltmx.print("onResume"); }, onDestroy: function() { voltmx.print("onDestroy"); } }); //Registering listener listener = new cls(); VoltMXMain = java.import("com.konylabs.android.KonyMain"); //Registering listener VoltMXMain.addActivityLifeCycleListener(listener); /\* //Unregistering listener when not needed VoltMXMain.removeActivityLifeCycleListener(listener); \*/ |

![](resources/prettify/onload.png)
