                            

You are here: Background Fetch

Background Jobs
===============

Background Jobs feature in Volt MX Platform includes [Background Fetch](#background-fetch) and [Background Transfers](#background-transfers).

Background Fetch
----------------

You can allow the application to fetch data from a network on regular basis while it is in a background state, with the background fetch capability in iOS 7 and later. This data can be utilized to keep the content of the application up-to-date and present it to the user when the user launches or re-opens the application. Also, the capability to support long running HTTP/HTTPS tasks like downloading large files if the application is in background state is supported.

*   In iOS version 7 and above, an app that retrieves content regularly from a network can ask the system for background execution time to check for new content.
*   An application developer who wishes to perform a background fetch can enable this feature in Volt MX Iris IDE and register for the feature using `voltmx.backgroundjob.registerBackgroundFetch`. This API can be used to register predefined fetch job that can handle tasks like file download, upload, or a custom task.
*   `voltmx.net.HttpRequest` API supports background transfers. Tasks like upload or download from the network (HTTP/HTTPS) that are active even when the app is in background or suspended state is available in iOS.

Background Transfers
--------------------

The purpose of the background transfer service is to allow long running network downloads or uploads to take place even when the associated application is placed in the background. Background transfers are supported in HTTP and HTTPS protocols.

Following are the features in Background Transfer: 

*   Uploads and downloads are managed by iOS
*   Unlike background fetch, background transfers have unlimited time.
*   It can be put in the queue anytime (foreground and background).
*   App is woken up to handle authentication challenges, errors if any, or completion of the job.
*   Background transfer tasks can be paused and resumed.
*   Only HTTP and HTTPS protocols are supported.

Background Fetch Workflow
-------------------------

iOS 7 and later contains the `Background Fetch` API which allows an app to get updated content when the app is in background. iOS schedules the background fetch events based on the app usage so that the content is always up-to-date when user opens the application. iOS provides 30 seconds time frame for the app to wake up, fetch new data, update its interface, and go back to sleep.

If the Background Fetch feature is enabled in an app, the system wakes the app in the background from time to time and lets it go online to fetch new data with a goal to refresh its content. In this way the app is always up-to-date and users do not have to wait any more when they launch it.

The system determines how frequent the application can perform a background fetch and depends on the following factors:

*   If network connectivity is available at that particular time.
*   Is the device awake.
*   Data and time the application has taken in its previous attempt to perform a background fetch.

The iOS system gives power to an application to schedule Background Fetch. Background Fetch can also be used to perform tasks internally in the app. Only synchronous tasks must be performed in background fetch, other than long running Background Transfers that are asynchronous. After the task is done [`setBackgroundFetchCompletionStatus`](#volt-mx-backgroundjob-setbackgroundfetchcompletionstatus) must be called, passing a result that indicates whether content is available.

Invoking [`setBackgroundFetchCompletionStatus`](#volt-mx-backgroundjob-setbackgroundfetchcompletionstatus) tells the system that it can move the app back to the suspended state and evaluate its power usage.

Apps that download small amounts of content quickly and accurately reflect when they had content to download are more likely to receive execution time in the future than apps that take longer to download their content.

It is advisable to use Background Transfers supported by [`voltmx.net.HttpRequest`](voltmx.net_functions.md#HttpRequ) in fetch task to optimally utilize the execution time provided in the Fetch task.

Background Fetch and Background Transfers APIs
----------------------------------------------

<table>
<tr>
<th>Background Fetch APIs</th>
<th>Background Transfer APIs</th>
</tr>
<tr>
<td>
<p></p>
<p>Following are the APIs for Background Jobs: </p>
<ol>
<li>
<a href="#voltmxbackgroundjobregisterbackgroundfetch">voltmx.backgroundjob.registerBackgroundFetch</a>
</li>
<li>
<a href="#voltmxbackgroundjobsetbackgroundfetchcompletionstatus">voltmx.backgroundjob.setBackgroundFetchCompletionStatus</a>
</li>
<li>
<a href="#voltmxbackgroundjobsetbackgroundfetchinterval">voltmx.backgroundjob.setBackgroundFetchInterval</a>
</li>
</ol>
</td>
<td>
<p></p>
<p>Following are the Background Transfer APIs: </p>
<ol>
<li><a href="voltmx.net_functions.html#HttpReq">voltmx.net.HttpRequest</a></li>
<li><a href="background_transfer.html#suspend">suspend</a></li>
<li><a href="background_transfer.html#resume">resume</a></li>
<li><a href="background_transfer.html#gettaskstate">getTaskState</a></li>
</ol>
</td>
</tr>
</table>


Supported Versions and Platforms
--------------------------------

The Background Job feature: 

<!-- *   Available in Volt MX iOS platform versions above 5.6.2. -->
*   Supports iOS7 and the platforms above.
*   Supported only in JavaScript.

voltmx.backgroundjob.registerBackgroundFetch
------------------------------------------

registerBackgroundFetch can be used to register a background fetch job. A JavaScript function that can be invoked whenever the system schedules the fetch task. The app is woken up after the specified amount of fetchInterval.

> **_Note:_** At the end of the background fetch job, you must invoke the `voltmx.backgroundjob.setBackgroundFetchCompletionStatus` passing a result that indicates whether content is available or not.

### Signature

**JavaScript: voltmx.backgroundjob.registerBackgroundFetch ([backgroundCallBack](#backgroundCallBack), [fetchInterval](#fetchInterval))**

### Input Parameters

  **backgroundCallBack \[Function\] - Mandatory**

  This callback is to be executed when the system invokes the app for a fetch job when the app is in background.

  **fetchInterval \[Number\] / \[Constant\] - Optional**

  Indicates the minimum time interval in seconds which must elapse before system can invoke the app for next fetch job .This is an optional parameter and value that is specified is only indicative and might not have any real effects on the scheduling frequency, as system decides the actual interval.

  Possible values are:

  1. constants.BACKGROUND\_TASK\_FETCH\_INTERVAL\_MINIMUM

     This is the default value. System decides the fetch interval depending on the usage prediction for the app.

  2. constants.BACKGROUND\_TASK\_FETCH\_INTERVAL\_NEVER

     Disable background task. Set the time interval to constants.BACKGROUND\_TASK\_FETCH\_INTERVAL\_NEVER so that the job is no longer scheduled for running.

  3. Time in seconds. (Negative values are not accepted).

### Return Values

\<N.A\> or “NONE".

### Exceptions and Error Handling

  1. If no arguments or less number of arguments than the mandatory number of arguments are provided, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:

      <pre><code style="display:block;background-color:#eee;">errorCode: 4001.
     name: "BackgroundJobError".    
     message:"registerBackgroundFetch: MissingMandatoryParameters."</code></pre>



  2. If arguments type does not match the allowed type, it raises an exception and throws a _VoltMXError_ JavaScript Object with the following attributes:
  
      <pre><code style="display:block;background-color:#eee;">errorCode: 4002.
     name: "BackgroundJobError".    
     message:"registerBackgroundFetch: MissingMandatoryParameters."</code></pre>

### Platform Availability  

Available in iOS Platform.  


### JavaScript Example  

<pre><code style="display:block;background-color:#eee;">function backgroundFetchCallBack() {

//fetch handler invoked whenever the system invokes the App for a fetch job 
// do something here


// in the end of the handler setBackgroundFetchCompletionStatus() need
// to be called mandatorily other wise system might termitane the app. 

// task completion status. 
//1. constants.BACKGROUND_TASK_STATUS_NEW_DATA
//2. constants.BACKGROUND_TASK_STATUS_FAILED
//3. constants.BACKGROUND_TASK_STATUS_NO_NEW_DATA

var completionStatus = constants.BACKGROUND_TASK_STATUS_NEW_DATA;
        voltmx.backgroundjob.setBackgroundFetchCompletionStatus(completionStatus);

};

//Fetch interval
//1. constants.BACKGROUND_TASK_FETCH_INTERVAL_MINIMUM
//2. constants.BACKGROUND_TASK_FETCH_INTERVAL_NEVER
//3. Time in seconds. (Negative values are not accepted).

var fetchInterval = constants.BACKGROUND_TASK_FETCH_INTERVAL_MINIMUM;

//register background fetch job
voltmx.backgroundjob.registerBackgroundFetch(backgroundFecthCallBack, fetchInterval);
</code></pre>

  
  
voltmx.backgroundjob.setBackgroundFetchCompletionStatus
-----------------------------------------------------

One must call this method in the end of `backgroundCallBack` passing a result that indicates whether content was available or not. This method intimates the system of the completion status of the background fetch job that has been scheduled.  

Executing this call tells the system that it can move the app back to the suspended state and evaluate its power usage. Apps that download small amounts of content quickly and accurately display when they have content to download are more likely to receive execution time in the future than apps that take longer to download their content.  

Failure to call this method results in undefined behavior and could cause the app to be terminated by the system. If an error arises during invoking this API, default value: `constants.BACKGROUND_TASK_STATUS_FAILED` will be set.  


### Signature

JavaScript: voltmx.backgroundjob.setBackgroundFetchCompletionStatus([completionStatus](#completionStatus))

### Input Parameters

  **completionStatus \[constant\] - Mandatory**  

  This is a mandatory parameter. Possible values are as follows  

  1. **constants.BACKGROUND\_TASK\_STATUS\_NEW\_DATA**

      This tells the system that the fetch was successful and internally, the system then updates the apps UI (if the fetch resulted in UI change) in the background. This new UI is presented to the user once the app is brought to fore ground. The snapshot of the new UI is also presented when the user tries to switch apps using the App switcher.

3.  **constants.BACKGROUND\_TASK\_STATUS\_FAILED**

      This tells the system that the fetch was unsuccessful. UI is not updated and the task will be run later based on the available system resources.

5.  **constants.BACKGROUND\_TASK\_STATUS\_NO\_NEW\_DATA**

     This intimates the system the fetch did not result in any new data, UI is not updated and the job is run after any point later in time but not before fetchInterval.  


### Return Values

\<N.A\> or “NONE".  


### Exceptions  


 1. If no arguments or less number of arguments than the mandatory number of arguments are provided, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:

      <pre><code style="display:block;background-color:#eee;">errorCode: 4001.
    name: "BackgroundJobError".    
    message:"setBackgroundFetchCompletionStatus: MissingMandatoryParameters."</code></pre>


 2. If arguments type does not match the allowed type, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:  

      <pre><code style="display:block;background-color:#eee;">errorCode: 4002.
    name: "BackgroundJobError".    
    message:"setBackgroundFetchCompletionStatus: InvalidParameters."</code></pre>
       
 
 3. If an error arises during invoking of this API, default value: constants.BACKGROUND\_TASK\_STATUS\_FAILED will be set.  


### Platform Availability  

Available in iOS Platform.  


### JavaScript Example  

<pre><code style="display:block;background-color:#eee;">function backgroundFecthCallBack() {

//fetch handler invoked whenever the system invokes the App for a fetch job 
// do something here

// in the end of the handler setBackgroundFetchCompletionStatus() need
// to be called mandatorily other wise system might termitane the app. 

// task completion status. 
//1. constants.BACKGROUND_TASK_STATUS_NEW_DATA
//2. constants.BACKGROUND_TASK_STATUS_FAILED
//3. constants.BACKGROUND_TASK_STATUS_NO_NEW_DATA

var completionStatus = constants.BACKGROUND_TASK_STATUS_NEW_DATA;
        voltmx.backgroundjob.setBackgroundFetchCompletionStatus(completionStatus);
};

//Fetch interval
//1. constants.BACKGROUND_TASK_FETCH_INTERVAL_MINIMUM
//2. constants.BACKGROUND_TASK_FETCH_INTERVAL_NEVER
//3. Time in seconds. (Negative values are not accepted).

var fetchInterval = constants.BACKGROUND_TASK_FETCH_INTERVAL_MINIMUM;

//register background fetch job
voltmx.backgroundjob.registerBackgroundFetch(backgroundFecthCallBack, fetchInterval);
</code></pre>



voltmx.backgroundjob.setBackgroundFetchInterval
---------------------------------------------

This method sets the fetch interval for the background fetch job scheduled.  


### Signature  

**JavaScript: voltmx.backgroundjob.setBackgroundFetchInterval([fetchInterval](#fetchInterval))**  


### Input Parameters  

  fetchInterval \[Number\]/\[Constant\] - Mandatory  

  Indicative minimum time interval in seconds that should elapse before system can invoke the app for next fetch job. This is only indicative and may not have any real effects on the scheduling frequency, as system decides the actual interval.

  Possible values are: 

  1. **constants.BACKGROUND\_TASK\_FETCH\_INTERVAL\_MINIMUM**  
  
     This is the default value. System decides the fetch interval depending on the usage prediction for the app.

  3. **constants.BACKGROUND\_TASK\_FETCH\_INTERVAL\_NEVER**

     Disable background task. Set the time interval to constants.BACKGROUND\_TASK\_FETCH\_INTERVAL\_NEVER so that the job is no longer scheduled for running.

5.  Time in seconds. (Negative values are not accepted).

### Return Values

\<N.A\> or “NONE".  

### Exceptions  

1.  If no arguments or less number of arguments than the mandatory number of arguments are provided, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:

      <pre><code style="display:block;background-color:#eee;">errorCode: 4001.
    name: "BackgroundJobError".    
    message:"setBackgroundFetchInterval: MissingMandatoryParameters."</code></pre>

2. If arguments type does not match the allowed type, it raises an exception and throws a “VoltMXError” JS Object with the following attributes:

      <pre><code style="display:block;background-color:#eee;">errorCode: 4002.
   name: "BackgroundJobError".    
   message:"setBackgroundFetchInterval: InvalidParameters."</code></pre>


### Platform Availability  

Available in iOS Platform.  

### JavaScript Example  

<pre><code style="display:block;background-color:#eee;">//Fetch interval 
//1. constants.BACKGROUND_TASK_FETCH_INTERVAL_MINIMUM
//2. constants.BACKGROUND_TASK_FETCH_INTERVAL_NEVER
//3. Time in seconds. (Negative values are not accepted).

var fetchInterval = constants.BACKGROUND_TASK_FETCH_INTERVAL_MINIMUM;

voltmx.backgroundjob.setBackgroundFetchInterval(fetchInterval);</code></pre>
