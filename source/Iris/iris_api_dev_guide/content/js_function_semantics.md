                               

JavaScript Function Semantics
=============================

All the functions that Volt MX API accepts and returns should be valid JavaScript Function with all the semantics with the exceptions mentioned in the section.

This section covers the following topics:

*   [Nested Functions and Closures](#nested-functions-and-closures)
*   [_length_ function](#function)
*   [The _apply( )_ and _call( )_ Methods](#the-and-methods)

Nested Functions and Closures
-----------------------------

Nested functions and closures are allowed as it is first class feature of the JavaScript language. Every function in JavaScript can be closure and can have nested functions as required.

The following URL will help in the understanding of closures and nested functions:

[http://blog.morrisjohns.com/javascript\_closures\_for\_dummies](http://blog.morrisjohns.com/javascript_closures_for_dummies)

Functions that contain the nested functions can be passed to the Volt MX Iris APIs (as a callback to the events) and the underlying platforms use the ECAM-262 v3 compatible engine to execute the functions. Closures can also be passed to the Volt MX Iris APIs (as a callback to the events.

_length_ function
-----------------

Function should support the _length_ function which indicates the number of arguments that it takes. Following code fragments explain how to access the _length_ property:

```
var f = function(x) {};  
f.length // returns 1
```

`arguments.callee.length` is another way of accessing the expected number of arguments for the function.

```
function checkArgs(x,y,z)  
{  
     var actual_passed_args = arguments.length;  
     var expected_args = arguments.callee.length;  
     if(actual_passed_args != expected_args)  
     {
          //do something  
     }
}
```

The _apply( )_ and _call( )_ Methods
------------------------------------

Every JavaScript function will have _apply_ and _call_ methods which can be used to invoke the functions with arguments dynamically and also passing the context (this) in which the function to be executed. JavaScript

> **_Note:_** Objects that Volt MX API creates and returns can be passed as context or one of the arguments. Functions exposed by the Volt MX Iris APIs cannot be invoked through _apply_ and _call_ methods.

![](resources/prettify/onload.png)
