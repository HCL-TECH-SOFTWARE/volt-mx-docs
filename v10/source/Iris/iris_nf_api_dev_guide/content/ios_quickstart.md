                           

Native Function API Developer's Guide:[Native Function APIs for iOS](native_function_apis_for_ios.md) > iOS Quick Start Guide

iOS Quick Start Guide
=====================

Introduction
------------

Follow these instructions to create a simple Iris application that uses the Native Function APIs for iOS.

Prerequisites
-------------

The following are the prerequisites to use Native APIs:

*   A computer running a recent version of Mac OS.
*   Xcode and a configured emulator or device. The Volt MX Iris Preview app can not be used to run this application.
*   Some knowledge of Objective C development.

How to
------

The purpose of the Native Function API is to call Apple iOS APIs directly within your JavaScript code in Volt MX Iris. Here is an example of a very simple Objective C program, which you can convert into a Volt MX Iris Application following these steps.

### The iOS code

```
            #import "ViewController.h"

@interface ViewController()@end@implementation ViewController

- (void) viewDidLoad { [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.

	NSString * format = [NSString stringWithFormat: @"Hello %@ !! Enjoy your day", @"World"]
	NSLog(format);
} - (void) didReceiveMemoryWarning { [super didReceiveMemoryWarning];
	// Dispose of any resources that can be recreated.
}@end
```

This is a standard auto-generated Objective C project with the exception of this line:

```
            NSString *format = [NSString stringWithFormat:@"Hello %@ !! Enjoy your day.",@"World"]
  NSLog(format); 
```

Compile and run this application in XCode, and note that it prints this string to the console:

```
Hello World!! Enjoy your day.
```

The code uses the format specifiers belonging to the NSString class to insert the word "World" into the output string.

Now do the same thing from JavaScript in Iris.

### The JavaScript Project

1.  [Create a New Project](../../../Iris/iris_user_guide/Content/CreateNewProject.md?Highlight=Create a project) in Iris.   
2.  Add the iOS **Foundation** framework for to the project.
3.  Add a form to your project.
4.  Add a **button** and a **label** to the form.
5.  Add a JavaScript **module** to the project.
6.  In the JavaScript module, create this function,
    where`frmMain` is the name of your form, and `log` is the name of your label.

           function testNativeFunctionAPI(){
           var NSString = objc.import("NSString");
           var format = NSString.stringWithFormat("Hello %@ !! Enjoy your day"  ,["World"]);
           frmMain.log.text = format;
           }
           
   7.    Set the `onClick` action of the button to call
       `testNativeFunctionAPI`.
   8.    Build and run your application in the iOS emulator
         or on a device.You can not run the application using the Volt MX Iris App.

### What just happened?

The two important lines in the code are:

```
            var NSString = objc.import("NSString");
  var format = NSString.stringWithFormat("Hello %@ !! Enjoy your day",["World"]);
```

The first line imports the `NSString` class from the iOS API, and creates a handle, assigned to the JavaScript variable `NSString`. The second line calls the static member function `stringWithFormat`, which is used to insert the text "World" into your output string.

The format string is then assigned to the text value of the label on the form.
