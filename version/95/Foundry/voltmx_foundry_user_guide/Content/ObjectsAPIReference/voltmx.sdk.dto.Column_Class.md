                              

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](../VoltMXStudio/Installing_VoltMXJS_SDK.md) > [Invoking an Object Service](Objects_API_Reference.md) > [Data Transfer Objects](Data_Transfer_Objects.md) > voltmx.sdk.dto.Column Class

voltmx.sdk.dto.Column Class
=========================

This class represents a column in a database table, which is in turn represented by a [voltmx.sdk.dto.Table](voltmx.sdk.dto.Table_Class.md) object. It is used when creating a query.

> **_Note:_** This class is used only for offline Object Services, not for online Object Services.

Constructors
------------

The voltmx.sdk.dto.Column class has one constructor.

### voltmx.sdk.dto.Column(table, columnName) Constructor

#### Signature

```
voltmx.sdk.dto.Column(table, columnName)
```

#### Parameters

<table style="width: 579px;mc-table-style: url]('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 183px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 144px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 254px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter name</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">table</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><a href="voltmx.sdk.dto.Table_Class.html">voltmx.sdk.dto.Table</a></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The table containing the column</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">columnName</td><td class="TableStyle-Basic-BodyB-Column1-Body1">string</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The name of the column</td></tr></tbody></table>

Example
-------

```
var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");
var tblDto = new voltmx.sdk.dto.Table("ObjectName", "ObjectName", false);
var selQuery = new voltmx.sdk.dto.SelectQuery("serviceName", tblDto);
var colObj = new voltmx.sdk.dto.Column(tblDto, "field1");
var colObj2 = new voltmx.sdk.dto.Column(tblDto, "field2");
var colObj3 = new voltmx.sdk.dto.Column(tblDto, "field3");
selQuery.addColumn(colObj);
selQuery.addColumn(colObj2);
selQuery.addColumn(colObj3);
dataObject.setSelectQueryObject(selQuery);
```
