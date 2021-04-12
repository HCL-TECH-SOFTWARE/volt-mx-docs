---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.html) > [Invoking an Object Service](Objects_API_Reference.html) > DataObject Class

DataObject Class
================

The DataObject class represents a data object in the Object Service. An instance of this class is required as a parameter in many methods of the [ObjectService class](ObjectService_Class.html).

Constructors
------------

The DataObject class has one constructor.

### DataObject

Creates an instance of the DataObject class.

#### Syntax

{% highlight voltMx %} DataObject(objectName, recordObject);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| objectName | string | An instance of the DataObject class which contains data about the object and its data. |
| recordObject | Dictionary <string, object> | An Dictionary object through which the record is sent. |

#### Example

{% highlight voltMx %} 
VoltMX.DataObject dataObject = new VoltMX.DataObject("objectName");
dataObject.AddField("field", "value");
{% endhighlight %}
