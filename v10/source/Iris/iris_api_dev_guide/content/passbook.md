                            

You are here: Passbook API

Passbook API
============

Use a passbook to store items like boarding passes, movie tickets, and gift cards. The Passbook API lets you scan your iPhone or iPod touch to check-in for a flight, get into a movie, redeem a coupon, and more.

> **_Important:_** Ensure that you have the [iOS Passbook FF](klpassbook.zip)I imported into your project before you use VoltMX's Passbook API. The Passbook FFI is mandatory for the steps in this topic to work.

The Passbook API contains the following objects and related methods:

[PassLibrary Object](passlibrary.md)

  
| Method | Description |
| --- | --- |
| [addPassWithCompletionCallback](passlibrary.md#addpasswithcompletioncallback) | Presents UI to add pass. |
| [addPassesWithCompletionCallback](passlibrary.md#addpasseswithcompletioncallback) | Presents UI to add multiple passes. |
| [containsPass](passlibrary.md#containspass) | Returns whether the user’s pass library contains a pass. |
| [getPassWithTypeIdentifierAndSerialNumber](passlibrary.md#getpasswithtypeidentifierandserialnumber) | The proximity value gives a general sense of the relative distance to the beacon. |
| [getPasses](passlibrary.md#getpasses) | Returns the passes in the user’s pass library. |
| [removePass](passlibrary.md#removepass) | Removes the pass from the user’s pass library. |
| [replacePassWithPass](passlibrary.md#replacepasswithpass) | Replaces a pass in the user’s pass library with the given pass. |

 

You can add passes to a pass library using the [addPassWithCompletionCallback](passlibrary.md#addpasswithcompletioncallback) or [addPassesWithCompletionCallback](passlibrary.md#addpasseswithcompletioncallback) functions. You can retrieve the available passes using the [getPasses](passlibrary.md#getpasses) or [getPassWithTypeIdentifierAndSerialNumber](passlibrary.md#getpasswithtypeidentifierandserialnumber) functions. Use the [replacePassWithPass](passlibrary.md#replacepasswithpass) function to replace a pass with another pass, and the [removePass](passlibrary.md#removepass) function to remove a pass.

[Pass Object](pass.md)

| Method | Description |
| --- | --- |
| [getAuthenticationToken](pass.md#getauthenticationtoken) | The token used to authenticate with the web service. |
| [getLocalizedDescription](pass.md#getlocalizeddescription) | The localized description of the pass’s kind. |
| [getLocalizedName](pass.md#getlocalizedname) | Use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view. |
| [getLocalizedValueForKeyForDeviceLocale](pass.md#getlocalizedvalueforkeyfordevicelocale) | Returns the localized value for specified field of the pass. |
| [getOrganizationName](pass.md#getorganizationname) | The name of the organization that created the pass. |
| [getPassTypeIdentifier](pass.md#getpasstypeidentifier) | The pass’s type identifier. |
| [getPassURL](pass.md#getpassurl) | The URL that opens the pass in the Passbook app. |
| [getSerialNumber](pass.md#getserialnumber) | A value that uniquely identifies the pass. |
| [getUserInfo](pass.md#getuserinfo) | Developer-specific custom data. |

 

[AddPassesViewController Object](com.voltmx_objects_addpassesviewcontroller_methods.md)

| Method | Description |
| --- | --- |
| [dismissAnimated](com.voltmx_objects_addpassesviewcontroller_methods.md#getAccur) | Used to dismiss the view of add passes view controller. |
| [getLocalizedDescription](com.voltmx_objects_addpassesviewcontroller_methods.md#getMajor) | The localized description of the pass’s kind. |
| [getLocalizedName](com.voltmx_objects_addpassesviewcontroller_methods.md#getLocal) | Use this property to provide accessibility information for a UI element that represents a pass, such as a cell in a table view |
| [getLocalizedValueForKeyForDeviceLocale](com.voltmx_objects_addpassesviewcontroller_methods.md#getMinor) | Returns the localized value for specified field of the pass. |
| [getOrganizationName](com.voltmx_objects_addpassesviewcontroller_methods.md#getProxi) | The name of the organization that created the pass. |
| [getPassTypeIdentifier](com.voltmx_objects_addpassesviewcontroller_methods.md#getProxi2) | The pass’s type identifier. |
| [getPassURL](com.voltmx_objects_addpassesviewcontroller_methods.md#getPassURL) | The URL that opens the pass in the Passbook app. |
| [getSerialNumber](com.voltmx_objects_addpassesviewcontroller_methods.md#replaceP) | A value that uniquely identifies the pass. |
| [getUserInfo](com.voltmx_objects_addpassesviewcontroller_methods.md#getUserI) | Developer-specific custom data. |

You can retrieve the authentication token for a pass using the [getAuthenticationToken](pass.md#getauthenticationtoken) function. You can retrieve localized information about the pass using the [getLocalizedDescription](pass.md#getlocalizeddescription), [getLocalizedName](pass.md#getlocalizedname), or [getLocalizedValueForKeyForDeviceLocale](pass.md#getlocalizedvalueforkeyfordevicelocale) functions. Using the [getOrganizationName](pass.md#getorganizationname) function, you can retrieve the name of the organization that created the pass. You can retrieve information about the pass using [getPassTypeIdentifier](pass.md#getpasstypeidentifier), [getPassURL](pass.md#getpassurl), or [getSerialNumber](pass.md#getserialnumber) functions, and retrieve information about the user using the [getUserInfo](pass.md#getuserinfo) function. You can dismiss the add passes view using the [dismissAnimated](com.voltmx_objects_addpassesviewcontroller_methods.md#getAccur) function.

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

The [PassLibrary](passlibrary.md) object represents the library of passes, and a [Pass](pass.md) object represents an individual pass.

### Determine the Availability of a Pass Library

The developer must check the availability of the iOS Pass library in the current device.

Use the following snippet to determine the availability of a pass library:

```
var isPassLibraryAvailable = com.voltmx.isPassLibraryAvailable();
  
var passLibrary = null;
  
if (isPassLibraryAvailable) {
  
   passLibrary = new com.voltmx.PassLibrary();
  
}
```

### Check whether a Pass is in the Pass Library

Use the [containsPass](passlibrary.md#containspass) method to determine whether a pass is in the user pass library.

```
var aPass = new com.voltmx.Pass(path_to_pkpass_file);
  
var passLibrary = new com.voltmx.PassLibrary();
  
if (passLibrary.containsPass(aPass)) {  
    // Pass is available in the pass library
  
}
```

### Access Passes from the Pass Library

Use the [getPasses](passlibrary.md#getpasses) method to get all the passes that a developer's application is entitled to access.

### Read a Pass from the Pass Library

Use the [getPassWithTypeIdentifierAndSerialNumber](passlibrary.md#getpasswithtypeidentifierandserialnumber) method to read a pass from pass library.

Developer can use methds such as [getOrganizationName](pass.md#getorganizationname), [getLocalizedDescription](pass.md#getlocalizeddescription) of [Pass](pass.md) class to access information about the pass.

Use the [getLocalizedValueForKeyForDeviceLocale](pass.md#getlocalizedvalueforkeyfordevicelocale) method to access specific field data for a key.

```
pass = passLibrary.getPassWithTypeIdentifierAndSerialNumber(identifier, serialNumber);

  
var organizationName = pass.getOrganizationName();
  
var localizedDescription = pass.getLocalizedDescription();
```

### Add a Pass to the Pass Library

[AddPassesViewController](com.voltmx_objects_addpassesviewcontroller_methods.md) is a view controller which can be used to display passes and let users add them to their pass library.

Create a pass with pass data file path, use a [](addpassesviewcontroller.md)[AddPassesViewController](com.voltmx_objects_addpassesviewcontroller_methods.md) object to add passes to pass library.

```
function statusCallback(status) {  
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
```

### Modify a Pass

Application can download a new pass(signed) from server and replace it in the pass library using [replacePassWithPass](passlibrary.md#replacepasswithpass) method.

```
var newPass = new com.voltmx.Pass(path_to_new_pass);  
var passLibrary = new com.voltmx.PassLibrary();  
passLibrary.replacePassWithPass(newPass);
```

### Remove a Pass from the Pass Library

Use the [removePass](passlibrary.md#removepass) method of [PassLibrary](passlibrary.md) class to remove a pass from pass library.

```
var pass = new com.voltmx.Pass(path_to_pass);  
var passLibrary = new com.voltmx.PassLibrary();  
passLibrary.removePass(pass);
```

### Open a Pass in the Passbook application

Use [getPassURL](pass.md#getpassurl) property to present the pass in Passbook.

![](resources/prettify/onload.png)
