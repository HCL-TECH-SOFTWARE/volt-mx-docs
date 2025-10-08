                               


Alert Methods
=============

The namespace for the Alert widget is **voltmx.ui**. It contains the following associated methods.

* * *


<details close markdown="block"><summary>dismissAlert Method</summary>

* * *

This method is used to dismiss an alert.

### Syntax

```

voltmx.ui.dismissAlert(alertHandler)
```

### Return Values

None.

### Argument

An object of Alert widget that was returned from the voltmx.ui.Alert API.

### Limitation

In iOS, when you present multiple alerts in succession and then close an alert, all the alerts that are present above this alert are closed.

### Example

```

var myalert = voltmx.ui.Alert({
    "message": "Do you want to proceed ?",
    "alertType": constants.ALERT_TYPE_CONFIRMATION,
    "alertTitle": "Confirmation",
    "yesLabel": "OK",
    "noLabel": "CANCEL",
    "alertIcon": "",
    "alertHandler": null
}, {});
voltmx.ui.dismissAlert(myalert); //Here, 'myalert' is the alerthandler that was returned from the voltmx.ui.Alert function  

```

### Platform Availability

*   Android
*   iPhone
*   Windows

Not available for SPA and Desktop Web.

* * *
</details>

