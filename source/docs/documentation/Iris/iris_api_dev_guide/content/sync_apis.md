---
layout: "documentation"
category: "iris_api_dev_guide"
---
                             

You are here: Sync API

Sync API
========

The Sync API is a hook that enables a client app on a user's device to access the functionality of the [VoltMX Foundry Sync ORM API]({{ site.baseurl }}/docs/documentation/Foundry/vmf_sync_orm_api_guide/Content/homepage.html) through a server-side app.

The Sync API contains the following API elements:

[sync Namespace](sync_functions.html)

  
| Function | Description |
| --- | --- |
| [sync.getPendingAcknowledgement](sync_functions.html#sync-getpendingacknowledgement) | Fetches pending acknowledgment for all objects. |
| [sync.getPendingUpload](sync_functions.html#sync-getpendingupload) | Fetches all the rows for all objects those are pending for upload. |
| [sync.init](sync_functions.html#sync-init) | Used to initialize the creation of device database for sync. |
| [sync.reset](sync_functions.html#sync-reset) | Resets the device database to initial state. |
| [sync.rollbackPendingLocalChanges](sync_functions.html#sync-rollbackpendinglocalchanges) | Used to roll back the application level pending changes which are not synchronized. |
| [sync.startSession](sync_functions.html#sync-startsession) | Used to start the sync process and download the data from the Enterprise Data Source to the device database. |

 

[Sync Object](sync_object_methods.html)

| Method | Description |
| --- | --- |
| [<syncObject>.create](sync_object_methods.html#lt-syncobject-gt-create) | Enables you to create a record in a Sync object. |
| [<syncObject>.deleteByPK](sync_object_methods.html#lt-syncobject-gt-deletebypk) | Enables you to delete a record using the object's primary key. |
| [<syncObject>.getAll](sync_object_methods.html#lt-syncobject-gt-getall) | Fetches all the records for a Sync object. |
| [<syncObject>.getAllDetailsByPK](sync_object_methods.html#lt-syncobject-gt-getalldetailsbypk) | Fetches a record using primary key value for a Sync object. |
| [<syncObject>.getPendingAcknowledgement](sync_object_methods.html#lt-syncobject-gt-getpendingacknowledgement) | Enables you to fetch pending acknowledgment for a Sync object. |
| [<syncObject>.getPendingUpload](sync_object_methods.html#lt-syncobject-gt-getpendingupload) | Enables you to fetch all the rows for a Sync object which are pending for upload. |
| [<syncObject>.getXXX](sync_object_methods.html#lt-syncobject-gt-getxxx) | Retrieves all the records from the related object(XXX) corresponding to the current primary key. |
| [<syncObject>.remove](sync_object_methods.html#lt-syncobject-gt-remove) | Enables you to delete a record for a Sync object using the _where_ clause. |
| [<syncObject>.rollbackPendingLocalChanges](sync_object_methods.html#lt-syncobject-gt-rollbackpendinglocalchanges) | Enables you to rollback the object level pending changes which are not synchronized. |
| [<syncObject>.rollbackPendingLocalChangesByPK](sync_object_methods.html#lt-syncobject-gt-rollbackpendinglocalchanges) | Enables you to fetch all the records for a Sync object. |
| [<syncObject>.update](sync_object_methods.html#lt-syncobject-gt-update) | Enables you to update a record for a Sync object using a _where_ clause |
| [<syncObject>.updateByPK](sync_object_methods.html#lt-syncobject-gt-updatebypk) | Enables you to update a record using the object's primary key. |

![](resources/prettify/onload.png)
