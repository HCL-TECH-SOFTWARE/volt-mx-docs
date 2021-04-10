---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

You are here: Passbook API

Passbook API
============

Use a passbook to store items like boarding passes, movie tickets, and gift cards. The Passbook API lets you scan your iPhone or iPod touch to check-in for a flight, get into a movie, redeem a coupon, and more.

> **_Important:_** Ensure that you have the [iOS Passbook FF](klpassbook.zip)I imported into your project before you use VoltMX's Passbook API. The Passbook FFI is mandatory for the steps in this topic to work.

The Passbook API contains the following objects and related methods:

[PassLibrary Object](passlibrary.html)

  
| Method | Description |
| --- | --- |
| [addPassWithCompletionCallback](passlibrary.html#addpasswithcompletioncallback) | Presents UI to add pass. |
| [addPassesWithCompletionCallback](passlibrary.html#addpasseswithcompletioncallback) | Presents UI to add multiple passes. |
| [containsPass](passlibrary.html#containspass) | Returns whether the user’s pass library contains a pass. |
| [getPassWithTypeIdentifierAndSerialNumber](passlibrary.html#getpasswithtypeidentifierandserialnumber) | The proximity value gives a general sense of the relative distance to the beacon. |
| [getPasses](passlibrary.html#getpasses) | Returns the passes in the user’s pass library. |
| [removePass](passlibrary.html#removepass) | Removes the pass from the user’s pass library. |
| [replacePassWithPass](passlibrary.html#replacepasswithpass) | Replaces a pass in the user’s pass library with the given pass. |

 

You can add passes to a pass library using the [addPassWithCompletionCallback](passlibrary.html#addpasswithcompletioncallback) or [addPassesWithCompletionCallback](passlibrary.html#addpasseswithcompletioncallback) functions. You can retrieve the available passes using the [getPasses](passlibrary.html#getpasses) or [getPassWithTypeIdentifierAndSerialNumber](passlibrary.html#getpasswithtypeidentifierandserialnumber) functions. Use the [replacePassWithPass](passlibrary.html#replacepasswithpass) function to replace a pass with another pass, and the [removePass](passlibrary.html#removepass) function to remove a pass.

[Pass Object](pass.html)

| Method | Description |
| --- | --- |
| [getAuthenticationToken](pass.html#getauthenticationtoken) | The token used to authenticate with the web service. |
| [getLocalizedDescription](pass.html#getlocalizeddescription) | The localized description of the pass’s kind. |
| [getLocalizedName](pass.html#getlocalizedname) | Use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view. |
| [getLocalizedValueForKeyForDeviceLocale](pass.html#getlocalizedvalueforkeyfordevicelocale) | Returns the localized value for specified field of the pass. |
| [getOrganizationName](pass.html#getorganizationname) | The name of the organization that created the pass. |
| [getPassTypeIdentifier](pass.html#getpasstypeidentifier) | The pass’s type identifier. |
| [getPassURL](pass.html#getpassurl) | The URL that opens the pass in the Passbook app. |
| [getSerialNumber](pass.html#getserialnumber) | A value that uniquely identifies the pass. |
| [getUserInfo](pass.html#getuserinfo) | Developer-specific custom data. |

 

[AddPassesViewController Object](com.voltmx_objects_addpassesviewcontroller_methods.html)

| Method | Description |
| --- | --- |
| [dismissAnimated](com.voltmx_objects_addpassesviewcontroller_methods.html#getAccur) | Used to dismiss the view of add passes view controller. |
| [getLocalizedDescription](com.voltmx_objects_addpassesviewcontroller_methods.html#getMajor) | The localized description of the pass’s kind. |
| [getLocalizedName](com.voltmx_objects_addpassesviewcontroller_methods.html#getLocal) | Use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view |
| [getLocalizedValueForKeyForDeviceLocale](com.voltmx_objects_addpassesviewcontroller_methods.html#getMinor) | Returns the localized value for specified field of the pass. |
| [getOrganizationName](com.voltmx_objects_addpassesviewcontroller_methods.html#getProxi) | The name of the organization that created the pass. |
| [getPassTypeIdentifier](com.voltmx_objects_addpassesviewcontroller_methods.html#getProxi2) | The pass’s type identifier. |
| [getPassURL](com.voltmx_objects_addpassesviewcontroller_methods.html#getPassURL) | The URL that opens the pass in the Passbook app. |
| [getSerialNumber](com.voltmx_objects_addpassesviewcontroller_methods.html#replaceP) | A value that uniquely identifies the pass. |
| [getUserInfo](com.voltmx_objects_addpassesviewcontroller_methods.html#getUserI) | Developer-specific custom data. |

You can retrieve the authentication token for a pass using the [getAuthenticationToken](pass.html#getauthenticationtoken) function. You can retrieve localized information about the pass using the [getLocalizedDescription](pass.html#getlocalizeddescription), [getLocalizedName](pass.html#getlocalizedname), or [getLocalizedValueForKeyForDeviceLocale](pass.html#getlocalizedvalueforkeyfordevicelocale) functions. Using the [getOrganizationName](pass.html#getorganizationname) function, you can retrieve the name of the organization that created the pass. You can retrieve information about the pass using [getPassTypeIdentifier](pass.html#getpasstypeidentifier), [getPassURL](pass.html#getpassurl), or [getSerialNumber](pass.html#getserialnumber) functions, and retrieve information about the user using the [getUserInfo](pass.html#getuserinfo) function. You can dismiss the add passes view using the [dismissAnimated](com.voltmx_objects_addpassesviewcontroller_methods.html#getAccur) function.

Here is an example for creating a **isPassLibraryAvailable** with callbacks:

var pass1 = new com.voltmx.isPassLibraryAvailable();

Input Parameters

None

Return Values

Boolean - True if available, false if not available.

Platform Availability

Available only on iOS.

Interacting with Passes
-----------------------

The VoltMXPassLibrary helps you interact with the Passes in iOS devices. All the Passes are contained within a PassLibrary.

The [PassLibrary](passlibrary.html) object represents the library of passes, and a [Pass](pass.html) object represents an individual pass.

### Determine the Availability of a Pass Library

The developer must check the availability of the iOS Pass library in the current device.

Use the following snippet to determine the availability of a pass library:

{% highlight voltMx %}var isPassLibraryAvailable = com.voltmx.isPassLibraryAvailable();
  
var passLibrary = null;
  
if (isPassLibraryAvailable) {
  
   passLibrary = new com.voltmx.PassLibrary();
  
}
{% endhighlight %}

### Check whether a Pass is in the Pass Library

Use the [containsPass](passlibrary.html#containspass) method to determine whether a pass is in the user pass library.

{% highlight voltMx %}var aPass = new com.voltmx.Pass(path_to_pkpass_file);
  
var passLibrary = new com.voltmx.PassLibrary();
  
if (passLibrary.containsPass(aPass)) {  
    // Pass is available in the pass library
  
}
{% endhighlight %}

### Access Passes from the Pass Library

Use the [getPasses](passlibrary.html#getpasses) method to get all the passes that a developer's application is entitled to access.

### Read a Pass from the Pass Library

Use the [getPassWithTypeIdentifierAndSerialNumber](passlibrary.html#getpasswithtypeidentifierandserialnumber) method to read a pass from pass library.

Developer can use methds such as [getOrganizationName](pass.html#getorganizationname), [getLocalizedDescription](pass.html#getlocalizeddescription) of [Pass](pass.html) class to access information about the pass.

Use the [getLocalizedValueForKeyForDeviceLocale](pass.html#getlocalizedvalueforkeyfordevicelocale) method to access specific field data for a key.

{% highlight voltMx %}pass = passLibrary.getPassWithTypeIdentifierAndSerialNumber(identifier, serialNumber);

  
var organizationName = pass.getOrganizationName();
  
var localizedDescription = pass.getLocalizedDescription();
{% endhighlight %}

### Add a Pass to the Pass Library

[AddPassesViewController](com.voltmx_objects_addpassesviewcontroller_methods.html) is a view controller which can be used to display passes and let users add them to their pass library.

Create a pass with pass data file path, use a [](addpassesviewcontroller.html)[AddPassesViewController](com.voltmx_objects_addpassesviewcontroller_methods.html) object to add passes to pass library.

{% highlight voltMx %}function statusCallback(status) {  
    if (status == "VoltMXPKAddPassesViewControllerFinished") {  
        // view controller finished adding passes  
    } else if (status == "VoltMXPKAddPassesViewControllerShown") {  
        // view controller shown to add passes
  
    } else if (status == "VoltMXPKAddPassesViewControllerDismissed") {  
        // view controller dismissed  
    }
  
}
  
var aPass = new com.voltmx.Pass(path_to_pkpass_file);
  
var addpassesview = com.voltmx.AddPassesViewController([aPass],statusCallback);
  
  
addpassesview.presentAnimated(true);
{% endhighlight %}

### Modify a Pass

Application can download a new pass(signed) from server and replace it in the pass library using [replacePassWithPass](passlibrary.html#replacepasswithpass) method.

{% highlight voltMx %}var newPass = new com.voltmx.Pass(path_to_new_pass);  
var passLibrary = new com.voltmx.PassLibrary();  
passLibrary.replacePassWithPass(newPass);
{% endhighlight %}

### Remove a Pass from the Pass Library

Use the [removePass](passlibrary.html#removepass) method of [PassLibrary](passlibrary.html) class to remove a pass from pass library.

{% highlight voltMx %}var pass = new com.voltmx.Pass(path_to_pass);  
var passLibrary = new com.voltmx.PassLibrary();  
passLibrary.removePass(pass);
{% endhighlight %}

### Open a Pass in the Passbook application

Use [getPassURL](pass.html#getpassurl) property to present the pass in Passbook.

![](resources/prettify/onload.png)
