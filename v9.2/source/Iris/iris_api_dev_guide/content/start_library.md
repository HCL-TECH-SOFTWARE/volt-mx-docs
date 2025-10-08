                            

API to Start Library UI
=======================

Use the API for respective platforms to launch the Volt MX Iris Library from the Native app. This feature is available from V8 SP3 onwards. The Start Library API is available for Android, iOS, and Windows platforms.

> **_Note:_** Calling this API from the Native app will internally call the appService callback of the Volt MX Iris Application.

Android
-------

You must use this API to launch the library UI. This API must be called after the library is successfully initialized.

> **_Note:_** You must call the Initialize Library API before using the Start Library API; otherwise, this method throws an exception.

> **_Note:_** Avoid passing null to mandatory parameters as that results in an exception.

Package

com.voltmx.library

Class

VoltMXLibrary

Syntax

```
public static void start(String libraryId,  
       android.app.Activity activity,  
       Hashtable<String,Object> libraryArgs,  
       Hashtable<String,Object> libraryConfig,  
       VoltMXLibrary.OnLibraryResultListener resultListener)throws Exception
```

Input Parameters

| Parameter | Description |
| --- | --- |
| libraryId | Specify the name of the library (VoltMX Iris Application AppID) that needs to be launched. This parameter cannot be null. |
| activity | Specify the Native app activity that is used to start the main activity of the Volt MX Iris Library. This parameter cannot be null. |
| libraryArgs | This parameter (key-value pair with supported values as primitive data types such as int, float, double, boolean, and String) is used to pass the native app's data to the library (based on the contract of the library). > **_Note:_** libraryArgs are passed to the Volt MX Iris Application's appService callback in new launch mode, which is known as library mode (whose constant is voltmx.application.APP\_LAUNCH\_MODE\_LIBRARY). |
| libraryConfig | The parameter that is used to configure the library. > **_Note:_** The libraryConfig parameter is currently ignored. You can pass null for this parameter. |
| resultListener | Register a callback to send an acknowledgment (result) from Volt MX Iris Library to the Native app. This parameter cannot be null. > **_Note:_** The resultListener methods are called from the main/UI thread. |

 

Example

```
try {
    VoltMXLibrary.start( < libraryId > , < activity > , < libraryArgs > , null, < resultListener > );
} catch (Exception ex) {}
```

### OnLibraryResultListener Interface

Package

com.voltmx.library

Class

VoltMXLibrary

Syntax

```
public static interface OnLibraryResultListener
```

**Methods**

_onLibraryResult_

```
abstract void onLibraryResult(String libraryId, Hashtable<String,Object> resultData)
```

**Parameters**

> | Parameter | Description |
> | --- | --- |
> | _libraryId_ | Specifies the library for which the acknowledgment (result) is sent. |
> | _resultData_ | Specifies the result data in the form of key-value pairs.> **_Note:_** The library should publish the keys of resultData to let the Native app handle the resultData. |

iOS
---

You must use this API to launch the library UI. This API must be called after the library is successfully initialized.

> **_Note:_** You must call the Initialize Library API before using the Start Library API; otherwise, this method throws an exception.

> **_Note:_** Avoid passing null to mandatory parameters as that results in an exception.

Import

<CoreComponent/VoltMXLibrary.h>

Class

VoltMXLibrary

Method

\+ start : viewController: libraryArgs : libraryConfig: delegate:

Declaration

```
\+ (void) start:(NSString *)libraryId  
         viewController:(UIViewController*) viewController  
         libraryArgs:(NSDictionary*) libraryArgs  
         libraryConfig:(NSDictionary*) libraryConfig  
         delegate:(id<VoltMXLibraryResultDelegate>) resultDelegate
```

Input Parameters

| Parameter | Description |
| --- | --- |
| libraryId | Specify the name of the library (VoltMX Iris Application AppID) that needs to be launched. This parameter cannot be null. |
| viewController | Specify the Native app's viewController reference to push the main UI controller into the library. |
| libraryArgs | This parameter (key-value pair with supported values as primitive data types such as int, float, double, boolean, and String) is used to pass the native app's data to the library (based on the contract of the library).> **_Note:_** libraryArgs are passed to the Volt MX Iris Application's appService callback in new launch mode, which is known as library mode (whose constant is voltmx.application.APP\_LAUNCH\_MODE\_LIBRARY). |
| libraryConfig | The parameter that is used to configure the launch of the library.> **_Note:_** The libraryConfig parameter is currently ignored. |
| resultDelegate | Register a delegate (that conforms to VoltMXLibraryResultDelegate) to send an acknowledgment (result) from Volt MX Iris Library to the Native app. This parameter cannot be null.> **_Note:_** The resultListener methods are called from the main/ UI thread. |

```
[VoltMXLibrary start:<libraryId> viewController:<viewController> libraryArgs:<libraryArgs>  
libraryConfig:<libraryConfig> delegate:<resultDelegate>];
```

### Protocol : VoltMXLibraryResultDelegate

Import

<CoreComponent/VoltMXLibrary.h>

Class

VoltMXLibrary

Method

(void)onLibraryResult: resultData:

Declaration

```
(void) onLibraryResult: (NSString * ) libraryId resultData: (NSDictionary * ) resultData
```

**Parameters**

| Parameter | Description |
| --- | --- |
| _libraryId_ | Specifies the library for which the acknowledgment (result) is sent. |
| _resultData_ | Specifies the result data in the form of key-value pairs.> **_Note:_** The library should publish the keys of resultData to let the Native app handle the resultData. |

Windows
-------

You must use this API to launch the library UI. This API must be called after the library is successfully initialized.

> **_Note:_** You must call the Initialize Library API before using the Start Library API; otherwise, this method throws an exception.

> **_Note:_** Avoid passing null to mandatory parameters as that results in an exception.

Package

Framework

Class

VoltMXLibrary

Syntax

```
public static void Start(string libraryId,
       Dictionary<string, Object> libraryArgs,
       Dictionary<string, Object> libraryConfig,
       ILibraryResultListener resultListener)
```

Parameters

| Parameter | Description |
| --- | --- |
| libraryId | Specify the name of the library (VoltMX Iris Application AppID) that needs to be launched. This parameter cannot be null. |
| libraryArgs | This parameter (key-value pair with supported values as primitive data types such as int, float, double, boolean, and String) is used to pass the native app's data to the library (based on the contract of the library).> **_Note:_** libraryArgs are passed to the Volt MX Iris Application's appService callback in new launch mode, which is known as library mode (whose constant is voltmx.application.APP\_LAUNCH\_MODE\_LIBRARY). |
| libraryConfig | The parameter that is used to configure the launch of the library.> **_Note:_** The libraryConfig parameter is currently ignored. |
| resultListener | Register a callback to send the acknowledgment (result) from Volt MX Iris Library to the Native app. This parameter cannot be null. |

 

> **_Note:_** The resultListener methods are called from the main/ UI thread.

### ILibraryResultListener Interface

Package

Framework

Syntax

```
public interface ILibraryResultListener
```

**Methods**

_OnLibraryResult_

```
void  OnLibraryResult(String libraryId, Dictionary <string, Object> resultData)
```

**Parameters**

| Parameter | Description |
| --- | --- |
| _libraryId_ | Specifies the library for which the acknowledgment (result) is sent. |
| _resultData_ | Specifies the result data in the form of key-value pairs.> **_Note:_** The library should publish the keys of resultData to let the Native app handle the resultData. |

![](resources/prettify/onload.png)
