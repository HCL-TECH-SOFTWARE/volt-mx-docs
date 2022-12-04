
You are here: Worker Thread API

# Worker Thread API

Worker threads are a means to execute different tasks in multiple parallel contexts of execution in a concurrent manner, which can take advantage of multiprocessor and multithreaded environments as well as to keep UI Thread in Application responsive by delegating or offloading work which need not be handled in UI Main thread, to a different secondary thread.

Worker thread is a continuous parallel thread that runs and accepts messages until the time it is explicitly closed or terminated. Messages to a worker thread can be sent from the parent thread or its child worker threads. Through out this document, parent thread is referred as thread where a worker thread is spawned.

Worker can have logic that gets executed parallel for each of the messages that it receives. If worker thread is busy handling messages, incoming messages that it receives will be queued for processing.

Sharing data between parent thread and worker threads is done through message passing and by default variables, functions, or state is not shared.

The current specification is inspired from and based on HTML5 Web Worker threads standard, that use _Message Passing_ model or mechanism for communication between threads.

<blockquote><em>Note:</em> To use AWS in workerthreads, you must follow these steps.
<ol>
<li>Copy all AWS related files from <b>&lt;workspace&gt;</b>/<b>&lt;appname&gt;</b>/<b>cloudsdks</b> folder into the <b>&lt;workspace&gt;</b>/<b>&lt;appname&gt;</b>/<b>workerthreads</b> folder of the project. This is because while importing the AWS files using Iris, the Volt MX HttpRequest and DOMParser related code are added to the AWS files. These modified files are then saved in the <b>cloudsdks</b> folder by Iris.</li>
<li>After the files have been copied, use the <code>require(&lt;aws files&gt;)</code>code in the workerthread.js file to import all the AWS files into worker threads context.<br/>AWS objects must be created in the worker thread. Any object created in the regular thread will not work in the worker thread.</li>
</ol>
</blockquote>   

The Worker Thread API contains the following API Elements:

[voltmx.worker Namespace](voltmx.worker_functions.md)

| Function                                                                                    | Description                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [voltmx.worker.hasWorkerThreadSupport](voltmx.worker_functions.md#hasWorkerThreadSupport) | Determines whether the current platform environment has worker thread support.                          |
| [voltmx.worker.WorkerThread](voltmx.worker_functions.md#WorkerThread)                     | Creates a WorkerThread object and returns a handle to it. The worker object represents a worker thread. |

[WorkerThread Object](workerthreadobject_methods.md)

| Method                                                                     | Description                                                                                                                                                                                |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [addEventListener](workerthreadobject_methods.md#addeventlistener)       | Event Handlers can be registered using _addEventListener()_ method on the worker Objects and once registered messages and errors from a worker thread can be received in parent thread.    |
| [close](workerthreadobject_methods.md#close)                             | Worker thread can be terminated from inner scope of the worker by invoking close(). The worker thread is killed immediately without an opportunity to complete its operations or clean up. |
| [postMessage](workerthreadobject_methods.md#postmessage)                 | postMessage() sends a JSON object or String message to the Parent/worker's scope by invoking respective registered "message" event handlers.                                               |
| [removeEventListener](workerthreadobject_methods.md#removeeventlistener) | removeEventListener() is used to remove the previously registered _message_ or _error_ event listener that was registered using _addEventListener_().                                      |
| [terminate](workerthreadobject_methods.md#terminate)                     | When called from parent scope immediately terminates the worker. This does not offer the worker an opportunity to finish its operations. It is simply stopped at once.                     |

<h2>Scope</h2>
<ol type="1">
<li>&lt;Volt MX Iris platform version &gt;= 9.2</li>
<!-- <li>&lt;Volt MX Iris platform version &gt;= 5.6.2.</li> -->
<li>Support for JavaScript.</li>
<li>Supported mobile Platforms:
<ul>
<li>iOS</li>
<li>Android</li>
<li>SPA: Supported List of browsers starting from versions.</li>
</ul>
</li>
<li>Supported List of Browsers:
<p style="margin-left:15px;"><b>SPA</b></p>
<table style="margin-left:20px;">
<tr>
<th>iOS</th>
<th>Android Native</th>
<th>Android Chrome</th>
<th>Windows</th>
</tr>
<tr>
<td>5.0-5.1</td>
<td>4.4</td>
<td>33.0</td>
<td>10</td>
</tr>
</table>
<p style="margin-left:15px;"><b>DesktopWeb</b></p>
<table style="margin-left:20px;">
<tr>
<th>IE</th>
<th>Firefox</th>
<th>Chrome</th>
<th>Safari</th>
</tr>
<tr>
<td>10.0</td>
<td>4.0</td>
<td>20</td>
<td>5.0</td>
</tr>
</table>
</li>
<li>Windows</li>
</ol>

## Introduction to Constructor - WorkerThread()

- The _WorkerThread()_ constructor creates and returns the handle to the newly created worker thread. The new worker thread can be used by the Parent thread for any further communication with the worker thread.
- To create a worker thread, it requires a JavaScript file name or a functional module name. The _WorkerThread()_ constructor is invoked with the JavaScript file or a functional module name as its only argument and a worker thread instance is then created and returned.
- Worker threads may in turn initiate new worker threads.
- If a Javascript file name with ".js" extension is passed as _WorkerThread()_ constructor argument, it looks up only in the `workerthreads` directory in `modules/js` path and loads if the file is found. This holds good for functional modules based projects as well as non-functional modules based projects.
- If a function module name is provided as an argument for _WorkerThread()_ constructor, in case of functional modules based project then the module will be loaded if found in the modules listing.

### Worker Thread Scenarios

The scenarios of using _WorkerThread()_ constructor are as follows:

- The _WorkerThread()_ constructor creates a new worker thread and returns a handle to the new worker thread, which can be used by the parent thread for any further communication with the worker thread.<br/>
  Creating a worker thread requires a JavaScript file name or a functional module name. The _WorkerThread()_ constructor is invoked with the JavaScript file or a functional module name as its only argument and a worker thread instance is then created and returned:
  <pre><code style="display:block;background-color:#eee;">
  var worker = new voltmx.worker.WorkerThread('helper.js');
  var worker = new voltmx.worker.WorkerThread('functionModuleName');
  </code></pre>
- A _message_ event handler can be registered with the worker by parent thread to receive messages from the worker thread.

  <code> worker.addEventListener("message", function (event) { ... }); </code>

- To send data from parent to a worker, _postMessage()_ method can be used from parent.

  <code> worker.postMessage({ operation: 'find-edges', input: 'buffer', threshold: 0.6 } );</code>

- To send messages back from worker thread to parent thread scope, _postMessage()_ can be used.

  <code> postMessage({'msg':'Data'});</code>

- To receive a messages inside the worker thread from parent thread, the _message_ event handler can be registered using _addEventListener()_ inside worker thread.

  <code> self.addEventListener( "message", function (event) { ... });</code>

### Worker Thread Life Cycle

The following steps provide the work flow to use worker thread:

1.  Call to Worker constructor will create a new Worker instance and a new parallel execution environment context is created, and immediately starts execution in the new parallel thread of control in an asynchronous manner. In this new thread, first the Worker will try to load the ‘workerjs’ script.
2.  As a result of the asynchronous parallel nature of execution in worker thread context, invocation of Worker constructor call in Parent thread will return a new Worker instance handle and Parent proceeds with execution of next instructions.
3.  Every Worker thread will have its own event loop which takes care of the execution of all the received message tasks which are queued for this worker in that order until ‘self.close()’ in worker scope or ‘worker.terminate()’ in parent worker scope are invoked.
4.  From the moment of successful creation of worker thread and until ‘self.close()’ in worker scope or ‘worker.terminate()’ in parent worker scope are invoked, the worker thread will be alive and can receive and process messages which are sent to this worker form its parent or from its child workers if created, as well as it can send messages using postMessage() to its parent thread and its child worker threads if created.

## message event handler

"message" event handler receives an "event" object which contains the JSON or string message that is passed to postMessage() during invocation and the same message can be accessed from its "event.data" field. The data passed to postMessage() should be a String or JSON object.

Adhering to the JSON standard, the JSON object passed to postMessage() API should be serializable JSON without opaque object handles or function object handles etc. The data which is passed between the parent thread and worker thread using postMessage() API are copied, not shared, so the end result is that a duplicate is created on each end.

Multiple "message" event handlers can also be registered in Parent scope and in workers inner scope and all the registered event handlers will be invoked in the registered order whenever a postMessage() is called.

### Syntax

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">function(event) { });</code></pre>

### Input Parameters

String / JSON Object

- "message" event handler receives an "event" object which contains the JSON or string message that is passed to postMessage() during invocation and the same message can be accessed from its "event.data" field.
- The data passed to postMessage() should be a String or JSON object.
- Adhering to the JSON standard, the JSON object passed to postMessage() API should be serializable JSON without opaque object handles or function object handles etc.
- The data which is passed between the parent thread and worker thread using postMessage() API are copied, not shared, so the end result is that a duplicate is created on each end.
- Multiple "message" event handlers can also be registered in Parent scope and in workers inner scope and all the registered event handlers will be invoked in the registered order whenever a postMessage() is called.

### Example

```

var evtMessageHandler_1 = function(event) {
//In case of JSONvoltmx.print ("Received message :" + event.data["msg"]);"

//In case of string
voltmx.print ("Received message :" + event.data);
};

```

### Platform Availability

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](#scope).


## Importing scripts

Worker threads can use importScripts() function to import external scripts their scope by providing the JS file name to import. This method takes one or more JavaScript file names to import.

This API is only available in worker thread scope and not in main parent thread scope.

In case of Functional modules based project " voltmx.modules.loadFunctionalModule()" API can be used to import a functional module into workers scope. Refer [Functional Modules](modules.md) specification document for usage help on loadFunctionalModule() API.

importScripts() if invoked with .js file, looks up only in the "workerthreads" directory under "modules/js/" in Volt MX Iris IDE Project structure to import scripts into workers scope. This holds good for both functional modules based projects and non-functional modules based projects.

In case of loading multiple files using importScripts(), if an error occurs while loading one of the script, then the remaining scripts are not loaded into context scope.

For more information on Functional Module APIs, refer [Functional Modules APIs](modules.md).

### Syntax

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">importScripts(".js_file_name");</code></pre>

or

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">importScripts("functional_module_name");</code></pre>

### Input Parameters

JSFileNames \[Object\]

or

Functional_Module_Name \[Object\]

- One or more comma separated list of JavaScript file names.

### Example

```

importScripts("Utility.js"); // loads Util.js

importScripts("Utility1.js", "Utility2.js", "Utility3.js");

```

### Return Values

None

### Exceptions

> **_Note:_** If no argument is given, no exception is raised and it does nothing.

When an error is encountered, the VoltMXError JS object is thrown with the following information:

| Error Code | Name              | Message                                                                | Reason                                                                  |
| ---------- | ----------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 3002       | WorkerThreadError | importScripts: InvalidParameter. Invalid script name                   | This exception occurs when the argument passed is not a string.         |
| 3002       | WorkerThreadError | importScripts: InvalidParameter. Unable to import script. <scriptname> | This exception occurs when it is unable to find and load the JS script. |

- In worker scope, if these exceptions are not handled and if an _error_ event handler is registered in worker’s inner scope or/and in parent scope for this worker object, then it is invoked with an error event object and its message attribute is set as follows:

  > Exception 1 - message: "importScripts: InvalidParameter. Invalid script name"
  >
  > Exception 2 - message: "importScripts: InvalidParameter. Invalid script name"

Differences in behavior of _importScripts_() and _[\_voltmx.modules.loadFunctionalModule_()](voltmx.modules*functions.md#loadfunctionalmodule)* API with respect to Functional Modules:

| Without Functional Modules                                                                                                                         | With Functional Modules                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| From inside Worker context if importScripts() is used to import external JS scripts the search criteria would be : only "workerthreads" directory. | From inside Worker context if importScripts() is used to import external JS scripts the search criteria would be : only "workerthreads" directory.                                                       |
| voltmx.modules.loadFunctionalModule() function cannot be used in workers scope to load any FunctionalModule.                                       | [voltmx.modules.loadFunctionalModule()](voltmx.modules_functions.md#loadfunctionalmodule) function can be used in workers scope to load any JavaScript script which is part of some Functional Module. |

### Platform Availability

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](#scope).

## Using Worker Threads Feature

The following topics helps you to use the worker thread feature:

- [](#getMonit2)[Communicating and Data Processing Between Threads](#communicating-and-data-processing-between-threads)
- [](#getRange)[Nesting of Threads and Performing Parallel Tasks](#nesting-of-threads-and-performing-parallel-tasks)
- [Scope Rules and Supported APIs](#scope-rules-and-supported-apis)
- [FFI and Custom Widgets](#ffi-and-custom-widgets)
- [Guidelines and Limitations](#guidelines-and-limitations)
- [Debugger Support](#debugger-support)

### Communicating and Data Processing Between Threads

Main.js

```
//create new worker
var worker = new voltmx.worker.WorkerThread('1_worker.js');

//invoked when worker calls postmessage() from its inner scope
worker.addEventListener("message", function (event) {
voltmx.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
});

voltmx.print('Parent Scope : Invoking worker.postmessage()');
//will invoke worker's inner scope onmessage()
worker.postMessage({
'message': 'Hello World From Parent'
});
```

1_worker.js

```
//workers inner scope
//invoked when Parent calls worker.postmessage()
self.addEventListener("message", function (event) {
voltmx.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
//call func
do_something_in_worker();
});

function do_something_in_worker() {
voltmx.print('Worker Scope : invoking postMessage()');
//will invoke Parent worker.onmessage()
postMessage({
'message': "Hello World From Worker "
});
};
```

Expected Output

```
"Parent Scope: Invoking worker.postmessage()"
"Worker Scope: onmessage : event.data : " "Hello World From Parent"
"Worker Scope: invoking postMessage()"
"Parent Scope: onmessage : event.data : " "Hello World From Worker "
```

Explanation

1.  In Parent Scope: Creates new worker using new _voltmx.worker.WorkerThread_ ()
2.  In Parent Scope: Call to _worker.postMessage_() invokes _message_ event handler registered using _addEventListener_() in worker threads inner scope.
3.  In Worker Scope: Call to _postMessage_() invokes _message_ event handler registered using _addEventListener_() in the parent thread scope.

### Nesting of Threads and Performing Parallel Tasks

Main.js

```
try {
voltmx.print("Parent Scope: Init test_case_parent_thread()");
voltmx.print("Parent Scope: In try block");

    //create new voltmx.worker.WorkerThread
    var worker = new voltmx.worker.WorkerThread('WorkerThread.js');

    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function (event) {
        voltmx.print('Parent Scope : onmessage : event.data : ' + event.data);
    });

    worker.postMessage("Hello from Parent");

} catch (err) {
voltmx.print("Parent Scope: In Catch block");

}

//invoke a function  
invoke_timer_task();

//
function invoke_timer_task() {
voltmx.print("Parent Scope :- voltmx.timer.schedule - ");

    var timerId = "mytimer12111";
    var i = 0;

    function timerFunc() {

        i++;
        voltmx.print("Parent Scope :- voltmx.timer.schedule - In timerFunc() : " + i);
        if (i > 20) {
            voltmx.print("Parent Scope :- voltmx.timer.schedule - Stopping timer : ");
            voltmx.timer.cancel(timerId);
        }
    };

    //
    voltmx.timer.schedule(timerId, timerFunc, 1, true);
    voltmx.print("Parent Scope :- voltmx.timer.schedule - Done");

};
voltmx.print("Parent Scope: Exit test_case_parent_thread()");
```

WorkerThread.js

```
//worker
//workers inner scope

voltmx.print("Worker Scope: Init");

var worker = new voltmx.worker.WorkerThread('WorkerThread2.js');

//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
voltmx.print('Worker Scope : onmessage : event.data : ' + event.data);
});

self.postMessage("Hello from Worker");
//
invoke_timer_task();

//
function invoke_timer_task() {
voltmx.print("Worker Scope :- voltmx.timer.schedule - ");

    var timerId = "mytimer121";
    var i = 0;

    function timerFunc() {

        i++;
        voltmx.print("Worker Scope :- voltmx.timer.schedule - In timerFunc() : " + i);


        if(i > 20) {
            voltmx.print("Worker Scope :- voltmx.timer.schedule - Stopping timer : ");
            voltmx.timer.cancel(timerId);
        }
    };
    //
    voltmx.timer.schedule(timerId,timerFunc, 1, true);
    voltmx.print("Worker Scope :- voltmx.timer.schedule - Done");

};
voltmx.print("Worker Scope: Loading done");

```

WorkerThread2.js

```
//Grand child worker2 – nested worker
//workers inner scope

voltmx.print("Grand child: Worker2 Scope: Init");

//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
voltmx.print('Grand child: Worker2 Scope : onmessage : event.data : ' + event.data);
});

self.postMessage("Hello from Worker2");
//
invoke_timer_task();

//
function invoke_timer_task () {
voltmx.print("Grand child: Worker2 Scope :- voltmx.timer.schedule - ");

    var timerId = "mytimer1211";
    var i = 0;

    function timerFunc()
    {
        i++;
        voltmx.print("Worker2 Scope :- voltmx.timer.schedule - In timerFunc() : " + i + " : Grand child ");

        if(i > 20) {
            voltmx.print("Grand child: Worker2 Scope :- voltmx.timer.schedule - Stopping timer : ");
            voltmx.timer.cancel(timerId);
        }
    };

    //
    voltmx.timer.schedule(timerId,timerFunc, 1, true);
    voltmx.print("Grand child: Worker2 Scope :- voltmx.timer.schedule - Done");

};
voltmx.print("Grand child: Worker2 Scope : Loading done");

```

### Scope Rules and Supported APIs

Global resources in the App context will not be available in the worker thread context as it can lead to Race conditions since no locking mechanisms are provided.

Every worker has its own context of execution, which is not shared between the parent and its worker. As a result the global variables in parent scope are not available in worker scope and vice versa.

<table border="1">
<tr>
<th>Not Supported APIs</th>
<td>
<ul>
<li>VoltMX UI APIs and UI object handles</li>
<li>App Global variables</li>
</ul>
</td>
</tr>
<tr>
<th>Supported APIs and Platform</th>
<td>
<table border="1">
<tr>
<th>String API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td>SPA</td>
<td>Desktop Web</td>
</tr>
<tr>
<th>Math API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td>SPA</td>
<td>Desktop Web</td>
</tr>
<tr>
<th>Table API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td>SPA</td>
<td>Desktop Web</td>
</tr>
<tr>
<th>Standard Volt MX API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td colspan=2>
<p></p>
<p>Limited Availability</p>
<p> For SPA and Desktop Web, the following APIs are supported:</p>
<ul>
<li>voltmx.convertToBase64</li>
<li>voltmx.convertToRawBytes</li>
<li>voltmx.type</li>
<li>voltmx.props.getProperty</li>
<li>voltmx.print() is not supported in Safari</li>
<li>voltmx.print() is supported in Mozilla from version 29.0.</li>
</ul>
</td>
</tr>
<tr>
<th>Network API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td colspan=2>
<p></p>
<p>For SPA and DesktopWeb: </p>
<p>Limited Availability</p>
<ul>
<li>The following API will not be available in SPA & Desktop Web: voltmx.net.setNetworkCallbacks</li>
</ul>
</td>
</tr>
<tr>
<th rowspan=2>Offline Data Access API</th>
<td>Local Storage</td>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
</tr>
<tr>
<td>Web SQL</td>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td>SPA and DesktopWeb</td>
</tr>
<tr>
<th>Operating System API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td colspan=2>
<p></p>
<p> For SPA and Desktop Web, the following APIs are NOT supported:</p>
<ul>
<li>voltmx.os.addHiddenField</li>
<li>voltmx.os.readHiddenField</li>
<li>voltmx.os.startSecureTransaction</li>
<li>voltmx.os.endSecureTransaction</li>
<li>voltmx.os.getAppContext</li>
<li>voltmx.os.hasAccelerometerSupport</li>
<li>voltmx.os.deviceInfo</li>
<li>voltmx.os.deviceInfo().httpheaders</li>
<li>voltmx.os.addMetaTag</li>
<li>voltmx.os.removeMetaTag</li>
<li>voltmx.os.removeAllMetaTags</li>
<li>voltmx.os.hasGPSSupport</li>
<li>voltmx.os.hasCameraSupport</li>
<li>voltmx.os.hasTouchSupport</li>
<li>voltmx.os.hasOrientationSupport</li>
<li>voltmx.os.getDeviceCurrentOrientation</li>
<li>voltmx.os.print</li>
</ul>
</td>
</tr>
<tr>
<th>Cryptography API</th>
<td>iOS</td>
<td>Android</td>
<td>Windows</td>
<td colspan=2>
<p></p>
<p>For SPA and Desktop Web, the following APIs are NOT supported:</p>
<ul>
<li>voltmx.crypto.saveKey</li>
<li>voltmx.crypto.deleteKey</li>
<li>voltmx.crypto.readKey</li>
</ul>
</td>
</tr>
</table>
</td>
</tr>
</table>

### FFI and Custom Widgets

With and without Functional Module in Worker context:

<table>
<tr>
<th></th>
<th>iOS</th>
<th>Android</th>
<th>Windows</th>
<th>SPA</th>
</tr>
<tr>
<th>FFI</th>
<td colspan=4>Platform will load modules by default</td>
</tr>
<tr>
<th>Custom Widgets</th>
<td colspan=4>No need to load Custom Widgets in worker scope.</td>
</tr>
</table>

### Guidelines and Limitations

The following guidelines are recommended before using worker thread:

1.  The objects "this" and "self" are available in worker thread inner scope that is referred as worker thread itself.
2.  Event propagation cannot be stopped by using _event.stopPropagation_]() as in.md specification. Where _event.stopPropagation_() stops the DOM event to be propagated further by breaking the event chain.
3.  Data passed between the main thread and workers are copied, but not shared. Objects are serialized as they are handed to the worker, and subsequently, de-serialized on the other end. The main thread and worker do not share the same instance. So the end result is that a duplicate is created on each end. HTML5 worker threads support transferable objects that allow transferring the objects from one thread to other without making a copy.
4.  As explicit thread synchronization mechanisms like locking or mutexes are not available in JS environment, you must take required care in scenarios where multiple threads concurrently or simultaneously are trying to access and write/insert data into local database or local datastore using WebSQL or Local datastore APIs, as these are shared resources across the Application context.

    - The outcome of these simultaneous or concurrent accesses to database/datastore might push the database/datastore to inconsistent state and is dependent on the individual platforms WebSQL or DataStore implementations. It is always suggested to avoid such scenarios of multiple threads accessing the database/datastore simultaneously/concurrently.

**Limitations in SPA and DesktopWeb:**

1.  Nested Workers support will be available only if they are supported by the underlying browser platforms.
2.  Error event messages in error event handler sometimes might be appended with extra prefix or suffix string messages from underlying browsers (like Uncaught, Uncaught error etc).
3.  Even though error event handler is invoked in case of unhandled exceptions, the same event messages might also be logged on browser console.
4.  Line number, file name populated in error event object passed to error event handler might be different from user defined files.

> **_Note:_** For SPA and Desktop Web, nested workers are not supported in Google Chrome.

**terminate API**

As the worker threading model is mapped to underlying native threading models in native platforms, there can be some deviations from what specification says, this is due to technical limitations in the underlying platforms which include:

1.  If terminate() is invoked in Parent thread on worker, and if worker is currently executing a large task, it might not immediately terminate, it will continue to execute the task to completion and terminate.
2.  If terminate() is invoked in Parent thread on worker, and if there are pending tasks waiting in the message queues for this worker to perform, some platforms might discard all the pending tasks without accepting them for execution and terminate, and on some platform all the pending tasks are executed to completion and then the worker terminates.
3.  It is to be noted that to achieve cross platform consistency, it is always advised that terminate() be invoked on the worker once all the tasks in message queues are completed.

**close API**

1.  As the worker threading model is mapped to underlying native threading models in native platforms, there can be some deviations from what specification says, this is due to technical limitations in the underlying platforms which include:
2.  When close() is invoked in worker scope, and if worker is currently executing a large task, it might not immediately terminate, it will continue to execute the task to completion and then terminate.
3.  When close () is invoked in worker scope, and if there are pending tasks waiting in the message queues for this worker to perform, some platforms might discard all the pending tasks without accepting them for execution and terminate, and on some platform all the pending tasks are executed to completion and then the worker terminates.
4.  Hence it is to be noted that to achieve cross platform consistency, it is always advised that close() be invoked in worker scope once all the tasks in message queues are completed.

<!-- ### Debugger Support

Debugger support for worker threads is not available in 5.6.2 release. -->

### Worker Life Cycle Notes

Following are some worker life cycle notes:

- Call to Worker constructor will create a new Worker instance and a new parallel execution environment context is created, and immediately starts execution in the new parallel thread of control in an asynchronous manner. In this new thread, first the Worker will try to load the ‘workerjs’ script.
- As a result of the asynchronous parallel nature of execution in worker thread context, invocation of Worker constructor call in Parent thread will return a new Worker instance handle and Parent proceeds with execution of next instructions.
- Every Worker thread will have its own event loop which takes care of the execution of all the received message tasks which are queued for this worker in that order until ‘self.close()’ in worker scope or ‘worker.terminate()’ in parent worker scope are invoked.
- From the moment of successful creation of worker thread and until ‘self.close()’ in worker scope or ‘worker.terminate()’ in parent worker scope are invoked, the worker thread will be alive and can receive and process messages which are sent to this worker form its parent or from its child workers if created, as well as it can send messages using postMessage() to its parent thread and its child worker threads if created.
- In worker thread scope when there is no "message" event handler registered which indicates that no tasks can be posted or queued by parent for this worker, and if no callbacks are registered in this worker scope for network, timer APIs etc, then after postMessage() call in Workers inner scope if any, worker can terminate itself without worker.terminate() being called in Parent scope or self.close() called in inner scope.
- In case of orphaned threads if no tasks are queued in message handler and if the worker is not waiting for any callbacks to be returned from network, timer APIs etc then the orphaned thread can be terminated.
- If Parent stops either due to unhandled exception raised in it scope, Worker threads still continues to exist and execute.

---

![](resources/prettify/onload.png)
