                           

You are here: Best practices for Push Notifications in the Engagement Server

Best practices for Push notifications in the Engagement Server
==============================================================

The Push message channel is used to send messages to users who have subscribed their devices. This section describes in detail about how to use push message channel to send the messages to users. You can send campaign push messages, event push messages, and adhoc push messages

*   For Subscription, Locations, and Message Status use device side APIs. Do not use Admin side (apps integration) APIs.
*   When you want to send push messages in bulk, you can not set the priority.
*   You should try to schedule the messages ahead so that the message processing happens faster.
*   You should use priority only when the message needs to be sent immediately for event driven notifications.
*   You can personalize the message for users by having their attributes, such as First Name, Last Name enclosed in double hash symbols, for example, ##First Name##.
*   If you want to create a device subscription and associate a user with it, then use the [Create/Modify Subscriber](../../../Foundry/engagement_api_guide/Content/REST_API_Subscribers/Subscription.md) API.
*   When you want to get details of a push message, such as ksid, startElement, elementsPerPage, ufid, and appId, then you can use the [Fetch All Messages from Volt MX Foundry Engagement Services](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Fetch_All_Messages_from_VoltMX_Foundry_Messaging.md) API. You can use the following groupings to retrieve the push message details:
    *   with ksId
    *   with ksid and ufid
    *   with deviceId and appId
    *   with deviceId and ksid
*   When you send a push message, you may want to know if the push message is viewed on the device. For more information refer to [Update Push Open Status to Volt MX Foundry Engagement Services](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/pdate_Push_Open_Status_to_VoltMX_Foundry_Messaging.md) API.
*   You may need to know the current push notification delivery status. You can use the push message request ID to know the push notification delivery status. For more information about how to get the push message status, refer to [Get Message Status by Request ID API.](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Get_Message_Status_By_Request_Id.md)
*   As an Admin you can send campaign push notifications, event notifications and adhoc push notifications to the subscribed device users. For more information about how to send push messages, refer to [Push Message API](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Adhoc_Push.md).
*   You can use the [Broadcast API](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Broadcasting.md) to send the same push notification to all the subscribers or the subscribers of the single platform (android, iOS, and Windows).
*   You can send the large batches of individual messages included in the CSV format. Once the .CSV file is uploaded successfully, the messages are queued in the Engagement Server to start sending push notifications to the device users based on included KSIDs in the CSV file. The Basic difference between Bulk Push and Broadcasting API is that Broadcasting API sends the single push notification to thousands of users in a single push. While in Bulk Push, you can send different messages to different devices. Bulk Push creates more load on the server and is generally slower than broadcast. Wherever possible, use [Broadcast API](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Bulk_Message_Upload.md).  
    
*   You can send attractive rich push messages to subscribed device users with colourful images and attractive text. For more information, refer to [Send Rich Push API](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Send_Rich_Push.md).
*   You can cancel push notification scheduled for the future. For more information, refer to [Cancel Scheduled Messages API.](../../../Foundry/engagement_api_guide/Content/Push_Message_APIs/Cancel_Scheduled_Messages_from_VoltMX_Foundry_Messaging.md)
