---
layout: "documentation"
category: "voltmx_ref_arch_api_internal"
---
                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


voltmx.sdk.mvvm.VoltMXApplicationContext Methods
============================================

The VoltMXApplicationContext provides the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.appServicesLogin Method](javascript:void(0);)

* * *

Performs initialization, registration, and login services for an app.

Syntax

voltmx.sdk.mvvm.VoltMXApplicationContext.appServicesLogin(  
    params,  
    loginSuccessCallback,  
    loginErrorCallback);

Parameters

_params_

An object containing the authorization parameter and options, as well as the synchronization configuration information. This object uses the following format.

*   authParams: An object containing a userID and a password.
*   options: An object specifying the type of access that the app uses. The object contains one key, called "access", which can have a value of either "online" or "offline".
*   syncOptions: An object containing synchronization configuration information.

_loginSuccessCallback_

An optional event handler function that is called upon success.

_loginErrorCallback_

An optional event handler function that is called if the `appServicesLogin` function fails.

Return Values

None.

Remarks

This method performs initialization, configuration, and login services. It calls the [voltmx.sdk.mvvm.VoltMXApplicationContext.init](#init) method. If your app invokes `appServicesLogin`, it does not need to call `voltmx.sdk.mvvm.VoltMXApplicationContext.init`. The `appServicesLogin` method also registers and starts the AuthenticationServiceManage and MetadataServiceManager objects. Therefore, this app must have identity services configured prior to calling `appServicesLogin`.

In the case of an app that uses offline storage, this method also registers and starts the `SyncManager` object.

Your app calls this method directly by using its fully-qualified name.

Example

{% highlight voltMx %}params = {
    "authParams" : {
        "userid" : "Aard",
        "password" : "Vark"
    },
    "options" :{
        {"access":"online"}
    },
    "syncOptions" : {
        "syncConfig":{
            "batchsize" : 10000000,
            // Other sync configuration params.
        }
    }
}

voltmx.sdk.mvvm.VoltMXApplicationContext.appServicesLogin(params);
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.dismissLoadingScreen Method](javascript:void(0);) 

* * *

Dismisses a loading screen that was previously displayed using the [showLoadingScreen](#ShowLoad) method.

Syntax

dismissLoadingScreen();

Parameters

None.

Return Values

None.

Remarks

Typically, your app calls the [showLoadingScreen](#ShowLoad) method to display a screen that lets the user know that it is loading data and that the user must wait. After the data has been loaded, your app calls this method to dismiss the loading screen.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
appContext.dismissLoadingScreen();

{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getAllFormControllers Method](javascript:void(0);) 

* * *

Retrieves controler objects for every form in the current application context.

Syntax

getAllFormControllers();

Parameters

None.

Return Values

Returns an object containing all of the form controllers in the application context. The object contains a group of key-value pairs in which the form ID is the key and the value is the controller for the specified form.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
var allControllers = appContext.getFormControllers();
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance Method](javascript:void(0);) 

* * *

Retrieves in instance of a VoltMXApplicationContext object.

Syntax

voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();

Parameters

None.

Return Values

Returns a voltmx.sdk.mvvm.VoltMXApplicationContext object.

Remarks

Your app calls this function any time it needs an instance of the global VoltMXApplicationContext object.

Your app calls this method directly by using its fully-qualified name.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getFactorySharedInstance Method](javascript:void(0);) 

* * *

Retrieves an instance of the AppFactory object.

Syntax

getFactorySharedInstance();

Parameters

None.

Return Values

Returns a voltmx.sdk.mvvm.AppFactory object.

Remarks

Apps use the AppFactory object to instantiate instances of classes in the voltmx.sdk.mvvm namespace.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
var appFactoryInstance = appContext.getFactorySharedInstance();
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getFormController Method](javascript:void(0);) 

* * *

Retrieves the form controller for the specified form.

Syntax

getFormController(  
    formId)

Parameters

formID

A string containing the ID of the form.

Return Values

Returns the controller associated with the specified form.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
appContext.getFormController(formId);			
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getMetadataStore Method](javascript:void(0);) 

* * *

Retrieves a voltmx.sdk.mvvm.MetadataStore object from the application's context.

Syntax

voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance().getMetadataStore();

Parameters

None.

Return Values

Returns the MetadataStore object from the app's context.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
var appMetadataStore = appContext.getMetadataStore();
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getModel Method](javascript:void(0);) 

* * *

Retrieves the specified model.

Syntax

getModel(  
    entityName,  
    serviceName,  
    options);

Parameters

_entityName_

A string containing the name of the model.

serviceName

A string that contains the name of the object service that the model in the _entityName_ parameter belongs to.

options

An object that defines the access options for the model. The object contains one key, called "access", which can have a value of either "online" or "offline".

Return Values

Returns the specified model.

Remarks

Apps based on the VoltMXReference Architecture SDK use models to abstract the access to data sources. Data sources can include both local data storage on the device and remote data services that your app accesses across the Internet. For each data source, there is a model that provides a standardized interface to the data source. This function returns the model associated with a data source.

Example

{% highlight voltMx %}var modelName = "MyModel";
var serviceName = "MyVoltMX FoundrySerice";
var serviceOptions = {"access":"online"};
var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
var currentModel = appContext.getModel(modelName,serviceName,serviceOptions);
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.getObjectService Method](javascript:void(0);) 

* * *

Retrieves the specified object service.

Syntax

getObjectService(  
    options,  
    objectServiceName);

Parameters

_options_

A JavaScript object that specifies the access options for the service. The object contains one key, called "access", which can have a value of either "online" or "offline".

_objectServiceName_

The name of the object service to retrieve.

Return Values

Returns the specified object service.

Example

{% highlight voltMx %}var serviceName = "MyVoltMX FoundrySerice";
var serviceOptions = {"access":"online"};
var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
var onlineObjSer = appContext.getObjectService(serviceOptions,serviceName);
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.init Method](javascript:void(0);) 

* * *

Initializes an instance of a VoltMXApplicationContext object.

Syntax

voltmx.sdk.mvvm.VoltMXApplicationContext.init();

Parameters

None.

Return Values

None.

Remarks

You must call the `init` method before you can use any other method that this object provides. If you do not call this method first, all of the other methods of this class will return an error.

Your app calls this method directly by using its fully-qualified name.

Example

{% highlight voltMx %}voltmx.sdk.mvvm.VoltMXApplicationContext.init();
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.logout Method](javascript:void(0);) 

* * *

Performs a logout operation.

Syntax

logout(  
    successCallback,  
    errorCallback);

Parameters

_successCallback_

An event handler function that is called when the logout operation is successful.

_errorCallback_

An event handler function that is called when the logout operation results in an error.

Return Values

None

Remarks

This function clears all form controllers, models, and so forth from the VoltMXApplicationContext object's application context. It then logs the app out of Volt MX Foundry services that it is logged into.

Example

{% highlight voltMx %}var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
appContext.logout();
{% endhighlight %}

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.sdk.mvvm.VoltMXApplicationContext.showLoadingScreen Method](javascript:void(0);) 

* * *

Displays a loading screen with the specified text.

Syntax

showLoadingScreen(  
    text);

Parameters

_text_

A string containing the text to display

Return Values

None.

Remarks

You app calls this method when it needs to display a screen informing the user that data is loading. The typical use case for this method is when your app is getting data from a remote service across the Internet.

This method displays the loading screen with the message specified in the _text_ parameter and then returns. When the data is loaded, call the [dismissLoadingScreen](#DisLoad) method to dismiss the loading screen.

Example

{% highlight voltMx %}var text = "Quite please, I'm thinking..."
var appContext = voltmx.sdk.mvvm.VoltMXApplicationContext.getAppInstance();
appContext.showLoadingScreen(text); 
{% endhighlight %}

* * *
