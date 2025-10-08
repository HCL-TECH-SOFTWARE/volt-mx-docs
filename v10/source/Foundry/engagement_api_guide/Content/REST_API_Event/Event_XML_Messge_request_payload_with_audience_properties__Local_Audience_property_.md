                           

Event XML Message request payload with audience properties
==========================================================

**Event XML Message request payload with audience properties** API provides notifications details sent to the audience members such as, push, email, SMS and pass. Event XML Message request payload with audience properties API uses XML as its communication format.

Use Case
--------

A user needs to get information about a number of push notifications, emails, SMS, or passes sent to an audience member. To get this information, a user sends a request payload through POST method in XML format. The request payload includes the local audience member properties. The generated response includes specific requests IDs for each request such as emailResponse, smsResponse or passResponse.

To retrieve the information for each notification type, a user needs to enter generated Push ID/Mail ID/SMS ID/Pass ID in the respective search fields available under **Message Queue**, **Email Queue**, **SMS Queue**, and **Pass Queue** tabs. These tabs are available under **Miscellaneous>Status** section of Volt MX Foundry Messaging console.

URL
---

The HTTP URL for Event XML Message request payload with audience properties service is:

```
http://<host or ip>:<port>/service/eventpushmessage
```

Method
------

POST

Header
------

The payload's request header includes content-type as text/xml;charset=UTF-8.

Sample Payload
--------------

Payloads are properly formatted xml layouts that contains details about the service requests being created or modified. The following sample payload request includes the audience member properties to receive specific request IDs as response details.

### XML

```
<?xml version='1.0' encoding='UTF-8'?><event><eventid>${event_id}</eventid><eventNamePairs></eventNamePairs><message><audienceMembers><audienceMember property="${property1}" value="${value1}"/><audienceMember property="${property2}" value="${value2}"/></audienceMembers><content><mimeType>text/plain</mimeType><priorityService>false</priorityService></content></message><email><from emailId="test@test.com"/><audienceMembers><audienceMember property="${property1}" value="${value1}"/><audienceMember property="${property2}" value="${value2}"/></audienceMembers><content><priorityService>false</priorityService></content></email><sms><audienceMembers><audienceMember property="${property1}" value="${value1}"/><audienceMember property="${property2}" value="${value2}"/></audienceMembers><content><mimeType>text/plain</mimeType><priorityService>false</priorityService></content></sms><pass><audienceMembers><audienceMember property="${property1}" value="${value1}"/><audienceMember property="${property2}" value="${value2}"/></audienceMembers><passTemplateValues><key name="gate" label="GATE" data="23" /><key name="depart" label="SAN FRANCISCO" data="SFO" /><key name="arrive" label="NEW YORK" data="JFK" /><key name="passenger" label="PASSENGER" data="John Appleseed" /><key name="boardingTime" label="DEPART" data="2:25 PM" /><key name="flightNewkey" label="FLIGHT" data="815" /><key name="class" label="DESIG" data="Coach" /><key name="date" label="DATE" data="7/21" /><key name="passport" label="PASSPORT" data="Canadian/Canadien" /></passTemplateValues></pass></event>
```

Sample Responses
----------------

Each API response is wrapped in a standard payload that contains the results of the API call.The following sample response payload returns request IDs for each request.

### XML

```
<event><messageResponse><code>200</code><description>Request Queued. </description><requestId>7599706892396396547</requestId><messages><message  msgId="7599706892396396548" description="Queued" /></messages></messageResponse><emailResponse><code>200</code><description>Request Queued. </description><requestId>2365628586553189762</requestId></emailResponse><smsResponse><code>200</code><description>Request Queued. </description><requestId>1227058458646255055</requestId></smsResponse><passResponse><code>200</code><description>Request Queued. </description><requestId>4014527877948457928</requestId></passResponse></event>
```

Response Status
---------------

  
| Code | Description |
| --- | --- |
| Status 200 | Details Added successfully |
| Status 400 | Invalid Request Format |
| Status 401 | Unauthorized request. |
| Status 500 | Server Failure to process request. |
