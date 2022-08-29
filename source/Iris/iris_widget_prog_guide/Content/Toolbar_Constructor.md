                              


Toolbar Constructor
===================

The Toolbar widget is unusual in that it only applies to iOS applications and can not be added using the visual tools in Volt MX Iris. To add the widget to your application you must use the voltmx.io library function voltmx.ui.ToolBar({}) passing in a list of key-value pairs.

```

var myToolBar= new voltmx.ui.ToolBar({
	"isToolBarBottomAttached":false,
	"tintColor":"3c4d32",
	"barStyle":constants.BAR_STYLE_DEAFULT,
	"barTintColor":"ef5151",
	"translucent":true,
	"zIndex":1,
	"left":"0%",
	"width":"100%",
	"height" :"10%",
	"top":"90%"  
});
```

The keys for this data include:

*   barStyle : The toolbar bar style that specifies its appearance. Possible values are constants.BAR\_STYLE\_DEAFULT and constants.BAR\_STYLE\_BLACK
*   barTintColor : The tint color to apply to the toolbar bar background. This is specified as a hex string.
*   tintColor : The tint color to apply to the toolbar items and bar button items. This is specified as a hex string.
*   translucent : A Boolean value indicating whether the toolbar bar is translucent.
*   barButtonItems : An array of [BarButtonItem](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md) objects.
*   isToolBarBottomAttached: a boolean. If yes, the toolbar is docked to the bottom of the form.

These keys are also exposed as read-write properties on the toolbar object. See the [Toolbar Properties](Toolbar_Properties.md) section for more information on this.

