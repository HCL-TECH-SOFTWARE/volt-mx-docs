                              

User Guide: [SDKs](../Foundry_SDKs.md) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.md) > [Invoking an Object Service](Objects_API_Reference.md) > DataObject Class

DataObject Class
================

The DataObject class represents a data object in the Object Service. An instance of this class is required as a parameter in many methods of the [ObjectService class](ObjectService_Class.md).

Constructors
------------

The DataObject class has one constructor.

### DataObject

Creates an instance of the DataObject class.

#### Syntax

```
 DataObject(objectName, recordObject);
```

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| objectName | string | An instance of the DataObject class which contains data about the object and its data. |
| recordObject | Dictionary <string, object> | An Dictionary object through which the record is sent. |

#### Example

```
 
VoltMX.DataObject dataObject = new VoltMX.DataObject("objectName");
dataObject.AddField("field", "value");
```
