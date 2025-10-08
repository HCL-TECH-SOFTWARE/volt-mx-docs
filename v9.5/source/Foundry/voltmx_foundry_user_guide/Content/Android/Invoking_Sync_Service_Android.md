                               

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > Invoking a Sync Service

Invoking a Sync Service
=======================

*   [Getting Sync Instance](#getting-sync-instance)
*   [Creating a Sync Object](#creating-a-sync-object)
*   [Error Codes](#error-codes)
*   [Create, Read, Update, and Delete (CRUD) operations in Native SDK](#create-read-update-and-delete-crud-operations-in-native-sdk)
*   [Updating a Sync Object](#updating-a-sync-object)
*   [Retrieving an Object](#Retrieve)
*   [Deleting an Object](#deleting-an-object)
*   [Pushing (or syncing ) Changes to the Sync Server](#pushing-or-syncing-changes-to-the-sync-server)

Getting Sync Instance
---------------------

To get sync service instance pass context of the activity.

```
 //getting and initialising sync service
Sync s = null;
try {
    s = new VoltMXClient().getSyncService();
    //init success
} catch (VoltMXException e) {
    //init failed
}
```

Creating a Sync Object
----------------------

1.  Create a Sync Object
    
    You need to have the following files to use Sync SDKs:
    
    Once you upload the sync config file, the system generates code. For Android, the generated code will contain the following two packages:
    
    *   `com.voltmx.sdk.services.sync.codegen`: This contains model class for each object in sync config and named as <yourobject>.java
    *   `com.voltmx.sdk.services.sync.metadata`: This contains single class containing ddls needed to create device database and named as SyncGeneratedMetadata.java
2.  Import above packages into your project.
    

Error Codes
-----------

The following is a list of error codes for Android platform along with the corresponding causes and error messages:

  
| Error Code | Cause | Error Message | Comments |
| --- | --- | --- | --- |
| HCL1000E |   | Unknown Error |   |
| HCL1001E |   | Please initialize init before calling any other API |   |
| HCL1002E |   | Out of memory | [cplusplus > bad\_alloc](http://www.cplusplus.com/reference/new/bad_alloc) |
| HCL1003E |   | Input Output Exception | [cplusplus > ios\_base](http://www.cplusplus.com/reference/ios/ios_base/failure/) |
| HCL1004E |   | Error occurred while creating database path:<dbPath> |   |
| HCL1005E |   | Null Pointer Exception |   |
| HCL1006E |   | Error occurred while parsing metadata |   |
| HCL1007E |   | Row Doesn't Exist |   |
| HCL1008E |   | Session in progress |   |
| HCL1009E |   | Cannot delete as child record(s) with cascades false exist for this record |   |
| HCL8888E |   | whatever message comes from server |   |
| HCL1010E |   | UpgradeRequired In Progress |   |
| 1000 | Unknown error occurred at network layer | Unknown Error occurred |   |
| 1005 | Invalid input url. Please check the url | Invalid input url. Please check the url |   |
| 1012 | Network Request Failed | Request Failed |   |
| 1011 |   | Device has no data connectivity. Please try the operation after establishing connectivity. |   |
| HCL2005E |   | Invalid Arguments for the API (Messages Differ as per the API Calls) For example,   eventType can not be null. Provide a proper eventType   eventSubType value is greater than 256 characters. Provide a Event Subtype with at most 256 chars etc. |   |
| HCL2000E | 1\. Not able to add header or param to service 2. Not able to start a thread for making network call | <Generic exception, error message will be thrown by android layer> |   |
| HCL2001E | fetchDetailsIn Background | [http://docs.oracle.com/ javase/7/docs/ api/java/lang/ InstantiationException.html](http://docs.oracle.com/javase/7/docs/api/java/lang/InstantiationException.html) |   |
| HCL2002E | 1.Fetch Details In Background2. initializing sync service | [http://docs.oracle.com/javase/ 7/docs/api/java/lang/ IllegalAccessException.html](http://docs.oracle.com/javase/7/docs/api/java/lang/IllegalAccessException.html) |   |
| HCL2003E | initializing sync service | [http://docs.oracle.com/javase/7 /docs/api/java/lang/ NoSuchFieldException.html](http://docs.oracle.com/javase/7/docs/api/java/lang/NoSuchFieldException.html) |   |
| HCL2004E | initializing sync service | [http://docs.oracle.com/javase/7/ docs/api/java/lang/ SecurityException.html](http://docs.oracle.com/javase/7/docs/api/java/lang/SecurityException.html) |   |
| HCL2009E | initializing sync service | [http://docs.oracle.com/javase/7/ docs/api/java/lang/ IllegalAccessException.html](http://docs.oracle.com/javase/7/docs/api/java/lang/IllegalAccessException.html) |   |
| HCL2006E | initializing sync service | [http://docs.oracle.com/javase/7 /docs/api/java/lang/ ClassNotFoundException.html](http://docs.oracle.com/javase/7/docs/api/java/lang/ClassNotFoundException.html) |   |
| HCL2010E | Security Exception in networkcalls |   |   |
| HCL2011E | IOException in networkcalls |   |   |
| HCL2012E | Connection Time out error |   |   |
| HCL2013E | No HttpResponseException in network calls |   |   |
| HCL2007E | When no object is found in fetchDetails() |   |   |
| HCL2008E | When encounters an improper JSON |   |   |

Create, Read, Update, and Delete (CRUD) operations in Native SDK
----------------------------------------------------------------

##### Create/Update

For both Create and Update, we have the same APIs. If object passed is a new object then create happens, otherwise if object is fetched from device update happens.

### Creating a Record

**API Used**: public <T extends SyncObject> void save(T syncObject) throws VoltMXException

**Sample Code**

```
 try {
    Categories cat = new Categories();
    cat.setCategoryName("Fruits");
    cat.setDescription("Apple");
    SyncClient.getSyncDataStoreInstance().save(cat);
    //save success
} catch (VoltMXException e) {
    //save failed
}
```

### Creating a Record in Background

**API Used**: public <T extends SyncObject> void saveInBackground(T dataObject, SyncObjectCallback<T> callback)

**Sample Code**:

```
 Categories c = new Categories();
c.setCategoryName("Fruit");
c.setDescription("Apple");

SyncClient.getSyncDataStoreInstance().saveInBackground(c, new SyncObjectCallback < Categories > () {
    @Override
    public void onFailure(VoltMXException e) {
        //save failed
    }

    @Override
    public void onSuccess(Categories arg0) {
        //save success

    }
});
```

### Bulk Create

```
  try {
    List < Categories > catList = new ArrayList < Categories > ();

    //create first category
    Categories cat = new Categories();
    cat.setCategoryName("Fruits");
    cat.setDescription("Apple");

    //create 2nd category
    Categories cat1 = new Categories();
    cat1.setCategoryName("Fruits1");
    cat1.setDescription("Apple1");

    //create 3rd category
    Categories cat2 = new Categories();
    cat2.setCategoryName("Fruits2");
    cat2.setDescription("Apple2");

    catList.add(cat);
    catList.add(cat);
    catList.add(cat2);

    SyncFactory.getSyncDataStoreInstance().bulkSave(catList);
    //bulk save success
} catch (VoltMXException e) {
    //bulk save failed 
}
```

### Bulk Create in Background

```
  List < Categories > catList = new ArrayList < Categories > ();

//create first category
Categories cat = new Categories();
cat.setCategoryName("Fruits");
cat.setDescription("Apple");

//create 2nd category
Categories cat1 = new Categories();
cat1.setCategoryName("Fruits1");
cat1.setDescription("Apple1");

//create 3rd category
Categories cat2 = new Categories();
cat2.setCategoryName("Fruits2");
cat2.setDescription("Apple2");

catList.add(cat);
catList.add(cat);
catList.add(cat2);

SyncClient.getSyncDataStoreInstance().bulkSaveInBackground(catList,
    new SyncObjectListCallback < Categories > () {

        @Override
        public void onFailure(VoltMXException arg0) {
            // TODO Auto-generated method stub

        }

        @Override
        public void onSuccess(List < Categories > arg0) {
            // TODO Auto-generated method stub

        }
    });

```

### Bulk Update

```
  //bulkupdate
try {
    //First get records from db
    Query < Categories > query = SyncClient.getSyncDataStoreInstance().createQuery(Categories.class);
    query.addWhereClause("CategoryName='Fruits'");
    List < Categories > categoriesList = SyncClient.getSyncDataStoreInstance().executeQuery(query);

    //update categories list
    for (Categories cat: categoriesList) {
        cat.setCategoryName("Fruits Updated");
    }
    SyncClient.getSyncDataStoreInstance().bulkSave(categoriesList);
    //save success
} catch (VoltMXException e) {
    //save failed
}
```

### Bulk Update in Background

```
  //bulkupdateinbackground
//First get records from db
Query < Categories > query = SyncClient.getSyncDataStoreInstance().createQuery(Categories.class);
query.addWhereClause("CategoryName='Fruits'");
SyncClient.getSyncDataStoreInstance().executeQueryInBackground(query,
    new SyncObjectListCallback & lt; Categories & gt;
    () {

        @Override
        public void onFailure(VoltMXException arg0) {
            //get failure

        }

        @Override
        public void onSuccess(List < Categories > arg0) {
            //update categories list
            for (Categories cat: arg0) {
                cat.setCategoryName("Fruits Updated");
            }
            SyncClient.getSyncDataStoreInstance().bulkSaveInBackground(arg0,
                new SyncObjectListCallback < Categories > () {

                    @Override
                    public void onFailure(VoltMXException arg0) {
                        // update failure

                    }

                    @Override
                    public void onSuccess(List < Categories > arg0) {
                        //update success

                    }
                });
        }
    });
```

Updating a Sync Object
----------------------

### Updating a Record

```
  try {
    //First get record from db
    PrimaryKey pk = SyncClient.getSyncDataStoreInstance().createPrimaryKeyInstance();
    pk.setAttribute("CategoryID", 1);
    Categories cat = SyncClient.getSyncDataStoreInstance().getObject(Categories.class, pk);

    //update the record
    cat.setCategoryName("Fruits Updated");
    cat.setDescription("Apple Updated");
    SyncClient.getSyncDataStoreInstance().save(cat);
    //save success
} catch (VoltMXException e) {
    //save failed
}
```

### Updating a Record in Background

```
  //First get record from db
PrimaryKey pk = SyncClient.getSyncDataStoreInstance().createPrimaryKeyInstance();
pk.setAttribute("CategoryID", 1);
SyncClient.getSyncDataStoreInstance().getObjectInBackground(Categories.class, pk,
    new SyncObjectCallback & lt; Categories & gt;
    () {

        @Override
        public void onFailure(VoltMXException arg0) {
            //get record failed

        }

        @Override
        public void onSuccess(Categories c) {
            //update the record
            c.setCategoryName("Fruits Updated");
            c.setDescription("Apple Updated");
            SyncClient.getSyncDataStoreInstance().saveInBackground(c, new SyncObjectCallback & lt; Categories & gt;
                () {
                    @Override
                    public void onFailure(VoltMXException e) {
                        //save failed
                    }

                    @Override
                    public void onSuccess(Categories arg0) {
                        //save success

                    }
                });

        }

    });
```

Retrieving an Object
--------------------

### Executing Queries

Query class can be used to define queries.

#### Execute Query

```
  SyncDataStore dataStore = SyncClient.getSyncDataStoreInstance();
Query < Categories > query = dataStore.createQuery(Categories.class);
query.addSelectColumn("CategoryId");
query.addWhereClause("	
		try {
			List<Categories> categoriesList = dataStore.executeQuery(query);
			//query success
		} catch (VoltMXException e) {
			//query failed
		}
```

#### Execute Query in Background

```
  SyncDataStore dataStore = SyncClient.getSyncDataStoreInstance();
Query < Categories > query = dataStore.createQuery(Categories.class);
query.addSelectColumn("CategoryId");
query.addWhereClause("CategoryName='Fruits'");
dataStore.executeQueryInBackground(query, new SyncObjectListCallback < Categories > () {

    @Override
    public void onFailure(VoltMXException arg0) {
        //query failed

    }

    @Override
    public void onSuccess(List<Categories> arg0) {
        //query success

    }
});
```

### Getting an Object

To retrieve an object from database using its primary key.

#### getObject

```
  //getobject
try {
    //define pk
    PrimaryKey pk = SyncClient.getSyncDataStoreInstance().createPrimaryKeyInstance();
    pk.setAttribute("CategoryID", 1);
    Categories cat = SyncClient.getSyncDataStoreInstance().getObject(Categories.class, pk);
    //get success
} catch (VoltMXException e) {
    //get failed
}
```

#### getObject in background

```
  //getobject in background
//define pk
PrimaryKey pk = SyncClient.getSyncDataStoreInstance().createPrimaryKeyInstance();
pk.setAttribute("CategoryID", 1);
SyncFactory.getSyncDataStoreInstance().getObjectInBackground(Categories.class, pk,
    new SyncObjectCallback < Categories > () {

        @Override
        public void onFailure(VoltMXException arg0) {
            //get record failed
        }

        @Override
        public void onSuccess(Categories c) {
            //get success
        }

    });
```

### Fetching an Object

To fetch all the details of a partially fetched object.

#### Fetching an Object

```
  //fetchDetails try{ //Get partial object - Only CategoryIds from Category table 
SyncDataStore dataStore = SyncClient.getSyncDataStoreInstance();
Query < Categories > query = dataStore.createQuery(Categories.class);
query.addSelectColumn("CategoryId");
query.addWhereClause("CategoryName='Fruits'");
List < Categories > categoriesList = dataStore.executeQuery(query);
//now fill all the partial objects 
for (Categories c: categoriesList) {
    dataStore.fetchDetails(C);
}
//fetch success 
} catch (VoltMXException e) {
    //fetch failed 
}

```

#### Fetching an Object in Background

```
  //fetchDetails in background
try {
    //Get partial object - Only CategoryIds from Category table
    SyncDataStore dataStore = SyncClient.getSyncDataStoreInstance();
    Query < Categories > query = dataStore.createQuery(Categories.class);
    query.addSelectColumn("CategoryId");
    query.addWhereClause("CategoryName='Fruits'");
    List < Categories > categoriesList = dataStore.executeQuery(query);

    //fill first partial object
    Categories c = categoriesList.get(0);
    dataStore.fetchDetailsInBackground(c, new SyncObjectCallback < Categories > () {
        @Override
        public void onFailure(VoltMXException arg0) {
            //fetch success
        }

        @Override
        public void onSuccess(Categories arg0) {
            //fetch failed

        }
    });

    //fetch success
} catch (VoltMXException e) {
    //fetch failed
}

```

Deleting an Object
------------------

### Delete

```
 try {
    //First get record from db
    PrimaryKey pk = SyncClient.getSyncDataStoreInstance().createPrimaryKeyInstance();
    pk.setAttribute("CategoryID", 1);
    Categories cat = SyncClient.getSyncDataStoreInstance().getObject(Categories.class, pk);
    SyncClient.getSyncDataStoreInstance().delete(cat);
    //delete success
} catch (VoltMXException e) {
    //delete failed
}
```

### Delete in Background

```
  //Define PK
PrimaryKey pk = SyncClient.getSyncDataStoreInstance().createPrimaryKeyInstance();
pk.setAttribute("CategoryID", 1);
SyncClient.getSyncDataStoreInstance().deleteInBackground(Categories.class, pk, new SyncCallback() {

    @
    Override
    public void onFailure(VoltMXException arg0) {
        //delete failed
    }

    @
    Override
    public void onSuccess() {
        //delete success
    }

});                        
```

### Bulk Delete

```
  //bulkdelete
try {
    //First get records from db
    Query < Categories > query = SyncClient.getSyncDataStoreInstance().createQuery(Categories.class);
    query.addWhereClause("CategoryName='Fruits'");
    List < Categories > categoriesList = SyncClient.getSyncDataStoreInstance().executeQuery(query);

    SyncClient.getSyncDataStoreInstance().bulkDelete(categoriesList);
    //delete success
} catch (VoltMXException e) {
    //delete failed
}
```

### Bulk Delete in Background

```
  //bulkdeleteinbackground
//First get records from db
Query < Categories > query = SyncFactory.getSyncDataStoreInstance().createQuery(Categories.class);
query.addWhereClause("CategoryName='Fruits'");
SyncFactory.getSyncDataStoreInstance().executeQueryInBackground(query, new SyncObjectListCallback < Categories > () {

    @Override
    public void onFailure(VoltMXException arg0) {
        //get failure
    }

    @Override
    public void onSuccess(List < Categories > arg0) {
        SyncClient.getSyncDataStoreInstance().bulkDeleteInBackground(arg0, new SyncCallback() {

            @Override
            public void onFailure(VoltMXException arg0) {
                // delete failure
            }

            @Override
            public void onSuccess() {
                //delete success
            }
        });
    }
});
```

Pushing (or syncing ) Changes to the Sync Server
------------------------------------------------

The startSessionInBackgroundAPI can be used to sync (upload and download/push and pull) changes between device and sync server. This is purely asynchronous API. To get notifications during the API execution you can implement SyncListener interface and pass object of implementing class to synchronize.

```
  Sync s;
try {
    //get sync service
    s = new VoltMXClient().getSyncService();

    // create instance of sync listener. ListenerImpl which implements SyncListener
    SyncListener listener = new ListenerImpl(this);

    //add sync listener
    s.addListener(listener);

    //start sync session
    s.startSessionInBackground();
} catch (VoltMXException e) {
    e.printStackTrace();
}
```

### Configuring Various Sync Options

You can use sync options class to configure various sync options like:

*   **Upload Error Policy**: This policy can be used to configure whether to continue or abort on getting upload error. Default value is continue on error.
*   **Schema Upgrade Policy**: This policy is used to configure what action to be taken when schema upgrade is available. Default value is upload and upgrade.
*   **Enabling or disabling download/upload for a scope**: Default value is continue on error.
*   **Adding filter for syncing**: This can be used to set download filters. By default, all pass filters are used.
*   **Configuring remove after upload policy**: this can be used to configure removal of records instance from device after successful upload. By default, this option is disabled for all scopes.

### Configuring NetworkOptions

The NetworkOptions class can be used to configure various options for APIs that use the network.

For example, startSessionInBackground, performUpgradeInBackground, and isUpgradeRequiredInBackground.

Following options can be configured:

1.  **Network Timeout**: the time for which device should wait for server to respond. If server does not respond in the specified time, an error is thrown. Default value is ten seconds.
2.  **Retry Count**: Retry count specifies how many times a request can be sent to server in case of a server error. Default value is five.
3.  **Retry Wait Time**: Time between two retries. Default value is five seconds.
4.  **Retry Listener**: The listener which should be invoked on each retry.
