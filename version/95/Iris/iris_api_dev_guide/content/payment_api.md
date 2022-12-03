                             

You are here: Payment API

Payment API
===========

Use the payment API to execute online transactions on various Volt MX Iris Applications.

The Payment API uses the `voltmx.payment Namespace` and the following API elements.

| Function | Description |
| --- | --- |
|  [voltmx.payment.canWeMakePayment](voltmx.payment_functions.md#canWeMakePayment)  | Determines if users can make payments on their device. |
| [voltmx.payment.getPaymentData](voltmx.payment_functions.md#getPaymentData) | Returns paymentResponseData, which contains the necessary information to complete a payment transaction, in the successCallback. |
| [voltmx.payment.getSupportedPaymentNetworks](voltmx.payment_functions.md#getSupportedPaymentNetworks) | Returns the list of available payment networks that are supported by Apple Pay. |
| [voltmx.payment.updateTransactonResponse(voltmxconstant)](voltmx.payment_functions.md#updateTransactonResponse) | Completes the end-to-end transaction by using the payment token and informing the result of the transaction to the native platform. |

 

Using Payment APIs
------------------

Invoke the  [voltmx.payment.canWeMakePayment](voltmx.payment_functions.md#canWeMakePayment)  function to check whether payments can be made on a particular device. If the callback function of the canWeMakePayment function returns true, configure the paymentData Object and then invoke the [voltmx.payment.getPaymentData](voltmx.payment_functions.md#getPaymentData) function. This invocation displays the Payment Sheet UI of the native platform. The user must fill required data in the Payment Sheet and submit the data. If the payment data is valid, the data along with a payment token is returned in the successCallback. To check the list of available payment networks, use the [voltmx.payment.getSupportedPaymentNetworks](voltmx.payment_functions.md#getSupportedPaymentNetworks) function. Use the [voltmx.payment.updateTransactonResponse](voltmx.payment_functions.md#updateTransactonResponse) to complete the end-to-end transaction by using the payment token and informing the result of the transaction to the native platform.

Usage Guidelines
----------------

### For iOS

1.  You must have a paid Apple Developer account to use Apple Pay. To make use of the capabilities of Xcode, you must enable Apple Pay and link the required merchant ID.
    
2.  The PaymentButton class is not available in JavaScript. You can alternatively download the Apple Pay button resources and use them on a Volt MX Iris button to achieve the look desired for an Apple Pay button. The Apple Pay Buttons and Resources link at the [Apple Pay developer site](https://developer.apple.com/apple-pay/Apple-Pay-Identity-Guidelines.pdf) provides you with a zip file that contains an extensive collection of approved button resources for Apple Pay. The Apple Pay Guidelines provide explanations of the permissible modifications that you can make to the provided buttons, as well as guidelines on what colors you may choose to provide the best contrast between the button and your view’s background. In general, you are not allowed to create your own button artwork, but you can stretch the provided artwork to be wider if required.
3.  If payment processing is not completed within 30 seconds, the transaction times out and the user is notified. If a timeout occurs, you must cancel the in-progress payment.  
    You can refer the [Apple Pay Guidelines](https://developer.apple.com/ios/human-interface-guidelines/technologies/apple-pay/) for more information.

### For Android

1.  You must install Google Play services version 11.4.x or later on your device.
2.  You must add the following tag in the Project Application Tag Child Entries section.  
    `<meta-data android:name="com.google.android.gms.wallet.api.enabled" android:value="true" />`
3.  You must add the following tag in the Project Gradle Suffix section.  
    `dependencies {  
    implementation 'com.google.android.gms:play-services-wallet:11.8.0' implementation 'com.android.support:support-v4:26.0.0'  
    }`
4.  You can refer [Google Test and Deploy](https://developers.google.com/pay/api/test-and-deploy) for more information on testing and deployment.

To view the functionality of the Accelerometer API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/PaymentsAPI)

  
![](resources/prettify/onload.png)

<!--
For a more hands-on approach on the respective features of various Payments APIs, import and preview the **VoltMX Payments Feature** sample app by using Volt MX Iris.

[![](resources/images/download_button_10_230x35.png)](https://github.com/kony/PaymentsApp-SP3-Enhancements)

![](resources/prettify/onload.png)
-->
