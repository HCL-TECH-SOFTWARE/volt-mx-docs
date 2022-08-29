                               

User Guide: [Integration](Services.md#integration) \> [Advanced Configurations](Advanced_Configurations.md) > Resource URL/Front End URL

### Custom Front End URL

#### Resource URL/Front End URL

From Volt MX Foundry V8 SP3 onwards, using Volt MX Foundry, you can map your endpoint/back-end URL of an operation to a front-end URL. The front-end URL of an operation contains custom details, which does not expose in the original details of the back-end URL. So, you can use the front-end URL to send request to the back-end securely, instead of the original back-end URL.

For example:

*   The following is a sample back-end URL of an operation to send a request:
```
 BaseURL/Services/<Integration_Service_Name>/<Operation_Name>
```
    
       For example,
```
 http://news.google.com/Services/<Integration_Service_Name>/<Operation_Name>
```
*   The following is a sample **front end URL** of an operation to send a request:
```
 /Services/<Integration_Service_Name>/<Operation_Path>
```

> **_Note:_** To walk-through defining front-end URLs for service APIs with Volt MX Foundry, take a look at our hands-on tutorial for [API Management – Front End URLs](https://youtu.be/SyU1Z5TV9rU).

Advantages:

*   A front-end URL contains a custom data, which does not expose the original data of the back-end operation.
*   You can map more than one front-end URLs to one base back-end URL and perform different operations. For example, you can configure four of the front-end URLs to perform CRUD operations based on the same back-end URL.

> **_Note:_** By default, the **Front End URL** check box is not selected. And the URL path (populated with an operation name by default) in the **Resource Path** field is disabled from editing.

To enable a front end URL, do the following:

1.  Create an operation for an in integration service.
2.  In the Operation configuration page, in the **Advanced** section, select the **Front End URL** check box. The **Resource Path** field is editable now.
3.  Configure the front-end URL in the **Resource Path** field.
    
    By default, the **Resource Path** field is configured with the `/Services/<Integration_Service_Name>/<Operation_path>`.
    
    The `<Operation_Path>` is the operation name. You can add request input parameters to the path as verbs. This is optional.
    
4.  Configure `request input parameters` as `verbs` in a in curly braces ( { } ) to the **Operation\_path**, if required.
    
    For example:
    
```
 /Services/<Integration_Service_Name/<Operation_Name>/{Request_Input_Param}
```
5.  Save the operation.

> **_Important:_** If you clear the **Front End URL** check box, the Console resets the default value in the URL path. And you cannot access the endpoint by using the **front-end URL** that you configured earlier.

The Front-end URL is divided into two parts.

  
| /Services/<Integration\_Service\_Name>/ | <Operation\_Path> |
| --- | --- |
| You cannot edit the value in the `/Services/`. The `/<Integration_Service_Name>/` is the auto-generated name as per the name that you specify for the integration service. | You can enter the appropriate name for the front-end URL of the operation. > **_Note:_** An `Operation_Path` can be `/<Operation_Name>`  or  `/Operation_name>/{Request_Input_param}` |

#### Resource Method/Front End HTTP Method

You can select which HTTP method to invoke on the integration server. Select the Front End HTTP Method field. By default, the field is set to Post method.

> **_Note:_** The front-end HTTP methods are used for all non-SDK clients such as API Management users. Invoking a service from an SDK will continue to use the POST method for operations.
