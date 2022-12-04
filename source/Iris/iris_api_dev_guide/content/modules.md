                            

You are here: Functional Modules API

Functional Modules API
======================

The Functional Modules API is used to load a functional module (that is defined using `functionalModule.xml` file) through synchronous and asynchronous operations dynamically. The Functional Modules API contains the `voltmx.modules Namespace` and the following functions.

  
| Function | Description |
| --- | --- |
| [voltmx.modules.loadFunctionalModule](voltmx.modules_functions.md#loadfunctionalmodule) | A synchronous API used to load functional module (views and jsModules) in scope of JavaScript. |
| [voltmx.modules.loadFunctionalModuleAsync](voltmx.modules_functions.md#loadfunctionalmoduleasync) | Asynchronous API used to load functional module (views and jsModules) in scope of JavaScript. If the module is already loaded, then it will call successcallback without loading the same module. |

 

Load the functional modules (views and js modules) in scope of JavaScript by using the [voltmx.modules.loadFunctionalModule](voltmx.modules_functions.md#loadfunctionalmodule) function. When you reload the modules again, the function returns a Boolean value true. You can also load the function modules by using the [voltmx.modules.loadFunctionalModuleAsync](voltmx.modules_functions.md#loadfunctionalmoduleasync) function. Using this asynchronous function, you can call the success call back or failure call back when you reload the modules again.

![](resources/prettify/onload.png)
