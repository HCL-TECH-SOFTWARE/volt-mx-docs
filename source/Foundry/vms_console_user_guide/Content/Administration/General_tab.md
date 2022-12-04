                            

General
=======

General section is for all the general activities related to push notification.

To add details in the general section, follow these steps:

1.  Under the **MESSAGING SERVICES**, click the **Administration**. The **Administration** screen appears with the **Basic** section opened:

1.  In the **Basic section**:
    1.  **Retries per Notification**: Configure the number from 1 to 10 indicates that Volt MX Foundry Messaging (Engagement) retries the number of times to send a push message (including campaign messages, event messages) to subscriber in a day to restrict no. Maximum Retries Per Notification (1-10). With ‘Maximum retries per notification’ you can control option of re-sending a failed notification across all associated applications.
    2.  **Reconciliation Key**: Configure the reconciliation key. Default value is set to email. You can configure maximum up to 30 attributes as reconciliation keys.
    3.  **Preferred Time zone**: Configure the time zone according your region.
    4.  **Google API Client ID for Business**: Enter the Google API key to process all Google maps for geofencing. With the key, you can access only limited no of requests per day.
    5.  **Display Name**: Configure the name that you want display as console name in the title bar. Default name is set to HCL.
    6.  **Display Icon (.png)**: Choose the appropriate icon that you want display before the console name in the title bar.
        
        > **_Note:_** When you select an icon, the icon should be in .png format.
        
2.  In the **Campaign** section, click the **Plus** button to add a place holder for a campaign, and then enter appropriate name for the campaign. You can delete a campaign type by clicking the **Minus** button. You can add multiple campaign types.  
    
    > **_Note:_** While creating a campaign, the owner needs to provide the reconciliation key. For example, If user provides Email as reconciliation key, the Email attribute's value for an audience member is matched against UFID value in Subscriber schema.  
    
    > **_Note:_** Pushes will be triggered only for matched subscribed audience.
    
3.  In the **Events** section, click the **Plus** button to add a place holder for an event, and then enter appropriate name for the event. You can delete an event type by clicking the **Minus** button. You can add multiple event types.
4.  In the **Scheduler** section, configure the time from the **Check Campaign Progress** drop-down list. Based on the specified time, Volt MX Foundry Engagement Services server checks for sending campaign messages for newly added audience members.
5.  In the **Security** section, do the following to enable or disable security for subscription or message APIs:
    *   **Auth token for subscription API**: if you entered the value in the text box, you have to provide the auth token value for the subscription API, unsubscription API, fetch messages API, and Geo-location. The auth token value is used to verify valid requests and restrict spam requests if any.  
          
        If you want to disable security for subscription API, unsubscription API, fetch messages API, and Geo-location, remove the value from the **Auth token for subscription API** text field and save the details.  
          
        When you disable the security options, the system will not validate for auth token.
    *   **Authentication for Message API**: if you selected the check box, in the header sections of Push Message API, you need provide basic authentication with Volt MX Foundry Engagement Services console user Id and password details.  
          
        If you want to disable security for messages API, remove the value from the text field and save the details.  
          
        When you disable the security options, the system will not validate for authorization.  
        

1.  Click the **Save** to the save the changes.

If you want to close the Basic section without saving any details, click the **Cancel** button.
