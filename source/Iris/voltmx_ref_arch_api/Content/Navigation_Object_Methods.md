                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


Navigation Methods
==================

The Navigation object provides the following methods.


<details close markdown="block"><summary>getModel</summary> 

* * *

Retrieves the model for the form.

Syntax

getModel();

Parameters

None.

Return Values

Returns a JavaScript object that contains the model for the form. The model is either the model that the app previously set or the model that is retrieved from the `FormController`. This method triggers the [FormController.getModel](FormController_Events.md#getModel) event.

Remarks

This method retrieves the form's model.

Example

```
var formModel = navObject.getModel();
```

* * *

</details>
<details close markdown="block"><summary>navigate Method</summary> 

* * *

Performs a form navigation.

Syntax

navigate(  
    params);

Parameters

_params_

A JavaScript object containing key/value pairs that are passed to the target form from the current form.

Return Values

None.

Remarks

The _params_ parameter is passed to all of the lifecycle events, such as preShow, postShow, and init, on the target form.

Example

```
var x = new voltmx.mvc.Navigation(“friendlyName/formName”, model);
x.navigate(params);
```

* * *

</details>
<details close markdown="block"><summary>setModel</summary> 

* * *

Sets the model for the form being navigated to.

Syntax

setModel(  
    newModel

Parameters

newModel

A JavaScript object that holds the model for the target form.

Return Values

None.

Remarks

This method sets the model of the target form, which is the form being navigated to. It triggers the [FormController.setModel](FormController_Events.md#setModel) event.

* * *

</details>