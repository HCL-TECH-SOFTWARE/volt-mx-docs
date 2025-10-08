                           

You are here: FAQs and Troubleshooting

FAQs and Troubleshooting
========================

*   **How can I join a new worker node to the cluster post the cluster setup?**
    
    1.  Copy the setup-node.zip file which is generated in Foundry container artifact folder (VoltMXFoundrySingleContainer-9.2.1.7\_GA) which is present on the node on which you triggered the cluster installation. This setup-node.zip file contains the script to install the required Kubernetes packages and Docker on node and has kubeadm join token to join a node to a cluster.

    2.  Extract the setup-nodes.zip file. 

        `sudo unzip setup-node.zip -d setup-node`

        
    3.  Navigate to setup-node folder.  

        `cd setup-node`
        
    4.  Run the following command to add the new worker node.  

        `sudo ./setup-node.sh`
        
    5.  If the node fails to join, the setup-node.sh file contains a token to join a node to the cluster. This token is valid for one hour. If you are joining the node after one hour, the token is regenerated on any master node. To generate the token, execute the following command.  

        `sudo kubeadm token create --print-join-command`
        
    6.  Perform these steps if the worker node will be used for **logging and monitoring** purposes:
        1.  Label the worker node with the local volume role.

            `kubectl label nodes --selector='!node-role.kubernetes.io/master' role=local-volume`
            
        2.  Create the following local volumes for logging and monitoring purposes. 

            `mkdir -p /root/foundry/prometheus`
            `mkdir -p /root/foundry/grafana`
            `mkdir -p /root/foundry/elasticSearch`

    7.  Copy the kubeadm join which is generated from the previous step and run it in the node to be joined. This joins the worker node to master.

*   **How can I join a new master node to the cluster post the cluster setup?**
    
    Perform the following steps to join new master node.
    
    1.  Copy the setup-node.zip file which is generated in Foundry container artifact folder (VoltMXFoundrySingleContainer-9.2.1.7\_GA) which is present on the node on which you triggered the cluster installation. This setup-node.zip file contains the script to install required Kubernetes packages and Docker on node and has kubeadm join token to join node to cluster.

    2.  Extract the setup-nodes.zip file.

        `sudo unzip setup-node.zip -d setup-node`

    3.  Navigate to setup-node folder.

        `cd setup-node`
    
    4.  Run the following command to add a new master node.

        `sudo ./setup-node.sh control-plane`
        
    5.  If the node fails to join, the setup-node.sh file contains a token to join a node to the cluster. This token is valid for one hour. If you are joining the node after one hour, the token should be regenerated on any master node. To generate the token, execute the following set of commands on an existing master node.

        <pre><code>CERTIFICATE_KEY=$(kubeadm alpha certs certificate-key)  
        kubeadm init phase upload-certs --upload-certs --certificate-key $CERTIFICATE_KEY  
        WORKER_JOIN_COMMAND=$(kubeadm token create --print-join-command)  
        CONTROL_PLANE_JOIN_COMMAND="${WORKER_JOIN_COMMAND} --control-plane --certificate-key ${CERTIFICATE_KEY}"  
        echo $CONTROL_PLANE_JOIN_COMMAND
        </code></pre>

    6.  Copy the kubeadm join which is generated from the previous step and run it in the node to be joined. This joins the master node to the existing master cluster.

*   **How to drain a worker node from the cluster?**
    
    1.  You must cordon a node first so that pods don’t get scheduled on the node that will be drained. Run the following command to cordon a node.

        `kubectl cordon <Node_Name>`
    
    2.  To safely evict all your pods from a node before you perform maintenance on the node, you must drain the node. Run the following command to drain the node.

        `sudo kubectl drain <Node_Name> --delete-local-data --ignore-daemonsets`
        
    3.  After draining, you can safely delete the node. Run the following command to delete the node.

        `sudo kubectl delete node <Node_Name>`
    
    To join the worker node back to the cluster, generate a token in the master node and run that token in the worker node.
    
*   **How to schedule pods on to a newly added worker node?**
    
    To schedule pods on to a newly added worker node, you have to run the descheduler template yml file. Go to the Foundry container artifacts folder (VoltMXFoundrySingleContainer-9.2.1.7\_GA)and run the following command.

    `sudo kubectl apply -f add-ons/voltmx-foundry-descheduler.yml` 
   
*   **Do I need to have an account with the Docker Hub to download the Foundry Images?**
    
    No. The images are public and you do not need any authorization to download them.
    
*   **Can I decide the number of nodes in the Kubernetes cluster?**
    
    Yes.
    
*   **How can I white-list custom IP ranges to allow access to Azure Database service?**
    
    You can white-list the required IP addresses under the Firewall Rules of the Connection Security page for the Database, so that it is accessible by the DB user and the application. For more details, refer to [Firewall Rules](https://docs.microsoft.com/en-us/azure/mysql/concepts-firewall-rules).
    
*   **How to get the Foundry instance working after the database password ID changed?**
    
    You must make the required changes in the database. For the changes required in the XML and Catalina files, perform the following steps:
    
    1.  In the install folder open the Foundry app yml file found at : `<Install_folder>/gen/<env>/voltmx-foundry-app.yml`.
    2.  Modify all the values that have the suffix as DB\_PASS, to the latest values. Save the yml file.
    3.  Execute the following command:

        `kubectl apply -f voltmx-foundry-app.yml`


Commonly used commands
----------------------

Following is the list of commonly used commands in this installation. You can execute the following commands from your terminal. For more commands refer to the [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/).

  
| COMMAND | ACTION |
| --- | --- |
| $ kubectl get pods | Get the list of all the Foundry pods. |
| $ kubectl get pods --all-namespaces | Get the list of all pods in the cluster. |
| $ kubectl get nodes | Get the list of all the nodes. |
| $ kubectl describe po/<POD\_NAME> -n <NAMESPACE> | Shows the details of a specific pod. |
| $ kubectl exec -it <POD\_NAME> -n <NAMESPACE> bash | Bash into the container. |
| $ kubectl logs -f <POD\_NAME> -n <NAMESPACE> | View logs of the container. |
| $ kubectl get services --all-namespaces | Get the list of services in cluster. |
| $ kubectl delete pod <POD\_NAME> - n <NAMESPACE> | Delete a pod. |
| $ kubectl delete namespaces <NAMESPACE\_NAME> | Delete a namespace. |
| $ kubectl get pod --all-namespaces -o=custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName | Know which pods are running on which nodes. |
| $ sudo iptables-save | grep voltmx-foundry-apiportal | Get the rules created in the IP tables by kubeproxy. |

> **Note:**  
*   **Log rotation** involves handling the size of log files and making sure they do not consume too much memory.  
*   **Cert rotation** involves updating the certificates used in an HTTPS setup before they expire.  

The Volt MX Foundry Container Cluster Solution does not handle Log rotation and Cert rotation. You must ensure to keep these in check post-installation.

Cluster cleanup
---------------

Run the following script to delete all the Kubernetes and app resources created via the install script:

```
kubectl delete deploy [(NAME | -l label | --all)]  
kubectl delete svc [(NAME | -l label | --all)]  
kubectl delete cm [(NAME | -l label | --all)]  
kubectl delete secrets [(NAME | -l label | --all)]  
kubectl delete ing [(NAME | -l label | --all)]  
kubectl delete jobs [(NAME | -l label | --all)]  
kubectl delete deploy --all -n kube-system  
kubectl delete svc --all -n kube-system  
kubectl delete cm --all -n kube-system  
kubectl delete ing --all -n kube-system
kubeadm reset
```

For more information, refer to [Cluster Delete](https://kubernetes.io/docs/reference/kubectl/cheatsheet#deleting-resources).

Configuring Iris to connect to Volt MX Foundry
---------------------------------------------------

For details on configuring Iris to connect to Foundry, refer to [Connect to Volt MX Foundry](../../../Iris/iris_user_guide/Content/Connect_to_VoltMXFoundry.md) in the Iris User Guide.

