---
layout: "documentation"
category: "offline_objectsapi_reference_guide"
---

Volt MX  Foundry console User Guide: [Application-level APIs](Application_Level_APIs.html) > HCLFoundry.OfflineObjects.executeSelectQuery

HCLFoundry.OfflineObjects.executeSelectQuery
=================================================

The application-level API, **executeSelectQuery** allows the user to execute any select query on device database. The API executes the query provided as an argument on the device database and returns the response in successCallback.

The failureCallback is invoked in case of errors such as invalid query and so on.

> **_Note:_** **executeSelectQuery** should be preferred only if the object-level **read** API is not able to serve the purpose such as **join based select** queries or complex SQL queries.

> **_Note:_** **executeSelectQuery** supports only **read** or **select** queries. The API does not support **create** or **update** or **delete** operations on the device database.

Volt MX  Iris (JavaScript)
-------------------------------

> **_Note:_** Not supported for Mobile Web, and Desktop Web channels.

> **_Note:_** Supported for Windows from V8 SP4 Fix Pack 6 onwards.

### Signature

{% highlight voltMx %}HCLFoundry.OfflineObjects.executeSelectQuery(query, successCallback, failureCallback)
{% endhighlight %}

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| query | String | Select query to be executed on device DB. | Yes |
| successCallback | Function | The function is invoked upon successful query execution. | Yes |
| failureCallback | Function | The function is invoked on failure. | Yes |

### Return Type

void

### Example

{% highlight voltMx %}function successCallback(response) {
    //response contains records returned from device db for query executed.
}

function failureCallback(error) {
    voltmx.print("executeSelectQuery failed with error:" + error.code);
}
var query = "Select * from Employee where EmployeeID=5";
HCLFoundry.OfflineObjects.executeSelectQuery(query, successCallback, failureCallback);
{% endhighlight %}

Android (Java)
--------------

### Signature

{% highlight voltMx %}void <OfflineObjects>.executeSelectQuery(String query, final HCLCallback callback)
{% endhighlight %}

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| query | String | Select query to be executed on device DB. | Yes |
| callback | HCLCallback | The application must implement **onSuccess** and **onFailure** methods of HCLCallback interface. | Yes |

### Return Type

void

### Example

{% highlight voltMx %}VoltMXClient sdk = new VoltMXClient();
IVoltMXApplicationSync appSync = sdk.getOfflineObjects();
String query = "Select * from Employee where EmployeeID=5";
appSync.executeSelectQuery(query, new HCLCallback() {
    @Override
    public void onSuccess(Object object) {
        //response contains records returned from device db for query executed.
    }
    @Override
    public void onFailure(Object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.d("executeSelectQuery", "executeSelectQuery failed with error:" + e.getMessage() + "callstack: " + e.getStackTrace());
    }
});
{% endhighlight %}

iOS (Objective C)
-----------------

### Signature

{% highlight voltMx %}(void) <OfflineObjects>.executeSelectQuery:(NSString *)query
			onSuccess:(HCLSuccessCompletionHandler)onSuccess
			onFailure:(HCLFailureCompletionHandler)onFailure
{% endhighlight %}

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| query | NSString\* | Select the query to be executed on device DB. | Yes |
| onSuccess | HCLSuccessCompletionHandler | The function is invoked on successful query execution. | Yes |
| onFailure | HCLFailureCompletionHandler | The function is invoked on failure. | Yes |

### Return Type

void

### Example

{% highlight voltMx %}HCLClient * sdk = [HCLClient sharedClient];
OfflineObjects * applicationSync = [sdk getOfflineObjects];
NSString * query = @"Select * from Employee where EmployeeID=5"
HCLSuccessCompletionHandler onSuccess = ^ void(id object) {
    NSLog(@"executeSelectQuery successful");
};

HCLFailureCompletionHandler onFailure = ^ void(id object) {
    NSLog(@"executeSelectQuery failed");
};
[applicationSync executeSelectQuery: query
    onSuccess: onSuccess
    onFailure: onFailure
];
{% endhighlight %}
