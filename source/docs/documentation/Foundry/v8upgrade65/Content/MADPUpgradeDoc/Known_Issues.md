---
layout: "documentation"
category: "v8upgrade65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")


Known Issues
============

*   **Issue**
    
    Unable to hit the Integration service  'content-type' as header param as the platform is expecting ‘Content-Type’
    
    **Workaround**
    
    Replace the `content-type` with Content-Type as shown and Foundry the service.
    
    {% highlight voltMx %}params.httpheaders = {"Content-Type": "application/json", "accept": "application/json"};
    {% endhighlight %}
