
Hierarchical Downloads and Uploads
==================================

The Hierarchical Downloads and Uploads feature is used to download and upload related data together. While defining the related objects, you can also specify the supported actions for the child entities. For example, the parent’s update operation supports the child's create and update operations. You can allow certain operations only through the parent entity by disabling them at the child-entity level. For example, you can configure the operations in such a way that the New Child record can only be sent along with the parent to the backend.

This feature provides a better ability to handle the related data because they can be merged into one hierarchy and can be downloaded and uploaded together. This also provides faster synchronization.

> **Note:**  
*   When you define relationships and related objects in Volt MX Foundry console and invoke sync operation at the Application or Object-Service level, it uploads and downloads the data in a hierarchical fashion. But, synchronizing at the Object level uploads and downloads the data in the non-hierarchical fashion even though the relationships and related objects are defined.  
*   Hierarchical Downloads feature is supported for Mobile Web, Windows, and Desktop Web channels.  

Consider a sale scenario that contains the following entities:

*   SALE\_DETAIL represents a sale or a transaction.
*   SALE\_ITEM represents a product.
*   ITEM\_DETAILS represents the product's details.

During a normal download, each of these entities is downloaded separately. In this case, the performance is compromised because a sale process usually contains multiple transactions rather than a single transaction. Hence, it becomes difficult to acquire details of a product. The same applies to upload as well.

In order to solve this issue, you can use the Hierarchical Downloads and Uploads feature. To perform a hierarchical download/upload, follow these steps.

*   Create a hierarchy of the entities in which you want to download/upload, in Foundry Console by using [Object Services](../../../Foundry/voltmx_foundry_user_guide/Content/Objectservices.md#Componen).
*   Publish the app.
*   Now, sync these entities with each other in the client application by using SDKs.
    
    You can also apply filters and batching options to further customize the downloads and uploads.
    
    > **_Note:_** For hierarchical downloads, you can apply the filter only to the parent entity.
    

In the case of the earlier mentioned example, you can create a hierarchy in the following order:

*   SALE\_DETAIL
    *   SALE\_ITEM
        *   ITEM\_DETAILS

In this case, SALE\_DETAIL is the parent and SALE\_ITEM and ITEM\_DETAILS are its child entities. Now, when you perform an upload or a download operation, data is available in the mentioned order.

> **_Note:_** If the hierarchy is enabled in Volt MX Foundry console, the data will be uploaded and downloaded according to the hierarchy, by default. If you want to disable this, delete the hierarchy created in Foundry Console.
