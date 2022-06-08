---
layout: "documentation"
category: "iris_api_dev_guide"
---
                     

# Volt MX Iris

## API Developers' Guide

Volt MX  Iris is a powerful yet easy-to-use integrated development environment (IDE) for developing, building, testing, debugging, and deploying mobile applications (apps) for multiple platforms—all from a single code base. Volt MX Iris empowers you to rapidly develop mobile apps while giving you the flexibility to integrate with back-end services as you need them. What's more, you can integrate into your app the very best of the native, web and hybrid environments.

For information on revision history, click [Revision History](revisionhome.html).

Volt MX  Iris APIs comprises a collection of APIs that you can use in apps written with Volt MX Iris. The APIs enable you to do such tasks as performing various operations on tables, manipulating strings, or invoking a service. The Volt MX Iris API library consists of the following:

*   **[Accelerometer API](accelereometer_apis.html)**: The Accelerometer APIs allows you to capture the device motion acceleration in X, Y, Z directions and also provide out of the box mechanisms to register for shake gestures event. The chapter comprises of all the APIs with the name **voltmx.accelerometer**.
*   **[Action Sheet API for iOS](actionsheet_api.html)**: The Action Sheet API provides support for Apple's Action Sheets on iOS apps.
*   **[Alert API](alert_api.html)**: The **voltmx.ui** namespace includes a function that enables your app to pop up an alert dialog box to display important message to the app's user.
*   **[Animation API](animationapi.html)**: The Animation API functions help your app to add animations to the rows of [SegmentedUI]({{ site.baseurl }}/docs/documentation/Iris/iris_widget_prog_guide/Content/Overview.html) widgets.
*   **[App Extension API for iOS](app-extension-ios.html)**: The Volt MX Iris API provides support for App Extensions in iOS apps.
    
*   **[App Group API](sharedappgroupcontainerapi.html)**: The App Group API contains functions that your app can use to share data on iOS.
*   **[Application API](application_api.html)**: During the lifecycle of an application, the mobile device usually triggers several events. The APIs in this chapter allow you to listen to these events and override them with application specific functionality. The chapter comprises all the APIs with the namespace **voltmx.application**.
*   **[Application Settings API](application_settings.html)**: The Application Settings API enables your apps to control application level settings so that the end users of an application can modify configurations and change the application behavior on iOS.
*   **[Background Agent API](backgroundagent_api.html)**: The Background Agent API enables your Windows app to execute code in the background.
    
*   **[Badge API](badge.html)**: Your apps use the Badge API to display icon badges for iOS apps.
*   **[Battery API](battery_api.html)**: The Battery API provides a standard interface that can be used across multiple hardware platforms for checking the current state of a device's battery.
*   **[Beacon API](beaconffi.html)**: The Beacon API enables your app to use iOS beacons.
*   **[Bookmark and Refresh API](bookmark_refresh_apis.html)**: The Bookmark and Refresh API enables developers to add context to the URL so that when the end user bookmarks it or shares it, the URL carries necessary parameters so that the application is rendered accordingly.
*   **[Camera API](camera.html)**: The Camera API helps your app manage the data captured by the camera widget.
*   **[Charm Setting API](charms.html)**: The Charm Setting API provides your app with the ability to access and use Windows charms.
*   **[Client Authentication API](client-authentication.html)**: The Client Authentication API provides your apps with the ability to authenticate clients that want to access an HTTPS servers.
    
*   **[Cryptography API](cryptography.html)**: _Cryptography_ is the process of securing the information. It can be defined as the conversion of data into scrambled text (concealing its readability and meaning) and deciphering it using a key. This data can be sent across safely over public and private networks. The chapter comprises all the APIs with the namespace **voltmx.crypto**.
*   **[ForceTouch API](forcetouch_api.html)**: The ForceTouch API provides functions to support 3D Touch features.
*   **[Functional Modules API](modules.html)**: The Functional Modules API enables your app to load functional modules into your app.
*   **[Geolocation API](geolocation_api_watchposition.html)**: The GeoLocation API defines a high-level interface to location information, such as latitude and longitude associated with the mobile device.
*   **[Gesture API](gestures.html)**: The Gesture API gives your app access to the underlying gesture reading capabilities of mobile devices.
*   **[Image API](imageapi.html)**: The Image API provides your app with image processing tools.
*   **[Input and Output API](inputoutput_api.html)**: Use the Input and Output API to access the device's underlying file system.
*   **[Internationalization API](internationalization.html)**: The i18n APIs enable you to design or develop an application in such a way that it supports various languages and regions. The namespace for internationalization is **voltmx.i18n**.
*   **[Local Authentication API](touch_id.html)**: The **voltmx.localAuthentication** namespace contains functions that enable your apps to do Touch ID biometric fingerprint identification.
*   **[Language API](language_apis.html)**: The Language API is implemented for exceptions that are not handled using try/catch blocks.
*   **[Live Tiles API](live_tiles.html)**: Live Tiles enable you to represent an application as a tile on the Start Screen of your device. You can launch the application using a Live Tile. This chapter comprises of all the APIs that enable you to add Live tiles. The namespace of all the APIs in this chapter is **voltmx.application**.
*   **[Map API](mapapi.html)**: The **voltmx.map** namespace provides constants and functions that are used in conjunction with the Map widget.
*   **[Math API](math_library.html)**: The Math API has functions that you can use to perform mathematical operations.
*   **[Media API](media_api.html)**: The Media API enables your app to play and record audio files.
*   **[Native Function API]({{ site.baseurl }}/docs/documentation/Iris/iris_nf_api_dev_guide/content/native_function_api_developers__guide.html)** : Volt MX Iris provides Native Function APIs that allow you to use native functions of iOS and Android platforms in Volt MX Iris. Access to the native functions is provided through a JavaScript API.
*   **[Network](network_apis.html)**: The Network APIs enable you to invoke service calls or cancel network calls. The chapter comprises all the APIs with the namespace **voltmx.net**.
*   **[Notifications API](notifications.html)**: The notification system allows users to keep informed about relevant and timely events in your app.
*   **[Offline Data Access API](data_store_library.html)**: This API allows you to store data onto the device data store persistently.
*   **[Operating System API](operating_system.html)**: This chapter comprises all the APIs with the namespace **voltmx.os**.
*   **[Passbook API](passbook.html)**: The Passbook API is used to keep things like airline boarding passes, movie tickets, and gift cards all in one place.
*   **[Phone API](phone.html)**: The functions in this API provide you the ability to access the default applications of the underlying platform on the mobile device and perform operations. The namespace for Phone API is **voltmx.phone**.
*   **[Runtime Permission API](runtime_permissions.html)**: With the function in this API, your app can obtain permissions at runtime.
*   **[Standard Volt MX API](generic_apis.html)**: The generic functions with the namespace **voltmx**.
*   **[String API](string.html)**: The string Library has APIs that you can use to manipulate strings. The namespace is **voltmx.string**.
*   **[Sync API](sync_apis.html)**: The Sync API enables your app to perform various operations on Volt MX Sync.
*   **[Theme API](themes.html)**: The Theme API lets you specify common skins for widgets in different states
*   **[Threading API](threading_apis.html)**: The Threading API helps JavaScript bindings work on main thread.
*   **[Timer API](timer.html)**: The Timer API functions provide you the ability to schedule the execution of a function block at regular intervals. The namespace for Timer API is **voltmx.timer**.
*   **[Toast API](toast_api.html)**: The Toast API implements toast messages in your Volt MX Iris apps..
*   **[Worker Thread API](worker_apis.html)**: The functions in the Worker Thread API provide your apps with a means to execute different tasks in multiple parallel contexts of execution in a concurrent manner.
*   **[File Sharing in Android with other Apps](sharefilesandroid.html)**: Android, file sharing from one app with another app happens in the form of content URI. So, you must make your app generate content URIs of files that you want to share with other apps.
