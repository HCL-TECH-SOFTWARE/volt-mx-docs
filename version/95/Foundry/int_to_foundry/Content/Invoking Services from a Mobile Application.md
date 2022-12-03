 

Invoking Services from a Mobile Application
===========================================

You are almost good to go! Now that your server pieces are complete, you can connect your client application to the VoltMX Foundry app and get your application up and running!

Once all services are configured and tested, connect your app to the client code by adding the required invocation code into your mobile app. This chapter will teach you the best options available to get your client app connected to your services.

Deploying your VoltMX Foundry Application
--------------------------------------

To start using your VoltMX Foundry application, you will need to deploy the created VoltMX Foundry application. This can be done thru the **Publish** tab in your application. The **Publish** section manages the clouds where your service deployment is available for use. You can use this section to publish or unpublish your services deployment, and make any runtime configurations if you wish.

Follow the steps to Publish your Application:

1.  Navigate to the **Publish** tab of your application.
    
    ![](Resources/Images/S1TPA.png)
    
2.  In this view, you will see the list of supported **Environments** where you can deploy your application. Select the environment where you wish to deploy your services, and click **Next**.
    
    ![](Resources/Images/S2TPA.png)
    
3.  On the next page, you can do any app and service level configurations to your application. Select **Save & Publish** to deploy your application.
    
    ![](Resources/Images/S3TPA.png)
    
4.  Once publish is completed, you will be navigated back to the clouds page. From the **Publish Progress** dialog box, retrieve the `App key` and `App secret`. You need to add the app key and app secret into your client application to invoke VoltMX Foundry services.
    
    ![](Resources/Images/S4TPA.png)
    
    Adding VoltMX Foundry APIs in the Mobile Application
    -------------------------------------------------
    
    To see your mobile app in action with a live backend, you need to add the required SDK invocation calls for your service. For our **VoltMX Mobile** application to be connected to **VoltMX Foundry** backend, you need to perform the following steps:
    
    1.  Open the VoltMX Client application in VoltMX Iris. Configure VoltMX Foundry URL in the **Project Properties** of your application.
        
        ![](Resources/Images/i1.png)
        
    2.  Login to console using the **Login** button at the top-right of VoltMX Iris.
        
        ![](Resources/Images/i2.png)
        
    3.  Connect the client application to VoltMX Foundry backend.
        
        You can do this in VoltMX Iris by selecting the **VoltMX Foundry** section in the Project Explorer, and select **Use Existing App**.
        
        ![](Resources/Images/i3.png)
        
    4.  This will bring up a list of services. Click **Associate** to select your VoltMX Foundry application.
        
        ![](Resources/Images/i4.png)
        
        Now your client application and backend services are connected.
        
    5.  Next, build your Iris application. This step will initialize VoltMX Foundry SDK for you.
    6.  Call your VoltMX Foundry APIs.
        
        The quickest way to get started using VoltMX Foundry APIs, is to use the Auto-generated code available with every service and operation. The Sample code can be accessed from VoltMX Foundry console using the below menu:
        
        ![](Resources/Images/i5.png)
        
        The sample code for each service and operation can be accessed and added into your Frontend application.
        
        ![](Resources/Images/i6.png)
        
        Sample code snippet for selected operation: You are done! Re-build your application and try it out!
        
        VoltMX Foundry also supports iOS and Android Native, and PhoneGap applications. To view sample code for other platforms, access the service or operation through VoltMX Foundry console and use the **Sample Code** menu option.
        
        <table madcap:conditions="Default.HTML,PrintGuides.Html only" style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/RevisionTable.css');" class="TableStyle-RevisionTable" cellspacing="0"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"><col class="TableStyle-RevisionTable-Column-Column1"><col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">8.0</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1">AU</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1">AU</td></tr></tbody></table>
