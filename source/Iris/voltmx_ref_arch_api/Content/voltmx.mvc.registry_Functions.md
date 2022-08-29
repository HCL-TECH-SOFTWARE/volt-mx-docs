                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


voltmx.mvc.registry Functions
===========================

The voltmx.mvc.registry namespace contains the following functions.


<details close markdown="block"><summary>voltmx.mvc.registry.add Function</summary> 

* * *

Enables you to add a new form name, along with its controller, extension controller, and friendly name, to the registry.

### Syntax 1

voltmx.mvc.registry.add(“friendlyName”, “formId”);  
voltmx.mvc.registry.add(“friendlyName”, “formId”, “formController”);  
voltmx.mvc.registry.add(“friendlyName”, “formId”, {“controllerName” : “formController” , “controllerType” : <controllerType>});  
voltmx.mvc.registry.add(“friendlyName”, “formId”, “formController”, “formExtController”);

### Syntax 2

voltmx.mvc.registry.add( "friendlyName", "formId", {"controllerName" : "", "controllerExtName" : "", "controllerType" : ""});  

### Parameters

_friendlyName_ \[string\] \[Mandatory\]

You can assign a "friendly" name to the form, which will be easier for you to remember than the actual formId. The friendlyName string maps the navigation path to the formId and its corresponding controller.

_formId_ \[string\] \[Mandatory\]

The name of the form. Given formId as "f1," the Framework automatically searches for the availability of " f1.js" and "f1Controller.js" for initializations.

The following parameters are considered in the third parameter if it is a dictionary (Refer **Syntax 2** and **Example** for more information):

_formController_ \[string\] \[Optional\]

The name of the file that contains the form controller.

_formExtController_ \[string\] \[Optional\]

The name of the file that contains the form extension controller. You can use form extension controllers to extend the functionality of the form.

_controllerExtName_ \[string\] \[Optional\]

The name of the file that contains the extension controller.

_controllerType_ \[string\] \[Optional\]

For data-driven forms, this parameter is **voltmx.mvc.ModelFormController**. You can inherit your own controller from **voltmx.mvc.FormController** and provide the name here.

### Return Values

Returns `true` if the form name is successfully added to the registry, otherwise it returns `false`.

Returns false if the same friendly name has already been registered.

### Remarks

*   If the _friendlyName_ or the _formName_ parameter (or both) is an empty string, `null`, or undefined, this function does nothing.
*   If the _formController_ parameter is `null`, undefined, not provided, or is an empty string, the string in the _formId_ parameter is suffixed with the string "Controller." For example, if _formId_contains the string "form1" and the _formController_ parameter is not provided, then "form1Controller" will used as the name of the form controller file.

### Example

```

voltmx.mvc.registry.add(
"friendlyName", 
"formId", 
{"controllerName" : "", "controllerExtName" : "", "controllerType" : ""});
```

* * *

</details>
<details close markdown="block"><summary>voltmx.mvc.registry.getViewName</summary> 

* * *

Retrieves the form or template name from the registered friendly name.

### Syntax

voltmx.mvc.registry.getViewName(  
    friendlyName);

### Parameters

friendlyName

The friendly name of the form to retrieve the name from.

### Return Values

Returns a string containing the form name if the friendly name is found in the registry, or `null` if it is not found.

### Example

```

formName = voltmx.mvc.registry.getViewName("Form1");
```

* * *

</details>
<details close markdown="block"><summary>voltmx.mvc.registry.getControllerName</summary> 

* * *

Retrieves the controller name from the registered friendly name.

### Syntax

voltmx.mvc.registry.getControllerName(  
    friendlyName);

### Parameters

friendlyName

The friendly name of the form to retrieve the name from.

### Return Values

Returns a string containing the controller name if the friendly name is registered and the controller name is found. Returns a string containing "<viewName>.Controller" if the friendly name is registered and the controller name is not found. Returns `null` if the friendly name is not registered.

### Example

```

voltmx.mvc.registry.getControllerName("FriendlyName");
```

* * *

</details>
<details close markdown="block"><summary>voltmx.mvc.registry.remove</summary> 

* * *

Removes the name of a form controller from the registry.

### Syntax

voltmx.mvc.registry.remove(  
    friendlyName);

### Parameters

friendlyName

The friendly name of the form whose controller is to be removed.

### Return Values

None.

### Example

```

voltmx.mvc.registry.remove(FriendlyName");
```

* * *
</details>