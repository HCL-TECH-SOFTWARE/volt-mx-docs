                              


Toolbar Constructor
===================

The Toolbar widget is unusual in that it only applies to iOS applications and can not be added using the visual tools in Volt MX Iris. To add the widget to your application you must use the voltmx.io library function voltmx.ui.ToolBar({}) passing in a list of key-value pairs.

<b>Code for adding a toolbar</b>


```

function addToolBar(){
    var Toolbar04a6f8f5c8b0c45 = new voltmx.ui.ToolBar({
        "barStyle": constants.BAR_STYLE_DEFAULT,
        "barTintColor": "ef6161",
        "id": "Toolbar04a6f8f5c8b0c45",
        "tintColor": "3c4c83",
        "translucent": false,
        "isToolBarBottomAttached": true,
        "left": "32dp",
        "top": "140dp",
        "zIndex": 1,
        "height": "50dp"
    });
    Home.add(Toolbar04a6f8f5c8b0c44);
}

function HomeGlobals() {
    Home = new voltmx.ui.Form2({
        "addWidgets": addWidgetsHome,
        "enabledForIdleTimeout": false,
        "id": "Home",
        "layoutType": voltmx.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow":addToolBar,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": voltmx.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
}; 
```


<b>Code for creating evenly spaced buttons on the toolbar</b>

```
function addWidgetsHome(){   
    var item1 = new voltmx.ui.BarButtonItem({
        type: constants.BAR_BUTTON_TITLE,
        style: constants.BAR_ITEM_STYLE_PLAIN,
        enabled: true,
        action: null,
        metaData: {
            title: "Add"
        }
    });
    var itemFlexibleSpace = new voltmx.ui.BarButtonItem({
        type: constants.BAR_BUTTON_SYSTEM_ITEM,
        style: constants.BAR_ITEM_STYLE_PLAIN,
        enabled: true,
        action: null,
        metaData: {
            systemItem:constants.SYSTEM_ITEM_FLEXIBLE_SPACE
        }
    });
    var item2 = new voltmx.ui.BarButtonItem({
        type: constants.BAR_BUTTON_TITLE,
        style: constants.BAR_ITEM_STYLE_PLAIN,
        enabled: true,
        action: null,
        metaData: {
            title: "Delete"
        }
    });       

    var toolbar04a6f8f5c8b0c45 = new voltmx.ui.ToolBar({
        "barStyle": constants.BAR_STYLE_DEFAULT,
        "barTintColor": "ef6161",
        "id": "Toolbar04a6f8f5c8b0c45",
        "tintColor": "3c4c83",
        "translucent": false,
        "barButtonItems": [item1, itemFlexibleSpace, item2],
        "isToolBarBottomAttached": true,
        "left": "32dp",
        "top": "140dp",
        "zIndex": 1,
        "height": "50dp"
    });
    
    Home.add(toolbar04a6f8f5c8b0c45);
}

function HomeGlobals() {
    Home = new voltmx.ui.Form2({
        "addWidgets": addWidgetsHome,
        "enabledForIdleTimeout": false,
        "id": "Home",
        "layoutType": voltmx.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": voltmx.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
}; 

```

The keys for this data include:

*   barStyle : The toolbar bar style that specifies its appearance. Possible values are constants.BAR\_STYLE\_DEAFULT and constants.BAR\_STYLE\_BLACK
*   barTintColor : The tint color to apply to the toolbar bar background. This is specified as a hex string.
*   tintColor : The tint color to apply to the toolbar items and bar button items. This is specified as a hex string.
*   translucent : A Boolean value indicating whether the toolbar bar is translucent.
*   barButtonItems : An array of [BarButtonItem](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md) objects.
*   isToolBarBottomAttached: a boolean. If yes, the toolbar is docked to the bottom of the form.

These keys are also exposed as read-write properties on the toolbar object. See the [Toolbar Properties](Toolbar_Properties.md) section for more information on this.

