# Configuration

## Custom Data Adapters - Overview

VoltMX Foundry Console supports the creation of custom data adapters. The custom data adapters uploaded into the VoltMX Foundry Console in API Management are supported in Integration and Object Services. An interface to upload, download, update, and delete data adapters is provided in the VoltMX Foundry Console. The data adapters are uploaded in a ZIP file format and stored in a workspace.

Custom Data Adapters act as reusable services with a defined set of operations. These services work similar to any other service in the run-time environment.

### How to Create a Custom Data Adapter

In order to create a custom data adapter, you must already have a valid RAML or Open API file created.

To create a custom data adapter, perform the following steps:

1.  Click **API Managment** in the left pane of VoltMX Foundry Console, and then click the **Custom Data Adapters** tab.
2.  Click the **Create Data Adapter** button.
3.  Select your RAML or Open API that you want to use.
4.  In the Create Data Adapter window, under **Adapter Name**, type a name for your data adapter.
5.  Under **Asset Version**, type the version number associated with this data adapter. The version follows the format **X.X.XX**.
6.  Under **Minimum Version Required**, click the drop-down menu and select the minimum version of VoltMX Foundry that this data adapter requires.
7.  If there are any specific connection parameters that need to be passed for the data adapter, click on **Connection Parameters**, and then enter the appropriate information in the **Parameter Name**, **Type**, and **Value** boxes.
8.  Under Adapter Description, type a brief description of what the adapter is designed to do.
9.  If you want to publish the data adapter to The Marketplace, select the **Publish to Marketplace after creation** check box.
10.  Click **Create**.

A ZIP file of the data adapter is downloaded to your local system. If you submitted your adapter to the Marketplace, a notification will appear confirming submission of your adapter to the Marketplace.

### How to Import a Custom Data Adapter

To import a custom data adapter, perform the following steps:

1.  Click **API Managment** in the left pane of VoltMX Foundry Console, and then click the **Custom Data Adapters** tab.
2.  Click the **Import** button.
3.  In the Import window, do one of the following:
    *   Drag and drop your ZIP file in the Import window
    *   Click **Browse** and select the ZIP file from your local system to upload, and then click **Import**.
    *   Click **Add from VoltMX Marketplace** button, click on the adapter that you want, click **Next**, and then click **Import**.

### How to Publish a Custom Data Adapter to Marketplace

If you decide later to publish your adapter to the marketplace, in the list of custom data adapters, click the cogwheel icon located to the right of your data adapter you want to submit, and select **Publish to Marketplace** from the drop-down menu.

### How to Delete a Custom Data Adapter

If you want to delete a custom data adapter, in the list of custom data adapters, click the cogwheel icon located to the right of your data adapter you want to delete, and select **Delete** from the drop-down menu.

### How to Update a Custom Data Adapter

To update a custom data adapter, perform the following steps:

1.  Click the cogwheel icon located to the right of your data adapter you want to delete, and select **Update** from the drop-down menu.
2.  In the Update Data Adapter window, do one of the following:
    *   Drag and drop your ZIP file in the Import window
    *   Click **Browse** and select the ZIP file from your local system to upload, and then click **Update**.
    *   Click **Add from VoltMX Marketplace** button, click on the adapter that you want, click **Next**, and then click **Update**.

### How to Download a Custom Data Adapter

If you want to download a copy of a custom data adapter to your local system, in the list of custom data adapters, click the cogwheel icon located to the right of your data adapter you want to download, and select **Download** from the drop-down menu. You will recieve a notification in your browser that the data adapter was successfully downloaded.