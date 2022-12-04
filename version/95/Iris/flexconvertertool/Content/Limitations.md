  

Known Issues/Limitations
========================

The known issues of using the Flex layout converter tool for Android are as follows:

1.  When a segment template is used in multiple forms, only the flex dimensions of the first occurrence of the template in the first Form encountered during the conversion process gets assigned to all other usages of the same template. This leads to UI differences in other forms or segments where the same template is referenced.
    
    What the Tool Handles Intelligently
    
    During automated conversion, the tool does a second pass where all the statically created templates are converted to FlexContainers, and are cloned with the `<TemplateName>+<SegmentName>+<FormName>` format. The tool automatically maps the Flex positional parameters to the cloned templates, and updates the respective static references in the Forms or Segments.
    
    What the tool Cannot Handle:
    
    *   Dynamic assignment of templates from modules
    *   The dynamically created templates in modules and their usages.
    
    **User-Action**: In scenarios where the tool cannot automatically handle this issue, the tool will generate cloned templates with the following naming convention and updates the respective Flex positional parameters.  
    `<TemplateName>+<SegmentName>+<FormName>`
    
    Ensure that you select the cloned templates and replace the name of the common template with the name of the specific template where ever they are used.
    
2.  By default, the tool generates the width of the Cover flow template as 100%. Whereas in the converted project, the width is generated based on the on-screen dimensions of the rendered widget captured in the widget-data XML.
    
    **User-Action**: Ensure that you set the width of CoverFlow Templates to 100%.
    
3.  In a few scenarios, due to preset height and width properties, the image widget is not rendered with expected dimensions after conversion.
    
    **User-Action**: To achieve the same UI, the developer must assign values for the height and width properties to the respective reference-height and reference-width properties, and set the height and width properties to Null.
    
4.  When the Unit Type is selected as percentage, and the user opens the keyboard, the height of the form or the rendered widgets gets re-sized. This leads to the resizing of all percentage-based widgets.
    
    **User-Action**: Ensure that you set the value of the **windowSoftInputMode** as `constants.FORM_ADJUST_PAN` on the form to avoid widget resizing.
    
5.  If the height of the Tab widget is set as Preferred, the height property is not respected and a default value of 220dp is assigned.  
    By default, the tool generates 220dp as height for greedy widgets( if the height is not defined).
    
    **User-Action**:
    
6.  If widgets are created dynamically with a dynamic id and are added to a Form, the tool cannot update the positional and dimensional properties of those widgets. The positional flex parameters of those widgets are dumped in the **unMatchedData.txt** file in the Flex converted apps folder.
    
    **User-Action**: Users need to pick those flex parameters and assign them back to dynamically created widgets appropriately.
    
    The converter tool has the intelligence to identify the parent layout type as either Hbox or Vbox type of dynamically created widgets and assign the respective flex parameters.
    
7.  A dynamically created box widget will not be converted to a flex widget if the **basicConfig** and **layoutConfig** definitions are not passed inline, and are assigned a temporary variable.
    
    Example -1 :
    
```
Var basicConfig={“id”:”box”,skin:”defaultSkin”};  
    Var layoutConfig={};  
    var box = new voltmx.ui.Box(basicConfig, layoutConfig,null);
```
    
    Example -2:
    
```
var box = new voltmx.ui.Box();  
    box.id = “box”;  
    box.skin = “defaultSkin”;
```
    
    **User-Action**: Instead of creating variables, you must modify the code to directly pass them inline, so that the values are parsed and converted by the tool.
    
    For example, `var box = new voltmx.ui.Box({“id”:”box”,skin:”defaultSkin”}, {},null);`
    
8.  In box-based projects, the skin property for row templates is not generated. Whereas in flex-based projects, the skin property is populated by default. This discrepancy leads to differences in the skin after conversion.
    
    For example, when you drag and drop a box widget inside a segment widget, a default skin is assigned to that template. While the app is being built, the default skin is not generated as it a dummy skin. As a result, the default skin of the segment appears as there is no skin generated for the template.
    
    In the flex app, the default skin is generated for every widget and the background skin of the segment widget is masked and is not visible. This leads to differences in the background UI.
    
    **User-Action**: Set the skin property of the segment row template in the box-based application to null so that the background skin of the segment is visible even after conversion.
