                          


Migrate a Project from an Earlier Version of Visualizer to Iris
------------------------------------------------------------------


Visualizer to Iris migration
-----------------------------

Users from Visualizer 8.4 classic, Viz 9.1, 9.2 can seamlessly migrate to Volt MX 9.5 and continue developing their custom apps. All of the existing projects from Quantum into Volt MX 9.5 and can build their apps for various custom channels.  


**Temenos Viz version**

The version of 9.2 Temenos Quantum Visualizer should not be greater than the latest fixpack delivered by HCL Volt MX. You can find this code level for 9.2 only here
[support hcltechsw com](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0094476)



Users using Visualizer need to install HCL Volt MX Iris from the download link [Volt MX Iris Installer](https://community.hclvoltmx.com/downloads/)


**Re-import projects**

All the projects from Visualizer to be re-imported into Volt MX Iris. Existing Visualizer projects can be imported into Volt MX 9.5 Iris and user can continue developing/building for different channels.

**Deprecated widgets**

If the projects contain any of the deprecated widgets like HBox/VBox etc, they need to be taken care of manually before importing to Volt MX 9.5 Iris (same behaviour as Quantum 9.2 Visualizer
[Deprecated Widgets](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Deprecated.md)

**Revised project configuration files**

When existing projects from Quantum Visualizer to Volt MX are imported to Iris there can be some modifications done (during the import process by Iris) on the project source files(json files in general), which need to be committed to the source control where the project source is maintained.


**X-Kony references to X-Voltmx**

If there are any references of X-Kony in any of the modules/actions, they should be manually changed to X-Voltmx. 

**App viewer**

HCL Volt MX released Volt MX specific app viewer to both Android & iOS stores. Customers to visualize their apps during development phase should get "HCL Volt MX Appviewer" from respective stores.