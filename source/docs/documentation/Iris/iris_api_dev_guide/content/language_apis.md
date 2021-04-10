---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

You are here: Language API

Language API
============

In JavaScript, exceptions that occur during runtime are usually handled by using try/catch blocks. The Language API is implemented for exceptions that are not handled using try/catch blocks.

The Language API uses `voltmx.lang Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.lang.getUncaughtExceptionHandler](voltmx.lang_functions.html#getUncau) | Retrieves the reference to a JavaScript function that is currently set as an exception handler for all uncaught exceptions. |
| [voltmx.lang.setUncaughtExceptionHandler](voltmx.lang_functions.html#setUncau) | Sets a JavaScript function as an exception handler for all uncaught exceptions. |

 

Set an exception handler for all the uncaught exceptions using the [voltmx.lang.setUncaughtExceptionHandler](voltmx.lang_functions.html#setUncau) function. You can get the reference to a JavaScript function that is currently set as an expection handler for all uncaught exceptions using the [voltmx.lang.getUncaughtExceptionHandler](voltmx.lang_functions.html#getUncau) function.

