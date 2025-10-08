                             

API Access
==========

Once a valid application is added into the Volt MX Foundry Engagement Services, you must register the application and the device with the corresponding Push Notification Services provider by calling appropriate APIs. The Volt MX Foundry Engagement Services supports three basic push notification APIs such as subscribe, unsubscribe, or push message services that are available in two different file formats XML or JSON file format. These APIs are listed under the API Access screen. User can push notifications by using these APIs for Volt MX Foundry Engagement Services either via the console or APIs method.

In Volt MX Foundry Engagement Services, all the APIs needs to be called via HTTP POST method. In computing, POST is one of many request methods supported by the HTTP protocol. The POST request method is used for sending requests to a web server. It is often used when uploading a file or submitting a completed web form.

When an application is added to the subscribed application list, application developers need to run the APIs for Volt MX Foundry Engagement Services to Volt MX Foundry Engagement Services server. During this process, user’s details (reconciliation key details are collected) are stored in Volt MX Foundry Engagement Services data base. Reconciliation key is the key with which details from audience members and subscribed audience are grouped for sending push notifications. Reconciliation Key is used to access audience members and subscribers and then validate common details between audience members and subscribers.

> **_Note:_** In addition, the Volt MX Foundry Engagement Services also supports five more APIs such as the _Fetch Message content from Volt MX Foundry Engagement Services_, _Fetch all messages from Volt MX Foundry Engagement Services_, _Update Geo location of device to Volt MX Foundry Engagement Services_, _Update Push Open Status to Volt MX Foundry Engagement Services_, and _Bulk Message Upload_ APIs that are not listed under the **API Access** page.  

> **_Important:_** For more details on APIs, refer to [](../APIs for Volt MX Messaging Services.md)[APIs for Volt MX Foundry Engagement Services.](../APIs for Volt MX Messaging Services.md)You can view subscription and push message related requests and response types and their interpretation for Web service requests here.Platform specific properties mentioned in Push Message XML request can be seen in API access list.[](../APIs for Volt MX Messaging Services.md)[  
](../APIs for Volt MX Messaging Services.md)

To view message notification APIs, follow these steps:

1.  In the **Applications** home screen, under **Application Name**, click one of the applications icon from the list that you want to view or make changes. The View Application screen of the selected application appears with the **App Info** step selected.
    
    > **_Important:_** The API Access step displays the API details for view purpose only.  
      
                       Clicking the **Save** and **Submit** buttons does not add any details from the API Access step.
    
2.  Click the **API Access** step and select one of the following APIs. The system displays the API sample code details:
    
    *   Subscription  
        
    *   Unsubscription  
        
    *   Push Message
    
    ##### Subscription
    
3.  In the **Subscription** (or Unsubscription, Push Message) section, select either XML or JSON format. The system displays sample elements of that particular API used to process the subscription request from mobile device to server.

> **_Note:_** The syntax and the response codes may vary for each format you have selected.

> **_Note:_** Response Status displays the possible response codes that system displays for message notifications.

![](../Resources/Images/App/subscription section - api access screen.png)

##### Unsubscription

![](../Resources/Images/App/Unsubscription tab - api access.png)

##### Push Message

![](../Resources/Images/App/Push Message - api access.png)

1.  Click the **Cancel** button if you want to go back to the Applications screen.
