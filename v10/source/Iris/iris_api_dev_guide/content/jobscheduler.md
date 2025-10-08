                            

JobScheduler (pre-packaged API)
===============================

The JobScheduler API helps schedule background tasks that are executed in your application. This API allows you to execute batch jobs that are nonuser facing jobs or that do not require any interaction, such as jobs that download/upload data from the network.

This API is pre-bundled with Iris Classic and does not need to be explicitly imported. Enable this API from Project properties before using.

> **_Important:_** This API is available on Android platform only.

You may want to run a task later or under certain conditions, such as when a device is plugged into a power source or connected to a Wi-Fi network. The JobScheduler API performs an operation for your application when such predefined conditions are met.

Following are some examples of when to use JobScheduler APIs:

*   Tasks that do not require user interaction.
*   Tasks that should be done once the device is connected to the power supply.
*   Tasks that require network access or a Wi-Fi connection.
*   Tasks that should regularly run as batch where the timing is not critical.

For more information on JobScheduler APIs, [click here](https://developer.android.com/reference/android/app/job/JobScheduler.md).

### APIs

Click [here](https://developer.android.com/reference/android/app/job/JobScheduler.md) to view JobScheduler APIs.

### Limitations

Following are the limitations of JobScheduler APIs:

*   Jobs scheduled using the JobScheduler API will work only when the application is running in the foreground or background.
*   Jobs scheduled using the JobScheduler API will not work when the application is not running, because of the following reasons:
    *   To schedule any job, a JobService needs to be created and passed as a parameter to Jobscheduler.
    *   A service in Android can run when the app is in the foreground as well as in the background. If you initiate JobService from JavaScript code, the service can run even when the app is in the background.
    *   A JobService can get triggered by an event configured even when the app is in the background. When that occurs JobService will not be available because this class is created at run time from JavaScript code. This class is not a Java class.
*   Other limitations, mostly from Android M developers preview version:
    
    *   Every service must be declared in the AndroidManifest.xml file with the Java class name implementing the Service. For example:
    
```
<service  
    android:name="<packagename>.TestJobService"  
    android:permission="android.permission.BIND_JOB_SERVICE"  
    android:exported="true"/ >  
    
```
    *   AndroidManifest.xml expects the Java class to be exist at the build time to register the service with the Android system.
    *   In Volt MX Iris Classic, using Native Function APIs, the class that implements this JobService is created at run time using java.newClass API.
    *   AndroidManifest.xml restricts the service to be registered with the native Android system. Thus service will not work.
*   To achieve the requirement, follow these steps:
    *   You can write the JobService class in Java and bundle it as a jar library with the app.
    *   A JobService can be mentioned as an entry into the Manifest file through Volt MX Iris > Properties > Native > Android > Tags > Child Tag entries under <application>.
    *   To enable the communication between JavaScript and JobService, you can write an FFI component and use Function callbacks.

![](resources/prettify/onload.png)
