                             

Push Subscribers
================

Subscriber is a user who agrees to receive or is given access to push notifications.The **Subscribers** list view displays details of subscribed users for all added applications in Volt MX Foundry Messaging. Any request made by the user can be updated on this screen under **Subscription Status** column. For example, you can set a user subscription status as active or inactive to stop or resume push notifications to subscribers.

> **_Important:_** As a user, you must have the following different permissions to access the Subscribers screen and perform different tasks based on the role.  
  
    - SUBSCRIBERS\_ALL

Under **Targeting**, click **Push** **Subscribers**. The **Subscribers** screen appears.

The **Subscribers** list view displays the following details:

*   **Search All fields box**: Helps you to search all fields in the list view of the **Subscribers** screen. If no subscriber is added in the console, then the **Subscribers** screen displays the following message: No Subscribers Found .
*   **KSID**: This column displays Volt MX Subscription Identification serial number. The Ksid is used to communicate with Volt MX Foundry Messaging Server. Volt MX Foundry Messaging generates the KSID based on provided details when you send a request for subscription such as application id, device id, and SID.  You can use the filter under the **KSID** column to search a particular subscriber based on Ksid.
*   **Name**: This column displays names of added audience members for all applications. The Name column contains a combination of the **First Name** and the **Last Name** of audience members.You can use the filter under the **Name** column to search a particular subscriber based on name.
*   **Reconciliation Key** - **Email**: This field displays the name of the reconciliation key that is set by the Administrator. Reconciliation key is must for audience members to get reconciled with the subscribers. It is a must for sending messages to audience members only. You must define reconciliation key in the Administration module of Volt MX Foundry Messaging.
*   **Reconciliation Key**: This column displays reconciliation key values. Reconciliation key, for example email, is used to map between the Audience Member and Subscribers. You can use the filter under the **Reconciliation Key** column to search a particular subscriber based on reconciliation key.
*   **Application**: This column displays the application names that are subscribed.You can use the filter under the **Application** column to search a particular subscriber based on subscribed application.
*   **Device ID**: This column displays the device IDs of registered devices. When an application registers for push notifications, the device id of the mobile device is registered in the Push Notification Service (PNS). When PNS wants to send a push message, the cloud uses the device id to locate the device on which the client application is installed, and then sends a push notification. You can use the filter under the **Device ID** column to search a particular subscriber based on a device id.
*   **Subscription Token**: This column displays subscription tokens from cloud. You can use the filter under the **Subscription Token** column to search a particular subscriber based on subscription token.
*   **Platform**: This column displays a list of targeted platforms configured for each of the added applications. You can use the filter in the **Platforms** column to sort applications based on a specific platform.
*   **Cloud Status**: This column displays cloud status of the subscribers as “Active" or “Inactive”. You can use filter in the **Cloud Status** columns to sort the subscribers based on the status.Only subscribers configured for cloud as Active are enabled to receive push notifications.If any subscribers' status for Cloud or Subscription is _"Inactive"_, then those subscribers will not receive push messages.
    
    > **_Important:_** Based on the confirmation, the device can send a unsubscription request to Volt MX Foundry Messaging to update the cloud/subscription status.
    
*   **Subscription Status**: This column displays status of subscribers who are authorized to receive push notifications from Volt MX Foundry Messaging.If subscription status is inactive, user will not be able to receive push notifications from Volt MX Foundry Messaging. You can use filter in the **Subscription Status** columns to sort the subscribers based on the status.
*   **Display controls**: By default, the number range is set to 10 so that only 10 subscribers are displayed in the grid. You can view more screens by navigating through the **Back Arrow** icon or the **Next Arrow** icon.
    

Subscription Status
-------------------

Based on a subscriber's request, you can update the current subscription status as active or inactive.

**To update the subscription status, follow these steps**:

1.  To update the current subscription status of the required subscrber, select the required status from the drop-down list under **Subascription Status** column in **Subscribers** list view.
    
    The system displays the confirmation notification that subscribers status is updated successfully.
    
2.  Click **OK** to continue.
    
    The updated subscription status appears in the list view.
