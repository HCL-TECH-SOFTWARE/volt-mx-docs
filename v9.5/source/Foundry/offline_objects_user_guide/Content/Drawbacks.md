
Limitations of Offline Objects
==============================

The following are the limitations of Offline Objects:

*   Views cannot be synchronized.
*   Batching is not supported for RDMS adapter and Storage Objects. For RDMS, batching is supported only through service-driven objects.
*   Multi-parent relations are not supported.
*   Nested complex OData filters are not supported.
*   On the Android platform, boolean values are sent to the server and to the JS layer as **0** instead of **false** and **1** instead of **true**.
