---
layout: "documentation"
category: "iris_user_guide"
---
                         


Responsive Design
=================

Responsive design enables developers to create applications that can fit their contents based on the form factor of the device. Using Volt MX Iris, you can develop Mobile (Native and Adaptive Web), Tablet (Native and Adaptive Web), and Responsive Web applications, that are responsive in nature.

*   **Responsive Grid Layout**: Using the Responsive Container, a developer can define the elements in a flex container on a form to suit various form factors. You can use the Responsive Containers on Mobile (Native and Adaptive Web), Tablet (Native and Adaptive Web), and Responsive Web channels.
*   **Responsive Web Design**: Available only on the Responsive Web channel, the Responsive Web Design allows you to design a responsive web app with customizations that you can apply at a deeper level. For more information, click [here](Responsive_Design_8_2.html).

Overview
--------

Responsive Grid Layout provides a quick and convenient way to create responsive apps for the Web, Tablet, and Mobile channels (including Portrait and Landscape mode). Using Responsive Grid Layout, you can customize the UI to create flexible, multi-column layouts that use breakpoints. The Responsive Grid Layout reduces the time taken to implement Responsive properties for Container and child widgets as there are fewer properties that require fewer code changes.

To support the Responsive Grid Layout, a new Layout Type, **Responsive Grid**, has been added to the Container widgets such as, **Flex Form**, **FlexContainer**, and **FlexScrollContainer** widgets.

The Responsive Grid layout divides the container widget into columns based on the value of the **Span** property. The maximum number of columns is twelve. The Span property sets the width of the child widget based on the 12-column layout. The **Offset** property determines the position of the left edge of the widget. This position is measured either from the left edge of the parent widget or from the right edge of the widget present to its left.

> **_Note:_** If the value of Span + Offset is more than 12, the next child widget that you add is wrapped and appears in a row below the current row.

The columns of the Responsive Container resize and re-arrange automatically depending on the Screen size. The following table displays the size () width of the child widget for different span values.

![](Resources/Images/simpleResponsive_Span.png)

When the Responsive Grid Layout is applied to a container widget, the child widgets of the Responsive Container will have a new section in the Look tab, **Responsive Configuration**, that has the **Span** and **Offset** properties specified for each breakpoint.

You can only add FlexContainer widgets as child widgets in a Responsive Container. Within the Responsive Container, the child FlexContainer can have its own child widgets nested, as long as the Layout Type for the FlexContainer widget (child of the Responsive Container) is not Responsive Grid. Accessing child widgets of a Responsive Container through code is similar to accessing child widgets in other FlexContainers.

> **_Note:_** Duplicate widgets cannot be placed in Responsive Containers.

> **_Note:_** You can only configure transformational animation for the direct child widgets of a Responsive Container.

Span and Offset properties override the positional and width properties of direct child widget. Therefore, in addition to the Span and Offset properties, you can only configure the following Flex properties for the child FlexContainer widget of the Responsive Container:

*   Height
*   Min Height
*   Max Height
*   Z Index

Responsive Container for Web
----------------------------

When a Responsive Container is added to a Form in the Responsive Web channel, you might observe the following:

*   In the Responsive Configuration section, default breakpoints of 640, 1024, and 1366 are added for Web apps. However, you can modify and delete these breakpoint values and also add new values.
*   When a new breakpoint is added, all child widgets of the Responsive Container support the new breakpoint. In such cases, widgets will be populated with the closest smaller breakpoint span and offset values to the newly-created breakpoint.
*   If a breakpoint is modified, all FlexContainer widgets present in the Responsive Container will reflect the modified breakpoint with the same span and offset values that were set to it earlier.
*   When a breakpoint is deleted, the breakpoint will be removed from all child widgets.
*   Breakpoint forking is not supported for FlexContainer widgets present within the cells of a Responsive Container. However, the child widgets in those FlexContainer widgets support breakpoint forking.

**General Steps to implement Responsive Grid Layout for Mobile & Tablet apps**

The process of using Responsive Grid Layout for Mobile or Tablet includes the following broad steps:

*   Create a Form and configure the Orientation property as both (Portrait and landscape).
*   Add a FlexContainer or FlexScrollContainer based on your requirements.
*   Configure the Layout Type of the container as Responsive Grid.
*   Add child container widgets as required.
*   Modify the Span and Offset values of the child widgets for Portrait and Landscape orientations.
*   Build and view the app.

**General Steps to implement Responsive Grid Layout for Responsive Web/Desktop Web apps**

The process of using Responsive Grid Layout for Web apps include the following broad steps:

*   Create a Form and define the breakpoints or use the default breakpoints.
*   Add FlexContainer widgets based on your requirements.
*   Configure the Layout Type of the container as Responsive Grid.
*   Add child container widgets as required.
*   Modify the Span and Offset values of the child widgets for different breakpoints.
*   Build and view the app.

Responsive Grid Layout – Mobile & Tablets
-----------------------------------------

The following content provides detailed steps on implementing Responsive Grid Layout in your project. Following the steps will result in creating a form with six different FlexContainers that are embedded in a FlexScrollContainer. These six containers are configured using the span feature to make them responsive.

To create a Responsive Grid Layout for a mobile or tablet, do the following:

1.  In the project you want to add Responsive Grid Layout, create a new form for the Mobile or Tablet channel.
2.  Rename the form **frmHome**.
3.  From the **Properties** panel, navigate to the **Form** tab.
4.  Under the **General** section, modify the following values.
    *   Orientation: **Both**  
        ![](Resources/Images/frmHome.gif)
5.  From the bottom-left corner of Iris, navigate to the **Default Library**.
6.  From the library, drag the **FlexScrollContainer** widget onto **frmHome** form on the canvas.
7.  Right-click the widget and select **Fit to Parent**.
8.  Rename the FlexScrollContainer, **flxScrollResponsive**.  
    ![](Resources/Images/flxScrollResponsive.gif)
9.  From the **Properties** panel, navigate to the **FlexScrollContainer** tab.
10.  Under the General section, from the **Layout Type** drop-down list, select **Responsive Grid**.  
    ![](Resources/Images/responsiveGrid.gif)
11.  From the bottom-left corner of Iris, navigate to the **Default Library**.
12.  Drag the **FlexContainer** widget onto the **flxScrollResponsive** on the canvas.
13.  Rename the container **flxOne**.  
    ![](Resources/Images/fllxOneCreate.gif)
14.  From the **Properties** panel, navigate to the **Skin** tab.
15.  Under the **Background** section, provide the following values.
    *   Type: **Single Color**
    *   Color: Click the square and for #, provide the value, **3a5f87**
    *   Opacity: **100%**  
        ![](Resources/Images/flxOneSkin.gif)
16.  From the **Properties** panel, navigate to the **Look** tab.
17.  Under the Flex section, set the following values.
    *   Height: **50%**  
        
18.  Under the **Responsive Configuration** section, set the following values.
    *   Under **Span**, for **Portrait**, select **4**
    *   Under **Span**, for **Landscape**, select **6**  
        ![](Resources/Images/flxOneLook.gif)  
        
19.  From the **Project** explorer, navigate to **Mobile** > **Forms** > **frmHome**, and select .
    
Using the steps in the section, add five more FlexContainers. The following table provides the configuration details.  
      
<table style="width: 100%; margin-left: 0; margin-right: auto;"><colgroup><col><col><col><col><col><col></colgroup><tbody><tr><td style="font-weight: bold;">Type</td><td>Single Color</td><td>Single Color</td><td>Single Color</td><td>Single Color</td><td>Single Color</td></tr><tr><td style="font-weight: bold;">Color</td><td>3eadcf</td><td>b352b3</td><td>239651</td><td>b83e6b</td><td>8cc74a</td></tr><tr><td style="font-weight: bold;">Opacity</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr><tr><td style="font-weight: bold;">ID</td><td>FlxTwo</td><td>FlxThree</td><td>FlxFour</td><td>FlxFive</td><td>FlxSix</td></tr><tr><td style="font-weight: bold;">Height</td><td>50%</td><td>50%</td><td>200 DP</td><td>200 DP</td><td>200 DP</td></tr><tr><td style="font-weight: bold;">Portrait Span</td><td>4</td><td>4</td><td>8</td><td>6</td><td>6</td></tr><tr><td style="font-weight: bold;">Landscape Span</td><td>6</td><td>6</td><td>6</td><td>6</td><td>6</td></tr><tr><td style="font-weight: bold;">Offset Portrait</td><td>NA</td><td>NA</td><td>2</td><td>NA</td><td>NA</td></tr></tbody></table>
    
20.  From the top of the canvas, select the button **Toggle Orientation**, to view this form in the **Landscape** mode.
21.  Build your app and view the app on your device.
    
    Play around with the app in the portrait mode and landscape mode to see the responsive behaviour.
    

Responsive Grid Layout – Web
----------------------------

The following content provides detailed steps on implementing Responsive Grid Layout in your project. Following the steps will result in creating a form with six different FlexContainers that are embedded in a FlexScrollContainer. These six containers are configured using the span feature to make them responsive.

To create a Responsive Grid Layout for web, do the following:

1.  In the project you want to add Responsive Grid Layout, create a new form for Responsive Web/Desktop Web.
2.  Rename the form, **frmHome**.
3.  From the top of the canvas, enable breakpoint forking.
4.  From the **Properties** panel, navigate to the **Look** tab.
5.  Under the **Breakpoints** section, you can find three pre-defined breakpoints.
6.  From the bottom-left corner of Iris, navigate to the **Default Library**.
7.  Drag the **FlexContainer** onto the **frmHome** on the canvas.
8.  Rename the container **flxOne**.
9.  From the **Properties** panel, navigate to the **Skin** tab.
10.  Under the **Background** section, provide the following values.
    *   Type: **Single Color**
    *   Color: Click the square and for #, provide the value, **3a5f87**
    *   Opacity: **100%**
11.  From the **Properties** panel, navigate to the **Look** tab.
12.  Under the **Flex** section, set the following values.
    *   Height: **33.33%**
13.  Under the **Responsive Configuration** section, set the following values.
    *   Under **Span**, for **640**, select **4**
    *   Under **Span**, for **1024**, select **6**
    *   Under **Span**, for **1366**, select **3**
14.  From the Project explorer, navigate to **Responsive Web** > **Forms**, and select **frmHome**.
    
Using the steps in the section, add five more FlexContainers. The following table provides the configuration details.
    
<table style="width: 100%; margin-left: 0; margin-right: auto;"><colgroup><col><col><col><col><col><col></colgroup><tbody><tr><td style="font-weight: bold;">Type</td><td>Single Color</td><td>Single Color</td><td>Single Color</td><td>Single Color</td><td>Single Color</td></tr><tr><td style="font-weight: bold;">Color</td><td>3eadcf</td><td>b352b3</td><td>239651</td><td>b83e6b</td><td>8cc74a</td></tr><tr><td style="font-weight: bold;">Opacity</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr><tr><td style="font-weight: bold;">ID</td><td>FlxTwo</td><td>FlxThree</td><td>FlxFour</td><td>FlxFive</td><td>FlxSix</td></tr><tr><td style="font-weight: bold;">Height</td><td>33.33%</td><td>33.33%</td><td>33.33%</td><td>33.33%</td><td>33.33%</td></tr><tr><td style="font-weight: bold;">First breakpoint Span</td><td>4</td><td>4</td><td>8</td><td>6</td><td>6</td></tr><tr><td style="font-weight: bold;">Second breakpoint Span</td><td>6</td><td>6</td><td>6</td><td>6</td><td>6</td></tr><tr><td style="font-weight: bold;">Third breakpoint Span</td><td>3</td><td>3</td><td>3</td><td>12</td><td>8</td></tr><tr><td style="font-weight: bold;">First breakpoint Offset</td><td>0</td><td>0</td><td>2</td><td>0</td><td>0</td></tr><tr><td style="font-weight: bold;">Second breakpoint Offset</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td style="font-weight: bold;">Third breakpoint Offset</td><td>0</td><td>0</td><td>0</td><td>0</td><td>2</td></tr></tbody></table>
    
15.  From the top of the canvas, select different breakpoints to view the responsive behavior.
16.  Build your app and view the app on your device.  
    Play around with the app in different layouts to see the responsive behavior.
