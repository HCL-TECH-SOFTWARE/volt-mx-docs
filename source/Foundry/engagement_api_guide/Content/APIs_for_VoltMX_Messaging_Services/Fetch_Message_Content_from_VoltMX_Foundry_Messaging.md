
# Fetch Message Content from Volt MX Foundry Engagement Services

The **Fetch Message Content from Volt MX Foundry Engagement Services** API is used to get message content from the Volt MX Foundry Engagement server.

For example, Apple delivers messages that are limited to 256 characters only. In order to view detailed messages, user has to send a request included pushId to Volt MX Foundry Engagement Services.

> **_Important:_** The Fetch Message Content from Volt MX Foundry Engagement Services API is maintained here to preserve backward compatibility.  
> We encourage you to use [Fetch Message Content from Volt MX Foundry Engagement Services](../Push_Message_APIs/Fetch_Message_Content_from_VoltMX_Foundry_Messaging.md)

## **URL**

The HTTP URL for Fetch Message Content from Volt MX Foundry Engagement Services API is:

```
http://<host or ip>:<port>/service/entrydata/content/$pushId

```

## Method

POST

## Input Parameters

PushID is appended at the end of the URL.

## Response Code

Success response code is _200._
