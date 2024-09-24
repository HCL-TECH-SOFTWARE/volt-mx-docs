                           

You are here: Software Requirements

Prerequisites
=============

The following sections explain the software and hardware required to install Volt MX Foundry Console.

Software Requirements
---------------------

For software system requirements, [click here](../../../Foundry/voltmxfoundry_supported_devices_os_browsers/Content/Introduction.md).

Hardware Requirements
---------------------

  
| Component | Requirement |
| --- | --- |
| Processor | Quad-core processor |
| Memory | 16 GB |
| Internal Storage | 150 GB |
| Network | 100 Mbps Ethernet interface card |

Network Settings
----------------

### Corporate Firewall Settings - Engagement Services

  
| Source | Destination | Ports | Protocol | Direction | Action | Description |
| --- | --- | --- | --- | --- | --- | --- |
| Engagement Server | https://api.push.apple.com:443/3/device/, 17.0.0.0/8 (17.0.0.1 to 17.255.255.254) | 443 | TCP | Both | Allow | Allow the Engagement Server to access Apple APNS HTTP2 production URL |
| Engagement Server | https://api.jpush.cn/v3/push | 443 | TCP | Outbound | Allow | Allow the Engagement Server to access the JPush notification server URL |
| Engagement Server | https://api.development.push.apple.com:443/3/device/, 17.0.0.0/8 (17.0.0.1 to 17.255.255.254) | 443 | TCP | Both | Allow | Allow the Engagement Server to access Apple APNS HTTP2 development URL |
| Engagement Server | https://fcm.googleapis.com | 443 | TCP | Outbound | Allow | Allow the Engagement Server to access Firebase Cloud Messaging (FCM) service |
| Engagement Server | feedback.push.apple.com, feedback.sandbox.push.apple.com, 17.0.0.0/8 (17.0.0.1 to 17.255.255.254) | 2196 | TCP | Outbound | Allow | Allow the Engagement Server to access APNS feedback service |
| Engagement Server | gateway.push.apple.com, gateway.sandbox.push.apple.com, 17.0.0.0/8 (17.0.0.1 to 17.255.255.254) | 2195 | TCP | Outbound | Allow | Allow the Engagement Server to access Apple's APNS |
| Engagement Server | All subdomains of pushapi.eval.blackberry.com Sample Push URL: https://cpxxxxxxxxxxxxxxxxxxxxxx. pushapi.eval.blackberry.com/mss/PD\_pushRequest | 443 | TCP | Outbound | Allow | Allow connect to Blackberry Cloud through this port |
| Engagement Server | http://sn1.notify.live.net | 443 | TCP | Outbound | Allow | Allow connect to Windows Cloud (MPNS) through this port |
| Engagement Server | https://login.live.com | 443 | TCP | Outbound | Allow | Allow connect to Windows Cloud (WNS) through this port |
| Internal Corporate WiFi router for Android Mobile Devices | Allow your firewall to accept outgoing connections to all IP addresses contained in the IP blocks listed in Google's ASN of 15169. Reference link for the IP Addresses [http://bgp.he.net/AS15169](http://bgp.he.net/AS15169) | 5228, 5229,5230 | TCP, HTTP, HTTPS, UDP | Both | Allow | Android devices will connect to GCM through this port |
| Internal Corporate WiFi router for iOS Devices | gateway.push.apple.com, feedback.push.apple.com, gateway.sandbox.push.apple.com, feedback.sandbox.push.apple.com, 17.0.0.0/8 (17.0.0.1 to 17.255.255.254) | 5223 | TCP | Both | Allow | Apple devices connect to APNS servers through this port |
| Internal Corporate WiFi router for iOS Devices | ax.init.itunes.apple.com, ocsp.apple.com | 80, 443 | TCP | Both | Allow | Apple devices will connect to public Apple OCSP and iTunes service through this port |
| Internal Corporate WiFi router for Window Devices | Add the list IPs specified in the following WNS URL [http://www.microsoft.com/en-us/download/details.aspx?id=44238](http://www.microsoft.com/en-us/download/details.aspx?id=44238) |   | TCP, HTTP, HTTPS, UDP | Both | Allow | Windows devices will connect to WNS through this port |
| Internal Corporate WiFi router for Window Devices | Add the list IPs specified in the following MPNS URL: [https://www.microsoft.com/en-us/download/details.aspx?id=44535](https://www.microsoft.com/en-us/download/details.aspx?id=44535) |   | TCP, HTTP, HTTPS, UDP | Both | Allow | Windows devices will connect to MPNS through this port |

### Proxy Settings for Integration Service

To add an Integration Service Environment when the proxy is set at an App Server level, enable the following proxy settings at the **JVM** level:

*   Dvoltmx.http.proxyHost= 10.0.4.29
*   Dvoltmx.http.proxyPort= 2080
*   Dvoltmx.http.proxyUser= websphere
*   Dvoltmx.http.proxyPassword= 3MqGU9e5nv3B

<blockquote><em><b>Note: </b></em>Proxy settings values provided above are only for examples, should be used as per the configuration.</blockquote>

### Network Settings Licensing

If the on-premises Foundry server has outbound access to the HCL Cloud License Server, please use the Cloud License Server. Otherwise, set up the HCL Common Local License Server in your own network. You can use your HCL Software ID to download the installer for the HCL Common Local License Server from the HCL License and Download Portal ([https://hclsoftware-fno.flexnetoperations.com/flexnet/operations/](https://hclsoftware-fno.flexnetoperations.com/flexnet/operations/)), along with set-up instructions for [Linux](https://support.hcltechsw.com/csm?sys_kb_id=83893782db5cf410cc426275ca961958&id=kb_article_view&sysparm_rank=4&sysparm_tsqueryId=0ead29fb1b68b810a67e9759bc4bcb41) and [Windows](https://support.hcltechsw.com/csm?sys_kb_id=5a0832b6db98b050cc426275ca961958&id=kb_article_view&sysparm_rank=14&sysparm_tsqueryId=2a7531f71be8b810a67e9759bc4bcb9e).

If you use the local license server, the Foundry server must have access to that license server. In a production environment, you should sync your license server with the HCL Software Flexnet Operations site at least monthly.

### Configuring Connection Timeout for Foundry
----------------------------------------------

The default connection timeout for on-premises Foundry has been set to 60000 milliseconds (60 seconds). You may need to adjust this timeout to be either longer or shorter. This can be achieved by modifying the system property configuration.

Modifying the Connection Timeout :

To change the connection timeout, you need to set the `FOUNDRY_OUTBOUND_CONNECTION_TIMEOUT` system property. This can be done by exporting the CATALINA_OPTS environment variable with the desired timeout value.


### Gateway Request Timeouts
-----------------------------

The Volt MX Cloud Gateway is configured with a default request timeout of 60 seconds. If a request does not receive a response within this timeframe, it will time out. This default setting can be extended to 180 seconds by submitting a cloud support ticket.


