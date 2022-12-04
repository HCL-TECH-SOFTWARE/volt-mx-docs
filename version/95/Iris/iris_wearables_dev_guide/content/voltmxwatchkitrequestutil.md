                             


WatchKitRequestUtil
===================

VoltMXWatchKitRequestUtil is a class that helps communication between the WatchKit App and its parent (iPhone) application. The APIs of this class facilitate the communication through the iOS IPC channel between Apple Watch and iPhone. A request, a set of key value pairs, from the Watch App is sent to its parent application. The parent application handles the request and sends the response, a set of key value pairs back to the watch app. The response data obtained from these APIs can be cached using one of the cache policies so that the further fetch data requests can leverage the readily available cache. These APIs can also help map the response data to the watch app UI using other classes of VoltMXWatchKitUtil library. All the requests that are sent to the phone using these APIs will be executed in the background.

Instance Creation APIs
----------------------

These APIs help create an instance of VoltMXWatchkitRequestUtil object. The APIs are:

*   [sharedInstance](#instancetype-sharedinstance)
*   [init](#id-init)

### (instancetype) sharedInstance

This API returns a shared instance of VoltMXWatchkitRequestUtil object.

Example

```
VoltMXWatchkitRequestUtil *util = [VoltMXWatchkitRequestUtil sharedInstance];
```

### (id) init

This API helps initialize VoltMXWatchkitRequestUtil object.

Example

```
VoltMXWatchkitRequestUtil *util = [[VoltMXWatchkitRequestUtil alloc] init];
```

Data Fetch APIs
---------------

The Data Fetch APIs help fetch the data from the cache based on the cache policy specified. You cannot update the data using these APIs. The APIs are:

*   [fetchDataWithRequestID:onCompletion:cachePolicy](#fetchdatawithrequestid-oncompletion-cachepolicy)
*   [fetchDataWithRequestID:userInfo:onCompletion:cachePolicy](#fetchdatawithrequestid-userinfo-oncompletion-cachepolicy)

### fetchDataWithRequestID:onCompletion:cachePolicy

This API fetches data with a given requestID based on the cache policy specified. The parameters are:

*   requestID: This parameter identifies a specific request among multiple requests made by a watch app from its parent application.
*   onCompletion: This parameter accepts an Objective-C block as an input. The block is invoked after receiving the response from a parent application. The callback assumes two parameters:
    
    *   NSError: This parameter accepts an object that contains the error sent by the iPhone application.
    *   data: This parameter is an object that contains data sent by the iPhone.
    
    > **_Note:_** You can pass nil if you do not want to do anything with the fetched data.
    
*   cachePolicy : Specifies the cache policy. For more information on supported cache policies, click [here](#cache-policies).

Example

```
void( ^ callback)(NSError * err, id data) = ^ (NSError * err, id data) {
    if (err) {
        NSLog(@"%@", err); //(To check what caused the error)
    } else {
        //do something
    }
}; 
- (void) fetchDataWithRequestID: @"DeleteMail"
onCompletion: callback
cachePolicy: VoltMXDataCachePolicyOnlyFromLocal
```

### fetchDataWithRequestID:userInfo:onCompletion:cachePolicy

This API fetches data with a given requestID and userInfo based on the cache policy specified. The parameters are:

*   requestID: This parameter identifies a specific request among multiple requests made by a watch app from its parent application.
*   userInfo: This parameter specifies the dictionary that you must send to iPhone.

*   onCompletion: This parameter accepts an Objective-C block as an input. The block is invoked after receiving the response from parent application. The callback assumes two parameters:
    
    *   NSError: This parameter accepts an object that contains the error sent by the iPhone application.
    *   data: This parameter is an object that contains data sent by the iPhone.
    
    > **_Note:_** You can pass nil if you do not want to do anything with the fetched data.
    

*   cachePolicy: Specifies the cache policy. For more information on supported cache policies, click [here](#cache-policies).

Example

```
 NSDictionary * userInfo = [
    [NSDictionary alloc] init
];
[userInfo initWithObjects: @[@"text"] forKeys: @[@"Mail is Edited”];
- (void) fetchDataWithRequestID: @“EditMail”
        userInfo: userInfo
        onCompletion: nil
        cachePolicy: VoltMXDataCachePolicyOnlyFromRemote
```

Fetch Data and Update Controller APIs
-------------------------------------

The fetch data and update controller APIs are similar to the other fetch APIs in this class. But they add convenience functionality of updating the application UI with the data obtained from fetch response. Updating the controllers using the response data is done by using VoltMXDataMapper class. The response data can still be cached using any of the supported cache policies.

The APIs are:

*   [fetchAndUpdateControllerWithRequestID:controller:onCompletion:cachePolicy](#fetchandupdatecontrollerwithrequestid-controller-oncompletion-cachepolicy)
*   [fetchAndUpdateControllerWithRequestID:controller:userInfo:onCompletion:cachePolicy](#fetchandupdatecontrollerwithrequestid-controller-userinfo-oncompletion-cachepolicy)

### fetchAndUpdateControllerWithRequestID:controller:onCompletion:cachePolicy

This API fetches data with given requestID and controller based on the cache policy specified. The parameters are:

*   requestID: This parameter identifies a specific request among multiple requests made by a watch app from its parent application.
*   controller: This is the object that manages a scene or a section of the scene. Typically, these objects are instances of WKInterfaceController class (manages scenes) or NSObject class (manages table rows).

*   onCompletion: This parameter accepts an Objective-C block as an input. The block is invoked after receiving the response from the parent application. The callback assumes two parameters:
    
    *   NSError: This parameter accepts an object that contains the error sent by the iPhone application.
    *   data: This parameter is an object that contains data sent by the iPhone.
    
    > **_Note:_** You can pass nil if you do not want to do anything with the fetched data.
    

*   cachePolicy: Specifies the cache policy. For more information on supported cache policies, click [here](#cache-policies).

Example

```
void( ^ createLocalCache)(NSError * err, id data) = ^ (NSError * err, id data) {
    if (err) {
        NSLog(@"%@", err); //(just to check what caused the error)
    } else {
        // since we are calling API with VoltMXDataCachePolicyNoCache data fetched will not be cached, so in callback you can cache the fetched data using VoltMXDataCache APIs
        VoltMXDataCache * cache = [VoltMXDataCache sharedInstance];
        [cache setCacheWithDictionary: data]; //data is reply from the iPhone
    }
};

- (void) fetchAndUpdateControllerWithRequestID: @“MarkRead”
controller: nil
onCompletion: createLocalCache
cachePolicy: VoltMXDataCachePolicyNoCache
```

### fetchAndUpdateControllerWithRequestID:controller:userInfo:onCompletion:cachePolicy

This API is used to fetch data with given requestID, controller, and userInfo based on the cache policy specified. The parameters are:

*   requestID: This parameter is used to identify a specific request among multiple request made by a watch app from its parent application.
*   controller: It is the object that manages a scene or a section of the scene. Typically, these objects are instances of WKInterfaceController class (manages scenes) or NSObject class (manages table rows).
*   userInfo: This parameter specifies the dictionary that you must to send to the parent (iPhone).
*   onCompletion: This parameter accepts an Objective-C block as an input. The block is invoked after receiving the response from parent application. The callback assumes two parameters:
    
    *   NSError: This parameter accepts an object that contains the error sent by the iPhone application.
    *   data: This parameter is an object that contains data sent by the iPhone.
    
    > **_Note:_** You can pass nil if you do not want to do anything with the fetched data.
    

*   cachePolicy: Specifies the cache policy. For more information on supported cache policies, click [here](#cache-policies).

Example

```
//Let us say we have an ExampleInterfaceController class which extends WKInterfaceController,
ExampleInterfaceController * myController = [
    [ExampleInterfaceController alloc] init
];
NSDictionary * userInfo = [
    [NSDictionary alloc] init
];
[userInfo initWithObjects: @[@"text"] forKeys: @[@"Mail is Deleted"];
void( ^ callback)(NSError * err, id data) = ^ (NSError * err, id data) {
    if (err) {
        NSLog(@"%@", err); //(To check what caused the error)
    } else {
        //do something
    }
};

[util fetchAndUpdateControllerWithRequestID: @"DeleteMail"
    controller: myController
    userInfo: userInfo
    onCompletion: callback
    CachePolicy: VoltMXDataCachePolicyFetchLatest
];
```

Cache Policies
--------------

A cache is an area of local memory in Apple Watch that holds a copy of frequently accessed data. If the caching is not there, then Apple Watch sends the request to iPhone to display the information. Such frequent requests will reduce the performance of your app. The VoltMXWatchKitUtil library has the following cache policies:

*   VoltMXDataCachePolicyOnlyFromLocal: Use this policy to fetch the data from the local cache. If the cache is not available, then the APIs with this cache policy execute a callback block with "noCache" error.
*   VoltMXDataCachePolicyFetchLatest: Use this policy to fetch the latest data from the cache or its parent (iPhone) application. The data received is cached.
    
    > **_Note:_** Fetching the latest information occurs by validating the cacheId that is supplied as part of the request information. It is the responsibility of the parent app to validate the version of the data (cacheId), with the current version of the data available in the parent app. If the validation results in a decision to send the latest information back to the watch app, then the parent app should send the response dictionary in the following format { "hasUpdate":true, "cacheId":<updated CacheId>,"data":<responsedata>}. If the validation results in a decision where there are no updates in the data, then the parent app should send the response dictionary in the following format {"hasUpdate":false}.
    
*   VoltMXDataCachePolicyOnlyFromRemote: Use this policy to fetch the data from its parent (iPhone) application. The data received is cached.
*   VoltMXDataCachePolicyNoCache: Use this policy to fetch the data from its parent (iPhone) application, and the data is not cached.

> **_Note:_** If there is a connection failure between the watch and its parent, then a callback is executed with a connectionFailed error

> **_Note:_** Data is cached based on the requestId passed as a first parameter to these four cache policies. Passing same requestId will overwrite data in the cache.

The following is an example where the cache policy VoltMXDataCachePolicyFetchLatest is used as a parameter. The parent application should validate the cacheId, and the appropriate response is sent back.

```
function onwatchRequestCallBack1(userInfo, replyObj) {

    var date = new Date();
    var testData;
    if (userInfo["datasetId"] === "DeleteMail”) {
            if (userInfo["cacheId"] == currentCacheId) {
                testData = {
                    "data": nil, //optional here since cache in local is valid no need to pass data again
                    "cacheId": userInfo["cacheId”],
                        "hasUpdate”:”false”
                    };

                } else {
                    testData = {
                        "data": {
                            "label": {
                                "text": "BasicWorks"
                            }
                        },
                        "cacheId": date,
                        "hasUpdate": “true”
                    };
                }
            }
            replyObj.executeWithReply(testData);

        }
```
