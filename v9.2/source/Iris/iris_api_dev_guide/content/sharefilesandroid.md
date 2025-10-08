                            

Sharing Files in Android with other Apps in the Device
======================================================

Generally, in Android, file sharing from one app with another app happens in the form of content URI. So, you need to make your app generate content URIs of files that you want to share with other apps.

**To share a file from your app with other apps**

1.  [Specify the sharable directories in the XML file](#specifying-the-sharable-directories-in-the-xml-file)
2.  [Specify the FileProvider in the Manifest Properties](#specifying-the-fileprovider-in-the-manifest-properties)
3.  [Create or copy the sharable files to the shared directory](#creating-files-in-the-shared-directories)

Specifying the Sharable Directories in the XML file
---------------------------------------------------

Volt MX  platform does not share any directory of an app by default due to security concerns. To share directories or files with other apps is under your control. So, to share files with other apps, you must explicitly specify sharable directories in your app. You can specify the shared directories using an XML file.

**To specify the shared directories**

1.  Create an XML file. For example, `filepaths.xml`.
2.  Place the XML file at the `workspace/resources/mobile/native/android/xml` subdirectory in your mobile app project directory.

> **_Note:_** If your Android app is for tablet, place the file at the `workspace/resources/tablet/native/android/xml` subdirectory.

4.  In the XML file, add the `<paths></paths>`tag as parent element, and then add the directories of the files you want to share as child elements inside the parent element. You can specify multiple directories in the parent element. Below is a sample path defined in the XML file (`filepaths.xml`).

<paths>  
   <files-path path="images/" name="myimages"/>  
</paths>

If you want to share multiple directories, below is a sample:

<paths>  
   <files-path path="images/" name="myimages"/>  
   <files-path path="videos/" name="myvideos"/>  
    <external-path path="Documents/" name="mypublicdocs"/>  
</paths>

8.  Use any of the following child elements inside the `<paths></paths>` parent element to specify the directories that contain sharable files.

*   **<file-path>:** to specify the subdirectories within the `files/` directory in your app’s internal storage. The directory is the same as the value returned by [voltmx.io.FileSystem.getDataDirectoryPath()](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatadirectorypath).

<files-path path="images/" name="myimages"/>

*   **<external-path>:** to specify the directories in the external storage. The root path of the directory is the same as the value returned by [voltmx.io.FileSystem.getExternalStorageDirectoryPath()](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalstoragedirectorypath).

<external-path path="documents/" name="mypublicdocs"/>

*   **<cache-path>:** to specify the subdirectories in the internal cache directory. The root path of the directory is the same as the value returned by [voltmx.io.FileSystem.getCacheDirectoryPath()](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getcachedirectorypath).

<cache-path path="documents/" name="mydocs"/>

For more information, see [Specifying Available Files](https://developer.android.com/reference/android/support/v4/content/FileProvider.md#SpecifyFiles).

12.  Within the child element tags, you must specify the attribute, `path` to define the directory path where the sharable files are located. If you want to share files and directories in the root directory, specify the value of the `path`attribute as `"/"`. Otherwise, specify the subdirectory path. For example, `"images/"`.

> **_Note:_** Make sure that the subdirectories that you defined in the `path` attribute are already created at the root directory using the [voltmx.io.File](voltmx.io.file_functions.md) API.

14.  The `name` attribute indicates the path segment in the generated content URI for the files located in the shared directory. When multiple directories are shared, define the `name` attribute separately for each directory shared by the path element.

The name of the XML file (`filepaths.xml`) that you have created with the shared directories should be specified as the value to the attribute, `android:resource` in the [FileProvider Manifest Properties](#specifying-the-fileprovider-in-the-manifest-properties).

android:resource="@xml/<filename>".

In the example, replace the `<filename>` with the name of the XML file. For example, `filepaths`. Make sure that the extension, `.xml` is not specified along with the file name.

Specifying the FileProvider in the Manifest Properties
------------------------------------------------------

FileProvider is a mechanism provided by Android to generate content URIs of the files to be shared with other apps. The XML file with sharable directories is passed to the FileProvider for generating the content URI. Based on the specifications defined in the XML file, the FileProvider generates content URIs of file objects.

To specify the FileProvider in the Manifest

1.  Open the app, and click **Project Settings**. The **Project Settings** dialog opens.
2.  Click the **Native** tab, and then click **Android** sub-tab.
3.  Under the **Manifest****Properties**, click the **Tags** tab.
4.  In the **Application Tag Attributes** box, copy and paste the following code snippet.

<provider  
  android:name="androidx.core.content.FileProvider"  
  android:authorities="com.orgname.Sample"  
  android:exported="false"  
  android:grantUriPermissions="true">  
  <meta-data  
     android:name="android.support.FILE\_PROVIDER\_PATHS"  
     android:resource="@xml/filepaths" />  
</provider>  

In the code snippet, the values specified for the `android:authorities` and `android:resource` attributes are just examples. For the `android:authorities` attribute, you must replace the value with the package name of your Android app. For the `android:resource` attribute, you must replace only the `filepaths` string with the file name of the XML file.

> **_Note:_** Ensure that you add the `{implementation 'androidx.core:core:+'}` in the build.gradle entries to Suffix field of the **Project Settings** > **Native** > **Android Mobile/Tablet** section.

> **_Note:_** Make sure that the extension, `.xml` is not specified along with the file name of the XML file.

Creating Files in the Shared Directories
----------------------------------------

Create or copy files that you want to share in the shared directories.

To share the raw bytes returned from the [Image Widget](../../../Iris/iris_widget_prog_guide/Content/Image.md), [voltmx.image.createImage,](voltmximagenamespacefunctions.md#crtImg) and [voltmx.image.createImageFromSnapshot](voltmximagenamespacefunctions.md#imgSnap) functions, save the raw bytes as files using the [voltmx.io.File](voltmx.io.file_functions.md) API in the shared directories. The file raw bytes returned by the voltmx.io.File API can be used for sharing with other apps.

Use Case: Attaching a File to an Email
--------------------------------------

When an end-user wants to attach a file from your app to an Email, you must invoke the [voltmx.phone.openEmail](voltmx.phone_functions.md#phone.op2) function. When invoking the [voltmx.phone.openEmail](voltmx.phone_functions.md#phone.op2) function from an Android app, the attachment parameter must be raw bytes. You can directly pass the raw bytes received from the [voltmx.camera](voltmx.camera_functions.md) (only public access mode) and [voltmx.phone.openMediaGallery](voltmx.phone_functions.md#phone.op) APIs as the attachment parameter. Because, the raw bytes received from these sources already contain content URI.

To support raw bytes obtained from the following sources as an attachment in the [voltmx.phone.openEmail](voltmx.phone_functions.md#phone.op2) API, you must follow the [Sharing a File in Android with other Apps](#sharing-files-in-android-with-other-apps-in-the-device) procedure.

*   Raw bytes of an [HttpRequest](httprequestobject.md) object.
*   Raw bytes of an image object created using the [Image Widget](../../../Iris/iris_widget_prog_guide/Content/Image.md), [voltmx.image.createImage,](voltmximagenamespacefunctions.md#crtImg) and [voltmx.image.createImageFromSnapshot](voltmximagenamespacefunctions.md#imgSnap) functions.
*   Raw bytes of a file returned by [voltmx.io.File](voltmx.io.file_functions.md) API (not present under sharable directory).

Here is a sample code of passing an image file, which is converted into content URI, in the attachment parameter of the [voltmx.phone.openEmail](voltmx.phone_functions.md#phone.op2) function.

var testImg = voltmx.image.createImageFromSnapShot(frmHome.Flxgrp);  
frmHome.Img2.image = testImg;  
var testRaw = testImg.getImageAsRawBytes();  
var path =voltmx.io.FileSystem.getDataDirectoryPath();  
var sharedDir = path+constants.FILE\_PATH\_SEPARATOR+"images";  
var sharefolder = new voltmx.io.File(sharedDir).createDirectory();  
var fileLoc = sharedDir+constants.FILE\_PATH\_SEPARATOR+"myimage.jpg";  
var myfile=new voltmx.io.File(fileLoc).createFile();  
var write=new voltmx.io.File(fileLoc).write(testRaw);  
var fileRawBytes=new voltmx.io.File(fileLoc).read();  
var to = \["Abcd@voltmx.com"\];  
var cc = \["Abcd@gmail.com"\];  
var bcc = \["Abcd@voltmx.com"\];  
var sub = "Testing Screenshot attachment";  
var msgbody = "Testing openEmail with attachment";  
var attachment = {mimetype: "image/\*",attachment: fileRawBytes };  
voltmx.phone.openEmail(to, cc, bcc, sub, msgbody, false, \[attachment\]);

![](resources/prettify/onload.png)
