                           

Native Function API Developer's Guide:[Native Function APIs for Android](native_function_apis_for_android.md) > [Android Examples](android_examples.md) > Toast

Toast
=====

An Android toast is a simple pop-up ui element that takes up a small amount of space, and automatically disappears after a timeout. The Android documentation has more about the subject in the [Toasts](https://developer.android.com/guide/topics/ui/notifiers/toasts.md) topic.

You can use the Native Function API for Android to display toasts on Android devices. The following code snippet shows how this is done using `java.import` to access the **android.widget.Toast** API.

```
var Toast = java.import("android.widget.Toast");
var VoltMXMain = java.import("com.konylabs.android.KonyMain");  
var context = VoltMXMain.getActivityContext();
var myToast = Toast.makeText(context, "Hello World", Toast.LENGTH_SHORT)
myToast.show();

```
