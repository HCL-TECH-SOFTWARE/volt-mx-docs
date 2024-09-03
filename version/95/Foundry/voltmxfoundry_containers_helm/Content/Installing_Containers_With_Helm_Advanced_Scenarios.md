# Advanced Scenarios

## Notes for hosted Cloud installs (EKS, GKE, AKS)

You can use the Helm chart to install Foundry to a Kubernetes cluster hosted in Amazon’s Elastic Kubernetes Service (EKS), Microsoft’s Azure Kubernetes Service (AKS), and Google’s Kubernetes Engine (GKE).  In general the chart installs without problem.  You may want to consider the following as you customize your `values.yaml` for these environments:

1. Ingress:  verify the name of the Ingress Class provided by your cluster and ensure you update the `ingress.class` parameter to the proper value.  For instance, if you use the Azure Application Gateway you will want to set the `ingress.class` to "azure/application-gateway".

2. GKE:  If you utilize an autopilot GKE cluster, you may need to observe the following limitations:

    A. Liveness and Readiness probes must be configured with periodSeconds greater than timeoutSeconds.

    B. The pod resource requests and resource limits must be configured with the same value. The `request` parameter specifies a minimum amount used during pod scheduling, the `limit` specifies the maximum amount of resource the container will be granted during runtime.  Prior to installing Foundry, edit values.yaml and locate the parameters for `ephemeralStorageRequest` and `ephemeralStorageLimit` (there is a set of parameters for each Foundry container) and update these so the values are equal.  Similarly, `resourceRequestsMemory` and `resourceMemoryLimit` parameters need to be updated to the same value so that the size for request is equal to the size you specify for the limit.

###  Labels

<b>Example :-</b>  Below labels are already defined in component yaml files.

<b>Labels</b>

```
 app: voltmx-foundry-apiportal.
 app.kubernetes.io/part-of: voltmx.
 app.kubernetes.io/component: apiportal.
 alias: apiportal.
 app.kubernetes.io/name: {{ include "voltmx.name" . }}.app.kubernetes.io/instance: {{ .Release.Name }}.

```

### Sample "labels" configuration:

```
    labels:
        pods:
        console:
            - key: KEY1
            value: VALUE1
            - key: KEY2
            value: VALUE2

```

```
labels:
  pods:
    console:
    identity:
    apiPortal:
    integration:
    engagement:
  services:
    console:
    identity:
    apiPortal:
    integration:
    engagement:

```

### Annotations 

For VoltMX Foundry components pods and services.

Sample "annotations" configuration:

```
  labels:
      pods:
        console:
          - key: KEY1
            value: VALUE1
          - key: KEY2
            value: VALUE2
```

```
annotations:
  pods:
    console:
    identity:
    apiPortal:
    integration:
    engagement:
  services:
    console:
    identity:
    apiPortal:
    integration:
    engagement:
    
```

### NodeSelector

nodeName is a field in the Pod spec. If the nodeName field is not empty, the scheduler ignores the Pod and the kubelet on the named node tries to place the Pod on that node.

<b>Example :- </b> nodeName

```
 nodeName:
   console: "node-0"
```

```
nodeName:
  console: ""
  identity: ""
  apiPortal: ""
  integration: ""
  engagement: ""

```

### Tolerations

Tolerations are applied to pods. Tolerations allow the scheduler to schedule pods with matching taints.

<b>Example :-</b> Tolerations

```
  tolerations:
    console:
    - key: "key1"
      operator: "Equal"
      value: "value1"
      effect: "NoSchedule"

```

```
tolerations:
  console:
  identity:
  apiPortal:
  integration:
  engagement:

```

### Topology

Topology spread constraints to control how Pods are spread across your cluster among failure-domains such as regions, zones, nodes, or among any other topology domains that you define.

<b>Example :- </b> topologySpreadConstraints:

```
topologySpreadConstraints:
    console:
    - maxSkew: 1
      topologyKey: zone
      whenUnsatisfiable: DoNotSchedule #ScheduleAnyway
      labelSelector:
        matchLabels:
          app: voltmx-foundry-console

```

```
topologySpreadConstraints:
  console:
  identity:
  apiPortal:
  integration:
  engagement:
  
```

### Spread Constraints 

Spread constraints to control how Pods are spread across your cluster among failure-domains such as regions, zones, nodes, or among any other topology domains that you define.

<b>Example :- </b>topologySpreadConstraints:

```
topologySpreadConstraints:
   console:
   - maxSkew: 1
     topologyKey: zone
     whenUnsatisfiable: DoNotSchedule #ScheduleAnyway
     labelSelector:
       matchLabels:
         app: voltmx-foundry-console

```

```
topologySpreadConstraints:
  console:
  identity:
  apiPortal:
  integration:
  engagement:
```

### Affinity and anti-affinity 

Expands the types of constraints you can define.

```
affinity:
  console:
    podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - voltmx-foundry-console
                topologyKey: "kubernetes.io/hostname"
  identity:
    podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - voltmx-foundry-identity
                topologyKey: "kubernetes.io/hostname"
  apiPortal:
    podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - voltmx-foundry-apiportal
                topologyKey: "kubernetes.io/hostname"
  integration:
    podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - voltmx-foundry-integration
                topologyKey: "kubernetes.io/hostname"
  engagement:
    podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchExpressions:
                    - key: app
                      operator: In
                      values:
                        - voltmx-foundry-engagement
                topologyKey: "kubernetes.io/hostname"

```






## Use Cases for Helm Upgrade

Use the Helm upgrade command to upgrade the version of the chart or change the configuration of the installation, such as the following:

* Applying an updated version of Volt MX Foundry
* Enabling or disabling Foundry components
* Updating the database
* Enabling Ingress

### Applying an updated version of Volt MX Foundry

Please see [How to Upgrade Individual Foundry Components](Installing_Containers_With_Helm_PostInstallation.md#how-to-upgrade-individual-foundry-components) or
[How to Upgrade All Foundry Components](Installing_Containers_With_Helm_PostInstallation.md#how-to-upgrade-all-foundry-components) for more information.

### Enabling or disabling Foundry components

The following steps show how to enable the Engagement component assuming its currently disabled:

1.  Open a command prompt, change to the root of your Foundry helm directory, open the `values.yaml` file in your editor, locate the `engagementEnabled` parameter, change it to **true**, and save the file.

2.  Run `helm upgrade` as shown in the following example, which will cause Helm to compute any differences between what is installed versus your changes in `values.yaml`. Helm will apply the necessary
differences (add/updates or deletes) to the Kubernetes objects. **Note:** Use the atomic option while upgrading which rolls back any changes if the upgrade fails.

    <pre><code>
    $ helm upgrade foundry apps -f values.yaml -n foundry --atomic
    Release "foundry" has been upgraded. Happy Helming!
    NAME: foundry
    LAST DEPLOYED: Mon Nov 21 22:23:54 2022
    NAMESPACE: foundry
    STATUS: deployed
    REVISION: 2
    TEST SUITE: None
    </code></pre>

3.  Determine if the Engagement component is ready for use via the following command:

    <pre><code>
    $ kubectl get pods -n foundry
    NAME                                          READY   STATUS      RESTARTS   AGE
    foundry-db-update-hchqf                       0/1     Completed   0          3h35m
    voltmx-foundry-apiportal-554f666486-dfg5m     1/1     Running     0          3h35m
    voltmx-foundry-identity-68f98c564f-kmdkb      1/1     Running     0          3h35m
    voltmx-foundry-integration-7848b49c99-pmcmd   1/1     Running     0          3h35m
    voltmx-foundry-console-6c44866955-ct86f       1/1     Running     0          3h35m
    voltmx-foundry-engagement-57475d8946-hq2kt    1/1     Running     0          71s
    </code></pre>

    The output above shows that the engagement service was successfully started and is ready for use.


### Enabling Ingress

The following steps show how to enable Ingress if you disabled it to prevent access to your environment before it was ready:

1.  Open a command prompt, change to the root of your Foundry helm directory, open the `values.yaml` file in your editor, locate the `ingress.enabled` parameter, change it to **true**, and save the file.

2.  Run `helm upgrade` as shown in the following example, which will cause Helm to compute any differences between what is installed versus your changes in values.yaml. Helm will apply the necessary
differences (add/updates or deletes) to the Kubernetes objects. **Note:** Use the atomic option while upgrading which rolls back any changes if the upgrade fails.

    <pre><code>
    $ helm upgrade foundry apps -f values.yaml -n foundry --atomic
    Release "foundry" has been upgraded. Happy Helming!
    NAME: foundry
    LAST DEPLOYED: Mon Nov 21 22:23:54 2022
    NAMESPACE: foundry
    STATUS: deployed
    REVISION: 3
    TEST SUITE: None
    </code></pre>

3.  Determine if Ingress is ready for use via the following command: `kubectl get ingress -n foundry`.

    For each Ingress you should see that an address has been assigned.  If there is no address listed, Ingress will not function.  Generally a lack of address means that no ingress controller has determined it should setup the ingress. This is usually caused by incorrectly specifying the `ingress.class` in values.yaml. You can correct this setting, run `helm upgrade foundry apps -f values.yaml -n foundry`, and Helm will apply the class name change for you.

    If the pods are all showing ready and your Ingress shows addresses, you should be ready to open the Foundry Console in your browser. Using the **host name** shown in the output, open the console in your browser.


##### Configuring Kubernetes Ingress with SSL Certificate Support

Ingress can be configured to accept connections over HTTP or HTTPS.  HTTP is insecure (information is sent in plain text, no encryption), but it works without any additional configuration.  We recommend utilizing HTTPS for most deployments.  Keep in mind you cannot easily change the deployment domain name once installed, this includes changing from HTTP to HTTPS (see [https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0089025](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0089025) for details).

You have several options to enable HTTPS.  One approach is to utilize a self-signed SSL certificate.  This avoids requiring the purchase of your own certificate from a Certificate Authority (CA).  However, because Foundry makes back end server to server requests between various applications, there are additional steps required to enable Foundry to trust the secured communication channel when utilizing a self-signed certificate.

If your Kubernetes Ingress will be configured to use a self-signed SSL certificate or if you get a SSL certificate from your enterprise's own Certificate Authority that is not within a trusted root certification path (or if you utilize the cluster default cert that was created from a self-signed CA), you will need to add the SSL certificate or CA certificate to the trust store that is utilized by Tomcat.  Failure to do this will result in runtime errors when Foundry components need to communicate with each other.  More details on the Certification Authority Trust Model can be found [here](http://technet.microsoft.com/en-us/library/cc962065.aspx).  In general the following steps must be done prior to installing Foundry to enable secure HTTPS communication:

1.  Obtain the SSL Certificate to use with Ingress (certificate and key)
2.  Copy the certificate and key into the Helm chart so Helm can configure Ingress to use the certificate
3.  Import the SSL or CA certificate into the truststore which will be used by Tomcat during server to server communication
4.  Update your values.yaml
5.  Install Foundry


##### Obtain the SSL Certificate

Unless you plan on using the default cluster SSL certificate, you need to obtain a SSL certificate.  For test purposes you could [create a self-signed certificate](#create-a-self-signed-certificate) or you might purchase a certificate from a trusted Certificate Authority or obtain a free certificate from [Let's Encrypt](https://letsencrypt.org/) or [ZeroSSL](https://zerossl.com).  Any of these steps should result in obtaining a certificate and key file.

If you are going to utilize the Kubernetes default cluster certificate, [pull the certificate from your cluster](#obtain-default-cluster-certificate) as this likely will need to be imported into the trust store.

##### Copy your SSL Certificate and Key into the apps/certs directory

Helm will create a Kubernetes secret with your SSL certificate details in it for use by Ingress.  You must copy the SSL certificate and key into the `apps/certs` subdirectory.  The example commands below assume your current directory is the location where you unzipped the Helm charts:

``` bash
cp ~/server.crt   apps/certs/server.crt
cp ~/server.key   apps/certs/server.key
```

You will need to update some parameters in `values.yaml` with these file names in subsequent steps below.


##### Import the Certificate into the truststore with keytool

If your SSL Certificate was issued by a trusted root CA, you can skip this step.  Otherwise, use the Java utility `keytool` to import the certificate.  See [Java Keytool documentation](https://docs.oracle.com/en/java/javase/11/tools/keytool.html) for more details.  An example command follows and again we assume it is run from the root of the directory where you unzipped the Helm charts:

``` bash
keytool -import -v -trustcacerts -alias foundry -file ./server.pem -keystore apps/certs/cacerts -keypass changeit -storepass changeit
```

Notes:

* `-alias foundry` is the alias for the new certificate.  You can use any alias you want but we recommend foundry.
* `-file ./server.pem` is the file path to your certificate.  Use the proper path for your circumstances.
* `-keystore apps/certs/cacerts` is the location of the truststore your certificate will be imported to and later use by Tomcat.  This file path should not be changed.
* `changeit` is the default password and should not be changed.

##### Update the necessary Helm `values.yaml`

To properly configure SSL, you will need to update your `values.yaml`.  General details follow, but be sure to check the notes section for specific use cases.  You may also refer to the [Configuration](./Installing_Containers_With_Helm.md#configuration) section for more details on each parameter.

``` bash
ingress.enabled: true
ingress.protocol: "https"
ingress.port: "443"
ingress.tls.enabled: true
ingress.tls.customCert.cert: “certs/server.crt”
ingress.tls.customCert.key: “certs/server.key”
ingress.sslTermination: false
enabledCaCertsOverride: true
```

Notes:

* the path for the customCert properties is relative to the `apps` directory.   It should always be `certs/` followed by your certificate or key file name.
* the `customCert.cert` and `customCert.key` details can be omitted when using the default cluster certificate.  If you go with this approach, you need to ensure the DNS hostname which you will access the deployment with matches the host name details in the  certificate or the backend communication will fail because the host name doesn't match.

##### OpenShift and the default cluster cert

OpenShift has some peculiarities you must work around to properly configure Ingress to use the default cluster cert.  This scenario utilizes whatever cert is configured for the OpenShift ingress - by default it will be a self-signed certificate created by the OpenShift infrastructure but it could also be a custom cert setup by your OpenShift Administrator.   Some of these settings are not intuitive:

``` bash
ingress.enabled: true
ingress.protocol: "https"
ingress.port: "443"
ingress.tls.enabled: false
ingress.sslTermination: true
enabledCaCertsOverride: true
```
This may require a 2nd look: **you must set `ingress.tls.enabled` to `false`**.  This is not intuitive.  When we specify `ingress.sslTermination: true` the chart will add an OpenShift specific annotation to Ingress causing the platform to setup Ingress with the default SSL certificate.

##### Obtain default Cluster Certificate

The following procedure should be done to obtain your default cluster certificate if you plan to use that and the certificate is self-signed or was not created by trusted root CA.   Two server addresses are specified here: the parameter following `-connect` must be a DNS name or IP address that resolves to your OpenShift ingress.  The `-servername` parameter specifies the DNS name you will use to access your foundry deployment (this should match the value you are specifying for `serverDomainName` in values.yaml).  These could be the same DNS names, they must properly resolve to the IP address of your Kubernetes load balancer in front of Ingress or Ingress itself.

Obtain the cluster's SSL certificate with the `openssl` command:

``` bash
openssl s_client -connect my-openshift-ingress:443 -servername foundry.example.com 2>/dev/null </dev/null | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > ~/server.pem
```

Note at this point you only have the certificate, there is no key file associated with this default cluster cert.  Follow the steps to [import this into the trust store](#import-the-certificate-into-the-truststore-with-keytool).

##### Create a Self-Signed Certificate

The following procedure could be used to generate a self-signed certificate:

1.  Generate a new self-signed certificate:
    <pre><code>
keytool -v -genkey -alias ingress -keyalg RSA -keystore foundry.keystore -alias foundry -ext SAN=dns:foundry.example.com -dname "cn=foundry.example.com" -storepass changeit -validity 365
    </pre></code>

    Make certain you replace "foundry.example.com" with your domain name.  You can specify a wild card cert like `*.example.com` which would enable using a dns name like foundry.example.com or myfoundry.example.com without changing the certificate.  This command will create a new keystore called `foundry.keystore` with a single entry in it containing a new self-signed certificate.

2.  Get the private key from the keystore:
    <pre><code>
openssl pkcs12 -in foundry.keystore -nodes -nocerts -out server.key
    </pre></code>
3.  Get the certificate from the keystore:
    <pre><code>
openssl pkcs12 -in foundry.keystore -nokeys -out server.crt
    </pre></code>
4.  Get the PEM portion from the certificate:
    <pre><code>
cat server.crt | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > ./server.pem
    </pre></code>

    Follow the steps to [import this into the trust store](#import-the-certificate-into-the-truststore-with-keytool).



## Specifying the PodDisruptionBudget

A **PodDisruptionBudget** is an indicator of the number of disruptions that can be tolerated at a given time for a class of pods (a budget of faults). Whenever a disruption to the pods in a service is calculated to cause the service to drop below the budget when using **minAvailable**, the operation is paused until it can maintain the budget. For example, a drain event could be temporarily halted while it waits for more pods to become available such that the budget isn’t crossed by evicting the pods. Likewise, when using **maxUnavailable** the operation is paused if a disruption to the pods exceeds the setting.

To configure a Pod disruption budget, edit the values.yaml file and uncomment the **podDisruptionBudgetSpec** and either the **maxUnavailable** or **minAvailable** setting for your Foundry applications.
You can change the **maxUnavailable** to denote the maximum number of unavailable pods at given point of time
or the **minAvailable** setting to denote the minimum number of available pods at given point of time. The value you use should either be an integer or the number of pods as a percent. Save the values.yaml file once you have finished editing it. The following code shows the values.yaml content for each of the Foundry applications.

``` bash
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


## Encrypt the Database Password

The steps for encrypting the database password are the same as the steps used for the Volt MX Foundry Containers Solution On-Premises. The exception is that the values displayed for the **Encrypted Password** and **Encrypted Key** must be used for the `dbPass` and `dbPassSecretKey` parameters in the `values.yaml` file. For more information see the documentation for the Volt MX Foundry Containers Solution On-Premises:
[Encrypt the Database Password](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/Containers_Solution_Appendices.md#encrypt-the-database-password).


## Other Issues

For other issues please see
[FAQs and Troubleshooting](../../../Foundry/voltmxfoundry_containers_solution_on-prem/Content/Containers_Solution_FAQs_and_Troubleshooting.md#faqs-and-troubleshooting) for FAQs and troubleshooting around advanced topics related to the cluster environment.
