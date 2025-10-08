                           

You are here: [APM Extension/Third Party APM Integration](#apm-extension-third-party-apm-integration) > [Global Error Handler (VoltMX Visulaizer Only)](#global-error-handler-volt-mx-iris-only) > voltmx.lang.setUncaughtExceptionHandler(<Callback function>)

APM Extension / Third Party APM Integration
===========================================

APM Extension/Third party APM integration involves the following:

1.  [Global Error Handler (VoltMX Iris only)](#global-error-handler-volt-mx-iris-only)
2.  [Other Third Party APM Integration](#other-third-party-apm-integration)

Global Error Handler (VoltMX Iris Only)
----------------------------------------------

Volt MX  Iris has built in support for a global error handler that is able to catch any uncaught exceptions occurring in the Java Script code of the application.

Application developers can hook to Global Error Handlers to register for callbacks when an unhandled exception occurs.

The exception handler is invoked and app continues to stay alive.

Developer can use this to throw a popup with required info for debug during application development or log the error into device console.

### setUncaughtExceptionHandler

This API allows developer to register a callback function to be invoked for uncaught JS exception.

```
voltmx.lang.setUncaughtExceptionHandler(<Callback function>) 
```

### getUncaughtExceptionHandler

This API allows developer to get the function that is currently registered for the uncaught JS exceptions.

```
voltmx.lang.getUncaughtExceptionHandler()
```

### Other third party APM Integration

For other third party APM providers Volt MX does not provide an out of the box integration and developer needs to write code to invoke the APIs of the chosen vendor as specified in the vendor’s documentation.

The Global Error Handler can be registered to be notified of JS errors and the callbacks can be used to invoke third party APM APIs to send the error info to the same.
