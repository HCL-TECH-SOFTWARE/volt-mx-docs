                              

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](../VoltMXStudio/Installing_VoltMXJS_SDK.md) > [Invoking an Object Service](Objects_API_Reference.md) > [Data Transfer Objects](Data_Transfer_Objects.md) > voltmx.sdk.dto.DataObject Class

voltmx.sdk.dto.DataObject Class
=============================

This class represents a data object in the Object Service. An instantiation of this class is required as a parameter in many methods of the [OnlineObjectService Class](OnlineObjectService_Class.md) and the [OfflineObjectService Class](OfflineObjectService_Class.md).

Constructors
------------

The voltmx.sdk.dto.DataObject class has one constructor.

### voltmx.sdk.dto.DataObject(string objectName)

<table style="width: 579px;mc-table-style: url('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 107px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 69px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 399px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">objectName</td><td class="TableStyle-Basic-BodyB-Column1-Body1">string</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Name of object defined in the object service</td></tr></tbody></table>

Methods
-------

The voltmx.sdk.dto.DataObject class includes the following methods.

*   [addChildDataObject(child)](#addchilddataobject-child-method)
*   [addField(fieldName, value)](#addfield-fieldname-value-method)
*   [setOdataUrl(URL)](#setodataurl-url-method)
*   [setRecord(record)](#setrecord-record-method)
*   [setSelectQueryObject(queryObject](#setselectqueryobject-queryobject-method))

### addChildDataObject(child) Method

Adds another DataObject as a child.

#### Signature

```
addChildDataObject(child)
```

#### Parameters

<table style="width: 579px;mc-table-style: url('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 127px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 114px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 334px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">child</td><td class="TableStyle-Basic-BodyB-Column1-Body1">voltmx.sdk.dto.DataObject</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The DataObject to be added as a child</td></tr></tbody></table>

### addField(fieldName, value) Method

Adds a field in the data object.

#### Signature

```
addField(fieldName, value)
```

#### Parameters

<table style="width: 579px;mc-table-style: url('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 127px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 114px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 334px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">fieldName</td><td class="TableStyle-Basic-BodyE-Column1-Body1">string</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The name of the field being added.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">value</td><td class="TableStyle-Basic-BodyB-Column1-Body1">string</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The value of the added field</td></tr></tbody></table>

### setOdataUrl(URL) Method

Specifies the Odata URL.

#### Signature

```
setOdataUrl(URL)
```

#### Parameters

<table style="width: 579px;mc-table-style: url('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 107px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 184px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 283px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">URL</td><td class="TableStyle-Basic-BodyB-Column1-Body1">string</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The Odata URL to set.</td></tr></tbody></table>

### setRecord(record) Method

Specifies a record in the data object.

#### Signature

```
setRecord(record)
```

#### Parameters

<table style="width: 579px;mc-table-style: url('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 107px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 184px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 283px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">record</td><td class="TableStyle-Basic-BodyB-Column1-Body1">JSON object</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The record to be set.</td></tr></tbody></table>

### setSelectQueryObject(queryObject) Method

Sets the specific query object to be used in the query.

#### Signature

```
setSelectQueryObject(queryObject)
```

#### Parameters

<table style="width: 579px;mc-table-style: url]('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 107px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 184px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 283px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">queryObject</td><td class="TableStyle-Basic-BodyB-Column1-Body1"><a href="voltmx.sdk.dto.SelectQuery_Class.html">voltmx.sdk.dto.SelectQuery</a></td><td class="TableStyle-Basic-BodyA-Column1-Body1">The object that contains the query.</td></tr></tbody></table>

Example
-------

```
// **Simple Object**
var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");

var record = {};
record["field1"] = "value1";
record["field2"] = "value2";
record["field3"] = "value3"; //sets the record to the dataObject
dataObject.setRecord(record);

// **Complex Object*
var parentDataObject = new voltmx.sdk.dto.DataObject("parentObject");
var record = {};
record["field1"] = "value1";
record["field2"] = "value2";
record["field3"] = "value3";
//sets the record to the parent.
parentDataObject.setRecord(record);

var childDataObject = new voltmx.sdk.dto.DataObject("childObject");
var record = {};
record["field4"] = "value3";
record["field5"] = "value5";
record["field6"] = "value6"; //sets the record to the child 
childDataObject.setRecord(record);

parentDataObject.addChildDataObject(childDataObject); // **Adding OdataUrl** 

var dataObject = new voltmx.sdk.dto.DataObject("objectName");
dataObject.setOdataUrl("$filter=fieldname eq value");
```
