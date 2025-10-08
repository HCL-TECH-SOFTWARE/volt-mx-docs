                            


voltmx.worker Namespace
=====================

The voltmx.worker namespace implements the [Worker Thread API](worker_apis.md). It contains the following API elements.

Functions
---------

The voltmx.worker namespace provides the following functions.


<details close markdown="block"><summary>voltmx.worker.hasWorkerThreadSupport</summary> 

* * *

This API is used during runtime only in parent scope to determine whether the current platform environment has worker thread support.

This API is most useful in case of SPA and Desktop Web platforms where runtime query can be made to determine whether a browser environment supports Worker Threads or not.

### Syntax

```

voltmx.worker.hasWorkerThreadSupport()
```

### Input Parameters

None

### Example

```

var hasWorkerSupport = voltmx.worker.hasWorkerThreadSupport();
if (hasWorkerSupport) {
    var worker = new voltmx.worker.WorkerThread("worker1.js");

    //do something
} else {
    //workers not supported
}
```

### Return Values

  
| Return Value | Description |
| --- | --- |
| Boolean | _true_: When worker thread support is present. _false_: When worker thread support is not present. |

### Platform Availability

Available for iOS, Android, Windows, SPA, and Desktop Web. For more information, see [Scope](worker_apis.md#scope).

</details>
<details close markdown="block"><summary>voltmx.worker.WorkerThread</summary> 

* * *

The voltmx.worker.WorkerThread function creates a WorkerThread object and returns a handle to it. The worker object represents a worker thread.

### Syntax

```

voltmx.worker.WorkerThread(  
    workerjs);
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| workerjs | A string that contains either the name of javascript file name or functional module name which contains worker thread code. |

 

### Example

```

try {

    var worker = new voltmx.worker.WorkerThread("worker1.js");

} catch (e) {

    var err = voltmx.getError(e);

    if (err instanceof VoltMXError) {

        voltmx.print("VoltMXError Catch : " + JSON.stringify(err));

    }

}
```

### Return Values

Returns a `WorkerThread` object.

### Exceptions

| Error Code | Name | Message | Reason |
| --- | --- | --- | --- |
| 3001 | WorkerThreadError | WorkerThread: MissingMandatoryParameter. Failed to construct WorkerThread | If no argument is given to this function, this exception is thrown and `workerThread` object is not created. |
| 3002 | WorkerThreadError | WorkerThread: InvalidParameter. Invalid script name | If the `workerjs` argument is not a string, then this exception is thrown and `workerThread` object is not created. |

 

*   If the script or module specified by the `workerjs` argument is not found, and if an error event handler is registered for this `WorkerThread` object in the parent scope, then the error event handler is invoked with an error object and its `message` attribute set to following.
    
    > message:"WorkerThread: InvalidParameter. WorkerThread script not found"
    > 
    > *   In this error scenario no ‘VoltMXError’ exception will be raised.
    > *   Also the `filename`, `lineno` properties in the error event object for this error scenario have undefined values.
    
*   If multiple arguments are provided separated by a comma, the first argument is considered as the `workerjs` filename or module name and rest all are ignored.

### Platform Availability

Available for iOS, Android, Windows, SPA, and Desktop Web.

</details>

![](resources/prettify/onload.png)
