---
layout: "documentation"
category: "voltmx_ref_arch_api_internal"
---
                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


TemplateController Methods
==========================

The TemplateController object provides the following method.


<details close markdown="block"><summary>executeOnParent Method</summary> 

* * *

Executes the specified method of the parent object.

### Syntax

{% highlight VoltMx %}
executeOnParent(  
    methodName,  
    methodParams);
{% endhighlight %}

### Parameters

_methodName_

A string containing the name of the parent's method.

_methodParams_

An optional list of parameters to pass to the method specified by the _methodName_ parameter.

### Return Values

None.

### Remarks

The parent of this object is always a FormController object. This method should only be called from sub-view controllers.

### Example

{% highlight VoltMx %}
this.executeOnParent(“func1”, “param1”, "param2");
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>getCurrentView Method</summary>

* * *

Retrieves the current view for the template controller.

### Syntax

{% highlight VoltMx %}
getCurrentView();
{% endhighlight %}

### Parameters

None.

### Return Values

Returns the template controller's view.

### Example

{% highlight VoltMx %}
var currentView = tmpController.getCurrentView();
{% endhighlight %}

* * *

</details>
