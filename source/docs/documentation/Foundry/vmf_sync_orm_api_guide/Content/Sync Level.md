---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                           

Sync Level
==========

This set of APIs helps the developer to get all pending upload instances. For example, if a record is updated three times with _enableIntermediateUpdates = true_, then you can retrieve all three instances of that record.

This API is at application level and provides comprehensive list of all the instances from all the tables in all the scopes.

You have an option to retrieve only count of the instances instead of actual instances. You are recommended to use this when only count is required as this saves huge data from getting loaded into memory.

sync.getAllPendingUploadInstances
---------------------------------

### Signature

sync.getAllPendingUploadInstances (**retrieveOnlyCount**, **successcallback**, **errorcallback**);

### Parameters

*   retrieveOnlyCount =true/false
*   successcallback\[function\] - Optional
    
    Specifies the function that gets invoked on success
    
*   errorcallback\[function\] - Optional  
    Specifies the function that gets invoked on failure

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example 1

{% highlight voltMx %}/\*
Assuming there are two scopes scope1 and scope2.  
scope1 has 2 tables; tab1(colA, colB) with 4 changes and tab2(col1, col2) with 2 changes 
scope2has 2 tables; tab1(col1, col2) with2 changes and tab2(col1, col2) with 2 changes 
\*/
sync. getAllPendingUploadInstances (false,mySuccesscallback,myErrorcallback);
function mySuccesscallback(res){
voltmx.print("Total instances pending for upload:"+res.totalCount);
voltmx.print("Total pending upload instances for scope1":+res.scope1.count);
voltmx.print("Total pending upload instances for tab1":+ res.scope1.tab1.count);
voltmx.print("Pending upload instance data for tab1":+ JSON.stringify(res.scope1.tab1.data));
voltmx.print("Total pending upload instances for tab2":+ res.scope1.tab2.count);
voltmx.print("Pending upload instance data for tab2":+ JSON.stringify(res.scope1.tab2.data));
//similarly data can be accessed for scope2
}
function myErrorcallback (res){
alert("Error occurred while fetching pending upload instances");
}

{% endhighlight %}

### Example 2

{% highlight voltMx %}sync.getAllPendingUploadInstances (true, mySuccesscallback,myErrorcallback);
function mySuccesscallback(res){
voltmx.print("Total instances pending for upload :" + res.totalCount);
voltmx.print("Total pending upload instances for scope1": + res.scope1.count);
voltmx.print("Total pending upload instances for tab1":+res.scope1.tab1.count);
voltmx.print("Total pending upload instances for tab2":+res.scope1.tab2.count);
//similarly data can be accessed for scope2
//Note that in this case res.scope1.tab1.data and res.scope1.tab2.data will be null
}
function myErrorcallback (res){
alert("Error occurred while fetching pending upload instances");
}

{% endhighlight %}
