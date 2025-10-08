                             


voltmx.ui.Alert Function
======================

The details of the voltmx.ui.Alert function, which is part of the [voltmx.ui Namespace](voltmx.ui_functions.md), are as follows.


<details close markdown="block"><summary>voltmx.ui.Alert</summary> 

* * *

This API provides you the ability to add alerts in the application. The alerts are of the following types:

*   **information** - an informative message is displayed on the screen. This message can be in turn a _warning_ or a _success_ message.
*   **confirmation** - a confirmation message with **Yes** and **No** options is displayed on the screen.
*   **error** - an error message is displayed on the screen.

All the alerts are modal in nature, i.e., the user cannot proceed with other UI operations unless the alert is dismissed.

### Syntax
```

voltmx.ui.Alert(basicConfig, pspConfig)
```

### Input Parameters

### basicConfig

basicConfig is an object with the following configuration properties.

| Property | Description |
| --- | --- |
| _message_ \[String\] - Mandatory | The message to be shown when an alert is thrown. |
| _alertType_ \[Number\] - Mandatory | Denotes the type of the alert. The possible values are as follows:ALERT\_TYPE\_CONFIRMATIONALERT\_TYPE\_ERRORALERT\_TYPE\_INFO |
| **alertTitle** \[String\] - Optional | Title of the alert. |
| **yesLabel** \[String\] - Optional | Text to be displayed for the Yes label. If the text for the Yes label is not provided, individual platforms display default values. |
| **noLabel** \[String\] - Optional | Text to be displayed for the No label. If the text for the No label is not provided, individual platforms display default values. |
| **alertIcon** \[String / image Object\] - Optional | Icon to be displayed to visually indicate the type of alert, such as, Info, Error, Confirmation. This parameter is not supported on iPhone. You can create an image Object by using [voltmx.image Namespace functions](voltmximagenamespacefunctions.md#functions). |
| **alertHandler** \[Read / Write Event\] - Mandatory | JavaScript function that should get called when alert is dismissed either through "yes" label button or through "no" label button. |

### pspConfig

pspConfig is an object with platform specific configuration properties.

| Property | Description |
| --- | --- |
| ondeviceback \[Write Event\] - Optional | JavaScript function that should get called when alert is open and the device back button is pressed.> **_Note:_** Supported on Windows platform.var pspConf = { ondeviceback: func1 }; var confirmationAlert = voltmx.ui.Alert(basicConf, pspConf); function func1() { voltmx.print("Example function on device back"); } > **_Note:_**  The configuration properties should be passed only in the respective configuration objects otherwise they are ignored. |
| contentAlignment | Used to align content of an alert. Following are the values of this property: constants.ALERT\_CONTENT\_ALIGN\_LEFT  // defaultconstants.ALERT\_CONTENT\_ALIGN\_CENTERconstants.ALERT\_CONTENT\_ALIGN\_RIGHT |
| iconPosition | It is used to align and alert title icon. Following are the values of this property: constants.ALERT\_ICON\_POSITION\_LEFT // defaultconstants.ALERT\_ICON\_POSITION\_RIGHT> **_Note:_** Refer the example given below to create an alert using `contentAlignment` and `iconPostion` parameters. |

### Example

```

confirmationAlert: function(){ 
   //Creating the basicConfig object 
  var basicConf = {
    message: "This is an confirmation alert",
    alertType: constants.ALERT_TYPE_CONFIRMATION,
    
};
   //Creating the pspConfig object
  var pspConfig = {
    "contentAlignment": constants.ALERT_CONTENT_ALIGN_CENTER
};
   voltmx.ui.Alert(basicConf, pspConfig);
 },
  
   informationAlert: function(){ 
     //Creating the basicConfig object
  var basicConf = {
    message: "This is an info alert",
    alertType: constants.ALERT_TYPE_INFO,
 
};
     //Creating the pspConfig object
  var pspConfig = {
  "contentAlignment": constants.ALERT_CONTENT_ALIGN_LEFT
};
   voltmx.ui.Alert(basicConf, pspConfig);
 },
  
   errorAlert: function(){ 
   //Creating the basicConfig object
  var basicConf = {
    message: "This is an error alert",
    alertType: constants.ALERT_TYPE_ERROR,
   
};
     //Creating the pspConfig object
  var pspConfig = {
  "contentAlignment": constants.ALERT_CONTENT_ALIGN_RIGHT
};
   voltmx.ui.Alert(basicConf, pspConfig);
 },
```

### Return Values

None.

### Remarks

Invoking this API multiple times in the same action sequence leads to an erroneous behavior.

This API should be invoked at the end of a function as a best practice.

The following are the behavioral aspects of alerts on various platforms:

### RichClient

In all native implementations alert is non blocking, i.e. the execution of any logic defined after the alert definition continues without the alert confirmation.

> **_Important:_** Alert images are not supported on Windows 10.

### Android

Android platform supports display of multiple alerts each time the **voltmx.ui.Alert** API is invoked. On device back, the alert gets dismissed and also the alert handler is raised.

For CONFIRMATION type alert, the alert callback is invoked with cancel flag. For example, false Boolean argument.

For INFO & ERROR type alert, the alert callback is invoked with true argument.

### iPhone

iPhone does not support displaying image icons based on the alert types: info,confirmation, error. _"\\n_" as a newline character in the alert messages supported for iPhone Platform

### Mobile Web/SPA/Desktop Web

> *   For advanced Mobile Web devices like iPhone, Android, and Palm Pre, alerts are displayed as popups. For basic devices, the alerts
      are displayed in a new page.
> *   For all platforms you cannot customize alert icons/yes or no labels/ look and feel.
> *   Titles of the alerts are provided by the browser and you cannot modify them. The alert title attribute does not apply for Mobile
      Web. Usually, the title on the alert will be the IP address or the domain name of the application.
> *   Confirmation alerts in the basic devices will be displayed in another form.
> *   If the alert message is _nil_, alert is not displayed.
> *   In case of all platforms, the execution of the logic defined after alert is blocked until the user clicks "yes" or "no".

For JavaScript conversion, an alert has to be created using another variant constructor,i.e an _Indexed argument_ constructor.

voltmx.ui.Alert(message, alertHandler, alertType, yesLabel, noLabel, alertTitle, pspConf);

Platform Availability

Available on all platforms.

* * *
</details>

![](resources/prettify/onload.png)

