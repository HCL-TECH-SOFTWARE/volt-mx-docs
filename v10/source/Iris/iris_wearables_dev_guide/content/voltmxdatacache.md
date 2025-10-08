                             


VoltMXDataCache
=============

VoltMXDataCache is a class that stores key-value pairs, similar to a dictionary. The cache stores data temporarily in a watch that is obtained from an iPhone using WatchKit requests. Reusing the cached data improves performance. The cache reduces the processing requests to iPhone and helps to improve responsiveness for the users. However, if the data is not critical to the application and memory is running low, cached data can be discarded. If discarded, the data must be recomputed.

cacheTimeoutInterval
--------------------

This property helps cache the data in an Apple Watch for the duration specified. If you do not specify the cacheTimeoutInterval, the data is cached for one day. The duration must be specified in seconds.

Example

```
VoltMXDataCache * cache = [
    [VoltMXDataCache alloc] initWithName: @“localCache”
];
cache.cacheTimeoutInterval = 20; // so data is cached for 20 seconds
```

Following are the APIs available for the VoltMXDataCache class:

*   [initWithName:(NSString\*)cacheName](#initwithnamensstringcachename)
*   [(instancetype)sharedInstance](#instancetypesharedinstance)
*   [(void)setObject:(id)value forKey:(id)key](#voidsetobjectidvalue-forkeyidkey)
*   [(id)getObjectForKey:(id)key](#idgetobjectforkeyidkey)
*   [(void)setCacheWithDictionary:(NSDictionary\*)dict](#voidsetcachewithdictionarynsdictionarydict)
*   [(NSDictionary)getDictionaryFromCache](#nsdictionarygetdictionaryfromcache)
*   [(void)setString:(NSString\*)string forKey:(NSString\*)key](#voidsetstringnsstringstring-forkeynsstringkey)
*   [(NSString\*)getStringforKey:(NSString\*)key](#nsstringgetstringforkeynsstringkey)
*   [(void)setImage:(UIImage\*)image forKey:(NSString\*)key](#voidsetimageuiimageimage-forkeynsstringkey)
*   [(UIImage\*)getImageForKey:(NSString\*)key](#uiimagegetimageforkeynsstringkey)
*   [(NSArray\*)getAllkeys](#nsarraygetallkeys)
*   [(void)clearCache](#voidclearcache)
*   [(void)removeCacheForKey:(NSString\*)key](#voidremovecacheforkeynsstringkey)

initWithName:(NSString\*)cacheName
----------------------------------

This API helps you initialize the VoltMXDataCache object with the specified cache name.

### Signature

**initWithName:(NSString\*)cacheName**

### Input Parameters

cacheName \[String\] - Mandatory

Specifies the name of the cache that must be initialized.

### Return Values

This API returns the initialized VoltMXDataCache object.

### Platform Availability

Available on iOS platform.

### Example

```
VoltMXDataCache * cache = [
    [VoltMXDataCache alloc] initWithName: @"mycache"
];
```

(instancetype)sharedInstance
----------------------------

This API helps you create a shared instance of the VoltMXDataCache object with a default name.

### Signature

**(instancetype)sharedInstance**

### Input Parameters

None

### Return Values

This API returns the VoltMXDataCache shared instance.

### Platform Availability

Available on iOS platform.

### Example

```
VoltMXDataCache * cache = [VoltMXDataCache sharedInstance];
```

(void)setObject:(id)value forKey:(id)key
----------------------------------------

This API helps you set cache with a given key value pair.

### Signature

**(void)setObject:(id)value forKey:(id)key**

### Input Parameters

value \[object\] - Mandatory

Specifies the value to be cached.

key \[String\] - Mandatory

Specifies the key for the value object.

### Return Values

None

### Platform Availability

Available on iOS platform.

### Example

```
VoltMXDataCache * cache = [
    [VoltMXDataCache alloc] initWithName: @"mycache"
];
NSArray * arr = @ [@"one", @"two"];
[cache setObject: arr forKey: @"key"]
```

(id)getObjectForKey:(id)key
---------------------------

This API helps you get the value of the NSObject for the given key object.

### Signature

**(id)getObjectForKey:(id)key**

### Input Parameters

key \[String\] - Mandatory

Specifies the key object for which the associated value is retrieved.

### Return Values

None

### Platform Availability

Available on iOS platform.

### Example

```
NSArray * arr = [cache getObjectForKey: @"key"];
```

(void)setCacheWithDictionary:(NSDictionary\*)dict
-------------------------------------------------

This API helps you set cache with a given dictionary.

### Signature

**(void)setCacheWithDictionary:(NSDictionary\*)dict**

### Input Parameters

dict \[Object\] - Mandatory

Specifies the dictionary object with which the cache is set.

### Return Values

None

### Platform Availability

Available on iOS platform.

### Example

```
NSDictionary * dict = @ {@
    "key1": @ "val1",
    @"key2": "val2"
};
[cache setCacheWithDictionary: dict];
```

(NSDictionary)getDictionaryFromCache
------------------------------------

This API helps you get the dictionary from cache.

### Signature

**(NSDictionary)getDictionaryFromCache**

### Input Parameters

None

### Return Values

This API returns the dictionary.

### Platform Availability

Available on iOS platform.

### Example

```
NSDictionary * dict = [cache getDictionaryFromCache];
```

(void)setString:(NSString\*)string forKey:(NSString\*)key
---------------------------------------------------------

This API helps you set the cache with given key-value string objects.

### Signature

**(void)setString:(NSString\*)string forKey:(NSString\*)key**

### Input Parameters

String \[String\] - Mandatory

Specifies the string object set as a value to the given key.

key \[String\] - Mandatory

Specifies the key for the object.

### Return Values

This API returns the dictionary.

### Platform Availability

Available on iOS platform.

### Example

```
[cache setString: @"stringValue"
    forKey: @"stringkey"
];
```

(NSString\*)getStringforKey:(NSString\*)key
-------------------------------------------

This API helps you get the string object associated with the given key.

### Signature

**(NSString\*)getStringforKey:(NSString\*)key**

### Input Parameters

key \[String\] - Mandatory

Specifies the key for the object to which the associated value is retrieved.

### Return Values

This API returns NSString object.

### Platform Availability

Available on iOS platform.

### Example

```
[cache setString: @"stringValue"
    forKey: @"stringkey"
];
```

(void)setImage:(UIImage\*)image forKey:(NSString\*)key
------------------------------------------------------

This API helps you set the image object to a given key in cache.

### Signature

**(void)setImage:(UIImage\*)image forKey:(NSString\*)key**

### Input Parameters

image \[UIImage\] - Mandatory

Specifies the image object set as a value to the given key.

key \[String\] - Mandatory

Specifies the key for the object.

### Return Values

This API returns NSString object.

### Platform Availability

Available on iOS platform.

### Example

```
UIImage * image = [UIImage imageNamed: @"image.png"];
[cache setImage: image forKey: @"myImage"];
```

(UIImage\*)getImageForKey:(NSString\*)key
-----------------------------------------

This API helps you get the image for a given key.

### Signature

**(UIImage\*)getImageForKey:(NSString\*)key**

### Input Parameters

key \[String\] - Mandatory

Specifies the key object to which the associated value is retrieved.

### Return Values

This API returns UIImage.

### Platform Availability

Available on iOS platform.

### Example

```
UIImage * img = [cache getImageForKey: @"myImage"];
```

(NSArray\*)getAllkeys
---------------------

This API helps you get all keys in the cache.

### Signature

**(NSArray\*)getAllkeys**

### Input Parameters

None

### Return Values

This API returns NSArray object.

### Platform Availability

Available on iOS platform.

### Example

```
NSArray *arr = [cache getAllKeys]; 
```

(void)clearCache
----------------

This API helps you clear the cache.

### Signature

**(void)clearCache**

### Input Parameters

None

### Return Values

None

### Platform Availability

Available on iOS platform.

### Example

```
[cache clearCache]; 
```

(void)removeCacheForKey:(NSString\*)key
---------------------------------------

This API helps you remove cache for the given key.

### Signature

**(void)removeCacheForKey:(NSString\*)key**

### Input Parameters

key \[String\] - Mandatory

Specifies the key object that has to be removed from the cache.

### Return Values

None

### Platform Availability

Available on iOS platform.

### Example

```
[cache removeCacheForKey:@"myImage"]; 
```
