                              

  

Offline Enabled Object Services
-------------------------------

Offline Objects is a new feature introduced as part of the V8 release that provides a simplified approach to synchronize data to a client app for offline access. The Offline Objects feature connects directly with Object Services and does not require a sync run-time server. You can use the Offline Objects feature with apps that have been created by using Volt MX Iris along with apps developed in native iOS and Android by using Volt MX Foundry SDKs.

**Offline Objects in V8 supports the following offline capabilities:**

*   Data download and upload for all objects in an Object Service.
    
    You can synchronously download the data for an Object Service.
    
*   Data download and upload for a single object in an Object service.
    
    Based on the client app requirement, you can download only specific data at any time instead of downloading all the objects in an Object Service.
    
*   APIs to set filters on the data that is synchronized to the client.
    
    You can add OData Query Strings as an option in Sync API to apply a filter on the objects. Sync API only downloads data that matches the filter criteria.
    

> **_Note:_** Make sure that you define the filter criteria to avoid downloading unnecessary data. This reduces the time that the app takes to download the data.

*   APIs to track the sync progress by batch and provide stats of overall sync process after sync completes.
    
    Sync progress is notified through callbacks to the application along with the current state of the specific data, such as current sync state and number of records downloaded. You can register with the application to receive the progress of the events in Sync API.
    
*   Running multiple sync processes in parallel.
    
    You can download different unrelated objects in parallel and considerably reduce the synchronization time.
    
*   Data synchronization by using background process avoids blocking the app UI and ensures high performance.

To know more about Offline Objects, refer

*   [Offline Objects Getting Started Guide](../../../Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.md)
*   [Offline Objects API Reference Guide](../../../Foundry/offline_objectsapi_reference_guide/Content/Offline_Objects_API_Reference.md)
*   [Webinar Recording on Offline Objects](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083698)
    
*   [Sample App - Offline Enabled WorkOrder in Marketplace](https://youtu.be/mw_OhdC3JxE)
    
*   [Comparison of Volt MX Foundry Sync vs Offline Objects](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083857)
    
*   [Offline Objects Windows 10 Support](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083640)
