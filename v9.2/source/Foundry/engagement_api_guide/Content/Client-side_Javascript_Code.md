
You are here: Creating a New Subscriber

# Volt MX Client-side JavaScript Functions

This section describes functions defined in JavaScript to perform various client-side tasks. You can perform following tasks:

- [Creating a New Subscriber](#creating-a-new-subscriber)
- [Deactivating a Subscriber](#unsubscribing-a-device)
- [Creating a User with KSID](#creating-a-user-with-ksid)
- [Updating Geo-location of a Device](#updating-geo-location-of-a-device)
- [Updating Beacon details of a Device](#updating-beacon-details-of-a-device)
- [Fetching the list of Push Messages](#fetching-the-list-of-push-messages)
- [Fetching Full Content of a Push Message](#fetching-full-content-of-a-push-message)

## Creating a New Subscriber

The subscribeToEngagementServices() function takes sid, appId, ufid, osType, deviceId and deviceName as input parameters to create a new subscriber.

You can use the below sample code snippet to subscribe a device to Engagement Services using Iris.

```
function subscribeToEngagementServices() {
var jsonBody = {
"subscriptionService": {
"subscribe": {
"sid": "subscription_token_from_the_cloud",
"appId": "testApp",
"ufid": "your_user_friendly_id",
"osType": "androidgcm",
"deviceId": "device_id",
"deviceName": "John's Nexus"
}
}
};
var myHttpHeaders = {
"Content-Type": "application/json;charset=UTF-8",
"X-Device-AuthToken": "your_auth_token_if_set"
};
var paramTab = {
postdata: JSON.stringify(jsonBody),
httpheaders: myHttpHeaders
};
var url = engagementServicesURL + "/api/v1/subscribers";
voltmx.net.invokeServiceAsync(url, paramTab, EngagementServicesSubCallback);
}
function EngagementServicesSubCallback(status, result) {
if (status == 400) {
if (result.httpresponse.responsecode == 200) {
var ksid = result.id;
alert("Device is now subscribed to Engagement Services. KSID: " + ksid);
} else
alert("Failed to subscribe to Engagement Services");
}
}
```

## Unsubscribing a Device

The unsubscribeFromEngagementServices() function takes ksid of a device as an input parameter to unsubscribe a device.

You can use the below sample code snippet to unsubscribe a device from Engagement Server using Iris.

```
function unsubscribeFromEngagementServices() {
var jsonBody = {
"subscriptionService": {
"unsubscribe": {
"ksid": "ksid_of_device"
}
}
};
var myHttpHeaders = {
"Content-Type": "application/json;charset=UTF-8",
"X-Device-AuthToken": "your_auth_token_if_set"
};
var paramTab = {
postdata: JSON.stringify(jsonBody),
httpheaders: myHttpHeaders
};
var url = engagementServicesURL + "/api/v1/subscribers";
voltmx.net.invokeServiceAsync(url, paramTab, EngagementServicesUnsubCallback);
}
function EngagementServicesUnsubCallback(status, result) {
if (status == 400)
alert("Device has been unsubscribed from Engagement Services");
else
alert("Failed to unsubscribe the device from Engagement Services!");
}
```

## Creating a User with KSID

The createUserForDevice() function takes firstName, lastName , email, mobileNumber, country, and state, emailSubscription, and smsSubscription as input parameters to add a new user in Engagement Services.

You can use the below sample code snippet to create a user along with KSID in Engagement Server using Iris.

```
function createUserForDevice() {
var firstName = "John";
var lastName = "Doe";
var email = "email@email.com";
var mobileNumber = "+1123456789";
var country = "United States";
var state = "California";
var emailSubscription = true;
var smsSubscription = true;
var jsonBody = {
"ksid": ksid,
"firstName": firstName,
"lastName": lastName,
"email": email,
"mobileNumber": mobileNumber,
"country": country,
"state": state,
"emailSubscription": emailSubscription,
"smsSubscription": smsSubscription
};
var myHttpHeaders = {
"Content-Type": "application/json;charset=UTF-8",
"X-Device-AuthToken": "your_auth_token_if_set"
};
var paramTab = {
postdata: JSON.stringify(jsonBody),
httpheaders: myHttpHeaders
};
var url = engagementServicesURL + "/api/v1/subscribeaudience";
voltmx.net.invokeServiceAsync(url, paramTab, EngagementServicesSubAudCallback);
}
function EngagementServicesSubAudCallback(status, result) {

if (status == 400) {
var id = result.id;
alert("User created for the device with registration id: " + id);
} else
alert("User creation failed!");
}
```

## Updating Geo-location of a Device

The sendGeoLoction() function is used to update the approximate position of the device based on inputs such as ksid, latitude, longitude and locname.

You can use the below sample code snippet to update geo-location of a device in Engagement Server using Iris.

```
function sendGeoLoction() {
var lati = position.coords.latitude;
var longi = position.coords.longitude;
var locname = "Hyderabad";
var jsonBody = {
"ksid": "ksid_of_device",
"latitude": lati,
"locname": locname,
"longitude": longi
};
var myHttpHeaders = {
"Content-Type": "application/json;charset=UTF-8",
"X-Device-AuthToken": "your_auth_token_if_set"
};
var paramTab = {
postdata: JSON.stringify(jsonBody),
httpheaders: myHttpHeaders
};
var url = engagementServicesURL + "/api/v1/location";
voltmx.net.invokeServiceAsync(url, paramTab, geoRegCallback);
}
function geoRegCallback(status, result) {
if (status == 400) {
if (result.httpresponse.responsecode == 200)
alert("Geolocation updated to Engagement Services");
else
alert("Failed to Update Geolocation to Engagement Services");
}
}
```

## Updating Beacon details of a Device

The iBeaconUpdate() function takes ksid, and beacons array (uuid, major, and minor) as input parameters and updates the list of beacons for a device.

You can use the below sample code snippet to update beacon details of a device in Engagement Server using Iris.

```
function iBeaconUpdate() {
var jsonBody = {
"ksid": ksid,
"beacons": {
"beacon": {
"uuid": "uuid",
"major": "major",
"minor": "minor"
}
}
};
var myHttpHeaders = {
"Content-Type": "application/json;charset=UTF-8",
"X-Device-AuthToken": "your_auth_token_if_set"
};
var paramTab = {
postdata: JSON.stringify(jsonBody),
httpheaders: myHttpHeaders
};
var url = engagementServicesURL + "/api/v1/beaconupdate";
voltmx.net.invokeServiceAsync(url, paramTab, beaconUpCallback);
}
function beaconUpCallback(status, result) {
if (status == 400)
alert("Beacon updated successfully");
else
alert("Failed to Update beacon");
}
```

## Fetching the list of Push Messages

The fetchMessages() function accepts following parameters to fetch the list of push messages:

- ufid, appid, start and elementsPerPage
- deviceId, appId, start and elementsPerPage
- ksid, start and elementsPerPage

You can use the below sample code snippet to fetch the list of push messages of a particular device based on some input parameters using Iris.

```
function fetchMessages() {
var start = 0;
var perpage = 100;
var jsonBody = {
"ufid": "your_ufid",
"appId": "testApp",
"startElement": start,
"elementsPerPage": perpage
};
var url = engagementServicesURL + "/api/v1/messages/fetch";
var request = new voltmx.net.HttpRequest();
request.onReadyStateChange = fetchMessagesSucessCalllback;
request.open(constants.HTTP_METHOD_POST, url, true);
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.setRequestHeader("X-Device-AuthToken", "your_auth_token_if_set");
request.send(jsonBody);
}
function fetchMessagesSucessCalllback() {
if (this.readyState == constants.HTTP_READY_STATE_DONE) {
var fetchMsgs = this.response;
if (this.status == 200) {
alert("Fetched All Messages!")
} else {
alert("Error fetching push records.");
}
}
}
```

## Fetching Full Content of a Push Message

The fecthFullMessageContent()function accepts fetchID as input parameter and fetches message content from Volt MX Foundry Engagement server.

You can use the below sample code snippet to fetch the content of a message using Iris.

```
function fecthFullMessageContent() {
var url = engagementServicesURL + "/api/v1/messages/content/" + "fetchID_of_message";
var myhttpheaders = {
"X-Device-AuthToken": "your_auth_token_if_set"
};
var paramTab = {
httpheaders: myhttpheaders
};
voltmx.net.invokeServiceAsync(url, paramTab, fetchMsgSuccessCallback);
}
function fetchMsgSuccessCallback(status, result) {
if (status == 400) {
alert("Full content: " + result.content)
} else {
alert("error fecthing message")
}
}
```
