                            


voltmx.signInWithApple Namespace
==============================

The SignInWithApple API contains the voltmx.signInWithApple Namespace and the following API elements:

Functions
---------

The voltmx.signInWithApple namespace provides the following function:

<details close markdown="block"><summary>voltmx.signInWithApple.evaluateCredentialStateforUserID</summary> 

* * *

The evaluateCredentialStateforUserID method is used to get the current state of an opaque user ID that was specified previously.

### Syntax

```

voltmx.signInWithApple.evaluateCredentialStateforUserID(<userID>,<callback>);
```

### Input Parameters

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">userID</td><td class="TableStyle-Basic-BodyD-Column1-Body1">An opaque user identifier that identifies the state of the SignInWithApple widget.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyA-Column1-Body1">A callback function that returns one of the following 3 possible states: <br/> voltmx.signInWithApple.CREDENTIAL_STATE_REVOKED <br/>voltmx.signInWithApple.CREDENTIAL_STATE_AUTHORIZED <br/>voltmx.signInWithApple.CREDENTIAL_STATE_NOT_FOUND</td></tr></tbody></table>

### Example

```

voltmx.signInWithApple.evaluateCredentialStateforUserID(result.user,callback3);  
function callback3(result) {  
    if(result == voltmx.signInWithApple.CREDENTIAL_STATE_REVOKED) {  
        alert("I AM Revoked");  
        alert("CredState :" + result);  
    }  
    if(result == voltmx.signInWithApple.CREDENTIAL_STATE_AUTHORIZED) {  
        alert("I AM Authorized");  
        alert("CredState :" + result);  
    }  
    if(result == voltmx.signInWithApple.CREDENTIAL_STATE_NOT_FOUND) {  
        alert("I AM Not found");  
        alert("CredState :" + result);  
    }  
}
```

### Return Value

String - Reference (CREDENTIAL\_STATE\_REVOKED)

### Platform Availability

iOS 13 or later

![](resources/prettify/onload.png)
