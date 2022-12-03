  

Overview
========

The document highlights the News and Weather back-end services that come installed with a new VoltMX Foundry instance. VoltMX Foundry is VoltMX’s open standards, mobile back end as a service (MBaaS) offering allowing developers to quickly expose key mobile services and enterprise services. The mobile applications invoking these MBaaS services can be built using Cordova, Native iOS, Native Android, JavaScript, VoltMX Studio, and other platforms.

![](Resources/Images/FoundryServices(News&Weather)/Contents.png)

Figure 1: Overview of VoltMX Foundry

Figure 1 above provides an overall architecture of VoltMX Foundry, including the integration and orchestration services that are available for the applications to connect to VoltMX Foundry.  The News and Weather application uses the integration and the orchestration services that provide the back-end data that will be displayed in the front-end application.

The News and Weather App also uses Google’s REST- based service for news and CDYNE’s SOAP service for weather information. These services of Google and CDYNE do return additional data than needed by the front-end application and hence are not optimized for a mobile device. They also use two separate protocols (REST and SOAP) to convey information from their services. In the case of a mobile app, it’s ideal to send back a concise response that reduces bandwidth needs. In this lab, VoltMX Foundry will be used to expose these services to the news and weather app as mobile optimized, REST based services that are easily ingested by a mobile client application.

Audience
--------

This manual is intended for developers who use VoltMX Foundry to build, integrate, and deploy mobile applications across multiple channels, including iOS native, Android native, Windows, Blackberry, mobile web and Desktop Web. Developers should be familiar with JavaScript.

Overview of the News and Weather Application
--------------------------------------------

The News and Weather application uses three integration services and one orchestration service that are set up and configured in VoltMX Foundry. The integration services display the op stories, US news, world news and more.

The orchestration service displays the local news along with weather forecast information in the client application. Instead of the mobile app making all three service calls and the developer managing the both XML/REST and SOAP based responses, the app will make a single call to VoltMX Foundry. VoltMX Foundry will invoke each of the requests to these services and return a single, concise JSON response back to the app. VoltMX Foundry handles the complexity of converting the responses, and the end developer doesn’t need to orchestrate the calls within his or her code.

Below is a quick overview of the **News and Weather** application:

1.  The client application invokes the **LocalNewsWeather** operation of the **NewsAndWeather** orchestration service providing the latitude and longitude of a city. The **NewsAndWeather** service invokes the REST service of openstreetmap.com to retrieve the city name and ZIP code.
2.  The **LocalNewsWeather** operation then invokes the **CompositeNewsWeather** operation of the NewsAndWeather service using the city name and the ZIP code.
3.  The **CompositeNewsWeather** service invokes the news.google.com’s XML/REST service in the back end with the city name to retrieve the news of the city. The CompositeNewsWeather service also invokes the wsf.cdyne.com SOAP service to retrieve the current weather and forecast using the city’s zip code.
4.  The **NewsAndWeather** service combines the responses from the LocalNewsWeather and CompositeNewsWeather services and returns a concise response to the invoking service.

![](Resources/Images/FoundryServices(News&Weather)/Contents_1.png)

Prerequisites
-------------

*   You have access to a VoltMX Foundry server that has a sample News And Weather application installed.  If you do not have access to VoltMX Foundry, sign up for a 90 day trial at [http://www.voltmx.com/products/voltmxfoundry/trial](http://www.voltmx.com/products/voltmxfoundry/trial).

VoltMX Foundry Console
-------------------

In this section, we will walk you through the integration and orchestration services that are set up in VoltMX Foundry for the NewsAndWeather application.

**Log in to VoltMX Foundry**

*   Navigate to the URL for VoltMX Foundry sent to you in your email after you registered for the VoltMX Foundry. Click on the URL, and the VoltMX Foundry log-in screen for your cloud appears. To log in to the console, type in the username and password for VoltMX Foundry that was provided in the email.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_2.png)
    

Applications

Once you log in to VoltMX Foundry, the application screen appears as shown below.

![](Resources/Images/FoundryServices(News&Weather)/Contents_28.png)

Click on the **Apps** icon that is shown below to see the list of all applications that are currently installed in VoltMX Foundry.

![](Resources/Images/FoundryServices(News&Weather)/Contents_3.png)

The screen shows the icon of News Weather Sample application that is configured in Amazon Web Services (AWS) of VoltMX Foundry. An application also has an associated configuration. The APIs and configuration information are used to deploy your application to a run-time environment and provide the SDK information you will need to connect your client app to VoltMX Foundry.

![](Resources/Images/FoundryServices(News&Weather)/Contents_4.png)

*   Click the News Weather Sample to review the services that will be used in the client application.

VoltMX Foundry Integration Services
--------------------------------

After you click on the **News Weather Sample** icon, six tabs that you can configure appear in the console. They are identity, integration, orchestration, objects, synchronization and messaging. This section will focus on the following tabs:

*   The Identity tab helps you configure identity providers such as Active Directory, OAuth, SAP and other as identities that can quickly map to each of your orchestrations and integrations.
*   The Integration tab allows you to configure back-end services as mobile optimized services.
*   The Orchestration service helps you combine integration services into a single service. An orchestration service reduces the need to make multiple calls from the mobile application that slow the performance of the mobile application. 
    *   This lab focuses on the Identity and Integration tabs, and the Orchestration service.  You will see how easy it is to expose a SOAP service and other services as mobile friendly RESTful services using the Integration tab. Let's explore the News Service inside VoltMX Foundry.

**XML News Integration Service**

The News Integration service is an XML- based service that is defined in the VoltMX Foundry. This service retrieves the news for a category like world news, US news etc. The News Integration service also returns the local news given an input zip code. Details of this service are discussed below.

Integration Services in VoltMX Foundry

The figure below shows the integration services of the News And Weather application.

![](Resources/Images/FoundryServices(News&Weather)/Contents_5.png)

Click on the integration tab (No. 1 in the above figure) to view all the integration services that are set up in VoltMX Foundry.  
The News Weather Sample App uses three integration services for delivering data to the end user. You can expand each service in the left hand navigation bar or click on a service in the center of the screen to explore the service.

Click on  **News** (No. 2) to look at the service definition and the operations list of the service.

XML News Service

![](Resources/Images/FoundryServices(News&Weather)/Contents_6.png)

1.  Click on Service Definition (No. 3 in the figure above) tab to see all the details of the service. VoltMX Foundry supports multiple service types including, SOAP, XML, JSON, SAP, and others. In the Service Type drop-down list, you can see that the back- end service is an XML service. We also set the base URL of the service on the “Service Definition” screen. The base URL describes the URL we will use to connect to the operations. Each call to an operation is based off the base URL.  
2.  Click on the Operations List tab (No.4 in the figure above) to see all the operations of the News service.

News Service Operations

The news service has three operations: GetNews, GetNewsForCategory, and Locations. Click the Configure Operation button (No. 5 in the figure below) to add an operation.

![](Resources/Images/FoundryServices(News&Weather)/Contents_7.png)

*   Click GetNews (No. 6 in the figure) to look at the details of the operation.

The Get News Operation Overview

The GetNews operation retrieves the top stories from the Google News service, by default. Notice that the target URL (shown as 7 in the figure below) for the GetNews operation starts with the base URL for the service. If we want to add additional parameters, we can add them in the suffix section.

![](Resources/Images/FoundryServices(News&Weather)/Contents_8.png)

The GetNews Operation Request Input

Here is an enlarged screen shot of the request input section. We can tailor our request using the request input parameters. In this case, we do not need to send any additional parameters to the service. If the request was a POST, we can also leverage the Request Template to sent JSON objects to the service.

![](Resources/Images/FoundryServices(News&Weather)/Contents_9.png)

Click **Fetch Response** (shown as 8 in figure above) to test this operation.  This will cause the service to return the **Top Stories** of the current news and will see in the response section of the screen.

The GetNews Response

When you click the **Fetch Response** button, VoltMX Foundry returns the raw result back into the console. This allows you to quickly test the basic connectivity of your service. The response returns a lot of data that is not used by the front-end application. For performance reasons, you don’t want to return data that is not needed over a mobile connection. Instead, the **GetNews** operation returns a mobile optimized response with the data that is exactly needed by the mobile application.

![](Resources/Images/FoundryServices(News&Weather)/Contents_10.png)

Click on the **Response Output** (shown as 9 in figure above) tab.

Creating a Custom Response for GetNews

VoltMX Foundry uses xPath to parse a response returned by a service and such parsed data is given a meaningful variable name in the response. The **GetNews** operation returns a collection of news items. This means that multiple records can be returned for a call to the service. The news\_lists defines the complete list of records, and each record is returned as a news item. Next we will look at how we return the concise set of data to the mobile application.

![](Resources/Images/FoundryServices(News&Weather)/Contents_11.png)

Click on **Test** (shown as 10 in figure above) to create the custom response.

Reviewing the Output Results of GetNews

You can see the response from our tailored output is much small and more concise than the original back end response returned by the invoked back-end services. The mobile optimized response returns a collection of records that we defined in the request output tab.

![](Resources/Images/FoundryServices(News&Weather)/Contents_12.png)

The GetNewsForCategory Operation

The GetNews operation showed a basic call without passing parameters into the back end service and parsing the response to a mobile optimized format. The GetNewsForCategory operation builds on the concepts you learned form the first operation by not only creating a mobile optimized response, but it demonstrates how to set requests variables as parameters for the GET operation.

![](Resources/Images/FoundryServices(News&Weather)/Contents_13.png)

The GetNewsForCategory Operation Overview

The **GetNewsForCategory** operation returns the news of a defined category like world news, US news etc. This operation invokes Google’s REST service in the back-end.

The REST service of Google also expects a variable “topic” to be passed with a news category value passed so that the correct news like local or world can be returned. Hence “topic =$category” is added to the “Target URL” (shown as 2 in figure below). Also, the parameter is added as an input field in the Request input section of the operation as shown in the screen shot below. This maps the category parameter to the target URL allowing the developer to send a category in as a part of the request.

![](Resources/Images/FoundryServices(News&Weather)/Contents_14.png)

There is already a test value of “w” set within the console. If you fetch a response, the test value of “w” will be substituted for the “topic =$category” and will invoke the Google’s backend service to fetch the world news.

Click the **Fetch Response** ( shown as 3 in figure above) button at the bottom right of the page.

The getNewsForCategory Response

The world news that is returned will be seen in the response section of the screen.

The “Back end Response” section below shows the “Raw” response that is returned by the service. Please note that the response returns a lot of data that is not used by the front end application. The VoltMX Foundry then applies XPath transformations to retrieve the data that is needed by the client application.

![](Resources/Images/FoundryServices(News&Weather)/Contents_15.png)

Creating a Custom Response for GetNewsForCategory

This section discusses the details of how the response that is returned by the Google’s backend service is processed by VoltMX Foundry’s “GetNewsForCategory” service.

As with the previous operation, VoltMX Foundry uses xPath to process the response returned by the Google backend service. The “GetNewsForCategory” operation returns a collection of news items. This means that multiple records can be returned for a call to the service. The news\_lists defines the complete list of records, and each record is returned as a news item. The advantage is that you only need to return the items you need for the mobile app instead of returning the entire response from the original services. Lets look at how much more concise our response is.

Click on “Test” (shown as 4 in figure below) to create the custom response.

![](Resources/Images/FoundryServices(News&Weather)/Contents_16.png)

Reviewing the Output Results of GetNewsForCategory

You can see the response from our tailored output is much small and more concise than our original back end response. You can also see that our response sends back a collection of records that we defined in the request output tab. This ensures that only the data that is needed by the mobile application is provided.

![](Resources/Images/FoundryServices(News&Weather)/Contents_17.png)

The News Weather Sample app also exposes a SOAP based Weather service and an additional XML based LocationLookup service. These services follow similar patterns to GetNews service and operations. If you want to get familiar with the services before proceeding, then feel free to explore these services. If you need to get back to the application screen to reorient yourself, use the apps icon in the left hand navigation pictured below.

![](Resources/Images/FoundryServices(News&Weather)/Contents_3.png)

In the next section of the document, we will cover the orchestration service that will tie these services together so that the invoking client application can invoke a single operation to retrieve the data.

VoltMX Foundry Orchestration Services
----------------------------------

The News & Weather application of this manual uses a single orchestration service that exposes two operations to the client app, the LocalNewsWeather and CompositeNewsWeather operations. Orchestration Services in VoltMX Foundry are used to invoke multiple integration services and combine the responses to return the complete set of data. The client side of the code invokes a single orchestration service on VoltMX Foundry rather than invoking the integration services multiple times.

This section provides an overview of the orchestration services that are preconfigured in the VoltMX Foundry test drive and are used by the News and Weather application. You will be able to learn how the orchestration service is set up in VoltMX Foundry and see how this service in turn invokes the other integration services. The orchestration service that is set up in this test drive is called “NewsAndWeather”.

NewsAndWeather Orchestration Service

The NewsAndWeather orchestration service has two operations - LocalNewsWeather and CompositeNewsWeather. This service provides the local news, current weather and weather forecast for an input zip code. This service invokes the News and the Weather integration services that have been explained before and combines the output and returns the single response with all the information that is needed by the mobile client. Invoking this Orchestration service reduces the need to make multiple calls from the client to VoltMX Foundry to get the information the client needs.

Orchestration Services in VoltMX Foundry

This section provides that details of the Orchestration service that is currently set up in the VoltMX Foundry.

![](Resources/Images/FoundryServices(News&Weather)/Contents_18.png)

1.  Click the Orchestration tab (No. 1 in the above figure)to view all orchestration services that are set up in VoltMX Foundry.  
    The News and& Weather App uses one orchestration service for delivering data to the end user. You can expand each service in the left hand navigation bar or click on a service in the center of the screen to explore the service.
2.  Click on NewsAndWeather (No. 2 in the above figure) to look at the service definition and the operations list of this service.

NewsAndWeather Service

![](Resources/Images/FoundryServices(News&Weather)/Contents_19.png)

1.  Click on the Service Definition (No. 3 in the above figure) tab to see all the details of the service. In the Name field, the name of the service is seen . You will also see that the version of the service is 1.0.
    
2.  Next, click on the “OperationsList” (shown as 4 in figure above) tab to see all the operations of the “NewsAndWeather” service.
    

NewsAndWeather Service Operations

The news service has two operations :”LocalNewsWeather” and “CompositeNewsWeather”. Each operation is defined in the console, and we can quickly add an operation by clicking the “Add Operation” button. This allows you to create specific operations tailored to the mobile application.

![](Resources/Images/FoundryServices(News&Weather)/Contents_20.png)

Click the “LocalNewsWeather” (shown as 5 in figure above) operation to review the details of this operation.

The LocalNewsWeather Operation Overview

![](Resources/Images/FoundryServices(News&Weather)/Contents_21.png)

You can use the “LocalNewsWeather” operation to look up of the zip code given the latitude and longitude. This operation returns the local news, the local weather and weather forecast for a given zip code. This operation does the orchestration and invokes multiple integration services and combines the data from these services. This operation invokes the News and Weather integration services that are described earlier.

The Name field ( No. 6 in the figure above) displays the name of the service. The “Operation Type” (shown as 7 in figure above) is composite as this operation invokes multiple other operations to return the data to the invoking application.

On the left side of the screen, you will see the integration and the composite services that are currently defined. Operations from these services can be dragged and dropped to the right side of the screen to create the composite operation.

Also the “Service Execution Mode” (shown as 8 in figure above) shows “Sequential”. This means the operations listed should be invoked in the order listed i.e. “ReverseGeoCode” first and then “CompositeNewsWeather” for the response to be returned by the “LocalNewsWeather” composite operation.

Click the CompositeNewsWeather operation (No. 9 in the figure above) to review the details.

The CompositeNewsWeather Operation Overview

![](Resources/Images/FoundryServices(News&Weather)/Contents_22.png)

The “CompositeNewsWeather” operation returns the local news, current weather and weather forecast for a given zip code. This operation is set up to invoke multiple integration services and combine the data from these services. This operation invokes the News and Weather integration services that are described earlier.

The Name field (no. 10 in the above figure) displays the name of the service. The Operation type (No. 11) is composite as this operation invokes multiple other operations to return the data to the invoking application.

On the left side of the screen, you will see the integration and the composite services that are currently defined. Operations from these services can be dragged and dropped to the right side of the screen to create this composite operation.

Also the “Service Execution Mode” (shown as 12 in figure above) shows Concurrent which means the operations listed could be invoked in any order.

Publishing the News and Weather Application   
----------------------------------------------

After the services of the News and weather application are defined, you will be able to publish these services along with the associated configuration on a server. You will need to publish the services along with the configuration so that these services can be invoked by the client application.

To publish the application, follow these steps:

1.  Once you log on to VoltMX Foundry a screen as below will be seen.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_29.png)
    
2.  Click on the Apps icon on the left to view all the configured applications in VoltMX Foundry.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_3.png)
    
3.  Click on News Weather Sample” (No. 1) application to view the option to publish the application.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_23.png)
    
4.  Click on the Publish tab (No. 2) to view the environments and to publish.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_24.png)
    
5.  Choose the environment to publish the application to. For example, the screen below shows the LocalDevEnv is selected. Click on “Next” (shown as 4 in figure below) to start the publish.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_25.png)
    
6.  Click on Save & Publish(No.5) to complete the publishing operation.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_26.png)
    
7.  When the application is successfully published, a screen like below is shown. Please note the “AppKey”, “AppSecret” and “Service URL” shown in the section 6 below. This information is needed for the configuration of the client application in the later steps.
    
    ![](Resources/Images/FoundryServices(News&Weather)/Contents_27.png)
    

<table style="margin-left: 0;margin-right: auto;" madcap:conditions="Default.HTML5 Only"><colgroup><col> <col> <col></colgroup><tbody><tr><td>Rev</td><td>Author</td><td>Edits</td></tr><tr><td>7.1</td><td>PG</td><td>PG</td></tr></tbody></table>
