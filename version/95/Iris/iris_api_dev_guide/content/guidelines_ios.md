                            

iOS Guidelines for Using Native Function APIs in Volt MX Iris Classic
========================================================================

To use Native Function APIs in Volt MX Iris Classic, follow these guidelines:

  
| Category | Description |
| --- | --- |
| Accessing classes | To access a class, use the following API:
objc.import
-----------

This API allows you to import any iOS native class into JavaScript. You must use the keyword "new" to instantiate (create an object) an instance of a JavaScript class. All the APIs, methods, constants, and all members of the native class are directly accessible with the instantiated object.

### Signature

JavaScript: objc.import (objectiveC\_class\_name)

### Input Parameters

objc.import (objectiveC\_class\_name) - Mandatory Specifies the native class name including the package name that you want to use in JavaScript.

### Return Values

Returns a JavaScript object

### Platform Availability

Available on iOS platform.

### JavaScript Example

//Sample codevar HKHealthStore = objc.import('HKHealthStore'); |
| Invoking static methods | Static methods can be accessed as properties of the JavaScript object returned by the API objc.import. For example, the static method isHealthDataAvailable of the class HKHealthStore can be invoked using the following syntax:var HKHealthStore = objc.import('HKHealthStore');voltmx.print(HKHealthStore.isHealthDataAvailable()); For the methods that take one or more arguments in JavaScript, refer to [Method name convention.](#Method_name_convention) For the methods that are supported, refer to [Type support](#Type_support). |
| Creating instances | In Objective-C, instances of a class are created by using the alloc/init combination or convenience constructors. The alloc and convenience constructors are static methods that can be invoked as described in the [previous](#Invoking_static_methods) section. Invoking init method is described in the [next](#Invoking_instance_methods) section. Instances created either way are JavaScript objects that wrap the underlying Objective-C objects.var HKUnit = objc.import('HKUnit');var unit = HKUnit.unitFromString('count'); |
| Invoking instance methods | Instance methods of an Objective-C object are available as properties of the JavaScript object that represents the Objective-C object. For example, the instance method reciprocalUnit of HKUnit can be invoked as: var HKUnit = objc.import('HKUnit');var unit = HKUnit.unitFromString('count');var runit = unit.reciprocalUnit(); |
| Accessing properties of Objective-C objects | The properties of an Objective-C object are available as properties of the JavaScript object that wraps the Objective-C object. > **_Note:_** OBjective-C accessor methods are not exposed. You can access the properties using JS property notation. Prefixed properties: Any property with type selector/class/block must be prefixed by js. |
| Constants | Both enums and global constants are available as JavaScript globals. Example 1: The enum value KHMetricPrefixPico of the enum type HKMetricPrefix is available as HKMetricPrefixPico in JavaScript global space.//prints 1voltmx.print(HKMetricPrefixPico) Example 2: The global constant HKCorrelationTypeIdentifierFood is available as the JavaScript global value of type string with the same name. |
| Method name convention | A selector that takes one or more arguments can be invoked by using a JavaScript property name that is arrived at by removing all colons and capitalizing any lowercase letter that follows a colon. For example, doFoo:withBar: becomes doFooWithBar. Prefixed methods: new, copy, and mutableCopy must be invoked as jsnew, jscopy, and jsmutableCopy, respectively. Any instance method that starts with init and accepts no parameters must be prefixed by js. Any method that returns a selector and accepts no parameters has to be prefixed by js. |
| Type support | An Objective-C method is available only if the parameter type and return type belong to any of the following:Primitive types such as char, int, and short are represented as JavaScript number. Objective-C objects are represented as JavaScript objects.Structures CGPoint, CGRect, CGSize, and NSRange are represented as JavaScript objects with the struct field names as properties. //For exampleCGPoint p={0.0,0.0} is represented by a JavaScript object {x: 0.0, y: 0.0}Any other structures that have fields of types in a, b, and c, then nested structures become nested objects.//For exampleCGRect rect={ {0.0,0.0},{1.0,2.0} } is represented by a JavaScript object {origin:{x: 0.0, y: 0.0}, size:{width:1.0, height:2.0}}Opaque types (for example, CFStringRef:) are represented as JavaScript objects.Selectors are represented as strings. That is the value returned by NSStringFromSelector. If a method accepts a selector, then pass a string. If a method returns a selector, a string is returned.Classes are represented as JavaScript objects as returned by objc.import API.Blocks are represented as JavaScript functions.Pass a JavaScript function to a method that accepts a block as a parameter, The JavaScript function gets invoked when the block is invoked.If a method returns a block, a JavaScript function is returned.Only blocks with parameter types and return type as described in above are supported. The exceptions are:Blocks that return another block are not supported.Parameter types bool\* and id\* are supported. When the JavaScript function gets invoked, a JavaScript object is passed in place of these parameters. To set a value to the parameter, set the property 'contents' of the JavaScript object that the JavaScript function receives.When a method accepts NSError\*\* as a parameter, pass a JavaScript object. Upon return, this object will have the property 'error' set if there was an error.The same types apply for Objective-C properties. |
| Memory management | Memory management occurs automatically. You need not invoke release/retain/autorelease. |
| Creating classes | To create a class, use the following API: > **_Note:_** This API can only be used from the main thread and JavaScript thread. Do not call it from a worker thread.

objc.newClass
-------------

At several places in iOS SDK, a protocol needs to be implemented or an abstract class needs to be extended, so that the iOS framework can invoke a user-defined code. For example, asynchronous APIs expect a callback method that gets invoked with the result. The purpose of this API is to enable such calling. It is not designed to define arbitrary new Objective-C classes. Only the instance methods with [types](#Type_support) as described can be overridden. The exceptions are: Methods that return blocks cannot be implemented. Parameter types bool\* and id\* are supported. While invoking a JavaScript function that implements an Objective-C method that takes a parameter of these types, a JavaScript object is passed. To set a value to the parameter, set the property contents of the JavaScript object passed. From JavaScript side, the resulting class behaves like its base class: Instances of the class can be created by calling a base class's constructors. Instances of the class can be acted on as if they are the base class's instances. In addition, instances also have access to a super method when a method is overridden. The super method can be invoked by prefixing super to the method name. Inside a JavaScript function that defines or overrides a native instance method, the instance can be accessed by "this".

### Signature

JavaScript: objc.newClass(native\_class\_name, base\_class\_name, interface\_name, interface\_name\_to\_override)

### Input Parameters

native\_class\_name \[String\] - Mandatory Specifies the native class name including the package name. base\_class\_name \[String\] - Mandatory Specifies the class name from which the new class is extended or inherited. interface\_name \[String\] - Mandatory Specifies the interface name that can be implemented by the new class. interface\_name\_to\_override \[String\] - Mandatory Specifies the interface name that must be overridden or implemented by the new class.

### Return Values

Returns the class that is extended.

### Platform Availability

Available on iOS platform.

### JavaScript Example

//Sample codevar ViewController = objc.newClass('ViewController', 'UIViewController', \['PKPaymentAuthorizationViewControllerDelegate'\], { paymentAuthorizationViewControllerDidAuthorizePaymentCompletion: function(controller, payment, completion) {}, paymentAuthorizationViewControllerDidFinish: function(controller) {}, paymentAuthorizationViewControllerDidSelectShippingMethodCompletion: function(controller, shippingmethod, completion) {} }); > **_Note:_**  A handle to the JavaScript object has to be retained to be able to add properties, that represents an instance of a class created using objc.newClass API. If the handle is not retained, you will lose the properties that are added as part of callback functions. |
| Variadic methods | Support for variadic methods is limited. You can pass a maximum of 10 arguments. |
| Auto-converted types | The instances of NSNull, NSString, NSNumber, NSDictionary, NSArray, and NSDate and their derivatives are not available in JavaScript because they are automatically converted to and from null, string, number, object, array, and date JavaScript types. For example, an Objective-C method, (void) doFooWithId: (NSString\*) id data: (NSArray\*)data must be called in JavaScript as doFooWithId("foo", \[1,2,3\]); > **_Note:_** A "NSNull" in Objective-C is mapped to a "null" in JavaScript, and "nil" in Objective-C is mapped to "undefined in JavaScript." |
| Zones | The zones are not available. |
| Threads | In an application developed using Volt MX Iris, most of the JavaScript execution happens on a separate thread (referred to as JavaScript thread). When you need to invoke a Java API that can only be called from the main thread, use the API [voltmx.runOnMainThread](voltmx_functions.md#voltmx.run). To resume execution back on JavaScript thread, use the API[voltmx.runOnWorkerThread](voltmx_functions.md#voltmx.run2). For more information on Threading APIs, [click here](threading_apis.md#Threadin). |
| Presenting viewController | If you want to present your own viewController, you have to present it as a modal View Controller on top of the existing rootView Controller. The current rootViewController can be accessed as UIApplication.sharedApplication().keyWindow.rootViewController. For example, if "vc" is the new viewController, you can use the following methods to present and dismiss the view controllers.//To display the new UI viewControllerUIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(vc, true, null);//To dismiss the new UI viewControllerUIApplication.sharedApplication().keyWindow.rootViewController.dismissViewControllerAnimatedCompletion(true, null); |

![](resources/prettify/onload.png)
