                            

You are here: String API

String API
==========

The **voltmx.string** namespace provides static string functions that augment the functions in the `String` type that is available by default. For more information see, [https://developer.mozilla.org/en/JavaScript/Reference/Global\_Objects/string](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String).

> **_Note:_** JavaScript distinguishes between String objects and primitive string values.

String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (i.e., without using the new keyword) are primitive strings. JavaScript automatically converts primitive strings and `String` objects, making it possible to use `String` object methods for primitive strings. In cases where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript automatically wraps the string primitive and calls the method or performs the property lookup.

The String API contains the `voltmx.string` `Namespace` and related API elements:

  
| Function | Description |
| --- | --- |
| [voltmx.string.containsChars](voltmx.string_functions.md#volt-mx-string-containschars) | Verifies if any one of the specified set of characters is available in the given string and returns a boolean value. |
| [voltmx.string.containsOnlyGivenChars](voltmx.string_functions.md#volt-mx-string-containsonlygivenchars) | Verifies if only (and only) the specified set of characters is available in the given string and returns a boolean value. |
| [voltmx.string.containsNoGivenChars](voltmx.string_functions.md#volt-mx-string-containsnogivenchars) | Verifies that the input string does not contain any of the specified characters and returns a boolean value. |
| [voltmx.string.endsWith](voltmx.string_functions.md#volt-mx-string-endswith) | Returns a boolean value indicating if the source string ends with the specified string. |
| [voltmx.string.equalsIgnoreCase](voltmx.string_functions.md#volt-mx-string-equalsignorecase) | Determines whether two strings contain the same data, ignoring the case of the letters in the String. |
| [`voltmx.string.isAsciiAlpha`](voltmx.string_functions.md#volt-mx-string-isasciialpha) | Verifies if the input string contains only ASCII alphabet characters and returns a boolean value. |
| [`voltmx.string.isAsciiAlphaNumeric`](voltmx.string_functions.md#volt-mx-string-isasciialphanumeric) | Verifies if the input string contains only ASCII alphabet characters and numbers, and returns a boolean value. |
| [`voltmx.string.isNumeric`](voltmx.string_functions.md#volt-mx-string-isnumeric) | Verifies if the input string contains only numeric characters, and returns a boolean value. |
| [`voltmx.string.isValidEmail`](voltmx.string_functions.md#volt-mx-string-isvalidemail) | Verifies if the input string is a valid email address and returns a boolean value. |
| [`voltmx.string.rep`](voltmx.string_functions.md#volt-mx-string-rep) | Generates a string which is equivalent to _**n** copies of the source string concatenated together_. |
| [`voltmx.string.reverse`](voltmx.string_functions.md#volt-mx-string-reverse) | Reverses the characters in the source string. |
| [`voltmx.string.startsWith`](voltmx.string_functions.md#volt-mx-string-startswith) | Returns a boolean value indicating if the source string begins with the specified string. |
| [`voltmx.string.trim`](voltmx.string_functions.md#volt-mx-string-trim) | Removes the leading and ending spaces from the source string. |

 

Use the [voltmx.string.containsChars](voltmx.string_functions.md#volt-mx-string-containschars) function to check whether the specified set of characters are available in the given string. To verify that only a specified set of characters is available in the given string, use the [voltmx.string.containsOnlyGivenChars](voltmx.string_functions.md#volt-mx-string-containsonlygivenchars) function. If you want to verify that no given characters are available in the given string, use the [voltmx.string.containsNoGivenChars](voltmx.string_functions.md#volt-mx-string-containsnogivenchars) function. You can check whether a string starts or ends with a specified string using the [`voltmx.string.startsWith`](voltmx.string_functions.md#volt-mx-string-startswith) or the [voltmx.string.endsWith](voltmx.string_functions.md#volt-mx-string-endswith) functions respectively. Use the [voltmx.string.equalsIgnoreCase](voltmx.string_functions.md#volt-mx-string-equalsignorecase) function to determine whether two strings contain the same data, ignoring the case of the letters in the String. To check whether the input string contains only ASCII alphabet characters, use the [`voltmx.string.isAsciiAlpha`](voltmx.string_functions.md#volt-mx-string-isasciialpha) function that returns a boolean value. Use the [`voltmx.string.isAsciiAlphaNumeric`](voltmx.string_functions.md#volt-mx-string-isasciialphanumeric) function to verify if the input string contains only ASCII alphabet characters and numbers. The [`voltmx.string.isNumeric`](voltmx.string_functions.md#volt-mx-string-isnumeric) function verifies if the input string contains only numeric characters. Use the [`voltmx.string.isValidEmail`](voltmx.string_functions.md#volt-mx-string-isvalidemail) function to verify if the specified string is a valid email address. The [`voltmx.string.reverse`](voltmx.string_functions.md#volt-mx-string-reverse) reverses the characters in the source string. Use the [`voltmx.string.trim`](voltmx.string_functions.md#volt-mx-string-trim) to remove the leading and ending spaces from a source string.

All the functions in the Volt MX String API are in the **voltmx.string** namespace. The voltmx.string namespace contains functions that are deprecated and must therefore not be used in new software development. However, [documentation for them](voltmx.string_deprecated.md#/Content/voltmx.string_Deprecated.md) is provided to help with the maintenance of legacy apps.

To view the functionality of the String API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/StringAPI)

![](resources/prettify/onload.png)
