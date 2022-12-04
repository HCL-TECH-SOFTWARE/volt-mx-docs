
<object>.update
===============

The **<object>.update** API updates the records that are qualified for the criteria in the local database.

> **Note:**  
*   This API is supported from V8 SP4 onwards.  
*   Not supported for Windows channel.  
*   The column names and the values provided as key value pairs are case sensitive.  

Volt MX  Iris (JavaScript)
----------------------------

### Signature

```
<VMXObj>.update(record, options, successCallback, failureCallback)

```

### Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing column name and value pairs which are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">The options parameter accepts a JSON that has the following options keys primaryKeys whereCondition whereConditionAsAString trackChanges trackIntermediateUpdates markForUpload For detailed information, refer <a href="#Options" class="selected">Options Keys</a>. <b>If the options parameter is null or empty, all the records are updated.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when the records are updated successfully.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

  
| **Keys** | Type | Description | Required |
| --- | --- | --- | --- |
| primaryKeys | JSON | Specify the primary keys of the record to be updated. **Key Name**: primaryKeys and **values** are column names and their respective values. | No |
| whereCondition | JSON | Specify the where condition for the update query. **Key Name**: whereCondition and **values** are column names and their respective values. | No |
| whereConditionAsAString | String | Specify the where condition for the update query. **Key Name**: whereConditionAsAString and the **value** is a string. > **_Note:_** For SPA/Desktop Web channels, each condition must have only one comparison operator (=,!=,>,<,>=,<=). Multiple conditions can be clubbed using conjunctions (AND, OR). Values containing whitespaces are not supported. | No |
| trackChanges | Boolean | If **trackChanges** is set to **False**, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded). The key is set to **True**, by default. > **_Note:_** Not supported for SPA/Desktop Web channels. | No |
| trackIntermediateUpdates | Boolean | If **trackIntermediateUpdates** is set to **False**, it enables to track the latest update performed on the record. The key is set to **True**, by default. > **_Note:_** Not supported for SPA/Desktop Web channels. | No |
| markForUpload | Boolean | If **markForUpload** is set to**False**, the record changes are not uploaded to the server. The key is set to **True**, by default. > **_Note:_** Not supported for SPA/Desktop Web channels. | No |

### Return Type

void

### Example

```
**//------- update all records -------**
var category = new voltmx.sdk.VMXObj("CATEGORY"); 
var record = {}; 
record["CATEGORY_DES"] = "Update existing record";   
function successCallback(response) 
{ 
	//response holds the number of records updated
}
function errorCallback(error) 
{
	voltmx.print("Update failed with error: " + JSON.stringify (error)); 
}
category.update(record, null, successCallback, errorCallback);  
  
**//--------update a record using primary key--------**
var category = new voltmx.sdk.VMXObj("CATEGORY"); 
var options = {}; 
var record = {}; 
var primaryKeys = {}; 
record["CATEGORY_DES"] = "Update existing record"; 
primaryKeys["CATEGORY_ID"] = "1234"; 
options["primaryKeys"] = primaryKeys;  
function successCallback(response) 
{ 
	//response holds the number of records updated
}
function errorCallback(error) 
{
	voltmx.print("Update failed with error: " + JSON.stringify (error)); 
}
category.update(record, options, successCallback, errorCallback);  
  
**//------- update by whereCondition-------**
var category = new voltmx.sdk.VMXObj("CATEGORY"); 
var options = {}; 
var record = {}; 
var whereClause = {};
whereClause["Category_PN"] = 7;
record["CATEGORY_DES"] = "Update existing record"; 
options["whereCondition"] = whereClause;  
function successCallback(response) 
{ 
	//response holds the number of records updated
}
function errorCallback(error) 
{
	voltmx.print("Update failed with error: " + JSON.stringify(error)); 
}
category.update(record, options, successCallback, errorCallback);  
  
**//------- update by whereConditionAsAString -------**
var category = new voltmx.sdk.VMXObj("CATEGORY"); 
var options = {}; 
var record = {}; 
var whereClause = "Category_PN = '7'";
record["CATEGORY_DES"] = "Update existing record"; 
options["whereConditionAsAString"] = whereClause;  
function successCallback(response) 
{ 
	//response holds the number of records updated
}
function errorCallback(error) 
{
	voltmx.print("Update failed with error: " + JSON.stringify(error)); 
}
category.update(record, options, successCallback, errorCallback);
  
**//------- update using Disable change tracking flag - trackIntermediateUpdates ---------**
var options = {"trackIntermediateUpdates": false};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");   
VMXObject.update(record, options, successCallback, errorCallback);
  
**//------- update using Disable change tracking flag – trackChanges ---------**
var options={"trackChanges": false};   
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");   
VMXObject.update(record, options, successCallback, errorCallback);
  
**//------- update using markForUpload flag ---------** 
var options={"markForUpload": false};   
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");  
VMXObject.update(record, options, successCallback, errorCallback);

```

Android (Java)
--------------

### Signature

```
void <VMXObj>.update(HashMap<String, Object> record,
                      HashMap<String, Object> options,
                final VMXCallback callback) throws Exception 

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 336px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A HashMap containing column name and value pairs which are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The options parameter accepts a HashMap with the following option keys: primaryKeys whereCondition whereConditionAsAString trackChanges trackIntermediateUpdates markForUpload For detailed information, refer <a href="#Options" class="selected">Options Keys</a>. <b>If the options parameter is omitted, all the records are updated.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements <b>onSuccess</b> and <b>onFailure</b> methods of <b>VMXCallback</b> interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 106px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be updated. <b>Key Name</b>: primaryKeys and <b>values</b> are column names and their respective values.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HashMap&lt;String, Object&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Map of column names and their respective values according to which the records are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the select query. <b>Key Name</b>: whereConditionAsAString and the <b>value</b> is a string. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>For SPA/Desktop Web channels, each condition must have only comparison parameter (=,!=,&gt;,&lt;,&gt;=,&lt;=). Multiple conditions can be clubbed using conjunctions(AND, OR). Values with whitespaces are not supported.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If <b>trackChanges</b> is set to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded). The key is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackIntermediateUpdates</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If <b>trackIntermediateUpdates</b> is set to <b>False</b>. The option enables us to track the latest update performed on the record. The option is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">If <b>markForUpload</b> is set to <b>false</b>, the record changes are not uploaded to the server. The option is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Example

```
//Update record with a primary key 
VMXObj category = new VMXObj("CATEGORY"); 
HashMap<String, Object> record = new HashMap<String, Object>(); 
record.put("CATEGORY_PN", "7"); 
record.put("CATEGORY_DES", "new updated description");
HashMap<String, Object> primaryKeys = new HashMap<>(); 
primaryKeys.put("CATEGORY_ID", "123");
HashMap<String, Object> options = new HashMap<>(); 
options.put("primaryKeys", primaryKeys);  
try{ 
  category.update(record, options, new VMXCallback() 
  { 
	@Override
	public void onSuccess(Object object) 
	{ 
	  Log.d("Object Update", "Object Update Successful for category"); 
	} 
	@Override 
	public void onFailure(Object error) 
	{	
	  OfflineObjectsException e=(OfflineObjectsException)error; 
	  Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage()); 
	} 
  });
catch(Exception e)
{
	Log.e("Object Update"."Object Update Unsuccessful with error: " + e.getMessage());
}
}  
  
//Update record with composite primary key 
HashMap<String, Object> record = new HashMap<String, Object>();
record.put("CATEGORY_PN", "7"); 
record.put("CATEGORY_DES", "new updated description");
HashMap<String, Object> primaryKeys = new HashMap<>(); 
primaryKeys.put("CATEGORY_KEY1", "123"); 
primaryKeys.put("CATEGORY_KEY2", "124");
HashMap<String, Object> options = new HashMap<>();
options.put("primaryKeys", primaryKeys);  
try{ 
  category.update(record, options, new VMXCallback() 
  { 
	@Override
	public void onSuccess(Object object) 
	{ 
	  Log.d("Object Update", "Object Update Successful for category"); 
	} 
	@Override 
	public void onFailure(Object error) 
	{	
	  OfflineObjectsException e=(OfflineObjectsException)error; 
	  Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage()); 
	}  
  }); 
} 
catch (Exception e) 
{ 
  Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage());
}

//Update record using whereCondition 
VMXObj category = new VMXObj("CATEGORY"); 
HashMap<String, Object> record = new HashMap<String, Object>(); 
record.put("CATEGORY_PN", "7"); 
record.put("CATEGORY_DES", "new updated description");
HashMap<String, Object> whereClause = new HashMap<>(); 
whereClause.put("CATEGORY_ID", "123");
HashMap<String, Object> options = new HashMap<>(); 
options.put("whereCondition", whereClause);  
try{ 
  category.update(record, options, new VMXCallback() 
  { 
	@Override 
	public void onSuccess(Object object) 
	{ 
	  Log.d("Object Update", "Object Update Successful for category"); 
	}
	@Override 
	public void onFailure(Object error) 
	{
	  OfflineObjectsException e=(OfflineObjectsException)error; 
	  Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage()); 
	}
  });
}
catch(Exception e)
{
	Log.e("Object Update"."Object Update Unsuccessful with error: " + e.getMessage());
}

//Update record using whereConditionAsAString 
VMXObj category = new VMXObj("CATEGORY"); 
HashMap<String, Object> record = new HashMap<String, Object>(); 
record.put("CATEGORY_PN", "7"); 
record.put("CATEGORY_DES", "new updated description");
String whereClause = "CATEGORY_ID = 123";
HashMap<String, Object> options = new HashMap<>(); 
options.put(“whereConditionAsAString”, whereClause);
try 
{ 
  category.update(record, options, new VMXCallback() 
  { 
	@Override 
	public void onSuccess(Object object) 
	{ 
	  Log.d("Object Update", "Object Update Successful for category"); 
	} 
	@Override 
	public void onFailure(Object error) 
	{
	  OfflineObjectsException e=(OfflineObjectsException)error; 
	  Log.e("Object Update", "Object Update Unsuccessful for category with Error :" + e.getMessage()); 
	} 
  });
}
catch(Exception e)
{
	Log.e("Object Update"."Object Update Unsuccessful with error: " + e.getMessage());
}

//Disable change tracking - trackIntermediateUpdates 
HashMap<String, Object>options=new HashMap<>(); options.put(KSPublicConstants.TRACK_INTERMEDIATE_UPDATES, false); category.update(record, options, new VMXCallback(){
@Override
public void onSuccess(Object object)  
{}
@Override  
public void onFailure(Object object)  
{}
});

//Disable change tracking - trackChanges 
HashMap<String, Object> options = new HashMap<>(); options.put(KSPublicConstants.TRACK_CHANGES, false); 
category.update(record, options, new VMXCallback(){  
@Override
public void onSuccess(Object object)  
{}
@Override  
public void onFailure(Object object)  
{}
});  
  
//Mark for Upload 
HashMap<String, Object> options = new HashMap<>(); options.put(KSPublicConstants.MARK_FOR_UPLOAD, false); 
category.update(record, options, new VMXCallback(){  
@Override
public void onSuccess(Object object)  
{}
@Override  
public void onFailure(Object object)  
{}
});

```

iOS (Objective C)
-----------------

### Signature

```
void <VMXObj>.update:(NSDictionary<NSString *, id> *)record
             options:(NSDictionary<NSString *, id> *)options
           onSuccess:(VMXSuccessCompletionHandler)onSuccess
           onFailure:(VMXFailureCompletionHandler)onFailure 

```

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 210px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 213px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">record</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">A dictionary containing column name and value pairs which are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The options parameter accepts a NSDictionary with the following option keys: primaryKeys whereCondition whereConditionAsAString trackChanges trackIntermediateUpdates markForUpload For detailed information, refer <a href="#Options" class="selected">Options Keys</a>. <b>If the options parameter is null or empty, all the records are updated.</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">VMXSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when records are updated successfully.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">VMXFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked when updating records fail with the cause of failure.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Options Keys

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 106px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 159px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;"><b>Keys</b></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">primaryKeys</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary&lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the primary keys of the record to be updated. <b>Key Name</b>: primaryKeys and the <b>values</b> are column names and their respective values.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereCondition</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSDictionary &lt;NSString*, id&gt;</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Dictionary of column names and their respective values according to which the records are to be updated.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">whereConditionAsAString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">NSString</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Specify the where condition for the update query. <b>Key Name</b>: whereConditionAsAString and the <b>value</b> is a string.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackChanges</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If <b>trackChanges</b> is set to <b>False</b>, the record level operations are not tracked. When the option is set to false, the CUD operations performed on a record are not synced (uploaded). The option is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">trackIntermediateUpdates</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyE-Column1-Body1">If <b>trackIntermediateOptions</b> is set to <b>False</b>, it enables to track the latest update performed on the record. The option is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">No</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">markForUpload</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyB-Column1-Body1">If <b>markForUpload</b> is set to <b>false</b>, the record changes are not uploaded to the server. The option is set to <b>True</b>, by default.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">No</td></tr></tbody></table>

### Return Type

void

### Examples

```
**// Update record with a primary key** 
VMXObj *_categories = [[VMXObj alloc] initWithName:@"CATEGORY" error:&error];
NSMutableDictionary *recordToUpdate = [NSMutableDictionary new];   
recordToUpdate[@"CATEGORY_DES"] = @"updated description"; 
recordToUpdate[@"CATEGORY_PN"] = @"3";
NSMutableDictionary *options = [NSMutableDictionary new]; 
NSMutableDictionary *primaryKeys = [NSMutableDictionary new]; 
primaryKeys[@"CATEGORY_ID"] = @"112"; 
options[@"primaryKeys"] = primaryKeys;
[_categories update:recordToUpdate 
		options:options 
		  onSuccess:^ (id object) 
		  { 
			NSLog(@"Update record succeded"); 
		  } 
		  onFailure:^(id object) 
		  { 
			OfflineObjectsError *error=(OfflineObjectsError)object;   
NSLog(@"Update record failed with error %@",  
[error.userInfo localizedDescription]); 
		  }
];
  
**// Update record with composite primary key** 
VMXObj *_categories = [[VMXObj alloc] initWithName:@"CATEGORY" error:&error];   
NSMutableDictionary *recordToUpdate = [NSMutableDictionary new];   
recordToUpdate[@"CATEGORY_DES"] = @"updated description"; 
recordToUpdate[@"CATEGORY_PN"] = @"3"; 
NSMutableDictionary *options = [NSMutableDictionary new]; 
NSMutableDictionary *primaryKeys = [NSMutableDictionary new]; 
primaryKeys[@"PRIMARY_KEY1"] = @"123"; 
primaryKeys[@"PRIMARY_KEY2"] = @"222"; 
options[@"primaryKeys"] = primaryKeys;  
[_categories update:recordToUpdate 
            options: 
		onSuccess:^(id object)
		 {
			NSLog(@"Updated successfully");
		 } 
		 onFailure:^(id object) 
		 { 
			OfflineObjectsError *error=(OfflineObjectsError)object;   
NSLog(@"Update record failed with error %@",  
[error.userInfo localizedDescription]); 
		 }
];  
  
**// Update record using whereCondition**
VMXObj *_categories = [[VMXObj alloc] initWithName:@"CATEGORY" error:&error];
NSMutableDictionary *recordToUpdate = [NSMutableDictionary new];   
recordToUpdate[@"CATEGORY_DES"] = @"updated description"; 
recordToUpdate[@"CATEGORY_PN"] = @"3";
NSMutableDictionary *options = [NSMutableDictionary new]; 
NSMutableDictionary *whereClause = [NSMutableDictionary new]; 
whereClause [@"CATEGORY_ID"] = @"112"; 
options[@"whereCondition"] = whereClause;  
[_categories update:recordToUpdate 
		options:options 
		  onSuccess:^ (id object) 
		  { 
			NSLog(@"Updated successfully"); 
		  } 
		  onFailure:^(id object) 
		  { 
			OfflineObjectsError *error=(OfflineObjectsError)object;   
NSLog(@"Update record failed with error %@",  
[error.userInfo localizedDescription]); 
		  }
];
  
**// Update record using whereConditionAsAString**
VMXObj *_categories = [[VMXObj alloc] initWithName:@"CATEGORY" error:&error];
NSMutableDictionary *recordToUpdate = [NSMutableDictionary new];   
recordToUpdate[@"CATEGORY_DES"] = @"updated description"; 
recordToUpdate[@"CATEGORY_PN"] = @"3";
NSMutableDictionary *options = [NSMutableDictionary new]; 
NSString *whereClause = @"CATEGORY_ID = 112"; 
options[@"whereConditionAsAString"] = whereClause;  
[_categories update:recordToUpdate 
		 options:options 
		  onSuccess:^ (id object) 
		  { 
			NSLog(@"Updated successfully"); 
		  } 
		  onFailure:^(id object) 
		  { 
			OfflineObjectsError *error=(OfflineObjectsError)object;   
NSLog(@"Update record failed with error %@",   
[error.userInfo localizedDescription]); 
		  }
];
  
**//Disable change tracking - trackIntermediateUpdates** 
NSDictionary <NSString*, id> *options=@{VMXCONSTANTS_TRACK_ INTERMEDIATE_UPDATES: @NO};   
[sdkObjectSync update:record 
		 options:options 
		onSuccess:^(id object){} 
		onFailure:^(id object){}
];  
**//Disable change tracking - trackChanges** 
NSDictionary <NSString*, id> *options=@{VMXCONSTANTS_TRACK_CHANGES_ UPDATES: @NO};   
[sdkObjectSync update:record 
		 options:options 
		onSuccess:^(id object){} 
		onFailure:^(id object){}
];  
**//Mark for Upload** 
NSDictionary <NSString*, id> *options=@{VMXCONSTANTS_MARK_FOR_ UPLOAD: @NO};   
[sdkObjectSync update:record 
		 options:options 
		onSuccess:^(id object){} 
		onFailure:^(id object){}
];  

```

> **_Note:_**

*   The **trackChanges** flag must be used consistently (either always true or always false) for all CUD operations on a record. You must not update the value of "change tracking" flag in between CUD operations on a record.
*   When you set both **markForUpload** and **trackChanges** flags, an error is reported as these are mutually exclusive options.
*   When the user sets both **trackIntermediateUpdates** and **trackChanges** flags, an error is reported as these are mutually exclusive options.
*   For **Hierarchical Objects**, you must provide a proper value for both parent and child record operations.
*   The **primaryKeys**, **whereCondition**, and **whereConditionAsAString** are considered as the criteria to update a record. Only one criterion is considered at a time and the order is **primaryKeys**\> **whereCondition** > **whereConditionAsAString**.

<table style="margin-left: 0;margin-right: auto;mc-table-style: url]('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0" data-mc-conditions="Default.md5 Only,Default.HTML,Default.Not Ready for Publish"><colgroup><col style="width: 37px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 51px;" class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 62px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Rev</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Author</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Edits</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">1.0</td><td class="TableStyle-Basic-BodyE-Column1-Body1">PK</td><td class="TableStyle-Basic-BodyD-Column1-Body1">PK</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">1,1</td><td class="TableStyle-Basic-BodyB-Column1-Body1">GS</td><td class="TableStyle-Basic-BodyA-Column1-Body1">GS</td></tr></tbody></table>
