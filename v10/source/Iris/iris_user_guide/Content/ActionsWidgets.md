                         


Widgets Actions
---------------

> **_Note:_** Widget actions are only supported for Apple Watch on V9 Servicepack 5 Fixpack 15 or later.

From the Widgets section of the list of actions available along the left column of the Action Editor, you can add any of the following four actions. Click an action for instructions on how to add it to an action sequence.

  
| Action | Property |
| --- | --- |
| [Set Widget Property](#set-widget-property) | Alters a widget's property. Some of the properties that you can define include: **Visible**:This property defines whether you wanted a widget to appear in an application. **Text**: This property allows you to update the text that is displayed on a widget. **Src**: This property allows you to update an image to the Image2 widget. |
| [Set Master Data](#set-master-data) | Some widgets, such as CheckBoxGroup, ComboBox, DataGrid, RadioButtonGroup, PickerView, and Segment2, need to be configured with an initial set of options or data before they can meet the needs for which you're using them. This initial configuration is referred to as the widget's master data. |
| [Set Widget Skin](#set-widget-skin) | Modifies which skin is associated with the widget. (Not supported for Apple Watch) |
| [Set Map Location](#set-map-location) | Assigns map coordinates to a Map widget. |

### Set Widget Property

To configure an action that sets a particular property for a widget, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Set Widget Property** from the Widget section. The action is added to the action sequence and is the current action of focus.
3.	In the pane of the Action Editor, select the widget of which you would like to change a property.
4.	In the properties pane of the Action Editor, from the Property drop-down list, select the property that you want to set. When you do so, that property's sub-properties display.
5.	Make changes to the sub-properties.
6.	For each additional widget property that you want to set for this action sequence, repeat steps 2 through 4.
7.	Click **Save** to save the action sequence and close the Action Editor window.


### Set Master Data

Some widgets, such as the CheckBoxGroup, ComboBox, DataGrid, RadioButtonGroup, PickerView, and Segment2, need to be configured with an initial set of options or data before they can meet the needs for which you're using them. For instance, a checkbox group needs to be configured with the correct number of options, their labels, and their initial setting (either checked or not checked). This initial configuration is referred to as the widget's master data.

Setting the master data is applicable only for certain widgets.

To configure an action that sets the master data for a widget, do the following:

1.	From the Project tab of the Project Explorer, select the form or widget you want to apply the action to. The widget you wish to edit the master data for must be within the form selected, or within the parent form of the widget. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Set Master Data** from the Widget section. The action is added to the action sequence and is the current action of focus.
3.	In the pane of the action editor, select the widget of which you wish to edit the master data. This widget must be a widget that supports master data selection such as a CheckBoxGroup.
4.	In the properties pane of the Action Editor, click **Set Master Data**.
5.	Configure the master data so that the data set of the widget contains the data you want as a result of the action.
6.	Click **Save** to save the action sequence and close the Action Editor window.


### Set Widget Skin

To configure an action that sets the skin of a form or widget, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Set Widget Skin** from the Widget section. The action is added to the action sequence and is the current action of focus.
3.	In the pane of the action editor, select the form or widget of which you wish to edit the skin. 
4.	In the properties pane of the Action Editor, from the **Skin** list, select which skin the action will apply to (skin, focusSkin, rowSkin, etc.).
5.	From the **Theme** list, select the theme you want to use.
6.	Select the skin you want from the list of available skins. The quantity and names of the skins listed depend on whether or not you have already created skins.
7.	Click **Save** to save the action sequence and close the Action Editor window.


### Set Map Location

The Set Map Location action applies only to the Map widget, and gives you the ability to set a map location, label, and description in response to an event.

To configure an action that sets the map location for a Map widget, do the following:

1.	From the Project tab of the Project Explorer, select the form or widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Set Map Location** from the Widget section. The action is added to the action sequence and is the current action of focus.
3.	In the pane of the action editor, select the map widget of which you wish to set the location.
4.	In the properties pane of the Action Editor, in the **Latitude** text box, enter the latitude coordinate for the location.
5.	In the **Longitude** text box, enter the longitude coordinate for the location.
6.	In the **Name** text box, enter the name of the location that you want the user to see. (Not supported for Apple Watch)
7.	In the **Desc** text box, enter the description of the location that you want the user to see. (Not supported for Apple Watch)
8.	For Apple Watch only, in the **Pin Color** dropdown, selected the desired color of the pin to be placed on the map.
9.	For Apple Watch only, for **Center on Location**, select **True** or **False** depending on whether or not the map should center around the pin. If True is selected, **the Latitude Delta** and **Longitude Delta** text boxes are shown. They can be filled out with the number of degrees to show in the centered map, essentially controlling the zoom level.
10.	Click **Save** to save the action sequence and close the Action Editor window.


