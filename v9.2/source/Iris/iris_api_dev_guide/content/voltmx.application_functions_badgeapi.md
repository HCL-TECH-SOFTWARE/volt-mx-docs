                             


Functions
=========

The Badge API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.md).


<details close markdown="block"><summary>voltmx.application.getApplicationBadgeValue</summary>

* * *

 

This API allows you to read the badge value (if any) attached to the given application icon. If the applications icon does not have any badge value attached to it, this API returns an empty string.

Syntax

voltmx.application.getApplicationBadgeValue()

Input Parameters

None

Example

```
gettingBadge: function() {
    var badge = voltmx.application.getApplicationBadgeValue();
    alert("The badge value is " + badge);
},
```

Return Values

| Return Value | Description |
| --- | --- |
| badgeValue \[String\] | Returns the badge value applied to the application icon If the application icon has no badge value attached to it, it returns null/nil. |

Platform Availability

Available only on iPhone and iPad.  

* * *

</details>
<details close markdown="block"><summary>voltmx.application.getAppMenuBadgeValue</summary>

* * *

 

This API enables you to read the badge value (if any) attached to the specified app menu item. If the specified app menu item does not have any badge value attached to it, the API returns an empty string.

Syntax

voltmx.application.getAppMenuBadgeValue([appmenuID](#appMenuId2), [menuItemID](#menuItemId2))

Input Parameters

| Parameter | Description |
| --- | --- |
| appMenuId \[String\] - Mandatory | If you are setting the badge for an app menu item that was created dynamically, use the same ID that was used to create the app menu item.If you are setting the badge for an app menu item that was created from the IDE, use the ID available in the generated script file. |
| menuItemId \[String\] - Mandatory | Identifier of the app menu item from which the badge value is to be read. |

 

Example

```
onClickMenuItem1: function() {
    alert("The Badge Value of Accounts App Menu Item is " + voltmx.application.getAppMenuBadgeValue("SampleAppMenu", "appmenuitemid1"));

},
onClickMenuItem2: function() {
    alert("The Badge Value of Examination App Menu Item is " + voltmx.application.getAppMenuBadgeValue("SampleAppMenu", "appmenuitemid2"));

},
```

Return Values

| Return Value | Description |
| --- | --- |
| badgeValue \[String\] | Returns the badge value applied to the specified app menu. If the specified app menu has no badge value attached to it, it returns an empty string. |

Platform Availability

Available only on iPhone and iPad.

* * *

</details>
<details close markdown="block"><summary>voltmx.application.setApplicationBadgeValue</summary>

* * *

This API allows you to set a badge value to an application icon on the mobile desktop at the top-right corner of the application icon. If you pass an empty string as a parameter, the badge applied on the application icon is removed.

Syntax

voltmx.application.setApplicationBadgeValue([badgeValue](#badgeValue), [tileID](#tileID))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| badgeValue \[String\] - Mandatory | Value of the badge. The value that you specify in the badgeValue parameter appears within the badge. Do not pass any other value except a numerical value. For example, to set a badge value for an appicon, specify the value as "2" instead of 2. If the length of the badge value is greater than 1 the badge is a rounded rectangle. For example, if you specify the value of the badge as 88, the number appears in a rounded rectangular badge. If the length of the badge value is 1, the badge is always a circle. |
| tileID \[String\] - Optional | The tile ID defined for the secondary tile using the [setSecondaryTile](voltmx.application_functions_livetiles.md#setsecon) API. The parameter is applicable only for Windows. |

 

Example

```
settingBadge: function() {
    this.view.btnBadge.setBadge("0", ""); //Set badge value on  button widget
    voltmx.application.setApplicationBadgeValue("" + 0);
},
BadgeIncrease: function() {
    var counter = voltmx.os.toNumber(this.view.btnBadge.getBadge()) + 1; // read badge value from button and increment it with 1 
    voltmx.print("this gets executed " + counter + "type is " + typeof(counter));
    this.view.btnBadge.setBadge("" + counter, ""); // Set badge value on the button widget
    voltmx.application.setApplicationBadgeValue("" + counter); //Set badge value on app icon
```

The badge appears as follows when you execute the code given above:

![](resources/images/badge_for_app_icon_with_large_number.png)

Return Values

None

UI Behavior

The badge appears with white font on a red background. The shape of the badge varies with its value:

*   If the badge value is a single digit, the badge shape is a circle.
    
    ![](resources/images/badge_with_single_digit_75x90.png)
    
*   If the badge value contains multiple digits, the badge shape is a rectangle with rounded corners and borders.
    
    ![](resources/images/badge_with_multiple_digits.png)![](resources/images/badge_on_appmenu_183x53.png)
    

Platform Availability

*   iOS
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.application.setAppMenuBadgeValue</summary>

* * *

This API allows you to set a badge value to the specified app menu item on the top-right corner of the app menu item. If you pass an empty string as the parameter, the badge value of the app menu item is cleared.

Syntax

voltmx.application.setAppMenuBadgeValue([appmenuID](#appMenuId), [menuItemId](#menuItemId),[badgeValue](#badgeValue2))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| appMenuId \[String\] - Mandatory | If you are setting the badge for an app menu item that was created dynamically, use the same ID that was used to create the app menu item.If you are setting the badge for an app menu item that was created from the IDE, use the ID available in the generated script file. |
| menuItemId \[String\] - Mandatory | Id of the app menu item to which the badge value to be set. |
| badgeValue \[String\] - Mandatory | Value of the badge. The value you specify in the badge value appears within the badge. If the length of the badge value is greater than 1 the badge is a rounded rectangle. For example, if you specify the value of the badge as 88, the number appears in a rounded rectangular badge. If the length of the badge value is 1, the badge is always a circle. The maximum number of characters that can be specified in a badge value is 9. If the badge value id beyond 9 only the first 9 characters are displayed. |

 

Example

```
createAppMenu: function() {
    var appMenuItem1 = ["appmenuitemid1", "Accounts", "option1.png", this.onClickMenuItem1];
    var appMenuItem2 = ["appmenuitemid2", "Examination", "option2.png", this.onClickMenuItem2];
    var appMenu = [appMenuItem1, appMenuItem2];
    voltmx.application.createAppMenu("SampleAppMenu", appMenu, null, null);
    voltmx.application.setCurrentAppMenu("SampleAppMenu");
    voltmx.application.setAppMenuBadgeValue("SampleAppMenu", "appmenuitemid1", "4");
    voltmx.application.setAppMenuBadgeValue("SampleAppMenu", "appmenuitemid2", "6");

},
```

Return Values

None

UI Behavior

The following image depicts how a bade appears on an app menu item:

![](resources/images/badge_on_appmenu_item.png)

Platform Availability

Available only on iPhone and iPad.

* * *

</details>

![](resources/prettify/onload.png)


