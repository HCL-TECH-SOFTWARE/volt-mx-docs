## <a name="CreateMongoDBObject"></a>Creating a MongoDB Object Service

With Object Services, you can create an object on VoltMX Foundry that uses MongoDB for storing data for apps.

MongoDB is a free and open-source cross-platform document-oriented database. Classified as a NoSQL database, MongoDB avoids the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster.

#### How to Create a MongoDB Object Service

To create a MongoDB object service, do the following:

1.  On the **Apps** page, click **Add New**.

2.  Click the **Edit App Name** button to enter a unique name for the app. For example, SampleMongoDBApp.

3.  Click the **Objects service** tab.

4.  Click **Configure New**.

5.  Click in the **Name** field, and enter a name for the object service. For example, SampleMongoDBObject.

6.  Click in the **Endpoint Type** field. In the drop-down menu, select **MongoDB**.

7.  Under **Security Level**, select **Authenticated App Use**. If you set the security level to Public, you are not required to enter the user name and password.

8.  Click in the **Hostname** field. Enter the name of the MongoDB host.

9.  Click in the **Port** field. Enter the port of the MongoDB.

10.  Click in the **Database Name** field. Enter the name of the MongoDB database that you are using for the object service.

11.  If you have set up an identity service that validates the authentication of the users before accessing your application, enter the user name and password for the Identity Service.

12.  Optionally, enter the following properties for the MongoDB database: Connections per host (the total number of connections available for connection to the host), Maximum wait time (wait time in microseconds for the lock acquisitions), Connection timeout (the default is never timeout), Socket timeout (the default is never timeout), and Description.

13.  Click **Save & Configure**.
14.  On the **Configure** page for the object service, click **Generate**.
15.  On the **Import Objects from Backend** screen, select **MongoCollection** and **MongoDocument**, and then click **Next**.

16.  Click **Generate**.

#### Test the Methods in the Data Model

1.  Click the **Mapping** tab in the navigation pane.

2.  Expand the MongoCollection object.

3.  Click **Create**.

4.  Click the **Test** tab.

5.  In **Request Payload**, enter the name of a collection to create. For example, myTestCollection.

6.  Expand the MongoDocument object.
7.  Click **Create**.
8.  In the **Mapping Configuration** screen, click **Test**.
9.  In **Request Payload**, type the following code to add a record to the collection.
10.  Click **Send**.