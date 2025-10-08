                              

voltmx.sdk.dto.Table Class
========================

This class represents a database table, and is used when creating a query.

Constructors
------------

The voltmx.sdk.dto.Table class has one constructor.

```
 voltmx.sdk.dto.Table(tableName, tableName2, flag)
```

#### Signature

```
 voltmx.sdk.dto.Table(tableName, tableName2, flag)
```

#### Parameters

<table style="width: 579px;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 107px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 144px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 321px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Type</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">tableName</td><td class="TableStyle-Basic-BodyE-Column1-Body1">string</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The name of the database table</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">tableName2</td><td class="TableStyle-Basic-BodyE-Column1-Body1">string</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The name of the database table</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">flag</td><td class="TableStyle-Basic-BodyB-Column1-Body1">boolean</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Boolean value</td></tr></tbody></table>

Example
-------

```
 var dataObject = new voltmx.sdk.dto.DataObject("EAM_WO_ATTACHMENT");  
var tblDto = **new voltmx.sdk.dto.Table("EAM_WO_ATTACHMENT", "EAM_WO_ATTACHMENT", false)**;  
var selQuery = new voltmx.sdk.dto.SelectQuery("serviceName", tblDto);  
var colObj = new voltmx.sdk.dto.Column(tblDto, "ORDER_NUM");  
var colObj2 = new voltmx.sdk.dto.Column(tblDto, "BINARY_NAME");  
var colObj3 = new voltmx.sdk.dto.Column(tblDto, "ATTACH_DESC");  
selQuery.addColumn(colObj);  
selQuery.addColumn(colObj2);  
selQuery.addColumn(colObj3);  
dataObject.setSelectQueryObject(selQuery);
```
