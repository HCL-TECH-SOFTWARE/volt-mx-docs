---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                               

User Guide: [SDKs](../../Foundry_SDKs.html) > [Cordova (PhoneGap) SDK](../Installing_PhoneGap_SDK.html) > [Invoking an Object Service](Objects_API_Reference.html) > OnlineObjectService Class

OnlineObjectService Class
=========================

Provides methods that perform operations acting on the Foundry endpoint, including basic CRUD, metadata, and binary-related functions. An instance of OnlineObjectService is returned by the [getObjectService Method](getObjectService_Method.html) when the second parameter specifies {"access":"online"}.

Methods
-------

The following methods are used by the OnlineObjectService class and its instantiations.

### create Method

Creates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} create(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds, with the primary key of the created object |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function create() { 
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "offline"
    }); 
    var dataObject = new voltmx.sdk.dto.DataObject("ObjectName"); 
    dataObject.addField("field1", "value1"); 
    var options = {
        "dataObject": dataObject
    }; 
    objSvc.create(options,     function(res) {
        alert("Record created");
    },     function(err) {
        alert("Error in record creation");
    }  );
}
{% endhighlight %}

> **_Note:_** When using object services for SAP, the general norm is to have character field values stored in upper case. However, if you need to pass in mixed/lower case values for an SAP field, ensure that this field is designated as mixed case in the SAP Add-in LDB workbench.

### update Method

Updates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} update(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds, with the number of records updated |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function update() {  
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    }); 
    var dataObject = new voltmx.sdk.dto.DataObject("ObjectName"); 
    dataObject.addField("field1", "value1"); 
    dataObject.addField("primaryKeyField", "value"); 
    var options = {
        "dataObject": dataObject
    }; 
    objSvc.update(options,     function(res) {
        alert("Record updated");
    },     function(err) {
        alert("Error in record update");
    }  );
}
{% endhighlight %}

### delete Method

Deletes an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} deleteRecord(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds, with the number of records deleted |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function deleteRecord() {  
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    }); 
    var dataObject = new voltmx.sdk.dto.DataObject("ObjectName"); 
    dataObject.addField("field1", "value1"); 
    dataObject.addField("primaryKeyField", "value"); 
    var options = {
        "dataObject": dataObject
    }; 
    objSvc.deleteRecord(options,     function(res) {
        alert("Record deleted");
    },     function(err) {
        alert("Error in record deletion");
    }  );
}
{% endhighlight %}

### customVerb Method

Performs a custom operation on an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} customVerb(verbName, options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| verbName | Name of the custom verb defined in the Volt MX Foundry console |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) |
| successCallback | Function invoked when the operation succeeds |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function customData() {  
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");  
    dataObject.addField("field1", "value1");  
    dataObject.addField("primaryKeyField", "value");  
    var options = {
        "dataObject": dataObject
    };  
    objSvc.customVerb("verbName", options,     function(res) {
        alert("Custom operation performed");
    },     function(err) {
        alert("Error in custom operation");
    }  );
}
{% endhighlight %}

### fetch Method

Fetches an object from the server.

#### Syntax

{% highlight voltMx %} fetch(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which must be an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html). This instance must have the property _selectQueryObject_, which is an instance of voltmx.sdk.dto.SelectQuery, in order to fetch records based on the given criteria. |
| successCallback | Function invoked when the method succeeds, with the number of records fetched |
| failureCallback | Function invoked when fetch fails, with cause of failure |

#### Example

{% highlight voltMx %} function fetchData() {  
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    var dataObject = new voltmx.sdk.dto.DataObject("EAM_WO_ATTACHMENT");  
    var selQuery = new voltmx.sdk.dto.SelectQuery("serviceName", tblDto);  
    var odataUrl = "$filter=ORDER_NUM eq 10001";  
    dataObject.setSelectQueryObject(selQuery);  
    var options = {
        "dataObject": dataObject
    };  
    objSvc.fetch(options,     function(res) {
        alert("record::" + res.records);
    },     function(err) {
        alert("Failed to fetch : " + JSON.stringify(err));
    }  );
}
{% endhighlight %}

### getMetadataOfAllObjects Method

Gets the metadata associated with the objects defined in the service from the server.

#### Syntax

{% highlight voltMx %} getMetadataOfAllObjects(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the optional parameter "getFromServer" |
| successCallback | Function invoked when the operation succeeds |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function getMetadata() {  
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    objSvc.getMetadataOfAllObjects({},     function(res) {
        alert("Metadata::" + res);
    },     function(err) {
        alert("Error in metadata::" + err);
    }  );
}
{% endhighlight %}

### getMetadataOfObject Method

Gets the metadata associated with an object defined in the service from the server.

#### Syntax

{% highlight voltMx %} getMetadataOfObject(objectName, options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| objectName | The name of the desired object as defined in the service |
| options | JSON object with the optional parameter "getFromServer" |
| successCallback | Function invoked when the operation succeeds, with the number of records gotten |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function getMetadata() { 
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    objSvc.getMetadataOfObject("objectName", {},     function(res) {
        alert("Metadata::" + res);
    },     function(err) {
        alert("Error in metadata::" + err);
    }  );
}
{% endhighlight %}

### getBinaryContent Method

Gets binary content on the server.

#### Syntax

{% highlight voltMx %} getBinaryContent(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), and "binaryAttrName", which is the binary field name in the object |
| successCallback | Function invoked when the operation succeeds, with the number of records gotten |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function getBinaryContent() { 
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    var dataObject = new voltmx.sdk.dto.DataObject("media");  
    //primary key details to get media object  
    dataObject.addField("name", "4005174-002");  
    objSvc.getBinaryContent(    {
        "dataObject": dataObject,
        "binaryAttrName": "data"
    },    function(bin) {      
        alert("binary content is : " + JSON.stringify(bin));      
        frmBinary.downloadImg.isVisible = true;      
        frmBinary.downloadImg.base64 = bin;    
    },     function(err) {      
        alert("failed to get binary data : " + JSON.stringify(err));    
    }  );
}
{% endhighlight %}

### createBinaryContent Method

Creates binary content on the server.

#### Syntax

{% highlight voltMx %} createBinaryContent(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), and "binaryAttrName", which is the binary field name in the object |
| successCallback | Function invoked when the operation succeeds, with the number of records created |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function createBinaryContent() { 
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    var dataObject = new voltmx.sdk.dto.DataObject("media");  
    dataObject.addField("name", imgName);  
    dataObject.addField("data", binaryText);  
    objSvc.createBinaryContent(    {
            "dataObject": dataObject,
            "binaryAttrName": "data"
        },    function(bin) {
            alert("Binary content created");
        },     
        function(err) {
            alert("Failed: " + JSON.stringify(err));
        }  );
}
{% endhighlight %}

### updateBinaryContent Method

Updates binary content on the server.

#### Syntax

{% highlight voltMx %} updateBinaryContent(options, successCallback, failureCallback);
{% endhighlight %}

#### Parameters

  
| Parameter | Description |
| --- | --- |
| options | JSON object with the mandatory parameter "dataObject", which is an instance of the [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html), and "binaryAttrName", which is the binary field name in the object |
| successCallback | Function invoked when the operation succeeds, with the number of records updated |
| failureCallback | Function invoked when the operation fails, with cause of failure |

#### Example

{% highlight voltMx %} function updateBinaryContent() { 
    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService("serviceName", {
        "access": "online"
    });  
    var dataObject = new voltmx.sdk.dto.DataObject("media");  
    dataObject.addField("name", imgName);  
    dataObject.addField("data", binaryText);  
    objSvc.updateBinaryContent(    {
            "dataObject": dataObject,
            "binaryAttrName": "data"
        },    function(bin) {
            alert("Binary content updated");
        },     
        function(err) {
            alert("Failed: " + JSON.stringify(err));
        }  );
}
{% endhighlight %}
