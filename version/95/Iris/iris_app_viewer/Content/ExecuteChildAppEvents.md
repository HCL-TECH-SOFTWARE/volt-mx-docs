
# Execute App Life cycle Events

From Volt MX Iris version V9 SP3 onwards, the Volt MX App supports the execution of app Life cycle and form events. This enhancement helps you perform various Life cycle events of your app. Executing app Life cycle events within the Volt MX App assists in testing your application for any bugs.

## App Life cycle Events

The arc of activity from the time an app is launched and enters a device's memory to when it is exited and released from memory is referred to as the app's Life cycle. Particular phases characterize the Life cycle of an app, such as the following : Pre-initialization, Post-initialization, App Service, and Deeplink.

- **Pre Appinit.** Pre-initialization, which refers to that part of the app Life cycle after the app is launched but prior to its loading.
- **Post Appinit.** Post-initialization, which refers to that part of the app Life cycle after the app has loaded, but prior to the displaying of data.
- **App Service.** Refers to the launching of background services that the app relies upon.
- **Deeplink.** Refers to creating service links in your app that enable third-party native and browser applications to connect to your app. Deeplinking provides a unified and seamless experience and it can be achieved through App Service event.

You can exit the Volt MX App from your application using the voltmx.application.exit() API. When you invoke the voltmx.application.exit() API in your application, it terminates the application along with the Volt MX App. For more information on the voltmx.application.exit() API, refer the [API Guide](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#voltmxapp).

The Volt MX App helps in performing all the mentioned app Life cycle events on your app. Open your application with the Volt MX App (refer to [Preview an App on a Device](FunctionalPreviewStarter.md)), and execute the app Life cycle events existing in your application.

## Form Life cycle Events

The arc of activity from the time a form is invoked, and the user performs certain actions on it, to when it is exited is referred to as the form's Life cycle. A form can perform many events. The Volt MX App supports the execution of most of these events.

This section provides information on the form events supported by the Volt MX App in:

- [Reference Architecture Projects](#support-for-form-events-in-a-volt-mx-reference-architecture-project)
- [Free Form Projects](#support-for-form-events-in-a-free-form-project)

### Support for Form Events in a Volt MX Reference Architecture Project

If the project type of your app is Reference Architecture, you can view certain form events on the Volt MX App. The following table elaborates on the form events that are supported by each channel of the Volt MX App.

In this table,

- Yes - This event is supported for that channel.
- No - This event is not supported for that channel.
- N/A - This event is not applicable for that channel.

| Events                | iPhone | iPad | Android Phone | Android Tablet |
| --------------------- | ------ | ---- | ------------- | -------------- |
| doLayout              | Yes    | Yes  | Yes           | Yes            |
| keyboardDidHide       | Yes    | Yes  | N/A           | N/A            |
| keyboardDidShow       | Yes    | Yes  | N/A           | N/A            |
| keyboardWillHide      | Yes    | Yes  | N/A           | N/A            |
| keyboardWillShow      | Yes    | Yes  | N/A           | N/A            |
| init                  | Yes    | Yes  | Yes           | Yes            |
| onActionBarBack       | N/A    | N/A  | No            | No             |
| onDecelerationStarted | Yes    | Yes  | N/A           | N/A            |
| onDestroy             | Yes    | Yes  | Yes           | Yes            |
| onDeviceBack          | N/A    | N/A  | Yes           | Yes            |
| onDeviceMenu          | N/A    | N/A  | Yes           | Yes            |
| onHide                | Yes    | Yes  | Yes           | Yes            |
| onLoadJS              | N/A    | N/A  | N/A           | N/A            |
| onLocaleChanged       | No     | No   | No            | No             |
| onOrientationChange   | Yes    | Yes  | Yes           | Yes            |
| onScrollEnd           | Yes    | Yes  | Yes           | Yes            |
| onScrolling           | Yes    | Yes  | Yes           | Yes            |
| onScrollStart         | Yes    | Yes  | Yes           | Yes            |
| onScrollTouchReleased | Yes    | Yes  | Yes           | Yes            |
| onSizeChanged         | N/A    | N/A  | N/A           | N/A            |
| onTouchStart          | Yes    | Yes  | Yes           | Yes            |
| onTouchEnd            | Yes    | Yes  | Yes           | Yes            |
| onTouchMove           | Yes    | Yes  | Yes           | Yes            |
| onZoomStart           | Yes    | Yes  | N/A           | N/A            |
| onZoomEnd             | Yes    | Yes  | N/A           | N/A            |
| onZooming             | No     | No   | N/A           | N/A            |
| widgetToZoom          | No     | No   | N/A           | N/A            |
| preShow               | Yes    | Yes  | Yes           | Yes            |
| postShow              | Yes    | Yes  | Yes           | Yes            |
| unLoadJS              | N/A    | N/A  | N/A           | N/A            |
| onDrawerSlide         | N/A    | N/A  | No            | No             |
| onDrawerOpened        | N/A    | N/A  | No            | No             |
| onDrawerClosed        | N/A    | N/A  | No            | No             |
| onDrawerStateChanged  | N/A    | N/A  | No            | No             |
| addWidgets            | Yes    | Yes  | Yes           | Yes            |

### Support for Form Events in a Free Form Project

If the project type of your app is Free Form JavaScript, you can view certain form events on the Volt MX App. The following table elaborates on the form events that are supported by each channel of the Volt MX App.

In this table,

- Yes - This event is supported for that channel.
- No - This event is not supported for that channel.
- N/A - This event is not applicable for that channel.

| Events                | iPhone  | iPad    | Android Phone | Android Tablet |
| --------------------- | ------- | ------- | ------------- | -------------- |
| doLayout              | Yes     | Yes     | Yes           | Yes            |
| keyboardDidHide       | Yes     | Yes     | **N/A**       | **N/A**        |
| keyboardDidShow       | Yes     | Yes     | **N/A**       | **N/A**        |
| keyboardWillHide      | Yes     | Yes     | **N/A**       | **N/A**        |
| keyboardWillShow      | Yes     | Yes     | **N/A**       | **N/A**        |
| init                  | Yes     | Yes     | Yes           | Yes            |
| onActionBarBack       | **N/A** | **N/A** | No            | No             |
| onDecelerationStarted | Yes     | Yes     | **N/A**       | **N/A**        |
| onDestroy             | Yes     | Yes     | Yes           | Yes            |
| onDeviceBack          | **N/A** | **N/A** | Yes           | Yes            |
| onDeviceMenu          | **N/A** | **N/A** | Yes           | Yes            |
| onHide                | Yes     | Yes     | Yes           | Yes            |
| onLoadJS              | **N/A** | N/A     | **N/A**       | **N/A**        |
| onLocaleChanged       | No      | No      | No            | No             |
| onOrientationChange   | Yes     | Yes     | Yes           | Yes            |
| onScrollEnd           | Yes     | Yes     | Yes           | Yes            |
| onScrolling           | Yes     | Yes     | Yes           | Yes            |
| onScrollStart         | Yes     | Yes     | Yes           | Yes            |
| onScrollTouchReleased | Yes     | Yes     | Yes           | Yes            |
| onSizeChanged         | N/A     | N/A     | N/A           | N/A            |
| onTouchStart          | Yes     | Yes     | Yes           | Yes            |
| onTouchEnd            | Yes     | Yes     | Yes           | Yes            |
| onTouchMove           | Yes     | Yes     | Yes           | Yes            |
| onZoomStart           | Yes     | Yes     | N/A           | N/A            |
| onZoomEnd             | Yes     | Yes     | N/A           | N/A            |
| onZooming             | No      | No      | N/A           | N/A            |
| widgetToZoom          | Yes     | Yes     | N/A           | N/A            |
| preShow               | Yes     | Yes     | Yes           | Yes            |
| postShow              | Yes     | Yes     | Yes           | Yes            |
| unLoadJS              | N/A     | N/A     | N/A           | N/A            |
| onDrawerSlide         | N/A     | N/A     | Yes           | Yes            |
| onDrawerOpened        | N/A     | N/A     | Yes           | Yes            |
| onDrawerClosed        | N/A     | N/A     | Yes           | Yes            |
| onDrawerStateChanged  | N/A     | N/A     | Yes           | Yes            |
| addWidgets            | Yes     | Yes     | Yes           | Yes            |
