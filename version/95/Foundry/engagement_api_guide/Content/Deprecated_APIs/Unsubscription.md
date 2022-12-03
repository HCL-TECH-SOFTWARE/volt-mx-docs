
# Unsubscription

The Unsubscription API is used to send unsubscription request from the device. You can unsubscribe a device either through the ksid or with a combination of appId and deviceId.

> **_Important:_** The Subscription API is maintained here to preserve backward compatibility. We encourage you to use [Delete Subscriber](../REST_API_Subscribers/Delete_Subscriber.md)

## URL

The HTTP URL for Unsubscription API is:

```
http://<host or ip>:<port>/vpns/subscription
```

## Method

POST

## Content Type

Based on the content format, the payload's request header includes "Content-Type" for:

- **XML** is text/xml;charset=UTF-8
- **JSON** is application/json;charset=UTF-8

## Sample Request

### XML

```
<?xml version='1.0' encoding='UTF-8'?>
<subscriptionService>
<unsubscribe>
<ksid>xxx</ksid>
<appId>xxxxx</appId>
<deviceId>xxxx</deviceId>
<!-- enable authToken if you want to enable security -->
<authToken>xxxx</authToken>
</unsubscribe>
</subscriptionService>
```

### JSON

```
 {
"subscriptionService": {
"unsubscribe": {
"appId": "xxxxx",
//Enable authToken if you want to enable security  
       "authToken": "xxxx",
"ksid": "xxxx",
"deviceId": "xxxx"
}
}
}
```

## Input Parameters

The following fields are input parameters:

| Parameter | Required                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ksid      | Mandatory                                                                             | ksid of the subscriber for de-registering for the pushes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| appId     | Mandatory                                                                             | App ID configured in VMS for your App.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| deviceId  | Mandatory                                                                             | This is the device ID used for sending the pushes to the device. For iOS devices, this value is same as sid. For other devices use Volt MX JavaScript API (voltmx.os.deviceInfo().deviceid) to get these details from app.For BlackBerry, the returned device ID is in hex decimal format and BlackBerry accepts pushes for the values by omitting first two characters from the device ID. You must send device ID by omitting the first two characters. For example, Device ID returned from BlackBerry device is 0x2b631c8d, but the device ID to be sent to Volt MX Foundry Engagement Services (or in fact to send pushes to BlackBerry devices) must be 2b631c8d |
| authToken | Mandatory if security is enabled for Volt MX Foundry Engagement Servicessubscription. | This value ensures, if the subscription request is from a valid source. The validity of the subscription request is ensured by matching auth token value provided in subscription service with the value configured in the Volt MX Foundry Engagement Services. This value is configured in Volt MX Foundry Engagement Services using basic details API or from Settings section from Console "Auth token for subscription API".                                                                                                                                                                                                                                       |

## Sample Responses

### XML

```
1\. Unsubscription Success Reponse:

<subscriptionResponse>
    <statusCode>200</statusCode>
    <ksid>xxxx</ksid>
    <message>Unsubscription successful. </message>
</subscriptionResponse>

2. If already unsubscribed:

<subscriptionResponse>
    <statusCode>200</statusCode>
    <ksid>xxxx</ksid>
    <message>Already unsubscribed. </message>
</subscriptionResponse>

3. If Application ID is Invalid:

<subscriptionResponse>
    <statusCode>404</statusCode>
    <ksid>-1</ksid>
    <message>Invalid Volt MX Application ID. </message>
</subscriptionResponse>

4. If Request is invalid:

<subscriptionResponse>
    <statusCode>400</statusCode>
    <ksid>-1</ksid>
    <message>Invalid request format.  </message>
</subscriptionResponse>

5. If Authentical Token is invalid:

<subscriptionResponse>
    <statusCode>401</statusCode>
    <ksid>-1</ksid>
    <message>Unauthorized request. The authToken is invalid.   </message>
</subscriptionResponse>

6. If subscription is unclear:

<subscriptionResponse>
    <statusCode>403</statusCode>
    <ksid>-1</ksid>
    <message>Subscription unclear. Found multiple subscriptions with given input. Check your SID and DEVICE ID</message>
</subscriptionResponse>

7. Server Error:

<subscriptionResponse>
    <statusCode>500</statusCode>
    <ksid>-1</ksid>
    <message>Server failed to process the request. </message>
</subscriptionResponse>
```

### JSON

```
1.UnsubscriptionSuccessReponse: {
"subscriptionResponse": {
"statusCode": "200",
"ksid": "xxxx",
"message": "Unsubscription successful. "
}
}  
2.Ifalreadyunsubscribed: {
"subscriptionResponse": {
"statusCode": "200",
"ksid": "xxxx",
"message": "Already unsubscribed. "
}
}  
3.IfApplicationIdisInvalid: {
"subscriptionResponse": {
"statusCode": "404",
"ksid": "-1",
"message": "Invalid Volt MX Application ID. "
}
}  
4.IfRequestisinvalid: {
"subscriptionResponse": {
"statusCode": "400",
"ksid": "-1",
"message": "Invalid request format. "
}
}  
5.IfAuthenticalTokenisinvalid: {
"subscriptionResponse": {
"statusCode": "401",
"ksid": "-1",
"message": "Unauthorized request. The authToken is invalid. "
}
}  
6.Ifsubscriptionisunclear: {
"subscriptionResponse": {
"statusCode": "403",
"ksid": "-1",
"message": "Subscription unclear. Found multiple subscriptions with given input. Check your SID and DEVICE ID"
}
}  
7.ServerError: {
"subscriptionResponse": {
"statusCode": "500",
"ksid": "-1",
"message": "Server failed to process the request. "
}
}
```

## Response Status

| Code | Description                          |
| ---- | ------------------------------------ |
| 200  | Unsubscription successful            |
| 200  | Already unsubscribed                 |
| 400  | Invalid request format               |
| 404  | Invalid Volt MX Application ID       |
| 404  | No valid subscription exists.        |
| 500  | Server failed to process the request |
