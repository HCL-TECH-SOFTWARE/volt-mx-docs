   

Introduction
============

The Offline Objects feature enables users to download objects data from a VoltMX Foundry object service to a mobile device. The downloaded data is used while the device doesn’t have network connectivity and sync it later with the VoltMX Foundry object services back end. The Offline Objects feature uses OData protocol, an open-sourced protocol, to connect directly with object services without the need of another sync server in the middle. A user can use the Offline Objects feature with apps created using VoltMX Iris as well as apps that are developed natively. Offline Objects provide the following advanced object syncing capabilities:

*   **Data download and upload for a single object**  
    Synchronize data for a specific object either on demand or in response to an event using object level sync API.
*   **Data download and upload for all objects in an object service**  
    Synchronize data for all objects of an object service using object service level sync API. This mode of synchronization should be preferred if the data for all objects are needed offline.
*   **Data synchronization using background processes that avoid blocking the app UI**  
    Synchronization jobs are run asynchronously in different threads, thus they avoid blocking the application UI.
*   **Running multiple sync processes in parallel**  
    Data synchronization times can be reduced by performing a sync on more than one object of an object service in parallel. It is advised to limit the number of parallel sync operations to avoid hogging client's resources.
*   **Logging built into offline objects SDK for ease of troubleshooting**  
    The Offline objects feature uses VoltMX logger. In addition to application logs, the offline object library logs useful information at various log levels. See VoltMX Logger for more details on various log levels and managing device logs etc.
*   **Batching for data download**  
    Offline Objects supports record count-based batching. This feature lets devices download a large amount of data over multiple batches. Desired batch size can be set while performing a sync on an object or object service; the default batch size is 500 records.
*   **APIs for tracking sync progress**  
    Sync progress is notified through callbacks to the application along with current state-specific data such the current sync state, a number of records downloaded etc. The application can register to get progress events in the sync API.
*   **APIs for setting filters on data being synchronized to client**  
    Sync API accepts filter (valid OData query string) as an option that is applied during the download of one or more objects. Well developed filter criteria improve download time, as the only subset of data that matches the criteria is downloaded onto the client's application.
*   **Upload/download for object service with hierarchical data**  
    Offline Objects supports uploading and downloading related records as a hierarchy. A user can define hierarchies and supported operations in offline-enabled object services through VoltMX Foundry console.
*   **APIs for performing CRUD operations on an object in the client**  
    Offline access to synchronized data is provided through CRUD API at the object level.
*   **Ability to reset sync**  
    Resets client device database to an empty state. This operation purges the existing data and keeps the tables intact.
*   **Ability to drop the client setup**  
    Drops all offline objects tables and data from the client's device.
    
*   **Ability to rollback sync to last successful state**  
    Rollback lets the application rollback to previous sync state. Rollback is supported at record, object, and object service levels.
*   **iOS and Android native app support**  
    Native apps can consume offline objects capabilities through native SDKs.

See the [Offline Objects API](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/offline_objectsapi_reference_guide/Default.html) and [Getting Started](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/offline_objects_gettingstarted/Default.html) guides for more details on these features, and their usage along with code samples.

Known Issues
------------

*   The relationship type One-to-One is treated as One-to-Many.
*   Rollback on records with relationships may take the client's database to an inconsistent state. You must perform the rollback of related records with caution and in the correct order.
*   Sync failures are not reported back to the application. These errors are logged.
*   You can use the whereConditionAsString parameter can be used to read, update, or delete records with null values.
*   A composite primary key with more than one auto-generated primary key columns is not supported.
*   The client sends 1/0 as value for Boolean types in sync uploads. Define the mapper to convert appropriate target types.
*   You must enable all object services linked to the app for offline use, or else the setup would fail.

<table style="margin-left: 0;margin-right: auto;mc-table-style: url]('Resources/TableStyles/Basic.css');" madcap:conditions="Default.md5 Only,Default.HTML" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 37px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 51px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Rev</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Author</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">1.0</td><td class="TableStyle-Basic-BodyB-Column1-Body1">PK</td><td class="TableStyle-Basic-BodyA-Column1-Body1">PK</td></tr></tbody></table>
