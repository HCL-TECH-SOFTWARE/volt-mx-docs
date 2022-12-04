                            

Object Level APIs
=================

The Object Level API helps the developer to perform ORM operations at the object (or) entity (or) table level.

\<VMXObj\>.startSync
------------------

### Syntax

```
<VMXObj>.startSync (syncOptions, successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 105px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 353px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">syncOptions</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The user can provide options to customize sync behavior.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on a successful sync.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error in sync with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Sync Options

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 143px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Type</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Descriptions</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">downloadBatchSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Number (or) String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The downloadBatchSize option defines record based batching in downloads. Make sure to provide appropriate batch size (number of records) based on backend’s ability (to support the same). downloadBatchSize is 500(records) by default. Default BatchSize is assumed if the supplied value is less than or equal to 0.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">uploadBatchSize</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Number (or) String</td><td class="TableStyle-Basic-BodyB-Column1-Body1">uploadBatchSize option defines record based batching in uploads. uploadBatchSize is 50 (records) by default. Default BatchSize is assumed if the supplied value is less than or equal to 0.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Example

```
function successCallback(object){
   //Handle sync success response.
  } 
function failureCallback (error){
   //Handle sync failure response.
  } 
try{
    var syncObject = new voltmx.sdk.VMXObj("Employee");
    var syncOptions = {};
 
    //Set upload and download BatchSize.
    syncOptions.downloadBatchSize = 100;
    syncOptions.uploadBatchSize = 200; 
    syncObject.startSync(syncOptions, successCallback,failureCallback);
  } catch (err) {
      //Handles Exception.
  }
```

\<VMXObj\>.get
------------

### Syntax

```
<VMXObj>.get(options, successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 149px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 105px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 268px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options &nbsp;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If the options parameter is omitted, all the records are returned.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when get operation is successful.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error in get operation with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Keys</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON (or) Table</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys to use, for the select query. Use record's primary key column names as key and respective values to populate <b>primaryKeys</b> JSON.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify where condition for the select query if primary keys are not provided. Key Name: <b>whereConditionAsAString</b> and the value is string.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">orderByMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON elements</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the way the data must be arranged in ascending (or) descending order of the column name. Key Name: <b>orderByMap</b> and value is an array of the dictionary.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the select query if primary keys are not provided. Key Name: <b>whereCondition</b> and values are column names and their respective values.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">likeCondition</td><td class="TableStyle-Basic-BodyB-Column1-Body1">JSON (or) Table</td><td class="TableStyle-Basic-BodyB-Column1-Body1">List of column names and their respective values according to which the records are to be fetched.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Example

```
//----- Example : Get all  --------
function successCallback(records){
     //records is an array of records. each record is a dictionary.
} 
function failureCallback(error){
     voltmx.print(“unable to retrieve records from db”+ error.code);
} 
var categories = new VMXObj("CATEGORY");
//all records of object CATEGORY are returned as an argument to success callback.
categories.get( null, successCallback, failureCallback);  
 
//------- Example : get with orderBy clause --------
function successCallback(records){
    //records is an array of records. each record is a dictionary.
} 
function failureCallback(error){
    voltmx.print(“unable to retrieve records from db”+ error.code);
} 
var categories = new VMXObj("CATEGORY");
var orderByMap = [];
orderByMap.push({"CategoryID":"DESC"});
orderByMap.push({"CategoryName":"ASC"}); 
var options = {};
options["orderByMap"] = orderByMap; 
//all records of object CATEGORY are returned as an argument to success callback ordered by CategoryID and CategoryName.
categories.get(options, successCallback, failureCallback); 
//------ Example : get by PK  --------
function successCallback(records){
      //records is an array of records. each record is a dictionary.
} 
function failureCallback(error){
     voltmx.print(“unable to retrieve records from db”+ error.code);
} 
var categories = new VMXObj("CATEGORY");
var options = {};
 
//Primary keys or a where clause can be used
var primaryKeys = {};
primaryKeys["CategoryID"] = "2233";
options["primaryKeys"]= primaryKeys; 
// record with PK CategoryID with value "2233"  of object CATEGORY are returned as an argument to success callback.
categories.get( options, successCallback, failureCallback);
   
//---- Example : get by where clause --------
function successCallback(records){
       //records is an array of records. each record is a dictionary.
} 
function failureCallback(error){
      voltmx.print(“unable to retrieve records from db”+ error.code);
}  
var categories = new VMXObj("CATEGORY");
var whereClause = "Category_PN = '7'";
var options = {};
options["whereConditionAsAString"] = whereClause; 
//Invoking get returns  record with Category_PN = 7 .
categories.get(options, successCallback, failureCallback);
```

\<VMXObj\>.create
---------------

### Syntax

```
<VMXObj>.create(record, options, successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 100px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Specify the record to be created in the database under a given object.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Reserved for future use. Supply null or empty <b>JSON</b> as options.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are created successfully. Newly created record is returned through successCallback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Example

```
function successCallback(response){
    voltmx.print("Record created successfully with primary keys: " + response["CATEGORY_ID"]);
} 
function failureCallback(error)
    voltmx.print("Create is failed" + JSON.stringify(error));
} 
var category = new voltmx.sdk.VMXObj("CATEGORY");
var record = {}; 
// CATEGORY_ID is the autogenerated primary key
record["CATEGORY_PN"] = Number("7");
record["CATEGORY_DES"] = "Creating a new record"; 
category.create(record, {}, successCallback, failureCallback);
```

\<VMXObj\>.updateByPK
-------------------

### Syntax

```
<VMXObj>.updateByPK(record, options, successCallback, failureCallback)
```

### Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing column name and value pairs that are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing <b>primaryKeys</b>.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">sucessCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are updated successfully.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Example

```
function successCallback(response){
   voltmx.print("Record Updated successfully");
}
 
function failureCallback(error)
    voltmx.print("Update failed with error: " + JSON.stringify(error));
}
 
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var record = {};
var primaryKeys = {};
 
record["CATEGORY_DES"] = "Update existing record";
primaryKeys["CATEGORY_ID"] = "1234"
options["primaryKeys"] = primaryKeys;
  
category.updateByPK(record, options, successCallback, failureCallback);
```

\<VMXObj\>.deleteByPK
-------------------

### Syntax

```
<VMXObj>.deleteByPK(options, successCallback, failureCallback)
```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 105px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 361px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing mandatory key <b>primaryKey</b> which contains the PK (column name and value). In case of a composite PK, the dictionary will contain multiple key-value pairs.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are deleted successfully.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

### Example

```
//Success callback
function successCallback(){
     voltmx.print("record updated successfully");
}  
//Failure callback
function failureCallback(error){
     voltmx.print(error.code);
}  
//Sample to delete a record using PK
var categories = new voltmx.sdk.VMXObj(“CATEGORY”);
var primaryKeys = {};
primaryKeys[“CATEGORY_ID”] = ”1234”;
var options = {};
options["primaryKeys"]= primaryKeys; 
//Invoke the delete API
categories.deleteByPK(options, successCallback, failureCallback);  
//Sample to delete a record using composite primary key
var categories2 = new voltmx.sdk.VMXObj(“CATEGORY2”);
var primaryKeys = {};
primaryKeys[“CATEGORY_KEY1”] = ”1234”;
primaryKeys[“CATEGORY_KEY2”] = ”23”;
var options = {};
options["primaryKeys"]= primaryKeys; 
//Invoke the delete API to delete record having composite primary key(CATEGORY_KEY1 and CATEGORY_KEY2)
categories2.deleteByPK(options, successCallback, failureCallback);
```
