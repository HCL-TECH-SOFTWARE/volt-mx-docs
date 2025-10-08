
Enhancement of Client Side Network error code messages
=======================================================

Error message format is same for error code : 2030 and 2031

|  Channel  |Key to get error message  |Error message Format |
| ------------- |:-------------:|:-------------:|
|SPA     | userInfo     |{ code : Error code<br>domain : Domain name<br>message :<br>Generic error message<br>status : Status code<br>userInfo : {} } |
|iOS     | userInfo     |{ Domain : Dommain name <br>Code : Error code<br>UserInfo : Error message:<br>CallStack : {} } |
|Android      | message     |{ code : Error code<br>message : Error message<br>callStack : {} } |
|Windows       | message     |{ code : Error code<br>message : Error message<br>callStack : {}<br>domain : Domain name } |


>**Note :**<br> 1. In windows error message comes with pre-appended "An error occurred in the network layer" text along with actual error message, whereas in SPA this text and error message are sent separately. In
Android and iOS only error message sent in response.<br>2. Error message in SPA is different than what it is shown in Android, iOS,
and Windows.

