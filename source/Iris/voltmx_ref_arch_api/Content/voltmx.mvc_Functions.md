                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


voltmx.mvc Functions
==================

The `voltmx.mvc namespace` contains the following function.


<details close markdown="block"><summary>voltmx.mvc.Navigation Function</summary>

* * *

Creates an instance of the Navigation object.

### Syntax

```

voltmx.mvc.Navigation(  
    friendlyName);
```

### Parameters

_friendlyName_

The friendly name of the form that the [Navigation](Navigation_Object.md) object is to be created for.

### Return Values

Returns a Navigation object on success, or `null` on failure.

### Remarks

A form can have multiple `Navigation` objects, so it is possible for an app to call this function multiple times on a form.

### Example

```

var Navigation = new voltmx.mvc.Navigation("FormFriendlyName");
```

* * *

</details>