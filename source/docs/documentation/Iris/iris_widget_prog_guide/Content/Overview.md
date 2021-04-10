---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                     

Volt MX  Iris

Widget Programmers' Guide

Volt MX  Iris is a powerful yet easy-to-use integrated development environment (IDE) for developing, building, testing, debugging, and deploying mobile applications for multiple platforms—all from a single code base. To learn how to use Volt MX Iris, see the Volt MX Iris [User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html).

Volt MX  Iris allows you to create applications visually by dragging widgets from the Widget Library, and dropping them onto a form or other container object, quickly creating the user interface for a mobile application. These widgets have properties that can be set in Volt MX Iris, and can also be set and modified by code you write as part of your application.

For information on revision history, click [Revision History](Revision_History_Home.html).

The Volt MX Iris Widget Programmers' Guide describes each widget, its properties, and how you can write JavaScript code to change properties and control the behavior of widgets within your application.

Widgets Overviews
-----------------

This section of the Volt MX Iris Widget Programmer's Guide provides general information on the use of Widgets within your Iris applications.

Widgets are visual components in Volt MX Iris that are used to build application user interfaces quickly and with a minimum of custom code. Although most widget properties can be set using the Volt MX Iris IDE, some properties need to be set and managed from custom JavaScript code. This guide describes how this is done, and lists the properties and events you will use to interact with Volt MX Iris widgets.

Widgets are small chunks of re-usable code which include graphical user-interface elements that scale gracefully depending on the power and resolution of your mobile device targets. Some widgets function as containers to hold other widgets.

VoltMXwidgets also include support for platform specific properties. These platform specific properties allow your apps to have a native look and feel on each platform.

Widgets are categorized as Containers, Basic, and Advanced based on the behavior and characteristics of the widgets.

*   **Basic Widgets**: These widgets are used for basic functions on a form. They are the most commonly used widgets in an application design. These widgets are components that act independently of the Container Widgets.
*   **Container Widgets**: These hold container, basic or advanced widgets within them.
*   **Advanced widgets**: Used to achieve advanced interaction within an application. You can use these widgets along with basic widgets to achieve a complex interaction design.

### Widgets List

  
| Widget | Comments | Category |
| --- | --- | --- |
| [Alert](Alert.html) | A pre-configured dialog box that pops-up with a message such as a confirmation or an error. | Basic Widgets |
| [App Menu](App_Menu.html) | Usually a menu bar displayed at the bottom of a form in an app. | Basic Widgets |
| [ARRenderer](ARRenderer.html#arrenderer-widget) | Helps you to implement augmented reality in your app. | Advanced Widgets |
| [Browser](Browser.html) | Displays HTML content in the context of your application without navigating away from the application or opening the native browser from your application | Advanced Widgets |
| [Button](Button.html) | A rectangle or rounded rectangle with a descriptive caption in its center. Use a button to trigger actions, such as navigating to a form or interacting with a dialog box. | Basic Widgets |
| [Calendar](Calendar.html) | Presents a calendar to the user so that the user can pick one or more dates. | Basic Widgets |
| [Camera](Camera.html) | Controls the on-device camera for taking pictures and videos. | Advanced Widgets |
| [CheckBoxGroup](CheckBox.html) | Displays a group of related checkboxes so that the user can select one or more items from the group. | Basic Widgets |
| [ComboBox](ComboBox.html) | Presents a drop-down list to the user allowing them to select a single item | Basic Widgets |
| [CordovaBrowser](CordovaBrowser.html) | Displays HTML content in your application without navigating away from the application or opening the native browser. Use the CordovaBrowser widget to port your web or Apache Cordova (PhoneGap) app to Volt MX Iris. | Advanced Widgets |
| [DataGrid](DataGrid.html) | Presents a tabular view of data to the user. | Basic Widgets |
| [FlexContainer](FlexContainer.html) | Allows you to arrange multiple widgets in horizontal, vertical or free-form order. You can only add the FlexContainer to a Flex form. | Container Widgets |
| [FlexForm](FlexForm.html) | A FlexForm is the top most container widget and you can place any number of widgets on it, Navigating between forms is a common way to structure the functionality of an app. | Container Widgets |
| [FlexScrollContainer](FlexScrollContainer.html) | Scrollable UI container form that allows more items to be displayed in a list than allowed by screen size. | Container Widgets |
| [Image](Image.html) | Displays a graphic (local or remote) from a PNG file. | Basic Widgets |
| [Label](label.html) | Shows non-editable text on a form. | Basic Widgets |
| [ListBox](ListBox.html) | Presents a drop-down list to the user and enables the user to select one or more items. | Basic Widgets |
| [Map](Map.html) | Provides your app with the capability to display predefined locations (latitude and longitude) on an onscreen map. | Advanced Widgets |
| [MLCamera](MLCamera.html#mlcamera-widget) | Provides your app with image recognition and classification capability. | Advanced Widgets |
| [NativeContainer](nativeContainer.html) | Customizable widget that enables you to wrap native device functionality in a widget that you can then instantiate and use in your JavaScript app. | Container Widgets |
| [PDFView](PDFView.html#pdfview-widget) | Displays the content of the PDF URL in your app. | Advanced Widgets |
| [Phone](Phone.html) | Allows your phone app to call a phone number. | Advanced Widgets |
| [PickerView](PickerView.html) | Uses a spinning wheel metaphor to display multiple sets of values and allows you to select a single combination of values. | Advanced Widgets |
| [RadioButtonGroup](RadioButtonGroup.html) | Presents a group of radio buttons to the user and enables the user to select one. | Basic Widgets |
| [RichText](RichText.html) | Displays a string in rich text format. | Basic Widgets |
| [SegmentedUI](Segment.html) | A widget that can be used for menus and grouped lists and that consists of multiple segments (rows or records), each segment (row or record) possibly having multiple child widgets. | Advanced Widgets |
| [SignatureCapture](Signature.html) | Enables your app to capture a signature on a form and save it as an image for easy uploading. | Advanced Widgets |
| [Slider](Slider.html) | Allows users to select a value from a range of values by moving an indicator. | Basic Widgets |
| [SlidingContainer](SlidingContainer.html) | Implements a hamburger menu. Use a SlidingContainer widget to create a top-level navigation experience that adapts to different screen widths. | Advanced Widgets |
| [Switch](Switch.html) | Presents two mutually exclusive choices or states. | Advanced Widgets |
| [TabPane](VBox.html#/Content/TabPane.html) | Tabbed UI form. | Container Widgets |
| [TextArea](TextArea.html) | An editable widget that enables users to enter multi-line text. | Basic Widgets |
| [TextBox](TextBox.html) | An editable text component that is used to obtain an input from a user. | Basic Widgets |
| [Video](Video.html) | Allows your app to play video files captured using the device's camera, videos from app resources, and from servers/websites within a form. | Advanced Widgets |

For a more hands-on approach on the functionality of the various widgets and APIs provided by Volt MX AppPlatform. import and preview the Kitchen Sink app by using Volt MX Iris.

### Contact Us

We welcome your feedback on our documentation. Write to us at [techpubs@voltmx.com](mailto:techpubs@voltmx.com?subject=Documentation Feedback).For technical questions, suggestions, comments, or to report problems on VoltMX's product line, contact [support@voltmx.com](mailto:support@voltmx.com).
