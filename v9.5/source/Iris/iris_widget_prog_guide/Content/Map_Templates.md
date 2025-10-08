                              


Map Templates
=============

> **_Note:_** SegmentedUI templates are supported only on Desktop Web platform.

What is a Template for Map callout
----------------------------------

Map template enables you to define a template for callout with specified widgets. You can use the template on multiple maps and in multiple forms. This is primarily useful for developers to achieve common look and feel of the callout in the map widget and the changes made to template reflect across the maps.

Where to use a Map callout Template
-----------------------------------

Map templates are used in the following cases:

*   To have uniform look and feel of the callout with the specified widgets.
*   To display different callouts for different maps.
*   To perform an action on a callout.

Creating a Template for Map callout
-----------------------------------

When you want information to be displayed across all the Maps in the application, you have a provision to add a Map Template using Volt MX Iris. For more information about Map Templates refer _VoltMX Iris User Guide_.

To create a Map Template at the application-level, follow these steps:

1.  Go to **Applications View**.
2.  Expand the application for which you want to create the _MapTemplate._
3.  Navigate to **templates > maps**, right-click **mobile/desktop/tablet** and select **New Map Template**. The **Create a New Template** window appears.

> 1.  Enter a **Name** for the template.
> 2.  Click **Finish**. A new form is created.
> 3.  Drag and drop a FlexContainer onto the form.

> 1.  Drag and drop the required widgets onto the FlexContainer. Set the properties of these widgets.
> 2.  A map template is created.

Using Map callout Template
--------------------------

You can define only one template for each map using the above process.

To use map template in an application, follow these steps:

1.  Go to **Applications view**.
2.  Expand the application for which you want to use section template.
3.  Navigate to **forms > mobile/tablet/desktop** , right-click and select **New Form**. The **Create a New Form** window appears.
4.  Enter a name for the Form and click **Finish**. A new Form is created.
5.  If you are building for desktop, select the Form in desktop and right-click on the Form. Select **Fork**. The **Platform Selection** window appears.
6.  Select **Desktop\_web** and click **OK**. The form is now forked for Desktop\_web and new window appears as web\_<formname>.

> **_Note:_** The development activities for desktop web should happen in web\_<formname> only. Although the newly created form, remains accessible in the desktop forms.

1.  Drag-drop a Map on the Form and other widgets as required. Click **Save**.
2.  To set the template to a map, select the map and go to **Properties** window.
3.  Select **calloutTemplate** and **Select/Search map Template** window opens. Select the template, which you want to set to the segment.
4.  Click **OK**.

