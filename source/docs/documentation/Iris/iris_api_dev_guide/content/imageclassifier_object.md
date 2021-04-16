---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


imageClassifier Object
======================

The imageClassifier object classifies the given image based on the trained model categories.

It provides the following methods.

Methods
-------

The imageClassifier Object contains the following methods.


<details close markdown="block"><summary>recognizeImage</summary> 

* * *

The recognizeImage method is used to classify the given image based on the categories provided in the model.

This method invokes the [onSuccess](voltmx.ml_namespace_functions.html#onSuccess) callback of the image classifier object.

### Syntax

{% highlight VoltMx %}
recognizeImage(rawBytes)
{% endhighlight %}

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| rawBytes | rawbytes is an object that is returned from Camera, a file or device gallery. |

 

### Example

{% highlight VoltMx %}
imageClassifier.recognizeImage(rawBytes);
{% endhighlight %}

### Return Values

None.

### Availability

iOS and Android.

</details>
<details close markdown="block"><summary>releaseResource</summary> 

* * *

The releaseResource method releases the resources held by the ImageClassifier object.

Once released, the imageClassifier Object cannot be re-used.You must create another imageClassifier object after using this method if you want to use recognizeImage method again. If you call the recognizeImage method without creating a different object, the [onFailure](voltmx.ml_namespace_functions.html#onFailure) callback set in the [voltmx.ml.ImageClassifier](voltmx.ml_namespace_functions.html#ImageClassifier) API is invoked.

### Syntax

{% highlight VoltMx %}
releaseResource()
{% endhighlight %}

### Input Parameters

None

 

### Example

{% highlight VoltMx %} 
imageClassifier.releaseResource();
{% endhighlight %}

### Availability

iOS and Android.

</details>

![](resources/prettify/onload.png)
