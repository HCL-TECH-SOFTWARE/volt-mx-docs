
You are here: [Installation](#installation) > Salient Features

# Overview

New in version 9.5 is the ability to deploy Foundry to Kubernetes via Helm.  This section covers how to deploy Foundry with Helm.  You should review [Foundry Container Cluster Solution (On-Prem)](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/VoltMX_Foundry_Containers_Solution_On-Prem.md) for more details on containerized solutions, supported platforms, software and overall architecture details.

Helm is like a Unix package manager but for Kubernetes. In this sense, Helm is similar to Yum, Apt and Homebrew.  Helm installs software, but Helm is focused on helping you install software into an existing Kubernetes cluster.  HCL provides the deployment details in templates and exposes customizable parameters in a file called `values.yaml`.   You customize the values and then run the Helm templating engine to apply your customizations and deploy the metadata to Kubernetes.  Kubernetes processes the metadata and downloads Foundry docker images and installs them into your Kubernetes cluster.

You should use this installation path if you plan to use containers to setup your on-premise or Cloud based production grade installation of Volt MX Foundry and you have an existing cluster to install into.

Helm can also deploy to a development or test cluster (i.e. a single node with no high availability), but you should also be aware of lighter weight options that only require Docker (see our Docker solution at [Single container setup (On-Prem)](../../../Foundry/voltmxfoundry_single_container/Content/VoltMX_Foundry_Single_Container_Solution_On-Prem_.md)).

If you are doing an On-Prem Kubernetes installation and you want scripts to create your cluster, please utilize the solution documented at [Volt MX Foundry Container Cluster Solution](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/VoltMX_Foundry_Containers_Solution_On-Prem.md#overview)

More details about Helm and the Helm binaries can be found at <https://helm.sh>

## Salient Features

You can use the information to deploy Foundry to an existing Kubernetes clusters.  This solution will not create a Kubernetes deployment or new cluster for you.


# Prerequisites

- Kubernetes Cluster running version 1.27.6.

## Software Requirements

- Helm version 3.  Find more details about Helm and how to install it at [https://helm.sh/](https://helm.sh/).  Installation is simple on most platforms:  go to the [Helm Releases page at GitHub](https://github.com/helm/helm/releases) and download the latest zip file applicable for your platform.  Unzip and extract the helm executable and place it in an appropriate directory (/usr/local/bin on linux, perhaps c:\tools\bin for windows).  As long as it can be located via your PATH you should be set to use it.

### Supported OS Platform & Databases

Foundry is supported on certified Kubernetes clusters.  Generally certified clusters are running a variant of Linux.  Please refer to the prerequisites listed in [VoltMX Foundry Containers Solution On Prem](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/VoltMX_Foundry_Containers_Solution_On-Prem.md#prerequisites) for more details and specifics.

Download the Foundry Helm chart from [HCL Flexnet software portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.5.x&orgId=HCL).


# Configuration

The following parameters are specified in the values.yaml file within the Helm chart and should be reviewed and customized.  Alternatively, values can be overridden and specified with `--set parameterName=value` arguments with `helm install` but we encourage you to persist your changes in values.yaml.  There are two charts in this solution and both are required.  The database update chart must be installed first and performs the database creation or update.  The second installs the Foundry applications.  Both charts use the same values.yaml file.

1. Foundry uses several Global Unique IDs to distinguish different installations of Foundry. If you are upgrading an existing Volt MX Foundry deployment you should configure this deployment with the same account identifiers from your prior deployment.

    Upgrading from a prior version of Foundry:

    - Obtain the `upgrade.properties` file from your prior deployment copying it into the same directory as values.yaml.
    - Invoke the init-guids script specifying the file path of the prior deployment's upgrade.properties:  `./init-guids.sh --upgrade .`

    For a new deployment (non upgrade):

    - Invoke the init-guids script specifying the --new option:  `./init-guids.sh --new`.  Be aware that this script will create a new file called "upgrade.properties" that you should save in the event you want to later upgrade this deployment.

    Both of these steps will update `values.yaml` with the necessary configuration changes.  This step is required prior to installing with Helm.

2. **installEnvName**: The install environment name can be anything in lowercase (String). Example values are: `dev`, `qa`, `prod`, or `eastusprod`.

    > **_Note:_** The Install Environment Name must not contain numbers.

3. **imageCredentials:**<br>

     username: your-email<br>
     password: your-authentication-token<br>

     > **_Note:_** your-authentication-token is the CLI secret found under your User Profile in HCL.

4. **foundryInstallType**: The deployment must be marked as either production or non production.  This parameter must be specified and it must be either "PRODUCTION" or "NON-PRODUCTION".

5. **Install Components**: The following properties must be set to either true or false.  They specify if the component will be installed or not.

    - identityEnabled
    - consoleEnabled
    - apiPortalEnabled
    - integrationEnabled
    - engagementEnabled
    - dbUpdateEnabled

6. **Application Server Details**

    - **enableCaCertsOverride**: If you are utilizing a self signed cert or using a cert that was issued by a certificate authority (CA) not preloaded by the JRE trust store, you will need to add your certificate to the trust store located in `apps/certs/cacerts` and set this property to `true`.  At the present time you must leave the trust store password with the default of "changeit".

    - **serverDomainName**: The **Domain Name** for Volt MX Foundry deployment. This value should be the hostname of the LoadBalancer. For example: foundry.example.com  (DNS name).

      > **_Note:_** This property cannot be an IP address or 'localhost'.

7. **Ingress Details**

    - **Overview**: Ingress provides external access to the services in your Kubernetes cluster.  It is required to enable browsers to access the applications and also used by the backend services to communicate with each other.

    - **ingress.enabled**: true if Ingress should be enabled.  Ingress must be enabled for Foundry to function properly, but there are certain conditions where you may want to temporarily disable Ingress.

    - **ingress.protocol**: The communication protocol for accessing Volt MX Foundry. This value can be either http or https.  This should reflect the type of traffic you want the Ingress or Load Balancer to accept. **Note:** If ingress.tls is enabled, this setting should be https or the Foundry setup will fail.

    - **ingress.port**: This port is the port that Ingress will be listening on for requests to Foundry.  Generally this is 80 or 443.  This property is used together with ingress.protocol to build URLs used for end users and for Foundry to communicate between applications. **Note:** If tls is enabled this setting should be 443.

    - **ingress.class**: The class property is used to set the class name on the Ingress object.  The default is empty string which will enable the Ingress objects to be processed by your cluster default Ingress controller.  If your cluster does not have a default Ingress controller or if you want to override that, you can set the class name here.  Common values you might use include "nginx", "traefik", and "openshift-default". When utilizing Azure Application Gateway in AKS specify "azure/application-gateway".

    - **ingress.annotations**:  ingress.annotations allow you to specify additional annotations that will be added to every ingress object.  Add one annotation per line, each annotation should be indented 2 spaces and should be of the format of `annotationName: value`.  When rendered, your annotation value will automatically be quoted.

    - **ingress.tls**: Use this property to configure Ingress with either the Cluster or a Custom SSL certificate.

    - **ingress.tls.enabled**: When this property is set to true, Ingress is configured to use the Cluster SSL Certificate or the specified Custom SSL certificate.

    - **ingress.tls.customCertSecretName**: If
    customCertSecretName is not set the Cluster certificate will be used for tls. Provide secret name which has tls.crt and tls.key.
    
<details close markdown="block"><summary>To create a custom secret from pem file.
</summary>
The secret can be created using the following commands:

```
kubectl create secret tls NAME --cert=path/to/cert/file --key=path/to/key/file

```
>**Note :** The cert should be fullchain.

</details>

- **ingress.sslTermination**: This property is specific to OpenShift.  When this property is set to true, an annotation is added to each Ingress object signifying that the annotation `route.openshift.io/termination: "edge"` should be set.  This in turn causes OpenShift to configure routes and Ingress to accept connections on TLS/HTTPS and terminate the SSL connection while proxying the request over HTTP to the backend services.  This property should be used when configuring OpenShift with secured Ingress.

8. **Database Details**

     - **dbType**: This is the Database type you want to use for hosting Volt MX Foundry. The possible values are:
       - For MySQL DB server: `mysql`
       - For Azure MSSQL or SQL Server: `sqlserver`
       - For Oracle DB server: `oracle`
     - **dbHost** - This is the Database Server hostname used to connect to the Database Server.
    - **dbPort** – This is the Port Number used to connect to the Database Server. This can be empty for cloud manage service.
     - **dbUser** - This is the Database Username used to connect to the Database Server.
     - **dbPass** - This is the Database Password used to connect to the Database Server.
     - **dbPrefix** – This is the Database server prefix for Volt MX Foundry databases.
     - **dbSuffix** – This is the Database server suffix for Volt MX Foundry databases.
     - **useExistingDb**: If you want to use existing databases from a previous Volt MX Foundry instance set this variable to true,  otherwise it should be false.

    <br/>

    >  **Notes:**
    >
    > If you use an IP address for dbHost, make certain it is a static IP address and does not change.

    > Database Prefix and Suffix are optional inputs.
    > - In case of upgrade, ensure that the values of the Database Prefix and Suffix that you provide are the same as you had provided during the initial installation.

    > If **dbType** is set as **oracle**, the following String values need to be provided:
    >
    > - **dbDataTS**: Database Data tablespace name.
    > - **dbIndexTS**: Database Index tablespace name.
    > - **dbLobTS**: Database LOB tablespace name.
    > - **dbService**: Database service name.

    <br/>

9. **timeZone** - The Time Zone of the Database used for Volt MX Foundry installation. The Time Zone variable must be set to maintain consistency between the Application server and the Database server. For determining what value to set for the time zone you can refer to [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) on Wikipedia.

    > **_Note:_** The Time Zone is an optional value. If you do not provide any Time Zone, it is set to Etc/UTC.

10. **Readiness and Liveness Probes Details**: The following variables are set with default values in seconds. Readiness probes are used to determine if a service is available to handle requests. If it fails the configured thresholds, the service is marked as not ready and will not be routed requests. The liveness problem is similar, but when it fails the configured thresholds, the container is killed and restarted. These probes are present for each application and may be customized.
    - readinessInitDelay: The readiness probe initial delay. The default value is 30.  This is the number of seconds after the container has started before readiness probes are initiated.
    - livenessInitDelay: The liveness probe initial delay in seconds. The default value is 600. This is the number of seconds after the container has started before liveness probes are initiated.
    - readinessPeriodSeconds: The readiness period seconds parameter signifies how frequently the kubelet will execute a readiness probe.  The default is 30 indicating that once every 30 seconds a readiness probe will be executed.
    - readinessTimeoutSeconds:  The readiness timeout seconds parameter signifies how long kubelet will let a probe run before it times out and assumes the probe failed.  The default is 120 indicating 120 seconds.
    - livenessPeriodSeconds:  The liveness period seconds parameter signifies how frequently the kubelet will execute a liveness probe.  The default is 30 indicating that once every 30 seconds a liveness probe will be executed.
    - livenessTimeoutSeconds: The liveness timeout seconds parameter signifies how long kubelet will let a probe run before it times out and assumes the probe failed.  The default is 120 indicating 120 seconds.


11. **Minimum and Maximum RAM percentage Details**: The following variables are used to configure the amount of RAM used by the Java process in each container.  These have default values for each application container but may be customized for each application.
    - minRamPercentage: Minimum RAM percentage, default is "50".
    - maxRamPercentage: Maximum RAM percentage, default is "80".

12. **Container resource limits for memory and CPU**: The following variables are used to configure the memory and cpu resource limits for each application container.  These are string values and can be modified for each application.  Refer to <https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/> for additional details.
    - resourceRequestsCpu: specifies the minimum amount of CPU units the container is guaranteed to be allocated at startup.

    - resourceRequestsMemory: specifies the minimum amount of memory the container is guaranteed to be allocated at startup.

    - resourceMemoryLimit:  specifies the maximum amount of memory the container can consume. If the container tries to allocate more memory than this limit, the Linux kernel out-of-memory subsystem activates and, typically, intervenes by stopping one of the processes in the container that tried to allocate memory.

    This table documents the defaults for each container.

    | App Container      | Resource | Default |
    | ----------- | ----------- | ------- |
    | Identity    | resourceMemoryLimit    | "1.2G"  |
    | Identity    | resourceRequestsMemory | "1G" |
    | Identity    | resourceRequestsCpu    | "200m" |
    | Console     | resourceMemoryLimit    | "2.2G"  |
    | Console     | resourceRequestsMemory | "2G" |
    | Console     | resourceRequestsCpu    | "300m" |
    | API Portal  | resourceMemoryLimit    | "1.2G" |
    | API Portal  | resourceRequestsMemory | "1G"   |
    | API Portal  | resourceRequestsCpu    | "200m" |
    | Integration | resourceMemoryLimit    | "2.2G" |
    | Integration | resourceRequestsMemory | "2G"   |
    | Integration | resourceRequestsCpu    | "300m" |
    | Engagement  | resourceMemoryLimit    | "1.2G" |
    | Engagement  | resourceRequestsMemory | "1G"   |
    | Engagement  | resourceRequestsCpu    | "200m" |

13. **Custom JAVA_OPTS Details**: Each application can be set with a custom Java options which will be used to configure the JVM.  Under each application locate the variable called `customJavaOpts`.

14. **Number of instances to be deployed for each component**: Each application can be configured to specify the number of container replicas.  The default value is 1.  Under each application locate the variable called `replicas`.

15. **VoltMX Foundry Account Registration Details**: Software license registration must be done after installation with Helm (prior versions of the install were capable of doing the registration during install).  After logging into the newly deployed console a link at the top of every page will take you to the registration page to activate the software license.


# Installation

**Steps to Install Volt MX Foundry Container Cluster Solution:**

1. Download the Helm charts from [HCL Flexnet software portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/entitledDownloadFile.action?downloadPkgId=HCL_Volt_Foundry_v9.5.x&orgId=HCL) and unzip the contents.   With a command prompt, cd to the root of the unzipped content (you will see `values.yaml` here along with Charts in the subdirectories named `apps` and `dbupdate`).<br><br>
    **Note:**
        Substitute the version number for the version of Foundry you downloaded in the command example below such as **Foundry_v9.5.15.0** and **HelmChart-9.5.15.0_GA.zip**.

    <pre><code>
    $ mkdir ~/Foundry-9.5.n.n_GA
    $ cd ~/Foundry-9.5.n.n_GA
    $ unzip ~/Downloads/HelmChart-9.5.n.n_GA.zip
    </code></pre>

 2. Execute `init-guids.sh` to initialize account details.  Specify --upgrade if you are upgrading an existing installation.

    <pre><code>
    $ ./init-guids.sh --new
    ACCOUNTS_ENCRYPTION_KEY=b28e44b3-a5c6-8561-12cd-ef95b37f5f3c
    WAAS_MASTER_KEY=a7d6b717-07f8-011a-8095-755c340dc976
    WAAS_MASTER_KEY_ID=7d58a92c-e9db-1ebc-084f-6f0640fb5b42
    AUTH_MASTER_KEY=84635bf0-bc1b-7139-bf95-f64afb1673a1
    AUTH_MASTER_KEY_ID=ec376ad5-4b29-b013-d8d6-b1b7d6fd5559
    useExistingDb=false
    New keys have been saved to values.yaml, you may proceed with 'helm install'.
    </code></pre>

 3. Customize values.yaml with your deployment details.  Consult the configuration section above.

    <pre><code>
    $ vi values.yaml
    </code></pre>

 4. Verify you have access to the Kubernetes cluster with `kubectl`.

    <pre><code>
    $ kubectl get nodes
    NAME              STATUS   ROLES                  AGE   VERSION
    master            Ready    control-plane,master   1h   v1.24.0+dc5a2fd
    worker1           Ready    worker                 1h   v1.24.0+dc5a2fd
    worker2           Ready    worker                 1h   v1.24.0+dc5a2fd
    ....
    </code></pre>

 5. Create the Foundry namespace and make it your current context.  This step is optional but suggested. **Note:** If you do not create the namespace and make it the current context, you will need to use the option to create the namespace on your first helm command and specify the namespace option on each of your subsequent helm and kubectl commands. The namespace option is shown on the helm commands on the following steps as an example.

    <pre><code>
    $ kubectl create namespace foundry
    namespace/foundry created<br />
    $ kubectl config set-context --current --namespace=foundry
    Context "kube-cluster1" modified.
    </code></pre>

 

 6. Install the Foundry applications with Helm.

    <pre><code>
    $ helm install foundry apps -f values.yaml -n foundry --timeout 10m
    NAME: foundry
    LAST DEPLOYED: Fri Jan 20 08:21:36 2023
    NAMESPACE: foundry
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None
    NOTES:
    Application has been deployed successfully.
    .
    .
    .
    To verify application is running visit the url below;
    http://foundry.example.com/mfconsole
    </code></pre>

 7. The deployment will take some time.  Container images must be downloaded from the HCL container repository and then started and applications initialized.  You can watch the progress of the deployment with a variety of commands.   The command below watches the pod status and updates the output as the deployment progresses:

    <pre><code>
    $ kubectl get pods -w
    NAME                                         READY   STATUS     RESTARTS   AGE
    foundry-db-update-zfd4b                      0/1     Completed  0          28s
    voltmx-foundry-apiportal-fff6c987b-nv5pw     0/1     Init:0/1   0          62s
    voltmx-foundry-console-64d579d5f7-c6p8r      0/1     Init:0/1   0          62s
    voltmx-foundry-engagement-569dcb594-9bt2s    0/1     Init:0/1   0          62s
    voltmx-foundry-identity-5454597447-jgd6b     0/1     Init:0/1   0          62s
    voltmx-foundry-integration-fb5b78bc9-j2n5q   0/1     Init:0/1   0          62s
    voltmx-foundry-identity-5454597447-jgd6b     0/1     PodInitializing   0          85s
    voltmx-foundry-integration-fb5b78bc9-j2n5q   0/1     PodInitializing   0          85s
    voltmx-foundry-apiportal-fff6c987b-nv5pw     0/1     PodInitializing   0          85s
    voltmx-foundry-console-64d579d5f7-c6p8r      0/1     PodInitializing   0          85s
    voltmx-foundry-engagement-569dcb594-9bt2s    0/1     PodInitializing   0          85s
    voltmx-foundry-console-64d579d5f7-c6p8r      0/1     Running           0          1m15s
    voltmx-foundry-identity-5454597447-jgd6b     0/1     Running           0          1m15s
    voltmx-foundry-integration-fb5b78bc9-j2n5q   0/1     Running           0          1m15s
    voltmx-foundry-apiportal-fff6c987b-nv5pw     0/1     Running           0          1m15s
    voltmx-foundry-apiportal-fff6c987b-nv5pw     1/1     Running           0          2m
    voltmx-foundry-identity-5454597447-jgd6b     1/1     Running           0          2m1s
    voltmx-foundry-engagement-569dcb594-9bt2s    0/1     Running           0          2m2s
    voltmx-foundry-integration-fb5b78bc9-j2n5q   1/1     Running           0          2m2s
    voltmx-foundry-console-64d579d5f7-c6p8r      1/1     Running           0          2m19s
    voltmx-foundry-engagement-569dcb594-9bt2s    1/1     Running           0          2m30s
    ^C
    </code></pre>

    The `-w` option is short for `watch` and it causes kubectl to monitor the status and update the output with any changes.  You must press `ctrl-c` to terminate this command.

 8. Verify the deployment.  Using the commands below, you should see similar output:

    <pre><code>
    $ kubectl get pods
    NAME                                         READY   STATUS      RESTARTS   AGE
    foundry-db-update-zfd4b                      0/1     Completed   0          8m7s
    voltmx-foundry-apiportal-fff6c987b-nv5pw     1/1     Running     0          8m7s
    voltmx-foundry-console-64d579d5f7-c6p8r      1/1     Running     0          8m7s
    voltmx-foundry-engagement-569dcb594-9bt2s    1/1     Running     0          8m7s
    voltmx-foundry-identity-5454597447-jgd6b     1/1     Running     0          8m7s
    voltmx-foundry-integration-fb5b78bc9-j2n5q   1/1     Running     0          8m7s
    </code></pre>

    Each pod should show a status of `Running` and it should display 1/1 in the Ready column indicating each pod has 1 out of 1 container in the Ready status.

    <pre><code>
    $ kubectl get endpoints
    NAME                         ENDPOINTS           AGE
    voltmx-foundry-apiportal     10.130.3.124:8080   4m
    voltmx-foundry-console       10.130.3.125:8080   4m
    voltmx-foundry-engagement    10.130.3.129:8080   4m
    voltmx-foundry-identity      10.130.3.127:8080   4m
    voltmx-foundry-integration   10.130.3.126:8080   4m
    </code></pre>

    Endpoints show what IP Address/port each service will route requests to.  If you change the replica count you should see an associated endpoint address for each replica.

    <pre><code>
    $ kubectl get ingress
    NAME          CLASS    HOSTS                                   ADDRESS                                        PORTS   AGE
    auth                   foundry.apps.dsocp.nonprod.hclpnp.com   router-default.apps.dsocp.nonprod.hclpnp.com   80      11m
    console                foundry.apps.dsocp.nonprod.hclpnp.com   router-default.apps.dsocp.nonprod.hclpnp.com   80      11m
    engagement             foundry.apps.dsocp.nonprod.hclpnp.com   router-default.apps.dsocp.nonprod.hclpnp.com   80      11m
    integration            foundry.apps.dsocp.nonprod.hclpnp.com   router-default.apps.dsocp.nonprod.hclpnp.com   80      11m
    portal                 foundry.apps.dsocp.nonprod.hclpnp.com   router-default.apps.dsocp.nonprod.hclpnp.com   80      11m
    </code></pre>

    For each Ingress we should see that an address has been assigned.  If there is no address listed, Ingress will not function.  Generally a lack of address means that no ingress controller has determined it should setup the ingress.  This is usually caused by incorrectly specifying the ingress.class in values.yaml.  You can correct this and then run `helm upgrade foundry apps -f values.yaml -n foundry` and Helm will apply the class name change for you.

    If the pods are all showing ready and your Ingress shows addresses, you should be ready to open the Foundry Console in your browser.   Using the **host name** shown in the output, open the console in your browser.  From the output above, we would use <http://foundry.apps.dsocp.nonprod.hclpnp.com/mfconsole>.

    **Note:** All of these checks (validate pod status, ingress addresses, and health checks) are done for you if you run the command `helm test foundry -n foundry`.  This command will deploy a validation image from HCL which will run all of these tests to validate the application's health.  To see full details (and to help diagnose issues in the event of problems), run the test command and specify the `--logs` parameter.   For example:

    <pre><code>
      $ helm test foundry -n foundry --logs
      NAME: foundry
      LAST DEPLOYED: Tue Jan 31 21:23:43 2023
      NAMESPACE: foundry
      STATUS: deployed
      REVISION: 1
      TEST SUITE:     foundry-helm-test
      Last Started:   Wed Feb  1 20:55:52 2023
      Last Completed: Wed Feb  1 20:56:08 2023
      Phase:          Succeeded
      NOTES:
      Application has been deployed successfully.

        _______________________________________________

                    Release Information
        _______________________________________________

        RELEASE TYPE: NON-PRODUCTION
        NAMESPACE: foundry
        RELEASE NAME: foundry
        CHART VERSION: 1.1.0

        _______________________________________________

                    Build Information
        _______________________________________________

        IMAGE REGISTRY: hclcr.io/voltmx
        BUILD VERSION: 9.5.15.0_GA

        _______________________________________________

                    Database Information
        _______________________________________________

        DB TYPE: mysql
        DB HOST: mysql-service
        DP PORT: 3306
        DB SERVICE:

        _______________________________________________

                    Application Information
        _______________________________________________

        TIMEZONE: Etc/UTC
        INGRESS ENABLED: true
        PROTOCOL:  http

        To verify application is running visit the url below;
        http://foundry.apps.dsocp.nonprod.hclpnp.com/mfconsole

        POD LOGS: foundry-helm-test
        ############################## Foundry Health Check ###############################
        >> Starting foundry health check...
        >> Foundry health check completed.
        >> STATUS: PASSED
        ###################################################################################

        ########################## Foundry Ingress Address Check ##########################
        >> Starting foundry ingress address check...
        >> Enabled services are auth console integration engagement portal

        >> Ingress: auth
        ++ kubectl describe ingress auth
        ++ grep Address
        ++ awk '{print $2}'
        >> router-default.apps.dsocp.nonprod.hclpnp.com
        >> STATUS: PASSED

        >> Ingress: console
        ++ kubectl describe ingress console
        ++ grep Address
        ++ awk '{print $2}'
        >> router-default.apps.dsocp.nonprod.hclpnp.com
        >> STATUS: PASSED

        >> Ingress: integration
        ++ kubectl describe ingress integration
        ++ grep Address
        ++ awk '{print $2}'
        >> router-default.apps.dsocp.nonprod.hclpnp.com
        >> STATUS: PASSED

        >> Ingress: engagement
        ++ kubectl describe ingress engagement
        ++ grep Address
        ++ awk '{print $2}'
        >> router-default.apps.dsocp.nonprod.hclpnp.com
        >> STATUS: PASSED

        >> Ingress: portal
        ++ grep Address
        ++ kubectl describe ingress portal
        ++ awk '{print $2}'
        >> router-default.apps.dsocp.nonprod.hclpnp.com
        >> STATUS: PASSED

        >> Foundry ingress address check completed.
        ###################################################################################

        ############################ Foundry Pod Status Check #############################
        >> Starting foundry pod status check...
        >> Enabled services are identity console integration engagement apiportal

        >> CONTAINER: voltmx-foundry-identity
        ++ kubectl wait pods -l app=voltmx-foundry-identity --for condition=Ready --timeout=90s
        ++ grep -ic 'condition met'
        >> STATUS: PASSED

        >> CONTAINER: voltmx-foundry-console
        ++ kubectl wait pods -l app=voltmx-foundry-console --for condition=Ready --timeout=90s
        ++ grep -ic 'condition met'
        >> STATUS: PASSED

        >> CONTAINER: voltmx-foundry-integration
        ++ kubectl wait pods -l app=voltmx-foundry-integration --for condition=Ready --timeout=90s
        ++ grep -ic 'condition met'
        >> STATUS: PASSED

        >> CONTAINER: voltmx-foundry-engagement
        ++ kubectl wait pods -l app=voltmx-foundry-engagement --for condition=Ready --timeout=90s
        ++ grep -ic 'condition met'
        >> STATUS: PASSED

        >> CONTAINER: voltmx-foundry-apiportal
        ++ kubectl wait pods -l app=voltmx-foundry-apiportal --for condition=Ready --timeout=90s
        ++ grep -ic 'condition met'
        >> STATUS: PASSED

        >> Foundry pod status check completed.
        ###################################################################################

    </code></pre>


## Uninstalling Foundry
The Foundry database update job and Foundry applications can be uninstalled with two commands: `helm uninstall foundry` and `helm uninstall dbupdate`.  If your Kubernetes context is not set to the foundry namespace you may need to specify the `-n <namespace>` parameter as in `helm uninstall foundry -n foundry`.   This will uninstall the deployment of Foundry in Kubernetes (it will stop the containers and pods and delete them from the work load, along with any secrets, configmaps, ingress and other metadata).  This will not remove databases that were created during install: those must be manually deleted with your database tools.


## Modifying Foundry configuration
With the exception of database changes (any database related parameters), you can usually modify the values.yaml file and then run `helm upgrade foundry apps -f values.yaml -n foundry` and Helm will update configuration and restart any impacted pods.   For instance, if you install foundry but find you failed to properly specify the ingress.class name, you could edit values.yaml, update the ingress.class parameter and then run `helm upgrade foundry apps -f values.yaml -n foundry`.  In the event that `helm upgrade` does not work for you, you could uninstall foundry with `helm uninstall foundry -n foundry` and then re-install the Foundry applications.


## Troubleshooting
Review the general Foundry with Kubernetes troubleshooting section in [Volt MX Foundry Container Cluster Solution](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/Containers_Solution_FAQs_and_Troubleshooting.md
)


## Known Issues and Limitations
Volt MX Foundry Container Cluster Solution has the following known issues and limitations:

- Support for **SPA / Desktop Web** is only available for zipped SPA apps, not for WARs.
