

<objectService\>.getSdkObjectByName
==================================

The **<objectService\>.getSdkObjectByName** API returns an instance of VMXObj if the given object name is valid and belongs to the owning object service.

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

```
VMXObjSvc.getSdkObjectByName(CATEGORY)
```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| objectName | String | Name of the object that belongs to the current object service. | Yes |

### Return Type

An instance of VMXObj or undefined if object creation fails due to invalid name and so on.

### Example

```
try {
    var orgObjSvc = new voltmx.sdk.VMXObjSvc("Organization");
    var empObj = orgObjSvc.getSdkObjectByName("Employee");
} catch (err) {
    //Handles Exception.
}
```

Android (Java)
--------------

### Signature

```
VMXObj <VMXObjSvc>.getSdkObjectByName(String objectName) throws Exception
```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| objectName | String | Name of the object that belongs to the current object services. | Yes |

### Return Type

An instance of VMXObj or Exception in case of error.

### Example

```
try {
    VMXObjSvc orgObjSvc = new VMXObjSvc("Organization");
    VMXObj empObj = orgObjSvc.getSdkObjectByName("Employee");
} catch (Exception e) {
    Log.d("ObjectServiceSync", "ObjectService sync failed with error:" + e.getMessage());
}
```

iOS (Objective C)
-----------------

### Signature

```
(VMXObj *) <VMXObjSvc> getSdkObjectByName:(NSString *)objectName withError:(NSError *)error;

```

### Parameters

  
| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| objectName | NSString | Name of the object that belongs to current object service. | Yes |
| error | NSError | Error object percolation in case of any failure. | Yes |

### Return Type

An instance of VMXObj or nil in case of error.

### Example

```
NSError * error;
VMXObjSvc * orgObjSvc = [
    [VMXObjSvc alloc] initWithName: @"Organization"
    error: & error
];
If(! * error) {
    VMXObj * empObj = [orgObjSvc getSdkObjectByName: @"Employee"
        withError: & error
    ];
}
```
