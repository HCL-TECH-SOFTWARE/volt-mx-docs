---
layout: "documentation"
category: "v8upgrade65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")


Creating a Volt MX Foundry Application from Iris
--------------------------------------------------

1.  You must install Volt MX Foundry installed. You can use a Cloud trial for that by going to - [http://www.voltmx.com/products/VoltMXFoundry/trial](http://www.voltmx.com/products/mobilefoundry/trial)
    
    or
    
    You can use the easy-to-use Volt MX Foundry installer that is available at [http://community.hclvoltmx.com/downloads](http://community.hclvoltmx.com/downloads)
    

2.  Copy the following files into`<Iris 7.x workspace home>/<project name>`
    *   servicedef.xml: Servicedef.xml includes all services in the app.
    *   syncconfig.xml: The syncconfig.xml file contains sync definition (in case Sync is used).

3.  Create the following folders in`<Iris 7.x workspace home>/<project name>` and place the following file in the appropriate locations:
    *   dsl - The dsl folder contains one .properties file and .dsl files. The dsl folder is only for scraper services.  
        The name of the properties file should match the app name.
    *   files - The files folder contains .properties for SAP JCo/Siebel.
    *   lib - The lib folder contains the dependent jars required by an app
    *   wsdl - The wsdl folder contains the following additional files for SOAP services.
    *   mapping.json \- contains mapping file for wsdl source to operation names using that wsdl source (URL/file).
    *   // The following is a sample entry in the mapping file in JSON format.{% highlight voltMx %}{
        "partner.wsdl": [
        "convertLead",   
        "create"    ],
        "http://wsf.cdyne.com/WeatherWS/Weather.asmx?wsdl": [
        "GetCityForecastByZIP",
        "GetCityWeatherByZIPtest"
         ]
        }  
        
        {% endhighlight %}
    *   wsdl: contains wsdl files in the mapping entries mentioned earlier. The mapping entries refer to json entries present in the mapping.json file.

4.  Navigate to **Window -> Preferences -> Volt MX Iris -> Volt MX Foundry**.
    
    ![Screenshot (45)](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_637x357.png)
    

5.  Provide the Volt MX Foundry Instance URL and validate it.
    
    ![Screenshot (46)](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_1_635x357.png)
    

6.  Log on into Volt MX Foundry from Iris by clicking Login at the upper right corner.
    
    ![Screenshot (47)](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_2_635x357.png)
    

7.  Import the services to Volt MX Foundry by selecting **File->Import Services into Volt MX Foundry**.
    
      This step creates the Volt MX Foundry application in the Volt MX Foundry workspace.
    
    ![](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_3_635x357.png)
    
    > **_Important:_** A Volt MX Foundry application consists of services, and each service contains one or more operations. But in case of pre-7.x, an app contains only service names. So, in case of an Volt MX Foundry app that is created from pre-7.x (by following the earler steps), all the service names would become operation names. The service names are auto-generated. If you would like to know the old service name and how it is mapped to the new service name/operation name, you can refer the `<project name>_MWMappings.properties` file.
    
    The **Import services into Volt MX Foundry** step modifies the JS modules to use the new service names.
    
    Also, in case you are invoking any services from pre/post processors or Java services, you must pass the new Service ID wherever you are passing an app ID.
    

8.  Ensure that your application is linked to the newly created Volt MX Foundry app.
    
    ![](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_4_494x379.png)
    
    ![](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_5_534x357.png)
    
    You would see the **UNASSOCIATE** button against the Volt MX Foundry app that is linked to your application.
    
    If the application is using Sync, perform **Refresh Sync Client Code**, as follows:
    
    ![](../Resources/Images/MADPUpgradeDoc/Creation_of_MF_application_6_624x429.png)
