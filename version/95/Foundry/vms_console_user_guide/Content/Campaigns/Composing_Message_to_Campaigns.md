                            

Composing Messages to a Campaign
================================

You can configure your campaign message by using pre-defined message templates and personalized attributes.

To compose message to campaign, follow these steps:

1.  Click the **Compose** to compose a new message for a campaign. The **Compose Message** drop-down window appears.
    
      
    ![](../Resources/Images/Campaigns/Campaign-compose message.png)
    

1.  Select appropriate template from the **Compose from template** drop-down list.
2.  Select one of the message templates for the **Choose from template** drop-down list. The system loads all the attributes from the selected message template into the Personalization Attributes list.
    
    > **_Note:_** You need to add new message templates or delete existing message templates only in the Administration screen.
    
    > **_Note:_** When message templates have been used for push messages in the Volt MX Foundry Engagement Services, you cannot delete that message templates.
    
3.  In the **Message Name** field, enter the name for your campaign message.
    
    > **_Note:_** You can enter unlimited characters for the campaign message.  
      
    However, when the push message is sent to any cloud, cloud accepts the number of characters limited based on different platforms as follows:  
      
         - Apple: 255 bytes  
         - Android: 4 KB  
         - Windows: 1024 characters
    
4.  Select the application name from the **Application Name** drop-down list that you want to associate with the campaign message.
5.  Select the attributes from the **Personalization Attributes** drop-down list to customize your campaign message if required.
    
      
    ![](../Resources/Images/App/Personalization attributes.png)
    
    The system inserts the selected attributes at the cursor position in the **Message Box** text area.
    
    ![](../Resources/Images/App/Sample Message.png)
    
    > **_Note:_** You can click "**X**" next to each attribute to remove the attribute from the message box. You can insert any attribute anywhere in the text message box as required for your push notification message.
    
6.  Enter the name for a message in the **Message Name** text field.
7.  Click the **Save** button to save the settings. The system displays the Add Campaign screen.
    
8.  Click the **Cancel** button to close the window without saving any settings. The system displays the Add Campaign screen.
