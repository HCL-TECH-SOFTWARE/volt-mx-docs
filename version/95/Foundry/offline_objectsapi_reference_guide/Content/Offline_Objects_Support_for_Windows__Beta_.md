                              

Offline Objects Support for Windows (Beta)
==========================================

Application Level APIs
----------------------

The application level API facilitates in set up and initialize the Offline Objects client-side environment, drop or reset the client state (database).

### VMXFoundry.OfflineObjects.setup

Offline Objects setup function initializes the creation of device database and sync environment. Once the setup is successful, the database structure is created on the device. The device database does not have any data. Every app launch must call setup before using any other offline objects API, subsequent **VMXFoundry.OfflineObjects.setup** call initializes the sync environment.

#### Syntax

```
VMXFoundry.OfflineObjects.setup(options, successCallback, failureCallback)
```

#### Input Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Device database encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful setup.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on error in setup with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: normal;">Yes</td></tr></tbody></table>

#### Example

```
function successCallback(){
    voltmx.print("Application setup successful");
}
function failureCallback(error){
    voltmx.print("Application setup failed with error:" + error.code);
}
//Encrypt the device database using a passphrase
var options = {"deviceDbEncryptionKey" : "myencryptionpa$$phrase1"};
VMXFoundry.OfflineObjects.setup(options, successCallback, failureCallback);
```

### VMXFoundry.OfflineObjects.drop

The function deletes the database schema along with all its data. Success or failure is reported through callbacks provided to the drop API.

#### Syntax

```
VMXFoundry.OfflineObjects.drop(options, successCallback, failureCallback)
```

#### Input Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop options such as device database encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked when drop operation is successful.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on error while dropping with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: normal;">Yes</td></tr></tbody></table>

  
| Option | Type | Description | Required |
| --- | --- | --- | --- |
| deviceDBEncryptionKey | String | Encryption passphrase must be a string of six characters long. | No |

#### Example

```
function successCallback(){
  voltmx.print("Application drop successful");
}
function failureCallback(error){
  voltmx.print("Application drop failed with error:" + error.code);
}
//Encrypt the device database using a passphrase
var options = {"deviceDbEncryptionKey" : "myencryptionpa$$phrase1"};
VMXFoundry.OfflineObjects.drop(options, successCallback, failureCallback);
```

### VMXFoundry.OfflineObjects.reset

Offline objects reset function resets the device database to the initial stage of the sync environment. Once the reset is successful, all the data is removed from the database but the database table structure is preserved.

#### Syntax

```
VMXFoundry.OfflineObjects.reset(options, successCallback, failureCallback)
```

#### Input Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Reset options such as device database encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on successful reset.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error in reset with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: bold;">Yes</td></tr></tbody></table>

  
| Option | Type | Description | Required |
| --- | --- | --- | --- |
| deviceDBEncryptionKey | String | Encryption passphrase must be a string of six characters long. | No |

#### Example

```
function successCallback(){
  voltmx.print("Application reset successful");
} 
function failureCallback(error){
   voltmx.print("Application reset failed with error:"+ error.code);
} 
//Decrypt and re encrypt the device database
var options={deviceDBEncryptionKey":"myencryptionpa$$phrase1"};
VMXFoundry.OfflineObjects.reset(options,successCallback, failureCallback);
```

### VMXFoundry.OfflineObjects.rollback

Offline objects rollback function rolls back all the changes of the application in the device local database to its previous sync state.

#### Syntax

```

VMXFoundry.OfflineObjects.rollback(successCallback, failureCallback)
```

#### Input Parameters

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 100%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on a successful rollback.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on rollback failure with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: bold;">Yes</td></tr></tbody></table>

#### Example

```
function successCallback(){ 
    voltmx.print("Application rollback successful");
} 
function failureCallback(error){
    voltmx.print("Application rollback failed with error:" + error.code);
}
VMXFoundry.OfflineObjects.rollback(successCallback, failureCallback);
```
