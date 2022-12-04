                              

User Guide: [Object Services](Objectservices.md) > [Advanced Configurations Object Services](Advanced_Configurations_-Object_Services.md) > Invoking ServicesManager

Custom Code for Invoking an Object Service from a Preprocessor, Postprocessor, Custom filter, Custom Servlet, or Java service
=============================================================================================================================

From Foundry V9 SP1, a new API and two interfaces are added to the **ServicesManager** framework to invoke object services from custom code. Invoking the Object services by using these interfaces ensures that pre and post processors of objects services are honored. Refer to the following sections for more information.

*   [Invoking ServicesManager](#invoking-servicesmanager-object-services)
*   [Invoking an Object Service from ServicesManager](#invoking-an-object-service-from-servicesmanager)
    

Invoking ServicesManager - Object Services
------------------------------------------

To invoke an object service from custom code, you must first instantiate the ServicesManager.

Below is the sample code to instantiate ServicesManager in Object Services Pre and Post Processors

```
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.api.processor.FoundryRequestChain;
import com.hcl.voltmx.middleware.api.processor.manager.FoundryRequestManager;
import com.hcl.voltmx.middleware.api.processor.manager.FoundryResponseManager;
import com.hcl.voltmx.middleware.common.objectservice.ObjectServicePostProcessor;
import com.hcl.voltmx.middleware.common.objectservice.ObjectServicePreProcessor;

public class ObjectPREPOST implements ObjectServicePreProcessor, ObjectServicePostProcessor {
  // Getting ServicesManager object from the PRE processor of the
  // Object services
  @Override
  public void execute(FoundryRequestManager foundryRequestManager,
      FoundryResponseManager foundryResponseManager, FoundryRequestChain foundryRequestChain)
      throws Exception {
    ServicesManager servicesManager = foundryRequestManager.getServicesManager();
  }
  // Getting ServicesManager object from the POST processor of the
  // Object services
  @Override
  public void execute(FoundryRequestManager foundryRequestManager,
      FoundryResponseManager foundryResponseManager) throws Exception {
     ServicesManager servicesManager = foundryRequestManager.getServicesManager();
  }
}

```

Below is the sample code to instantiate ServicesManager in Integration/Orchestration/Java Services Pre and Post Processors

```

import java.util.HashMap;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.common.DataPreProcessor2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;

public class IntegrationPREPOST implements DataPreProcessor2, DataPostProcessor2 {
  // Getting ServicesManager object from the PRE processor of the
  // Integration/Orchestration/JavaServices
  @Override
  public boolean execute(HashMap inputMap, DataControllerRequest request,
      DataControllerResponse response, Result result) throws Exception {
    ServicesManager servicesManager = request.getServicesManager();
    return true;
  }
  // Getting ServicesManager object from the POST processor of the
  // Integration/Orchestration/JavaServices
  @Override
  public Object execute(Result result, DataControllerRequest request,
      DataControllerResponse response) throws Exception {
    ServicesManager servicesManager = request.getServicesManager();
    return result;
  }
}
```

Below is the sample code to instantiate ServicesManager in Custom Filter

```

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.api.ServicesManagerHelper;
import com.hcl.voltmx.middleware.exceptions.MiddlewareException;
import com.hcl.voltmx.middleware.servlet.filters.IntegrationCustomFilter;

@IntegrationCustomFilter(filterOrder = 400, filterName = "CustomFilter", urlPatterns = {
    "/urlPatterns"})
public class CustomFilter implements Filter {
  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)
      throws IOException, ServletException {
    HttpServletRequest httpServletRequest = (HttpServletRequest)request;
    try {
      ServicesManager servicesManager = ServicesManagerHelper.getServicesManager();
    } catch (MiddlewareException e) {
      e.printStackTrace();
    }
  }
}
```

Invoking an Object Service from ServicesManager
-----------------------------------------------

From Foundry V9 SP1, a new API and two interfaces are added to the **ServicesManager framework** to invoke object services from custom code.

API Introduced in ServicesManager Interface

ObjectServiceInvokerBuilder getObjectServiceInvokerBuilder(OperationData) – This method will help to return the object of `ObjectServiceInvokerBuilder`

Interfaces to Invoke Object Services

*   `ObjectServiceInvokerBuilder`\- The builder interface build ObjectServiceInvoker to invoke the object services from the custom code.
*   `ObjectServiceInvoker`\- The interface to invoke object service from custom code.

The method involved in ObjectServiceInvokerBuilder

*   `ObjectServiceInvokerBuilder withHttpRequest(HttpServletRequest)` – HttpServletRequest is a mandatory parameter if object services are trying to invoke from PRE or POST processor of the object service.
*   `ObjectServiceInvokerBuilder withHttpResponse(HttpServletResponse)` – HttpServletResponse is a mandatory parameter if object services are trying to invoke from PRE or POST processor of the object service.
*   `ObjectServiceInvokerBuilder withODataParam(Map<String, String)` – This parameter is required if need to filter data while executing object service using SM and this is applicable only in case of GET and DELETE verbs.
*   `ObjectServiceInvokerBuilder withPayload(JsonObject)` - This parameter is required if need to create/update/delete while executing object service using SM and this is applicable only in case of CREATE, UPDATE and DELETE verbs.
*   `ObjectServiceInvokerBuilder withDCRRequest(DataControllerRequest)` – DataControllerRequest is a mandatory parameter if object services are trying to invoke from PRE or POST processor of the integration/Orchestration/Java service.
*   `ObjectServiceInvoker buildObjectService()` – This will return the object of ObjectServiceInvoker

The method involved in ObjectServiceInvoker

*   String `invokeServiceAndGetJson()` - Invokes the object service and returns the response as JSON.
*   String Result `invokeServiceAndGetResult()` - Invokes the object service and returns the response as Result object.

Steps to invoke Object Services using the ServicesManager

Let us assume that, you have a Object Service named “RetailBanking“ with an Object “Account“. Below section captures the steps involved in invoking GET operation of “Account” from a Post processor of integration service.

1.  Get the object of ServicesManager instance. For more details for getting ServiceManager instance in Custom code, refer to [Invoking a ServicesManager](#invoking-servicesmanager-object-services)

```

 @Override
  public Object execute(Result result, DataControllerRequest request,
      DataControllerResponse response) throws Exception {
    ServicesManager servicesManager = request.getServicesManager();
    return result;
  }
```

1.  By using the ServicesManager, build the OperationData bypassing the service information.

```

 OperationData opeartionData = servicesManager.getOperationDataBuilder()
        .withServiceId("RetailBanking")
        .withObjectId("Account").withOperationId("get").build();

```

1.  Using the ServicesManager Object, build the object of ObjectServiceInvokerBuilder bypassing OperationData object.

```

ObjectServiceInvokerBuilder objectServiceInvokerBuilder = servicesManager
        .getObjectServiceInvokerBuilder(opeartionData);
```

1.  Get the ObjectServiceInvoker once ObjectServiceInvokerBuilder is available.

```

    // Setting DataControllerRequest is mandatory in case Object service invoke
    // from the PRE/POST Integration/Orchestration/JavaService or PRE/POST of
    // JavaServices
    objectServiceRequestBuilder.withDCRRequest(request);
    objectServiceRequestBuilder.withHeaders(request.getHeaderMap());
    objectServiceRequestBuilder.withPayload(payload);
    objectServiceRequestBuilder.withODataParam(oDtaParam);
    ObjectServiceInvoker objectServcieInvoker = objectServiceRequestBuilder.buildObjectService();
```

1.  Invoke the object services once the ObjectServiceInvoker object is ready and get the final result in the form of result object or JSON String.

```

Result result = objectServcieInvoker.invokeServiceAndGetResult();
OR
String jsonResult = objectServcieInvoker.invokeServiceAndGetJson();
```

#### Sample Code and Examples

Below section captures sample code for various examples

**Scenario 1** - We have an Object Service named “RetailBanking“ with an Object “Account“. We need to invoke GET operation of “Account“ from Post processor of Integration /Orchestration/JavaServices

```

package com.hcl.voltmx.javaService.test;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.api.ObjectServiceInvoker;
import com.hcl.voltmx.middleware.api.ObjectServiceInvokerBuilder;
import com.hcl.voltmx.middleware.api.OperationData;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.common.DataPreProcessor2;
import com.hcl.voltmx.middleware.common.JavaService2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;
import com.hcl.voltmx.middleware.exceptions.MiddlewareException;

public class IntegrationPrePostProcessorWithJavaService
    implements DataPreProcessor2, DataPostProcessor2, JavaService2 {

  @Override
  public Object execute(Result result, DataControllerRequest request,
      DataControllerResponse response) throws Exception {
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "get", null, null);
    Result result1 = storageInvoker.invokeServiceAndGetResult();
    System.out.println("result1 : " + result1);
    return result1;
  }
  @Override
  public boolean execute(HashMap inputMap, DataControllerRequest request,
      DataControllerResponse response, Result result) throws Exception {
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "get", null, null);
    String jsonResult = storageInvoker.invokeServiceAndGetJson();
    System.out.println("jsonResult : " + jsonResult);
    return false;
  }
  @Override
  public Object invoke(String methodID, Object[] objectArray, DataControllerRequest request,
      DataControllerResponse response)
      throws Exception {
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "get", null, null);
    return storageInvoker.invokeServiceAndGetResult();
  }

  public static ObjectServiceInvoker getServiceInvokerFromJavaServiceORPREPOST(
      DataControllerRequest request, String serviceId, String objectId,
      String operation, JsonObject payload, Map<String, String> oDtaParam)
      throws MiddlewareException {
    ServicesManager servicesManager = request.getServicesManager();

    ObjectServiceInvoker objectServiceInvoker = getServiceInvoker(request, null,
        servicesManager,
        serviceId, objectId, operation, payload, oDtaParam);
    return objectServiceInvoker;
  }
  private static ObjectServiceInvoker getServiceInvoker(DataControllerRequest request,
      HttpServletResponse response, ServicesManager servicesManager, String serviceId,
      String objectId, String operation, JsonObject payload,
      Map<String, String> oDtaParam)
      throws MiddlewareException {
    OperationData opeartionData = servicesManager.getOperationDataBuilder()
        .withServiceId(serviceId).withObjectId(objectId).withOperationId(operation).build();
    ObjectServiceInvokerBuilder objectServiceRequestBuilder = servicesManager
        .getObjectServiceInvokerBuilder(opeartionData);
    // Setting DataControllerRequest is mandatory in case Object service invoke
    // from the PRE/POST Integration/Orchestration/JavaService or PRE/POST pf
    // JavaServices
    objectServiceRequestBuilder.withDCRRequest(request);
    objectServiceRequestBuilder.withHeaders(request.getHeaderMap());
    objectServiceRequestBuilder.withPayload(payload);
    objectServiceRequestBuilder.withODataParam(oDtaParam);
    ObjectServiceInvoker objectServcieInvoker = objectServiceRequestBuilder.buildObjectService();
    return objectServcieInvoker;
  }
}
```

**Scenarios 2** - Let us assume that we have a Storage Service named “RetailBanking“ with an Object “Account“ (with column “id“ and “name“) and operations are “create/update/delete“ and invoke the service with Payload from Integration/Orchestration/JavaServices/ObjectService,

> **_Note:_** Payload is applicable only in case of “create”, “update” and “delete” operation.

```

package com.hcl.voltmx.javaService.test;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.api.ObjectServiceInvoker;
import com.hcl.voltmx.middleware.api.ObjectServiceInvokerBuilder;
import com.hcl.voltmx.middleware.api.OperationData;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.common.DataPreProcessor2;
import com.hcl.voltmx.middleware.common.JavaService2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;
import com.hcl.voltmx.middleware.exceptions.MiddlewareException;

public class IntegrationPrePostProcessorWithJavaService
    implements DataPreProcessor2, DataPostProcessor2, JavaService2 {

  @Override
  public Object execute(Result result, DataControllerRequest request,
      DataControllerResponse response) throws Exception {
    JsonObject payload = new JsonObject();
    payload.addProperty("id", "32");
    payload.addProperty("name", "Recorded created");
    //create record by passing payload
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "create", payload, null);
    Result result1 = storageInvoker.invokeServiceAndGetResult();
    System.out.println("result1 : " + result1);
    return result1;
  }
  @Override
  public boolean execute(HashMap inputMap, DataControllerRequest request,
      DataControllerResponse response, Result result) throws Exception {
    JsonObject payload = new JsonObject();
    payload.addProperty("id", "32");
    payload.addProperty("name", "Recorded updated");
    //Update the record by passing payload
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "update", payload, null);
    String jsonResult = storageInvoker.invokeServiceAndGetJson();
    System.out.println("jsonResult : " + jsonResult);
    return false;
  }

  @Override
  public Object invoke(String methodID, Object[] objectArray, DataControllerRequest request,
      DataControllerResponse response)
      throws Exception {
    JsonObject payload = new JsonObject();
    payload.addProperty("id", "32");
    payload.addProperty("name", "Recorded updated");

    //Update the record by passing payload
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "delete", payload, null);
    return storageInvoker.invokeServiceAndGetResult();
  }

}
```

**Scenarios 3** - Let us assume that we have a Storage Service named “RetailBanking“ with an Object “Account“ (with column “id“ and “name“) and operations are “get/delete“ and invoke the services with oDataParam from Integration/Orchestration/JavaServices/ObjectService,

```

package com.hcl.voltmx.javaService.test;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.api.ObjectServiceInvoker;
import com.hcl.voltmx.middleware.api.ObjectServiceInvokerBuilder;
import com.hcl.voltmx.middleware.api.OperationData;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.common.DataPreProcessor2;
import com.hcl.voltmx.middleware.common.JavaService2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;
import com.hcl.voltmx.middleware.exceptions.MiddlewareException;

public class IntegrationPrePostProcessorWithJavaService
    implements DataPostProcessor2, JavaService2 {

  @Override
  public Object execute(Result result, DataControllerRequest request,
      DataControllerResponse response) throws Exception {
    Map<String, String> oDataParam = new HashMap<>();
    oDataParam.put("$filter", "id eq 2");
    //create record by passing payload
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "get", null, oDataParam);
    result = storageInvoker.invokeServiceAndGetResult();
    System.out.println("result : " + result);
    return result;
  }

  @Override
  public Object invoke(String methodID, Object[] objectArray, DataControllerRequest request,
      DataControllerResponse response)
      throws Exception {
    Map<String, String> oDataParam = new HashMap<>();
    oDataParam.put("$filter", "id gt 2");
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromJavaServiceORPREPOST(
        request, "RetailBanking", "Account", "delete", null, null);
    return storageInvoker.invokeServiceAndGetResult();
  }
}
```

> **_Note:_** ODataParam is applicable only in case of “get” and “delete” operation.

**Scenario 4** - Invoking Object Services using ServicesManager from the Object service PRE/POST processor. This is similar to the above code samples only difference here is to get ServicesManager instance with the help of FoundryRequestManager and mandatory parameters i.e. HttpServletRequest and HttpServletResponse will be changed.

```

package com.hcl.voltmx.javaService.test;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.api.ObjectServiceInvoker;
import com.hcl.voltmx.middleware.api.ObjectServiceInvokerBuilder;
import com.hcl.voltmx.middleware.api.OperationData;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.api.processor.FoundryRequestChain;
import com.hcl.voltmx.middleware.api.processor.manager.FoundryRequestManager;
import com.hcl.voltmx.middleware.api.processor.manager.FoundryResponseManager;
import com.hcl.voltmx.middleware.common.objectservice.ObjectServicePostProcessor;
import com.hcl.voltmx.middleware.common.objectservice.ObjectServicePreProcessor;
import com.hcl.voltmx.middleware.dataobject.Result;
import com.hcl.voltmx.middleware.exceptions.MiddlewareException;

public class ObjectServicePrePost implements ObjectServicePreProcessor, ObjectServicePostProcessor {

  @Override
  public void execute(FoundryRequestManager foundryRequestManager,
      FoundryResponseManager foundryResponseManager) throws Exception {
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromPrePostOfObjectService(
        foundryRequestManager, foundryResponseManager, "RetailBanking", "Account", "get", null,
        null);
    String jsonResult = storageInvoker.invokeServiceAndGetJson();
    System.out.println("jsonResult : " + jsonResult);
  }

  @Override
  public void execute(FoundryRequestManager foundryRequestManager,
      FoundryResponseManager foundryResponseManager, FoundryRequestChain foundryRequestChain)
      throws Exception {
    ObjectServiceInvoker storageInvoker = getServiceInvokerFromPrePostOfObjectService(
        foundryRequestManager, foundryResponseManager, "RetailBanking", "Account", "get", null,
        null);
    Result result = storageInvoker.invokeServiceAndGetResult();
    System.out.println("result : " + result);

  }

  private static ObjectServiceInvoker getServiceInvokerFromPrePostOfObjectService(
      FoundryRequestManager foundryRequestManager, FoundryResponseManager foundryResponseManager,
      String serviceId,
      String objectId, String operation, JsonObject payload,
      Map<String, String> oDtaParam)
      throws MiddlewareException {
    // Setting HttpServletRequest and HttpServletResponse are mandatory in case
    // Object service invoke
    // from the PRE/POST Object services
    HttpServletRequest request = foundryRequestManager.getHttpServletRequest();
    HttpServletResponse response = foundryResponseManager.getHttpServletResponse();

    ServicesManager servicesManager = foundryRequestManager.getServicesManager();

    ObjectServiceInvoker objectServiceInvoker = getServiceInvoker(request, response,
        servicesManager,
        serviceId, objectId, operation, payload,
        oDtaParam);
    return objectServiceInvoker;

  }

  private static ObjectServiceInvoker getServiceInvoker(HttpServletRequest request,
      HttpServletResponse response, ServicesManager servicesManager, String serviceId,
      String objectId, String operation, JsonObject payload,
      Map<String, String> oDtaParam)
      throws MiddlewareException {
    OperationData opeartionData = servicesManager.getOperationDataBuilder()
        .withServiceId(serviceId).withObjectId(objectId).withOperationId(operation).build();
    ObjectServiceInvokerBuilder objectServiceRequestBuilder = servicesManager
        .getObjectServiceInvokerBuilder(opeartionData);
    objectServiceRequestBuilder.withHttpRequest(request);
    objectServiceRequestBuilder.withHttpResponse(response);
    objectServiceRequestBuilder.withPayload(payload);
    objectServiceRequestBuilder.withODataParam(oDtaParam);
    ObjectServiceInvoker objectServcieInvoker = objectServiceRequestBuilder.buildObjectService();
    return objectServcieInvoker;
  }
}
```

**Scenario 5** - Invoke Object Services using ServicesManager from the CustomFilter This is similar to the above code only difference here is that getting ServicesManager instances with the help of ServicesManagerHelper.

```

package com.hcl.voltmx.custom;

import java.io.IOException;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.api.ObjectServiceInvoker;
import com.hcl.voltmx.middleware.api.ObjectServiceInvokerBuilder;
import com.hcl.voltmx.middleware.api.OperationData;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.api.ServicesManagerHelper;
import com.hcl.voltmx.middleware.exceptions.MiddlewareException;
import com.hcl.voltmx.middleware.servlet.filters.IntegrationCustomFilter;

@IntegrationCustomFilter(filterOrder = 400, filterName = "CustomFilter", urlPatterns = {
    "/JavaServiceInvoke/ExecuteStorageServiceWithSM000"})
public class CustomFilter implements Filter {

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)
      throws IOException, ServletException {
    HttpServletRequest httpServletRequest = (HttpServletRequest)request;
    HttpServletResponse httpServletResponse = (HttpServletResponse)response;
    ObjectServiceInvoker storageInvoker = null;
    try {
      storageInvoker = getServiceInvokerFromCustomFilter(httpServletRequest, httpServletResponse,
          "RetailBanking",
          "Account", "get", null, null);
      String jsonResult = storageInvoker.invokeServiceAndGetJson();
      System.out.println("jsonResult : " + jsonResult);

    } catch (MiddlewareException e) {
      e.printStackTrace();
    }
    filterChain.doFilter(request, response);
  }

  public static ObjectServiceInvoker getServiceInvokerFromCustomFilter(HttpServletRequest request,
      HttpServletResponse response,
      String serviceId,
      String objectId, String operation, JsonObject payload,
      Map<String, String> oDtaParam) throws MiddlewareException {
    ServicesManager servicesManager = ServicesManagerHelper.getServicesManager(request);
    ObjectServiceInvoker objectServiceInvoker = getServiceInvoker(request, response,
        servicesManager,
        serviceId, objectId, operation, payload, oDtaParam);
    return objectServiceInvoker;
  }

  private static ObjectServiceInvoker getServiceInvoker(HttpServletRequest request,
      HttpServletResponse response, ServicesManager servicesManager, String serviceId,
      String objectId, String operation, JsonObject payload,
      Map<String, String> oDtaParam)
      throws MiddlewareException {
    OperationData opeartionData = servicesManager.getOperationDataBuilder()
        .withServiceId(serviceId).withObjectId(objectId).withOperationId(operation).build();
    ObjectServiceInvokerBuilder objectServiceRequestBuilder = servicesManager
        .getObjectServiceInvokerBuilder(opeartionData);
    objectServiceRequestBuilder.withHttpRequest(request);
    objectServiceRequestBuilder.withHttpResponse(response);
    objectServiceRequestBuilder.withPayload(payload);
    objectServiceRequestBuilder.withODataParam(oDtaParam);
    ObjectServiceInvoker objectServcieInvoker = objectServiceRequestBuilder.buildObjectService();
    return objectServcieInvoker;
  }

  @Override
  public void init(FilterConfig arg0) throws ServletException {
  }

  @Override
  public void destroy() {
  }
}
```

> **_Note:_** There are two points to be noted that if the mandatory parameters are not provided then the service execution will fail.

**For example**,

*   If you try to invoke object service using ServicesManager from the PRE/POST processor of the Integration/orchestration/JavaService with DataControllerRequest as null , you would get below error.
```
Error occurred while executing object service [RetailBanking] using service manager as 
    mandatory parameters either HttpServletRequest or HttpServletResponse or 
    DataControllerRequest are missing or null.
```

*   If try to invoke object service using ServicesManager from the PRE/POST processor of the Object service with HttpServletRequest and HttpServletResponse as null, you would get below error.
```
Error occurred while executing object service [RetailBanking] using service manager as 
    mandatory parameters either HttpServletRequest or HttpServletResponse or 
    DataControllerRequest are missing or null.
```
