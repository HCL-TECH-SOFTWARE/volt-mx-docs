                            


voltmx.store Namespace
====================

The voltmx.store Namespace provides the following API elements.

Functions
---------

The voltmx.store namespace provides the following functions.

voltmx.store.clear
----------------

This API allows you to empty the database by clearing all the key-value pairs. If there are no key-value pairs, then the API does not do anything.

<b>Syntax</b>

voltmx.store.clear()

<b>Input Parameters</b>

None

<b>Example</b>

```
try {
    voltmx.store.clear();
    alert("store is cleared");
} catch (err) {
    alert("error occurred in clear() and the error is :" + err);
}
```

<b>Return Values</b>

None.

<b>Exceptions</b>

* LocalStorageError

* Error

<b>Implementation Details</b>

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

<b>Platform Availability</b>

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.getItem
------------------

This API returns a structured clone of the current value associated with the given key. If the given key does not exist in the list associated with the object then this method returns **null** for JavaScript.

<b>Syntax</b>

voltmx.store.getItem([keyname](#keyname))

<b>Input Parameters</b>

  
| Parameter | Description |
| --- | --- |
| keyname \[String\] - Mandatory | Specifies the keyname from which the item needs to be fetched. |

 

<b>Example</b>

```
var myValue = voltmx.store.getItem("name");
alert("name is " + myValue);
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| myitem \[Object\] | Returns the item located at the specified index. |

 

<b>Exceptions</b>

* LocalStorageError

* Error

<b>Implementation Details</b>

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

<b>Platform Availability</b>

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.removeItem
---------------------

This API removes the item identified by the key, if it exists. If no item with that key exists, the method does not perform any action.

<b>Syntax</b>

voltmx.store.removeItem([keyname](#keyname_removeitem))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| keyname \[String\] - Mandatory | Specifies the keyname for which the item needs to be removed. |

 

<b>Example</b>

```
voltmx.store.removeItem("name");
alert("name removed");
```

<b>Return Values</b>

This API does not return a value.

<b>Exceptions</b>

* LocalStorageError

* Error

<b>Implementation Details</b>

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

<b>Platform Availability</b>

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.key
--------------

This API returns the name of the nth key in the list. If n is greater than the number of key/value pairs in the object, then this method returns **null** for JavaScript.

<b>Syntax</b>

voltmx.store.key([index](#index))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| index \[Number\] - Mandatory | Specifies the index for which the key name is to be returned. |

 

<b>Example</b>

```
var keyName = voltmx.store.key(0);
alert("first key name is " + keyName);
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| keyname \[String\] | Returns the keyname of the specified index. |
| null/nil | Returns null/nil when the specified index is greater than the number of key/value pairs in the object. |

 

<b>Exceptions</b>

* LocalStorageError

* Error

<b>Implementation Details</b>

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

<b>Platform Availability</b>

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.setItem
------------------

This API creates a structured clone of the given value. If this raises an exception then the list associated with the object is left unchanged.

<b>Syntax</b>

voltmx.store.setItem([key](#index), [value](#value))

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| key \[string\] - Mandatory | Specifies the keyname for which the item needs to be set. |
| value \[object\] - Mandatory | Specifies the value that must be set at the given index. This value can be a number, string, Boolean. |

 

<b>Example</b>

```
voltmx.store.setItem("keyValue5", "this is a key value");
voltmx.store.setItem("keyValue4", true);

```

<b>Return Values</b>

None.

<b>Exceptions</b>

* LocalStorageError

* Error

<b>Implementation Details</b>

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

<b>Platform Availability</b>

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

voltmx.store.length
-----------------

This API returns the length of the local storage.

<b>Syntax</b>

voltmx.store.length()

<b>Input Parameters</b>

None

<b>Example</b>

```
mylength = voltmx.store.length();
alert("length is " + mylength);
```

<b>Return Values</b>

| Return Value | Description |
| --- | --- |
| mylength \[String\] | Returns the length of the local storage. |

 

<b>Exceptions</b>

* LocalStorageError

* Error

<b>Implementation Details</b>

For implementation details, see [http://www.w3.org/TR/webstorage/#the-localstorage-attribute](http://www.w3.org/TR/webstorage#the-localstorage-attribute).

<b>Platform Availability</b>

Available on all platforms\*. \*Dummy Implementation on Mobile Web.

![](resources/prettify/onload.png)
