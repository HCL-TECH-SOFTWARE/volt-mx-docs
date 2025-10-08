                            


voltmx.ml Namespace
=================

The voltmx.ml Namespace provides your app an ability to classify images taken from the camera, a file or the device gallery.

Functions
---------

The voltmx.ml namespace provides the following function:

 
<details close markdown="block"><summary>voltmx.ml.ImageClassifier</summary> 

* * *

Creates an image classifier object. This object then helps to classify the images based on the trained model categories.  
You can classify images captured using a camera, from a file or the device gallery.

### Syntax

```

voltmx.ml.ImageClassifier(config);
```

### Input Parameters

**config:** A JSON object that consists of configuration parameters.

The config parameter consists of the following keys:

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Key</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Value Type</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Description</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">modelPath</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String/ File</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Holds the name of the model. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>File name must be given without extensions if modelPathSource type is MODEL_SOURCE_TYPE_BUNDLED.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">modelPathSource</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Constant</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Source of the modelPath. This key contains any of the following constants. voltmx.ml.MODEL_SOURCE_TYPE_BUNDLED: The model is kept in the raw folder of respective platform and channel. This is the default constant. For example, Consider that you have built a mobile application. Following is the raw folder path for Android and iOS: Android:&nbsp;&lt;workspace&gt;/resources/mobile/native/android/raw ios : &lt;workspace&gt;/resources/mobile/native/iphone/raw voltmx.ml.MODEL_SOURCE_TYPE_FILE: This constant is applicable when the Model is stored in remote server and the same is downloaded using network APIs and then saved in a File.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="onSuccess"></a>onSuccess</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Callback function that receives prediction results. 
```

function onSuccess(recognitionArray)
```
<b>Parameter</b> recognitionArray: It is an array object holding prediction results. This array will hold only the top three results in the recognition objects. The values in these keys are read only. Each recognition object contains the following keys: title: The name of the category. The value type is String. confidence: The percentage of certainty with which an object belongs to a category. This type of this value is double and it ranges from 0 to 1. The <i>recognitionArray</i> is always sorted in a descending order based on the value provided in the <i>confidence</i> key.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="onFailure"></a>onFailure</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Function</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Callback function that is invoked if any error occurs. 
```

function onFailure(errorCode) 
```
<b>Parameters</b> errorCode: contains various codes to identify possible errors. Here is the list of the constants:voltmx.ml.ERROR_INPUT_IMAGE_NULL: This error appears when the rawBytes given to recognizeImage method is null.voltmx.ml.ERROR_REUSE_EXCEPTION: This error appears when the recongnizeImage method is invoked after the <a href="imageclassifier_object.html#releaseResource" target="_blank">releaseResource</a> method is invoked.voltmx.ml.ERROR_IMAGE_PROCESSING_FAILED: This error appears when processing image gets failed.voltmx.ml.ERROR_UNKNOWN: This error appears when reason of failure is unknown.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">modelInputSize</td><td class="TableStyle-Basic-BodyE-Column1-Body1">JSON object</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Models will be trained for various sizes of the image. This key takes input size for the model. The Input image given using the <a href="imageclassifier_object.html#recognizeImage" target="_blank">recognizeImage</a> method is scaled to the provided values of the width and height of modelnputSize. The object contains below keys: width: width of the input size. The type of this key is Number. height: height of the input size. The type of this key is Number. For example, 
```

modelInputSize = {"width": 224, "height": 224}
```
</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">modelType</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Constant</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is applicable to Android platform only. Models are of two types: Quantized and Float.This param provides information of the type of the model. It will contains any of the following constants: voltmx.ml.MODEL_TYPE_QUANTIZED voltmx.ml.MODEL_TYPE_FLOAT</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">labelPath</td><td class="TableStyle-Basic-BodyE-Column1-Body1">String/File</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is applicable only to the Android platform. File name of the label's text file. This file contains the list of categories/labels on which the model was trained on. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>File name must be given without extensions.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">labelPathSource</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Constant</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is applicable only to the Android platform. Must contain one of the below constants. voltmx.ml.LABEL_SOURCE_TYPE_BUNDLED: The label file must be kept in raw folder of respective platform and channel. This is the default constant. For example, Consider that you have built a mobile application. Following is the raw folder path for Android Android:&nbsp;&lt;workspace&gt;/resources/mobile/native/android/raw voltmx.ml.LABEL_SOURCE_TYPE_FILE: This option can be used in case the label is stored in remote server and the same is downloaded using network APIs and saved in File .</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">device</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Constant</td><td class="TableStyle-Basic-BodyD-Column1-Body1">This is applicable only to the Android platform. The runtime device type used for executing classification. Contain one of the following constants. voltmx.ml.MODEL_DEVICE_CPU voltmx.ml.MODEL_DEVICE_GPU voltmx.ml.MODEL_DEVICE_NNAPI</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">numOfThreads</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Number</td><td class="TableStyle-Basic-BodyA-Column1-Body1">This is applicable only to the Android platform. Sets the number of threads to be used for identifying the image. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>You can increase the number of threads to speed up the process of identifying an image. Increasing the number of threads will, however, make your model use more resources and power.</td></tr></tbody></table>
 
### Example

```

//Sample code to create an image classifier object using TestingModel model.
function successCallback(recognitionArray) {
 var size = recognitionArray.length;
 for (i = 0; i < size; i++) {
  voltmx.print(recognitionArray[i].title + "--------->" + recognitionArray[i].confidence);
 }
}

function failureCallback(errorCode) {
 alert(errorCode);
}

var config = {
 "modelPath": TestingModel,
 "modelPathSource": voltmx.ml.LABEL_SOURCE_TYPE_BUNDLED,
 "onSuccess": successCallback,
 "onFailure": failureCallback,
 "modelInputSize": {
  "width": 224,
  "height": 224
 },
 "labelPath": sample.txt,
 "labelPathSource": voltmx.ml.LABEL_SOURCE_TYPE_BUNDLED,
 "device": voltmx.ml.MODEL_DEVICE_CPU,
 "modelType": voltmx.ml.MODEL_TYPE_QUANTIZED
}

var imageClassifier = new voltmx.ml.imageClassifier(config);
```

### Platform Availability

iOS and Android.

![](resources/prettify/onload.png)
