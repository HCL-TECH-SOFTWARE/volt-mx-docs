---
layout: "documentation"
category: "undefined"
---
﻿   

Installation Guide for VoltMX Foundry on Microsoft Azure Cloud

This document provides the detailed information on setting up VoltMX Foundry on Azure.

Revision History

  
| **Date**  
(MM/DD/YYYY) | **Document Version** | **Description of Modifications/Release** |
| --- | --- | --- |
| 04/18/2022 | 6.0 | 
Document published for V9 SP5.

*   Containers for the Foundry components now run on the Red Hat Universal Base Image (UBI).

 |
| 11/29/2021 | 5.0 | 

Document published for V9 SP4. The following sections have been updated:

*   [Configuration](VoltMX Foundry on Azure.html#Configuration)  
    Added a new input parameter: ENABLE\_REDIS\_SSL.

 |
| 08/02/2020 | 4.0 | 

Document published for V9 SP3. The following sections have been added to the guide:

*   [Multiple Node Pools in Azure Kubernetes Service](VoltMX Foundry on Azure.html#Multi)

 |
| 12/15/2020 | 3.0 | 

Document published for V9 SP2. The guide has been updated for the following:

*   [Marketing Catalog Microservice](VoltMX Foundry on Azure.html#Marketing_Microservice)
*   [Campaign Microservice](VoltMX Foundry on Azure.html#Campaign)

 |
| 08/10/2020 | 2.0 | 

Document published for V9 SP1. The guide has been updated to add [VoltMX Foundry V9 SP1 on Azure](VoltMX Foundry on Azure.html).

 |
| 04/20/2020 | 1.1 | 

Document published for V9.0.0.1. The guide has been updated for the following:

*   [Configurations](VoltMX Foundry on Azure.html#Configuration):
    *   [Number of ingress pods](VoltMX Foundry on Azure.html#ingress)
    *   [Tenant ID](VoltMX Foundry on Azure.html#tenantID)
    *   [Multiple availability zones](VoltMX Foundry on Azure.html#MultiAZ)

 |
| 04/06/2020 | 1.0 | 

Document published for V9. The guide has been updated for the following:

*   [Features](Appendices.html):
    *   [Configure Autoscalability for cluster](Appendices.html#Autoscaling)
    *   [Enhanced steps to use Kubernetes Dashboard](Appendices.html#Kubernet)
    *   [Pod Anti-affinity](Appendices.html#Pod)
    *   [Whitelist IP Address in Azure CDN](Appendices.html#Whitelist)
    *   [Configure Backup and Restore for Azure File Share](Appendices.html#AFS)
*   [Configurations](VoltMX Foundry on Azure.html#Configuration):
    *   [Service Principle Object ID](VoltMX Foundry on Azure.html#servicePObj)
    *   [Configure geographically redundant backup](VoltMX Foundry on Azure.html#Geo)
    *   [Azure Redis Cache Support](VoltMX Foundry on Azure.html#redis_cache)

 |

Getting Started Options

*   [Release Notes](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/voltmx_foundry_release_notes/Default.html)
*   [VoltMX Downloads](https://community.voltmx.com/downloads)
*   [VoltMX Foundry User Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.html)
*   [Iris User Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_user_guide/Default.html)
*   [Sample Apps](https://github.com/voltmx/)
