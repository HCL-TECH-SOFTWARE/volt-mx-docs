                              

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

### Sample DataPreProcessor2 to append input params to the request

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
### Sample Prerocessor to check the Header values

The following is a sample code for check the Header values.

```
import java.util.HashMap;

import com.hcl.voltmx.middleware.common.DataPreProcessor2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Result;

public class PreProcessorGetHeader implements DataPreProcessor2 {
	@Override
	public boolean execute(HashMap arg0, DataControllerRequest req, DataControllerResponse arg2, Result arg3)
			throws Exception {
		//Getting the Header value using the key
		 String userAgent = req.getHeader("X-User-Agent");
		 // Checking the value then returning the boolean. 
		 if ("mobile".equals(userAgent)) {
	            return true;
	        } else {
	            return false;
	        }
		
	}
}

```


### Sample DataPostProcessor to modify the results returned from the service

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
### Sample PostProcessor to fetch all configurable server parameters and add them to the result Dataset

The following PostProcessorGetAllConfigurableParameters class is to fetch all configurable server parameters and add them to the result Dataset.

```
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

import com.hcl.voltmx.middleware.api.ConfigurableParametersHelper;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Dataset;
import com.hcl.voltmx.middleware.dataobject.Param;
import com.hcl.voltmx.middleware.dataobject.Record;
import com.hcl.voltmx.middleware.dataobject.Result;

public class PostProcessorGetAllConfigurableParameters implements DataPostProcessor2 {

	public Object execute(Result arg0, DataControllerRequest arg1,DataControllerResponse arg2) throws Exception {
		Record rd = new Record();
		// Retrieve the ServicesManager from the request.
		ServicesManager sm = arg1.getServicesManager();
		// Get the ConfigurableParametersHelper from the ServicesManager.
		ConfigurableParametersHelper paramHelper = sm.getConfigurableParametersHelper();
		Map<String, String> allSerPro = paramHelper.getAllServerProperties();
		for(Map.Entry<String, String> entry : allSerPro.entrySet()) {
			String key = entry.getKey();
			String value = entry.getValue();
			rd.addParam(new Param(key, value, "string"));
		}
		Dataset ds = new Dataset();
		ArrayList<Record> rds = new ArrayList<Record>();   
		rds.add(rd);
		ds.addAllRecords((Collection)rds);
		arg0.addDataset(ds);
		return arg0;
	}
}
```
### Sample PostProcessor is to fetch a specific configurable server parameter with Key and add them to the result Dataset

The following PostProcessorGetConfigurableParameterWithKey class is to fetch a specific configurable server parameter with Key and add them to the result Dataset.

```
import java.util.ArrayList;
import java.util.Collection;

import com.hcl.voltmx.middleware.api.ConfigurableParametersHelper;
import com.hcl.voltmx.middleware.api.ServicesManager;
import com.hcl.voltmx.middleware.common.DataPostProcessor2;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.dataobject.Dataset;
import com.hcl.voltmx.middleware.dataobject.Param;
import com.hcl.voltmx.middleware.dataobject.Record;
import com.hcl.voltmx.middleware.dataobject.Result;

public class PostProcessorGetConfigurableParameterWithKey implements DataPostProcessor2 {

	public Object execute(Result arg0, DataControllerRequest arg1, DataControllerResponse arg2) throws Exception {
		Record rd = new Record();
		ServicesManager sm = arg1.getServicesManager();
        // Get the ConfigurableParametersHelper from the ServicesManager.
		ConfigurableParametersHelper paramHelper = sm.getConfigurableParametersHelper();
        // Retrieve the value of the specific server property "encryption".
		String myServerParam = paramHelper.getServerProperty("encryption");
		rd.addParam(new Param("encryption", myServerParam, "string"));
		Dataset ds = new Dataset();
		ArrayList<Record> rds = new ArrayList<Record>();
		rds.add(rd);
		ds.addAllRecords((Collection) rds);
		arg0.addDataset(ds);
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
