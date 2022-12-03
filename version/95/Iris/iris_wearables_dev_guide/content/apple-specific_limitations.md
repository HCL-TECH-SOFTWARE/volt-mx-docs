                           


Apple-Specific Limitations
==========================

This section describes limitations and issues that are specific to producing Wearables apps on the Apple Watch.

Old Glance Forms Reappearing in an App
--------------------------------------

If you have a glance form in your Watch app and you delete it, it is possible that the old glance form may reappear in your app. This happens when you completely remove the glance form from your app and do not replace it with a new glance form. In other words, your app used to have a glance form but it doesn't any more.

The cause of this is due to the way Apple's Xcode compiler handles intermediate files for each particular App ID. Xcode stores the intermediate files in a directory for each specific App ID and it does not always delete the intermediate files when you change your application. Therefore, the old glance form may persist in the folder containing all of the intermediate files for that App ID.

To fix this, use the following procedure.

1.  From the Xcode main menu, select **File** and then **Project Settings**.
2.  In the project settings, find the path to the folder for Derived Data.
3.  Open a Finder window and navigate to the Derived Data folder. Delete everything in the folder.
4.  Go back to Xcode and perform a clean build. The problem should be resolved.

Localized Text Appears in English
---------------------------------

In some locales, localized text is not used in your app. Rather, the English text appears in the user interface.

According to the Apple release notes for Xcode 7.0, this is a known issue on the Apple Watch for apps that contain regions. The problem only appears in a limited number of locales. But unfortunately, Apple has not published a list of affected locales.

If this occurs on your app, a way to work around it is for your app to load your localized strings from data files that you bundle with your app. Your app can then explicitly assign the localized strings to the appropriate properties on your forms.
