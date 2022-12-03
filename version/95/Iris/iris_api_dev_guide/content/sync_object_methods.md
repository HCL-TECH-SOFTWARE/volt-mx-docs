                            


Sync Object
===========

The Sync object implements the [Sync API](sync_apis.md) at the object level.

Methods
-------

The Sync object contains the following methods.

<h2>&lt;syncObject&gt;.create</h2>
<p>This API enables you to create a record in a Sync object.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.create (<a href="#Object">object</a>, <a href="#successCallback6">successCallback</a>, <a href="#errorCallback6">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="Object">Object [object] - Mandatory</td>
<td>Specifies the object that needs to be created in the database.</td>
</tr>
<tr>
<td id="successCallback6">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback6">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function CreateProduct()
&lt;syncObject&gt;.create(objectProduct, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get All Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get All Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.deleteByPK</h2>
<p>This API enables you to delete a record using the object's primary key.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.deleteByPK (<a href="#pk3">pk</a>, <a href="#successCallback9">successCallback</a>, <a href="#errorCallback9">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="pk3">pk [Integer] - Mandatory</td>
<td>Specifies the object's primary key using which the respective row data has to be deleted in the database.</td>
</tr>
<tr>
<td id="successCallback9">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback9">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function DeleteProductByPK()
&lt;syncObject&gt;.deleteByPK(123, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Delete By Primary Key Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Delete By Primary Key Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.getAll</h2>
<p>This API fetches all the records for a Sync object.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.getAll (<a href="#successCallback4">successCallback</a>, <a href="#errorCallback4">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="successCallback4">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback4">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function SyncGetAll()
sync.getAll(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get All Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get All Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.getAllDetailsByPK</h2>
<p>This API fetches a record using primary key value for a Sync object.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.getAllDetailsByPK (<a href="#pk5">pk</a>, <a href="#successCallback5">successCallback</a>, <a href="#errorCallback5">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="pk5">pk [Integer] - Mandatory</td>
<td>Specify the object's primary key using which the respective row data needs to be fetched from the database on the particular object.</td>
</tr>
<tr>
<td id="successCallback5">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback5">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function SyncGetAllDetailsByPK()
&lt;syncObject&gt;.getAllDetailsByPK(ProductId="123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get All Details By Primary Key Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get All Details By Primary Key Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.getPendingAcknowledgement</h2>
<p>This API enables you to fetch pending acknowledgment for a Sync object.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.getPendingAcknowledgement(<a href="#successCallback12">successCallback</a>, <a href="#errorCallback12">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="successCallback12">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback12">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function GetPendingAcknowledgement()
&lt;syncObject&gt;.getPendingAcknowledgement(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Pending Acknowledgement Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Pending Acknowledgement Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.getPendingUpload</h2>
<p>This API enables you to fetch all the rows for a Sync object which are pending for upload.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.getPendingUpload(<a href="#successCallback11">successCallback</a>, <a href="#errorCallback11">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="successCallback11">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback11">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function GetPendingUpload()
&lt;syncObject&gt;.getPendingUpload(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Pending Upload Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Pending Upload Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.getXXX</h2>
<p>This API retrieves all the records from the related object(XXX) corresponding to the current primary key.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.getXXX (<a href="#pk15">pk</a>, <a href="#successCallback15">successCallback</a>, <a href="#errorCallback15">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="pk15">pk [Integer] - Mandatory</td>
<td>Specifies the object's primary key using which the respective row data needs to be fetched from the database.</td>
</tr>
<tr>
<td id="successCallback15">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback15">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">E.g.: If there is a relationship from Order to OrderDetails the below function will retrieve all the OrderDetails corresponding to that order.

function GetOrderDetails()
&lt;syncObject&gt;.getOrderDetails(123, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Order Details Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Order Details Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.remove</h2>
<p>This API enables you to delete a record for a Sync object using the where clause.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.remove (<a href="#whereclause2">whereclause</a>, <a href="#successCallback10">successCallback</a>, <a href="#errorCallback10">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="whereclause2" whereclause="" mandatory=""></td>
<td>Specifies the string using which the data from database has to be fetched.</td>
</tr>
<tr>
<td id="successCallback10">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback10">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function DeleteProduct()
&lt;syncObject&gt;.remove(ProductId="123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Delete Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Delete Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.rollbackPendingLocalChanges</h2>
<p>This API enables you to rollback the object level pending changes which are not synchronized.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.rollbackPendingLocalChanges (<a href="#successCallback13">successCallback</a>, <a href="#errorCallback13">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="successCallback13">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback13">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function RollbackPendingLocalChanges()
&lt;syncObject&gt;.rollbackPendingLocalChanges(successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Rollback Pending Local Changes Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Rollback Pending Local Changes Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.rollbackPendingLocalChangesByPK</h2>
<p>This API enables you to fetch all the records for a Sync object.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.rollbackPendingLocalChangesByPK (<a href="#pk14">pk</a>, <a href="#successCallback14">successCallback</a>, <a href="#errorCallback14">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="pk14">pk [Integer] - Mandatory</td>
<td>Specify the object's primary key using which the respective row data needs to be rollback in the database</td>
</tr>
<tr>
<td id="successCallback14">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback14">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function .RollbackPendingLocalChangesByPK()
&lt;syncObject&gt;.rollbackPendingLocalChangesByPK(123, successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Rollback Pending Local Changes Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Rollback Pending Local Changes Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.update</h2>
<p>This API enables you to fetch all the records for a Sync object.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.update (<a href="#whereClause8">whereClause</a>, <a href="#successCallback8">successCallback</a>, <a href="#errorCallback8">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="whereClause8">whereclause [String] - Mandatory</td>
<td>Specifies the string using which the data from database to be fetched.</td>
</tr>
<tr>
<td id="successCallback8">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback8">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function UpdateProduct()
&lt;syncObject&gt;.update(ProductId="123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Update Product Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Update Product Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>
<h2>&lt;syncObject&gt;.updateByPK</h2>
<p>This API enables you to update a record using the object's primary key.</p>
<h3>Syntax</h3><code>&lt;syncObject&gt;.updateByPK (<a href="#pk7">pk</a>, <a href="#successCallback7">successCallback</a>, <a href="#errorCallback7">errorCallback</a>)</code>
<h3>Input Parameters</h3>
<table>
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td id="pk14">pk [Integer] - Mandatory</td>
<td>Specifies the object's primary key using which the respective row data needs to be updated in the database</td>
</tr>
<tr>
<td id="successCallback7">successCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on success.</td>
</tr>
<tr>
<td id="errorCallback7">errorCallback [function] - Optional</td>
<td>Specifies the function which will get invoked on error.</td>
</tr>
</table>
<h3>Example</h3>
<pre><code style="display:block;background-color:#eee;">function UpdateProductByPK()
&lt;syncObject&gt;.updateByPK("123", successCallback, errorFailCallback)
end

function successCallback(res)
window.Alert("Get Product by Primary Key Success", nil, "info", "Ok", "", "", nil)
end

function errorFailCallback(err)
window.Alert("Get Product by Primary Key Failed", nil, "error", "Ok", "", "Error", nil)
end</code></pre>
<h3>Platform Availability</h3>
<p>Available on all platforms.</p>