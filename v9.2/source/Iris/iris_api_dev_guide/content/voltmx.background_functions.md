                             


voltmx.backgroundtasks Namespace
==============================

The voltmx.backgroundtasks namespace provides the functions to start and stop the background task, and also to get the task details. It contains the following API elements.

Functions
---------

The voltmx.backgroundtasks namespace contains the following functions.


<details close markdown="block"><summary>voltmx.backgroundtasks.getTaskDetails</summary>

Returns the task details of already registered background task.

### Syntax

voltmx.backgroundtasks.getTaskDetails()

### Input Parameters

None

### Example

```

function getbackgroundtask() {
    try {
        var taskdetails = voltmx.backgroundtasks.getTaskDetails();
        alert(taskdetails);
    } catch (err) {
        alert("Stopping the background task is failed with error: " + err);
    }
}
```

### Return Values

taskdetails \[dictionary\]

Contains the following task details:

  
| Return Value | Description |
| --- | --- |
| ExpirationTime | Time at which the task expires. |
| isRegistered | The scheduled status of the action. |
| LastExitReason | Reason for the agent exited last time when the action executed. |
| LastScheduledTime | The time of the last scheduled action. The time is of the device's local time. |

 
### Exception
1900 - miscellaneous error.

### Platform Availability

Available on Windows.

</details>
<details close markdown="block"><summary>voltmx.backgroundtasks.startTask</summary>

Registers a scheduled action with the Operating System.

### Syntax

voltmx.backgroundtasks.startTask(tasksettings, onsuccesscallback, onfailurecallback)

### Input Parameters

tasksettings \[dictionary\] - Mandatory

Specifies a task that must be set as a background agent of the application. You can define the task settings using the following arguments:


| Parameter | Description |
| --- | --- |
| isOneTime | Sets the task should be scheduled once or not. Set to true if you want the task to be triggered only once. Set to false if you want the task to be triggered each time refreshDuration elapses. |
| refreshDuration | Specifies the number of minutes to wait to schedule the background task. The system schedules the task within 15 minutes after refreshDuration elapses. The refreshDuration argument is considered when the isOneTime argument is set to false. If the refreshDuration is set to less than 15 minutes, an exception is thrown when attempting to register the background task. |
| onsuccesscallback \[Function\] - Mandatory | The platform calls the callback when an agent is set successfully. You can define your function in the callback that you want to be executed when the setting the agent is successful. > function successCallback(){ //code} |
| onfailurecallback \[Function\] - Mandatory | The platform calls the callback when an agent is failed to set. You can define your function in the callback that you want to be executed when the setting the agent is failure. > function unsuccessfulCallback(){ //code} |

### Example

```

function setbackgroundtask() {
    try {
        var taskSettings = {};
        voltmx.backgroundtasks.startTask(taskSettings onsuccesscallback,
            onfailurecallback);
    } catch (err) {
        alert("Exception in startTask: " + err);
    }
}
```

### Return Values

None

### Exception

1900 - miscellaneous error.

### Platform Availability

Available on Windows.

</details>
<details close markdown="block"><summary>voltmx.backgroundtasks.stopTask</summary>

Unregisters the already registered scheduled action with the Operating System.

### Syntax

voltmx.backgroundtasks.stopTask()

### Input Parameters

None

### Example

```

function removebackgroundtask() {
    try {
        voltmx.backgroundtasks.stopTask();
        alert(“background task is stopped”);
    } catch (err) {
        alert("Stopping the background task is failed with error: " + err);
    }
}
```

### Return Values

None

### Exception

1900 - miscellaneous error.

### Platform Availability

Available on Windows.

</details>

![](resources/prettify/onload.png)
