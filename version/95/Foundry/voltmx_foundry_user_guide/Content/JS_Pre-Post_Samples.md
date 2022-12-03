                             

User Guide: [Integration](Services.md#integration) \> [Advanced Configurations](Advanced_Configurations.md) > [Sample Code for Preprocessor and Postprocessor](Java_Pre-Post_Samples.md) > JavaScript Sample Code for Preprocessor and Postprocessor

JavaScript Sample Code for Preprocessor and Postprocessor
=========================================================

PreProcessor
------------

*   **To add an input parameter:**
```
 // Sample JavaScript Code to add an input parameter for preprocessor  
      
    function fun1() {
        logger.debug('Tesing put method of HashMap');
        serviceInputParams.put('place', 'London');
        return true;
    }
    fun1();
```

*   **To add a new request parameter:**
```
 // Sample JavaScript Code to add a request parameter for preprocessor   
      
    function fun2() {
        logger.debug('Testing addRequestParam_ method of DataControllerRequest');
        request.addRequestParam_('newParam', 'newParamValue');
        return true;
    }
    fun2();
```
*   **To add an attribute to the session:**
```
 // Sample JavaScript Code to add an attribute to the session for preprocessor   
      
    function fun3() {
        logger.debug('Tesing getSession method of DataControllerRequest');
        var varSession = request.getSession();
        varSession.setAttribute('sessionAttributeName', 'sessionAttributeValue');
        return true;
    }
    fun3();
```
*   **To validate the input parameter before Service call:**
```
 // Sample JavaScript Code to validate the input before service call for preprocessor   
      
    function fun4() {
        var varUsername = serviceInputParams.get('username');
        var varPassword = serviceInputParams.get('password');
        if (varUsername == 'masterUser' && varPassword == 'password') {
            return true;
        }
        return false;
    }
    fun4();
```
*   **A function which uses most of the request APIs:**
```
 // Sample JavaScript Code for preprocessor   
      
    function fun5() {
        logger.debug('Testing addRequestParam_ method of DataControllerRequest');
        request.addRequestParam_('newParam', 'newParamValue');
          
        var varParam = request.getParameter('newParam');
        logger.debug('The Param Value is :' + varParam);
        logger.debug('Tesing containsKeyInRequest method of DataControllerRequest');
          
        var varContainsKey = request.containsKeyInRequest('newParam');
        logger.debug('Does it contain newParam :' + varContainsKey);
        logger.debug('Tesing containsKeyInRequest method of DataControllerRequest');
        request.setAttribute('newAtt', 'newAttValue');
          
        var varContainsAttribute = request.containsKeyInRequestContext('newAt');
        logger.debug('Does it contain newAtt :' + varContainsAttribute);
        logger.debug('Tesing getAttribute method of DataControllerRequest');
          
        var varGetAttribute = request.getAttribute('newAtt');
        logger.debug('The value of attribute newAtt is :' + varGetAttribute);
        logger.debug('Tesing getHeader method of DataControllerRequest');
          
        var varHeader = request.getHeader('Host');
        logger.debug('The value of Host header is :' + varHeader);
        logger.debug('Tesing GetParameterValues method of DataControllerRequest');
          
        var varGetParameterValues = request.getParameterValues('newParam');
        for (var i in varGetParameterValues) {
            logger.debug('The Array Values are :' + varGetParameterValues[i]);
        }
        logger.debug('Tesing getRemoteAddr method of DataControllerRequest');
          
        var varGetRemoteAddr = request.getRemoteAddr();
        logger.debug('The Remote Address is :' + varGetRemoteAddr);
        logger.debug('Tesing put method of HashMap');
        serviceInputParams.put('place', 'London');
        serviceInputParams.put('city', 'Madras');
        serviceInputParams.put('country', 'india');
        logger.debug('Tesing getSession method of DataControllerRequest');
          
        var varSession = request.getSession();
        varSession.setAttribute('sessionAttributeName', 'sessionAttributeValue');
    }
    fun5();
```
*   **For jsonToResult API**
```
 For jsonToResult APIfunction executePreProcessor() {
        var resultToModify = resultToJSON();
        resultToModify.record = {
          "message" : "Returned from Pre-processor",
          "status" : "rejected"
        };
         
        result = jsonToResult(resultToModify);
        return false;
    }
    
    executePreProcessor();
    
```

PostProcessor
-------------

*   **To add a new output parameter:**
```
 // Sample JavaScript Code to add a new output parameter for postprocessor   
      
    function fun5() {
        logger.debug('Tesing Adding a new Output Parameter');
        var newOutputParam = new com.hcl.voltmx.middleware.dataobject.Param();
        newOutputParam.setName('outputParamName');
        newOutputParam.setValue('outputParamValue');
        result.setParam(newOutputParam);
    }
    fun5();
```

*   **To retrieve an attribute added to the session (from preprocessor):**
```
 // Sample JavaScript Code to retrieve an attribute added to the session for postprocessor   
      
    function fun6() {
        var varSessionPost = request.getSession();
        var varRequestSessionAttribute = varSessionPost.getAttribute('sessionAttributeName');
        logger.debug('The Session Attribute Value is :' + varRequestSessionAttribute);
    }
    fun6();
```

*   **To add a custom device header:**
```
 // Sample JavaScript Code to add a custom device header for postprocessor   
      
    function fun7() {
        logger.debug('Tesing setDeviceHeaders method of DataControllerResponse');
        var varHashMap = new java.util.HashMap();
        varHashMap.put('newHeader', 'newHeaderValue');
        response.setDeviceHeaders(varHashMap);
    }
    fun7();
```

*   **To add Datasets to result:**
```
 // Sample JavaScript Code to add a dataset to result for postprocessor   
      
    function fun8() {
        var varDataSet = new com.hcl.voltmx.middleware.dataobject.Dataset();
        var varRecord = new com.hcl.voltmx.middleware.dataobject.Record();
        var varParam = new com.hcl.voltmx.middleware.dataobject.Param();
          
        varParam.setName('ParamName');
        varParam.setValue('ParamValue');
        varRecord.setParam(varParam);
        varDataSet.setRecord(varRecord);
        varDataSet.setId('DataResponse');
        var varDataSet1 = new com.hcl.voltmx.middleware.dataobject.Dataset();
        var varRecord1 = new com.hcl.voltmx.middleware.dataobject.Record();
        var varParam1 = new com.hcl.voltmx.middleware.dataobject.Param();
        varParam1.setName('ParamName1');
        varParam1.setValue('ParamValue1');
        varRecord1.setParam(varParam1);
        varDataSet1.setRecord(varRecord1);
        varDataSet1.setId('DataResponse1');
        var varList = new java.util.ArrayList();
        varList.add(varDataSet1);
        varList.add(varDataSet);
        result.setDataSets(varList);
    }
    fun8();
```

*   **A function which uses most of the response APIs:**
```
 // Sample JavaScript Code for postprocessor   
      
    function fun8() {
        var newOutputParam = new com.hcl.voltmx.middleware.dataobject.Param();
        newOutputParam.setName('outputParamName');
        newOutputParam.setValue('outputParamValue');
        result.setParam(newOutputParam);
        logger.debug('Tesing getAttribute method of DataControllerResponse');
        response.setAttribute('responseAttribute', 'responseAttributeValue');
          
        var varResponseAttribute = response.getAttribute('responseAttribute');
        logger.debug('The value of Response Attribute is :' + varResponseAttribute);
        logger.debug('Tesing getCharsetEncoding method of DataControllerResponse');
          
        var varCharsetEncoding = response.getCharsetEncoding();
        logger.debug('The value of getCharsetEncoding is :' + varCharsetEncoding);
        logger.debug('Tesing setDeviceHeaders method of DataControllerResponse');
          
        var varHashMap = new java.util.HashMap();
          
        varHashMap.put('newHeader', 'newHeaderValue');
        response.setDeviceHeaders(varHashMap);
        logger.debug('Tesing setStatusCode method of DataControllerResponse');
          
        varStatusCode = response.getStatusCode();
        logger.debug('The Current Status Code is :' + varStatusCode);
        response.setStatusCode(302);
          
        varStatusCode1 = response.getStatusCode();
        logger.debug('The Current Status Code is :' + varStatusCode1);
          
        var varSessionPost = request.getSession();
        var varRequestSessionAttribute = varSessionPost.getAttribute('sessionAttributeName');
        logger.debug('The Session Attribute Value is :' + varRequestSessionAttribute);
    }
    fun8();
```
    
*   To set custom httpStatusCode params through JavaScript postprocessor in result:
```
function changeHttpStatusCode() {
        result.getParamByName("httpStatusCode").setValue(300);
    } 
    changeHttpStatusCode();
```
    
*   To set custom opstatus params through JavaScript postprocessor in result:
```
function changeOpstatus() {
        result.getParamByName("opstatus").setValue(1);
    } 
    changeOpstatus();
```
    

*   **For resultToJSON API**
```
 function getCertificate_Postprocessor(){
        var resultToModify = resultToJSON();
    
        if(resultToModify.records &amp;&amp; resultToModify.records.length &gt; 0){
            var cert = resultToModify.records[0];
    
            resultToModify.certificate = [{
                "online_course": true,
                "doctor": {
                    "id": cert.doctor.doctor_id,
                    "email": cert.doctor.doctor_email,
                },
                "entity": {
                    "id": cert.entity.entity_id,
                    "email": cert.entity.entity_email,
                    "doc_num": cert.entity.entity_doc_num,
                }
            }];
             
            return resultToModify;
        }
    }
    
    getCertificate_Postprocessor();
    
```
