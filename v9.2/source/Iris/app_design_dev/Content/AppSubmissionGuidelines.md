                          

Volt MX  Application Design and Development Guidelines: App Submission Guidelines

App Submission Guidelines
=========================

This section explains a few guidelines to be followed while submitting an application.

iOS 11
------

**The following are the guidelines for submitting an iOS application with XCode 9**:

1.  It is mandatory to provide 'Asset Catalog' resource for iOS applications
2.  Go to Target -> General -> App Icons and Launch Images -> Click on User Asset Catalog -> Migrate
3.  Ensure that all the resolutions of the App Icons are provided in the Asset catalog
4.  In the **info.plist** file, add `CFBundleIconName` with values set as AppIcon that is created in the assets resource.

iOS 10
------

In Xcode 8, Apple introduced a new privacy feature to access hardware resources (like camera, gallery, and contacts). To avoid compliance issues, you must ensure that the required settings are included while building iOS applications using Xcode 8.

According to iOS 10 mandate, It is necessary to add descriptions for the features that are related to user privacy. You need to add descriptions for the features (that are provided in the below procedure) even if the app does not use the features. Volt MX Iris Enterprise integrates the required settings as a part of iOS applications if you follow the steps provided below.

Before building an iOS application, do the following:

1.  Create a JSON file.
2.  Add the below strings to the JSON file.
```
{  
    "NSCalendarsUsageDescription" : "<description>",  
    "NSCameraUsageDescription" : "<description>",  
    "NSPhotoLibraryUsageDescription" : "<description>"  
    }
```
    
    > **_Important:_** If you use other framework, you need to update the JSON file with appropriate keys. For more information, refer to [Information Property List Key Reference](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.md).
    
3.  Save the JSON file as **infoplist\_configuration.json**.
4.  Add the **infoplist\_configuration.json** file to `/resources/mobile/native/iphone` in your project.

Now, Volt MX Iris Enterprise ensures that the required settings are packaged and added to the **info.plist** file in your Xcode project.

If the iOS application uses protected mode, ensure that you download and use the iOS 10 compatible Finalizer Utility for Xcode 8.
