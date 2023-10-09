                            
voltmx.phone Namespace
====================

The `voltmx.phone` namespace provides your apps with the ability to access the phone functionality of the user's device, if it is present on the device. The `voltmx.phone` namespace provides you with the following API elements:

Functions
---------

The `voltmx.phone` namespace contains the following functions:


<details close markdown="block"><summary>voltmx.phone.addCalendarEvent</summary>

* * *

Adds a new event to the device calendar.

### Syntax

```

voltmx.phone.addCalendarEvent(  
    eventDetails);
```

### Input Parameters

_eventDetails_

### A JavaScript object that contains the following key-value pairs.

| Key | Value |
| --- | --- |
| summary | A string that contains a short description of the event. |
| start | A string that holds the start date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". This must be less than the date and time in the `finish` key, |
| finish | A string that holds the finish date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". This must be greater than the date and time in the `start` key. |
| alarm | An optional number that specifies the time in seconds before the `start` time when the phone must trigger an alarm. This key can be omitted if your app does not need to specify an alarm time. |
| note | A string that contains the long description of the event. |
| integer | A integer that defines the occurrence of a event. |
| access | A string that indicated the privacy setting for the event. The values can be `public`, `private`, or `confidential` |

repeatConfig - Optional

A dictionary that indicates the repeat frequency and endRecurrence values for the event. The dictionary contains two values: repeat and endRecurrence.

repeat

A constant that indicates the repeat frequency. The values are as follows:

*   CALENDAREVENT\_REPEAT\_NONE
    
*   CALENDAREVENT\_REPEAT\_DAILY
    
*   CALENDAREVENT\_REPEAT\_WEEKLY
    
*   CALENDAREVENT\_REPEAT\_MONTHLY
    
*   CALENDAREVENT\_REPEAT\_YEARLY
    

endRecurrence \[Optional\]

A string that stores the recurrence end date and time for the event. The format for the end date and time is "dd/mm/yyyy hh:mm:ss". This date must be greater than the start date and time. For native iOS, if you do not specify the **endRecurrence** value, the events will repeat for 2 years.

**Interval** \[Optoional\]

This allows you to set the interval to repeat the event. It must have a positive integer as value. The default value is 1.

For example, to create a quarterly event, configure ‘repeat’ as constants.CALENDAREVENT\_REPEAT\_MONTHLY and ‘interval’ as '3'. The repeat event will be created in every 3 months(quarterly).

To create a bi-weekly event, configure ‘repeat’ as constants.CALENDAREVENT\_REPEAT\_WEEKLY and ‘interval’ as '2'. The repeat event will be created in every 2 weeks (biweekly).

The following example shows how to add quarterly repeat event.

### Example

```

//Sample code to add the Input Parameter **Interval** in the add calendar event to the device   
addCalendarEvent argument  
 var eventobj = {  
summary: "Event started",  
start: this.startTime,  
finish: this.finishTime,  
alarm: 40,  
access: "public",  
“repeatConfig“:{  
“repeat“:contants.CALENDAREVENT_REPEAT_MONTHLY,  
“interval“: 3,  
“endRecurrence”:endDate  
}  
};  
voltmx.phone.addCalendarEvent(eventobj);
```

```

function addCalendarEvent() {
    try {
        alert("calendar event is about to start");
        var evtobj = {
            summary: "Event started",
            start: "15/04/2012 11:23:45",
            finish: "16/04/2012 12:59:45",
            alarm: 40,
            note: "Event will end at 12.59 PM",
            access: "public",
            repeatConfig: {
                repeat: constants.CALENDAREVENT\_REPEAT\_MONTHLY,
                endRecurrence: ”21/12/2013 13:00:00”
            }
        }
        voltmx.phone.addCalendarEvent(evtobj);
        //Adds an event to the device calendar
    } catch (PhoneError) {
        alert("error in addCalendarEvent:: " + PhoneError);
    }

}
```

```

// To add the calendar event to the device using 'voltmx.phone.addCalendarEvent' APICalendarAddEvent: function(eventObj) {
    try {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        if (dd &amp; lt; 10) {
            dd = '0' + dd
        }
        if (mm &amp; lt; 10) {
            mm = '0' + mm
        }
        var date = dd + '/
' + mm + ' / ' + yyyy;
        var stime = h + ":" + (parseInt(m) + 2).toString() + ":" + s;
        this.startTime = date + " " + stime;
        var ftime = (parseInt(h) + 1).toString() + ":" + m + ":" + s;
        this.finishTime = date + " " + ftime;
        if (eventObj\["text"\] == "Add calendar event") {
            var evtobj = {
                summary: "Event started",
                start: this.startTime,
                finish: this.finishTime,
                alarm: 40,
                access: "public"
            };
            voltmx.phone.addCalendarEvent(evtobj);
            alert("Calendar event is added with start time = " + this.startTime + ". Please open device calendar to observe this.");
        } else {
            var evtobj = {
                summary: "Event started",
                start: this.startTime,
                finish: this.finishTime,
                alarm: 40,
                access: "confidential"
            };
            voltmx.phone.addCalendarEvent(evtobj);
            alert("Calendar event is added in confidential mode with start time = " + this.startTime + ".");

        }
    } catch (PhoneError) {
        alert("error in addCalendarEvent:: " + PhoneError);
    }
}  

```

### Return Values

None

### Exceptions

This function throws the following phone exceptions.

| Exception | Description |
| --- | --- |
| 2100 | Unable to send the Message |
| 2101 | Insufficient Permissions |
| 2102 | Cannot open mail, mail not configured |
| 2103 | Cannot open media gallery |

This function also throws the following general exceptions.

| Constant | Description |
| --- | --- |
| 100 | Invalid parameter type. |
| 101 | Invalid number of arguments. |
| 102 | Invalid input – thrown when the input is invalid based on the context. |
| 103 | Invalid operation – thrown when the operation is invalid based on the context. |
| 104 | Not supported error – thrown when the method is not supported at all. |
| 105 | Index out of range. |
| 106 | Unknown error |

### Remarks

You can view a video on using the Calendar [here](https://youtu.be/iUaf-WkpGXA).

Events cannot be added in the past.

When your app calls this function on Android, it must have both the READ\_CALENDAR and WRITE\_CALENDAR permissions. Due to Android limitations, when your app sets an alarm with this function the number of seconds are rounded to the nearest minute. Events are added to the local calendar with the calendar name as the application name. They cannot be synched to email accounts.

When your app calls this function on iOS, the app must have NSCalendarsUsageDescription  in info plist. Starting iOS 17, app must have NSCalendarsWriteOnlyAccessUsageDescription or NSCalendarsFullAccessUsageDescription in info plist. For more details, refer to [Apple documentation](https://developer.apple.com/documentation/eventkit/accessing_the_event_store).

The time zone of events that your app adds is the same as the device's current time zone.

### Platform Availability

*   iOS
*   Android version 4.0 and later
*   Windows

* * *

</details>
<details close markdown="block"><summary>voltmx.phone.cancelVibration</summary>

* * *

This API stops the ongoing vibration pattern on a device. This API is available from V9 SP2 onwards.
<!-- This API stops the ongoing vibration pattern on a device. This API is available from V8 SP3 onwards. -->

> **_Important:_** For Android, you must define the VIBRATE permission under Manifest Properties.  
**<uses-permission android:name="android.permission.VIBRATE" />**

### Syntax

```

voltmx.phone.cancelVibration()
```

### Input Parameters

None.

### Example

```

voltmx.phone.cancelVibration();
```

### Return Values

None.

### Limitations/Requirements

*   Windows
    *   The device must have vibration hardware.
        
    *   Device family (Windows OS build version) must be: Windows 10 Creators Update (introduced v10.0.15063.0) or later.
        
    *   API contract must be: Windows.Foundation.UniversalApiContract (introduced v4) or later.
        

### Platform Availability

*   Android
*   Windows

* * *
</details>
<details close markdown="block"><summary>voltmx.phone.clearSMSListeners</summary>

* * *

When invoked, this API clears the broadcast receiver and the existing listeners that are registered to retrieve the one-time password (OTP) from the SMS message received.

### Syntax

```

voltmx.phone.clearSMSListeners()
```

### Input Parameters

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">SMSListenerType [Constant] - Optional</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The SMSListenerType value can be any of the following: voltmx.phone.SMS_WITH_USER_CONSENT voltmx.phone.SMS_WITHOUT_USER_CONSENT Depending on the parameter value, a specific listener type is cleared. If no type is specified, both type of listeners(if any) are cleared.</td></tr></tbody></table>

> **_Note:_** Ensure that you create an androidbuild.properties file in the project folder of your Volt MX Iris workspace, and add the following key: `addSMSRetrieverSupport = UI`.  
You can set the key to `UI` or `Non-UI` to fetch the required Gradle entries. To know more about adding Android properties to the androidbuild.properties file, click [here](../../../Iris/iris_user_guide/Content/Native_App_Properties.md#add-android-properties-to-androidbuild-properties-file).  

### Example

```

clearAll: function() {
try {
voltmx.phone.clearSMSListeners();
} catch (err) {
alert("Error:: " + err);
}
}
```

### Return Values

None.

### Exceptions

*   101 - Invalid type of arguments to the voltmx.phone.clearSMSListeners API

### Platform Availability

*   Android

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.generateAppHashKey</summary>

* * *

App hash key is a hash string composed of the app's package name and the app's public key certificate. When invoked, this API generates a hash key that must be included in the SMS message sent from the server to the user's device.

For an app to receive the message callback, the hash key has to be correct.

> **_Note:_** This API must be invoked only if type of SMS listener triggered is voltmx.phone.SMS\_WITHOUT\_USER\_CONSENT

### Syntax

```

voltmx.phone.generateAppHashKey()
```

### Input Parameters

None.

> **_Note:_** Ensure that you create an androidbuild.properties file in the project folder of your Volt MX Iris workspace, and add the following key: `addSMSRetrieverSupport = UI`.  
You can set the key to `UI` or `Non-UI` to fetch the required Gradle entries. To know more about adding Android properties to the androidbuild.properties file, click [here](../../../Iris/iris_user_guide/Content/Native_App_Properties.md#add-android-properties-to-androidbuild-properties-file).  

### Example

```

generateAppHashKey: function() {
    var key = voltmx.phone.generateAppHashKey();
    voltmx.print("AppHashkey: " + key);
}
```

### Return Values

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Return Value</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">appHashKey[ String ]</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Returns a hash key that has to be appended to the SMS message by server.</td></tr></tbody></table>

### Platform Availability

*   Android

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.dial</summary>

* * *

Enables your app to call the specified telephone number.

You can use this API to make calls to other numbers without leaving the application.

### Syntax

```

voltmx.phone.dial(  
    number);
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| _number_ | A string containing the phone number to call. Only numbers, +, - and space are treated as valid characters in this string. |

 

### Example

```

dial: function() {
    var number = this.view.tbxDial.text;
    voltmx.phone.dial(number);
},
```

### Return Values

None

### Exceptions

2101 - Insufficient Permissions

### Remarks

When you make a call to the specified number using this API, the underlying OS is used to make the call. The call charges as imposed by the service provider are applicable.

On the iPhone simulator, this function is a dummy call. You need to test this function on an actual iPhone device.

### Platform Availability

Not supported on Windows, iPad, Android Tablets, Desktop Web, and Mobile Web platforms. You can use the phone widget to achieve the same functionality on Mobile Web.

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.findCalendarEvents</summary>

* * *

This function finds an event in the device's calendar.

### Syntax

```

voltmx.phone.findCalendarEvents(  
    evtobj);
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| evtobj \[Object\] - Mandatory | A JavaScript object that can contain the following values:type: "[starting](#starting)" or "[ending](#ending)" or "[occuring](#occurring)"start: The start date and time.finish: The end date and time. |

 

### Example

```

var evtobj = {
    type: "starting",
    start: this.startTime,
    finish: this.finishTime
};
var events = voltmx.phone.findCalendarEvents(evtobj);
```

### Return Values

If no matching event is found, this function returns null. If matching events are found, this function returns an array of JavaScript objects containing the matching events. Each JavaScript object contains the following key-value pairs.

| Key | Value |
| --- | --- |
| summary | A string that contains a short description of the event. |
| start | A string that holds the start date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". This must be less than the date and time in the `finish` key, |
| finish | A string that holds the finish date and time for the event. The format for date is "dd/mm/yyyy", and time is "hh:mm:ss". This must be greater than the date and time in the `start` key. |
| alarm | An optional number that specifies the time in seconds before the `start` time when the phone must trigger an alarm. This key can be omitted if your app does not need to specify an alarm time. |
| note | A string that contains the long description of the event. |
| access | A string that indicated the privacy setting for the event. The values can be `public`, `private`, or `confidential` |

### Exceptions

This function throws the following phone exceptions.

| Exception | Description |
| --- | --- |
| 2100 | Unable to send the Message |
| 2101 | Insufficient Permissions |
| 2102 | Cannot open mail, mail not configured |
| 2103 | Cannot open media gallery |

This function also throws the following general exceptions.

| Constant | Description |
| --- | --- |
| 100 | Invalid parameter type. |
| 101 | Invalid number of arguments. |
| 102 | Invalid input – thrown when the input is invalid based on the context. |
| 103 | Invalid operation – thrown when the operation is invalid based on the context. |
| 104 | Not supported error – thrown when the method is not supported at all. |
| 105 | Index out of range. |
| 106 | Unknown error |

### Remarks

The search criteria in the type key in the _evtobj_ parameter can be any of the following values.

| Constant | Description |
| --- | --- |
| starting | Searches for events starting between _"start"_ and "_finish_". |
| ending | Searches for events ending between _"start_" and _"finish_". |
| occurring | Searches for events that have any part of the event occurring during the period specified between _"start_" and _"finish_". This is the default. |

READ\_CALENDAR permission is needed to use this function.

This function is supported on Android 4.0 version and above (that is, Android API 14 and later). Invocation on Android version less than 4.0 ( that is, an Android API level earlier than 14) is ignored.

When your app calls this function on iOS, the app must have NSCalendarsUsageDescription in info plist. Starting iOS 17, app must have  NSCalendarsFullAccessUsageDescription in info plist.
For more details, refer to [Apple documentation](https://developer.apple.com/documentation/eventkit/accessing_the_event_store).

This function searches only those events that are added by the application.

### Platform Availability

*   iOS
*   Android 4.0 or later
*   Windows

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.getRemoveEventOptions</summary>

* * *

This API returns an array of constants that indicates possible actions for removing a particular event depending on the native support on the device. One of the values that this API returns must be passed as [removeOption](#removeOption) for [voltmx.phone.removeCalendarEvent API](#removeCalenderEvent).

### Syntax

```

voltmx.phone.getRemoveEventOptions([eventHandle](#eventHandle1))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| eventHandle - Mandatory | Single event from the array of events that the [voltmx.phone.findCalendarEvents API](#findCalendarEvents) returns. |

 

### Example

```

var removeOptions = voltmx.phone.getRemoveEventOptions(eventHandle);
```

### Return Values

An array with possible constant values depending on native support in devices. The possible constants that will be returned as part of the array are as follows:

| Constant | Description |
| --- | --- |
| CALENDAREVENT\_REMOVE\_THIS | Indicates that only one event must be deleted. |
| CALENDAREVENT\_REMOVE\_THIS\_AND\_FUTURE | Indicates that the event as well as future events must be deleted. |

 

> **_Note:_** Depending on the OS configuration of certain Android devices, any of these two values may not be applicable. So before passing any of these two values in the API, you must verify if the Android device supports the required value.

### Platform Availability

*   iOS
*   Android
*   Windows

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.hasVibratorSupport</summary>

* * *

This API returns whether vibrator is supported on a device. This API is available from V9 SP2 onwards.

> **_Important:_** For Android, you must define the VIBRATE permission under Manifest Properties.  
**<uses-permission android:name="android.permission.VIBRATE" />**

### Syntax

```

voltmx.phone.hasVibratorSupport()
```

### Example

```

hasVibratorSupport: function() {
    if (voltmx.phone.hasVibratorSupport() === true) {
        alert("The device contains a Vibration motor");
    }
},
```

### Input Parameters

None.

### Return Values

Boolean is the return value.

| Return Value | Description |
| --- | --- |
| true | The device supports vibrator. |
| false | The device does not support vibrator. |

 

### Limitations/Requirements

*   Windows
    *   The device must have vibration hardware.
        
    *   Device family (Windows OS build version) must be: Windows 10 Creators Update (introduced v10.0.15063.0) or later.
        
    *   API contract must be: Windows.Foundation.UniversalApiContract (introduced v4) or later.
        

### Platform Availability

*   Android
*   Windows

* * *
</details>

<details close markdown="block"><summary id="phone.op2">voltmx.phone.openEmail</summary>

* * *

This API allows the application to launch the native email client with predefined email addresses, subject, body, and attachments.

### Syntax

<pre><code style="display:block;background-color:#eee;">voltmx.phone.openEmail](<a href="#torecipients">torecipients</a>,<a href="#ccrecipients">ccrecipients</a>, <a href="#bccrecipients">bccrecipients</a>, <a href="#subject">subject</a>, <a href="#messagebody">messagebody</a>, <a href="#ismessagebod.md">ismessagebodyhtml</a>, <a href="#attachments">attachments</a>, <a href="#viewMode">viewMode</a>, <a href="#filterEmailAppsOnly">filterEmailAppsOnly</a>)</code></pre>

### Input Parameters  

<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="torecipients">torecipients [Array of Strings] - Mandatory</td>
<td>List of email addresses to be included in the “to” list. For example, “john@example.com”,”stephen.joseph@voltmx.com”, and “test@somecompany.com”.</td>
</tr>
<tr>
<td id="ccrecipients">ccrecipients [Array of Strings] - Optional</td>
<td>List of email addresses to be included in the “cc” list. For example, “john@example.com”,”stephen.joseph@voltmx.com”, and “test@somecompany.com”. If you do not want to use this parameter, you can pass null value.</td>
</tr>
<tr>
<td id="bccrecipients">bccrecipients [Array of Strings] - Optional</td>
<td>List of email addresses to be included in the “bcc” list. For example, “john@example.com”, “stephen.joseph@voltmx.com”, and “test@somecompany.com”.If you do not want to use this parameter, you can pass null value.</td>
</tr>
<tr>
<td id="subject">subject [String]- Optional</td>
<td>Subject to be part of the email. If you do not want to use this parameter, you can pass null value.</td>
</tr>
<tr>
<td id="messagebody">messagebody [String] -Optional</td>
<td>Body to be part of the email. If you do not want to use this parameter, you can pass null value.</td>
</tr>
<tr>
<td id="ismessagebodyhtml">ismessagebod.html [Boolean] - Optional</td>
<td>
<p>If you do not want to use this parameter, you can pass null value. When you pass null value, this parameter defaults to false. true: message body must be treated as HTML content false: message body must not be treated as HTML content</p>
<ul>
<li><b>true</b>:message body must be treated as HTML content</li>
<li><b>false</b>:message body must not be treated as HTML content</li>
</ul>
<blockquote>
<em><b>Note</b></em>: Windows 10 platform do not support HTML body. This is an underlying SDK limitation.
</blockquote>
</td>
</tr>
<tr>
<td id="attachments">attachments [Array of Objects] - Optional</td>
<td>
<p>Each attachment is a Hash-table with the following key-value pairs. If you do not want to use the attachments parameter, you can pass null value.</p>
<ul>
<li><b>mimetype [String]</b>Standard mime types like image/png or image/jpg or image/* etc.</li>
<li><b>attachment [Object]</b>Rawbytes received from the camera, image widget, or openmediagallery api.</li>
<li><b>filename (Optional) [String]</b>name of the file to appear as attachment.</li>
</ul>
<blockquote>
<em><b>Note</b></em>:
<ul>
<li>In Android, filename property is not supported.The Android SDK does not provide any provision for giving file name in attachments while launching native email Application.</li>
<li>For more information on how to attach files in Android, click <a href="sharefilesandroid.html">here</a>
</li>
</ul>
</blockquote>
</td>
</tr>
<tr>
<td id="viewMode">viewMode [Integer] - Optional</td>
<td>
<p>Defines the possible view preferences for an email client window. This is a Windows-specific parameter. The values of viewMode are as follows:</p>
<ul>
<li>0 - Default value Defaults to half, which means, the window uses 50% (half) of the available horizontal screen pixels.</li>
<li>1 - UseLess The window uses less than 50% of the available horizontal screen pixels.</li>
<li>2 - UseHalf The window uses 50% (half) of the available horizontal screen pixels.</li>
<li>3 - UseMore The window uses more than 50% of the available horizontal screen pixels.</li>
<li>4 - UseMinimum The window uses the minimum horizontal pixel width (either 320 or 500 pixels) specified in the app's manifest file.</li>
<li>5 - UseNone The window uses no visible component.</li>
</ul>
<p>If you pass any value other than an integer, the "openEmail : mode must be integer" error message is displayed.</p>
<blockquote>
<em><b>Note</b></em>: viewMode is specific only to Windows and is ignored for all other platforms. For all other devices, the viewMode parameter falls back to its default behavior.
</blockquote>
</td>
</tr>
<tr>
<td id="filterEmailAppsOnly">filterEmailAppsOnly [Boolean] - Optional</td>
<td>
<p>Set this parameter to true to filter and list only email applications, which are shown in the Chooser dialog box. By default, the value of this parameter is false. If you do not want to use this parameter, you can pass a null value.</p>
<blockquote>
<em><b>Note</b></em>: This property is only available on the Android platform.
</blockquote>
<p>On Android 11 (Target SDK version 30, or later) devices, if you want to view a filtered list of email applications, add the following entry in the Project Settings &gt; Native &gt; Android Mobile/Tablet &gt; Child tag entries under &lt;manifest&gt; tag field:</p>
<pre><code style="display:block;background-color:#eee;">&lt;queries&gt;
&lt;intent&gt;
&lt;action android:name="android.intent.action.SENDTO" /&gt;
&lt;data android:scheme="mailto"/&gt;
&lt;/intent&gt;
&lt;/queries&gt;</code></pre>
</td>
</tr>
</table>


### Example

```

emailSend: function() {
    voltmx.phone.openEmail(["kitchensinkapp@voltmx.com"], [""], [""], "Feedback on KitchenSink Application 1.1", "", false, []);
}
```

### Return Values

None

### Exceptions

PhoneError

The following error codes are defined for Phone APIs

*   2100 - Unable to send the Message
*   2101 - Insufficient Permissions
*   2102 - Cannot open mail, mail not configured
*   2103 - Cannot open media gallery

### Platform Availability

Available on all platforms except Server Side Mobile Web, SPA, and Desktop Web.

For these platforms you can launch the native email client by using Richtext widget with an _href_ tag similar to the one shown below:

_<a href="mailto:email@voltmx.com?subject=Foo&body=Bar">Email Me</a>_

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.openMediaGallery</summary>

* * *

This API allows you to open the picture gallery of the mobile device and pick an existing picture.

You can use this API to use any of the multimedia resources (image files, audio files, or video files) available in the device media gallery within your application.

For iPad, openMediaGallery will show the Photos/Videos in the native popover. The popover can be anchored to a widget. The widget to which the popup should be anchored will be provided as a third parameter to openMediaGallery API.

You can view a video on using iPad Popover [here](https://youtu.be/4EKgCANM1TI).  

<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, one or more granular media permissions needs to be added in tags section under Application tags attributes based on the mime type provided to api. <br> 
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/&gt;</code><br>
        </li>
    </ul>
</blockquote>


### Syntax

```

voltmx.phone.openMediaGallery([onselectioncallback](#onselectioncallback), [querycontext,](#querycontext) [PSP](#PSP))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| onselectioncallback \[Function\] - Mandatory | This callback function is invoked when a media is selected. The function receives rawbytes and permStatus as parameters. **rawbytes:** Raw bytes of a selected file. **permStatus:** Permission status whether an app has permission to access the media gallery of the device. **For iOS**: Generally, an app needs [runtime permission](runtime_permissions.md) from the end-user to access the media gallery. If you call the API without obtaining the permission, platform automatically pops up a system permission dialog box with "Allow" and "Deny" options, asking the end-user to grant permission to add a contact to the device.If the end-user taps the "Allow" option, platform proceeds to access the underlying OS API. If the end-user taps the "Deny" option, the rawbytes parameter carries null value and the permStatus parameter holds the voltmx.application.PERMISSION\_DENIED constant value indicates the permission to access the media gallery is denied.**For Android**: This parameter reads the external storage permission that is required to read contents from the media gallery. If you call the API without obtaining the required permission, the platform automatically pops up a system permission dialog containing 'Allow' and 'Deny' options, asking the end user to grant the necessary permission. If the end user taps the 'Allow' option, the platform proceeds to access the underlying OS API. If the end user taps the 'Deny' option, the rawbytes parameter carries null value and the permStatus parameter holds the voltmx.application.PERMISSION\_DENIED constant value, which indicates that the permission to access the media gallery has been denied. **mimeType:** The file format of a selected file. For more information on the standard mime types, refer to the [IANA](https://www.iana.org/assignments/media-types/media-types..md). Examplefunction onSelectionCallback(rawbytes, permStatus, mimeType) { if(rawbytes != null) { //access the rawbytes alert(“file format: ”++mimeType); } else if (permStatus == voltmx.application.PERMISSION\_DENIED) { alert(“Permission Denied to Access the Photo Gallery”); } } var querycontext = { mimeType: "video/\*" }; var returnStatus = voltmx.phone.openMediaGallery(onSelectionCallback, querycontext); |
| querycontext \[Table\] - Optional | Query context is an Object that can be populated with key-value pairs for fine tuning the media items for display (currently only one key **"mimetype"** supported to query the gallery items ). The possible values of the mimetype key can be **image/\*, video/\*, audio/\***. rawbytes.getRawbytesType () This API returns the type of rawbytes that are obtained from onSelectionCallback of openMediaGallery. Rawbytes can be of different types such as image, audio, video, file, bytes, and livePhoto. This API is available from V9 SP2 onwards. var rawbytesType = rawbytes.getRawbytesType(); To check the obtained rawbyte type, the following constants can be used: constants. RAWBYTES \_IMAGE: rawbytes related to image constants. RAWBYTES \_VIDEO: rawbytes related to video constants. RAWBYTES \_AUDIO: rawbytes related to audio constants. RAWBYTES \_FILE: rawbytes related to files constants. RAWBYTES \_BYTES: rawbytes related to bytes constants. RAWBYTES \_LIVEPHOTO: rawbytes related to livePhoto if(rawbytes.getRawbytesType() == constants. RAWBYTES\_LIVEPHOTO) { // app logic } livePhotoResources - Rawbytes Property Returns both image and file paths, using this property you can get the both image and video paths. This property returns a json containing both video and image paths, and is available from V9 SP2 onwards. It contains the following keys: imageURL: path of stored image related to livePhoto. videoURL: path of stored video related to livePhoto. var livePhotoResources = Rawbytes.livePhotoResources;//Example for creating Live photos using FFIFunction onSelectionCallback(){ if (rawbytes !== null) { if (rawbytes.getRawbytesType() == constants.RAWBYTES\_LIVEPHOTO) { globalArrOFURLS = rawbytes.livePhotoResources; alert(globalArrOFURLS); var livePhotosFFIObject = new PHVFFI.livePhotosFFI(); //Invokes method 'createLivePhoto' on the object livePhotosFFIObject.createLivePhoto(globalArrOFURLS); } frmHome.imgOne.rawBytes = rawbytes; } else if (permStatus == voltmx.application.PERMISSION\_DENIED) { alert("PERMISSION\_DENIED"); } } } var returnStatus = voltmx.phone.openMediaGallery(onSelectionCallback, querycontext); |
| PSP \[Table\] - Optional | The PSP parameter is a dictionary with the following properties. _widgetref \[Widget Reference\]_: Applicable only on iPad. The widget to which the pop-up will be anchored to. For example, _formname.widgetname_. _compressionlevel_: Compression level is a float value. Specify 0.0 for most compressed images and 1.0 for least compressed images. |

### Example

```

openMediaGalleryForEmail: function() {
    voltmx.phone.openMediaGallery(this.openMediaGallaeryCallBck, {
        mimetype: "image/*"
    });
}
```

### Return Values

None

### Exceptions

PhoneError

The following error codes are defined for Phone APIs

*   2100 - Unable to send the Message
*   2101 - Insufficient Permissions
*   2102 - Cannot open mail, mail not configured
*   2103 - Cannot open media gallery

### Platform Availability

Supported on all platforms except Mobile Web, SPA, and Desktop Web.

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.performHapticFeedback</summary>

* * *

This API provides various haptic feedback to users, and is available from V9 SP2 onwards.

### Syntax

```

voltmx.phone.performHapticFeedback(hapticFeedbackValue)
```

### Input Parameters

hapticFeedbackValue \[constant\] – Mandatory

Indicates the type of haptic feedback. Its possible values are as follows:

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 464px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 578px;" class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1"><span style="font-size: 12pt;">hapticFeedbackValue</span></td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1"><b style="font-size: 12pt;">Description</b></td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1">0 - voltmx.hapticFeedback.SUCCESS</td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1">Triggers a haptic feedback for a successful event.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1">1 - voltmx.hapticFeedback.WARNING</td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1">Triggers a haptic feedback that represents a warning to users.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1">2 - voltmx.hapticFeedback.FAILURE</td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1">Triggers a haptic feedback for a failure event.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1">3 - voltmx.hapticFeedback.LIGHT</td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1">Triggers a haptic feedback of light intensity.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1">4 - voltmx.hapticFeedback.MEDIUM</td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1">Triggers a haptic feedback of medium intensity.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1">5 - voltmx.hapticFeedback.HEAVY</td><td style="text-align: center;" class="TableStyle-Basic-BodyD-Column1-Body1">Triggers a haptic feedback of high intensity.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="text-align: center;" class="TableStyle-Basic-BodyB-Column1-Body1">6 - voltmx.hapticFeedback.SELECTION</td><td style="text-align: center;" class="TableStyle-Basic-BodyA-Column1-Body1">Triggers a haptic feedback that represents a selection/state change.</td></tr></tbody></table>

 

### Example

```

hapticFeedback: function(){
  voltmx.phone.performHapticFeedback(5);
}
```

### Return Values

None.

### Remarks

*   iOS
    *   The Haptic Feedback feature is available on iPhone 7 devices and later. These devices have Taptic Engine hardware and users can enable/disable Haptics from Device Settings-> Sounds & Haptics-> System Haptics.
        
*   Android
    *   Users can enable the Vibrate on touch feature from Settings-> Sound & notification-> Other sounds.
        

### Platform Availability

*   iOS

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.removeCalendarEvent</summary>

* * *

This API either deletes a single event or a series of repeat events starting from the date specified in the [eventHandle](#eventHandle) from the device calendar, depending on the provided [removeOption](#removeOption) parameter. While deleting a series of recurring events, the API deletes all subsequent events beginning from the date specified in the [eventHandle](#eventHandle); however, the API does not delete any repeat event that is before the specified date.

> **_Note:_** To delete an event, you must first search for the event by using the [findCalendarEvents API](#findCalendarEvents) and delete the event.

### Syntax

```

voltmx.phone.removeCalendarEvent([eventHandle](#eventHandle), [removeOption](#removeOption))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| eventHandle \[Object\] - Mandatory | Event handle is returned by the find operation. |
| removeOption - Optional | This parameter is considered only for recurring events. If you do not specify a value for this parameter or pass an invalid value for a recurring event, the current event as well as future recurrences are deleted. Default fallback value of removeOption is constants.CALENDAREVENT\_REMOVE\_THIS\_AND\_FUTURE. You can fetch possible removeOption values for delete events by using the [voltmx.phone.getRemoveEventOptions API](#getRemoveEventOptions). The following constants are available for removeOption: CALENDAREVENT\_REMOVE\_THIS : Indicates that only one event should be deleted. CALENDAREVENT\_REMOVE\_THIS\_AND\_FUTURE : Indicates the event as well as future events should be deleted. |

 

### Example

```

//To remove the calendar event from the device using 'voltmx.phone.removeCalendarEvent' API

CalendarRemoveEvent: function() {
    if (this.startTime === "undefined" || this.startTime === undefined) {
        this.view.lblPhone.text = "Please create the calendar event.";
        return;
    }
    var evtobj = {
        type: "starting",
        start: this.startTime,
        finish: this.finishTime
    };
    var events = voltmx.phone.findCalendarEvents(evtobj);

    voltmx.phone.removeCalendarEvent(events[0]);
    alert("Calendar event is removed. Please open device calendar to observe this");
}
```

```

voltmx.phone.removeCalendarEvent(events\[1\],constants.CALENDAREVENT\_REMOVE\_THIS);  
voltmx.phone.removeCalendarEvent(events\[1\],constants.CALENDAREVENT\_REMOVE\_THIS\_AND\_FUTURE);  
voltmx.phone.removeCalendarEvent(events\[1\]); //If it is non-recurring, the current event is deleted; however, if it is a recurring event, the event as well as future events will be deleted.
```

### Return Values

None.

### Exceptions

PhoneError

The following error codes are defined for Phone APIs

*   2100 - Unable to send the Message
*   2101 - Insufficient Permissions
*   2102 - Cannot open mail, mail not configured
*   2103 - Cannot open media gallery

### Error

*   100 – invalid type of parameters
*   101 – invalid number of arguments
*   102 – invalid input – thrown when the input is invalid based on the context.
*   103 – invalid operation – thrown when the operation is invalid based on the context.
*   104 – not supported error – thrown when the method is not supported at all.
*   105 – index out of range.
*   106 – unknown error.

### Platform Availability

*   iOS
*   Android
*   Windows

### Remarks

*   READ\_CALENDAR and WRITE\_CALENDAR permissions are needed for this API.
*   This API is supported for Android 4.0 version and above (that is, Android API level later to 13). Invocation on Android version less than 4.0 ( that is, Android API level earlier to 14) will be ignored.
*   When your app calls this function on iOS, the app must have NSCalendarsUsageDescription  in info plist. Starting iOS 17, app must have NSCalendarsWriteOnlyAccessUsageDescription or NSCalendarsFullAccessUsageDescription in info plist. For more details, refer to [Apple documentation](https://developer.apple.com/documentation/eventkit/accessing_the_event_store).  
*   If this API removes last calendar event added to local calendar, then the local calendar account will be deleted.

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.retrieveSMS</summary>

* * *

When invoked, this API reads an SMS message received from the server. The API then retrieves the one-time password (OTP) from the message if it matches with the config provided.

### Syntax

```

voltmx.phone.retrieveSMS(callback, SMSConfig);
```

### Input Parameters

**SMSConfig \[Object\] - Optional**

SMSConfig supports the following key-value pairs:

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Key</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">OTPSizeLimit [Number] - Optional</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Expected/desired size limit of the OTP. If the OTPSizeLimit is not specified, the default size limit is 6.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">OTPType [Constant] - Optional</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Expected/desired type of OTP. [ voltmx.phone.SMS_ALPHANUMERIC_OTP or voltmx.phone.SMS_NUMERIC_OTP] The default type is Numeric.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">OTPRegex [String] - Optional</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Customized regex to retrieve OTP or PIN as required. If customized regex is provided, all the other criteria such as OTPSizeLimit and OTPType are neglected.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SMSListenerType [Constant] - Optional</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Type of SMS listener to be triggered. Following are the SMS listener types: <b>voltmx.phone.SMS_WITHOUT_USER_CONSENT:</b> Using this constant, OTP would be retrieved automatically without any user interaction. In this case, the message that you send from the server to the user's device must fulfill the following: Be no longer than 140 bytes Contain a one-time code that the client sends back to your server to complete the verification flow Include an 11-character hash string that identifies your app To generate a hash key, use any of the following ways: The command-line procedure to generate hash. For more information on computing an app's hash string, refer <a href="https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string" target="_blank">here</a>. The <a href="#generate" class="selected">generateAppHashKey API</a> to generate the hash key when signed in with the production keystore. Here is a sample message format: 123ABC78 FA+9qCX9VSu (123ABC78 is the one-time code and FA+9qCX9VSu is the hash string) <b>voltmx.phone.SMS_WITH_USER_CONSENT:</b> The User Consent Screen is displayed to users after the SMS with an OTP is received. The OTP would be retrieved only after user grants access to the SMS through the User Consent Screen. In this case, the message that you send from the server to the user's device must fulfill the following: Contain a 4-10 character alphanumeric string with at least one number. Is sent by a phone number that's not in the user's contacts.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">SMSSenderDetails [String] - Optional</td><td class="TableStyle-Basic-BodyA-Column1-Body1">SMS sender details may be specified only if <code>SMSListenerType = voltmx.phone.SMS_WITH_USER_CONSENT.</code> In this case, OTP will be retrieved only if the SMS was sent by that phone number specified in SMSSenderDetails key. The sender's phone number should be of E.164 format.</td></tr></tbody></table>

**callback \[Function\] - Mandatory**

The callback executed to communicate the SMS Listener Registration status and response of API. The syntax of the callback function is:

callback(callbackObject)

The callbackObject contains SMS and status key value pairs.

**SMS key:** SMS object, the value of the SMS key is populated only when code is equal to voltmx.phone.SMS\_RETRIEVED\_SUCCESSFULLY. In case of any error, the SMS object is null.

The SMS object contains the following key-value pairs:

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 336px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Key</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">message [String]</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SMS received</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">OTP [String]</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Retrieved OTP from SMS</td></tr></tbody></table>

 

> **_Note:_** The OTP value returned can be null/empty if the message doesn't contain any OTP matching the SMSConfig.

**status key:** Value of the status key contains the following key-value pairs:

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 336px;"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Key</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">code[Number]</td><td class="TableStyle-Basic-BodyD-Column1-Body1">status code</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">message[String]</td><td class="TableStyle-Basic-BodyA-Column1-Body1">status message</td></tr></tbody></table>

 

The code key can have any of the following values. A code value is populated when the scenario in the corresponding description occurs.

The following codes specify if the framework is successful in starting the SMS listener.

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Code</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.SMS_LISTENER_REGISTRATION_SUCCESS</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SMS listener registered successfully. You must request the server for OTP only after the successful registration status is conveyed in a message callback.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">voltmx.phone.SMS_LISTENER_REGISTRATION_FAILED</td><td class="TableStyle-Basic-BodyA-Column1-Body1">SMS listener registration failed.</td></tr></tbody></table>

 

The following codes are applicable only after voltmx.phone.SMS\_LISTENER\_REGISTRATION\_SUCCESS is received.

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Code</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.SMS_RETRIEVED_SUCCESSFULLY</td><td class="TableStyle-Basic-BodyD-Column1-Body1">SMS retrieved successfully.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.SMS_TIMEOUT</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The SMS listener has timed out as No SMS is received within 5mins of trigger of API.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.SMS_DEVELOPER_ERROR</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Caller app has incorrect number of certificates. Only one certificate is allowed. This can occur only when SMSListenerType is set to voltmx.phone.SMS_WITHOUT_USER_CONSENT.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.SMS_ERROR</td><td class="TableStyle-Basic-BodyD-Column1-Body1">App-code collides with other installed apps. This can occur only when SMSListenerType is set to voltmx.phone.SMS_WITHOUT_USER_CONSENT.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.SMS_USER_CANCELLED</td><td class="TableStyle-Basic-BodyD-Column1-Body1">While SMSListenerType = voltmx.phone.SMS_WITH_USER_CONSENT, user denies OTP retrieval. This can occur only when SMSListenerType is set to voltmx.phone.SMS_WITH_USER_CONSENT.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">voltmx.phone.ACTIVITY_NOT_FOUND</td><td class="TableStyle-Basic-BodyD-Column1-Body1">While SMSListenerType = voltmx.phone.SMS_WITH_USER_CONSENT, an activity cannot be found to launch the Consent dialog. This can occur only when SMSListenerType is set to voltmx.phone.SMS_WITH_USER_CONSENT.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">voltmx.phone.SMS_UNKNOWN_ERROR</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Any error with unknown root cause.</td></tr></tbody></table>

 

> **_Note:_** Ensure that you create an androidbuild.properties file in the project folder of your Volt MX Iris workspace, and add the following key: `addSMSRetrieverSupport = UI`.  
You can set the key to `UI` or `Non-UI` to fetch the required Gradle entries. To know more about adding Android properties to the androidbuild.properties file, click [here](../../../Iris/iris_user_guide/Content/Native_App_Properties.md#add-android-properties-to-androidbuild-properties-file).  

### Example

```

retrieveOTPFromSMS: function() {


    SMSConfig = {}
    SMSConfig.OTPSizeLimit = 4;
    SMSConfig.OTPType = voltmx.phone.SMS_NUMERIC_OTP;
    SMSConfig.SMSListenerType = voltmx.phone.SMS_WITH_USER_CONSENT;
    SMSConfig.SMSSenderDetails = null;
    try {
        voltmx.phone.retrieveSMS(callback, SMSConfig);
    } catch (err) {
        voltmx.print("ERROR:" + err);
    }


    function callback(callbackObj) {
        statusCode = callbackObj.status.code;

        voltmx.print("STATUS_CODE::" + statusCode);

        if (statusCode == voltmx.phone.SMS_LISTENER_REGISTRATION_SUCCESS) {
            //ADD CODE TO INDICATE SERVER TO SEND OTP
        }

        if (statusCode == voltmx.phone.SMS_RETRIEVED_SUCCESSFULLY) {
            voltmx.print("message:" + callbackObj.SMS.message)
            voltmx.print("otp:" + callbackObj.SMS.OTP)
            alert(callbackObj.SMS.OTP)
        }

    }
```

### Return Values

None

**Limitations**

You must start an SMS retriever only after the previous registered retriever responds with a success or failure response. However, if you register a second SMS retriever before the first SMS retriever provides a response, the possible limitations are as follows:

*   When two SMS retrievals without a user's consent run simultaneously, the SMS callbacks are triggered in the same sequence in which they are registered. This sequence might not be same as the sequence in which the user has sent the requests to the server. As a result, a mismatch in the provided OTP config might occur.
*   When two SMS retrievals with a user's consent provide two unique sender details for two parallel SMS retrieval registrations, the SMS callbacks are triggered in the same sequence in which they are registered. The SMS details received at the native level does not contain the senders information. Consequently, a mismatch between the senders might occur.

**Exceptions**

Error Codes:

*   100 - Invalid number of arguments to API voltmx.phone.retrieveSMS()
    
*   101 - Invalid type of arguments to API voltmx.phone.retrieveSMS()
    

### Platform Availability

Android

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.sendSMS</summary>

* * *

This API provides access to the Messaging service of the underlying platform. You can send a text message to a specified number. This API accesses the messaging application of the underlying platform and uses that application to send text message to the specified number.

> **_Important:_** You can send only text messages and multimedia messages are not supported.

> **_Note:_** When you send messages using this API, the charges as imposed by the Service Provider are applicable. On iPhone this API opens the Messages application with a prepopulated text and number.

You can use this API to send messages to other numbers without leaving the application.

### Syntax

```

voltmx.phone.sendSMS([phonenumber](#phonenumber), [text](#text))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| phonenumber \[String\] - Mandatory | Number to which the SMS must be sent. |
| text \[String\] - Mandatory | Content of the SMS. |

 

### Example

```

sendSMS: function() {
    if (voltmx.os.deviceInfo().model == "iPhone Simulator") {
        alert("Works only on device");
    } else {
        var phoneNo = "+91 40 12345678"; // This is a dummy number
        var text = "Hi Volt MX developer";
        voltmx.phone.sendSMS(phoneNo, text);
    }
}
```

### Return Values

None

### Exceptions

PhoneError

The following error codes are defined for Phone APIs

*   2100 - Unable to send the Message.
*   2101 - Insufficient Permissions.

### Remarks

When you send messages using this API, the messaging application of the underlying platform is used to send the message with the number and text you specified i.e., the phone number and the message are pre-populated in the messaging application.

### Platform Availability

Available on all platforms except Desktop Web,SPA, Mobile Web, Android Tablets, iPad.

> **_Note:_** This API allows you to send only text messages. It does not support multimedia messages.

* * *
</details>

<details close markdown="block"><summary>voltmx.phone.startVibration</summary>

* * *

This API starts the vibration feature on a device, provided that device supports vibration. If the device does not support vibration, this API has no effect. If a vibration pattern is already in progress when this API is called, the previous pattern is halted and the new one begins. This API is available from V9 SP2 onwards.

> **_Important:_** For Android, you must define the VIBRATE permission under Manifest Properties.  
**<uses-permission android:name = "android.permission.VIBRATE" />**

### Syntax

```

voltmx.phone.startVibration (vibrationConfig, repeat)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| vibrationConfig \[Array\] - Mandatory | Specifies the list of all vibration patterns as an array. Each vibration pattern object accepts the **duration**, **amplitude**, and **delay** keys. delay \[Integer\] - Mandatory Specifies that the vibration will be paused for the specified delay time in milliseconds. This parameter must be a positive number. The default value of delay is 0 milliseconds. Any invalid or negative values specified for delay reverts to the default value, i.e., 0 milliseconds. duration \[Integer\] – Mandatory The number of milliseconds for which the device vibrates. This parameter must be a positive number. The default value of duration is 0 milliseconds. Any invalid or negative values specified for duration reverts to the default value, i.e., 0 milliseconds. amplitude \[Integer\] - Optional Controls the strength of the vibration. This must be a value between 0 and 255. For Windows and Android devices, when the vibration amplitude is 0, the vibration motor is turned off; whereas, when the vibration amplitude is 255, the vibration is performed at full strength. This parameter must be a positive number. The default value of amplitude is 0 milliseconds. Any invalid or negative values specified for amplitude reverts to the default value, i.e., 0 milliseconds. The amplitude parameter is supported on Android 8.0 and later. |
| repeat \[Boolean\] – Optional | **true** : The repeat vibration pattern is repeated until the **voltmx.phone.cancelVibration** API is called.**false** : Stops the repeat vibration pattern. This is the default value. |

 

### Example

```

//Device will vibrate for 100 milliseconds.
  
startVibration: function()
  {
    if(voltmx.phone.hasVibratorSupport()===true)
      {
        var vibrationConfig=[{
    "delay": 0,
    "duration": 100,
    "amplitude": 250
}];
        voltmx.phone.startVibration(vibrationConfig, true);
      }
    else{
        alert("The device does not support vibration");  
    }
  }
```

### Return Values

None.

### Behavior, Requirements, and Limitations

*   iOS
    
    *   The startVibration API generates only a single vibration effect.
    *   iOS does not support config parameters, such as amplitude and duration, for startVibration API.
    *   The startVibration API accepts arguments on iOS devices, but it ignores them. The API does not throw any error/exception.
*   Windows
    *   The device must have vibration hardware.
        
    *   Device family (Windows OS build version) must be: Windows 10 Creators Update (introduced v10.0.15063.0) or later.
        
    *   API contract must be: Windows.Foundation.UniversalApiContract (introduced v4) or later.
        

### Remarks

*   You can call this API with or without arguments for Android and Windows. If the arguments are not specified, the device vibrates for 100 milliseconds to align with the behavior for iOS.

### Platform Availability

*   Android
*   iOS
*   Windows

* * *
</details>

![](resources/prettify/onload.png)
