# Advanced Scenarios

## Notes for hosted Cloud installs (EKS, GKE, AKS)

You can use the Helm chart to install Foundry to a Kubernetes cluster hosted in Amazon’s Elastic Kubernetes Service (EKS), Microsoft’s Azure Kubernetes Service (AKS), and Google’s Kubernetes Engine (GKE).  In general the chart installs without problem.  You may want to consider the following as you customize your values.yaml for these environments:

1. Ingress:  verify the name of the Ingress Class provided by your cluster and ensure you update the `ingress.class` parameter to the proper value.  For instance, if you use the Azure Application Gateway you will want to set the `ingress.class` to "azure/application-gateway".

2. GKE:  If you utilize an autopilot GKE cluster, you may need to observe the following limitations:

    A. Liveness and Readiness probes must be configured with periodSeconds greater than timeoutSeconds.

    B. The pod resource requests and resource limits must be configured with the same value. The `request` parameter specifies a minimum amount used during pod scheduling, the `limit` specifies the maximum amount of resource the container will be granted during runtime.  Prior to installing Foundry, edit values.yaml and locate the parameters for `ephemeralStorageRequest` and `ephemeralStorageLimit` (there is a set of parameters for each Foundry container) and update these so the values are equal.  Similarly, resourceRequestsMemory and resourceMemoryLimit parameters need to be updated to the same value so that the size for request is equal to the size you specify for the limit.

## Use Cases for Helm Upgrade

Use the Helm upgrade command to upgrade the version of the chart or change the configuration of the installation, such as the following:

* Applying an updated version of Volt MX Foundry
* Enabling or disabling Foundry components
* Updating the database
* Enabling Ingress

### Applying an updated version of Volt MX Foundry

Please see [How to Upgrade Individual Foundry Components](Installing_Containers_With_Helm_PostInstallation#how-to-upgrade-individual-foundry-components) for more information.

### Enabling or disabling Foundry components

The following example shows how to enable the Engagement component assuming its currently disabled:

```bash
$ cd <directory containing the values.yaml>
#
# Let's assume your deployment currently has `engagementEnabled=false` and you now want
# to enable it. Edit your values.yaml file, locate the `engagementEnabled` parameter and
# change it to true and save the file.
#
# Now use `helm upgrade` which will cause Helm to compute any differences between what
# is installed vs your changes in values.yaml.  Helm will apply the necessary
# differences (add/updates or deletes) to the kubernetes objects.
#
# Also, use the atomic option while upgrading which rolls back any changes if the
# upgrade fails
#
$ helm upgrade foundry apps --namespace foundry --atomic
Release "foundry" has been upgraded. Happy Helming!
NAME: foundry
LAST DEPLOYED: Mon Nov 21 22:23:54 2022
NAMESPACE: foundry
STATUS: deployed
REVISION: 2
TEST SUITE: None

# Determine if the Engagement component is ready for use
$ kubectl get pods --namespace foundry
NAME                                          READY   STATUS      RESTARTS   AGE
foundry-db-update-hchqf                       0/1     Completed   0          3h35m
voltmx-foundry-apiportal-554f666486-dfg5m     1/1     Running     0          3h35m
voltmx-foundry-identity-68f98c564f-kmdkb      1/1     Running     0          3h35m
voltmx-foundry-integration-7848b49c99-pmcmd   1/1     Running     0          3h35m
voltmx-foundry-console-6c44866955-ct86f       1/1     Running     0          3h35m
voltmx-foundry-engagement-57475d8946-hq2kt    1/1     Running     0          71s
#
#  The output above shows that the engagement service was successfully started and is ready.
```

### Enabling Ingress

The following example shows how to enable Ingress if you disabled it to prevent access to your environment before it was ready:

```bash
$ cd <directory containing the values.yaml>
#
# Edit your values.yaml file, locate the `ingress.enabled` parameter and change
# it to true and save the file.
#
# Also, use the atomic option while upgrading which rolls back any changes if the
# upgrade fails
#
$ helm upgrade foundry apps --namespace foundry --set ingress.enabled=true --atomic
Release "foundry" has been upgraded. Happy Helming!
NAME: foundry
LAST DEPLOYED: Mon Nov 21 22:23:54 2022
NAMESPACE: foundry
STATUS: deployed
REVISION: 3
TEST SUITE: None

```

## Specifying the Pod Disruption Budget

A **Pod disruption budget** is an indicator of the number of disruptions that can be tolerated at a given time for a class of pods (a budget of faults). Whenever a disruption to the pods in a service is calculated to cause the service to drop below the budget when using **minAvailable**, the operation is paused until it can maintain the budget. For example, a drain event could be temporarily halted while it waits for more pods to become available such that the budget isn’t crossed by evicting the pods. Likewise, when using **maxUnavailable** the operation is paused if a disruption to the pods exceeds the setting.

To configure a Pod disruption budget, edit the values.yaml file and uncomment the **podDisruptionBudgetSpec** and either the **maxUnavailable** or **minAvailable** setting for your Foundry applications.
You can change the **maxUnavailable** to denote the maximum number of unavailable pods at given point of time
or the **minAvailable** setting to denote the minimum number of available pods at given point of time. The value you use should either be an integer or the number of pods as a percent. Save the values.yaml file once you have finished editing it. The following code shows the values.yaml content for each of the Foundry applications.

```
  # Pod disruption budget
  # Use this to set concurrent limit disruption budget of the application.
  # Specify either maxUnavailable or minAvailable (only one).  The value should be either
  # an integer for the number of pods or a percent.  Uncomment the lines below but make sure
  # only maxUnavailable or minAvailable is used (leave the other commented out) take note of the 2 space indention.
#  podDisruptionBudgetSpec:
#    maxUnavailable: 1
#    minAvailable: 50%
```
**Note:** If this configuration change is done after the initial installation with *helm install* you can apply these changes with *helm upgrade foundry apps -f values.yaml -n foundry*.


## Configuration Updates via Helm Upgrade

You can use Helm upgrade if you need to change a configuration parameter on your Volt MX Foundry deployment. One example is your Ingress is not working, because you forgot to set the Ingress Class name as part of your initial deployment. You could update the class name via `ingress.class` in values.yaml, then run Helm upgrade, and only the Ingress objects would be changed.

## Other Issues

For other issues please see
[FAQs and Troubleshooting](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/Containers_Solution_FAQs_and_Troubleshooting.md#faqs-and-troubleshooting) for FAQs and troubleshooting around advanced topics related to the cluster environment.
