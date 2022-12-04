# Export and Import Fonts

## Export Fonts from Volt MX Iris

To export a font file from Volt MX Iris, follow these steps:

1.  On the **Project** menu in Volt MX Iris), point to **Export**, and then click **Fonts**.

    > ***Note:*** Volt MX Iris does not find any custom fonts in the project to export, it posts a warning to the Console to this effect, and takes no further action related to exporting.

3.  Enter the file name of the .zip file into which you want the fonts to be bundled, and then navigate to the folder where you want it to be saved.
4.  Click **Save**. The fonts you selected are bundled as a .zip file, and a status box informs you that the export was successful.

## <a name="ImportFontstoVoltMXIris"></a>Import Fonts to Volt MX Iris

Earlier, you had to individually import each `.ttf` font file for every channel in Volt MX Iris. From V8 SP4 Fixpack 20 onwards, you can now import any font file directly to your Volt MX Iris project, and the font is automatically made available for all the channels. You also have the option to import a font file for one specific channel at a time, and the imported font is then available for that channel only.

In addition, when you try to import a font, Volt MX Iris verifies the name of your font file and the original font family name. If there is a mismatch between the names, an alert appears. This alert indicates that the font file has been renamed to the actual font name, for a glitch-free functioning of the font within Iris.

To import a font file to Volt MX Iris, follow these steps:

1.  In Volt MX Iris, go to **Project Explorer** > **Assets**.
2.  Depending on your requirement, do any one of the following:
    *   Import a font for all channels:
        1.  Right-click **Fonts**, and then click **Import Fonts**. Your local File Explorer window appears.
    *   Import a font for specific channels:
        1.  Expand **Fonts**. The list of available channels to which you can import fonts, appears.
        2.  Right-click a particular channel, and then click **Import Fonts**. Your local File Explorer window appears.
3.  Browse for and select the required font(s), and then click **Open**.

    > ***Note:*** If the selected font file is already available in Volt Mx Iris, a **Conflict** dialog box appears indicating that the font exists for certain or all channels. Click **Override** to import and replace the existing font file; alternatively, click **Skip** to abort the import process.

    > ***Note:*** If you have modified the original name of the font file that you are trying to import, Volt Mx Iris automatically renames the file to the actual font name while importing it.


1.  Once the font file is imported successfully to Volt MX Iris, the **Import Fonts** dialog box appears displaying an appropriate success message. Click **Close**.
2.  You can now use the imported font for the required channels in Volt MX Iris.