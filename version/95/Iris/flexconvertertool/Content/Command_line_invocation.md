  

Flex Converter Tool command-line invocation
===========================================

Run the following command to convert a box-based application into a flex-based application:

```
Box2FlexConverter.exe XmlFilePath BoxApplicationPath ConvertedFlexProjectPath ConvertedFlexProjectName Platform FormType BoxType IsPercentageConversion SetChildHeightConversionUnitType
```

Replace the values as follows:

*   **XmlFilePath**: Path to the recorded final XML file of the box application
*   **BoxApplicationPath**: Path to the box application.
*   **ConvertedFlexProjectPath**: Folder Path where the converted flex application is to be saved.
*   **ConvertedFlexProjectName**: Name of the converted Flex Project.
*   **Platform**:The platform for which the xml file is generated.  
    Possible platform values are android,winphone8,ipad,iphonerc,tabRCAndroid,windows8,desktop\_kiosk,spaIphone,spaAndroid,spaWinphone8,spaipad,tabspaAndroid,tabspaWindows
*   **FormType**: The form type that the boxes are to be converted to. Possible values are **FreeFlow**, **VerticalForm** and **Auto**.
*   **BoxType**: The form type that the boxes are to be converted to. Possible values are **Box-FreeFlex**, **HBox-HFlex,** **VBox-VFlex** and **Auto**.
*   **IsPercentageConversion**: If this value set to true, then the conversion will be happen in percentage relative to the parent dimensions, otherwise it will be happening in device-independent pixels.
*   **SetChildHeightConversionUnitType**: If this value set to true, then the height of the child widgets is set to **preferred** instead of **dp** value when the height of the parent container widget is set as **preferred**. This is respected only when **IsPercentageConversion** is set to **true**.

For the application to be portable across different form factors replicating the same look and feel, you must select the following options:  
\- Set the Form Type as VerticalForm  
\- Set the Box Type as HBox-HFlex and VBox-VFlex  
\- Set the Unit Type as Percentage  
\- Set the SetChildHeighttoPreferred as Preferred  

For example, `Box2FlexConverter.exe D:\RecordedFinalXMLs\Sanity.xml D:\BoxApps\Sanity D:\FlexApps SanityFlex android VerticalForm HBox-HFlex;VBox-VFlex true true`
