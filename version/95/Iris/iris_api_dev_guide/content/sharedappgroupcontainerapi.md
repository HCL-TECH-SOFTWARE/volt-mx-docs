<a id="shared-app-group-container-api-for-ios"></a>

Shared App Group Container API for iOS
======================================

Apps on an iOS device can share common data using an app group container. The Shared App Group Container API provides functions and objects to create and manage app groups.

Each app group is associated with a data container present in a persistent storage outside of the application sandbox of any app on the iOS device. Every app must have the right permissions and provisioning profiles that enable it to access the app group. Each app group is specified by a unique identifier.

To provide the app group functionality, **read**, **save**, and **delete** functions in the **voltmx.ds** Namespace (the [Offline Data Access API](data_store_library.md#offline-data-access-api)) now take an optional parameter called **storeContext**. The StoreContext parameter has the **storeAsUserPreference** key that is set to true to access the data in an app group, and **VoltMXAppGroupID** that is unique identifier specifying the app group to be accessed. To retrieve the root directory path for the app group, your app calls **voltmx.io.FileSystem.getAppGroupDirectoryPath** using the **voltmxAppGroupID** key.

The [storeContext](voltmx.ds_functions.md) parameter is a dictionary that holds the following keys.

| Key | Type | Description
| --- | --- |--- |
| storeAsUserPreference | Boolean | Contains true to access the data in an app group. Otherwise, set to false.|
| voltmxAppGroupID | string | Holds a unique identifier that specifies the app group to be accessed.|

To retrieve the root directory path for the app group, your app can invoke the [voltmx.io.FileSystem.getAppGroupDirectoryPath](voltmx.io.filesystem_functions.html#getAppGroupDirectoryPath).

![](resources/prettify/onload.png)
