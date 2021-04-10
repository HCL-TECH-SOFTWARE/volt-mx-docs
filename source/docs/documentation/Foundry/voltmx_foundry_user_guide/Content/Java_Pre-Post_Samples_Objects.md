---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [Object Services](Objectservices.html) > [Stage 3: Mapping Operations to Back-end Methods](ObjectsServices/Objectservices_Stage3.html) > [Mapping Verbs and Methods to the Fields on the Back End](ObjectsServices/Objectservices_Stage3.html#mapping-verbs-and-methods-to-the-fields-on-the-back-end) > [Configuring Methods Mapping to Fields on the Back End](ObjectsServices/Objectservices_Stage3.html#configuring-methods-mapping-to-fields-on-the-back-end) > Java Sample Code for Preprocessor and Postprocessor - Objects

Java Sample Code for Preprocessor and Postprocessor - Objects
=============================================================

Sample ObjectServicePreProcessor
--------------------------------

The following is a sample ObjectServicePreProcessor:

{% highlight voltMx %} public class SamplePreProcessor implements ObjectServicePreProcessor {
@Override
public void execute(FoundryRequestManager requestManager, FoundryResponseManager responseManager, 
FoundryRequestChain requestChain) throws Exception {
PayloadHandler requestPayloadHandler = requestManager.getPayloadHandler();

JsonObject object = requestPayloadHandler.getPayloadAsJson().getAsJsonObject();
object.addProperty("VoltMX", "Hello World!");


requestPayloadHandler.updatePayloadAsJson(object);
requestChain.execute();
}
}
{% endhighlight %}

Sample ObjectServicePostProcessor
---------------------------------

The following is a sample ObjectServicePostProcessor:

{% highlight voltMx %} public class SamplePostProcessor implements ObjectServicePostProcessor {  
@Override  
public void execute(FoundryRequestManager requestManager, FoundryResponseManager responseManager)  
throws Exception {  
PayloadHandler responsePayloadHandler = responseManager.getPayloadHandler();  
  
JsonObject responseAsPayload = responsePayloadHandler.getPayloadAsJson().getAsJsonObject();  
responseAsPayload.addProperty("VoltMX", "Hello World!");  
  
responsePayloadHandler.updatePayloadAsJson(responseAsPayload);  
}  
}
{% endhighlight %}
