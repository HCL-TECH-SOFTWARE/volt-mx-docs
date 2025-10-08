                         


Add a Local Database to an App
==============================

With Volt MX Iris, you can bundle a SQLite database into an app so that the data in the database is always available locally on whatever device the app is installed on. This capability can be used to store something as simple as a collection of web site favorites to more complex data, such as a product catalog.

**_Notes:_**   Any file type can be added to the folder where the database resides.
*   You must ensure that the size of the database, in addition to all the other assets of your app, do not exceed the app size limit for a given platform's application store.

To add a SQLite database to an app, do the following:

1.  Using your computer's folder browser, navigate to the files and folders you want to add to your Volt MX Iris project.
2.  In Volt MX Iris, on the Project Explorer, on the **Assets** tab, expand the channel that you want to add the SQLite database to, whether Common (to be available to all channels), Desktop, Mobile, Tablet, or Watch.
3.  Expand the environment that you want the SQLite database to be accessible to, whether Common (to be available to all environments), Native, or Web.
4.  If you selected the Native environment, expand the platform that you want the SQLite database to be accessible to, whether Common (to be available to all platforms), Android, iOS, or Windows.

Once the node is fully expanded, a **raw** folder is visible.

5.  Click the context menu arrow of the **raw** folder, and then click **Resource Location**. The folder opens in a new window of your computer's folder browser.
6.  Switch to the folder browser window that contains the files and folders you want to add to your Volt MX Iris project, select them, and then copy them.

    > **_Important:_** If you are copying the files to a **raw** folder for the Android platform, be aware that Android only supports file names that contain letters, numbers, periods (.), and underscores ( \_ ). The presence of other characters in a file name invalidate that file for inclusion in the compiled Android app.

7.  Switch to the folder browser window for the **raw** folder, and then paste the files you copied.
8.  To see the added files reflected in Volt MX Iris, on the **Project** menu in Volt MX Iris), click **Refresh**.

Folder Paths for a SQLite Database
----------------------------------

The folder path where you store a SQLite database in a Volt MX Iris project varies, depending on the channel, environment, and platform. Any file type can be added to these folders.

   > **_Note:_** Files in the platform-specific folders whose file names are identical to files in the Common folder take precedence and override the Common folder versions of those files.

**Common (located under the Mobile channel)**  
`<WorkspaceName>\<ProjectName>\resources\mobile\common\raw`

**Common (located under the Tablet channel)**  
`<WorkspaceName>\<ProjectName>\resources\tablet\common\raw`

**Android Mobile**  
`<WorkspaceName>\<ProjectName>\resources\mobile\native\android\raw`

**Android Tablet**  
`<WorkspaceName>\<ProjectName>\resources\tablet\native\androidtab\raw`

**iOS Mobile**  
`<WorkspaceName>\<ProjectName>\resources\mobile\native\iphone\raw`

**iOS Tablet**  
`<WorkspaceName>\<ProjectName>\resources\tablet\native\ipad\raw`
