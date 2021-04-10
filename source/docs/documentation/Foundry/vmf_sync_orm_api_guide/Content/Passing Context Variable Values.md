---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                          


Passing Context Variable Values
===============================

From 5.5.1 GA onwards, you can pass the context variables from client side in upload or download calls, and can map them in Input mapping of the all the Operation. The mapping is not required in case of databases.

Find below the callback example to configure the context variables in upload:

Example
-------

{% highlight voltMx %}function onuploadstartCallback(res){
var req = res.uploadRequest;
if (req.clientcontext === undefined) {
req.clientcontext = {};
}
req.clientcontext.value = "Sample\_Client\_Context\_Value";
//voltmx.print("\*\*\*\*\*\*\*\*\*onuploadstartDemoTest :" + JSON.stringify(res))
voltmx.print("\*\*\*\*\*\*\*\*\*onuploadstartDemoTest\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* :");
for (var i in res) {
voltmx.print("\*\*\*\*" + i.toString() + " :" + JSON.stringify(res\[i\]));
}
//showSyncLoadingScreen("Upload Started:" + outputparams)
return req;
}
{% endhighlight %}

Find below the callback example to set the context variables in download:

Example
-------

{% highlight voltMx %}function ondownloadstartCallback(outputparams){
                var req = outputparams.downloadRequest;
                if(req.clientcontext===undefined){
                                req.clientcontext = {};
                }
                **req.clientcontext.var1** = **"123"**;
                **req.clientcontext.var2** = **"xyz"**;
                return req;
}
{% endhighlight %}

> **_Note:_** You can pass the context variables technically from a device side. You cannot use the context variables in database datasource applications. Passing Context Variable Values is supported for all the database and non-database datasources.
