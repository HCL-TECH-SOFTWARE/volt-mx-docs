Post Installation Tasks
=======================

*   [Configuring Kibana Dashboard](#configuring-kibana-dashboard): Kibana is another application in elastic stack, commonly know as the charting tool, which provides search and data visualization capabilities for data indexed in ElasticSearch. ElasticSearch is primarily used for search and log analysis. Kibana also acts as user interface for monitoring, managing, and securing an Elastic Stack cluster. 
*   [Configuring Grafana Monitoring Tool](#configuring-grafana-monitoring-tool): To know the resource consumption of each pod in a cluster Prometheus and Grafana are used. Prometheus is a metrics collection tool that collects CPU, memory, and network usage of all pods across a cluster. Grafana is a visualization tool which takes data from Prometheus and displays the metrics in a visual format.
*   [Configuring Alert Manager](#configuring-alert-manager): When a predefined condition is met or exceeded, for example, when the predefined limit of CPU usage is crossed, email alerts can be sent to the administrator using the Prometheus Alert Manager. The Prometheus alert manager can be configured as part of Prometheus to send email alerts to the administrator for certain critical events like High CPU usage, High Node Memory Usage, etc.
*   [How to access the Kubernetes Dashboard](#how-to-access-the-kubernetes-dashboard): You can use the Kubernetes Dashboard to get an overview of the applications running on your cluster, as well as for creating or modifying individual Kubernetes resources.
*   [How to Upgrade Individual Foundry Components](#how-to-upgrade-individual-foundry-components): If you want to upgrade individual foundry components, follow the steps mentioned in this section.

Configuring Kibana Dashboard
----------------------------

Access Kibana by using the host you provided as part of the Helm install. You will be prompted to login to elasticsearch. Use the username 'elastic' and obtain the password using the command you were shown as part of the helm install of Kibana such as the following:

```
2. Retrieve the elastic user's password.
  $ kubectl get secrets --namespace=elastic elasticsearch-master-credentials -ojsonpath='{.data.password}' | base64 -d
```

![](Resources/Images/Kibana1.png)

Once the Kibana dashboard is available, a data view must be created. Perform the following steps to create the data view.

1.  Navigate to **Create data view** by opening the main menu, then click **Management** Stack Management > **Kibana** Data Views
2. Click **Create data view**.
    
    ![](Resources/Images/Kibana2.png)
    
2.  Under Create data view, add a Name such as **MetricBeat**, Index pattern such as **metricbeat\***, 
select **@timestamp** under the Timestamp field, and click **Save data view to Kibana**..
    
    ![](Resources/Images/Kibana3.png)
    
6.  Navigate to **Discover** by opening the main menu, then click **Analytics** Discover, and select the data view you created in the previous step to view the logs. 
    
    ![](Resources/Images/Kibana4.png)
    

Configuring Grafana Monitoring Tool
-----------------------------------

Grafana is installed as part of the helm install for kube-prometheus-stack. Access the Grafana dashboard using the host you provided as part of the Helm install, and use the 'admin' username and password to login. Once you have logged in you can access Foundry metrics via a few simple steps:

![](Resources/Images/Grafana1.png)

1.  Click the Search icon to Search dashboards and select *Kubernetes / Compute Resources / Namespace (pods)* from the General list and you will see the following dashboard:
    
    ![](Resources/Images/Grafana2.png)
    
2.  Select Prometheus from the *Data Source* drop down list and select your Foundry namespace from the *namespace* dropdown list.
    
    ![](Resources/Images/Grafana3.png)
    
3.  The Foundry Metrics should be visible once you have made these selections. If you choose, you can save this dashboard to a JSON file for reference later.


Configuring Alert Manager
-------------------------

The Prometheus Alert Manager is installed as part of the Helm install for kube-prometheus-stack. The Prometheus Alert Manager configuration is an optional configuration that can be done if the administrator wishes to receive email alerts on critical events. It can be configured as part of Prometheus to send email alerts to the administrator when certain predefined conditions are met or exceeded. 


How to access the Kubernetes Dashboard
--------------------------------------

Use the following instructions if you would like to deploy and access the 
[Kubernetes Dashboard](https://github.com/kubernetes/dashboard#kubernetes-dashboard).


How to Upgrade Individual Foundry Components
-------------------------------------------

**Note:** If you are upgrading a version of Volt MX Foundry that you had installed with Volt MX Foundry Container Cluster Solution scripts and templates, ensure you follow the steps to run *init-guid.sh* as part of an upgrade so your current properties are preserved.

To upgrade individual Volt MX Foundry components, perform the following steps.

1.  Go to the Foundry helm folder.
2.  Open `values.yaml` file and change the version value of **foundryBuildVer** to the required version.
3.  Run the following command to begin the upgrade.
```
helm upgrade foundry . -n your-namespace
```
**Note:** Presently the Helm chart does not support running different Volt MX Foundry container components (such as Console or API Portal) at different versions than the others. This will be addressed ASAP.