                         


Android Wear
============

Android Wear (now called Wear OS) is a version of Google's Android Operating system designed for smart watches and other wearables. Android Wear pairs with devices running on Android 4.3 or newer and iOS version 8.2 or newer phones. You can use Android Wear to perform functions such as calling, text messaging, and receiving notifications. Watch face styles include round and square. Volt MX Iris supports Sony SmartWatch 3 (320 x 320), Android Wear (400 x 400), and Android Wear (480 x 480).

Ensure that you configured Android Wear properties in Project Settings. For more information, see [Android Wear Properties](AndroidWear_Properties.md).

The following are the main features of an Android Wear:

*   [Forms](#forms)
*   [Form Properties](#form-properties)

Forms
-----

A form is the starting point for any application and is the top most container. A form can contain any number of widgets but cannot contain another form.

Your Android Wear app can consist of multiple forms, and you can move from one form to another using a couple of different methods. You can use an action sequence, such as assigning the **Navigate to Form** action to a button so that, when it is clicked, it displays a different form.

#### Add an Android Wear Form

**To add an Android Wear form to the Iris canvas, follow these steps:**

1.  Open Volt MX Iris.
2.  From the **Project** menu, select **New Project** or **Open** > <_your Project name_\>.  
    Your project opens.
3.  In the Project tab, expand the **Wearables** folder.  
    The Wearables folder expands displaying its contents.
4.  Expand the **Android Wear** folder.  
    The Android wear folder expands displaying its contents.
5.  Click on the down-arrow next to **Forms**.  
    A list appears.
6.  Select **New Form** from the list.  
    A new form is created with a default name.
7.  If you want to rename the form, click on the down-arrow next to the form and then click **Rename**.  
    Rename the form.

#### Mark as StartUp

Mark as StartUp functionality is used to make a form function as the app's start up form. The form that is a marked as start up is the first form to appear after the application is loaded.

**To mark a form as the start up form, follow these steps:**

1.  In your Iris project, in the Project tab, expand the **Wearables** folder.
2.  Expand the **Android Wear** folder.  
    The Android wear folder expands displaying its contents.
3.  Expand the **Forms** folder.  
    All forms available in the folder appear.
4.  From the list, select the form you want to choose as the startup form.
5.  Click on the down-arrow next to the form and select **Mark as StartUp**.

> **_Note:_** By default, the first form is considered as the start up form until another form is specifically marked as start up.

#### Add a Widget to a Form

To add a widget to a form, do the following:

1.  From the **Default Library** pane of Volt MX Iris, drag the required widget and drop it on a form on the Iris Canvas.
2.  A new widget with a default name/ID is added to the form.
3.  You may choose to rename the widget by changing its **ID** in the **Look** tab under the **Properties** pane of Volt MX Iris or right-click the widget name in the **Project** tab and then click **Rename**.
4.  Save the form.

The following widgets are supported on an Android Wear form:

<table style="mc-table-style: url('Resources/TableStyles/Basic.css');margin-left: 0;margin-right: auto;width: 532px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col style="width: 114px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 146px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 129px;" class="TableStyle-Basic-Column-Column1"> <col style="width: 139px;" class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">FlexContainer</td><td class="TableStyle-Basic-BodyE-Column1-Body1">FlexScrollContainer</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Tab</td><td class="TableStyle-Basic-BodyD-Column1-Body1">TabPane</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">Button</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Calendar</td><td class="TableStyle-Basic-BodyE-Column1-Body1">CheckBoxGroup</td><td class="TableStyle-Basic-BodyD-Column1-Body1">DataGrid</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">Image</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Label</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Listbox</td><td class="TableStyle-Basic-BodyD-Column1-Body1">RadioButtonGroup</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">RichText</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Slider</td><td class="TableStyle-Basic-BodyE-Column1-Body1">TextArea</td><td class="TableStyle-Basic-BodyD-Column1-Body1">TextBox</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyE-Column1-Body1">Map</td><td class="TableStyle-Basic-BodyE-Column1-Body1">Phone</td><td class="TableStyle-Basic-BodyE-Column1-Body1">PickerView</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Segment</td></tr><tr class="TableStyle-Basic-Body-Body1" data-mc-conditions=""><td class="TableStyle-Basic-BodyB-Column1-Body1">Switch</td><td class="TableStyle-Basic-BodyB-Column1-Body1">Video</td><td class="TableStyle-Basic-BodyB-Column1-Body1">&nbsp;</td><td class="TableStyle-Basic-BodyA-Column1-Body1">&nbsp;</td></tr></tbody></table>

#### Duplicate a Form

When you want to have a form that is similar to an existing form, you can duplicate the required form and reuse it.

To duplicate a form, do the following:

1.  Click on the down-arrow next to the form you want to duplicate.  
    A drop down menu appears.
2.  From that drop down menu click on **Duplicate**.
3.  A duplicate form with a default name is created.
4.  If you want to rename the form, click on the down-arrow next to the form and then click **Rename**.  
    Rename the form.

#### Delete a Form

When you no longer require a form, you can delete it.

To delete a form, do the following:

1.  Click on the down-arrow next to the form that you want to delete.  
    A drop down menu appears.
2.  Click on **Delete** from that drop down.  
    A deletion confirmation alert appears.
3.  Click **OK** on the alert to delete the form.

#### Open the Assets Folder

**To navigate to the location where the form assets are available on your computer, do the following:**

1.  Click on the down-arrow next to the form whose assets folder you want to view.  
    A drop down menu appears.
2.  Select **Resource Location** from that drop down.  
    The Windows Explorer or Finder where the form assets are located appears.

Form Properties
---------------

You can customize the following properties of a form:

*   [Look](#look)
*   [Skin](#skin)
*   [Form](#form)
*   [Action](#action)
*   [Review](#review)

#### Look

On the Look tab, you set properties that control the way a form appears on an app. The following are the major properties you can condition for a form:

  
| Property | Definition | Action |
| --- | --- | --- |
| **ID** | It is the unique identifier of the form. | When a form is added, the system assigns a unique ID (or name). You can rename the form ID if required. |
| **Render** | This property defines if a form should appear on a specific platform. | By default, a form is rendered for all the platforms. If you do not want to render a form for a specific platform, click the **Edit** button against the **Render** to open the **Render Platforms** dialog box. Clear the platform check box for which you do not want to render the form. |
| **Friendly Name** | The friendly name of the form is the name that the [Navigation](../../../Iris/voltmx_ref_arch_api/Content/Navigation_Object.md) object is to be created for. | You can give any friendly name to the form here. |
| **Controller** | The code for the FormController object is created by the code generation tool for you. It communicates with both the models for the data sources and the viewmodels for the forms. | You can choose which FormControllers actions you want to link to this form. Click the **...** button against the **Controller** to open the **Switch Controller** dialog box. |

#### Skin

On this tab, you define properties such as background color, borders, and shadows for a form. For an Android Wear form, you can define a skin its **Normal**, **Menu Normal**, and **Menu Focus** state. You can copy, paste, assign and duplicate any of these skins.

For more information on skin properties, see [Understanding Skins and Themes](Customizing_the_Look_and_Feel_with_Skins.md).

##### Normal

Under the **Normal** tab the properties we have are:

  
| Property | Definition | Action |
| --- | --- | --- |
| **General** | The name of the skin(s) is stored here. | You can fork a skin and apply whichever one you choose |
| **Background** | The background of the form can be customized here. | You can choose the type of gradient, color, and preferred opacity of the background. |
| **Border** | This feature helps apply a border to the form. | You can choose the size, type of gradient, color, opacity, and style of the border. |

##### Menu Normal

After we tick the **Enable** checkbox, all the properties can be edited.

Under the **Menu Normal** tab the properties we have are:

  
| Property | Definition | Action |
| --- | --- | --- |
| **General** | The name of the skin(s) is stored here. | You can fork a skin and apply whichever one you choose |
| **Background** | The background of the form can be customized here. | You can choose the type of gradient, color, and preferred opacity of the background. |
| **Border** | This feature helps apply a border to the form. | You can choose the size, type of gradient, color, opacity, and style of the border. |

##### Menu Focus

After we tick the **Enable** check box all the properties can be edited.

Under the **Menu Focus** tab the properties we have are:

  
| Property | Definition | Action |
| --- | --- | --- |
| **General** | The name of the skin(s) is stored here. | You can fork a skin and apply whichever one you choose |
| **Background** | The background of the form can be customized here. | You can choose the type of gradient, color, and preferred opacity of the background. |
| **Border** | This feature helps apply a border to the form. | You can choose the size, type of gradient, color, opacity, and style of the border. |

#### Form

On this tab, you set properties that are common for all the platforms and also, set properties that are unique to a platform.

##### General

  
| Property | Definition | Action |
| --- | --- | --- |
| **Enable Idle Timeout** | This property is used if the user has been idle on a form for a specific period of time. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Transition: IN** | Specifies how the form appears on the screen. You can choose a transition effect out of 11 available transitions. | Click the **Edit** button against the **Transition: IN** to open the **Transition: IN** dialog box. Select the preferred Transition event from the drop-down. |
| **Transition: OUT** | Specifies how the form moves away from the screen. You can choose a transition effect out of 11 available transitions. | Click the **Edit** button against the **Transition: OUT** to open the **Transition: OUT** dialog box. Select the preferred Transition event from the drop-down. |
| **Title** | Specifies the title of the Form. | Enter a tile for the Form. |
| **Retain Scroll Position** | Specifies if the Form must remember the scroll position when the user revisits the Form. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Header Overlap** | Specifies if the header must overlap the form. If this field is selected, the form scrolls behind the header background and a part of the header background is transparent. | You can select **On** or **Off** for this property using the radio buttons provided. Click the **...** button against the **Header Overlap** to open the **Header Overlap** dialog box and choose the platforms for which you want this property to work. |
| **Footer Overlap** | Specifies if the footer must overlap the form. If this field is selected, the form scrolls behind the footer background and a part of the footer background is transparent. | You can select **On** or **Off** for this property using the radio buttons provided. Click the **...** button against the **Footer Overlap** to open the **Footer Overlap** dialog box and choose the platforms for which you want this property to work. |
| **Layout Type** | Specifies if the arrangement of the widgets either in free form or vertical direction. | Choose any layout type from **Free Form** or **Flow Vertical**. |
| **Enable Scrolling** | Specifies whether the scrolling is enabled on the flex container or not. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Bounces** | Specifies whether the scroll view bounces past the edge of the content and back again. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Horizontal Bounce** | Specifies whether the scroll bounce is enabled or disabled in the horizontal direction. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Vertical Bounce** | Specifies whether the scroll bounce is enabled or disabled in the vertical direction. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Vertical Scroll Indicator** | Specifies whether the scroll indicator must be shown or not in the vertical direction. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Paging** | Specifies the whether the paging is enabled for the container. If this property is set to true, the scroll view stops on multiples of the scroll view's bounds when the user scrolls. | You can select **On** or **Off** for this property using the radio buttons provided. By default, it is **Off**. |
| **Content Offset X** | Specifies the X coordinate of the top-left scrollable region. When the value is set, the container scrolls even if the scrolling is disabled. This will always return the value that you set, but never reflects the actual computed offset. | You can specify the coordinates using **Dp**, **Px**, and **%** units. The default unit is **Dp**. |
| **Content Offset Y** | Specifies the Y coordinate of the top-left scrollable region. When the value is set, the container scrolls even if the scrolling is disabled. This will always return the value that you set, but never reflects the actual computed offset. | You can specify the coordinates using **Dp**, **Px**, and **%** units. The default unit is **Dp**. |
| **Content Size Width** | Specifies the width of the flex container to accommodate all the widgets placed in it. This will returns the values that you set, but never reflects the actual computed content size. | You can specify the coordinates using **Dp**, **Px**, and **%** units. The default unit is **Dp**. |
| **Content Size Height** | Specifies the height of the container to accommodate all the widgets placed in it. This will returns the values that you set, but never reflects the actual computed content size. | You can specify the coordinates using **Dp**, **Px**, and **%** units. The default unit is **Dp**. |
| **Snap to Grid** | When turned On, this feature sets default positions that a widget will move on drag (or any other) action by a user into the Android Wear layout automatically. | You can select **On** or **Off** for this property using the radio buttons provided. |
| **Snap Grid Size** | When turned On, this feature sets default positions that a widget will move on drag (or any other) action by a user. you can specify the grid size using this feature. | You can specify the number of the size. |
| **Default Unit** | Specifies the unit that will be used as the default unit value throughout the form properties. | You can choose between **Dp**, **Px**, and **%**. |

##### Android Wear OS

  
| Property | Definition | Action |
| --- | --- | --- |
| **Soft Input Mode** | This property defines how the main Form interacts with the window containing the on-screen soft keyboard. It determines the adjustments made to the Form whether it is resized smaller to make room for the soft keyboard or whether its contents pan to make the current focus visible when part of the Form is covered by the soft keyboard.   | You can choose between **Adjust-Pan** and **Adjust-Resize**. **FORM\_ADJUST\_RESIZE**: Specifies the form is resized and when you click or start typing within the widget which requires an input, the form scrolls up and the widget which requires an input is not overlapped by the keypad or footer. **FORM\_ADJUST\_PAN**: Specifies the widget which requires an input is placed at the bottom of the popup is overlapped by the keypad. The main Form is not resized to make room for the soft keyboard. Rather, the contents of the Form are automatically panned so that the current focus is never obscured by the keyboard and users can always see what they are typing. This is generally less desirable than resizing, because the user may need to close the soft keyboard to get at and interact with obscured parts of the Form. |
| **Dismiss on Edge Swipe** | Using this feature, you can enable or disable dismissing forms by swiping at the edge. | You can turn it **On** or **Off**. |

### Action

##### General

On this tab, you define the events that are executed when an action is run. For a notification, you can run the following actions:

  
| Property | Definition | Action |
| --- | --- | --- |
| **init** | This action allows you initialize your interface controller. | Click **Edit** to add actions. |
| **preShow** | This action allows you to customize an event which is triggered every time a form is to be displayed. | Click **Edit** to add actions. |
| **postShow** | This action allows you to customize an event which is triggered every time after a form is displayed. | Click **Edit** to add actions. |
| **onHide** | This action allows you to customize an event which is triggered when a form goes completely out of view. | Click **Edit** to add actions. |
| **onDestroy** | This action allows you to customize an event which is triggered when the Form is destroyed. | Click **Edit** to add actions. |
| **onTouchStart** | This action allows you to customize an event which is triggered once the user touches the touch surface. | Click **Edit** to add actions. |
| **onTouchMove** | This action allows you to customize an event which is triggered once the user's touch moves on the touch surface. | Click **Edit** to add actions. |
| **onTouchEnd** | This action allows you to customize an event which is triggered once the user's touch is released from the touch surface. | Click **Edit** to add actions. |

##### Android Wear OS

  
| Property | Definition | Action |
| --- | --- | --- |
| **onDeviceMenu** | This action allows you to customize an event which is triggered once the user accesses the device menu. | Click **Edit** to add actions. |
| **onDeviceBack** | This action allows you to customize an event which is triggered once the user uses the back button on the device menu. | Click **Edit** to add actions. |
| **onOrientationChange** | This action allows you to customize an event which is triggered when there is a change in orientation of the form. | Click **Edit** to add actions. |
| **onActionBarBack** | This action allows you to customize an event which is triggered once the user uses the back button on the action bar. | It is enabled only when the onActionBarBack callback is registered on form and the showActionBarIcon is set to true. Click **Edit** to add actions.   |

For more information on using these actions, see the topic, [Add Actions](working_with_Action_Editor.md).

#### Review

This tab can be used to add Notes and Comments to the selected form.

You can search for the notes written about a form by typing its name in the **Search** box.

You can expand, contract, add, and delete notes.
