---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             

You are here: Application API

Application API
===============

The Application API provides functions that enable you to control the application-level events and behaviors of your app.

The Application API uses `voltmx.application Namespace` and the following API elements:

**Constants**

  
| Constant Type | Description |
| --- | --- |
| [Application Constants](voltmx.application_functions.html#ApplicationConstants) | Identifies the location from where the app is launched. |
| [Breakpoint Constants](voltmx.application_functions.html#BreakpointConstants) | Checks if the current browser window size has gone beyond highest value of breakpoints list defined. |
| [Runtime Permissions Constants](voltmx.application_functions.html#RuntimePermissions) | Report the status of runtime permissions. |

 

**Functions**

| Function | Description |
| --- | --- |
| [voltmx.application.addApplicationCallbacks](voltmx.application_functions.html#addApplicationCallbacks) | Helps you to register multiple callbacks for the same event. |
| [voltmx.application.addBMState](voltmx.application_functions.html#addBM) | Adds a specified key and value to the parameter list of the URL of the form. |
| [voltmx.application.addGestureRecognizerForAllForms](voltmx.application_functions.html#addGestRecogForAllForms) | Enables the developers to set a gesture recognizer for all the forms. |
| [voltmx.application.addSettingsMenuItemAt](voltmx.application_functions.html#addsetmn) | Enables you to add a menu item at a given index in the Charm settings menu. |
| [voltmx.application.beginBackgroundTask](voltmx.application_functions.html#voltmx.app17) | Used when you want to run a long running or the asynchronous task in the background of the phone app. |
| [voltmx.application.checkPermission](voltmx.application_functions.html#checkPermission) | Checks and returns the permission status of one or more resources. |
| [voltmx.application.createSettingsMenu](voltmx.application_functions.html#crtSetMn) | Enables you to create a Charm settings menu for an application. |
| [voltmx.application.dismissLoadingScreen](voltmx.application_functions.html#voltmx.app2) | Provides you the ability to dismiss the loading screen displayed earlier |
| [voltmx.application.destroyForm](voltmx.application_functions.html#destroyForm) | Destroys the target form. |
| [voltmx.application.disableZoomedOutView](voltmx.application_functions.html#voltmx.app9) | Enables you to disable a zoomed out view set for an application using the previous API. |
| [voltmx.application.endBackgroundTask](voltmx.application_functions.html#voltmx.app18) | Invoked when you are done with an execution of long running tasks in the background. |
| [voltmx.application.exit](voltmx.application_functions.html#voltmx.app) | Terminates the application. |
| [voltmx.application.exitLibrary](voltmx.application_functions.html#voltmx.application.exitLibrary) | Provides you the ability to exit the library. After exiting the library, the control moves to the Native app UI. |
| [voltmx.application.getApplicationBadgeValue](voltmx.application_functions.html#widget.g) | Enables you to read the badge value (if any) attached to the given application icon. |
| [voltmx.application.getApplicationMode](voltmx.application_functions.html#voltmx.app7) | Enables you to get the application mode. |
| [voltmx.application.getApplicationState](voltmx.application_functions.html#voltmx.app19) | Checks whether the app is running in the background or not to make UI updates. |
| [voltmx.application.getAppMenuBadgeValue](voltmx.application_functions.html#widget.g2) | Enables you to read the badge value (if any) attached to the specified app menu item. |
| [voltmx.application.getAppWindow](voltmx.application_functions.html#getAppWi) | Returns a handle to an AppWindow object. |
| [voltmx.application.getBMState](voltmx.application_functions.html#getBM) | Retrieves the list of parameters attached to a URL using the above add, set APIs. |
| [voltmx.application.getCurrentBreakpoint](voltmx.application_functions.html#voltmx.application.getCurrentBreakpoint) | Returns the current breakpoint value. |
| [voltmx.application.getCurrentForm](voltmx.application_functions.html#form.get) | Returns a handle to the current form. |
| [voltmx.application.getCurrentSettingsMenu](voltmx.application_functions.html#getcurmn) | Returns the unique identifier of the current menu that is set through getCurrentSettingsMenu. |
| [voltmx.application.getPreviousForm](voltmx.application_functions.html#form.get2) | Returns a handle to the previous form. |
| [voltmx.application.getPreviousSessionParams](voltmx.application_functions.html#getprevi) | Retrieves the previous session parameters in the application life cycle. |
| [voltmx.application.getSettingValue](voltmx.application_functions.html#voltmx.application.getSettingValue) | Retrieves the current device settings. |
| [voltmx.application.invalidateSession](voltmx.application_functions.html#invalida) | Invalidates a session on Mobile Web. |
| [voltmx.application.isImageTurnedOff](voltmx.application_functions.html#isImageTurnedOff) | Gets the status of image settings, which are defined by a particular user, in a web browser. |
| [voltmx.application.isInMultiWindowMode](voltmx.application_functions.html#isInMultiWindowMode) | Returns true if the application is in multi-window mode, and the function returns false if the application is in full-screen mode. |
| [voltmx.application.isPopupBlocked](voltmx.application_functions.html#isPopupBlocked) | Gets the status of pop-up settings, which are defined by a particular user, in a web browser. |
| [voltmx.application.launchApp](voltmx.application_functions.html#launchApp) | Launches the application specified by the input URL. |
| [voltmx.application.openApplicationSettings](voltmx.application_functions.html#openApplicationSettings) | Opens the application-specific settings or device-level application settings. |
| [voltmx.application.openMediaURL](voltmx.application_functions.html#voltmx.app6) | Launches the native media player and starts playing the media (audio or video) at the specified URL. |
| [voltmx.application.openURL](voltmx.application_functions.html#voltmx.app4) | Opens the web page at the specified URL in the native browser of the mobile device. |
| [voltmx.application.openURLAsync](voltmx.application_functions.html#openURLAsync) | Opens the web page at the specified URL in the native browser of the mobile device. |
| [voltmx.application.postAccessibilityNotification](voltmx.application_functions.html#postAccessibilityNotification) | Posts a notification to "assistive" applications |
| [voltmx.application.registerForIdleTimeout](voltmx.application_functions.html#register) | Specifies if the application must timeout after a defined period of inactivity and also specifies the action after the timeout interval. |
| [voltmx.application.registerOnKeyPress](voltmx.application_functions.html#voltmx.app16) | Connects an event handler function to a key press event. |
| [voltmx.application.registerOnSettingsChangeCallback](voltmx.application_functions.html#voltmx.application.registerOnSettingsChangeCallback) | Listens if any settings have been changed in Native settings applications. |
| [voltmx.application.removeApplicationCallbacks](voltmx.application_functions.html#removeApplicationCallbacks) | Helps you to clear callback functions associated with the specified appstates. |
| [voltmx.application.removeBMState](voltmx.application_functions.html#remvBM) | Removes a specified key from the parameter list of the URL of the form. |
| [voltmx.application.removeGestureRecognizerForAllForms](voltmx.application_functions.html#voltmx.wid2) | Enables you to remove a specified gesture recognizer for all Forms. |
| [voltmx.application.removeSecondaryTile](voltmx.application_functions.html#removese) | Enables you to remove and unpin a specified secondary tile which was created earlier. |
| [voltmx.application.removeSeoDataReadyFlag](voltmx.application_functions.html#removeSeoDataReadyFlag) | Clears the flag that caches forms for SEO. |
| [voltmx.application.removeSettingsMenuItemAt](voltmx.application_functions.html#rvsetmnu) | Enables you to removes the specified App Menu item based on the index. |
| [voltmx.application.requestPermission](voltmx.application_functions.html#requestPermission) | Requests for the end-user consent to access a particular resource. |
| [voltmx.application.requestPermissionSet](voltmx.application_functions_runtimepermissionsapi.html#reqPermissionSet) | Sends a request for a set of permissions. The status of the request is sent back to the user through a callback. |
| [voltmx.application.requestReview](voltmx.application_functions.html#reqReview) | Requests users to provide a rating and to write a review for an app. |
| [voltmx.application.resetBMState](voltmx.application_functions.html#resetBM) | Resets the state associated with the URL of a form. |
| [voltmx.application.sendLibraryResultToNativeApp](voltmx.application_functions.html#sendLibraryResultToNativeApp_) | Enables you to send an acknowledgment to a Native app that launched this library. |
| [voltmx.application.setApplicationBehaviors](voltmx.application_functions.html#voltmx.app5) | Enables your app to configure its response to various events. |
| [voltmx.application.setApplicationBadgeValue](voltmx.application_functions.html#setAppBg) | Enables you to set a badge value to an application icon on the mobile desktop at the top-right corner of the application icon. |
| [voltmx.application.setApplicationCallbacks](voltmx.application_functions.html#setappli) | Captures the callback events for various states of the application |
| [voltmx.application.setApplicationInitializationEvents](voltmx.application_functions.html#voltmxapplicationinitialization) | Configures all initialization events such as, preappinit, postappinit, init, appservice, showstartupform and so on. |
| [voltmx.application.setApplicationLayout](voltmx.application_functions.html#voltmx.app12) | Specifies if the application must have a layout from "left to right" or "right to left". |
| [voltmx.application.setApplicationMode](voltmx.application_functions.html#voltmx.app11) | Enables you to set the application mode to Native, Hybrid, or Wrapper. |
| [voltmx.application.setApplicationProperties](voltmx.application_functions.html#voltmx.application.setApplicationProperties) | Enables you to set properties at the application level. |
| [voltmx.application.setAppMenuBadgeValue](voltmx.application_functions.html#widget.s) | Enables you to set a badge value to the specified app menu item on the top-right corner of the app menu item. |
| [voltmx.application.setAppTile](voltmx.application_functions.html#setappti) | Enables you to set the data for an application tile. |
| [voltmx.application.setBMState](voltmx.application_functions.html#setBM) | Sets the bookmark state to the URL. |
| [voltmx.application.setCheckBoxSelectionImageAlignment](voltmx.application_functions.html#voltmx.app14) | Used to set the alignment of the checkBox selection image. |
| [voltmx.application.setCurrentSettingsMenu](voltmx.application_functions.html#setsetmn) | Uses the unique identifier which represents the Charm settings menu and sets it as current settings menu. |
| [voltmx.application.setCurrentAppMenuFont](voltmx.application_functions.html#voltmx.application.setCurrentAppMenuFont) | Sets the font name and font size of various app menu items in the current app menu. |
| [voltmx.application.setDefaultListboxPadding](voltmx.application_functions.html#setDefaultListboxPadding) | Customizes the default paddings applied for a ListBox. |
| [voltmx.application.setDefaultTextboxPadding](voltmx.application_functions.html#voltmx.app13) | Customizes the default paddings applied for a Textbox. |
| [voltmx.application.setLibraryHeadlessModeCallback](voltmx.application_functions.html#setLibrary) | Registers a listener or a callback that receives request from a Native app to launch Volt MX library without UI or in headless mode. |
| [voltmx.application.setRespectImageSizeForImageWidgetAlignment](voltmx.application_functions.html#voltmx.app15) | Sets the ImageWidget width to minimum or maximum according to available width or image width in absence of reference width |
| [voltmx.application.setSecondaryTile](voltmx.application_functions.html#setsecon) | Enables you to create or update data for a secondary tile for an application. |
| [voltmx.application.setSeoDataReadyFlag](voltmx.application_functions.html#setSeoDataReadyFlag) | Sets a flag indicating that the current form is ready to be cached for search engine optimization. |
| [voltmx.application.setZoomedOutView](voltmx.application_functions.html#voltmx.app8) | Enables you to set a form to be shown to the user when a zoom out gesture is performed. |
| [voltmx.application.showLoadingScreen](voltmx.application_functions.html#voltmx.app3) | Enables you to display a loading screen (following a certain color schema) to the user while another action is in progress. |
| [voltmx.application.startForegroundService](voltmx.application_functions.html#StartForeground) | Defines the notifications for an app that is running in the background, i.e, an app with which the user is not interacting directly. |
| [voltmx.application.stopForegroundService](voltmx.application_functions.html#stopForeground) | Enables you to stop the foreground service for an application that is running in the background. |
| [voltmx.application.unregisterForIdleTimeout](voltmx.application_functions.html#unregist) | Specifies that the application must not timeout after a defined period of inactivity (time difference between the current device time and the last time you clicked on any user interface component). |
| [voltmx.application.updateForegroundNotification](voltmx.application_functions.html#updateForeground) | Enables you to customize and update the existing notifications shown by the foreground service. |
| [voltmx.application.zoomIn](voltmx.application_functions.html#voltmx.app10) | Enables you to zoom in on an application programmatically. |

Overview
--------

This functions in the Application API handle such tasks as setting application callbacks, starting and stopping background tasks, showing and dismissing the loading screen, and so forth.

> **_Note:_** All of the Application API functions are in the voltmx.application namespace. However, the `voltmx.application namespace` contains some functions that are not part of the Application API. Only the functions listed above are part of the Application API.

During the lifecycle of an application, the mobile device usually triggers several events. The functions in the Application API allow you to listen for these events and override them with application-specific functionality. Your app should register for application events during the application load event of the project or _masterdataload_ event of the startup form.

![](resources/prettify/onload.png)
