                              

Prerequisites
=============

Before you install Volt Foundry, you must perform the following pre-installation tasks:

*   A database user should be granted all required permissions as per this document.
*   To use your existing SSL certificate, map the SSL certificate to the domain name you want to use.
*   To install in domain mode, the JBoss cluster should be pre-configured.
*   For details on Supported Configurations please check [here](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_supported_devices_os_browsers/Content/FoundryV9SP5.html) 

Before you install Volt Foundry, you must perform the following pre-installation tasks:

*   [Software Requirements](#software-requirements)
*   **Hardware Requirements**
    *   [Hardware Requirements - Console, Identity, and Integration Services](#hardware-requirements-console-identity-and-integration-services)
    *   [Hardware Requirements - Engagement Services](#hardware-requirements-engagement-services)
    *   [Database System Requirements - Engagement Services](#database-system-requirements-per-physical-instance-engagement-services)
        *   [Corporate Firewall Settings - Engagement Services](#corporate-firewall-settings-engagement-services)
    *   [Proxy Settings for Integration Service](#proxy-settings-for-integration-service)
*   [Database Prerequisites](Database_Prerequsites.md)
*   [Required Setup Files](Reqiuired_Setup_Files.md)
*   [Encrypt Passwords](Encrypt_Passwords.md)
*   [Volt Foundry Installation on Single Node and Multi-node](MF_Single-Node_Multinode.md)
*   [Pre-installation Tasks - App Servers](PreInstallation_Steps_App_Servers.md)
*   [Configuring Installation Modes - App Servers](Configuring_Installation_Mode.md)

Software Requirements
---------------------

For software system requirements, refer to [Volt Foundry >](../../../Foundry/voltmxfoundry_supported_devices_os_browsers/Content/Introduction.md) [Software Requirements](../../../Foundry/voltmxfoundry_supported_devices_os_browsers/Content/Introduction.md).

Hardware Requirements - Console, Identity, and Integration Services
-------------------------------------------------------------------

  
| Component | Requirement |
| --- | --- |
| Processor | Quad-core processor |
| Memory | 16 GB |
| Internal Storage | 150 GB |
| Network | 100 Mbps Ethernet interface card |

Hardware Requirements - Engagement Services
-------------------------------------------

  
| Component | Requirement |
| --- | --- |
| Processor | Quadra Core 2.2 MHz |
| memory | 16 GB |
| Internal Storage | 146 GB (15K RPM) with 2 Drives (Raid 1) |
| Network | 2 Gigabit Ethernet Ports |
| IP Configuration | Statically assigned IP addressing |
| Operating System | Windows 7 / 8 64 bit |

Database System Requirements (per physical instance) - Engagement Services
--------------------------------------------------------------------------

  
| Component | Requirement |
| --- | --- |
| Processor | Dual Core Processor |
| memory | 16 GB |
| Internal Storage | 73 GB (15K RPM) with 4 Drives (Raid 5) |
| External Storage | 200 GB (RAID 5 + HS) SAN Storage with HA Fiber HBA Connection |
| Network | 2 Gigabit Ethernet Ports |
| Operating System | Windows Server 2008 |

### Corporate Firewall Settings - Engagement Services

The following firewall settings need to be configured for successful Volt Foundry Engagement Services installation.

  
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

APNS works only with SOCKS proxy type. It is because of the current technical limitation from Apple to communicate the below push notification ports when a proxy server is in place between Volt Foundry Engagement server and the firewall.

*   TCP port 2195 (used to send notifications to the APNs)
*   TCP port 2196 (used by the APNs feedback service)

Alternatively, as a workaround, to communicate with the above ports, the system on which the Volt Foundry Engagement server is installed should bypass the proxies and communicate with the firewall directly.

Proxy Settings for Integration Service
--------------------------------------

To add an Integration Service Environment when the proxy is set at an App Server level, enable the following proxy settings at the JVM level:

*   Dkony.http.proxyHost= 10.0.4.29
*   Dkony.http.proxyPort= 2080
*   Dkony.http.proxyUser= websphere
*   Dkony.http.proxyPassword= 3MqGU9e5nv3B

#### Installation Note

The domain/server/configuration names mentioned in this document are used for the convenience of this document. You may use any name suitable for your installation needs.

Make sure that each resource type within a domain must have a name and a JNDI name that is unique for all configuration objects in the domain. Within a domain, each server, machine, cluster, and JDBC connection pool, and any other resource type must be named uniquely and must not use the same name as the domain. Therefore, the name you provide for the Managed Server, Cluster or any other resource should be unique in that domain.
