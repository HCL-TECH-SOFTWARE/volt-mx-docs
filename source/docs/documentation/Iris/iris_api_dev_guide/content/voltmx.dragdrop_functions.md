---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.dragDrop Namespace
=======================

The voltmx.dragdrop Namespace contains the following API elements.

Functions
---------

The voltmx.dragdrop Namespace contains the following functions.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.dragdrop.DragInteraction](javascript:void(0);)

This function creates a new DragInteraction object and attaches the DragInteraction object to a widget.

Syntax

voltmx.dragdrop.DragInteraction()

Input Parameters

  
| Parameters | Description |
| --- | --- |
| widget | The widget that has to be made draggable. |
| callbacks | This is a dictionary with the following keys: **itemsForBeggining**(JavaScript function) \[Mandatory\] : In this JS function, you can return the data (dictionary of the supported format), which is to be sent (JSON/filepath).**previewForLifting** (JavaScript function) \[Mandatory\]: This callback should return the preview that is to be shown while dragging on the screen.**onLiftBeginAnimate** (JavaScript function) \[Optional\]: Any Volt MX Iris supported animations that can be done when the lift just started.**onLiftBeginAnimationComplete** (JavaScript function) \[Optional\]: Animations that can be configured after the lift animations have been completed.**previewForCancel** (JavaScript function) \[Optional\]: This callback returns the preview when the dragging action is canceled.**onCancelAnimate** (JavaScript function) \[Optional\]: Any Volt MX Iris supported animations that can be done when the dragging is canceled.**onCancelAnimationComplete** (JavaScript function) \[Optional\]: Any Volt MX Iris supported animations that can be done after the cancellation process has been completed. |

Example

{% highlight voltMx %} //To create a drag interation object use the below code snippet
createcallbacksdictAndAddDragInteractionImg1: function() {
    var callbacksDict = {
        "itemsForBeggining": this.beginItemDragForm9,
        "previewForLifting": this.previewForLiftingForm9
    };
    var argsDict = {
        "widget": this.view.img1,
        "callbacks": callbacksDict
    };
    this.dragInteraction1 = new voltmx.dragdrop.DragInteraction(argsDict);

},

/*   By specifying the below function, you can return the data, which is to be sent 
  (JSON/filepath).*/
beginItemDragForm9: function() {
    var applicationDirPath = voltmx.io.FileSystem.getApplicationDirectoryPath();
    var filePath = applicationDirPath + "/puppy.png";
    var argsDict = {
        "data": filePath,
        "type": voltmx.dragdrop.ITEMDATA_FILE,
        "fileVisibility": voltmx.dragdrop.FILEVISIBILITY_ALL
    };
    return [argsDict];
},

/*By specifying the below function, you can return the preview that is to be shown while 
dragging on the screen.*/
previewForLiftingForm9: function() {
    var argsDict = {
        "preview": this.view.img1
    };
    return argsDict;
},
{% endhighlight %}

Return Values

*   Success: A newly created DragInteraction object.
*   Failure: null

Platform Availability

*   iOS 11

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.dragdrop.DropInteraction](javascript:void(0);)

This function creates a new DropInteraction object and attaches it to a widget.

Syntax

voltmx.dragdrop.DropInteraction()

Input Parameters

  
| Parameters | Description |
| --- | --- |
| widget | The widget that has to be made droppable. |
| callbacks | This is a JSON dictionary with the following keys: **performDrop**(JavaScript function) \[Mandatory\] : This JS function gets data (JSON/filepath) as an argument.**previewForDrop** (JavaScript function) \[Optional\]: The drop preview that can be configured while dropping the data with the default preview.**onBeginDropAnimate** (JavaScript function) \[Optional\]: Any Volt MX Iris supported animations that can be configured while dropping.**onBeginDropAnimationComplete** (JavaScript function) \[Optional\]: Animations that can be configured after the drop animations have been completed.**concludeDrop** (JavaScript function) \[Optional\]: This callback is invoked after the dropping action is successfully completed. |

Example

{% highlight voltMx %} //To create a drop interation object use the below code snippet
createcallbacksdictAndAddDropInteractionImg2: function() {
    var callbacksDict = {

        "performDrop": this.dropCallbackForm9
    };
    var argsDict = {
        "widget": this.view.img2,
        "callbacks": callbacksDict
    };
    this.drpInteraction1 = new voltmx.dragdrop.DropInteraction(argsDict);
},

/*By specifying the below function, you can get the data (JSON/filepath) as an argument*/
dropCallbackForm9: function(recievedData) {
    var file = voltmx.io.FileSystem.getFile(recievedData);
    if (file.exists()) {
        var fileBytes = file.read();
        this.view.img2.base64 = voltmx.convertToBase64(fileBytes);
    }
},
{% endhighlight %}

Return Values

*   Success: A newly created DropInteraction object.
*   Failure: null

Platform Availability

*   iOS 11

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.dragdrop.removeDragInteraction](javascript:void(0);)

This function detaches the DragInteraction object from the widget.

Syntax

voltmx.dragInteraction.removeDragInteraction()

Input Parameters

None

Example

{% highlight voltMx %} removeDragInteraction1: function() {
        this.dragInteraction1.removeDragInteraction();
    },
{% endhighlight %}

Return Values

None

Platform Availability

*   iOS 11

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.dragdrop.removeDropInteraction](javascript:void(0);)

This function detaches the DropInteraction object from the widget.

Syntax

voltmx.dragInteraction.removeDropInteraction()

Input Parameters

None

Example

{% highlight voltMx %} removeDropInteraction1: function() {
        this.drpInteraction1.removeDropInteraction();
    }
{% endhighlight %}

Return Values

None

Platform Availability

*   iOS 11

* * *

![](resources/prettify/onload.png)
