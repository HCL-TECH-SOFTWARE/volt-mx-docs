   

11\.   News and Weather Application

This section discusses the details of building and configuration of a sample News and Weather application using VoltMX Foundry. Following details are included in this section  for the News and Weather application:

Overview of the application

    Creation of a Foundry Application

    Creation of Identity Service

Creation of the integration service

Creation of the Orchestration Service

10.1  Overview of the News and Weather Application

This document describes how to create a VoltMX Foundry Integration Services and Orchestration Services to get News (by category, Local News) & Weather Forecast from different web-services..

10.2  Creation of News and Weather Application in Foundry

Follow the steps below to create a Foundry Application using the account that has been created using the VoltMX Cloud Portal.

*   Log-in to your VoltMX Cloud Portal
*   Click Apps in the left menu
*   Under Apps click on Applicationsà Custom Apps to create a new Application

![](../Resources/Images/NewWeatherApp/0300002F.png)

*   A new VoltMX Foundry Application is created, and you will be navigated to the app configuration page
*   To change the app name, click on the pencil (edit) icon next to the app title (see below)

![](../Resources/Images/NewWeatherApp/03000030.png)

10.3  Identity Service

Follow Identity is a service that validates the authentication of your users before they can access your application. In this application we are not configuring any Identity services so that any user can access the application..

You can configure Identity Service under IdentityTab(See below) the steps below to create a Foundry Application using the account that has been created using the VoltMX Cloud Portal.

![](../Resources/Images/NewWeatherApp/03000031.png)

10.3  Integration Service

The Integration tab is where you define services for your application.

A service is an application component that represents the application interaction with the external data source. A service definition comprises the meta-data or the configurations required to exchange data with the external data source. For example, the configurations can be service type, service ID, input parameters, output parameters, preprocessors and postprocessors, target URL, authentication credentials if required, and type (HTTP/HTTPS).

The service definition enables the application to exchange data with any external data source. The Foundry provides back-end for connecting to a Web service and an XML service. Even if the external data source does not expose the services to these well-known interfaces, the developer can build a Java service.

Let’s create three different services for our application:

1.  News
2.  Weather
3.  Location Lookup

10.3.1  How to create and configure News service

We need to configure these services in Integration Tab (see below).

![](../Resources/Images/NewWeatherApp/03000032.png)

*   Select “Configure New”, in the screen shown above, to continue
*   Provide a name for integration service. Let’s give name as “News”
*   From Service Type dropdown select “XML”
*   Give [https://news.google.com/news/section?output=rss&](https://news.google.com/news/section?output=rss&) in BaseUrl field
*   Click on “Save and Continue” to add the operations
*   Give “GetNewsForCategory” in Operation name field and click on Configure Operation. You will be redirected to another page where you can configure the operation.

Steps to configure the GetNewsForCategory operation.

1.  Add this value “topic=$category” in New operation path field
2.  Configure “GET” in Http Methods Dropdown
3.  Now Select “Public” in Operation security Level dropdown. We are making this service public which means we don’t any authentication to access this operation
4.  Click on Input label. In this section we will configure the Input parameters for the operation
5.  Add category as input field and test value “w” which will retrieve the world news and click on “Test” button which is at bottom of the page. You will see the “<testdata></testdata>”in Result section which is on right pane. The result will be converted to a JSON before being sent to the device
6.  Now click on Response tab which will show the xml response from the service. To send the response to the client we have to configure the output tab
7.  Click on “+” sign to insert the output fields

Below are the output fields you have to create which will be sent to the mobile client.

<table class="table_2"><colgroup><col style="width: 71pt;"> <col style="width: 71pt;"> <col style="width: 64pt;"> <col style="width: 65pt;"> <col style="width: 65pt;"> <col style="width: 71pt;"> <col style="width: 51pt;"> <col style="width: 50pt;"></colgroup><tbody><tr style="height: 38pt;"><td class="td_10"><p class="p_14">ID</p></td><td class="td_11"><p class="p_14">Path</p></td><td class="td_11"><p class="p_14">Scope</p></td><td class="td_11"><p class="p_14">Datatype</p></td><td class="td_11"><p class="p_14">Collection ID</p></td><td class="td_11"><p class="p_14">Record ID</p></td><td class="td_11"><p class="p_14">Format</p></td><td class="td_11"><p class="p_14">Format Value</p></td></tr><tr style="height: 30pt;"><td class="td_12"><p class="p_15">news_list</p></td><td class="td_13"><p class="p_15">Channel</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">Collection</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 17pt;"><td class="td_12"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">Item</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">Record</p></td><td class="td_13"><p class="p_15">news_list</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 22pt;"><td class="td_12"><p class="p_15">Title</p></td><td class="td_13"><p class="p_15">Title</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 30pt;"><td class="td_12"><p class="p_15">Link</p></td><td class="td_13"><p class="p_15">link</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 30pt;"><td class="td_12"><p class="p_15">Description</p></td><td class="td_13"><p class="p_15">description</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr></tbody></table>

Once you create above all fields you click on Test to see the Result tab.

Now you will see all the data which will be sent to mobile client. Then click on “Save Operation”.

We will create one more operation “LocalNews”

Steps to configure the LocalNews operation:

1.  Add this value “q=$cityName” in New operation path field
2.  Configure “GET” in Http Methods Dropdown
3.  Now Select “Public” in Operation security Level dropdown. We are making this service public which means we don’t any authentication to access this operation
4.  Click on Input label. In this section we will configure the Input parameters for the operation
5.  Add cityName as input field and test value “New York” which will retrieve the local news and click on “Test” button which is at bottom of the page. You will see the “<testdata></testdata>”in Result section which is on right pane
6.  Now click on Response tab which will show the xml response from the service. To send the response to the client we have to configure the output tab. The result will be converted to a JSON before being sent to the device
7.  Click on “+” sign to insert the output fields

Below are the output fields you have to create which will be sent to mobile client.

<table class="table_2"><colgroup><col style="width: 71pt;"> <col style="width: 71pt;"> <col style="width: 64pt;"> <col style="width: 65pt;"> <col style="width: 65pt;"> <col style="width: 71pt;"> <col style="width: 51pt;"> <col style="width: 50pt;"></colgroup><tbody><tr style="height: 38pt;"><td class="td_10"><p class="p_14">ID</p></td><td class="td_11"><p class="p_14">Path</p></td><td class="td_11"><p class="p_14">Scope</p></td><td class="td_11"><p class="p_14">Datatype</p></td><td class="td_11"><p class="p_14">Collection ID</p></td><td class="td_11"><p class="p_14">Record ID</p></td><td class="td_11"><p class="p_14">Format</p></td><td class="td_11"><p class="p_14">Format Value</p></td></tr><tr style="height: 30pt;"><td class="td_12"><p class="p_15">news_list</p></td><td class="td_13"><p class="p_15">Channel</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">Collection</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 17pt;"><td class="td_12"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">Item</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">Record</p></td><td class="td_13"><p class="p_15">news_list</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 22pt;"><td class="td_12"><p class="p_15">Title</p></td><td class="td_13"><p class="p_15">Title</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 30pt;"><td class="td_12"><p class="p_15">Link</p></td><td class="td_13"><p class="p_15">Link</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 30pt;"><td class="td_12"><p class="p_15">Description</p></td><td class="td_13"><p class="p_15">description</p></td><td class="td_13"><p class="p_15">Response</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">news_item</p></td><td class="td_13"><p class="p_15">None</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr></tbody></table>

Once you create above all fields you click on Test to see the Result tab.

Now you will see all the data which will be sent to mobile client. Then click on “Save Operation”.

10.3.1  How to create and configure Weather service

1.  Select Configure New
2.  Provide a name for integration service. We will give name as “Weather”
3.  From Service Type dropdown select “SOAP”
4.  Then enter the following URLs to complete the service definition:

*   In the Base URL box, type: http://wsf.cdyne.com/WeatherWS/Weather.asmx 

*   In the WSDL URL box, type: http://wsf.cdyne.com/WeatherWS/Weather.asmx?wsdl

5.  Click Save & Continue to retrieve the WSDL. Each of the available operations are listed in a drop-down box. Select GetCityForecastByZip and GetCityWeatherByZip
6.  Click Add Operation. This will create two operations under your Weather service that maps to the SOAP web service methods
7.  To test and edit the GetCityWeatherByZip, click the settings icon and choose Edit
8.  The operation details window opens. A sample web service request is provided showing a placeholder for any input parameters. For the GetCityWeatherByZip, the ZIP is the only input parameter displayed as <ns1:ZIP>?XXX?</ns1:ZIP> in the sample request. At this point, we could hard code a value, but since we want our app to provide the zip code, we need to provide an input variable name: <ns1:ZIP>$zip</ns1:ZIP>. We then need to define that variable under the input tab including a test value of 10036

         On the Output tab, enter the following parameters and path.

         city //City

         state //State

        temp //Temperature

9.  Click the Test button again and the result will be displayed as XML. The result will be converted to a JSON before being sent to the device.
10.  Edit the GetCityForecastByZip in the same way. This service returns a repeating data structure for each day providing that day’s weather forecast. This requires the use of the collection ID under the output tab to create a repeating set of JSON objects. After creating the ZIP input parameter the same way as the previous service, enter the following output parameters:

<table class="table_2"><colgroup><col style="width: 83pt;"> <col style="width: 206pt;"> <col style="width: 71pt;"> <col style="width: 92pt;"></colgroup><tbody><tr style="height: 28pt;"><td class="td_10"><p class="p_14">ID</p></td><td class="td_11"><p class="p_14">Path</p></td><td class="td_11"><p class="p_14">Datatype</p></td><td class="td_11"><p class="p_14">Collection ID</p></td></tr><tr style="height: 31pt;"><td class="td_12"><p class="p_15">ForecastList</p></td><td class="td_13"><p class="p_15">//ForecastResult/Forecast</p></td><td class="td_13"><p class="p_15">Collection</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 17pt;"><td class="td_12"><p class="p_15">Date</p></td><td class="td_13"><p class="p_15">Forecast/Date</p></td><td class="td_13"><p class="p_15">Record</p></td><td class="td_13"><p class="p_15">ForecastList</p></td></tr><tr style="height: 17pt;"><td class="td_12"><p class="p_15">Desc</p></td><td class="td_13"><p class="p_15">Forecast/Description</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">ForecastList</p></td></tr><tr style="height: 22pt;"><td class="td_12"><p class="p_15">Low</p></td><td class="td_13"><p class="p_15">Forecast/Description</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">ForecastList</p></td></tr><tr style="height: 31pt;"><td class="td_12"><p class="p_15">High</p></td><td class="td_13"><p class="p_15">Forecast/Temperatures/MorningLow</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">ForecastList</p></td></tr><tr style="height: 31pt;"><td class="td_12"><p class="p_15">Daypct</p></td><td class="td_13"><p class="p_15">Forecast/Temperatures/DaytimeHigh</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">ForecastList</p></td></tr><tr style="height: 31pt;"><td class="td_12"><p class="p_15">Nightpct</p></td><td class="td_13"><p class="p_15">Forecast/ProbabilityOfPrecipiation/Nighttime</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">ForecastList</p></td></tr></tbody></table>

Test your service and you will see the resulting XML showing the repeating collections of forecasts.

10.3.1  How to create and configure Location Lookup service

1.  Select Configure New
2.  Provide a name for integration service. We will give name as “LocationLookup”
3.  From Service Type dropdown select “XML”
4.  Give http://nominatim.openstreetmap.org/reverse?format=xml in BaseUrl field
5.  Click on “Save and Continue” to add the operations

Give “ReverseGeoCode” in Operation name field and click on Configure Operation. You will be redirected to another page where you can configure the operation.

Steps to configure the ReverseGeoCode operation.

1.  Add this value “&lat=$lat&lon=$lon” in New operation path field
2.  Configure “GET” in Http Methods Dropdown
3.  Now Select “Public” in Operation security Level dropdown. We are making this service public which means we don’t any authentication to access this operation
4.  Click on Input label. In this section we will configure the Input parameters for the operation
5.  Add lat as input field and test value “40.7127”
6.  Add lon as input field and test value “-74.0059” which will retrieve the location details and click on “Test” button which is at bottom of the page. You will see the “<testdata></testdata>”in Result section which is on right pane. The result will be converted to a JSON before being sent to the device
7.  Now click on Response tab, which will show the xml response from the service. To send the response to the client we have to configure the output tab
8.  Click on “+” sign to insert the output fields

<table class="table_2"><colgroup><col style="width: 51pt;"> <col style="width: 206pt;"> <col style="width: 71pt;"> <col style="width: 92pt;"> <col style="width: 68pt;"></colgroup><tbody><tr style="height: 28pt;"><td class="td_14"><p class="p_15">ID</p></td><td class="td_15"><p class="p_15">Path</p></td><td class="td_15"><p class="p_15">Datatype</p></td><td class="td_15"><p class="p_15">Collection ID</p></td><td class="td_15"><p class="p_15">Record ID</p></td></tr><tr style="height: 31pt;"><td class="td_12"><p class="p_15">zip</p></td><td class="td_13"><p class="p_15">//addressparts/postcode</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr><tr style="height: 17pt;"><td class="td_12"><p class="p_15">city</p></td><td class="td_13"><p class="p_15">//addressparts/city</p></td><td class="td_13"><p class="p_15">String</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td><td class="td_13"><p class="p_15">&nbsp;</p></td></tr></tbody></table>

10.4  Orchestration Service

The Integration tab is where you define services for your application.

Orchestration is the coordination or integration of several services and exposing them as a single service. The mix of services supports the automation of business processes.

The following types of Orchestration services are available in VoltMX Foundry:

Composite Services: Allows you to run two or more services either concurrently or sequentially.

Looping Services: Allows you to run a single service in a loop till the loop ends or exit criteria is met.

We will create the two orchestration services.

1.  NewsAndWeather – Concurrent Service
2.  LocalAll – Sequential Service

  
Creating News and Weather Orchestration service:

Give service name as “News and Weather” and  select Concurrent tab

Now add the below Integration services, by clicking add button beside each service (see below).

1.  LocalNews
2.  GetCityWeatherByZip
3.  GetCityForecastByZip

![](../Resources/Images/NewWeatherApp/03000033.png)

Now click on save button.

Creating LocalAll Orchestarion service:

Give service name as “LocalAll” Select Sequential tab (see below).

![](../Resources/Images/NewWeatherApp/03000034.png)

Now add the below services by clicking add button beside each service.

1.  ReverseGeoCode
2.  NewsandWeather which is created in above step

Now click on save button.

Now click on Publish tab (see below) to publish the app into cloud.

![](../Resources/Images/NewWeatherApp/03000035.png)
