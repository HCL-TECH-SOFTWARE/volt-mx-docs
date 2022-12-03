                             

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Setting User ID

Setting User ID  

------------------

The **setUserID** API sets the user ID for the data gathered from an application. The user ID allows the data to be tracked on a user basis for broad analysis like how many different users used the application. It also helps to track activities of a specific user, which can help in seeing what activities were done before a crash, or what events led to a transaction not passing through. The user ID allows the same user to be tracked across different devices as well.

```
// Sample code for the setUserID API
voltmx.setUserID("userID");
```

> **_Note:_** **HCLMetricsService.setUserId** has been removed from apps built with Volt MX Iris Enterprise.
