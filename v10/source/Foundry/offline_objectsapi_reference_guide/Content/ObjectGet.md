
<object\>.get
============

The **<object\>.get** API returns all or selected records from the local database.

> **_Note:_** The column names and values provided as key value pairs are case sensitive.

Volt MX  Iris (JavaScrpit)
-------------------------------

### Signature

```
<VMXObj>.get(options, successCallback, failureCallback)

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 149px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 105px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 268px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options &nbsp;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If the options parameter is omitted, all records are returned.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on success with records passed as an argument.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Keys</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON/Table</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys to use for the select query. Use records primary key column names as key and respective values to populate <b>primaryKeys</b> JSON.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the select query if primary keys are not provided. Key Name: <b>whereConditionAsAString</b> and the value is a string. <b>Note:<b> For Mobile Web and Desktop Web channels, every condition must have a comparison parameter only (=, !=, &gt;, &lt;, &gt;=, &lt;=). Multiple conditions can be clubbed using conjunctions (AND, OR). Values with white spaces are not supported.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">orderByMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON elements</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specifies the way the data should be arranged in ascending/descending order of column name. Key Name: <b>orderByMap</b> and value is an array of the dictionary. <b>Note:<b> In Mobile Web and Desktop Web channels, <b>OrderBy</b> is applicable on one column.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the select query if primary keys are not provided. Key Name: <b>whereCondition</b> and values are column names and their respective values. .</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">likeCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON/Table</td><td class="TableStyle-Basic-BodyE-Column1-Body1">List of column names and their respective values according to which the records are to be fetched. <b>Note:<b> Not supported for Mobile Web and Desktop Web channels.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">projectionColumns</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Array List&lt; string&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">List of column names according to which the records are to be fetched.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">distinct</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean value for getting the distinct value of the first projection column passed.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
//----- Example : Get all  --------
function onGetAllSuccess(records) {
    //records is an array of records. each record is a dictionary.
}

function onGetAllFail(error) {
    voltmx.print("unable to retrieve records from db" + error.code)
}
var categories = new voltmx.sdk.VMXObj("CATEGORY");
//all records of object CATEGORY are returned as an argument to success callback.
categories.get(null, onGetAllSuccess, onGetAllFail)


//------- Example : getall with orderBy clause --------
function onGetAllSuccess(records) {
    //records is an array of records. each record is a dictionary.
}

function onGetAllFail(error) {
    voltmx.print("unable to retrieve records from db" + error.code)
}
var categories = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var orderByMap = [];
orderByMap.push({
    "CategoryID": "DESC"
});
orderByMap.push({
    "CategoryName": "ASC"
});
var options = {};
options["orderByMap"] = orderByMap;

//all records of object CATEGORY are returned as an argument to success callback ordered by CategoryID and CategoryName.
categories.get(options, onGetAllSuccess, onGetAllFail);


//------ Example : get by PK  --------
function onGetAllSuccess(records) {
    //records is an array of records. each record is a dictionary.
}

function onGetAllFail(error) {
    voltmx.print("unable to retrieve records from db" + error.code)
}

var categories = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
//Primary keys or a where clause can be used
var primaryKeys["CategoryID"] = "2233";
options["primaryKeys"] = primaryKeys;

// record with PK CategoryID with value "2233"  of object CATEGORY are returned as an argument to success callback.
categories.get(options, onGetAllSuccess, onGetAllFail)



//---- Example : get by where clause -------- 
function onGetAllSuccess(records) {
    //records is an array of records. each record is a dictionary.
}

function onGetAllFail(error) {
    voltmx.print("unable to retrieve records from db" + error.code)
}
var categories = new voltmx.sdk.VMXObj("CATEGORY");
var whereClause = "Category_PN = '7'";

var options = {};
options["whereConditionAsAString"] = whereClause;

//Invoking get returns  record with Category_PN = 7 .
categories.get(options, onGetAllSuccess, onGetAllFail);



//------- Example : get for projection Columns --------

function onGetSuccess(records) {
    //records is an array of records. Each record is a dictionary.
}
Function onGetFailure(error) {
    VoltMX.print("unable to retrieve records from database" + error.code);
}

var categories = new voltmx.sdk.VMXObj("CATEGORY");

var options = {};
var projectionColumnsList = [];
projectionColumnsList.push("Category_PN");
projectionColumnsList.push("Category_ID");
options["projectionColumns"] = projectionColumnsList;

// Invoking get to get all projection columns passed for records.
categories.get(options, onGetSuccess, onGetFailure);



//------ Example : get for distinct --------

function onGetSuccess(records) {
    //records is an array of records. Each record is a dictionary.
}

Function onGetFailure(error) {
    VoltMX.print("unable to retrieve records from database" + error.code);
}

var categories = new voltmx.sdk.VMXObj("CATEGORY");

var options = {};
options["distinct"] = true;
var projectionColumnsList = [];
projectionColumnsList.push("Category_PN");
options[“projectionColumns”] = projectionColumnsList;

// Invoking get to get all distinct Category_PN records.
categories.get(options, onGetSuccess, onGetFailure);
```

Android (Java)
--------------

### Signature

```
void <VMXObj>.get(HashMap<String, Object> options, final VMXCallback callback) throws Exception

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 182px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 266px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 99px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">If the options parameter is omitted, all records are returned.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1" style="font-weight: normal;">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1" style="font-weight: normal;">Application must implement onSuccess and onFailure methods of VMXCallback interface. Read records are passed as an argument through onSuccess handler. onFailure handler takes cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 93px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Keys</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys to use for the select query. Use records primary key column names as key and respective values to populate <b>primaryKeys</b> map.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the <b>where</b> condition for the select query if primary keys are not provided. Key Name: <b>whereConditionAsAString</b> and the value is a string.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">orderByMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">List of HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specifies the way the data should be arranged in ascending/descending order of column name. Key Name: <b>orderByMap</b> and value is an array of the dictionary.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Map of column names and their respective values according to which the records are to be fetched.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">likeCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Map of column names and their respective values according to which the records are to be fetched.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">projectionColumns</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Array List&lt; string&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">List of column names which are returned.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">distinct</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean value for getting the distinct value of the first projection column passed.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
VMXObj category = new VMXObj("CATEGORY");    
 
 
 //----- Example : Get all  --------
 HashMap<String,Object> finalMap = new HashMap<String, Object>();
 category.get(finalMap, new VMXCallback() {
     @Override
     public void onSuccess(Object object) {
         Log.d("Object Read", "Object Read successful for category");		
         ArrayList<HashMap<String, Object>> records = (ArrayList<HashMap<String, Object>>) object;
 		for (HashMap<String, String> record : records) {
 		    Log.d("CATEGORY_DES", record.get("CATEGORY_DES");
         }
     }
     @Override
     public void onFailure(Object error) 
	{
	 OfflineObjectsException e=(OfflineObjectsException)error;
        Log.e("Object Read", "Object Read Unsuccessful for category with error :" + e.getMessage());
      }
 });
 
 //------- Example : getall with orderBy clause --------
  
 HashMap<String,Object> finalMap = new HashMap<String, Object>();
 HashMap<String, Object> orderByCondition1 = new HashMap<String, Object>();
 HashMap<String, Object> orderByCondition2 = new HashMap<String, Object>();
 orderByCondition1.put("CATEGORY_DES","ASC");
 orderByCondition2.put("CATEGORY_ID","DESC");
 List<HashMap<String, Object>> orderByMap = new ArrayList<HashMap<String, Object>>();
 orderByMap.add(orderByCondition1);
 orderByMap.add(orderByCondition2);
 finalMap.put("orderByMap",orderByMap);
 
 category.get(finalMap, new VMXCallback() {
     @Override
     public void onSuccess(Object object) {
         Log.d("Object Read", "Object Read successful for category");		
         ArrayList<HashMap<String, Object>> records = (ArrayList<HashMap<String, Object>>) object;
 		for (HashMap<String, Object> record : records) {
 		    Log.d("CATEGORY_DES", record.get("CATEGORY_DES");
         }
     }
     @Override
     public void onFailure(Object error) {
	 OfflineObjectsException e=(OfflineObjectsException)error;
        Log.e("Object Read", "Object Read Unsuccessful for category with error :" + e.getMessage());
     }
 });
 
  //------ Example : get by PK  --------
 HashMap<String,Object> finalMap = new HashMap<String, Object>();
 HashMap<String,Object> primaryKeys = new HashMap<String, Object>();
 primaryKeys.put("CATEGORY_ID","2233");
 finalMap.put("primaryKeys",primaryKeys);
 category.get(finalMap, new VMXCallback() {
     @Override
     public void onSuccess(Object object) {
         Log.d("Object Read", "Object Read successful for category");		
         ArrayList<HashMap<String, String>> records = (ArrayList<HashMap<String, Object>>) object;
 		for (HashMap<String, String> record : records) {
 		    Log.d("CATEGORY_DES", record.get("CATEGORY_DES");
         }
     }
     @Override
     public void onFailure(Object error) {
	 OfflineObjectsException e=(OfflineObjectsException)error;
        Log.e("Object Read", "Object Read Unsuccessful for category with error :" + e.getMessage());
     }
 });
 
 //---- Example : get by where clause -------- 
 
 HashMap<String,Object> finalMap = new HashMap<String, Object>();
 String whereClause = "CATEGORY_ID = '2233'";
 finalMap.put("whereConditionAsAString",whereClause);
 category.get(finalMap, new VMXCallback() {
     @Override
     public void onSuccess(Object object) {
         Log.d("Object Read", "Object Read successful for category");		
         ArrayList<HashMap<String, Object>> records = (ArrayList<HashMap<String, Object>>) object;
 		for (HashMap<String, Object> record : records) {
     		    Log.d("CATEGORY_DES", record.get("CATEGORY_DES");
         }
     }
     @Override
     public void onFailure(Object error)
	{
	 OfflineObjectsException e=(OfflineObjectsException)error;
        Log.e("Object Read", "Object Read Unsuccessful for category with error :" + e.getMessage());
     }
 });
  
  
  
 //--- Example : get for distinct ---  
  
HashMap<String,Object> finalMap = new HashMap<String, Object>();  
ArrayList<String> projectionColumnsList = new ArrayList<String>();  
projectionColumnsList.add("CATEGORY_DES");  
finalMap.put("distinct", true);  
finalMap.put("projectionColumns" , projectionColumnsList);  
category.get(finalMap, new VMXCallback() {  
     @Override  
     public void onSuccess(Object object) {  
       Log.d("Object Read", "Object Read successful for category");  
       ArrayList<HashMap<String, Object>> records = (ArrayList<HashMap<String, Object>>) object;  
         for (HashMap<String, String> record : records) {  
         Log.d("CATEGORY_DES", record.get("CATEGORY_DES");  
    }  
  }  
     @Override  
     public void onFailure(Object error)  
      {  
       OfflineObjectsException e=(OfflineObjectsException)error;  
        Log.e("Object Read", "Object Read Unsuccessful for category with error :" + e.getMessage());  
   }  
 });
```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj> get:(NSDictionary <NSString *, id> *)options
               onSuccess:(VMXSuccessCompletionHandler)onSuccess
               onFailure:(VMXFailureCompletionHandler)onFailure

```

### Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 218px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">If the options parameter is omitted, all records are returned.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on success with records passed as an argument.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 182px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys to use for the select query. Use records primary key column names as key and respective values to populate <b>primaryKeys</b> dictionary.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the select query if primary keys are not provided. Key Name: <b>whereConditionAsAString</b> and value is a string.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">orderByMap</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSArray&lt; NSDictionary&lt;NSString *, id&gt; *&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specifies the way the data should be arranged in ascending/descending order of column name. Key Name: <b>orderByMap</b> and value is an array of the dictionary.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString *, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Dictionary of column names and their respective values according to which the records are to be fetched.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">likeCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString *, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Dictionary of column names and their respective values according to which the records are to be fetched.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">projectionColumns</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString *, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Dictionary of column names which need to returned.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">distinct</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean value for getting the distinct value of the first projection column passed.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```

  
  //----- Example : Get all  --------

NSError * error;
VMXObj * _categoryObject = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
//Success handler
VMXSuccessCompletionHandler onSuccess = ^ (id records) {
    NSLog(@"Records read from db successfully");
};

//Failure Handler
VMXFailureCompletionHandler onError = ^ (id error) {
    NSLog(@"Failed to read records with error %@", [error.userInfo localizedDescription]);
};

[_categories get: @{}
    onSuccess: onSuccess onFailure: onError
];

//------- Example : getall with orderBy clause --------

NSError * error;
VMXObj * _categoryObject = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSArray * orderByClause = @ [@{
    "CATEGORY_ID": "DESC"
}, @ {
    "CATEGORY_PK": "ASC"
}];
NSDictionary * options = @ {
    "orderBy": orderByClause
};
//Success handler
VMXSuccessCompletionHandler onSuccess = ^ (id records) {
    NSLog(@"Records read from db successfully");
};

//Failure Handler
VMXFailureCompletionHandler onError = ^ (id error) {
    NSLog(@"Failed to read records with error %@", [error.userInfo localizedDescription]);
};

[_categories get: options onSuccess: onSuccess onFailure: onError];

//------ Example : get by PK  --------

NSError * error;
VMXObj * _categoryObject = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSDictionary * primaryKeys = @ {@
    "CATEGORY_ID": "2233"
};
NSDictionary * options = @ {
    "primaryKeys": primaryKeys
};
//Success handler
VMXSuccessCompletionHandler onSuccess = ^ (id records) {
    NSLog(@"Records read from db successfully");
};

//Failure Handler
VMXFailureCompletionHandler onError = ^ (id error) {
    NSLog(@"Failed to read records with error %@", [error.userInfo localizedDescription]);
};

[_categories get: options onSuccess: onSuccess onFailure: onError];


//---- Example : get by where clause --------

NSError * error;
VMXObj * _categoryObject = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSString * whereClause = "CATEGORY_ID = '2233'";
NSDictionary * options = @ {
    "whereClause": whereClause
};
//Success handler
VMXSuccessCompletionHandler onSuccess = ^ (id records) {
    NSLog(@"Records read from db successfully");
};

//Failure Handler
VMXFailureCompletionHandler onError = ^ (id error) {
    NSLog(@"Failed to read records with error %@", [error.userInfo localizedDescription]);
};

[_categories get: options onSuccess: onSuccess onFailure: onError];


//------ Example: get for distinct -------

NSError * error;
VMXObj * _categoryObject = [
    [VMXObj alloc] initWithName: @"CATEGORY"
    error: & error
];
NSMutableDictionary * options = [
    [NSMutableDictionary alloc] init
];
NSMutableArray * projectionColumnList = [NSMutableArray new];
[projectionColumnsList addObject: @"Category_PN"]
[options setValue: YES forKey: @"distinct "];
[options setValues: projectionColumnList forKey: @"projectionColumns"];

//Success handler
VMXSuccessCompletionHandler onSuccess = ^ (id records) {
    NSLog(@"Records read from db successfully");
};

//Failure Handler
VMXFailureCompletionHandler onError = ^ (id error) {
    NSLog(@"Failed to read records with error %@", [error.userInfo localizedDescription]);
};

[_categories get: options onSuccess: onSuccess onFailure: onError];
```

> **_Note:_** If more than one key amongst **primaryKeys**, **whereCondition** and **whereConditionAsAString** are passed in options, the records are fetched in the following priority **primaryKeys** > **whereCondition** > **whereConditionAsAString**. Applicable for all platforms.

> **_Note:_** If both **whereCondition** and **likeCondition** are passed in options, the records are fetched in the following priority: **whereCondition**\> **likeCondition**. Applicable for all platforms.
