layout: documentation---
category: iris_api_dev_guide
---

Sync Object
===========

The Sync object implements the [Sync API](sync_apis.htm) at the object level.

Methods
-------

The Sync object contains the following methods.

<syncObject>.create
-------------------

This API enables you to create a record in a Sync object.

Syntax

<syncObject>.create ([object](#Object), [successCallback](#successCallback6), [errorCallback](#errorCallback6))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| Object \[object\] - Mandatory | Specifies the object that needs to be created in the database. |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function CreateProduct()
<syncObject>.create(objectProduct, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get All Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get All Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.deleteByPK
-----------------------

This API enables you to delete a record using the object's primary key.

Syntax

<syncObject>.deleteByPK ([pk](#pk3), [successCallback](#successCallback9), [errorCallback](#errorCallback9))

Input Parameters

| Parameters | Description |
| --- | --- |
| pk \[Integer\] - Mandatory | Specifies the object's primary key using which the respective row data has to be deleted in the database. |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function DeleteProductByPK()
<syncObject>.deleteByPK(123, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Delete By Primary Key Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Delete By Primary Key Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.getAll
-------------------

This API fetches all the records for a Sync object.

Syntax

<syncObject>.getAll ([successCallback](#successCallback4), [errorCallback](#errorCallback4))

Input Parameters

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function SyncGetAll()
sync.getAll(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get All Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get All Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.getAllDetailsByPK
------------------------------

This API fetches a record using primary key value for a Sync object.

Syntax

syncObject>.getAllDetailsByPK ([pk](#pk), [successCallback](#successCallback5), [errorCallback](#errorCallback5))

Input Parameters

| Parameter | Description |
| --- | --- |
| pk \[object\] - Mandatory | Specify the object's primary key using which the respective row data needs to be fetched from the database on the particular object. |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function SyncGetAllDetailsByPK()
<syncObject>.getAllDetailsByPK(ProductId="123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get All Details By Primary Key Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get All Details By Primary Key Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.getPendingAcknowledgement
--------------------------------------

This API enables you to fetch pending acknowledgment for a Sync object.

Syntax

<syncObject>.getPendingAcknowledgement ([successCallback](#successCallback12), [errorCallback](#errorCallback12))

Input Parameters

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function GetPendingAcknowledgement()
<syncObject>.getPendingAcknowledgement(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Pending Acknowledgement Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Pending Acknowledgement Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.getPendingUpload
-----------------------------

This API enables you to fetch all the rows for a Sync object which are pending for upload.

Syntax

<syncObject>.getPendingUpload ([successCallback](#successCallback11), [errorCallback](#errorCallback11))

Input Parameters

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function GetPendingUpload()
<syncObject>.getPendingUpload(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Pending Upload Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Pending Upload Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.getXXX
-------------------

This API retrieves all the records from the related object(XXX) corresponding to the current primary key.

Syntax

<syncObject>.getXXX ([pk](#pk5), [successCallback](#successCallback15), [errorCallback](#errorCallback15))

Input Parameters

| Parameter | Description |
| --- | --- |
| pk \[Integer\] - Mandatory | Specifies the object's primary key using which the respective row data needs to be fetched from the database. |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​E.g.: If there is a relationship from Order to OrderDetails the below function will retrieve all the OrderDetails corresponding to that order.

function GetOrderDetails()
<syncObject>.getOrderDetails(123, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Order Details Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Order Details Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.remove
-------------------

This API enables you to delete a record for a Sync object using the _where_ clause.

Syntax

<syncObject>.remove ([whereclause](#whereclause2), [successCallback](#successCallback10), [errorCallback](#errorCallback10))

Input Parameters

| Parameter | Description |
| --- | --- |
| whereclause \[String\] - Mandatory | Specifies the string using which the data from database has to be fetched. |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function DeleteProduct()
<syncObject>.remove(ProductId="123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Delete Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Delete Failed", nil, "error", "Ok", "", "Error", nil)
end
  ​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.rollbackPendingLocalChanges
----------------------------------------

This API enables you to rollback the object level pending changes which are not synchronized.

Syntax

<syncObject>.rollbackPendingLocalChanges ([successCallback](#successCallback13), [errorCallback](#errorCallback13))

Input Parameters

| Parameter | Description |
| --- | --- |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

Example

{% highlight voltMx %}​​​​​function RollbackPendingLocalChanges()
<syncObject>.rollbackPendingLocalChanges(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Rollback Pending Local Changes Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Rollback Pending Local Changes Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.rollbackPendingLocalChangesByPK
--------------------------------------------

This API enables you to fetch all the records for a Sync object.

Syntax

<syncObject>.rollbackPendingLocalChangesByPK ([pk](#pk4), [successCallback](#successCallback14), [errorCallback](#errorCallback14))

Input Parameters

| Parameter | Description |
| --- | --- |
| pk \[Integer\] - Mandatory | Specify the object's primary key using which the respective row data needs to be rollback in the database |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function <syncObject>.RollbackPendingLocalChangesByPK()
<syncObject>.rollbackPendingLocalChangesByPK(123, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Rollback Pending Local Changes Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Rollback Pending Local Changes Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.update
-------------------

This API enables you to update a record for a Sync object using a _where_ clause

Syntax

<syncObject>.update ([whereClause](#whereclause), [successCallback](#successCallback8), [errorCallback](#errorCallback8))

Input   Parameters

| Parameter | Description |
| --- | --- |
| whereclause \[String\] - Mandatory | Specifies the string using which the data from database to be fetched. |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function UpdateProduct()
<syncObject>.update(ProductId="123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Update Product Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Update Product Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

<syncObject>.updateByPK
-----------------------

This API enables you to update a record using the object's primary key.

Syntax

<syncObject>.updateByPK ([pk](#pk2), [successCallback](#successCallback7), [errorCallback](#errorCallback7))

Input  Parameters

| Parameter | Description |
| --- | --- |
| pk \[Integer\] - Mandatory | Specifies the object's primary key using which the respective row data needs to be updated in the database |
| successCallback \[function\] - Optional | Specifies the function which will get invoked on success. |
| errorCallback \[function\] - Optional | Specifies the function which will get invoked on error. |

 

Example

{% highlight voltMx %}​​​​​function UpdateProductByPK()
<syncObject>.updateByPK("123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Product by Primary Key Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Product by Primary Key Failed", nil, "error", "Ok", "", "Error", nil)
end
​
{% endhighlight %}​​​​​

Platform Availability

Available on all platforms.

![](resources/prettify/onload.png)