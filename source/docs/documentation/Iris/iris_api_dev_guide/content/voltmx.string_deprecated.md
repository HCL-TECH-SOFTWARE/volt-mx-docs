---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

Deprecated Functions
====================

The following String API functions have been deprecated.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.charat](javascript:void(0);)

This API returns a string which contains a single character from the source string at the specified index.

Syntax

charAt()

Return Values

character \[String\]

_Character at the specified index_ in the source string.

nil

index is lesser or greater than the length of the source string

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.compare](javascript:void(0);)

This API compares the contents of two strings _numerically_. For example, "Adam" is smaller than "adam" as per the ASCII table because A(65) is smaller than a(97).

Syntax

compare()

Return Values

Status \[Number\]

status of the compare operation

*   _1_ - s1 > s2
*   _0_ - s1 = s2
*   _\-1_ \- s1 < s2

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.find](javascript:void(0);)

This API finds the first occurrence of the search string in the source string.

Syntax

indexOf()

Return Values

Start Position \[Number\]

The search string is found and the start position of the search string is returned

nil

The search string is not found

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.len](javascript:void(0);)

This API returns the length of the source string.

Syntax

length

Return Values

length \[Number\]

The value returned is the length of the source string

Rules and Restrictions

If the input string has an escape character in it, this API returns the length of the string as 0.

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.lower](javascript:void(0);)

This API changes the upper case characters of the source string to lower case characters.

Syntax

toLowerCase()

Return Values

lower case \[String\]

A string containing lower case characters is returned.

Platform Availability

Available on all platforms

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.replace](javascript:void(0);)

This API finds and replaces the occurrences of a string in the source string with a string you specify.

Syntax

replace()

Return Values

modified string \[String\]

All occurrences of the string specified in the _find_ parameter are replaced with the string specified in the _replace_ parameter

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.split](javascript:void(0);)

This API splits the source string based on the separator (default is comma) and returns a table containing the string.

### Syntax

split()

Return Values

*   A _Table_ containing the string is returned.

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.sub](javascript:void(0);)

This API returns the substring of the source string.

Syntax

substring()

Return Values

substring \[String\]

The substring of the source string is returned.

If _j_ is not given, the substring will begin from the character specified in _i_ and ends at the end of the source string.

If _j_ is given, the substring will begin from the character specified in _i_ and ends at the character specified in _j_ and includes _j_.

Platform Availability

Available on all platforms.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[string.upper](javascript:void(0);)

This API changes the lower case characters of the source string to upper case characters.

Syntax

toUpperCase()

Return Values

upper case \[String\]

A string containing upper case characters is returned

Platform Availability

Available on all platforms.

![](resources/prettify/onload.png)
