                            

You are here: Image Classification API

Image Classification API
========================

Image Classification is a technique used to classify real time objects based on the trained model categories.

Using the Image Classification API, you can identify the category of an object based on the image captured from the device camera or using the image from the device gallery. You can also view the accuracy of the prediction of the identity of the object in percentage using the model defined by you.

Steps for Generating Models
---------------------------

An image classification model is used to recognize and classify images. These images as described earlier could be from your device camera or from your device gallery. Consider a model that has been trained to classify laptop, phone, and calculator. When you input an image to your model, say of a phone, the model will generate predictions to the class of the image. Here is an example of the prediction.

Phone: 91.2 %

Calculator: 7.1 %

Laptop: 1.7 %

For more information on Image classification, see [https://www.tensorflow.org/lite/models/image\_classification/overview](https://www.tensorflow.org/lite/models/image_classification/overview)

Here are steps that you must follow for generating these models:

*   **Android**: Refer the following links for generating models in android platform.
    *   [https://firebase.google.com/docs/ml-kit/train-image-labeler](https://firebase.google.com/docs/ml-kit/train-image-labeler)
    *   [https://www.tensorflow.org/hub/tutorials/image\_retraining](https://www.tensorflow.org/hub/tutorials/image_retraining)
*   **iOS**
    *   Follow these steps for macOS version Catalina onwards,
        1.  macOS version has an inbuilt app named **CreateML.app**. You can also download this app from the App Store.
        2.  Create a folder to store all the images that you are going to use for classification. These images must be stored as per their classification in separate sub folders. The name of the subfolder must be the class to which the images in it belong. For example, you want to create a model for identifying laptops, phones, and calculators. In a folder you will have subfolders with the name laptop, phone, and calculators. Each of these subfolders will contain the images of laptops, phones, and calculators, respectively.
        3.  After this open the CreateML app. Provide the image folder as an as input for training data into the CreateML.app.  
            The CreateML app generates a _.mlmodel_ file as an output after the processing is done. This _.mlmodel_ file must be provided as an input while generating the image classification object.
    *   For macOS versions prior to Catalina, refer the following link: [https://www.appcoda.com/create-ml/](https://www.appcoda.com/create-ml/)

The Image Classification API contains following namespaces and objects:

*   [ImageClassifier object](imageclassifier_object.md#imageclassifier-object)

| Method | Description |
| --- | --- |
| [`recognizeImage`](imageclassifier_object.md#recognizeImage) | Classifies the given image (rawbytes) based on the categories provided in the model. |
| [`releaseResource`](imageclassifier_object.md#releaseResource) | Release the resources held by the ImageClassifier object. |

 

*   [voltmx.ml Namespace](voltmx.ml_namespace_functions.md#volt-mx-ml-namespace)

| Function | Description |
| --- | --- |
| [`voltmx.ml.ImageClassifier`](voltmx.ml_namespace_functions.md#ImageClassifier) | Creates an image classifier object. |

 

Using the `voltmx.ml.ImageClassifier` function, create an image classifier object. After creating the object, invoke the `recognizeImage` method to classify the image that you have captured using a Camera or opened from the device gallery. The image is then compared to the categories in the model and is classified under the relevant category. Once this is done, invoke the `releaseResource` method to release the memory of the ImageClassifier object.

![](resources/prettify/onload.png)
