                               


DataGrid Templates
==================

> **_Note:_** DataGrid templates are supported only on Desktop Web platform.

What is a DataGrid Template
---------------------------

Grid Template is an HBox in which the developer adds the required widgets and set their alignment. These templates are used to render columns and rows in the grid when the grid column is set to be of type template.

### Where to use a DataGrid Template

Grid Templates are used to display the data as well as widgets in a DataGrid.

The Grid Templates are used to:

*   support template type to columns.
*   support template type to headers.
*   specify the column span while setting the data to the column.

### Creating a DataGrid Template

When you want the same information to be displayed across all the DataGrids in the application, you have a provision to add a Grid Template using Volt MX Iris.

To create a grid template at the application-level, follow these steps:

1.  Go to Applications View.
2.  Expand the application for which you want to create the Grid Template.
3.  Navigate to templates > grids, right-click desktop and select New Grid Template. The Create a New Grid window appears.

> 1.  Enter a Name for the template.
> 2.  Click Finish. A new form is created.
> 3.  Drag and drop an HBox or a VBox within an HBox.
>     
>     > **_Note:_** Only HBox and VBox are supported on the form. You can put other widgets within these widgets. The widgets that can be dragged into the container are displayed in the Palette view.
>     
> 4.  Drag and drop the required widgets onto the HBox/ VBox. Set the properties of these widgets.
> 5.  A grid template is created.

You can set the created grid template for a row or a column using the Master Data Property of DataGrid. Previously in the Master Data property for a DataGrid you could only specify text for the column header template and column template. Using the Grid template, you can set images to be a part of the column header template or the column template.

You can use the following widgets to define a Grid Template:

*   HBox
*   VBox
*   Button
*   Calendar
*   CheckBoxGroup
*   ComboBox
*   Image
*   Label
*   Line
*   Link
*   RadioButtonGroup
*   RichText
*   TextArea
*   TextBox

### Using DataGrid Template

You can create separate templates for column Headers and Rows using the above process.

To use Grid Template in an application, follow these steps:

1.  Go to Applications view.
2.  Expand the application for which you want to use DataGrid.
3.  Navigate to forms > desktop, right-click desktop and select New Form. The Create a New Form window appears.
4.  Enter a name for the Form and click **Finish**. A new form is created.
5.  Right-click on the newly created form and select Fork. The Platform Selection window appears.
6.  Select Desktop\_web and click OK. The form is now forked for Desktop\_web and new window appears as web\_<formname>.

> **_Note:_** The development activities for desktop web should happen in web\_<formname> only. Although the newly created form, remains accessible in the desktop forms.

1.  Drag-drop a DataGrid on the form and set data using [data](DataGrid_Properties.md#data) property.

