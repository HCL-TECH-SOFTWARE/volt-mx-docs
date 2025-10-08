                             


Functions
=========

The Bookmark and Refresh API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.md).


<details close markdown="block"><summary>voltmx.application.addBMState</summary>

* * *

This API adds a specified key and value to the parameter list of the URL of the form.

<b>Syntax</b>

```

voltmx.application.addBMState([formID](#id3), [key](#key), [value](#value));
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form to be bookmarked. |
| key \[String\] - Mandatory | Key string representing the LHS of the parameter. |
| value \[String\] - Mandatory | Value string representing the RHS of the key-value combination. The value can not be a nested structure. |

 

**Example**

```
addbookmark: function() {

    voltmx.application.addBMState("Form1", "About", "page2");
    alert("A specified key and value are added to the parameter list of the URL");

},
```

<b>Return Values</b>

None.

<b>Platform Availability</b>

Supported for SPA and Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.application.getBMState</summary>

* * *

This API retrieves the list of parameters attached to a URL using the above add, set APIs.

<b>Syntax</b>

```

voltmx.application.getBMState([formID](#id4));
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form for which the parameters of the URL have to be fetched. |

 

Example

```
getbookmark: function() {

    var a = voltmx.application.getBMState("Form1");
    alert(" The list of parameters attached to the URL are " + JSON.stringify(a));
},
```

<b>Return Values</b>

A JSON structure representing key-values of various parameters attached to the URL string of the given form.

<b>Platform Availability</b>

Supported for SPA and Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.application.removeBMState</summary>

* * *

This API removes a specified key from the parameter list of the URL of the form.

<b>Syntax</b>

```

voltmx.application.removeBMState([formID,](#id2)[key](#key2));
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form for which the parameters of the URL have to be removed. |
| key \[String\] - Mandatory | Key string representing the key to be removed. |

 

Example

To remove a bookmark for a URL, enter the following:

```
removebookmark: function() {
    voltmx.application.removeBMState("Form1", "About");
    alert("The About key is removed from the parameter list");
},
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Supported for SPA and Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.application.resetBMState</summary>

* * *

This API resets the state associated with the URL of a form. It removes all the parameters attached to the form URL

<b>Syntax</b>

```

voltmx.application.resetBMState([formID](#id1));
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form for which the parameters of the URL have to be removed. |

 

Example

```
resetBookmarkState: function() {
    voltmx.application.resetBMState("Form1");
    alert("The state is removed from the URL");
}
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Supported for SPA and Desktop Web.

* * *

</details>
<details close markdown="block"><summary>voltmx.application.setBMState</summary>

* * *

This API sets the bookmark state to the URL. This API accepts the _formID_ and a _json_ structure of key value pairs which will be added to the URL of the page.

<b>Syntax</b>

```

voltmx.application.setBMState([formID,](#id) [State](#menuSettings));
```

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory | Identifier of the form to be bookmarked. |
| state \[JSON Object\] - Mandatory | A JSON object comprising key value pairs. The key value pairs are user defined. You cannot specify this as a nested structure. i.e the value part can not be another JSON object. |

 

Example

```
setState: function() {

    var state = {
        Bookmark: "about",
        text: "About"
    };
    voltmx.application.setBMState("Form1", state);
    alert("A new state is set to the URL ");
},
```

<b>Return Values</b>

None

<b>Platform Availability</b>

Supported for SPA and Desktop Web.

* * *

</details>

![](resources/prettify/onload.png)
