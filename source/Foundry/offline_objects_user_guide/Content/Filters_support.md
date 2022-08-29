
Filters Support in Sync Download
================================

A filter is an option to the sync API using which, you can pass a valid OData $filter query and download the relevant records through sync operation. Filters are supported at the object and the service-level operations.

For information about the sync API and options for various platforms, refer to [Offline Objects API Reference Guide](../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md).

> **Note:**  
*   Filter sent should be a string.  
*   The empty string and null/nil are considered as invalid filter values.  
*   Keys and values supplied in the syncOptions field are case-sensitive.  
*   Make sure that the filters at the object level are applied consistently across multiple sync operations. Otherwise, the client database will contain the data without the applied filter.  

Object Level
------------

The filter string at the object level must be a valid OData filter query that contains case-sensitive column names and the respective values to apply the filter to. If the filter supplied is invalid or incorrect, all the records in an object are downloaded.

The following examples demonstrate the filter usage in the sync API.

### JavaScript

```
function onSyncSuccess(successObject) {
    //Operation to be performed on successful sync.
 }

 function onSyncFailure(err) {
    //Operation to be performed on unsuccessful sync.
 }

 try {
    var employeeObject = = new voltmx.sdk.VMXObj("Employee");

    //Set filter to download employee records by the first name
    var syncOptions = {"filter" : "FirstName eq 'Berta'"};

    employeeObject.startSync(syncOptions, onSyncSuccess, onSyncFailure);
 } catch (err) {
    alert("Object creation failed!);
 }

```

### Android

```
try {
   private VMXObjSync employeeObject = new VMXObj("Employee");

   //Set filter to download employee records by the first name
   HashMap<String, Object> syncOptions = new HashMap<String, Object>();
   syncOptions.put("filter", "FirstName eq 'Berta'");
   
   employeeObject.startSync(syncOptions, new VMXCallback() {
        @Override
        public void onSuccess(Object successObject) {
            //Operation to be performed on successful sync.
        }

        @Override
        public void onFailure(object error) {
            //Operation to be performed on unsuccessful sync.
        }
   }, null);
} catch (Exception e) {
    // Log "Object creation failed!" error
}

```

### iOS

```
  NSError *error;
  VMXObj *employeeObject = [[VMXObj alloc] initWithName:@"Employee" error:&error];

  if(error) {
      NSLog(@"Object creation failed!");
  } else {
      VMXSuccessCompletionHandler onSuccessHandler = ^(id successObject) {
          //Operation to be performed on successful sync.
      }

      VMXFailureCompletionHandler onFailureHandler = ^(id error) {
          //Operation to be performed on unsuccessful sync.
      }
   
      //Set filter to download employee records by the first name
      NSDictionary *syncOptions = @{@"filter" : @"FirstName eq 'Berta'"};

      [employeeObject startSync:syncOptions
                      onSuccess:onSuccessHandler
                      onFailure:onFailureHandler
                     onProgress:nil];
  }

```

Objects-Service Level
---------------------

In an object service, filter is set as a key in the syncOptions field of the sync API. Unlike the object sync, specific filters should be set for every desired object of that service while syncing.

The following examples demonstrate applying filters for multiple objects during the object-service sync.

### JavaScript

```
  function onSyncSuccess(successObject) {
      //Operation to be performed on successful sync.
  }

  function onSyncFailure(err) {
      //Operation to be performed on unsuccessful sync.
  }

  try {
      var orgObjectService = new voltmx.sdk.VMXObjSvc("Organization");

      //Set specific filters on different entities of the object service
      var filterObject = {"Employee" : "FirstName eq 'Berta'", 
                  "Address" : "State eq 'WA' and PostalCode gt 7889", 
                  "HR" : "EmployeeID lt 70 or Salary gt 9000"};

      var syncOptions = {"filter" : filterObject};

      orgObjectService.startSync(syncOptions, onSyncSuccess, onSyncFailure);
  } catch (err) {
      alert("Object service creation failed!);
  }

```

### Android

```
  try {
      private VMXObjSvc orgObjectService = new VMXObjSvc("Organization");

      //Set specific filters on different entities of the object service
      HashMap<String, Object> filterObject = new HashMap<String, Object>();
    
      filterObject.put("Employee", "FirstName eq 'Berta'");
      filterObject.put("Address", "State eq 'WA' and PostalCode gt 7889");
      filterObject.put("HR", "EmployeeID lt 70 or Salary gt 9000");

      HashMap<String, Object> syncOptions = new HashMap<String, Object>();
      syncOptions.put("filter", filterObject);

      orgObjectService.startSync(syncOptions, new VMXCallback() {
          @Override
          public void onSuccess(Object successObject) {
              //Operation to be performed on successful creation.
          }

          @Override
          public void onFailure(object error) {
             //Operation to be performed on unsuccessful creation.
          }
      }, null);
  } catch (Exception e) {
    // Log "Object service creation failed!" error
  }

```

### iOS

```
   NSError *error;
  VMXObjSvc *orgObjectService = [[VMXObjSvc alloc] initWithName:@"Organization" error:&error];

  if(error) {
      NSLog(@"Object service creation failed!");
  } else {
      VMXSuccessCompletionHandler onSuccessHandler = ^(id successObject) {
          //Operation to be performed on successful creation.
      }

      VMXFailureCompletionHandler onFailureHandler = ^(id error) {
          //Operation to be performed on unsuccessful creation.
      }
   
      //Set specific filters on different entities of the object service
      NSDictionary *filterObject = @{@"Employee" : @"FirstName eq 'Berta'",
              @"Address" : @"State eq 'WA' and PostalCode gt 7889",
                   @"HR" : @"EmployeeID lt 70 or Salary gt 9000"};

      NSDictionary *syncOptions = @{@"filter" : filterObject};

      [orgObjectService startSync:syncOptions
                        onSuccess:onSuccessHandler
                        onFailure:onFailureHandler
                       onProgress:nil];
  }
```
