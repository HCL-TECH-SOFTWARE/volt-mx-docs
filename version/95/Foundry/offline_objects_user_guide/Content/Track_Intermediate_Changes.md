
Track Intermediate Changes
==========================

A few applications allow you to provide details such as profile information. With regards to this, the application should also provide an option to edit these details before the final submission. All these revisions are transitional in nature and may not be required to be uploaded to the server.

The [trackIntermediateUpdates](../../../Foundry/offline_objectsapi_reference_guide/Content/ObjectUpdate.md) option provides you a way to decide whether to upload the intermediate changes done to the local record, to the server or not.

To upload the intermediate changes to the server, set the **trackIntermediateChanges** option to True. Otherwise, set to False. This option is set to True, by default.

Sample Code

```
//------- update all records -------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var record = {};
record["CATEGORY_DES"] = "Update existing record";

function successCallback(response) {
    //response holds the number of records updated
}

function errorCallback(error) {
    voltmx.print("Update failed with error: " + JSON.stringify(error));
}
category.update(record, null, successCallback, errorCallback);

//--------update a record using primary key--------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var record = {};
var primaryKeys = {};
record["CATEGORY_DES"] = "Update existing record";
primaryKeys["CATEGORY_ID"] = "1234";
options["primaryKeys"] = primaryKeys;

function successCallback(response) {
    //response holds the number of records updated
}

function errorCallback(error) {
    voltmx.print("Update failed with error: " + JSON.stringify(error));
}
category.update(record, options, successCallback, errorCallback);

//------- update by whereCondition-------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var record = {};
var whereClause = {};
whereClause["Category_PN"] = 7;
record["CATEGORY_DES"] = "Update existing record";
options["whereCondition"] = whereClause;

function successCallback(response) {
    //response holds the number of records updated
}

function errorCallback(error) {
    voltmx.print("Update failed with error: " + JSON.stringify(error));
}
category.update(record, options, successCallback, errorCallback);

//------- update by whereConditionAsAString -------
var category = new voltmx.sdk.VMXObj("CATEGORY");
var options = {};
var record = {};
var whereClause = "Category_PN = '7'";
record["CATEGORY_DES"] = "Update existing record";
options["whereConditionAsAString"] = whereClause;

function successCallback(response) {
    //response holds the number of records updated
}

function errorCallback(error) {
    voltmx.print("Update failed with error: " + JSON.stringify(error));
}
category.update(record, options, successCallback, errorCallback);

//------- update using Disable change tracking flag - trackIntermediateUpdates ---------
var options = {
    "trackIntermediateUpdates": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.update(record, options, successCallback, errorCallback);

//------- update using Disable change tracking flag – trackChanges ---------
var options = {
    "trackChanges": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.update(record, options, successCallback, errorCallback);

//------- update using markForUpload flag --------- 
var options = {
    "markForUpload": false
};
var VMXObject = new voltmx.sdk.VMXObj("CATEGORY");
VMXObject.update(record, options, successCallback, errorCallback);
```
