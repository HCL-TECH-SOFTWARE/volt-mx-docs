---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


voltmx.store Namespace
====================

The voltmx.store Namespace provides the following API elements.

Functions
---------

The voltmx.store namespace provides the following functions.

voltmx.store.clear
----------------

This API allows you to empty the database by clearing all the key-value pairs. If there are no key-value pairs, then the API does not do anything.

Syntax

voltmx.store.clear()

Input Parameters

None

Example

{% highlight voltMx %}try {
    voltmx.store.clear();
    alert("store is cleared");
} catch (err) {
    alert("error occurred in clear() and the error is :" + err);
}
{% endhighlight %}

Return Values

None.

Exceptions

LocalStorageError

Error

Implementation Details

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.getItem
------------------

This API returns a structured clone of the current value associated with the given key. If the given key does not exist in the list associated with the object then this method returns **null** for JavaScript.

Syntax

voltmx.store.getItem([keyname](#keyname))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| keyname \[String\] - Mandatory | Specifies the keyname from which the item needs to be fetched. |

 

Example

{% highlight voltMx %}var myValue = voltmx.store.getItem("name");
alert("name is " + myValue);
{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| myitem \[Object\] | Returns the item located at the specified index. |

 

Exceptions

LocalStorageError

Error

Implementation Details

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.removeItem
---------------------

This API removes the item identified by the key, if it exists. If no item with that key exists, the method does not perform any action.

Syntax

voltmx.store.removeItem([keyname](#keyname_removeitem))

Input Parameters

| Parameter | Description |
| --- | --- |
| keyname \[String\] - Mandatory | Specifies the keyname for which the item needs to be removed. |

 

Example

{% highlight voltMx %}voltmx.store.removeItem("name");
alert("name removed");
{% endhighlight %}

Return Values

This API does not return a value.

Exceptions

LocalStorageError

Error

Implementation Details

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.key
--------------

This API returns the name of the nth key in the list. If n is greater than the number of key/value pairs in the object, then this method returns **null** for JavaScript.

Syntax

voltmx.store.key([index](#index))

Input Parameters

| Parameter | Description |
| --- | --- |
| index \[Number\] - Mandatory | Specifies the index for which the key name is to be returned. |

 

Example

{% highlight voltMx %}var keyName = voltmx.store.key(0);
alert("first key name is " + keyName);
{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| keyname \[String\] | Returns the keyname of the specified index. |
| null/nil | Returns null/nil when the specified index is greater than the number of key/value pairs in the object. |

 

Exceptions

LocalStorageError

Error

Implementation Details

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.setItem
------------------

This API creates a structured clone of the given value. If this raises an exception then the list associated with the object is left unchanged.

Syntax

voltmx.store.setItem([key](#index), [value](#value))

Input Parameters

| Parameter | Description |
| --- | --- |
| key \[string\] - Mandatory | Specifies the keyname for which the item needs to be set. |
| value \[object\] - Mandatory | Specifies the value that must be set at the given index. This value can be a number, string, Boolean. |

 

Example

{% highlight voltMx %}voltmx.store.setItem("keyValue5", "this is a key value");
voltmx.store.setItem("keyValue4", true);

{% endhighlight %}

Return Values

None.

Exceptions

LocalStorageError

Error

Implementation Details

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.length
-----------------

This API returns the length of the local storage.

Syntax

voltmx.store.length()

Input Parameters

None

Example

{% highlight voltMx %}mylength = voltmx.store.length();
alert("length is " + mylength);
{% endhighlight %}

Return Values

| Return Value | Description |
| --- | --- |
| mylength \[String\] | Returns the length of the local storage. |

 

Exceptions

LocalStorageError

Error

Implementation Details

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

Platform Availability

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

![](resources/prettify/onload.png)
