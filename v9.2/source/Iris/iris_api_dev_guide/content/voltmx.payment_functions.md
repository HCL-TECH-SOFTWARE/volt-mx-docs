                            


voltmx.payment Namespace
======================

The Payment API contains the voltmx.payment Namespace and the following API elements:

Functions
---------

The voltmx.payment Namespace contains the following functions.


<details close markdown="block"><summary>voltmx.payment.canWeMakePayment</summary>

* * *

Determines if users can make payments on their device. When users call this function without specifying the paymentRequirements parameter, it verifies the minimum platform requirements and these requirements differ from platform to platform. Users can enforce additional requirements apart from the minimum platform requirements by using the optional parameter: paymentRequirements.

### Syntax

```

voltmx.payment.canWeMakePayment(canWeMakePaymentCallback,paymentRequirements);
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| _paymentRequirements\[JSON map object\]_ | It is the only optional parameter supported by this function. Once this parameter is set, the canWeMakePayment function returns true if a user has an existing payment method that matches the criteria specified in paymentRequirements. Supported Values paymentRequirements:{"paymentCardNetworks" :\[\], "paymentMethodType" :\[\]} 1.1 _paymentCardNetworks\[JSON List Object\]_ This key is used to check whether any of the specified network cards is available in a user's payment account. If no payment cards have been added, the canWeMakePayment function always returns false. If no cards are specified ,the default supported card networks will be voltmx.payment.NETWORK\_MASTERCARD, voltmx.payment.NETWORK\_VISA, voltmx.payment.NETWORK\_DISCOVER, and voltmx.payment.NETWORK\_AMEX. The following constants are applicable for this object: voltmx.payment.NETWORK\_MASTERCARD voltmx.payment.NETWORK\_VISA voltmx.payment.NETWORK\_DISCOVER voltmx.payment.NETWORK\_AMEX voltmx.payment.NETWORK\_JCB voltmx.payment.NETWORK\_INTERAC iOS-specific Constants voltmx.payment.NETWORK\_PRIVATELABEL voltmx.payment.NETWORK\_IDCREDIT voltmx.payment.NETWORK\_SUICA voltmx.payment.NETWORK\_QUICPAY voltmx.payment.NETWORK\_CHINAUNIONPAY voltmx.payment.NETWORK\_CARTESBANCAIRES voltmx.payment.NETWORK\_CARTEBANCAIRES voltmx.payment.NETWORK\_CARTEBANCAIRE Supported Values paymentCardNetworks : \[voltmx.payment.NETWORK\_MASTERCARD,voltmx.payment.NETWORK\_VISA\] 1.2 _paymentMethodType\[JSON List Object\]_ This key is used to add specified requirements to cards that were added in the paymentCardNetworks Object. The canWeMakePayment function checks for cards in the paymentCardNetworks JSON object with the capabilities mentioned for paymentMethodType\[JSON object\]. If the payment cards in the user account meet any of the criteria, the canWeMakePayment function returns true; else, the function returns false. The following constants are applicable for this object: iOS-specific Constants voltmx.payment.METHODTYPE\_3DS: For 3DS secured payment type. voltmx.payment.METHODTYPE\_CREDIT: For Credit payment method type. voltmx.payment.METHODTYPE\_DEBIT: For Debit payment method type. voltmx.payment.METHODTYPE\_EMV: For EMV secured payment method type. Android-specific Constants voltmx.payment.METHODTYPE\_ANDROIDPAY: All the cards added in Android Pay are taken into consideration. voltmx.payment.METHODTYPE\_GOOGLE: All the cards added in Google account are taken into consideration. If no payment methods are specified, the default supported payment methods are as follows: For iOS: voltmx.payment.METHODTYPE\_3DS For Android: voltmx.payment.METHODTYPE\_GOOGLE and voltmx.payment.METHODTYPE\_ANDROIDPAY |
| canWeMakePaymentCallback \[Function Object\] | It is a mandatory parameter. If user can execute a payment transaction on their device or if the paymentRequirements criteria is met, the callback is executed with boolean value as true; else, the callback returns false. |

 

### Example

```

paymentRequirements = {
    paymentCardNetworks: [voltmx.payment.NETWORK_MASTERCARD],
    paymentMethodType: [voltmx.payment.METHODTYPE_CREDIT]
};

function canWeMakePaymentCallback(result) {
    alert(result);
}
voltmx.payment.canWeMakePayment(canWeMakePaymentCallback, paymentRequirements);
```

### Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.payment.getPaymentData</summary>

* * *

This asynchronous API returns paymentResponseData, which contains the necessary information to complete a payment transaction, in the successCallback. This generally requires the UI to be shown to the users so that they can select the payment method, shipping address, and other transaction information. Based on the paymentRequestData object values, the Payment Sheet UI input fields and the values in paymentResponseData are framed.

### Syntax

```

voltmx.payment.getPaymentData(paymentRequestData,successCallback,errorCallback);
```  

### Input Parameters

1\. _paymentRequestData\[JSON Map Object\]_

Based on this object, the Payment Sheet UI input fields and the values in paymentResponseData are framed.

It has the following key-value pairs:

paymentRequestData : { "paymentCardsInfo" : { }, "shippingAddressInfo" : { }, "billingAddressInfo" : { }, "merchantInfo" : { }, "paymentSummary": { } }

1.1 _paymentCardsInfo\[JSON Map Object\]_

The information on supported payment cards is configured in this object. It has the following key-value pairs:

paymentCardsInfo : { "paymentCardNetworks" : \[ \], "paymentMethodType" : \[ \], "supportedCountries" : \[ \] }

1.1.1 _paymentCardNetworks\[JSON List Object\]_

It has the list of card networks to limit payments to specific network cards. The values allowed for this key are as follows:

*   voltmx.payment.NETWORK\_MASTERCARD
*   voltmx.payment.NETWORK\_VISA
*   voltmx.payment.NETWORK\_DISCOVER
*   voltmx.payment.NETWORK\_AMEX
*   voltmx.payment.NETWORK\_JCB
*   voltmx.payment.NETWORK\_INTERAC

**Note**: If no cards are specified, the default supported card networks will be voltmx.payment.NETWORK\_MASTERCARD, voltmx.payment.NETWORK\_VISA, voltmx.payment.NETWORK\_DISCOVER, and voltmx.payment.NETWORK\_AMEX.

### iOS-specific Constants

*   voltmx.payment.NETWORK\_SUICA
*   voltmx.payment.NETWORK\_QUICPAY
*   voltmx.payment.NETWORK\_IDCREDIT
*   voltmx.payment.NETWORK\_PRIVATELABEL
*   voltmx.payment.NETWORK\_CHINAUNIONPAY
*   voltmx.payment.NETWORK\_CARTESBANCAIRES
*   voltmx.payment.NETWORK\_CARTEBANCAIRES
*   voltmx.payment.NETWORK\_CARTEBANCAIRE

### Supported Values

```

paymentCardNetworks : [voltmx.payment.NETWORK_MASTERCARD, voltmx.payment.NETWORK_VISA]
```

1.1.2 _paymentMethodType\[JSON List Object\]_

It has a list of payment methods to limit payments to specific cards. The values allowed for this key are as follows:

**Note**: In iOS, 3DS cards are supported by default.

### iOS-specific Constants

*   voltmx.payment.METHODTYPE\_EMV: For Prepaid payment method type.
*   voltmx.payment.METHODTYPE\_CREDIT: For Credit payment method type.
*   voltmx.payment.METHODTYPE\_DEBIT: For Debit payment method type.

### Example

```

paymentMethodType : [voltmx.payment.METHODTYPE_CREDIT,voltmx.payment.METHODTYPE_DEBIT,voltmx.payment.METHODTYPE_EMV]
```

**Android-specific Constants**

*   voltmx.payment.METHODTYPE\_PREPAID: For prepaid cards.
*   voltmx.payment.METHODTYPE\_ANDROIDPAY: For cards added in Android Pay.
*   voltmx.payment.METHODTYPE\_GOOGLE : For cards added in Google Account.

**Note**: If no payment methods are specified , the default supported payment methods will be voltmx.payment.METHODTYPE\_GOOGLE and voltmx.payment.METHODTYPE\_ANDROIDPAY.

### Example

```

paymentMethodType : [voltmx.payment.METHODTYPE_PREPAID]
```

1.1.3 _supportedCountries\[JSON List Object\]_

It contains a list of ISO 3166 country codes to limit payments to cards from specific countries. Only values of type String are allowed for this key.

### Platform Availability

*   iOS

### Example

```

supportedCountries : [“IN”,“US”,“AU”]
```

1.2 _shippingAddressInfo\[JSON Map Object\]_

This object enables the Shipping Address fields in the Payment Sheet UI and shipping address values in paymentDataResponse. All the values entered by users in the Payment Sheet UI are returned to you in paymentDataResponse.

shippingAddressInfo has the following key value pairs:

shippingAddressInfo : { "name" : true, "postalAddress" : true , "email" : true, "phoneNumber" : false, "shippingType" : \[ \], "shippingMethod" : \[ \] }

1.2.1 _name\[boolean\]_

If this key value is true, the Name field is enabled under Shipping Address in the Payment Sheet.

**Note**: By default, the **name** key value is true.

For Android: The name and postalAddress fields are enabled if the **name** key value is true.

### Example

```

name : true
```

1.2.2 _postalAddress\[boolean\]_

If this key value is true, the postalAddress field is enabled under Shipping Address of the Payment Sheet.

**Note**: By default, the **postalAddress** key value is true.

For Android: The values for the name and postalAddress fields are enabled if the **postalAddress** key value is true.

### Example

```
postalAddress : true
```

1.2.3 _email\[boolean\]_

The default value is false.

For iOS: If this key value is true, the Email field is enabled under Shipping Address of the Payment Sheet.

For Android: By default, your registered email ID for your Google Play Store account is retrieved and that email ID is auto-populated in the Payment Sheet UI. The billingAddressInfo email and the shippingAddressInfo email fields are enabled if the email value is true.

### Example

```

email : true
```

1.2.4 _phoneNumber\[boolean\]_

The default value is false. If this key value is true, the phoneNumber field is enabled under Shipping Address of the Payment Sheet.

For Android: This value is taken into account only if the name or postal address field is enabled. The billingAddressInfo phoneNumber and the shippingAddressInfo phoneNumber fields are enabled if the phoneNumber value is true.

### Example

```

phoneNumber : true
```

1.2.5 _shippingType\[JSON list object\]_

This key specifies the shipping type of the purchased item. It can be any of the following values. The value of this key should be of type "VoltMX Constant."

### Platform Availability

*   iOS

### iOS-specific Constants

*   voltmx.payment.SHIPPINGTYPE\_SHIPPING
*   voltmx.payment.SHIPPINGTYPE\_ DELIVERY
*   voltmx.payment.SHIPPINGTYPE\_ STOREPICKUP
*   voltmx.payment.SHIPPINGTYPE\_ SERVICEPICKUP

### Example

```

shippingType : [voltmx.payment.SHIPPINGTYPE_SERVICEPICKUP]
```

1.2.6 _shippingMethod\[JSON List Object\]_

It defines the shipping method for delivering physical goods. The value of this key should be of type String. App developer-defined custom values are allowed for this key.

### Platform Availability

*   iOS

### Example

```

"shippingMethod":

[

    {
        "label": "Free shipping",

        "price": "0.00",

        "id": "free",

        "detail": "free delivery"
    },

    {
        "label": "Express shipping",

        "price": "10.00",

        "id": "express",

        "detail": "delivery in 3-4 days"
    }

]
```

1.2.7 _allowedShippingCountryCodes\[JSON List Object\]_

Adds a collection of ISO 3166-2 formatted country codes of the countries to which shipping is allowed in this transaction. If not specified, all the countries are considered to be allowed.

### Platform Availability

*   Android

### Example

```

allowedShippingCountryCodes : ["US", "CA"]
```

1.3 _billingAddressInfo\[JSON Map Object\]_

For iOS: This object enables/disables the Billing Address fields in the Payment Sheet UI. By default, the details entered by a user while adding a card is considered for billing address. All the values entered by a user in the Payment Sheet UI are returned to the app developer in paymentDataResponse.

For Android: The details entered by a user while adding a card are taken into consideration for the billing address. This object enables/disables the availability of billing address fields in paymentDataResponse.

It contains the followings key-value pairs:

billingAddressInfo : { "name" : true, "postalAddress" : true ,"email" : true, "phoneNumber" : false }

1.3.1 _name\[boolean\]_

By default, the Name field is enabled in the Payment Sheet UI.

For iOS: If this key value is true, the Name field is enabled under Billing Address of the Payment Sheet UI.

For Android: If the **name** key value is true, **name** and **postalAddress** are returned in the PaymentDataResponse billing address.

### Example

```

name : true
```

1.3.2 _postalAddress\[boolean\]_

The default value is true.

For iOS: If this key value is true, the postalAddress field is enabled under Billing Address of the Payment Sheet UI.

For Android: If the **postalAddress** key value is true, **name** and **postalAddress** are returned in the PaymentDataResponse billing address.

### Example

```

postalAddress : true
```

1.3.3 _email\[boolean\]_

The default value is false.

For iOS: If this key value is true, the email field will be available under Billing Address of the Payment Sheet UI.

For Android: If the **email** key value is true, the billingAddressInfo email and the shippingAddressInfo email fields are enabled.

### Example

```

email : true
```

1.3.4 _phoneNumber\[boolean\]_

The default value is false.

For iOS: If this key value is true, the phoneNumber field is enabled under Billing Address of the Payment Sheet UI.

For Android: This value is taken into consideration only if name or postalAddress is enabled. The billingAddressInfo phone number and the shippingAddressInfo phone number fields are enabled if the phoneNumber key value is true.

### Example

```

phoneNumber : true
```

1.3.5 _billingAddressFormat\[Volt MX Constant\]_

This sets the billing address format, which is returned in paymentDataResponse .

The following constants are allowed:

*   voltmx.payment.BILLING\_ADDRESS\_FORMAT\_MIN : When this format is used, the billing address returned contains only minimal information, including name, country code, and postal code. Note that some countries do not use postal codes, so the postal code field will be empty for those countries.
*   voltmx.payment.BILLING\_ADDRESS\_FORMAT\_FULL : When this format is used, the complete address details are returned as the billing address. You must only select this format when it is required to process the order, since it can increase friction during the checkout process and can lead to a lower conversion rate.

**Note**: By default, the voltmx.payment.BILLING\_ADDRESS\_FORMAT\_MIN format is applied.

### Platform Availability

*   Android

### Example

```

billingAddressFormat : voltmx.payment.BILLING_ADDRESS_FORMAT_FULL
```

1.4 _merchantInfo\[JSON Map Object\]_

This object configures the information of the merchant who is responsible for processing transactions.

It contains the following key-value pairs:

merchantInfo : { "merchantName" : "", "merchantID" : "", "countryCode" : "", "additionalParameters" : { } }

1.4.1 _merchantName\[String\]_

You must specify the name of the merchant here. It should be of type String. Merchants authorized by native platforms are allowed here. If voltmx.payment.TOKENIZATION\_GATEWAY is selected for tokenizationType, merchantName is mandatory.

### Platform Availability

*   Android

### Example

```

merchantName :  “Stripe”
```

1.4.2 _merchantID\[String\]_

You must specify the merchant registration ID here. It should be of type String. This is a mandatory field. If merchantID is not specified, error code 103 is returned in errorcallback.

For Android : If voltmx.payment.TOKENIZATION\_GATEWAY is selected for tokenizationType, merchantID is mandatory.

### Example

```

merchantID : “pk_test_DCYXN0nOheeRbbf4KlNdUB9I”
```

1.4.3 _countryCode\[String\]_

Two-letter ISO 3166 country code where the transaction will be processed. Value of this key should be of type String. This field is mandatory. If countryCode is not specified, error code 105 is returned in errorcallback.

### Platform Availability

*   iOS

Example

```

countryCode :  “IN”
```

1.4.4 _additionalParameters\[JSON Map Object\]_

This key is used when an app developer wants to add custom options to a merchant's information. You can add custom option key-value pairs here.

### Example

```

additionalParameters : {"stripe:version" : 1.5, "TOKENIZATION_TYPE" : GATEWAY}
```

1.4.5 _tokenizationType\[VoltMX Constant\]_

This key configures the tokenization of paymentToken that is received in paymentResponseData. The following constants are applicable:

*   voltmx.payment.TOKENIZATION\_GATEWAY: This is the default constant. The card selected by the buyer will be tokenized by using Payment Gateway API.
*   voltmx.payment.TOKENIZATION\_DIRECT: When this constant is used, the payment method selected by the buyer is returned directly to the integrator.

**Notes**:

*   When voltmx.payment.TOKENIZATION\_GATEWAY is selected, merchantName and merchantID are mandatory.
*   When voltmx.payment.TOKENIZATION\_DIRECT is selected, publicKey is mandatory.

### Platform Availability

*   Android

### Example

```

tokenizationType : voltmx.payment.TOKENIZATION_DIRECT
```

1.4.6 _publicKey\[String\]_

If voltmx.payment.TOKENIZATION\_DIRECT is selected, publicKey is mandatory. This public key is used to encrypt the returned token.

### Example

```

publicKey : "abc123"
```

1.5 _paymentSummary\[JSON Map Object\]_

This object summarizes the amount, type, and currency code of the payment. It contains the following key-value pairs:

paymentSummary : { currenyCode : "", priceDetails : { } }

1.5.1 _currencyCode\[String\]_

You must specify the ISO 4217 currency code of the transaction here. This is a mandatory field. If currencyCode is not specified, error code 102 is returned in errorcallback.

### Example

```

currencyCode : “USD”
```

1.5.2 _priceDetails\[JSON Map Object\]_

This object configures the price details of a transaction. It has the following keys:

1.  **price**: Price of the transaction. It should follow the regex format: \[0-9\]+(\\.\[0-9\]\[0-9\])? (for example, "10.45"). This is a mandatory field. If price is not specified, error code 106 is returned in errorcallback.
2.  **priceStatus**: Indicates whether or not the amount is final. The following constants are allowed for priceStatus:
    1.  voltmx.payment.PRICE\_STATUS\_ESTIMATED: The total price is an estimated price. The final price may still change depending on the selected shipping address and other factors.
    2.  voltmx.payment.PRICE\_STATUS\_FINAL: This is the default value. The total price is the final total price of the transaction, and it does not change based on the selection made by the buyer.
    3.  voltmx.payment.PRICE\_STATUS\_UNKNOWN : This is used when the total price is not known at the time.
3.  **label**: Specific to iOS. A short, localized description of the item. This is a mandatory field. If label is not specified, error code 106 is returned in errorcallback.
4.  **Android** : Total price of the transaction and its status must be specified here.  
    Example: priceDetails : { "price" : 10.45 , "priceStatus" : voltmx.payment.PRICE\_STATUS\_FINAL }
5.  **iOS**: The array of payment items are specified here. Payment items can be tax, discount, or amount.  
    Example: priceDetails : \[{ "label" : tax , "price" : 10.45, "priceStatus" : voltmx.payment.PRICE\_STATUS\_FINAL }, { "label" : discount, "price" : 5.45, "priceStatus" : voltmx.payment.PRICE\_STATUS\_FINAL } \]

2\. _successCallback(paymentResponseData)_

When the getPaymentData call is successful, this callback is invoked with the paymentResponseData Object. The paymentResponseData Object contains shippingAddress, selected card details, and payment token. This information is used to complete the transaction with the merchant.

2.1 _billingAddressInfo_

The billing postal address, name, email, and phone number details are returned in this key.

### Platform Availability

*   Android

2.1.1 _name_

The billing postal address information is returned in this key.

### Example

```

var billingName = paymentResponseData.billingAddressInfo.name;
```

2.1.2 _email_

The billing email address is returned in this key.

### Example

```

var billingemail = paymentResponseData.billingAddressInfo.email;
```

2.1.3 _phoneNumber_

The billing phone number is returned in this key.

### Example

```

var billing_phone = paymentResponseData.billingAddressInfo.phoneNumber;
```

2.1.4 _locality_

The billing locality is returned in this key. If the city, town, etc., details are not specified, the value defaults to "".

### Example

```

var billing_locality = paymentResponseData.billingAddressInfo.locality;
```

2.1.5 _administrativeArea_

The billing administrativeArea is returned in this key. If the state, province, etc., details are not specified, the value defaults to "".

### Example

```

var billing_state = paymentResponseData.billingAddressInfo.administrativeArea;
```

2.1.6 _country_

The billing country is returned in this key. If the country details are not specified, its value defaults to "".

For Android : The 2-letter ISO-3166 country code.

For iOS: The country name.

### Example

```

var billing_country = paymentResponseData.billingAddressInfo.country;
```

2.1.7 _postalCode_

The billing postalCode is returned in this key. If the postal, zip code, etc., details are not specified, its value defaults to "".

### Example

```

var billing_postalCode = paymentResponseData.billingAddressInfo.postalCode;
```

2.1.8 _area_

The billing local area is returned in this key. If it is not specified, the value defaults to "".

### Example

```

var billing_area = paymentResponseData.billingAddressInfo.area;
```

2.2 _shippingAddressInfo_

The shipping postal address, name, email, and phone number details are returned in this key.

2.2.1 _name_

The shipping address information is returned in this key.

### Example

```

var billingName = paymentResponseData.shippingAddressInfo.name;
```

2.2.2 _email_

The shipping email address is returned in this key.

### Example

```

var billingemail = paymentResponseData.shippingAddressInfo.email;
```

2.2.3 _phoneNumber_

The shipping phone number is returned in this key.

### Example

```

var billing_phone = paymentResponseData.shippingAddressInfo.phoneNumber;
```

2.2.4 _locality_

The shipping locality is returned in this key. If the city, town, etc., details are not specified, the value defaults to "".

### Example

```

var shipping_locality = paymentResponseData.shippingAddressInfo.locality;
```

2.2.5 _administrativeArea_

The shipping administrativeArea is returned in this key. If the state, province, etc., details are not specified, the value defaults to "".

### Example

```

var shipping_state = paymentResponseData.shippingAddressInfo.administrativeArea;
```

2.2.6 _country_

The shipping country is returned in this key. If it is not specified, the value defaults to "".

For Android : The 2-letter ISO-3166 country code.

For iOS: The country name.

### Example

```

var shipping_country = paymentResponseData.shippingAddressInfo.country;
```

2.2.7 _postalCode_

The shipping postalCode is returned in this key. If the postal, zip code, etc., details are not specified, the value defaults to "".

### Example

```

var shipping_postalCode = paymentResponseData.shippingAddressInfo.postalCode;
```

2.2.8 _area_

The shipping local area is returned in this key. If it is not specified, the value defaults to "".

### Example

```

var shipping_area = paymentResponseData.shippingAddressInfo.area;
```

2.3 _selectedCardInfo_

The selected card network, payment method type, and card number are returned in this key.

2.3.1 _cardNetwork_

The selected card network is present in this key. Volt MX constants are returned in this key.

### Example

```

var card_network = paymentResponseData.selectedCardInfo.cardNetwork;
```

2.3.2 _cardPaymentMethod_

The selected card pay method (Credit, Debit, Prepaid ) is present in this key. Volt MX constants are returned in this key.

### Example

```

var card_class =  paymentResponseData.selectedCardInfo.cardPymentMethod;
```

2.4 _paymentToken_

Transaction token is returned in this key.

### Example

```

var token = paymentResponseData.paymentToken;
```

2.5 _transactionID_

The unique ID assigned to this payment transaction by native platform.

### Example

```

var token = paymentResponseData.transactionID;
```

3\. _errorCallback\[JSON Object\]_

When the getPaymentData() call fails, this callback is invoked with any of the error codes:

*   101 for not specifying "price".
*   102 for not specifying "currencyCode".
*   103 for not specifying "merchantName".
*   104 for not specifying "merchantID".
*   105 for not specifying "countryCode".
*   106 for not specifying "label".
*   107 for not specifying "publicKey"

### Return Values

If the getPaymentData call is successful, successCallback is invoked with paymentDataResponse; else, errorCallback is invoked.

### Example

```

var paymentCardsInfo = {
    "paymentCardNetworks": [voltmx.payment.NETWORK_MASTERCARD, voltmx.payment.NETWORK_VISA],
    "paymentMethodType": [voltmx.payment.METHODTYPE_PREPAID, voltmx.payment.METHODTYPE_ANDROIDPAY,
        voltmx.payment.METHODTYPE_GOOGLE
    ]
};
var shippingAddressInfo = {
    "name": true,
    "postalAddress": true,
    "email": true,
    "phoneNumber": true,
    "allowedShippingCountryCodes": ["US", "CA"]
};
var billingAddressInfo = {
    "name": true,
    "postalAddress": true,
    "email": true,
    "phoneNumber": true,
    "billingAddressFormat": voltmx.payment.BILLING_ADDRESS_FORMAT_FULL
};
var merchantInfo = {
    "merchantName": "stripe",
    "merchantID": "pk_test_DCYXN0nOheeRbbf4KlNdUB9I",
    "additionalParameters": {
        "stripe:publishableKey": "pk_test_DCYXN0nOheeRbbf4KlNdUB9I",
        "stripe:version": "5.1.0"
    }
};
var paymentSummary = {
    "currencyCode": "USD",
    "priceDetails": [{
        "label": "Tax",
        "price": 10.45,
        "priceStatus": voltmx.payment.PRICE_STATUS_FINAL
    }]
};
var paymentRequestData = {
    "paymentCardsInfo": paymentCardsInfo,
    "shippingAddressInfo": shippingAddressInfo,
    "billingAddressInfo": billingAddressInfo,
    "merchantInfo": merchantInfo,
    "paymentSummary": paymentSummary
};
voltmx.payment.getPaymentData(getPaymentDataSuccessCallback, getPaymentDataErrorCallback, paymentRequestData);
```

### Platform Availability

*   Android
*   iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.payment.getSupportedPaymentNetworks</summary> 

* * *

Returns the list of available payment networks that are supported by Apple Pay.

### Syntax

```

getSupportedPaymentNetworks()
```

### Example

```

var supportedNetworksList = voltmx.payment.getSupportedPaymentNetworks();
```

### Return Values

An array of constants that represent the available payment networks. The values returned by this function are as follows:

*   AmEx
*   CarteBancaire
*   CarteBancaires
*   CartesBancaires
*   ChinaUnionPay
*   Discover
*   Interac
*   iD
*   JCB
*   MasterCard
*   PrivateLabel
*   QUICPay
*   Visa

### Platform Availability

*   iOS

* * *

</details>
<details close markdown="block"><summary>voltmx.payment.updateTransactonResponse(voltmxconstant)</summary> 

* * *

For iOS, on receiving the payment token, the Payment Sheet UI is not automatically dismissed. You must invoke this API to complete the end-to-end transaction by using the payment token and informing the result of the transaction to the native platform. The native platform then dismisses the Payment Sheet UI and displays any of the appropriate messages as follows:

*   voltmx.payment.TRANSACTION\_SUCCESS : If the transaction is successful.
*   voltmx.payment.TRANSACTION\_FAILED : If the transaction is unsuccessful.

### Syntax

```

updateTransactionResponse()
```

### Example

```

voltmx.payment.updateTransactionResponse(voltmx.payment.TRANSACTION_SUCCESS);
```

### Platform Availability

*   iOS

* * *
</details>

![](resources/prettify/onload.png)
