---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Function
========

The Toast API contains the following function.


<details close markdown="block"><summary>voltmx.ui.Toast</summary> 

* * *

Creates a `Toast` object.

> **_Important:_** The voltmx.ui.Toast function is only available for the Android platform.

### Syntax

{% highlight VoltMx %}
voltmx.ui.Toast(configParams)
{% endhighlight %}

### Input Parameters

| Parameter | Description |
| --- | --- |
| configParams | A JavaScript object that contains key-value pairs that provide the configuration of the toast to be created. The following keys are supported. text: The text for the toast to display. duration: The duration of time that the toast appears on the screen. This must be set to one of the [Toast Duration Constants](constants_namespace.html#ToastDuration). |

### Example

{% highlight VoltMx %}
var toast = new voltmx.ui.Toast({
  "text": "This is the toast's text.",
  "duration": constants.SHORT
  });
toast.show();
{% endhighlight %}

### Return Values

Returns an instantiated [Toast Object](toast_properties.html#toast-object).

### Platform Availability

*   Android

* * *

