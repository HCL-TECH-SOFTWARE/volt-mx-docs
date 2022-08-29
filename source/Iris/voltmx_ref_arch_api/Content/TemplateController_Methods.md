                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


TemplateController Methods
==========================

The TemplateController object provides the following method.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[executeOnParent Method](javascript:void(0);) 

* * *

Executes the specified method of the parent object.

Syntax

executeOnParent(  
    methodName,  
    methodParams);

Parameters

_methodName_

A string containing the name of the parent's method.

_methodParams_

An optional list of parameters to pass to the method specified by the _methodName_ parameter.

Return Values

None.

Remarks

The parent of this object is always a FormController object. This method should only be called from sub-view controllers.

Example

```
this.executeOnParent(“func1”, “param1”, "param2");
```

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getCurrentView Method](javascript:void(0);)

* * *

Retrieves the current view for the template controller.

Syntax

getCurrentView();

Parameters

None.

Return Values

Returns the template controller's view.

Example

```
var currentView = tmpController.getCurrentView();
```

* * *
