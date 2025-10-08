                            

You are here: Reports Filter Criteria

Reports Filter Criteria
=======================

*   **Date Range**:
    *   **Start Date**: The start date of the transaction. The default value is the first date of the month.
    *   **End Date**: The end date of the transaction. The default value is the current date.
*   **Start Month**: The first month of the transaction.
*   **End Month**: The last month of the transaction.
*   **Start Year**: The first year of the transaction.
*   **End Year**: The last year of the transaction.
*   **Aggregation Level**: Enables you to sort the report by duration. **None**, **Day**, **Week** and **Month** are the four aggregation levels.  
    
*   **Application**: The name of the client application.
*   **Access Mode**: **Native** and **Web** are the two access modes. The default value is **All**.
*   **Channel**: **Mobile**, **Tablet**, and **Desktop** are the three channels. The default value is **All**.
*   **Platform**: The platform used to run your application. **Android**, **iOS**, **Windows**, **Web**, and **Blackberry** are the four platforms. The default value is set to **All**.
*   **Environment**: The name of the environment of the account that contains the data.
*   **User Types**: There are three types of users. They are as follows:
    *   **Named Users**: Named Users are the users who have a unique identifier. You can set the unique identifier by using the **voltmx.setUserID** API in the app code. Otherwise, the user ID obtained from the Identity API invoked by the app will be used. Named Users will not be set in the app if neither of the mentioned user IDs are used.
        
        Named Users are tracked as a single user across different devices when the same Volt MX userID is received for an application in an environment.
        
    *   **Anonymous Users**: Users who do not have a unique identifier are anonymous users. The device identifier is usually used to track the Anonymous Users.
        
        The [device identifier](../../../../Iris/iris_api_dev_guide/content/voltmx.os_objects_deviceinfo.md) is a unique identifier set for a specific installation of app in a device. The behavior varies with the OS version. The device identifier varies if the app is deleted and reinstalled on the same device, but it will not change for the app upgrades. It is recommended to set a userID to ensure that the user is considered as a unique user irrespective of the device or platform from which app is being accessed.
        
    *   **Named and Anonymous Users**: The combination of Named Users from voltmx.setUserID API and Anonymous Users tracked by device identifier.
*   **User ID**: The report result can be filtered by entering a specific user ID. It is an optional value. It is blank by default.
*   **App Version**: The report result can be filtered by entering an application version. It is an optional value. It is blank by default.
*   **Group By**:
    *   **Sessions**: If events are grouped by sessions, the graph shows a unique user session count that had a particular event. If there are multiple events of the same type in a session, only one event of that type is shown. For example, if the **accountsummary** form is entered multiple times in a user session, the count is shown as one.
    *   **Devices**: If events are grouped by devices, the graph shows a unique device count that had a particular event. If there are multiple events of the same type from the same device, the count is shown as one per device.
    *   **Users**: If events are grouped by unique users identified by voltmx.setUserID API, the graph shows a unique user count that had a particular event.
*   **Session Type**: The type of session used for the transaction. **Interactive** and **Non-Interactive** are the two types of sessions.  
    
    > **_Note:_** The **Session Type** is tracked from Volt MX Foundry V8 SP4 onwards. All the sessions that were launched prior to Volt MX Foundry V8 SP4 are tracked as **Interactive Sessions**.
    
*   **Event Type**: The type of event used.
*   Service Name: Name of the Integration, Orchestration, or Object service.
*   **Service Type**: The type of service used. **Integration**, **Object**, and **Orchestration** are the three types of services. The default value is All.
*   **Sync Type**: Sync mode used for the transaction. **Online** and **Offline** are the two sync modes.
*   **Request Type**: Request type enables you to view the performance of object service separately for upload and download. **Upload** and **Download** are the two request types. The default value is both.
*   **Device ID**: The report result can be filtered by entering a specific Device ID. It is an optional value. It is blank by default.
*   **Child Service Name**: The integration service calls that are invoked within an object service or an orchestration service are called as Child Services.
    
    > **_Note:_** Child services are captured from Server Version V8 SP4. To get the child services, the server version must be upgraded to release V8 SP4.
    
*   **Include Child Services**: Include Child Services is a check box control. When enabled, the report retrieves the data of parent services and their corresponding child services.
*   **Category**: Category is a radio button control that retrieves the data of the selected category. **Sessions** and **Requests** are two types of categories. Session is selected by default.
*   **Form Name**: Name of the application form.
