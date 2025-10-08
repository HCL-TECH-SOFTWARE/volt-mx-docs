                             

You are here: Caching API

Caching API
===========

The Caching API provides a standard interface that can be used on iOS platform to manage network cache. This interface enables you to store and retrieve network requests and the corresponding responses.

iOS provides a composite on-disk and in-memory cache allowing an app to reduce its dependence on a network connection and provide faster turnaround for previously cached responses. Further, iOS provides support for accessing resources using the protocols such as ftp://, http://, https://, file:///, data://. iOS does not support response caching for all the protocol implementations. Currently, only http and https requests are cached.

For default sessions, the default value is the shared URL cache object.

The Caching API uses `voltmx.cache Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.net.cache.setMemoryAndDiskCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.setMemoryAndDiskCapacity) | Initializes a cache capacity memory and disk with the specified values, which can be invoked as part of the preApp or postApp init of the Volt MX Iris app. |
| [voltmx.net.cache.getMemoryCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.getMemoryCapacity()) | Returns memory capacity of the cache in bytes. |
| [voltmx.net.cache.getDiskCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.getDiskCapacity()) | Returns disk capacity of the cache, in bytes. |
| [voltmx.net.cache.getCurrentDiskUsage](voltmx.net.cache_functions.md#voltmx.net.cache.getCurrentDiskUsage()) | Returns current size of the on-disk cache in bytes. |
| [voltmx.net.cache.getCurrentMemoryUsage](voltmx.net.cache_functions.md#voltmx.net.cache.getCurrentMemoryUsage()) | Returns current size of the in-memory cache, in bytes. |
| [voltmx.net.cache.setCacheConfig](voltmx.net.cache_functions.md#voltmx.net.cache.setCacheConfig) | Initializes the cacheConfig is a dictionary which configures the cachePolicy and storagePolicy of the cache responses for the request at the app level. |

 

Configure the memory capacity and the disk capacity of the cache by using the [voltmx.net.cache.setMemoryAndDiskCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.setMemoryAndDiskCapacity) function. To set the cache policy and storage policy of the cache responses by using the [voltmx.net.cache.setMemoryAndDiskCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.setMemoryAndDiskCapacity) function. The Cache policy deals with the URL load requests and the storage policy specifies the storage location of the response.

Retrieve the memory capacity of the cache using [voltmx.net.cache.getMemoryCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.getMemoryCapacity()) and the disk capacity of the cache using the [voltmx.net.cache.getDiskCapacity](voltmx.net.cache_functions.md#voltmx.net.cache.getDiskCapacity()). To find the current size of the cache on disk, use the [voltmx.net.cache.getCurrentDiskUsage](voltmx.net.cache_functions.md#voltmx.net.cache.getCurrentDiskUsage()), and to find the current size of the cache in memory, use the [voltmx.net.cache.getCurrentMemoryUsage](voltmx.net.cache_functions.md#voltmx.net.cache.getCurrentMemoryUsage())function.

To view the functionality of the Caching API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/CacheAPI)

![](resources/prettify/onload.png)
