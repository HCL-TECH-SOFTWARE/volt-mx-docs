                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


FormController Events
=====================

The `FormController` object provides the following events.

> **_Note:_** While using the `this` keyword (for example, `this.view`) in a FormController event in order to point to the current controller, you must ensure that the function is not a **fat arrow** function. Because in fat arrow types of function declarations, the `this` keyword is taken from the parent scope and might not point to the current FormController. For more information on this limitation, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getModel Event](javascript:void(0);) 

* * *

Invoked when the [Navigation](Navigation_Object.md) object retrieves the model for the current FormController object.

Syntax

getModel();

Parameters

None.

Return Values

Returns the model object that is required for the form.

Remarks

Your app does not directly access the `FormController` object for a form. If your app needs the model associated with the `FormController` object, it can access the model by retrieving it through an instance of the `Navigation` object. This event handler retrieves the model that you want it to use for the form.

Example

```
getModel : function ()
{
    var model = new CustomFormModel();
    return model;
}				
```

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onCreateView Event](javascript:void(0);) 

* * *

Called when the controller is ready to create the view.

Syntax

onCreateView();

Parameters

None.

Return Values

Returns either the file name of the form to use as the view or an instance of the form.

Remarks

Use this method to dynamically select which view to use for the controller when your app has more than one view for a controller. For more information, see [Sharing Controllers Between Forms](../../../Iris/voltmx_ref_arch_api/Content/A_Deeper_Look_at_VoltMX_Reference_Architecture.md).

Example 1

```
onCreateView : function ()
{
    return "ViewFileName.js");
}				
```

Example 2

```
onCreateView : function ()
{
    // Create an instance of the view to return or 
    // retrieve the instance from somewhere in your 
    // code where you have stored it. In this example,
    // it's saved in a variable called newInstance.
    return (viewInstance);
}			
```

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onDestroy Event](javascript:void(0);) 

* * *

Triggered just before a form is destroyed.

Syntax

onDestroy();

Parameters

None.

Return Values

None

Remarks

Use this event callback handler function to perform cleanup tasks when a form is about to be destroyed.

Example

```
onDestroy : function ()
{
    this.context = null;
    this.model = null;
}			
```

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[onNavigate Event](javascript:void(0);)

* * *

This event is invoked when you navigate from one form to another. This is a [Form Controller event](../../../Iris/voltmx_ref_arch_api/Content/FormController_Events.md#onNavigate) and is used only in [VoltMX Reference Architecture](../../../Iris/voltmx_ref_arch_api/Content/VoltMX_Reference_Architecture_Guide.md)\-based projects.

Syntax

```
onNavigate(  
    context,   
    isBackNavigation)
```

Parameters

_context \[Object\]_

A JavaScript object that contains the data that the destination form requires after navigation.

_isBackNavigation \[Boolean\]_

This parameter determines whether you have clicked the back button or not. It has the value as _true_ when you click the back button and _false_ when you do not click the back button.

Read/Write

Read + Write

Remarks

To navigate from one form to another, you must create a [Navigation](../../../Iris/voltmx_ref_arch_api/Content/Navigation_Object.md) Object. This object navigates to the destination form's controller. The form's controller in turn displays the view of the form.

This event is useful in the following scenarios:

*   To prepare data that the destination form requires after the navigation.
*   To pause the navigation if any asynchronous calls are in progress.

> **_Note:_** The object that is sent as part of the onNavigate Event is accessible for all form lifecycle events.

Example

```
define({

    onNavigate: function(context, isBackNavigation) {
        this.context = context;
        this.pauseNavigation();
        voltmx.net.invokeServiceAsync(url, this.callback1);
    },

    callback1: function(result) {
        this.resumeNavigation();
    }

});
```

Platform Availability

Available on all platforms

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setModel Event](javascript:void(0);) 

* * *

Invoked while navigating to a new form the model to set the form's updated model object.

Syntax

setModel(  
    model);

Parameters

model

The model object for the new form.

Return Values

None.

Remarks

Use this event callback handler to set a model for the form being navigated to.

Example

```
setModel : function (model)
{
    this.model = model;
}			
```

* * *
