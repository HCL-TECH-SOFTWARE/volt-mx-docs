                              


Tool and Navigation bars for iOS
================================

Introduction
------------

iOS provides native support for a number of user interface widgets that attach in some way to the frame of an app form. Volt MX Iris allows you to create and use these widgets through the Native Function API, and also through iOS specific extensions to Volt MX Iris widgets such as the FlexForm.

### Navigation bar

According to Apple documentation, "An iOS Navigation bar appears at the top of an app screen, below the status bar, and enables navigation through a series of hierarchical app screens. When a new screen is displayed, a back button, often labeled with the title of the previous screen, appears on the left side of the bar." For more information on the iOS Navigation Bar, see the [Navigation Bars UI guidelines](https://developer.apple.com/design/human-interface-guidelines/navigation-bars) topic in Apple's developer documentation.

The iOS Navigation bar can be added to a FlexForm using [titleBarAttributes.](FlexForm_Properties.md#titleBarAttributes)

Both the Toolbar and the Navigation bar contain and display [BarButtonItems.](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md)

### Toolbar

According to Apple documentation, "A toolbar appears at the bottom of an app screen and contains buttons for performing actions relevant to the current view or content within it. Toolbars are translucent, may have a background tint, and often hide when people are unlikely to need them. Use a toolbar when navigation isn’t needed or you want multiple controls for managing content." For more information see the [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars) topic in Apple's developer documentation.

An iOS ToolBar can be added to your app form by adding the Volt MX Iris [ToolBar](Toolbar.md#toolbar-widget) widget. This can only be done from code, and is not supported in the Iris widget pallette.

Both the Toolbar and the Navigation bar contain and display [BarButtonItems.](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md)

