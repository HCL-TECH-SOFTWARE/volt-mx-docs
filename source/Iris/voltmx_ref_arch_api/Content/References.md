                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)

You are here: References

References
==========

This section provides detailed documentation about the objects and other API elements that the VoltMXReference Architecture SDK provides.

  
| Model | Controller | Other |
| --- | --- | --- |
| [voltmx.model Namespace](voltmx.mvc_Namespace.md) | [FormController Object](FormController_Object.md) | [voltmx.mvc Namespace](voltmx.mvc_Namespace.md) |
|  | [TemplateController Object](TemplateController_Object.md) | [voltmx.mvc.registry Namespace](voltmx.mvc.registry_Namespace.md) |
|   |   | [Navigation Object](Navigation_Object.md) |

Note that there are no View objects provided in the SDK because, under the Volt MX Reference Architecture, forms, templates, and masters function as views. You create forms, templates, and masters in Volt MX Iris.

When you're building your Volt MX Reference Architecture app in Volt MX Iris, Volt MX Iris generates some of your app's objects for you and creates files to store them in. Volt MX Iris uses a default naming scheme for the objects and files it generates. The default naming scheme is important to keep in mind when you're using the **References** section of this SDK's documentation. For instance, the **References** section contains documentation for the following objects.

*   FormControllerObject
*   TemplateController Object

You will not actually find objects with these names in your code. Instead, under the default naming scheme, you will find names based on the form names you use in Volt MX Iris. That is, if you create a form in Volt MX Iris and name it `frmLogin`, then the [FormController](FormController_Object.md) object for that form is called `frmLoginController` and it is stored in a file named `frmLoginController.js`. Likewise, if you have a form called `frmMain`, then that form will have a FormController object called `frmMainController` that's stored in a file called `frmMainController.js`. All of your other FormController objects, FormControllerExtension objects, and so on, are similarly named.

There are some objects whose name is exactly what you see in the **References** section. These are as follows.

*   Navigation Object
*   TemplateController Object

Your code accesses these objects using the exact names you see here.
