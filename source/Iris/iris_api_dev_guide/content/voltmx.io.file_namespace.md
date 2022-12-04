                            

voltmx.io.File Namespace
======================

The voltmx,io.File namespace provides functions and properties for doing various operations related on files, such as copying them, renaming them , deleting them and so on.

Overview
--------

Your app can create a `File` object to represent files in the device's file system and perform common operations on them. To create a new `File` object , your app calls the `voltmx.io.File` function. Alternatively, it can use the voltmx.io.FileSystem.getFile function to get an instance of a `File` object.

var myfile = new voltmx.io.File("myfile.txt");  
or  
var myfile = voltmx.io.FileSystem.getFile("myfile.txt")  

  
| File Properties:Name | Description |
| --- | --- |
| name: \[type: String, ReadOnly\] | Name of the file or directory |
| fullPath: \[type: String, ReadOnly\] | Full absolute path of the file or directory |
| parent: \[type:voltmx.io.File, ReadOnly\] | Returns the parent directory of this file. This property may return nil or a File object which can neither Readable or Writable, especially in case of Folders which are not accessible by the given Application context |
| readable: \[type: Boolean, ReadOnly\] | Returns true if this file is readable |
| writable: \[type: Boolean, ReadOnly\] | Returns true if this file is writable |
| modificationTime: \[type:Number, ReadOnly\] | Returns the last modification time of the file in UTC |
| size: \[type:Number, ReadOnly | Returns the size of a file in number of bytes. |

![](resources/prettify/onload.png)
