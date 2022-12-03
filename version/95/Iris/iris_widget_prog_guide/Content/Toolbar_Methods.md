                              


Toolbar Methods
===============

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setBarButtonItems Method](javascript:void(0);)

* * *

Allows you to set the buttons on the toolbar.

Syntax

setBarButtonItems(itemsArray,animated)

Parameters

itemsArray

Specifies an array of [BarButtonItem](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md) objects.

animated

A key:value pair that contains a boolean value. The parameter is formatted as animated:boolean. Set this to animated:true if the item is to be animated.

Example

```
var item1 = new voltmx.ui.BarButtonItem({
    // All items must be created in the same manner.
    type: constants.BAR_BUTTON_SYSTEM_ITEM,
    style: constants.BAR_ITEM_STYLE_PLAIN,
    enabled: true,
    action: onClick,
    metaData: {
        systemItem: constants.SYSTEM_ITEM_REPLY
    }
});
Form1.setBarButtonItems([item0, item1], false);
```

Platform Availability

*   iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setBackgroundImage Method](javascript:void(0);)

* * *

Allows you to set the background image for the toolbar.

Syntax

setBackgroundImage(image,barMetrics)

Parameters

image

A key value pair that specifies the source image. This parameter is formatted as image:"image\_name".

barMetrics

A key value pair that specifies one of two constants. This parameter is formatted as barMetrics:constant where constant is either:

*   constants.BAR\_METRICS\_DEFAULT - the image applies for all orientations.
*   constants.BAR\_METRICS\_COMPACT - the image applies for landscape orientation only.

Example

```
//Sample code to invoke the setBackgroundImage method by using a ToolBar widget.

frmToolBar.myToolbar.setBackgroundImage({
 image: "btnBg.png",
 barMetrics: constants.BAR_METRICS_DEFAULT
});
```

Platform Availability

*   iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setShadowImage Method](javascript:void(0);)

* * *

Allows you to specify the shadow image for the toolbar.

Syntax

setShadowImage(image)

Parameters

image

A key value pair that specifies the source image. This parameter is formatted as image:"image\_name".

Remarks

The Shadow image is shown only when backgroundImage is also set for the toolbar.

Example

```
//Sample code to invoke the setShadowImage method by using a ToolBar widget.

frmToolBar.myToolbar.setShadowImage({
 image: "btnBg.png"
});
```

Platform Availability

*   iOS

* * *

