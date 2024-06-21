## <a name="CreateSAPobject"></a>Creating an SAP Object Service

1.  In the **Configure Service** tab, click the **Identity** service tab.
2.  Click **Configure New**, and create an identity service for VoltMX SAP Gateway. See [How to Configure a New VoltMX SAP Gateway](./../Services.md#Use_existing_Inte#Adding6).

To use an existing integration service, refer to [How to Use an Existing Integration Service.](./../Services.md#Use_existing_Inte)

4.  Click the **Objects** service tab.
5.  Click **Configure New**.
6.  Click in the **Name** field, and type a name for the object service.
7.  Click the **Endpoint Type** field and select the endpoint that you want to use.
8.  Click the **Security Level** field and select the level of security you prefer.
9.  In the **Identity Service for Backend Token** field, select an existing identity service that is associated with your app to have VoltMX Foundry automatically add any backend security tokens received during authentication to the outbound request of this integration service.
10.  Under **User ID** and **Password**, provide valid credentials that you created while registering with VoltMX SAP services.
11.  Click in the **Default Caller ID** field, and provide the ID that VoltMX SAP Gateway uses for logging and auditing.
12.  Click in the **Default Caller Group** field, and provide the group ID that VoltMX SAP Gateway uses for logging and auditing. This information is optional.
13.  Click **Test Login**.
14.  Click the **Advanced** tab.

15.  If you want to specify a JAR file to associate with this service, select one from the **Select Existing JAR** drop-down menu, or click **Upload New** to add a new JAR file.
16.  If you want other identity services associated with your app to allow this service to access the identity session of the end-user at runtime, click the **Select Dependent Identity Services** drop-down menu and select the check box next to each identity service you want to use. This enables any operation to retrieve backend security tokens or other user profile data received during authentication and use it as part of the request sent to the backend target.
17.  Click **Save & Configure**.