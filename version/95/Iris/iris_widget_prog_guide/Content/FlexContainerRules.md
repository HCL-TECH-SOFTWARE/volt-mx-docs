                               


Flex Layout Rules
=================

Widgets placed in a Flex Container adhere to some rules for width, height, and positioning of the widget with respect to other widgets and parent container.

*   [Height and Width Rules](#height-and-width-rules)
*   [Preferred Width and Preferred Height Rules](#preferred-width-and-preferred-height-rules)
*   [Widget Layout Properties - Priority Rules](#widget-layout-properties-priority-rules)
*   [Margin and Padding Rules](#margin-and-padding-rules)
*   [Device Independent Pixels](#device-independent-pixels)

Height and Width Rules
----------------------

Height and width of a widget are determined by the explicit values specified to width and height properties. There are cases where you will not be able to give an explicit width and height, due to dynamic nature of the application.

The properties minHeight, maxHeight, minWidth, and maxWidth of a widget are used to determine the width and height of the widgets.

Below are some of the cases that explain the behavior of the widget with respect to the properties specified:

  
| Condition | Behavior |
| --- | --- |
| width of the widget is defined | The defined width is considered for layout purpose. The explicitly defined width will make width range ineffective. |
| height of the widget is defined | The defined height is considered for layout purpose. The explicitly defined height will make height range ineffective. |
| width is undefined and minWidth and maxWidth are defined | The properties minWidth and maxWidth are used to determine the width of the widget. The widget is asked for its preferred width and the final width of the widget is calculated based on minWidth, maxWidth specified and preferred width of the widget. Always the equation minWidth <= calculatedWidth <= maxWidth is maintained. |
| height is undefined and minHeight and maxHeight are defined | The properties minHeight, maxHeight are used to determining the height of the widget. The widget is asked for its preferred height and the final height of the widget is calculated based on minHeight, maxHeight and the preferred height of the widget. Always the equation minHeight <= calculatedHeight <= maxHeight is maintained. |
| width and minWidth are undefined and maxWidth is defined | The property maxWidth is used to determining the width of the widget. The widget is asked for its preferred width and the final width of the widget is calculated based on maxWidth specified and the preferred width of the widget. Always the equation 0 <= calculatedWidth <= maxWidth is maintained. |
| width and maxWidth are undefined and minWidth is defined | The property minWidth is used to determine the width of the widget. The widget is asked for its preferred width and the final width of the widget is calculated based on minWidth specified and preferred width of the widget. Always the equation minWidth <= calculatedWidth <= preferredWidth is maintained. |
| height and minHeight are undefined and maxHeight is defined | The property maxHeight is used to determinining the height of the widget. The widget is asked for its preferred height and the final height of the widget is calculated based on maxHeight specified and the preferred height of the widget. Always the equation 0 <= calculatedHeight <= maxHeight is maintained. |
| height and maxHeight are undefined and minHeight is defined | The property minHeight is used to determining the height of the widget. The widget is asked for its preferred height and the final height of the widget is calculated based on minHeight specified and the preferred height of the widget. Always the equation minHeight <= calculatedHeight <= preferredHeight is maintained. |
| minWidth > maxWidth | For width calculations, only maxWidth is considered assuming minWidth as zero. minWidth specified is ignored. |
| minHeight > maxHeight | For height calculations, only maxHeight is considered assuming minHeight as zero. minHeight specified is ignored. |

Preferred Width and Preferred Height Rules
------------------------------------------

The preferred width and preferred height will vary per widget from platform to platform. Widgets are categorized with respect to their preferred width and preferred height calculations:

*   preferredWidth is the width defined by the platform when the width of the widget is not provided. The platform will read the content and based on which it will assign the width.
*   preferredHeight is the height defined by the platform when the height of the widget is not provided. The platform will read the content and based on which it will assign the height.

  
| Content Driven Widgets | Fixed Width in Individual Platforms | Greedy Widgets |
| --- | --- | --- |
| Label | Switch | SegmentedUI |
| Button | Slider | TabPane |
| Image |   | Horizontal Image Strip |
| Calendar |   | Image Gallery |
| CheckBox Group |   | DataGrid |
| ListBox |   | FlexContainer |
| Link |   | FlexScrollContainer |
| ComboBox |   | Browser |
| RadioButton Group |   | Map |
| RichText |   | Chart2D3D |
| Camera |   | TextBox |
| PickerView |   | TextArea |
| Phone |   |   |

 

> **_Note:_** For content-driven widgets, while deciding the preferred width and preferred height, padding is considered as part of the content.

Widget Layout Properties - Priority Rules
-----------------------------------------

For Flex Layout, it is not necessary to set all the layout properties except that determine the position and dimension of the widget without any ambiguity.

| Positioning | Priority Rules |
| --- | --- |
| Horizontal positioning | The centerX property has more priority over the left property.The left property has more priority over the right property.When none of the horizontal properties are defined, the widget is positioned in such a way that left of the widget is placed at the left boundary of the parent. |
| Vertical positioning | The centerY property has more priority over the top property.The top property has more priority over the bottom property.When none of the vertical properties are defined, the widget is positioned in such a way that top of the widget is placed at the top boundary of the parent. |
| width | The width property has more priority than implicit width calculations.When the width is not specified, the implicit width calculations will rely on the widthRange specified.When width related properties are not specified, implicit width calculations will rely on positioning properties.Height is determined in the order of centerX, left, and right properties. When implicitly calculated values for width are negative values, then these negative values will default to zero. |
| height | The height property has more priority than implicit height calculations.When the height is not specified, implicit calculations will rely on heightRange specified.When the height related properties are not specified, implicit height calculations will rely on positioning properties.In the order of centerY, top, and bottom properties are used to determine height.When implicitly calculated values for height are negative values, then these negative values will default to zero. |

 

Additional information:

*   When any of the width or height related parameters are provided, then, the width will be determined based on the [width and height rules](#Width).
*   If none of the width or height related properties are specified, then the layout manager (as a second priority) does implicit calculations and determines the width and height. These calculations are done based on the positional properties provided as per the rules laid out in the above table.
*   If the values implicitly calculated are negative values (for width and height), then values will default to zero.
*   For FLOW\_HORIZONTAL or FLOW\_VERTICAL layout types, implicit calculations are not done to determine the width and height.
*   If positional properties are not good enough to perform implicit calculations, then layout manager purely goes by widgets preferred dimensions (preferred width and preferred height).
*   Few properties (screenLevelWidget, containerHeight, and containerHeightReference) are not supported for the widgets placed inside flex containers.

Margin and Padding Rules
------------------------

Following are the Margin and Padding rules applicable to widgets using Flex Layout:

*   When widgets are placed inside a FlexContainer, the margin values set to the widget will not have any effect.
*   FlexContainer and FlexScrollContainer widgets do not support padding. However, widgets placed inside these containers support Padding.
*   When placed inside a FlexContainer, padding will create the space between widget boundaries and content. Padding will not influence the width and height of the widget.
*   Padding is supported in device independent pixels (dp) and percentage (%) through two properties, padding and paddingInPixel.
*   When widgets are placed inside a FlexContainer, properties hExpand, vExpand, widgetAlignment, containerWeight, and MarginInPixel will not have any effect.
*   All widgets that accept templates will accept FlexContainer as a template.

Device Independent Pixels
-------------------------

Device Independent Pixels (Dp) are the pixels scaled on the actual device depending on the screen pixel density factor. Device pixel density is calculated as dots per inch (dpi), which varies from device to device, but when Dp is specified, actual hardware pixels are calculated with following formula:

Pixels = (Dp) \* (DeviceScreenDensity in dpi) / (standard dpi)

The following table provides standard dpi values for each operating system.

| Operating System | Standard dpi |
| --- | --- |
| iOS | 163 dpi |
| Android | 160 dpi |
| SPA and Windows | 96 dpi |

> **_Note:_** In the case of Android devices, standard dpi may change based on the device/manufacturer, so Android platform uses standard dpi during run time.

> **_Note:_** Dps should be used by analyzing how the system (platforms) will convert them into system units.

