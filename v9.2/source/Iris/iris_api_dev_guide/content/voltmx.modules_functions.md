                            


voltmx.modules Namespace
======================

The voltmx.modules namespace enables your apps to load functional modules through synchronous and asynchronous operations on demand. It provides the following API elements.

Functions
---------

The voltmx.module namespace contains the following functions.

### loadFunctionalModule

loadFunctionalModule is a synchronous API used to load functional module (views and jsModules) in scope of JavaScript. Until loading of module is complete, further executions will be stopped.

> **_Note:_** If the module is already loaded, then it returns true without reloading the same module.

**Syntax**

voltmx.modules.loadFunctionalModule ([modulename](#modulename_))

**Input Parameters**

  
| Parameter | Description |
| --- | --- |
| modulename \[String\] - Mandatory | Unique module name that is defined in the `functionalModules.xml` file. |

 

**Example**

```
//In module1 you can load module2 as below when required.		 
function buttonClick() {
    voltmx.modules.loadFunctionalModule("module2");
    //Now we cn access objects defined in module2
    frmLogin.show();
}
```

**Return Values**

| Return Value | Description |
| --- | --- |
| Boolean | _true_: When module is loaded. _false_: When any issue found while loading. |

**Platform Availability**

Available on iOS, Android, Windows, SPA and Desktop Web

### loadFunctionalModuleAsync

The loadFunctionalModuleAsync is an asynchronous API used to load functional module (views and jsModules) in scope of JavaScript. A success callback is invoked after successful completions of load, else error callback will be invoked.

> **_Note:_** If the module is already loaded, then it will call _successcallback_ without loading the same module.

**Syntax**

voltmx.modules.loadFunctionalModuleAsync ([modulename](#modulename_%5BS), [successcallback](#successcallback_), [errorcallback](#errorcallback_))

**Input Parameters**

| Parameter | Description |
| --- | --- |
| modulename \[String\] - Mandatory | Unique name of the module that is defined in the `functionalModules.xml` file |
| successcallback \[Function\] - Mandatory | The callback will be invoked after successful load of module files and after calling corresponding init function, if defined.successcallback (modulename) |
| errorcallback \[Function\] - Mandatory | The callback which will be invoked if there are any issue while loading module files. errorcallback (modulename, errorcode) |

**Example**

```
//In module1 you can load module2 as below when required.	
    var successcalback = function (modulename) {
        //Now we cn access objects defined in module2
        frmLogin.show();
 }
    var errorcalback = function (modulename, errorcode) {
        voltmx.print("error : " + errorcode + " in module - " + modulename);
 }

    function buttonClick() {
        voltmx.modules.loadFunctionalModuleAsync("module2", successcalback, errorcalback);
    }
```

**Error Codes**

1250 – Invalid module name is specified.

1251 – Unable to load module.

**Platform Availability**

Available on iOS, Android, Windows, SPA and Desktop Web.

![](resources/prettify/onload.png)
