                                

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > [Invoking an Object Service](Invoking_an_Object_Service.md) > OnlineObjectService Class

OnlineObjectService Class
=========================

**OnlineObjectService Class** provides methods that perform operations acting on the Volt MX Foundry endpoint, including basic CRUD. An instance of OnlineObjectService is returned by the [getObjectService Method](#getObjectService).

Methods
-------

The following methods are used by the OnlineObjectService class and its instantiations.

### Create

Creates an object in the Volt MX Foundry endpoint.

#### Syntax

```
 create(HashMap<String,String> headers,HashMap<String,String> queryParams,ObjectServiceCallback callback)
```

#### Return Type

None

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | HashMap<String,String> | Key/value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | HashMap<String,String> | Key/ value pairs of query parameters that are appended to the URL while making a network call | Optional |
| objectServiceCallback | ObjectServiceCallback | Interface with onSuccess and onFailure methods **onSuccess**: Function invoked when the operation succeeds with the primary key of the created object. **onFailure**: Function invoked when the operation fails with cause of failure. | Yes |

#### Code

```
 ObjectService objSvc = voltmxClient.getObjectService("<objectservicename>");
DataObject dataObject = new DataObject("product");
JSONObject bodyParams = new JSONObject();
bodyParams.put("name", "tv");
dataObject.setRecord(bodyParams);

try {
    objSvc.create(dataObject, new HashMap < String, String > (), new HashMap < String, String > (),
        new ObjectServiceCallback() {
            @Override
            public void onSuccess(JSONObject response) throws VoltMXException {
                voltmx.print("create success : " + response.toString());
            }

            @Override
            public void onFailure(ObjectServiceException objectServiceException) {
                voltmx.print("create failed : " + objectServiceException.getErrorMessage());
            }
        }
    );
} catch (Exception e) {
    voltmx.print("Exception while creating an object  : " + e.printStackTrace());

}
```

### Update

Updates an object in the Volt MX Foundry endpoint.

#### Syntax

```
 update(DataObject dataObject,HashMap<String,String> headers,HashMap<String,String> queryParams,ObjectServiceCallback callback)
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | HashMap<String,String> | Key/value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | HashMap<String,String> | Key/ value pairs of query parameters that are appended to the URL while making a network call | Optional |
| objectServiceCallback | ObjectServiceCallback | Interface with onSuccess and onFailure methods **onSuccess**: Function invoked when the operation succeeds with the primary key of the created object. **onFailure**: Function invoked when the operation fails with cause of failure. | Yes |

#### Code

```
 ObjectService objSvc = voltmxClient.getObjectService("<objectservicename>");
DataObject dataObject = new DataObject("product");
JSONObject params = new JSONObject();
params.put("name", ”playstation”);
dataObject.setRecord(params);
try {
    objSvc.update(dataObject, new HashMap < String, String > (), new HashMap < String, String > (), new ObjectServiceCallback() {
        @verride
        public void onSuccess(final JSONObject object) {
            voltmx.print("update success : " + response.toString());
        }

        @Override
        public void onFailure(final ObjectServiceException objectServiceException) {
            voltmx.print("update failed : " + objectServiceException.getErrorMessage());
        }
    });
} catch (Exception e) {
    voltmx.print("Exception occurred while updating an object : " + e.printStackTrace());
}
```

### Delete

Deletes an object in the Volt MX Foundry endpoint.

#### Syntax

```
 delete(DataObject dataObject,HashMap<String,String> headers,HashMap<String,String> queryParams,ObjectServiceCallback callback)
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | HashMap<String,String> | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | HashMap<String,String> | Key/ value pairs of query parameters that are appended to the URL while making a network call | Optional |
| objectServiceCallback | ObjectServiceCallback | Interface with onSuccess and onFailure methods **onSuccess**: Function invoked when the operation succeeds with the primary key of the created object. **onFailure**: Function invoked when the operation fails with cause of failure. | Yes |

#### Code

```
 DataObject dataObject = new DataObject("product");
JSONObject jobject = new JSONObject();
jobject.put("id", 1);
dataObject.setRecord(jobject);
try {
    objSvc.delete(dataObject, new HashMap < String, String > (), new HashMap < String, String > (), new ObjectServiceCallback() {
            @Override
            public void onSuccess(JSONObject response) throws VoltMXException {
                voltmx.print("delete success : " + response.toString());
            }
            @Override
            public void onFailure(ObjectServiceException objectServiceException) {
                voltmx.print("delete failed" + objectServiceException.getErrorMessage());
            }
            );
    }
```

### Fetch

Fetches an object from the server.

#### Syntax

```
 fetch(DataObject dataObject,HashMap<String,String> headers,HashMap<String,String> queryParams,ObjectServiceCallback callback)
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | HashMap<String,String> | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | HashMap<String,String> | Key/ value pairs of query parameters that are appended to the URL while making a network call. | Optional |
| objectServiceCallback | ObjectServiceCallback | Interface with onSuccess and onFailure methods **onSuccess**: Function invoked when the operation succeeds with the primary key of the created object. **onFailure**: Function invoked when the operation fails with cause of failure. | Yes |

#### Code

```
 
DataObject dataObject = new DataObject("product");
dataObject.setODataUrl("$filter= " + "id" + "eq" + "1");
try {
    objectService.fetch(dataObject, new HashMap < String, String > (), new HashMap < String, String > (), new ObjectServiceCallback() {
        @Override
        public void onSuccess(JSONObject response) throws VoltMXException {
            voltmx.print("fetch success : " + response.toString());
        }
        @Override
        public void onFailure(ObjectServiceException objectServiceException) {
            voltmx.print("fetch failed" + objectServiceException.getErrorMessage());
        }
    });
} catch (Exception e) {
    voltmx.print("exception occurred while deleting an object " + e.getMessage());
}
```

### getMetaDataofAllObjects

Gets the metadata associated with the objects that are defined in the service from the server.

#### Syntax

```
 getMetadataOfAllObjects(boolean getFromServer,String objectName,HashMap<String,String> headers,HashMap<String,String> queryParams,ObjectServiceCallback callback)
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| getFromServer | Boolean | Flag that retrieves the metadata of the object from the server or local store. **True** - from server **False** - from local store | Yes |
| objectName | String | Name of the object | Yes |
| headers | HashMap<String,String> | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | HashMap<String,String> | Key/ value pairs of query parameters that are appended to the URL while making a network call. | Optional |
| objectServiceCallback | ObjectServiceCallback | Interface with onSuccess and onFailure methods **onSuccess**: Function invoked when the operation succeeds with the primary key of the created object. **onFailure**: Function invoked when the operation fails with cause of failure. | Yes |

#### Code

```
 try {
    objectService.getMetadataOfAllObjects(true, dataObject.getObjectName(), null, null, new ObjectServiceCallback() {
            @Override
            public void onSuccess(final JSONObject object) {
                voltmx.print("get meta data of all objects success");
            }
        }
        @Override
        public void onFailure(final ObjectServiceException objectServiceException) {
            voltmx.print("get meta data of all objects failed" + objectServiceException.getErrorMessage());
        }
    }
});
```

### getMetaDataofObject

Gets the metadata associated with an object that is defined in the service from the server or local store.

#### Syntax

```
 getMetadataOfObject(boolean getFromServer,String objectName,HashMap<String,String> headers,HashMap<String,String> queryParams, ObjectServiceCallback callback)
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| getFromServer | Boolean | Flag that retrieves the metadata of the object from the server or local store. **True** from server **False** - from local store | Yes |
| objectName | String | Name of the object | Yes |
| headers | HashMap<String,String> | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | HashMap<String,String> | Key/ value pairs of query parameters that are appended to the URL while making a network call. | Optional |
| objectServiceCallback | ObjectServiceCallback | Interface with onSuccess and onFailure methods **onSuccess**: Function invoked when the operation succeeds with the primary key of the created object. **onFailure**: Function invoked when the operation fails with cause of failure. | Yes |

#### Code

```
 try {
    objectService.getMetadataOfObject(true, dataObject.getObjectName(), null, null, new ObjectServiceCallback() {
        @Override
        public void onSuccess(final JSONObject object) {
            voltmx.print("get meta data of object success");
        }
        @Override
        public void onFailure(final ObjectServiceException objectServiceException) {
            voltmx.print("get meta data of object failed" + objectServiceException.getErrorMessage());
        }
    });
} catch (VoltMXException e) {
    e.printStackTrace();
}
```
