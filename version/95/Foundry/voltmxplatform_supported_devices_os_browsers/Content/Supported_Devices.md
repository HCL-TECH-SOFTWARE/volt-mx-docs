                             

Volt MX  Iris Suppported Devices, OSes, and Browsers Guide: iOS Platform

Supported Devices by Volt MX AppPlatform 9.5
=============================================

> **_Note:_** Volt MX 9.5 does not support the building of Windows native applications. Please disregard all references to Windows in this topic.

The following sections provide a list of devices supported by Volt MX Iris for native apps.

*   [iOS Platform](#ios-platform)
*   [Android Platform](#android-platform)
*   [Windows Platform](#windows-platform)

iOS Platform
------------

The following is a list of supported devices for the iOS platform along with the corresponding form factors:

  
| | Device/Family  |  |
| --- | --- | --- | 
|    <b>iPhone</b> | <b>iPod</b>  | <b>iPad</b>  | 
|iPhone 5S |iPod (6th Gen) |iPad Air 1 |
|iPhone 6 | | iPad Air 2|
|iPhone 6 Plus | |iPad pro 12.9 inch 1st gen |
|iPhone 6 S| | iPad pro 9.7 inch|
|iPhone 6 S Plus | |iPad pro 12.9 inch 2nd gen |
|iPhone SE | |iPad pro 10.5 inch |
|iPhone 7 | |iPad pro 12.9 inch |
|iPhone 7 Plus| |iPad pro 11 inch |
|iPhone 8 | |iPad 5th Gen |
|iPhone 8 Plus | |iPad 7th Gen |
|iPhone X | |iPad 8th Gen |
|iPhone XS | |iPad 9th Gen |
|iPhone XS Max | |iPad mini 2 |
|iPhone XR | |iPad mini 3 |
|iPhone 11 | |iPad mini 4 |
|iPhone 11 Pro | |iPad mini (6th generation) |
|iPhone 11 Pro Max | | |
|iPhone SE (2nd Gen) | | |
|iPhone 12 | | |
|iPhone 12 Mini| | |
|iPhone 12 Pro | | |
|iPhone 12 Pro Max | | |
|iPhone 13| | |
|iPhone 13 Mini | | |
|iPhone 13 Pro | | |
|iPhone 13 Pro Max| | |
|iPhone 14 | | |
|iPhone 14 Plus| | |
|iPhone 14 Pro | | |
|iPhone 14 Pro Max | | |
|iPhone SE(3rd Gen) | | |




### Volt MX Iris supported versions for iOS

  
| iOS Versions | Volt MX Iris Release Versions |
| --- | --- | 
|     | 9.x  | 
| --- | --- |
| iOS 9.x | ![](Resources/Images/yes_17x17.png) | 
| iOS 10.x | ![](Resources/Images/yes_17x17.png) |
| iOS 11.x | ![](Resources/Images/yes_17x17.png) | 
| iOS 12.x | ![](Resources/Images/yes_17x17.png) | 
| iOS 13.x | ![](Resources/Images/yes_17x17.png) | 
| iOS 14.x | ![](Resources/Images/yes_17x17.png)  | 
| iOS 15.x | ![](Resources/Images/yes_17x17.png) V9 Service Pack 2 |
| iOS 16.x | ![](Resources/Images/yes_17x17.png) V9 Service Pack 5   |


#### App submission with iOS 12

If you want to submit your app to the iOS App Store, you must provide the `NSPhotoLibraryUsageDescription` and `NSCameraUsageDescription` even if your app does not use the camera or the photo library.

> **_Note:_** To run iOS 12 applications, you must upgrade the Iris IDE plugins to create IPA and list simulators.

Android Platform
----------------

### Supported Devices

 

Google provides an [Android CDD](https://source.android.com/compatibility/cdd.md) (Compatibility Definition Document) though there is no validation process for Android device compatibility from Google. For more information please refer to: [https://source.android.com/source/faqs.md#compatibility](https://source.android.com/source/faqs.md#compatibility)

All devices, which are CDD compliant are supported. All those devices with default Play Store client software can be assumed as CDD compatible devices.

Volt MX  Iris supported versions for Android OS

| Android Versions |   | Volt MX Iris Release Versions |
| --- | --- | --- | 
|  |  |  9.x|   | 
| 4.0 - 4.0.2 | | ![](Resources/Images/no.png) | 
| 4.0.3 - 4.0.4 | | ![](Resources/Images/no.png) | 
| 4.1 | | ![](Resources/Images/no.png) | 
| 4.2 | | ![](Resources/Images/no.png) | 
| 4.3 |  | ![](Resources/Images/no.png) |
| 4.4 |  | ![](Resources/Images/no.png) |
| 5.0 |  | ![](Resources/Images/yes.png) |
| 6.0 | | ![](Resources/Images/yes.png) |
| 7.0 | | ![](Resources/Images/yes.png) |
| 8.0 | | ![](Resources/Images/yes.png) |
| 9.0 |  | ![](Resources/Images/yes.png) |
| 10.0 |  | ![](Resources/Images/yes.png)
| 11.0 | | ![](Resources/Images/yes.png) 
| 12.0 |  | ![](Resources/Images/yes.png) 
| 13.0 |  | ![](Resources/Images/yes.png) 
| 14.0 |  | ![](Resources/Images/yes.png) 


Windows Platform
----------------

### Supported Devices

All devices with the supported versions with the below system requirements

*   RAM 1GB and above

Volt MX  Iris supported versions for Windows

| Windows Phone Versions | Volt MX Iris Release Versions |   |
| --- | --- | --- |
| |  | 9.x |
|  |  |
| Windows Desktop | | ![](Resources/Images/no.png) |
| Windows 8.1 Tablets | | ![](Resources/Images/no.png) |
| Windows 10 Tablets | | ![](Resources/Images/yes.png) |
| Windows 10 Mobile |  | ![](Resources/Images/yes.png) |

Features for Windows Tablet/Desktop

Microsoft Windows 8.1 has three major versions. Volt MX Iris supports JavaScript as development languages to create native apps for all the versions of Windows.

The following Microsoft Windows 8.1 platforms are supported:

*   Microsoft Windows 8.1 on Intel chipset (desktop machines, Intel-based surface tablets).  
    *   To build native apps for these machines using Volt MX Iris, do it either from Windows 7 desktop or Windows 8.1 desktop OS.
*   Microsoft Windows 8.1 on ARM chipset (MS Surface RT, Ultrabooks)  
    *   To build native apps for these machines using Volt MX Iris, you must have Volt MX Iris on Windows 8.1 desktop OS.
*   Microsoft Windows 8.1 on x64 (MS Surface Pro)  
    

*   To build native apps for these machines using Volt MX Iris, you can do it either from Windows 7 desktop or Windows 8.1 desktop OS.

Volt MX  Iris supports the following channels for Windows Platform:

*   [Windows Desktop](Windows_Platforms_Support.md#windows-desktop)
*   [Windows 8.1 Tablet](Windows_Platforms_Support.md#windows-8-1-tablet)
*   [Windows 10 Tablet](Windows_Platforms_Support.md#windows-10-tablet)
*   [Windows 10 Mobile](Windows_Platforms_Support.md#windows-10-mobile)
