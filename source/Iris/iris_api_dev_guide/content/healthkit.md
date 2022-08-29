                            

HealthKit (pre-packaged API)
============================

HealhKit is a framework provided Apple Inc., that stores data on your device in a central location called Health app. Health app is pre built in iOS 8 and above devices. The app has different health parameters to measure your health like sleep analysis, body mass index, etc. The app can store two types of data, characteristic and non-characteristic. A characteristic data is a type of data that is not represented by a sample such as Sex, Birth Date, and Blood Type. HealthKit treats this data differently than the rest of the data it stores as you do not have multiple copies of it. Non-characteristic data are represented by a sample such as Blood Glucose, Body Temperature, Blood Pressure etc., are stored in your Health app. You can decide which information to be shared with your health and fitness apps.

This API is pre-bundled with Iris Classic and does not need to be explicitly imported. Enable this API from Project properties before using.

> **_Important:_** This API is available on iOS platform only.

Some benefits of HealthKit are:

*   Users can monitor their own blood pressure and heart beat.
*   Doctors can collate data and monitor the patient’s condition remotely.
*   Users can track the burnt Calories, Body Mass Index (BMI), Body Temperature and so on.

For more information on HealthKit, [click here](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Framework/index.md#//apple_ref/doc/uid/TP40014707).

APIs
----

Click [here](http://docs.voltmx.com/7_0_PDFs/iosdocs/index.html#!/api/HKObject), to view HealthKit APIs.

Sample Application
------------------

Click [here](https://github.com/voltmx/VoltMXJSBindings_HealthKit) to download sample health application.

![](resources/prettify/onload.png)
