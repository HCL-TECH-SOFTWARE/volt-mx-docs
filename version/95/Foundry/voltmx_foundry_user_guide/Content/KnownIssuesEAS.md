                              

User Guide: Known Issues - EAS

Known Issues - Enterprise App Store
===================================

*   Browser based logout is not working from the Help section in iPhone.
    
*   If you build your EAS native client app by using Iris version in between **8.4.28** and **8.4.50** and Foundry on-premises, the app will get stuck in the splash screen when you launch it.
    
    In this case please configure your project using the following steps:
    
    1.  Ensure that you imported the Store project in Iris.
    2.  Navigate to **Project > Reference Architecure Extentions.**
    3.  Go to the **ConfigManager > BusinessControllers > `BusinessController`**.
    4.  In the list of configurable parameters inside the `configManager()` file, add the snippet: `this.serviceUrl ="SERVICE_URL_OF_YOUR_ENVIRONMENT";`
    5.  Scroll down in the same file and search for `"serviceUrl" : appConfig.serviceUrl` in the `getAppProperties` method.
    6.  Replace the code with `"serviceUrl" :this.serviceUrl`.
    7.  Rebuild the app.
        
        > **_Important:_** You must configure the `"serviceUrl"` whenever you switch from one environment to the other, follow the steps mentioned in this section.
