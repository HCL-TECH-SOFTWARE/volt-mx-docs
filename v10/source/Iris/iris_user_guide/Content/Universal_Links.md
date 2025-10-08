                          

You are here: Appendix G: Universal Links iOS

Appendix: Universal Links
=========================

Volt MX  Studio supports the universal links feature provided by Apple. The universal links feature enables you to set connectivity between your website and mobile app. When an end-user taps a link to your website from any iOS device, the framework directly opens the app (connected with your website) installed on the iOS device. If the app relative to your website is not installed on the iOS device, the URL is opened on the Safari browser. The universal links feature is supported from iOS 9 onwards.

To use the universal links feature, you must configure the following at the [app server side](#app-server-side-configuration), and also in the [mobile app](#mobile-app-level-configuration).

App server side configuration
-----------------------------

1.  Create a file with file name, `apple-app-site-association`. The file should contain JSON data about URLs that your app should handle.
2.  Upload the file to the root directory or to the `.well-known` subdirectory at your HTTPS web server. Here is a sample apple-app-site-association file.

```
{
"applinks": {
"apps": [],
"details": [
{
"appID": "9JA89QQLNQ.com.apple.wwdc",
"paths": [ "/wwdc/news/", "/videos/wwdc/2015/*"]
},
{
"appID": "ABCD1234.com.apple.wwdc",
"paths": [ "*" ]
}
]
}
}
```

In the sample, the applinks element defines the apps that are associated with your website. The value of the apps key is an empty array. The `details` key defines an array of dictionaries to link appIDs and URL paths. You can define one dictionary per app that your website supports.

The `appID` is the combination of teamID followed by app's bundle ID (for example, if appID is 9JA89QQLNQ.com.apple.wwdc, where 9JA89QQLNQ is the teamID and com.apple.wwdc is the bundle ID). The `paths` key is an array of strings that contains parts of the website that should be associated with the app, and also the parts that should not be supported by the app. To specify the parts of the website that are not to be supported by the app, prefix the string with "NOT " (including a space after 'T') as shown below.

```
"paths": [ "/wwdc/news/", "**NOT** /videos/wwdc/2015/*"]
```

> **_Note:_** The **apps** key in the apple-app-site-association file is mandatory and the value should be an empty array.

Mobile app level configuration
------------------------------

1.  In Volt MX Studio, add domains that your app supports in the app **Application Properties** dialog (**Application Properties**\>**Native**\>**iPhone/iPad**). For more information, see [iPhone/iPad](Native_App_Properties.md#iPhone/iPad) tab.

When iOS launches the app, the App Service callback is invoked by the framework and shows the form returned by the callback. If no form is specified in the callback, the home form of the app is shown. The App Service receives an object as an argument, which gives the information about the URL that triggers the universal link.

Here is a sample for handling universal links in App Service.

```
function callback_UniversalLinks(params) {
	if (params.launchmode == 4) {
		voltmx.print("Universal links CallBack : launchMode : " + params.launchmode + "Launch Params :         " + JSON.stringify(params.launchparams));
		return frmCallBack;
	}
}
```
