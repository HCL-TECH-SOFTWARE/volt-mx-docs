                             

You are here: Request App Review API

Request App Review API
======================

Overview
--------

Using the Request App review API, you can get feedback about your applications from users. Both Apple’s App Store and Google’s Play store allow you (the developer) to request feedback on apps. Users can rate your app on a scale of one to five stars and also write a review. These reviews will help you in gaining new users or make improvements in your applications.

The Request App Review API contains the following API element:

  
| Function | Description |
| --- | --- |
| [voltmx.application.requestReviewFlow](voltmx.application_functions_requestreview.md#requestReviewFlow) | Retrieves the information required to launch the in-app review flow for an app. > **_Note:_** This API is only available on the Android platform. |
| [voltmx.application.requestReview](voltmx.application_functions_requestreview.md#requestReview) | Requests users to provide a rating and to write a review of an app. |

 

Using the[voltmx.application.requestReview Function](voltmx.application_functions_requestreview.md), you can enable the review feature and request the user to provide a review for the app.

How Request App Review Works
----------------------------

### In iOS

You need to call the [requestReview](voltmx.application_functions_requestreview.md) function. The [requestReview](voltmx.application_functions_requestreview.md) function internally calls the requestReview function of the SKStoreReviewController API, which gives a prompt to app users to provide feedback on the App Store without leaving the app. The prompt is displayed for users up to three times a year, as determined by Apple. Users can submit a rating through this standardized prompt. When you call this method in your shipping app and a rating/review request view is displayed, the system handles the entire process for you. The Request App Review API is available only on iOS 10.3 and later.

The Request App Review API should not be called on any user action. Refer this link to understand when it is appropriate to ask users for ratings: https://developer.apple.com/ios/human-interface-guidelines/system-capabilities/ratings-and-reviews - system-rating-and-review-prompts.

**Note**: If you call the [requestReview](voltmx.application_functions_requestreview.md) function while your app is still in development mode, a rating/review request view is always displayed so that you can test the user interface and experience. However, this method has no effect when you call that function in an app, which you can distribute by using TestFlight.

### In Android

By default, Android does not have the Play Store Reviewable API with the corresponding UI element. Consequently, you can build your own business logic by using the existing [voltmx.ui.Alert](voltmx.ui_functions_alert.md) function. Developers can directly control the Cancel and Rate callbacks.

From the Android 5.0 (API level 21) release, the Google Play Core library supports the in-app review feature that provides users with an option to provide a review within the context of the app. To launch the in-app review, you must create an object for the review info flow that is responsible for launching the review pop-up.

> **_Note:_** You must create the object for the review info flow in advance, before invoking the APIs to request a review.

When you invoke the requestReview function, the following course of action occurs:

1.  Initially, framework searches for the relevant Google Play Store market [URL](https://developer.android.com/distribute/marketing-tools/linking-to-google-play.md) ("**market://details?id=**").
2.  If the required URL is not available, framework searches for a web browser, using which it can launch [Google Play Store](https://play.google.com/store/apps) ("**https://play.google.com/store/apps/details?id=**").

Error Codes

The following error codes have been identified for Android:

1.  **Error code**: 801  
    **Message**: Review Action Not Found  
    This error is displayed if the requested Play Store or browser is not found, or if they are not installed.
    
2.  **Error code**: 802  
    **Message**: Review Error Unknown

> **_Note:_** The Request App Review API directly searches in Google Play Store. However, this search process does not work for Amazon Store. This is because the Google Play Store page opens directly and an "Item Not Found" message is displayed.

To view the functionality of the Request App Review API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/RequestAppRewiewAPI)

![](resources/prettify/onload.png)
