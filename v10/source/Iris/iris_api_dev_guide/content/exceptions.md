                               

You are here: Appendix: Exceptions

Exceptions
==========

This section covers the following topics:

*   [JavaScript Native Exceptions](#javascript-native-exceptions)
*   [VoltMX Error](#VoltMX)
*   [Error Names and Codes](#error-names-and-codes)
*   [Accessing the Volt MX Error](#accessing-the-volt-mx-error)

JavaScript Native Exceptions:
-----------------------------

JavaScript natively supports the following error objects as per the ECMA specification:

*   Error
*   EvalError
*   RangeError
*   ReferenceError
*   SyntaxError
*   TypeError
*   URIError

> **Error** - A generic error class which is a super class of all other specific error classes in JavaScript. This is the error class that programmers typically use to throw exceptions. All other subclass errors are thrown by the JavaScript engines.
> 
> **EvalError** - This error is thrown when there is illegal use of Eval() function.
> 
> **RangeError** - It is thrown when a numeric value is not in its valid range.
> 
> **ReferenceError** - It is thrown when you attempt to access a variable that does not exist.
> 
> **SyntaxError** - It is thrown when certain functions experience syntax errors like RegExp(), Function(), eval().
> 
> **TypeError** - It is thrown when the value is not of the type required for the context. Accessing a property of null or undefined values can cause this error. Accessing an undefined method for a class can also throw this error. It is also thrown when a function is called with too many arguments specified.
> 
> **URIError** - It is thrown when there is an error in decoding a URI.

As per ECMA spec, all the above error types have two properties:

> **name** - The type of the exception. All subclasses, by default, populate this property with value as its Constructor name, which is TypeError class will populate name with "TypeError".
> 
> **message** - A string describing the exception.

The above native exceptions are thrown by the JavaScript engine in scenarios when trying to access a missing property, or trying to invoke an undefined method.

**Throw Statement:**

In JavaScript, a developer can throw an error using the "throw" statement and the same can be caught using the try/catch block.

For example, to throw an exception, the JavaScript statement is as follows:

```
throw new Error("You have an exception");
```

or you can throw any Primitive type like String, number and boolean:

```
throw "You have an exception";
```

or

```
throw 1001;
```

or even any JavaScript object can be thrown using throw statements:

```
throw new MyError("errorcode", "name", "message");  
//MyError is your own custom JavaScript object, need not be one of the native JavaScript error types.
```

Volt MX  Iris Error
------------------------

As JavaScript _throw_ statements support any JavaScript object which can be caught in the try/catch block, Volt MX Iris APIs leverage this capability to throw the custom error object in case of errors.

in Volt MX Iris APIs throw this custom type of error object in different scenarios, in addition to the above native JavaScript error types.

in Volt MX Iris APIs throw a custom error object (JavaScript Object) called VoltMXError and will have the below properties:

*   **errorCode** - the error code to represent a specific exception type. This is additional and you will not find this in JavaScript Native exceptions.
*   **name** - the name of the error, similar property as in the native Error object. This will be predefined value from the platform with meaningful names representing the error / exception.
    
    For example, "MissingMandatoryParameter" for errorcode 121, "InvalidInputValue" for errorcode 122 etc.
    
*   **message** - the error message, similar property as in native Error object.

As in Volt MX Iris APIs cannot throw any error other than **VoltMXError**, developers are expected to distinguish the errors based on the name and error code properties.

Please note that **VoltMXError** is not a replacement for the error callbacks that are available in the in Volt MX Iris APIs. Any error callbacks present in the API continue to be the same.

### Error Names and Codes

The following are the Error Names with corresponding codes and descriptions:

**Error** - thrown when there is a generic error.

*   100 - invalid type of parameters.
*   101 - invalid number of arguments.
*   102 - invalid input - thrown when the input is invalid based on the context.
*   103 - invalid operation - thrown when the operation is invalid based on the context.
*   104 - not supported error - thrown when the method is not supported at all.
*   105 - index out of range.
*   106 - unknown error.

**WidgetError** - All widget related error codes are wrapped in this error object type. Various error conditions related to Widget creation will be covered through the following error codes:

*   1100 - Not a widget error.
*   1101 - Widget with duplicate ID error when widget is added to the hierarchy.
*   1102 - Widget cannot be created due to invalid input data.
*   1103 - Same widget instance is added to multiple hierarchies.
*   1104 - Widget cannot be created due to insufficient data (mandatory parameters missing)

  
**NetworkError** - All network related error codes are wrapped in this error object type. Various error conditions related to network will be covered through the following error codes:

*   1000

**  
i18nError** - All error codes thrown by the Internationalization APIs. Various error conditions related to i18n will be covered through the following error code:

*   1300

**  
ContactsError** - All error codes thrown by the Contact APIs. Various error conditions related to Contact will be covered through the following error code:

*   1400

**  
DataStoreError** - All error codes thrown by the DataStore APIs. Various error conditions related to DataStore will be covered through the following error code:

*   1500

**  
LocationError** - All error codes thrown by the location based service APIs. Various error conditions related to LocationError will be covered through the following error code:

*   1600

**  
PushNotificationError** - All error codes thrown by the Push Notification APIs. Various error conditions related to Push Notification will be covered through the following error code:

*   1700 - Unable to connect to push service - Push Notification Service (PNS) is not available.
*   1701 - Registration failed by PNS - Account related or device restrictions (thrown by voltmx.push.register() API during an onfailureregistration callback).
*   1702 - Deregistration failed - Unable to close channel or PNS internal error while deregistration (thrown by voltmx.push.deRegister() API during an onfailurederegistration callback).
*   1703 - Duplicate Registration (thrown by voltmx.push.register() API during an onfailureregistration callback).
*   1704 - Platform Specific issue. Complete details are available in the error message. JavaScript Example: Received payload but payload is in incorrect format etc.

**  
PropertyAccessError** - All error codes thrown by the Push Notification APIs. Various error conditions related to property access will be covered through the following error code:

*   1800 - No such property exists. Thrown when a non-existent property is accessed.
*   1801

**  
SkinError** - All error codes thrown when there is an error related to the skins.

*   1900

**  
CryptoError** - All error codes thrown by Crypto API. Various error conditions related to CryptoError will be covered through the following error code:

*   2001 - unsupported algorithm.
*   2002 - invalid key strength specified.
*   2003 - insufficient buffer provided for specified operation.
*   2004 - memory allocation failure.
*   2005 - input data did not encode or encrypt properly.
*   2006 - specified name already exists.
*   2007 - key with the specified unique ID is not found.

**  
PhoneError** - All error codes thrown by Phone API.

Various error conditions related to Phone Error will be covered through the following error code.

*   2100: Unable to send the Message.
*   2101 - Insufficient Permissions.
*   2102 - Cannot open mail, mail not configured.
*   2103 - Cannot open media gallery.

  
**StreamingError** - All error codes thrown by Streaming API. Various error conditions related to Stream Error will be covered through the following error code.

*   2201 - Streaming identifier does not exist.

> **_Note:_** The actual streaming error is returned in the callback function.

Please refer to the API section for error details. Each API mentions the error name and the error code that it throws.

### Accessing the Volt MX Error

While mapping the Native Exceptions that are thrown by underlying platforms to the JavaScript Exception, it was found that for some platforms it is not consistent with other implementations.

```
try  
{  
	….  
}  
catch ( e )  
{  
	 if (e instanceof VoltMXError)  
	 alert("A Volt MX error");  
	 else (e instanceof EvalError)  
	 alert("A JS Eval Eror");  
}
```

The above code snippet could have been ideal from the developer's perspective, but due to limitations in mapping the native Java exceptions to JavaScript, the recommended cross platform means of accessing the Volt MX Error objects is as follows:

```
try  
{  
….  
}  
catch ( e )  
{  
	 var err = voltmx.getError(e);  
	 if (err instanceof VoltMXError)  
	 alert("A Volt MX error");  
	 else (err instanceof EvalError)  
	 alert("A JS Eval Eror");  
}
```

**voltmx.getError** will give you access to the actual error that is thrown by the JavaScript Engine or by the underlying platforms.

Please refer the Volt MX Iris APIs section for the respective **type of error** object, **error codes** and the defined **name** against each API.

![](resources/prettify/onload.png)
