                             

User Guide: [Integration](Services.md#integration) \> [Advanced Configurations](Advanced_Configurations.md) > [Collection Support](#collection-support) > Collection Support in Request Input for SOAP

Collection Support
------------------

#### Collection Support in Request Input for SOAP

You can now map collections within your SOAP request to your application. If you want your collection to be displayed for certain iterations, you can also add a `for loop` to your SOAP contract. IDE now supports n level nested collections as a part of the request template.

An example of a single level collection is as follows:

```
 <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZFmmmGoodsReceiptVoltMX>
         <!--Optional:-->
         <IGrCreate>
            <GRHeader>
            <HId>$HId</HId>
            <HTime>$HTime</HTime>
            <HUser>$HUser</HUser>
            <!--Add the for loop for Zero or more repetitions:--> #foreach $items
            <item>
				   <Bldat>$Bldat</Bldat>
				   <Budat>$Budat</Budat>
				   <Mtsnr>$Mtsnr</Mtsnr>
				   <Usnam>$Usnam</Usnam>
				   <PoNumber>$PoNumber</PoNumber>
				   <PoItem>$PoItem</PoItem>
				   <PoUnit>$PoUnit</PoUnit>
				   <QuantityRec>$QuantityRec</QuantityRec>
				   <UnloadPoint>$UnloadPoint</UnloadPoint>
				   <Xsaut>$Xsaut</Xsaut>
				  
			</item>
           #end
<!--end of loop:-->
          </GRHeader>
        </IGrCreate>
     </urn:ZFmmmGoodsReceiptVoltMX>
   </soapenv:Body>
</soapenv:Envelope>

```

You can similarly have multiple nested collections and you can define a for loop for each of the nested collections. Ensure that each of the _for loop_ has a unique identifier name. For example `#foreach $<uniqueidentifier>`. Since Volt MX Studio parses the items and creates a service definition template using end of line logic for each _for statement_ till for _end of loop_.

```
 <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZFmmmGoodsReceiptVoltMX>
         <!--Optional:-->
         <IGrCreate>
            <GRHeader>
            <HId>$HId</HId>
            <HTime>$HTime</HTime>
            <HUser>$HUser</HUser>
            <!--Zero or more repetitions:-->
           #foreach $items 
            <item>
				   <Bldat>$Bldat</Bldat>
				   <Budat>$Budat</Budat>
				   
				   <Serialno>
					  <!--Zero or more repetitions:-->
					#foreach $SerialNo					  <item>
						 <Gernr>$Gernr</Gernr>
						 <UnloadPoint>$UnloadPoint</UnloadPoint>
						 
						 #foreach $test
							<XXX>$a</XXX>
						 #end
					  </item>
					#end
				   </Serialno>
					  
			</item>
           #end
          </GRHeader>
        </IGrCreate>
     </urn:ZFmmmGoodsReceiptVoltMX>
   </soapenv:Body>
</soapenv:Envelope>

```

**Scenario 1**: If the input value for an element is not provided, you can include an exclamation mark "!" after the "$" (for example, `<Bldat>$!Bldat</Bldat>`) to generate a collection that includes null value. For example: `<Bldat></Bldat>`

To avoid this empty <Bldat></Bladat> tag, you can use the following if condition statement:

```
 #if ($Bldat)
<Bldat>$!Bldat</Bldat>
#end
```

**Scenario 2**: If a Key is missing in the input parameter, write the template in the following manner and past it in the request tab:

```
 <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:soap:functions:mc-style">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZFmmmGoodsReceiptVoltMX>
         <!--Optional:-->
         <IGrCreate>
            <GRHeader>
            <HId>$HId</HId>
            <HTime>$HTime</HTime>
            <HUser>$HUser</HUser>
            <!--Zero or more repetitions:-->
           #foreach ($rec in $items.records)  #set( $Budat = $rec.getParam("Budat").getEscapeXMLValue())  #set( $Bldat = $rec.getParam("Bldat").getEscapeXMLValue())  #set( $SerialNo = $rec.getDatasetById("SerialNo"))  
            <item>
				   <Bldat>$Bldat</Bldat>
				   <Budat>$Budat</Budat>
				   
				   <Serialno>
					  <!--Zero or more repetitions:-->
					#foreach ($rec in $SerialNo.records)  #set( $Gernr = $rec.getParam("Gernr").getEscapeXMLValue())  #set( $UnloadPoint = $rec.getParam("UnloadPoint").getEscapeXMLValue()) 
					  <item>
						 <Gernr>$Gernr</Gernr>
						 <UnloadPoint>$UnloadPoint</UnloadPoint>
					  </item>
					#end
				   </Serialno>
					  
			</item>
           #end
          </GRHeader>
        </IGrCreate>
     </urn:ZFmmmGoodsReceiptVoltMX>
   </soapenv:Body>
</soapenv:Envelope> 
```

After you have structured your xml, do the following:

1.  Copy and paste the xml in the **Request** tab.
2.  Click **Add**. A row gets added to the table.
3.  Enter the value for **ID**. The ID should be the same as that of loop of the collection. For example if the loop is _#foreach $items_ the corresponding ID should be items
4.  Enter a **Test Value**.
    
    **Test Value** is the value of the parameter that is used for testing the service. The test value for a collection could be of the form:
    
```
 
    [{"Bldat":"123","Budat":"adf","SerialNo":[{"Gernr":"AAAA","UnloadPoint":"adadad","test":[{a:abc},{a:def}]} ,{"Gernr":"BBBB","UnloadPoint":"adadad","test":[{a:abc},{a:def}]}]}]
    
```
    
    For an item whose value whose value is empty specify it as \[\].
    

1.  Select a value for **Scope** from the drop-down list. **Scope** denotes the scope of the parameter, if it is limited to _request_ or a _session_.
2.  Set the value of the **Datatype** as collection.
3.  Select True or False for **Encode**. Specifies if the URL needs to be encoded or not
4.  If you need to delete a parameter row, select the parameter row you want to delete and click **Delete**. This action removes the parameter row from the list of service parameters.
5.  Navigate to the response pane and fetch the response.

#### Collection Support in Request Input for JSON

You can now map collections within your JSON request to your application.

If you want your collection to be displayed for certain iterations, you can also add a _`for loop`_ to your JSON input.

Volt MX  Foundry Console supports multilevel (N level) nested collections as part of the request template.

Example of a simple single level collection is as follows:

```
 {
"users": [ #foreach $users 
#if($velocityCount!=1)
,
#end
{"firstname": "$firstname","lastname":"$lastname"} #end ]
}

```

![](Resources/Images/Collection_JSON_423x220.png)

Note that you have to change the datatype to collection in Volt MX Foundry Console for the added input parameter. To test, pass a simple single level JSON.

For example:

```
 [{ "firstname": "Sam", "lastname": "Tim"  }, { "firstname": "Jim","lastname": "Jerry" }]
```

> **_Note:_** For nested collections, please go through the [SOAP documentation for collection](#collection-support-in-request-input-for-soap).

#### Collection Support in Request Input for XML

You can now map collections within your XML request to your application.

If you want your collection to be displayed for certain iterations, you can also add a _`for loop`_ to your XML input.

Volt MX  Foundry Console supports multilevel (N level) nested collections as part of the request template.

Example of a simple single level collection is as follows:

```
 #foreach $items
            <item>
				   <Bldat>$Bldat</Bldat>
				   <Budat>$Budat</Budat>
				   <Mtsnr>$Mtsnr</Mtsnr>
			</item>
           #end

```

And you can pass an input collection with a test value:

```
 [{"Bldat":"123","Budat":"adf","Mtsnr":"dsd"},{"Bldat":"234","Budat":"ffg","Mtsnr":"aff"},{"Bldat":"677","Budat":"fdf","Mtsnr":"jft"}]
```

<table style="margin-left: 0;margin-right: auto;" data-mc-conditions="Default.HTML5 Only"><colgroup><col> <col> <col></colgroup><tbody><tr><td>Rev</td><td>Author</td><td>Edits</td></tr><tr><td>7.1</td><td>SD</td><td>SD</td></tr></tbody></table>
