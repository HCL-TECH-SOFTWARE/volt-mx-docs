 

Creating an Identity Service
============================

The Identity Service allows you to add a simple authentication and authorization method to your mobile app. This service can integrate with various back-end identity providers (IDP) such as Salesforce, SAP, Active Directory (direct or by Active Directory Federation Services (AD FS)) or any SAML 2.0 enabled end-point. After successfully authenticating, the back-end IDP returns a security token that is held by VoltMX Foundry. This token can be used in subsequent calls to integration or orchestration services automatically. This helps remove the burden of single sign-on token management within the client app.

For this Quick Start guide, we will use the built-in VoltMX User Repository provided by Foundry as our identity provider. For more information on integrating with other back-end IDPs, please refer to our tutorial for [integrating a sample CRM app with Salesforce](http://opensource.voltmxtechsw.com/volt-mx-docs/tutorials/Foundry#Overview.html#Welcome?TocPath=_____1).

Configuring the Service
-----------------------

To configure an Identity service, follow these steps:

1.  Click **Add Identity Service** > **Use Existing**.
    
    ![](Resources/Images/onpremises/Identitytab.png)
    
2.  In the **Existing services** page, hover over the **VoltMX User Repository** from the list, click the **Settings** button, and then click **Select**. The user store is added to your app.
    
    ![](Resources/Images/onpremises/UserStore.png)
    
    The identity service for the VoltMX User Repository is now available for use.
    
3.  Click the settings icon and then click **Edit**.
    
    ![](Resources/Images/onpremises/UserStore_Menu.png)
    
4.  Click **Add New User**. The **Add New User** window appears.
5.  Provide the required details, and then click **Add User**.
    
    ![](Resources/Images/onpremises/Add_User.png)
    

Publishing the Service
----------------------

Once you have configured your demo app to use VoltMX User Repository identity service, you need to publish the app.

To publish a service, follow these steps:

1.  Click the **Publish** tab to view your available environments.
2.  Select your target environment, and then click **Publish**.
    
    ![](Resources/Images/onpremises/Publishing_an_App.png)
    

Testing the Service
-------------------

Now that the identity service for our app has been published, we can test the service by trying to authenticate as our demo user. To do this, we need the app key, app secret, and the identity service URL of our runtime environment.

For testing the service, follow these steps:

1.  From the **Publish** tab, click the key icon of our runtime environment.
    
    ![](Resources/Images/Creating an Identity Service/App Key and App Secret.png)
    
    The app key and app secret are displayed.
    
    App Key is unique to each environment.
    
2.  Click the download icon, and then click **App Service Document**.
    
    ![](Resources/Images/Creating an Identity Service/App Service Document.png)
    
    This will display a configuration JSON used by the client app to discover what services are available to this app in this environment. The configuration also contains the **login URL** to the user store (highlighted in red).
    
3.  Test the service using the following cURL command for authenticating a user.
    
    curl -X POST -H "X-VoltMX-App-Key: 24662f8e60c8a5cd2b2117e37d22fe32" -H "X-VoltMX-App-Secret: 75aa0fe163ace8f5c4a92245b97d95c6" -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded" -d 'userid=demo%40voltmx.com&password=Pass1234' 'https://100000032.auth.voltmxcloud.com/login?provider=userstore'
    
4.  The JSON response contains the following elements:
    
    1.  **profile**: Includes user profile information. In this case, it is the user profile attributes from VoltMX User Repository. If this identity services were connected to an enterprise identity service provider, this would include user profile information from that system.
        
    2.  **provider token**: This is the security token returned from the external identity service provider such as Active Directory or Salesforce. In this case, it is the token returned from the VoltMX User Repository.
        
    3.  **refresh token**: The refresh token has a longer timeout than the provider token. The refresh token can be used to get a new provider token, but it requires the use of the app key and app secret to request a new provider token.
        
    4.  **claims token**: This is a VoltMX Foundry claims token that will be used for any subsequent calls to Integration, Orchestration, Sync, or Messaging services.
        
    
    The token values are formatted as JWT tokens and are digitally signed by the server so they can be validated by the server on subsequent calls. They can be decoded using a JWT decoder such as [https://developers.google.com/wallet/digital/docs/jwtdecoder](https://developers.google.com/wallet/digital/docs/jwtdecoder) to view the data it includes.
    
    The following is a sample JSON response from the cURL command:
    
```
{  
        "profile": {
            "email": "demo@voltmx.com",  
            "userid": "demo@voltmx.com",  
            "firstname": "Demo",  
            "lastname": "User"
        },  
        "provider\_token": {  
           "exp": 1412190752000,  
           "value":  
    "eyAiYWxnIjogIk5PTkUiLCAidHlwIjogImp3cyIgfQ.eyAiX2FjcyI6ICIxMDAw  
    MDAwMzIiLCAiZXhwIjogMTQxMjE5MDc1MiwgIl9pc3NtZXRhIjogIi9hcGkvdjEv  
    bWV0YWRhdGEvVXl3M0pDdVU4XzVnUEZFNzdCM3ZGdz09IiwgIl92ZXIiOiAidjEu  
    MSIsICJfcHJvdl91c2VyaWQiOiAiZGVtb0Brb255LmNvbSIsICJfaWRwIjogInVz  
    ZXJzdG9yZSIsICJpc3MiOiAiaHR0cHM6Ly8xMDAwMDAwMzIuYXV0aC5rb255Y2xv  
    dWQuY29tIiwgIl9lbWFpbCI6ICJkZW1vQGtvbnkuY29tIiwgImp0aSI6ICJlMDUw  
    MmFiNS05OTY4LTQzNzctOWRkNC04ZWI4OWJhMGVhMjEiLCAiaWF0IjogMTQxMjE4  
    NzE1MiB9.MCwCFAa5lgjc8PKc3lZwXydRviPtrJXjAhRWSssiS86n4oWyuCZEscZ  
    wkn7aHw",  
        "provider": "userstore",  
        "params": {}  
        },  
        "refresh\_token":
    "eyAiYWxnIjogIk5PTkUiLCAidHlwIjogImp3cyIgfQ.eyAiX3Njb3BlIjogImci  
    LCAiX2FjcyI6ICIxMDAwMDAwMzIiLCAiZXhwIjogMTQxMjI3MzU1MiwgIl9pc3Nt  
    ZXRhIjogIi9hcGkvdjEvbWV0YWRhdGEvVXl3M0pDdVU4XzVnUEZFNzdCM3ZGdz09  
    IiwgIl92ZXIiOiAidjEuMSIsICJfcHJvdl91c2VyaWQiOiAiZGVtb0Brb255LmNv  
    bSIsICJfaWRwIjogInVzZXJzdG9yZSIsICJfYXBwIjogImRlZjljNzM4LTAxNjMt  
    NDgzZS05NzdmLTM1MDIxMjVjMTk4YyIsICJpc3MiOiAiaHR0cHM6Ly8xMDAwMDAw  
    MzIuYXV0aC5rb255Y2xvdWQuY29tIiwgIl9lbWFpbCI6ICJkZW1vQGtvbnkuY29t  
    IiwgImp0aSI6ICI0MTI1ZmE5Yy1lZDlmLTRjMTItYTYzNC02OGJkOTAwYTNhMTgi  
    LCAiaWF0IjogMTQxMjE4NzE1MiwgIl9wdWlkIjogMjgwODI0NjA0OTc5NDU1MDg2  
    IH0.MCwCFACJQFUW0C4pYFV2GIvOB0erHrENAhQQ3-Dvfe9ytvCzu-tbJZ\_630lu
    XA",
        "claims\_token": {  
            "value": 
    "eyAiYWxnIjogIk5PTkUiLCAidHlwIjogImp3cyIgfQ.eyAiX3Njb3BlIjogImci  
    LCAiX2FjcyI6ICIxMDAwMDAwMzIiLCAiX3ZlciI6ICJ2MS4xIiwgIl9pZHAiOiAi  
    dXNlcnN0b3JlIiwgIl9hcHAiOiAiZGVmOWM3MzgtMDE2My00ODNlLTk3N2YtMzUw  
    MjEyNWMxOThjIiwgImlzcyI6ICJodHRwczovLzEwMDAwMDAzMi5hdXRoLmtvbnlj  
    bG91ZC5jb20iLCAiX2VtYWlsIjogImRlbW9Aa29ueS5jb20iLCAiaWF0IjogMTQx  
    MjE4NzE1MiwgImV4cCI6IDE0MTIxOTA3NTIsICJfaXNzbWV0YSI6ICIvYXBpL3Yx  
    L21ldGFkYXRhL1V5dzNKQ3VVOF81Z1BGRTc3QjN2Rnc9PSIsICJfcHJvdl91c2Vy  
    aWQiOiAiZGVtb0Brb255LmNvbSIsICJqdGkiOiAiY2M4MGFkNGEtNGQ0NS00MmFk  
    LTk2ZjUtZTY0NzYwZWViZjI2IiwgIl9hdXRoeiI6ICJleUp3WlhKdGFYTnphVzl1  
    Y3lJNmUzMHNJbkp2YkdWeklqcGJYWDAiLCAiX3B1aWQiOiAyODA4MjQ2MDQ5Nzk0  
    NTUwODYgfQ.MC0CFQCP\_1JSQe9stMYjr8P4vrgKYuTn5gIUSx6j\_R9dbjFFCcTCL
    AiD6AOdqh0"
    ,  
            "exp": 1412190752000  
        }  
    }
```
