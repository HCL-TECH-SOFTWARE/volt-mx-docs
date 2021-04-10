---
layout: "documentation"
category: "v8upgradepre65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgradepre65.pdf "VoltMX Foundry UpgradeHUB Guide")


Framework-level Prerequisites
-----------------------------

### FFI Components 

If the application uses any FFI components, you must ensure that the following prerequisites are met and the necessary modifications incorporated before starting the 7.x migration process. The changes if any are necessitated due to the following reasons:

1.        Changes in the underlying OEM's build systems such as Gradle for Android, new XCode versions, and so on.
2.  Changes made by Volt MX as part of the overall product enhancements, improvements, and performance optimizations.

This section outlines the checks that you need to make prior to migrating your application to a 7.x version. The section is organized by platform-wise.

**Android**

*   Convert the library projects to Gradle projects, and generate the .aar file, and use it in the FFI definition. Refer to the [Steps to create an .aar file](Steps_to_create_an_aar_file.html) section for more information.
*   FFI components must not contain `voltmxwidgets.jar`, `android.jar`, and `support-v4.jar` in the **Libs** folder.
*   FFI components must not contain armeabi. So files and should start packing armeabi-v7.
*   FFI components must require to be compatible with armeabi-v7 architecture. You must ensure that the FFI components are compatible with the new arm architecture.

**iOS**

*   All FFI components consumed by the application must be compatible with XCode 8, which is the mandatory XCode version from Volt MX 7.x version onwards.
*   Memory management of the FFI Components hasbeen changed. So, you may have to make the changes to the scope of the variable that has been used for FFI objects in your JS code.

In the pre-7.x versions, when an FFI object is created, the corresponding native object used to be created and used to be active the entire lifetime of the application. This would cause memory issues, especially in case the object consumes memory such as an object containing image rawbytes.

To avoid this problem, in 7.x versions, it has been implemented in such a way that the native object would be active as long as the FFI object (js object) is active. This enables you to have more control on the scope of the native object. If you want the scope of the native object to be local to a function, then you can declare the FFI object as a local variable. For example, in the following function, we have declared the ffiObj as local scope, hence the memory for the native object would be released once the function is executed.

{% highlight voltMx %}function testfun() {
    var ffiObj = new sample.ffi.SampleFFIClass();
    ffiObj.method1();|
}
{% endhighlight %}

In the following code, the ffiObj has a global scope and hence the native object would also global scope.

{% highlight voltMx %}function testfun() { 
 ffiObj = new sample.ffi.SampleFFIClass(); 
ffiObj.method1();
}
{% endhighlight %}

If you want to release the memory for a native object explicitly, you can assign null to the JS FFI object. For example, ffiObj = null;

In the cases where the native object is used as a delegate, it can be invoked at any time. So, you must ensure that the native object is active by the time the delegate is invoked by making the FFI object as global or by managing the scope appropriately.

*   FFI components and other libraries used should be compatible with 64-bit architecture. Using 32-bit versions will lead to run-time crashes.
