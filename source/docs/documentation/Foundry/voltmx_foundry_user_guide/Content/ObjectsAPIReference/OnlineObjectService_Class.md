---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [VoltMX Iris SDK](../VoltMXStudio/Installing_VoltMXJS_SDK.html) > [Invoking an Object Service](Objects_API_Reference.html) > OnlineObjectService Class

OnlineObjectService Class
=========================

Provides methods that perform operations acting on the Volt MX Foundry endpoint, including basic CRUD, metadata, and binary-related functions. An instance of OnlineObjectService is returned by the [getObjectService Method](getObjectService_Method.html) when the second parameter specifies {"access":"online"}.

Methods
-------

The following methods are used by the OnlineObjectService class and its instantiations.

### create Method

Creates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %}create(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject" which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds, with the primary key of the created object |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
}); 
var dataObject = new voltmx.sdk.dto.DataObject("ObjectName"); 
dataObject.addField("field1", "value1"); 
var options = {
    "dataObject": dataObject
}; 
objSvc.create(options,
    function(response) {
        voltmx.print("Record created: " + JSON.stringify(response));
    },     
    function(error) {
        voltmx.print("Error in record creation: " + JSON.stringify(error));
    }  );
{% endhighlight %}

> **_Note:_** When using object services for SAP, the general norm is to have character field values stored in upper case. However, if you need to pass in mixed/lower case values for an SAP field, ensure that this field is designated as mixed case in the SAP Add-in LDB workbench.

### update Method

Updates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %}update(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds, with the number of records updated |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
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
{% endhighlight %}

### delete Method

Deletes an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %}deleteRecord(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds, with the number of records deleted |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
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
{% endhighlight %}

### customVerb Method

Performs a custom operation on an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %}customVerb(verbName, options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| verbName | Name of the custom verb defined in the Volt MX Foundry console |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
dataObject.addField("field1", "value1");
dataObject.addField("primaryKeyField", "value");

var options = {
    "dataObject": dataObject
};

objSvc.customVerb("verbName", options,
    function(response) {
        voltmx.print("Custom operation performed: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in custom operation:" + JSON.stringify(error));
    });
{% endhighlight %}

### fetch Method

Fetches an object from the server.

#### Syntax

{% highlight voltMx %}fetch(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html). This instance must have the property _selectQueryObject_, which is an instance of voltmx.sdk.dto.SelectQuery, in order to fetch records based on the given criteria. |
| successCallback | Function invoked when the method succeeds, with the number of records fetched |
| failureCallback | Function invoked when fetch fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
var odataUrl = "$filter=fieldname eq value";
dataObject.odataUrl = odataUrl;


var options = {
    "dataObject": dataObject
};

objSvc.fetch(options,
    function(response) {
        voltmx.print("record: " + response["records"]);
    },
    function(error) {
        voltmx.print("Failed to fetch: " + JSON.stringify(error));
    });
{% endhighlight %}

### getMetadataOfAllObjects Method

Gets the metadata associated with the objects defined in the service from the server.

#### Syntax

{% highlight voltMx %}getMetadataOfAllObjects(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the optional parameter "getFromServer" |
| successCallback | Function invoked when the operation succeeds |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
         "access": "online"
     });

objSvc.getMetadataOfAllObjects({},
function(response) {
  voltmx.print("Metadata: " + JSON.stringify(response));
},
function(error) {
  voltmx.print("Error in metadata: " + JSON.stringify(error));
});

{% endhighlight %}

### getMetadataOfObject Method

Gets the metadata associated with an object defined in the service from the server.

#### Syntax

{% highlight voltMx %}getMetadataOfObject(objectName, options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| objectName | The name of the desired object as defined in the service |
| options | JSON object with the optional parameter "getFromServer" |
| successCallback | Function invoked when the operation succeeds, with the number of records gotten |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

objSvc.getMetadataOfObject("objectName", {},
    function(response) {
        voltmx.print("Metadata: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Error in metadata: " + JSON.stringify(error));
    });
{% endhighlight %}

  
| Parameter | Description |
| --- | --- |
| options (Refer the Options below) | JSON object with the mandatory parameter **dataObject**, which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), |
| fileDownloadStartedCallback | Callback to be invoked after file download start, this callback is optional. |
| chunkDownloadCompletedCallback | callback invoked after each successful chunk download, this is invoked only when streaming is true. This callback is mandatory if streaming is **true**. |
| fileDownloadCompletedCallback | Callback invoked after successful file download, with the file path. This is manditory if streaming is **false**. |
| downloadFailureCallback | Callback invoked in case of download failure. |

<table style="mc-table-style: url('../Resources/TableStyles/Basic.css');width: 660px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 119px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 283px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 100px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 124px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Key</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Value</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;" data-mc-conditions="Default.Not Ready for Publish">Mandatory</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;" data-mc-conditions="Default.Not Ready for Publish">Default Value</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">dataObject</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Instance of voltmx.sdk.dto.DataObject</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Yes</td><td class="TableStyle-Basic-BodyD-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">-</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">streaming</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Boolean flag to determine whether the data needed to be given to chunks or a file after download.</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">No</td><td class="TableStyle-Basic-BodyD-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">false</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">queryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">provision for user to specify additional query params that need to be sent in the download call.</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">No</td><td class="TableStyle-Basic-BodyD-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">null</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">headers</td><td class="TableStyle-Basic-BodyB-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Provision for sending custom headers</td><td class="TableStyle-Basic-BodyB-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">No</td><td class="TableStyle-Basic-BodyA-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">null</td></tr></tbody></table>

  
| Parameter | Description |
| --- | --- |
| options (Refer the Options below) | JSON object with the mandatory parameter **dataObject**, which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), |
| binaryAttributeName | Binary field name in the object. |
| fileDownloadStartedCallback | Callback to be invoked after file download start, this callback is optional. |
| chunkDownloadCompletedCallback | callback invoked after each successful chunk download, this is invoked only when streaming is true. This callback is mandatory if streaming is **true**. |
| fileDownloadCompletedCallback | Callback invoked after successful file download, with the file path. This is manditory if streaming is **false**. |
| downloadFailureCallback | Callback invoked in case of download failure. |

<table style="mc-table-style: url('../Resources/TableStyles/Basic.css');width: 660px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 119px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 283px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 100px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 124px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Key</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Value</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;" data-mc-conditions="Default.Not Ready for Publish">Mandatory</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;" data-mc-conditions="Default.Not Ready for Publish">Default Value</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">dataObject</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Instance of voltmx.sdk.dto.DataObject</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Yes</td><td class="TableStyle-Basic-BodyD-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">-</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">streaming</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Boolean flag to determine whether the data needed to be given to chunks or a file after download.</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">No</td><td class="TableStyle-Basic-BodyD-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">false</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">queryParams</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">provision for user to specify additional query params that need to be sent in the download call.</td><td class="TableStyle-Basic-BodyE-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">No</td><td class="TableStyle-Basic-BodyD-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">null</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">headers</td><td class="TableStyle-Basic-BodyB-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">Provision for sending custom headers</td><td class="TableStyle-Basic-BodyB-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">No</td><td class="TableStyle-Basic-BodyA-Column1-Body1" data-mc-conditions="Default.Not Ready for Publish">null</td></tr></tbody></table>

### getBinaryContent Method

Gets binary content on the server.

#### Syntax

{% highlight voltMx %}getBinaryContent(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), and "binaryAttrName", which is the binary field name in the object |
| successCallback | Function invoked when the operation succeeds, with the number of records gotten |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
//primary key details to get media object
dataObject.addField("primary_key", "value");

objSvc.getBinaryContent({
        "dataObject": dataObject,
        "binaryAttrName": "data"
    },
    function(response) {
        voltmx.print("binary content is : " + JSON.stringify(response));
        frmBinary.downloadImg.isVisible = true;
        frmBinary.downloadImg.base64 = response;
    },
    function(error) {
        voltmx.print("failed to get binary data : " + JSON.stringify(error));
    });
{% endhighlight %}

### createBinaryContent Method

Creates binary content on the server.

#### Syntax

{% highlight voltMx %}createBinaryContent(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), and "binaryAttrName", which is the binary field name in the object |
| successCallback | Function invoked when the operation succeeds, with the number of records created |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
dataObject.addField("name", "imgName");
dataObject.addField("data", "binaryText");

objSvc.createBinaryContent({
        "dataObject": dataObject,
        "binaryAttrName": "data"
    },
    function(response) {
        voltmx.print("Binary content created: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Failed: " + JSON.stringify(error));
    });
{% endhighlight %}

### updateBinaryContent Method

Updates binary content on the server.

#### Syntax

{% highlight voltMx %}updateBinaryContent(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), and "binaryAttrName", which is the binary field name in the object |
| successCallback | Function invoked when the operation succeeds, with the number of records updated |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %}var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
    "access": "online"
});

var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
dataObject.addField("name", "imgName");
dataObject.addField("data", "binaryText");

objSvc.updateBinaryContent({
        "dataObject": dataObject,
        "binaryAttrName": "data"
    },
    function(response) {
        voltmx.print("Binary content updated: " + JSON.stringify(response));
    },
    function(error) {
        voltmx.print("Failed: " + JSON.stringify(error));
    });
{% endhighlight %}
