 

VoltMX Integration Service Error Codes
====================================

The following are the error codes for VoltMX Integration Services. Each error code table consists of the error message, description of the error, severity, way to reproduce the error, error resolution and point of contact.

 
| Error 1528 |
| --- |
| **MESSAGE** | One or more of the services failed in the composite service. |
| **DESCRIPTION** | This means that one of the services executed as part of the composite service has failed. The actual error code and message can be found in the logs for the individual services. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Provide invalid service URL for one of the services. |
| **RESOLUTION** | Resolve the issue faced by the individual service which depends on the error code provided by that service. |
| **POINT OF CONTACT** | Depends on the error code for the individual services. |

* * *

 
| Error 5000 |
| --- |
| **MESSAGE** | Controller Initialization Error. |
| **DESCRIPTION** | This means that the initialization of the ControllerDef.xml file was improper. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Create improper XML tags in the ControllerDef.xml file. Restart the server. While loading the controller configurations, this error is thrown. |
| **RESOLUTION** | Please check the ControllerDef.xml file. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5001 |
| --- |
| **MESSAGE** | Mandatory Request parameter channel is missing. |
| **DESCRIPTION** | VoltMX Server is being hit from places other than the device. Mandatory parameter channel is missing |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Remove the request parameter "channel" while invoking the VoltMX Server. |
| **RESOLUTION** | Check the request parameters for mandatory parameter: channel. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5002 |
| --- |
| **MESSAGE** | Mandatory Request parameters - appID, serviceID or both are missing. |
| **DESCRIPTION** | VoltMX Server is being hit from places other than the device. All the mandatory parameters such as- appID, serviceID or both are missing. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Remove the request parameter appID or serviceID while invoking the VoltMX Server. |
| **RESOLUTION** | Check the request parameters for mandatory parameter : appID and serviceID. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5004 |
| --- |
| **MESSAGE** | Processor definition does not exit. |
| **DESCRIPTION** | This means that the processor classes (DataChunking, ImageProcessor, ServiceDelegate and so on) are not present in the ControllerDef.xml file. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the <ProcessorConfiguration> with attribute name "ServiceDelegator" from the ControllerDef.xml file. |
| **RESOLUTION** | Check controllerDef.xml for the processor being invoked and check if it is present and correct. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5005 |
| --- |
| **MESSAGE** | Cannot load the processor class. |
| **DESCRIPTION** | This means that the processor classes (DataChunking, ImageProcessor, ServiceDelegate and so on) present in the ControllerDef.xml file could not be loaded by the JVM. This may lead to loss of functionality. Possible tampering. Check availability of the classes. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the <ProcessorConfiguration> tag with attribute name "ServiceDelegator" and change the classname to "abc.xyz". Since this class is not present, it throws up this error. |
| **RESOLUTION** | Check if the middleware-system.jar is present and the processor class is present in that jar. Also, check if no other jar file contains the same class name as this processor class. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5006 |
| --- |
| **MESSAGE** | Invalid JSON response for the service. |
| **DESCRIPTION** | This means that the processor classes (DataChunking, ImageProcessor, ServiceDelegate and so on) present in the ControllerDef.xml file could not be instantiated by the JVM. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the <ProcessorConfiguration> tag with attribute name "ServiceDelegator" and change the classname to "abc.xyz" where abc.xyz is an interface/abstract class. Since this an interface, it throws up this error. |
| **RESOLUTION** | Check if the middleware-system.jar is present and the processor class is present in that jar. Also, check if the processor class being invoked is not an interface/abstract class. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5101 |
| --- |
| **MESSAGE** | Sequence definition does not exit. |
| **DESCRIPTION** | This means that the sequence of processors (as described above) are not present for that particular channel (Native Apps, Mobile Web etc). This should be present in the ControllerDef.xml file. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the <SequenceConfiguration> with attribute name "default" from the ControllerDef.xml file. |
| **RESOLUTION** | Check if the required sequence is present and correctly defined in the controllerDef.xml. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 5101 |
| --- |
| **MESSAGE** | Problem in Creating / Loading the sequence class. |
| **DESCRIPTION** | This means that the sequence of processors (as described above) could not be loaded for that particular channel (Native Apps, Mobile Web and so on). Check ControllerDef.xml file for the sequence. Check availability of the classes defined. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the <SequenceConfiguration> tag with attribute name "default" and change the classname to "abc.xyz". Since this class is not present, it throws up this error. |
| **RESOLUTION** | Check if the sequence class being invoked is present in the middleware-system.jar. Check if no other jar file contains the same class name as this processor class. Also, check if there has been no IllegalAccessError while instantiating the class. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 6000 |
| --- |
| **MESSAGE** | Session does not exist. |
| **DESCRIPTION** | Session does not exist. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Set the session object to null in the pre-processor. |
| **RESOLUTION** | Check the pre-processor. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 6001 |
| --- |
| **MESSAGE** | Session exists (may be newly created) but there are no expected values. |
| **DESCRIPTION** | The session exists but the value in the session is null. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | In the service-definition file, change the scope of an input variable to session and do not save this value in session in the pre-processor or any previous service. |
| **RESOLUTION** | Ensure that the value being looked for is present in the session. Check the service-definition file for the particular service and check if the scope of the concerned input variable is correct (It can be session/request). |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8004 |
| --- |
| **MESSAGE** | Operation invocation problem. |
| **DESCRIPTION** | Unable to invoke the method on pre/post processors or the Java services. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the application jar from the application server libraries. |
| **RESOLUTION** | Check if the latest application jar is present. Also, check if there is no class conflict in the logs. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8005 |
| --- |
| **MESSAGE** | Response is empty. |
| **DESCRIPTION** | Backend service is returning empty response. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Re-direct the service call to a dummy server which returns an empty response. |
| **RESOLUTION** | Check the back-end services if they are up. Check connectivity with the back-end servers. |
| **POINT OF CONTACT** | Back-end service provider. |

* * *

 
| Error 8006 |
| --- |
| **MESSAGE** | Invalid XML Response. |
| **DESCRIPTION** | Check response from back-end server. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Create a dummy service on the back-end server to return a HTTP Response with error codes such as 401/500, it throws up this error. |
| **RESOLUTION** | Check response string from back-end servers. A common scenario would be when the back-end server returns an HTTP Response (401/500) for an XML/Soap request. This is treated as invalid by VoltMX Server. Please check if the response from the back-end server is a valid XML or Soap request. |
| **POINT OF CONTACT** | Back-end service provider. |

* * *

 
| Error 8007 |
| --- |
| **MESSAGE** | Error parsing the XML response. |
| **DESCRIPTION** | This error is returned if the VoltMX Server could not parse the XML with the given XPath. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Provide incorrect XPath to parse the XML response. |
| **RESOLUTION** | Check if the XPath matches the XML response returned by the service. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8008 |
| --- |
| **MESSAGE** | Invalid Result object returned on method invocation. |
| **DESCRIPTION** | The object returned after invoking the pre/post processor or the Java service does not cast to com.hcl.middleware.dataobject.Result object. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the processor such that it does not return valid Result object. |
| **RESOLUTION** | Ensure if proper application jar is present and is returning proper object. Also, check if there is no class conflict in the logs. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8009 |
| --- |
| **MESSAGE** | Request unsuccessful, server responded with status code xxx. |
| **DESCRIPTION** | If the received status code is not 200, VoltMX Server throws this error. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Shutdown the service so that a 404 or 500 error is thrown by the server hosting the service. Try to access the service through VoltMX Server and the error is reproduced. |
| **RESOLUTION** | Check if the services are accessible. |
| **POINT OF CONTACT** | Back-end service provider. |

* * *

 
| Error 8010 |
| --- |
| **MESSAGE** | Operation invocation problem. |
| **DESCRIPTION** | Unable to invoke the method Scraper services. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the scraper.jar from the application server libraries. |
| **RESOLUTION** | Check if the latest scraper.jar is present. Also, check if there is no class conflict in the logs. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8013 |
| --- |
| **MESSAGE** | Cannot get value for the expression. |
| **DESCRIPTION** | The tag is empty for the particular xpath in the response. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Create a service-output parameter which is not present in the response for that particular service. |
| **RESOLUTION** | Check the XML response and the service-definition file to ensure that the tag being parsed for is present in the response. Modify the service-definition file if this is not the case. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8018 |
| --- |
| **MESSAGE** | Unable to create object for class <NameOfTheClass> |
| **DESCRIPTION** | Unable to invoke the pre/post processors or the Java services. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Remove the application jar from the application server libraries. |
| **RESOLUTION** | Check if the application jar is present. Also, check if there is no class conflict in the logs. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8701 |
| --- |
| **MESSAGE** | Invalid source to the parameter for<user input text>. |
| **DESCRIPTION** | Incorrect scope (value of 'src') is used for parameters values. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide value other than 'request' or 'session'. |
| **RESOLUTION** | Parameter source must be either of 'request', or 'session'. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8702 |
| --- |
| **MESSAGE** | Request failed with exception:<Exception Message>. |
| **DESCRIPTION** | Exception has occurred while requesting SAP service. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8703 |
| --- |
| **MESSAGE** | Request failed with JCO exception:<Exception Message>. |
| **DESCRIPTION** | Exception has occurred while requesting SAP service. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8704 |
| --- |
| **MESSAGE** | Request failed with ABAP exception:<Exception Message>. |
| **DESCRIPTION** | Exception has occurred while requesting SAP service. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8710 |
| --- |
| **MESSAGE** | Provide the properties file for connection information. |
| **DESCRIPTION** | SAP properties file (sap\_<servername>.properties) config parameter is missing in the service definition. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | When service does not have properties file in service definition. |
| **RESOLUTION** | SAP properties file must be provided in the service definition, using 'sapserverfile' config parameter. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8711 |
| --- |
| **MESSAGE** | Provide 'username' as a request parameter. |
| **DESCRIPTION** | 'username' is missing from the request parameters. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not provide username in the service request. |
| **RESOLUTION** | Supply the 'username' via request parameter. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8712 |
| --- |
| **MESSAGE** | Provide 'password' as a request parameter. |
| **DESCRIPTION** | 'password' is missing from the request parameters. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not provide password in the service request. |
| **RESOLUTION** | Supply the 'password' via request parameter. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8713 |
| --- |
| **MESSAGE** | SAP properties not loaded at server load (SAPConnectorListner in web.xml needs to be enabled). |
| **DESCRIPTION** | SAP properties files are not loaded at server start. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not register SAPConnectorListener in web.xml. |
| **RESOLUTION** | Register SAPConnectorListner in web.xml. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8714 |
| --- |
| **MESSAGE** | Error parsing input parameters. |
| **DESCRIPTION** | Could not parse the input JSON data supplied. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Provide invalid JSON data in the service request. |
| **RESOLUTION** | Validate the input data JSON format. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8801 |
| --- |
| **MESSAGE** | Siebel sessionid is empty, login again. |
| **DESCRIPTION** | Siebel session is empty in the request. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not provide session ID value. |
| **RESOLUTION** | First request the 'login' service which returns the session ID. Pass this session ID in the subsequent service requests. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8802 |
| --- |
| **MESSAGE** | Unsupported Siebel operation - opcode: <opcode value>. |
| **DESCRIPTION** | Invalid Siebel operation opcode in the request. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When opcode does not match valid ones. |
| **RESOLUTION** | Siebel service 'opcode' mentioned in the service def is not valid. It has to be either of login, logout, create, update, delete, query, service. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8803 |
| --- |
| **MESSAGE** | Siebel exception while performing operation= <operation> |
| **DESCRIPTION** | Siebel exception has occurred. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8804 |
| --- |
| **MESSAGE** | Invalid connection URL or username or password. |
| **DESCRIPTION** | Invalid URL/username/password for Siebel service. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide incorrect URL/username/password. |
| **RESOLUTION** | Provide correct URL, username, password. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8805 |
| --- |
| **MESSAGE** | Invalid source type for service. |
| **DESCRIPTION** | Session ID is not valid or expired. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide invalid session ID. |
| **RESOLUTION** | Request login service and use the new session ID. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8806 |
| --- |
| **MESSAGE** | Invalid source type for service. |
| **DESCRIPTION** | Trying to update/insert multi valued field with single value. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide single value for multi valued field. |
| **RESOLUTION** | Provide multi valued data. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8807 |
| --- |
| **MESSAGE** | Service method not found or more than one found in specified service: <Method Name> in<Service Name>. |
| **DESCRIPTION** | Specified Siebel service is not found. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Request a Siebel service which does not exist. |
| **RESOLUTION** | Verify the Siebel service name. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8901 |
| --- |
| **MESSAGE** | JMS opcode/propertiesfile/mqconfig cannot be empty. |
| **DESCRIPTION** | JMS opcode, propertiesfile, mqconfig config parameters are missing from service definition. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When opcode/propertiesfile/mqconig config parameters are missing from service definition. |
| **RESOLUTION** | Provide correct opcode, properties file, mqconfig config parameters in service definition. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8902 |
| --- |
| **MESSAGE** | Invalid JMS opcode: <JMS opcode value>. |
| **DESCRIPTION** | Invalid opcode is used. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Use opcode other than valid ones. |
| **RESOLUTION** | Use correct opcode (either of 'send', 'receive', 'send\_receive'). |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8903 |
| --- |
| **MESSAGE** | Properties not loaded at server start: <properties file name>. |
| **DESCRIPTION** | Invalid opcode used |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not register JmsConnectorListener in web.xml. |
| **RESOLUTION** | Register JmsConnectorListener in web.xml. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8904 |
| --- |
| **MESSAGE** | Invalid MQ config name: <MQ Config name> |
| **DESCRIPTION** | mqconfg name not found in the properties file defined for the service. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Do not provide mqconfig config parameter in service definition. |
| **RESOLUTION** | Use correct mqconfig. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8905 |
| --- |
| **MESSAGE** | Exception while getting objects from DS. |
| **DESCRIPTION** | Exception occurred while getting managed JMS objects from directory server. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8906 |
| --- |
| **MESSAGE** | Exception while creating WMQ objects. |
| **DESCRIPTION** | Exception occurred while creating non-managed JMS connection. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8907 |
| --- |
| **MESSAGE** | JMS connector exception: opcode= <JMS opcode value> |
| **DESCRIPTION** | Exception occurred while performing JMS operation. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8908 |
| --- |
| **MESSAGE** | Failed to send message to: <Exception Message>. |
| **DESCRIPTION** | Failed to send message to mentioned queue/topic. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8908 |
| --- |
| **MESSAGE** | Failed to send message to: <Queue/Topic name>. |
| **DESCRIPTION** | Failed to send message to mentioned queue/topic. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8909 |
| --- |
| **MESSAGE** | MQ internal error: message sent, but could not get message ID. |
| **DESCRIPTION** | Message sent, but message ID is not received from MQ server. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Websphere MQ bug |
| **RESOLUTION** | Probably a MQ bug |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8910 |
| --- |
| **MESSAGE** | JMS StreamMessage type is not handled yet. |
| **DESCRIPTION** | Not implemented |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When message is a Stream message. |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8910 |
| --- |
| **MESSAGE** | JMS ObjectMessage type is not handled yet. |
| **DESCRIPTION** | Not implemented |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When message is Object message. |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 8910 |
| --- |
| **MESSAGE** | JMS ByteMessage type is not handled yet. |
| **DESCRIPTION** | Not implemented |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When message is Byte message. |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 9001 |
| --- |
| **MESSAGE** | IOExceptions |
| **DESCRIPTION** | Caused due to read time-outs or due to inability to open a connection. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Create a dummy service on the back-end server to return a response with a MalformedURL exception. This can be done by returning a response with an invalid charset encoding. |
| **RESOLUTION** | Check the connectivity to back-end server and check if the response from the back-end server is correct. |
| **POINT OF CONTACT** | Back-end service provider. |

* * *

 
| Error 9105 |
| --- |
| **MESSAGE** | Unable to fill message template. |
| **DESCRIPTION** | This error is thrown when the VoltMX Server is unable to create the request XML/Soap message from the input parameters in the request/session. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Pass a dataset as the input variable in the pre-processor for a particular service while keeping the attribute "datatype" of the input variable in the service-definition file as "String". |
| **RESOLUTION** | Check the input variables and their datatype. Also, check if the datatype of the input variable is the same as specified in the service-definition file. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 9109 |
| --- |
| **MESSAGE** | Unable to open connection to endpoint URL / Unable to open connection for the given service. |
| **DESCRIPTION** | This error is returned to the device in the event of any exception occurring while connecting and invoking the back-end service through connectors like XML/Soap. Look at the log file for related java stack traces. This error could also appear due to the failure of HTTP client init due to misconfiguration or missing license related values in the middleware.properties file. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | One of the ways to create this error is to specify an invalid classname "abc.xyz" as the pre-processor for a particular service in the service-definition file and invoke that service. Since this class is not present, this error will be thrown. You could also reproduce this error by removing the SMTP configuration from the middleware.properties file. |
| **RESOLUTION** | Check the middleware.log for previous java exceptions and stack-traces. Check the middleware.properties configuration values as mentioned in the VoltMX Sever installation guide. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 10101 |
| --- |
| **MESSAGE** | Application does not exist with the AppID. |
| **DESCRIPTION** | The service definition file has been moved/renamed from it's original location. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | In the service-definition file, change the attribute "id" of the tag <application> to "xyz" and restart the server. Since the application ID is no longer present, this error is thrown. |
| **RESOLUTION** | The service definition file has been moved/renamed from it's original location. Check the MIDDLEWARE\_HOME/middleware/ middleware-bootconfig/appregistry/ folder to check if the required service-definition file is present and valid. Re-generate the service. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 10102 |
| --- |
| **MESSAGE** | Service does not exist with the ServiceID. |
| **DESCRIPTION** | VoltMX Server is being hit with an invalid service ID. Possible hack. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Invoke the middleware application by giving the request parameter serviceID=xyz. Since this serviceID is not present in the service-definition file, this error is thrown. Alternatively, change the service-definition file by changing the attribute name. |
| **RESOLUTION** | Check the service-definition file for the particular service being invoked. The <service> tag for that service should be present and should be defined correctly. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 10103 |
| --- |
| **MESSAGE** | Unsupported service type. |
| **DESCRIPTION** | Service definition file has been tampered with. Check the type of the service as defined in the service definition. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Change the service-definition file by changing the attribute "type" of a particular service to "abc.xyz". Restart the server. Invoke the service. Since this type is not defined in the ControllerDef.xml file, this error is thrown. |
| **RESOLUTION** | Check the service-definition file for the particular service being invoked. Check the attribute "type" in the service tag. This attribute should be present under the <ProcessorConfiguration> tag in ControllerDef.xml file along with the appropriate fully qualified class name. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 10104 |
| --- |
| **MESSAGE** | Cannot load a Connector. |
| **DESCRIPTION** | Unable to find the class pertaining to the connector specified in the service definition file and ControllerDef.xml file. ClassNotFoundException. Possible tampering of service definition file/libraries. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Change the ControllerDef.xml file by changing the <Config> tag under <ProcessorConfiguration>. Change the attribute "value" for any of the connectors to "abc.xyz". Restart the server. Invoke the service which is of this type. Since the class abc.xyz is not present, this error is invoked. |
| **RESOLUTION** | Check the ControllerDef.xml file for fully qualified class name of the particular connector. Also, check if the class is present in the classpath. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 10105 |
| --- |
| **MESSAGE** | Cannot instantiate a Connector. |
| **DESCRIPTION** | Unable to instantiate the class pertaining to the connector specified in the service definition file and ControllerDef.xml file. InstantiationException. Possible tampering of service definition file/libraries. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Change the ControllerDef.xml file by changing the <Config> tag under <ProcessorConfiguration>. Change the attribute "value" for any of the connectors to "abc.xyz" where abc.xyz is an interface/abstract class. Restart the server. Invoke the service which uses that particular connector. This error is thrown. |
| **RESOLUTION** | Check the ControllerDef.xml file for fully qualified class name of the particular connector. Also, check if the class is present in the classpath and it is not an interface or an abstract class. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 12001 |
| --- |
| **MESSAGE** | Unable to connect to device database. |
| **DESCRIPTION** | Connection to the device database is lost. Resolve immediately. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Bring down the database server. Invoke any service and this error is thrown. |
| **RESOLUTION** | Check connection to the database server. Check the context specified. Check the credentials of the database server and, if VoltMX Server has permissions to access the database. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| Error 12003 |
| --- |
| **MESSAGE** | Error while executing Select Queries. |
| **DESCRIPTION** | Check the query and manually query the database with the same. Possible tampering with the database tables and/or data. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the database and change the name of table "voltmxlogdb.devicemaster" to "voltmxlogdb.devmaster". Since the VoltMX Server queries the devicemaster table, this error is thrown. |
| **RESOLUTION** | Check the query and manually query the database with the same. Possible tampering with the database tables and/or data. |
| **POINT OF CONTACT** | VOLTMX |
