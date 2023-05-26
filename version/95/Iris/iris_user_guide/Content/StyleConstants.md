  

Configure Style Constants in
============================

From VoltMX Iris V9 SP3 GA, the **Skins** tab in the project explorer has been renamed as the **Themes** tab. In the Themes tab, you can configure new **Style Constants** for Colors and Fonts, Borders, and Shadow in addition to the existing Skin functionalities. By using the Style Constants feature, you can create and apply pre-defined styles for colors and fonts, borders, and shadows for use throughout the project. Using a **Style Constant for Color**, you can define the values for the type, color, and opacity for a background. Using the **Style Constant for Font**, you can define the values the for color, type, opacity, family, weight, style, and size for a font. Using a **Style Constant for Border**, you can define the values for the size, type (Single Color), color, opacity, and style for a border. Using the **Style Constant for Shadow**, you can define the values for the dist X, dist Y, blur, and color for a shadow.

From the V9 Service Pack 5 release, support to define Style Constants for Color with the **Two Step Gradient** and **Multi Step Gradient** Color Types has been added in . For more information on how to configure the background type, refer [Set the Skin Background](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Customizing_the_Look_and_Feel_with_Skins.html).

For instance, the Infinity Retail Banking application is used as the base app on which customizations are made based on customer requirements. When a new prospect arrives, using the Style Constants feature, you can change the generic branding of the Retail Banking application with a branding that is specific to the prospective customer. Alternatively, an existing customer can use this feature to change their branding, if there have been any changes to their corporate branding. For example, a change in the logo or corporate branding colors, etc.

If you delete a Style Constant that is applied in the project, the configuration remains as is, and the style constant is renamed as the Default style constant.

The following topics describe how to work with style constants and apply styles on skins:

*   [Create a New Style Constant for Color](#create-a-new-style-constant-for-color)
*   [Configure a Style Constant for Color](#configure-a-style-constant-for-color)
*   [Create a New Style Constant for Font](#create-a-new-style-constant-for-font)
*   [Configure a Style Constant for Font](#configure-a-style-constant-for-font)
*   [](#create-a-new-style-constant-for-color)[Create a New Style Constant for Border](#create-a-new-style-constant-for-border)
*   [Configure a Style Constant for Border](#configure-a-style-constant-for-border)
*   [](#create-a-new-style-constant-for-color)[Create a New Style Constant for Shadow](#create-a-new-style-constant-for-shadow)
*   [Configure a Style Constant for Shadow](#configure-a-style-constant-for-shadow)
*   [Create a Custom Style Constant](#create-a-custom-style-constant)
*   [Apply Style Constants to Skins](#apply-style-constants-to-skins)
*   [Rename a Style Constant](#rename-a-style-constant)
*   [Edit the JSON File of a Style Constant](#edit-the-json-file-of-a-style-constant)
*   [Importing Style Constants](#importing-style-constants)
*   [Exporting Style Constants](#exporting-style-constants)

### Create a New Style Constant for Color

Using the Style Constant for Color feature, you can create a style constant based on the values of the **Color**, **Type**, and **Opacity** of the Background. Using these style constants, developers can instantly update the Skins present in a project. You can create multiple style constants for colors in a project.

To create a new style constant for color, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Right-click **Color**, and select **Add New** from the context menu.
    
    ![](Resources/Images/CreateColorStyle.png)
    
    A new Style Constant for Color is added in the Color section with a default name, color1 .
    

### Configure a Style Constant for Color

You can configure the **Type**, **Color**, and **Opacity** of a Style Constant for Color. The configuration changes made to the style constants are applied instantly in the project.

To configure the style constant for color, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Expand the **Color** node, and select the style that you want to configure.
    
4.  From the **Properties** panel, in the **Color** section, configure the following fields:
    
    *   Select the background type from the **Type** list, and configure the background **Color**.
        
        ![](Resources/Images/ColorConst.png)
        
        For more information on how to configure the background type and color, refer [Set the Skin Background](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Customizing_the_Look_and_Feel_with_Skins.html).
        
    *   Select the **Opacity** for the background color.
        
    
    The Style Constant for Color is updated.
    

### Create a New Style Constant for Font

Using the Style Constant for Font feature, you can create or define style constants for fonts based on the values of the **Font Color**, **Opacity**, **Size**, **Font Family**, **Weight**, and **Font Style**. Using these style constants, developers can instantly update the Skins present in a project. You can create multiple style constants for fonts in the project.

To create a new style constant for fonts, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Right-click **Font**, and select **Add New** from the context menu.
    
    ![](Resources/Images/CreateFontConstant.png)
    
    A new style constant for font is added in the font section with a default name, font1 .
    

### Configure a Style Constant for Font

Using the Style Constant for Fonts, you can configure the **Color**, **Opacity**, **Size**, **Font Family**, **Weight**, and **Style** for a font. The changes made to the style constants are applied instantly in the project.

To configure the style constant for font, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Expand the **Font** node, and select the style that you want to configure.
    
4.  From the **Properties** panel, in the **Fonts** section, configure the following fields:
    
    ![](Resources/Images/FontConst.png)
    
    *   From the **Color** list, select the desired font color.
    *   Configure the font size from the **Size** field.
    *   Select the font type from the **Font Family** list.
    *   Select the weight for the font from the **Weight** list.
    *   Select the style for font from the **Style** list.
5.  The Style Constant for Font is updated.

### Create a New Style Constant for Border

Using the Style Constant for Border feature, you can create a style constant based on the values of the **Size**, **Color**, **Type**, **Opacity**, and **Style** of the Border. Using these style constants, developers can instantly update the Skins present in a project. You can create multiple style constants for borders in a project.

To create a new style constant for border, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Right-click **Border**, and then select **Add New** from the context menu.
    
    <img>
    
    A new style constant for border is added in the **Border** section with a default name, border1 .
    

Configure a Style Constant for Border
-------------------------------------

You can configure the **Size**, **Type**, **Color**, **Opacity**, and **Style** of a Style Constant for Border. The configuration changes made to the style constants are applied instantly in the project.

To configure the style constant for border, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Expand the **Border** node, and then select the style that you want to configure.
    
4.  From the **Properties** panel, in the **Border** section, configure the following fields:
    
    *   Configure the border size from the **Size** field.
    *   Select the border type from the **Type** list, and configure the border **Color**.  
          
        For more information on how to configure the color, refer [Set the Skin Background](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Customizing_the_Look_and_Feel_with_Skins.html).
    *   Configure the **Opacity** for the border color.
    *   Select the style for border from the **Style** list.
    
    The Style Constant for Border is updated.
    

Create a New Style Constant for Shadow
--------------------------------------

Using the Style Constant for Shadow feature, you can create a style constant based on the values of the **Dist X**, **Dist Y**, **Blur**, and **Color** of the Shadow. Using these style constants, developers can instantly update the Skins present in a project. You can create multiple style constants for borders in a project.

To create a new style constant for shadow, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Right-click **Shadow**, and then select **Add New** from the context menu.
    
    <img>
    
    A new style constant for shadow is added in the **Shadow** section with a default name, shadow1 .
    

Configure a Style Constant for Shadow
-------------------------------------

You can configure the **Dist X**, **Dist Y**, **Blur**, and **Color** of a Style Constant for Shadow. The configuration changes made to the style constants are applied instantly in the project.

To configure the style constant for shadow, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Expand the **Shadow** node, and then select the style that you want to configure.
    
4.  From the **Properties** panel, in the **Shadow** section, configure the following fields:
    
    *   Configure the distance from the X-axis from the **Dist X** field.
    *   Configure the distance from the Y-axis from the **Dist Y** field.
    *   Configure the **Blur** for the shadow.
    *   From the **Color** list, select the type of color, and configure the shadow color.  
          
        For more information on how to configure the color, refer [Set the Skin Background](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Customizing_the_Look_and_Feel_with_Skins.html).
    
    The Style Constant for Shadow is updated.
    

Create a Custom Style Constant
------------------------------

Using the Custom Style Constant feature, you can create a style constant based on custom values for . Using these style constants, developers can instantly update the Skins present in a project. You can create multiple style constants for borders in a project.

To create a new style constant for shadow, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Right-click **Custom**, and then select **Add New** from the context menu.  
      
    The **Custom Tokens** dialog box appears.
4.  Click the green plus icon (**+**) to add a new Custom Token.  
      
    A new empty row is added in the table.
5.  Provide a name for the style in the **Variable** field, and then provide a **Default Value** for the variable.
6.  Close the **Custom Token** dialog box.  
      
    The custom token is added in the **Custom** section of the **Style Constants** in the **Themes** tab.

Apply Style Constants to Skins
------------------------------

By using the Style Constants feature, you can apply pre-defined styles for colors and fonts in Skins. When you configure a Style Constant for Color or Style Constant for Font, the style appears in the Style Constants section of the Color and Font Family lists in the Properties panel respectively. To apply a particular style to the Skin, you can select the style constant from the Styles list with a single click. Based on the style constants that you select, VoltMX Iris updates the Skin accordingly. You can modify an existing style constant to instantly update the Skin or rebrand the app.

To apply the styles for skins, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Skins** node.
3.  Right-click the **Widget** for which you want to configure the skin style, and then select **New Skin** > **Skin**.
    
    ![](Resources/Images/ApplyStyleConst.png)
    
4.  From the **Properties** panel, in the **Background** section, select the type of background from the **Type** list.
    
    You can also choose to apply a Style Constant for Color that is available in the project. To do so, click **Styles**, and then select a Style for Color from the list of existing styles that appears.
    
    VoltMX Iris applies the background type, color, and opacity based on the style that you select.
    
    ![](Resources/Images/ApplyColorConst.png)
    
5.  From the **Properties** panel, in the **Fonts** section, select a font from the **Font Family** list.
    
    You can also choose to apply a Style Constant for Font that is available in the project. To do so, click **Edit** for the **Font Family**, and then select a Style Constant for Font for each platform individually**.**
    
    ![](Resources/Images/PlatformSpecificFontConst.png)
    
    VoltMX Iris applies the Font Color, Opacity, Size, Font Family, Weight, and Font Style based on the style constant that you select.
    

Alternatively, you can select a **Style Constant** from the **Token** field of the **Background** and **Fonts** section of the **Skin** tab in the **Properties** panel.

Rename a Style Constant
-----------------------

When you create a new style constant, VoltMX Iris generates a unique name for it. HCL recommends that you rename the style constant as you might find it more useful and easily recognizable if you rename it.

To rename a style constant, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Expand the **Style Constants** node.
3.  Right-click the **Style Constant** that you want to rename, and then select **Rename** from the context menu.
    
    ![](Resources/Images/RenameColorConst.png)
    
4.  Type a new name for the style constant, and then press **Enter**.  
      
    The Style Constant is renamed, and the new name appears in the Style Constants section.

Edit the JSON File of a Style Constant
--------------------------------------

To edit the JSON file of a style constant, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Right-click the **Style Constants** node.
3.  From the context menu that appears, click **JSON**.  
      
    The **JSON Editor** dialog box appears.
4.  Configure the style constant by using JSON code, and then click **Save**.

Importing Style Constants
-------------------------

If you have exported Style Constants from another project, you can import them into the current project.

To import a style constant, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Right-click the **Style Constants** node.
3.  From the context menu that appears, click **Import**.  
    ![](Resources/Images/ImportStyleConst.png)  
    The **Import** dialog box appears.
4.  Locate the file that you want to import, select it, and then click **Open**.  
    The style constants are imported into the current project.

If a Style Constant with the same name already exists in the project, appends a number to the name of the imported Style Constant.


Exporting Style Constants
-------------------------

You can export the Style Constants present in a project to import them for use in a different project.

To export a style constant, follow these steps:

1.  From the **Project Explorer**, navigate to the **Themes** tab.
2.  Right-click the **Style Constants** node.
3.  From the context menu that appears, click **Export**.  
    ![](Resources/Images/ExportStyleConst.png)  
    The **Save As** dialog box appears.
4.  Navigate to the folder where you want to save the exported Style Constants, and then click **Save**.  
    

exports all the Style Constants for Color and Font (along with the resources, if there are any) that are part of the project in a .zip file.
