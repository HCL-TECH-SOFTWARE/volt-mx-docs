---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

voltmx.sdk.dto.SelectQuery Class
==============================

This class is used to construct a database query. An instantiation of this class is used as the query object which is passed into the setSelectQueryObject method of a [voltmx.sdk.dto.DataObject Class](voltmx.sdk.dto.DataObject_Class.html) object.

> **_Note:_** This class is used only for offline Object Services, not for online Object Services.

Constructors
------------

The voltmx.sdk.dto.SelectQuery class has one constructor.

### SelectQuery(objectServiceName, recordObject)

  
| Parameter | Type | Description |
| --- | --- | --- |
| objectServiceName | string | Name of object service defined in the application |
| recordObject | [voltmx.sdk.dto.Table](voltmx.sdk.dto.Table_Class.html) | Specifies the table on which the query is to be run |

Methods
-------

### addColumn(columnObject)

#### Signature

addColumn(columnObject)

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| columnObject | [voltmx.sdk.dto.Column](voltmx.sdk.dto.Column_Class.html) | Defines the column information |

Example
-------

{% highlight voltMx %} // **Creation of SelectQuery object for one table**  
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
{% endhighlight %}

The selectQuery object described above is similar to the SQL instruction:

{% highlight voltMx %} Select ORDER_NUM,BINARY_NAME,ATTACH_DESC from EAM_WO_ATTACHMENT
{% endhighlight %}
