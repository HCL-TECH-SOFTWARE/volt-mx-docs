                             

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > Invoking an Integration Service

Invoking an Integration Service
===============================

```
 // Sample code to fetch the integration service details
KNYIntegrationService * integration = [
    [KNYIntegrationService alloc]
    initWithServiceName: @"<service-name>"
];

NSDictionary * headers = @ {@
    "<header-name1>": @"<header-value1>",
    @"<header-name2>": @"<header-value2>"
};

NSDictionary * parameters = @ {@
    "<param-name1>": @"<param-value1>",
    @"<param-name2>": @"<param-value2>"
};

[integration invokeOperationInBackgroundWithOperationName: @"<operation-name>"
    headers: headers
    parameters: parameters
    completion: ^ (NSDictionary * objects, NSError * error) {
        if (error == nil) {
            // use data in 'objects' returned by the operation
            // ...
        } else {
            // handle the failure case here
            // use the details in 'error'
        }
    }
];
```
