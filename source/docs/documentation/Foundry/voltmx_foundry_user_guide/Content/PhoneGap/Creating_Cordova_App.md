---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                             

User Guide: [SDKs](../Foundry_SDKs.html) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.html) > Creating a Cordova App

Creating a Cordova App
======================

To create an application and build it using the Cordova command-line interface (CLI), follow these steps:

1.  Run the following command in the command prompt:  
    {% highlight voltMx %} npm install –g cordova
    {% endhighlight %}
2.  Now run the following command:  
    {% highlight voltMx %} Cordova create AndroidPhoneGapApp com.voltmx MyApp  
    
    {% endhighlight %}
    
    In this command, `AndroidPhoneGapApp` is the name of the project folder, `com.voltmx` is the namespace, and `MyApp` is the name of the project or application. The order of parameters is fixed.
    
    > **_Note:_** If you do not specify **com.voltmx** and  **MyApp** parameters, by default the namespace will as "com.hello" and creation of the project will require more time.  
      
    The default app name is HelloCordova after the app gets installed.
    

1.  Run the following command to navigate to the project folder.  
    {% highlight voltMx %} cd AndroidPhoneGapApp
    {% endhighlight %}
2.  Run the following command to add the Android platform.  
    {% highlight voltMx %} cordova platform add android
    {% endhighlight %}
    
    (You can add other platforms such as iOS and BlackBerry.)
    
3.  Run the following command to install the plug-in device - such as UUID. This step is mandatory.  
    {% highlight voltMx %} cordova plugin add cordova-plugin-device
    {% endhighlight %}
4.  Run the following command to install the plug-in, **InAppBrowser**. For example, if you use Oauth/SAML provider for authentication, this plug-in is required. This step is mandatory.  
    {% highlight voltMx %} cordova plugin add cordova-plugin-inappbrowser
    {% endhighlight %}
5.  Run the following command to get the console logs. This step is optional.  
    {% highlight voltMx %} cordova plugin add cordova-plugin-console
    {% endhighlight %}
    
    > **_Note:_** This plugin has been deprecated. For more information, click [here](https://www.npmjs.com/package/cordova-plugin-console).
    
6.  Copy the `com.voltmx.sdk` from `voltmx-phonegap-sdk-sdk`, and paste `com.voltmx.sdk` into the app root folder.
7.  Run the following command to add Volt MX Foundry plug-in into your applications:{% highlight voltMx %} cordova plugin add com.voltmx.sdk  
    
    {% endhighlight %}
8.  Add the buttons or required widgets in the `index.html` file, and map them to the required functions by including the respective `JS Scripts`. Use Script tag, and include the required  `.js`  files.
9.  Run the following command to deploy your app:  
    

*   on Android platform:  
    {% highlight voltMx %} cordova emulate android  
     or  
    cordova run android
    {% endhighlight %}
*   on iOS platform:  
    {% highlight voltMx %} cordova build ios
    {% endhighlight %}
    
    After running this command, the system generates the xcode project under the `platform/ios` folder. Open the xcode and run the ios phonegap app.
