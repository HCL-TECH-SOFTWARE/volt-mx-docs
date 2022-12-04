                           


You are here: Input and Output API

Input and Output API
====================

The Input and Output API enables your app to perform common tasks such as copy, rename, and delete files. This API enables you to browse through file systems and then select multiple files to upload on the server. In addition, the I/O API enables you to manage directories, determine if external storage is available, and so forth.

The Input and Output API, often abbreviated as the I/O API, is composed of the following Namespaces.

[voltmx.io.File Namespace](voltmx.io.file_functions.md)

  
| Function | Description |
| --- | --- |
| [voltmx.io.File.copyTo](voltmx.io.file_functions.md#copyTo) | Copies a file to the given destination path. |
| [voltmx.io.File.createDirectory](voltmx.io.file_functions.md#createDirectory) | Creates a directory on the file system represented by this file object. |
| [voltmx.io.File.createFile](voltmx.io.file_functions.md#createFile) | Creates a file on the file system represented by this file object. |
| [voltmx.io.File.exists](voltmx.io.file_functions.md#exists) | Checks if the file or directory exists on the file system represented by this file object. |
| [voltmx.io.File.getFilesList](voltmx.io.file_functions.md#getFilesList) | Returns voltmx.io.FileList object representing the files and directories available under this file object directory. |
| [voltmx.io.File.isDirectory](voltmx.io.file_functions.md#isDirectory) | Checks if this object represents a directory file on the file system. |
| [voltmx.io.File.isFile](voltmx.io.file_functions.md#isFile) | Checks if this object represents a typical file on the file system but not a directory. |
| [voltmx.io.File.moveTo](voltmx.io.file_functions.md#moveTo) | Moves a file to the given destination path. |
| [voltmx.io.File.read](voltmx.io.file_functions.md#read) | Returns the voltmx.types.RawBytes of this file. |
| [voltmx.io.File.remove](voltmx.io.file_functions.md#remove) | Deletes a file or a directory. |
| [voltmx.io.File.rename](voltmx.io.file_functions.md#rename) | Renames a file or a directory. |
| [voltmx.io.File.write](voltmx.io.file_functions.md#write) | Writes the given content into the file. |

 

[voltmx.io.FileList Namespace](voltmx.io.filelist_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.io.File.item](voltmx.io.filelist_functions.md#item) | Returns the File object at the specified index in the FileList. |

 

[voltmx.io.FileSystem Namespace](voltmx.io.filesystem_functions.md)

| Function | Description |
| --- | --- |
| [voltmx.io.FileSystem.browse](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-browse) | Provides the ability to browse and select files from your local system. |
| [voltmx.io.FileSystem.copyBundledRawFileTo](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-copybundledrawfileto) | Copies a bundled file from the application binary to the specified destination path on the device. |
| [voltmx.io.FileSystem.getAppGroupDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getappgroupdirectorypath) | Retrieves the root path of an app group. |
| [voltmx.io.FileSystem.getApplicationDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getapplicationdirectorypath) | Returns the application directory path. |
| [voltmx.io.FileSystem.getCacheDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getcachedirectorypath) | Returns the application's cache directory path. |
| [voltmx.io.FileSystem.getDatabaseDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatabasedirectorypath) | Returns the application's database directory path (from application's private file system) where [voltmx.db](voltmx.db_functions.md) APIs access the database files. |
| [voltmx.io.FileSystem.getDataDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatadirectorypath) | Returns the application’s data directory path. |
| [voltmx.io.FileSystem.getExternalCacheDir](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalcachedir) | Returns the absolute path to the directory on the primary shared or external storage device where the application can store its cached files. |
| [voltmx.io.FileSystem.getExternalCacheDirs](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalcachedirs) | Returns the absolute paths to the application-specific directories on all the shared or external storage devices where the application can store its cached files. |
| [voltmx.io.FileSystem.getExternalFilesDir](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalfilesdir) | Returns the absolute path to the directory on the primary shared or external storage device where the application can store its persistent files. |
| [voltmx.io.FileSystem.getExternalFilesDirs](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalfilesdirs) | Returns the absolute paths to the application-specific directories on all the shared or external storage devices where the application can store its persistent files. |
| [voltmx.io.FileSystem.getExternalStorageDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalstoragedirectorypath) | Returns the path to the external storage, typically sdcard. |
| [voltmx.io.FileSystem.getExternalStorageState](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalstoragestate) | Returns the current state of the shared or external storage media at the specified path. |
| [voltmx.io.FileSystem.getFile](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getfile) | Returns a voltmx.io.File object representing the file for the given path. |
| [voltmx.io.FileSystem.getFileSystemStats](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getfilesystemstats) | Retrieves the detailed information about the space on a file system. |
| [voltmx.io.FileSystem.getNoBackupFilesDir](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getnobackupfilesdir) | Returns the absolute path to the directory on the file system |
| [voltmx.io.FileSystem.getRawDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getrawdirectorypath) | Returns the application’s “raw” directory path. |
| [voltmx.io.FileSystem.getSupportDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getsupportdirectorypath) | Returns the application’s support directory path. |
| [voltmx.io.FileSystem.isExternalStorageAvailable](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-isexternalstorageavailable) | Checks if the external storage is available and accessible on the device. |
| [voltmx.io.FileSystem.isExternalStorageEmulated](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-isexternalstorageemulated) | Checks if the external storage is emulated. |
| [voltmx.io.FileSystem.isExternalStorageRemovable](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-isexternalstorageremovable) | Checks if the external storage is physically removable. |
| [voltmx.io.FileSystem.uploadFiles](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-uploadfiles) | Internally iterates through the fileList and makes the network call to the URL mentioned and uploads the files. |

 

[voltmx.types Namespace](voltmx.types_objects_rawbytes.md)

| Function | Description |
| --- | --- |
| [voltmx.types.RawBytes.clear](voltmx.types_objects_rawbytes.md#clear) | Clears the content that is held by the RawBytes object. |
| [voltmx.types.RawBytes.getContentType](voltmx.types_objects_rawbytes.md#getContentType) | Retrieves the Content Type of the RawBytes object. |
| [voltmx.types.RawBytes.getResourcePath](voltmx.types_objects_rawbytes.md#getResourcePath) | Returns the location of rawbytes which can be Android content URI or a file path. |
| [voltmx.types.RawBytes.getTempPath](voltmx.types_objects_rawbytes.md#getTempPath) | Returns the path where the source files of all RawBytes are stored. |
| [voltmx.types.RawBytes.readAsText](voltmx.types_objects_rawbytes.md#readAsText) | Returns the data as text represented by the RawBytes object. |

 

**File Handling**

The `voltmx.io.File` Namespace consists of functions that enable you to perform common file handling tasks. Your app can create a File object to represent files in the device's file system and perform common operations on them. Now create a file using the [voltmx.io.File.createFile](voltmx.io.file_functions.md#createFile) function. To verify if a file exists in the file system using the [voltmx.io.File.exists](voltmx.io.file_functions.md#exists) function. You can also check if the object represents a file or a directory using the [voltmx.io.File.isFile](voltmx.io.file_functions.md#isFile) and the [voltmx.io.File.isDirectory](voltmx.io.file_functions.md#isDirectory) functions; and return all the files in the filesystem using the [voltmx.io.File.getFilesList](voltmx.io.file_functions.md#getFilesList) function.

To move a file, use the [voltmx.io.File.moveTo](voltmx.io.file_functions.md#moveTo) function. To copy a selected file use the [voltmx.io.File.copyTo](voltmx.io.file_functions.md#copyTo) function. You can read the data in the file using the [voltmx.io.File.read](voltmx.io.file_functions.md#read) and the [voltmx.io.File.readAsText](voltmx.io.file_functions.md#readAsText) functions. You can also write in a file using [voltmx.io.File.write](voltmx.io.file_functions.md#write) function. If you want to rename a file, use the [voltmx.io.File.rename](voltmx.io.file_functions.md#rename) function; and to delete a file, use the [voltmx.io.File.remove](voltmx.io.file_functions.md#remove) function. Using the [voltmx.io.File.item](voltmx.io.filelist_functions.md#item), you can return a file object at a specified index in the File list.

**File System Handling**

The `voltmx.io.FileSystem` Namespace consists of the functions that handles a file system. Use the [voltmx.io.FileSystem.getFile](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getfile) function to get an instance of a File object. You can browse and select files from the file system using the [voltmx.io.FileSystem.browse](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-browse) function. Then get the root path of an application using the [voltmx.io.FileSystem.getApplicationDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getapplicationdirectorypath) and the app group directory path using the [voltmx.io.FileSystem.getAppGroupDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getappgroupdirectorypath) function. Use the [voltmx.io.FileSystem.getCacheDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getcachedirectorypath) function to get the application cache’s directory path, the [voltmx.io.FileSystem.getDataDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatadirectorypath) to get the application’s directory path, the [voltmx.io.FileSystem.getDatabaseDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getdatabasedirectorypath) to get the application’s database directory path and external storage directory path using the [voltmx.io.FileSystem.getExternalStorageDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getexternalstoragedirectorypath) function. For the application’s raw directory path, use the [voltmx.io.FileSystem.getRawDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getrawdirectorypath) function and for the application’s support path, use the [voltmx.io.FileSystem.getSupportDirectoryPath](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-getsupportdirectorypath) function. You can also check if the external storage is available and accessible on the device using the [voltmx.io.FileSystem.isExternalStorageAvailable](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-isexternalstorageavailable) function, and upload files using the [voltmx.io.FileSystem.uploadFiles](voltmx.io.filesystem_functions.md#volt-mx-io-filesystem-uploadfiles) function.

<h3>Pre bundling Files</h3>
<p>Volt MX gives an ability to bundle files such as SQLite database (pre-configured), video, image, and so on as part of an application binary. After bundling, the files can be accessed from the app at the run time on the device. You need to follow certain guidelines to bundle the files.</p>
<p>Here are the guidelines:</p>
<ol>
  <li>
    <p>Place the files to be bundled in the application workspace at the following locations. When you place the files in these locations, the files will be bundled with the application built for all the platforms.</p>
    <p><b>Mobile:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\mobile\common\raw</p>
    <p><b>Tablet:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\tablet\common\raw</p>
  </li>
  <li>
    <p>You can also place the files in the platform-specific folders. When you place the files in platform-specific folders, the files will be bundled only with the application built for that particular platform. For example, if you place the files in the android\raw folder, the files will be bundled only for the application built for the Android platform.</p>
    <p><b>Android Mobile:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\mobile\native\android\raw</p>
    <p><b>Android Tablet:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\tablet\native\androidtab\raw</p>
    <p><b>IOS Mobile:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\mobile\native\iphone\raw</p>
    <p><b>IOS Tablet:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\tablet\native\ipad\raw</p>
    <p><b>Windows 10:</b></p>
    <p>&lt;WorkSpace&gt;\&lt;App&gt;\resources\tablet\native\windows8\raw</p>
    <p>After placing the files either in common or platform-specific folder and build the respective application, the files are packaged in the application binary file. Example, .apk, .ipa, and so on.</p>
    <p>In case same file is located at both common and platform-specific folders, the file in the platform-specific folder will override the file in the common folder.</p>
  </li>
  <li>
    <p>In case of Android, the file name should contain only the following characters:</p>
    <ul>
      <li>a – z (lower case)</li>
      <li>0 – 9</li>
      <li>_ (underscore)</li>
      <li>. (period)</li>
    </ul>
    <p>This guideline is applicable only for the Android platform.</p>
  </li>
  <li>
    <p>Application binary size limitation: After bundling the files, the size of the application binary should not exceed the size defined for each platform in the table below. These size limits are specified by the platform-specific stores where the apps will be uploaded.</p>
  </li>
</ol>
<blockquote>
  <em><b>Note:</b></em> In future these values may vary based on the application store decisions for respective platforms.
</blockquote>
<table>
  <tr>
    <th>OS</th>
    <th>Limit</th>
    <th>Binary Type</th>
  </tr>
  <tr>
    <td>Android</td>
    <td>100 MB</td>
    <td>.apk</td>
  </tr>
  <tr>
    <td>IOS</td>
    <td>60 MB</td>
    <td>.ipa</td>
  </tr>
  <tr>
    <td>Windows</td>
    <td>25 GB</td>
    <td>.appxbundle</td>
  </tr>
  <tr>
    <td>Silver light applications</td>
    <td>1 GB</td>
    <td>.xap packages</td>
  </tr>
</table>
<p>Volt MX Iris provides the following APIs to support accessing the pre-bundled files programmatically.</p>
<ul>
  <li>
    <a href="voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-copybundledrawfileto">voltmx.io.FileSystem.copyBundledRawFileTo</a>
  </li>
  <li>
    <a href="voltmx.io.filesystem_functions.html#volt-mx-io-filesystem-getdatabasedirectorypath">voltmx.io.FileSystem.getDatabaseDirectoryPath</a>
  </li>
</ul>