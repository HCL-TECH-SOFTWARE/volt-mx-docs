                              

User Guide: [APIs in API Management](API_Management.md) > [How to Configure CORS and Identity Session Timeout in APIs](#service-configuration) > How to Configure CORS in APIs

Service Configuration
=====================

After an Identity service is configured, from Service Configuration section, you can configure session timeout (idle timeout and fixed timeout) for an app identity session which applies across to all the apps that use this service. You can also configure cross-domain security settings, security headers from here.

Click **API Management** > **APIs** > **Identity** > **Service Configuration** to navigate to the Service Configuration page.

> **_Important:_** At least one identity service must be configured before you can enable cross-domain security.

You can do the following from the Service Configuration page:

*   Configure [Identity service security](#identity-service-security-settings) settings.
*   Set the identity timeout duration. In the **Identity Timeout Settings** section > **Session Duration** box, type required duration in HH:SS.
*   Add custom response headers in a valid JSON array. These headers will be appended to the response of identity requests originating from applications. In the Custom Response Headers box, type the required response headers in the following format:  
    `[{"name":"X-Content-Type-Options","value":"abc"}, {"name":"X-Frame-Options","value":"deny"}]`  
    
*   Click **Save**.
    

Identity Service Security Settings
----------------------------------

The Identity service security settings allow external web applications on existing domains to access the Identity service in your Volt MX Foundry account. You can configure the following from this section:

*   **XDomain proxy for Internet Explorer 8 and Internet Explorer 9** - To enable it, select the **Enable XDomain Proxy for IE 8 & 9 Support** check box.
*   **Cross-origin resource sharing (CORS)** - It allows external web applications on existing domains to access the identity service in your Volt MX Foundry account. To enable CORS, select the **Enable Cross-Origin Resource Sharing (CORS)** check box, and do the following:
    *   Under **Settings**, select the radio button that corresponds to how your services will set Access-Control-Allow-Origin headers:
        *   None
            
        *   All
        *   Echo
    *   If you select Echo, in the **List of Domains** box, type one or more approved (whitelisted) domains.
*   **Custom Response Headers**: Add custom response headers in a valid JSON array. These headers will be appended to the response of identity requests originating from applications. In the Custom Response Headers box, type the required response headers in the following format:  
    `[{"name":"X-Content-Type-Options","value":"abc"}, {"name":"X-Frame-Options","value":"deny"}]`

> **_Important:_** The changes made to an Identity service here effects all the apps associated with it.

> **_Note:_** You must [publish](Publish.md) the app to reflect the changes.

> **_Note:_** More details to configure [Identity Session Timeout and HTTP Message Body Integrity](ServiceConfig-Identiy-Apps.md)
