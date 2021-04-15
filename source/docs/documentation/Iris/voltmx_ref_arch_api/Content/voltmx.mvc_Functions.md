---
layout: "documentation"
category: "voltmx_ref_arch_api_internal"
---
                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


voltmx.mvc Functions
==================

The `voltmx.mvc namespace` contains the following function.


<details close markdown="block"><summary>voltmx.mvc.Navigation Function</summary>

* * *

Creates an instance of the Navigation object.

### Syntax

{% highlight VoltMx %}
voltmx.mvc.Navigation(  
    friendlyName);
{% endhighlight %}

### Parameters

_friendlyName_

The friendly name of the form that the [Navigation](Navigation_Object.html) object is to be created for.

### Return Values

Returns a Navigation object on success, or `null` on failure.

### Remarks

A form can have multiple `Navigation` objects, so it is possible for an app to call this function multiple times on a form.

### Example

{% highlight VoltMx %}
var Navigation = new voltmx.mvc.Navigation("FormFriendlyName");
{% endhighlight %}

* * *

</details>