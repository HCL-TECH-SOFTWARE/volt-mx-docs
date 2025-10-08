                            


voltmx.forcetouch Namespace
=========================

The voltmx.forcetouch namespace provides the functions to add, remove, enable, disable, and access dynamic Quick Action items. It contains the following API elements.

Functions
---------

The `voltmx.forcetouch` namespace contains the following functions.


<details close markdown="block"><summary>voltmx.forcetouch.disableQuickActionItems</summary>

* * *

The `disableQuickActionItems` function disables pinned shortcuts that were previously enabled. If the target shortcuts are already disabled, this function does not take any action. It sets the mentioned disabled message for all Quick Action items. When you try to launch the disabled actionItem shortcut, a relevant toast message is displayed. You should use this function for dynamic shortcut Quick Action items, and you must not call the function with static quickAction IDs.

### Syntax

disableQuickActionItems(Object quickActionList, String disableMessage)  

### Input Parameters

An object of quickAction ID and the disable message.

### Example 1

```

var shortcuts = {
    "com.voltmx.first1": "disable1",
    "com.voltmx.first.imageName": "your shortcut disabled2"
};
voltmx.forcetouch.disableQuickActionItems(shortcuts, "Disabled all Shortcuts");			
```

Note: The above example disables all shortcut IDs (com.voltmx.first1 and com.voltmx.first.imageName) with the common disable message as "Disabled all Shortcuts".

### Example 2

```

voltmx.forcetouch.disableQuickActionItems(shortcuts);				
```

Note: This example disables the shortcuts mentioned above with their respective disable messages.

### Return Values

None.

### Platform Availability

*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.enableQuickActionItems</summary> 

* * *

The `enableQuickActionItems` function enables pinned shortcuts that were previously disabled. If the target shortcuts were already enabled, this function does not take any action.

### Syntax

enableQuickActionItems(Array quickActionId)  

### Input Parameters

An array of quickAction IDs.

### Example

```

var quickActionItems = [{
    "id": "com.voltmx.first",
    "title": "firstPage",
    "subtitle": "takes to first page",
    "icon": "option1.png",
    "info": {
        "feed": "feed to first form"
    }
}, {
    "id": "com.voltmx.second",
    "title": "secondPage",
    "subtitle": "takes to second page",
    "icon": "option1.png",
    "info": {
        "feed": "feed to second form"
    }
}];           
voltmx.forcetouch.enableQuickActionItems(quickActionItems);

```

### Return Values

None.

### Platform Availability

*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.getPinnedQuickActionItems</summary> 

* * *

The `getPinnedQuickActionItems` function returns an ID list of all the pinned Quick Action items. This function helps you pin a shortcut of any of the functional options of an app on the home screen of a mobile device.

### Syntax
```

getPinnedQuickActionItems();
```

### Input Parameters

None.

### Example

```

var pinnedQuickActionArray=voltmx.forcetouch.getPinnedQuickActionItems();
alert("The pinned quick action Items are:"+pinnedQuickActionArray);

```

### Return Values

An array of ID strings.

### Platform Availability

*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.getQuickActionItems</summary> 

* * *

The `getQuickActionItems` function gets an array of dynamic Quick Action items that are set in the app.

### Syntax

voltmx.forcetouch.getQuickActionItems()  

### Example

```

try {
    var quickActionItems = voltmx.forcetouch.getQuickActionItems();
    alert(JSON.stringify(quickActionItems));
} catch (args) {
    alert(args.toString());
}			
```

### Input Parameters

None.

### Return Values

A string array of dynamic Quick Action items containing only IDs, if any are set in the app. Otherwise, this function returns an empty array.

### Remarks

The returned array does not contain icon key-value pairs.

Platform Availability

*   iOS 9.0 and later
*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.getStaticQuickActionItems</summary> 

* * *

The `getQuickActionItems` function returns an array of immutable or static Quick Action items that are set in the app.

### Syntax

voltmx.forcetouch.getStaticQuickActionItems()  

### Example

```

var staticQuickActionArray = voltmx.forcetouch.getStaticQuickActionItems();
alert("The static quick action Items are:" + staticQuickActionArray);

```

### Input Parameters

None.

### Return Values

An array of ID strings.

### Platform Availability

*   iOS 9.0 and later
*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.removeQuickActionItems</summary> 

* * *

The `removeQuickActionItems` function removes all the dynamic Quick Action items that are set in the app.

### Syntax
```

voltmx.forcetouch.removeQuickActionItems()
```

### Example

```

voltmx.forcetouch.removeQuickActionItems(); //removes all quick action items
```

### Input Parameters

None.

### Return Values

None.

### Platform Availability

*   iOS 9.0 and later
*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.removeQuickActionItems</summary> 

* * *

The `removeQuickActionItems` function removes the array of specified dynamic Quick Action items.

### Syntax

voltmx.forcetouch.removeQuickActionItems(  
    Array ID);

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| ID | An array of quickNotification IDs. |

### Example

```

var quickActionArray = voltmx.forcetouch.getQuickActionItems();
voltmx.forcetouch.removeQuickActionItems(quickActionArray);
```

### Return Values

None.

### Platform Availability

*   iOS 9.0 and later
*   Android 7.1 and later or API Level 25 or later

</details>
<details close markdown="block"><summary>voltmx.forcetouch.setQuickActionItems</summary> 

* * *

The `setQuickActionItems` function sets dynamic Quick Action items in the app.

### Syntax

voltmx.forcetouch.setQuickActionItems(quickActionItems)  

### Input Parameters

_quickActionItems_ - Mandatory.

An array of key-value pairs that contains the following values.

> | Key | Description |
> | --- | --- |
> | id | A string containing an app-defined id the home screen quick action. For example, com.appName.formName. |
> | title | A string that holds a user-visible title of the home screen quick action. This value can be localized. |
> | subtitle | A user-visible string that holds the subtitle of the home screen quick action. This value can be localized. |
> | icon | An optional value that selects the icon for the action. For system icons, this value can be set to one of the [Force Touch System Icon Constants](voltmx.forcetouch_namespace_constants.md#voltmx-forcetouch-constants). For iOS, if your app uses a custom icon that is included in the app's bundle, set this value to a string containing the filename of the icon. Also for iOS, if your app uses a contact's picture as its quick action icon, set this value to a ReferenceTable object for the contact that your app obtains by calling the [voltmx.contact.find](voltmx.contact_functions.md#contact.2) function. For Android, you can set the value of icon as either an image bundled with the app or as a Volt MX image Object. |
> | info | A dictionary with developer-provided key-value pairs that contain app-defined information about the home screen quick action. This information is used by the app to implement the action. |

  

### Example 1

You can create quick actions with system-defined icons, a custom image in your app's bundle, or with a picture from a contact in the device. To select a custom image as a Quick Action's icon, your app must specify the icon's file name as value for the icon key in the quickActionItems of the [setQuickActionItems](#setQuick) function.

The following example shows how to system-defined icon as the icon for the Quick Action.

```

var quickActionItems = [{
    "id": "com.voltmx.first",
    "title": "firstPage",
    "subtitle": "takes to first page",
    "icon": voltmx.forcetouch.QUICK_ACTION_ICON_TYPE_COMPOSE,
    "info": {
        "feed": "feed to first form"
    }
}, {
    "id": "com.voltmx.second",
    "title": "secondPage",
    "subtitle": "takes to second page",
    "icon": voltmx.forcetouch.QUICK_ACTION_ICON_TYPE_HOME,
    "info": {
        "feed": "feed to second form"
    }
}];
var actionsSet = voltmx.forcetouch.setQuickActionItems(quickActionItems);
```

### Example 2

The following example shows how to specify a custom image as the icon for the Quick Action and how to use the image from a contact as the icon for a Quick Action.

```

var quickActionItems = [{
    //Icon using custom image
    "id": "com.voltmx.first",
    "title": "firstPage",
    "subtitle": "Takes you to the first page",
    "icon": "customImage1",
    "info": {
        "feed": "Feed to the first form"
    }
}, {
    //Icon using contact picture
    "id": "com.voltmx.second",
    "title": "secondPage",
    "subtitle": "Takes you to second page",
    "icon": {
        "firstName": "John",
        "lastName": "Doe",
        "company": "Volt MX"
    },
    "info": {
        "feed": "Feed to the second form"
    }
}];
var actionsSet = voltmx.forcetouch.setQuickActionItems(quickActionItems);
```

### Example 3

Note: For this example, you may get an alert on Iris to write the code in dot notation. Please ignore that alert and execute the provided code as is.

```

function onAppServiceCallback(params) {

    alert("launchoptions: " + JSON.stringify(params));

    //if launch mode = 3 &amp;&amp; quickactionitem key present in launchparams

    //denotes quick action item launch

    if (params.launchmode == 3) {

        var quickActionItem = params.launchparams.quickactionitem;

        if (quickActionItem) {

            if (quickActionItem.id == "firstform") {

                return frmFirst;

            } else if (quickActionItem.id == "mapviewform") {

                return frmSecond;

            } else if (quickActionItem.id == "basket") {

                return frmThird;

            } else if (quickActionItem.id == "AccountDetails") {

                return frmFourth;

            }

        }

    }

}
```

### Return Values

A Boolean value that is `true` if at least one dynamic Quick Action item was set in the app; otherwise the value is `false`.

### Platform Availability

*   iOS 9.0 and later
*   Android 7.1 and later or API Level 25 or later

</details>
![](resources/prettify/onload.png)
