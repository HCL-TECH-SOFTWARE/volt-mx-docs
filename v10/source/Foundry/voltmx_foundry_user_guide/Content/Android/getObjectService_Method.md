                              

User Guide: [SDKs](../Foundry_SDKs.md) > [Android SDK](Installing_Android_SDK.md) > [Invoking an Object Service](Invoking_an_Object_Service.md) > getObjectService Method

getObjectService Method
=======================

The **getObjectService Method** gets the current instance of the object service. The getObjectService method is invoked on the SDK instance; **init** must run successfully before invoking this method.

Syntax
------

```
 getObjectService(String serviceName)
```

Return Type
-----------

ObjectService Instance

Parameters
----------

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| servicename | String | Name of the object service | Yes |

Code
----

```
 VoltMXClient client = new VoltMXClient();
client.initAsync(getApplicationContext(), < appkey > , < appSecret > , < serviceUrl > , new InitCallback() {
    @Override
    public void onSuccess(JSONObject serviceDoc) {
        voltmx.print("Init Success");
        ObjectService objSVC = client.getObjectService( < servicename > );
    }

    @Override
    public void onFailure(VoltMXException voltmxException) {
        voltmx.print("Init failed");
    }
});
```
