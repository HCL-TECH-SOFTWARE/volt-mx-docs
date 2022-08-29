                            



Implementing Custom Metrics in Volt MX Iris
-------------------------------------------------

To implement custom metrics in Volt MX Iris, send data from your application to the custom metrics in Volt MX Cloud. You can also send custom metrics by calling a new API in Volt MX Iris, `HCLMetricsService.sendCustomMetrics (<form_name>,<json string>)`.

This API will initiate a service callback to Volt MX Server in a development cloud with service ID as **capturevoltmxcustommetrics**.

To define metrics in Volt MX Iris, follow these steps:

1.  In Volt MX Iris, design a form for an application.
2.  To implement the metrics for an application in Volt MX Iris, choose one of the following methods: 
    1.  Right-click on a form element. Define the metrics using `HCLMetricsService.sendCustomMetrics` in an **onClick** event by adding a code snippet to the Action Sequence.
    2.  Configure the metrics in a code module.
3.  Define the metrics.
    
    1.  The supported formats for key values are as follows:   
        Each JSON object in the following formats correspond to one set of associated data.
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
        /* Array of JSON Objects with single key: */  
        /* The following format is used if data is not associated. For example, **met1** and **met2** are unassociated data points. */
        [
            {
                "met1": "metVal1"
            },
            {
                "met2": "metVal2"
            }
        ]
                                
        /* JSON Array with single JSON object with multiple keys: */
        /* The following format is used for sending a single set of associated data. For example, you can check the value of met2 when the value of met1 is metVal1. */
        
        [
            {
                "met1": "metVal1",
                "met2": "metVal2"
            }
        ]
                                
        /* JSON array with multiple JSON objects: */
        /* The following format is used for sending or collecting multiple sets of associated data */
        [
            {
                "met1": "metVal1",  "met2": "metVal2"
            },
            {
                "met1": "metVal3",  "met2": "metVal4"
            }
        ]  
        
    }</code></pre></figure>
    
    The following example shows a custom metrics code defined for an element in Volt MX Iris.
    
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
        var custmetrics = [{"onSale":true,"prodName":"iPad 16 GB","prodPrice":450.0,"salePrice":400.0,"prodSKU":"1231sdf2","rating":4.5}]
        HCLMetricsService.sendCustomMetrics("frmProduct", custmetrics)
    }</code></pre></figure>
    
    For more information about metrics APIs, refer to [SDK documentation](../../../Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Installing_VoltMXJS_SDK.md#MetricsS).
    
4.  After you define the Custom Metrics in Volt MX Iris, rebuild and publish the application to the same cloud for which the custom metrics was defined.
5.  After the application is published and the appropriate trigger point is hit (button click or form load wherever the earlier API is called), metrics will be sent to cloud and stored for reporting purposes.
    

> **_Note:_** After the data is sent from an application, it takes about 15-20 minutes for the data to reflect on cloud reports.
