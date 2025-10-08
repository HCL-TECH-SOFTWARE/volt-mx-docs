                                 

You are here: Creating a SignInWithApple Using a Constructor: voltmx.ui.signInWithApple

SigninWithApple Widget
======================

The SigninWithApple widget enables application users to sign in to their apps and websites using their Apple ID. Rather than filling out forms, verifying email addresses, and creating new passwords on every app or website, users can sign in with their Apple login credentials to set up an account and use the app straight away. Developers can create the SigninWithApple widget within their app or website in Volt MX Iris.

You can create SignInWithApple widget only using the [voltmx.ui.signInWithApple](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#signInWithApple) API.

The SigninWithApple widget uses two-factor authentication. The two-factor authentication enhances security to an advanced level so that Apple cannot track the user behavior in the app or website.

When the SigninWithApple widget is used in an application, a SigninWithApple button appears on the login page or the startup screen of the application.

While creating a new app, Volt MX Irisrecommends you to go through the Apple developer center and create a new app identifier with the SigninWithApple capability feature.

Using the SigninWithApple widget, an application user can quickly sign in to an app in the following ways:

*   **Face ID**: When the user has a FaceID enabled device, the, SigninWithApple button captures the application user’s Face ID as a password to log in to the application.
*   **Touch ID**: If the user has a Touch ID enabled device, the user can log in to the application with their Touch ID.
*   **Passcode**: If the user device doesn’t have Face ID or Touch ID feature then the SignInWithApple widget enables the user to use passcode to login to the application.
*   **Password**: When Touch ID and Face ID are not available and passcode hasn’t set on your device, then your Apple ID acts as a password to login to your app.

> **_Note:_** You must have a paid Apple Developer account to create a SignInWithApple widget. You must also go through the guidelines for apps to be accepted to Appstore in Apple.  

Widgets are normally added to an application using Volt MX Iris through the user interface. However, the SigninWithApple widget can only be added using code. For more information on using widgets in Iris, see [Designing an Application](../../../Iris/iris_user_guide/Content/Part_II_CreatingAnApplication.md) in the [Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

### Scenarios where you can use SigninWithApple:

*   Sign in with Apple is required when any app uses a third-party sign-in such as sign in with Facebook or sign in with Google.

### Scenarios where the SigninWithApple is not required:

*   If your app exclusively uses your company’s account setup and sign-in systems.
*   Your app is an educational, business, or business app that allows the user to sign in with an established education or enterprise account.
*   The app uses a government or industry-sponsored citizen identification system or an electronic ID to authenticate users.
*   Your app is a client for a particular third-party service, and users are required to sign in to their mail, social media, or any third-party accounts directly to access their content.

Widget Details:

SignInWithApple can be implemented in the app using the [voltmx.ui.signInWithApple](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#signInWithApple) API.

The SignInWithApple widget capabilities can be broadly categorized into the following:

*   [Authorization Capabilities](#authorization-capabilities)
*   [Layout](#layout)

#### Authorization Capabilities

  
| Properties | Description |
| --- | --- |
| [authorizationButtonType](SigninWithApple_Properties.md) | Specifies the text displayed on the SigninWithApple widget. |
| [authorizationButtonStyle](SigninWithApple_Properties.md) | Specifies the background and font color of the SigninWithApple widget. |
| [authorizationButtonCornerRadius](SigninWithApple_Properties.md) | Specifies the border type of the widget. |

  
| Events | Description |
| --- | --- |
| [onSuccessCallback](SigninWithApple_Events.md#onSuccessCallback) | This occurs when there is a successful authentication of Apple ID. |
| [onFailureCallback](SigninWithApple_Events.md) | This occurs when there is an authentication failure. |

#### Layout

  
| Properties | Description |
| --- | --- |
| [bottom](Button_Properties.md#bottom) | Determines the bottom edge of the widget and is measured from the bottom bounds of the parent container. |
| [centerX](SigninWithApple_Properties.md#centerX_Property) | Determines the center of a widget measured from the left bounds of the parent container. |
| [centerY](SigninWithApple_Properties.md#centerY) | Determines the center of a widget measured from the top bounds of the parent container. |
| [height](SigninWithApple_Properties.md#height) | Determines the height of the widget and measured along the y-axis. |
| [left](SigninWithApple_Properties.md#left) | Determines the lower left corner edge of the widget and is measured from the left bounds of the parent container. |
| [maxHeight](SigninWithApple_Properties.md#maxHeigh) | Specifies the maximum height of the widget and is applicable only when the height property is not specified. |
| [maxWidth](SigninWithApple_Properties.md#maxWidth) | Specifies the maximum width of the widget and is applicable only when the width property is not specified. |
| [minHeight](SigninWithApple_Properties.md#minHeigh) | Specifies the minimum height of the widget and is applicable only when the height property is not specified. |
| [minWidth](SigninWithApple_Properties.md#minWidth) | Specifies the minimum width of the widget and is applicable only when the width property is not specified. |
| [top](SigninWithApple_Properties.md#top) | Determines the top edge of the widget and measured from the top bounds of the parent container. |
| [width](SigninWithApple_Properties.md#width) | Determines the width of the widget and is measured along the x-axis. |

SignInWithApple Widget Basics
-----------------------------

The SigninWithApple widget enables application users to sign in to their apps and websites using their Apple ID. Rather than filling out forms, verifying email addresses, and creating new passwords on every app or website, users can sign in with their Apple login credentials to set up an account and use the app straight away.

You can create SignInWithApple widget only using the [voltmx.ui.signInWithApple](../../../Iris/iris_api_dev_guide/content/voltmx.ui_functions.md#signInWithApple) API.

### Creating a SignInWithApple Using a Constructor: voltmx.ui.signInWithApple

```

var mysignInApple = new voltmx.ui.signInWithApple(signInWithAppleBasic, signInWithAppleLayout, signInWithApplePsp);
```

*   **signInWithAppleBasic** is an object with basic properties.
*   **signInWithAppleLayout** is an object with layout properties.
*   **signInWithApplePsp** is an object with platform specific properties.

> **_Note:_** The configuration properties should be passed only in the respective configuration objects otherwise they are ignored

Example

```
//Sample code for creating a SignInWithApple widget. 

var signInWithAppleBasic= {  
 "authorizationButtonType": voltmx.signinwithapple.BUTTON_TYPE_DEFAULT,  
 "authorizationButtonStyle":voltmx.signinwithapple.BUTTON_STYLE_BLACK,  
 "authorizationButtonCornerRadius" : 20.0,  
 "onSuccessCallback": callback1,  
 "onFailureCallback":callback2  
};  
var signInWithAppleLayout= {  
 "contentAlignment": constants.CONTENT_ALIGN_CENTER,  
 "displayText": true  
};  
var signInWithApplePsp= {};  
var signInWithApple = new voltmx.ui.SignInWithApple(signInWithAppleBasic,signInWithAppleLayout, signInWithApplePsp);  
frmSignIn.add(signInWithApple);
```

### Important Considerations

*   Sign-in will not work in the application until you use the name of the key to use in the Sign in with Apple enabled in your developer account.

*   You need to create an Auth Key to enable Sign in with Apple in your developer account.

*   To access users who use a private email relay service offered by Apple, you must register domains and email addresses that will be used for communication.

