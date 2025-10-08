### <a id=“voltmx-listener-api”></a>Volt MX Listener API

The Volt MX Listener API enables application developers to create, subscribe, and broadcast events between components. By using the Volt MX Listener APIs, developers can enable communication and pass data between components such as Volt MX Component-Angular Component, Angular Component-Angular Component, or VoltMX Component-VoltMX Component.

The Volt MX Listener API uses the [`voltmx.listener Namespace`](hcl.listener_functions.md) and has the following API elements.

 
| Function | Description |
| --- | --- |
| `voltmx.listener.broadcast` | Broadcasts the data to the specified event. |
| `voltmx.listener.create` | Creates an event. |
| `voltmx.listener.destroy` | Destroys the specified event. |
| `voltmx.listener.subscribe` | Subscribe to the specified event. |
| `voltmx.listener.unsubscribe` | Unsubscribe from the specified subscriptions. |

 

To create a new event, use the `voltmx.listener.create` API. Use the `voltmx.listener.subscribe` API to subscribe to a specific event of a component. By using the `voltmx.listener.broadcast` API, you can broadcast an event to other Components or Forms. To stop receiving broadcasts from subscribed events, use the `voltmx.listener.unsubscribe` API. Use the `voltmx.listener.destroy` API to unsubscribe from all the subscriptions of the specific event (if there are any).
