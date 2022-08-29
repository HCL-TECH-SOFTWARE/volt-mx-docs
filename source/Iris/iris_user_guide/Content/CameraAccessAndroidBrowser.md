                         

You are here: Appendix E: Camera Access in Android Browser

Camera Access in Android Browser
================================

On Android devices, you can access the camera from the Browser widget. The feature is available on devices with Android OS 5.0 and later. For camera access, the Browser widget HTML page must contain the following code.

<input type=”file” accept=”image/\*” capture />

The capture attribute in the earlier snippet can be of the following types:

capture

capture="true"

capture="camera"

> **_Note:_** For the camera to write the captured image to your application private file system you must expose a file URI using **FileProvider**. For more information on FileProvider, click [here](https://developer.android.com/reference/android/support/v4/content/FileProvider.md).

To enable camera access in the Browser widget, do the following:

*   Add the camera permissions
*   Add FileProvider support to the application
*   Create a fileproviderpaths.xml file and add it to the Native folder.
*   Configure the folder to save the captured images. This is an optional step.

Adding Camera Permissions
-------------------------

To add the camera permissions, do the following:

1.  In your Volt MX Iris Classic, open the project for which you want to add the camera access to the Browser widget.
2.  Navigate to **Project Settings** > **Native** > **Android**. The **Permissions** tab is open by default.
3.  In the **The following permissions are set to ‘true’** column, ensure that the **CAMERA** option is added. If it is not added, add it.

Adding FileProvider Support to the Application
----------------------------------------------

You must add an entry to the AndroidManifest.xml file in the child tag entries. To add FileProvider support to the application, do the following:

1.  In your Volt MX Iris Classic, open the project for which you want to add camera access to the Browser widget.
2.  Navigate to **Project Settings** > **Native** > **Android**. The **Permissions** tab is open by default.
3.  Under the **Manifest Properties & Gradle Build Entries** section, click **Tags**. The **Tags** tab opens.
4.  In the **Child tag entries under <application> tag** text box, enter the following code.
```
< provider
    android: name = "androidx.core.content.FileProvider"
    android: authorities = "<application package name >"
    android: exported = "false"
    android: grantUriPermissions = "true" > < meta - data
    android: name = "android.support.FILE_PROVIDER_PATHS"
    android: resource = "@xml/fileproviderpaths" / > < /provider>
    
```

> **_Important:_** In the <provider> entry, replace **<application package name>** with your application package name. For example, if your application package name is **com.orgname.delta**, replace **application package name** with **com.orgname.delta**.

Creating and Adding the fileproviderpaths.xml File
--------------------------------------------------

To create and add fileproviderpaths.xml file, do the following:

1.  Navigate to your native Android folder in your workspace. **<work space>** > **<VoltMX app folder>** **resources** > **mobile** > **native** > **android** > **xml**. This path is for the mobile. For a tablet, the path is **<work space>** > **<VoltMX app folder>** **resources** > **tablet** > **native** > **androidtab**.
2.  Create a new XML file in the folder and name it **fileproviderpaths.xml**.
3.  Open the XML file and paste the following in it.
```
<? xml version = "1.0"
    encoding = "utf-8" ?> < paths xmlns: android = "http://schemas.android.com/apk/res/android" > < files - path name = "local_file_provider"
    path = "/" / > < /paths>
    
```

> **_Note:_** This xml file name **fileproviderpaths** (without extension) must match with the value in the manifest <provider> entry for the **android:resource attribute.**  
  
By default, the **path** attribute value is **"/"**. This implies that an image file URI is created under the **files** root folder inside the application private space on the device and a file URI for this file path with write permissions is be shared with the external app camera to save the captured image.

Configuring a New Folder to Save Captured Images
------------------------------------------------

You can configure an alternate folder to save captured images. This is optional. To save the captured images in a different sub folder inside the directory other than the root of the Files folder, do the following:

### Modifying an Existing fileproviderpaths.xml File

1.  Navigate to the path where you have the **fileproviderpaths.xml** file path.
2.  Open the file and change the path attribute to a different value.  
    For example, **path="images1"**. Another example is **path="browsercache/images1"**.

    > **_Note:_** When you specify a different folder path, ensure that the path value does not begin or end with **"/".**

### Create a New fileproviderattr.xml File

1.  For Mobile, navigate to **<work space>** > **<VoltMX app folder>****resources** > **mobile** > **native** > **android** > **values**. For tablet, navigate to **<work space>** > **<VoltMX app folder>****resources** > **tablet** > **native** > **androidtab** > **values**
2.  Create a new **fileproviderattr.xml** file with the following content.
```
<? xml version = "1.0"
    encoding = "utf-8" ?> < resources > < item type = "string"
    name = "file_provider_path" > images1 < /item>
    </resources >
    
```

The path value that you mention in the **<item>** tag of the **fileproviderattr.xml** file must match the **"path"** attribute value in the **fileproviderpaths.xml** file.

Browser Widget Code Changes in JS Layer
---------------------------------------

Configure the **enableSoftwareRendering** writable property value as **true** for the Browser widget. The property changes the browser rendering from hardware to software.

```
formHome.browser1.enableSoftwareRendering= true
```

In a few devices, after capturing images from the camera, the Browser widget may disappear from the form.

As the camera is a memory hogging application, the Android OS frees most of the resources in the device memory to render the camera application. In such cases, the hardware rendering of the Browser widget may fail in some devices: this may also happen if you open the camera frequently or when the device has low memory. . This is a technical limitation of Android OS.

To handle this issue, you can change the browser rendering from hardware to software that ensures that Browser widget is always displayed properly.

If you configure the **enableSoftwareRendering** property value to **True**, the Browser widget refresh rate decreases. The decrease in the Browser widget refresh rate will impact the refresh rate of animations, GIFs, and videos in the browser.
