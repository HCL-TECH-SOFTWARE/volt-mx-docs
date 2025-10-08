                             


voltmx.net.cache Namespace
========================

The voltmx.net.cache Namespace contains the following API elements.

Functions
---------

The voltmx.net.cache namespace implements the caching of responses by mapping HttpReq objects to HttpRes objects.

> **_Important:_** The response size is small enough to reasonably fit within the cache. (For example, if you provide a disk cache, the response must be no larger than about 5% of the disk cache size.

The voltmx.net.cache namespace contains the following functions.


<details close markdown="block"><summary>voltmx.net.cache.setMemoryAndDiskCapacity</summary>

* * *

This API initializes a cache capacity memory and disk with the specified values, which can be invoked as part of the preApp or postApp init of the VoltMX Iris app.

### Syntax
```

voltmx.net.cache.setMemoryAndDiskCapacity(  
    memoryCapacity, diskCapacity);
```


### Input Parameters

  
| Parameter | Description |
| --- | --- |
| memoryCapacity(JSNumber) | The memory capacity of the cache, in bytes. |
| diskCapacity(JSNumber) | The disk capacity of the cache, in bytes |

### Example

```

setMemoryandDiskCapacity: function() {
    var memory = this.view.tbxMemory.text;
    var disk = this.view.tbxDisk.text;
    voltmx.net.cache.setMemoryAndDiskCapacity(memory, disk);
    alert("The Memory and Disk Capacity is set");
},
```

### Return Values

None.

* * *

</details>
<details close markdown="block"><summary>voltmx.net.cache.getMemoryCapacity</summary>

* * *

This API returns memory capacity of the cache in bytes.

### Syntax

```

voltmx.net.cache.getMemoryCapacity();
```

### Input Parameters

None

### Example

```

getMemoryCapacity: function() {
    var memoryCapacity = voltmx.net.cache.getMemoryCapacity();
    alert("The memory capacity of the device is: " + memoryCapacity + "B");
},
```

### Return Values

Returns memory capacity in bytes of JSNumber.

### Platform Availability

iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.net.cache.getDiskCapacity</summary>

* * *

This API returns disk capacity of the cache, in bytes.

### Syntax

```

voltmx.net.cache.getDiskCapacity();
```

### Input Parameters

None

### Example

```

getDiskCapacity: function() {
    var diskCapacity = voltmx.net.cache.getDiskCapacity();
    alert("The disk capacity of the device is: " + diskCapacity + "B");
},
```

### Return Values

Returns disk capacity in bytes of JSNumber.

### Platform Availability

iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.net.cache.getCurrentDiskUsage</summary>

* * *

This API returns current size of the on-disk cache in bytes.

### Syntax

```

voltmx.net.cache.getCurrentDiskUsage();
```

### Input Parameters

None

### Example

```

currentDiskUsage: function() {
    var diskUsage = voltmx.net.cache.getCurrentDiskUsage();
    alert("The current disk usage is: " + diskUsage);
},
```

### Return Values

Returns current on-disk capacity in bytes of JSNumber.

### Platform Availability

iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.net.cache.getCurrentMemoryUsage</summary>

* * *

This API returns current size of the in-memory cache, in bytes

### Syntax

```

voltmx.net.cache.getCurrentMemoryUsage();
```

### Input Parameters

None

### Example

```

currentMemoryUsage: function() {
    var memUsage = voltmx.net.cache.getCurrentMemoryUsage();
    alert("The current memory usage is: " + memUsage);
},
```

### Return Values

Returns current in-memory capacity in bytes of JSNumber.

### Platform Availability

iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.net.cache.setCacheConfig</summary>

* * *

This API initializes the cacheConfig is a dictionary which configures the cachePolicy and storagePolicy of the cache responses for the request at the app level.

### Syntax

```

setCacheConfig(cacheConfig JSDictionary);
```

### Input Parameters
  
| Parameter | Description |
| --- | --- |
| cacheConfig(JSDictionary) | The cacheConfig is a dictionary which configures the **cachePolicy** and **storagePolicy** of the cache responses. cacheConfig Constants The cache config has the following constantsfor **cachePolicy**: **voltmx.net.cache.USE\_PROTOCOL\_CACHE\_POLICY**: Specifies that the caching logic defined in the protocol implementation, if any, is used for a particular URL load request. This is the default policy for URL load requests. **voltmx.net.cache.RELOAD\_IGNORING\_LOCAL\_CACHE\_DATA**: Specifies that the data for the URL should be loaded from the originating source. No existing cache data should be used to satisfy a URL load request. **voltmx.net.cache.RETURN\_CACHE\_DATA\_ELSE\_LOAD**: Specifies that the existing cached data should be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source. **voltmx.net.cache.RETURN\_CACHE\_DATA\_DONT\_LOAD**: Specifies that the existing cached data should be used to satisfy the request, regardless of its age or expiration te. If there is no existing data in the cache corresponding the request, the data is not loaded from the originating source. The cache config has the following constantsfor **storagePolicy**: **voltmx.net.cache.DISK\_AND\_MEMORY**: The response stored in disk and memory. **voltmx.net.cache.MEMORY\_ONLY**: The response stored in memory only. **voltmx.net.cache.NOT\_ALLOWED**: The response stored neither in the memory nor on the disk.   |

### Example

```

setCacheConfig: function() {
    var cacheConfig = {
        cachePolicy: voltmx.net.cache.USE_PROTOCOL_CACHE_POLICY,
        cacheStoragePolicy: voltmx.net.cache.DISK_AND_MEMORY
    };
    voltmx.net.cache.setCacheConfig(cacheConfig);
    alert("The Cache Config is set");
}
```

### Return Values

None.

### Remarks

This app level setting will be overridden by the per request level setting under widget and api level.

### Platform Availability

iOS

![](resources/prettify/onload.png)
</details>