
Configure iOS Home Screen Widgets in Volt MX Iris
===================================================

A widget elevates key content from an app and displays it on the home screen of an iPhone or iPad, where users can see it at a glance. With three different sizes available (small, medium, and large), widgets can display a wide range of information. Users can personalize widgets to see details specific to their needs, and arrange their widgets in whatever way works best for them. From iPadOS 15.0+, the widget is now available in a fourth size – extralarge.

Widgets can be designed on any Form in Volt MX Iris. To create a home screen widget for an app, follow these steps:

1.  In the Volt MX Iris project, create a new Form.
2.  Add a FlexContainer widget to the Form.
3.  Resize the FlexContainer widget based on the size of the widget that you want to create. Provide the following dimensions for the FlexContainer widget:
    
    | Widget size | Dimensions (width x height) |
    |:------------|:----------------------------|
    | Small  |  169dp x 169dp  |
    | Medium |  360dp x 169dp  |
    | Large  |  360dp x 376dp  |
    | Extra Large  |  726dp x 350dp  |
    
4.  Create the UI of the widget by adding child widgets (for example, Label, Image, and FlexContainer widgets) to the FlexContainer widget.

**Important Considerations**

*   Designing widgets is similar to designing the elements of a Form. The layout type supported for the iOS Home Screen widgets is the Free Form Flex layout.  
    All the Flex properties (such as left, centerX, right, top, centerY, bottom, width, height) for the layout must be specified in **dp** or **%** units.  
    Ensure that you do not provide values in **px** units or set the value as **Preferred**.
*   The child UI elements (such as Label, Image, or FlexContainer widgets) must have fixed layout properties, such as fixed height and width.  
    If you do not provide values for the **Width** and **Height** properties of the child widget, you must provide values for other layout properties such as values for Top, Bottom, Left, or Right along with the CenterX or CenterY values.  
    For example, if you provide values for the Top and Bottom, the height of the widget can be determined. Similarly, if you provide values for the Left and CenterX properties, the width of the widget can be determined.
*   From the V9 Service Pack 5 release, Volt MX Iris has introduced support for the **Flex Horizontal** and **Flex Vertical** layouts for the child widgets of a Home Screen widget. In addition, support for the reverse layout direction has been added for both the Flex Horizontal and Flex Vertical layouts.  
    The default alignment of the child widgets is in the left-to-right and top-to-bottom directions for the Flex Horizontal and the Flex Vertical layouts respectively.  
    If you enable the reverse layout direction, the alignment of the child widgets is in the right-to-left direction for the Flex Horizontal layout, and the bottom-to-top direction for the Flex Vertical layout.

Integrate Home Screen Widgets with an iOS App
---------------------------------------------

To use iOS Home Screen Widgets in Volt MX Iris, you must include the widget configuration in the .kar file of the app. Follow these steps to include the widget configuration in the .kar file:

1.  Include the following key in the `application.properties` file of the project:
    
    ```
    enableiOSNativeWidgets = true
    ```
    
2.  Widgets and iOS apps communicate with each other through iOS Shared Containers or App Groups. For communication through iOS Shared Containers or App Groups, both the app and the widget must include the **App Group Entitlement**. You can provide an input app group container ID for an app as follows:

    The application groups can be added in **quantum_nitro_configuration.json file**. From the Workspace folder of the parent project app, navigate to the resources/common directory. Open 
    the quantum_nitro_configuration.json file and add app group capability under “KRelease” and “VoltmxWidgetExtension”.

    Here is a sample quantum_nitro_configuration.json file entry that enables app group for communication between the app and home widget:
    
    ```
    {
        "iOS":{
            "KRelease":{
                "Capabilites":{
                    "com.apple.security.application-groups" : ["group.com.widget.testWidget"]
                },
                "BuildSettings":{
                }
            },
            "VoltmxWidgetExtension":{
                "Capabilites":{
                    "com.apple.security.application-groups" : ["group.com.widget.testWidget "]
                }
            }
        },
        "Android":
        {
        }
    }

    ```
    
3.  Create a new folder in the KAR file, and name it **VoltmxWidgets**. Within the VoltmxWidgets folder, add the following files/folders:
    
    *   **Images** - A folder that contains the assets in PNG/JPEG format.
    *   **WidgetFolders** - One or multiple folders that contain the configuration of the widget. For example, AccountsWidget, TransactionsWidget. Each WidgetFolder contains the following folders:
        
        *   **JSScripts**: A folder that contains a widget.js file with two async functions passed with a callback. 
        
        
            Here is a sample code snippet with the two functions:  
			<pre>
            function getSnapshot(callback, widgetSize){
                var entry = new Entry(new Date(), {});
                callback(entry);
            }  
 
            function getTimelines(callback, widgetSize){
                var entry = new Entry(new Date(), {});
                callback([entry], TimelinePolicy.never());
            }
            </pre>

    *   **Views**: A folder that contains either the form.sm folders or a composite form.json structure file. The views folder must also contain the themes folder packaged with it if the form.json file is not present in the project.
            
    *   **widgetProperties.json** - A file that contains the metadata of the widgets. The widgetProperties.json file contains a JSON Object that contains the **widgets** key, which is an array of JSON Objects that contain the meta data for each widget. Each widget meta JSON object contains the following key-value pairs:
        
        1.  **widgetID**: A unique identifier for the widget in string format. The widgetID should be same as the name of the folder that is created for the configuration of a particular widget. For example, for 'AccountsWidget' and 'TransactionsWidget' folders, widgetID (case-insensitive) could be set as 'accountsWidget' and 'transactionsWidget' respectively.
        2.  **widgetName**: The display name for the widget that appears on the device in string format.
        3.  **widgetDescription**: The description for the widget that appears on the device in string format.
        4.  **widgetSizes**: All the supported sizes of the developed widget in an array of constant strings. For example, \[“SMALL", "MEDIUM", "LARGE", "EXTRALARGE"\]. You can provide one or many values in the array.
        5.  **widgetDir**: The name of the widget directory in string format (to be packaged in the `KAR` \> `VoltmxWidgets` folder)
        6.  **widgetViews**: A JSON object that contains the following key-value pairs:
            *   **SMALL** key: The value for this key is the name of the composite form.json structure of the small widget.
            *   **MEDIUM** key: The value for this key is the form.json structure of the medium widget.
            *   **LARGE** key: The value for this key is the form.json structure of the large widget.
            *   **EXTRALARGE** key: The value for this key is the form.json structure of the extralarge widget.
        7.  If the widget does not support a particular size, the value for that particular key must be an empty string.
            If the composite form.json file does not exist, the composite structure file will be generated from the from.sm folder, and the themes are combined.
        8.  **widgetURL**: A deep link URL that the application is expected to receive when a user taps the widget.        
        9.  **disableDefaultMargins**: From iOS 17.0, the existing home widgets will have content margins by default. To disable the content margins, that are set by default from iOS 17.0, this key needs to be added for each widget and set to true ("disableDefaultMargins":"true"). The default value for this key is false.
        10. **containerBackgroundColor**: From iOS 17.0, this key will be used to set the widget background color, in case the content margins are not disabled. In the presence of "disableDefaultMargins":"true" key, containerBackgroundColor would have no effect. The color should be given in lower case string.
        Example : "containerBackgroundColor":"red"
        The default value of containerBackgroundColor for the widget is "white".

    *   **CommonJSScripts** - A folder that contains the common JS files used by both the main iOS application and the widget (both the app and the widget use different environments).



Here is a sample `widgetProperties.json` file:
```
{
    "widgets":[
        {
            "widgetID":"accountsWidget",
            "widgetName": "Accounts Widget",
            "widgetDescription" : "Check your accounts balance and updates at a glance",
            "widgetSizes":["SMALL", "MEDIUM", "LARGE", "EXTRALARGE"],
            "widgetDir": "AccountsWidget",
            "widgetViews":{
                "SMALL" : "accountsWidgetSmall.json",
                "MEDIUM" : "accountsWidgetMedium.json",
                "LARGE" : "accountsWidgetLarge.json",
                "EXTRALARGE" : "accountsWidgetExtraLarge.json"
            },
            "widgetURL":"widget://accounts",
            "disableDefaultMargins":"true"
        },
        {
            "widgetID" : "scheduledTransactionsWidget",
            "widgetName" : "Upcoming transactions",
            "widgetDescription" : "Check when your next transaction is schduled at",
            "widgetSizes" : ["SMALL"],
            "widgetDir" : "ScheduledTransactionsWidget",
            "widgetViews" : {
                "SMALL" : "scheduledTransactionsWidgetSmall.json",
                "MEDIUM" : "",
                "LARGE" : "",
                "EXTRALARGE" : ""
            },
            "widgetURL" : "widget://scheduledTransactions",
            "containerBackgroundColor":"green"

        },
        {
            "widgetID" : "transactionsWidget",
            "widgetName" : "Transactions",
            "widgetDescription" : "Check your latest transactions",
            "widgetSizes" : ["MEDIUM", "LARGE"],
            "widgetDir" : "TransactionsWidget",
            "widgetViews" : {
                "SMALL" : "",
                "MEDIUM" : "transactionWidgetMedium.json",
                "LARGE" : "transactionWidgetLarge.json",
                 "EXTRALARGE" : ""
            },
            "widgetURL" : "widget://transactions",
            "containerBackgroundColor":"black"
        }
    ]
}


```

Widgets use the following two important functions:

*   [getSnapshot](#getSnapshot)
*   [getTimeline](#getTimeline)


<a id="getSnapshot"></a>**getSnapshot**

The getSnapshot function returns a single snap of data, as the name indicates. Usually, the getSnapshot function provides a representation of the widget for better user understanding.

The getSnapshot function is invoked by the native framework when the widget must appear on the widget gallery. When the getSnapshot function is invoked, the widget.js file of the widget is triggered. As the getSnapshot function returns a single snap of data, you must pass a single [Entry object](#Entry) (with data) as an input for the getSnapshot callback function. The expected data at that particular moment is then displayed on the widget.

<a id="getTimeline"></a>**getTimeline**

The getTimeline function returns a series of data entries. The widgets on the home screen display the data with respect to the number of entries that you provide as the input. For example, if you pass 10 entries with each entry differing by one hour, the timeline for the widget is defined for 10 hours, and the system refreshes the widget views on the home screen according to the data that is passed for each entry.

The getTimeline function is invoked by the native framework when the widget is added to the home screen. You must provide a series of [Entry Objects](#Entry) (with each entry having a **date** object and a **data** object) and a Reload Policy as the input for the getTimeline function. For a specific timeline, a widget can work independently until the timeline expires. When the data for the last entry has been displayed, you can use the following **Widget Reload Policies** to reload the widget at a specific time.

*   **Reload Never**: The widget does not reload the data, and keeps displaying the entries that were passed as the input (with the respective date time objects) to the getTimeline function. The last entry gets displayed perpetually, and the getTimeline function is not triggered after all the entries have been displayed.
*   **Reload At End**: The getTimeline function for input data of the widget is reloaded after the widget displays the last entry that was passed as the input. AFter the last entry is displayed, the getTimeline function is triggered with a request for the new data to be displayed.
*   **Reload After (date)**: The getTimeline function is triggered at a particular moment that you provide as the input (with the date-time object).


<a id="Entry"></a>**Entry Object - Entry Class**

The Entry object is a JavaScript object instance that is used by widgets for both the getSnapshot and the getTimeline functions. The Entry object contains a **date** object(date-time object) and the **data** to be displayed at a particular date-time.

Here is a sample code snippet that showcases the getSnapshot and getTimeline functions:

```
// Snapshot should call the callback with the immediate time or current time
// And also provide the data along with this current entry
function getSnapshot(callback, widgetSize){
    //entry date is the point when you want to show the widget view with below data
    var entryDate = new Date();
    
    var widgetDataModel = {
        "lblAccountHolderName" : "Michael",
        "lblAccountType" : "Brokerage Account",
        "lblAccountBalance" : "$350,500",
        "imgLastIncrease" : "arrowup1",
        "lblBankName" : "Infinity Bank",
        "lblAccountNumber" : "AADFEW-112235Z-FFGRWS"
    };
    
    var entry = new Entry(entryDate, widgetDataModel);
    callback(entry);
}

// Timeline is a series of entries that you want to keep displaying for a specific timeline
// Timeline refresh or update depends on the reload policy
// Either a widget can just provide the data and never reload again
// Either a widget can provide data for one hour and then reload after that time
// Either a widget can provide series of entries and then reload after the last entry
function getTimelines(callback, widgetSize){
    // Entry date now means that you want to display this view now
    var entryDate = new Date();
    
    var widgetDataModel = {};

    var accountHolderName = getAccountHolderName();
    var accounts = getAccounts();
    var brokerageAccount = accounts[2];

    var dsAccountBalance = getAccountBalance();
    var balanceToShow = (dsAccountBalance==null) ? brokerageAccount.accountBalance : dsAccountBalance;
    

    // Adding brokerage account to widgetDataModel
    widgetDataModel["lblAccountHolderName"] = accountHolderName;
    widgetDataModel["lblAccountType"] = brokerageAccount.accountType+" Account";
    widgetDataModel["lblAccountBalance"] = "$"+balanceToShow;
    widgetDataModel["imgLastIncrease"] = brokerageAccount.transactions[0].transactionFlow == "inflow" ? "arrowup1" : "arrowdown1";
    widgetDataModel["lblBankName"] = brokerageAccount.bankName;
    widgetDataModel["lblAccountNumber"] = brokerageAccount.accountNumber;

    var entry = new Entry(entryDate, widgetDataModel);
    callback([entry], TimelinePolicy.never());
}
```
### Data retrieval for Widgets

Widgets can receive data from network requests by using the [Volt MX Networking APIs](../../../Iris/iris_api_dev_guide/content/voltmx.net_functions.md#HttpRequ) or through the [Shared App Group APIs](../../../Iris/iris_api_dev_guide/content/sharedappgroupcontainerapi.md#shared-app-group-container-api-for-ios).


### Widgets with Multiple Timelines

When any server-side changes must be notified to the widget, you can notify the widgets of these changes by using the following ways:

**Main application fetch**: The main application can pass the data to the widget from shared app groups, if the app fetches the new data.

**Notifications**: If the application receives a notification about any server change, the application callback can invoke the widget reload methods to update this new change across all the widgets.

**NOTE:** If the widget had already invoked timeline methods before, the new invocation of the timeline method takes precedence over the old invocations, and the updated data is displayed on the widget.

### Deep Linking Widgets

You can implement the deep link functionality for Widgets. When a user taps a widget that has a configured URL, the application callback methods are invoked with the parameters of the URL. Appropriate action can be taken on the application when this URL is received. For example, when a user taps on the accounts widget, you can display the dashboard from where the accounts widget URL is received.

**NOTE:** From the V9 Service Pack 5 release, you can provide multiple URLs for specific tap targets. During the widget view construction, you can provide the deeplink URLs for specific tap targets in the `flex.json` file, which must be passed to the app on tapping the FlexContainer.

The number of URLs that you can provide varies based on the size of the widget as follows:

*   **Small widget**: A small widget only has one tap target. Therefore, you can only provide one deeplink URL for a small widget in the `widgetProperties.json` file.
*   **Medium widget**: A medium widget has a maximum of four (4) tap targets (two rows across two columns). Therefore, in addition to the default widgetURL provided in the `widgetProperties.json` file, you can provide four deeplink URLs in the `flex.json` file for a medium widget.
*   **Large widget**: A large widget has a maximum of eight (8) tap targets (two rows across four columns). Therefore, in addition to the default widgetURL provided in the `widgetProperties.json` file, you can provide eight deeplink URLs in the `flex.json` file for a large widget.

### Force Reload Widgets from the App

Widgets can operate on their own reload cycle or through the main application. The app associated with the widget can notify a specific widget to reload due to client changes by using the following widget APIs:

*   **voltmx.widget.reloadWidget**: To reload a specific widget based on the widgetID.
*   **voltmx.widget.reloadAllWidgets**: To reload all widgets.