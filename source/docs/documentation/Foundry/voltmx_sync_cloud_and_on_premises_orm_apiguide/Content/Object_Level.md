---
layout: "documentation"
category: "voltmx_sync_cloud_and_on_premises_orm_apiguide"
---
                           

Object Level
============

This set of APIs helps the developer to perform various ORM operations at a Sync Object level in the application.

To take advantage of object oriented programming in JavaScript, we gave some of the APIs in object oriented way. So, as far as JavaScript is concerned, we can classify ORMs as following:

1.  Instance APIs:
    
    APIs that involve operations on single row can be invoked by standard JavaScript object as well as traditional way.
    
    _Object Oriented Way_
    
    For Example;
    
    {% highlight voltMx %}var product = new Product();
    product.productId = 123
    product.name = "test";
    product. updateByPK (successcallback, error callback);
    
    {% endhighlight %}
    
    Traditional Way
    
    For Example;
    
    {% highlight voltMx %}Product. updateByPK ({productId :123}, { name:"test" }, successcallback, error callback);
    {% endhighlight %}
2.  Static APIs:
    
    APIs that involve operations on multiple rows can only be invoked using traditional way.
    
    For Example;
    
    {% highlight voltMx %}Product. getAll ( successcallback, error callback);
    {% endhighlight %}
    
    The convention \<object\> below indicates the GlobalName of the SyncObject as specified in `Sync IDE / SyncConfig` file.
    

Various Configurations at Object Level
--------------------------------------

You can configure the following at object level. All parameters take boolean value _true_/_false_.

### \<object\>.isCascadeInsertUpdateEnabled

If this parameter is _true_, creates ORM cascades insertion up the data object hierarchy until either a pre-existing record or the top of the hierarchy is reached. Internally, it calls _sky.dataObjectCascadeInsert_. If set to _false_, parent table is not be notified about insertion of child record. Internally, it calls _sky.tableInsert_.

### \<object\>.isCascadeDeleteEnabled

If this parameter is _true_, deletebyPK/remove ORMs _cascades deletion through the data object. Internally, it calls sky.dataObjectCascadeDelete. If set to_ false, internally, it calls _sky.tableDelete_.

### \<object\>.isCascadeDeleteDown

This parameter determines whether to cascade downwards to the bottom of the data object hierarchy in deletebyPK/remove ORMs.

### \<object\>.isDeleteIndicatorValueEnabled

This parameter determines value to write into the delete indicator field in deletebyPK/remove ORMs.

\<object\>.getAll (Static)
------------------------

This API retrieves all instances of SyncObject present in local database.

### Signature

_\<object\>.getAll(successCallback, errorCallback, orderByMap)_

#### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    
*   orderByMap**\[Array\] – Optional**
    
    Specifies the way the data should be arranged in ascending/descending order of column name
    

#### Platform Availability

Available on all platforms mentioned.

#### Examples

General Example for _getAll_:

{% highlight voltMx %}function syncGetAll(){
Account.getAll(showAccSuccessCallback,showAccFailCallback)
}

function showAccSuccessCallback(res){
    //res contains the data of all records of Account table
      alert("Get all Accounts success");
}

function showAccFailCallback(res){
alert("Get all Accounts failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

Example of orderByMap for _getAll_:

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
 alert("Get all Accounts failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getAllDetailsByPK (Instance)
-------------------------------------

This method retrieves a row using primary key from the local database.

### Signature

_\<object\>.getAllDetailsByPK(pk, successCallback, errorCallback)_

#### Parameters

*   pk**\[number/JSObject\]- Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database on the particular object. For composite primary keys it has to be a table/JSObject.
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

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
alert("Get All Details By Primary Key Failed + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}
{% endhighlight %}

\<object\>.create (Instance)
--------------------------

This API creates a new instance of sync object in the local Database.

### Signature

_\<object\>.create (object, succCallback, errorCallback)_

#### Parameters

*   Object**JSObject\]- Mandatory**
    
    Specify the object that needs to be created in the database
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

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
/\* This should be passed only when Product.isCascadeInsertUpdateEnabled = true \*/
product.parentTable = {"USER\_ID":"demo","OBJECT\_TYPE":"ACTIV"};
Product.create(successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product Created Successfully");
}
function errorFailCallback (res){
alert("Product Creation Failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.updateByPK(Instance)
-----------------------------

This method updates sync object using primary key in the local Database.

### Signature

_\<object\>.updateByPK(pk, succCallback, errorCallback)_

#### Parameters

*   pk**\[number/JSObject\]- Mandatory**
    
    Specify the primary key object using which the respective row data needs to be updated in the database. For composite primary keys, it has to be a table/JSObject.
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}//Static Way
function updateProduct(){
var objectProduct = {ProductName:"xyz", UnitPrice:12.34};
	Product.updateByPK(123, objectProduct, successCallback, errorFailCallback, true);
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
	alert("Product updating failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}
{% endhighlight %}

\<object\>.update(Static)
-----------------------

This method updates sync object using This API updates sync object using where clause in the local Database.

### Signature

_\<object\>.update (whereClause, succCallback, errorCallback)_

#### Parameters

*   whereclause**\[Array\]- Mandatory**
    
    Specify the array containing set of conditions specifying the rows to be selected
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}function UpdateProduct(){
var objectProduct = {ProductName:"xyzUpdated", UnitPrice:15.34};
var conditionSet = \[\];
	conditionSet\[ 0 \] = “UnitPrice > 10"; 

Product.update(conditionSet,objectProduct,successCallback,errorFailCallback)
}
function successCallback(){
	alert("Update Product Success");
}
function errorFailCallback(res){
	alert("Update Product Failed" + " with Error Code:" + res.errorCode + ",   

     error message:"+ res.errorMessage + ", error information:" + 

     JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.deleteByPK (Instance)
------------------------------

This API deletes sync objects using primary key from the local Database.

### Signature

_\<object\>.deleteByPK(pk, succCallback, errorCallback)_

#### Parameters

*   pk**\[number/JSObject\] - Mandatory**
    
    Specify the array containing set of conditions specifying the rows to be selected
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}//Static Way
function deleteProduct(){
Product. deleteByPK (123, successCallback, errorFailCallback, true);
}
//OOP Way
function deleteProduct (){
product = new Product();
product.ProductName = "xyz";
Product.deleteByPK (successCallback, errorFailCallback);
}

function successCallback(){
	alert("Product deleted Successfully");
}

function errorFailCallback(res){
	alert("Deleted Product By Primary Key Failed + " with Error Code:" + 
res.errorCode + ", error message:"+ res.errorMessage + ", error information:" 
+ JSON.stringify(res.errorInfo));
}
{% endhighlight %}

\<object\>.remove(Static)
-----------------------

This API deletes sync object(s) using where clause from the local Database. The record(s) are deleted from the enterprise datasource in the next Sync.

### Signature

_\<object\>.remove(whereclause, succCallback, errorCallback)_

#### Parameters

*   whereclause**\[Array\] - Mandatory**
    
    Specify the array containing set of conditions specifying the rows to be selected
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}function DeleteProduct(){
      var conditionSet = \[\];
	conditionSet\[ 0 \] = “ProductId > " + 100; 
Product.remove(conditionSet, successCallback , errorFailCallback)
}

function successCallback(){
	alert("Product Deleted Successfully");
}

function errorFailCallback (res){
	alert("Product Delete Failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.find(Static)
---------------------

This API retrieves sync object(s) using where clause from the local Database.

### Signature

_\<object\>.find(wrcondition, succCallback, errorCallback)_

#### Parameters

*   wrconditon**\[Array\] - Mandatory**
    
    Specify the array containing set of conditions specifying the rows to be selected
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}function loadEmployeeTerritories (){
var wcs = \[\];
wcs\[0\] = “OR”
wcs\[1\] = “EmployeeID > 30";
wcs\[2\] = “EmployeeName LIKE s%”;
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
alert("failed to retrieve records" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getXXXwithYYY(Instance)
--------------------------------

This API helps to retrieve all the records from the target object (XXX) corresponding to the foreign key attribute (YYY) primary key. In this case, \<object\> should have some relationship (One-To-Many, Many-To-One or One-To-One) with XXX using target attribute YYY. In case of Many-To-One, YYY are source attribute.

### Signature

_\<object\>.getXXXwithYYY(pk, succCallback, errorCallback)_

#### Parameters

*   pk**\[Number/JSObject\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

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
	alert("failed" + " with Error Code:" + res.errorCode + ", error message:"+ 
res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getCountOfXXXwithYYY(Instance)
---------------------------------------

This API helps to retrieve number of records from the target object (XXX) corresponding to the foreign key attribute (YYY) primary key. In this case, \<object\> should have some relationship (One-To-Many, Many-To-One or One-To-One) with XXX using target attribute YYY. In case of Many-To-One, YYY are source attribute.

### Signature

_\<object\>.getCountOfXXXwithYYY(pk, succCallback, errorCallback)_

#### Parameters

*   pk**\[Number/JSObject\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}//Static Way
function getOrderDetailsWithOrderID (){
Order.getCountOfOrderDetailsWithOrderID (123, successCallback, errorFailCallback);
}	
//Object Oriented Way
function getOrderDetailsWithOrderID (){
order = new Order ();
order.orderId = 123;
order.getCountOfOrderDetailsWithOrderID(successCallback, errorFailCallback);
}
function successCallback(res){
	alert("Count=" + res.count);
}

function errorFailCallback(res){
	alert("failed"+ " with Error Code:" + res.errorCode + ", error message:"+ 
res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.removeDeviceInstancebyPK(Instance)
-------------------------------------------

This API deletes sync objects using primary key from local Database. This does not have any effect in Sky MEAP in subsequent sync cycles.

### Signature

_\<object\>.removeDeviceInstancebyPK(pk, successcallback, errorcallback)_

#### Parameters

*   pk**\[Number/JSObject\] - Mandatory**
    
    Specify the primary key of the object using which the respective row data needs to be fetched from the database
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}//Static Way
function removeDeviceInstancebyPK (){
Order. removeDeviceInstancebyPK (123, successCallback, errorFailCallback);
}
Object Oriented Way
function removeDeviceInstancebyPK (){
order = new Order ();
order.orderId = 123;
order. removeDeviceInstancebyPK (successCallback, errorFailCallback);
}
function errorFailCallback(res){
	alert("Removing Order Failed" + " with Error Code:" + res.errorCode + ", 
error message:"+ res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getAllCount(Static)
----------------------------

This API helps to retrieve total number of sync objects present in local database.

### Signature

_\<object\>.getAllCount (succCallback, errorCallback)_

#### Parameters

*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}//Static Way
function getAllCount(){
Order.getAllCount(successCallback, errorFailCallback);
}
function successCallback(res){
	alert("Count=" + res.count);
}

function errorFailCallback(res){
	alert("failed"+ " with Error Code:" + res.errorCode + ", error message:"+ 
res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}
 + ", error information:" + JSON.stringify(res.errorInfo));
}

{% endhighlight %}

\<object\>.getCount(Static)
-------------------------

This API helps to retrieve total number of sync objects present in local database matching the where clause.

### Signature

_\<object\>.getCount (whereClause , succCallback, errorCallback)_

#### Parameters

*   whereClause**\[Array\] - Mandatory**
    
    Specify the array containing set of conditions specifying the rows to be counted
    
*   successCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on success
    
*   errorCallback**\[function\] - Optional**
    
    Specifies the function that gets invoked on error
    

#### Platform Availability

Available on all platforms mentioned.

#### Example

{% highlight voltMx %}//Static Way
function getCount(){
var wcs = \[\];
wcs\[1\] = “OrderId > 230";
Order.getCount(wcs, successCallback, errorFailCallback);
}
function successCallback(res){
	alert("Count=" + res.count);
}

function errorFailCallback(res){
	alert("failed"+ " with Error Code:" + res.errorCode + ", error message:"+ 
res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
}  

{% endhighlight %}
