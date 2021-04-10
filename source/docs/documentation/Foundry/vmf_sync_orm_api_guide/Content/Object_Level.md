---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                           

Sync ORM API Guide: \<object\>.getAll (Static)

Object Level
============

This set of APIs helps the developer to perform various ORM operations at a SyncObject level in the application.

To take advantage of object oriented programming in JavaScript, some of the APIs are mentioned in object oriented way. So, as far as JavaScript is concerned, you can classify ORMs as:

*   Instance APIs
*   Static APIs  
    

1.  Instance APIs

APIs that involve operations on single row can be invoked by standard JavaScript object as well as traditional way.

*   Object Oriented Way:

For Example;

{% highlight voltMx %}var product = new Product();
product.productId = 123 
product.name = "test";
product. updateByPK (successcallback, error callback);

{% endhighlight %}

*   Traditional Way:

For Example;

{% highlight voltMx %}Product. updateByPK ({productId :123}, { name:"test" }, successcallback, error callback);
{% endhighlight %}

1.  Static APIs

APIs that involve operations on multiple rows can only be invoked using traditional way.

For Example;

{% highlight voltMx %}Product. getAll ( successcallback, error callback);
{% endhighlight %}

> **_Note:_** Some of the ORMs described below have an optional markForUpload parameter that you can use to allow or defer the change made by the ORM from being uploaded to the server. If the parameter is not specified, it is treated as true, by default and the changes are reflected in the server after sync is performed. If parameter is specified as _false_, then the change that the ORM made is deferred from upload to server until marked for upload using either the markForUpload or markForUploadByPK ORM.

The convention \<object\> below indicates the GlobalName of the SyncObject as specified in the Volt MX Foundry Sync IDE / SyncConfig file.

\<object\>.getAll (Static)
------------------------

This API retrieves all instances of SyncObject present in local database with given limit and offset. Limit indicates the number of records to be retrieved and offset indicates number of rows to be ignored before returning the records.

### Signature

_\<object\>.getAll(**successCallback, errorCallback,orderByMap,limit,offset**)_

### Parameters

*   successCallback\[function\] - Optional

Specifies the function that gets invoked on success

*   errorCallback\[function\] - Optional

Specifies the function that gets invoked on error

*   orderByMap \[Array\] – Optional

Specifies the way the data should be arranged in ascending/descending order of column name.

Refer to the [Example](#(orderByMap)_Example:)

*   limit \[Parameter\] – Optional

Specifies the limit of number of records to be displayed (used for pagination/lazy loading).

Refer to the [Example](#(limit_and_offset_)_Example:)

*   offset\[Parameter\] – Optional

Specifies the number of rows to be ignored before returning the records used for pagination/lazy loading

Refer to the [Example](#(limit_and_offset_)_Example:)

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Examples

getAll

(General) Example:

{% highlight voltMx %}function syncGetAll(){
Account.getAll(showAccSuccessCallback,showAccFailCallback)
}

function showAccSuccessCallback(res){
    //res contains the data of all records of Account table
      alert("Get all Accounts success");
}

function showAccFailCallback(res){
alert("Get all Accounts failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

getAll

(orderByMap) Example:

{% highlight voltMx %}/\* Define a orderByMap array to arrange the data in Categories table in descending order of CategoryID and ascending order of CategoryName \*/
 function CategoryGetAll(){ 
 var orderByMap = \[\]
 orderByMap \[0\] = {};
 orderByMap \[0\].key = "CategoryID";
 orderByMap \[0\].sortType ="desc";
 orderByMap \[1\] = {};
 orderByMap \[1\].key = "CategoryName";
 orderByMap \[1\].sortType ="asc";
 Categories.getAll(showCatSuccessCallback,showCatFailCallback,orderByMap);
}
function showCatSuccessCallback(res){
//res contains the data of Categories arranged in the way specified
alert("Get all Categories success");
//do something with the data contained in res
}
function showCatFailCallback(res){
  alert("Get all Accounts failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

getAll

(limit and offset ) Example:

{% highlight voltMx %}/\*assume that Categories table has 30 records. Specifying limit 20 and offset 5 returns 20 records starting from 5th record. Thus, records from 5-25 are returned \*/ 
function CategoryGetAll(){ 
//specify limit as 20
var limit = 20;
//specify offset as 5
var offset = 5;
Categories.getAll(showCatSuccessCallback,showCatFailCallback,null,limit,offset);
}
function showCatSuccessCallback(res){
//res contains the data of Categories table specified by limit and offset
alert("Get all Categories success");
//do something with the data contained in res
}
function showCatFailCallback(res){
alert("Get all Accounts failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getAllDetailsByPK (Instance)
-------------------------------------

This method retrieves a row using primary key from the local database.

### Signature

_\<object\>getAllDetailsByPK(**pk, successCallback, errorCallback**)_

### Parameters

*   pk\[number/JSObject/Table\]- Mandatory
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database on the particular object. For composite primary keys it has to be a table/JSObject.
    

*   successCallback\[function\] - Optional
    
    Specifies the function that gets invoked on success
    

*   errorCallback\[function\] - Optional
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function SyncGetAllDetailsByPK(){
	Product.getAllDetailsByPK({ProductId:123},successCallback,errorFailCallback);
}

//OOP Way
function SyncGetAllDetailsByPK(){
product = new Product();
product.ProductId = 123;	
product.getAllDetailsByPK(successCallback,errorFailCallback);
}
function successCallback(res){
    //res contains the details of product record specified by pk 
alert("Get All Product Details By Primary Key Success");
   
   //do something with data contained in res
}	

function errorFailCallback (res){
alert("Get All Details By Primary Key Failed + " with Error Code:" + res.errorCode + ", error message:"+ 
res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

### Example 2

{% highlight voltMx %}//Static Way with single PRIMARY KEY
    function SyncGetAllProductDetailsByPK(){
        Product.getAllDetailsByPK({ProductId:123},successCallback,errorFailCallback);
                // OR it can be used as
        Product.getAllDetailsByPK(123,successCallback,errorFailCallback);
    }

//OOP Way  with single PRIMARY KEY
    function SyncGetProductDetailsByPK(){
        product = new Product();
        product.ProductId = 123;	
        product.getAllDetailsByPK(successCallback,errorFailCallback);
    }

//Static Way with composite PRIMARY KEY
    var pks = { ProductId :123,
                OrderID : 543 };
                
    function SyncGetAllOrderDetailsByPK(){
        OrderDetails.getAllDetailsByPK(pks,successCallback,errorFailCallback);
    }

//OOP Way with composite PRIMARY KEY
    function SyncGetOrderDetailsByPK(){
        mOrderDetails = new OrderDetails();
        mOrderDetails.ProductId = 123;	
        mOrderDetails.OrderID = 543;
        mOrderDetails.getAllDetailsByPK(successCallback,errorFailCallback);
    }
    
 // CallBacks for getAllDetailsByPK calls
    //success CallBack
    function successCallback(res){
            //res contains the details of product record specified by pk 
        alert("Get All Details By Primary Key Success");
            //do something with data contained in res
    }	
    //failure CallBack
    function errorFailCallback (res){
        alert("Get All Details By Primary Key Failed + " with Error Code:" + res.errorCode + ", error message:"+ 
        res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
    }

{% endhighlight %}

\<object\>.markForUpload (Static)
-------------------------------

This API marks instance(s) of sync object matching given where clause for upload. This enables deferred records to merge with the enterprise data source in the next Sync.

### Signature

_\<object\>.markForUpload(**whereClause, successcallback, errorcallback**)_

### Parameters

*   whereClause**\[String\]- Mandatory**
    
    Specifies the whereclause to markForUpload.
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback\[function\] - Optional
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function MarkForUpload(whereClause, successCallback, errorFailCallback){
	Product.markForUpload("where UnitPrice > 10", successCallback , errorFailCallback);
}
function successCallback(){
	alert("Product(s)Marked for Upload");
}
function errorFailCallback (res){
	alert("ProductsMarked for upload Failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.markForUploadByPK (Instance)
-------------------------------------

This ORM API marks instance of sync object with given primary key for upload. This enables deferred records to merge with the enterprise data source in the next Sync.

### Signature

_\<object\>.markForUploadByPK(**pk, successcallback, errorcallback**)_

### Parameters

*   pk**\[number/JSObject/Table\] - Mandatory**
    
    Specifies the whereclause to markForUpload.
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//static way
function markForUploadByPK(){
	Product.markForUploadByPK(123, successCallback, errorFailCallback);
}
//OOP Way
function markForUploadByPK(){
product = new Product();
product.ProductId = 123;
	Product.markForUploadByPK(successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product Marked for Upload);
}
function errorFailCallback(res){
	alert("Products Marked for upload Failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.create (Instance)
--------------------------

This API creates a new instance of sync object in the local Database. The new record is merged with the enterprise data source in the next Sync.

### Signature

_\<object\>.create (**object, succCallback, errorCallback**)_

### Parameters

*   Object **\[jsobject/table\] - Mandatory**
    
    Specify the object that you need to create in the database
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function CreateProduct(){
var objectProduct = {ProductName:"xyz", UnitPrice:12.34};
	Product.create(objectProduct, successCallback, errorFailCallback, true);
}
//OOP Way
function CreateProduct(){
product = new Product();
product.ProductName = "xyz";
product.UnitPrice = 12.34;
Product.create(successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product Created Successfully");
}
function errorFailCallback (res){
	alert("Product Creation Failed" + " with Error Code:" +
       res.errorCode + ", error message:"+ res.errorMessage + ", error    information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.updateByPK(Instance)
-----------------------------

This method updates sync object using primary key in the local Database. The update is merged with the enterprise data source in the next Sync.

### Signature

_\<object\>.updateByPK(**pk, succCallback, errorCallback, markForUpload**)_

### Parameters

*   pk**\[number/jsobject/table\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be updated in the database. For composite primary keys it has to be a table or JSObject.
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function updateProduct(){
var objectProduct = {ProductName:"xyz", UnitPrice:12.34};
	Product.updateByPK(123, objectProduct, successCallback, 
errorFailCallback, true);
}
// Object Oriented Way
function updateProduct (){
product = new Product();
product.ProductName = "xyz";
product.UnitPrice = 12.34;
product.ProductId = 123;
Product.updateByPK(successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product updated Successfully");
}

function errorFailCallback (res){
	alert("Product updating failed" + " with Error Code:" 
+ res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

> **_Note:_** An Object which was created with markForUpload as false, can not be updated with markForUpload value as true. If you want to make markForUpload value as true, markForUploadByPK API is used to change the value.

\<object\>.update(Static)
-----------------------

This method updates sync object using primary key in the local Database. The update is merged with the enterprise data source in the next Sync.

### Signature

_\<object\>.update (**whereClause, succCallback, errorCallback, markForUpload**)_

### Parameters

*   whereclause**\[String\] - Mandatory**
    
    Specify the string using which the data from database to be fetched.
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}varobjectProduct = {ProductName:"xyzUpdated", UnitPrice:15.34};
function UpdateProduct(){
Product.update("where UnitPrice> 10", objectProduct, successCallback , errorFailCallback, markForUpload)
}
function successCallback(){
	alert("Update Product Success");
}
function errorFailCallback(res){
	alert("Update Product Failed" + " with Error Code:" 
+ res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

> **_Note:_** An Object which was created with markForUpload as false, can not be updated with markForUplad value as true. If you want to make markForUpload value as true, markForUpload API is used to change the value.

\<object\>.deleteByPK (Instance)
------------------------------

This API deletes sync objects using primary key from the local Database. The record is deleted from the enterprise data source in the next Sync.

### Signature

_\<object\>.deleteByPK(**pk, succCallback, errorCallback, markForUpload**)_

### Parameters

*   pk\[**number/jsobject/table\] - Mandatory**
    
    Specify the primary key of object using which the respective row data needs to be deleted in the database.
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function deleteProduct(){
Product. deleteByPK (123, successCallback, errorFailCallback, true);
}
//OOP Way
function updateProduct (){
product = new Product();
product.ProductName = "xyz";
Product.deleteByPK (successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product deleted Successfully");
}

function errorFailCallback(res){
	alert("Deleted Product By Primary Key Failed + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.remove(Static)
-----------------------

This API deletes sync object(s) using where clause from the local Database. The record(s) are deleted from the enterprise datasource in the next Sync.

### Signature

_\<object\>.remove(**whereclause, succCallback, errorCallback, markForUpload**)_

### Parameters

*   whereclause**\[String\] - Mandatory**
    
    Specify the string using which the data from database to be fetched.
    

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function DeleteProduct(){
Product.remove(("where ProductId>100", successCallback , errorFailCallback, markForUpload)
}

function successCallback(){
	alert("Product Deleted Successfully");
}

function errorFailCallback (res){
	alert("Product Delete Failed" + " with Error Code:" + res.errorCode 
+ ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getPendingUpload(Static)
---------------------------------

This API retrieves instance(s) of sync object(s) pending for upload. Records are marked for pending upload if they are updated or created locally and the changes are merged with enterprise data source.

### Signature

_\<object\>.getPendingUpload(**succCallback, errorCallback**)_

### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function getPendingUpload(){
	Product.getPendingUpload(successCallback, errorFailCallback)
}

function successCallback(){
	alert("Get Pending Upload Success");
}

function errorFailCallback (res){
	alert("Get Pending Upload Failed" + " with Error Code:" 
+ res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getPendingAcknowledgement(Static)
------------------------------------------

This API Retrieves instance(s) of sync object pending for acknowledgement. This is relevant when the Sync Object is part of the SyncScope whose SyncStrategy is PersistentSync. In persistent Sync, the records in the local database are put into a pending acknowledgement state after an upload.

### Signature

_\<object\>.getPendingAcknowledgement(**succCallback, errorCallback**)_

### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function getPendingAcknowledgement(){
	Product.getPendingAcknowledgement(successCallback , errorFailCallback)
}

function successCallback(){
	alert("Get Pending Acknowledgement Success");
}

function errorFailCallback (res)
{
	alert("Get Pending Acknowledgement Failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}    
{% endhighlight %}

\<object\>.rollbackPendingLocalChanges(Static)
--------------------------------------------

This API rollbacks all changes to sync object in local database to last synced state.

### Signature

_\<object\>.rollbackPendingLocalChanges(**succCallback, errorCallback**)_

### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function RollbackPendingLocalChanges(){
	Product.rollbackPendingLocalChanges(successCallback, 
errorFailCallback)
}

function successCallback(){
	alert("Rollback Pending Local Changes Success");
}

function errorFailCallback(res){
	alert("Rollback Pending Local Changes Failed" + " with Error
 Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
} 

{% endhighlight %}

\<object\>.rollbackPendingLocalChangesByPK(Instance)
--------------------------------------------------

This API rollbacks changes to sync object with given primary key in local database to last synced state.

### Signature

_\<object\>.rollbackPendingLocalChangesByPK(**pk, succCallback, errorCallback**)_

### Parameters

*   pk\[**Number/jsobject/table**\] **- Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be rollback in the database.
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function rollbackPendingLocalChangesByPK (){
Product.rollbackPendingLocalChangesByPK(123, successCallback, errorFailCallback);
}
//OOP Way
function rollbackPendingLocalChangesByPK (){
product = new Product();
product.productId = 123;
Product.rollbackPendingLocalChangesByPK (successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product roll backed Successfully");
}

function errorFailCallback(res){
	alert("Rollback Pending Local Changes By PK Failed "+ " 
with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}
{% endhighlight %}

\<object\>.find(Static)
---------------------

This API retrieves sync object(s) using where clause from the local Database.

### Signature

_\<object\>.find(**wrcondition, succCallback, errorCallback**)_

### Parameters

*   wrconditon**\[String\] - Mandatory**
    
    where clause to find the object in the database
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function loadEmployeeTerritories (){
	var wcs = "where EmployeeID > 30";
	EmployeeTerritories.find(wcs, loadEmpTerritoriesSuccCallback, loadEmpTerritoriesErrCallback);
}

function loadEmpTerritoriesSuccCallback(res){
	if((null != res && res.length> 0)){
		for ( i in res ){
		 //process the row
		}		
	}

}

function loadEmpTerritoriesErrCallback(res)
{
alert("failed to retrieve records" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}   
{% endhighlight %}

\<object\>.getXXXwithYYY(Instance)
--------------------------------

This API helps to retrieve all the records from the target object (XXX) corresponding to the foreign key attribute (YYY) primary key. In this case, \<object\> should have some relationship (One-To-Many, Many-To-One) with XXX using target attribute YYY. In case of Many-To-One, YYY is a source attribute.

### Signature

_\<object\>getXXXwithYYY(**pk, succCallback, errorCallback)**_

### Parameters

*   pk**\[Number/jsobject/table\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database.
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function getOrderDetailsWithOrderID (){
Order.getOrderDetailsWithOrderID (123, successCallback, errorFailCallback);
}
//OOP Way
function getOrderDetailsWithOrderID (){
order = new Order ();
order.orderId = 123;
order.getOrderDetailsWithOrderID(successCallback, errorFailCallback);
}
function successCallback(res){
	//process the result
}

function errorFailCallback(res){
	alert("failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getCountOfXXXwithYYY(Instance)
---------------------------------------

This API helps to retrieve number of records from the target object (XXX) corresponding to the foreign key attribute (YYY) primary key. In this case, \<object\> should have some relationship (One-To-Many, Many-To-One) with XXX using target attribute YYY. In case of Many-To-One, YYY is a source attribute.

### Signature

_\<object\>getXXXwithYYY(**pk, succCallback, errorCallback)**_

### Parameters

*   pk**\[Number/jsobject/table\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database.
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function getOrderDetailsWithOrderID (){
Order.getCountOfOrderDetailsWithOrderID (123, successCallback, errorFailCallback);
}
Object Oriented Way
function getOrderDetailsWithOrderID (){
order = new Order ();
order.orderId = 123;
order.getCountOfOrderDetailsWithOrderID(successCallback, errorFailCallback);
}
function successCallback(res){
	alert("Count=" + res.count);
}

function errorFailCallback(res){
	alert("failed"+ " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getDeferredUpload(Static)
----------------------------------

This API helps to retrieve the list of rows that are deferred for upload at object level.

### Signature

_sync.getDeferredUpload(**successcallback, errorcallback**)_

### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function GetDeferredUpload(){
	Product.getDeferredUpload(successCallback , 
errorFailCallback)
}

function successCallback(res){
	//process the result
}

function errorFailCallback (res){
	alert("Get Deferred Upload Failed" + " with Error Code:" + 
res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.removeDeviceInstanceByPK(Instance)
-------------------------------------------

This API deletes sync objects using primary key from the local Database. This does not have any effect in enterprise data source in subsequent sync cycles.

### Signature

_\<object\>.removeDeviceInstanceByPK(**pk, successcallback, errorcallback**)_

### Parameters

*   pk**\[Number/jsobject/table\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the datasource.  
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function removeDeviceInstanceByPK (){
Order. removeDeviceInstanceByPK (123, successCallback, errorFailCallback);
}
Object Oriented Way
function removeDeviceInstanceByPK (){
order = new Order ();
order.orderId = 123;
order. removeDeviceInstanceByPK (successCallback, errorFailCallback);
}
function errorFailCallback(res){
	alert("Removing Order Failed" + " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

> **_Note:_** Cascade delete is implemented for **removeDeviceInstanceByPK** ORM API in 5.5.4 GA.  
When you use **removeDeviceInstanceByPK** ORM API to delete records in the parent table (client side) along with cascade delete flag true (as highlighted below in Red), the records in the child table are also deleted.  
  
<OneToMany TargetObjectAttribute="CategoryID" TargetObject="Products" SourceObjectAttribute="CategoryID" Cascade="true"/>

\<object\>.getAllCount(Static)
----------------------------

This API helps to retrieve total number of sync objects present in local database.

### Signature

_\<object\>. getAllCount (**succCallback, errorCallback**)_

### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function getAllCount(){
Order.getAllCount(successCallback, errorFailCallback);
}
function successCallback(res){
	alert("Count=" + res.count);
}

function errorFailCallback(res){
	alert("failed"+ " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getCount(Static)
-------------------------

This API helps to retrieves total number of sync objects present in local database matching the where clause.

### Signature

_\<object\>. getAllCount (**succCallback, errorCallback**)_

### Parameters

*   whereClause\[String\] - Mandatory
    
    Specify the where clause.
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    

*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way
function getCount(){
Order.getCount("where OrderId > 230", successCallback, errorFailCallback);
}
function successCallback(res){
	alert("Count=" + res.count);
}

function errorFailCallback(res){
	alert("failed"+ " with Error Code:" + res.errorCode + ", error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}
{% endhighlight %}

\<object\>.createAll
------------------

This API helps developer to insert bulk records into the device database in a transaction.

### Signature

_\<object\>.createAll (**array**,**succCallback**, **errorCallback**)_

### Parameters

*   array - **Mandatory** 
    
    Specify the array of records to be created
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}function bulkInsert(){
voltmx.sync.enableORMValidations = true; // This is Global variable, works only on this createAll ORM, set this to 'false' if data validation is not required while doing bulk insert
                var PersonData = \[
                                                                {FirstName:Paul, LastName:Smith, Age:25},
                                                                {FirstName:Brenda, LastName:Flintstone, Age:27}
                \];
                Person. createAll(PersonData,successcallback,errorcallback)
                // Person. createAll(PersonData,successcallback,errorcallback,false) //<--Markforupload 'false'
}

// 5.5 and 5.0 Versions
function successCallback(res){
alert("Created all the records successfully with primary keys" + JSON.stringify(res));
}

// 5.5
function errorFailCallback(res){
alert("Failed to insert records, Error Code : " + res.errorCode + " Error Message : " + res.errorMessage);
}

// 5.0
function errorFailCallback(){
	alert("Failed to insert records");
}

{% endhighlight %}

\<object\>.updateAll
------------------

This API helps developer to update multiple records into the device database in a transaction.

> **_Note:_** The API is available in Sync 5.0.x above versions only.

### Signature

_\<object\>.updateAll (**array**,**succCallback**, **errorCallback**)_

### Parameters

*   array - **Mandatory** 
    
    Specify the array of records to be created
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}Introduced new ORM API upadateAll in 5.5.4 GA. This ORM helps to update more than one record at a time.
Example :
function updateAllCategory()
{ 
 var inputArray = \[\];
 inputArray\[0\] = {};
 inputArray\[0\].changeSet = {
  CategoryName : "UpdateALL\_0",
  Description : "CatUpdateALLTest\_0"
 }; //contains values to be updated
 inputArray\[0\].whereClause = "where CategoryID < 1"; //where clause on which to update

 inputArray\[1\] = {};
 inputArray\[1\].changeSet = {
  CategoryName : "UpdateALL\_1",
  Description : "CatUpdateALLTest\_1"
 }; //contains values to be updated
 inputArray\[1\].whereClause = "where CategoryID > 1 AND CategoryID < 4"; //where clause on which to update

 inputArray\[2\] = {};
 inputArray\[2\].changeSet = {
  CategoryName : "UpdateALL\_2",
  Description : "CatUpdateALLTest\_2"
 }; //contains values to be updated
 inputArray\[2\].whereClause = "where CategoryID IN (5,4,6)"; //where clause on which to update

 inputArray\[3\] = {};
 inputArray\[3\].changeSet = {
  CategoryName : "UpdateALL\_3",
  Description : "CatUpdateALLTest\_3"
 }; //contains values to be updated
 inputArray\[3\].whereClause = "where CategoryID > 6 AND CategoryID !=8"; //where clause on which to update
  
  Categories.updateAll(inputArray,successCallback,errorCallback);

 function successCallback(res){
  alert("success in updateAll");
  voltmx.print("success in updateAll"+JSON.stringify(res));
 }
 
 function errorCallback(res){
  alert("error in updateAll");
  voltmx.print("error in updateAll"+JSON.stringify(res));
 }
}
{% endhighlight %}

\<object\>.removeDeviceInstance
-----------------------------

This API helps developer to delete the sync objects that use where clause from the local Database and has no effect in enterprise data source in subsequent sync cycles.

### Signature

_\<object\>removeDeviceInstance (**whereclause**, **successcallback**, **errorcallback**)_

### Parameters

*   whereclause - **Mandatory** 
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the datasource
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

### Platform Availability

Available on all platforms [mentioned](Overview.html#Supporte).

### Example

{% highlight voltMx %}//Static Way

function removeDeviceInstance (){
Order.removeDeviceInstance (“where OrderID >= 100”, successCallback, errorFailCallback);
}
function successCallback(){
alert("Orders Deleted Successfully");
}
function errorFailCallback(res){
alert("Removing  Order  Failed"  +  "  with  Error  Code:"  +  res.errorCode  +  ",  error  message:"+ 
res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}
