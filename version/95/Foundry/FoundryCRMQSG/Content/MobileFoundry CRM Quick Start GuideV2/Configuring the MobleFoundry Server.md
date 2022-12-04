

Configuring VoltMX Foundry Server
==============================

Before configuring VoltMX Foundry, it is assumed that you have registered with the SalesForce.com account as mentioned in the earlier section.

1.  Type [manage.voltmx.com](http://manage.voltmx.com/) in your browser. Enter the user name and password for the cloud account that has been set up. Click Sign In.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000033.png)
    

2.  The following screen appears. Click Apps on the top left corner.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000034.png)
    

3.  The applications screen appears. Click on the Custom Apps icon.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000035.png)
    

4.  The following screen appears. Click on Configure new to configure the Identity Service.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000036.png)
    

5.  Click on edit (pencil**)** icon as shown below to modify the name of the application.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000037.png)
    
    After the name of the application is changed, the following screen displays. In this sample, the name of the application is “FoundryCRMDemo.”
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000038.png)
    

6.  Complete the fields in the Identity Configuration screen, shown below. The **clientId** and **clientSecret** that were retrieved by registering with Salesforce.com (as mentioned in the earlier Salesforce sign-up section) will need to be entered to invoke the APIs that are exposed by SalesForce.com. Click on Save when done.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000039.png)
    
    After the identity service is successfully created, the following screen displays.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003A.png)
    

8.  Click on Integration under the Configure section. Click on **Configure New** to configure new integration services.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003B.png)
    

9.  Enter the information as shown below for the service definition of Account. The userID and password are retrieved after registering with Salesforce as discussed. Choose Use Existing Identity Provider for the AuthenticationType, and select the identity that has been created earlier from the dropdown. Click Save and Continue.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003C.png)
    

10.  Click on the **Integration** tab and then click Operation to select the object and operations to be added. Choose the **Account object** from the object drop-down list. Choose the Select All option from the **Operation** drop-down list.  Click on Add Operation and then Done.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003D.png)
    

11.  The following screen appears after the operations are added. The next step is to test if the designated object is configured correctly. Click on getAccount under the **Name** column.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003E.png)
    

12.  Copy the string “SELECT name, type, BillingCity, BillingState, AnnualRevenue, website, Industry, phone, BillingStreet from Account where type!=null” in the Test Value field, shown below. Click Test. If the query runs successfully, the result of the query execution will appear on the right (shown below). Click Cancel to exit the screen and perform the configuration of a new service.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300003F.png)  
    

13.  Configure the service definition of Lead. Click on Configure New in the screen below that allows you to configure a new service.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000040.png)
    

14.  Complete the fields in following screen. Click Save & Continue. MoblieFoundry displays a screen to choose the operations of the Lead object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000041.png)
    

15.  Select the **Lead** under the **Object** column and “**getLead**” as the operation. Click on **Add Operation** and Done.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000042.png)
    

16.  Click on “**getLead**” under the Operation column. Copy “SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead” in the Test value column. Click Test.
    
    If the configuration is correct, the response will appear on the right.
    
    Click Cancel to display the screen that allows the creation of a new service definition.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000043.png)
    

17.  Click on **Integration** in the screen below to create the service definition of Opportunity.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000044.png)
    

18.  Complete the fields shown below. Click Save and Continue to display the screen to choose the operations for the Opportunity object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000045.png)
    

19.  In the screen below, choose the **Opportunity** object and “**getOppurtunity**” operation. Click Add Operation.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000046.png)
    

20.  In the screen below, click “**getOpportunity**.” which allows to test the **getOpportunity** operation by entering sample query.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000047.png)
    

21.  Enter “SELECT name, Amount, CloseDate, Type, LeadSource, StageName, ExpectedRevenue, Probability from Opportunity” in the Test Value. Click Test.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000048.png)
    

22.  If a response alert is displayed, click OK. If the configuration is correct, the results will appear on the right.Click Cancel to move to the next screen to create the service definition for “Contact” object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/03000049.png)
    

23.  Click on Configure New in the following screen to create the service definition for Contact, and display the following screen.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004A.png)
    

24.  Complete the following fields. Click Save and Continue to display a screen to choose the operations of “Contact” object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004B.png)
    

25.  Select the **Contact** object from the drop-down list, and choose **All Operations**. Click Add Operation to choose the operations needed for the Contact object. And display the screen with all the exposed operations of the Contact object.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004C.png)
    

26.  Click getContact in the following screen to test the operation by executing a test query. 
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004D.png)
    

27.  Enter “SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact” in the “Test Value” column. Click Test. If the configuration is correct, the results display on the right in the screen below. Click Cancel when done.  The screen that allows you to publish the application displays. 
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004E.png)
    

28.  To publish the application, click Publish on the top menu. Select the Demo Environment, and click **Publish**. Once publication is successful, the “Not Published” text below will be updated with a green “Published” message.
    
    ![](../Resources/Images/Foundry CRM Quick Start Guidev2AcceptedALL/0300004F.png)
    

29.  After the application is published, click the key symbol next to the environment name.  In our example, the environment name is “Demo Environment.” Record the **App Key**, **App Secret**, and **service URL**.  You will use those data later to configure the client application.
