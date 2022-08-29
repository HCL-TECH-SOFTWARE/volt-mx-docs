                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


TemplateController Events
=========================

The TemplateController object supports the following events.


<details close markdown="block"><summary>onCreateView Event</summary> 

* * *

Called when the controller is ready to create the view.

Syntax

onCreateView();

Parameters

None.

Return Values

Returns either the file name of the template to use as the view or an instance of the template.

Remarks

Use this method to dynamically select which view to use for the controller when your app has more than one view for a controller. For more information, see [Sharing Controllers Between Forms](A_Deeper_Look_at_VoltMX_Reference_Architecture.md#share-controllers-between-forms).

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

</details>
<details close markdown="block"><summary>onDestroy Event</summary> 

* * *

Triggered just before a template is destroyed.

Syntax

onDestroy();

Parameters

None.

Return Values

None

Remarks

Use this event callback handler function to perform cleanup tasks when a template is about to be destroyed.

Example

```
onDestroy : function ()
{
    this.context = null;
    this.model = null;
}			
```

* * *

</details>
<details close markdown="block"><summary>onViewCreated</summary> 

* * *

Triggered when the view is created.

Syntax

onViewCreated();

Parameters

None.

Return Values

None.

Remarks

This method is automatically invoked just after the onCreateView event has finished and the template's view has been created. Developers can use this method to configure the template.

Example

```
onViewCreated: function ()
{
    this.view.addGestureRecognizer(
        constants.GESTURE_TYPE_SWIPE, 
        {fingers: 1}, 
        function(widgetRef, gestureInfo, context) 
        {
            alert("Swipe Gesture");
        }
    );
}
```

* * *

</details>
