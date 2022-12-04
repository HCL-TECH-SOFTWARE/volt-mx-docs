                            


Request App Review Functions
============================

The Request App Review API uses the [voltmx.application Namespace](voltmx.application_functions.md), are as follows.


<details close markdown="block"><summary>voltmx.application.requestReviewFlow</summary>

* * *

This API retrieves the information required to launch the in-app review flow for an app. You must invoke this API before you invoke the [voltmx.application.requestReview(config)](#requestReview) API.

Before you raise a request for an in-app review, Android recommends that you cache the review object in advance. This is to ensure that the review information is successfully retrieved before the user navigates to a different screen. In addition, you can find the staleness of a cached object from the value of the [timeElapsed](#timeElapsed) parameter.

> **_Note:_**
*   Ensure that you add the `supportGooglePlayCoreLib=true` entry in the **androidbuild.properties** file of the project.
*   In-app reviews only work on devices that have the Google Play store installed, and use Chrome OS or Android versions 5.0 (API level 21), and later

### Syntax

```

voltmx.application.requestReviewFlow(config);
```

### Input Parameters

_config_ - A JSON Object that contains the following keys:

  
| Key | Description |
| --- | --- |
| clearCachedRequest\[Boolean\] | Set the value of this key to **true** to request a new review info object (that is stored internally). When you set the value of this key to **false**, the API returns the review info object that was cached previously. If a cached review info object is not present, the API requests a new review info object from the native API The default value of this key is **false**. |
| onResult \[Function\] | A function callback that receives the status of the review flow. The callback function receives a JSON Object with the following keys: **statusCode**: For the list of possible status codes, refer [Status Codes](#Status1). **timeElapsed**: The time elapsed (in seconds) from the time the review info object was created. This key determines the staleness of the review flow object. If the review object is more than 2-3 hours old, the review may not be raised. > **_Note:_** The timeElapsed parameter is only returned when the [Status Code](#Status1) is REVIEW\_FLOW\_SUCCESS. **GMSErrorCode**: The underlying error raised by Google Mobile Services that is set when the statusCode is GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE. |

 

### Example

```

requestReviewFlow: function() {  
    var config = {  
        "clearCachedRequest": false,  
        "onResult":this.requestReviewFlowCallback  
    }  
    voltmx.application.requestReviewFlow(config);  
},  
requestReviewFlowCallback: function(info) {  
    if(info.statusCode == voltmx.application.REVIEW_FLOW_SUCCESS){  
      var timeElapsed = info.timeElapsed;  
      alert("StatusCode: "+ info.statusCode +   
            ",timeElapsed: " + timeElapsed);  
    }else{  
      alert("StatusCode: "+ info.statusCode);  
    }  
}
```

### Return Values

None

### Status Code Constants

| Constant | Description |
| --- | --- |
| REVIEW\_FLOW\_SUCCESS | The requestReview flow is successful. |
| REVIEW\_FLOW\_FAILED | The requestReview flow has failed. |
| REVIEW\_LIBRARY\_MISSING | The required Google Play Core library is not linked with the application. |
| GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE | The Google Play Store services are missing. |
| GMS\_LIBRARY\_MISSING | The Google Mobile Services library is not linked with the application. |

 

### Remarks

If the GMS or library is missing, the API returns the REVIEW\_LIBRARY\_MISSING, GMS\_LIBRARY\_MISSING, or GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE constants. Ideally, when you encounter these errors, you must not invoke the [voltmx.application.requestReview(config)](#requestReview) API.

### Platform Availability

Android

* * *

</details>
<details close markdown="block"><summary>voltmx.application.requestReview</summary> 

* * *

This function requests users to provide a rating and to write a review for an app.

### Syntax

```

voltmx.application.requestReview(config);
```

### Input Parameters

_config_ \[optional\]- If you want to enable the in-app review feature on Android devices, you must include the config parameter, which is a JSON Object that contains the following keys:

  
| Key | Description |
| --- | --- |
| reviewInApp \[Boolean\] | Set the value of this key to **true** to indicate the use of the in-app review feature. Set the value of this key to **false**, to invoke the older review flow. The default value of this parameter is **false**. |
| onResult \[Function\] | A function callback that receives the status of creation of the review dialog. The callback function receives a JSON Object with the following keys: **statusCode**: For the list of possible status codes, refer [Status Codes](#Status). **timeElapsed**: The time elapsed (in seconds) from the time the review info object was created. This key determines the staleness of the review flow object. If the review object is more than 2-3 hours old, the review may not be raised. > **_Note:_** The timeElapsed parameter is only returned when the [Status Code](#Status) is REVIEW\_FAILURE. **GMSErrorCode**: The underlying error raised by Google Mobile Services that is set when the statusCode is GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE. |

> **_Note:_** Support for the config parameter (that provides the in-app review functionality) is only available on the Android platform.

### Example

```

requestReview: function() {  
    var config = {  
        "reviewInApp": true,  
        "onResult": this.requestReviewCallback  
    };  
    voltmx.application.requestReview(config);  
},  
requestReviewCallback: function(info) {  
    if(info.statusCode == voltmx.application.REVIEW_FAILED){  
        var timeElapsed = info.timeElapsed;  
        alert("StatusCode: "+ info.statusCode +   
              ",timeElapsed: " + timeElapsed);  
    }else{  
        alert("StatusCode: "+ info.statusCode);  
    }  
}
```

### Return Values

None

### Remarks

*   If this API returns the REVIEW\_SUCCESS status code constant, the review info object is cleared.
*   If the GMS or library is missing, the API returns the REVIEW\_LIBRARY\_MISSING or GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE or GMS\_LIBRARY\_MISSING statusCode. However, in this case, the API reverts to invoking the older review flow.  
    Ideally, you must not invoke this API if you catch these errors in the [voltmx.application.requestReviewFlow](#requestReviewFlow) API.

### Status Codes

  
| Constant | Description |
| --- | --- |
| REVIEW\_SUCCESS | The requestReview object successfully creates the in-app review popup. |
| REVIEW\_FAILED | The requestReview object fails to create the in-app review popup. |
| REVIEW\_FLOW\_NOT\_REQUESTED | The requestReview API is called without (or before) receiving the success status from the requestReviewFlow API or without invoking the requestReviewFlow API itself. |
| REVIEW\_LIBRARY\_MISSING | The required Google Play Core library is not linked with the application. |
| GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE | The Google Play Store services are missing. |
| GMS\_LIBRARY\_MISSING | The Google Mobile Services library is not linked with the application. |

 

### Platform Availability

*   Android
*   iOS

* * *

### Status Codes

  
| Constant | Description |
| --- | --- |
| REVIEW\_FLOW\_SUCCESS | The requestReview flow is successful. |
| REVIEW\_FLOW\_FAILED | The requestReview flow has failed. |
| REVIEW\_SUCCESS | The requestReview object successfully creates the in-app review popup. |
| REVIEW\_FAILED | The requestReview object fails to create the in-app review popup. |
| REVIEW\_FLOW\_NOT\_REQUESTED | The requestReview API is called without (or before) receiving the success status from the requestReviewFlow API or without invoking the requestReviewFlow API itself. |
| REVIEW\_LIBRARY\_MISSING | The required Google Play Core library is not linked with the application. |
| GOOGLE\_PLAY\_SERVICES\_UNAVAILABLE | The Google Play Store services are missing. |
| GMS\_LIBRARY\_MISSING | The Google Mobile Services library is not linked with the application. |

</details>
![](resources/prettify/onload.png)
