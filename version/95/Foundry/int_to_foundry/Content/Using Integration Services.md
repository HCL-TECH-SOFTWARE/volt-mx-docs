 

Using Integration Services
==========================

In this module, we will walk you thru creating your first VoltMX Foundry application. At the end of this module, you will understand how to use VoltMX Foundry to connect with backend APIs.

This learning course help you build a **News and Weather** application. To get a head start, you can get the Frontend Iris application from the **VoltMX Git Repository**.

We will go thru the below milestones in the course of this module:

![](Resources/Images/IntroImageofUIS.png)

Creating your first VoltMX Foundry Application
-------------------------------------------

Now let’s get started with your first VoltMX Foundry application!

An application in VoltMX Foundry terms lets you logically group all your services and backend features under a single umbrella. Your VoltMX Foundry cloud can host multiple applications. Each application contains a group of services, and each service contains a group of operations. A service definition contains an Endpoint URL and additional parameters defining the connection. The operations created on top of this service pertain to each individual method available at the endpoint host.

![](Resources/Images/mobilefoundry_application_flow.png)

Services can also be created without being linked to an Application thru the API Management tab.

Connecting to your REST API
---------------------------

Connecting to your backend API via VoltMX Foundry is easy. You will need to define an Integration service, create a new service under **Configure Services** > **Integration**. Integration services let us configure a service to connect to a REST endpoint.

![](Resources/Images/CTYRAPI.png)

VoltMX supports connecting to a multitude of service types. For this module, we will showcase creating XML services.

The first thing you need, is to get your backend APIs in place. We are trying to build an application for showing News and Weather for a selected City. We will use Google News ([https://news.google.com/](https://news.google.com/)) and Weather services hosted on weather.gov ([https://graphical.weather.gov](https://graphical.weather.gov/)). Take note of the specification below :

### Google News API

 
| **Service Type** | **XML** |
| --- | --- |
| Base URL | https://news.google.com/news/section?output=rss |
| **URL Parameters** |
| topic | Accepts the Google News topic code to limit the news results for that category. Example Topic codes: World (w), US (n), Business (b), Technology (tc), Entertainment (e), Sports (s), Science (snc), Health (m) |
| q | Accepts one parameter and submits that to Google News as the query parameter to filter the news results. This is used to limit the results to a specific City or any search term sent as an input parameter. |
| Detailed specifications | [https://productforums.google.com/forum/#!topic/news/CwDLdEfUwSk](https://productforums.google.com/forum#!topic/news/CwDLdEfUwSk) |

The video familiarizes you with creating VoltMX Integration service with the above mentioned specifications. We recommend you to create a sample service based on this video to have a real-time experience of VoltMX Foundry services.

For more information, refer to [Integration Services](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Services.html#top).
