---
layout: "documentation"
category: "undefined"
---
﻿ 

Docker Overview
===============

Docker is an open platform for developers and system admins to build, ship, and run distributed applications on laptops, data center VMs, or on the cloud. Docker platform is the only container platform that allows users to build, secure, and manage the widest array of applications from development to production both on-premises and on the cloud. Docker enables true independence between applications and infrastructure as well as developers and IT ops to unlock their potential. This creates a model for better collaboration and innovation.

Docker Community Edition provides developers with tools to build applications and Docker Enterprise Edition (EE) provides IT with multi-architecture operations at scale. For more information on Docker, refer [What is Docker?](https://www.docker.com/what-docker)

A container is a lightweight, standalone, and executable package of a piece of a software that includes everything needed to run code: runtime, system tools, system libraries, and settings. The Docker container is available for both Windows-based and Linux-based apps, and containerized software will always run the same regardless of the environment. For more information, refer [What is a container?](https://www.docker.com/what-container)

Set up Docker
=============

For Windows
-----------

Docker for Windows is a Docker Community Edition (CE) app. The Docker for Windows install package includes everything that you need to run Docker on a Windows system.

The following installation points are intended for systems that support Windows Hyper-V and are not tested on the systems that run legacy Docker toolbox, which uses Oracle virtual box.

**To install Docker on Windows, follow these steps:**

1.  Before you install Docker, it is recommended tha you analyze the [prerequisites](https://docs.docker.com/docker-for-windows/install#what-to-know-before-you-install) to make sure the system requirements are met.
2.  Once the prerequisites are met, download the Docker CE for Windows (stable) from [Getting Docker Community Edition for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows).
3.  Follow the installation instruction provided in the earlier link (from the location where you download the app).
4.  You do not need to install a visrtual box for the latest Docker app, instead the Hyper-V manager with Window 10 does all the VM activities in the background. By default, the Docker CE installation creates a virtual machine **MobyLinuxVM** along with a **DockerNAT** virtual switch.
5.  To install VoltMX Foundry with a public IP or domain name (a host name or IP address), configure the external virtual switch in Hyper-V manager and create a virtual machine pointing to the external virtual switch.

Hyper-V is installed with the latest version of Windows by default.

To create an external virtual switch from Hyper-V manager, refer [Create a virtual switch by using Hyper-V Manager](https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/create-a-virtual-switch-for-hyper-v-virtual-machines).

8.  To create a new virtual machine, use the following command in the bash shell.
{% highlight voltMx %} $ docker-machine create -d hyperv --hyperv-virtual-switch <virtual-switch> <machine-name>  
**Example**: docker-machine create --driver=hyperv --hyperv-virtual-switch="External Virtual Switch"  ExternalVirtualMachine
{% endhighlight %}

For a detailed example on creating Docker machines by using Virtual Switches, refer [here](https://docs.docker.com/machine/drivers/hyper-v#example).

11.  After the set up is complete, restart the Docker engine.
12.  Once the Docker engine is up and running, you can proceed with setting up VoltMX Foundry by using the downloaded setup files.

For Mac
-------

**To install Docker on Mac, follow these steps:**

1.  Before you install Docker, refer the [prerequisites](https://docs.docker.com/docker-for-mac/install#what-to-know-before-you-install) to make sure the system equirements are met.
2.  Docker for Mac is a Docker Community Edition app. To set up Docker for Mac, you need to have a native virtualization system hyper kit installed on your Mac machine. You can download and install the hyper kit [here](https://github.com/moby/hyperkit).
3.  Once the prerequisites are met, download the Docker for Mac (stable) [here](https://download.docker.com/mac/stable/Docker.dmg).
4.  Follow the installation instructions provided in the [Install and run Docker for Mac](https://docs.docker.com/docker-for-mac/install#install-and-run-docker-for-mac) document.
5.  To create a new virtual machine, use the following command in the bash shell,
{% highlight voltMx %}docker-machine create --driver virtualbox <machine-name>  
**Example**: docker-machine create --driver virtualbox --virtualbox-memory 2048 ExternalVirtualMachine.
{% endhighlight %}

For a detailed example on creating Docker machines, refer [here](https://docs.docker.com/machine/get-started#create-a-machine).

8.  After the setup is complete with the above settings, restart the Docker engine.
9.  Once the Docker engine is up and running, you can proceed with VoltMX Foundry setup using the downloaded set up files.

For Linux
---------

**To setup Docker for Linux, follow these steps:**

1.  Before you install Docker, refer the prerequisites for [Get Docker CE for CentOS](https://docs.docker.com/engine/installation/linux/docker-ce/centos/) and [Get Docker EE for CentOS](https://docs.docker.com/engine/installation/linux/docker-ee/centos/) to make sure the system requirements are met.
2.  Once the prerequisites are met, retrieve the Docker for CentOS (EE) from the [Install Docker CE](https://docs.docker.com/engine/installation/linux/docker-ce/centos#install-docker-ce) and [Install Docker EE](https://docs.docker.com/engine/installation/linux/docker-ee/centos#install-docker-ee) documents.
3.  To create a new virtual machine, use the following command in the bash shell{% highlight voltMx %}docker-machine create --driver virtualbox <machine-name>
    **Example**: docker-machine create --driver virtualbox --virtualbox-memory 2048 ExternalVirtualMachine 
    {% endhighlight %}

For a detailed example on creating Docker machines, refer [here](tps://docs.docker.com/machine/get-started#create-a-machine).

5.  Once the Docker setup is ready with the previously mentioned settings, restart the Docker engine.
    
6.  Once the Docker engine is up and running, you can proceed with setting up VoltMX Foundry setup by using the downloaded setup files.

Set up VoltMX Foundry for Docker
=============================

Once the Docker is installed, you need to set up VoltMX Foundry. To set up VoltMX Foundry follow these steps:

Prerequisites
-------------

**The following prerequisites must be met before you set up VoltMX Foundry for Docker:**

1.  You must have installed Apache Ant on your machine. The minimum supported version is 1.9.8.
    
    Download the application from [https://ant.apache.org/bindownload.cgi](https://ant.apache.org/bindownload.cgi)
    
2.  You must have a MySQL database of version 5.7 and later.
    
3.  You must install the latest version of Docker on your machine.
    
4.  You must have installed any bash prompt on your machine to run Docker scripts.

Install VoltMX Foundry
-------------------

**To install VoltMX Foundry on Docker environment, follow these steps:**

1.  To install and set up Docker, follow the steps mentioned in [Set up Docker](#set-up-docker).
    
2.  Modify the properties in the installvariables.properties file, which is available in the VoltMXFoundry\_Docker folder.
    
3.  To create the database schema, open the bash prompt with administrative privileges and run the createDatabase.sh script, which is available in the VoltMXFoundry\_Docker folder.
    
4.  In bash prompt, run one of the following commands to set up the Docker environment in the current shell. ./setDockerEnv.sh or source ./setDockerEnv.sh.
5.  Run the installvoltmxFoundry.sh file in bash prompt, where the Docker environment is set.
    
6.  If there are no errors in the execution of the earlier steps, VoltMX Foundry console will start running in three to five minutes.
    
7.  Once the installation is successful, your Tomcat container will be up and running. You must access VoltMX Foundry Console at http://DOCKER\_HOST\_IP:DOCKER\_HTTP\_PORT/mfconsole.
    
8.  In order to log on to your running container (which is, voltmxfoundry\_tomcat), run docker exec -it voltmxfoundry\_tomcat bash.
    
9.  You can verify the Tomcat logs and application logs from the following location:
    
    Tomcat logs: /usr/local/tomcat/logs
    
    Application logs: /root/logs
