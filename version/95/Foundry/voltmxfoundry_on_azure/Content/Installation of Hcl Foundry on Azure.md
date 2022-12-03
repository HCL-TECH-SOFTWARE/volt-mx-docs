   

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

*   [Configuration](VoltMX Foundry on Azure.md#Configuration)  
    Added a new input parameter: ENABLE\_REDIS\_SSL.

 |
| 08/02/2020 | 4.0 | 

Document published for V9 SP3. The following sections have been added to the guide:

*   [Multiple Node Pools in Azure Kubernetes Service](VoltMX Foundry on Azure.md#Multi)

 |
| 12/15/2020 | 3.0 | 

Document published for V9 SP2. The guide has been updated for the following:

*   [Marketing Catalog Microservice](VoltMX Foundry on Azure.md#Marketing_Microservice)
*   [Campaign Microservice](VoltMX Foundry on Azure.md#Campaign)

 |
| 08/10/2020 | 2.0 | 

Document published for V9 SP1. The guide has been updated to add [VoltMX Foundry V9 SP1 on Azure](VoltMX Foundry on Azure.md).

 |
| 04/20/2020 | 1.1 | 

Document published for V9.0.0.1. The guide has been updated for the following:

*   [Configurations](VoltMX Foundry on Azure.md#Configuration):
    *   [Number of ingress pods](VoltMX Foundry on Azure.md#ingress)
    *   [Tenant ID](VoltMX Foundry on Azure.md#tenantID)
    *   [Multiple availability zones](VoltMX Foundry on Azure.md#MultiAZ)

 |
| 04/06/2020 | 1.0 | 

Document published for V9. The guide has been updated for the following:

*   [Features](Appendices.md):
    *   [Configure Autoscalability for cluster](Appendices.md#Autoscaling)
    *   [Enhanced steps to use Kubernetes Dashboard](Appendices.md#Kubernet)
    *   [Pod Anti-affinity](Appendices.md#Pod)
    *   [Whitelist IP Address in Azure CDN](Appendices.md#Whitelist)
    *   [Configure Backup and Restore for Azure File Share](Appendices.md#AFS)
*   [Configurations](VoltMX Foundry on Azure.md#Configuration):
    *   [Service Principle Object ID](VoltMX Foundry on Azure.md#servicePObj)
    *   [Configure geographically redundant backup](VoltMX Foundry on Azure.md#Geo)
    *   [Azure Redis Cache Support](VoltMX Foundry on Azure.md#redis_cache)

 |

Getting Started Options

*   [Release Notes](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/voltmx_foundry_release_notes/Default.html)
*   [VoltMX Downloads](https://community.voltmx.com/downloads)
*   [VoltMX Foundry User Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.html)
*   [Iris User Guide](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/iris/iris_user_guide/Default.html)
*   [Sample Apps](https://github.com/voltmx/)
