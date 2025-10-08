
JavaScript API SDK Docs
=======================


  <table>
    <tbody>
    <tr><td><h2 style="text-decoration:underline;">JavaScript Preprocessor and Postprocessor</h2></td></tr>
    <tr>
      <td>
            <p>Based on the interface, the preprocessors and postprocessors implement the following objects:<br/> <code> &lt;serviceInputParams&gt; </code>, <code> &lt;request&gt; </code>, <code> &lt;response&gt; </code> and <code> &lt;result&gt; </code>.</p>
            <p> VoltMX Foundry supports modifying the result object as JSON object in JavaScript. Two new APIs, <b>resultToJSON</b> and <b>jsonToResult</b> in <b>JavaScript</b>.</p>
            <ul><li>
            For <b>Postprocessor</b>, you must call <b>resultToJSON</b> API which converts result object to JSON object. You can modify the result object as a string. For sample JavaScript code, refer to <a href="JS_Pre-Post_Samples.html#resultToJSONAPI" target="_blank">Sample code for <b>Postprocessor</b></a>.
            </li><li>
            For <b>Preprocessor</b>, you must call <b>resultToJSON</b> API which returns JSON object. You can use the JSON object to modify the result as JSON and reset the result using <b>jsonToResult</b> API. For sample JavaScript code, refer to <a href="JS_Pre-Post_Samples.html#jsontoResultAPI" target="_blank">Sample code for <b>Preprocessor</b></a>.
            </li></ul>
            <p>You can use these objects and their corresponding methods directly in JavaScript code.For a sample JavaScript code, refer to <a href="JS_Pre-Post_Samples.html">JavaScript Sample Code for Preprocessor and Postprocessor</a>.</p>            
            <blockquote><b><i>Note:</i></b> For details on Foundry Javascript for preprocessor and postprocessor, refer to <a href="../../../javascript_docs_apis/jsdocs/index.html"><code>javascript_docs_apis</code></a></blockquote>
            <h3>Monaco Editor Enhancement</h3>
            <li>Changed Pre and Post Processor editor from CodeMirror to Monaco (Monaco is the code editor used in Visual Studio).</li>
            <li>Added new JavaScript APIs for commonly used middleware API Objects to use them in JavaScript friendly way and added samples and Intellisense support for the same.</li>
           <li>Enhanced the editor UI so that the users can access JavaScript Samples from the editor.</li>
      </td>
    </tr>
    </tbody>
    </table>
    
  
The following steps allows you to further filter the data received from a service call.

*  Under the **Custom Code Invocation**, follow these steps:  

    * Under **Preprocessor**, configure one of the following:
         
        *   Select **JavaScript** to open a text box. Here, you can write custom JavaScript code for the preprocessor.
            
            **JavaScript Code Validation for the Preprocessor:** You can validate your JavaScript Code for the preprocessor before saving an operation. To validate the JavaScript code, click the Validate icon in the JavaScript code text box for the preprocessor.
            <br />
            ![](Resources/Images/JSValidate.png)
            
            **The following are different scenarios that occur when you validate the JavaScript code for the Preprocessor:**
            
            *   If you click **Validate**, and if the JavaScript code has **no errors**, the Validate Successful message appears. You can save the operation.
            *   If you click **Validate**, and if the JavaScript code **has errors**, the **Error** message dialog is displayed with a **Download** link to the validation results. When you click **Download**, a .txt file with the validation results will be downloaded to your local system. In this case you must provide a valid JavaScript code, validate the updated code, and only then you can save the operation.
                
                > **_Important:_** If you have validated the JavaScript code and found errors, the Console does not allow you to save the operation.
                
            *   If you do not want to validate the JavaScript code for the Preprocessor, and want to save the operation, do not click **Validate**.  

    *   Under **Postprocessor**, configure one of the following:
        
        
        *   Select **JavaScript** to open a text box. Here, you can write custom JavaScript code for the postprocessor.
            
            **JavaScript Code Validation for the Postprocessor:** You can validate your JavaScript Code for the postprocessor before saving an operation. To validate the JavaScript code, click the Validate icon in the JavaScript code text box for the postprocessor.
            <br />
            ![](Resources/Images/JSValidate.png)


            **The following are different scenarios that occur when you validate the JavaScript code for Postprocessor:**
            
            *   If you click **Validate**, and if the JavaScript code has **no errors**, the Validate Successful message appears. You can save the operation.
            *   If you click **Validate**, and if the JavaScript code **has errors**, the **Error** message dialog is displayed with a **Download** link to the validation results. When you click **Download**, a .txt file with the validation results will be downloaded to your local system. In this case you must provide a valid JavaScript code, validate the updated code, and only then you can save the operation.
                
                > **_Important:_** If you have validated the JavaScript code and found errors, the Console does not allow you to save the operation.
                
            *   If you do not want to validate the JavaScript code for the Postprocessor, and want to save the operation, do not click **Validate**.  


