
Event
=====

The HttpRequest object contains the following event.

<details close markdown="block"><summary>onReadyStateChange Event</summary> 

* * *

Specifies a callback function that is invoked when there is a change in the state of the [readyState](httprequestobject_properties.md#readyState) property.

### Syntax

```

onReadyStateChange()
```

### Parameters

None.

### Return Values

None.

### Remarks

Your app can set this event to a function that performs custom processing whenever there is is a change of state in the HttpRequest object.

### Example

```

var request = new voltmx.new.HttpRequest();
request.onReadyStateChange = callbackfunction;
```

* * *

![](resources/prettify/onload.png)
</details>