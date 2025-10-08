voltmx.listener Namespace
=========================

The Volt MX Listener API contains the voltmx.listener Namespace and the following API elements:

Functions
---------

The voltmx.listener namespace provides the following functions:

voltmx.listener.broadcast

* * *

The broadcast method is used to send (broadcast) data to the specified events.

Syntax

voltmx.listener.broadcast(&lt;event_name>,payload);

Input Parameters

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 35%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 65%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">&lt;event_name&gt;</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The name of the event to which the data must be broadcast</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">payload</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The data that must be broadcast.</td></tr></tbody></table>

 

Example

```
voltmx.listener.broadcast('broadcast_event',payload);
```

Return Value

None

Remarks

When you broadcast data to an event, the callback functions of all the subscriptions of the event are invoked with the specified scopes, and the data is passed in the payload parameter.

Platform Availability

Adaptive Web (Mobile Web/SPA)

voltmx.listener.create

* * *

The create method is used to create an event.

Syntax

voltmx.listener.create(&lt;event_name>);

Input Parameters

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 35%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 65%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">&lt;event_name&gt;</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The name of the event to be created.</td></tr></tbody></table>

 

Example

```
voltmx.listener.create('new_event');
```

Return Value

None

Platform Availability

Adaptive Web (Mobile Web/SPA)

voltmx.listener.destroy

* * *

The destroy method is used to destroy the specified event. When you invoke the destroy method, all the subscriptions (if there are any) of the event are also automatically unsubscribed.

Syntax

voltmx.listener.destroy(&lt;event_name>);

Input Parameters

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 35%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 65%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">&lt;event_name&gt;</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The name of the event to be destroyed.</td></tr></tbody></table>

 

Example

```
voltmx.listener.destroy('event1');
```

Return Value

None

Platform Availability

Adaptive Web (Mobile Web/SPA)

voltmx.listener.subscribe

* * *

The subscribe method is used to subscribe to the specified event.

Syntax

voltmx.listener.subscribe(&lt;event_name>,function(payload){}, scope);

Input Parameters

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 35%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 65%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">&lt;event_name&gt;</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The name of the event to which a subscription must be obtained.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">function</td><td class="TableStyle-Basic-BodyD-Column1-Body1">A callback function that that is executed when the event is broadcast. The function consists of a payload parameter that contains the data that is broadcast.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">scope</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The scope that needs to be used to invoke the callback function.</td></tr></tbody></table>

 

Example

```
var id = voltmx.listener.subscribe('subscribe_event',function(payload){}, scope);
```

Return Value

SubscriptionID - A unique string that identifies a successful subscription.

Platform Availability

Adaptive Web (Mobile Web/SPA)

voltmx.listener.unsubscribe

* * *

The unsubscribe method is used to stop receiving updates (unsubscribe) from the specified subscriptions.

Syntax

voltmx.listener.unsubscribe(subscriptionID);

Input Parameters

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 35%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 65%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">subscriptionID</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The Subscription ID of the event that is generated and returned by the voltmx.listener.subscribe API.</td></tr></tbody></table>

 

Example

```
voltmx.listener.unsubscribe(subscriptionID);
```

Return Value

None

Platform Availability

Adaptive Web (Mobile Web/SPA)
