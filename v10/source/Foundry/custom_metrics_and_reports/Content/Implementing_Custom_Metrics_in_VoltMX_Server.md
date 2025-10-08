                            



Implementing Custom Metrics in Volt MX Server
---------------------------------------------

> **_Important:_** Familiarize yourself with [Custom Metrics APIs](CustomMetricsAPIs.md) before you proceed with this section.

You can implement Custom Metrics in Volt MX Server using java classes defined for the application such as preprocessor and postprocessor class for services, or java service class.

Usage class allows you to easily add/edit custom metrics from the server code without affecting the client logic.

**Pre-requisites**:

*   Metrics defined for the application in the management console.
*   Java programming knowledge.
    

To implement metrics in Volt MX Server, follow these steps:

1.  In Volt MX Iris, navigate to and open the service you want to set metrics for.
2.  Do one of the following
    
    1.  If your preprocessor  and/or post processor class exists, define the logic for sending custom metrics in them.
    2.  If you do not have preprocessor  and post processor classes, create them with custom metrics logic.
    
    See the following examples:  
    
    Preprocessor
    
```
package com.hcl.voltmx.middleware.connectors.logservice;
    
    import java.util.Date;
    import java.util.HashMap;
    
    import com.hcl.voltmx.middleware.common.DataPreProcessor;
    import com.hcl.voltmx.middleware.controller.DataControllerRequest;
    import com.hcl.voltmx.middleware.dataobject.Result;
    import com.hcl.voltmx.middleware.metrics.VoltMXCustomMetrics;
    import com.hcl.voltmx.middleware.metrics.VoltMXCustomMetricsDataSet;
    
    public class CustomMetricsPreProcessor1 implements DataPreProcessor
    {
    	private static final String C_CUSTOM_METRICS = "customMetrics";
    
    	@Override
    	public boolean execute(HashMap inputMap, DataControllerRequest request, Result result)
    	throws Exception
    	{
    		VoltMXCustomMetrics kmetrics = new VoltMXCustomMetrics();
    		VoltMXCustomMetricsDataSet metricsDataset = new VoltMXCustomMetricsDataSet();
    		metricsDataset.setMetricsString("Product Name", "DellVostro");
    		metricsDataset.setMetricsBoolean("On Sale", true);
    		metricsDataset.setMetricsLong("Product ID", 395923);
    		metricsDataset.setMetricsDouble("Product Price", 399.90);
    		
    		Date now = new Date();
    		metricsDataset.setMetricsDate("On Sale Date", now);
    		metricsDataset.setMetricsTimestamp("Promo start time",
    		"2012-10-10", "yyyy-MM-dd");
    		metricsDataset.setMetricsTimestamp("Promo end time",
    		"2012-10-10 17:00:00");
    		
    		VoltMXCustomMetricsDataSet metricsDataset1 = new VoltMXCustomMetricsDataSet();
    		metricsDataset.setMetricsString("Product Name", "LennovoLattitude");
    		metricsDataset.setMetricsBoolean("On Sale", true);
    		metricsDataset.setMetricsLong("Product ID", 395924);
    		metricsDataset.setMetricsDouble("Product Price", 349.90);
    		metricsDataset.setMetricsDate("On Sale Date", now);
    		kmetrics.addCustomMetrics(metricsDataset);
    		kmetrics.addCustomMetrics(metricsDataset1);
    		request.setAttribute(C_CUSTOM_METRICS,
    		kmetrics);
    		return true;
    	}
    }
```
    
    Postprocessor
    
```
package com.hcl.voltmx.middleware.connectors.logservice;
    
    import java.util.List;
    import org.apache.log4j.Logger;
    
    import com.hcl.voltmx.middleware.common.DataPostProcessor;
    import com.hcl.voltmx.middleware.controller.DataControllerRequest;
    import com.hcl.voltmx.middleware.dataobject.Result;
    import com.hcl.voltmx.middleware.metrics.VoltMXCustomMetrics;
    import com.hcl.voltmx.middleware.metrics.VoltMXCustomMetricsDataSet;
    
    public class CloudPostProcessor implements DataPostProcessor
    {
    	private static final Logger LOG = Logger.getLogger(CloudPostProcessor.class);
    	private static final String C_CUSTOM_METRICS = "customMetrics";
    
    	@Override
    	public Object execute(Result arg0, DataControllerRequest arg1) throws Exception
    	{
    	
    	if (null != arg1.getAttribute(C_CUSTOM_METRICS))
    	{
    	VoltMXCustomMetrics objVoltMXCustomMetrics = (VoltMXCustomMetrics)arg1.getAttribute(C_CUSTOM_METRICS);
    	String metricsJson = objVoltMXCustomMetrics.getCustomMetricsJSON();
    	LOG.debug("::VOLTMX METRICS JSON IN POST PROCESSOR BEFORE MODIFICATIONS== " + metricsJson);
    	List<VoltMXCustomMetricsDataSet> cusMetDataSetList = objVoltMXCustomMetrics.getCustomMetrics();
    	LOG.debug(":::::: LIST SIZE BEFORE CLEAR:::::" +
    	cusMetDataSetList.size());
    	objVoltMXCustomMetrics.clearCustomMetrics();
    	LOG.debug(":::::: LIST SIZE AFTER CLEAR:::::" +
    	cusMetDataSetList.size());
    	
    	if (cusMetDataSetList.size() > 0)
    	{
    		VoltMXCustomMetricsDataSet objVoltMXCustomMetricsDataSet = (VoltMXCustomMetricsDataSet)cusMetDataSetList.get(0);
    		cusMetDataSetList.remove(0);
    		String key1value = objVoltMXCustomMetricsDataSet.get("Product Name").toString();
    		LOG.debug("::VOLTMX METRICS VALUE @ GET METHOD== Dell Vostro");
    		objVoltMXCustomMetricsDataSet.remove("Promo end time");
    		objVoltMXCustomMetricsDataSet.remove("Product Name");
    		objVoltMXCustomMetricsDataSet.setMetricsString("Product Name", "modified value");
    		cusMetDataSetList.add(0, objVoltMXCustomMetricsDataSet);
    	}
    	
    	for (VoltMXCustomMetricsDataSet dataSet : cusMetDataSetList)
    	{
    		objVoltMXCustomMetrics.addCustomMetrics(dataSet);
    	}
    
    	LOG.debug(":::::: FINAL CUSTOM METRICS LIST :::::" +
    	objVoltMXCustomMetrics.getCustomMetrics());
    	arg1.setAttribute(C_CUSTOM_METRICS,
    	objVoltMXCustomMetrics);
    	}
    
    	return arg0;
    	}
    }
    
```
    
    > **_Note:_** If you have created preprocesser and postprocessor classes, enter those details in their respective text boxes.
    
    You can add custom metrics through custom code by using the **Services Manager** API. This API can be used for all services (Integration, Orchestration, and Object services).
    
    > **_Note:_** The support to add custom metrics by using the earlier method still exists in the request attribute. The earlier method is supported only for Integration Services.
    
```
package com.voltmx.middleware.javaTestUtilites;
    
    import java.text.DateFormat;
    import java.text.SimpleDateFormat;
    import java.util.Date;
    
    import com.hcl.voltmx.middleware.common.JavaService2;
    import com.hcl.voltmx.middleware.controller.DataControllerRequest;
    import com.hcl.voltmx.middleware.controller.DataControllerResponse;
    import com.hcl.voltmx.middleware.dataobject.Result;
    import com.hcl.voltmx.middleware.metrics.VoltMXCustomMetricsDataSet;
    
    public class CustomMetricsJavaService implements JavaService2 {
    
        @Override
        public Object invoke(String methodID, Object[] inputArray, DataControllerRequest request,
            DataControllerResponse response) throws Exception {
            VoltMXCustomMetricsDataSet metricsDataset = new VoltMXCustomMetricsDataSet();
    
            metricsDataset.setMetricsString("Product Name", "Dell Vostro");
    
            metricsDataset.setMetricsBoolean("On Sale", true);
    
            metricsDataset.setMetricsLong("Product ID", 395923);
    
            metricsDataset.setMetricsDouble("Product Price", 399.90);
    
            DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String dateString = "2018-04-17";
            Date now = sdf.parse(dateString);
    
            metricsDataset.setMetricsDate("On Sale Date", now);
    
            metricsDataset.setMetricsTimestamp("Promo start time", "2012-10-10", "yyyy-MM-dd");
    
            metricsDataset.setMetricsTimestamp("Promo end time", "2012-10-10 17:00:00");
    
            VoltMXCustomMetricsDataSet metricsDataset1 = new VoltMXCustomMetricsDataSet();
    
            metricsDataset1.setMetricsString("Product Name", "Lennovo Lattitude");
    
            metricsDataset1.setMetricsBoolean("On Sale", true);
    
            metricsDataset1.setMetricsLong("Product ID", 395924);
    
            metricsDataset1.setMetricsDouble("Product Price", 349.90);
    
            metricsDataset1.setMetricsDate("On Sale Date", now);
    
            request.getServicesManager().getVoltMXCustomMetrics().addCustomMetrics(metricsDataset1);
            request.getServicesManager().getVoltMXCustomMetrics().addCustomMetrics(metricsDataset);
    
            return new Result();
        }
    
    }
```

1.  Right-click your service and select **Build a Jar**. The created jar file should be in _/services/ <your service>_ (xml or json or java)_/lib_
2.  Right-click on your project and select **Properties**. Application Properties window appears.
3.  In **VoltMX Server Details** tab, make sure that the jar you created is available in the **App Libraries** section.
4.  Right-click the project and select **Build all** to build and publish the application. To deploy jar file, publish the project.

The application is published and ready to provide custom metrics when an appropriate service is invoked.

> **_Note:_** Integration of Custom Metrics with third party tools is an app developer’s responsibility. For more details, refer [How to use third party APM Providers with Volt MX application](../../../Foundry/VoltMX_Analytics_Cloud_FAQs/Content/VoltMX_Analytics_Cloud_FAQs.md).
