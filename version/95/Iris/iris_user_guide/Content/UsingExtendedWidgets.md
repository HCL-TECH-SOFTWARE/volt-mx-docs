

Extending Widgets
=================

supports a variety of widgets that have their own events, properties and methods. From V9 SP2 release, you can customize the existing widgets of by creating your own widget type and providing additional functionality. You can then use this customized inherited widget as a regular widget inside your application.

For example, in a banking application that lists the transactions of a user in a Segment widget, the balance amount is displayed using a Label widget. This balance amount is normally retrieved from the server along with the details of its format such as the currency of the amount. The text format of the Label widget (amount) needs to be modified according to the data retrieved from the server. In previous versions of , you need to create a component containing a label widget and the associated methods for formatting the text. From V9 SP2 release, you can use the Widget Extensions functionality to customize the existing Label widget to format the amount as required. In this scenario as you need to customize only one widget, widget extensions reduces the usage of extra containers associated with a component.

From V9 SP2 release, you can extend the following basic widgets, Button, Image, Label, Switch, TextArea, and TextBox.

You can add properties to an extended widget only using the [initializeProperties](../../iris_api_dev_guide/content/voltmx.ui_functions.html#ExtendedWidget) function. You cannot add new properties to the Extended widgets after the widget initialization.

In this section, you can learn the following topics related to extended widgets.

*   [Create Widget Extension](#create-widget-extension)
<!-- *   [Edit Widget Extensions](#edit-widget-extensions)
*   [Using Widget Extensions in an App](#using-widget-extensions-in-an-app)
*   [Importing and Exporting the Widget Extension](#importing-and-exporting-widget-extensions) -->
*   [Widget Extensions in Segment Template](#widget-extensions-in-segment-template)

Create Widget Extension
-----------------------

You can create a Widget Extension dynamically by using code. When you create a widget extension, you must use the [`voltmx.ui.defineExtendedWidget` API](../../iris_api_dev_guide/content/voltmx.ui_functions.md#ExtendedWidget) in Iris .


> **_Note:_** While using widget extensions, ensure that you do not modify the existing functionalities of a widget.


Follow these steps to extend a widget.

1.  Open your project in the .
2.  From the **Templates** explorer, navigate to the **Component** node.
3.  Right-click on the Component node and select New. A new context menu appears.
4.  In the new context menu, select Custom widget.  
    A new window appears.
5.  In the new window, provide the following details.
    
    *   Select the widget type as VoltMX widget from the drop down.
    *   Provide the namespace and class name of the widget extension.
    
    A new Component is created under the Components section, with the existing widget as the root.  
    You can now add new functionalities to the widget.
    

<!-- Edit Widget Extensions
----------------------

Using Widget Extensions in an App
---------------------------------

Importing and Exporting Widget Extensions
----------------------------------------- -->

Widget Extensions in Segment Template
-------------------------------------

From Iris V9 SP3 GA onwards, you can add Extended widgets to a Segment template. This template can then be assigned to the row template of a Segment widget.

For example, in a banking application, you can display the available balance of an account along with its currency using an extended widget. You can extend the properties of a Label widget to automatically add the symbol for currency along with the balance of the account.

In this section, the following topics are discussed:

*   [Assign Data to Extended Widget in Segment Template](#assign-data-to-extended-widgets-in-segment-template)
*   [Important Considerations](#important-considerations)

### Assign Data to Extended Widgets in Segment Template

To provide data to a Segment with an Extended widget follow these steps.

1.  Initialize the extended widget using the [voltmx.ui.defineExtendedWidget](../../iris_api_dev_guide/content/voltmx.ui_functions.md#ExtendedWidget) API. You must define the setter and getter methods for the custom properties used inside the extended widget.

    Here is the sample code to initialize the Extended widget to append a dollar sign to the text inside the Label widget using the custom property `BindingPath`.

    ```
    voltmx.ui.defineExtendedWidget("voltmx.ui2.Label2", voltmx.ui.Label, {
      preInitializeCall: function() {
        var bconfig = arguments[0];
        var lconfig = arguments[1];
        var pspconfig = arguments[2];
        this.initialize = function(bconfig, lconfig, pspconfig) {
          this.initializeProperties();
        }
        this.initializeProperties = function() {
          //Add the properties here.
          var _DummyProperty = "";
          //Setter method for BindingPath custom property.
          defineSetter(this, "BindingPath", function(val) {
            //alert(val)
            this.text = val + " #";
            _DummyProperty = val;
          });
          //Getter method for BindingPath custom property.
          defineGetter(this, "BindingPath", function() {
            return _DummyProperty;
          });
        };
        // Add your functions here.
        this.setData = function(data) {
          this.text = "$ " + data; //Appending the dollar sign.
        };
        voltmx.ui.Label.call(this, bconfig, lconfig, pspconfig);
        this.initialize(bconfig, lconfig, pspconfig);
      },
      setProp: function(propName, propValue) {
        this[propName] = propValue;
      }
    });
    ```

1.  Add the extended label widget to the Segment Template.  
    For more information about adding an extended widget to a Segment Template, refer [voltmx.ui.defineExtendedWidget](../../iris_api_dev_guide/content/voltmx.ui_functions.md#ExtendedWidget).

2.  After adding the extended widget to the template, map the widget to the data using the widgetdatamap property of the Segment widget.

    Here is the sample code to map the widgets inside the Segment row template with the data map key where `extwdglbl` is the Id of the extended widget and `dmapextwdglbl` is the data map key.

    ```
    this.view.segSample.widgetdatamap =  {   
        "img1" : "img1",
        "extwdglbl" : "dmapextwdglbl"
    } 
    ```

1.  Assign data to the Segment widget using the [setData](../../iris_widget_prog_guide/Content/Segment_Methods.html#setData) method of the Segment widget.

    ```
    var data = [{
          img1: "emp.png",
          "dmapextwdglbl": {
            "BindingPath": "R0 - WC Lbl"
          },
          {
            img1: "emp.png",
            "dmapextwdglbl": {
              "BindingPath": "R1 - WC Lbl"
            }
          }];
    this.view.segSample.setData(data);
    ```

### Important Considerations

*   An Extended widget cannot be used as a template to a Segment widget. You must add the Extended widget as a child widget to a Template.

*   The component must contain only those widgets that are supported by Segment widget. These widgets are **Button**, **Calendar**, **Image**, **Label**, **RichText**, **Phone**, **Slider**, **Switch**, **TextArea**, and **TextBox** widgets. In the Desktop Web platform, you can also add **CheckBoxGroup** and **RadioButtonGroup** widgets.

*   When input widgets such as TextArea, TextBox, and Switch widgets are used inside an extended widget, the data entered in the widgets are not updated to the masterdata of the Segment. When the user enters a value in any of the widgets, the value is replaced with the default value, after the user scrolls the Segment widget.  

*   To modify the values of properties of an extended widget, you must provide the properties as a JSON object.  
    
    The following sample code shows how to assign values to two properties of an extended Label widget.  

    
    ```  

    /*Here dmapextwdglbl is the widget id of the extended widget and BindingPath is the custom property*/
        
        {
          "dmapextwdglbl": {
            "BindingPath": "R1 - WC Lbl",
            "skin": "sknlbl1"
          }
        }
    ```
