                           

Native Function API Developer's Guide:[Native Function APIs for iOS](native_function_apis_for_ios.md) > Using the Native Function API for iOS

Using the Native Function API for iOS
=====================================

Introduction
------------

The Native Function APIs for iOS comprise two calls that allow access to any native iOS API from your JavaScript code.

*   [objc.import](#objcimport) allows you to import most iOS native classes into JavaScript.
*   [objc.newClass](#objcnewclass) enables protocols and classes to be extended so that the iOS framework can invoke user-defined code.

### objc.import();

This API allows you to import any iOS native class into JavaScript. All the APIs, methods, constants, and all members of the native class are accessible. [Static objects](#invoking-static-methods) can be accessed directly from the imported object, while [instance objects](#invoking-instance-methods) require an [instantiated](#creating-instances-using-designated-initializers) object.

To use this API you will follow these general steps:

*   In Iris, add the appropriate frameworks to your project. See: [Add or Import Native Function APIs](../../../Iris/iris_user_guide/Content/AddOrImportNativeFunctionAPIs.md)
*   In JavaScript, import the classes you wish to use using [objc.import](#objcimport).
*   [Instantiate the class](#creating-instances-using-designated-initializers) (Not needed for static methods).
*   Use the objects associated with the class.

### Signature

JavaScript: objc.import (objectiveC\_class\_name)

### Input Parameters

objc.import (objectiveC\_class\_name) - Mandatory

Specifies the native class name including the package name that you want to use in JavaScript.

### Return Values

Returns a JavaScript object

### Platform Availability

Available for iOS.

### JavaScript Example

```
var HKHealthStore = objc.import('HKHealthStore');
```

### Invoking Static Methods

Static methods can be accessed as properties of the JavaScript object returned by objc.import. For example, the static method isHealthDataAvailable from the class HKHealthStore can be invoked using the following syntax:

```
var HKHealthStore = objc.import('HKHealthStore');  
voltmx.print(HKHealthStore.isHealthDataAvailable());
```

For the methods that take one or more arguments in JavaScript, refer to [Method name convention.](#method-name-convention)

For the methods that are supported, refer to [Type support](#type-support).

### Creating Instances Using Designated Initializers

In Objective-C, instances of a class are created by using the alloc/init combination or convenience constructors. The alloc and convenience constructors are static methods that can be invoked as described in the [previous](#invoking-static-methods) section. Invoking theinit method is described in the [next](#invoking-instance-methods) section.

Instances created either way are JavaScript objects that wrap the underlying Objective-C objects.

```
var HKUnit = objc.import('HKUnit');  
var unit = HKUnit.unitFromString('count');  

```

### Invoking Instance Methods

Instance methods of an Objective-C object are available as properties of the JavaScript object that represents the Objective-C object. For example, the instance method reciprocalUnit of HKUnit can be invoked as:

```
var HKUnit = objc.import('HKUnit');  
var unit = HKUnit.unitFromString('count');  
var runit = unit.reciprocalUnit();  

```

### Accessing Properties of Objective-C Objects

The properties of an Objective-C object are available as properties of the JavaScript object that wraps the Objective-C object.

> **_Note:_** Objective-C accessor methods are not exposed. You can access the properties using JS property notation.

Prefixed properties:

Any property with type selector/class/block must be prefixed by js.

```
var UIDevice = objc.import("UIDevice");
var currentDevice = UIDevice.currentDevice();

// does not work using accessor methods:
//currentDevice.setBatteryMonitoringEnabled(true);

// works using js property notation:
currentDevice.batteryMonitoringEnabled = true;
var batteryLevel = currentDevice.batteryLevel;

```

### Constants

Both enums and global constants are available as JavaScript globals.

Example 1:

The enum value KHMetricPrefixPico of the enum type HKMetricPrefix is available as HKMetricPrefixPico in JavaScript global space.

```
//prints 1  
voltmx.print(HKMetricPrefixPico)  

```

Example 2:

The global constant HKCorrelationTypeIdentifierFood is available as the JavaScript global value of type string with the same name.

### Method Name Convention

A selector that takes one or more arguments can be invoked by using a JavaScript property name that is arrived at by removing all colons and capitalizing any lowercase letter that follows a colon. For example, doFoo:withBar: becomes doFooWithBar.

Prefixed methods:

*   new, copy, and mutableCopy must be invoked as jsnew, jscopy, and jsmutableCopy, respectively.
*   Any instance method that starts with init and accepts no parameters mu7st be prefixed by js.
*   Any method that returns a selector and accepts no parameters has to be prefixed by js.

### Type Support

Type conversions for Objective-C to JavaScript  

| Objective-C Type | JavaScript Type |
| --- | --- |
| nil/NULL | undefined |
| NSNull | null |
| NSString | string |
| NSNumber | number, boolean |
| NSDictionary | Object object |
| NSArray | Array object |
| NSDate | Date object |
| NSBlock | Function object |
| id | Wrapper object |
| Class | Constructor object |

An Objective-C method is available only if the parameter type and return type belong to any of the following:  
  

*   Primitive types such as char, int, and short are represented as JavaScript number.
*   Objective-C objects are represented as JavaScript objects.
*   Structures CGPoint, CGRect, CGSize, and NSRange are represented as JavaScript objects with the struct field names as properties.
```
//For example  
    CGPoint p={0.0,0.0} is represented by a JavaScript object {x: 0.0, y: 0.0}
```
*   Any other structures that have fields of types in a, b, and c, then nested structures become nested objects.
```
//For example  
    CGRect rect={ {0.0,0.0},{1.0,2.0} } is represented by a JavaScript object {origin:{x: 0.0, y: 0.0}, size:{width:1.0, height:2.0}}
```
*   Opaque types (for example, CFStringRef:) are represented as JavaScript objects.
*   Selectors are represented as strings. That is the value returned by NSStringFromSelector. If a method accepts a selector, then pass a string. If a method returns a selector, a string is returned.
*   Classes are represented as JavaScript objects as returned by objc.import.
*   Blocks are represented as JavaScript functions.
    *   Pass a JavaScript function to a method that accepts a block as a parameter, The JavaScript function gets invoked when the block is invoked.
    *   If a method returns a block, a JavaScript function is returned.
    *   Only blocks with parameter types and return type as described in above are supported. The exceptions are:
        *   Blocks that return another block are not supported.
        *   Parameter types bool\* and id\* are supported. When the JavaScript function gets invoked, a JavaScript object is passed in place of these parameters. To set a value to the parameter, set the property 'contents' of the JavaScript object that the JavaScript function receives.
*   When a method accepts NSError\*\* as a parameter, pass a JavaScript object. Upon return, this object will have the property 'error' set if there was an error.

The same types apply for Objective-C properties.

Here is a practical example of how objects structures and selectors are converted and how they are used.

This code in Objective-C can be converted using the Native Function API for iOS as shown below.

In Objective-C:

```
@implementation ViewController

- (void) viewDidLoad { [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
	UISegmentedControl * control = [self createSegmentedControl];
	[self.view addSubview: control];
}

- (void) didReceiveMemoryWarning { [super didReceiveMemoryWarning];
	// Dispose of any resources that can be recreated.
}

- (UISegmentedControl * ) createSegmentedControl {
	UISegmentedControl * control = [[UISegmentedControl alloc] init];
	UIColor * color = [[UIColor alloc] initWithRed: 255 green: 255 blue: 255 alpha: 0];
	[control setFrame: CGRectMake(20, 20, 300, 25)];
	[control insertSegmentWithTitle: @"Test 1"
	atIndex: 0 animated: NO];
	[control insertSegmentWithTitle: @"Test 2"
	atIndex: 1 animated: NO];
	[control insertSegmentWithTitle: @"Test 3"
	atIndex: 2 animated: NO];

	//[control setBackgroundColor:color];
	control.backgroundColor = color;

	[control addTarget: self action: @selector(onClickForSegmentedControl: forEvent: ) forControlEvents: UIControlEventAllEvents];
	return control;
}

- (void) onClickForSegmentedControl: (UISegmentedControl * ) sender forEvent: (UIEvent * ) event {
	int index = sender.selectedSegmentIndex;
	NSLog(@"Selected Index : %@", [NSNumber numberWithInt: index]);
}@end
```

In Volt MX JavaScript:

```
function addAndShowSegmentedUIView(parentView) {
    var UISegmentedControl = objc.import("UISegmentedControl");
    var UIColor = objc.import("UIColor");

    //Creating a color object requires to call a static m
    var color = UIColor.alloc().initWithRedGreenBlueAlpha(255, 255, 255, 1);
    var control = UISegmentedControl.alloc().jsinit();
    control.frame = {
        "x": 10,
        "y": 10,
        "width": 150,
        "height": 25
    };
    control.backgroundColor = color
    control.insertSegmentWithTitleAtIndexAnimated("Test 1", 0, false);
    control.insertSegmentWithTitleAtIndexAnimated("Test 2", 1, false);
    control.insertSegmentWithTitleAtIndexAnimated("Test 3", 2, false);

    var handlerInstance = EventHandler.alloc().jsinit();

    //Note the ":" after the name onClick. As per the apple doc for selector this ensures that 
    // sender of the event is sent as the first argument to the selector function.
    control.addTargetActionForControlEvents(handlerInstance, "onClick:", UIControlEventAllEvents);
    parentView.addSubview(control);

}
var EventHandler = objc.newClass("EventHandler", "NSObject", null, {
    "onClick": function(sender) {
        alert("Clicked : " + sender.selectedSegmentIndex);
    }
});
```

### Memory Management

Memory management occurs automatically. You need not invoke release/retain/autorelease.

### NSError

For API calls which expect an NSError\* as input, it is necessary that we pass a JavaScript object as input when making the call using the Native Function API.

If an error occurs, this JavaScript object will be populated with the key ‘error’ that will then reference the NSError object populated by the Objective-C run-time. The following example shows how to do this, and how to use the returned error value.

```
var NSURL = objc.import("NSURL");
var NSString = objc.import("NSString");

var url = NSURL.URLWithString("httpsssee://www.googl.co.i"); // an erroneous URL to generate an error
var error = {}; // a place holder object for storing the error info.
var content = NSString.stringWithContentsOfURLEncodingError(url, NSASCIIStringEncoding, error);

alert("Message : " + error.error.localizedDescription + " Code: "); // error.error. An error key is populated within the placeholder object

```

### objc.newClass

> **_Note:_** This API can only be used from the main thread and JavaScript thread. Do not call it from a worker thread.

To create a class, use this API.

At several places in iOS SDK, a protocol needs to be implemented or an abstract class needs to be extended, so that the iOS framework can invoke a user-defined code. For example, asynchronous APIs expect a callback method that gets invoked with the result. The purpose of this API is to enable such calling. It is not designed to define arbitrary new Objective-C classes.

Only the instance methods with [types](#type-support) as described can be overridden. The exceptions are:

*   Methods that return blocks cannot be implemented.
*   Parameter types bool\* and id\* are supported. While invoking a JavaScript function that implements an Objective-C method that takes a parameter of these types, a JavaScript object is passed. To set a value to the parameter, set the property contents of the JavaScript object passed.

From JavaScript side, the resulting class behaves like its base class:

*   Instances of the class can be created by calling a base class's constructors.
*   Instances of the class can be acted on as if they are the base class's instances.

In addition, instances also have access to a super method when a method is overridden. The super method can be invoked by prefixing super to the method name.

Inside a JavaScript function that defines or overrides a native instance method, the instance can be accessed by "this".

### Signature

JavaScript: objc.newClass(native\_class\_name, base\_class\_name, interface\_name, interface\_name\_to\_override)

### Input Parameters

native\_class\_name \[String\] - Mandatory

Specifies the native class name including the package name.

base\_class\_name \[String\] - Mandatory

Specifies the class name from which the new class is extended or inherited.

interface\_name \[String\] - Mandatory

Specifies the interface name that can be implemented by the new class.

interface\_name\_to\_override \[String\] - Mandatory

Specifies the interface name that must be overridden or implemented by the new class.

### Return Values

Returns the class that is extended.

### Platform Availability

Available on iOS platform.

### JavaScript Example

```
//Sample code  
var ViewController = objc.newClass('ViewController', 'UIViewController', ['PKPaymentAuthorizationViewControllerDelegate'], {	paymentAuthorizationViewControllerDidAuthorizePaymentCompletion: function(controller, payment, completion) {},								paymentAuthorizationViewControllerDidFinish: function(controller) {},paymentAuthorizationViewControllerDidSelectShippingMethodCompletion: function(controller, shippingmethod, completion) {}
});
```

> **_Note:_** A handle to the JavaScript object has to be retained to be able to add properties that represents an instance of a class created using objc.newClass API. If the handle is not retained, you will lose the properties that are added as part of callback functions.

### Variadic Methods

Support for variadic methods is limited. You can pass a maximum of 10 arguments.

### Auto-Converted Types

The instances of NSNull, NSString, NSNumber, NSDictionary, NSArray, and NSDate and their derivatives are not available in JavaScript because they are automatically converted to and from null, string, number, object, array, and date JavaScript types.

For example, an Objective-C method, (void) doFooWithId: (NSString\*) id data: (NSArray\*)data must be called in JavaScript as doFooWithId("foo", \[1,2,3\]);

> **_Note:_** A "NSNull" in Objective-C is mapped to a "null" in JavaScript, and "nil" in Objective-C is mapped to "undefined in JavaScript."

### Zones

Zones are not available.

### Threads

In an application developed using Volt MX Iris, most of the JavaScript execution happens on a separate thread (referred to as JavaScript thread). When you need to invoke a Java API that can only be called from the main thread, use the API [voltmx.runOnMainThread](../../../Iris/iris_api_dev_guide/content/voltmx_functions.md#voltmx.run). To resume execution back on JavaScript thread, use the API[voltmx.runOnWorkerThread.](../../../Iris/iris_api_dev_guide/content/voltmx_functions.md#voltmx.run2)

For more information on Threading APIs, [click here](#Threadin).

### Presenting viewController

If you want to present your own viewController, you have to present it as a modal View Controller on top of the existing rootView Controller. The current rootViewController can be accessed as UIApplication.sharedApplication().keyWindow.rootViewController.

For example, if "vc" is the new viewController, you can use the following methods to present and dismiss the view controllers.

```
//To display the new UI viewController  
UIApplication.sharedApplication().keyWindow.rootViewController.  
presentViewControllerAnimatedCompletion(vc, true, null);
```
```
//To dismiss the new UI viewController  
UIApplication.sharedApplication().keyWindow.rootViewController.  
dismissViewControllerAnimatedCompletion(true, null);
```
