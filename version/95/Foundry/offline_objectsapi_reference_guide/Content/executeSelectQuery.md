
# VMXFoundry.OfflineObjects.executeSelectQuery

The application-level API, **executeSelectQuery** allows the user to execute any select query on device database. The API executes the query provided as an argument on the device database and returns the response in successCallback.

The failureCallback is invoked in case of errors such as invalid query and so on.

> **_Note:_** **executeSelectQuery** should be preferred only if the object-level **read** API is not able to serve the purpose such as **join based select** queries or complex SQL queries.

> **_Note:_** **executeSelectQuery** supports only **read** or **select** queries. The API does not support **create** or **update** or **delete** operations on the device database.

## Volt MX Iris (JavaScript)

> **_Note:_** Not supported for Mobile Web, and Desktop Web channels.

### Signature

```
VMXFoundry.OfflineObjects.executeSelectQuery(query, successCallback, failureCallback)
```

### Parameters

| Parameter       | Type     | Description                                              | Required |
| --------------- | -------- | -------------------------------------------------------- | -------- |
| query           | String   | Select query to be executed on device DB.                | Yes      |
| successCallback | Function | The function is invoked upon successful query execution. | Yes      |
| failureCallback | Function | The function is invoked on failure.                      | Yes      |

### Return Type

void

### Example

```
function successCallback(response) {
//response contains records returned from device db for query executed.
}

function failureCallback(error) {
voltmx.print("executeSelectQuery failed with error:" + error.code);
}
var query = "Select * from Employee where EmployeeID=5";
VMXFoundry.OfflineObjects.executeSelectQuery(query, successCallback, failureCallback);
```

## Android (Java)

### Signature

```
void <OfflineObjects>.executeSelectQuery(String query, final VMXCallback callback)
```

### Parameters

| Parameter | Type        | Description                                                                                      | Required |
| --------- | ----------- | ------------------------------------------------------------------------------------------------ | -------- |
| query     | String      | Select query to be executed on device DB.                                                        | Yes      |
| callback  | VMXCallback | The application must implement **onSuccess** and **onFailure** methods of VMXCallback interface. | Yes      |

### Return Type

void

### Example

```
VoltMXClient sdk = new VoltMXClient();
IVoltMXApplicationSync appSync = sdk.getOfflineObjects();
String query = "Select * from Employee where EmployeeID=5";
appSync.executeSelectQuery(query, new VMXCallback() {
@Override
public void onSuccess(Object object) {
//response contains records returned from device db for query executed.
}
@Override
public void onFailure(Object error) {
OfflineObjectsException e = (OfflineObjectsException) error;
Log.d("executeSelectQuery", "executeSelectQuery failed with error:" + e.getMessage() + "callstack: " + e.getStackTrace());
}
});
```

## iOS (Objective C)

### Signature

```
(void) <OfflineObjects>.executeSelectQuery:(NSString *)query
onSuccess:(VMXSuccessCompletionHandler)onSuccess
onFailure:(VMXFailureCompletionHandler)onFailure
```

### Parameters

| Parameter | Type                        | Description                                            | Required |
| --------- | --------------------------- | ------------------------------------------------------ | -------- |
| query     | NSString*                  | Select the query to be executed on device DB.          | Yes      |
| onSuccess | VMXSuccessCompletionHandler | The function is invoked on successful query execution. | Yes      |
| onFailure | VMXFailureCompletionHandler | The function is invoked on failure.                    | Yes      |

### Return Type

void

### Example

```
VMXClient _ sdk = [VMXClient sharedClient];
OfflineObjects _ applicationSync = [sdk getOfflineObjects];
NSString _ query = @"Select _ from Employee where EmployeeID=5"
VMXSuccessCompletionHandler onSuccess = ^ void(id object) {
NSLog(@"executeSelectQuery successful");
};

VMXFailureCompletionHandler onFailure = ^ void(id object) {
NSLog(@"executeSelectQuery failed");
};
[applicationSync executeSelectQuery: query
onSuccess: onSuccess
onFailure: onFailure
];
```
