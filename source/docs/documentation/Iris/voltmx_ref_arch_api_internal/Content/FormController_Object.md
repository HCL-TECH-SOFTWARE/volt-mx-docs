---
layout: "documentation"
category: "voltmx_ref_arch_api_internal"
---
                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


FormController Object
=====================

The code for the FormController object is created by the code generation tool for you. It communicates with both the models for the data sources and the viewmodels for the forms.

You should not modify the source code for the FormController object. Instead, your app calls the methods that the FormController object provides. However, most apps will need custom business logic. You add that to the FormControllerExtension object rather than the FormController object itself.

The FormController object offers the following.

##### [Methods](FormController_Methods.html)

> [getCurrentForm Method](FormController_Methods.html#getCurrentForm)
> 
> [getCurrentFormFriendlyName Method](FormController_Methods.html#getCurrentFormFriendlyName)
> 
> [getPreviousForm Method](FormController_Methods.html#getPreviousForm)
> 
> [getPreviousFormFriendlyName Method](FormController_Methods.html#getPreviousFormFriendlyName)

##### [Properties](FormController_Properties.html)

> [view](FormController_Properties.html#view)

> **_Note:_** If you change the default template of the controller for dependency injection, the methods from the controller will not be displayed as part of intellisense to invoke functions in the Action Editor.
