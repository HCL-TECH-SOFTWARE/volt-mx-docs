                               

HBox Behavior
-------------

The behavior of a [Box](Box.md) is governed by the property [](HBox_Properties.md#percent)[containerWeight](HBox_Properties.md#containerweight) and you must be aware of the following characteristics:

*   An HBox can be placed within a Form, Vbox, Tabpane, a Segment or a ScrollBox(only if the orientation is vertical).
*   An HBox supports three levels of nesting.

If [percent](HBox_Properties.md#percent) is _true_, the HBox exhibits the following _width_ characteristics:

*   The width allocated to the child widget is dependent on the percentage allocated size (container weight) of the widget.
*   The actual width occupied by the widget is determined by the content of the widget and the _Expand horizontal_ property.

If [percent](HBox_Properties.md#percent) property is _false_, the HBox exhibits the following width characteristics:

*   The width of the widget is determined by its preferred width.
*   The widget lay out direction set for a box does not work for Windows Mobile Web.

The HBox exhibits the following _height_ characteristics (the [containerWeight](HBox_Properties.md#containerweight) property does not matter):

*   If an HBox contains multiple child widgets with varying heights, the height of the child widget with the maximum height is set as the height of the HBox.
*   If a background image is specified (as part of the normal skin) for the HBox, and if the height of the child widgets is lesser than the height of the background image, the height of the HBox will be the height of the image.

The shadow effects applied directly on widgets do not work when placed inside a HBox. To achieve the shadow effects, apply the shadows at Box level.

### Scenario 1 (General Layout)

Create an HBox with a width of 200 px and add five buttons (**Button1**, **Button2**, **Button3**, **Button4**, and **Button5**) with container weights of 20 each. Depending upon the properties set for the HBox ([containerWeight](HBox_Properties.md#containerweight)) and for the individual buttons (_Expand horizontal_ preserve">var var _vertical_), the layout varies.

Properties

Set the following property values for the HBox, **Button1**, **Button2**, **Button3**, **Button4**, and **Button5**:

HBox:

HBox width: 200 px

Use Widget Size %: _true_

Button1:

hExpand: _false_

vExpand: _false_

Allocated width: 40 px (20% of 200)

Text to be displayed: Sample

Width required to display the text 'Sample' (preferred width): 20 px

Height required to display the text 'Sample' (preferred height): 40 px

Button2:

hExpand: _true_

vExpand: _false_

Allocated width: 40 px (20% of 200)

Text to be displayed: Sample1

Width required to display the text 'Sample1' (preferred width): 20 px

Height required to display the text 'Sample1' (preferred height): 40 px

Button3:

hExpand: _false_

vExpand: _true_

Allocated width: 40 px (20% of 200)

Text to be displayed: Sample2

Width required to display the text 'Sample2' (preferred width): 20 px

Height required to display the text 'Sample2' (preferred height): 40 px

Button4:

Expand horizontal: _true_

Expand vertical: _true_

Allocated width: 40 px (20% of 200)

Text to be displayed: Sample3

Width required to display the text 'Sample3' (preferred width): 20 px

Height required to display the text 'Sample3' (preferred height): 40 px

Button5:

hExpand: _false_

vExpand: _true_

Allocated width: 40 px (20% of 200)

Text to be displayed: Sample4

Width required to display the text 'Sample4' (preferred width): 60 px

Height required to display the text Sample4' (preferred height): 80 px

Layout

The layout with the above properties appears as follows:

![HBox with five buttons and different properties](Resources/Images/Layout-5_buttons.png)

Explanation:

**Button1**

**Width:** The width occupied is 20 px (preferred width) and not 40 px (allocated width) as the _hExpand_ property is set to false and horizontal expansion is not allowed.

**Height:** The height occupied is 40 px (preferred height) and not 80 px (height of the HBox) as the _vExpand_ property is set to false and vertical expansion is not possible.

**Button2**

**Width:** The width occupied is 40 px (allocated width) and not 20 px (preferred width) as the _hExpand_ property is set to true and horizontal expansion is allowed.

**Height:** The height occupied is 40 px (preferred height) and not that of the HBox (80 px) as the _vExpand_ property is set to false and vertical expansion is not possible.

> **_Note:_** **Button2** does not begin immediately after **Button1**. This is because the [Use Widget Size %](HBox_Properties.md#Use) property of the HBox is set to true.

**Button3**

**Width:** The width occupied is 20 px (preferred width) and not 40 px (allocated width) as the _hExpand_ property is set to false and horizontal expansion is not allowed.

**Height:** The height occupied is 80 px (HBox height) and not 40 px (preferred height) as the _vExpand_ property is set to true and vertical expansion is possible.

**Button4**

**Width:** The width occupied is 40 px (allocated width) and not 20 px (preferred width) as _hExpand_ property is set to true and horizontal expansion is allowed.

**Height:** The height occupied is 80 px (HBox height) and not 40 px (preferred height) as _vExpand_ property is set to true and vertical expansion is possible.

**Button5**

**Width:** The width occupied is 40 px (allocated width) and not 60 px (preferred width) even though the _hExpand_ property is set to false.

This is because when the required width is more than the allocated width, the widget always occupies the complete allocated width irrespective of the _Expand_ property setting and wraps the text to the next line.

**Height:** The height occupied is 80 px (preferred height).

HBox

**Width:** The width occupied is 200 px (container weight)

**Height:** The height occupied is 80 px.

If there are multiple child widgets with varying heights, the height of the child widget with the maximum height is set as the height for the HBox.

Here, **Button5** has the maximum height. So, the height of **Button5** is set as the height of the HBox.

### Scenario 2 (Alignment)

Create an HBox with a width 100 px and add two widgets (**Label1**and **Button1**) with container weights of 50 and 50 respectively, the following use cases are applicable:

##### Use Case 1

Set the following property values for the HBox, **Label1**, and **Button1**:

HBox:

HBox width: 100 px

Use Widget Size %: _true_

Label1

hExpand: _true_

vExpand: _true_

Allocated width: 50 px (50% of 100)

Text to be displayed: Large text (enter any text which wraps to four lines)

Height required to display the text (preferred height): 80 px

Button1:

hExpand: _false_

vExpand: _false_

Allocated width: 50 px (50% of 100)

Text to be displayed: Hi

Width required to display the text 'Hi' (preferred width): 20 px

Height required to display the text 'Hi' (preferred height): 30 px

Layout

The layout with the above properties appears as follows:

![Button with Expand false](Resources/Images/H-L-B-E--Hf-Vf.png)

Explanation

The height of the HBox is the height of the child widget with the maximum height. Here **Label1** has the maximum height, and so, the height of **Label1** is set as the height of the HBox.

This means that the width and height available to **Button1** are 50 px and 80 px respectively.

However, as the _Expand_ _horizontal_ preserve">var var _vertical_ properties for **Button1** are false, **Button1** occupies a width of 20 px (preferred width) and a height of 30 px (preferred height) respectively. This gives an opportunity for **Button1** to be aligned in the directions specified by the [layoutAlignment](HBox_Properties.md#layoutalignment) property.

##### Use Case 2

Set the following property values for the HBox, **Label1**, and **Button1**:

HBox:

HBox width: 100 px

Use Widget Size %: _true_

Label1

hExpand: _true_

vExpand: _true_

Allocated width: 50 px (50% of 100)

Text to be displayed: Large text (enter any text which wraps to four lines)

Height required to display the text (preferred height): 80 px

Button1:

hExpand: _true_

vExpand: _false_

Allocated width: 50 px (50% of 100)

Text to be displayed: Hi

Width required to display the text 'Hi' (preferred width): 20 px

Height required to display the text 'Hi' (preferred height): 30 px

Layout

The layout with the above properties appears as follows:

![Button Expand horizontal true and vertical false](Resources/Images/H-L-B-E--Ht-Vf.png)

Explanation

The height of the HBox is the height of the child widget with the maximum height. Here, **Label1** has the maximum height, and so, the height of **Label1** is set as the height of the HBox.

This means that the width and height available for **Button1** are 50 px and 80 px respectively.

For **Button1**, as the _Expand_ _horizontal_ property is set to _true_, it occupies a width of 50 px (allocated width).

As the _Expand_ _vertical_ property is set to _false_, **Button1** occupies a height of 30 px (preferred height). Alignment is possible only in the vertical direction.

##### Use Case 3

Set the following property values for HBox, **Label1**, and **Button1**:

HBox:

HBox width: 100 px

Use Widget Size %: _true_

Label1

hExpand: _true_

vExpand: _true_

Allocated width: 50 px (50% of 100)

Text to be displayed: Large text (enter any text which wraps to four lines)

Height required to display the text (preferred height): 80 px

Button1:

hExpand: _false_

vExpand: _true_

Allocated width: 50 px (50% of 100)

Text to be displayed: Hi

Width required to display the text 'Hi' (preferred width): 20 px

Height required to display the text 'Hi' (preferred height): 30 px

Layout

The layout with the above properties appears as follows:

![](Resources/Images/H-L-B-E--Hf-Vt.png)

Explanation

The height of the HBox is the height of the child widget with the maximum height. Here, **Label1** has the maximum height, and so, the height of **Label1** is set as the height of the HBox.

This means that the width and height available for **Button1** are 50 px and 80 px respectively.

For **Button1**, as the _Expand_ _vertical_ property is set to _true_, it occupies the entire available height of 80 px and not 30 px (preferred height). Alignment is possible only in the horizontal direction.

##### Use Case 4

Set the following property values for the HBox, **Label1**, and **Button1**:

HBox:

HBox width: 100 px

Use Widget Size %: _true_

Label1

hExpand: _true_

vExpand: _true_

Allocated width: 50 px (50% of 100)

Text to be displayed: Large text (enter any text which wraps to four lines)

Height required to display the text (preferred height): 80 px

Button1:

hExpand: _true_

vExpand: _true_

Allocated width: 50 px (50% of 100)

Text to be displayed: Hi

Width required to display the text 'Hi' (preferred width): 20 px

Height required to display the text 'Hi' (preferred height): 30 px

Layout

The layout with the above properties appears as follows:

![Button with expand horizontal and vertical as true](Resources/Images/H-L-B-E--Ht-Vt.png)

Explanation

The height of the HBox is the height of the child widget with the maximum height. Here **Label1** has the maximum height, and so, the height of **Label1** is set as the height of the HBox.

This means that the width and height available for **Button1** are 50 px and 80 px respectively.

However, as the _Expand_ _horizontal_ preserve">var var _vertical_ properties for **Button1** are _true_, **Button1** occupies the complete available width and height and cannot be aligned in any direction.

