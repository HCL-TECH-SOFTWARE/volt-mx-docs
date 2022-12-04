                             

User Guide: [SDKs](../Foundry_SDKs.md) > [Cordova (PhoneGap) SDK](Installing_PhoneGap_SDK.md) > Initializing the Cordova Client SDK

Initializing the Cordova Client SDK
===================================

Initialize Volt MX Foundry client with the following code, and start using the services provided in Volt MX Foundry. The initialization method fetches the configuration from Volt MX Foundry, and saves it in the cache. Later, the application uses the cached configuration. It is a synchronous call.

init
----

```
 //Sample code to initialize Volt MX Foundry Client
voltmxSDKObject = new voltmx.sdk();
voltmxSDKObject.init("<appKey>", "<appsecret>", "<serviceURL>", successCallback, errorCallback);
```
