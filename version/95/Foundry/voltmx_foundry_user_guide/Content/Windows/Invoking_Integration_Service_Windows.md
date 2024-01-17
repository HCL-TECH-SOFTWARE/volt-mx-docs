                              

User Guide: [SDKs](../Foundry_SDKs.md) > [.NET (Visual Studio) SDK](Installing_Windows_SDK.md) > GetIntegrationService method

Invoking an Integration Service
===============================

To invoke an Integration service, use the SDK class **GetIntegrationService()** method to get the service object. To invoke an operation, use the returned IntegrationService object.

GetIntegrationService
---------------------

This API retrieves an IntegrationService instance with the specified service name.

### Signature

```
 IntegrationService GetIntegrationService(string serviceName)	
```

### Input Parameters

serviceName

The name of the service.

### Return Values

Returns an IntegrationService object.

### Exceptions

System.Exception

The API throws this exception when not initialized, the claim token is undefined, or the service is undefined.

### Example

```
 // Sample code to fetch the integration service details. Kony.KonyService integrationSvc;
var serviceName = < your - service - name > ;
try {
    integrationSvc = sdkObject.GetIntegrationService(serviceName);
} catch (Exception e) {
    Console.WriteLine("Invalid Service");
}
```

InvokeOperation
---------------

The **InvokeOperation** method invokes the specified operation. This method may take a few seconds, so it is available as either a synchronous or asynchronous call.

### Signature

Synchronous

```
 JObject InvokeOperation(string operationName, Dictionary<string, string> headers, Dictionary<string, string> parameters)
```

Asynchronous

```
 async Task<JObject> InvokeOperationAsync(string operationName, Dictionary<string, string> headers, Dictionary<string, string> parameters)	
```

### Input Parameters

operationName

The name of the operation.

headers

HTTP request header key value pairs.

parameters

HTTP request parameter key value pairs.

### Return Values

Returns an HTTP Response as a JSON object.

### Exceptions

Volt MX  FoundryException

The **InvokeOperation** method throws this exception when either Name or URL is either empty or null.

### Example

Asynchronous

```
  // Sample code to invoke the specified operation asynchronously.// sdk.Object is the SDK object.
string serviceName = < your - service - name > ;
string operationName = < your - operation - name > ;
Dictionary < string, string > params = new Dictionary < string, string > ();
Dictionary < string, string > headers = new Dictionary < string, string > ();
JObject result;

try {
    integrationSvc = sdkObject.GetIntegrationService(serviceName);
    result = await integrationSvc.InvokeOperationAsync(operationName, headers, params);
} catch (Exception e) {
    if (integrationSvc == null) {
        Console.WriteLine("Invalid Service");
    } else {
        Console.WriteLine("Invoke operation failed");
    }
}
```
