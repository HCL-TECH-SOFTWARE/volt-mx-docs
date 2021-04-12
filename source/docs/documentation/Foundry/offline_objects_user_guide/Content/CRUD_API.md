---
layout: "documentation"
category: "offline_objects_user_guide"
---

CRUD API
========

After creating the sync environment on the client device by using the [setup]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/OfflineObjectSetup.html) API, the app can work with the device database through the [CRUD]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Object_Level.html) API. The CRUD operations (Create, Read, Update, and Delete) are local to the device. Hence, active network connectivity is mandatory.

Offline Objects uses [SQLite](https://www.sqlite.org/index.html) to create tables to store offline data on Android, iOS, and Windows-based devices and [IndexdDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for Web. The Read API for Web does not support all features when compared to the native counterparts. This is due to the limitations of the underlying database system (IndexedDB).

Offline Objects CRUD API is exposed as an instance method of an object. They offer various options such as Track Changes and Mark for Upload.

For more information about CRUD API, refer to the [Object-Level APIs]({{ site.baseurl }}/docs/documentation/Foundry/offline_objectsapi_reference_guide/Content/Object_Level.html).
