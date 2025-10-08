                              

voltmx.sdk.dto.SelectQuery Class
==============================

This class is used to construct a database query. An instantiation of this class is used as the query object which is passed into the setSelectQueryObject method of a [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.md) object.

Constructors
------------

The voltmx.sdk.dto.SelectQuery class has one constructor.

### SelectQuery(objectServiceName, recordObject)

  
| Parameter | Type | Description |
| --- | --- | --- |
| objectServiceName | string | Name of object service defined in the application |
| recordObject | [voltmx.sdk.dto.Table](voltmx.sdk.dto.Table_Class.md) | Specifies the table on which the query is to be run |

Methods
-------

### addColumn(columnObject)

#### Signature

addColumn(columnObject)

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| columnObject | [voltmx.sdk.dto.Column](voltmx.sdk.dto.Column_Class.md) | Defines the column information |

Example
-------

```
 // **Creation of SelectQuery object for one table**  
  var dataObject = new voltmx.sdk.dto.DataObject("EAM_WO_ATTACHMENT");  
  var tblDto = new voltmx.sdk.dto.Table("EAM_WO_ATTACHMENT", null, false);  
  var selQuery = **new voltmx.sdk.dto.SelectQuery(objServiceName, tblDto);**  
  var colObj = new voltmx.sdk.dto.Column(tblDto, "ORDER_NUM");  
  var colObj2 = new voltmx.sdk.dto.Column(tblDto, "BINARY_NAME");  
  var colObj3 = new voltmx.sdk.dto.Column(tblDto, "ATTACH_DESC");  
  **selQuery.addColumn(colObj);**  
  **selQuery.addColumn(colObj2);**  
  **selQuery.addColumn(colObj3);**  
  
  dataObject.setSelectQueryObject(selQuery);
```

The selectQuery object described above is similar to the SQL instruction:

```
 Select ORDER_NUM,BINARY_NAME,ATTACH_DESC from EAM_WO_ATTACHMENT
```
