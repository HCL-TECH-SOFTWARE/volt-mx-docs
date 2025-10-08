                           

You are here: Enabling Metrics Server

Appendices
==========

This section contains information about important features that are not enabled as part of the installation. These features require extra customizations to be enabled. Following is the detailed explanation to enable important features such as Metrics server, Kuberhealthy, etc.

Enabling Metrics Server
-----------------------

Metrics Server is a cluster-wide aggregation of resource usage data. It collects metrics like the CPU or memory consumption for containers or nodes, from the Summary API, exposed by Kubelet on each node. If you want to know the CPU or memory usage consumption through command line, you must enable the metrics server. It is not enabled as part of Foundry installation and is an add-on feature. Perform the following steps to enable metrics server.

1.  Navigate to the Foundry container artifact folder by running the following command.
```
cd VoltMXFoundryContainerOnPrem-9.0.0.0_GA
```
2.  Run the kubectl apply command to enable the metrics-server.
```
sudo kubectl apply -f add-ons/metrics-server
```

You must wait a for a minute for the metrics-server to start running. Once it starts working, use the following commands to get the CPU or memory consumption of the pods and nodes.

```
kubectl top nodes  #To get resource usage of nodes  
kubectl top pods -n default  #To get resource usage of foundry pods running in default namespace  
kubectl top pods -n --all-namespaces  #To get resource usage of all pods across all namespaces
```

Enabling Kuberhealthy
---------------------

Kuberhealthy is an operator for running synthetic checks. By creating a custom resource (a khcheck) in your cluster, you can easily enable various synthetic test containers. Kuberhealthy is not enabled as part of Foundry installation. It is an add-on feature. Perform the following steps to enable kuberhealthy.

1.  Navigate to the Foundry container artifact folder by running the following command.
```
cd VoltMXFoundryContainerOnPrem-9.0.0.0_GA
```
2.  Deploy the CRDs (Custom Resources), which creates a **customResource** check named **KuberhealthyCheck**.
```
sudo kubectl apply -f add-ons/kuberhealthy/Resources/crd-khcheck.yaml  
    sudo kubectl apply -f add-ons/kuberhealthy/Resources/crd-khstate.yaml  
    sudo kubectl apply -f add-ons/kuberhealthy/Resources/crd-servicemonitor.yaml
```
3.  Deploy `kuberhealthy.yaml` to create a **Kuberhealthy** namespace.
```
sudo kubectl apply -f add-ons/kuberhealthy/Resources/kuberhealthy.yaml
```
4.  Deploy other **kuberhealthy yml** files by running following command.
```
sudo kubectl apply -f add-ons/kuberhealthy/Resources
```
5.  Create the Grafana dashboard by importing `dashboard.json` file which is present in `VoltMXFoundryContainerOnPrem-9.0.0.0_GA/add-ons/kuberhealthy/Dashboard`. For importing the dashboard, refer to [Configuring Grafana Monitoring Tool](Containers_Solution_PostInstallation.md#configuring-grafana-monitoring-tool).

Enabling Stern
--------------

Although Kibana dashboard is provided as a default option with the Volt MX Foundry cluster setup, there might be times where you would want to quickly debug using the command line. Stern allows you to tail the log output from multiple pods belonging to a service and from multiple containers within the pod. Each result is color coded for quicker debugging.For more information, refer to [Tail Kubernetes with Stern](https://kubernetes.io/blog/2016/10/tail-kubernetes-with-stern/).

Perform the following steps to enable Stern:

1.  Download the latest binary from [GitHub - Stern Releases](https://github.com/wercker/stern/releases).
2.  Refer to [GitHub - Stern](https://github.com/wercker/stern) for the Stern commands. You can run the stern commands as required.

Specifying the PodDisruptionBudget
----------------------------------

A **PodDisruptionBudget** is an indicator of the number of disruptions that can be tolerated at a given time for a class of pods (a budget of faults). Whenever a disruption to the pods in a service is calculated to cause the service to drop below the budget, the operation is paused until it can maintain the budget. For example, a drain event could be temporarily halted while it waits for more pods to become available such that the budget isn’t crossed by evicting the pods.

To configure a PodDisruptionBudget, you must create a `PodDisruptionBudget` resource that matches the pods in the service. Run the following yml file to create a PodDisruptionBudget. You can change the **minAvailable** to denote the minimum number of available pods at given point of time.

```
apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
  name: voltmx-poddisruption
spec:
  minAvailable: 1
  selector:
    matchLabels:
      app: voltmx-foundry-identity
      app: voltmx-foundry-console
      app: voltmx-foundry-apiportal
      app: voltmx-foundry-integration
      app: voltmx-foundry-engagement
```

Encrypt the Database Password
-----------------------------

> **IMPORTANT:** Encryption is only supported for Tomcat application servers.

The Volt MX Foundry containers solution provides a 256-bit AES/GCM/NoPadding encryption utility, which can be used to encrypt your database password. To encrypt your database password, follow these steps:

1. After you download and extract the installation zip file, navigate to the `lib` folder.

2. From the `lib` folder, open a terminal (console), and then execute the following command:

```
java -jar EncryptionUtility.jar
```

3. In the **Enter Password to be Encrypted** field, type the password that is used to access your database.

4. In the **Enter Key to be Encrypted field**, type the key that must be used to encrypt the password.

The console then displays the **Encrypted Password** and **Encrypted Key**. These values must be added to the `DB_PASS` and `DB_PASS_SECRET_KEY` parameters in the `config.properties` file. For more information, refer to [Database Details](VoltMX_Foundry_Containers_Solution_On-Prem.html#database-details).
