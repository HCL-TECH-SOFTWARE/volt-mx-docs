                          

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.md) > Coding Guidelines

Coding Guidelines
-----------------

This section explains a few guidelines to be followed while writing JavaScript code in an application:

*   Use unique names for different elements (forms, widgets, code modules, images, and skins) within an application. For example, do not use the skin names as any form or variable names in the application. Using the same name in variable names would cause overwriting the skin with the variable. If you follow proper naming convention for different widgets this problem does not arise.
*   Make `voltmx.application.showLoadingScreen` as blocking unless it is specifically required that the user must be able to select the user interface elements while the network call is in progress.
*   The blockUI parameter in the service calls is applicable only for Mobile Web. For native applications, use `voltmx.application.showLoadingScreen` API to block the user interface.
*   Define a function or global sequence for error handling of the service calls and handle all the basic error codes returned by Volt MX Foundry.
*   Ensure that the widgets that are accessible from code follow a proper naming convention. Retaining the auto generated names makes it difficult to keep track of the widgets and their parent.
*   Perform checks for null and empty string before doing any operation on any user input data. This ensures that unexpected results are avoided.
*   Use try or catch blocks wherever possible to handle the errors in a proper way
    
*   Define all the global variables at one place so that it is easier to keep a track of them and invalidate them when required.
*   Do not declare local variables outside the functions. This guideline must be adhered for native code generation.
*   Use different names for global and local variables.
*   Write logically related functions (functions related to a specific functionality) within a single module.
*   Do the necessary validations before making network calls. For example, check if the text box has data before invoking a service.
*   Ensure to write proper code to handle the errors returned by network calls.
*   Ensure that the widget ID counter is different for different developers working in the same project as the default ids created by the IDE depend on these and may lead to problems like duplicate IDs.
*   Avoid code duplication by writing reusable functions which can be shared across modules or applications.
*   Write functions with proper indentation for better debugging and readability (use tab indentation for logical blocks).
*   Write smaller functions (maximum with 100 lines of code) instead of huge monolithic spaghetti code.
*   Use APIs provided by the Volt MX Platform wherever possible instead of writing code to achieve the same behavior. The APIs are much faster than the user-written code as the code needs to be interpreted.
*   Re-use the skins created by other developers while doing parallel development.
*   If a widget is never shown on a specific platform, set the Render flag to false for that platform.
*   Do not store the raw bytes captured by the camera (that need to be used globally in the application) in a global variable. Instead, store them in the datastore and retrieve them later.
*   Avoid multiple timers, instead use multiple flags with a single timer ticking and different action being performed on the basis of state of various flags.
*   Write generalized functions for the tasks that are repetitive across the application.
*   Try to avoid form forking unless you require a completely different form for another platform. When you fork the forms, make sure all the widgets in the forked form are present in the parent form in a hidden state. This is because if they are not available in the parent form, you cannot map data to widgets in the forked form using Mapping Editor.
*   `voltmx.ui.alert` must be the last statement in an execution flow as it is not a non-blocking call.
*   Prefix the form names with `frm` and pop-ups with `popup`.
