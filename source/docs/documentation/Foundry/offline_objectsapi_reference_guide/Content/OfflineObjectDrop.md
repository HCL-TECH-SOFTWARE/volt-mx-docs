---
layout: "documentation"
category: "offline_objectsapi_reference_guide"
---
                               


HCLFoundry.OfflineObjects.drop
===================================

Offline Objects drop function deletes the database schema along with all its data. Success or failure is reported through callbacks provided to the drop API.

Volt MX  Iris (JavaScript)
-------------------------------

### Signature

{% highlight voltMx %}HCLFoundry.OfflineObjects.drop(options, successCallback, failureCallback) 
{% endhighlight %}

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 64px;"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 32px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">JSON</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">successCallback</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on success.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">failureCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The&nbsp;function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

  
| Option | Type | Description | Required |
| --- | --- | --- | --- |
| deviceDbEncryptionKey | String | Encryption passphrase must be a string of six characters long. For further information, refer [Offline Objects Getting Started Guide]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html). <br /><br /> **_Note:_** Not applicable for Mobile Web and Desktop Web channels. | No |
| deviceDbPath | String | Device database is created at the given deviceDbPath location. The default Offline Objects database path for Windows Kiosk applications is `C:\Users\User\AppData\Local`. You can use the deviceDbPath option to override the default path. This options helps you to install more than one Offline enabled application by using the Offline Objects database at desired location. <br /><br /> **_Note:_** This parameter is supported only for Windows Kiosk applications from V8 SP4 Fix Pack 44 onwards. <br /> **_Important:_** The default Offline Objects database location for Windows Kiosk has been changed from `C:\Users\User\AppData\Local` to `C:\Users\User\AppData\Local\AppID\Database` from V8 SP4 Fix Pack 44. This impacts application upgrades that were built with the earlier versions of pluginTo retain the existing Offline Objects database, rebuild the Kiosk application with the deviceDbPath option and pass the `C:\Users\User\AppData\Local` location as an input to the setup, reset, and drop APIs. | No |

### Return Type

void

### Example

{% highlight voltMx %}function successCallback() {
    voltmx.print("Application drop success")
}

function failureCallback(error) {
    voltmx.print("Application drop failed with error" + error.code);
}

//Decrypt the device database, if encrypted
var options = {
    "deviceDbEncryptionKey": "myencryptionpa$$phrase1"
};

HCLFoundry.OfflineObjects.drop(options, successCallback, failureCallback);

{% endhighlight %}

Android (Java)
--------------

### Signature

{% highlight voltMx %}void <OfflineObjects>.drop(final HashMap<String, object>options, final HCLCallback callback)
{% endhighlight %}

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">HashMap&lt;String, object&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop option such as device database, encryption key and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">callback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">HCLCallback</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Application implements onSuccess and onFailure methods of HCLCallback interface.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Drop Options

  
| Option | Type | Description | Required |
| --- | --- | --- | --- |
| deviceDbEncryptionKey | String | Encryption passphrase must be a string with at least six characters long. Refer Offline Objects Getting Started Guide for more details. | No |

### Return Type

void

### Example

{% highlight voltMx %}VoltMXClient sdk = new VoltMXClient();
IVoltMXApplicationSync appSync = sdk.getOfflineObjects();

//Decrypt the device database if encrypted
HashMap < String, object > options = new HashMap < String, object > ();
options.put("deviceDbEncryptionKey", "myencryptionpa$$phrase1");
appSync.drop(options, new HCLCallback() {
    @Override
    public void onSuccess(Object object) {
        Log.d("Application DROP", "Application drop Successful");
    }

    @Override
    public void onFailure(Object error) {
        OfflineObjectsException e = (OfflineObjectsException) error;
        Log.e("Application DROP", "Application drop failed with error:" + e.getMessage());
    }
});

{% endhighlight %}

iOS (Objective C)
-----------------

### Signature

{% highlight voltMx %}void <OfflineObjects> drop:(NSDictionary *) options onSuccess: HCLSuccessCompletionHandler)OnSuccess  
onFailure:(HCLFailureCompletionHandler)onFailure
{% endhighlight %}

### Parameters

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 256px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: bold;">Type</td><td style="font-weight: bold;" class="TableStyle-Basic-BodyE-Column1-Body1">Description</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: bold;">Required</td></tr><tr class="TableStyle-Basic-Body-Body1"><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">options</td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="font-weight: normal;">NSDictionary&lt;NSString*, id&gt;</td><td style="font-weight: normal;" class="TableStyle-Basic-BodyE-Column1-Body1">Drop options such as device database, encryption passphrase and so on.</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">HCLSuccessCompletionHandler</td><td class="TableStyle-Basic-BodyE-Column1-Body1">The function is invoked on success.</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Yes</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">onFailure</td><td class="TableStyle-Basic-BodyB-Column1-Body1">HCLFailureCompletionHandler</td><td class="TableStyle-Basic-BodyB-Column1-Body1">The function is invoked on an error with the cause of failure as an argument.</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Yes</td></tr></tbody></table>

#### Setup Options

  
| Option | Type | Description | Required |
| --- | --- | --- | --- |
| deviceDbEncryptionKey | NSString | Encryption passphrase must be a string with at least six characters long. For more details, refer [Offline Objects Getting Started Guide.]({{ site.baseurl }}/docs/documentation/Foundry/offline_objects_gettingstarted/Content/Offline_Objects_Getting_Started.html) | No |

### Return Type

void

### Example

{% highlight voltMx %}HCLClient * sdk = [HCLClient sharedClient];
OfflineObjects * applicationSync = [sdk getOfflineObjects];

//Decrypt the device database if encrypted
NSMutableDictionary < NSString * , id > * Options = [NSMutableDictionary new];
[options setObject: @"myencryptionpa$$phrase1"
    forKey: @"deviceDbEncryptionKey"
];

HCLSuccessCompletionHandler onSuccess = ^ void(id object) {
    NSLog(@"Application drop successful");
};

HCLFailureCompletionHandler onFailure = ^ void(id object) {
    NSLog(@"Application drop failed");
};

[applicationSync drop: options
    onSuccess: onSuccess
    onFailure: onFailure
];

{% endhighlight %}
