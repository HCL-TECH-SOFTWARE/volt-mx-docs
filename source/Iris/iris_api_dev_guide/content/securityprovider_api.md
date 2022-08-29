                             


Security Provider APIs
======================

The Android Framework relies on Security Providers to provide secure network communications. However, you might find intermittent vulnerabilities in the default security provider. To protect against such vulnerabilities, [Google Play Services](https://developer.android.com/google/play-services) provides a way to automatically update the security provider to enhance device protection. The voltmx.gms.installSecurityProvider and voltmx.gms.installSecurityProviderAsync APIs install a new security provider in the application process, **GmsCore\_OpenSSL**, that is set as the default security provider for the app. The security provider must be installed every time you restart an application process. By using the security provider APIs, you can install the security patches anytime during the application life cycle.

The Security Provider APIs use the `voltmx.gms Namespace` and contain the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.gms.getSecurityProvidersList](voltmx.gms_functions.md#getSecurityProvidersList) | Returns a list of names all the providers that were installed during the life cycle of the app. |
| [voltmx.gms.installSecurityProvider](voltmx.gms_functions.md#installSecurityProvider) | Installs the security provider from Google Play Services into the application's process synchronously, and sets the provider as the default security provider |
| [voltmx.gms.installSecurityProviderAsync](voltmx.gms_functions.md#installSecurityProviderAsync) | Installs the security provider from Google Play Services into the application's process asynchronously, by replacing the current security provider. |

 

By using the [voltmx.gms.installSecurityProvider](voltmx.gms_functions.md#installSecurityProvider) or [voltmx.gms.installSecurityProviderAsync](voltmx.gms_functions.md#installSecurityProviderAsync) APIs, you can ensure that the device has the latest updates that protect against security exploits. The [voltmx.gms.getSecurityProvidersList](voltmx.gms_functions.md#getSecurityProvidersList) API returns a list of all the providers (by name) that were installed during the app life cycle.

![](resources/prettify/onload.png)
