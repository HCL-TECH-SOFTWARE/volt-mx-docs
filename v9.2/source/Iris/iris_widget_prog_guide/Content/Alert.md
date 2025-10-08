                                

Alert Widget
============

The Alert widget enables you to draw the attention of users to inform something or to request users to perform an action.

Some real-world scenarios where you can use an Alert widget are as follows:

*   To display notifications
*   To display advertisements
*   To display a confirmation to exit an application
*   To show error messages
*   To display reminders
*   To make users perform compliance tasks, such as to complete a pending payment before allowing users to use the application.

Here are some features of the Alert widget:

**Modal:** When an Alert widget is invoked, a user cannot perform any other actions on the parent application without taking some action on the alert.

**Handling the Yes and No button:** Specify JavaScript functions that must be executed when a user dismisses the alert. You can provide this function for both Yes and No buttons.

**Customizing an alert:** Customize the skin, title, and icon of an alert by using an Alert widget.

An Alert is a dialog box that pops-up with a message. You can use these types of alert dialog boxes:

*   Confirmation
*   Error
*   Info

The Alert widget capabilities can be broadly categorized into the following:

*   [Data Management](#data-management)
*   [Enabling RTL](#enabling-rtl)
*   [Miscellaneous](#miscellaneous)

#### Data Management

 

| Properties | Description |
| --- | --- |
| [alertTitle](Alert_Basic_Properties.md#alertTit) | Specifies the Title of the alert. |
| [message](Alert_Basic_Properties.md#message) | Specifies the message description of the alert to be displayed. |

 

#### Enabling RTL

| Properties | Description |
| --- | --- |
| [retainContentAlignment](Alert_Basic_Properties.md#retainContentAlignment) | Helps to retain the content alignment of the widget while applying RTL. |
| [retainFlexPositionProperties](Alert_Basic_Properties.md#retainFlexPositionProperties) | Helps to retain the left, right and padding properties while applying RTL. |
| [retainFlowHorizontalAlignment](Alert_Basic_Properties.md#retainFlowHorizontalAlignment) | Enables you to change the horizontal flow of the widget from left to right. |

#### Miscellaneous

| Methods | Description |
| --- | --- |
| [dismissAlert](Alert_Methods.md#dismissAlert) | Used to dismiss an alert. |

 

| Events | Description |
| --- | --- |
| [alertHandler](Alert_Events.md#alertHan) | Specifies the JavaScript function that should get called when alert is dismissed either through "Yes" button or through "No" button. |

 

| Properties | Description |
| --- | --- |
| [accessibilityConfig](Alert_Basic_Properties.md#accessibilityConfig) | Enables you to control accessibility behavior and alternative text for the widget. |
| [alertIcon](Alert_Basic_Properties.md#alertIco) | Specifies the Icon to be displayed to visually indicate the type of alert. |
| [alertType](Alert_Basic_Properties.md#alertTyp) | Specifies the Type of the alert window to be displayed. |
| [cursorType](Alert_Basic_Properties.md#cursorType) | Specifies the type of mouse pointer used. |
| [noLabel](Alert_Basic_Properties.md#noLabel) | Specifies the descriptive Text for the "No" label. |
| [yesLabel](Alert_Basic_Properties.md#yesLabel) | Specifies the descriptive Text for the "Yes" label. |
| [textOverflow](Alert_Basic_Properties.md#textOver) | Specifies whether text wrapping is enabled below the image when the text message is more than image height. |

Alert Widget Basics
-------------------

### When to Use an Alert

You can use an Alert in many situations, some of them are:

1.  If you want to warn the user about something, for example, "You will now be redirected to the xyz website, Press **Yes** to proceed and **No** to cancel".
2.  An error has occurred and you want to inform the user. For example, if the user enters incorrect password.
3.  To inform the user about a transaction is completed successfully.

### Creating an Alert Using a Constructor: voltmx.ui.Alert

Example

```

var alert = voltmx.ui.Alert(basicConfigs, pspConfigs);
```

*   basicConfigs is an object with configuration properties.
*   pspConfigs is an object with platform specific configuration properties.
    

> **_Note:_** In all native implementations alert is non blocking. Which means execution of logic (placed after the alert creation) will not wait for the alert confirmation but execution continues. In case of SPA, thin client platforms, it is always blocking the execution until user clicks either "yes" label button or "no" label button.

> **_Note:_** Currently creating voltmx.ui.Alert itself will show the alert and end user has to respond to it. Alert Handle returned is not of any use but in future there is possibility of allowing the developers to show, dismiss the alert programmatically through this handle.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

```
//Creating the alert with the alertIcon:"icon.png"
var alertBasic = {
    message: "Sample Alert",
    alertIcon: "icon.png"
};

var alertPSP = {};

var alert = voltmx.ui.Alert(alertBasic, alertPSP);


```

