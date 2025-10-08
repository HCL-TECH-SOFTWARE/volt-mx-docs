                            

You are here: Theme API

Theme API
=========

A theme is a set of skins available at the application level that let you specify common skins for widgets in different states (normal, focus, and so on). You can define your own themes in Volt MX Iris or download themes from the network (a specific URL) and use them in the application.

The  Theme API uses the `voltmx.theme Namespace` and related API elements:

  
| Function | Description |
| --- | --- |
| [voltmx.theme.createTheme](voltmx.theme_functions.md#theme.cr) | Enables you to create a theme. |
| [voltmx.theme.createThemeFromJSONString](voltmx.theme_functions.md#voltmx.the) | Enables you to create or replace a JSON string theme in the current session. |
| [voltmx.theme.deleteTheme](voltmx.theme_functions.md#theme.de) | Allows you to delete a specified theme in the application programmatically |
| [voltmx.theme.getAllThemes](voltmx.theme_functions.md#theme.al) | Returns all the themes available in the application. |
| [voltmx.theme.getCurrentTheme](voltmx.theme_functions.md#theme.ge2) | Returns the current theme that is applied to the application. |
| [voltmx.theme.getCurrentThemeData](voltmx.theme_functions.md#theme.ge) | Returns the meta data of the current theme in the application. |
| [voltmx.theme.isThemePresent](voltmx.theme_functions.md#theme.is) | Allows you to check the existence of specific theme in the application. |
| [voltmx.theme.setCurrentTheme](voltmx.theme_functions.md#theme.se) | Allows you to apply a specified theme to the application at runtime. |

 

A theme is represented as a file containing a JSON string. The JSON string has the key-value pairs in which the key is **skinid** and the value is JSON string that represents the skin.

> **_Note:_** The themes or the skins must be pre-defined in the IDE or should have been downloaded over the network.

> **_Note:_** Every application must have a "default" theme (stored in the in the default.theme file). Deleting or overriding the contents of this file may lead to undesired behavior. Volt MX Iris does not allow the developer to delete this theme. All other user defined themes can be deleted.

The Theme API enables you to customize, set, and delete themes in an application. If you already have all the attributes of a theme such as the font size, font colour and so on, listed in a JSON string, you can use a URL to point to the JSON String using the [voltmx.theme.createTheme](voltmx.theme_functions.md#theme.cr) function. If you want to define the attributes while creating the theme, use the [voltmx.theme.createThemeFromJSONString](voltmx.theme_functions.md#voltmx.the) function. Use the [voltmx.theme.getCurrentTheme](voltmx.theme_functions.md#theme.ge2) function and the [voltmx.theme.getCurrentThemeData](voltmx.theme_functions.md#theme.ge) function to return the current theme and the current theme’s meta data respectively. Return all the themes available in your application using the [voltmx.theme.getAllThemes](voltmx.theme_functions.md#theme.al) function, and then use the [voltmx.theme.setCurrentTheme](voltmx.theme_functions.md#theme.se) function to select a theme to apply it in your application. You can also check if a specific theme is present in your application using the [voltmx.theme.isThemePresent](voltmx.theme_functions.md#theme.is) function, and delete the theme using the [voltmx.theme.deleteTheme](voltmx.theme_functions.md#theme.de) function, if required.

### Use Cases

*   Themes allow you to package the skins in a way that resemble a particular user interface or branding for a particular set of users. For example, all the _Gold_ customers will see all the buttons in _Golden Yellow_ color.
*   Themes allow you to personalize the look and feel of the application for the end users. For example, the users can choose between a _green theme_ or a _blue theme_.
*   Themes, when downloaded over the network, allow to remotely control the branding of the native application. For example, during the _Christmas_ season, the marketing or the branding team can push a _Christmas Theme_ to the native application.

### Capabilities

The theme APIs provided by Volt MX Iris platform have the following capabilities:

*   Defining new themes.
*   Applying the theme to the application or only for the current session.
*   Switching the application from one theme to another theme dynamically.
*   Deleting and loading the skins for memory efficiency.
*   Provision for custom meta data.

### Important Considerations

*   The default theme is the base-point for new theme.
*   If the referred skin does not exist both in the current theme and default theme, a runtime error occurs.
*   When a skin is referred, the IDE searches for the skin in the order of precedence)
    *   Current theme
    *   Default theme.

#### Important Considerations for SPA, Desktop Web, and Mobile Web

*   For the SPA, Desktop Web and Mobile Web platforms, the theme files should be CSS files. It cannot accept the theme files as JSON files. If the project is developed using IDE, the platform automatically generates CSS files for the above platforms based on the skins/themes defined by the developer in the IDE. The css files will be generated under "<ThemeID>" folder.
    
    > **_Note:_** The names of the css files in the theme are same as the css files in the normal build.
    
*   For those customers/developers, interested in developing applications without IDE, the platform will provide an offline tool to convert a given .theme JSON file into corresponding CSS file. This will be provided post 5.0.
*   For the createTheme API, ensure that the URL mentioned in the createTheme API should point only to a CSS file. The platforms do not support a URL with a _.Theme_ file and convert it into a CSS file at run time.
*   getCurrentThemeData will always return null. As theme files are converted into CSS, the platforms cannot have custom structures/variables in CSS files as browsers fail to parse them.
*   Do the above platforms support skin level fallback?
    
    The platforms expect each theme file i.e_. CSS_ file to have all the skins. In the case of projects developed in IDE the platform takes care of skin conversion of this during generation. For customers, hand coding the application, the above mentioned tool should take care of that. But essentially at run time the platforms cannot look up into multiple CSS's and check for a class. Technically it is possible to do so but it requires the platform to load multiple CSS files and in a specific order. Adding new downloads is an always avoidable and we intend to handle this during the generation of the CSS file itself.
    

### Limitations

You cannot dynamically modify the skin attributes.

To view the functionality of the Theme API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ThemeAPI)

![](resources/prettify/onload.png)
