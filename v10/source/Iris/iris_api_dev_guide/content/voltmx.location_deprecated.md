                            

Deprecated Functions
====================

This section lists the deprecated function.


<details close markdown="block"><summary>phone.mylocation</summary>

This API is deprecated from Volt MX Iris 4.0 release onwards. As an alternate, to capture the location details use the `[geolocation.getcurrentposition](voltmx.location_functions.md#getCurrentPosition)` API.

This API provides you with the ability to capture the current location of the user based on the _Global Positioning System_ (GPS) and _Location Based Services_ (LBS) capabilities.

### Use Case

You can use this API to:

*   pre-populate your current location details in applications like Flight Search or Hotel Search.
*   identify outlets like Shopping Mall, Gas Station, ATM, and so on nearest to your current location.

### Syntax

```

phone.mylocation();
```

### Input Parameters

This API does not require any input parameters.

### Return Values

**_Reference \[userdata\]_**

Contains three keys:

    cellular ID

    longitude

    latitude

**_Status \[Number\]_**

Status can be one of the following:

_0_: Success in finding the location

_\-1_: Unable to find the location

### Error Codes

The following error codes are returned:

  
| Error Code | Description |
| --- | --- |
| 101 | Network Related Error |
| 102 | Location API access is denied by user |
| 103 | Unknown location or Location not found |
| 104 | Unknown error |
| 105 | Location Services Disabled |

  

### Implementation Details

To fetch location details on Mobile Web, enable the _Requires GPS_ property of a project and set the _CaptureGPS_ property to _true_. For more information about capturing location details on Mobile Web, see the appendix _GPS Functionality_ in _VoltMX IrisUser Guide_.

This API does not fetch data if it is used in the `appinit` event or on the first call of `form.preshow` API.

### Rules and Restrictions

*   On Mobile Web, this API is available on:
    *   iPhone
    *   Android
    *   other HTML5 browsers.
*   You cannot test this API from Windows Phone Mango emulator as with current release of WP7.0 _cellular ID_ cannot be retrieved.

### Platform Availability

*   Available on all platforms except IE8 and prior to IE8 releases.
*   Available on all platforms except prior to IE8 releases.

![](resources/prettify/onload.png)
