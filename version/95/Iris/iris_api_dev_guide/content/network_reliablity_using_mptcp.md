
Network Reliablity Using MPTCP
================================


Improve Network Reliability by Leveraging Multipath TCP
--------------------------------------------------------

When using app on an iOS device, users are likely to move in and out of range of Wi-Fi, switching to cellular networks and back again.

Multipath TCP improves the performance of our app when a user is in a location with limited Wi-Fi and while their device is transitioning to and from cellular data usage. 

In its default configuration, a URL session uses a single radio for a network call, preferring Wi-Fi over cellular. However, with Multipath TCP enabled, the URL session initiates the request on both radios and selects the more responsive of the two with a preference for Wi-Fi.


Enable Multipath TCP in Project:
----------------------------------

<ul>
<li>Enable the <b>Multipath Entitlement</b> in the Xcode Capabilities pane for your app target.</li>
<li>Set the <b>multipathServiceType property</b> in NSURLSessionConfiguration to a mode other than none. </li>
<li>Enable the <b>Multipath Entitlement</b> in the Xcode Capabilities pane for your app target.
    <ul>
        <li>This can be done in Volt MX Iris using quantum_nitro_configuration.json which you can find in Assets -> Common -> Resource location.</li>        
        <li>Set Multipath as true under Capabilities section.</li>
    </ul>
    Snippet:
    <pre><code style="display:block;background-color:#eee;">{
    "iOS":{
    "KRelease":{
        "Capabilites":{
            "com.apple.developer.networking.multipath" : true
            },
            "BuildSettings":{
            }
            }
        },
    "Android":
    {
    }
}</code></pre>
</li>
<li>Set the <b>multipathServiceType</b> property in NSURLSessionConfiguration to a mode other than none
    <ul>
        <li>User needs to pass multipathServiceType using voltmx.application.setApplicationBehaviors API</li>
    </ul>
 Syntax:
    <pre><code style="display:block;background-color:#eee;">voltmx.application.setApplicationBehaviors({
multipathServiceType:constants.MULTIPATHSERVICETYPE_HANDOVER
});</code></pre>
</li>
</ul>



MultipathServiceType Constants
--------------------------------

<table>
    <tr>
        <th colspan="2">Constant</th>
    </tr>
    <tr>
        <td>constants.MULTIPATHSERVICETYPE_NONE</td>        
        <td>None - no multipath (default).</td>
    </tr>    
    <tr>
        <td>constants.MULTIPATHSERVICETYPE_HANDOVER</td>        
        <td>Handover - secondary flows brought up when primary flow is not performing adequately.</td>
    </tr>    
    <tr>
        <td>constants.MULTIPATHSERVICETYPE_INTERACTIVE</td>        
        <td>Interactive - secondary flows created more aggressively.</td>
    </tr>    
    <tr>
        <td>constants.MULTIPATHSERVICETYPE_AGGREGATE</td>        
        <td>Aggregate - multiple subflows used for greater bandwidth.</td>
    </tr>
</table>

By using any of the above mode other than none it will establish connection with MPTCP.


**Platform availability:** 
   
iOS

**Remarks:**

*   Multipath TCP allows the connection to use several paths simultaneously. For this, Multipath TCP creates one TCP connection, called subflow, over each path that needs to be used.

*   MPTCP allows us to establish subflows over both of these connections, so applications can become independent from the underlying medium. Of course, latency and throughput of the subflows are different, but both provide network connectivity.


**Advantages of Multipath TCP:**

*    Reliability and connection persistency: It is possible to add or remove paths without connection loss. 
*    Increased throughput: Every single connection through diverse path increase amount of available throughput. 
*    Transparent for applications: Applications communicate the same way as on TCP.      
