# Monitoring

This section contains information about important features that are not enabled as part of the installation. These features require extra customizations to be enabled. Following is the detailed explanation to enable important features such as Metrics server, Elastic Stack, Kuberhealthy, etc.

## Deploying the Metrics Server

The Kubernetes Metrics Server is an aggregator of resource usage data in your cluster. For more information, see Kubernetes Metrics Server on GitHub. The Metrics Server is commonly used by other Kubernetes add ons, such as the Horizontal Pod Autoscaler or the Kubernetes Dashboard. It may already be deployed in your cluster, which is the case for Rancher Desktop, and if not, you can deploy it using these steps.

1. Deploy the Metrics Server with the following command:

    <pre><code>
    $ kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
    </code></pre>

2. Verify that the metrics-server deployment is running the desired number of pods with the following command:

    <pre><code>
    $ kubectl get deployment metrics-server -n kube-system
    NAME             READY   UP-TO-DATE   AVAILABLE   AGE
    metrics-server   1/1     1            1           6m
    </code></pre>

## Elastic Stack Helm Charts

Elastic stack is a group of open source products from Elastic designed to help users sample data from any type of source, in any format, and via any search where they can analyze and visualize the data in real time.

The following are the core products of Elastic Stack:

1. Elasticsearch - the main component of the elastic stack
2. Kibana
3. Beats - Metricbeat and Filebeat

Elasticsearch is one of the applications in elastic stack which is primarily for search and log analysis. It is a NoSQL database that stores data in unstructured way. Although unlike most NoSQL databases, Elasticsearch has a strong focus on search capabilities and features using the extensive Elasticsearch API.

Kibana is another application in Elastic Stack, commonly know as the charting tool, which provides search and data visualization capabilities for data indexed in Elasticsearch. Kibana also acts as a user interface for monitoring, managing, and securing an Elastic Stack cluster.

Beats are data shippers that are installed on servers as agents used to send different type of operational data to Elasticsearch. In this installation guide, we will use two data shippers: Metricbeat and Filebeat.

>Metricbeat is one of the elastic beats and is a lightweight shipper in the Elastic Stack that periodically collects metrics from the operating system and from services running on the server.

>Filebeat is another agent on elastic beats and is a lightweight shipper in the Elastic Stack that monitors the log files or locations that users specify, collects log events, and forwards them to Elasticsearch for indexing.


### Prerequisites

1. Create a kubernetes namespace under the name "elastic"
2. Add the helm elastic repo

#### Example Command Line Commands

```bash

$ kubectl create namespace elastic
namespace/elastic created

$ helm repo add elastic https://helm.elastic.co
$ helm repo update

```

### Installing Elasticsearch

1. Install Elasticsearch via helm
    - Enable Ingress during the install

#### Example Command Line Commands

**Notes:**

- Update the volumeClaimTemplate.storageClassName to match the storage class provided by your cluster via a command line argument. For example, the storage class name to be used when installing in Rancher Desktop is "local-path" while for an OpenShift installation, the storage class name to be used is "thin".

- The default Ingress class name is "nginx". Update ingress.className to match the Ingress class provided by your cluster via a command line argument. Use the command 'kubectl get ingress --namespace your-foundry-namespace' to display the the Ingress class provided by your cluster.

- You may need to modify the resources requests cpu and memory as well as the resources limits cpu and memory to accomodate the limitations of your Kubernetes environment such as Rancher Desktop.

```bash

$ helm install -n elastic --create-namespace elasticsearch elastic/elasticsearch \
--set volumeClaimTemplate.storageClassName=your-class \
--set ingress.enabled=true --set ingress.className="cluster-ingress-class" \
--set ingress.hosts[0].host=elasticsearch.example.com \
--set ingress.hosts[0].paths[0].path=/
NAME: elasticsearch
LAST DEPLOYED: Mon Nov 28 13:33:40 2022
NAMESPACE: elastic
STATUS: deployed
REVISION: 1
NOTES:
1. Watch all cluster members come up.
  $ kubectl get pods --namespace=elastic -l app=elasticsearch-master -w
2. Retrieve elastic user's password.
  $ kubectl get secrets --namespace=elastic elasticsearch-master-credentials -ojsonpath='{.data.password}' | base64 -d
3. Test cluster health using Helm test.
  $ helm --namespace=elastic test elasticsearch

# Watch all of the pods start up
$ kubectl get pods --namespace=elastic -l app=elasticsearch-master -w
NAME                     READY   STATUS    RESTARTS   AGE
elasticsearch-master-0   1/1     Running   0          2m7s
elasticsearch-master-1   1/1     Running   0          2m7s
elasticsearch-master-2   1/1     Running   0          2m7s

# Retrieve elastic user's password
$ kubectl get secrets --namespace=elastic elasticsearch-master-credentials -ojsonpath='{.data.password}' | base64 -d
**secret**

# Test cluster health using Helm test
$ helm --namespace=elastic test elasticsearch
NAME: elasticsearch
LAST DEPLOYED: Mon Nov 28 13:36:05 2022
NAMESPACE: elastic
STATUS: deployed
REVISION: 1
TEST SUITE: None

```


### Installing Kibana

1. Install kibana via helm
    - Enable Ingress during the install

#### Example Command Line Commands

**Note:** The previous notes for Elasticsearch Ingress and Resources apply to Kibana as well.

``` bash
$ helm install -n elastic kibana elastic/kibana \
--set ingress.enabled=true --set ingress.className="cluster-ingress-class" \
--set ingress.hosts[0].host=kibana.example.com \
--set ingress.hosts[0].paths[0].path=/
NAME: kibana
LAST DEPLOYED: Mon Nov 28 13:37:55 2022
NAMESPACE: elastic
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Watch all containers come up.
  $ kubectl get pods --namespace=elastic -l release=kibana -w
2. Retrieve the elastic user's password.
  $ kubectl get secrets --namespace=elastic elasticsearch-master-credentials -ojsonpath='{.data.password}' | base64 -d
3. Retrieve the kibana service account token.
  $ kubectl get secrets --namespace=elastic kibana-kibana-es-token -ojsonpath='{.data.token}' | base64 -d

# Watch all of the pods start up
$ kubectl get pods --namespace=elastic -l release=kibana -w
NAME                             READY   STATUS    RESTARTS   AGE
kibana-kibana-6b485d6676-47kmj   1/1     Running   0          2m5s

# Retrieve elastic user's password
$ kubectl get secrets --namespace=elastic elasticsearch-master-credentials -ojsonpath='{.data.password}' | base64 -d
**secret**

# Retrieve the kibana service account token.
$ kubectl get secrets --namespace=elastic kibana-kibana-es-token -ojsonpath='{.data.token}' | base64 -d
**secret**

```


### Installing Metricbeat

1. Install metricbeat via helm

#### Example Command Line Commands

``` bash

$ helm install -n elastic metricbeat elastic/metricbeat
NAME: metricbeat
LAST DEPLOYED: Mon Nov 28 13:40:45 2022
NAMESPACE: elastic
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Watch all containers come up.
  $ kubectl get pods --namespace=elastic -l app=metricbeat-metricbeat -w

$ kubectl get pods --namespace=elastic -l app=metricbeat-metricbeat -w
NAME                          READY   STATUS    RESTARTS   AGE
metricbeat-metricbeat-mqm76   1/1     Running   0          2m28s

```


### Installing Filebeat

1. Install filebeat via helm

#### Example Command Line Commands

```bash

$ helm install -n elastic filebeat elastic/filebeat
NAME: filebeat
LAST DEPLOYED: Mon Nov 28 13:45:33 2022
NAMESPACE: elastic
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Watch all containers come up.
  $ kubectl get pods --namespace=elastic -l app=filebeat-filebeat -w

$ kubectl get pods --namespace=elastic -l app=filebeat-filebeat -w
NAME                      READY   STATUS    RESTARTS      AGE
filebeat-filebeat-lr9k9   1/1     Running   0             2m15s

```

#### Example URLs for accessing each service

Use the following URLs to confirm that each service is available:

* Elasticsearch
    *    https://elasticsearch.example.com/
* Kibana
    *    https://kibana.example.com/



## Kuberhealthy Helm Charts

Kuberhealthy is an operator for running synthetic checks. By creating a custom resource (a khcheck) in your cluster, you can easily enable various synthetic test containers. Kuberhealthy is not provided as part of Foundry installation as it is an add-on feature. The Kuberhealthy installation requires the following prerequisites: Prometheus, Alert Manager, and Grafana. If you do not already have this support installed in your environment, you can easily do so via Helm Charts.

### Prerequisites

**Note:** OpenShift provides out-of-the-box support for Prometheus, Prometheus Operator, AlertManager, NodeExporter, Kube State Metrics, and Grafana. Kuberhealthy is not required as OpenShift provides other [health checking mechanisms](https://docs.openshift.com/container-platform/4.6/applications/application-health.html).

Use the following steps to install via Helm:

1. Add the prometheus-community repo and request a repo update
2. Install the [Kube Prometheus Stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack#kube-prometheus-stack)

**Note:** The components included in the Kube Prometheus Stack install are as follows:

- The Prometheus Operator
- Highly available Prometheus
- Highly available Alertmanager
- Prometheus node-exporter
- Prometheus Adapter for Kubernetes Metrics APIs
- kube-state-metrics
- Grafana

#### Install Example Showing Ingress Enablement
The following example shows how to install kube-prometheus-stack with Ingress enablement for Alertmanager, Grafana, and Prometheus using command line parameters.

**Note:** Replace the host, paths and default timezone setting using your values. In this example, the urls listed will be used to provide ingress to these applications.

```bash
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
"prometheus-community" has been added to your repositories

$ helm repo update
...Successfully got an update from the "prometheus-community" chart repository
Update Complete. ⎈Happy Helming!⎈

$ helm install -n kube-prometheus-stack --create-namespace kube-prometheus-stack prometheus-community/kube-prometheus-stack \
--set alertmanager.ingress.enabled=true --set alertmanager.ingress.hosts[0]=alertmanager.example.com --set alertmanager.ingress.paths[0]=/ \
--set grafana.defaultDashboardsTimezone=et --set grafana.ingress.enabled=true --set grafana.ingress.hosts[0]=grafana.example.com \
--set prometheus.ingress.enabled=true --set prometheus.ingress.hosts[0]=prometheus.example.com --set prometheus.ingress.paths[0]=/
NAME: kube-prometheus-stack
LAST DEPLOYED: Thu Oct  6 12:48:53 2022
NAMESPACE: kube-prometheus-stack
STATUS: deployed
REVISION: 1
NOTES:
kube-prometheus-stack has been installed. Check its status by running:
  kubectl --namespace kube-prometheus-stack get pods -l "release=kube-prometheus-stack"

Visit https://github.com/prometheus-operator/kube-prometheus for instructions on how to create & configure Alertmanager and Prometheus instances using the Operator.

$ kubectl --namespace kube-prometheus-stack get pods -l "release=kube-prometheus-stack"
NAME                                                        READY   STATUS    RESTARTS   AGE
kube-prometheus-stack-prometheus-node-exporter-9dq9s        1/1     Running   0          7m14s
kube-prometheus-stack-operator-7868bc5fc5-wkct4             1/1     Running   0          7m14s
kube-prometheus-stack-kube-state-metrics-77cdf9bbfd-xpzzt   1/1     Running   0          7m14s

```


#### Advanced Install Example Showing Ingress Enablement and Alert Manager Configuration
In the example above we installed kube-prometheus-stack without customizations. You will most likely need to customize your configuration for things like Alertmanager to work properly. This example walks through how to customize the configuration of kube-prometheus-stack to enable Ingress for Alertmanager, Grafana, and Prometheus and add the Alertmanager Configuration.

**Note:** If you installed kube-prometheus-stack using the previous example, simply update the values.yaml for kube-prometheus-stack using the same values, and use helm upgrade instead of helm install. This advanced example will show you how to to update the values.

See the [Kube Prometheus Stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack#kube-prometheus-stack) README for more details.

##### Prerequisites Steps for Advanced Install
```bash
#  Add the repo and update it if you have not already done so previously
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
"prometheus-community" has been added to your repositories

$ helm repo update
...Successfully got an update from the "prometheus-community" chart repository
Update Complete. ⎈Happy Helming!⎈

# Create a new directory for kube-prometheus-stack and change to it
$ mkdir custom-kube-prometheus-stack
$ cd custom-kube-prometheus-stack

# Download the values.yaml file for kube-prometheus-stack
$ helm show values prometheus-community/kube-prometheus-stack >values.yaml

```

##### Ingress Enablement Example
The following example shows how to enable Ingress for Alertmanager, Grafana, and Prometheus.
Edit the values.yaml file for kube-prometheus-stack that you downloaded per the prerequisite steps, set Ingress enabled to true, and provide a hostname and a path:

```
alertmanager:

  ingress:
    enabled: true

    # Replace with your host(s)
    hosts:
    - alertmanager.example.com

    # Replace with your custom path for Alertmanager if you customized this during deployment
    paths
    - /
.
.
.
grafana:

  defaultDashboardsTimezone: et

  ingress:
    enabled: true

    # Replace with your host(s)
    hosts:
    - grafana.example.com

    # Replace with your custom path for Grafana if you customized this during deployment
    path: /
.
.
.
prometheus:

  ingress:
    enabled: true

    # Replace with your host(s)
    hosts:
    - prometheus.example.com

    # Replace with your custom path for Prometheus if you customized this during deployment
    paths
    - /
```

##### Alertmanager Configuration
The following example shows how to configure Alertmanager for Volt MX Foundry.

1. Edit values.yaml for kube-prometheus-stack that you downloaded per the prerequisite steps, and search for and replace the **additionalPrometheusRulesMap** setting with the Foundry Custom Rules using the following values:

    <pre><code>
    additionalPrometheusRulesMap:
      rule-name:
        groups:
        - name: Pods
          rules:
          - alert: Container restarted
            annotations:
              summary: Container named {{$labels.container}} in {{$labels.pod}} in {{$labels.namespace}} was restarted
            expr: |
              sum(increase(kube_pod_container_status_restarts_total{container=~"kony.*"}[1m])) by (pod,namespace,container) > 0
            for: 0m
            labels:
              severity: 'High'<br />
          - alert: High Memory Usage of Container
            annotations:
              summary: Container named {{$labels.container}} in {{$labels.pod}}
                       in {{$labels.namespace}} is using more than 80% of Memory Limit
            expr: |
              ((( sum(container_memory_usage_bytes{image!="",container_name!="POD", container=~"kony.*"}) by
              (namespace,container_name,pod_name)  / sum(container_spec_memory_limit_bytes{image!="",container_name!="POD",
              namespace!="kube-system"}) by (namespace,container_name,pod_name) ) * 100 ) < +Inf ) > 80
            for: 5m
            labels:
              severity: 'Critical'<br />
          - alert: High CPU Usage of Container
            annotations:
              summary: Container named {{$labels.container}} in {{$labels.pod}} in {{$labels.namespace}} is using more than 80% of CPU Limit
            expr: |
              ((sum(irate(container_cpu_usage_seconds_total{image!="",container_name!="POD", container=~"kony.*"}[30s]))
              by (namespace,container_name,pod_name) / sum(container_spec_cpu_quota{image!="",container_name!="POD",
              container=~"kony.*"} / container_spec_cpu_period{image!="",container_name!="POD", container=~"kony.*"})
              by (namespace,container_name,pod_name) ) * 100)  > 80
            for: 5m
            labels:
              severity: 'Critical'<br />
        - name: Nodes
          rules:
          - alert: High Node Memory Usage
            annotations:
              summary: Node {{$labels.kubernetes_io_hostname}} has more than 80% memory used. Plan Capacity
            expr: |
              (sum (container_memory_working_set_bytes{id="/",container_name!="POD"}) by (kubernetes_io_hostname) / sum
              (machine_memory_bytes{}) by (kubernetes_io_hostname) * 100) > 80
            for: 5m
            labels:
              severity: 'High'<br />
          - alert: High Node CPU Usage
            annotations:
              summary: Node {{$labels.kubernetes_io_hostname}} has more than 80% allocatable cpu used. Plan Capacity.
            expr: |
              (sum(rate(container_cpu_usage_seconds_total{id="/", container_name!="POD"}[1m])) by (kubernetes_io_hostname) /
              sum(machine_cpu_cores) by (kubernetes_io_hostname)  * 100) > 80
            for: 5m
            labels:
              severity: 'High'<br />
          - alert: High Node Disk Usage
            annotations:
              summary: Node {{$labels.kubernetes_io_hostname}} has more than 85% disk used. Plan Capacity.
            expr: |
              (sum(container_fs_usage_bytes{id="/",container_name!="POD"}) by (kubernetes_io_hostname) / sum
              (container_fs_limit_bytes{container_name!="POD",id="/"}) by (kubernetes_io_hostname)) * 100 > 85
            for: 5m
            labels:
              severity: 'High'
    </code></pre>

2. Search for the **receivers** section, and add the **Foundry_Alerts** receiver for your email configuration. **Note:** Uncomment and update **auth_username** and **auth_password** if they are required. Otherwise, you can remove them.

    <pre><code>
    receivers:
    - name: 'Foundry_Alerts'
      email_configs:
        - to: email_recipient_address
          from: email_sender_address
          smarthost: smtp_smarthost_for_sending_emails
          # auth_username: sender_username
          # auth_password: sender_authentication_password
          headers:
            Subject: 'Alert'
    </code></pre>

3. Save your changes and exit your editor.

4. Do the helm install of kube-prometheus-stack using your customized values.yaml. **Note:** Use helm upgrade if you have already installed kube-prometheus-stack.

```bash
# Install kube-prometheus-stack using customized values.yaml file
$ helm install -n kube-prometheus-stack --create-namespace \
-f values.yaml kube-prometheus-stack prometheus-community/kube-prometheus-stack

Release "kube-prometheus-stack" has been upgraded. Happy Helming!
NAME: kube-prometheus-stack
LAST DEPLOYED: Wed Jan 11 13:55:37 2023
NAMESPACE: kube-prometheus-stack
STATUS: deployed
REVISION: 1
NOTES:
kube-prometheus-stack has been installed. Check its status by running:
  kubectl --namespace kube-prometheus-stack get pods -l "release=kube-prometheus-stack"

Visit https://github.com/prometheus-operator/kube-prometheus for instructions on how to create & configure Alertmanager and Prometheus instances using the Operator.

# Check its status
$ kubectl --namespace kube-prometheus-stack get pods -l "release=kube-prometheus-stack"
NAME                                                        READY   STATUS    RESTARTS   AGE
kube-prometheus-stack-prometheus-node-exporter-9dq9s        1/1     Running   0          7m14s
kube-prometheus-stack-operator-7868bc5fc5-wkct4             1/1     Running   0          7m14s
kube-prometheus-stack-kube-state-metrics-77cdf9bbfd-xpzzt   1/1     Running   0          7m14s

```

#### Example URLs for accessing each service

Use the following URLs to confirm that each service is available:

* AlertManager
    *    https://alertmanager.example.com/#/status
* Grafana
    *    https://grafana.example.com/login
    *    Use the following username/password: admin/prom-operator
* Prometheus
    *    https://prometheus.example.com/graph


### Installing Kuberhealthy

Use the following steps to install via Helm:

1. Add the kuberhealthy repo
2. Install [Kuberhealthy with kube-prometheus](https://github.com/kuberhealthy/kuberhealthy/tree/6bb2601ba00f266d5bf2f4445d9309b321b3d564/deploy#helm).

**Note:** The Grafana Dashboard is enabled as part of the Kuberhealthy install.


#### Example Command Line Commands

```bash
$ helm repo add kuberhealthy https://kuberhealthy.github.io/kuberhealthy/helm-repos
"kuberhealthy" has been added to your repositories

$ helm install -n kuberhealthy --create-namespace kuberhealthy kuberhealthy/kuberhealthy \
--set prometheus.enabled=true --set prometheus.prometheusRule.enabled=true \
--set prometheus.prometheusRule.release=kube-prometheus-stack \
--set prometheus.prometheusRule.namespace=kube-prometheus-stack \
--set prometheus.serviceMonitor.enabled=true --set prometheus.serviceMonitor.release=kube-prometheus-stack \
--set prometheus.serviceMonitor.namespace=kube-prometheus-stack \
--set prometheus.grafanaDashboard.enabled=true --set prometheus.grafanaDashboard.namespace=kube-prometheus-stack
W1010 11:46:33.494952    4941 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionBudget
W1010 11:46:33.693703    4941 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionBudget
NAME: kuberhealthy
LAST DEPLOYED: Thu Oct  6 12:54:43 2022
NAMESPACE: kuberhealthy
STATUS: deployed
REVISION: 1
TEST SUITE: None

```

Use Grafana to confirm that the Kuberhealthy support is available:

1. Login to Grafana
2. Select Search from the Left-hand Menu
3. Select Kuberhealthy from the list

The Kuberhealthy Running Box should show Running and the Cluster Health Box should show Healthy.

Scroll down to see the Checks that were installed by default: dns-status-internal, deployment, and daemonset.

**Note:** For OpenShift use Observe -> Dashboards within the OpenShift Console to access Web UI consoles associated with Kubernetes and Grafana.


## Enabling Stern

Although the Kibana dashboard is provided as a default option with the Volt MX Foundry cluster setup, there might be times where you would want to quickly debug using the command line. Stern allows you to tail the log output from multiple pods belonging to a service, and from multiple containers within the pod. Each result is color coded for quicker debugging. For more information, refer to [Tail Kubernetes with Stern](https://kubernetes.io/blog/2016/10/tail-kubernetes-with-stern/).

Perform the following steps to enable Stern:

1.  Download the latest binary from [GitHub - Stern Releases](https://github.com/stern/stern/releases).
2.  Refer to [GitHub - Stern](https://github.com/stern/stern) for the Stern commands. You can run the stern commands as required.
