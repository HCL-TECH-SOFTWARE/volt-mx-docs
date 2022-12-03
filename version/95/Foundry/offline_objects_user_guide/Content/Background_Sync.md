

Background Sync
===============

New versions of Android and iOS started imposing restrictions on what an application can do while in the background. This is done to prevent background apps from draining key resources such as battery power and CPU. These restrictions are meant to help improving user experience by making key resources available for applications in the foreground.

Android
-------

The battery optimization feature is available from Oreo and later versions of Android devices. You can control this setting from **Settings** > **Battery** > **Battery** **Optimization** > **Select the app to optimize** > **Optimize**. This setting will have an impact on background apps.

Refer to [Power management](https://developer.android.com/about/versions/pie/power) to understand the restrictions put on the applications under various modes starting from **Android Pie**.

Following are the observations on the impact of battery optimization feature on background apps on **Oreo** and **higher** versions:

*   When the battery optimization **disabled**: The frequency at which the network call is made is reduced when the screen is turned off or the app is running in the background. That is, if the frequency of calls made is six to seven calls per minute in the foreground, the frequency may drop to two calls per minute while in the background mode. This means the background sync will take a longer time if the app moves to the background or in the sleep mode when compared to the app in the foreground.
*   When the battery optimization **enabled**: The app works fine while in the foreground without any issues. However, when it moves to the background or screen is turned off, the network becomes unreachable about 10 to 15 minutes later, leading to sync failure. This is expected as the battery optimization feature in Android ensures that the network and the location services to the app are terminated after a certain time to enable a better battery life. If your application requires full background sync capability, it is recommended to turn off the battery optimization.

Observations about devices on **Oreo** and lower versions.

*   Application sync works fine both in background and foreground modes.

iOS
---

Similar to Android, iOS imposes [background execution](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.md) limits starting from **iOS7**. It removes the applications from memory thus, no work is done by that app such as background sync. When the app comes to the foreground again, it resumes from where it had left including the data synchronization.

Applications in B2E space may need the apps to run while in the background and continue to be able to synchronize data. To achieve this, follow the steps mentioned in the [link](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083492) about a custom solution to work around this issue.
