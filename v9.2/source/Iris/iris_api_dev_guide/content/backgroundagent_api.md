                             

You are here: Background Agent API

Background Agent API
====================

When a developer builds an application, a .xap file is submitted with all the code that the application requires to launch the user interface. But when a user launches multiple apps, none of the code will be executed for the apps that are not in the foreground.

Background agents enable a developer to supply some code from the background app that is executed periodically by the operating system. This code does not have any user interface but shares information with the active application. The information that is shared includes the isolated storage and application storage (for example, where the .xap file contents are located).

Background agents are of two types: Periodic and Resource intensive agents.

Periodic agents run for a small amount of time on a regular recurring interval. While the resource-intensive agents run for a relatively long period of time when the phone meets a set of requirements relating to processor activity, power source, and network connection. Volt MX supports periodic tasks only.

The Background agent API uses the `voltmx.backgroundtasks Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.backgroundtasks.getTaskDetails](voltmx.background_functions.md#getTaskDetails) | Returns the task details of already registered background task. |
| [voltmx.backgroundtasks.startTask](voltmx.background_functions.md#startTask) | Registers a scheduled action with the Operating System. |
| [voltmx.backgroundtasks.stopTask](voltmx.background_functions.md#stopTask) | Unregisters the already registered scheduled action with the Operating System. |

 

To begin a background task and set the success and failure callbacks, use the [voltmx.backgroundtasks.startTask](voltmx.background_functions.md#startTask) function. A success message appears when the app begins a task successfully. If the task fails to begin, an error message appears. After the background task begins, the app can retrieve the details of the task by using the [voltmx.backgroundtasks.getTaskDetails](voltmx.background_functions.md#getTaskDetails) function. To terminate a background task, use the [voltmx.backgroundtasks.stopTask](voltmx.background_functions.md#stopTask) function.

![](resources/prettify/onload.png)
