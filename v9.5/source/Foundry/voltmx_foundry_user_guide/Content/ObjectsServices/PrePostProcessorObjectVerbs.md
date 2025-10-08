## <a name="PrePostProcessorObjectVerbs"></a>Custom Code Invocation for Pre and Post Processor for Object Verbs

You can add pre and post processing logic to services to modify the request inputs. When you test, the services details of various stages in the service execution are presented to you for better debugging. All options in the Advanced section are optional. For more details, refer to [Preprocessor and Postprocessor](../Java_Preprocessor_Postprocessor_.md).

*   <a name="Pre_Post_Processor_Objects"></a>**Custom Code Invocation**<span style="font-weight: normal;">section appears. Configure the parameters for the preprocessor and postprocessor to filter the request and response objects for your business requirements.</span> <madcap:conditionaltext madcap:conditions="Default.V8EASScreens"><span style="font-weight: normal;">You can specify the Java class name for preprocessor and postprocessor in their corresponding text boxes.</span></madcap:conditionaltext> <span style="font-weight: normal;"></span><madcap:conditionaltext madcap:conditions="Default.V9P2"><span style="font-weight: normal;">You can specify multiple preprocessors and postprocessors. This is supported for integration/Orchestration services and Object services.</span></madcap:conditionaltext>

    ![](../Resources/Images/CustomCode-Objects.png)

    To invoke preprocessor and postprocessor, you must **import a valid JAR file** while creating an object service. The corresponding jars have to be uploaded to the Foundry console under the [**Advanced** tab in the object service definition](../ObjectsServices/Objectservices_Stage1.md#Custom_JAR-Objects) service definition.

*   <span style="text-decoration: none;">Java Preprocessor and Postprocessor</span> <span style="font-weight: normal;">- The preprocessor and postprocessor are Java classes that implement</span> ObjectServicePreProcessor <span style="font-weight: normal;">and</span> ObjectServicePostProcessor <span style="font-weight: normal;">interfaces. A developer can write custom code in the</span> execute <span style="font-weight: normal;">method of the preprocessor or postprocessor class.</span>

    *   Under the **Custom Code Invocation**, follow these steps:
        1.  Under **Preprocessor**, configure the following:
            *   Select **Java**, and in the **Class** text box, enter the preprocessor class. This step enables a developer to include any business logic on the data before sending the response to a mobile device.

            *   For **Java**, you can configure multiple Preprocessors. This is supported for Integration/Orchestration services and Object services. If you have defined your logic for multiple preprocessors in the uploaded JAR file in the service definition, you can then select the available one or other preprocessors. You can arrange the selected pre-processors to be executed in the desired order during the operation call.

                <madcap:dropdown><madcap:dropdownhead style="font-weight: bold;">Use Case  
                </madcap:dropdownhead><madcap:dropdownbody>

                <span style="font-weight: normal;">When customers have a large amount of custom code, the maintainability of the code becomes an issue. The issue becomes much more complicated when multiple stakeholders working on custom code. In such cases, the custom code can be split into multiple pre/post processors so that stakeholders can work on their respective modules. This increases the upgradability and maintainability of the custom code.  
                </span>

                </madcap:dropdownbody></madcap:dropdown>

                Select **Java**, and from the **Class** list, select a preprocessor class. You can select one or more classes.  
                This step enables a developer to include any business logic on the data before sending the response to a mobile device.  

        2.  Under **Postprocessor**, configure the following:
            *   Select **Java**, and in the **Class** text box, enter the postprocessor class. This step enables a developer to include any business logic on the data before forwarding the request to the external data source.
            *   For **Java**, you can configure multiple Postprocessors. This is supported for Integration/Orchestration services and Object services. If you have defined your logic for multiple postprocessors in the uploaded JAR file in the service definition, you can select the available one or other post-processors. You can arrange the selected post-processors to be executed in the desired order during the operation call.  
                **<madcap:dropdown><madcap:dropdownhead>Use Case  
                </madcap:dropdownhead><madcap:dropdownbody>

                <span style="font-weight: normal;">When customers have a large amount of custom code, the maintainability of the code becomes an issue. The issue becomes much more complicated when multiple stakeholders working on custom code. In such cases, the custom code can be split into multiple pre/post processors so that stakeholders can work on their respective modules. This increases the upgradability and maintainability of the custom code.  
                </span>

                </madcap:dropdownbody></madcap:dropdown>**  
                Select **Java**, and from the **Class** list, select a postprocessor class. You can select one or more classes.  
                This step enables a developer to include any business logic on the data before sending the response to a mobile device.You can rearrange the order of the classes to be executed, if required.  

*   **Preprocessor and Postprocessor interfaces in Object services**

    **ObjectServicePreProcessor**

    Implement this interface and write your custom preprocessor logic by overriding execute method. You are provided with _FoundryRequestManager_, _FoundryResponseManager_ and _FoundryRequestChain_ as method arguments.

    <pre><code>public interface ObjectServicePreProcessor {  
    void execute(FoundryRequestManager foundryRequestManager,  
    FoundryResponseManager foundryResponseManager, FoundryRequestChain foundryRequestChain)  
    throws Exception;  
    }</code></pre>

    **Method arguments**:  

    **_FoundryRequestManager_**:  <span style="font-weight: normal;">This argument specifies the different types of handlers to operate on request related information.</span>
    **_FoundryResponseManager_**: <span style="font-weight: normal;">This argument specifies the different types of handlers to operate on response related information.</span>  
    **_FoundryRequestChain_:**: <span style="font-weight: normal;">This argument specifies a chain similar to servlet _FilterChain_ used to control the request flow.</span>

    For a sample Java class code for ObjectServicePreProcessor, refer to [Java Sample Code for Preprocessor - Object services](../Java_Pre-Post_Samples_Objects.md#Sample).

    **ObjectServicePostProcessor**

    Implement this interface and write your custom postprocessor logic by overriding execute method. You are provided with _FoundryRequestManager and_ _FoundryResponseManager_ as method arguments.

    <pre><code>
    public interface ObjectServicePostProcessor {  
    void execute(FoundryRequestManager foundryRequestManager,  
    FoundryResponseManager foundryResponseManager)throws Exception;  
    }
    </code></pre>  


    **Method arguments**:  

    **_FoundryRequestManager_** : <span style="font-weight: normal;">This argument specifies the different types of handlers to operate on request related information.</span>  
    **_FoundryResponseManager_ :** <span style="font-weight: normal;">This argument specifies the different types of handlers to operate on response related information.</span>

    For a sample Java class code for ObjectServicePostProcessor, refer to [Java Sample Code for Preprocessor - Object services](../Java_Pre-Post_Samples_Objects.md#Sample2). 

    Limitations of custom code invocation in Object services are as follows:  

    -  Custom code is not invoked when Bulk Sync V2 APIs are in use.
    -  Custom code is not invoked when orchestration services which make use of Object services are in use.
    -  Custom code is not invoked when we use Foundry console test API.

    **For <madcap:variable name="MyVariables.Quantum">Cloud / For on-premises:</madcap:variable>** Runtime jars to write custom code can be downloaded from Admin console. In the **Downloads** section, you can download the middleware jars as a zip file. Here the `middleware-api.jar` will have all the classes related to custom code.

    For details on middleware APIs for preprocessor and postprocessor,  
    contact refer to [http://docs.voltmx.com/voltmxlibrary/integration/MiddlewareAPI/index.html](../../../../java_docs_apis/MiddlewareAPI/index.html)

    You can enable the application for offline synchronization, publish the application, and then provide the code that <madcap:variable name="MyVariables.Quantum">Foundry generates to a mobile application developer.</madcap:variable>

Refer to [Advanced Configurations for Verbs](../ObjectsServices/Objectservices_Stage3.md#Advanced) section for all the supported Advanced Configurations for Obects Service Verbs.