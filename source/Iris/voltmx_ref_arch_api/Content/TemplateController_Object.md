                        

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/9_x_PDFs/iris/voltmx_ref_arch_ap_internali.pdf)


TemplateController Object
=========================

The code for the TemplateController object is created by the code generation tool for you. It communicates with both the models for the data sources and the viewmodels for the forms.

You should not modify the source code for the TemplateController object. Instead, your app calls the methods that the TemplateController object provides.

When your app passes a template as a string to a widget, the widget creates the corresponding TemplateController object when it needs the template's view. It automatically searches for a TemplateController name that is mapped in the registry for that template. If it doesn't find a mapping, it searches for a template controller whose file name is of the form <templateName>Controller.js, where <templateName> is the name of the template. It then creates the TemplateController object for that template.

The TemplateController object offers the following.

[Methods](TemplateController_Methods.md)

> [executeOnParent Method](TemplateController_Methods.md#executeOnParent)

[Properties](TemplateController_Properties.md)

> [view Property](TemplateController_Properties.md#view)
