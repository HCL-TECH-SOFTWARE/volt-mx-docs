                           

Pass Event Message
==================

Delete this text and replace it with your own content.

*   **Pass Event Message**: If you select the Pass Event Message option, then system displays the following options:
    
    *   [Creating from existing template](#creating-from-existing-template)
    *   [Create Direct](#create-direct)
    
    ![](../Resources/Images/Events/Pass Event Message - 1.png)
    
    ##### Creating from existing template
    
*   **Creating from existing template**: By default, this option is set to active.Select the required template from the **Compose from template** drop-down list.
    
    The selected Pass Type template appears on the screen.
    
    ![](../Resources/Images/Campaigns/Compose paaa message -full screen - create from existing template.png)
    
    Based on your requirement, you can update the existing template. To know more about how to update an existing template, refer [Adding a Passbook Template](../PassBook_Template/Passbook_Template.md#dding_a_Passbook_Template)
    
    ##### Create Direct
    
*   **Create Direct**: Select the option as Create Direct.
    
    All the steps required to create a new pass template appears on the screen.
    
    ![](../Resources/Images/Passbook Message/Passbook message - create directly.png)
    
    Based on your requirement, you can create the template. To know more about how to create a pass template, refer [Adding a Passbook Template](../PassBook_Template/Passbook_Template.md#dding_a_Passbook_Template)
    
*   To set the **Name\_Value** pair, enter the key words in the **Event Push Message** text box and then click the **Mark as Name Value PAIR** button.The marked text gets highlighted indicates that the text has been converted as a variable.  
    If you do not select the entered Name\_Value pair and click Mark as Name Value Pair, then system displays the warning notification, asking you to select the variables and mark them by clicking on the button.  
    You can delete any unwanted Name\_Value paired variables by clicking the "**X**" next to each variables.  
    
    > **_Important:_** A Name Value Pair is a simple way of data representation. It is a set of two linked data items: a name that is a unique identifier for some item of data, and the value that is either the data that is identified or a pointer to the location of that data. Volt MX Foundry Engagement Services enables its users to reuse Name\_value pairs for event push messages for future extension without modifying existing code or data.  
    You can specify name and value pair that describes the contents of entire event or of individual event. With these descriptors, you can construct filters for determining what packages to be delivered.  
    While composing event messages, you can enable any text as _Name\_Value pair_ by using the **Mark as Name\_Value PAIR** button. The system displays the text as highlighted in the message box. Also the system loads it into the _Sample Request_ syntax block of the event Payload as tags with other tags. Users can send multiple event messages to different subscribers only by modifying values in the _Name\_Value pair_s.  
      
    ![](../Resources/Images/Events/Name Value Pair -new.png)  
    Here:  
      
          -  Name is a variable placeholder for the name on file for each mobile user that the event     
              notification will be sent to.  
      
         -  Number is a variable placeholder for users' credit card number.  
      
         -  Email is a variable placeholder for the users' email address.  
    
*   Click the **Save** button. The system creates and adds the new event in the list view, and displays a confirmation message that event is saved successfully.
    
    ##### **API Payload**
    
*   Click the **API Payload** button to get details of the API call done by a third party system, so that the event is enabled for push notifications.Once a valid event is added into Volt MX Foundry Engagement Services, you have to enable the app for event notifications by subscribing it with push notification services.
    
    The **Event Payload** drop-down window appears.
    
    > **_Important:_** The Event Payload drop-down window details are for view purpose only. While sending push notifications through any Engagement Services services, any Name\_Value pair is loaded as tags into the Event Payload sample request syntax. While calling An API, you need to enter values.
    
    ![](../Resources/Images/Events/Name value pair example for api payload.png)
    
    Based on your requirement, you can specify arbitrary key/value pairs to pass along in your message. For example, the two **Name\_Value** pairs **SSN** and **Address** configured in the **Event Message Box** as shown above are included in the `<eventNamePairs>` tag in the **Event Payload** window displayed below.
    
    ![](../Resources/Images/Events/Push Payload.png)
    
    > **_Important:_** For more details on APIs, refer to [APIs for Volt MX Foundry Engagement Services](../APIs for Volt MX Messaging Services.md)
    
*   Click either **XML** or **JSON** option button to view the sample API elements. By default the API format option button is set to XML format, which you can modify to JSON. Both the formats contain the same field types used in HTTP POST method.
*   Click the **Cancel** button if you do not wish to make any changes. The system displays the Events screen.
