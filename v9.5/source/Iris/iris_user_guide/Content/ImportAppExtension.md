                          

Import an Application Extension
===============================

You can add custom functionality and content to your application by importing an application extension into your project. For information on creating an application extension, see [Create an iOS Application Extension](CreateApplicationExtension.md).

To import an application extension:

1.  On the **Project** menu in Volt MX Iris), select **Import**. Volt MX Iris displays a dropdown list of items that can be imported.
2.  From the dropdown list, select **App Extensions**. Volt MX Iris displays a list of available extensions.
3.  Select the extension you want to import.

Volt MX  Iris adds the extension to an _app-extensions_ folder and creates:

*   An _Info.plist_ information property list file.
*   A _javascript_ folder for associated JavaScript modules.
*   A _resources_ folder for any associated resources. To import a resource, right-click the resources folder and select **Import Resources**.

To configure the extension, right-click the extension and select **Configure App Extension**. To manage native function APIs, right-click the extension and select **Manage Native Function API(s)**.

> **_Note:_** Any changes made to the extension's code or resources after importing the extension into a project are local to that project.

To enable or disable an application extension, right-click the extension in the Project pane. If the extension is currently enabled, select **Disable** to disable it. If the extension is currently disabled, select **Enable** to enable it. Disabled applications extensions are not compiled or added to the application when you do a build.

To delete an application extension, right-click the extension in the Project pane and select **Delete**.

<table style="margin-left: 0;margin-right: auto;mc-table-style: url]('Resources/TableStyles/RevisionTable.css');" class="TableStyle-RevisionTable" cellspacing="0" data-mc-conditions="Default.md5 Only"><colgroup><col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"> <col class="TableStyle-RevisionTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1" data-mc-conditions="Default.HTML5 Only">Rev</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1" data-mc-conditions="Default.HTML5 Only">Author</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1" data-mc-conditions="Default.HTML5 Only">Edits</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyE-Column1-Body1" data-mc-conditions="Default.HTML5 Only">7.3</td><td class="TableStyle-RevisionTable-BodyE-Column1-Body1" data-mc-conditions="Default.HTML5 Only">SHS</td><td class="TableStyle-RevisionTable-BodyD-Column1-Body1" data-mc-conditions="Default.HTML5 Only">SHS</td></tr><tr class="TableStyle-RevisionTable-Body-Body1"><td class="TableStyle-RevisionTable-BodyB-Column1-Body1" data-mc-conditions="Default.HTML5 Only">7.2</td><td class="TableStyle-RevisionTable-BodyB-Column1-Body1" data-mc-conditions="Default.HTML5 Only">NMK</td><td class="TableStyle-RevisionTable-BodyA-Column1-Body1" data-mc-conditions="Default.HTML5 Only">NMK</td></tr></tbody></table>
