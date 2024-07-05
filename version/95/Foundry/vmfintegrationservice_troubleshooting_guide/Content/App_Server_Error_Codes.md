                               


VoltMX  Foundry Integration Service Error Codes
===========================================

The following are the error codes that VoltMX Foundry Integration Service throws. Each error code table consists of the error message, description of the error, severity, way to reproduce the error, error resolution and point of contact.

  
| Error 1528 ||
| --- | --- |
| MESSAGE | One or more of the services failed in the composite service. |
| DESCRIPTION | It means that one of the services executed as part of the composite service failed. You can find the actual error code and message in the logs for the individual services. |
| SEVERITY | HIGH |
| REPRODUCE THE ERROR | Provide invalid service URL for one of the services. |
| RESOLUTION | Resolve the issue faced by the individual service that depends on the error code provided by that service. |
| POINT OF CONTACT | Depends on the error code for the individual services. |

  
| Error 5000 ||
| --- | --- |
| MESSAGE | Controller Initialization Error. |
| DESCRIPTION | It means that the initialization of the `ControllerDef.xml` file is improper. |
| SEVERITY | LOW |
| REPRODUCE THE ERROR | Create improper XML tags in the `ControllerDef.xml` file. Restart the server. While loading the controller configurations, this error appears. |
| RESOLUTION | Check the `ControllerDef.xml` file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5001 ||
| --- | --- |
| **MESSAGE** | Mandatory Request parameter channel is missing. |
| **DESCRIPTION** | VoltMX Foundry Integration Service is hit from places other than the device. Mandatory parameter channel is missing. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Remove the request parameter "channel" while invoking VoltMX Foundry Integration Service. |
| **RESOLUTION** | Check the request parameters for mandatory parameter: channel. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5002 ||
| --- | --- |
| **MESSAGE** | Mandatory Request parameters - appID, serviceID or both are missing. |
| **DESCRIPTION** | VoltMX Foundry Integration Service is hit from places other than the device. All the mandatory parameters such as- appID, serviceID or both are missing. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Remove the request parameter appID or serviceID while invoking VoltMX Foundry Integration Service. |
| **RESOLUTION** | Check the request parameters for mandatory parameter : appID and serviceID. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5004 ||
| --- | --- |
| **MESSAGE** | Processor definition does not exit. |
| **DESCRIPTION** | This means that the processor classes (DataChunking, ImageProcessor, ServiceDelegate and so on) are not present in the `ControllerDef.xml` file. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the <ProcessorConfiguration> with attribute name "ServiceDelegator" from the `ControllerDef.xml` file. |
| **RESOLUTION** | Check `ControllerDef.xml` for the processor being invoked and check if it is present and correct. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5005 ||
| --- | --- |
| **MESSAGE** | Cannot load the processor class. |
| **DESCRIPTION** | This means that the processor classes (DataChunking, ImageProcessor, ServiceDelegate and so on) present in the `ControllerDef.xml` file could not be loaded by the JVM. This may lead to loss of functionality. Possible tampering. Check availability of the classes. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the <ProcessorConfiguration> tag with attribute name "ServiceDelegator" and change the classname to "abc.xyz". Since this class is not present, it throws up this error. |
| **RESOLUTION** | Check if the `middleware-system.jar` is present and the processor class is present in that jar. Also, check if no other jar file contains the same class name as this processor class. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5006 ||
| --- | --- |
| **MESSAGE** | Cannot create processor class instance. |
| **DESCRIPTION** | This means that the processor classes (DataChunking, ImageProcessor, ServiceDelegate and so on) present in the `ControllerDef.xml` file cannot be instantiated by the JVM. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the <ProcessorConfiguration> tag with attribute name "ServiceDelegator" and change the classname to "abc.xyz" where abc.xyz is an interface / abstract class. Since this an interface, it throws up this error. |
| **RESOLUTION** | Check if the `middleware-system.jar` is present and the processor class is present in the jar. Also, check if the processor class being invoked is not an interface / abstract class. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5101 ||
| --- | --- |
| **MESSAGE** | Sequence definition does not exit. |
| **DESCRIPTION** | It means that the sequence of processors (as described above) are not present for that particular channel (Native Apps, and Mobile Web). This should be present in the `ControllerDef.xml` file. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the <SequenceConfiguration> with attribute name "default" from the `ControllerDef.xml` file. |
| **RESOLUTION** | Check if the required sequence is present and correctly defined in the `controllerDef.xml`. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5101 ||
| --- | --- |
| **MESSAGE** | Problem in Creating / Loading the sequence class. |
| **DESCRIPTION** | This means that the sequence of processors (as described above) are not loaded for that particular channel (Native Apps, Mobile Web and so on). Check `ControllerDef.xml` file for the sequence. Check availability of the classes defined. This may lead to loss of functionality. Possible tampering. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the <SequenceConfiguration> tag with attribute name "default" and change the classname to "abc.xyz". Since this class is not present, this error appears. |
| **RESOLUTION** | Check if the sequence class invoked is present in the `middleware-system.jar`. Check if no other jar file contains the same class name as this processor class. Also, check if there is no IllegalAccessError while instantiating the class. |
| **POINT OF CONTACT** | VOLTMX |

  
| Error 5104 ||
| --- | --- |
| **MESSAGE** | Metadata mismatch: Either request,session or context data doesnt match with metadata configuration. |
| **DESCRIPTION** | Mismatch between the middleware configuration files. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Place correct / updated `middleware-bootconfig` files at server end. |
| POINT OF CONTACT | VOLTMX |

  
| Error 5301 ||
| --- | --- |
| **MESSAGE** | No Device ID found for <rcidentifier>. |
| **DESCRIPTION** | Fallback device not found. Device database may be corrupt or wrong. The VoltMX Foundry Integration Service is unable to locate the fallback device IDs in the device database. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Remove the entries for 'voltmxua' and 'voltmxrc' in the device database. |
| **RESOLUTION** | Check the device database if the fallback rcidentifiers ‘voltmxrc’ and fallback useragent ‘voltmxua’ are present. Also, check the connectivity to the device database. |
| POINT OF CONTACT | VOLTMX |

  
| Error 6000 ||
| --- | --- |
| **MESSAGE** | Session does not exist. |
| **DESCRIPTION** | Session does not exist. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Set the session object to null in the pre-processor. |
| **RESOLUTION** | Check the pre-processor. |
| POINT OF CONTACT | VOLTMX |

  
| Error 6001 ||
| --- | --- |
| **MESSAGE** | Session exists (may be newly created) but there are no expected values. |
| **DESCRIPTION** | The session exists but the value in the session is null. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | In the `service-definition` file, change the scope of an input variable to "session" and do not save this value in session in the pre-processor or any previous service. |
| **RESOLUTION** | Ensure that the value looked for is present in the session. Check the `service-definition` file for the particular service and check if the scope of the concerned input variable is correct (It can be session / request). |
| POINT OF CONTACT | VOLTMX |

  
| Error 6003 ||
| --- | --- |
| **MESSAGE** | Mandatory request parameter loop\_count or dependant\_tag /dependant\_value not found in the request. |
| **DESCRIPTION** | Looping Connector has a feature to break out the execution of service with dependant\_tag / dependant\_value / loop\_count. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Give empty value in loopingConnector loop\_count or dependant\_tag / dependant\_value in request. |
| **RESOLUTION** | Check non empty input params of LoopingConnector loop\_count or dependant\_tag / dependant\_value in request. |
| POINT OF CONTACT | VOLTMX |

  
| Error 6004 ||
| --- | --- |
| **MESSAGE** | Invalid loop count when execution type is concurrent. |
| **DESCRIPTION** | Looping Connector has a feature to break out the execution of service with dependant\_tag / dependant\_value / loop\_count. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Give negative value in loopingConnector loop count. |
| **RESOLUTION** | Enter a non-negative value for LoopingConnector loopCount. |
| POINT OF CONTACT | VOLTMX |

  
| Error 6004 ||
| --- | --- |
| **MESSAGE** | Unable to instantiate the connector class. |
| **DESCRIPTION** | Class names are incorrect. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check if the class name present in jar file is correct. |
| POINT OF CONTACT | VOLTMX |

  
| Error 6005 ||
| --- | --- |
| **MESSAGE** | Unable to execute services parallely. |
| **DESCRIPTION** | When Looping Connector services execute parallely with multiple threads, if any exception occurs, then the error appears. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Looping Connector with more than 10 services wants to execute parallely. |
| **RESOLUTION** | Define less than 10 services to execute parallely. |
| POINT OF CONTACT | VOLTMX |

  
| Error 7001 ||
| --- | --- |
| **MESSAGE** | Invalid source to the param <paramname>. |
| **DESCRIPTION** | When the mandatory param is expected from defined source like request / session, if the param is not available, then the error appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid template param defined in `service definition` file for JavaService. |
| **RESOLUTION** | Define source of input request or session for param value in JavaService. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8004 ||
| --- | --- |
| **MESSAGE** | Operation invocation problem. |
| **DESCRIPTION** | Unable to invoke the method on pre / post processors or the Java services. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the application jar from the application server libraries. |
| **RESOLUTION** | Check if the latest application jar is present. Also, check if there is no class conflict in the logs. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8005 ||
| --- | --- |
| **MESSAGE** | Response is empty. |
| **DESCRIPTION** | Backend service is returning empty response. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Re-direct the service call to a dummy server that returns an empty response. |
| **RESOLUTION** | Check the back-end services if they are up. Check connectivity with the back-end servers. |
| POINT OF CONTACT | Back-end service provider. |

  
| Error 8006 ||
| --- | --- |
| **MESSAGE** | Invalid XML Response. |
| **DESCRIPTION** | Check response from back-end server. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Create a dummy service on the back-end server to return a HTTP Response with error codes such as 401/500, it throws up the error. |
| **RESOLUTION** | Check response string from back-end servers. A common scenario can be when the back-end server returns an HTTP Response (401/500) for an XML / Soap request. This is treated as invalid by VoltMX Foundry Integration Service. Check if the response from the back-end server is a valid XML or Soap request. |
| POINT OF CONTACT | Back-end service provider. |

  
| Error 8007 ||
| --- | --- |
| **MESSAGE** | Error parsing the XML response. |
| **DESCRIPTION** | This error is returned if the VoltMX Foundry Integration Service could not parse the XML with the given XPath. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Provide incorrect XPath to parse the XML response. |
| **RESOLUTION** | Check if the XPath matches the XML response returned by the service. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8008 ||
| --- | --- |
| **MESSAGE** | Invalid Result object returned on method invocation. |
| **DESCRIPTION** | The object returned after invoking the pre / post processor or the Java service does not cast to com.hcl.voltmx.middleware.dataobject.Result object. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the processor such that it does not return valid Result object. |
| **RESOLUTION** | Ensure if `proper application.jar` is present and is returning proper object. Also, check if there is no class conflict in the logs. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8009 ||
| --- | --- |
| **MESSAGE** | Request unsuccessful, server responded with status code xxx. |
| **DESCRIPTION** | If the received status code is not 200, VoltMX Foundry Integration Service throws this error. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Shutdown the service so that a 404 or 500 error is thrown by the server hosting the service. Try to access the service through VoltMX Foundry Integration Service and the error is reproduced. |
| **RESOLUTION** | Check if the services are accessible. |
| POINT OF CONTACT | Back-end service provider. |

  
| Error 8010 ||
| --- | --- |
| **MESSAGE** | Operation invocation problem. |
| **DESCRIPTION** | Unable to invoke the method Scraper services. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove the `scraper.jar` from the application server libraries. |
| **RESOLUTION** | Check if the latest `scraper.jar` is present. Also, check if there is no class conflict in the logs. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8011 ||
| --- | --- |
| **MESSAGE** | Invalid Result object returned on method invocation. |
| **DESCRIPTION** | The object returned after invoking the Scraper service does not cast to com.hcl.voltmx.middleware.dataobject.Result object. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the Scraper code such that it does not return valid Result object. |
| **RESOLUTION** | Ensure if proper `scraper.jar` is present and returns proper object. Also, check if there is no class conflict in the logs. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8013 ||
| --- | --- |
| **MESSAGE** | Cannot get value for the expression. |
| **DESCRIPTION** | The tag is empty for the particular xpath in the response. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Create a service-output parameter that is not present in the response for that particular service. |
| **RESOLUTION** | Check the XML response and the service-definition file to ensure that the tag is parsed for is present in the response. Modify the `service-definition` file if this is not the case. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8018 ||
| --- | --- |
| **MESSAGE** | Unable to instantiate object. |
| **DESCRIPTION** | Unable to invoke the pre / post processors or the Java services. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Remove the application jar from the application server libraries. |
| **RESOLUTION** | Check if the application jar is present. Also, check if there is no class conflict in the logs. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8701 ||
| --- | --- |
| **MESSAGE** | Invalid source to the parameter for <user input text>. |
| **DESCRIPTION** | Incorrect scope (value of 'src') is used for parameters values. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide value other than 'request' or 'session'. |
| **RESOLUTION** | Parameter source must be either of 'request', or 'session'. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8702 ||
| --- | --- |
| **MESSAGE** | Request failed with exception:<Exception Message>. |
| **DESCRIPTION** | Exception occurred while requesting SAP service. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8703 ||
| --- | --- |
| **MESSAGE** | Request failed with JCO exception:<Exception Message>. |
| **DESCRIPTION** | Exception occurred while requesting SAP service. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8704 ||
| --- | --- |
| **MESSAGE** | Request failed with ABAP exception:<Exception Message>. |
| **DESCRIPTION** | Exception occurred while requesting SAP service. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8710 ||
| --- | --- |
| **MESSAGE** | Provide the properties file for connection information. |
| **DESCRIPTION** | SAP properties file (sap\_<servername>.properties) config parameter is missing in the service definition. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | When service does not have properties file in service definition. |
| **RESOLUTION** | You need to provide the SAP properties file in the service definition, using 'sapserverfile' config parameter. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8711 ||
| --- | --- |
| **MESSAGE** | Provide 'username' as a request parameter. |
| **DESCRIPTION** | The 'username' is missing from the request parameters. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not provide username in the service request. |
| **RESOLUTION** | Provide the 'username' through request parameter. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8712 ||
| --- | --- |
| **MESSAGE** | Provide 'password' as a request parameter. |
| **DESCRIPTION** | The 'password' is missing from the request parameters. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not provide password in the service request. |
| **RESOLUTION** | Supply the 'password' through request parameter. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8713 ||
| --- | --- |
| **MESSAGE** | SAP properties not loaded at server load (SAPConnectorListner in `web.xml` needs to be enabled). |
| **DESCRIPTION** | SAP properties files are not loaded at server start. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not register SAPConnectorListener in `web.xml`. |
| **RESOLUTION** | Register SAPConnectorListner in `web.xml`. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8714 ||
| --- | --- |
| **MESSAGE** | Error parsing input parameters. |
| **DESCRIPTION** | Could not parse the input JSON data supplied. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Provide invalid JSON data in the service request. |
| **RESOLUTION** | Validate the input data JSON format. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8715 ||
| --- | --- |
| **MESSAGE** | An exception occurred while performing auto commit operation (BAPI\_TRANSACTION\_COMMIT). |
| **DESCRIPTION** | Auto commit failed for the given transaction. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Provide a valid service that is capable of performing autocommit. |
| **RESOLUTION** | Check whether the service that you provided supports autocommit or not. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8801 ||
| --- | --- |
| **MESSAGE** | Siebel sessionid is empty, login again. |
| **DESCRIPTION** | Siebel session is empty in the request. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not provide session ID value. |
| **RESOLUTION** | First request the 'login' service that returns the session ID. Pass this session ID in the subsequent service requests. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8802 ||
| --- | --- |
| **MESSAGE** | Unsupported Siebel operation - opcode: <opcode value>. |
| **DESCRIPTION** | Invalid Siebel operation opcode in the request. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When opcode does not match valid ones. |
| **RESOLUTION** | Siebel service 'opcode' mentioned in the service def is not valid. It has to be either of login, logout, create, update, delete, query, and service. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8803 ||
| --- | --- |
| **MESSAGE** | Siebel exception while performing operation= <operation> |
| **DESCRIPTION** | Siebel exception occurred. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8804 ||
| --- | --- |
| **MESSAGE** | Invalid connection URL or username or password. |
| **DESCRIPTION** | Invalid URL / username / password for Siebel service. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide incorrect URL / username / password. |
| **RESOLUTION** | Provide correct URL, username, and password. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8805 ||
| --- | --- |
| **MESSAGE** | Invalid session ID. |
| **DESCRIPTION** | Session ID is not valid or expired. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide invalid session ID. |
| **RESOLUTION** | Request login service and use the new session ID. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8806 ||
| --- | --- |
| **MESSAGE** | Field is multi valued, but mValue is null. |
| **DESCRIPTION** | Trying to update / insert multi valued field with single value. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide single value for multi valued field. |
| **RESOLUTION** | Provide multi valued data. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8807 ||
| --- | --- |
| **MESSAGE** | Service method not found or more than one found in specified service: <Method Name> in<Service Name>. |
| **DESCRIPTION** | Specified Siebel service is not found. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Request a Siebel service which does not exist. |
| **RESOLUTION** | Verify the Siebel service name. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8901 ||
| --- | --- |
| **MESSAGE** | JMS opcode / propertiesfile / mqconfig cannot be empty. |
| **DESCRIPTION** | JMS opcode, propertiesfile, mqconfig config parameters are missing from service definition. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When opcode / propertiesfile / mqconig config parameters are missing from service definition. |
| **RESOLUTION** | Provide correct opcode, properties file, mqconfig config parameters in service definition. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8902 ||
| --- | --- |
| **MESSAGE** | Invalid JMS opcode: <JMS opcode value>. |
| **DESCRIPTION** | Invalid opcode is used. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Use opcode other than valid ones. |
| **RESOLUTION** | Use correct opcode (either of 'send', 'receive', 'send\_receive'). |
| POINT OF CONTACT | VOLTMX |

  
| Error 8903 ||
| --- | --- |
| **MESSAGE** | Properties not loaded at server start: <properties file name>. |
| **DESCRIPTION** | Invalid opcode used |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Do not register JmsConnectorListener in `web.xml`. |
| **RESOLUTION** | Register JmsConnectorListener in `web.xml`. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8904 ||
| --- | --- |
| **MESSAGE** | Invalid MQ config name: <MQ Config name> |
| **DESCRIPTION** | The mqconfg name not found in the properties file defined for the service. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Do not provide mqconfig config parameter in service definition. |
| **RESOLUTION** | Use correct mqconfig. |
| POINT OF CONTACT | VOLTMX |

  
| Error 8905 ||
| --- | --- |
| **MESSAGE** | Exception while getting objects from DS. |
| **DESCRIPTION** | Exception occurred while getting managed JMS objects from directory server. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8906 ||
| --- | --- |
| **MESSAGE** | Exception while creating WMQ objects. |
| **DESCRIPTION** | Exception occurred while creating non-managed JMS connection. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8907 ||
| --- | --- |
| **MESSAGE** | JMS connector exception: opcode= <JMS opcode value> |
| **DESCRIPTION** | Exception occurred while performing JMS operation. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8908 ||
| --- | --- |
| **MESSAGE** | Failed to send message to: <Exception Message>. |
| **DESCRIPTION** | Failed to send message to mentioned queue / topic. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8908 ||
| --- | --- |
| **MESSAGE** | Failed to send message to: <Queue / Topic name>. |
| **DESCRIPTION** | Failed to send message to mentioned queue / topic. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8909 ||
| --- | --- |
| **MESSAGE** | MQ internal error: message sent, but could not get message ID. |
| **DESCRIPTION** | Message sent, but message ID is not received from MQ server. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Websphere MQ bug |
| **RESOLUTION** | Probably a MQ bug |
| POINT OF CONTACT | VOLTMX |

  
| Error 8910 ||
| --- | --- |
| **MESSAGE** | JMS StreamMessage type is not handled yet. |
| **DESCRIPTION** | Not implemented |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When message is a Stream message. |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8910 ||
| --- | --- |
| **MESSAGE** | JMS ObjectMessage type is not handled yet. |
| **DESCRIPTION** | Not implemented |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When message is Object message. |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 8910 ||
| --- | --- |
| **MESSAGE** | JMS ByteMessage type is not handled yet. |
| **DESCRIPTION** | Not implemented |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | When message is Byte message. |
| **RESOLUTION** |   |
| POINT OF CONTACT | VOLTMX |

  
| Error 9001 ||
| --- | --- |
| **MESSAGE** | IOExceptions |
| **DESCRIPTION** | Caused due to read time-outs or due to inability to open a connection. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Create a dummy service on the back-end server to return a response with a MalformedURL exception. You can do this by returning a response with an invalid charset encoding. |
| **RESOLUTION** | Check the connectivity to back-end server and check if the response from the back-end server is correct. |
| POINT OF CONTACT | Back-end service provider. |

  
| Error 9103 ||
| --- | --- |
| **MESSAGE** | Invalid source to the param for <paramname> for service <serviceId>. |
| **DESCRIPTION** | When the mandatory param is expected from defined source like request / session, if the param is not available, then the error appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid template param defined in `service definition` file. |
| **RESOLUTION** | Define source of input request or session for param value |
| POINT OF CONTACT | VOLTMX |

  
| Error 9104 ||
| --- | --- |
| **MESSAGE** | Error reading the message template. |
| **DESCRIPTION** | While replacing request input values in template param defined in `service-definition` file for the service, the error occurs. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid template param defined in `service definition` file. |
| **RESOLUTION** | Correct template param in `service definition` file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 9105 ||
| --- | --- |
| **MESSAGE** | Unable to fill message template. |
| **DESCRIPTION** | This error appears when VoltMX Foundry Integration Service is unable to create the request XML / Soap message from the input parameters in the request/session. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Pass a dataset as the input variable in the pre-processor for a particular service while keeping the attribute "datatype" of the input variable in the service-definition file as "String". |
| **RESOLUTION** | Check the input variables and their datatype. Also, check if the datatype of the input variable is the same as specified in the `service-definition` file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 9106 ||
| --- | --- |
| **MESSAGE** | Connector Configuration Problem. endpointUrl is null for service <serviceId>. |
| **DESCRIPTION** | When custom URL provider implementation returns null for endpoint url value, the error appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | If any endpoint url is null in `service definition` file or custom URLProvider implementation logic returns null. |
| **RESOLUTION** | Check in `service definition` file or custom URLProvider implementation logic. |
| POINT OF CONTACT | VOLTMX |

  
| Error 9109 ||
| --- | --- |
| **MESSAGE** | Unable to open connection to endpoint URL / Unable to open connection for the given service. |
| **DESCRIPTION** | This error is returned to the device in the event of any exception that occurs while connecting and invoking the back-end service through connectors like XML / Soap. Look at the log file for related java stack traces. This error can also appear due to the failure of HTTP client init due to misconfiguration or missing license related values in the `middleware.properties` file. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | One of the ways to create this error is to specify an invalid classname "abc.xyz" as the pre-processor for a particular service in the service-definition file and invoke that service. Since this class is not present, this error appears. You can also reproduce this error by removing the SMTP configuration from the `middleware.properties` file. |
| **RESOLUTION** | Check the `middleware.log` for previous java exceptions and stack-traces. Check the `middleware.properties` configuration values as mentioned in the VoltMX Sever installation guide. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10002 ||
| --- | --- |
| **MESSAGE** | Result not available in the request context. |
| **DESCRIPTION** | VoltMX middleware processing error. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check the exception in middleware / server log. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10101 ||
| --- | --- |
| **MESSAGE** | Application does not exist with the AppID. |
| **DESCRIPTION** | The service definition file is moved / renamed from its original location. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | In the `service-definition` file, change the attribute "id" of the tag <application> to "xyz" and restart the server. Since the application ID is no longer present, this error appears. |
| **RESOLUTION** | The `service definition` file is moved / renamed from its original location. Check the `MIDDLEWARE_HOME/middleware/ middleware-bootconfig/appregistry/` folder to check if the required service-definition file is present and valid. Re-generate the service. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10102 ||
| --- | --- |
| **MESSAGE** | Service does not exist with the ServiceID. |
| **DESCRIPTION** | VoltMX Foundry Integration Service is hit with an invalid service ID. Possible hack. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Invoke the middleware application by giving the request parameter serviceID=xyz. Since this serviceID is not present in the `service-definition` file, the error appears. Alternatively, change the `service-definition` file by changing the attribute name. |
| **RESOLUTION** | Check the `service-definition` file for the particular service being invoked. The <service> tag for that service should be present and should be defined correctly. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10103 ||
| --- | --- |
| **MESSAGE** | Unsupported service type. |
| **DESCRIPTION** | Service definition file is tampered with. Check the type of the service as defined in the service definition. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Change the `service-definition` file by changing the attribute "type" of a particular service to "abc.xyz". Restart the server. Invoke the service. Since this type is not defined in the `ControllerDef.xml` file, the error appears. |
| **RESOLUTION** | Check the `service-definition` file for the particular service being invoked. Check the attribute "type" in the service tag. This attribute should be present under the <ProcessorConfiguration> tag in `ControllerDef.xml` file along with the appropriate fully qualified class name. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10104 ||
| --- | --- |
| **MESSAGE** | Cannot load a Connector. |
| **DESCRIPTION** | Unable to find the class pertaining to the connector specified in the `service definition` file and `ControllerDef.xml` file. ClassNotFoundException. Possible tampering of service definition file / libraries. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Change the `ControllerDef.xml` file by changing the <Config> tag under <ProcessorConfiguration>. Change the attribute "value" for any of the connectors to "abc.xyz". Restart the server. Invoke the service that is of this type. Since the class abc.xyz is not present, this error is invoked. |
| **RESOLUTION** | Check the `ControllerDef.xml` file for fully qualified class name of the particular connector. Also, check if the class is present in the classpath. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10105 ||
| --- | --- |
| **MESSAGE** | Cannot instantiate a Connector. |
| **DESCRIPTION** | Unable to instantiate the class pertaining to the connector specified in the `service definition` file and `ControllerDef.xml` file. InstantiationException. Possible tampering of service definition file / libraries. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Change the `ControllerDef.xml` file by changing the <Config> tag under <ProcessorConfiguration>. Change the attribute "value" for any of the connectors to "abc.xyz" where abc.xyz is an interface / abstract class. Restart the server. Invoke the service that uses that particular connector. The error appears. |
| **RESOLUTION** | Check the `ControllerDef.xml` file for fully qualified class name of the particular connector. Also, check if the class is present in the classpath and is not an interface or an abstract class. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10106 ||
| --- | --- |
| **MESSAGE** | Results fetched is null. |
| **DESCRIPTION** | The result from the service call is null. Check connection with back-end server and check response from back-end server. Also ensure that the post or pre-processor does not return empty result. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Create a post-processor that returns empty result object. |
| **RESOLUTION** | Check connection and response from the back-end server. Check that the pre and post-processor did not return the empty result. |
| POINT OF CONTACT | VOLTMX |

  
| Error 10302 ||
| --- | --- |
| **MESSAGE** | Json String Syntax error. |
| **DESCRIPTION** | When exception appears, json result is formed, while forming, any json exception appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | If any exception appears from end server, VoltMX Foundry Integration Service forms one JSON response for device with error status. |
| **RESOLUTION** | Check back end server response. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11101 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | appID param not get in config parameters. |
| **DESCRIPTION** | When the scraper service executes apId and serviceId, params are read from the `service-definition` file, if the appID param is missing, then the error appears. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Place correct / updated `service-definition` file in `appregistry` folder. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11102 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | serviceID param not found in config parameters. |
| **DESCRIPTION** | When the scraper service executes appId and serviceId, params are read from the `service-definition` file, if serviceID param is missing, then the error appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid serviceId in input request params |
| **RESOLUTION** | Place correct / updated `service-definition` file with serviceId in server end. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11103 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | channel param not found in config parameters. |
| **DESCRIPTION** | When the scraper service executes channel, the param comes from respective platform like Android rich / thin / SPA. If the channel param is missing, then the error appears. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Invalid serviceId in input request params |
| **RESOLUTION** | Check if your app is built correctly with specified platform. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11104 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | DSL file path not correct........ |
| **DESCRIPTION** | If the `dsl` file is not available in the specified location, then the error appears. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Check `genericscrapper` folder under `middleware.home` path. |
| **RESOLUTION** | Ensure that all `dsl` files are placed in the correct location. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11105 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | The nativeapppath not found in serviceIdAppId. |
| **DESCRIPTION** | The `AppId` folder or serviceId dsl not found in scraper location. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Check `genericscrapper` folder under `middleware.home` path. |
| **RESOLUTION** | Check if your app is built correctly with specified platform. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11106 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | The splitDSLDataLength is <splitDSLDataLength> please seperate input and xpath by ----- |
| **DESCRIPTION** | The `dsl` file syntax error. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid xpath. |
| **RESOLUTION** | Check syntax of the `dsl` file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11107 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | <property Key> key value pair not find in <appId>.properties |
| **DESCRIPTION** | While retrieving mandatory values from appId.properties, if the value is not found, then the error appears. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check your app properties for scraper under `scraper dsl` location. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11110 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | <appid>.properties not found.... |
| **DESCRIPTION** | The `AppId` folder or serviceId dsl not found in scraper location. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | The appId properties not found in the specified location. |
| **RESOLUTION** | Check your app properties for scraper under `scraper dsl` location. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11111 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Scrapper doesn't support <input> key as input param |
| **DESCRIPTION** | Syntax error of dsl input params. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Check `genericscrapper` folder under `middleware.home` path. |
| **RESOLUTION** | Follow dsl syntax with scraper keys. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11112 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Expecting <input key> arguments, got <argsLength> arguments key. |
| **DESCRIPTION** | Validating scraper input param key words in the `dsl` file. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Check `genericscrapper` folder under `middleware.home` path. |
| **RESOLUTION** | Forcefully close the connections to the database server through the application server. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11113 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | If optionalheaderparam is ignore type only then scrapper tool support alias, original keys as input. |
| **DESCRIPTION** | Scraper syntax for optionalheaderparam. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove ignore and do not pass any value for this header param. |
| **RESOLUTION** | Use "ignore" keyword for optional header param, otherwise having the header key and value is mandatory. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11114 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Please pass optionalheaderparam <optkey> from ui/servicedef. |
| **DESCRIPTION** | Scraper syntax for optionalheaderparam. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Passing optionalheaderparam key and value in `dsl`, but not defining this header param in `service definition` file. |
| **RESOLUTION** | Define optionalheaderparam key in `dsl` and as well as in `service definition` file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11115 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | If optionalpostparam is ignore type only then scrapper tool support 2 keys as input. |
| **DESCRIPTION** | Scraper syntax for optionalheaderparam. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Remove "ignore" and don't pass any value for this post param. |
| **RESOLUTION** | Use "ignore" key word for optional post param, otherwise you have to mandatorily pass this post param key and value. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11116 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Please pass optionalpostparam <key> from ui / servicedef |
| **DESCRIPTION** | Scraper syntax for optionalheaderparam. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Passing optionalpostparam key and value in `dsl`, but not define this post param in `service definition` file. |
| **RESOLUTION** | Define optionalpostparam key in `dsl` and as well as in `service definition` file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11117 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Pass comma seperated values for repeatpostparam key. |
| **DESCRIPTION** | If the same key repeats with different values, then use repeatpostparam syntax. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Passing different values with comma separated values for repeatpostparam. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11118 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Param key <name> not found. |
| **DESCRIPTION** | Searching param key in dsl syntax. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Searching param key in `dsl` file with dsl delimiter. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11119 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Pass atleast one url in `dsl` file. |
| **DESCRIPTION** | Endpoint URL is mandatory param to send user request. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Endpoint url should not be empty. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11120 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | File not found. |
| **DESCRIPTION** | HTML file path not found. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check the path of the.html file. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11121 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Recheck dsl, generic scrapper not support for <key>. |
| **DESCRIPTION** | Validating values with output params from output generated.html content. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check that dsl output param type should predefine keys for scraper. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11122 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Arguments are less than expected for scraper <key>. |
| **DESCRIPTION** | Validating output param with minimum arguments. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |  |
| **RESOLUTION** | Check that dsl output param type should pre-define keys for scraper. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11123 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Individual field names should be unique through out the dsl. |
| **DESCRIPTION** | All ouput param names should be unique. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check that dsl output param names should be unique. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11124 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Context command - can only be used inside a record. |
| **DESCRIPTION** | Context is the key that is used only with record. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |  |
| **RESOLUTION** | Context is the key in scraper that you use along with record key. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11125 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Innerrecord command - can only be used inside a record or innerrecord. |
| **DESCRIPTION** | Innerrecord is the key that is used with record. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |  |
| **RESOLUTION** | Innerrecord is the key in scraper that you use along with record key. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11126 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | You can pass only one cookie name in output. |
| **DESCRIPTION** | You cannot repeat the cookie name in output param type. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Define only one cookie type in output parameters. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11127 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Empty context not allowed, please provide some value. |
| **DESCRIPTION** | You should defiine some value for output type context key. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |  |
| **RESOLUTION** | Empty context is not allowed, provide some value in `dsl`. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11130 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Parsing error. |
| **DESCRIPTION** | Dom error while converting.html to.htmldocument builder. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check if the HTML file generated through scraper is well formed. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11131 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Problem in X-Path : <key> |
| **DESCRIPTION** | Error while evaluating xpath. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid xpath for output param. |
| **RESOLUTION** | Write proper xpath to get the specified value. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11132 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Parsing error. |
| **DESCRIPTION** | HTML to XML conversion error. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check if the.html file that is generated through scraper is well formed. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11133 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Parsing error |
| **DESCRIPTION** |.html to xml conversion error. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check if the.html file that is generated through scraper is well formed. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11134 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Parser error |
| **DESCRIPTION** | Error that appears while evaluating xpath. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Check if the.html file that is generated through scraper is well formed. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11138 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Peer not authenticated.(any other unidentified exceptions also.... ) |
| **DESCRIPTION** | The error appears if the SSL certificates do not match with client url. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Invalid SSL certificates installed /certificates not installed in `cacerts`. |
| **RESOLUTION** | Check if the SSL certificates are configured correctly. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11140 (Scraper Exception) ||
| --- | --- |
| **MESSAGE** | Parser error. |
| **DESCRIPTION** | VTD parser error that occurs while evaluating xpath. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Proper xpath should be evaluated by VTD. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11142 ||
| --- | --- |
| **MESSAGE** | Connection time out. |
| **DESCRIPTION** | While downloading the file through scraper, if there are any network issues, then the error appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |   |
| **RESOLUTION** | Retry / check the network connection. |
| POINT OF CONTACT | VOLTMX |

  
| Error 11143 ||
| --- | --- |
| **MESSAGE** | Unknown exception |
| **DESCRIPTION** | While writing the log file, the exception appears. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** |  |
| **RESOLUTION** | Check the write permissions of the user for the Directory. |
| POINT OF CONTACT | VOLTMX |

  
| Error 12001 ||
| --- | --- |
| **MESSAGE** | Unable to make connection to device db. |
| **DESCRIPTION** | Connection to the device database is lost. Resolve immediately. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Bring down the database server. Invoke any service and the error appears. |
| **RESOLUTION** | Check connection to the database server. Check the context specified. Check the credentials of the database server and, if VoltMX Foundry Integration Service has permissions to access the database. |
| POINT OF CONTACT | VOLTMX |

  
| Error 12002 ||
| --- | --- |
| **MESSAGE** | Unable to close database connection. |
| **DESCRIPTION** | Unable to close connection to device database. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Unable to reproduce the error. |
| **RESOLUTION** | Forcefully close the connections to the database server through the application server. |
| POINT OF CONTACT | VOLTMX |

  
| Error 12003 ||
| --- | --- |
| **MESSAGE** | Error while executing Select Queries. |
| **DESCRIPTION** | Check the query and manually query the database with the same. Possible tampering with the database tables and / or data. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Modify the database and change the name of table "voltmxlogdb.devicemaster" to "voltmxlogdb.devmaster". Since the VoltMX Foundry Integration Service queries the devicemaster table, this error appears. |
| **RESOLUTION** | Check the query and manually query the database with the same. Possible tampering with the database tables and / or data. |
| POINT OF CONTACT | VOLTMX |

  
| Error 12006 ||
| --- | --- |
| **MESSAGE** | Unable to load DB Specific Properties. |
| **DESCRIPTION** | Check the device database properties in the `middleware.properties` file. Check the existence of the database and manually check if you can connect to the database. |
| **SEVERITY** | SEVERE |
| **REPRODUCE THE ERROR** | Remove the file `middleware.properties` and restart the server. |
| **RESOLUTION** | Check the device database properties in the `middleware.properties` file and check if the `middleware.properties` file is present in the correct location. Check the existence of the database and manually check, if you can connect to the database. |
| POINT OF CONTACT | VOLTMX |

<!-- WebLogic Server Logs
--------------------

The following table contains the problem scenarios that you may encounter on a WebLogic Server and the resolutions:

  
| Scenario | Description | Resolution |
| --- | --- | --- |
| DataSource is paused | weblogic.jdbc.extensions.PoolDisabledSQLException: weblogic.common.resourcepool.ResourceDisabledException: Pool voltmxdevicedb is suspended and cannot allocate resources to applications. | The Connection pool on the datasource can no longer offer the application server any more connections to connect to the database. Release the connections and check the database server. |
| JMS Server/JMS Topic is paused | weblogic.jms.common.IllegalStateException: Destination SystemModule1!VoltMXLogTopic is paused for new message production. | Check the JMS Queue on the server. Restart the JMS Queue. |

[Open topic with navigation](../Content/App_Server_Error_Codes.md) -->

