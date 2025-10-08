                               


TabPane Events
==============

TabPane has the following events associated with it:

* * *


<details close markdown="block"><summary>onTabClick Event</summary>

* * *

Event callback invoked when the tab is clicked. This event is triggered when you expand or collapse any Tab.

### Syntax

```

onTabClick(tabPane,tabIndex)
```

### Parameters

**tabpane**

Reference to the TabPane widget that raised the event.

**tabIndex**

Specifies the Index number of a tab in the tabPane.

### Read/Write

Read + Write

### Example

```

//Sample code to set the onTabClick event callback to a Link widget.

frmTab.myTab.onTabClick=onTabClickCallback;


function onTabClickCallback(tabpane, tabIndex){
   //Write your logic here.
}

```

### Platform Availability

*   Available in the IDE
*   Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>postOnclickJS Event</summary>

* * *

This event allows the developer to execute custom JavaScript function after the _onTabClick_ callback of the TabPane is invoked.

### Syntax

```

postOnclickJS
```

### Read/Write

Read + Write

### Remarks

This is applicable only for Mobile Web channel. The function must exist in a JavaScript file under project>module>js folder.

### Example

```

//Sample code to set the postOnclickJS event callback to a TabPane widget.

frmTab.myTab.postOnclickJS=postOnclickCallback;


function postOnclickCallback(tab){
   //Write your logic here.
}

```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (Advanced) platform only

* * *

</details>
<details close markdown="block"><summary>preOnclickJS Event</summary>

* * *

This event allows the developer to execute custom JavaScript function before the _onTabClick_ callback of the TabPane is invoked.

### Syntax

```

preOnclickJS
```

### Read/Write

Read + Write

### Remarks

This is applicable only for Mobile Web channel. The function must exist in a JavaScript file under project>module>js folder.

In for the events preOnclickJS and postOnclickJS you will not be able to access application model or APIs, as these functions are executed in browser whereas the remaining JS modules are executed in server. For these events you can access browser objects ( window, document etc..) to change UI or perform some validation before server event. If the event preOnclickJS returns true, only then the request is sent to server for subsequent action.  
  
You have to specify the modules to be loaded in browser using import JS tab, only then these files get included in.html script tag otherwise you will not be able to access the objects defined in those modules.

Example

```

//Sample code to set the preOnclickJS event callback to a TabPane widget.

frmTab.myTab.preOnclickJS=preOnclickCallback;


function preOnclickCallback(tab){
   //Write your logic here.
}

```

### Platform Availability

*   Available in the IDE
*   Available on Server side Mobile Web (BJS and Advanced) platform only

* * *

