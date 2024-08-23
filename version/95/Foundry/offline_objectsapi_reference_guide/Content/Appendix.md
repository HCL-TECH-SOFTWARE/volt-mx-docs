
Appendix
========

Error Handling
--------------

Errors are reported either through error or failure handlers. Error object is passed as an argument to the error handler. All the APIs accept success and failure handlers.

A developer can query for error codes, error description, userInfo, and so on. Error object format for each language is as follows. For Offline Objects error codes, refer to the [Error Codes](#error-codes) section.

  
| Language | Error Handling |
| --- | --- |
| JavaScript | **Signature**: function onFailure(error)<br>**Error object** : JSObject<br>**Error code** : error.code of type number. **Error description** : error.message of type string. **Error domain**: error.domain of type string, denotes the error domain. <br>**Error callstack**: error.callStack of type string. <br>**Sample Code** :<br><pre><code>var sdk=new voltmx.sdk();<br>var options={};<br>function onSuccess() {<br>alert("Application setup successful"); }<br> function onFailure(error) {<br> voltmx.print("Error Code: " + error.code);<br> voltmx.print("Error Domain: " + error.domain);<br> voltmx.print("Error Message: " + error.message);<br> voltmx.print("Error Callstack:" + error.callStack); }<br> sdk.getCurrentInstance().OfflineObjects.setup(options, onSuccess, onFailure);</code></pre>|
| Java | **Signature**: public void onFailure(error) <br>**Error object** : OfflineObjectsException <br>**Error code** : (OfflineObjectsException)error.getErrorCode() of type int. <br>**Error description** : (OfflineObjectsException)error.getMessage() of type string. Error domain : (OfflineObjectsException)error.getDomain() of type string Error callstack : (OfflineObjectsException)error.getCallStack() of type string. <br>**Sample Code** :<br><pre><code>VoltMXClient sdk= new VoltMXClient();<br>OfflineObjects appSync = sdk.getOfflineObjects();<br>HashMap<String, Object\> options=new HashMap<String, Object\>();<br>appSync.setup(options, new VMXCallback() {<br> @Override <br>public void onSuccess(Object object) {<br> Log.d("Application", "Application setup successful");<br> }<br> @Override<br> public void onFailure(Object error) {<br> OfflineObjectsException e = (OfflineObjectsException)error;<br> Log.d("Application", "Error Code:" + e.getErrorCode()); <br>Log.d("Application", "Error Domain:" + e.getDomain()); <br>Log.d("Application", "Error Message:" + e.getMessage()); <br>Log.d("Application", "Error Callstack:" + e.getCallStack()); }<br>}); </code></pre>|
| Objective C | **Signature**: onFailure:^(id error) <br>**Error object** : Error Object <br>**Error code** : error.code of type NSInteger. <br>**Error description** : \[error.userInfo localizedDescription\] of type NSString. Error domain : error.domain of type string Error callstack : \[error.userInfo callStack\] of type string. <br>**Sample Code** :<br><pre><code>VMXClient \*sdk= \[VMXClient sharedClient\]; <br>OfflineObjects \*applicationSync = \[sdk getOfflineObjects\];<br>NSDictionary \*options=@{};<br>\[applicationSync setup:options             <br>onSuccess:onSuccess              <br>onFailure:onFailure\];   <br>VMXSuccessCompletionHandler onSuccess = ^void(id error){     <br>NSLog(@"Application setup successful"); };     <br>VMXFailureCompletionHandler onFailure = ^void(id object){     <br>OfflineObjectsError \*error = (OfflineObjectsError)object;     <br>NSLog(@"Error code: %@" error.code);     <br>NSLog(@"Error domain: %@" error.domain);    <br>NSLog(@"Error message: %@" \[error.userInfo  localizedDescription\]);     <br>NSLog(@"Error Callstack:%@",\[error.userInfo callStack\]); }</code></pre> |

Sync Errors
-----------

Sync operations performed on an object or object service report the sync errors back to the application developer through success and failure callbacks. Sync errors convey why certain records failed to sync with the backend. Sync errors carry backend assigned error codes and messages.

In a session, if a subset of records fails to sync with the backend, the sync errors are reported through success callback because this scenario is considered as sync partial success scenario.

If all records of a sync session fail to sync with the backend, the sync errors are reported through failure callback because this scenario is considered as a sync complete failure scenario.

Sync errors can be accessed using **syncErrors** key and are segregated as upload and download errors. These convey errors occurred as part of upload and download phases and are accessed using the **upload** and **download** keys on syncErrors object. The sample sync errors containing both upload and download errors from response JSON are as follows:

```
{
  "syncErrors": {
    "upload": [
      {
        "opstatus": 20006,
        "object": "VTI_SAMPLE_ORDER",
        "primaryKeys": {
          "ORDER_NUMBER": "19"
        },
        "errmsg": "Invalid packed numeric format: TOTAL_VALUE check this once",
        "objectService": "SAPObjectService"
      },
      {
        "opstatus": 20006,
        "object": "VTI_SAMPLE_ORDER",
        "primaryKeys": {
          "ORDER_NUMBER": "20"
        },
        "errmsg": "Invalid packed numeric format: TOTAL_VALUE check this once",
        "objectService": "SAPObjectService"
      },
      {
        "opstatus": 20010,
        "object": "VTI_SAMPLE_ORDER",
        "primaryKeys": {
          "ORDER_NUMBER": "7184"
        },
        "errmsg": "unable to perform update on VTI_SAMPLE_ORDER",
        "objectService": "SAPObjectService"
      }
    ],
    "download": [
      {
        "opstatus": 20014,
        "object": "VTI_SAMPLE_ORDER",
        "errmsg": "unable to get from backend",
        "objectService": "SAPObjectService"
      },
      {
        "opstatus": 20014,
        "object": "VTI_SAMPLE_ORDER_ITEM",
        "errmsg": "Object Source Mapping for VTI_SAMPLE_PRODUCT not found in object definition",
        "objectService": "SAPObjectService"
      }
    ]
  }
}

```

All the records in the sync errors carry the following information:

```
"primaryKeys" 	– Primary keys of the current record
"object"   	 - Name of the entity or object this record belongs to
"objectService" – Name of the object service this object belongs to
"opstatus" 	 – Error code reported from the backend data system
"errmsg"   	 - Error message reported from the backend data system
```

Sample code to retrieve sync errors from success or failure callbacks.

  
| Language | Sync Errors |
| --- | --- |
| JavaScript | <pre><code>var object = new voltmx.sdk.VMXObj("CATEGORY"); <br>function onSuccess(data){ <br>if(data.syncErrors) { <br>alert("sync errors for given object sync operation is" + JSON.stringify(data.syncErrors)); <br>} else { <br>alert("Object level sync operation is success" + JSON.stringify(data)); }<br> }<br> function onFailure(error){ <br>if(error.syncErrors) { <br>alert("Object level sync failed with sync errors" + JSON.stringify(error.syncErrors)); <br>} else {<br> <br>alert("Object level sync failed"+JSON.stringify(error)); }<br>} <br>var options = {}; <br>object.startSync(options, onSuccess, onFailure, null);</code></pre> |
| Java | <pre><code>syncObject = new VMXObj("CATEGORY");<br>HashMap<String, Object\>options=new HashMap<String, Object\>();<br>syncObject.startSync(options, new VMXCallback() { <br>@Override <br>public void onSuccess(Object object) { <br>HashMap<String, Object\> successObject = (HashMap<String, Object\>) object; <br>if(successObject.containsKey("syncErrors")) { <br>Log.d("Object sync", "Object Sync is partial Success for syncObject with sync errors " + successObject.get("syncErrors")); <br>} else { <br>Log.d("Object sync", "Object Sync Successful for syncObject" + successObject); <br>} <br>} <br>@Override <br>public void onFailure(Object object) { <br>OfflineObjectsException e= (OfflineObjectsException) object; <br>List<HashMap> syncErrors = e.getSyncErrors(); <br>if(syncErrors != null &;&; syncErrors.size> 0) { <br>Log.d("Object sync", "Object Sync is unsuccessful for syncObject with sync errors " + syncErrors); <br>} else { <br>Log.d("Object Sync", "Object Sync unsuccessful for syncObject with Error :" + e); } <br>} <br>}, null);</code></pre> |
| Objective C | <pre><code>VMXObj \*object = \[\[VMXObj alloc\] initWithName:objectName error:&error\];<br>NSDictionary \*options=@{};<br>\[object startSync:options <br>onSuccess:^(id object){ <br>if(\[object objectForKey:@"syncErrors"\]) { <br>NSLog(@"Sync is partially successful for %@ Object! with sync errors", name, \[object objectForKey:@"syncErrors"\]); <br>} else { <br>NSLog(@"Sync successful for %@ Object!", name); } <br>} <br>onFailure:^(id object){ <br>OfflineObjectsError \*error = (OfflineObjectsError \*)object; <br>NSArray<NSDictionary \*> \*syncErrors = \[\[error userInfo\] objectForKey:@"syncErrors"\]; <br>if(syncErrors) { <br>NSLog(@"Sync is complete failure for %@ Object! with sync errors", name, syncErrors); <br>} else { <br>NSLog(@"Error: Sync unsuccessful because of error:%@", \[syncError description\]); <br>} <br>}onProgress:nil\];</code></pre> |

Error Codes
-----------

Error codes and the associated messages from the Offline Objects feature are as follows. An error message will also contain the root cause details (error details).

  
| Error Code | Error Messages |   Description |
| --- | --- | --- |
| 2000 | An error occurred in the database layer:<error details\> | SQLite errors other than query execution errors. |
| 2001 | An error occurred while executing select query:<error details\> |   |
| 2002 | An error occurred while executing a SQL transaction with no rollback on error enabled:<error details\> |   |
| 2003 | An error occurred while executing a SQL transaction with rollback on error enabled:<error details\> |   |
| 2004 | Failed to encrypt database:<error details\> |   |
| 2005 | Error copying SQLCipher asset files to device:<error details\> |   |
| 2006 | Failed to open or create database:<error details\> |   |
| 2007 | Failed to load the SQLCipher libraries:<error details\> |   |
| 2008 | Failed to find and load the supported assets for SQLite database encryption:<error details\> |   |
| 2009 | An error occurred while upgrading the database schema: <error details\> |   |
| 2010 | Invalid database schema version found, cannot upgrade the database schema. |   |
| 2030 | An error occurred in the network layer:<error details\> |   |
| 2031 | Network call failed due to connection timeout:<error details\> |   |
| 2032 | Network call failed due to socket connection timeout:<error details\> |   |
| 2033 | Network call failed due to security related issues:<error details\> |   |
| 2034 | Unable to connect to host:<error details\> |   |
| 2035 | Host not found:<error details\> |   |
| 2036 | No active internet connectivity found:<error details\> |   |
| 2037 | Network response is either null or invalid JSON:<error details\> |   |
| 2038 | Server responded with error opstatus:<error details\> |   |
| 2039 | The URL used is invalid:<error details\> |   |
| 2043 | HTTP message integrity check failed. |   |
| 2300 | An error occurred in the ORM operation:<error details\> | CRUD operation errors. |
| 2301 | No record found in the database for given columns values or where condition:<error details\> |   |
| 2302 | Foreign key constraint violation error:<error details\> |   |
| 2303 | Updating values for primary key(s) of a record is not allowed:<error details\> | Update operation doesn’t support updating values for primary keys. |
| 2304 | Supplied options are invalid, common causes are incorrect property name or value or data types:<error details\> | Verify record provided to the CRUD operations for invalid column names or data types. |
| 2305 | Primary key values cannot be null or empty:<error details\> |   |
| 2306 | Property or column names cannot be null or empty in orderByMap option:<error details\> |   |
| 2307 | Cannot perform ORM operations on null or empty record:<error details\> |   |
| 2308 | Mandatory field or property missing in the ORM input:<error details\> | Invalid inputs to CRUD operations. |
| 2309 | Value should not be sent for auto generated columns:<error details\> | Don’t supply values for primary keys that are marked as auto generated in a Create operation. |
| 2310 | Invalid field or property found in the ORM input:<error details\> | Invalid property or column name in the supplied input to CRUD operations. |
| 2311 | ORM input is of invalid data type or length:<error details\> |   |
| 2330 | Setup failed with an error:<error details\> |   |
| 2331 | Schema setup failed with an error:<error details\> |   |
| 2332 | Metadata refresh failed with an error:<error details\> |   |
| 2333 | Object metadata not found for the given offline object:<error details\> | Ensure that input contains valid object or object service name or object properties. |
| 2334 | Namespace metadata not found for the given offline object:<error details\> | Ensure that input contains valid object or object service name or object properties. |
| 2335 | Root metadata not found for the given offline object:<error details\> | Ensure that input contains valid object or object service name or object properties. |
| 2336 | Error parsing object attributes in object metadata:<error details\> | Ensure that input contains valid object or object service name or object properties. |
| 2337 | Error parsing object metadata:<error details\> |   |
| 2338 | Error parsing relationships:<error details\> |   |
| 2339 | Error parsing Offline Objects metadata:<error details\> |   |
| 2340 | Invalid root metadata found for the given object service:<error details\> | Ensure that input contains valid object or object service name or object properties. |
| 2341 | Metadata JSON from server does not contain TIMESTAMP key:<error details\> |   |
| 2342 | Invalid Metadata JSON string form: EM\_INVALID\_METADATA\_JSON<error details\> |   |
| 2343 | An error occurred while creating tables during setup:<error details\> |   |
| 2344 | Namespace cannot be null or empty in the metadata:<error details\> |   |
| 2345 | Metadata JSON from server does not contain OBJECTS key:<error details\> |   |
| 2346 | Invalid relationship type found. Supported types are 'One To Many', 'Many To One' and 'One To One':<error details\> |   |
| 2347 | Metadata url is null/empty:<error details\> |   |
| 2348 | Cannot generate initial indices:<error details\> |   |
| 2349 | Metadata attributes cannot be null/empty:<error details\> |   |
| 2350 | Attribute operations cannot be null /empty:<error details\> |   |
| 2351 | Unable to serialize delta context value:<error details\> |   |
| 2352 | Unable to serialize:<error details\> |   |
| 2400 | Cannot create Offline Object with name as null or empty string:<error details\> |   |
| 2401 | Cannot create Offline Object Service with name as null or empty string:<error details\> |   |
| 2403 | Unable to parse namespace metadata:<error details\> |   |
| 2404 | SDK Object name cannot be null/empty:<error details\> |   |
| 2405 | No delta context found while creating download request for the given object service:<error details\> |   |
| 2406 | Invalid object service name:<error details\> |   |
| 2407 | MetaInfo table does not exist:<error details\> |   |
| 2408 | An error occurred while inserting into metaInfo table:<error details\> |   |
| 2409 | Attribute name cannot be null/empty:<error details\> |   |
| 2411 | An error occurred while performing ORM operation on metaInfo table:<error details\> |   |
| 2412 | Metadata is null/empty for object service:<error details\> |   |
| 2430 | An error occurred while dropping the database: <error details\> |   |
| 2460 | An error has occurred in the sync layer:<error details\> |   |
| 2461 | Sync is currently in progress for this object or object service:<error details\> |   |
| 2462 | Object Service url cannot be null/empty:<error details\> |   |
| 2463 | Object url cannot be null/empty:<error details\> |   |
| 2464 | Object Service version cannot be null/empty:<error details\> |   |
| 2465 | Invalid record action:<error details\> |   |
| 2466 | No relationship between the given Offline Objects:<error details\> |   |
| 2467 | The number of source attributes and target attributes are not same in the given relationship:<error details\> |   |
| 2468 | More than one parent was found for a given child record:<error details\> |   |
| 2469 | Unable to build hierarchical upload payload for the given set of records even after maximum iterations:<error details\> |   |
| 2470 | An error occurred while parsing JSON:<error details\> |   |
| 2471 | An error occurred while trying to perform rollback:<error details\> |   |
| 2472 | Filters applied to the current sync operation are invalid:<error details\> |   |
| 2473 | Sync upload failed with an error:<error details\> |   |
| 2474 | Sync download failed with an error:<error details\> |   |
| 2475 | Database encryption passphrase must be of type string:<error details\> | Ensure that encryption passphrase is a string and contains at least 6 characters. |
| 2476 | Pending sync requests failed with an error. | This error is triggered when the applications cached upload requests fail. |
| 2478 | Syncing operation has been cancelled. | This error code is triggered when an in-progress Syncing operation is successfully cancelled. With reference to [<object\>.cancelSync](Object_cancelSync.md) and [<objectservice\>.cancelSync](ObjectService_cancelSync.md) code samples, the onFailure callback is triggered for startSync operation, and the error object displays this error code. |
| 2479 | Sync cancellation failed. | This error code is triggered when an attempt to cancel an inprogress syncing operation fails. This operation fails if the syncing operation is already completed, or not started at all. With reference to [<object\>.cancelSync](Object_cancelSync.md) and [<objectservice\>.cancelSync](ObjectService_cancelSync.md) code samples, the onFailure callback is triggered for cancelSync operation, and the error object displays this error code. |
| 2480 | An error occurred while trying to clear offline data on object service: <ObjectServiceName> : <error details\> | This error is triggered when the application is unable to clear the offline data at that particular moment. During failure, all the changes will be rolled back to the existing state. If the [<objectservice\>.clearOfflineData](ObjectService_clearOfflineData.md) API is triggered while some other operation (for example, startSync), is in progress, the database can get corrupted. |
| 2481 | An error occurred while trying to fetch the pending Sync records:<error details\> |   |
| 2482 | Application Sync options provided are invalid | Options provided for application sync are invalid. |
| 2483 | Setup is not performed. There are no object services to sync:<error details\> | The Offline Objects setup is not done. Therefore, no Object Service could be synced. |
| 2560 | An error occurred while performing an operation on binary data: <error details\> | Generic binary download error. |
| 2561 | Binary column is expected, supplied column is not of type binary: <error details\>. | Verify if the column name provided in options is a valid number. |
| 2562 | Chunk size supplied is not a valid number: <error details\> | Verify if the chunk size provided in the options is a valid number. |
| 2563 | Failed to save the downloaded file path in the device database: <error details\> | File is downloaded from the server on to the client, but failed to persist the file path in the app database. |
| 2564 | Binary download failed: <error details\> | Failed to download binary from the server. |
| 2565 | Query type sent is not a valid value: <error details\> | The query type sent in the getBinaryStatus API is invalid. |
| 2566 | Invalid options sent to binary status:<error details\> | Options provided to getBinaryStatus API are invalid. |
| 2913 | Upload cache has duplicate cache entry for same sync object. | This error is triggered when the application has duplicate cached upload requests and goes to an unrecoverable state. |
