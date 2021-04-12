---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry V9.0.0.1 on Microsoft Azure
==========================================

New Features
------------

*   Support for deploying AKS Cluster across multiple Availablity zones has been added (Azure supports this feature only in [specific regions](https://docs.microsoft.com/en-us/azure/aks/availability-zones)). As part of this support a standard load balancer is created for the ingress controller.
*   The option to specify the ingress pod count to ensure high availability based on the load has been added.
*   The Kubernetes version has been upgraded to 1.16.7.
*   The Tomcat version used by the pods has been upgraded to Tomcat v9.0.33.
*   The MySQL and SQL Server driver jars have been upgraded to the latest versions.

Fixed Issues
------------

*   Fixed the issue related to installation of PCI components on auto-scaled nodes.
*   Other minor internal enhancements and bug fixes.

Known Issues
------------

*   A database password cannot contain **#** or **$** characters.

For more details, refer to Installation Guide for [VoltMX Foundry on Microsoft Azure Cloud]({{ site.baseurl }}/docs/documentation/Foundry/voltmxfoundry_on_azure/Content/Introduction.html).
