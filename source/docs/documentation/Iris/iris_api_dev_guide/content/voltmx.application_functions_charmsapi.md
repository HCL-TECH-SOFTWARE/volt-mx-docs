---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Functions
=========

The Charms API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.html).

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.createSettingsMenu](javascript:void(0);)

* * *

This API enables you to create a _Charm settings_ menu for an application.

Syntax

voltmx.applicationcreateSettingsMenu ([id](#id), [menuSettings](#menuSettings))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| id \[String\] - Mandatory | Identifier of the Charm setting menu created. |
| menuSettings \[Hash table\] - Mandatory | The menuSettings hash table comprises the following key-value pairs:**id**: ID of the Charm menu item.**text**: Name of the menu item. |

Example

{% highlight voltMx %}//To create a Charm settings menu, enter the following  
var settingsMenuItem1 = {
    id: "about",
    text: "About"
};
var settingsMenuItem2 = {
    id: "help",
    text: "Help"
};
var settingsMenu = [settingsMenuItem1, settingsMenuItem2];
voltmx.application.createSettingsMenu("mysettingsmenu", settingsMenu);
{% endhighlight %}

Return Values

None.

Special Considerations

If a Charm setting menu is already created with the identifier passed, a new Charm setting menu will be created and the old Charm setting menu will be replaced with the new one. The same holds true for menu items as well.

At least one menu item must be present in the Charm settings menu created. A Charm settings menu with no menu items is invalid.

Platform Availability

Available on Windows only.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.setCurrentSettingsMenu](javascript:void(0);)

* * *

This method uses the unique identifier which represents the Charm settings menu and sets it as current settings menu. There can be only one current settings menu that can be set any time. Calling this method multiple times, replaces the current Charm settings menu.

Syntax

voltmx.application.setCurrentSettingsMenu([id](#id2))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| id \[String\] - Mandatory | Identifier of the Charm setting menu to be set. |

 

Example

{% highlight voltMx %}//To create a Charm settings menu, enter the following  
voltmx.application.setCurrentSettingsMenu("myMenu");
{% endhighlight %}

Return Values

None

Platform Availability

Available on Windows only.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.getCurrentSettingsMenu](javascript:void(0);)

* * *

This method returns the unique identifier of the current menu that is set through getCurrentSettingsMenu.

Syntax

voltmx.application.getCurrentSettingsMenu()

Input Parameters

None

Example

{% highlight voltMx %}//To get the unique identifier a Charm settings menu, enter the following  
voltmx.application.getCurrentSettingsMenu();

//Alert the Current Charm Settings menu
alert("Current charm menu id is: " + currCharmMenuId);
{% endhighlight %}

Return Values

  
| Return value | Description |
| --- | --- |
| Unique Identifier | Identifier of the Charm setting menu to be set. |

 

Platform Availability

Available on Windows only.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.addSettingsMenuItemAt](javascript:void(0);)

* * *

This API enables you to add a menu item at a given index in the Charm settings menu.

Syntax

voltmx.application.addSettingsMenuItemAt ([id](#id3), [index](#index), [menuSettings](#menuSettings2))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| id \[String\] - Mandatory. | Identifier of the Charm setting menu created. |
| index \[Number\] - Mandatory. | The index at which the menu item must be added. The index value lies between 0 and n-1. If the index is beyond the current length of the Charm menu items then the item is added to the end. |
| menuSettings \[Hash table\] - Mandatory | The menuSettings hash table comprises the following key-value pairs: **id**: ID of the Charm menu item. **text**: Name of the menu item. **onClick**: onclick event to be executed for the menu item. |

Example

To add a menu item at a given index, enter the following:

{% highlight voltMx %}//The below function is the callback function for onClickClosure event of app menu item with id "appmenuitemid3".
function onClickClosure3() {
    //proceed with the logic
}

var settingsMenuItem1 = {
    id: "about",
    text: "About",
    onClick: onClickClosure3
};

//Adding the above app menu item at the index 3.
voltmx.application.addSettingsMenuItemAt("accountMenu", 3, settingsMenuItem1);
{% endhighlight %}

Return Values

None.

Platform Availability

Available on Windows only.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.removeSettingsMenuItemAt](javascript:void(0);)

* * *

This API enables you to removes the specified App Menu item based on the index.

Syntax

voltmx.application.removeSettingsMenuItemAt ([id](#id4), [index](#index2))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| id \[String\] - Mandatory | Identifier of the Charm setting menu created. |
| index \[Number\] - Mandatory | The index from which the menu item must be removed. The index value lies between 0 and n-1. |

 

Example

To remove a menu item from a given index, enter the following:

{% highlight voltMx %}//Removing a menu item from the index 3.
voltmx.application.removeSettingsMenuItemAt("charmmenu", 3);

{% endhighlight %}

Return Values

None

Platform Availability

Available on Windows only.

* * *

![](resources/prettify/onload.png)
