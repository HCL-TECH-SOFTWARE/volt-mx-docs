---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                           

Scope Level
===========

This set of APIs helps the developer to perform various ORM operations at Sync Scope level.

\<scope\>.reset
-------------

This method deletes all data in all tables for the particular scope on which it is called.

### Signature

\<scope\>.reset (**resetSuccessCallback** ,**resetFailCallback**)

### Parameters

*   resetSuccessCallback\[function\] - Optional
    
    Specifies the function that gets invoked on success
    
*   resetFailCallback\[function\] - Optional
    
    Specifies the function that gets invoked on failure
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function scopeReset(){
 myScope.reset(resetSuccessCallback , resetFailCallback);
 }
 
 function resetSuccessCallback(){
 alert("Scope reset successfully");
 }
 function resetFailCallback(res){
 alert("Scope reset failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
 }

{% endhighlight %}
