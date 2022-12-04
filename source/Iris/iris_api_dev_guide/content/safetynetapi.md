                             


SafetyNet APIs
==============

The Android SafetyNet provides a set of services and APIs that help protect your app against security threats, including device tampering, bad URLs, potentially harmful apps, and fake users. Usage of the SafetyNet APIs significantly reduces the frequency and impact of application security issues.

Support for the following set of SafetyNet APIs has been added as part of the Volt MX Iris V9 ServicePack 2 release:

Attestation API

The SafetyNet Attestation API is an anti-abuse API that allows app developers to assess the Android device that their app is running on. The API is used as a part of the abuse detection system to help determine whether servers are interacting with a genuine app running on a genuine Android device.

The SafetyNet Attestation API provides a cryptographically-signed attestation, assessing the integrity of the device. To create the attestation, the API examines the software and hardware environment of the device, looking for integrity issues, and comparing it with the reference data of approved Android devices. The generated attestation is bound to the nonce that the caller app provides, and also contains a generation timestamp and metadata about the requesting app.

Verify Apps API

The SafetyNet Verify Apps API allows your app to interact programmatically with the Verify Apps feature on a device, protecting the device against potentially harmful apps.

If your app handles sensitive user data (such as financial information), you must confirm that the current device is protected against malicious apps and is free of apps that may impersonate it or perform other malicious actions. If the security of the device does not meet the minimum-security posture, you can disable the functionality within your own app to reduce the danger to the user.

The Verify Apps API is distinct from the SafetyNet Attestation API. The Attestation API checks the integrity of a device, while the Verify Apps API checks whether there are potentially harmful apps installed on the device. For added security, you must verify the integrity of the device by using the Attestation API before using the Verify Apps API.

The SafetyNet API uses the `voltmx.gms Namespace` and the following API elements.

| Function | Description |
| --- | --- |
| [voltmx.gms.safetynet.attest](voltmx.gms_functions.md#attest) | Provides attestation results for the device. |
| [voltmx.gms.safetynet.enableVerifyApps](voltmx.gms_functions.md#enableVerifyApps) | Allows your app to invoke a dialog box requesting that the user enable the [Verify Apps](https://support.google.com/accounts/answer/2812853) feature. |
| [voltmx.gms.safetynet.isVerifyAppsEnabled](voltmx.gms_functions.md#isVerifyAppsEnabled) | Allows your app to determine whether the user is enrolled in the [Verify Apps](https://support.google.com/accounts/answer/2812853) feature. |
| [voltmx.gms.safetynet.listHarmfulApps](voltmx.gms_functions.md#listHarmfulApps) | Identifies a list of installed apps that are known to be potentially harmful to the device. |

 

The [voltmx.gms.safetynet.attest](voltmx.gms_functions.md#attest) API provides attestation results for the device. The [voltmx.gms.safetynet.listHarmfulApps](voltmx.gms_functions.md#listHarmfulApps) API displays a list of installed apps that are known to be potentially harmful to the device. The [voltmx.gms.safetynet.enableVerifyApps](voltmx.gms_functions.md#enableVerifyApps) and [voltmx.gms.safetynet.isVerifyAppsEnabled](voltmx.gms_functions.md#isVerifyAppsEnabled) APIs allow developers to enable and check whether the [Verify Apps](https://support.google.com/accounts/answer/2812853) feature is enabled on the device respectively.

For more information on SafetyNet APIs, refer Android documentation for [Attestation](https://developer.android.com/training/safetynet/attestation) and [Verify Apps](https://developer.android.com/training/safetynet/verify-apps) APIs.

![](resources/prettify/onload.png)
