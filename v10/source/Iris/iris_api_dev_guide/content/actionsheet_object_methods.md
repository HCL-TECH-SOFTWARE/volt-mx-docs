                             


ActionSheet Object
==================

The ActionSheet object implements Apple's Action Sheets for iOS apps. They are not supported on other platforms. The ActionSheet object comprises of the following elements:

Methods
-------

<p>The <code>ActionSheet</code> object contains the following methods.</p>
<details close markdown="block"><summary>addAction</summary>
<hr>
<p>Adds an <code>ActionItem</code> object to the <code>ActionSheet</code> object.</p>
<p><b>Syntax</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">addAction(
    actionItem1)</code></pre>
<br/>
<p><b>Input Parameters</b></p>
<table style="margin-left:40px;">
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td>actionItem1</td>
<td>An <code>ActionItem</code> object to add to the Action Sheet.</td>
</tr>
</table>
<p><b>Example</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">//Creating the Action Item Object
setActionSheet: function() {
    var actionItem = new voltmx.ui.ActionItem({
        "title": "Open Basecamp",
        "style": constants.ACTION_STYLE_DEFAULT,
        "action": function() {
            voltmx.application.openURL("https://support.hcltechsw.com/community?id=community_forum&sys_id=1cdf6e1a1bf31898beab64e6ec4bcbae");
        }
    });
    //Adding action to the Action Sheet object    
    actionSheetObject.addAction(actionItem);
}</code></pre>
<br/>
<p><b>Return Values</b></p>
<p style="margin-left:20px;">None</p>
<p><b>Platform Availability</b></p>
<p style="margin-left:20px;">iOS only</p>
<hr>
</details>

<details close markdown="block"><summary>Dismiss</summary>
<hr>
<p>Dismisses the Action Sheet on the display.</p>
<p><b>Syntax</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">dismiss()</code></pre>
<br/>
<p><b>Input Parameters</b></p>
<p style="margin-left:20px;">None</p>
<p><b>Example</b></p>
<pre><code style="margin-left:20px;display:block;background-color:#eee;">actionSheetObject.dismiss();</code></pre>
<br/>
<p><b>Return Values</b></p>
<p style="margin-left:20px;">None</p>
<p><b>Platform Availability</b></p>
<p style="margin-left:20px;">iOS only</p>
<hr>  
</details>
<details close markdown="block"><summary>setAnchorConfiguration</summary>
<hr>
<p>Sets the anchor configuration information on iPads.</p>
<p><b>Syntax</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">setAnchorConfiguration(
    configParams)</code></pre>
<br/>
<p><b>Input Parameters</b></p>
<table style="margin-left:40px;">
<tr>
<th>Parameter</th>
<th>Description</th>
</tr>
<tr>
<td>configParams</td>
<td>
<p>A JavaScript object containing key-value pairs that specify the anchor configuration parameters for the Action Sheet. The following keys are required.</p>
<p>
<ul>
<li><code>direction:</code> A constant from the <a href="constants_namespace.html#constants-by-functional-area">Action Sheet Anchor Direction Constants</a> that specifies the side of the widget that the Action Sheet attaches to.</li>
<li><code>widget:</code> The widget that the Action Sheet attaches to.</li>
</ul>
</p>
</td>
</tr>
</table>
<p><b>Example</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">var configInfo = {
    "direction": constants.ANCHOR_DIRECTION_LEFT,
    "widget": frmWidgetName
};
myActionSheet.setAnchorConfiguration(configInfo);</code></pre>
<br/>
<p><b>Return Values</b></p>
<p style="margin-left:20px;">None</p>
<p><b>Remarks</b></p>
<p style="margin-left:20px;">This method is only used on the iPad</p>
<p><b>Platform Availability</b></p>
<p style="margin-left:20px;">iPad only</p>
<hr>  
</details>

<details close markdown="block"><summary>show</summary>
<hr>
<p>Shows the Action Sheet on the display.</p>
<p><b>Syntax</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">show();</code></pre>
<br/>
<p><b>Example</b></p>
<pre><code style="margin-left:40px;display:block;background-color:#eee;">actionSheetObject.show();</code></pre>
<br/>
<p><b>Input Parameters</b></p>
<p style="margin-left:20px;">None</p>
<p><b>Return Values</b></p>
<p style="margin-left:20px;">None</p>
<p><b>Platform Availability</b></p>
<p style="margin-left:20px;">iOS only</p>
<hr>  
</details>