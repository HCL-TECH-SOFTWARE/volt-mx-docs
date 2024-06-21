  

Server Event APIs
=================

Server Events is a capability of the VoltMX Foundry run-time server that lets the back-end services generate and subscribe to events. Server Events are used to receive events asynchronously when the client app does not need to wait for a response. For example, processing a submitted order or invoking an activity that takes a long time.

*   Connection per application is restricted to one.
*   Common Callbacks should be defined only once per connection for avoiding any inconsistency.

The following global callbacks are mandatory in the `setServerEventsCallbacks` API:

*   onEventCallback
*   onFailureCallback

The `client` that is used in the code snippets is the `voltmx.sdk()` object, which can be initialized by using this code: `var client = new voltmx.sdk();`.

setServerEventsCallbacks API
----------------------------

The **setServerEventsCallbacks** API sets the common callback for the Server Events API. The common callbacks are onEventCallback, onFailureCallback, and onCloseCallback.

Make sure this API is being called once per application life cycle as the callbacks are common and re-assigning can cause overriding of the existing callbacks defined. Even if the connection is closed, the callbacks remain in the application life cycle assigned.

### Syntax

```
client.setServerEventsCallbacks(options);
```

### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| setupOptions | JSON | This parameter contains the following options:<br>- <b>onEventCallback</b> (Mandatory): Invoked when the server returns the response for a triggered event and whenever the connection is established for the first time, that is onOpen.<br>- <b>onFailureCallback</b> (Mandatory): Invoked when the server returns an error response.<br>- <b>onCloseCallback</b> (Optional): Invoked when the WebSocket connection is closed.|

### Sample Code

```
setupOptions =
{
	"onEventCallback": function(message)
	{
		//Handle the server event notification
	},

	"onFailureCallback": function(error)
	{
		//Handle the error that occurred
	},

	"onCloseCallback": function(message)
	{
		//Handle the closure of the connection
	}
};
client.setServerEventsCallbacks(setupOptions);

```

subscribeServerEvents API
-------------------------

The **subscribeServerEvents** API opens the WebSocket connection for the first time and sends a subscription message for the specified topics. After subscribing to the topics, the application starts receiving the relevant Server Events messages.

### Syntax

```
client.subscribeServerEvents(topicsToSubscribe, subscribeOptions);
```

### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| topicsToSubscribe | String/Array of Strings | Specifies the topics to be subscribed. |
| subscribeOptions | JSON | This parameter contains the following options:<br>&nbsp;- <b>**subscribeMode**</b> Specifies the type of subscription, which can be **Private** or **Public**. If no value is passed, Private mode is used by default.&nbsp;<br>- <b>onSubscribeCallback</b>: A local callback that is invoked when the server sends a response for the subscription. Specifies whether the connection was successful, and also contains a list of events that were subscribed.<br><br>The onSubscribeCallback is local to the subscribeServerEvents API. If a Network or Server error occurs during subscription, the error is sent to the global onFailureCallback function. As no events are subscribed due to the error, the onSubscribeCallback contains a **No events subscribed** message.<br>If a partial subscribe occurs, the events that are subscribed are listed in the onSubscribeCallback function.|

### Sample Code

```
var topicsToSubscribe = \["service1/operation1", "service1/operation2", "service2/operation1"\];

subscribeOptions =
{
	"subscribeMode": "Private",
	"onSubscribeCallback": function(message)
	{
		//Handle the response from the server
	}
};

client.subscribeServerEvents(topicsToSubscribe, subscribeOptions);

```

unsubscribeServerEvents API
---------------------------

The **unsubscribeServerEvents** API is used to unSubscribe from the Server Events messages for the specified topics.

If [closeConnection](#closeConnection) option is passed as true along with events to be unSubscribed, WebSocket will internally close the connection as all the topics from the server would be unSubscribed automatically.

### Syntax

```
client.unsubscribeServerEvents(topicsToUnsubscribe, unsubscribeOptions);
```

### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| topicsToUnsubscribe | String/Array of Strings | Specifies the topics to be unsubscribed. |
| unsubscribeOptions | JSON | This parameter must contain the following options:<br>&nbsp;- <b>unSubscribeMode</b>: Specifies the type of subscription, which can be <b>Private</b> or <b>Public</b>. If no value is passed, Private mode is used by default.&nbsp;<br>- <b>closeConnection</b>: Specifies whether the existing connection must be closed. The default value of this property is <b>false</b>. To close the existing connection, this property must be <b>true</b>.<br><br>If the connection is closed successfully, the response is sent to the global <b>onCloseCallback</b> function.<br>&nbsp;- <b>onUnsubscribeCallback</b>: A local callback that is invoked when the server sends a response for the removal of subscriptions. Specifies all the events that have been unsubscribed.<br>The onUnsubscribeCallback is local to the unsubscribeServerEvents API. If the closeConnection flag is <b>true</b>, the onUnsubscribeCallback is not invoked, and the server response is sent to the global onCloseCallback function.<br>If a Network or Server error occurs during the removal of subscriptions, the error is sent to the global onFailureCallback function. As no events are unsubscribed due to the error, the onUnsubscribeCallback contains a <b>No events unsubscribed</b> message.<br>If a partial unsubscribe occurs, the events that are unsubscribed are listed in the onUnsubscribeCallback function.|

### Sample Code

```
var topicsToUnsubscribe = \["service1/operation1", "service1/operation2", "service2/operation1"\];
 
 unsubscribeOptions =
 {
 	"unsubscribeMode": "Private",
	"closeConnection": true, //The default value is false. To close the existing connection, this property must be true
 
 	"onUnsubscribeCallback": function(message)
 	{
 		//Handle the response from the server
 	}
 };
 
 client.unsubscribeServerEvents(topicsToUnsubscribe, unsubscribeOptions);

```

Reference: Response Codes
-------------------------

 
| Response Code | Response |
| --- | --- |
| 6201 | Subscribe Success |
| 6202 | Subscribe Error |
| 6203 | Subscribe Partial Success |
| 6207 | Unsubscribe Success |
| 6208 | Unsubscribe Error |
| 6209 | Unsubscribe Partial Success |
| 6210 | On Event |
| 7200 | On Open |
| 7201 | On Error |
| 7202 | On Close |

Notes and Expected Behaviors:
-----------------------------

*   **SSL pinning Support for Server Events:**
    
    SSL pinning is not currently supported for Server Events in any platform.
    
*   **Network failures: When network connectivity goes OFF and WebSocket is still running.**
    
           
    | Platforms | Android | iOS | SPA |
    | --- | --- | --- | --- |
    | Chrome | Firefox | Safari | Edge | IE |
    | --- | --- | --- | --- | --- |
    | Expected Behaviors | Failure callback followed by Close callback. | Failure callback. | Failure callback. | Failure callback followed by Close callback. | Failure callback followed by Close callback. | Failure callback. | Failure callback followed by Close callback. |
    
    For network connectivity related issues, Re-Subscribing to the existing topics will establish the connection again if closed internally.
    

Frequently Asked Questions
--------------------------

*   Can I subscribe to a topic more than once?
    
    Yes, you can subscribe to events for a topic multiple times. The events will be notified each time an application has subscribed to that topic.
    
*   Can I unsubscribe from a partial list of topics?
    
    Yes, you can unsubscribe from a partial list of topics.
    
*   Can I use different callbacks for every subscription?
    
    Currently, the API maintains only one callback and the events for all topics will be notified through the same callback. When a different callback is passed with another subscription, all the events will start invoking the latest callback provided in the subscription.
    

Limitations
-----------

*   There is no support to reconnect to a topic if a connection fails or if the client app crashes. Therefore, the app will not receive notifications when an event is invoked.
*   If the connection fails or if the app crashes, you need to use the [subscribeServerEvents API](#subscribeserverevents-api) to establish a connection with the WebSocket. Make sure that you call the API when the app is re-launched.
