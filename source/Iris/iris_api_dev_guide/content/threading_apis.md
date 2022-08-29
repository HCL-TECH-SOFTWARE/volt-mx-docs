                            

You are here: Threading API

Threading API
=============

Threading is a process where multiple threads run at the same time to increase the efficiency of the processor. Using the Threading API, you can run a main thread and a worker thread simultaneously in your JavaScript application.

The Threading API uses `voltmx Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.runOnMainThread](voltmx_functions_threadingapis.md#volt-mx-runonmainthread) | Helps you run the JavaScript code on the main thread. It is an asynchronous API. It posts a message to the main thread to invoke a function f with parameters arguments. |
| [voltmx.runOnWorkerThread](voltmx_functions_threadingapis.md#volt-mx-runonworkerthread) | Provides apps with multithreading capabilities. |

 

Create a Main thread or a UI thread using the[voltmx.runOnMainThread](voltmx_functions_threadingapis.md#volt-mx-runonmainthread) function to run all the operations that involve interaction with the UI. The Worker thread can be created using the [voltmx.runOnWorkerThread](voltmx_functions_threadingapis.md#volt-mx-runonworkerthread) function to run all the background tasks in parallel with the main thread. For example, Garbage collection thread is a worker thread that runs in the background to clear all the unused data in an application.

Guidelines for using Threading API
----------------------------------

To use Threading APIs in Volt MX Iris, follow the guidelines:

*   Threading APIs natively support multi-threading environment.
*   An application can be composed of multiple concurrent threads.
*   The UI or main thread is responsible for dispatching events to the user interface widgets and drawing the elements of the UI.
*   Do not block the UI thread. Performing long operations, like network access or database queries on the UI thread, will block the user interface.
*   Do not access the UI components from outside the UI thread. 
*   JavaScript Thread:
    
    *   Application logic written in JavaScript that does not require UI update executes in a different thread than the Main or UI thread.
    *   Operations that update the UI are posted on to the Main or UI thread.
*   Use the API voltmx.runOnMainThread(function, args) to execute JavaScript bindings and JavaScript logic on UI Thread.

![](resources/prettify/onload.png)
