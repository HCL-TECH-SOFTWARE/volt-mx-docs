The voltmx.liveActivity namespace provides a seamless way to integrate and manage Live Activities within your app. It enables you to request, update, and end Live Activities while also offering lifecycle observation, state management, and real-time data updates. This allows apps to display persistent, glanceable information on the Lock Screen and Dynamic Island, enhancing user engagement and interactivity.

## <p style="color: black">Volt MX Live Activity APIs.</p>

The table below provides details about the voltmx.liveActivity APIs, which enable interaction with Live Activities. These APIs allow you to start, update, observe, and manage Live Activities within your app, ensuring seamless real-time updates and lifecycle control.


| API  | Description |
| ------------- | -------------|
| [voltmx.liveActivity.start](API_Reference.md#live_start_01)  | Starts a Live Activity locally by initializing it with the required attributes and content state. This enables real-time updates and persistent display on the Lock Screen and Dynamic Island. |
| [voltmx.liveActivity.update](API_Reference.md#live_start_02)  | Updates the Live Activity’s content-state data dynamically. Additionally, you can set a staleDate (indicating when the content is outdated) and a relevanceScore to prioritize activities on the Lock Screen.|
|[voltmx.liveActivity.end](API_Reference.md#live_start_03)    | Ends a specific Live Activity, removing it from the Lock Screen and Dynamic Island. This is useful when the activity is no longer relevant, such as when a ride is completed or a delivery is fulfilled.|
| [voltmx.liveActivity.observeActivityStateUpdates](API_Reference.md#live_start_04)|  Monitors activity state changes of a Live Activity, such as when it becomes active, stale, dismissed, or ended. This allows the app to respond accordingly based on the Live Activity’s status.|
|   [voltmx.liveActivity.stopActivityStateUpdates](API_Reference.md#live_start_05) |  Stops observing the activity state changes of a specific Live Activity. This is useful when state tracking is no longer needed, to optimize resource usage.|
|   [voltmx.liveActivity.observeContentStateUpdates](API_Reference.md#live_start_06) | Listens for real-time changes in the content state of a Live Activity. This ensures that your app can react dynamically to updates like progress changes or status modifications.|
|  [voltmx.liveActivity.stopContentStateUpdates](API_Reference.md#live_start_07) | Stops observing content state changes for a Live Activity. This is helpful when continuous tracking of content updates is no longer required.|
|  [voltmx.liveActivity.fetchActivityData](API_Reference.md#live_start_08)|  Retrieves all available information for a specific Live Activity, including both its attributes (fixed properties) and content state (dynamic data).|
|  [voltmx.liveActivity.isEnabled](API_Reference.md#live_start_09) | Returns a Boolean value indicating whether your app is allowed to start Live Activities. This helps in determining if Live Activities are available for use on the device.|
|  [voltmx.liveActivity.isHighFrequencyUpdateEnabled](API_Reference.md#live_start_10) | Checks if the user has granted permission for high-frequency updates via ActivityKit push notifications, allowing for more frequent real-time updates.|

</details>



