   

Button - Platform Specific Properties
-------------------------------------

The platform specific properties for Button Widget are as follows:

*   [blockedUISkin](#blockeduiskin)
*   [contextMenu](#contextmenu)
*   [externalURL](#externalurl)
*   [glowEffect](#gloweffect)
*   [hoverSkin](#hoverskin)
*   [pressedSkin](#pressedskin)
*   [showProgressIndicator](#showprogressindicator)
*   [submitURL](#submiturl)
*   [tooltip](#tooltip)

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
//Defining the properties for a button with blockedUISkin:"blkUISkin"
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**blockedUISkin:"blkUISkin"**};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);

//Reading blockedUISkin of the button 
alert("Button blockedUISkin ::"+button.blockedUISkin);  
  

```

Accessible from IDE

Yes

Platform Availability

*   Desktop Web
*   Server side Mobile Web (advanced)
*   SPA (iPhone/Android/BlackBerry/Windows NTH)

### contextMenu

A context menu is a menu that appears upon clicking a button. A context menu typically offers a limited set of choices that are applicable for that button. Usually these choices are actions, related to the button.

If you define a context menu for a button, the steps involved to invoke the context menu on a platform and the appearance of the context menu varies.

In Desktop Web, on right-click mouse the context specific menu will be displayed with the array of menu items.

The following are the characteristics of a context menu on _BlackBerry_ platform:

*   You can invoke the context menu either by clicking on the widget (applicable only on BlackBerry versions 6.x and above) or by a long press on the screen (or trackpad).
*   You can choose to add icons to indicate the menu items in the context menu (applicable only on BlackBerry versions 6.x and above).
*   BlackBerry layouts menu items in a 3 item grid view. The menu items _Switch Application_, _Help_, _Close_, and _Full Menu_ are added automatically based on the number of menu items added in the context menu. For example, If you add a context menu with 2 items, it will display _Full Menu_ item along with the items added. If you add a context menu with 3 items, it will display _Full Menu_, _Help_, _Switch Application_ items along with the items added.
*   If the focus is on a widget that has a context menu; and if you click the _"menu key"_, the Full Menu appears along with the context menu items.
*   On Blackberry Non-Touch Devices, only _Full Menu_ item is displayed irrespective of number of items added in the context menu.

The context menu items in the Full Menu will disappear if the focus is shifted from the widget which has the context menu.

The following images illustrate the context menu on various BlackBerry devices:  

  
| BlackBerry 6.x | BlackBerry Touch Device (<6.x) | BlackBerry Non-Touch Device (<6.x) |
| --- | --- | --- |
| ![Context Menu](../Resources/Images/Context Menu.png) | ![Blackberry Touch Device (<6.x)](../Resources/Images/BB Storm_Menu.PNG) | ![Blackberry Non-Touch Device (<6.x)](../Resources/Images/BB_4.7_Menu.PNG) |

  
The following are the characteristics of a context menu on _Android_ platform:

*   You can invoke the context menu by a long press on the widget.
*   The menu items are displayed as text (no support for icons).
*   There is no support for sub-menus in a context menu.

The following image illustrates the context menu on Android platform:

![Context Menu on Android](../Resources/Images/context_menuAndroid.png)

Syntax

**JavaScript:** contextMenu

**Lua:** contextmenu

Type

**JavaScript:** Array(voltmx.ui.MenuItem)

**Lua:** Table

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with contextMenu:\[menuItem1, menuItem2, menuItem3\], Where these menu items should be created and made accessible.
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**contextMenu:\[menuItem1,menuItem2,menuItem3\]**};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

On Android platform, the image icon, separator, and submenu properties are not supported.

  
Accessible from IDE

No

Platform Availability

*   Android/Android Tablet
*   BlackBerry
*   Windows 8

### externalURL

Specifies that the URL must be opened directly from the web site without having to contact the VoltMX Server.

For example, in a Banking Application, for Terms and Conditions section, you can provide an external URL which will open the required section in a new window rather than opening the section in the same window.

If you specify an _External URL_, the URL opens in a new window.

Syntax

**JavaScript:** externalURL

**Lua:** externalurl

Type

**JavaScript:** String

**Lua:** String

Read / Write

No

JavaScript Example

```
//Defining the properties for a button with externalURL: http://www.voltmxsolutions.com.
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**externalURL: http://www.voltmxsolutions.com** };

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on Server side Mobile Web (advanced) platform only.

### glowEffect

Specifies if there must be glow effect when you touch the button.

**Default:** _false_

If set to _false_, the button will not have glow effect.

If set to _true_, the button will have glow effect.

The glow appears on the button only for a moment on touch and disappears.

The following image illustrates a button with and without the glow effect:

![](../Resources/Images/Glow Effect.png)

Syntax

**JavaScript:** glowEffect

**Lua:** gloweffect

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties for a button with glowEffect:true.
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**glowEffect:true**};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

*   iPad
*   iPhone

### hoverSkin

Specifies the look and feel of a widget when the cursor hovers on the widget.

Syntax

**JavaScript:** hoverSkin

**Lua:** hoverskin

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes

Accessible from IDE

Yes

Availability on platforms

*   Windows 8
*   Desktop Web

### pressedSkin

Specifies the skin to indicate that the Button is pressed or clicked.

If you do not specify pressedSkin, the [focusSkin](Button_Basic_Properties.md#focusSki) is applied.

Syntax

**JavaScript:** pressedSkin

**Lua:** pressedskin

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with pressedSkin:"presSkin"
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**pressedSkin:"presSkin"**};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on Android/Android Tablet

### showProgressIndicator

Specifies if the progress indicator must be displayed when the button is clicked. This is typically set to _true_, if it is known at design time that the button _onClick_ event handling is going to trigger a long running call.

**Default**: true

The following image illustrates the progress indicator on iPhone:

![](../Resources/Images/Need Loading Indicator During Post Show.png)

Syntax

**JavaScript:** showProgressIndicator

**Lua:** showprogressindicator

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties for a button with showProgressIndicator:true
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**showProgressIndicator:true**};

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

*   iPad
*   iPhone
*   Server side Mobile Web (basic)
*   Server side Mobile Web (BJS)
*   Server side Mobile Web (advanced)

### submitURL

Specifies the URL to which the current Form data should be submitted, without contacting VoltMX Server. This is typically required when the data collection is done using VoltMXOne Studio Form but is actually posted to a third-party site.

**Default:** _false_

If set to _false,_ then the URL is submitted contacting the VoltMX Server.

If set to _true,_ then the URL is submitted without contacting the VoltMX Server.

For example, for an application that requires the user to provide confidential data, you can route the data directly to the server of the website without contacting the VoltMX Server using the [externalURL](#externalurl) property. Doing so, opens the resultant site in the same window rather than opening it in a new window.

Syntax

**JavaScript:** submitURL

**Lua:** submiturl

Type

**JavaScript:** Boolean

**Lua:** Boolean

Read / Write

No

JavaScript Example

```
//Defining the properties for a button with submitURL:http://www.voltmxsolutions.com
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here"};
var btnLayout={containerWeight:100, padding:\[5,5,5,5\], margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};
var btnPSP={**submitURL:http://www.voltmxsolutions.com** };

//Creating the button.
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  
  

```

Accessible from IDE

Yes

Platform Availability

Available on Server side Mobile Web (advanced) platform only.  

### toolTip  

Specifies the hint text when the cursor hovers over a widget, without clicking it. The text entered in the tooltip appears as a small box when the cursor hovers over a widget.

Syntax

**JavaScript:** toolTip

**Lua:** tooltip

Type

**JavaScript:** String

**Lua:** String

Read / Write

Yes - (Read and Write)

JavaScript Example

```
//Defining the properties for a button with toolTip:sample text  
var btnBasic={id:"button1", isVisible:true, skin:"btnSkin", focusSkin:"btnFSkin", text:"Click Here" };  
var btnLayout={containerWeight:100,padding:\[5,5,5,5\],margin:\[5,5,5,5\], hExpand:true, vExpand:false, displayText:true};  
var btnPSP={**toolTip:"sample text"**};  
  
//Creating the button.  
var button1 = new voltmx.ui.Button(btnBasic, btnLayout, btnPSP);  

```

Accessible from IDE

Yes

Platform Availability

*   Windows 8
*   Desktop Web
