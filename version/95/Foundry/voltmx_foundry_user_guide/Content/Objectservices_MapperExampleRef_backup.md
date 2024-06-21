
User Guide: [Object Services](../Objectservices.md) > Mapper Example Reference

## Mapper Example Reference

This section provides a library of mapper examples. Select a link from the following list to view:

- [Attribute To Object Mapping](#Attribute_To_Object_Mapping)
- [Attribute To Object With Empty Fields](#Attribute_To_Object_With_Empty_Fields)
- [Attribute To Object With Missing Fields](#Attribute_To_Object_With_Missing_Fields)
- [Attribute To Object With Null Field Value](#Attribute_To_Object_With_Null_Field_Value)
- [Concatenation From Child](#Concatenation_From_Child)
- [Concatenation Mapping](#Concatenation_Mapping)
- [Concatenation With Child Attribute](#Concatenation_With_Child_Attribute)
- [Concatenation With Dollar Mapping](#Concatenation_With_Dollar_Mapping)
- [Conditional Mapping](#Conditional_Mapping)
- [Conditional Mapping With Choose-When-Otherwise](#Conditional_Mapping_With_Choose-When-Otherwise)
- [Field Mapping](#Field_Mapping)
- [Global Mapper Output Mapping](#Global_Mapper_Output_Mapping)
- [Global Mapper Output Second Mapping](#Global_Mapper_Output_Second_Mapping)
- [Independent Object Structure Mapping](#Independent_Object_Structure_Mapping)
- [Looping Filter](#Looping_Filter)
- [One To N Split Mapping](#One_To_N_Split_Mapping)
- [Optional Input Path](#Optional_Input_Path)
- [Optional Output Path](#Optional_Output_Path)
- [Parent Attributes To Different Child Objects](#Parent_Attributes_To_Different_Child_Objects)
- [Primary To Secondary Mapping](#Primary_To_Secondary_Mapping)
- [Random Mapping](#Random_Mapping)
- [Reference Only Child Object](#Reference_Only_Child_Object)
- [Reverse Parent Child](#Reverse_Parent_Child)
- [Simple Mapping List](#Simple_Mapping_List)
- [Simple Mapping List with One Row](#Simple_Mapping_List_With_One_Row)
- [Simple Split Mapping](#Simple_Split_Mapping)
- [Split Table](#Split_Table)
- [Split Table Filter Mapping](#Split_Table_Filter_Mapping)
- [Static Lookup](#Static_Lookup)
- [Two Childs To Same Entity](#Two_Childs_To_Same_Entity)
- [EAM Notification Mapping](#EAM_Notification_Mapping)
- [Aggregation Support in Mapper](#Aggregation_Support_in_Mapper)
- [Look-up Support in Mapper](#Look-up_Support_in_Mapper)
- [JavaScript Support in Mapper](#JavaScript_Support_in_Mapper)

<h3 id="Attribute_To_Object_Mapping">Attribute To Object Mapping</h3>

This is an example of attribute to object mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{
"WorkOrder": [
{
"WorkOrderId": "1",
"AddressId": "101"
},
{
"WorkOrderId": "2",
"AddressId": "202"
}
]
}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{
"WorkOrder": [
{
"WorkOrderId": "1",
"Address": [
{
"WorkOrderId": "1",
"AddressId": "101",
"AddressType": "ORD"
}
]
},
{
"WorkOrderId": "2",
"Address": [
{
"WorkOrderId": "2",
"AddressId": "202",
"AddressType": "ORD"
}
]
}
]
}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version\="1.0" encoding\="UTF-8" standalone\="yes"?&gt;
&lt;mapper
    xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath\="WorkOrder" inputpath\="WorkOrder"&gt;
&lt; outputpath\="WorkOrderId" inputpath\="WorkOrderId" /&gt;
&lt;map outputpath\="Address" inputpath\=""&gt;
&lt; outputpath\="WorkOrderId" inputpath\="WorkOrderId" /&gt;
&lt; outputpath\="AddressId" inputpath\="AddressId" /&gt;
&lt; outputpath\="AddressType" input\="ORD" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Attribute_To_Object_With_Empty_Fields">Attribute To Object With Empty Fields</h3>

This is an example of mapping an attribute to an object with empty fields.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{"WorkOrder": [

{

"WorkOrderId": "1",

"AddressId": "101"

},

{

"WorkOrderId": "2",

"AddressId": "202"

}

{

"WorkOrderId": "3",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"Address": [

{

"WorkOrderId": "1",

"AddressId": "101",

"AddressType": "ORD"

}
]

},

{

"WorkOrderId": "2",

"Address": [

{

"WorkOrderId": "2",

"AddressId": "202",

"AddressType": "ORD"

}
]

},

{

"WorkOrderId": "3",

"Address": [

{

"WorkOrderId": "3",

"AddressType": "ORD"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder"&gt;
&lt; outputpath="WorkOrderId" inputpath="WorkOrderId" /&gt;
&lt;map outputpath="Address" inputpath=""&gt;
&lt; outputpath="WorkOrderId" inputpath="WorkOrderId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt; outputpath="AddressType" input="ORD" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Attribute_To_Object_With_Missing_Fields">Attribute To Object With Missing Fields</h3>

This is an example of mapping an attribute to an object with missing fields.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"AddressId": "101"

},

{

"WorkOrderId": "2",

"AddressId": "202"

}

{

"WorkOrderId": "3",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"Address": [

{

"WorkOrderId": "1",

"AddressId": "101",

"AddressType": "ORD"

}
]

},

{

"WorkOrderId": "2",

"Address": [

{

"WorkOrderId": "2",

"AddressId": "202",

"AddressType": "ORD"

}
]

},

{

"WorkOrderId": "3",

"Address": [

{

"WorkOrderId": "3",

"AddressType": "ORD"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder"&gt;
&lt; outputpath="WorkOrderId" inputpath="WorkOrderId" /&gt;
&lt;map outputpath="Address" inputpath=""&gt;
&lt; outputpath="WorkOrderId" inputpath="WorkOrderId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt; outputpath="AddressType" input="ORD" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Attribute_To_Object_With_Null_Field_Value">Attribute To Object With Null Field Value</h3>

This is an example of mapping an attribute to an object with a null field value.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"AddressId": "101"

},

{

"WorkOrderId": "2",

"AddressId": "202"

}

{

"WorkOrderId": "3",

"AddressId": null

}
]

}

Output

{

"WorkOrder": [

{

"WorkOrderId": "1",

"Address": [

{

"WorkOrderId": "1",

"AddressId": "101",

"AddressType": "ORD"

}
]

},

{

"WorkOrderId": "2",

"Address": [

{

"WorkOrderId": "2",

"AddressId": "202",

"AddressType": "ORD"

}
]

},

{

"WorkOrderId": "3",

"Address": [

{

"WorkOrderId": "3",

"AddressType": "ORD"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="A" inputpath="A"&gt;
&lt; outputpath="Q1" inputpath="P1" /&gt;
&lt; outputpath="Q2" inputpath="P2" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Concatenation_From_Child">Concatenation From Child</h3>

This is an example of concatenation mapping from a child.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"Address": {

"FirstName": "First1",

"LastName": "Last1"

}

},

{

"Id": "102",

"Address": {

"FirstName": "First2",

"LastName": "Last2"

}

},

{

"Id": "103",

"Address": {

"FirstName": "First3",

"LastName": "Last3"

}

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"Name": "First1 Last1"

},

{

"Id": "102",

"Name": "First2 Last2"

},

{

"Id": "103",

"Name": "First3 Last3"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Customers" inputpath="Customers"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;map outputpath="" inputpath="Address"&gt;
&lt;exec-function name="voltmx.string:concat" outputpath="concatname output="$vars"&gt;
&lt;set-arg name="FirstName" inputpath="FirstName"/&gt;
&lt;set-arg name="Separator" input=" " /&gt;
&lt;set-arg name="LastName" inputpath="LastName"/&lt;
&lt;/exec-function&gt;
&lt;set-param outputpath="Name" inputpath="$vars/concatname" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Concatenation_Mapping">Concatenation Mapping</h3>

This is an example of concatenation mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"P1": "value1",

"P2": "value2"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"Q1": "value1-value2",

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="A" inputpath="A"&gt;
&lt;exec-function name="voltmx.string:concat" outputpath="P1P2Concat" output="$vars"&gt;
&lt;set-arg name="P1" inputpath="P1"/&gt;
&lt;set-arg name="Separator" input="-" /&gt;
&lt;set-arg name="P2" inputpath="P2"/&gt;
&lt;/exec-function&gt;
&lt; outputpath="Q1" inputpath="$vars/P1P2Concat" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Concatenation_With_Child_Attribute">Concatenation With Child Attribute</h3>

This is an example of mapping concatenation with a child attribute.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"EAM_WO_HDR": [

{

"EAM_WO_Address": [

{

"P1": "value1",

"P2": "value2"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Address": [

{

"Q1": "value1-value2"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Address" inputpath="EAM_WO_HDR"&gt;
&lt;exec-function name="voltmx.string:concat" outputpath="P1P2Concat" output="$vars"&gt;
&lt;set-arg name="P1" inputpath="EAM_WO_Address/P1"/&gt;
&lt;set-arg name="Separator" input="-" /&gt;
&lt;set-arg name="P2" inputpath="P2"/&gt;
&lt;/exec-function&gt;
&lt; outputpath="Q1" inputpath="$vars/P1P2Concat" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Concatenation_With_Dollar_Mapping">Concatenation With Dollar Mapping</h3>

This is an example of concatenation with dollar mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"P1": "value1",

"P2": "value2"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"Q1": "value1$value2"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="A" inputpath="A"&gt;
&lt;exec-function name="voltmx.string:concat" outputpath="P1P2Concat" output="$vars"&gt;
&lt;set-arg name="P1" inputpath="P1"/&gt;
&lt;set-arg name="Separator" input="\\$" /&gt;
&lt;set-arg name="P2" inputpath="P2"/&gt;
&lt;/exec-function&gt;
&lt; outputpath="Q1" inputpath= "$vars/P1P2Concat" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Conditional_Mapping">Conditional Mapping</h3>

This is an example of conditional mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"NotStarted": "",

"Started": "X",

"InProgress": "",

"Completed": "",

},

{

"Id": "102",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "X",

},

{

"Id": "103",

"NotStarted": "",

"Started": "",

"InProgress": "X",

"Completed": "",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"Status": "Started"

},

{

"Id": "102",

"Status": "Completed"

},

{

"Id": "103",

"Status": "InProgress"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Customers" inputpath="Customers"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="NotStartedCond" output="$vars"&gt;
&lt;set-arg name="NotStarted" inputpath="NotStarted" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="StartedCond" output="$vars"&gt;
&lt;set-arg name="Started" inputpath="Started" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="InProgressCond" output="$vars"&gt;
&lt;set-arg name="InProgress" inputpath="InProgress" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="CompletedCond" output="$vars"&gt;
&lt;set-arg name="Completed" inputpath="Completed" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/NotStartedCond"&gt;
&lt; outputpath="Status" input="NotStarted" /&gt;
&lt;/when&gt;
&lt;when test="$vars/StartedCond"&gt;
&lt; outputpath="Status" input="Started" /&gt;
&lt;/when&gt;
&lt;when test="$vars/InProgressCond"&gt;
&lt; outputpath="Status" input="InProgress" /&gt;
&lt;/when&gt;
&lt;when test="$vars/CompletedCond"&gt;
&lt; outputpath="Status" input="Completed" /&gt;
&lt;/when&gt;
&lt;/choose&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Conditional_Mapping_With_Choose-When-Otherwise">Conditional Mapping With Choose-When-Otherwise</h3>

This is an example of conditional mapping that uses a choose-when-otherwise block.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"NotStarted": "",

"Started": "X",

"InProgress": "",

"Completed": "",

},

{

"Id": "102",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "X",

},

{

"Id": "103",

"NotStarted": "",

"Started": "",

"InProgress": "X",

"Completed": "",

},

{

"Id": "104",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"Status": "Started",

},

{

"Id": "102",

"Status": "Completed",

},

{

"Id": "103",

"Status": "InProgress",

},

{

"Id": "104",

"Status": "Unknown",

},

]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;

&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Customers" inputpath="Customers"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="NotStartedCond" output="$vars"&gt;
&lt;set-arg name="NotStarted" inputpath="NotStarted" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="StartedCond" output="$vars"&gt;
&lt;set-arg name="Started" inputpath="Started" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="InProgressCond" output="$vars"&gt;
&lt;set-arg name="InProgress" inputpath="InProgress" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="CompletedCond" output="$vars"&gt;
&lt;set-arg name="Completed" inputpath="Completed" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/NotStartedCond"&gt;
&lt; outputpath="Status" input="NotStarted" /&gt;
&lt;/when&gt;
&lt;when test="$vars/StartedCond"&gt;
&lt; outputpath="Status" input="Started" /&gt;
&lt;/when&gt;
&lt;when test="$vars/InProgressCond"&gt;
&lt; outputpath="Status" input="InProgress" /&gt;
&lt;/when&gt;
&lt;when test="$vars/CompletedCond"&gt;
&lt; outputpath="Status" input="Completed" /&gt;
&lt;/when&gt;
&lt;otherwise&gt;
&lt; outputpath="Status" input="Unknown" />
&lt;/otherwise&gt;
&lt;/choose&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Field_Mapping">Field Mapping</h3>

This is an example of field mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"P1": "A-row1-p1",

"P2": "A-row1-p2"

},

{

"P1": "A-row2-p1",

"P2": "A-row2-p2"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"M": [

{

"Q1": "A-row1-p1",

"Q2": "A-row1-p2"

},

{

"Q1": "A-row2-p1",

"Q2": "A-row2-p2"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map name="field-mapping"&gt;
&lt;exec-function name="field-mapping"&gt;
&lt;/exec-function&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<b>Functions</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;functions xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;function name="field-mapping"&gt;
&lt; outputpath="Q1" inputpath="P1" /&gt;
&lt; outputpath="Q2" inputpath="P2" /&gt;
&lt;/function&gt;
&lt;/function&gt;</code></pre>

<h3 id="Global_Mapper_Output_Mapping">Global Mapper Output Mapping</h3>

This is an example of global mapper output mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"NotStarted": "",

"Started": "X",

"InProgress": "",

"Completed": "",

},

{

"Id": "102",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "X",

},

{

"Id": "103",

"NotStarted": "",

"Started": "",

"InProgress": "X",

"Completed": "",

},

{

"Id": "104",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Error-Message": "Unknown element.",

"Customers": [

{

"Id": "101",

"Status": "Started",

},

{

"Id": "102",

"Status": "Completed",

},

{

"Id": "103",

"Status": "InProgress",

},

{

"Id": "104",

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Customers" inputpath="Customers"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="NotStartedCond" output="$vars"&gt;
&lt;set-arg name="NotStarted" inputpath="NotStarted" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="StartedCond" output="$vars"&gt;
&lt;set-arg name="Started" inputpath="Started" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="InProgressCond" output="$vars"&gt;
&lt;set-arg name="InProgress" inputpath="InProgress" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="CompletedCond" output="$vars"&gt;
&lt;set-arg name="Completed" inputpath="Completed" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/NotStartedCond"&gt;
&lt; outputpath="Status" input="NotStarted" /&gt;
&lt;/when&gt;
&lt;when test="$vars/StartedCond"&gt;
&lt; outputpath="Status" input="Started" /&gt;
&lt;/when&gt;
&lt;when test="$vars/InProgressCond"&gt;
&lt; outputpath="Status" input="InProgress" /&gt;
&lt;/when&gt;
&lt;when test="$vars/CompletedCond"&gt;
&lt; outputpath="Status" input="Completed" /&gt;
&lt;/when&gt;
&lt;otherwise&gt;
&lt; outputpath="Error-Message" input="Unknown element." output="$mapper-output"/&gt;
&lt;/otherwise&gt;
&lt;/choose&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Global_Mapper_Output_Second_Mapping">Global Mapper Output Second Mapping</h3>

This is an example of mapping a second global mapper output.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customers": [

{

"Id": "101",

"NotStarted": "",

"Started": "X",

"InProgress": "",

"Completed": "",

},

{

"Id": "102",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "X",

},

{

"Id": "103",

"NotStarted": "",

"Started": "",

"InProgress": "X",

"Completed": "",

},

{

"Id": "104",

"NotStarted": "",

"Started": "",

"InProgress": "",

"Completed": "",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Error-Message": "Unknown element.",

"Customers": [

{

"Id": "101",

"Status": "Started",

},

{

"Id": "102",

"Status": "Completed",

},

{

"Id": "103",

"Status": "InProgress",

},

{

"Id": "104",

},

{}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Customers" inputpath="Customers"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="NotStartedCond" output="$vars"&gt;
&lt;set-arg name="NotStarted" inputpath="NotStarted" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="StartedCond" output="$vars"&gt;
&lt;set-arg name="Started" inputpath="Started" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="InProgressCond" output="$vars"&gt;
&lt;set-arg name="InProgress" inputpath="InProgress" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="CompletedCond" output="$vars"&gt;
&lt;set-arg name="Completed" inputpath="Completed" /&gt;
&lt;set-arg name="X" input="X" /&gt;
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/NotStartedCond"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt; outputpath="Status" input="NotStarted" /&gt;
&lt;/when&gt;
&lt;when test="$vars/StartedCond"&gt;
&lt; outputpath="Status" input="Started" /&gt;
&lt;/when&gt;
&lt;when test="$vars/InProgressCond"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt; outputpath="Status" input="InProgress" /&gt;
&lt;/when&gt;
&lt;when test="$vars/CompletedCond"&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt; outputpath="Status" input="Completed" /&gt;
&lt;/when&gt;
&lt;otherwise&gt;
&lt; outputpath="Error-Message" input="Unknown element." output="$mapper-output"/&gt;
&lt;/otherwise&gt;
&lt;/choose&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Independent_Object_Structure_Mapping">Independent Object Structure Mapping</h3>

This is an example of mapping an independent object structure.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

},

{

"CustomerId": "2",

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"workOrderContacts": [

{

"CustomerId": "3",

"AddressId": "103",

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"CustomerId": "4",

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrderContacts": [

{

"Contacts": [

{

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

},

{

"PrimaryContactId": "12346",

"SecondaryContactId": "1234567"

}
]

},

{

"Contacts": [

{

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder"&gt;
&lt;map outputpath="Address" inputpath="Address"&gt;
&lt; outputpath="CustomerId" inputpath="CustomerId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;map outputpath="workOrderContacts" inputpath="WorkOrder"&gt;
&lt;map outputpath="Contacts" inputpath="Address"&gt;
&lt; outputpath="PrimaryContactId" inputpath="PrimaryContactId" /&gt;
&lt; outputpath="SecondaryContactId" inputpath="SecondaryContactId" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Looping_Filter">Looping Filter</h3>

This is an example of mapping a looping filter.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Persons": [

{

"Id": "101",

"Type": "EMP",

"Name": "Employee1",

},

{

"Id": "102",

"Type": "EMP",

"Name": "Customer1",

},

{

"Id": "103",

"Type": "EMP",

"Name": "Employee2",

},

{

"Id": "104",

"Type": "EMP",

"Name": "Customer2",

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Employee": [

{

"Id": "101",

"Name": "Employee1",

},

{

"Id": "103",

"Name": "Employee2",

},

{

"Customer": [

{

"Id": "102",

"Name": "Customer1",

},

{

"Id": "104",

"Name": "Customer2",

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="" inputpath="Persons">
&lt;exec-function name="voltmx.logical:equal" outputpath="EMPCondition" output="$vars"&gt;
&lt;set-arg name="Type" inputpath="Type" /&gt;
&lt;set-arg name="EMP" input="EMP" />
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="CUSTCondition" output="$vars"&gt;
&lt;set-arg name="Type" inputpath="Type" /&gt;
&lt;set-arg name="CUST" input="CUST" />
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/EMPCondition">
&lt;map outputpath="Employee" inputpath=""&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;set-param outputpath="Name" inputpath="Name" /&gt;
&lt;/map&gt;
&lt;/when&gt;
&lt;when test="$vars/CUSTCondition">
&lt;map outputpath="Customer" inputpath=""&gt;
&lt; outputpath="Id" inputpath="Id" /&gt;
&lt;set-param outputpath="Name" inputpath="Name" /&gt;
&lt;/map&gt;
&lt;/when&gt;
&lt;/choose&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="One_To_N_Split_Mapping">One To N Split Mapping</h3>

This is an example of one to N split mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"AddressId": "101"

"CustomerId": "201",

"Contacts": [

{

"Id": "301"

},

{

"Id": "401"

}
]

},

{

"WorkOrderId": "3",

"AddressId": ""

"CustomerId": "601",

"Contacts": [

{

"Id": "701"

},

{

"Id": "801"

},

]

},

}{

"WorkOrderId": "2",

"AddressId": "102"

"CustomerId": "202",

"Contacts": [

{

"Id": "302"

},

{

"Id": "402"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"Address": [

{

"AddressId": "101",

"AddressType": "ADDRESS"

},

{

"AddressId": "201",

"AddressType": "CUSTOMER"

},

{

"AddressId": "301",

"AddressType": "CONTACT"

},

{

"AddressId": "401",

"AddressType": "CONTACT"

},

]

},

{

"WorkOrderId": "3",

"Address": [

{

"AddressId": "601",

"AddressType": "CUSTOMER"

},

{

"AddressId": "201",

"AddressType": "CONTACT"

},

{

"AddressId": "301",

"AddressType": "CONTACT"

}
]

},

{

"WorkOrderId": "1",

"Address": [

{

"AddressId": "102",

"AddressType": "ADDRESS"

},

{

"AddressId": "202",

"AddressType": "CUSTOMER"

},

{

"AddressId": "302",

"AddressType": "CONTACT"

},

{

"AddressId": "402",

"AddressType": "CONTACT"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder"&gt;
&lt; outputpath="WorkOrderId" inputpath="WorkOrderId" /&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="EmptyCondition" output="$vars"&gt;
&lt;set-arg name="AddressId" inputpath="AddressId" /&gt;
&lt;set-arg name="Empty" input="" /&gt;
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/EmptyCondition"&gt;
&lt;/when&gt;
&lt;otherwise&gt;
&lt;map outputpath="Address" inputpath=""&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt; outputpath="AddressType" input="Address" /&gt;
&lt;/map&gt;
&lt;/otherwise&gt;
&lt;/choose&gt;
&lt;map outputpath="Address" inputpath=""&gt;
&lt; outputpath="AddressId" inputpath="CustomerId" /&gt;
&lt; outputpath="AddressType" input="Customer" /&gt;
&lt;/map&gt;
&lt;map outputpath="Address" inputpath="Contacts">
&lt; outputpath="AddressId" inputpath="Id" /&gt;
&lt; outputpath="AddressType" input="Contact" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
<h3 id="Optional_Input_Path">Optional Input Path</h3>

This is an example of mapping an optional input path .

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"PrimaryContactId": "12345",

"SecondaryContactId": "123457"

},

{

"CustomerId": "2",

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"Address": [

{

"CustomerId": "3",

"AddressId": "103",

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"CustomerId": "4",

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"Contact": [

{

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

}
]

},

{

"CustomerId": "2",

"AddressId": "102",

"Contact": [

{

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"CustomerId": "3",

"AddressId": "103",

"Contact": [

{

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

}
]

},

{

"CustomerId": "4",

"AddressId": "104",

"Contact": [

{

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Address" inputpath="WorkOrder/Address"&gt;
&lt; outputpath="CustomerId" inputpath="CustomerId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt;map outputpath="Contact" inputpath=""&gt;
&lt; outputpath="PrimaryContactId" inputpath="PrimaryContactId" /&gt;
&lt; outputpath="SecondaryContactId" inputpath="SecondaryContactId" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Optional_Output_Path">Optional Output Path</h3>

This is an example of mapping an optional output path.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"CustomerId": "1",

"Address": [

{

"AddressId": "101",

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

},

{

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"CustomerId": "3",

"Address": [

{

"AddressId": "103",

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Address": [

{

"CustomerId": "1",

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

},

{

"CustomerId": "3",

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Address" inputpath="WorkOrder"&gt;
&lt; outputpath="CustomerId" inputpath="CustomerId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt;map outputpath="Contact" inputpath=""&gt;
&lt; outputpath="PrimaryContactId" inputpath="PrimaryContactId" /&gt;
&lt; outputpath="SecondaryContactId" inputpath="SecondaryContactId" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Parent_Attributes_To_Different_Child_Objects">Parent Attributes To Different Child Objects</h3>

This is an example of mapping parent attributes to different child objects.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"EAM_CONTACTS": [

{

"ContactNo": "101",

"EAM_CONT_ADDRESS": [

{

"Name1": "xyz"

}
],

"EAM_CONT_MISC": [

{

"PREFERENCES": "PrefOne"

}
]

},

{

"ContactNo": "102",

"EAM_CONT_ADDRESS": [

{

"Name1": "abc"

}
],

"EAM_CONT_MISC": [

{

"PREFERENCES": "PrefTwo"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Contact": [

{

"CONTACT_NO": "101",

"FirstName": "xyz",

"Preferences": "PrefOne"

},

{

"CONTACT_NO": "102",

"FirstName": "abc",

"Preferences": "PrefTwo"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Contact" inputpath="EAM_CONTACTS">
&lt; outputpath="CONTACT_NO" inputpath="ContactNo" />
&lt; outputpath="FirstName" inputpath="EAM_CONT_ADDRESS/Name1" />
&lt; outputpath="Preferences" inputpath="EAM_CONT_MISC/PREFERENCES" />
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Primary_To_Secondary_Mapping">Primary To Secondary Mapping</h3>

This is an example of primary to secondary mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

},

{

"CustomerId": "2",

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"Address": [

{

"CustomerId": "3",

"AddressId": "103",

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"CustomerId": "4",

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"WorkOrderContacts": [

{

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

}
]

},

{

"CustomerId": "2",

"AddressId": "102",

"WorkOrderContacts": [

{

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"CustomerId": "3",

"AddressId": "103",

"WorkOrderContacts": [

{

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

}
]

},

{

"CustomerId": "4",

"AddressId": "104",

"WorkOrderContacts": [

{

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder/Address"&gt;
&lt; outputpath="CustomerId" inputpath="CustomerId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt;map outputpath="workOrderContacts" inputpath=""&gt;
&lt; outputpath="PrimaryContactId" inputpath="PrimaryContactId" /&gt;
&lt; outputpath="SecondaryContactId" inputpath="SecondaryContactId" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Random_Mapping">Random Mapping</h3>

This is an example of mapping using the random function.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"P1": "A-row1-p1"

},

{

"P1": "A-row2-p1"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"M": [

{

"Q1": "A-row1-p1"

"Q2": ""

},

{

"Q1": "A-row2-p1"

"Q2": ""

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="M" inputpath="A"&gt;
&lt;exec-function name="voltmx.util:random" outputpath="random" output="$vars"&gt;
&lt;/exec-function&gt;
&lt; outputpath="Q1" inputpath="P1" /&gt;
&lt; outputpath="Q2" inputpath="$vars/random" />
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Reference_Only_Child_Object">Reference Only Child Object</h3>

This is an example of referencing only a child object.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

},

{

"CustomerId": "2",

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

}
]

},

{

"Address": [

{

"CustomerId": "3",

"AddressId": "103",

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"CustomerId": "4",

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Address": [

{

"CustomerId": "1",

"AddressId": "101",

"PrimaryContactId": "12345",

"SecondaryContactId": "123456"

},

{

"CustomerId": "2",

"AddressId": "102",

"PrimaryContactId": "12346",

"SecondaryContactId": "123457"

},

{

"CustomerId": "3",

"AddressId": "103",

"PrimaryContactId": "123459",

"SecondaryContactId": "1234567"

},

{

"CustomerId": "4",

"AddressId": "104",

"PrimaryContactId": "123458",

"SecondaryContactId": "1234568"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Address" inputpath="WorkOrder/Address"&gt;
&lt; outputpath="CustomerId" inputpath="CustomerId" /&gt;
&lt; outputpath="AddressId" inputpath="AddressId" /&gt;
&lt; outputpath="PrimaryContactId" inputpath="PrimaryContactId" /&gt;
&lt; outputpath="SecondaryContactId" inputpath="SecondaryContactId" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Reverse_Parent_Child">Reverse Parent Child</h3>

This is an example of reverse parent-child mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"Name": "WorkOrder1",

"Tasks": [

{

"TaskId": "101",

"Name": "Task101"

},

{

"TaskId": "102",

"Name": "Task102"

}
]

},

{

"WorkOrderId": "2",

"Name": "WorkOrder2",

"Tasks": [

{

"TaskId": "103",

"Name": "Task103"

},

{

"TaskId": "104",

"Name": "Task104"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Tasks": [

{

"TaskId": "101",

"Name": "Task101",

"WorkOrder": [

{

"WorkOrderId": "1",

"Name": "WorkOrder1"

},

]

},

{

"TaskId": "102",

"Name": "Task102",

"WorkOrder": [

{

"WorkOrderId": "1",

"Name": "WorkOrder1"

},

]

},

{

"TaskId": "103",

"Name": "Task103",

"WorkOrder": [

{

"WorkOrderId": "2",

"Name": "WorkOrder2"

},

]

},

{

"TaskId": "104",

"Name": "Task104",

"WorkOrder": [

{

"WorkOrderId": "2",

"Name": "WorkOrder2"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Tasks" inputpath="WorkOrder/Tasks"&gt;
&lt; outputpath="TaskId" inputpath="TaskId" /&gt;
&lt;set-param outputpath="Name" inputpath="Name" /&gt;
&lt;map outputpath="WorkOrder" inputpath=".."&gt;
&lt; outputpath="WorkOrderId" inputpath="WorkOrderId" /&gt;
&lt;set-param outputpath="Name" inputpath="Name" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Simple_Mapping_List">Simple Mapping List</h3>

This is an example of a simple mapping list.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"P1": "A-row1-p1",

"P2": "A-row1-p2"

},

{

"P1": "A-row2-p1",

"P2": "A-row2-p2"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"M": [

{

"Q1": "A-row1-p1",

"Q2": "A-row1-p2"

},

{

"Q1": "A-row2-p1",

"Q2": "A-row2-p2"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="M" inputpath="A"&gt;
&lt; outputpath="Q1" inputpath="P1" /&gt;
&lt; outputpath="Q2" inputpath="P2" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Simple_Mapping_List_With_One_Row">Simple Mapping List With One Row</h3>

This is an example of a simple mapping list with one row.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"P1": "A-row1-p1",

"P2": "A-row1-p2"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"M": [

{

"Q1": "A-row1-p1",

"Q2": "A-row1-p2"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="M" inputpath="A"&gt;
&lt; outputpath="Q1" inputpath="P1" /&gt;
&lt; outputpath="Q2" inputpath="P2" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Simple_Split_Mapping">Simple Split Mapping</h3>

This is an example of simple split mapping using the substringbefore and substringafter functions.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"Name": "First Last"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"A": [

{

"FirstName": "First"

"LastName": "Last"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="A" inputpath="A"&gt;
&lt;exec-function name="voltmx.string:substringBefore" outputpath="NameSplitBeforeExpr" output="$vars"&gt;
&lt;set-arg name="Name" inputpath="Name"/&gt;
&lt;set-arg name="Separator" input=" " /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.string:substringAfter" outputpath="NameSplitAfterExpr" output="$vars"&gt;
&lt;set-arg name="Name" inputpath="Name"/&gt;
&lt;set-arg name="Separator" input=" " /&gt;
&lt;/exec-function&gt;
&lt; outputpath="FirstName" inputpath="$vars/NameSplitBeforeExpr" /&gt;
&lt; outputpath="LastName" inputpath="$vars/NameSplitAfterExpr" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Split_Table">Split Table</h3>

This is an example of split table mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customer": [

{

"CustomerInfo": "Customer1",

"AddressID": "Address1"

},

{

"CustomerInfo": "Customer2",

"AddressID": "Address2"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Customer": [

{

"CustomerInfo": "Customer1"

},

{

"CustomerInfo": "Customer2"

}
],

"CustomerAddress": [

{

"AddressID": "Address1"

},

{

"AddressID": "Address2"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Customer" inputpath="Customer">
&lt; outputpath="CustomerInfo" inputpath="CustomerInfo" />
&lt;/map&gt;
&lt;map outputpath="CustomerAddress" inputpath="Customer">
&lt; outputpath="AddressID" inputpath="AddressId" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Split_Table_Filter_Mapping">Split Table Filter Mapping</h3>

This is an example of split table filter mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Id": "1",

"WorkOrderData": [

{

"Id": "101",

"Type": "Customer",

"TypeId": "1001",

"Name": "Customer-1"

},

{

"Id": "101",

"Type": "Customer",

"TypeId": "1001",

"Name": "Customer-1"

},

{

"Id": "101",

"Type": "Customer",

"TypeId": "1001",

"Name": "Customer-1"

},

{

"Id": "101",

"Type": "Customer",

"TypeId": "1001",

"Name": "Customer-1"

},

]

},

{

"Id": "2",

"WorkOrderData": [

{

"Id": "201",

"Type": "Customer",

"TypeId": "2001",

"Name": "Customer-2"

},

{

"Id": "202",

"Type": "Address",

"TypeId": "2002",

"Name": "Address-2"

},

{

"Id": "203",

"Type": "Contact",

"TypeId": "2003",

"Name": "Contact-2-1"

},

{

"Id": "204",

"Type": "Contact",

"TypeId": "2004",

"Name": "Contact-2-2"

}
]

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"WorkOrderId": "1",

"CustomerId": "101",

"AddressId": "102",

"Contacts": [

{

"ContactId": "103",

"Name": "Contact-1-1"

},

{

"ContactId": "104",

"Name": "Contact-1-2"

}
]

},

{

"WorkOrderId": "2",

"CustomerId": "201",

"AddressId": "202",

"Contacts": [

{

"ContactId": "203",

"Name": "Contact-2-1"

},

{

"ContactId": "204",

"Name": "Contact-2-2"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder"&gt;
&lt; outputpath="WorkOrderId" inputpath="Id" /&gt;
&lt;map outputpath="" inputpath="WorkOrderData">
&lt;exec-function name="voltmx.logical:equal" outputpath="CustomerCondition" output="$vars"&gt;
&lt;set-arg name="Type" inputpath="Type" /&gt;
&lt;set-arg name="Customer" input="Customer" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="AddressCondition" output="$vars"&gt;
&lt;set-arg name="Type" inputpath="Type" /&gt;
&lt;set-arg name="Address" input="Address" /&gt;
&lt;/exec-function&gt;
&lt;exec-function name="voltmx.logical:equal" outputpath="ContactCondition" output="$vars"&gt;
&lt;set-arg name="Type" inputpath="Type" /&gt;
&lt;set-arg name="Contact" input="Contact" /&gt;
&lt;/exec-function&gt;
&lt;choose&gt;
&lt;when test="$vars/CustomerCondition">
&lt; outputpath="CustomerId" inputpath="Id" /&gt;
&lt;/when&gt;
&lt;when test="$vars/AddressCondition">
&lt; outputpath="AddressId" inputpath="Id" /&gt;
&lt;/when&gt;
&lt;when test="$vars/ContactCondition">
&lt;map outputpath="Contacts" inputpath=""&gt;
&lt; outputpath="ContactId" inputpath="Id" /&gt;
&lt;set-param outputpath="Name" inputpath="Name" /&gt;
&lt;/map&gt;
&lt;/when&gt;
&lt;/choose&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Static_Lookup">Static Lookup</h3>

This is an example of static lookup mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Id": "101",

"Status": "Completed"

},

{

"Id": "102",

"Status": "InProgress"

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"WorkOrder": [

{

"Id": "101",

"Status": "DONE"

},

{

"Id": "102",

"Status": "INCOMPLETE"

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="WorkOrder" inputpath="WorkOrder"&gt;
&lt;variables&gt;
&lt;variable name="statusmap" evalType="map" value="{&quot;Completed&quot;:&quot;DONE&quot;, &quot;InProgress&quot;:&quot;INCOMPLETE&quot;}" /&gt;
&lt;/variables&gt;
&lt; outputpath="Id" inputpath="WorkOrder/Id" /&gt;
&lt; outputpath="Status"
inputpath="$vars.statusmap.get($content.get('WorkOrder').getValue('Status').getValue())" /&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Two_Childs_To_Same_Entity">Two Childs To Same Entity</h3>

This is an example of mapping two child objects to the same entity.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"EAM_WO_OPERATION": [

{

"DUR_NOR_UNIT": "H",

"ROUTING_NUM": "1000000082",

"START_DATE_TIME": "20151004082847",

"DURATION_NORMAL": "4.0",

"CONF_END_TIME": "093218",

"STATUS_TXT": "CNF REL",

"BASIC_START_DAT": "20151004",

"QUANTITY": ".000",

"FORECAST_FIN_TIM": "000000",

"WORK_UNIT": "H",

"CONTROL_KEY": "SM01",

"USER_STATUS": "E0005",

"OPERATION_TXT": "Replace valve",

"PRICE": ".00",

"PLANT": "8000",

"FORCAST_FINISH": "00000000",

"WORK_ACTIVITY": "4.0",

"USERSTATUS_TXT": "FIN",

"CONF_END_DATE": "20151004",

"OBJ_ID_RESOURCE": "10000198",

"LOCATION": "000000002358",

"OPERATION": "0010",

"TIMESTAMP": "20151009135631",

"CONF_START_TIME": "082847",

"USR04": ".000",

"USR05": ".000",

"USR06": ".000",

"USR07": ".000",

"USR08": "00000000",

"USR09": "00000000",

"GENERAL_COUNTER": "1",

"STAT_PROF": "EAM_WOPE",

"INTERNAL_NUMBER": "000004000121",

"BASIC_START_TIM": "183000",

"ACTUAL_WORK": "1.1",

"ORDER_NUM": "000004000121",

"TIME_ZONE": "UTC",

"WORK_CENTER": "MAINT01",

"FORECAST_DAT_TIM": "00000000000000",

"HOURLY_RATE": ".000",

"CONF_START_DATE": "20151004",

"END_DATE_TIME": "20151004093218",

"USER_NAME": "EAM00000",

"ACTUAL_AMOUNT": ".000",

"CALC_KEY": "0",

"EAM_WO_MAT": {

"MATERIAL_NUM": "A100",

"RELATIONS_INTVAL": ".0",

"INTERNAL_COM_ITM": "20",

"SHORT_TXT_TASK": "A1 Grand Prix super sprint BMX Bike",

"RESERVE_QUAN": ".000",

"COMP_ITEM_NUM": "0000040001210020",

"BASE_UNIT": "EA",

"VSI_SIZE1": ".000",

"VSI_SIZE2": ".000",

"VSI_SIZE3": ".000",

"VSI_NO": ".000",

"LIST_PRICE": ".00",

"REQUIRE_QUAN": "6.000",

"ACTUAL_QUAN": ".000",

"MAT_TYPE_TEXT": "Finished Product",

"MATERIAL_TYPE": "FERT",

"ITEM_CATEGORY": "L",

"ORIGINAL_QUAN": ".000",

"ORDER_NUM": "000004000121",

"VSI_QTY": ".000",

"RESERVATION_NUM": "591",

"ITEM_NUMBER": "5",

"OPERATION": "0010",

"TIMESTAMP": "20151009135631",

"ACTUAL_AMOUNT": ".000",

"BOM_ITEM_NUM": "0020"

},

"EAM_WO_PRT": {

"MATERIAL_NUM": "HAMMER",

"ORDER_NUM": "000004000121",

"OPERATION": "0010",

"TOT_PLAN_QUAN": ".000",

"SHORT_TXT_TASK": "Hammer Tool",

"INTERNAL_COM_ITM": "10",

"TIMESTAMP": "20151005165617",

"PRT_CATEGORY": "R",

"COMP_ITEM_NUM": "00000400012100100010"

}

}
]

}</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Task": [

{

"Location_id": "000000002358",

"Type_id": "SM01",

"Plant_id": "8000",

"Code": "000004000121",

"WorkOrderMaterial": [

{

"type": "M",

"Material": "A100",

"Order": "000004000121",

"Description": "A1 Grand Prix super sprint BMX Bike",

"ItemNumber": "0000040001210020",

"Item": "L"

},

{

"type": "P",

"Material": "HAMMER",

"Order": "000004000121",

"Description": "Hammer Tool",

"ItemNumber": "00000400012100100010",

"Item": "R"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Task" inputpath="EAM_WO_OPERATION">
&lt; outputpath="Location_id" inputpath="LOCATION" />
&lt; outputpath="Type_id" inputpath="CONTROL_KEY" />
&lt; outputpath="Plant_id" inputpath="PLANT" />
&lt; outputpath="Code" inputpath="INTERNAL_NUMBER" />
&lt;map outputpath="WorkOrderMaterial" inputpath="EAM_WO_MAT">
&lt; outputpath="type" input="M" />
&lt; outputpath="Material" inputpath="MATERIAL_NUM" />
&lt; outputpath="Order" inputpath="ORDER_NUM" />
&lt; outputpath="Description" inputpath="SHORT_TXT_TASK" />
&lt; outputpath="ItemNumber" inputpath="COMP_ITEM_NUM" />
&lt; outputpath="Item" inputpath="ITEM_CATEGORY" />
&lt;/map&gt;
&lt;map outputpath="WorkOrderMaterial" inputpath="EAM_WO_PRT">
&lt; outputpath="type" input="P" />
&lt; outputpath="Material" inputpath="MATERIAL_NUM" />
&lt; outputpath="Order" inputpath="ORDER_NUM" />
&lt; outputpath="Description" inputpath="SHORT_TXT_TASK" />
&lt; outputpath="ItemNumber" inputpath="COMP_ITEM_NUM" />
&lt; outputpath="Item" inputpath="PRT_CATEGORY" />
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="EAM_Notification_Mapping">EAM Notification Mapping</h3>

This is an example of enterprise asset management (EAM) notification mapping.

<b>Input</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"EAM_NOTIF": [

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"NOTIF_TYPE": "S2",

"SHORT_TEXT": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"MANU_WRRNTY_STDT": "00000000",

"MANU_WRRNTY_ENDT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"OBJECT_NO": "00000000",

"COMPTIME": "000000",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"PM_WKCTR": "10000000",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"COMP_CODE": "8000",

"SALES_ORG_LOC": "1000",

"DIVISION_LOC": "10",

"DIST_CHAN_LOC": "10",

"ADDR_NO_LOC": "23380",

"TIMESTAMP": "20150812124739",

"EAM_NOTIFICATION_ADDRESS": [

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ADDR_TYPE": "AG",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "000010001370",

"ADDR_TYPE": "NTF",

"ADDR_TYPE_ID": "000010001370",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100",

"EAM_ADDRESS": {

"ADDRNO": "0000024160",

"HOUSE_NUM": "35",

"STREET": "DUNLOP ROAD",

"CITY": "MULGRAVE",

"REGION": "VIC",

"POST_CODE": "3170",

"COUNTRY": "AU",

"LATITUDE": "37.200000000000",

"LONGITUDE": "49.400000000000",

"PHONE1": "545453577",

"PHONE2": "040323223232-124",

"MOBILE1": "967631273133",

"MOBILE2": "931313131124",

"FAX": "0401231312314",

"EMAIL": "CUSTOMER@voltmx.COM",

"TIMESTAMP": "20150708153054"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "SA",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "RR",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

}
]

},

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"NOTIF_TYPE": "S2",

"SHORT_TEXT": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"MANU_WRRNTY_STDT": "00000000",

"MANU_WRRNTY_ENDT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"OBJECT_NO": "00000000",

"COMPTIME": "000000",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"PM_WKCTR": "10000000",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"COMP_CODE": "8000",

"SALES_ORG_LOC": "1000",

"DIVISION_LOC": "10",

"DIST_CHAN_LOC": "10",

"ADDR_NO_LOC": "23380",

"TIMESTAMP": "20150812124739",

"EAM_NOTIFICATION_ADDRESS": [

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ADDR_TYPE": "AG",

"ADDR_TYPE_ID": "0000000007",

"PARTNER_TYPE": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "000010001370",

"ADDR_TYPE": "NTF",

"ADDR_TYPE_ID": "000010001371",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100",

"EAM_ADDRESS": {

"ADDRNO": "0000024160",

"HOUSE_NUM": "35",

"STREET": "DUNLOP ROAD",

"CITY": "MULGRAVE",

"REGION": "VIC",

"POST_CODE": "3170",

"COUNTRY": "AU",

"LATITUDE": "37.200000000000",

"LONGITUDE": "49.400000000000",

"PHONE1": "545453577",

"PHONE2": "040323223232-124",

"MOBILE1": "967631273133",

"MOBILE2": "931313131124",

"FAX": "0401231312314",

"EMAIL": "CUSTOMER@voltmx.COM",

"TIMESTAMP": "20150708153054"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "SA1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "RR1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

}
]

},

{

"NOTIF_NUM": "33A52D58AC4D94C5B935FE9D8CCC8ADC7",

"NOTIF_TYPE": "S2",

"SHORT_TEXT": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"MANU_WRRNTY_STDT": "00000000",

"MANU_WRRNTY_ENDT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"OBJECT_NO": "00000000",

"COMPTIME": "000000",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"PM_WKCTR": "10000000",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"COMP_CODE": "8000",

"SALES_ORG_LOC": "1000",

"DIVISION_LOC": "10",

"DIST_CHAN_LOC": "10",

"ADDR_NO_LOC": "23380",

"TIMESTAMP": "20150812124739",

"EAM_NOTIFICATION_ADDRESS": [

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ADDR_TYPE": "AG",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "000010001370",

"ADDR_TYPE": "NTF",

"ADDR_TYPE_ID": "000010001370",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100",

"EAM_ADDRESS": {

"ADDRNO": "0000024160",

"HOUSE_NUM": "35",

"STREET": "DUNLOP ROAD",

"CITY": "MULGRAVE",

"REGION": "VIC",

"POST_CODE": "3170",

"COUNTRY": "AU",

"LATITUDE": "37.200000000000",

"LONGITUDE": "49.400000000000",

"PHONE1": "545453577",

"PHONE2": "040323223232-124",

"MOBILE1": "967631273133",

"MOBILE2": "931313131124",

"FAX": "0401231312314",

"EMAIL": "CUSTOMER@voltmx.COM",

"TIMESTAMP": "20150708153054"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "SA",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "RR",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

}
]

},

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"NOTIF_TYPE": "S2",

"SHORT_TEXT": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"MANU_WRRNTY_STDT": "00000000",

"MANU_WRRNTY_ENDT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"OBJECT_NO": "00000000",

"COMPTIME": "000000",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"PM_WKCTR": "10000000",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"COMP_CODE": "8000",

"SALES_ORG_LOC": "1000",

"DIVISION_LOC": "10",

"DIST_CHAN_LOC": "10",

"ADDR_NO_LOC": "23380",

"TIMESTAMP": "20150812124739",

"EAM_NOTIFICATION_ADDRESS": [

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ADDR_TYPE": "AG",

"ADDR_TYPE_ID": "0000000007",

"PARTNER_TYPE": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "000010001370",

"ADDR_TYPE": "NTF",

"ADDR_TYPE_ID": "000010001371",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100",

"EAM_ADDRESS": {

"ADDRNO": "0000024160",

"HOUSE_NUM": "35",

"STREET": "DUNLOP ROAD",

"CITY": "MULGRAVE",

"REGION": "VIC",

"POST_CODE": "3170",

"COUNTRY": "AU",

"LATITUDE": "37.200000000000",

"LONGITUDE": "49.400000000000",

"PHONE1": "545453577",

"PHONE2": "040323223232-124",

"MOBILE1": "967631273133",

"MOBILE2": "931313131124",

"FAX": "0401231312314",

"EMAIL": "CUSTOMER@voltmx.COM",

"TIMESTAMP": "20150708153054"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "SA",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

},

{

"DOC_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ADDR_TYPE": "CON",

"ADDR_TYPE_ID": "0000000006",

"PARTNER_TYPE": "RR1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739",

"EAM_ADDRESS": {

"ADDRNO": "0000022490",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"CITY": "Clayton North",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}

}
]

},</code></pre>

<b>Output</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{

"Notification": [

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"Type_id": "S2",

"Description": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"TIMESTAMP": "20150812124739",

"ADDR_NO_LOC": "23380",

"Address": [

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000024160",

"city": "MULGRAVE",

"STREET": "DUNLOP ROAD",

"POST_CODE": "3170",

"COUNTRY": "AU",

"PHONE1": "545453577",

"TIMESTAMP": "20150708153054"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}
],

"Contacts": [

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000007",

"Partner": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "000010001370",

"ContactId": "000010001370",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ContactId": "0000000006",

"Partner": "SA",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ContactId": "0000000006",

"Partner": "RR",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

}
]

},

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"Type_id": "S2",

"Description": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"TIMESTAMP": "20150812124739",

"ADDR_NO_LOC": "23380",

"Address": [

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000024160",

"city": "MULGRAVE",

"STREET": "DUNLOP ROAD",

"POST_CODE": "3170",

"COUNTRY": "AU",

"PHONE1": "545453577",

"TIMESTAMP": "20150708153054"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}
],

"Contacts": [

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000007",

"Partner": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "000010001370",

"ContactId": "000010001371",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000006",

"Partner": "SA1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000006",

"Partner": "RR1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

}
]

},

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"Type_id": "S2",

"Description": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"TIMESTAMP": "20150812124739",

"ADDR_NO_LOC": "23380",

"Address": [

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000024160",

"city": "MULGRAVE",

"STREET": "DUNLOP ROAD",

"POST_CODE": "3170",

"COUNTRY": "AU",

"PHONE1": "545453577",

"TIMESTAMP": "20150708153054"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}
],

"Contacts": [

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ContactId": "0000000006",

"Partner": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "000010001370",

"ContactId": "000010001371",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ContactId": "0000000006",

"Partner": "SA1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC7",

"ContactId": "0000000006",

"Partner": "RR",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

}
]

},

{

"NOTIF_NUM": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"Type_id": "S2",

"Description": "new test notification",

"NOTIF_DATE": "20150812",

"NOTIF_TIME": "071728",

"FUNC_LOCATION": "1000-100-AA",

"FLOCN_DESC": "Engineering Workshop - Auto",

"EQUIP_NUM": "10000001",

"TECH_OBJ_DESC": "Toyota Hilux: Reg ABC-123",

"CATALOG_PROFILE": "000000001",

"PRIORITY": "4",

"INTERNAL_NUMBER": "000300000561",

"WRRNTY_START_DT": "00000000",

"WRRNTY_END_DT": "00000000",

"WORK_CENTER": "MAINT01",

"WC_SHORT_DESC": "General Maintenance",

"SYS_STATUS": "OSNO",

"TIME_ZONE": "UTC",

"PLANPLANT": "8000",

"LOC_ACC": "000000003874",

"STRMLFNDATE": "00000000",

"ENDMLFNDATE": "00000000",

"STRMLFNTIME": "000000",

"ENDMLFNTIME": "000000",

"DOWNTIME": "0.000000000E+00",

"UNIT": "H",

"PLANGROUP": "010",

"CREATED_BY": "CPIC_VTI",

"CREATED_ON": "20150812",

"CHANGED_ON": "00000000",

"DESSTDATE": "20150814",

"DESSTTIME": "071728",

"DESENDDATE": "20150817",

"DESENDTM": "071728",

"CUST_NO": "6",

"PRILANG": "E",

"REFDATE": "20150812",

"REFTIME": "071729",

"PURCH_DATE": "00000000",

"DIVISION": "10",

"SALES_ORG": "1000",

"DISTR_CHAN": "10",

"CHANGED_AT": "000000",

"CREATED_AT": "124729",

"NOTIFTMEZ": "INDIA",

"MAINTPLANT": "8000",

"BUS_AREA": "8000",

"CO_AREA": "9999",

"TIMESTAMP": "20150812124739",

"ADDR_NO_LOC": "23380",

"Address": [

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000024160",

"city": "MULGRAVE",

"STREET": "DUNLOP ROAD",

"POST_CODE": "3170",

"COUNTRY": "AU",

"PHONE1": "545453577",

"TIMESTAMP": "20150708153054"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

},

{

"id": "0000022490",

"city": "Clayton North",

"NAME1": "FLORIDA CANCER",

"STREET": "150 Blackburn Rd",

"POST_CODE": "3168",

"COUNTRY": "AU",

"PHONE1": "545453566",

"TIMESTAMP": "20150921112449"

}
],

"Contacts": [

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000007",

"Partner": "KU",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "000010001370",

"ContactId": "000010001371",

"ADDRESS_ID": "0000024160",

"TIMESTAMP": "20150401204100"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000006",

"Partner": "SA1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

},

{

"NotificationId": "3A52D58AC4D94C5B935FE9D8CCC8ADC8",

"ContactId": "0000000006",

"Partner": "RR1",

"ADDRESS_ID": "0000022490",

"TIMESTAMP": "20150812124739"

}
]

}
]

}</code></pre>

<b>Mapping</b>

<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;map outputpath="Notification" inputpath="EAM_NOTIF">
&lt; outputpath="NOTIF_NUM" inputpath="NOTIF_NUM" />
&lt; outputpath="Type_id" inputpath="NOTIF_TYPE" />
&lt; outputpath="Description" inputpath="SHORT_TEXT" />
&lt; outputpath="NOTIF_DATE" inputpath="NOTIF_DATE" />
&lt; outputpath="NOTIF_TIME" inputpath="NOTIF_TIME" />
&lt; outputpath="FUNC_LOCATION" inputpath="FUNC_LOCATION" />
&lt; outputpath="FLOCN_DESC" inputpath="FLOCN_DESC" />
&lt; outputpath="EQUIP_NUM" inputpath="EQUIP_NUM" />
&lt; outputpath="TECH_OBJ_DESC" inputpath="TECH_OBJ_DESC" />
&lt; outputpath="CATALOG_PROFILE" inputpath="CATALOG_PROFILE" />
&lt; outputpath="PRIORITY" inputpath="PRIORITY" />
&lt; outputpath="INTERNAL_NUMBER" inputpath="INTERNAL_NUMBER" />
&lt; outputpath="WRRNTY_START_DT" inputpath="WRRNTY_START_DT" />
&lt; outputpath="WRRNTY_END_DT" inputpath="WRRNTY_END_DT" />
&lt; outputpath="WORK_CENTER" inputpath="WORK_CENTER" />
&lt; outputpath="WC_SHORT_DESC" inputpath="WC_SHORT_DESC" />
&lt; outputpath="SYS_STATUS" inputpath="SYS_STATUS" />
&lt; outputpath="TIME_ZONE" inputpath="TIME_ZONE" />
&lt; outputpath="PLANPLANT" inputpath="PLANPLANT" />
&lt; outputpath="LOC_ACC" inputpath="LOC_ACC" />
&lt; outputpath="STRMLFNDATE" inputpath="STRMLFNDATE" />
&lt; outputpath="ENDMLFNDATE" inputpath="ENDMLFNDATE" />
&lt; outputpath="STRMLFNTIME" inputpath="STRMLFNTIME" />
&lt; outputpath="ENDMLFNTIME" inputpath="ENDMLFNTIME" />
&lt; outputpath="DOWNTIME" inputpath="DOWNTIME" />
&lt; outputpath="UNIT" inputpath="UNIT" />
&lt; outputpath="PLANGROUP" inputpath="PLANGROUP" />
&lt; outputpath="CREATED_BY" inputpath="CREATED_BY" />
&lt; outputpath="CREATED_ON" inputpath="CREATED_ON" />
&lt; outputpath="CHANGED_ON" inputpath="CHANGED_ON" />
&lt; outputpath="DESSTDATE" inputpath="DESSTDATE" />
&lt; outputpath="DESSTTIME" inputpath="DESSTTIME" />
&lt; outputpath="DESENDDATE" inputpath="DESENDDATE" />
&lt; outputpath="DESENDTM" inputpath="DESENDTM" />
&lt; outputpath="CUST_NO" inputpath="CUST_NO" />
&lt; outputpath="PRILANG" inputpath="PRILANG" />
&lt; outputpath="REFDATE" inputpath="REFDATE" />
&lt; outputpath="REFTIME" inputpath="REFTIME" />
&lt; outputpath="PURCH_DATE" inputpath="PURCH_DATE" />
&lt; outputpath="DIVISION" inputpath="DIVISION" />
&lt; outputpath="SALES_ORG" inputpath="SALES_ORG" />
&lt; outputpath="DISTR_CHAN" inputpath="DISTR_CHAN" />
&lt; outputpath="CHANGED_AT" inputpath="CHANGED_AT" />
&lt; outputpath="CREATED_AT" inputpath="CREATED_AT" />
&lt; outputpath="NOTIFTMEZ" inputpath="NOTIFTMEZ" />
&lt; outputpath="MAINTPLANT" inputpath="MAINTPLANT" />
&lt; outputpath="BUS_AREA" inputpath="BUS_AREA" />
&lt; outputpath="CO_AREA" inputpath="CO_AREA" />
&lt; outputpath="TIMESTAMP" inputpath="TIMESTAMP" />
&lt; outputpath="ADDR_NO_LOC" inputpath="ADDR_NO_LOC" />
&lt;map outputpath="" inputpath="EAM_NOTIFICATION_ADDRESS">
&lt;map outputpath="Address" inputpath=""&gt;
&lt; outputpath="id" inputpath="EAM_ADDRESS/ADDRNO" />
&lt; outputpath="city" inputpath="EAM_ADDRESS/CITY" />
&lt; outputpath="NAME1" inputpath="EAM_ADDRESS/NAME1" />
&lt; outputpath="STREET" inputpath="EAM_ADDRESS/STREET" />
&lt; outputpath="POST_CODE" inputpath="EAM_ADDRESS/POST_CODE" />
&lt; outputpath="COUNTRY" inputpath="EAM_ADDRESS/COUNTRY" />
&lt; outputpath="PHONE1" inputpath="EAM_ADDRESS/PHONE1" />
&lt; outputpath="TIMESTAMP" inputpath="EAM_ADDRESS/TIMESTAMP" />
&lt;/map&gt;
&lt;map outputpath="Contacts" inputpath=""&gt;
&lt; outputpath="NotificationId" inputpath="DOC_NUM" />
&lt; outputpath="ContactId" inputpath="ADDR_TYPE_ID" />
&lt; outputpath="Partner" inputpath="PARTNER_TYPE" />
&lt; outputpath="ADDRESS_ID" inputpath="ADDRESS_ID" />
&lt; outputpath="TIMESTAMP" inputpath="TIMESTAMP" />
&lt;/map&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>

<h3 id="Aggregation_Support_in_Mapper">Aggregation Support in Mapper</h3>

Aggregation support in Mapper allows you to iterate through a collection of objects and aggregate them based on a specific key.

<b>Use case:</b>

A user has multiple objects tracking daily employee hours and would like to combine them into a weekly summary of hours.

<b>Input object</b>

Time_Entry - Project_Task_id, Timesheet_Id, End_Time, Start_Time, Time_Type_Id, Activity_Description, Employee_Id, StatusId, Actual_Hours, Id, Project_Task_Type, Date

<b>Output object</b>

Timesheet - Employee_Id, Id, Start_Date, End_Date, Total_Hours

<p><b><u>Example for Aggregation Support in Mapper</u></b></p>
<ul>
  <li><b>AggregationToFindMinMaxAndSum</b></li>
</ul>
<table>
  <tr>
    <td><b>Input</b></td>    
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{
  "Time_Entry": [
	{
	"Project_Task_id" : "0000001202",
	"Timesheet_Id" : "MYTIME_V1_20161009",
	"End_Time" : "080000",
	"Start_Time" : "070000",
	"Time_Type_Id" : "0800",
	"Activity_Description" : "",
	"Employee_Id" : "1000001",
	"StatusId" : "2",
	"Actual_Hours" : "8.000",
	"Id" : "MYTIME_V1_1209_1",
	"Project_Task_Type" : "CC",
	"Date" : "20161012"
	}, 
	{
	"Project_Task_id" : "0000001202",
	"Timesheet_Id" : "MYTIME_V1_20161009",
	"End_Time" : "080000",
	"Start_Time" : "070000",
	"Time_Type_Id" : "0800",
	"Activity_Description" : "",
	"Employee_Id" : "1000001",
	"StatusId" : "2",
	"Actual_Hours" : "8Ti.000",
	"Id" : "MYTIME_V1_1209_1",
	"Project_Task_Type" : "CC",
	"Date" : "20161013"
	},
	{
        "Project_Task_id": "0000001202",
        "Timesheet_Id": "MYTIME_V1_20161009",
        "End_Time": "080000",
        "Start_Time": "070000",
        "Time_Type_Id": "0800",
        "Activity_Description": "",
        "Employee_Id": "1000001",
        "StatusId": "2",
        "Actual_Hours": "8.000",
        "Id": "MYTIME_V1_1209_1",
        "Project_Task_Type": "CC",
        "Date": "20161014"
        },
	{
        "Project_Task_id": "0000001202",
        "Timesheet_Id": "MYTIME_V1_20161009",
        "End_Time": "080000",
        "Start_Time": "070000",
        "Time_Type_Id": "0800",
        "Activity_Description": "",
        "Employee_Id": "1000001",
        "StatusId": "2",
        "Actual_Hours": "8.000",
        "Id": "MYTIME_V1_1209_1",
        "Project_Task_Type": "CC",
        "Date": "20161015"
	},
	{
        "Project_Task_id": "0000001202",
        "Timesheet_Id": "MYTIME_V1_20161016",
        "End_Time": "080000",
        "Start_Time": "070000",
        "Time_Type_Id": "0800",
        "Activity_Description": "",
        "Employee_Id": "1000001",
        "StatusId": "2",
        "Actual_Hours": "8.000",
        "Id": "MYTIME_V1_1209_1",
        "Project_Task_Type": "CC",
        "Date": "20161016"
	},
	{
        "Project_Task_id": "0000001202",
        "Timesheet_Id": "MYTIME_V1_20161016",
        "End_Time": "080000",
        "Start_Time": "070000",
        "Time_Type_Id": "0800",
        "Activity_Description": "",
        "Employee_Id": "1000001",
        "StatusId": "2",
        "Actual_Hours": "8.000",
        "Id": "MYTIME_V1_1209_1",
        "Project_Task_Type": "CC",
        "Date": "20161017"
	},
	{
        "Project_Task_id": "0000001202",
        "Timesheet_Id": "MYTIME_V1_20161016",
        "End_Time": "080000",
        "Start_Time": "070000",
        "Time_Type_Id": "0800",
        "Activity_Description": "",
        "Employee_Id": "1000001",
        "StatusId": "2",
        "Actual_Hours": "8.000",
        "Id": "MYTIME_V1_1209_1",
        "Project_Task_Type": "CC",
        "Date": "20161018"
	},
]
}</code></pre>
  </td>
  </tr>
  <tr>      
    <td><b>Output</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{"Timesheet" : [
	 {
		"Employee_Id": "1000001",
		"Id": " MYTIME_V1_1209_1",
		"Start_Date": "20161012",
		"End_Date": "20161015",
		"Total_Hours": "32.000"
	},
	{
		"Employee_Id": "1000001",
		"Id": " MYTIME_V1_1209_1",
		"Start_Date": "20161016",
		"End_Date": "20161018",
		"Total_Hours": "24.000"
	}
]}</code></pre>
  </td>
</tr>    
<tr>      
   <td><b>Mapping</b></td>  
   <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
	&lt;create-group inputpath="Time_Entry" output="$vars" outputpath="TimeEntryGroup"&gt;                            
		&lt;group-key inputpath="Timesheet_Id"/&gt;                    
	&lt;/create-group&gt;
	&lt;map outputpath="Timesheets" input="$vars" inputpath="TimeEntryGroup"&gt;
		&lt;set-param outputpath="Timesheet_Id" inputpath="Timesheet_Id"/&gt;
		&lt;set-param outputpath="Start_Date" input="99999999"/&gt;
		&lt;set-param outputpath="End_Date" input="-1"/&gt;
    	&lt;map outputpath="" inputpath="rows"&gt;
    		&lt;set-param outputpath="Employee_Id" inputpath="Employee_Id"/&gt;
    		&lt;set-param outputpath="Id" inputpath="Id" /&gt;
    		&lt;exec-function name="voltmx.logical:min" outputpath="Start_Date"&gt;
    			&lt;set-arg name="arg1" inputpath="Date" /&gt;
    			&lt;set-arg name="arg2" inputpath="Start_Date" input="$current-output"/&gt;
    		&lt;/exec-function&gt;
    		&lt;exec-function name="voltmx.logical:max" outputpath="End_Date"&gt;
    			&lt;set-arg name="arg1" inputpath="Date" /&gt;
    			&lt;set-arg name="arg2" inputpath="End_Date" input="$current-output"/&gt;
    		&lt;/exec-function&gt;
    		&lt;exec-function name="voltmx.logical:sum" outputpath="Total_Hours"&gt;
    			&lt;set-arg name="arg1" inputpath="Actual_Hours" /&gt;
    			&lt;set-arg name="arg2" inputpath="Total_Hours" input="$current-output"/&gt;
    		&lt;/exec-function&gt;
    	&lt;/map&gt;
    &lt;/map&gt;

&lt;/mapper&gt;</code></pre>

  </td>
</tr> 
</table>

<h3 id="Look-up_Support_in_Mapper">Look-up Support in Mapper</h3>

Look-up support in mapper helps you combine two parallel objects and generate a common object depending upon the key. For example, the user wants to combine two parallel objects Customers and Orders with one or more fields in common and to generate a common object depending upon the key.

<ul>
  <li>
    <b>Input object:</b>
    <ul>
      <li>Customers – Id, Name, Phone</li>      
      <li>
        Orders – OrderId, CustomerId, ProductId, Quantity <br/>
        In above objects, the  Id of Customers and the  CustomerId of Orders are same.
      </li>
    </ul>    
  </li>
</ul>
<ul>
  <li>
    <b>Output object:</b>
    <ul>
      <li>CustomerOrders – OrderId, CustomerName, Phone, ProductId, Quantity</li>      
    </ul>    
  </li>
</ul>
<p><b><u><u>Examples for Look-up Support in Mapper</u></u></b></p>
<ul>
  <li><b>LookupMappingWithMultiplePrimaryKey</b></li>
</ul>
<table>
  <tr>
    <td><b>Input</b></td>    
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Customers": [
        {
            "Id": "101",
            "Domain": "Finance",
            "Name": "Customer1",
            "Phone": "12345"
        },
        {
            "Id": "102",
            "Domain": "Healthcare",
            "Name": "Customer2",
            "Phone": "12346"
        }
    ],
    "Orders": [
        {
            "CustomerId": "101",
            "OrderDomain": "Finance",
            "OrderId": "111",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "CustomerId": "102",
            "OrderDomain": "Healthcare",
            "OrderId": "222",
            "ProductId": "Product2",
            "Quantity": "6"
        }
    ]
}</code></pre>
  </td>
  </tr>
  <tr>      
    <td><b>Output</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "CustomerOrders": [
        {
            "OrderId": "111",
            "CustomerName": "Customer1",
            "Phone": "12345",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "OrderId": "222",
            "CustomerName": "Customer2",
            "Phone": "12346",
            "ProductId": "Product2",
            "Quantity": "6"
        }
    ]
}</code></pre>
  </td>
</tr>    
<tr>      
   <td><b>Mapping</b></td>  
   <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> 
&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
	&lt;/create-lookup&gt;
	&lt;map inputpath="response_in" outputpath="response_out"&gt;
	&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
		&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
		&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
			&lt;lookup-key inputpath="CustomerId" /&gt;
			&lt;lookup-key inputpath="OrderDomain" /&gt;
		&lt;/lookup&gt;
		&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
		&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
		&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
  </td>
</tr> 
</table>

<ul>
  <li><b>LookupMappingWithOnePrimaryKey</b></li>
</ul>
<table>
  <tr>
    <td><b>Input</b></td>    
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Customers": [
        {
            "Id": "101",
            "Name": "Customer1",
            "Phone": "12345"
        },
        {
            "Id": "102",
            "Name": "Customer2",
            "Phone": "12346"
        }
    ],
    "Orders": [
        {
            "CustomerId": "101",
            "OrderId": "111",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "CustomerId": "102",
            "OrderId": "222",
            "ProductId": "Product2",
            "Quantity": "6"
        }
    ]
}</code></pre>
  </td>
  </tr>
  <tr>      
    <td><b>Output</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "CustomerOrders": [
        {
            "OrderId": "111",
            "CustomerName": "Customer1",
            "Phone": "12345",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "OrderId": "222",
            "CustomerName": "Customer2",
            "Phone": "12346",
            "ProductId": "Product2",
            "Quantity": "6"
        }
    ]
}</code></pre>
  </td>
</tr>    
<tr>      
   <td><b>Mapping</b></td>  
   <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
	&lt;/create-lookup&gt;
	&lt;map inputpath="response_in" outputpath="response_out"&gt;
	&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
		&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
		&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
			&lt;lookup-key inputpath="CustomerId" /&gt;
			&lt;lookup-key inputpath="OrderDomain" /&gt;
		&lt;/lookup&gt;
		&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
		&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
		&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
  </td>
</tr> 
</table>

<ul>
  <li><b>LookupMappingWhenPrimaryKeyNotFoundInChild</b></li>
</ul>
<table>
  <tr>
    <td><b>Input</b></td>    
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Customers": [
        {
            "Id": "101",
            "Name": "Customer1",
            "Phone": "12345"
        },
        {
            "Id": "102",
            "Name": "Customer2",
            "Phone": "12346"
        },
        {
            "Id": "103",
            "Name": "Customer3",
            "Phone": "12347"
        }
    ],
    "Orders": [
        {
            "CustomerId": "101",
            "OrderId": "111",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "CustomerId": "102",
            "OrderId": "222",
            "ProductId": "Product2",
            "Quantity": "6"
        }
    ]
}</code></pre>
  </td>
  </tr>
  <tr>      
    <td><b>Output</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "CustomerOrders": [
        {
            "OrderId": "111",
            "CustomerName": "Customer1",
            "Phone": "12345",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "OrderId": "222",
            "CustomerName": "Customer2",
            "Phone": "12346",
            "ProductId": "Product2",
            "Quantity": "6"
        }
    ]
}</code></pre>
  </td>
</tr>    
<tr>      
   <td><b>Mapping</b></td>  
   <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
	&lt;/create-lookup&gt;
	&lt;map inputpath="response_in" outputpath="response_out"&gt;
	&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
		&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
		&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
			&lt;lookup-key inputpath="CustomerId" /&gt;
			&lt;lookup-key inputpath="OrderDomain" /&gt;
		&lt;/lookup&gt;
		&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
		&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
		&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
  </td>
</tr> 
</table>

<ul>
  <li><b>LookupMappingWhenPrimaryKeyNotFoundInParent</b></li>
</ul>
<table>
  <tr>
    <td><b>Input</b></td>    
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Customers": [
        {
            "Id": "101",
            "Name": "Customer1",
            "Phone": "12345"
        },
        {
            "Id": "102",
            "Name": "Customer2",
            "Phone": "12346"
        }
    ],
    "Orders": [
        {
            "CustomerId": "101",
            "OrderId": "111",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "CustomerId": "102",
            "OrderId": "222",
            "ProductId": "Product2",
            "Quantity": "6"
        },
        {
            "CustomerId": "103",
            "OrderId": "333",
            "ProductId": "Product3",
            "Quantity": "7"
        }
    ]
}</code></pre>
  </td>
  </tr>
  <tr>      
    <td><b>Output</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "CustomerOrders": [
        {
            "OrderId": "111",
            "CustomerName": "Customer1",
            "Phone": "12345",
            "ProductId": "Product1",
            "Quantity": "5"
        },
        {
            "OrderId": "222",
            "CustomerName": "Customer2",
            "Phone": "12346",
            "ProductId": "Product2",
            "Quantity": "6"
        },
        {
            "OrderId": "333",
            "ProductId": "Product3",
            "Quantity": "7"
        }
    ]
}</code></pre>
  </td>
</tr>    
<tr>      
   <td><b>Mapping</b></td>  
   <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
	&lt;/create-lookup&gt;
	&lt;map inputpath="response_in" outputpath="response_out"&gt;
	&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
		&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
		&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
			&lt;lookup-key inputpath="CustomerId" /&gt;
			&lt;lookup-key inputpath="OrderDomain" /&gt;
		&lt;/lookup&gt;
		&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
		&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
		&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
  </td>
</tr> 
</table>

<h3 id="JavaScript_Support_in_Mapper">JavaScript Support in Mapper</h3>
<p>JavaScript support in mapper helps you write JavaScript code to manipulate return values into the format that is expected from the app data model, or manipulate input values from the app data model into back-end LOB. You can use JavaScript support in mapper based on the following scenarios:</p>
<ul>
  <li>LOB returns data in one format (such as dates, currency, arrays) and an <b>App Data</b> model expects the data in another format.</li>  
  <li>Attributes returned from LOB either to be clubbed or split before assigning the attributes to an <b>App Data</b> model.</li>
</ul>
<p>To enable JavaScript support in mapper, you need to write standalone JavaScript code snippets in mapper. Each standalone JavaScript snippet should be self-contained code and not dependent on other JavaScript files. JavaScript snippets can have multiple functions. A standalone JS snippet must be written <code>HTML CDATA</code>. ECMA 5.1 standard is supported JavaScript.</p>
<blockquote><b><em>Important:</em></b> In the <b>Methods</b> tab, <b>Request Mapping</b> tab, and Response Mapping tab, click the <b>Validate</b> button to validate whether the XML is proper. The action does not validate the JavaScript snippet code.</blockquote>

<p><b>JavaScript Snippet Rules</b></p>
<ul>
  <li>The Function element can occur zero or more times as a child element to the mapper element.</li>  
  <li>The JavaScript element must occur one time only as a child element to the Function element.</li> 
  <li>Set-arg and Script elements can occur as child elements to the JavaScript element.
    <ul>
      <li>The Set-arg element is optional, and can occur zero or more times. The element is a parameter for JS snippet.<br/>
        <p>For example:</p>
        <pre><code>&lt;set-arg name="firstName" inputpath="FirstName" /&gt;</code></pre>
        <ul>
          <li>inputpath - A field in LOB data</li>          
          <li>name - A JavaScript function argument that holds a field of LOB data.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>The Script element is mandatory and must occur only once. The JavaScript snippet should be written in the CDATA section of the element.</li> 
  <li>The <code>Exec-function</code> element invokes the JavaScript function. The exec-function name and function name should match.</li>
</ul>
<p>Sample JavaScript</p>
<p><b>Sample JavaScript Use Case</b></p>
<ul>
  <li>
    <b>LOB data</b> has the following attributes:
    <ul>
      <li>FirstName (for example, Bill)</li>      
      <li>MiddleName (for example, Tom)</li>      
      <li>LastName (for example, Sam)</li>
    </ul>
  </li>
</ul>
<ul>
  <li>
    <b>App Model Object</b> has the following attributes:
    <ul>
      <li>FirstName (for example, Bill)</li>      
      <li>MiddleName (for example, Tom)</li>      
      <li>LastName (for example, Sam)</li>
      <li><b>FullName</b><br/>
        <p>The <b>FullName</b> attribute is derived from FirstName, MiddleName and LastName - for example, <code>FullName = FirstName + MiddlName + first letter of LastName + “. “</code></p><br>
        <p>The result: <b>Bill Tom S.</b></p>
      </li>
    </ul>
  </li>
</ul>

<p><b>Sample JavaScript mapping.xml</b></p>
<p>The following sample mapping.xml contains JavaScript code can be used as a reference. The following highlighted XML code shows how JavaScript code can be written and used to achieve the scenario.</p>
<pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
	<mark>&lt;function name="NameConcat"&gt;
		&lt;javascript outputpath="FullName"&gt;
			&lt;set-arg name="firstName" inputpath="FirstName" /&gt;
			&lt;set-arg name="middleName" inputpath="MiddleName" /&gt;
			&lt;set-arg name="lastName" inputpath="LastName" /&gt;
			&lt;script&gt;
			&lt;![CDATA[
			  function concat(){
			   var result = firstName+' '+ middleName + ' '+lastName.substring(0, 1).toUpperCase() + '. '
			    return result;
  			    }
			   concat();
			 ]&gt;
			&lt;/script&gt;
		&lt;/javascript&gt;
	&lt;/function&gt;</mark>
	&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
	&lt;/create-lookup&gt;
	&lt;map inputpath="response_in" outputpath="response_out"&gt;
	&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
		&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
		&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
			&lt;lookup-key inputpath="CustomerId" /&gt;
			&lt;lookup-key inputpath="OrderDomain" /&gt;
		&lt;/lookup&gt;
		&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
		&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
		&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
<br>
<p><b><u>Examples for JavaScript Support in Mapper</u></b></p>   
<ul>
<li><b>SimpleJSFunction</b></li>
<table>
    <tr>
      <td><b>Input</b></td>    
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Person": [
        {
            "Id": "1021",
            "FirstName": "bill",
            "MiddleName": "tom",
            "LastName": "sam"
        }
    ]
}</code></pre>
      </td>
    </tr>
    <tr>      
        <td><b>Output</b></td>  
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{
    "PersonInfo": [
        {
            "Id": "1021",
            "FullName": "bill T. sam"
        }
    ]
}</code></pre>
    </td>
    </tr>    
      <tr>      
      <td><b>Mapping</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
    &lt;function name="NameConcat"&gt;
    	&lt;javascript outputpath="FullName"&gt;
    		&lt;set-arg name="firstName" inputpath="FirstName" /&gt;
    		&lt;set-arg name="middleName" inputpath="MiddleName" /&gt;
    		&lt;set-arg name="lastName" inputpath="LastName" /&gt;
    		&lt;script&gt;
    				&lt;![CDATA[
    		              function concat(){
    		                 var result = firstName +' ' + middleName.substring(0, 1).toUpperCase() + '. ' + lastName
    		                 return result;
    		              }
    		              concat();
    		        ]&gt;
    		&lt;/script&gt;
    	&lt;/javascript&gt;
    &lt;/function&gt;
&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
&lt;/create-lookup&gt;
&lt;map inputpath="response_in" outputpath="response_out"&gt;
&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
&lt;lookup-key inputpath="CustomerId" /&gt;
&lt;lookup-key inputpath="OrderDomain" /&gt;
&lt;/lookup&gt;
&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
</td>
</tr>
</table>

<li><b>MixedFunctions</b></li>
<table>
    <tr>
        <td><b>Input</b></td>    
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "A": [
        {
            "FirstName": "bill",
            "MiddleName": "tom",
            "LastName": "sam"
        }
    ]
}</code></pre>
    </td>
    </tr>
    <tr>      
        <td><b>Output</b></td>  
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "A": [
        {
            "Q1": "bill-tom-sam",
            "NameInUpperCase": "BILL-TOM-SAM"
        }
    ]
}</code></pre>
    </td>
    </tr>    
    <tr>      
    <td><b>Mapping</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
    &lt;function name="DisplayInUpperCase"&gt;
    	&lt;javascript outputpath="NameInUpperCase"&gt;
    		&lt;set-arg name="firstName" inputpath="FirstName" /&gt;
    		&lt;set-arg name="middleName" inputpath="MiddleName" /&gt;
    		&lt;set-arg name="lastName" inputpath="LastName" /&gt;
    		&lt;script&gt;
                &lt;![CDATA[
                   function convertToUppercase(){
                      var result = firstName + '-'+ middleName +'-'+ lastName;
                      return result.toUpperCase();
                   }
                   convertToUppercase();
                ]&gt;
             &lt;/script&gt;
    	&lt;/javascript&gt;
    &lt;/function&gt;
&lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
&lt;/create-lookup&gt;
&lt;map inputpath="response_in" outputpath="response_out"&gt;
&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
&lt;lookup-key inputpath="CustomerId" /&gt;
&lt;lookup-key inputpath="OrderDomain" /&gt;
&lt;/lookup&gt;
&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
</td>
</tr>
</table>

<li><b>JSFunctionWithZeroInputs</b></li>
<table>
    <tr>
        <td><b>Input</b></td>    
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Person": [
        {
            "Id": "1021"
        }
    ]
}</code></pre>
    </td>
    </tr>
    <tr>      
        <td><b>Output</b></td>  
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "PersonInfo": [
        {
            "Id": "1021",
            "Name": "Bill Tom Sam"
        }
    ]
}</code></pre>
    </td>
    </tr>    
    <tr>      
    <td><b>Mapping</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
    &lt;function name="GiveSomeText"&gt;
    	&lt;javascript outputpath="Name"&gt;
    		&lt;script&gt;
               &lt;![CDATA[
                 function concat(){
                    return 'Bill Tom Sam';
                 }
                 concat();
               ]&gt;
          &lt;/script&gt;
    	&lt;/javascript&gt;
    &lt;/function&gt;
    &lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
&lt;/create-lookup&gt;
&lt;map inputpath="response_in" outputpath="response_out"&gt;
&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
&lt;lookup-key inputpath="CustomerId" /&gt;
&lt;lookup-key inputpath="OrderDomain" /&gt;
&lt;/lookup&gt;
&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
</td>
</tr>
 </table>

<li><b>JSCodeNotAvailable</b></li>
    <table>
    <tr>
        <td><b>Input</b></td>    
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Person": [
        {
            "Id": "1021"
        }
    ]
}</code></pre>
    </td>
    </tr>
    <tr>      
        <td><b>Output</b></td>  
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "PersonInfo": [
        {
            "Id": "1021",
            "Name": ""
        }
    ]
}</code></pre>
    </td>
    </tr>    
    <tr>      
    <td><b>Mapping</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
    &lt;function name="someText"&gt;
    	&lt;javascript outputpath="Name"&gt;
    	&lt;script&gt;
               &lt;![CDATA[
                      -
                    ]&gt;
        &lt;/script&gt;
    	&lt;/javascript&gt;
    &lt;/function&gt;
    &lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
&lt;/create-lookup&gt;
&lt;map inputpath="response_in" outputpath="response_out"&gt;
&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
&lt;lookup-key inputpath="CustomerId" /&gt;
&lt;lookup-key inputpath="OrderDomain" /&gt;
&lt;/lookup&gt;
&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
</td>
</tr>
 </table>

<li><b>MapperExceptionWhenScriptTagMissedInJS</b></li>
    <table>
    <tr>
        <td><b>Input</b></td>    
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> {
    "Person": [
        {
            "Id": "1021"
        }
    ]
}</code></pre>
    </td>
    </tr>
    <tr>      
        <td><b>Output</b></td>  
        <td>null script</td>
    </tr>    
    <tr>      
    <td><b>Mapping</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
    &lt;function name="someText"&gt;
    	&lt;javascript>
           &lt;![CDATA[
             function concat(){
                return NoElement.text;
             }
             concat();
           ]&gt;
    	&lt;/javascript&gt;
    &lt;/function&gt;
    &lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
&lt;/create-lookup&gt;
&lt;map inputpath="response_in" outputpath="response_out"&gt;
&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
&lt;lookup-key inputpath="CustomerId" /&gt;
&lt;lookup-key inputpath="OrderDomain" /&gt;
&lt;/lookup&gt;
&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
</td>
</tr>
</table>

<li><b>MapperExceptionForErrorProneJS</b></li>
<table>
    <tr>
        <td><b>Input</b></td>    
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">{
    "Person": [
        {
            "Id": "1021"
        }
    ]
}</code></pre>
    </td>
    </tr>
    <tr>      
        <td><b>Output</b></td>  
        <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;">sun.org.mozilla.javascript.internal.EcmaError: ReferenceError: "NoElement" is not defined. (&lt;Unknown source&gt;#5) in &lt;Unknown source&gt; at line number 5</code></pre>
    </td>
    </tr>    
    <tr>      
    <td><b>Mapping</b></td>  
    <td><pre><code style="display:block;background-color:#eee;border:1px solid #999;padding:10px;"> &lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
&lt;mapper xmlns="http://www.voltmx.com/ns/mapper"&gt;
    &lt;function name="someText"&gt;
    	&lt;javascript>
    	&lt;script&gt;
           &lt;![CDATA[
             function concat(){
                return NoElement.text;
             }
             concat();
           ]&gt;
          &lt;/script&gt;
    	&lt;/javascript&gt;
    &lt;/function&gt;
    &lt;create-lookup&gt;
&lt;lookup-key inputpath="Id"/&gt;
&lt;lookup-key inputpath="Domain"/&gt;
&lt;/create-lookup&gt;
&lt;map inputpath="response_in" outputpath="response_out"&gt;
&lt;map outputpath="CustomerOrders" inputpath="Orders"&gt;
&lt;set-param outputpath="OrderId" inputpath="OrderId" /&gt;
&lt;lookup input="$vars" inputpath="customerMap" outputpath="customerRef" output="$vars"&gt;
&lt;lookup-key inputpath="CustomerId" /&gt;
&lt;lookup-key inputpath="OrderDomain" /&gt;
&lt;/lookup&gt;
&lt;set-param outputpath="CustomerName" inputpath="$vars/customerRef/Name" /&gt;
		&lt;set-param outputpath="Phone" inputpath="$vars/customerRef/Phone" /&gt;
&lt;set-param outputpath="ProductId" inputpath="ProductId" /&gt;
&lt;set-param outputpath="Quantity" inputpath="Quantity" /&gt;
&lt;/map&gt;
&lt;/map&gt;
&lt;/mapper&gt;</code></pre>
</td>
</tr>
</table>
</ul>
