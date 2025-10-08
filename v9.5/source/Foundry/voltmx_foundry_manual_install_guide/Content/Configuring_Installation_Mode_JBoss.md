                              

How to Install JBoss Server
===========================

Downloading and Configuring JBoss
---------------------------------

To configure JBoss in standalone mode, follow these steps:

1.  Download JBoss EAP from the following link.
    
    *   For JBoss 6.4: [JBoss 6.0.0](https://developers.redhat.com/download-manager/file/jboss-eap-6.4.0.GA-installer.jar)
    *   For JBoss 7.0: [JBoss 7.0.0](https://developers.redhat.com/download-manager/file/jboss-eap-7.0.0-installer.jar)
    *   For JBoss 7.1: [JBoss 7.1.0](https://developers.redhat.com/download-manager/file/jboss-eap-7.1.0.zip)
    *   For JBoss 7.2: [JBoss 7.2.0](https://developers.redhat.com/download-manager/file/jboss-eap-7.2.0.zip)
2.  Extract the `jboss-eap-x.x.x.zip` file to your local folder. Your JBoss server setup is ready now.

How to Configure JBoss for Multinode Installation
-------------------------------------------------

Prerequisites:

*   Configure JBoss cluster before configuring multinode.
*   Ensure that the Fully Qualified Public URL of Volt MX Foundry Console or Fully Qualified Public URL of Identity Service should be that of the load balancer URL that is used for public communication.
*   Ensure that the master node hostname/IP address is not 127.0.0.1, 0.0.0.0 or localhost. It should be a public IP address or a fully qualified domain name (FQDN).
