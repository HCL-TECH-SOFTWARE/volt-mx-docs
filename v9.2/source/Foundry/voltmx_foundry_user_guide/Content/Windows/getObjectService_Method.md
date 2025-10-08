                             

User Guide: [SDKs](../Foundry_SDKs.md) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.md) > [Invoking an Object Service](Objects_API_Reference.md) > Creating an ObjectService Object

Creating an ObjectService Object
================================

The following example shows how to create an instance of the ObjectService class. This example first creates an instance of the SDK. It then calls the **Init** method before creating the ObjectService instance.

Example
-------

```
 public void GetObjectServiceHandle() {
    VoltMX.SDK sdkObject = new VoltMX.SDK();
    try {
        sdkObject.Init("<app_key>", "<app_secret>", "<service_url>");
        VoltMX.ObjectService objectsvc = sdkObject.ObjectServices("sapobj");
    } catch (Exception e) {
        sdkObject.Log("GetObjectService Failed");
    }
}
```
