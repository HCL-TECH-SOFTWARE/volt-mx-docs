

Configuring iOS App Clips
=======================

An app clip is a lightweight part of an app that is discoverable at the moment it is needed, and lets users perform everyday tasks swiftly, without downloading and installing the app. App clips are a great way for users to quickly access and experience what your app has to offer.

Users can discover and launch app clips in a variety of situations and contexts. Whether they're ordering take-out from a restaurant, renting a scooter, or setting up a new connected appliance for the first time, users will be able to start and finish an experience from an app in seconds.

App clips provide an in-the-moment experience and focus on offering the quickest possible solution to an everyday task. To make it easier for users to experience the complete app, you can provide an option to download the app at an appropriate time during the app clip experience. You can even persist information provided by the user and seamlessly transition it into the app.  

App clips are a small part of an app, and are developed in the same Xcode project as the app by using the iOS SDK. When the app clip is ready for review, you can add and manage it as part of the app present in App Store Connect.

> **Note:** An app can only have one app clip, and must support all the functionality of the app clip. In addition, app clips must be small (less than 10MB in size) so that they launch instantly. Try to keep the size of the app clip well below this limit, if possible.

Integrate App Clips in a Project
--------------------------------

To integrate app clips in a project, follow these steps:

1.  In Iris, create a new project to develop the app clip.
2.  Create the app clip, and generate the KAR file.
3.  During the perl extraction in the terminal, pass the KAR file of the app clip with the **\-appClip** flag along with the KAR file of the parent app as follows:  

    ```
	perl extract.pl <path to parent KAR> --appClip <path to app clip KAR>
	```
	
4.  After the perl extraction is complete, open the project in **Xcode**.  
    You will see three new entries, **KAppClip**, **KAppClipJS** and **KAppClipNFILoader**, in the Targets section.

<!--![](Resources/Images/AppClipKAR.png)-->

App clips inherit the App Icon, Version Number, and Build Number from the parent app.

Follow these steps to run the app clip:

1.  In the Xcode project, select the **KAppClip** Scheme.
2.  Select a destination (either Simulator or Device).
3.  Click **Run**.

<!--![](Resources/Images/AppClipRun.png)-->

Limitations for App Clips
-------------------------

### Iris Limitations

*   Integration of app clips with Cordova Plugins is not supported.
*   Integration of app clips with the React Native feature is not supported.
*   Iris projects that use NFI version 1.0 cannot run as app clips.

### iOS Native Limitations

*   App clips are not included in iOS back ups.
*   Local Storage will be deleted after a period of inactivity.
*   Universal links, document types and URL schemes are not available.
*   App clips do not support **KeyChain Sharing**.
*   App clips cannot access the following data:
    *   Apple Music and Media
    *   Data from apps like Contacts, Files, Health, Messages, Reminders, and Photos
    *   Motion and fitness data
*   The following frameworks provide limited to no functionality at runtime:
    
    *   Assets Library
    *   Background Tasks
    *   CallKit
    *   CareKit
    *   CloudKit
    *   Contacts
    *   Contacts UI
    *   Core Motion
    *   File Provider
    *   File Provider UI
    *   HealthKit
    *   HomeKit
    *   Media Player
    *   Messages
    *   Message UI
    *   PhotoKit
    *   ResearchKit
    *   SensorKit
    *   Speech
    
    Using any of these frameworks in an app clip does not result in compile-time errors, but the return values of the APIs display unavailability, empty data, or error codes at runtime. For example, the **isHealthDataAvailable() API** of the **HealthKit** returns the value **false** when you invoke it from an app clip.
    
*   To connect to an authentication provider, app clips may initialize an **ASWebAuthenticationSession** by using the **init(url:callbackURLScheme:completionHandler:)** with a **callbackURLScheme**.
*   **Preserve User Privacy**
    
    App clips come with limitations that help protect user privacy and prevent tracking of user across apps and app clips. App clips have the following limitations to preserve user privacy:
    
    *   The functionality provided by the **SKAdNetwork** is not available.
    *   App clips cannot request authorization to track the user with **App Tracking Transparency**.
    *   Both the **name** and **identifierForVendor** parameters of a device return an empty string.
    *   App clips cannot request continuous access to device location. However, they may request for the location when the app is in use (When In Use authorization), that automatically resets at 4:00 a.m on the next day.
    *   App clips cannot request to read passes stored in the Wallet app by using the **Pass Type IDs Entitlement**. However, if the app clip contains functionality to add a pass to the Wallet app, you can check if this pass is already present.
    *   An app clip cannot share data with another app other than its corresponding full app.

*   **Reserve Certain Functionality for the Full App**
    
    As app clips provide an in-the-moment experience as a solution to an everyday task, ensure that you reserve some functionality for the full app. Reserve the following functionality for the full app:
    
    *   Advanced networking features such as **Bonjour**.
    *   Low-level networking APIs such as **CFSocket**, or **POSIX** functions.  
        Instead of these APIs, you can use the **URLSession** or the **Network** framework.
    *   Application extensions
    *   Settings and Customization.  
        For example, creation of a settings bundle.
    *   Data handoff and document opening.
    *   In-app purchases.
    *   Low-level Unix functionality.  
        For example, **BSD notifications**.
    *   Multiple scenes on iPad.
    *   On-demand resources.
    *   Promotion of other apps.
    *   Registration of **custom URL schemes**.
    *   Requests for user reviews of the full app by using the **requestReview(in:) method** of StoreKit.
    *   Search for paired Bluetooth devices
	
*   To help protect user privacy and preserve resources , app clips cannot perform background activities. For example, app clips cannot make use of the following:
    
    *   Background networking with **URLSession**.
    *   Enabling the **Background Modes** capability for an app.
    *   Maintaining Bluetooth connections while the app clip is not in use.
	
*   **Limiting Notifications**

    App clips provide an option to schedule and receive notifications for up to 8 hours after launch, enough time to follow up and complete most common tasks. Ensure that you follows these guidelines while providing the notifications capability for an app clip:
    
    *   **Use notifications to help users complete a task**: The notifications of an app clip must directly relate to the task that the app clip helps to accomplish. For example, an app clip that allows users to order food could send notifications related to a scheduled delivery.
    *   **Keep notifications focused**: App clips do not have an ongoing relationship with the user, making it especially important to only send relevant notifications. Do not send purely promotional notifications. Only use notifications in response to an explicit user action. If a user completes their task without leaving the app clip, notifications might not be needed at all.
    *   **Request permission to use notifications for an extended period of time only if it is really needed**: If the functionality of the app clip runs for more than a day, you must explicitly request the user’s permission to schedule and receive notifications. For example, an app clip of a car rental company can ask for permission to send a notification that reminds users that they need to return a rented car soon.

For more information on the Native iOS limitations for app clips, refer iOS Documentation.
