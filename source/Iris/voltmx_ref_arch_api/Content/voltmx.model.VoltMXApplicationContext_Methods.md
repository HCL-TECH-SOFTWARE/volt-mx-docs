                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


voltmx.model.VoltMXApplicationContext Methods
=========================================

The VoltMXApplicationContext provides the following methods.


<details close markdown="block"><summary>voltmx.model.ApplicationContext.createModel Method</summary>

* * *

Creates a model using the specified inputs.

### Syntax

```

voltmx.model.ApplicationContext.createModel(  
    entityName,  
    serviceName,  
    options,  
    metadataOptions,  
    successCallback,  
    errorCallback)
```

### Parameters

entityName

A string that specifies the name of the model.

serviceName

A string that contains the name of the object service that the model specified in the _entityName_ parameter belongs to.

options

A JavaScript object containing the access options for the service that the app is logging into. This object contains one key, named `access`. The values for this key can be either "online" or "offline".

metadataOptions

An object that contains parameters that the app passes to the Volt MX Reference Architecture framework while fetching Volt MX Foundry metadata. The only parameter currently supported is "getFromServer" which can be set to `true` or `false`. A value of `true` forces the model to fetch the metadata from the server rather than retrieve it from the cache. A value of `false` allows the metadata to be fetched from the cache. If "getFromServer" is set to true, then the metadata is refreshed and a new instance is created.

successCallback

A JavaScript function, which you provide, that is automatically invoked when the model object is created. The signature of this function is as follows.

successCallback(modelObject);

The _modelObject_ parameter to this callback function contains the model object that was created.

errorCallback

A JavaScript function, which you provide, that is automatically invoked when the model object is not created. The signature of this function is as follows.

loginErrorCallback(error);

The _error_ parameter to this callback function holds a [voltmx.model.Exception](voltmx.model.Exception_Object.md) object.

### Return Values

Returns the model object.

* * *

</details>
<details close markdown="block"><summary>voltmx.model.ApplicationContext.login</summary> 

* * *

Performs a login operation.

### Syntax

```

voltmx.model.ApplicationContext.login(  
    params,  
    loginSucCallback,  
    loginErrCallback)
```

### Parameters

_params_

A JavaScript object that holds key-value pairs specifying the login authorization information. The keys in this object are as follows.

| Key | Value |
| --- | --- |
| authParams | A JavaScript object that holds the authorization parameters for logging into the service. For more details, see **Remarks** below. |
| options | A JavaScript object containing the access options for the service that the app is logging into. This object contains one key, named `access`. The values for this key can be either "online" or "offline". |
| identityServiceName | A string that specifies the name of the identity service that performs the authentication. |

  

loginSucCallback

A JavaScript function, which you provide, that is automatically invoked when the login is successful. The signature of this function is as follows.

```

loginSuccessCallback();
```

loginErrCallback

A JavaScript function, which you provide, that is automatically invoked when the login is not successful. The signature of this function is as follows.

```

loginErrorCallback(err);
```

The _err_ parameter to this callback function contains the error value and error message string for the error that occurred.

### Return Values

None.

### Remarks

The _params_ parameter contains key-value pairs that hold information needed to log into a server. The `authParams` key in the _params_ parameter is an object that also contains key-value pairs. The keys it contains are given in the following table.

| Key | Value |
| --- | --- |
| userid | A string containing the User ID for the account or service that the app is logging into. |
| password | A string containing the password for the account or service that the app is logging into. |

The `options` key in the _params_ object is a JavaScript object that specifies the type of access. The key name for selecting the type of access is "access". A value of "online" indicates that the app is logging into a remote service that is not on the device, but rather on the network. The value "offline" means that the service is on the device.

### Example

```

var params = {  
    "authParams" : {  
        "userid" : "MyUserID",  
        "password" : "MyPassword"  
    },  
    options :{"access" :"online"},
    "identityServiceName" : "TheIdentityServiceName"
};

function loginSuccessCallback()
{
    // Your code goes here.
}

function loginErrorCallback(err)
{
    // Your code goes here.
}

voltmx.model.ApplicationContext.login(params,loginSuccessCallback,loginErrorCallback);
```

* * *

</details>
<details close markdown="block"><summary>voltmx.model.VoltMXApplicationContext.logout Method</summary> 

* * *

Performs a logout operation.

### Syntax

```

logout(  
    successCallback,  
    errorCallback);
```

### Parameters

_successCallback_

A JavaScript function, which you provide, that is automatically invoked when the logout is successful. The signature of this function is as follows.

```

loginSuccessCallback();
```

_errorCallback_

A JavaScript function, which you provide, that is automatically invoked when the logout is not successful. The signature of this function is as follows.

```

loginErrorCallback(err);
```

The _err_ parameter to this callback function contains the error value and error message string for the error that occurred.

### Return Values

None

### Remarks

This function clears all form controllers, models, and so forth from the `VoltMXApplicationContext` object's application context. It then logs the app out of Volt MX Foundry services that it is logged into.

### Example

```

var appContext = voltmx.model.VoltMXApplicationContext.getAppInstance();
appContext.logout();
```

* * *
</details>
