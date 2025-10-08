                            


WorkerThread Object
===================

The WorkerThread object is used to manage a worker thread. For more details, see [Worker Thread API](worker_apis.md).

The WorkerThread Object contains the following API elements.

Methods
-------

The WorkerThread object contains the following methods.

addEventListener
----------------

Event Handlers can be registered using _addEventListener()_ method on the worker Objects and once registered messages and errors from a worker thread can be received in parent thread.

Due to the asynchronous parallel execution nature of the newly created worker thread, which starts executing the worker JS script upon creation. It is always advisable to immediately register the ‘message’ event handler as well as ‘error’ event handler on the worker handle in parent thread context after creation of the worker. This ensures that posted messages or errors in worker scope are handed over to the respective ‘message’ or ‘error’ event listeners in parent scope.

<h3><em>message</em> event handler:</h3>

Registered "message" event handler will be invoked in Parent or Worker thread whenever postMessage() is called from inner scope of Worker or Parent thread.

1.  In parent scope, call to worker._postmessage()_ invokes _message_ event handler registered using _addEventListener()_ in Workers inner Scope.
2.  In worker scope, call to _postmessage()_ invokes _message_ event handler registered using _addEventListener()_ in Parents scope.

Multiple _message_ event handlers can also be registered in parent scope and workers inner scope and all the registered event handlers will be invoked in the registered order whenever a postMessage() is called.

<h3><em>error</em> event listener:</h3>

The _error_ handler can also be registered using _addEventListener_ () in parent thread scope on worker object and as well as in worker thread’s inner scope, which will be invoked whenever an unhandled exception occurs in workers inner scope.

The error event object has the following three fields: message, filename, lineno.

If an _error_ event handler is registered in worker inner scope and in parent scope on the worker object, then both the event handlers are invoked in case of an unhandled exception in worker’s inner scope.

Multiple _error_ event handlers can be registered on the worker handle in parent scope and also in worker threads inner scope. Registered _error_ event handlers will be invoked in the order of registration in case of unhandled exception in worker thread.

If an _error_ event handler is not registered for a worker in parent scope or in worker inner scope and if an unhandled exception arises in worker’s inner scope then worker halts execution and no error info is propagated.

The _error_ event handlers work for unhandled exceptions occurring only in worker scope but not in main parent scope.

<h3>Syntax</h3>

Parent Scope:

`worker.addEventListener(key,listener)`

Worker Scope:

<pre><code style="display:block;background-color:#eee;">addEventListener(key,listener)  
self.addEventListener(key,listener)  
this.addEventListener(key, listener)</code></pre>

<h3>Input Parameters</h3>

  
| Parameter | Description |
| --- | --- |
| key | _message_: When message event handler is being registered. _error:_ When error event handler is being registered. |
| listener | The listener parameter indicates the event listener function to be added. |

 

<h3>Example</h3>

<pre><code style="display:block;background-color:#eee;">//Parent Scope
var worker = new voltmx.worker.WorkerThread("worker1.js");

var evtMessageHandler_1 = function(event) {
    voltmx.print("Parent Scope : In message handler 1");
};
var evtErrorHandler_1 = function(event) {
    voltmx.print("Parent Scope: In error handler 1");

    voltmx.print('ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
};

</code></pre>

<pre><code style="display:block;background-color:#eee;">
//"message" event handler:


//Parent Scope
var worker = new voltmx.worker.WorkerThread("worker1.js");

var evtMessageHandler\_1 = function(event) {
    voltmx.print("Parent Scope : In message handler 1");
};

var evtMessageHandler\_2 = function(event) {
    voltmx.print("Parent Scope : In message handler 2");
};

worker.addEventListener("message", evtMessageHandler\_1);
worker.addEventListener("message", evtMessageHandler\_2);



//Worker Scope
var evtMessageHandler\_1 = function(event) {
    voltmx.print("Worker Scope : In message handler 1");
};

self.addEventListener("message", evtMessageHandler\_1);
//or
this.addEventListener("message", evtMessageHandler\_1);
//or
addEventListener("message", evtMessageHandler\_1);

</code></pre>

<pre><code style="display:block;background-color:#eee;">
//"error" event listener:


//Parent Scope
var worker = new voltmx.worker.WorkerThread("worker1.js");

var evtErrorHandler\_1 = function (event) {
     voltmx.print("Parent Scope: In error handler 1");
            
voltmx.print('ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);

};
  
var evtErrorHandler\_2 = function (event) {
     voltmx.print("Parent Scope: In error handler 2");
};

//
worker.addEventListener("error", evtErrorHandler\_1);
worker.addEventListener("error", evtErrorHandler\_2);



//Worker Scope
var evtErrorHandler\_1 = function (event) {
     voltmx.print("Worker Scope: In error handler 1");
};
  

self.addEventListener("error", evtErrorHandler\_1);

//or
this.addEventListener("error", evtErrorHandler\_1);

//or
addEventListener("error", evtErrorHandler\_1);

</code></pre>


<h3>Return Values</h3>

None

<h3>Exceptions</h3>

<ol>
<li>If no argument is given or if the number of arguments are less than two, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:
<pre><code style="display:block;background-color:#eee;">errorCode: 3001.  
name: "WorkerThreadError".  
message: "addEventListener: MissingMandatoryParameter. Mandatory arguments missing"</code></pre>
</li>
<li>If the first argument is not equal to “message” or “error” and if second argument is not a function object, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:
<pre><code style="display:block;background-color:#eee;">errorCode: 3002.
name: “WorkerThreadError”.
message: “addEventListener: InvalidParameter. Invalid arguments”</code></pre>
</li>
<li>
<p>In Worker scope if these exceptions are not handled and if an “error” event handler is registered in worker’s inner scope or/and in Parent scope for this worker object then it is invoked with an error event object and its message attribute set to following.</p>
<p>In case of exception 1)</p>
<code>message: “addEventListener: MissingMandatoryParameter . Mandatory arguments missing”</code>
<p>In case of exception 2)</p>
<code>message: “addEventListener: InvalidParameter. Invalid arguments”</code>
</li>
<li>In Parent(not a worker to some other parent) scope if these exceptions are not handled registered “error” event handler will not be invoked.</li>
</ol>

<!-- 1.  If no argument is given or if the number of arguments are less than two, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:

<pre><code style="display:block;background-color:#eee;">errorCode: 3001.  
name: "WorkerThreadError".  
message: "addEventListener: MissingMandatoryParameter. Mandatory arguments missing"</code></pre>

2.  If the first argument is not equal to "message" or "error" and if second argument is not a function object, it raises an exception and throws a "VoltMXError" JS Object with the following attributes:

errorCode: 3002.  
name: "WorkerThreadError".  
message: "addEventListener: InvalidParameter. Invalid arguments"

5.  In Worker scope if these exceptions are not handled and if an "error" event handler is registered in worker’s inner scope or/and in Parent scope for this worker object then it is invoked with an error event object and its message attribute set to following.

In case of exception 1)

message: "addEventListener: MissingMandatoryParameter . Mandatory arguments missing"

In case of exception 2)

message: "addEventListener: InvalidParameter. Invalid arguments"

10.  In Parent(not a worker to some other parent) scope if these exceptions are not handled registered "error" event handler will not be invoked. -->

<h3>Platform Availability</h3>

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](worker_apis.md#scope).

* * *

close
-----

Worker thread can be terminated from inner scope of the worker by invoking close(). The worker thread is killed immediately without an opportunity to complete its operations or clean up.

The tasks pending in the message queue and callbacks registered for network, timer APIs etc are discarded without wait until completion.

<h3>Syntax</h3>

Worker Scope:

<pre><code style="display:block;background-color:#eee;">close()  
self.close()  
this.close()</code></pre>

<h3>Input Parameters</h3>

None

<h3>Example</h3>

<pre><code style="display:block;background-color:#eee;">
//worker init

//post a message to parent
self.postMessage("Hello from Worker");

//do some work

//terminate this worker from inner scope
self.close();

</code></pre>

<h3>Return Values</h3>

None

<h3>Platform Availability</h3>

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](worker_apis.md#scope).

Limitations

As the worker threading model is mapped to underlying native threading models in native platforms, there can be some deviations from what specification says, this is due to technical limitations in the underlying platforms which include:

*   When close() is invoked in worker scope, and if worker is currently executing a large task, it might not immediately terminate, it will continue to execute the task to completion and then terminate.
*   When close () is invoked in worker scope, and if there are pending tasks waiting in the message queues for this worker to perform, some platforms might discard all the pending tasks without accepting them for execution and terminate, and on some platform all the pending tasks are executed to completion and then the worker terminates.
*   Hence it is to be noted that to achieve cross platform consistency, it is always advised that close() be invoked in worker scope once all the tasks in message queues are completed.

* * *

postMessage
-----------

postMessage() sends a JSON object or String message to the Parent/worker's scope by invoking respective registered "message" event handlers.

*   In Parent thread scope, call to worker.postMessage() invokes "message" event handler which is registered using addEventListener() in Workers inner Scope.
*   In Worker thread scope, call to postMessage() invokes "message" event handler which is registered using addEventListener() in Parents scope.

The JSON or string object passed to _postMessage()_ is delivered to the registered "message" event handler. The "event" object "data" attribute will have the message passed: "event.data".

Adhering to the JSON standard, the JSON object passed to postMessage() API should be serializeble JSON without opaque object handles or function object handles.

<h3>Syntax</h3>

`postMessage(<String> or <JSON>)`

Parent Scope:

<pre><code style="display:block;background-color:#eee;">//JSON Object  
worker.postMessage({‘msg’ : ‘hello’})

//String  
worker.postMessage("messsage hello")</code></pre>

Worker Scope:

<pre><code style="display:block;background-color:#eee;">//JSON Object  
postMessage({‘msg’ : ‘hello’})

//String  
postMessage("messsage hello")</code></pre> 

<h3>Input Parameters</h3>

| Parameter | Description |
| --- | --- |
| String | For parent scope, here is an example: worker.`postMessage("messsage hello");` For worker scope, here is an example: `postMessage("messsage hello");` |
| JSON Object | For parent scope, here is an example: worker.`postMessage({'msg' : 'hello'});` For worker scope, here is an example: `postMessage({'msg' : 'hello'});` |

<h3>Example</h3>

<pre><code style="display:block;background-color:#eee;">var worker = new voltmx.worker.WorkerThread("worker1.js");

// Parent scope:
//JSON Object
worker.postMessage({
    'msg': 'hello'
});

//String
worker.postMessage('message hello');

// Worker scope: 

//JSON Object
postMessage({
    'msg': 'hello'
});
//or
this.postMessage({
    'msg': 'hello'
});
//or
self.postMessage({
    'msg': 'hello'
});


//String
postMessage('message hello');
//or
this.postMessage('message hello');
//or
self.postMessage('message hello'); </code></pre> 



<h3>Return Values</h3>

None

<h3>Exceptions</h3>

<ol>
<li>If no argument is given it raises an exception and throws a "VoltMXError" JS Object with the following attributes:
<pre><code style="display:block;background-color:#eee;">
errorCode: 3001.  
name: "WorkerThreadError".  
message: "postMessage: MissingMandatoryParameter. Message undefined"</code></pre>
</li>
<li>
If the message argument passed is not String or JSON object, it raises an exception and throws a "VoltMXError" JS Object with the following attributes:
<pre><code style="display:block;background-color:#eee;">errorCode: 3002.  
name: "WorkerThreadError".  
message: "postMessage: InvalidParameter. Invalid Message"</code></pre>
</li>
<li>
<p>In Worker scope if these exceptions are not handled and if an "error" event handler is registered in worker’s inner scope or/and in Parent scope for this worker object then it is invoked with an error event object and its message attribute set to following.</p>
<p>In case of exception 1:</p>
<code>message: "postMessage: MissingMandatoryParameter. Message undefined"</code>
<p>In case of exception 2:</p>
<code>message: "postMessage: InvalidParameter. Invalid Message"</code>
</li>
<li>
In Parent (not a worker to some other parent) scope if these exceptions are not handled registered "error" event handler will not be invoked.
</li>
</ol>
 

<h3>Platform Availability</h3>

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](worker_apis.md#scope).

* * *

removeEventListener
-------------------

This API is used to remove the previously registered _message_ or _error_ event listener that was registered using _addEventListener_().

This API can be used in both parent and worker scope.

<h3>Syntax</h3>

Parent Scope:

worker.removeEventListener(key,listener)

Worker Scope:

removeEventListener(key,listener)  
self.removeEventListener(key,listener)  
this.removeEventListener(key, listener)

<h3>Input Parameters</h3>

key

| Key | Description |
| --- | --- |
| message | In case of message event handler. |
| error | In case of error event handler. |
| listener | The listener parameter indicates the event listener function to be removed. |

 

<h3>Example</h3>

<pre><code style="display:block;background-color:#eee;"> "message" event handler:

//Parent Scopevar worker = new voltmx.worker.WorkerThread("worker1.js");

var evtMessageHandler_1 = function(event) {
    voltmx.print("Parent Scope : In message handler 1");
};

var evtMessageHandler_2 = function(event) {
    voltmx.print("Parent Scope : In message handler 2");
};

//Adding event listeners
worker.addEventListener("message", evtMessageHandler_1);
worker.addEventListener("message", evtMessageHandler_2);

//Removing event listener
worker.removeEventListener("message", evtMessageHandler_2);


//Worker Scope
var evtMessageHandler_1 = function(event) {
    voltmx.print("Worker Scope : In message handler 1");
};

var evtMessageHandler_2 = function(event) {
    voltmx.print("Worker Scope : In message handler 2");
};

//Adding event listeners
self.addEventListener("message", evtMessageHandler_1);
self.addEventListener("message", evtMessageHandler_2);

//Removing event listener
self.removeEventListener("message", evtMessageHandler_2);</code></pre>

<pre><code style="display:block;background-color:#eee;"> "error" event listener:

//Parent Scope
var worker = new voltmx.worker.WorkerThread("worker1.js");

var evtErrorHandler\_1 = function(event) {
    voltmx.print("Parent Scope: In error handler 1");
};

var evtErrorHandler\_2 = function(event) {
    voltmx.print("Parent Scope: In error handler 2");
};

//adding event listeners
worker.addEventListener("error", evtErrorHandler\_1);
worker.addEventListener("error", evtErrorHandler\_2);

//removing event listener
worker.removeEventListener("error", evtErrorHandler\_2);


//Worker Scope
var evtErrorHandler\_1 = function(event) {
    voltmx.print("Worker Scope: In error handler 1");
};

var evtErrorHandler\_2 = function(event) {
    voltmx.print("Worker Scope: In error handler 2");
};

//adding event listeners
self.addEventListener("error", evtErrorHandler\_1);
self.addEventListener("error", evtErrorHandler\_2);

//removing event listener
self.removeEventListener("error", evtErrorHandler\_2);</code></pre>

<h3>Exceptions</h3>

<ol>
<li>If no argument is given or if the number of arguments are less than two, it raises an exception and throws a "VoltMXError" JS Object with the following attributes:
<pre><code style="display:block;background-color:#eee;">errorCode: 3001.  
name: "WorkerThreadError".  
message: "removeEventListener: MissingMandatoryParameter. Mandatory arguments missing"</code></pre>
</li>
<li>If the first argument is not equal to "message" or "error" and if second argument is not a function object, it raises an exception and throws a "VoltMXError" JS Object with the following attributes:
<pre><code style="display:block;background-color:#eee;">errorCode: 3002.  
name: "WorkerThreadError".  
message: "removeEventListener: InvalidParameter. Invalid arguments"</code></pre>
</li>
<li>
<p>In Worker scope if these exceptions are not handled and if an "error" event handler is registered in worker’s inner scope or/and in Parent scope for this worker object then it is invoked with an error event object and its message attribute set to following.</p>
<p>In case of exception 1:</p>
<code>message: "removeEventListener: MissingMandatoryParameter. Mandatory arguments missing"</code>
<p>In case of exception 2:</p>
<code>message: "removeEventListener: InvalidParameter. Invalid arguments"</code>
</li>
<li>In Parent(not a worker to some other parent) scope if these exceptions are not handled registered "error" event handler will not be invoked.</li>
</ol>


<h3>Platform Availability</h3>

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](worker_apis.md#scope).

* * *

terminate
---------

When called from parent scope immediately terminates the worker. This does not offer the worker an opportunity to finish its operations. It is simply stopped at once.

The tasks pending in the message queue and callbacks registered for network, timer APIs are discarded without wait until completion.

<h3>Syntax</h3>

worker.terminate()

<h3>Input Parameters</h3>

None

<h3>Example</h3>

<pre><code style="display:block;background-color:#eee;">var worker = new voltmx.worker.WorkerThread("worker1.js");

//Post a message to the worker
worker.postMessage("Hello from Parent");

//Terminate the worker
worker.terminate();</code></pre>

<h3>Return Values</h3>

None

<h3>Platform Availability</h3>

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](worker_apis.md#scope).

<h3>Limitations</h3>

As the worker threading model is mapped to underlying native threading models in native platforms, there can be some deviations from what specification says, this is due to technical limitations in the underlying platforms which include:

*   When terminate() is invoked in Parent thread on worker, and if worker is currently executing a large task, it might not immediately terminate, it will continue to execute the task to completion and terminate.
*   When terminate() is invoked in Parent thread on worker, and if there are pending tasks waiting in the message queues for this worker to perform, some platforms might discard all the pending tasks without accepting them for execution and terminate, and on some platform all the pending tasks are executed to completion and then the worker terminates.
*   Hence it is to be noted that to achieve cross platform consistency, it is always advised that terminate() be invoked on the worker once all the tasks in message queues are completed.

![](resources/prettify/onload.png)
