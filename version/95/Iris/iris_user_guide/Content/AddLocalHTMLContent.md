                         


Add Local HTML Content
======================

With Volt MX Iris, you can leverage your existing web apps and other HTML content, incorporating it right into your project. Accessed through the Browser widget, such content is packaged locally within the completed app so that it is always available. You can also integrate it with Volt MX Foundry to make the most of VoltMX's powerful services integration.

The local HTML content that you add to your project can be used for a traditional web app, or embedded within a native app. If you want, you can use the local HTML content across all platforms and channels.

For more information, refer to the following topics:

[Add Existing HTML Content to a Project](#add-existing.md-content-to-a-project)

[Create New HTML Content for a Project](#create-new.md-content-for-a-project)

[Open a Resource's Folder](#open-a-resources-folder)

[Add HTML Content to an App Screen](#add.md-content-to-an-app-screen)

[Preview HTML Content](#preview.md-content)

[Disable Live Rendering](#disable-live-rendering)

[Using Local HTML content as direct DOM](#using-local.md-content-as-direct-dom)

Add Existing HTML Content to a Project
--------------------------------------

If you have existing web content, you can integrate it into your Volt MX Iris project.

To add existing HTML content to a project, do the following:

1.  Using your computer's folder browser, navigate to the files and folders you want to add to your Volt MX Iris project.
2.  In Volt MX Iris, on the Project Explorer, on the **Project** tab, expand the **Web** category. A folder displays called **Localfiles**.
3.  Click the context menu arrow of the **Localfiles** folder, and then click **Resource Location**. The folder opens in a new window of your computer's folder browser.
4.  Switch to the folder browser window that contains the files and folders you want to add to your Volt MX Iris project, select them, and then copy them.
5.  Switch to the folder browser window for the **Localfiles** folder, and then paste the files you copied.
6.  To see the added files reflected in Volt MX Iris, on the **File** menu (the **Project** menu in Volt MX Iris), click **Refresh**.

Alternately, you can import HTML content by clicking the context menu arrow of the **Localfiles** folder, clicking **Import File(s)**, navigating to the files and folders you want to import, selecting them, and then clicking **Open**.



Create New HTML Content for a Project
-------------------------------------

You can create different kinds of web-related files to your local HTML content, and then edit them within Volt MX Iris. The Intellisense capabilities of the Code Editor simplify the creation of code by recommending completed code based on the incomplete code you have typed.

To create new HTML content for a project, do the following:

1.  On the Project Explorer, on the **Project** tab, expand the **Web** category. A folder displays called **Localfiles**.
2.  Click the context menu arrow of the **Localfiles** folder, and then click any of the following options:  
    **New Folder**  
    **New JS File**  
    **New HTML File**  
    **New CSS File**
3.  Enter a name for the new folder or file, and then click **OK**.

In the case of a new file, it opens in the Code Editor, where you can begin coding it.

Open a Resource's Folder
------------------------

All the web-based resources of your project reside in folders in your workspace. With Volt MX Iris, you can open the folder location of any resource from the Project Explorer.

To open a resource's folder, do the following.

*   In the Project Explorer, click the context menu arrow of any resource, and then click **Resource Location**.

The folder where that resource is located opens.

Add HTML Content to an App Screen
---------------------------------

Once you have imported or added local HTML content to your project, you make it accessible within your app by associating it with a browser widget.

To add HTML content to an app screen, do the following:

1.  Display on the Iris Canvas the browser widget that you want you want to associate your HTML content with.
2.  On the Project Explorer, on the **Project** tab, expand the **Web** category, and then click **Localfiles**.
3.  Locate the HTML file you want to associate with the browser widget, and then drag it onto the browser widget. The widget's Master Data property is updated to associate with the HTML file you selected.
4.  On the Project Explorer, click the **Project** tab.
5.  Locate and open the container widget in the form you want to add the HTML content to.
6.  On the Library Explorer, on the **Widget** tab, under Advanced Widgets, click and drag a Browser widget onto the container widget.
7.  In the Properties Editor, click the **Browser** tab, and then click the Master Data **Edit** button. The Master Data dialog box displays.

     > **_Note:_** You can also open the Master Data dialog box by double-clicking the browser widget.

8.  Select **Local File**, click **Browse**, navigate to and select the HTML file you want, and then click **OK**. The path to the file is represented by a relative path to the HTML content file you want, where the **Localfile** folder is the root. For example, if the file you want is called Home.html and is located in a folder called Source, the relative path would be as follows:  
    `\Source\Home.html`
9.  Click **OK**.  
    You can view the asset details in the browser widget.
10.  If you want the content to appear as direct DOM and not be embedded within an iframe, under **Desktop web**, for the **Set as content** option, select **On**. If you leave the option to the default setting **Off** to display the content in the iframe.
11.  Save the project.

Alternately, you can add HTML content to an app screen by doing the following:

1.  On the Project Explorer, click the **Project** tab.
2.  Locate and open the container widget in the form you want to add the HTML content to.
3.  On the Library Explorer, on the **Widget** tab, under Advanced Widgets, click and drag a Browser widget onto the container widget.
4.  In the Properties Editor, click the **Browser** tab, and then click the Master Data **Edit** button. The Master Data dialog box displays.

    > **_Note:_** You can also open the Master Data dialog box by double-click the browser widget.

5.  Select **Local File**, click **Browse**, navigate to and select the HTML file you want, and then click **OK**. The path to the file is represented by a relative path to the HTML content file you want, where the **Localfile** folder is the root. For example, if the file you want is called Home.html and is located in a folder called Source, the relative path would be as follows:  
    `\Source\Home.html`

6.  Click **OK**.  
    You can view the asset details in the browser widget.
7.  If you want the content to appear as direct DOM and not be embedded within an iframe, under **Desktop web**, for the **Set as content** option, select **On**. If you leave the option to the default setting **Off** to display the content in the iframe.
8.  Save the project.

Preview HTML Content
--------------------

You can preview HTML content within Volt MX Iris, or using an external browser. Within Volt MX Iris, you can also use the side-by-side functionality to preview the HTML in one pane while viewing and editing the HTML code in the other pane.

To preview HTML content, do the following:

1.  On the Project Explorer, on the **Project** tab, expand the **Web** category, expand the **Localfiles** folder, and then locate the HTML file you want to preview.
2.  Click the file's context menu arrow, and then do one of the following:

*   Click **Open Preview**. The file displays within the Iris Canvas.
*   Click **Launch in external browser**. The file opens in a new instance of your computer's default web browser.

To preview HTML content side by side, do the following:

1.  Enable the HTML preview feature. To do so, do the following:

On the **Edit** menu, click **Preferences**. From the left pane of the dialog box, click **General**, and then set Enable Inline HTML Preview to **Yes**. Click **Apply**.

3.  On the Project Explorer, on the **Project** tab, expand the **Web** category, expand the **Localfiles** folder, and then click the HTML file you want, opening it as a tab in the Code Editor.
4.  On the **Project** tab, click the HTML file's context menu arrow, and then click **Open Preview**. The file previews on the Iris Canvas, and a second pane opens displaying the HTML code. Changes you make to the HTML code and then save are reflected in the preview.

If you prefer not to enable the HTML Preview setting but still want to preview the HTML and view the HTML code side by side, you can manually preview the content.

To manually preview HTML content side by side, do the following:

1.  On the Project Explorer, on the **Project** tab, expand the **Web** category, expand the **Localfiles** folder, and then click the HTML file you want, opening it as a tab in the Code Editor.
2.  On the **Project** tab, click the HTML file's context menu arrow, and then click **Open Preview**. The file previews on the Iris Canvas.
3.  On the **Window** menu, point to **Arrange**, and then click **Side By Side**. A new pane opens to the right of the existing pane.
4.  From the pane on the left, drag the tab of the HTML file you opened onto the right pane. When the edges of the right pane glow blue, drop the file onto the pane.

The preview of the HTML file appears on the left pane while the code of the HTML file appears on the right pane. Changes you make to the HTML code and then save are reflected in the preview.

Disable Live Rendering
----------------------

Once you have associated a local HTML file with a browser widget, you may not want the contents of the HTML file to be perpetually rendering on the Iris Canvas, especially if the HTML content is complex and requires an inordinate amount of your computer's resources. In such a case, you can disable the browser widget's live rendering functionality.

To disable live rendering, do the following:

1.  Right-click the browser widget for which you want to disable live rendering, and then click **Disable Preview**. The browser widget takes on a gray background, and only displays the name of the HTML file associated with it.
2.  To re-enable live rendering, click the context menu arrow, and then click **Enable Preview**.

Using Local HTML Content as Direct DOM
--------------------------------------

The web assets can enhance the user experience along with the other Volt MX Iris widgets. The Web container feature integrates a developer’s web assets with the Volt MX Iris Framework.

Using the Web Container feature, a developer can:

*   Embed local web assets as direct DOM using Browser widget. This can done using the **Set as Content** option in the Browser Widget **Properties** pane.
    
    > **_Note:_** The feature is only for web platforms
    
*   Configure HTML heading tags from the Project Settings

Developers can add one single HTML page to one widget.

### Limitations

*   If you create multiple web containers using the same web HTML content, DOM uniqueness will be impacted. In all the web container instances, the same static web content is wrapped. Functionality that relies on document queries by ID might run into issues such as jsgrid use-case etc.
*   If Global CSS selectors are used in the web assets, they might interfere with the Volt MX Iris CSS rules that might impact the layout system of the app.
*   Avoid using any inline scripts in the web local files. All latest versions of web browsers do not evaluate any scripts inserted after the initial DOM load.
*   When you use local web assets if the local web content contains media-based CSS rules, the App Canvas Preview, and the Inline Preview features might not work appropriately. This is due to the fact that Browser widget’s size might not match any of the media rules defined by the user.

### Best Practices

While using Scripts and style tags, the content size might impact the app load performance. Scripts and style tags are render-blocking. If their size is big, they might impact the app loading time and the time it takes to render the initial view of the app. Follow the best practices mentioned below to overcome this limitation.

Before you get started with using local web assets, ensure that you get a better understanding of Render-blocking resources. To know more about Render-blocking, you can go through the following links.

*   [Google Blocking resources](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources)
*   [Render-blocking resources](https://web.dev/render-blocking-resources/)
*   [Render-blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
*   **Identify**: Once you create a web asset, identify the resources that are render-blocking. Google chrome has in-built developer tools that you can use. See [Google Lighthouse](https://developers.google.com/web/updates/2018/05/lighthouse) to understand how to improve page load performance.
*   **Resolve**: Once you identify the issues, depending on your application, solutions vary. Sometimes, you may not have any solution at all.

### General Recommendations

Here are some of the best practices that might help you in avoiding any issues with your local web assets.

*   Ensure that your startup form contains only those resources that are required. Avoid loading resources that the form does not need.
*   In your form, ensure that you are loading the required assets using events (init/preshow/postshow) from a basic utility or a small lazy loading library.
*   Minify and Gzip all the javascript/stylesheet files.
*   Wherever possible, in the < SCRIPT >/< LINK > tag, use the attributes async or defer.
*   Ensure that you provide an appropriate media attribute in the < LINK > tag. For more information, click [here](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css).
*   If the application targets the modern browsers which support the loading = “lazy” attribute, developers can leverage the loading = “lazy” attribute in the < SCRIPT >/< LINK > tab.
