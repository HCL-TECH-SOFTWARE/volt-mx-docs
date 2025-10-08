                              

User Guide: [Integration](Services.md#integration) \> [Advanced Configurations](Advanced_Configurations.md) > Java Sample Code for Preprocessor and Postprocessor

Sample Code for Preprocessor and Postprocessor
==============================================

Java Sample Code for Preprocessor and Postprocessor
---------------------------------------------------

### Sample DataPreProcessor

The following is a sample DataPreProcessor file:

```
 import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.swing.text.html.HTMLDocument.Iterator;

import org.apache.log4j.Logger;

import com.hcl.voltmx.middleware.common.DataPreProcessor;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;
import com.hcl.voltmx.middleware.session.Session;

public class sampleDataPreProcessor implements DataPreProcessor {

    @Override
    public boolean execute(HashMap arg0, DataControllerRequest arg1, Result arg2)
    throws Exception {

        //Write application logic here				
        // if true is returned then service call and post processor are invoked. If false is returned, then service call and post processor are not invoked.
        return true;
    }
}
```

### Sample DataPreProcessor2

The following is a sample DataPreProcessor2 file:

```
 package jsoncustjar;
import java.util.HashMap;
import java.util.Map;

import com.hcl.voltmx.middleware.common.DataPreProcessor2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;

public class DigitePreProcessor implements DataPreProcessor2 {

    @Override
    public boolean execute(HashMap arg0, DataControllerRequest arg1,
        DataControllerResponse arg2, Result arg3) throws Exception {

        System.out.println("Pre-Processor started");

        // Below sample code is to append input params to the request

        if (arg0.get("DigiteLoginPwd") == null) {
            arg0.put("DigiteLoginPwd", "mypassword");
            System.out.println("Added DigiteLoginPwd to Map");

        }

        String selectQuery = (String) arg0.get("$select");

        //some 

        arg0.put("select", "$select=" + selectQuery);

        System.out.println("Pre-Processor ended");

        return true;
    }
}
```

### Sample DataPostProcessor

The following is a sample DataPostProcessor file:

```
 import com.hcl.voltmx.middleware.common.DataPostProcessor;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Param;
import com.hcl.voltmx.middleware.dataobject.Result;

public class sampleDataPostProcessor implements DataPostProcessor {

    @Override
    public Object execute(Result arg0, DataControllerRequest arg1)
    throws Exception {

     // Write application logic here to modify the results returned from the service

     // return Result object here
        return arg0;
    }

}
```

### Sample DataPostProcessor2

The following is a sample DataPostProcessor2 file:

```
 package jsoncustjar;

import java.util.HashMap;
import java.util.Map;

import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;

public class JSONPostProcessor implements DataPostProcessor2 {
    @Override
    public Object execute(Result arg0, DataControllerRequest arg1,
        DataControllerResponse arg2) throws Exception {
        Map <String, String>  map = new HashMap <String, String> ();
        map.put("CustHeader", "From-PostProc");
        arg2.setDeviceHeaders(map);
        return arg0;
    }
}
```

> **_Important:_** When an integration service is used in an orchestration service (sequential,concurrent and looping services), and if the integration service has a postprocessor, then the `opstatus param` field from the **Result** (first argument of the execute method) object should not be removed in the postprocessor.
