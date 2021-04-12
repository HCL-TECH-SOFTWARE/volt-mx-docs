---
layout: "documentation"
category: "vmf_sync_orm_api_guide"
---
                           


SQLite DB Encryption
====================

You can enable encryption using the below two APIs:

*   sync.init
*   sync.reset

sync.init
---------

You can access _sync.init_ in two ways:

*   **Previous way**:
    
    sync.init(**syncInitSuccesscallback**, **syncInitErrorcallback**);
    
    > **_Note:_** Encryption is disabled, by default.
    
*   **New way**:{% highlight voltMx %}var config={};
    config.oninitsuccess = syncInitSuccesscallback;
    config.oniniterror = syncInitErrorcallback;
    config.devicedbencryptionkey = “VoltMXSync”;
    sync.init(config);
    
    {% endhighlight %}
    
    > **_Note:_** The database is encrypted using devicedbencryptionkey.  
    If config.devicedbencryptionkey=null/undefined/<Empty String>, then encryption is disabled.
    

sync.reset
----------

You can access _sync.reset_ in two ways:

*   **Previous way**:
    
    sync.reset(**syncResetSuccesscallback**, **syncResetErrorcallback**);
    
    > **_Note:_** Encryption is disabled, by default.
    
*   **New way**:{% highlight voltMx %}var config={};
    config.onresetsuccess = syncResetSuccesscallback;
    config.onreseterror = syncResetErrorcallback;
    config.devicedbencryptionkey = “VoltMXSync”;
    sync.reset(config);
    
    {% endhighlight %}
    
    > **_Note:_** The database is encrypted using devicedbencryptionkey.  
    If config.devicedbencryptionkey=null/undefined/<Empty String>, then encryption is disabled.
    

> **_Note:_** To encrypt SQLite database for iPad/iPhone devices, follow these steps:

1.  Extract the `KAR` file with "-sqlcipher" option3  
    For example:  
    When KAR is not in local machine: perl extract.pl http://ip.add.re.ss:8888/appidr/?type=ipad -sqlcipher XYZ.  
    When KAR is in local machine: perl extract.pl <KAR file location>/AppName.KAR -sqlcipher XYZ.  
    
2.  Encryption does not take place unless you extract the `KAR` file using "-sqlcipher" option.

> **_Note:_** For Android Devices:

1.  Supported Android plug-ins:
    *   Tab Plug-in version : ANDT-GA-5.0.44
    *   Mobile Plug-in version : AND-GA-5.0.4
2.  SQLite encryption dependent libraries are available from VoltMXSync IDE 5.5.9.2 GA. These dependent library files are copied into application workspace when user generates application forms or offline services using VoltMXSync IDE 5.5.9.2 GA.

### **Manual Instructions to Copy SQLite Encryption Dependent Libraries for Android**

For Android mobile devices:

1.  Download SQLCipher binaries from [https://s3.amazonaws.com/sqlcipher/SQLCipher+for+Android+v3.0.1.zip.](https://s3.amazonaws.com/sqlcipher/SQLCipher+for+Android+v3.0.1.zip)
2.  Access the `Application Resource` folder from IDE and create the folder structure `resources/customlibs/lib/android`, if already does not exist.
3.  Copy the contents of the `libs` folder of SQLCipher into `resources/customlibs/lib/android`, if does not exist already. The SQLCipher `libs` folder contains the two folders (`armeabi`, `x86`) and three jar files. You need to copy all the files to `android`.
4.  Copy `voltmxsqlcipher.jar` into the same android folder. You can obtain the latest jar file from the Android build folder \[Ctrl + Alt + T\] (jar location: `workspace\temp\<Application>\build\luaandroid\extres`).
5.  Create the folder structure `resources\mobile\native\android\assets` (for Android mobile device, if does not exist already) and copy the contents of `assets` folder of SQLCipher into `assets` folder location.
6.  The SQLCipher `assets` folder contains the file `icudt46l.zip` and you need to copy it to `resources\mobile\native\android\assets` folder.
7.  Build the application (All build modes supported).

For Android TAB devices:

1.  Download SQLCipher binaries from [https://s3.amazonaws.com/sqlcipher/SQLCipher+for+Android+v3.0.1.zip](https://s3.amazonaws.com/sqlcipher/SQLCipher+for+Android+v3.0.1.zip).
2.  Open the `Application Resource` folder from Volt MX Iris IDE and create the folder structure `resources/customlibs/lib/tabrcandroid`, if does not exist already.
3.  Copy the contents of the `libs` folder of SQLCipher into the `resources/customlibs/lib/tabrcandroid`, if does not exist already. The SQLCipher `libs` folder contains the two folders (`armeabi`, `x86`) and three jar files, copy all these files to the `tabrcandroid` folder.
4.  Copy the attached jar file, `voltmxsqlcipher.jar` also into the `tabrcandroid` folder. You can obtain the latest jar file from the `Android build` folder \[Ctrl + Alt + T\] (the jar file is located in `workspace\temp\<Application>\build\luatabrcandroid\extres`).
5.  Create the folder structure `resources\tablet\native\andriodtab\assets`, if does not exist already and copy the contents of `assets` folder of SQLCipher into above location. SQLCipher `assets` folder contains the `icudt46l.zip` file and you need to copy it to `resources\mobile\native\andriodtab\assets` folder.
6.  Build the application (All build modes supported)

Known Issues
------------

1.  Encryption key cannot be changed once enabled.
2.  Currently no error callback displays, if encryption is not successful.
3.  Applications using SQLite encryption on Android devices may not work properly when you try to encrypt existing non-encrypted SQLite database.
4.  Applications using SQLite encryption may not respond properly on Android devices causing data loss when you try to access encrypted SQLite DB without a valid KEY. The behavior depends on the Android version. If the Android version is:
    1.  Below 3.0, the corrupted database file is removed and new database is created with the same name.
    2.  Below 3.0 and 4.1, since you make sure the database file is not deleted at any cost, the application encounters the StackOverflow exception.
    3.  From 4.1 and above, an empty database handle is returned on `openDatabase()` call.
