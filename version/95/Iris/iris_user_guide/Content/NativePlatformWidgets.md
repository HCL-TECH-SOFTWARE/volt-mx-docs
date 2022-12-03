                          


Using the Native UI Container
=============================

In Volt MX Iris, you can use native UI widgets in addition to the existing Volt MX Iris cross-platform widgets. These native UI widgets are platform-specific widgets to either iOS or Android, and can be used in an application by placing them in a native UI container widget called a NativeContainer. A native UI container can only be used for native UI widgets; it cannot contain any Volt MX Iris cross-platform widgets.

You can place a NativeContainer widget in a FlexContainer, FlexScrollContainer, component, or master. However, you cannot add it to the Tab and TabPane container widgets, nor can you add it to templates. Even a component or master containing a NativeContainer widget cannot be placed in a template.

Once it's added, to be able to see a NativeContainer widget listed in the widget library, you have to select that platform's canvas on the Iris Canvas. For example, the iOS NativeContainer will not display in the widget library if the platform of choice on the Iris Canvas is _Android: Native_. You'd need to select _Apple-iOS: Native_.

To add a NativeContainer or native UI widget to an app, you first must download it and add it to Volt MX Iris. The following procedure describes how to do so, along with how to activate the NativeContainer and native UI widget once it's downloaded. For more information about SSMs and NativeContainers, see the API Guide.

To learn how to use this widget programmatically, refer [VoltMX Iris Widget guide](../../../Iris/iris_widget_prog_guide/Content/nativeContainer.md).

Download and Activate the Assets for the Native Container
---------------------------------------------------------

To download and activate the native function UI API assets for NativeContainer widgets, do the following:

1.  Download the Native Function UI API you want from the VoltMX install site
2.  On the **Project** menu of Volt MX Iris, click **Add JS Modules**. The **Add JS Modules** dialog box opens.
3.  In the **Add JS Module** dialog box, click **Browse**, and then navigate and select an native function UI API zip file that you downloaded.
4.  Click **Finish**. A message box appears indicating that the API was successfully added to your app. Click **OK**.
5.  Repeat steps 2 through 4 for each API that you want to add.
6.  Click the **Project Settings** icon. The **Project Settings** window opens with the **Self Sufficient Module** tab added. Click the **Self Sufficient Module** tab. The tab opens with the name of the native function API that you imported, displayed with a check box under the platform to which it is applicable.
7.  Select the check boxes of the native function APIs that you want to use as widgets with the native UI container, and then click **Finish**.
8.  On the Iris Canvas, select the platform of the SSM that you just added to Volt MX Iris.
9.  In the widget library, scroll to the bottom. You will see a new category of widget called _NativeContainer_, and listed under it is the widget itself. You can now drag the native UI container onto your app and add the imported native UI widgets to it.

Add or Import Native Function APIs for the Native Container
-----------------------------------------------------------

To add native function APIs for NativeContainer widgets, do the following:

1.  On the **Edit** menu, click **Add Native Function API**. The Native Function Interface dialog box displays, and lists any native APIs you have already added or imported into the project.
2.  Click the platform you want to download an API for, either iOS or Android.
3.  Click **Add**. Volt MX Iris retrieves a list of native APIs available for the platform you chose.
4.  In the Search text box, type keywords that help narrow the scope of the APIs listed.
5.  From the list, select an API you want, and then click **Add**.
6.  Repeat steps 3 through 5 until you have added all the native APIs you want.
7.  When you are finished adding native APIs, close the dialog box by clicking the **X** in the upper right corner.
8.  On the Iris Canvas, select the platform that corresponds to the NativeContainer widget you want to add.
9.  In the widget library, scroll to the bottom. You will see a new category of widget called _NativeContainer_, and listed under it is the widget itself. You can now drag the native UI container onto your app and associate the added native APIs to it.

To import native function APIs for NativeContainer widgets, do the following:

1.  On the **Edit** menu, click **Add Native Function API**. The Native Function Interface dialog box displays, and lists any native APIs you have already added or imported into the project.
2.  Click the platform you want to download an API for, either iOS or Android.
3.  Click **Import**.
4.  Navigate to the location of the native API, select it, and then click **OK**. The API is added to the list of native APIs associated with your project.
5.  Repeat steps 3 and 4 until you have imported all the native APIs you want.
6.  When you are finished importing native APIs, close the dialog box by clicking the **X** in the upper right corner.
7.  On the Iris Canvas, select the platform that corresponds to the NativeContainer widget you want to add.
8.  In the widget library, scroll to the bottom. You will see a new category of widget called _NativeContainer_, and listed under it is the widget itself. You can now drag the native UI container onto your app and associate the imported native APIs to it.
