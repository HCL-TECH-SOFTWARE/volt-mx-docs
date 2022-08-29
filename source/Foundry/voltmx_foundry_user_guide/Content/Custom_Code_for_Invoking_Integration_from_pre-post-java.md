                              

User Guide: [Integration](Services.md#integration) \> [Advanced Configurations](Advanced_Configurations.md) > Exception Handling (for Java Preprocessor and Postprocessor)

Custom Code for Invoking an Integration Service from a Preprocessor, Postprocessor, Custom filter, Custom Servlet, or Java service
==================================================================================================================================

The middleware Java API helps to invoke an integration/Orchestration/object service from custom code.

> **_Important:_** The Volt MX Foundry Console does not send the dependent artifacts with the request for a Java Service. Therefore, invoking a service from Custom Code using the `ServicesManager` API is not supported.

How to use the API

*   Initial steps is to create an Operation Data and Service Request Objects:
```
 OperationData serviceData = request.getServicesManager()
    				.getOperationDataBuilder()
    				.withServiceId(<Service Id>)
    				.withOperationId(<Operation Id>)
    				.build();
    
```

*   To invoke and get JSON response:
```
 ServiceRequest serviceRequest = request.getServicesManager().getRequestBuilder (serviceData)
    					.withInputs(<Input Map>)
    					.withHeaders(<Header Map>)
    					.build();
    
    String response = serviceRequest.invokeServiceAndGetJson();
    
```

*   To invoke and get result object:
```
 
    ServiceRequest serviceRequest = request.getServicesManager().getRequestBuilder (serviceData).build();
    Result result = serviceRequest.invokeServiceAndGetResult();
    
```
    
    > **_Note:_** In case of result object API.
    

*   To invoke a PassThroughService:
```
 ServiceRequest serviceRequest = request.getServicesManager().getRequestBuilder (serviceData).build();
    BufferedHttpEntity response = serviceRequest.invokePassThroughServiceAndGetEntity();
    
```
*   To get the service manager in the custom filter or servlets using HttpServletRequest instance:  
```
ServicesManager servicesManager = ServicesManagerHelper.getServicesManager(request); OperationData operationData = servicesManager.getOperationData();   
    IdentityHandler identityHandler = servicesManager.getIdentityHandler();
```
*   To fetch user profile, user attributes and security attributes:  
```
UserProfile userProfile = identityHandler.getUserProfile();
    Map<String, Object> userAttributes = identityHandler.getUserAttributes();
    Map<String, Object> securityAttributes = identityHandler.getSecurityAttributes();
    Map<String, Object> appAttributes = identityHandler.getAppAttributes();
    String appId = identityHandler.getAppId();
```
*   To fetch user attributes and security attributes using provider name:  
```
Map<String, Object> userAttributes = identityHandler.getUserAttributes("identity provider name");
    Map<String, Object> securityAttributes = identityHandler.getSecurityAttributes("identity provider name", true);
```
*   If you want to invoke an authentication service which contains identity parameters or headers, modify the inline invocation of the service and include the new authorization token (X-VoltMX-Authorization token). You can pass the token to the parent service (service which invokes the inline service), read the token from the custom code and pass it in the Services Manager API.  
```
ServiceRequest serviceRequest = request.getServicesManager().getRequestBuilder(serviceData)
    	.withInputs( < Input Map > )
    	.withHeaders( < Header Map > )
    	.withAuthorizationToken( < x - voltmx - authorization - token > )
    	.build();
    
    String response = serviceRequest.invokeServiceAndGetJson();
```

*   To execute a sequence of RDBMS operations in a transaction you can use Transaction manager. When you execute services through Transaction Manager, the services listed in TransactionExecutor are executed in a single transaction, and the transaction roll backs if there is any error.  
    
    **For Example**: Let us assume a database has a **Country** table and an **Address** table. The Address table contains a country column. You can use Transaction Manager in the transaction, where the operations update the **Country** table first and then update address with country in the **Address** table. If any operation fails, the changes done by previous operations/verbs will roll back automatically.
    
    Following is the sample code for it:
    
```
public class CreateCountryAndAddressInTransaction implements ObjectServicePreProcessor {
        private static final Logger LOGGER = LogManager.getLogger(CreateCountryAndAddressInTransaction.class);
    
        private String countryId;
    
        public void execute(FoundryRequestManager foundryRequestManager,
            FoundryResponseManager foundryResponseManager, FoundryRequestChain foundryRequestChain)
        throws Exception {
            ServicesManager servicesManager = foundryRequestManager.getServicesManager();
    
    
            DatabaseTransactionManager manager = servicesManager.getDatabaseTransactionManager();
            TransactionExecutor < Result > txe = () - > {
                try {
    
                    // Create of a country
                    OperationData createCountryOperationData = servicesManager.getOperationDataBuilder()
                        .withServiceId("TransactionObjectService").withObjectId("country")
                        .withOperationId(OperationEnum.create.name()).withVersion("1.0").build();
    
                    Map < String, Object > countryInputs = new HashMap < > ();
                    countryInputs.put("CountryName", "MyCountry");
                    ServiceRequest createCountryServiceRequest = servicesManager
                        .getRequestBuilder(createCountryOperationData).withInputs(countryInputs)
                        .build();
                    Result resultForCreateOperation = createCountryServiceRequest.invokeServiceAndGetResult();
                    this.countryId = resultForCreateOperation.getDatasetById("country").getRecord(0)
                        .getParam("CountryID").getValue();
    
                    // Create of an Address with country value as input	
    
                    OperationData createAddressOperationData = servicesManager.getOperationDataBuilder()
                        .withServiceId("TransactionObjectService").withObjectId("address")
                        .withOperationId(OperationEnum.create.name()).withVersion("1.0").build();
    
                    Map < String, Object > addressInputs = new HashMap < > ();
                    addressInputs.put("Address1", "MyAddress");
                    addressInputs.put("AddressID", this.countryId);
                    ServiceRequest createAddressServiceRequest = servicesManager
                        .getRequestBuilder(createAddressOperationData).withInputs(addressInputs).build();
    
                    createAddressServiceRequest.invokeServiceAndGetResult();
                } catch (MiddlewareException e) {
                    LOGGER.error("Error in custom code", e);
                    throw new FoundryRuntimeException("failed");
                    // Having a catch and throw is necessary for Transaction manager.In this particular example , If the country creation is succesfull and the create address fails country creation will also be rolled back
                }
                return null;
            };
    
            manager.executeInTransaction(txe);
    
            foundryRequestChain.execute();
        }
    }
```

Exception Handling (for Java Preprocessor and Postprocessor)
------------------------------------------------------------

In case of Exception from the API, result object will be available as an attribute in the request object.

For example:

```
 try {
    result = serviceRequest.invokeServiceAndGetResult();
} catch (Exception e) {
    //result object with error message or result update in onException can be retrieved from request //object as below.
    return request.getAttribute(MWConstants.RESULTS);
}
```

> **_Note:_** For server upgrade from version 7.x to version 8.3.x, if Services Manger APIs are used in the custom code, you must rebuild the jar with the latest middleware plugins to avoid IncompatibleClassChangeError.

Exception Handling (for Multiple Java Preprocessor and Postprocessor)
---------------------------------------------------------------------

*   If there is an exception occurs in a request with many pre-processors, the Volt MX Server ignores the request.
*   If there is an exception occurs in a response, the Volt MX Server sends the response including the exception details.
