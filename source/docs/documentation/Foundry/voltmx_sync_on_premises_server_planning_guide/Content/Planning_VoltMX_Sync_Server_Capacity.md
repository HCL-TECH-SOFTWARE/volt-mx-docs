---
layout: "documentation"
category: "voltmx_sync_on_premises_server_planning_guide"
---
                            


Plan Volt MX Foundry Sync Server Capacity
=====================================

Planning for capacity means determining the hardware that you need for your system to perform well under its anticipated workload.

Planning capacity is a challenge. It involves many variables, some of which are difficult or impossible to measure. It is the science of measuring known variables and developing an educated estimate of resource requirements based on those measurements. It is also an art of allowing unknown variables and assessing their impact on the estimates derived from the known variables.

To determine requirements for your Volt MX Foundry Sync Server capacity, gather information about the following:

*   Number of users accessing Volt MX Foundry Sync application from their devices
    
*   Amount of initial data that is downloaded during the first synchronization (initial provisioning)
    
*   Amount of average data throughput during each synchronization
    
*   Application complexity
*   Deployment infrastructure
    

Planning capacity is an on-going process. After deploying Volt MX Foundry Sync Server, monitor and modify your capacity as necessary to meet your performance expectations.

Estimate User Load of Volt MX Foundry Sync Server
---------------------------------------------

Estimate the user load Volt MX Foundry Sync server is expected to handle.

In general, the greater the number of users and the more concentrated their requests are over time, you need more hardware for a system to perform effectively. As a result, when planning adequate capacity for Volt MX Foundry Sync Server, you should estimate the number of people who would use Volt MX Foundry Sync Server and determine when they would use Volt MX Foundry Sync the application. This helps you decide not only how much hardware you need, but also how to make the best use of the hardware you have.

The only users who load the Volt MX Foundry Sync Server are those who actually perform the processing. These are concurrent users. You can estimate the number of concurrent users, based on your total user population, by distinguishing between named, active, and concurrent users.

1.  **Named users**: Named users are all the users authorized to use Volt MX Foundry Sync application; your total user population.
2.  **Active users**: Active users are a subset of named users. Active users can log on to Volt MX Foundry Sync Server and can demand system resources.
3.  **Concurrent users**: Concurrent users are a subset of active users. Concurrent users demand system resources, for example: submit requests and wait for response to requests.

As a general rule, the ratio of named to active to concurrent users for business applications should be 100:10:1. In other words, for every 1000 named users, there are 100 active users and 10 concurrent users.

The concurrence ratio can vary over time, and is affected by many factors. For example; the number of concurrent users relative to active and named users tends to be higher when the user population is small. The most important determinant of the concurrence ratio is how processing demand is distributed over time.

Assess Complexity of an Application
-----------------------------------

Load is determined by the number of concurrent users also by the complexity of their processing requests. The greater the complexity of a request, the more time is needed to process the request. In general, hardware resources can process more requests in a given time period when the requests are simple rather than complex. As a result, application complexity is an important determinant of the number of concurrent users that can be supported on a given hardware infrastructure.

The complexity of a Volt MX Foundry Sync application depends on the amount of work required to process the result set returned from the database query or the amount of time required to get response from an external Web Service.

You can improve performance during peak times by identifying queries run at peak times and improving their efficiency while meeting user requirements. As query patterns change over time, assessing application complexity and improving reporting efficiency should be on-going activities.

Deployment Infrastructure
-------------------------

Use true server computers than fast workstations. True server computers run business applications faster and provide systems that are less likely to fail.

Are web and application servers dedicated solely to Volt MX Foundry Sync Server for or shared by other software products? If other applications share the resources, you should consider these applications when you determine capacity requirements.

The complexity of your security infrastructure can increase response time. As your security infrastructure becomes more complex, a user request must be validated more frequently. For example, if you implement multiple network firewalls, each firewall must validate every request that passes through it. This can increase the time taken to complete the request. In addition, if you use Secure Socket Layer (SSL), the overhead of SSL encryption adds both processing overhead and size to the response.

Volt MX  Foundry Sync Performance Benchmarks
---------------------------------------

The purpose of the below benchmark is to help customers and partners find the appropriate hardware configuration for their Volt MX Foundry Sync deployment environment. While the Volt MX Foundry Sync server performance depends upon several external factors like Datasource performance, network connectivity and several others, the purpose of the below table is to provide an indicative performance figure.

### Test Configuration and Results

  
| Application Scenario | Configuration |
| --- | --- |
| SyncStrategy | OTA Sync |
| Datasource | Salesforce WebService (XML based) |
| Total Number of Rows | 3500 |
| Average Batchsize (in MB) | approximately 1.5 MB |
| Number of rows in each Batch | 500 |
| Average Row Size | approximately 3KB |
| Operating System | Configuration |
| Windows | Windows Server 2008 R2 Standard |
| Hardware Specification | Core 2 Duo CPU, 3.05 GHz, 64 bit OS, 4 GB RAM |
| Network Card | Broadcom NetLink (TM) Gigabit Ethernet Adapter Type Ethernet 802.3 Product Type Broadcom NetLink (TM) Gigabit Ethernet |
| Java | Configuration |
| JDK | Oracle JDK 1.6.0\_26 |
| JVM Heap Size | 1 GB |
| Application Server | Tomcat 7 |
| SyncConsole Database | MSSQL Server 2008 |
| Number of Volt MX Foundry Sync Server Instances | 1 |
| Maximum Number of Concurrent Users (before system performance degraded) | 120 |
| Average response time to download approximately 1.5 MB packet | approximately 27363 milliseconds |
| Total time for initial download | approximately 4 minutes |

You can use the above benchmarks to estimate the value of number or servers / instances required for a supporting larger number of users and expected system performance.
