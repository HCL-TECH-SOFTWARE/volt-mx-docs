                               

User Guide: [SDKs](../Foundry_SDKs.md) > [VoltMX Iris SDK](Installing_VoltMXJS_SDK.md) > Cache Service Response for Integration and Object Service

Cache Service Response for Integration and Object Service
=========================================================

The Cache service response feature provides a non -persistent cache for storing response from integration and object service operations. The stored response can be retrieved by cacheID. Consequently, you can avoid making additional network calls for read-only data.

<table style="width: 100%;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Usage</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Optional parameters <span style="font-family: monospace;">useCache</span>, <span style="font-family: monospace;">cacheID</span> and <span style="font-family: monospace;">expiryTime</span> are used to save and retrieve the responses from the cache for both Integration Service and Object Service. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>Cache size is 100 by default .<table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 123px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><thead><tr class="TableStyle-Basic-Head-Header1"><th class="TableStyle-Basic-HeadE-Column1-Header1">Parameter</th><th class="TableStyle-Basic-HeadE-Column1-Header1">Type</th><th class="TableStyle-Basic-HeadD-Column1-Header1">Description</th></tr></thead><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">useCache</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Boolean</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The parameter to enable the cache service. If the parameter is enabled, SDK generates a unique key for the operation and cache the result with it. The same key is sent in response JSON&nbsp;with key cacheID. Existing entries with the same key will be overridden.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">cacheID</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Key to set or retrieve the mapping from the cache. If the key is not found, the requested operation is performed and the response is mapped to a key in the cache.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">expiryTime</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Non zero positive Integer</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Expiry time in seconds for the key in cache. If expired, responses are removed from the cache. The parameter can be set while adding a new response to cache, and it cannot be updated further.</td></tr></tbody></table></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Features Supported</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Integration Service, Object Service fetch</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Platforms Supported</td><td class="TableStyle-Basic-BodyD-Column1-Body1">IDE</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Scope</td><td class="TableStyle-Basic-BodyD-Column1-Body1">The scope of the feature is limited to the application level.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">API</td><td class="TableStyle-Basic-BodyA-Column1-Body1"><b>Integration</b><pre class="prettyprint"><input type="button" id="button" class="btn" style="float: right;" value="Copy" onclick="var codeSnippet = this.parentNode.textContent; copyFunction(codeSnippet, this);"> IntegrationClient.invokeOperation(operationName, headers, params, successCallback, failureCallback, options) </pre><table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><thead><tr class="TableStyle-Basic-Head-Header1"><th class="TableStyle-Basic-HeadE-Column1-Header1">Parameter</th><th class="TableStyle-Basic-HeadD-Column1-Header1">Type</th></tr></thead><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Operation Name</td><td class="TableStyle-Basic-BodyD-Column1-Body1">String</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">headers</td><td class="TableStyle-Basic-BodyD-Column1-Body1">JSON</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">params</td><td class="TableStyle-Basic-BodyD-Column1-Body1">JSON</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Function</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">failueCallback</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Function</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">options</td><td class="TableStyle-Basic-BodyA-Column1-Body1">JSON</td></tr></tbody></table><p><b>Object Service</b></p><pre class="prettyprint"><input type="button" id="button" class="btn" style="float: right;" value="Copy" onclick="var codeSnippet = this.parentNode.textContent; copyFunction(codeSnippet, this);"> ObjectClient.fetch(options, successCallback, failureCallback)</pre><table style="width: 100%;mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><thead><tr class="TableStyle-Basic-Head-Header1"><th class="TableStyle-Basic-HeadE-Column1-Header1">Parameter</th><th class="TableStyle-Basic-HeadD-Column1-Header1">Type</th></tr></thead><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">option</td><td class="TableStyle-Basic-BodyD-Column1-Body1">JSON</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyD-Column1-Body1">function</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyA-Column1-Body1">function</td></tr></tbody></table></td></tr></tbody></table>

> **_Note:_** You can remove any key from cache explicitly using new voltmx.sdk.ClientCache().remove(cacheID) .

**Sample Code**

```
//Integration Service 
function cache_integration_svc_response() {
    var options = {};
    var responseCacheKey;
    options["useCache"] = true;

    //Optional
    //options["cacheID"] = "cachedEmployeeDetailsResponse";
    //options["expiryTime"] = 30;  - Assign expiry time for the current response if desired

    try {
        var serviceName = "integration_service_name";
        // Get an instance of SDK
        var client = voltmx.sdk.getCurrentInstance();
        var integrationSvc = client.getIntegrationService(serviceName);
        var operationName = "operation_name";
        integrationSvc.invokeOperation(operationName, null, null,
            function(response) {
                // Save the response cache key
                responseCacheKey = response["cacheID"];
                voltmx.print("Success: " + JSON.stringify(response));

            },
            function(error) {
                voltmx.print("Failure: " + JSON.stringify(error));
            },
            options);


        // Try fetching employee details using cacheID
        options = {};
        options["useCache"] = true;
        options["cacheID"] = responseCacheKey;

        integrationSvc.invokeOperation(operationName, null, null,
            function(response) {
                // Save the response cache key
                responseCacheKey = response["cacheID"];
                voltmx.print("Success: " + JSON.stringify(response));

            },
            function(error) {
                voltmx.print("Failure: " + JSON.stringify(error));
            },
            options);

    } catch (exception) {
        alert("Integration Service Connect Failed " + exception.message);
    }
}

//Object Service
function cache_object_svc_fetch() {
    var responseCacheKey;

    var objSvc = voltmx.sdk.getCurrentInstance().getObjectService(serviceName, {
        "access": "online"
    });

    var dataObject = new voltmx.sdk.dto.DataObject("ObjectName");

    var options = {
        "dataObject": dataObject
    };

    options["useCache"] = true;

    //Optional
    //options["cacheID"] = "cachedEmployeeDetailsResponse";
    //options["expiryTime"] = 30;  - Assign expiry time for the current response if desired

    objSvc.fetch(options,
        function(response) {
            responseCacheKey = successRes["cacheID"];
            voltmx.print("Success: " + JSON.stringify(response));

        },
        function(error) {
            voltmx.print("Failure: " + JSON.stringify(error));
        });

    // Try fetching employee details using cacheID
    options = {};
    options["useCache"] = true;
    options["cacheID"] = responseCacheKey;

    objSvc.fetch(options,
        function(response) {
            responseCacheKey = successRes["cacheID"];
            voltmx.print("Success: " + JSON.stringify(response));

        },
        function(error) {
            voltmx.print("Failure: " + JSON.stringify(error));
        });
}
```
