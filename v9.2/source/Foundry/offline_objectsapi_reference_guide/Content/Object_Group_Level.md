

Object Group-level
==================

Request
-------

### Request URL

<APP\_CONTEXT>/mgmt/rest/ rest/policies

### Request Method

POST

### Request Headers

Content-Type: application/json

Accept: application/json

X-Requested-With: XMLHttpRequest

### Request Payload

{  
"contentdata": {  
"pf": {  
"phone": true,  
"sms": true,  
"email": true,  
"phonerule": "allow",  
"smsrule": "restrict",  
"emailrule": "restrict",  
"camera": "true",  
"smsnum": "Test",  
"emaildmn": "test@voltmx.com",  
"phonenum": "1234567890,9876540321"  
},  
"ds": {  
"encr": "true",  
"enkey": 256,  
"enalgo": "aes",  
"exts": {  
"read": true,  
"write": true  
}  
},  
"appf": {  
"applock": "false",  
"apprgn": false,  
"appexp": true,  
"appidle": false,  
"timefencerule": "allow",  
"rangerule": "allow",  
"clpbrd": {  
"enabled": "false"  
},  
"docsh": "true",  
"range": "",  
"bhu": {  
"enabled": "true",  
"bhtp": "08:00-20:00/GMT+05:30"  
},  
"bdays": {  
"enabled": "true",  
"boff": "7,1",  
"holidays": ""  
},  
"appspan": "09/22/2014 15:05",  
"idletm": 0  
},  
"timedata": "7571540635845395177",  
"nw": {  
"nwsrc": {  
"wifi": {  
"access": true,  
"rule": "allow",  
"SSID": "\*"  
}  
},  
"nwdmnrule": "allow",  
"nwa": "true",  
"sec": "false",  
"offline": true,  
"nwdmn": "\*"  
},  
"description": "This is test policy.",  
"geodata": \[\] },  
"name": "Test App Policy",  
"geofences": \[\],  
"mgmtTimeFence": {  
"id": "7571540635845395177",  
"version": 0,  
"updatedBy": null,  
"updatedByPK": null,  
"updatedDate": null,  
"name": "Test Timefence",  
"description": null,  
"timefence": {  
"to": "20: 00",  
"from": "08: 00",  
"bdays": {  
"boff": "7,1",  
"enabled": "true",  
"holidays": ""  
}, "bhu": {  
"enabled": "true",  
"bhtp": "08: 00-20: 00/GMT+05: 30"  
}  
},  
"lastModifiedTimeStamp": null,  
"createdBy": null,  
"timefenceData": {  
"to": "20:00",  
"from": "08:00",  
"bhu": {  
"enabled": "true",  
"bhtp": "08:00-20:00/GMT+05:30"  
},  
"bdays": {  
"enabled": "true",  
"boff": "7,1",  
"holidays": ""  
}  
},  
"restrictUsageDays": false,  
"restrictUsageHours": false  
}  
}

  
| Param name | Type | Description | Required | Example value |
| --- | --- | --- | --- | --- |
| name | String | New App Policy name | Yes | Test App Policy |
| contentdata | JSON | Policy JSON string | Yes | General |
| geofences | GeoFence Object List | Assigned Geofences | No | \[\] |
| mgmtTimeFence | Timefence Object | Assigned Timefence | No | Value for mgmtTimeFence key in response |

Response
--------

### Status Code

200

### Response Headers

Content-Type: application/json

> **_Note:_** Make Application policy ‘Active’ and ‘Publish’ to reflect these changes.

<table style="margin-left: 0;margin-right: auto;" data-mc-conditions="Default.HTML5 Only,Default.HTML"><colgroup><col style="width: 37px;"> <col style="width: 51px;"> <col></colgroup><tbody><tr><td>Rev</td><td>Author</td><td>Edits</td></tr><tr><td>4.0</td><td>PK</td><td>PK</td></tr></tbody></table>
