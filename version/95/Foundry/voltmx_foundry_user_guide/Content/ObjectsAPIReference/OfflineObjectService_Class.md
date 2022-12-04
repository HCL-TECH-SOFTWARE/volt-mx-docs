                              

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](../VoltMXStudio/Installing_VoltMXJS_SDK.md) > [Invoking an Object Service](Objects_API_Reference.md) > OfflineObjectService Class

OfflineObjectService Class
==========================

Provides methods that perform operations acting on the sync database, including basic CRUD, metadata, and binary-related functions. An instance of OfflineObjectService is returned by the [getObjectService Method](getObjectService_Method.md) when the second parameter specifies {"access":"offline"}.

Methods
-------

The following methods are used by the OfflineObjectService class and its instantiations.

### create Method

Creates an object offline in the sync database.

#### Syntax

```
create(options, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the following parameters: "dataObject" - a mandatory parameter which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.md) "httpRequestOptions" an optional parameter used for configuring thin rich network calls. -or- ""xmlHttpRequestOptions" - an optional parameter used for configuring thin thin network calls. The possible values for these options are: "timeoutIntervalForRequest" - specifies the timeout interval. "timeoutIntervalForResource" - specifies the timeout interval. |
| successCallback | Function invoked when the operation succeeds, with the primary key of the created object |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "offline"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
dataObject.addField("field1", "value1");

var options = {
    "dataObject": dataObject,
    "httpRequestOptions": {
        "timeoutIntervalForRequest": 60,
        "timeoutIntervalForResource": 600
    }
};

objSvc.create(options,
    function(response) {
        voltmx.print("Record created: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in record creation: " + JSON.stringify(error));
    });
```

> **_Note:_** When using object services for SAP, the general norm is to have character field values stored in upper case. However, if you need to pass in mixed/lower case values for an SAP field, ensure that this field is designated as mixed case in the SAP Add-in LDB workbench.

### update Method

Updates an object offline in the sync database (local store).

#### Syntax

```
update(options, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.md) |
| successCallback | Function invoked when the operation succeeds, with the number of records updated |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "offline"
});


var dataObject = new voltmx.sdk.dto.DataObject("ObjectName")
dataObject.addField("field1", "value1");
dataObject.addField("primaryKeyField", "value");

var options = {
    "dataObject": dataObject
};

objSvc.update(options,
    function(response) {
        voltmx.print("Record updated: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in record update: " + JSON.stringify(error));
    });
```

### delete Method

Deletes an object offline in the sync database.

#### Syntax

```
deleteRecord(options, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.md) |
| successCallback | Function invoked when the operation succeeds, with the number of records deleted |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "offline"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
dataObject.addField("field1", "value1");
dataObject.addField("primaryKeyField", "value");

var options = {
    "dataObject": dataObject
};

objSvc.deleteRecord(options,
    function(response) {
        voltmx.print("Record deleted: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in record deletion: " + JSON.stringify(error));
    });
```

### getMetadataOfAllObjects Method

Gets the metadata associated with the objects defined in the service from the local store.

#### Syntax

```
getMetadataOfAllObjects(options, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the optional parameter "getFromServer" |
| successCallback | Function invoked when the operation succeeds, with the number of records updated |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "offline"
});

objSvc.getMetadataOfAllObjects({},
    function(response) {
        voltmx.print("Metadata: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in metadata: " + JSON.stringify(error));
    });
```

### getMetadataOfObject Method

Gets the metadata associated with an object defined in the service from the local store.

#### Syntax

```
getMetadataOfObject(objectName, options, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| objectName | The name of the desired object as defined in the service |
| options | JSON object with the optional parameter "getFromServer" |
| successCallback | Function invoked when the operation succeeds, with the number of records returned |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
         "access": "offline"
 });

objSvc.getMetadataOfObject("objectName", {}, 
function(response) {
  voltmx.print("Metadata: " + JSON.stringify(response));
},
function(error) {
  voltmx.print("error in metadata: " + JSON.stringify(error));
});

```

### executeSelectQuery Method

Executes a Select query on the sync database.

#### Syntax

```
executeSelectQuery(queryString, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| queryString | SQL Select query string |
| successCallback | Function invoked when the operation succeeds, with the number of records operated on |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "offline"
});

var queryString = "select * from table";
objSvc.executeSelectQuery(queryString,
    function(response) {
        voltmx.print("Metadata: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in metadata::" + JSON.stringify(error));
    });
```

### getBinaryContent Method

Gets binary content from the sync database.

#### Syntax

```
getBinaryContent(options, successCallback, failureCallback);
```

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.md) |
| successCallback | Function invoked when the operation succeeds, with the number of records gotten |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

```
var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "offline"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
//primary key details to get object
dataObject.addField("primarykeyfield1", "value1");

var options = {};
options["dataObject"] = dataObject;
//binary column name to get the binary data
options["binaryAttrName"] = "data";
options["responsetype"] = "base64string/filepath";

//filepath is default if it is not set by developer 
objSvc.getBinaryContent(options, successcallback, errorcallback);

function successcallback(response) {
    //response will contain base64string or filepath
    //  based on responsetype
    //value provided by the developer.
    var content = response["records"][0]["data"];
    voltmx.print("Binary Content: " + JSON.stringify(content));
}

function errorcallback(error) {
    voltmx.print("Error in getBinary: " + JSON.stringify(error));
}
```
