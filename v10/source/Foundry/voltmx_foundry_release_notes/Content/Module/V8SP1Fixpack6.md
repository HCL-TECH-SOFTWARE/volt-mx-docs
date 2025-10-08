                          

Volt MX  Foundry V8 SP1 Fix Pack 6 (for installing Volt MX Foundry Containers Solution On-Premises)
==========================================================================================

Volt MX  Foundry Containers Solution On-Premises
-------------------------------------------

Support for Installing Volt MX Foundry Containers Solution On-Premises.

> **_Note:_** Volt MX Foundry Containers Solution installs Volt MX Foundry V8.1.1.

Volt MX  Foundry Containers Solution On-Premises is designed to facilitate Volt MX Foundry on Docker. This setup occurs with minimal manual intervention and leverages the following technologies:

*   Docker - To package different components as portable container images (with all the required binaries and libs)
*   Kubernetes - To orchestrate and maintain all these running containers. It will also have features like auto-scaling, secrets, deployment upgrades and rollbacks.

For more details, refer to [Installation Guide for Volt MX Foundry Containers Solution On-Premises](../../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/Introduction.md)

#### Known Issues

*   **Issue**
    
    Authentication to Admin Console fails in case of Microsoft SQL Server with the following error:
    
    `An error was encountered authenticating your user session. Please try to login again`.
    
    *   **Workaround**
        
        Run the following commands to resolve the issue:
        
        1.  minikube stop -p kfminikube
        2.  minikube start -p kfminikube
