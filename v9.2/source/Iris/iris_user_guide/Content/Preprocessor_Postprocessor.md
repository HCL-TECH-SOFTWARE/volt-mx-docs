                         


Preprocessors and Postprocessors
--------------------------------

A preprocessor is a component that is invoked before passing the data to the external data source. This enables the developer to include any business logic on the data before forwarding the request to the external data source.

A postprocessor is a component invoked after the data is received from the external data source but before that data is returned to the mobile device. This enables the developer to include any business logic on the data before sending the response to the mobile device.

The logic, in both cases, may include formatting the data elements, removing them, or logging them (for diagnostics purposes). As custom Java classes, preprocessor and postprocessor implement the `com.hcl.voltmx.middleware.common.DataPreProcessor` and `com.hcl.voltmx.middleware.common.DataPostProcessor` Java interfaces respectively. You need to implement and load these libraries before using them.

> **_Important:_** The preprocessor or postprocessor name must start with `com.voltmx` or `com.hcl`.

Both preprocessors and postprocessors can perform the following tasks on the data that is passed to a service, or data that is retrieved from a service call:

*   Filter the data.
*   Change the format of the data.
*   Add or delete data.

If you have a preprocessor defined in a service call, the preprocessor library is invoked first before making the service call.

You can browse and select the preprocessor or postprocessor libraries in the Service Definition Editor for all the types of services.

> **_Note:_** Invoking a preprocessor or a postprocessor within any type of service is optional, depending on the needs of your application.

### Best Practices

In writing preprocessors and postprocessors, it is recommended that you follow these best practices:

*   For logging, use log4j statements instead of System.out.println() statements.
*   Wrap the debug statements with the log.isDebugEnabled() method. For example,
```
if (logger.isDebugEnabled()) {
            ...logger.debug("printing debug info")
    }
    
```

### Sample Preprocessor

The following is a sample preprocessor file.

```
import java.util.HashMap;
import org.apache.log4j.Logger;
import com.hcl.voltmx.middleware.common.DataPreProcessor;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.dataobject.Result;
import com.hcl.voltmx.middleware.session.Session;
public class TestPreProcessor implements DataPreProcessor {
        ...public boolean execute(HashMap hm, DataControllerRequest dcRequest, Result result) throws Exception
        ... {
                ......... //Write application logic here  
            ......... // if true is returned then service call and post processor are invoked. If false is returned, then service call and post processor are not invoked.  
            ......
            return true
                ...
    }
}

```

### Sample Postprocessor

The following is a sample postprocessor file.

```
import java.util.ArrayList;
import org.apache.log4j.Logger;
import com.hcl.voltmx.middleware.common.DataPostProcessor;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.dataobject.Param;
import com.hcl.voltmx.middleware.dataobject.Result;
public class TestPostProcessor implements DataPostProcessor {
        ...public Object execute(Result results, DataControllerRequest dcRequest)
        ... {
                ...... //Write application logic here to modify the results returned from the service  
            ......
                ...... // return Result object here  
            ...
            return results;
                ...
    }
}

```
