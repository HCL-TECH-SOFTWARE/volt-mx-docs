                           

You are here: Important Considerations for Windows Phone

Important Considerations for Windows Phone
==========================================

> **_Note:_** Volt MX 9.2 does not support the building of Windows native applications. Please disregard all references to Windows in this topic.

Install the app on Windows 8.1 or later. Next, launch the app and register it with Windows cloud and the Engagement services server.

When an application is running:
-------------------------------

### Foreground

*   When Raw notification is received, callback gets called.
*   When Toast notification is received, online notification callback gets called.

### Background

*   When Toast notification is received, on click of the notification, it brings the app to foreground. But callback is not called.
*   Raw notification is ignored (native behavior of Microsoft).

When an application is not running
----------------------------------

When a Toast notification is received, it launches the app newly and application life cycle is executed. The app callback is not executed.

> **_Note:_** Offline notification callback is always ignored
