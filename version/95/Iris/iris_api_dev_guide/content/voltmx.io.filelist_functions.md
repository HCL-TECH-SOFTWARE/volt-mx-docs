                            


voltmx.io.FileList Namespace
==========================

FileList namespace represents the list of file objects.

  
| FileList Properties:Name | Description |
| --- | --- |
| length: \[type: Number, ReadOnly\] | Returns the number of files in the FileList object. |

  
The FileList library comprises of the following API.

Functions
---------

The voltmx.io.FileList namespace contains the following functions.


<details close markdown="block"><summary>item</summary>

The item API returns the File object at the specified index in the FileList.

### Syntax

```

voltmx.io.File.item(index)
```

### Input Parameters

  
| Parameter | Description |
| --- | --- |
| Index | Index in the FileList. |

### Example

```

var mainLoc = voltmx.io.FileSystem.getDataDirectoryPath();
var newDirLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDirItem";

var myNewDir = new voltmx.io.File(newDirLoc).createDirectory();
var myFile1Loc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDirItem" + constants.FILE_PATH_SEPARATOR + "myFileItem1.txt";

var myFile1 = new voltmx.io.File(myFile1Loc).createFile();
var myFile2Loc = mainLoc + constants.FILE_PATH_SEPARATOR + "myDirItem" + constants.FILE_PATH_SEPARATOR + "myFileItem2.txt";

var myFile2 = new voltmx.io.File(myFile2Loc).createFile();
var myFileTemp = new voltmx.io.File(newDirLoc);

var filesListTemp = myFileTemp.getFilesList(); //getFilesList using getFilesList API
alert(filesListTemp.length); //File list length must be greater than 0.
var myFile = filesListTemp.item(1); //Provide index of file 
alert(JSON.stringify(myFile.name));
```

### Return Values

  
| Return Value | Description |
| --- | --- |
| File | File object at specified index. Null if there is no File at specified index or if index is not in FileList range. |

### Exceptions

None

### Platform Availability

Available for iOS, Android, and Windows platforms.

![](resources/prettify/onload.png)
