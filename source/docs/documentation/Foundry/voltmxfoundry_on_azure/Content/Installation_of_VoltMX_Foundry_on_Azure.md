---
layout: "documentation"
category: "voltmxfoundry_on_azure"
---
                      

VoltMX Development Cloud
--------------------------

Installation Guide for Volt MX Foundry on Microsoft Azure Cloud

This document provides the detailed information on setting up Volt MX Foundry on Azure.

Revision History

  
| **Date** | **Document Version** | **Description of Modifications/Release** |
| --- | --- | --- |
| 12/15/2020 | 3.0 | Document published for V9 SP2. The guide has been updated for the following: <br><br>[Marketing Catalog Microservice](VoltMX_Foundry_on_Azure.html#marketing-catalog-microservice) <br><br>[Campaign Microservice](VoltMX_Foundry_on_Azure.html#campaign-microservice) |
| 08/10/2020 | 2.0 | Document published for V9 SP1. The guide has been updated to add [VoltMX Foundry V9 SP1 on Azure](VoltMX_Foundry_on_Azure.html). |
| 04/20/2020 | 1.1 | Document published for V9.0.0.1. The guide has been updated for the following: <br><br>[Configurations](VoltMX_Foundry_on_Azure.html#configuration):<br><br>[Number of ingress pods](VoltMX_Foundry_on_Azure.html#configuration)<br><br>[Tenant ID](VoltMX_Foundry_on_Azure.html#userProperties)<br><br>[Multiple availability zones](VoltMX_Foundry_on_Azure.html#MultiAZ) |
| 04/06/2020 | 1.0 | Document published for V9. The guide has been updated for the following: <br><br>[Features](Appendices.html):<br><br>[Configure Autoscalability for cluster](Appendices.html#aks-autoscaling)<br><br>[Enhanced steps to use Kubernetes Dashboard](Appendices.html#kubernetes-dashboard)<br><br>[Pod Anti-affinity](Appendices.html#pod-anti-affinity)<br><br>[Whitelist IP Address in Azure CDN](Appendices.html#whitelist-ip-address-in-azure-cdn)<br><br>[Configure Backup and Restore for Azure File Share](Appendices.html#configure-backup-and-restore-for-azure-file-share) <br><br>[Configurations](VoltMX_Foundry_on_Azure.html#configuration):<br><br>[Service Principle Object ID](VoltMX_Foundry_on_Azure.html#userProperties)<br><br>[Configure geographically redundant backup](VoltMX_Foundry_on_Azure.html#configuration)<br><br>[Azure Redis Cache Support](VoltMX_Foundry_on_Azure.html#configuration) |

**Getting Started Options**

*   [Release Notes]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_release_notes/Content/VoltMX_Foundry_Release_Notes.html)
*   [VoltMX Downloads](https://community.hclvoltmx.com/downloads)
*   [VoltMX Foundry User Guide]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Introduction.html)
*   [Iris User Guide]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Introduction.html)
*   [Sample Apps](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples)
