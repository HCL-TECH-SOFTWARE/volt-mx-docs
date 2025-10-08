                           

Volt MX  Application Design and Development Guidelines: [Flex Layout Guidelines](Flex_Layout_Guidelines_Overview.md) > Flex Backwards Compatibility

Flex Container Backward Compatibility
-------------------------------------

> **_Note:_** You can add FlexContainer or FlexScrollContainer inside an HBox or a VBox or a Form through coding.

FlexContainer inside a Box Container
------------------------------------

FlexContainer or FlexScrollContainer widgets support properties (containerWeight, hExpand, vExpand, widgetAlignment, and margin) required for box layout. FlexContainer or FlexScrollContainer widgets can be placed inside an HBox, a VBox or a Form with layoutType configured as voltmx.flex.VBOX\_LAYOUT.

### Positional Properties

Positional properties are not applicable to the FlexContainer, when a FlexContainer is placed inside a % HBox.

The following are the positional properties:

*   left
*   right
*   top
*   bottom
*   centerX
*   centerY

### Dimensional Properties

Dimensional properties, when specified in % for a FlexContainer, will be treated as % relative to the parents (HBox) width.

You will notice the behavior of the dimensional properties when FlexContainer is placed inside a % HBox whose height is unknown.

The following are the dimensional properties:

*   width
*   height
*   minHeight
*   maxHeight
*   minWidth
*   maxWidth

### FlexContainer in % HBox

FlexContainer and FlexScrollContainer widgets support the following % HBox related properties.

*   containerWeight
*   hExpand
*   vExpand
*   widgetAlignment
*   margin

### containerWeight vs Width

To understand how containerWeight and width properties work and their corresponding priorities, see the table below:

  
| width and height of FlexContainer is specified as | If % HBox | Behavior |
| --- | --- | --- |
|   containerWeight is more than the width > **_Note:_** If the width is not specified, then the preferredWidth of the FlexContainer will be considered for calculations. | hExpand = true | FlexContainer widget will expand to the given containerWeight in horizontal direction. |
|^^| hExpand=false | FlexContainer widget will retain the specified or derived width and will be placed horizontally inside the given containerWeight adhering to the widgetAlignment specified. |
|^^| vExpand = true | FlexContainer widget will expand to the height of the % HBox. |
|^^| vExpand = false | FlexContainer widget will be placed vertically inside the % HBox adhering to the widgetAlignment specified. |
|   containerWidth is less than the width > **_Note:_** If the width is not specified, then the preferredWidth of the FlexContainer will be considered for calculations. | hExpand = true | FlexContainer widget width is reduced to fit within the given containerWeight. The widgetAlignment property in the horizontal direction will not have any effect. |
|^^| hExpand=false | FlexContainer widget width is reduced to fit within the given containerWeight. The widgetAlignment property in the horizontal direction will not have any effect. |
|^^| vExpand = true | FlexContainer widget will expand to the height of the % HBox. |
|^^| vExpand = false | FlexContainer widget will be placed vertically inside the % HBox adhering to the widgetAlignment specified. |

### FlexContainer in non % HBox

The width and height specified are considered as the width and height of the FlexContainer widget. If the values are not specified, it will fall back to preferredWidth and perferredHeight.

It is similar to any other widget placed in non % HBox. FlexContainer widget when placed inside non % HBox will not have any effect of hExpand, vExpand, and widgetAlignment properties.

### FlexContainer in VBox or Form with layoutType configured as voltmx.flex.VBOX\_LAYOUT

The width and height specified are considered as the width and height of the FlexContainer widget. If the values are not specified, it will fall back to preferredWidth and preferredHeight.

The width of the FlexContainer widget stretches to the width of the parent, if hExpand property is configured as true. There is no effect on a FlexContainer widget, if vExpand property is configured as true.

Box Container inside a FlexContainer
------------------------------------

The widgets HBox and VBox are not supported inside the FlexContainer. We recommend you to use FlexContainer with layoutType configured as voltmx.flex.FLOW\_VERTICAL instead of VBox and HBox.
