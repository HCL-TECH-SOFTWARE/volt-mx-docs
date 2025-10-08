                             

URL Provider Support for XML, JSON, SOAP, and API Proxy
-------------------------------------------------------

URL Provider gives you a complete control to modify the endpoint URL for a service during actual invocation. Support of URL provider is supported by XML, JSON, SOAP, and API Proxy.

### Enabling URL Provider from Volt MX Foundry Console

From any of the supported service types, you can enable the URL provider in Foundry Console.

**To configure URL Provider in your service in the Integration Service definition tab, follow these steps:**

1.  In the **Name** field, enter a unique name for your service.
2.   In the **Service Type** drop-down menu, select _XML_, **JSON**, **SOAP**or **API Proxy**.
    
    You can enable URL provider from any of the supported service types.
    
3.  Click the **Advanced** tab to specify dependent JAR and API throttling. All options in the Advanced section are optional.
    
    *   **To specify the dependent JAR, follow these steps:**
        
        Select the JAR containing a valid URL provider class from the drop-down list, or click **Upload New** to browse the JAR file from your local system. The step allows you to further filter the data sent to the back end.
        
    *   Specify the qualified name of the URL provider class inside the jar. For example, org.yourorganization.Yourclassname.
        
4.  Click **Save** to save the service definition.

**To verify the URL provider registration in the created service, follow these steps:**

1.  In the **Integration** tab, you can view the created services. Click more options (a circle with three dots) across the created service.
2.  Select **Export as XML**.
3.  Open the downloaded XML file and verify the key **URL provider** followed by the provided class name.

#### How to write a URL Provider Class

**To write a URL provide class while creating a service, follow these steps:**

1.  Download the middleware-systems.jar file from Admin Console and include the file in the **libraries** folder of your project.
2.  Implement the interface and override the execute method with the following code
    
    For example, consider the interface as URLProvider2.
    
```
 public interface URLProvider2 {
        String execute(
            String endpointURL,
            Service serviceObject, 
            Map<String, Object> configParams, 
            DataControllerRequest request, 
            Map<String, Object> inputParams);
    }
```
    
    The key parameters in the earlier code sample are described as follows:
    
    *   endpointURL is the URL configured in Volt MX Foundry Console for the service.
    *   serviceObject is the operation object of the service, for which the URL provider is getting invoked.
    *   configParams are the properties of the service.
    *   request is the controllerRequest object of your app.
    *   inputParams is a mapping of strings and objects sent by your device.

For a sample implementation of URL provider class, refer to the following example:

```
 public class MyURLProvider implements URLProvider2 
{
    public String execute(
        String endpointURL,
        Service serviceObject, 
        Map<String, Object> configParams, 
        DataControllerRequest request, 
        Map<String, Object> inputParams)
    {
        // some condition you want to check
        if (<< your expression >>)
        {
              // modify your endpoint url here based on the config and input params
             return endpointurl;
        }
        // or return a default
        return endpointurl;
    }
}  

```
