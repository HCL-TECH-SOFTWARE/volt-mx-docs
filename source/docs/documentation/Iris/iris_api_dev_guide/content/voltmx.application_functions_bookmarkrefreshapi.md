---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             


Functions
=========

The Bookmark and Refresh API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.html).

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.addBMState](javascript:void(0);)

* * *

This API adds a specified key and value to the parameter list of the URL of the form.

Syntax

voltmx.application.addBMState([formID](#id3), [key](#key), [value](#value))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form to be bookmarked. |
| key \[String\] - Mandatory | Key string representing the LHS of the parameter. |
| value \[String\] - Mandatory | Value string representing the RHS of the key-value combination. The value can not be a nested structure. |

 

**Example**

{% highlight voltMx %}addbookmark: function() {

    voltmx.application.addBMState("Form1", "About", "page2");
    alert("A specified key and value are added to the parameter list of the URL");

},
{% endhighlight %}

Return Values

None.

Platform Availability

Supported for SPA and Desktop Web.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.getBMState](javascript:void(0);)

* * *

This API retrieves the list of parameters attached to a URL using the above add, set APIs.

Syntax

voltmx.application.getBMState([formID](#id4))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form for which the parameters of the URL have to be fetched. |

 

Example

{% highlight voltMx %}getbookmark: function() {

    var a = voltmx.application.getBMState("Form1");
    alert(" The list of parameters attached to the URL are " + JSON.stringify(a));
},
{% endhighlight %}

Return Values

A JSON structure representing key-values of various parameters attached to the URL string of the given form.

Platform Availability

Supported for SPA and Desktop Web.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.removeBMState](javascript:void(0);)

* * *

This API removes a specified key from the parameter list of the URL of the form.

Syntax

voltmx.application.removeBMState([formID,](#id2)[key](#key2))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form for which the parameters of the URL have to be removed. |
| key \[String\] - Mandatory | Key string representing the key to be removed. |

 

Example

To remove a bookmark for a URL, enter the following:

{% highlight voltMx %}removebookmark: function() {
    voltmx.application.removeBMState("Form1", "About");
    alert("The About key is removed from the parameter list");
},
{% endhighlight %}

Return Values

None

Platform Availability

Supported for SPA and Desktop Web.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.resetBMState](javascript:void(0);)

* * *

This API resets the state associated with the URL of a form. It removes all the parameters attached to the form URL

Syntax

voltmx.application.resetBMState([formID](#id1))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory. | Identifier of the form for which the parameters of the URL have to be removed. |

 

Example

{% highlight voltMx %}resetBookmarkState: function() {
    voltmx.application.resetBMState("Form1");
    alert("The state is removed from the URL");
}
{% endhighlight %}

Return Values

None

Platform Availability

Supported for SPA and Desktop Web.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.setBMState](javascript:void(0);)

* * *

This API sets the bookmark state to the URL. This API accepts the _formID_ and a _json_ structure of key value pairs which will be added to the URL of the page.

Syntax

voltmx.application.setBMState([formID,](#id) [State](#menuSettings))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| formID \[String\] - Mandatory | Identifier of the form to be bookmarked. |
| state \[JSON Object\] - Mandatory | A JSON object comprising key value pairs. The key value pairs are user defined. You cannot specify this as a nested structure. i.e the value part can not be another JSON object. |

 

Example

{% highlight voltMx %}setState: function() {

    var state = {
        Bookmark: "about",
        text: "About"
    };
    voltmx.application.setBMState("Form1", state);
    alert("A new state is set to the URL ");
},
{% endhighlight %}

Return Values

None

Platform Availability

Supported for SPA and Desktop Web.

* * *

![](resources/prettify/onload.png)
