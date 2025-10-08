                          

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.md) > form.destroy

Memory Management Guidelines
----------------------------

The memory available for the application depends on the device specification and other applications running in the background. Global variables and UI widgets consume the application memory. UI widgets include metadata (padding, margin, layout info, and so on), skin information, the data to be shown to the user, function definitions, and resources (Images , i18n text).

### form.destroy

*   Use `form.destroy` effectively.
*   `form.destroy` destroys the following:
    
    *   Data and views associated with the form.
    *   Data and views associated with the child widgets hierarchy in the form.
    
    *   After a form is destroyed, it returns to the pre-initialized state (a state similar to that when the application was first loaded).
        
        *   Accessing properties, data, and child widgets on a destroyed form will initiate the form life cycle and puts the form in initialized state again. So, as a guideline, the developer should access the form’s data or its widgets as required (Lazy access). 
        
        *   Module can be any logical group of forms that represents one of the application features.
*   When user navigates to one application module to other application module, all the heavy forms of the old module can be destroyed.
*   The forms like Terms & Condition, Maps, Help can be good candidates for `form.destroy()`.
*   Delete the current form only when user is moving back from the current form. Do not delete the current form in the forward flow.
    *   For example, in a flow F1->F2->F3->F4->F5, when moving from F4 to F3, F4 can be destroyed if F4 is heavy in terms of the data and widgets. But do not remove F4 when moving to F5. Deleting the current form in forward flow makes the behavior undefined when user navigates back (at least in platforms like iPhone).
*   Override the `onback` or `onescape` events to destroy the form when moving away from it.
*   Avoid using placeholder widgets (like empty labels, boxes, or transparent images) for achieving spacing between the widgets. Instead, use paddings/margins and alignment attributes to achieve the same.

### Global Variables

Global variables occupy device runtime memory for the lifetime of the application. They are released as soon as the application exits. Global variables should be used to store the application state.

*   Do not use `ds.save`/`ds.read` or _hidden_ widgets as replacement for global variables.
    *   Widgets have lot of metadata associated with them and consume a lot more memory to hold the same amount of data than a global variable. `ds.save` and `ds.read` result in disk I/O and definitely has much more performance impact than accessing an in memory variable.
*   Nullify the global variables as soon as the data they are holding is not needed.
    
    tempglobavariable = nil;
