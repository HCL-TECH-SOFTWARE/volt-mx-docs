---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Fixed Issues in V9 SP1
======================

Installer
---------

*   Fixed the issue where in a Volt MX Foundry environment installed on Apache Tomcat the attempt to publish a web application fails with a 403 error.
    
    This error occurred due to the increased strictness of the ordering of tags within the `tomcat-users.xml` file that comes with the Installer bundled Tomcat v9.0.33.
    

Installer for Volt MX Foundry on Azure
-------------------------------------

*   Fixed issues related to Integration pods not releasing memory space.
*   Fixed an issue with the public IP of Egress load balancer getting changed when the AKS cluster is deleted and recreated.
