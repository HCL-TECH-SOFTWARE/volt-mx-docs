---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                          

Override Network Service Calls
==============================

To pass custom headers or write custom logic during network calls, follow these steps:

1.  Add the following parameters in config while passing it to [sync.startSession](Application_Level.html#sync-startsession) API. The netOverrideFunc is the function that will be used to make other network calls

**config.invokeservicefunction = netOverrideFunc;**

{% highlight voltMx %}function syncStartSession(){   
var config = {};   
config.userid  = “syncadmin”;   
config.password = “SyncAdmin123”;   
config.appid = “syncAppID”;   
config.batchsize = “500”;   
config.serverhost = “ip.add.ress”;   
config.serverport = “8989”;   
config.onsyncstart = onsyncstartCallback;   
config.onscopestart = onscopestartCallback;   
config.onscopeerror = onscopeerrorCallback;   
config.onscopesuccess = onscopesuccessCallback;   
config.onuploadstart = onuploadstartCallback;   
config.onuploadsuccess = onuploadsuccessCallback;   
config.ondownloadstart = ondownloadstartCallback;   
config.ondownloadsuccess = ondownloadsuccessCallback;   
config.onbatchstored = onbatchstoredCallback;   
config.onbatchprocessingstart = onbatchprocessingstartCallback;   
config.onbatchprocessingsuccess = onbatchprocessingsuccessCallback;   
config.onsyncsuccess = onsyncsuccessCallback;   
config.onsyncerror = onsyncerrorCallback;   
//set networktimeout if needed   
config.networktimeout = 90;  
//New Config parameter  
config.invokeservicefunction = netOverrideFunc;   
showSyncLoadingScreen("Starting Sync Session")   
sync.startSession(config);   
}
{% endhighlight %}4.  Implement netOverrideFunc as in the following code:
{% highlight voltMx %}function netOverrideFunc(url, params, callback, context){   
/write your own implementation here   
//after getting response, call callback as below   
function networkCallbackStatus(status, result, cntxt){   
//status should be 400 when call is complete, please read voltmx //implementation of voltmx.net.invokeServiceAsync   
if(status === 400){   
voltmx.print(JSON.stringify(result));   
callback(status, result, cntxt);   
}   
};   
voltmx.print("Hitting "+ url + "with params " + JSON.stringify(params));   
//here you can write your own implementation or make any service call to //get tokens, etc. before making this service call   
voltmx.net.invokeServiceAsync(url, params, networkCallbackStatus, context);   
}
{% endhighlight %}
