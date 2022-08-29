                         


Input and Output Parameters
---------------------------

Input parameters are the parameters that you pass to the service for use during a service call. Some of the services may not have input parameters. Input parameters are used when dynamic content is passed to the external data source.

Output parameters are the parameters that are fetched from the response of a service call. These are formatted according to the attributes you configure for the output before displaying on the device.

The service parameters have a scope and data type attached to them. While defining the input and output parameters for a service, you need to define the scope and the data type.

### Input Parameters

The following attributes are defined for **Input Parameters**:

1.  **ID**\- Unique identifier for a parameter.
2.  **Test Value** - The value to be used to test the service within the Service Definition Tool. This value is not the part of the final Service Definition file.
3.  **Scope** - The scope can be _request_ or _session._
    *   **request** - Indicates that the value has to be retrieved from the http request received from the mobile device.
    *   **session** - Indicates that the value has to be retrieved from the http session stored on the Volt MX Iris Application Server.
4.  **Datatype** - Type of the data. These datatypes are defined here and are used for mapping appropriately in the Mapping editor. It can belong to the following data types:
    *   **string** - Represents a combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit.
    *   **boolean** - Represents a value that can be either true or false.
    *   **number** - Represents an integer or a floating number.
    *   **collection** - Represents a group of data, also referred to as data set.
        
        This value is received from the client as a JSON string.
        
        > **_Important:_** Datatypes Boolean, number, and collection are not available in Java Services.
        
5.  **Encode** - _True_ or _False_. Specifies if the URL needs to be encoded or not. URL encoding converts the characters into a format that can be safely transmitted over the Internet. For example, if the word **New York Times** is to be passed as part of the URL, it would be encoded as **New_York_Time** when the encoding is set to True adhering to the HTML URL encoding standards.

### Output Parameters

The following attributes are defined for **Output Parameters**:

1.  **ID** - Unique name that we use in our code to access this value.
2.  **Xpath** - Xpath is applied for extracting the required elements from the response of the service call. XPath is used to navigate through elements and attributes in an XML document. For more information about _XPath_, see [http://www.w3schools.com/xpath/](http://www.w3schools.com/xpath/).
3.  **Scope** - The scope can be _response_ or _session._

*   **response** - Indicates that the parameter is included in the final response that is sent to the mobile device.
    
    > **_Note:_** Mark only those parameters that are represented on the device UI as response scope.
    
*   **session** - Indicates that the parameter gets stored in the session on the Volt MX Iris Application Server, that is, this parameter need not be included in the response that is sent to the mobile device.
    
    > **_Note:_** It is a best practice to mark the session tokens, apart from cookies returned from the data source, as session scope.
    

5.  **Datatype** - The following data types are available:
    *   **string** - Represents a combination of alpha-numeric and special characters. Supports all formats including UTF-8 and UTF-16 with no maximum size limit.
    *   **Boolean** - Represents a value that can be either true or false.
    *   **number** - Represents an integer or a floating number.
6.  **Collection ID** - Groups data elements under the specified parameter as a collection. Collection is created to assign grouped data to segment or a table in the UI.
7.  **Record ID** - Groups data elements under the specified parameter as a record. Typically we use this to provide metadata to the segment.
8.  **Format**\- Can be set to None, currency, number or date.
9.  **Format Value** - Standard for converting to the specified format.
    *   **Number** - for number format refer to **java.text.DecimalFormat**.
    *   **Currency** - for currency format refer to **java.text.DecimalFormat**
    *   **Date** - for date format refer to **java.text.SimpleDateFormat**
