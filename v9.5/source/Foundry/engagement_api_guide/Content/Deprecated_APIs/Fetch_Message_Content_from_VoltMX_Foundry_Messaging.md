                          

Fetch Message Content from Volt MX Foundry Messaging
===================================================

This API is used to get message content from the Volt MX Foundry Messaging server.

For example, Apple delivers messages that are limited to 256 characters only. In order to view detailed messages, user has to send a request included pushId to Volt MX Foundry Messaging.

> **_Important:_** The Fetch Message Content from Volt MX Foundry Messaging API is maintained here to preserve backward compatibility. We encourage you to use Fetch Message Content from Volt MX Foundry Messaging

**Request URL**
---------------

<pre><code>http://&lt;host or ip&gt;:&lt;port&gt;/service/entrydata/content/$pushId</code></pre>



Request Method
--------------

HTTP POST

Input Parameters
----------------

PushID is appended at the end of the URL.

Response Code
-------------

Success response code is "_200_".
