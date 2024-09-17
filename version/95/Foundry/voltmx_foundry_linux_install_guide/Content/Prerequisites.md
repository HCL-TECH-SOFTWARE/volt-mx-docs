                           

You are here: Software Requirements 

Prerequisites
=============

The following sections provide information about the software and hardware required to install Volt MX Foundry Console.

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

### Network Settings - Licensing              

The on-premises server should allow outbound requests to [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/) and allow inbound requests from our License servers (IPs, mentioned at the end, can be whitelisted in a customer’s firewall).

An on-premises Foundry 'development' or 'non-production' license can be activated without making the on-premises Identity URL available to our License servers. However, a 'production' license requires the Identity URL to be available to our License servers at the time of activation and thereafter as the license is validated on a weekly frequency. Each time that a production license is validated, the license validity is good for 30 days from the last successful validation. The Identity URL is expected to remain available to our License server for the entirety of their licensing term.

The Foundry Identity account tenant must be accessible on the internet. The Cloud license activation screen displays the Identity tenant configured in on-premise console. (For example, https:voltmxfoundry.mycompany.com/authService)

Cloud license activation flow appends “/accounts” to the Identity URL. (For example, https:voltmxmobilefoundry.mycompany.com/authService**/accounts**). The URL must be accessible on the public internet for license activation to work. The response of the URL should be “Welcome to Test Auth Service”.

Communication from HCL' License servers will originate from the following IP addresses, which can be whitelisted in an organization's firewall configuration:

*   54.208.192.84
*   54.208.192.248

Creating the Installation User for Linux
----------------------------------------

To create a user, follow these steps:

1.  From your Volt MX Foundry install system, open Linux terminal.
    
    > **_Note:_** For security and administrative reasons, install and run Volt MX Foundry Installer as a non-root user.
    
2.  Run the following commands:
    
    `# adduser core`  
      
    `# passwd core`
    
*   [Database Prerequisites](DB_PRe-reqs.md)
*   [Application Servers Prerequisites](AppServ_Prerequisites.md)
