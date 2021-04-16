---
layout: "documentation"
category: "voltmx_ref_arch_api_internal"
---
                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


FormController Methods
======================

The FormController object contains the following methods.


<details close markdown="block"><summary>getCurrentForm Method</summary> 

* * *

Retrieves the name of the current form.

Syntax

getCurrentForm();

Parameters

None.

Return Values

Returns a string containing the name of the current form.

Example

{% highlight voltMx %}ver currentForm = this.getCurrentForm();
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>getCurrentFormFriendlyName Method</summary> 

* * *

Retrieves the friendly name of the current form.

Syntax

getCurrentFormFriendlyName();

Parameters

None.

Return Values

Returns a string containing the friendly name of the current form.

Example

{% highlight voltMx %}ver currentFormFriendlyName= this.getCurrentFormFriendlyName();
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>getPreviousForm Method</summary> 

* * *

Retrieves the name of the previous visible form.

Syntax

getPreviousForm();

Parameters

None.

Return Values

Returns a string containing the name of the previous visible form, or `null` if there is no previous visible form.

Example

{% highlight voltMx %}ver previousForm = this.getPreviousForm();
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>getPreviousFormFriendlyName Method</summary> 

* * *

Retrieves the friendly name of the previous visible form.

Syntax

getPreviousFormFriendlyName();

Parameters

None.

Return Values

Returns a string containing the friendly name of the previous visible form, or `null` if there is no previous visible form.

Example

{% highlight voltMx %}ver previousFormFriendlyName = this.getPreviousFormFriendlyName();
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>pauseNavigation Method</summary> 

* * *

Pauses when navigating from one form to another.

Syntax

pauseNavigation();

Parameters

None.

Return Values

None.

Remarks

Your app calls this method to pause when navigating from form to form and wait for tasks that need to be completed before the new form is shown. The only time your app can call this function is in the [onNavigate](FormController_Events.html#onNavigate) event callback handler function, which you must provide. If your app calls it anywhere else, it does nothing.

To resume navigation, your app must call the [resumeNavigation](#resumeNavigation) method.

Example

{% highlight voltMx %}onNavigate : function(context, isBackNavigation)
{
    this.context = context;
    this.pauseNavigation();
    voltmx.net.invokeServiceAsync(url, this.callback1);
}

callback1: function(result)
{
    this.resumeNavigation();
}
{% endhighlight %}

* * *

</details>
<details close markdown="block"><summary>resumeNavigation Method</summary> 

* * *

Resumes the process of navigating from form to form.

Syntax

resumeNavigation();

Parameters

None.

Return Values

None.

Remarks

When your app is navigating from form to form, it can pause the process of navigation by calling the [pauseNavigation](#pauseNavigation) method. After navigation has been paused, your app must call the `resumeNavigation` method to continue the navigation process and display the target form. If `pauseNavigation` has not been called, this method does nothing.

> **_Important:_** Failing to call `resumeNavigation` after your app has called `pauseNavigation` may result in your app locking up.

Example

{% highlight voltMx %}onNavigate : function(context, isBackNavigation)
{
    this.context = context;
    this.pauseNavigation();
    voltmx.net.invokeServiceAsync(url, this.callback1);
}

callback1: function(result)
{
    this.resumeNavigation();
}
{% endhighlight %}

* * *
