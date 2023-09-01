
# Adding iOS app Capabilities for an app in VoltMx Iris:

To enable capabilities entitlement for an app in Volt MX Iris, follow these steps:

1. From the <b>Workspace</b> folder of the app, navigate to the resources/common directory.

2. Open the <b>quantum_nitro_configuration.json</b> file.

3. Add the <b>capability</b> key, and provide value as per apple documentation to the key, based on value that you want to provide for the app.

Here is a sample <b>quantum_nitro_configuration.json</b> file entry that enables Multipath TCP for the app:

```
    {
        "iOS":{
            "KRelease":{
                "Capabilites":{
                     "com.apple.developer.networking.multipath" : true,
                        "com.apple.security.application-groups" : ["group.com.example.mygroup"]
        },
        "BuildSettings":{
            }
         }
     },
        "Android":
        {
        }
    }
```


The following are the capabilities you can add to **quantum_nitro_configuration.json**

*   com.apple.developer.ClassKit-environment
*   com.apple.developer.default-data-protection
*   com.apple.developer.healthkit
*   com.apple.developer.healthkit.access
*   com.apple.developer.in-app-payments
*   com.apple.developer.networking.wifi-info
*   com.apple.developer.networking.multipath
*   com.apple.developer.storekit.external-link.account
*   com.apple.developer.storekit.external-purchase
*   com.apple.developer.weatherkit
*   com.apple.developer.storekit.external-purchase
*   com.apple.developer.siri
*   com.apple.developer.applesignin
*   com.apple.security.application-groups

More information about capabilities can be found on [apple documentation](https://developer.apple.com/documentation/bundleresources/entitlements).