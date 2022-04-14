---
layout: "documentation"
category: "iris_nf_api_dev_guide"
---
                           

Native Function API Developer's Guide:[Native Function APIs for Android](native_function_apis_for_android.html) > Android Quick Start Guide

Android Quick Start Guide
=========================

Introduction
------------

Follow the instructions in this topic to create a simple Iris application that uses the Native Function APIs for Android.

Prerequisites
-------------

In order to use this guide, you will need:

*   a computer running a recent version of [Windows]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/HardwareReqs.html#WinCompReqs) or [Mac OS]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/HardwareReqs.html#MacCompReqs).
*   [VoltMX Iris Classic (formerly Iris Enterprise)Version 7.2]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/SUGinstallVoltMXStudio.html) or later.
*   The Android SDK and tools, as well as a configured emulator or device. The Volt MX Iris Preview app will not run this application.
*   Some knowledge of Android development.

How To
------

The purpose of the Native Function API is to allow you to call Android and iOS APIs directly from within your JavaScript code in Volt MX Iris. Here is an example of a very simple Android program which you will convert into a Volt MX Iris Application following these steps.

### The Android Code

{% highlight voltMx %}            package com.example.kh003.sample;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import java.io.Console;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        String message = String.format("Hello %s !! Enjoy your day","World");
        Log.d("Sample" , message);
    }
}

{% endhighlight %}

This is a standard auto-generated Android Java project with the exception of these lines:

{% highlight voltMx %}            String message = String.format("Hello %s !! Enjoy your day","World");
        Log.d("Sample" , message);
{% endhighlight %}

Compile and run this in Android Studio and note that it prints this string to the log:

{% highlight voltMx %}            Hello World ! Enjoy your day.
{% endhighlight %}

The code uses the format specifiers belonging to String.format from the Android SDK to format the string, inserting the word "World" into the output string.

Now do the same thing from JavaScript in Iris using the Native Function API for Android.

### The JavaScript Project

1.  [Create a New Project]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/CreateNewProject.html?Highlight=Create a project) in Iris Enterprise.
    
2.  Add a form to your project.
3.  Add a [button]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Button.html?Highlight=add a button) and a [label]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Label.html?Highlight=label) to your form.
4.  Add a JavaScript module to your project.
5.  In the JavaScript module, create this function, where frmMain is the name of your form, and log is the name of your label.

{% highlight voltMx %}
function testNativeFunctionAPI() {
    var Str = java.import("java.lang.String"); 
    var format = Str.format("Hello %s !! Enjoy your day ",["World "]);
    frmMain.log.text = format; }
{% endhighlight %}

6.  Set the onClick action of the button to call testNativeFunctionAPI.
7.  Build and run your application in the Android emulator or on a device. Remember you can not run the application using the Volt MX Iris App.
8.  Click the button, and observe how the label text changes.

### What just happened?

The two important lines in the code are:

{% highlight voltMx %}   
var Str = java.import("java.lang.String");
var format = Str.format("Hello %s !! Enjoy your day ",["World "]);
{% endhighlight %}

The first line imports the java.lang.String object from the Android API, and creates an instance of the object, assigned to the JavaScript variable String. The second line calls the member function string.format, which is used to insert "World" into your output string.

The format string is then assigned to the text value of the label on the form.
