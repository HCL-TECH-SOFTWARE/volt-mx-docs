
# Cancel Scheduled Messages from Volt MX Foundry Engagement Services

The **Cancel Scheduled Messages from Volt MX Foundry Engagement Services** API is used to cancel the scheduled messages from Volt MX Foundry Engagement Services.

> **_Note:_** The Cancel Scheduled Messages from Volt MX Foundry Engagement Services API is maintained here to preserve backward compatibility.  
> We encourage you to use :  
> [Cancel Scheduled Messages from Volt MX Foundry Engagement Services API](../Push_Message_APIs/Cancel_Scheduled_Messages_from_VoltMX_Foundry_Messaging.md)

## URL

The HTTP URL for Cancel Scheduled Messages from Volt MX Foundry Engagement Services API is:

```
http://<host or ip>:<port>/service/entrydata/cancelmessage/$requestID
```

## Method

HTTP GET / HTTP POST

## Input Parameters

| Input Parameter | Type   | Description                                                                                                            |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| Request ID      | String | Request ID is appended at the end of the URL. Use the Request ID which was generated as part of push message response. |

## Response Status

| Code | Description                                                                        |
| ---- | ---------------------------------------------------------------------------------- |
| 200  | Cancelled ${no. of messages} message entries of the message with ID : ${requestID} |
| 400  | Invalid request ID                                                                 |
| 400  | No cancellable messages found                                                      |
