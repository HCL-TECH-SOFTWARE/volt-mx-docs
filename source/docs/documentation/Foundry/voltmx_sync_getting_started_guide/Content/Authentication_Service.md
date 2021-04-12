---
layout: "documentation"
category: "voltmx_sync_getting_started_guide"
---
                     

Authentication Service
======================

You can perform the following modes of authentication on sync from client side.

Authenticate the User
---------------------

In this mode we authenticate the userid with the given password. Call the service at the following url.

http://<Host-Name>:<PORT>/syncservice/resources/authenticateUser

The Content-Type should be set to “application/json” and pass the following parameters to the service

*   userid
*   password

Authenticate the Application
----------------------------

In this mode we check whether the userid and password is valid and the user is authorized to access the specified application.

Call the service at the following url:

http://<Host-Name>:<PORT>/syncservice/resources/authenticateUser

The Content-Type should be set to “application/json” and pass the following parameters to the service

*   userid
*   password
*   appid

Authenticate the Device
-----------------------

In this mode we check whether the userid and password is valid and the user is authorized to specified device and application.

Call the service at the following url:

http://<Host-Name>:<PORT>/syncservice/resources/authenticateUser

Content-Type should be set to “application/json” and pass the following parameters to the service

*   userid
*   password
*   appid
*   deviceid

### JavaScript Example

The following sample in js calls the Authenticate Service based on the inputs provided.

{% highlight voltMx %}function onLogIn(){
	var gblUserId = frmLogin.txtUserId.text;	
	var gblPassword= frmLogin.txtPwd.text;
	var httpheaders = \[\]
	httpheaders\[ voltmx.decrement("Content-Type") \] = "application/json"; 	
	if(gblUserId != "" && gblPassword != ""){
		var params = {userid:gblUserId, password:gblPassword, appId : 
		gblAppId};
		params\[ voltmx.decrement("httpheaders") \] = httpheaders; 
		var res;
		var url =
		**http://127.0.0.1:8081/syncservice/resources/authenticateUser"**;
		res = voltmx.net.invokeService(url, params, true);
		var basicConf = 
		{message: res\[“msg”\],alertType: constants.ALERT\_TYPE\_INFO 
		,alertTitle: "",yesLabel:”Ok”,noLabel: "", alertHandler: null};
		var pspConf = {};
		voltmx.ui.Alert(basicConf,pspConf); 
	}else{
		var basicConf = {message: “User Name and Password is 
		manadatory”,alertType: 
		constants.ALERT\_TYPE\_ ERROR ,alertTitle: "",
		yesLabel:”Ok”,noLabel: "", alertHandler: 
		null};
		var pspConf = {};
		voltmx.ui.Alert(basicConf,pspConf);
	}
}

{% endhighlight %}
