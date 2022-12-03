
You are here: Badge API

# Badge API

Badging is a concept used in both iOS and Android platforms to indicate to user, information about an app or an app menu. Badging works as a notification to the users. Based on the information provided, user’s can take some action. However, badging does not explicitly ask the users to take any action.

The number of unread messages on your mobile device that is indicated is an example of the badge API.

Using the Badge API in Volt MX, you can configure a badge for the following:

- Apps
- App Menus

The Badge API uses the `voltmx.application Namespace` and the following API elements.

| Function                                                                                           | Description                                                                                                     |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [voltmx.application.getApplicationBadgevalue](voltmx.application_functions_badgeapi.md#widget.g) | Reads the badge value (if any) attached to the given application icon.                                          |
| [voltmx.application.getAppMenuBadgeValue](voltmx.application_functions_badgeapi.md#widget.g2)    | Reads the badge value (if any) attached to the specified app menu item.                                         |
| [voltmx.application.setApplicationBadgeValue](voltmx.application_functions_badgeapi.md#setAppBg) | Sets a badge value to an application icon on the mobile desktop at the top-right corner of the application icon |
| [voltmx.application.setAppMenuBadgeValue](voltmx.application_functions_badgeapi.md#widget.s)     | Sets a badge value to the specified app menu item on the top-right corner of the app menu item.                 |



Depending upon the type of badge you want to set, Badge API functions vary.

To configure the badge value for an App, you can use the [voltmx.application.setApplicationBadgeValue](voltmx.application_functions_badgeapi.md#setAppBg) function. To know about an existing badge value an app, you can use the [voltmx.application.getApplicationBadgeValue](voltmx.application_functions_badgeapi.md#widget.g) function.

Similarly, to configure the badge value for an AppMenu, you can use the [voltmx.application.setAppMenuBadgeValue](voltmx.application_functions_badgeapi.md#widget.s) function. To know about an existing badge value an app, you can use the [voltmx.application.getAppMenuBadgeValue](voltmx.application_functions_badgeapi.md#widget.g2) function.

In addition, each widget supports the following methods for working with badges.

- [setBadge](../../../Iris/iris_widget_prog_guide/Content/Label_Method.md#setBadge)
- [getBadge](../../../Iris/iris_widget_prog_guide/Content/Label_Method.md#getBadge)

To view the functionality of the Badge API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/BadgeAPI)

![](resources/prettify/onload.png)
