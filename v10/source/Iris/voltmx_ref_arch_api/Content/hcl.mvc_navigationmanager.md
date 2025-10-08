Navigation Manager APIs
=======================

The Navigation Manager provides three main APIs.

* [voltmx.mvc.getNavigationManager API](#voltmx_mvc_getnavigationmanager-api)
* [voltmx.mvc.getApplication Manager API](#voltmx_mvc_getapplicationmanager-api)
* [voltmx.mvc.resolveNameFromContext API](#voltmx_mvc_resolvenamefromcontext-api)


### <a id="voltmx_mvc_getnavigationmanager-api"></a>voltmx.mvc.getNavigationManager API

The getNavigationManager API returns the navigation manager object of the app (both composite and independent apps).

The navigation manager object contains the following functions:

<details close markdown="block"><summary>navigate Method</summary>

* * *

The navigate method enables inter-app or intra-app navigation.

Syntax

```
var obj = { "context" : this, "params" : { } , "callbackModelConfig" : {} }; voltmx.mvc.getNavigationManager().navigate(obj);
```

Input Parameters

 
| Parameter | Description |
| --- | --- |
| _context_ \[Mandatory\] | The context of the app that provides information about the source. The value of the context key is the FormController or PresentationController.
| _params_ \[Optional\] | A JavaScript object that is passed to the target form from the current form. 
| callbackModelConfig \[Optional\] | A JavaScript object that is passed to the function that is derived from the **callback** parameter present in the Navigation Model. The **callback** function present in controller derives the destination form from this object.

 |

 

Example

```
var obj = { "context" : this, "params" : { } , "callbackModelConfig" : {} };   
var navManager = voltmx.mvc.getNavigationManager() 
navManager.navigate(obj); 
```

Return Values

None.

</details>

* * *

### <a id="voltmx_mvc_getapplicationmanager-api"></a>voltmx.mvc.getApplicationManager API

The getApplicationManager API returns the application manager object of the app (both composite and independent apps).

The application manager object contains the following functions:

*   [getCurrentAppContext](#getCurrentAppContext)
*   [getCurrentAppName](#getCurrentAppName)
*   [isCompositeApp](#isCompositeApp)
*   [setAppContext](#setAppContext)

<details close markdown="block"><summary id="getCurrentAppContext">getCurrentAppContext Method</summary>

* * *

The getCurrentAppContext function returns the application context of the current app.

Syntax

```
var context = appManager.getCurrentAppContext()
```

Input Parameters

None  

Example

```
var appManager = voltmx.mvc.getApplicationManager()
var context = appManager.getCurrentAppContext();
```

Return Values

Returns the application context of the current app.

</details>

<details close markdown="block"><summary id="getCurrentAppName">getCurrentAppName Method</summary>

* * *

The getCurrentAppName function returns the name of the current app.

Syntax

```
applicationManager.getCurrentAppName();
```

Input Parameters

None

Example

```
var applicationManager = voltmx.mvc.getApplicationManager() 

applicationManager.getCurrentAppName(); 
```

Return Values

String - Returns the application name of the current app in String format.

</details>

<details close markdown="block"><summary id="isCompositeApp">isCompositeApp Method</summary>

* * *

The isCompositeApp function returns the type of the app - either composite or independent.

Syntax

```
applicationManager.isCompositeApp();
```

Input Parameters

None

Example

```
var applicationManager = voltmx.mvc.getApplicationManager() 

applicationManager.isCompositeApp(); 
```

Return Values

Boolean - Returns the value true if the app is a composite app. Returns the value false if the app is not a composite app.

</details>

<details close markdown="block"><summary id="setAppContext">setAppContext Method</summary>

* * *

The setAppContext function sets the application context for the specified app.

Syntax

```
applicationManager.setAppContext({"appName" : "", "context" : {}};
```

Input Parameters
 
| Parameter | Description |
| --- | --- |
| _appName_ \[String\] \[Mandatory\] | The name of the app in the project. |
| _context_ \[Mandatory\] | 
The context to be updated to the app.
 |

Example

```
var applicationManager = voltmx.mvc.getApplicationManager()
applicationManager.setAppContext({"appName" : "", "context" : {}};
```

Return Values

None

Remarks

The data provided in the context parameter is updated in the target application.

</details>

* * *

### <a id="voltmx_mvc_resolvenamefromcontext-api"></a>voltmx.mvc.resolveNameFromContext API

In scenarios where micro apps are used, the resolveNameFromContext API can be used to resolve the paths during inter-app access of forms and templates.

Syntax

```
voltmx.mvc.resolveNameFromContext({"appName" : "", "friendlyName" : ""})
```

Input Parameters
 
| Parameter | Description |
| --- | --- |
| _appName_ \[String\] \[Mandatory\] | The name of the app in the project. |
| _friendlyName_ \[String\] \[Mandatory\] | The friendly name of the form or template. |

Example

```
voltmx.mvc.resolveNameFromContext({"appName" : "Accounts", "friendlyName" : "flex1"})
```

Return Values

None

Remarks

The resolveNameFromContext API can be used in the following scenarios:

*   To return the inter-app form in the appService and postAppinit events in case of micro apps.  
    
    > **Note:** In a composite app, the application events of the base app are given a higher priority.

*   To configure another App Template in the current app.
*   To configure an inter-app Form as a Camera overlay.  

