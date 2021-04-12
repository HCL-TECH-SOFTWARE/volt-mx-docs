---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [SDKs](../Foundry_SDKs.html) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.html) > [Invoking an Object Service](Objects_API_Reference.html) > ObjectService Class

ObjectService Class
===================

The ObjectService class provides methods that act on the Volt MX Foundry endpoint, including basic CRUD and metadata functions .

Methods
-------

The following methods are used by the ObjectService class.

### Create Method

Creates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} Create(dataObject, headers, queryParams);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class which contains data about the object and its data. |
| headers | Dictionary <string, string> | Key/value pairs of httpHeaders that are sent along with the network call. |
| queryParams | Dictionary <string, string> | Key/value pairs of query params that are appended to the url while making a network call. |

#### Example

{% highlight voltMx %} 
public void CreateObject() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.GetObjectService("<service_name>");
        VoltMX.DataObject dataObject = new VoltMX.DataObject("<object_name>");
        dataObject.AddField("field1", "value1");
        JObject result = objectsvc.Create(dataObject);
    } catch (Exception e) {
        sdkObject.Log("Create Object Failed");
    }
}
{% endhighlight %}

### DeleteRecord Method

Deletes an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} DeleteRecord(dataobject, headers, queryParams);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class which contains data about the object and its data. |
| headers (Optional) | Dictionary <string, string> | Key/value pairs of httpHeaders that are sent along with the network call. |
| queryParams (Optional) | Dictionary <string, string> | Key/value pairs of query params that are appended to the url while making a network call. |

#### Example

{% highlight voltMx %} public void DeleteObject() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.ObjectServices("<service_name>");
        VoltMX.DataObject dataObject = new VoltMX.DataObject("<object_name>");
        //Primary Key is Required to perform the DeleteRecord operation.
        dataObject.DeleteRecord("Primary_Key", "value");
        JObject result = objectsvc.DeleteRecord(dataObject);
    } catch (Exception e) {
        sdkObject.Log("Delete Object Failed");
    }
}
{% endhighlight %}

### GetMetadataOfAllObjects Method

Gets the metadata associated with the objects defined in the service from the server or local store.

#### Syntax

{% highlight voltMx %} GetMetadataOfAllObjects(headers, queryParams);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| headers | Dictionary <string, string> | Key/value pairs of httpHeaders that are sent along with the network call. |
| queryParams | Dictionary <string, string> | Key/value pairs of query params that are appended to the url while making a network call. To query data, the Odata Url is sent in this parameter. |

#### Example

{% highlight voltMx %} public void GetMetadataForAllObjects() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.ObjectServices("<service_name>");
        VoltMX.Metadata objectsMetadata = null;
        objectsMetadata = objectsvc.GetMetadataOfAllObjects();
    } catch (Exception e) {
        sdkObject.Log("Get Metadata Of All Objects Failed");
    }
}
{% endhighlight %}

### GetMetadataOfObject Method

Gets the metadata associated with an object defined in the service from the server or local store.

#### Syntax

{% highlight voltMx %} GetMetadataOfObject(objectName, headers, queryParams);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| objectName | string | Object name in Volt MX Foundry |
| headers | Dictionary <string, string> | Key/value pairs of httpHeaders that are sent along with the network call. |
| queryParams | Dictionary <string, string> | Key/value pairs of query params that are appended to the url while making a network call. |

#### Example

{% highlight voltMx %} public void GetMetadataForObject() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.ObjectServices("<service_name>");
        VoltMX.Metadata objectsMetadata = null;
        objectsMetadata = objectsvc.GetMetadataOfObject("<object_Name>");
    } catch (Exception e) {
        sdkObject.Log("Get Metadata Of Object Failed");
    }
}
{% endhighlight %}

### PartialUpdate Method

Partially updates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} PartialUpdate(dataObject);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class which contains data about the object and its data. |
| headers | Dictionary <string, string> | Key/value pairs of httpHeaders that are sent along with the network call. |
| queryParams | Dictionary <string, string> | Key/value pairs of query params that are appended to the url while making a network call. |

#### Example

{% highlight voltMx %} public void PartialUpdateSampleObject() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.ObjectServices.<service_name>;
        VoltMX.DataObject dataObject = new VoltMX.DataObject("<object_name>");
        dataObject.AddField("Updatedfield1", "Updatedvalue1");
        //Primary Key is required to perform the update operation.
        dataObject.AddField("Primary_Key", "value");
        JObject result = objectsvc.PartialUpdate(dataObject);
    } catch (Exception e) {
        sdkObject.Log("Update Object Failed");
    }
}		
{% endhighlight %}

### Update Method

Updates an object in the Volt MX Foundry endpoint.

#### Syntax

{% highlight voltMx %} Update(dataobject, headers, queryParams);
{% endhighlight %}

#### Parameters

  
| Parameter | Type | Description |
| --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class which contains data about the object and its data. |
| headers | Dictionary <string, string> | Key/value pairs of httpHeaders that are sent along with the network call. |
| queryParams | Dictionary <string, string> | Key/value pairs of query params that are appended to the url while making a network call. |

#### Example

{% highlight voltMx %} public void UpdateSampleObject() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.ObjectServices("<service_name>");
        VoltMX.DataObject dataObject = new VoltMX.DataObject("<object_name>");
        dataObject.AddField("Updatedfield1", "Updatedvalue1");
        //Primary Key is required to perform the update operation.
        dataObject.AddField("Primary_Key", "value");
        JObject result = objectsvc.Update(dataObject);
    } catch (Exception e) {
        sdkObject.Log("Update Object Failed");
    }
}
{% endhighlight %}
