                              

User Guide: [SDKs](../../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](../Installing_PhoneGap_SDK.md) > [Invoking an Object Service](Objects_API_Reference.md) > [Data Transfer Objects](Data_Transfer_Objects.md) > voltmx.sdk.dto.Column Class

voltmx.sdk.dto.Column Class
=========================

This class represents a column in a database table, which is in turn represented by a [voltmx.sdk.dto.Table](../../ObjectsAPIReference/voltmx.sdk.dto.Table_Class.md) object. It is used when creating a query.

Constructors
------------

The voltmx.sdk.dto.Column class has one constructor.

### voltmx.sdk.dto.Column(table, columnName) Constructor

#### Signature

```
 voltmx.sdk.dto.Column(table, columnName)
```

#### Parameters

<table style="width: 579px;mc-table-style: url]('../../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 183px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 144px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 254px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter name</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">table</td><td class="TableStyle-Basic-BodyE-Column1-Body1"><a href="../../ObjectsAPIReference/voltmx.sdk.dto.Table_Class.html">voltmx.sdk.dto.Table</a></td><td class="TableStyle-Basic-BodyD-Column1-Body1">The table containing the column</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">columnName</td><td class="TableStyle-Basic-BodyB-Column1-Body1">string</td><td class="TableStyle-Basic-BodyA-Column1-Body1">The name of the column</td></tr></tbody></table>

Example
-------

```
 var dataObject = new voltmx.sdk.dto.DataObject("EAM_WO_ATTACHMENT");
var tblDto = new voltmx.sdk.dto.Table("EAM_WO_ATTACHMENT", "EAM_WO_ATTACHMENT", false);
var selQuery = new voltmx.sdk.dto.SelectQuery("serviceName", tblDto);
var colObj = new voltmx.sdk.dto.Column(tblDto, "ORDER_NUM");
var colObj2 = new voltmx.sdk.dto.Column(tblDto, "BINARY_NAME");
var colObj3 = new voltmx.sdk.dto.Column(tblDto, "ATTACH_DESC");
selQuery.addColumn(colObj);
selQuery.addColumn(colObj2);
selQuery.addColumn(colObj3);
dataObject.setSelectQueryObject(selQuery);  

```
