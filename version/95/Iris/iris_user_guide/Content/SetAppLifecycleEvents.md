                          


Set App Lifecycle Events
========================

The arc of activity from the time an app is launched and enters into a device's memory to when it is exited and released from memory is referred to as the app's lifecycle. Particular phases characterize the lifecycle of an app, such as the following (which are explained in greater detail later): Pre-initialization, Post-initialization, App Service, Deeplink, On View State Change, and On Search.

For any of these phases, you can design your app to launch action sequences, as your app requires. App lifecycle action sequences are supported for all four available app channels, namely Mobile, Tablet, Desktop, and Watch.

To set app lifecycle events, do the following:

1.  In Volt MX Iris, open the project for which you want to set action sequences for the app's lifecycle.
2.  From the **Project** tab of the **Project Explorer**, click either **Mobile**, **Tablet**, **Desktop**, or **Watch**. The Iris Canvas displays text indicating that you can define app life cycle events from the Properties Editor.
3.  On the **App Events** tab of the Properties Editor, click the **Edit** button of the app lifecycle phase for which you want to create action sequences. Doing so opens the Action Editor. All four available app channels consist of the following app lifecycle phases:

*   **Pre Appinit.** Pre-initialization, which refers to that part of the app lifecycle after the app is launched but prior to it loading.
*   **Post Appinit.** Post-initialization, which refers to that part of the app lifecycle after the app has loaded, but prior to the displaying of data.
*   **App Service.** Refers to the launching of background services that the app relies upon.
*   **Deeplink.** Refers to creating services links in your app that enable third-party native and browser applications to connect to your app, providing a unified and seamless experience.

Additionally, the Tablet channel includes the following two app lifecycle phases:

*   **On View State Change.** Refers to any time the state of the view changes between portrait and landscape, or between normal view and full screen.
*   **On Search.** Refers to any time a search is initiated.

7.  Using the Action Editor, create the action sequences you want. For more information, see [Add Actions](working_with_Action_Editor.md).
