
Track Changes
=============

Any changes to the device database records will be uploaded to the server during the subsequent sync sessions, by default. If you want to exclude certain changes from being uploaded, you can set the **trackChanges** option in the CRUD API to **False**.

For example, you can choose to delete certain records that are not needed from the device database only by setting the **trackChanges** option in the [delete API](../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectDelete.md) to False.

Sample Code

```
//------- delete all records -------
var category = new voltmx.sdk.VMXObj("CATEGORY");

function successCallback(response) {
    //response holds value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(null, successCallback, errorCallback);

//--------delete a record using composite primary key --------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var primaryKeys = {};
primaryKeys["CATEGORY_KEY1"] = "1234";
primaryKeys["CATEGORY_KEY2"] = "23";
options["primaryKeys"] = primaryKeys;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(options, successCallback, errorCallback);

//------- delete by whereCondition-------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var whereClause = {};
whereClause["Category_PN"] = 7;
var options = {};
options["whereCondition"] = whereClause;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(options, successCallback, errorCallback);

//------- delete by whereConditionAsAString -------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var whereClause = "Category_PN = '7'";
options["whereConditionAsAString"] = whereClause;

function successCallback(response) {
    //response holds the value true
}

function errorCallback(error) {
    voltmx.print("Delete failed with error: " + JSON.stringify(error));
}
category.delete(options, successCallback, errorCallback);

//------- delete using Disable change tracking flag – trackChanges ---------
var options = {
    "trackChanges": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.delete(options, successCallback, failureCallback);

//------- delete using markForUpload flag --------- 
var options = {
    "markForUpload": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.delete(options, successCallback, failureCallback);
```
