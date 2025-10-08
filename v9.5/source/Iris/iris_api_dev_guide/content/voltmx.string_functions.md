                            


voltmx.string Namespace
=====================

The voltmx.string namespace forms the String API and provides the following API elements.

Functions
=========

The voltmx.string namespace provides the following functions.

voltmx.string.containsChars
-------------------------

This API verifies if any one of the specified set of characters is available in the given string and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.containsChars ([inputstring](#inputstring3), [characterArray](#charsArr))

<h3>Input Parameters</h3>

  
| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified. |
| characterArray \[Array\] - Mandatory | Specifies the set of characters that need to be searched within the input string. |

<h3>Example</h3>

In this example, _voltmx.string.containsChars_ returns true if the input string consists the characters specified in the characterArray. For example, since the input string _"abcd|ADV"_ consists the characters specified in the character array, _voltmx.string.containsChars_ returns true.

```
var inputstring = "abdcdADV";
var charsArr = ["|", "-"];
voltmx.print(voltmx.string.containsChars(inputstring, charsArr));
// prints false as | and - are NOT contained in the input
var inputstring = "abdcd|ADV"
voltmx.print(voltmx.string.containsChars(inputstring, charsArr));
// prints true as | is contained in the input

```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the given input string contains any one of the characters in the specified list._false_ - if there is an error in the input or if the given input string does not contain any of the specified input characters. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.containsOnlyGivenChars
----------------------------------

This API verifies if only (and only) the specified set of characters is available in the given string and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.containsOnlyGivenChars ([inputstring](#inputStr2), [characterArray](#charsArr2))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified. |
| characterArray \[Array\] - Mandatory | Specifies the set of characters that need to be searched within the input string. |

<h3>Example</h3>

In this example, _voltmx.string.containsOnlyGivenChars_ returns true only if the input string consists the characters specified in the characterArray. For example, since the input string _"abdcdADV"_ consists only the characters specified in the character array, _voltmx.string.containsOnlyGivenChars_ returns true.  

```
//Test case where API returns true
var inputStr = "abdcdADV";
var charsArr = ["a", "b", "d", "c", "A", "D", "V"];
var resultantString = voltmx.string.containsOnlyGivenChars(inputStr,charsArr);
frmContainsOnlyGivenChars.containsOnlyGivenCharsLabel.text = resultantString;
//Test case where API returns false
var inputStr = "abdcdADH";
var charsArr = ["a", "b", "d", "c", "A", "D", "V"];
var resultantString = voltmx.string.containsOnlyGivenChars(inputStr,charsArr);
frmContainsOnlyGivenChars.containsOnlyGivenCharsLabel.text = resultantString;
```

<h3>Return Values</h3>

| Return value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the given input string contains only the characters in the specified list._false_ - if there is an error in the input or if the given input string contains any other characters apart from the specified input characters. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.containsNoGivenChars
--------------------------------

This API verifies that the input string does not contain any of the specified characters and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.containsNoGivenChars ([inputstring](#inputStr4), [charsArray](#charsArr3))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified. |
| charsArray \[Array\] - Mandatory | Specifies the set of characters that need to be searched within the input string. |

<h3>Example</h3>

In this example, _voltmx.string.containsNoGivenChars_ returns true only if the input string does not consist the characters specified in the characterArray. For example, since the input string _"abdcdADV"_ consists none of the characters specified in the character array, _voltmx.string.containsNoGivenChars_ returns true.

```
var inputstring = "abdcdADV";
var charsArr = ["|", "-"];
voltmx.print(voltmx.string.containsNoGivenChars(inputstring, charsArr));
//prints true as string does not contain the given characters (| and - are NOT contained in the input)
var inputstring = "abdcd|ADV";
var charsArr = ["|", "-", "a" ];
voltmx.print(voltmx.string.containsNoGivenChars(inputstring, charsArr));
//prints false as string contains the given character "a".
```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the given input string contains none of the characters in the specified list._false_ - if there is an error in the input or if the given input string contains any of the specified input characters. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.endsWith
--------------------

This API returns a boolean value indicating if the source string ends with the specified string.

<h3>Syntax</h3>

voltmx.string.endsWith([sourcestring](#sourceStr), [comparestring](#compareStr), [ignorecase](#ignorecase))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| sourcestring \[String\] - Mandatory | Specifies the source string. |
| comparestring \[String\] - Mandatory | Specifies the string to be compared with the source string. |
| ignorecase \[Boolean\] - Optional | Default value is _true_, i.e, the comparison is not case sensitive.If you want the comparison to be case sensitive, you must specify the value as _false_. |

<h3>Example</h3>

```
//Returns true since comparison is not case sensitive.The resultant is assigned to a label text.

var resultantString = voltmx.string.endsWith("VoltMX Solutions", "solutions", true);
frmEndsWith.endsWithLabel.text = resultantString; 
```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| boolean | _true_ - source string ends with compared string._false_ - source string does not end with compared string. |

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.equalsIgnoreCase
----------------------------

Determines whether two strings contain the same data, ignoring the case of the letters in the String.

<h3>Syntax</h3>

voltmx.string.equalsIgnoreCase([string1](#str1), [string2](#str2))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| string1 \[String\] - Mandatory | Specifies the content of the first string. |
| string2 \[String\] - Mandatory | Specifies the content of the second string. |

<h3>Example</h3>

Perform a _voltmx.string.equalsIgnoreCase_ on the string "Hello" with another string "HEllo":

```
var ignorecase = voltmx.string.equalsIgnoreCase("Hello", "HEllo");
voltmx.print(ignorecase);

```

The _voltmx.string.equalsIgnoreCase_ compares the strings "Hello" and "HEllo" without case sensitivity and returns a Boolean indicating if the strings are a match.

In this example, _true_ is the value returned.

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| boolean | _true_ - both strings contain exactly the same data._false_ - both strings do not contain exactly the same data |

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.isAsciiAlpha
------------------------

This API verifies if the input string contains only ASCII alphabet characters and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.isAsciiAlpha ([inputstring](#inputstring))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified. |

<h3>Example</h3>

In this example, the _voltmx.string.isAsciiAlpha_ API returns true or false based on the input string entered.

```
var inputstring = "abdcdADV";
voltmx.print(voltmx.string.isAsciiAlpha(inputstring));
//prints true
var inputstring = "123ab3dcdADV";
voltmx.print(voltmx.string.isAsciiAlpha(inputstring));
//prints false
```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the input string contains only alphabetic characters._false_ - if there is an error in the input or the input string contains characters other than alphabet. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.isAsciiAlphaNumeric
-------------------------------

This API verifies if the input string contains only ASCII alphabet characters and numbers, and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.isAsciiAlphaNumeric ([inputstring](#inputStr))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified. |

<h3>Example</h3>

In this example, _voltmx.string.isAsciiAlphaNumeric_ returns true or false based on the input string.

```
var inputstring = "abdcdADV";
voltmx.print(voltmx.string.isAsciiAlphaNumeric(inputstring));
//prints false because the string is not a combination of alphanumeric characters
var inputstring = "abcd1234";
voltmx.print(voltmx.string.isAsciiAlphaNumeric(inputstring));
//prints true because the string is a combination of alphanumeric characters

```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the input string contains only alphanumeric characters. i.e it can contain a string of numbers, characters or a string containing both numbers and characters._false_ - if there is an error in the input or the input string contains characters other than alphanumeric. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.isNumeric
---------------------

This API verifies if the input string contains only numeric characters, and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.isNumeric ([inputstring](#inputstring2))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified. |

<h3>Example</h3>

In this example, voltmx.string.isNumeric returns true if the input string has only numbers.

```
voltmx.print(voltmx.string.isNumeric("123ab3dcdADV"));
// prints false
voltmx.print(voltmx.string.isNumeric("12344")) ;
// prints true
```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the input string contains only numeric characters._false_ - if there is an error in the input or the input string contains characters other than numbers. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.isValidEmail
------------------------

This API verifies if the input string is a valid email address and returns a boolean value.

<h3>Syntax</h3>

voltmx.string.isValidEmail ([inputstring](#inputstring4))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| inputstring \[String\] - Mandatory | Specifies the input string that needs to be verified if it is a valid email address. |

<h3>Example</h3>

In this example, _voltmx.string.isValidEmail_ returns true only if the input string comprises a valid email address.

```
var inputstring = "abcd@";
voltmx.print(voltmx.string.IsValidEmail(inputstring));
//prints false as there are no chars after @
var inputstring = "abcd@tccc";
voltmx.print(voltmx.string.IsValidEmail(inputstring));
//prints false as the chars after @ does not have . followed by at least 2 chars
```

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| status \[Boolean\] | _true_ - if the given input string satisfies the email rules and is a valid email address._false_ - if there is an error in the input or if the given input string does not satisfy email rules. |

Rules and Restrictions

The API performs the following validations on the input string:

*   has at least 6 characters.
*   has @.
*   has at least 4 characters after @.
*   has **.** (dot) followed by at least 2 characters.
*   has at least 1 character before @.

<h3>Exceptions</h3>

An error is thrown if input type is invalid or follows an unexpected structure.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.rep
---------------

This API generates a string which is equivalent to "_n_ copies of the source string concatenated together".

<h3>Syntax</h3>

voltmx.string.rep([sourcestring](#sourceStr1),[no](#n02))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| sourcestring \[String\] - Mandatory | Specifies the source string. |
| no \[Number\] - Mandatory | Specifies the number of times the source string must be repeated. |

<h3>Example</h3>

Perform a _voltmx.string.rep_ operation on the source string "voltmx":

```
var resultantString = voltmx.string.rep("voltmx",5);
frmRep.concatenatedStringLabel.text = resultantString;
```

The resultant string contains _voltmxvoltmxvoltmxvoltmxvoltmx_.

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| concatenatedstring \[String\] | A string containing _n_ copies of the source string concatenated together is returned. |

 

<h3>Exceptions</h3>

An error is thrown if input type is invalid or does not follow the expected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.reverse
-------------------

This API reverses the characters in the source string.

<h3>Syntax</h3>

voltmx.string.reverse([string](#str))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| string \[String\] - Mandatory | Specifies the source string. |

<h3>Example</h3>

Perform a _reverse_ operation on the source string "voltmx":

```
var resultantString = voltmx.string.reverse("voltmx");
frmReverse.reversedStringLabel.text = resultantString;                            
```

The resultant string will contain _ynok_.

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| reversedstring \[String\] | A string containing the characters of the source string in reverse is returned. |

 

<h3>Exceptions</h3>

An error is thrown if input type is invalid or does not follow the expected structure.

102-Invalid input error

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.startsWith
----------------------

This API returns a boolean value indicating if the source string begins with the specified string.

<h3>Syntax</h3>

voltmx.string.startsWith([sourcestring](#sourceStr12), [comparestring](#compareStr1), [ignorecase](#ignorecase1))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| sourcestring \[String\] - Mandatory | Specifies the source string. |
| comparestring \[String\] - Mandatory | Specifies the string to be compared with the source string. |
| ignorecase \[Boolean\] - Optional | Default value is _true_. If you do not specify the ignorecase parameter, the comparison of the string will be case insensitive. If you want the comparison to be case sensitive, you must specify the value as _false_. |

<h3>Example</h3>

Perform a _voltmx.string.startsWith_ on the _source string_ "VoltMX Solutions" for the string "voltmx" specifying the ignorecase parameter:

```
var resultantString = voltmx.string.startsWith("VoltMX Solutions","voltmx",true);
frmStartsWith.startsWithLabel.text = resultantString;     

```

The _voltmx.string.startsWith_ compares the source string "VoltMX Solutions" with the string "voltmx" without case sensitivity and returns a boolean indicating if the source string begins with the specified string.

In this example, _true_ is the value returned.

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| boolean | _true_ - source string begins with the compared string._false_ - source string does not begin with the compared string. |

<h3>Exceptions</h3>

An error is thrown if input type is invalid or does not follow the expected structure.

102-Invalid input error.

<h3>Platform Availability</h3>

Available on all platforms.

voltmx.string.trim
----------------

This API removes the leading and ending spaces from the source string.

<h3>Syntax</h3>

voltmx.string.trim([string](#str3))

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| string \[String\] - Mandatory | Specifies the source string. |

<h3>Example</h3>

Remove the leading and ending spaces in " voltmx solutions ":

```
var resultantString = voltmx.string.trim("      voltmx   solutions     ");
frmTrim.trimmedStringLabel.text = "\"" + resultantString + "\"";

```

In this example, _voltmx solutions_ is the value returned.

<h3>Return Values</h3>

| Return Value | Description |
| --- | --- |
| trimmedstring \[String\] | A string without the leading and ending spaces is returned. |

 

<h3>Exceptions</h3>

An error is thrown if input type is invalid or does not follow the expected structure.

102-Invalid input error

<h3>Platform Availability</h3>

Available on all platforms.

![](resources/prettify/onload.png)
