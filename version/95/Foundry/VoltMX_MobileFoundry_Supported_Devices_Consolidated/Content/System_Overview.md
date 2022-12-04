   

HBox - Platform Specific Properties
-----------------------------------

The platform specific properties for HBox Widget are as follows:

*   [blockedUISkin](#blockeduiskin)
*   [borderCollapse](#bordercollapse)
*   [contextMenu](#contextmenu)
*   [contextMenu (for Desktop Web only)](#contextmenu-for-desktop-web-only)
*   [hoverSkin](#hoverskin)
*   [viewConfig](#viewconfig)

### blockedUISkin

Specifies the skin that must be used to block the interface until the action in progress (for example, a service call) is completed.

**Default:** _None_ (No skin is applied)

To specify a skin, select a skin from the list.

For the skin to be available in the list, you must add a skin for Blocked UI under Widget Skins.

Syntax

**JavaScript:** blockedUISkin

**Lua:** blockeduiskin

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Call back for box onClick event  
function boxblockedUISkinTCSPAPlayClick(box)  
{  
    //Call the service here to observe blockedUI skin  
}  
  
//The below two functions will explain how to use blockedUISkin property for Box widget.  
var basicConf = {id : "lblblockedUISkin", text:"Click this Box to see blockedUI skin while calling the service", isVisible:true};  
var layoutConf = {contentAlignment :constants.CONTENT\_ALIGN\_CENTER, containerWeight:100, widgetAlignment:constants.WIDGET\_ALIGN\_CENTER,hExpand: true,vExpand:true};  
  
//Creating the Label.  
var lblblockedUISkin = new voltmx.ui.Label(basicConf, layoutConf, {});  
  
//onClick event is triggered when user clicks on the box ,In this case we are calling the service inside the callback to observe the blockedUI skin.  
var basicConfBox = {id : "boxblockedUISkin", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL,onClick:boxblockedUISkinTCSPAPlayClick};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
  
//Creating the Box  
var boxblockedUISkin = new voltmx.ui.Box(basicConfBox, layoutConfBox, {blockedUISkin:"blockUISkin"});  
  
//Adding label to box.  
boxblockedUISkin.add(lblblockedUISkin);  
  

```

Accessible from IDE

Yes

Platform Availability

*   Desktop Web
*   Server side Mobile Web (advanced)
*   SPA (iPhone/Android/BlackBerry/Windows NTH)

### borderCollapse

Specifies if the space between the Box and its child widgets is considered.

**Default:** _false_

If set to _true,_ the default space between the parent and the child widget reduces.

If set to _false,_ the default space between the parent and the child widget retained.

![](Resources/Images/border_collapse.png)

Syntax

**JavaScript:** borderCollapse

**Lua:** bordercollapse

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the box with borderCollapse:true .(If you set the Border-Collapse value to true, the default space between the parent and the child widget reduces else not.)  
var basicConfBox = {id : "boxBorderCollapse", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = {**borderCollapse:true**}  
  
//Creating the box.  
var boxBorderCollapse = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  
  

```

Accessible from IDE

Yes

Platform Availability

*   Server side Mobile Web (basic)
*   Server side Mobile Web (BJS)

### contextMenu

Shows the list of actions (appropriate to the widget in focus) as menu items.

Due to BlackBerry platform limitation, to display a context menu for an Box, you must define an [onclick event](Box_Events.md#onclick() for the Box.

The following are the characteristics of a context menu on _BlackBerry_ platform:

*   You can invoke the context menu either by clicking on the widget (applicable only on BlackBerry versions 6.x and above) or by a long press on the screen (or trackpad).
*   You can choose to add icons to indicate the menu items in the context menu (applicable only on BlackBerry versions 6.x and above).
*   BlackBerry layouts menu items in a 3 item grid view. The menu items _Switch Application_, _Help_, _Close_, and _Full Menu_ are added automatically based on the number of menu items added in the context menu. For example, If you add a context menu with 2 items, it will display _Full Menu_ item along with the items added. If you add a context menu with 3 items, it will display _Full Menu_, _Help_, _Switch Application_ items along with the items added.
*   If the focus is on a widget that has a context menu; and if you click the _"menu key"_, the Full Menu appears along with the context menu items.
*   On Blackberry Non-Touch Devices, only _Full Menu_ item is displayed irrespective of number of items added in the context menu.

The context menu items in the _Full Menu_ will disappear if the focus is shifted from the widget which has the context menu.

The following images illustrate the context menu on various BlackBerry devices:

  
| BlackBerry 6.x | BlackBerry Touch Device (<6.x) | BlackBerry Non-Touch Device (<6.x) |
| --- | --- | --- |
| ![Context Menu](Resources/Images/Context Menu.png) | ![Blackberry Touch Device (<6.x)](Resources/Images/BB Storm_Menu.PNG) | ![Blackberry Non-Touch Device (<6.x)](Resources/Images/BB_4.7_Menu.PNG) |

Syntax

**JavaScript:** contextMenu

**Lua:** contextmenu

Type

**JavaScript:** Array (voltmx.ui.Menuitem)

**Lua:** Table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining contextMenu items for Windows 8 platform.  
var appMenu1 = {id:"appmenuitemid1", text:"Add", image:"tc.png", onclick:callbackMenuItem1 };
var appMenu2 = {id:"appmenuitemid2", text:"Remove", image:"tc.png", onclick:callbackMenuItem2 };
var appMenu3 = {id:"appmenuitemid3", text:"Edit", image:"tc.png", onclick:callbackMenuItem3};
var appMenu4 = {id:"appmenuitemid4", text:"Close", image:"tc.png", onclick: callbackMenuItem4};
   
function callbackMenuItem1()
{
       alert("Clicked on First menu item");
}

function callbackMenuItem2()
{
       alert("Clicked on Second menu item");
}

function callbackMenuItem3()
{
       alert("Clicked on Third menu item");
}

function callbackMenuItem4()
{
       alert("Clicked on Fourth menu item");
}  
  
//Defining the box with contextMenu:\[appMenu1,appMenu2,appMenu3,appMenu4\]  
var basicConfBox = {id : "boxBorderCollapse", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = {**contextMenu:\[appMenu1,appMenu2,appMenu3,appMenu4\]**};  
  
//Creating the box.  
var boxBorderCollapse = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  
  

```

  
Accessible from IDE

No

Platform Availability

*   Android/Android Tablet
*   BlackBerry
*   Windows 8

### contextMenu (for Desktop Web only)

The context specific menu will be displayed with the array of menu items (appropriate to the widget in focus) on right-click mouse.

**Default:**_None_

A series of steps to be followed to use contextMenu:

1.  Define a menutemplate under project > templates > menus.  
      
      
      
    1.  Go to Applications View.
    2.  Expand the application for which you want to create a menu template.
    3.  Navigate to templates and expand menus, right-click desktop and select New Menu Template. The Create a New Menu window appears.
    4.  Enter a Name for the template and click Finish.
    5.  A new form is created. Drag-drop an HBox and then a VBox within an HBox. You can add other widgets within these widgets.
2.  Define a contextmenu template under project > templates > contexmenus.  
      
      
      
    1.  Go to Applications View.
    2.  Expand the application for which you want to create a contextmenu template.
    3.  Navigate to templates and expand contextmenus, right-click desktop and select New ContextMenu Template. The Create a New ContextMenu window appears.
    4.  Enter a Name for the template and click Finish. A new form is created
    5.  Drag-drop a menucontainer. You can drag-drop a menucontainer widget only.
    6.  (optional) Select menuItemTemplate from the drop down.
    7.  Define data using the data property.
3.  Go to your project and then to desired form and drag-drop a hbox and navigate to Desktop Web properties in Widget Properties window.
4.  Select the contextmenu template from the dropdown.

Syntax

**JavaScript:** contextMenu

Type

**JavaScript:** Array (voltmx.ui.Menuitem)

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining contextMenu template.  
  
function initializeaddtoabc() {
    menucontainer12068 = new voltmx.ui.MenuContainer({
        "id": "menucontainer12068", "isVisible": true,
        "data": \[  
        {template: hbox12068, "label12068": {"text": "India"},
               children: \[{template: hbox12068, "label12068": {"text": "Mumbai"},
               "image212068": {}, children: \[\] }\]
        }, {template: hbox12068, "label12068": {"text": "Srilanka" },
            "image212068": {}
        }\],
        "widgetDataMap": {"label12068": "label12068","image212068": "image212068"},
        "menuItemTemplate": hbox12068}, {"widgetAlignment": constants.WIDGET\_ALIGN\_CENTER,
        "containerWeight": "50", "margin": \[0, 0, 0, 0\],
        "padding": \[0, 0, 0, 0\], "marginInPixel": false,
        "paddingInPixel": false
    }, {
        "viewType": constants.MENU\_CONTAINER\_VIEW\_TYPE\_CONTEXTVIEW
    });
};  
  
//Defining the box with contextMenu:menucontainer12068  
var basicConfBox = {id : "boxBorderCollapse", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = {**contextMenu:menucontainer12068**};  
  
//Creating the box.  
var boxBorderCollapse = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  
  

```

  
  
Accessible from IDE

Yes

Platform Availability

Available on Desktop Web platform only.

### hoverSkin

Specifies the look and feel of a widget when the cursor hovers on the widget.

Syntax

**JavaScript:** hoverSkin

**Lua:** hoverskin

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the box with hoverSkin:"hskin"  
var basicConfBox = {id : "boxBorderCollapse", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};  
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = {**hoverSkin:"hskin"**}  
  
//Creating the box.  
var boxBorderCollapse = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  
  

```

Accessible from IDE

Yes

Availability on platforms

*   Windows 8
*   Desktop Web

### layoutMeta

A custom Object with the key, value pairs that developer can use to provide the meta info about the grid layout. The following are the mandatory keys required to be part of the Meta.

The following are not visible PSPs in IDE. The data for layoutmeta data is set when you set grid layout view properties for rows and columns.

**rows :** no of grid rows

**cols** : no of grid cols

**colmeta**: \[{width : "width in %"}\]

The sum total of the % widths of each of the columns in the grid layout should add up to 100%

Syntax

**JavaScript:** layoutMeta

**Lua:** layoutmeta

Type

**JavaScript:** JSObject

**Lua:** Table

Read / Write

No

JavaScript Example

```
//Defining the properties for a Box with the fixedHeightRow:true.
var basicConfBox = {id : "boxIdTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = {layoutType: constants.CONTAINER\_LAYOUT\_GRID,
        layoutMeta: {
            cols: 4,
            colmeta: \["25", "25", "25", "25"\],
            rows: 4
        }
    }; 
  
//Creating the box.
boxIdTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  

```

Accessible from IDE

Yes

Availability on platforms

*   Windows 8
*   Desktop Web

### layoutType

Defines the type of the layout of the widget.

Layout type is not visible as a psp. It is set when the user applies XYLayout or Grid Layout on a form.  
  

Syntax

**JavaScript:** layoutType

**Lua:** layouttype

Type

**JavaScript:** String

**Lua:**String

Read / Write

No

JavaScript Example

```
//Defining the properties for a Box with the fixedHeightRow:true.
var basicConfBox = {id : "boxIdTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = {layoutType: constants.CONTAINER\_LAYOUT\_GRID,
        layoutMeta: {
            cols: 4,
            colmeta: \["25", "25", "25", "25"\],
            rows: 4
        }
    }; 
  
//Creating the box.
boxIdTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  

```

Accessible from IDE

Yes

Availability on platforms

*   Windows 8
*   Desktop Web

### viewConfig

View Configuration is applicable only when container widget layout is grid.

For more information on applying the Grid layout please refer VoltMX Studio User Guide.

ViewConfig displays two types of views:

*   Normal view
*   Grid view

The type of view will be determined by the Reference Width and Reference Height of the view config property, if reference height and width are greater than 0, then view set is grid view.

For example, if you set an _onClick_ to a box, the _onClick_ event will be executed whenever you click each cell. Set righttap event using _setGestureRecognizer_ to a box and you can see right click behavior on each cell of grid view.

Possible value for Reference width and Height:

Default application displays 0,you can give any number greater than 0 to get grid view type of a widget.

Possible values for Size Mode:

*   constants.GRID\_TYPE\_FIXED
*   constants.GRID\_TYPE\_GROW\_COLUMNS
*   constants.GRID\_TYPE\_GROW\_ROWS  
      
    

Syntax

**JavaScript:** viewConfig

**Lua:** viewconfig

Type

**JavaScript:**JSObject

**Lua:** table

Read / Write

No

JavaScript Example

```
//Defining the properties for a Box with the fixedHeightRow:true.
var basicConfBox = {id : "boxIdTest", isVisible:true, orientation:constants.BOX\_LAYOUT\_HORIZONTAL};
var layoutConfBox = {contentAlignment : constants.CONTENT\_ALIGN\_TOP\_CENTER, containerWeight:100, vExpand:true};  
var PSPConfBox = { viewConfig: {
           referenceHeight: 0,
           sizeMode: "constants.GRID\_TYPE\_FIXED",
           referenceWidth: 0
        }
};  
  
//Creating the box.
boxIdTest = new voltmx.ui.Box(basicConfBox, layoutConfBox, PSPConfBox );  
  

```

Accessible from IDE

Yes

Platform Availability

This property is available on Windows 8 platform.
