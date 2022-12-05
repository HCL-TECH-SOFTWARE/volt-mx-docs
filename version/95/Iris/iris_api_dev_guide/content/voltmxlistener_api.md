  

### <a id=“voltmx-listener-api”></a>VoltMX Listener API


The VoltMX Listener API enables application developers to create, subscribe, and broadcast events between components. By using the VoltMX Listener APIs, developers can enable communication and pass data between components such as VoltMX Component-Angular Component, Angular Component-Angular Component, or VoltMX Component-VoltMX Component.

The VoltMX Listener API uses the [`voltmx.listener Namespace`](voltmx.listener_Functions.md#top) and has the following API elements.

 
| Function | Description |
| --- | --- |
| `[voltmx.listener.broadcast](voltmx.listener_Functions.md#broadcast)` | Broadcasts the data to the specified event. |
| `[voltmx.listener.create](voltmx.listener_Functions.md#create)` | Creates an event. |
| `[voltmx.listener.destroy](voltmx.listener_Functions.md#destroy)` | Destroys the specified event. |
| `[voltmx.listener.subscribe](voltmx.listener_Functions.md#subscribe)` | Subscribe to the specified event. |
| `[voltmx.listener.unsubscribe](voltmx.listener_Functions.md#unsubscribe)` | Unsubscribe from the specified subscriptions. |

 

To create a new event, use the `[voltmx.listener.create](voltmx.listener_Functions.md#create)` API. Use the `[voltmx.listener.subscribe](voltmx.listener_Functions.md#subscribe)` API to subscribe to a specific event of a component. By using the `[voltmx.listener.broadcast](voltmx.listener_Functions.md#broadcast)` API, you can broadcast an event to other Components or Forms. To stop receiving broadcasts from subscribed events, use the `[voltmx.listener.unsubscribe](voltmx.listener_Functions.md#unsubscribe)` API. Use the `[voltmx.listener.destroy](voltmx.listener_Functions.md#destroy)` API to unsubscribe from all the subscriptions of the specific event (if there are any).
