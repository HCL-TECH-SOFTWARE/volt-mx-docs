
voltmx.io.File Namespace
======================

The voltmx.io.File namespace provides functions and properties for doing various operations related on files, such as copying them, renaming them , deleting them, and so on.

Overview
--------

Your app can create a `File` object to represent files in the device's file system and perform common operations on them. To create a new `File` object , your app calls the `voltmx.io.File` function. Alternatively, it can use the voltmx.io.FileSystem.getFile function to get an instance of a `File` object.

```

var myfile = new voltmx.io.File("myfile.txt");  
or  
var myfile = voltmx.io.FileSystem.getFile("myfile.txt")
```  

  
| File Properties:Name | Description |
| --- | --- |
| name: \[type: String, ReadOnly\] | Name of the file or directory |
| fullPath: \[type: String, ReadOnly\] | Full absolute path of the file or directory |
| parent: \[type:voltmx.io.File, ReadOnly\] | Returns the parent directory of this file. This property may return nil or a File object which can neither Readable or Writable, especially in case of Folders which are not accessible by the given Application context |
| readable: \[type: Boolean, ReadOnly\] | Returns true if this file is readable |
| writable: \[type: Boolean, ReadOnly\] | Returns true if this file is writable |
| modificationTime: \[type:Number, ReadOnly\] | Returns the last modification time of the file in UTC |
| size: \[type:Number, ReadOnly | Returns the size of a file in number of bytes. |

 

The following function is often used in conjunction with the RawBytes object to read data of type RawBytes.

*   [readAsText](voltmx.types_objects_rawbytes.md#readAsText)

Functions
---------

The voltmx.io.File namespace contains these functions: To use the copyTo, moveTo, remove, rename, createFile, createDirectory, read, and write File APIs, your app needs [runtime permission](runtime_permissions.md) from the end-user (to perform any of the action correspondent to a file). If you call any API without obtaining the permission, platforms automatically pops up a system permission dialog box with "Allow" and "Deny" options, asking the end-user to grant permission. This is applicable only for the Android platform.

If the end-user taps the "Allow" option, platform proceeds to access the underlying OS API. If the end-user taps the "Deny" option, the PermissionError exception is thrown with the 2300 error code, that means permission is denied.


<details close markdown="block"><summary>voltmx.io.File.copyTo</summary>

copyTo API copies a file to the given destination path.

### Syntax

```

voltmx.io.File.copyTo(String path, String newName)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| Path | path to the destination directory. |
| newName (optional) | New name of the file/directory. Defaults to current name if unspecified. |

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var copyToLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDir1";
var newFile = new voltmx.io.File(origFileLoc).copyTo(copyToLoc, "NewNameForCopy.txt");

```

### Return Values

VoltMX.io.File returns a handle to the File object pointing to the destination file, if successful. If failure, then returns null.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.createDirectory</summary>

The createDirectory API creates a directory on the file system represented by this file object.  


<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings.<br> 
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code><br>         
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/&gt;</code><br>  
        </li>
    </ul>
</blockquote>


### Syntax

```

voltmx.io.File.createDirectory()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var dirLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDir1";
var myDir = new voltmx.io.File(dirLoc).createDirectory();

```

### Return Values

Boolean – true if the creation of directory is successful. False if directory already exists or could not be created.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.createFile</summary>

The createFile API creates a file on the file system represented by this file object.

### Syntax

```

voltmx.io.File.createFile()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var fileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFileToCopy.txt";
var myFile = new voltmx.io.File(fileLoc).createFile();

```

### Return Values

Boolean – true if the creation of file is successful. False if file already exists or could not be created.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.exists</summary>

The exist API checks, if the file or directory exists on the file system represented by this file object.

### Syntax

```

voltmx.io.File.exists()
```

### Input Parameters

None

### Example

```

var copiedFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR +
    "myDir1" + constants.FILE_PATH_SEPARATOR +
    "NewNameForCopy.txt";
if (new voltmx.io.File(copiedFileLoc).exists()) {
    voltmx.print("copy of file was successful");
} else {
    voltmx.print("copy of file failed");
}
```

### Return Values

Boolean – true if the file or directory exists on file system.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.getFilesList</summary>

The getFilesList API returns voltmx.io.FileList object representing the files and directories available under this file object directory.  


<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings.<br> 
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/&gt;</code><br>
        </li>
    </ul>
</blockquote>


### Syntax

```

voltmx.io.File.getFilesList()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myDirLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDir416";
var myDirName = new voltmx.io.File(myDirLoc);
var createDir = myDirName.createDirectory();
var fileListLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDir416";
var filesList = new voltmx.io.File(fileListLoc).getFilesList();
if (filesList.length === 0) {
    voltmx.print("getFilesList successful for zero files");
} else {
    voltmx.print("getFilesList failed for zero files");
}
```

### Return Values

voltmx.io.FileList – FileList object or null if this File is not identified as a directory.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.isDirectory</summary>

The isDirectory API checks, if this object represents a directory file on the file system.

### Syntax

```

voltmx.io.File.isDirectory()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var dirLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDir765";
var myDir = new voltmx.io.File(dirLoc);
try {
    var isDirec = new voltmx.io.File(dirLoc).isDirectory();
    if (isDirec) {
        voltmx.print("isDirectory True for nonExistent Directory");
    }
} catch (err) {
    voltmx.print("isDirec doesn't work over nonExistent directory");
}
```

### Return Values

Boolean – true, if this file object represents a directory, false otherwise.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.isFile</summary>

The isFile API checks, if this object represents a typical file on the file system but not a directory.

### Syntax

```

voltmx.io.File.isFile()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFile244.txt";
var myFileName = new voltmx.io.File(myFileLoc);
try {
    var isFileThere = new voltmx.io.File(myFileLoc).isFile();
    if (isFileThere) {
        voltmx.print("isFile true for nonExistent File");
    } else {
        voltmx.print("isFile false for nonExistent File");
    }
} catch (err) {
    voltmx.print("isFile doesn't work on non-existent files");
}
```

### Return Values

Boolean – true if this file object represents a file, false otherwise.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.moveTo</summary>

The moveTo API moves a file to the given destination path.

### Syntax

```

voltmx.io.File.moveTo(String path, String newname)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| Path | path to the destination directory. |
| newName (optional) | New name of the file/directory. Defaults to current name, if unspecified. |

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var dirLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDir25";
var myDir = new voltmx.io.File(dirLoc).createDirectory();
var fileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFileToMove25.txt";
var myFile = new voltmx.io.File(fileLoc).createFile();
var newFile = new voltmx.io.File(fileLoc).moveTo(mainLoc);
if (newFile !== null) {
    voltmx.print("moving to same loc with same name was successful");
} else {
    voltmx.print(" can't move to same loc with same name");
}
```

### Return Values

VoltMX.io.File – returns a handle to File object pointing to destination file on success. Returns null on failure.

### Exceptions

None

### Platform Availability

Available to iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.read</summary>

The read API returns the voltmx.types.RawBytes of this file.

### Syntax

```

voltmx.io.File.read()
```

### Input Parameters

None

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFile313.txt";
var myFileName = new voltmx.io.File(myFileLoc);
try {
    var reading = new voltmx.io.File(myFileLoc).read();
    voltmx.print(reading);
    if (reading === null) {
        voltmx.print("null is coming from reading i.e can't be done");
    } else {
        voltmx.print("reading can be done on NonExistentFile");
    }
} catch (err) {
    voltmx.print("can't try read on nonExistent File causes Error");
}
```

### Return Values

voltmx.types.RawBytes – rawbytes representing the content of the file.Returns null in case of non existent file.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

> **_Note:_** RawBytes will hold a handle of File object that it represents. The file content is not actually loaded into memory.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.remove</summary>

The remove API deletes a file or a directory.  


<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings.<br> 
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/&gt;</code><br>
        </li>
    </ul>
</blockquote>


### Syntax

```

remove(boolean, deleteRecursive)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| boolean | By default, this is false.True - deletes the folder and all its content recursively.False - if the directory is empty it shall be removed. |
| deleteRecursive (optional) | Ignored in case of a file. |

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFileToMove12.txt";
var myFile = new voltmx.io.File(myFileLoc);
myFile.createFile();
myFile.remove(true);
if (new voltmx.io.File(myFileLoc).exists()) {
    voltmx.print("removing file failed");
} else {
    voltmx.print("removing file was successful");
}
```

### Return Values

None

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.rename</summary>

The rename API renames a file or a directory.  


<blockquote>
    <em><b>Note: </b></em>
    <ul>      
        <li>For Android if the target SDK version is 33 and higher, below media permission is required in tags section under Application tags attributes inside android project settings.<br> 
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/&gt;</code><br>        
        <code>&lt;uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/&gt;</code><br>
        </li>
    </ul>
</blockquote>


### Syntax

```

voltmx.io.File.rename(String newname)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| newname | new name for a file or a directory. |

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFileToReName7578.txt";
var myFile = new voltmx.io.File(myFileLoc).createFile();
var newFile = new voltmx.io.File(myFileLoc).rename("myFileToReName7577");
if (newFile) {
    voltmx.print("renaming file with name successfull with extension");
} else {
    voltmx.print("renaming file failed for name without Extension");
}
```

### Return Values

Boolean – If successful, then boolean value is true,. Boolean value is false, if invalid file name or if the destination is a different directory than the current file.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *

</details>
<details close markdown="block"><summary>voltmx.io.File.write</summary>

The write API writes the given content into the file.

### Syntax

```

voltmx.io.File.write(rawbytes/string, append)
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| Rawbytes/string | data to write of type text string or voltmx.types.RawBytes |
| Append (optional) | true to append the data. Default is false, that means overrides the content. |

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myFile376.txt";
var myFileName = new voltmx.io.File(myFileLoc).createFile();
try {
    var writing = new voltmx.io.File(myFileLoc).write("How are you?");
    if (writing !== null) {
        voltmx.print("writing can be done on Non Existing Files");
    } else {
        voltmx.print("writing on nonExisting file returns null");
    }
} catch (err) {
    voltmx.print("can't try write on NonExistingFile, causes Error");
}
```

### Return Values

Boolean – true if success, false otherwise.

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

* * *
</details>

![](resources/prettify/onload.png)
