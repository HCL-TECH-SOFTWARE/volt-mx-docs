                            

You are here: Phone API

Phone API
=========

The Phone API provides your applications with access to the device's phone functionality, if the device supports it. Use the Phone API to access default applications in the underlying platform of the mobile device.

<div class="youtube-wrapper"><iframe src="https://www.youtube.com/embed/ogeSXmLtNjE" allowfullscreen=""></iframe></div>

The Phone API provides you with the following Namespaces and the respective API elements therein:

[voltmx.contact Namespace](voltmx.contact_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.contact.add](voltmx.contact_functions.md#add) | Adds a contact to the address book of the mobile device. |
| [voltmx.contact.details](voltmx.contact_functions.md#voltmx.con) | Displays the details of a given contact and returns a new instance of the contact structure. |
| [voltmx.contact.find](voltmx.contact_functions.md#contact.2) | Parses through the address book of the mobile device and looks for contacts that match the input string. |
| [voltmx.contact.remove](voltmx.contact_functions.md#contact.3) | Deletes the contact (s) that was returned by the contact.find operation. |

 

To add contacts to the phones address book, use the [voltmx.contact.add](voltmx.contact_functions.md#add) function. From the list of contacts, you can search for and retrieve a contact using the [voltmx.contact.find](voltmx.contact_functions.md#contact.2) function, and view details of a specific contact using the [voltmx.contact.details](voltmx.contact_functions.md#voltmx.con) function. Use the [voltmx.contact.remove](voltmx.contact_functions.md#contact.3) function to delete a contact.

To view the functionality of the `voltmx.contact` Namespace in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ContactAPI)

[voltmx.phone Namespace](voltmx.phone_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.phone.addCalendarEvent](voltmx.phone_functions.md#phone.ad) | Adds a new event to the device calendar. |
| [voltmx.phone.cancelVibration](voltmx.phone_functions.md#voltmx.phone.cancelVibration) | Stops the ongoing vibration pattern on a device. |
| [voltmx.phone.clearSMSListeners](voltmx.phone_functions.md#clearShiftListeners) | Clears the broadcast receiver and the existing listeners that are registered to read the one-time password (OTP) from an SMS message received from the server. |
| [voltmx.phone.dial](voltmx.phone_functions.md#phone.di) | Enables your app to call the specified telephone number. |
| [voltmx.phone.findCalendarEvents](voltmx.phone_functions.md#findCalendarEvents) | Finds an event in the device's calendar. |
| [voltmx.phone.generateAppHashKey](voltmx.phone_functions.md#generate) | Generates a hash key that must be included in the SMS message sent from the server to the user's device. |
| [voltmx.phone.getRemoveEventOptions](voltmx.phone_functions.md#getRemoveEventOptions) | Returns an array of constants that indicates possible actions for removing a particular event depending on the native support on the device. |
| [voltmx.phone.hasVibratorSupport](voltmx.phone_functions.md#voltmx.phone.hasVibratorSupport) | Returns whether vibrator is supported on a device. |
| [voltmx.phone.openEmail](voltmx.phone_functions.md#phone.op2) | Enables the application to launch the native email client with predefined email addresses, subject, body, and attachments. |
| [voltmx.phone.openMediaGallery](voltmx.phone_functions.md#phone.op) | Enables you to open the picture gallery of the mobile device and pick an existing picture. |
| [voltmx.phone.performHapticFeedback](voltmx.phone_functions.md#voltmx.phone.performHapticFeedback) | Provides various haptic feedback to users. |
| [voltmx.phone.removeCalendarEvent](voltmx.phone_functions.md#removeCalenderEvent) | Deletes a single event or a series of repeat events starting from the date specified in the eventHandle from the device calendar, depending on the provided removeOption parameter. |
| [voltmx.phone.retrieveSMS](voltmx.phone_functions.md#retrieveSMS) | Reads the one-time password from an SMS message received from the server. The one-time code will then be sent back to the server to complete the verification process. |
| [voltmx.phone.sendSMS](voltmx.phone_functions.md#sendSMS) | Provides access to the Messaging service of the underlying platform |
| [voltmx.phone.startVibration](voltmx.phone_functions.md#voltmx.phone.startVibration) | Starts the vibration feature on a device, provided that device supports vibration. |

 

Use the [voltmx.phone.dial](voltmx.phone_functions.md#phone.di) function to call a specific telephone number. To send messages to a specific telephone number, use the [voltmx.phone.sendSMS](voltmx.phone_functions.md#sendSMS) function. Use the [voltmx.phone.openEmail](voltmx.phone_functions.md#phone.op2) function to launch the native email client app, and open the picture gallery of the device using the [voltmx.phone.openMediaGallery](voltmx.phone_functions.md#phone.op) function.

To add new Calendar events, use the [voltmx.phone.addCalendarEvent](voltmx.phone_functions.md#phone.ad) function, find calendar events using the [voltmx.phone.findCalendarEvents](voltmx.phone_functions.md#findCalendarEvents) function, and set actions to remove calendar events using the [voltmx.phone.getRemoveEventOptions](voltmx.phone_functions.md#getRemoveEventOptions) function. Use the [voltmx.phone.removeCalendarEvent](voltmx.phone_functions.md#removeCalenderEvent) function to delete events from the Calendar.

On Android and iOS platforms, an app must have the end users’ [runtime permission](runtime_permissions.md) to use the **openMediaGallery**, **addCalendarEvent**, **findCalendarEvent**, and the **removeCalendarEvent** functions of the Phone API. If these functions are invoked without the end users’ permission, the platform automatically displays a system permission dialog box requesting permission from the end user.

To check whether a device supports vibration, use the [voltmx.phone.hasVibratorSupport](voltmx.phone_functions.md#voltmx.phone.hasVibratorSupport) function. Provide haptic feedback using the [voltmx.phone.performHapticFeedback](voltmx.phone_functions.md#voltmx.phone.performHapticFeedback) function. To start and stop a devices’ vibrate feature, use the [voltmx.phone.startVibration](voltmx.phone_functions.md#voltmx.phone.startVibration) and the [voltmx.phone.cancelVibration](voltmx.phone_functions.md#voltmx.phone.cancelVibration) functions respectively.

To view the functionality of the `voltmx.phone` Namespace in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/PhoneAPI)

### Error Code

2300 - Permission denied.

**Example**

```
try {
    voltmx.contact.find('John', false);
    catch (e) {
        if (e instanceof VoltMXError) {
            if (e.name == “PermissionError” & amp; & amp; e.errorCode == 2300) alert(“Failed to find contacts due to permission denial”);
        }
    }
```

> **_Note:_** In Windows Phone 7.5, the calendar event is only added at the application level and not on the phone's default calendar application.

 ![](resources/prettify/onload.png)
