

## <a id="navigation-manager"></a> Navigation Manager


Before the introduction of the Navigation Manager, form navigation was either from one-to-one (always to the same form) or one-to-many (conditional form navigation), where the action performed on the source form decides the target form that must be displayed. This approach where the current form decides the next form to be displayed means that there is a tightly-coupled UI centric form navigation which complicates the maintainability of the code as the developer must remember the entire app flow.

The Navigation Manager introduces a new way of navigation between forms that can be used for inter-app and intra-app navigation. The Navigation Manager enables the concept of Model-driven navigation, where the entire navigation flow of the app resides in a single place called the Navigation Model. In the model-driven navigation, instead of the source form deciding the target form to be displayed, the target form is derived from the model that is configured in the destinationConfig parameter of the source form, that is present in the Navigation Model of the app. The model-driven navigation approach enhances the readability of the application flow and the maintainability of the application code.

The Navigation Manager has two entities - the **Navigation Model** and the **Navigation Controller**, and can be used in both composite and independent micro apps. Each micro app has its own Navigation Model and Navigation Controller. The Navigation Model is a JSON representation of the high-level in-and-out flow of the application, and is derived from the `NavigationModel.json` file that contains information about the preconditions present in the App and the Form, and the destination configs of the Form Modules or UI Modules. You must define all the outgoing paths from a Form in the Navigation Model.

The Navigation Controller is derived from the `NavigationController.js` file that contains information about callbacks that perform conditional navigation specific to the Forms. The Navigation Controller is mandatory in case of one-many form navigation.

The `NavigationModel.json` file has the following three objects:

*   [Forms Object](#forms-object)
*   [Application Object](#application-object)
*   [UIModules Object](#uimodules-object)

The Syntax of the `NavigationModel.json` file is as follows:

```
 { 
    "Application": {
      },
    "Forms": {
      },
    "UIModules" : {
      }
}
```

### Forms Object
------------

The Forms object contains a group of objects that each provide the metadata of individual forms present in the project. Each Form Object contains key-value pairs where the key is the friendly name of the form and the value contains the metadata of the form that provides information about the preconditions and destinations for the specific form.

The Syntax of the `Forms` Object is as follows:

```
"Forms": {  
"Form Friendly Name": {  
    "preConditionConfig": ['', ''],  
    "destinationConfig": {  
      "friendlyName": "",  
      "appName": ""  
    }  
  }  
}
```


<details close markdown="block"><summary>preConditionConfig</summary>

* * *

The preconditions of a Form are declared in the preConditionConfig list. The preConditionConfig list specifies a list of preconditions.

During form navigation, if the target form has preconditions declared, the source form must include the preconditions as part of the navigation params object.

**Syntax**

`"preConditionConfig" : [ ]`

**Input Parameters**

None.

 

**Example**

`"preConditionConfig" : [ "token" ]`


**Return Values**

None.

**Remarks**

In case of intra-app navigation, if you use the voltmx.mvc.navigation API or the app service event or the postAppInit event for form navigation, the preconditions of a form are ignored. 

</details>


<details close markdown="block"><summary id="destinationConfig">destinationConfig</summary>

* * *

The destination forms of a Form are declared in the destinationConfig object.

**Syntax**

In case of one-to-one navigation

`"destinationConfig" : { "appName" : "", "friendlyName" : ""}`

In case of one-to-many navigation

`"destinationConfig" : { "callback" : "" , "targetForms" : [ { "friendlyName" : "" } , { "friendlyName" : "" , "appName" : ""}] }`

**Input Parameters**

 
| Parameter | Description |
| --- | --- |
| _appName_ \[String\] \[Mandatory\] | The name of the app in the project to which navigation must be done in case of inter-app navigation. <br/>In case of intra-app navigation, the appName is an optional parameter.
| _friendlyName_ \[String\] \[Mandatory\] | The friendly name of the target form. |
| _callback_ \[String\] \[Mandatory\] | The callback parameter specifies the name of the function that must be fetched from the NavigationController. The value of the __callbackModelConfig__ that is passed in the Navigation Manager APIs is passed to the callback function. The conditional logic is then framed on the value of _callbackModelConfig_ in the callback function, and the `destinationConfig` is returned. <br/>The callback parameter is mandatory for one-to-many form navigation.
| _targetForms_ \[Object\] \[Mandatory\] | An object that contains a list of target forms of the destinationConfig. The destination forms that are returned in the callback function must be present in the list of targetForms. <br/>The targetForms parameter is mandatory for one-to-many form navigation.
|

 

**Example**

```
"destinationConfig" : { "callback" : ""  , "targetForms" : [  { "friendlyName" : "Form1" } , { "friendlyName" : "Form2" , "appName" : "App2"}] }
```

**Return Values**

None.

**Remarks**

In case of one-to-one form navigation, you must specify the appName and friendlyName of the form in the destinationConfig object.

In case of one-to-many form navigation, in addition to the appName and friendlyName of the form, you must specify the callback and targetForms parameter in the destinationConfig object.

The function that is specified in the callback parameter must be present in the Navigation Controller, and it must return the destinationConfig object.
</details>



### Application Object

The preconditions of a micro app are configured in the Application Object. During app navigation, if the target app has preconditions declared, the source app must set the preconditions of the target app by using the Application Manager APIs. and include those preconditions as part of its app data. Therefore, before the navigation action is invoked, the source app must set the mandatory precondition of the target app by using the application manager APIs.

The Syntax of the `Application` Object is as follows:

```
"Application": {"preConditionConfig" : [ "" ]},
```

> **Note:** Even if the source app does not set the mandatory preconditions of the target app, the navigation is successful if the target app already has the preconditions set in its app data (if the preconditions are already set by another micro app).

<details close markdown="block"><summary>preConditionConfig</summary>

* * *

The preconditions of an app are declared in the preConditionConfig object.  
The preConditionConfig object specifies a list of preconditions.

**Syntax**

`"preConditionConfig" : [ ]`

**Input Parameters**

None.

 

**Example**

```
"preConditionConfig" : [ "token" ]
```

**Return Values**

None.

**Remarks**

In case of inter-app navigation, if you use the voltmx.mvc.Navigation API or the app service event or the postAppInit event for form navigation, the preconditions of the app are ignored.

</details>

### UIModules Object

The UIModules Object contains a group of objects that each provide the metadata of individual MDA modules. Each UIModules Object contains key-value pairs where the key is the name of the MDA module and the value contains the metadata of the MDA modules that provides information about the destinations of the specific MDA module.

The Syntax of the `UIModules` Object is as follows:

```
"UIModules" : {
"<Module Name>" : {"destinationConfig" : {"friendlyName" : ""}},
"<Module Name>" : {"destinationConfig" : { "callback" : ""  , "targetForms" : [ { "friendlyName" : "" } , { "friendlyName" : "" , "appName" : ""}] }}
}
```
<details close markdown="block"><summary>destinationConfig</summary>

* * *

The destination forms of a UI Module are declared in the destinationConfig object.

**Syntax**

In case of one-to-one navigation

`"destinationConfig" : { "appName" : "", "friendlyName" : ""}`

In case of one-to-many navigation

`"destinationConfig" : { "callback" : "" , "targetForms" : [ { "friendlyName" : "" } , { "friendlyName" : "" , "appName" : ""}] }`

Input Parameters

 
| Parameter | Description |
| --- | --- |
| _appName_ \[String\] \[Mandatory\] | The name of the app in the project to which navigation must be done in case of inter-app navigation. <br/>In case of intra-app navigation, the appName is an optional parameter. |
| _friendlyName_ \[String\] \[Mandatory\] | The friendly name of the target form. |
| _callback_ \[String\] \[Mandatory\] | The callback parameter specifies the name of the function that must be fetched from the NavigationController. The value of the _callbackModelConfig_ that is passed in the Navigation Manager APIs is passed to the callback function. The conditional logic is then framed on the value of _callbackModelConfig_ in the callback function, and the [destinationConfig](#destinationConfig) is returned. <br/>The callback parameter is mandatory for one-to-many form navigation. |
| _targetForms_ \[Object\] \[Mandatory\] | An object that contains a list of target forms of the destinationConfig. The destination form that is returned in the callback function must be present in the list of targetForms. <br/>The targetForms parameter is mandatory for one-to-many form navigation. |

 

**Example**

```
"destinationConfig" : { "callback" : ""  , "targetForms" : [  { "friendlyName" : "Form1" } , { "friendlyName" : "Form2" , "appName" : "App2"}] }
```

**Return Values**

None.

**Remarks**

In case of one-to-one form navigation, you must specify the appName and friendlyName of the form in the destinationConfig object.

In case of one-to-many navigation, in addition to the appName and friendlyName of the form, you must specify the callback and targetForms parameter in the destinationConfig object.

> **Note:** The function that is specified in the callback parameter must be present in the Navigation Controller, and it must return the destinationConfig object.

</details>

Here is a sample NavigationModel.json file:

```
define("Accounts/navigation/NavigationModel", {

    "Application": {
        "preConditionConfig": ["token"]
    },

    "Forms": {

        "frmAccountSummary": {
            "preConditionConfig": ['accountID', 'profile'],
            "destinationConfig": {
                "friendlyName": "frmAccountDetails",
                "appName": "Accounts"
            }
        },
        "frmAccountDetails": {
            "preConditionConfig": [ ],
            "destinationConfig": {
                "callback": "handleFrmAccountDetails",
                "targetForms": [{
                    "friendlyName": "frmProfile"
                }, {
                    "friendlyName": "frmTransact",
                    "appName": "Transactions"
                }]
            }
        }
    },

    "UIModules": {

        "LoginUIModule": {
            "destinationConfig": {
                "friendlyName": "frmDashboard"
            }
        },

        "AccountsUIModule": {
            "destinationConfig": {
                "callback": "fun1",
                "targetForms": [{
                    "friendlyName": "frmProfile"
                }, {
                    "friendlyName": "frmTransact",
                    "appName": "Transactions"
                }]
            }
        }
    }

});
```

Here is a sample NavigationController.js file:

```
define("Accounts/navigation/NavigationController", {

    "handleFrmAccountDetails": function(data) {

        if (data != null) {

            if (data.viewProfile == true) {
                return {
                    "friendlyName": "frmProfile",
                    "appName": "Accounts"
                };
            } else if (data.viewTransactions == true) {
                return {
                    "friendlyName": "frmTransact",
                    "appName": "Transcations"
                };
            } else {
                return {
                    "friendlyName": "frmAccountSummary"
                }
            }

        }
        return null
    }

});
```
