                         


Supporting Right-to-Left Languages
==================================

Volt MX  Iris supports Right-to-Left (RTL) languages. When RTL layout is enabled, the user interface is mirrored. The text direction changes from right-to-left.

The Internationalization section of Iris has a new i18N property (Project Settings > Application in Volt MX Iris). When a user configures locales, the user can define each one of the following:

*   **Flex Position properties**: When enabled, layout properties are reversed from Left to Right(LTR) and Right to Left(RTL).
*   **Content Alignment**: When enabled, the flex content is aligned from right to left.

From V8 SP4 onwards, we also have:

*   **Flow Horizontal Alignment**: When enabled, flow horizontal left alignment is converted to flow horizontal right alignment.

By default, these options are disabled.

*   In Volt MX Iris, after the Enable i18n feature is enabled in Project Settings, a new field, **Enable i18n Layout Config** appears beside it.
*   At form level, for those widgets on the form on which i18n is applicable, a new **Replace i18n Layout** is enabled in the **Properties** > **Look** section. Using these fields, you can allow exceptions for this right to left layout configured at the locale level.
*   The exception toggle is enabled when you set **Custom** to **On** from under the Replace i18n Layout.
*   The toggles for all the properties are only visible when Custom is configured as On. The default value for these is Off.
*   Once Custom is set to On, all locales respect only the custom configuration.
*   For any widget, once the **Custom** button is set to **On** and if one or more of the toggles (Flex Position Properties / Content Alignment / Flow Horizontal Alignement) are set to **On**, then the widget ignores the configurations set at locale level and renders the layout as it is designed.

<div class="youtube-wrapper"><iframe src="https://www.youtube.com/embed/yNbvHvXqWGQ" allowfullscreen=""></iframe></div>

Important Considerations
------------------------

*   For any widget which has an exception toggle set, there won’t be any changes to the layout.
*   For any widget where **Left** is set, and **Width** is set, but **Right** is empty, the **Left** value will be replaced into the **Right** value, and the Left value will be changed to NULL
*   For any widget where **Right** is set and **Width** is set, but **Left** is empty, the **Right** value will be replaced into the **Left** value, and the Right value will be changed to NULL.
*   For any widget which has both Right and Left Values set, the values are swapped.
*   For any widget with content alignment is configured to **Left**, content alignment is configured to **Right**
*   For any widget where content alignment is configured to **Right**, content alignment is configured to **Left**.
*   For any widget, if the **Padding** has a Left value, the Left value will be replaced into the Right value.
*   For any widget, if the **Padding** has a Right value, the Right value will be replaced into the Left value.
*   For any Container widgets, if the layout type is set to Flow Horizontal, the layout type changes from **Flow Right** to **Flow Left**.
*   For any Container widgets, if the layout type is Free form, the Left layout property is converted to Right and Right layout property is converted to Left. Also, the widget order is reversed.

Supported Widgets
-----------------

*   Flex Container
*   Flex Scroll Container
*   Label
*   Text Box
*   Button
*   Text Area
*   Switch
*   Segment
*   Image
*   Camera
*   Map
*   Rich text widget
*   Browser widget
*   Slider
*   Video
*   ComboBox
*   Phone
*   PickerView
*   Tab Pane
*   Tab

Configure Right-to-Left Layout
------------------------------

To configure internationalization, do the following:

1.  In Volt MX Iris, on the **Project Settings**\> **Application**, under **Internationalization (i18n)**, select the **Enable i18n** checkbox.  
    When you select the Enable i18n checkbox, the **Enable i18n Layout Config** checkbox is enabled. Select the **Enable i18n Layout Config** checkbox.
2.  Click **Configure**.  
    The Configure Internationalization page opens.
3.  Click **Configure Locales**. The Configure Locales page opens. The page displays predefined languages that support Right-to-Left layout.
4.  For any of the language, you want to enable RTL, select the locale. You can choose to select the checkboxes for check Flex Position Properties, Content Alignment, and Flow Horizontal Alignement.

Exceptions for Right-to-Left Layout from the Properties Pane
------------------------------------------------------------

Every widget has an exception toggle for the supported properties. You can enable this toggle by selecting **Custom** under **Replace i18n Layout**.

To configure exceptions for Right-to-Left layout from the properties pane, do the following:

1.  In the Project Explorer, on the Project tab, expand the forms. Select the form for which you want to configure Right-to-Left layout.
2.  Click the widget for which you want to change the property.
3.  On the **Properties** pane, in the **Look** tab, the **Replace i18n Layout** is visible.
4.  If this is turned off, select the **On** radio button. The properties appear.
5.  Select On or Off radio button as required for the following:
    1.  **Flex Positions Properties**: Reverses layout properties for Left and Right
    2.  **Content Alignment**: Content alignment changes from Right to Left and or from Left to Right.
    3.  **Flow Horizontal Alignment**: Flow horizontal alignment changes from Left to Right.
6.  Save the changes.

Known Limitations
-----------------

*   Support for Right to Left languages is not added for widgets in the VBox layout.
*   Support for Right to Left languages is not added for Watch channel.
*   For Components and Masters, the user will be able to set the properties under **Replace i18n Layout** at source only but not on instance widgets. Also, these are not pass through properties for Components with the contract.
*   When the user provides values for below fields and switches to Right-to-Left locale, the layout in Iris Canvas is not in sync with the layout in app runtime.
    *   Center X and Left/Right
    *   Width, Left and Right
*   The layout does not mirror on switching to Right-to-Left locale when the values for Center X and Width are given.
*   For a Segment widget, if the content is set using the data property, setData API, and setDataAt API, the content does not get mirrored.
