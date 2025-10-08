                            


Asynchronous Network Calls
==========================

Asynchronous services can be invoked over existing web protocols (http or https). An asynchronous service does not wait for a response, but continues its work and handles the response later during the execution of the application. When you invoke an asynchronous service call, the user interface (UI) is not blocked, and you can perform other actions such as invoking other services such as updating data on the forms. Use asynchronous service calls if you have long running tasks in the application (like querying a database, making another service call etc).

You need to define a separate callback function to handle return values of an asynchronous service call. An asynchronous call always returns a handle to the service call as an immediate response, and the callback function handles logic to process the return values and error codes (if any).

On the Mobile Web platform, where the virtual machine runs the server, an asynchronous network call is also treated like a synchronous call. When the asynchronous network call API is used, the Mobile Web platform invokes the network call with the URL and the parameters provided. While the native applications continue processing of the next line of code after the network call (without waiting for the network call to return), the Mobile Web platform waits until the response is fetched from the network call, executes the callback function, and then executes the next line of code after the network call.

In native applications, the print statements appear in the following order:

1.  Hello World - Before invoking network call.
2.  Hello World - After invoking network call.
3.  Hello World - Inside callback function.

On the Mobile Web platform, the print statements appear in the following order:

1.  Hello World - Before invoking a network call.
2.  Hello World - Inside a callback function.
3.  Hello World - After invoking a network call.

Advantages

With an asynchronous service call, you can:

*   Make multiple service calls at the same time based on the application requirement.
*   Perform other actions because code execution and user interface are not blocked.
*   Make your application perform better and be more responsive.
*   Use the resources to the fullest extent (of the system on which the application is running).

Disadvantages

You need to define appropriate actions within the callback functions, and manage the application states and the UI.

Use Cases

You should use asynchronous services in the following scenarios:

1.  When the service calls are independent of each other, you can use the asynchronous service calls. For example, you can search for flights, hotels, cars, and more (all these tasks are independent of each other).
2.  When the response of a service call is not consumed immediately in the application flow, but is used later.

![](resources/prettify/onload.png)
