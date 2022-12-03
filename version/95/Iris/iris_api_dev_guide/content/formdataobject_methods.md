                            

Methods
=======

The FormData object supports the following methods.

<details close markdown="block"><summary>append</summary>

This API appends the specified entry to the collection of the FormData object.

### Syntax

<<formobject>>.append([name](#Name), [value](#Value))

### Parameters

name \[string\] - Mandatory

The name of the entry to be added to the collection.

value \[string or rawbytes\] - Mandatory

The value of the entry to be added to the collection.

### Return Values

None

### Platform Availability

Available on all platforms except Windows and SPA.

### Example

```

// Example for value as string  
function uploadFile1()
{
	try{
	var request = new voltmx.net.HttpRequest();
	glob_req = request;
	.....
	var frmData= new voltmx.net.FormData();
	frmData.append("param1","VOLTMX LABS");	
	}  
       catch(ex){
	frmSend.responseTA.text=ex.message;
	}	 
}  
// Example for value as rawbytes for file upload  
function uploadFile2()
{  
	try{
	var request = new voltmx.net.HttpRequest();
	glob_req = request;
	.....
	var frmData= new voltmx.net.FormData();  
       var path = voltmx.io.FileSystem.getDataDirectoryPath() + "/SampleImage.png"  
var f1 = voltmx.io.FileSystem.getFile(path);  
//Filename with rawbytes  
frmData.append(f1.name, f1.read());  
       }  
       catch(ex){
       	frmSend.responseTA.text=ex.message;
	   }	 
}  

```

### Consolidated Working Example

```

var glob_req;
function notimeoutset()
{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send();   
}
function timeoutsettozero()
{
      try{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.timeout=0;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send();
      }catch(ex){ 
            frmtimeout.resultTA.text=ex.message();    
      }     
}
function timeoutset()
{

      try{
            var request = new voltmx.net.HttpRequest();
            glob_req=request;
            request.timeout=5000;
            //request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
            request.open(constants.HTTP_METHOD_GET, "www.planetsoft.com");
            request.send();
      }catch(ex){ 
            frmtimeout.resultTA.text=ex.message();    
      }     
}

function syncnotimeoutset()
{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO",false);
      request.send();
      
      
}

function synctimeoutsettozero()
{
      try{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.timeout=0;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO",false);
      request.send();
      }catch(ex){ 
            frmtimeout.resultTA.text=ex.message();    
      }
      
}
function synctimeoutset()
{

      try{
            var request = new voltmx.net.HttpRequest();
            glob_req=request;
            request.timeout=5000;
            //request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO",false);
            request.open(constants.HTTP_METHOD_GET, "www.planetsoft.com",false);
            request.send();
      }catch(ex){
      
            frmtimeout.resultTA.text=ex.message();
      
      }
      
}

function synctimeoutsethigh()
{
      try{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.timeout=5000;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO",false);
      request.send();
      }catch(ex){ 
            frmtimeout.resultTA.text=ex.message();    
      }
      
}

function timeoutsethigh()
{
      try{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.timeout=null;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send();
      }catch(ex){ 
            frmtimeout.resultTA.text=ex.message();    
      }     
}

function timeoutStatusClick(){
frmtimeout.statusCd.text=glob_req.status;
frmtimeout.StatusTxt.text=glob_req.statusText;
frmtimeout.responseType.text=glob_req.responseType;
frmtimeout.resultTA.text=glob_req.response;
frmtimeout.readyState.text=glob_req.readyState;
}

function statusText()
{
      var request = new voltmx.net.HttpRequest();
      glob_req = request;
      
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      frmStatus.statusLabel.text=request.status; 
      frmStatus.statusTextLabel.text=request.statusText;
      request.send();
}
      
      
function errorStatusText()
{
      var request = new voltmx.net.HttpRequest();
      glob_req = request;
      request.onReadyStateChange=statusreceived;
      request.open](constants.HTTP_METHOD_GET, "http://10.10.5.19:9090/middleware/version1.md");
      frmStatus.statusLabel.text=request.status; 
      frmStatus.statusTextLabel.text=request.statusText;
      request.send();
}

function statBtnClick(){
      frmStatus.statusAfterSend.text=glob_req.status; 
      frmStatus.statusTextAfterSend.text=glob_req.statusText;
      frmStatus.readyState.text=glob_req.readyState;

}

function statusreceived(){
      if(this.readyState == constants.HTTP_READY_STATE_HEADERS_RECEIVED){
      frmStatus.statusLabel.text=this.status; 
      }
}


function jsonResponseType()
{
      var request = new voltmx.net.HttpRequest();
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send();
      frmResponseType.respTypeLabel.text=request.responseType; 
}
function xmlResponseType()
{
      var request = new voltmx.net.HttpRequest();
      request.open(constants.HTTP_METHOD_GET, "http://feeds.foxnews.com/foxnews/health");
      request.send();
      frmResponseType.respTypeLabel.text=request.responseType; 
}
function rawDataResponseType()
{
      var request = new voltmx.net.HttpRequest();
      request.open(constants.HTTP_METHOD_GET, "http://ilabs.uw.edu/sites/default/files/sample_0.pdf");
      request.send();
      frmResponseType.respTypeLabel.text=request.responseType; 
}
function textDataResponseType()
{
      var request = new voltmx.net.HttpRequest();
      request.open](constants.HTTP_METHOD_GET, "http://10.10.5.19:9090/middleware/version.md");
      request.send();
      frmResponseType.respTypeLabel.text=request.responseType; 
}
function readyState1()
{
      var request = new voltmx.net.HttpRequest();
      request.onReadyStateChange=callbackHandler1;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send(); 
}


function readyStateSync()
{
      var request = new voltmx.net.HttpRequest();
      request.onReadyStateChange=callbackHandler1;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO",false);
      request.send(); 
}


function callbackHandler1(){
      frmReadyState.readyStateLabel.text=frmReadyState.readyStateLabel.text+","+request.readyState;
      if(request.readyState == constants.HTTP_READY_STATE_HEADERS_RECEIVED){
      frmReadyState.responseHeadersTA.text=request.getAllResponseHeaders();
      frmReadyState.headerValue.text=request.getResponseHeader("Date");
      }else if(request.readyState == constants.HTTP_READY_STATE_DONE){     
      frmReadyState.responseTA.text=request.response;
      }

}


function onreadyStateChng()
{
      var request = new voltmx.net.HttpRequest();
      request.onReadyStateChange=onreadStateHandler1;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send(); 
}
function onreadStateHandler1(){
            frmReadyState.readyStateLabel.text=frmReadyState.readyStateLabel.text+","+request.readyState;
      if(request.readyState == constants.HTTP_READY_STATE_HEADERS_RECEIVED){
            frmReadyState.responseHeadersTA.text=request.getAllResponseHeaders;
            request.onReadyStateChange=onreadStateHandler2;
      }else if(request.readyState == constants.HTTP_READY_STATE_DONE){     
            frmReadyState.responseTA.text=request.response;
      }

}

function onreadStateHandler2(){
      frmReadyState.ovrdlabel.text = "FROM OVERRIDE CALL BACK METHOD";
      frmReadyState.readyStateLabel.text=frmReadyState.readyStateLabel.text+","+request.readyState;
      if(request.readyState == constants.HTTP_READY_STATE_HEADERS_RECEIVED){
            frmReadyState.responseHeadersTA.text=request.getAllResponseHeaders;
            request.onReadyStateChange=onreadStateHandler2;
      }else if(request.readyState == constants.HTTP_READY_STATE_DONE){     
            frmReadyState.responseTA.text=request.response;
      }
}



function setReqHeader()
{
      var request = new voltmx.net.HttpRequest();
      request.open(constants.HTTP_METHOD_GET, "http://ilabs.uw.edu/sites/default/files/sample_0.pdf");
      request.send();
      request.setRequestHeader("From","vinay.akula@voltmx.com");
}

function getResponseHeaderValid()
{
      var request = new voltmx.net.HttpRequest();
      request.onReadyStateChange=getHeaderValue;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send(); 
      }

function InValidgetResponseHeader()
{
      var request = new voltmx.net.HttpRequest();
      request.onReadyStateChange=getHeaderValue;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      request.send(); 
      
}

function getResponseHeaderBfrSend()
{
      var request = new voltmx.net.HttpRequest();
      //request.onReadyStateChange=getHeaderValue;
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
      frmResponseHeaders.headerValue.text=request.getResponseHeader("Date");
      request.send(); 
}
function getSetCookie()
{
      var request = new voltmx.net.HttpRequest();
      request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");      
      request.send(); 
      frmResponseHeaders.headerValue.text=request.getResponseHeader("Set-Cookie");
}

function getheaderclick()
{
      
      frmResponseHeaders.headerValue.text=request.getResponseHeader("Set-Cookie");
}


function getHeaderValue()
{
      if(this.readyState == constants.HTTP_READY_STATE_HEADERS_RECEIVED){
            frmResponseHeaders.headerValue.text=this.getResponseHeader("Date");
            frmResponseHeaders.InvalidHeaderlb.text=this.getResponseHeader("Date11");
      }
      
}

function redirectService()
{
      var request = new voltmx.net.HttpRequest();
      glob_req=request;
      request.open(constants.HTTP_METHOD_GET, "http://10.10.5.19:9090/HttpRequestStub/ServiceStub?testCase_id=redirect_tc");
      request.send(); 
}
function redirectResultClick(){
            frmRedirects.redirectStatus.text=glob_req.status;
           frmRedirects.redirectResponseType.text=glob_req.responseType;
            frmRedirects.redirectresultTA.text=glob_req.response;
}
```

![](resources/prettify/onload.png)
