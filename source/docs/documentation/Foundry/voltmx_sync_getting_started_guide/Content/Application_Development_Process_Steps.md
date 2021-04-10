---
layout: "documentation"
category: "voltmx_sync_getting_started_guide"
---
                    


Developing an Application
=========================

1.  Define `SyncConfig.xml` file using Volt MX Iris.
    1.  You may refer to the `SampleSyncConfig.xml` file provided along with the Sync Tool (Folder – `/common/resources`).
2.  Provide the `SyncConfig.xml` file as an input to SyncTool.
    1.  Once defined, copy the `SyncConfig.xml` file to the folder `/common/resources` in the tool.
3.  Change `SyncConfig` file name.
    1.  Go to `/build` folder and open `build.properties` file to change the SyncConfig file name to the one which you have copied.
4.  Run the SyncTool and generate code.
    1.  Database as Datasource
        
        Refer to _VoltMX Foundry Sync Tool Configuration & Execution Guide_ document, for more details available at [http://developer.voltmx.com/Sync](http://developer.voltmx.com/Sync)
        
    2.  Web Services as Datasource
        
        Refer to _VoltMX Foundry Sync WS IDE SyncConfig Generation Guide_ document for more details available at [http://developer.voltmx.com/Sync](http://developer.voltmx.com/Sync)
        
5.  On Build Successful.
    1.  Go to `/generated` folder find client & server scripts.
    2.  In the _server_ folder, you can find `.sql` files.
6.  Find generated files
    1.  In the `client`, you can find `.lua` and `.js` files.
    2.  In the `server` folder, you can find `.sql` files
7.  Using client and server scripts
    1.  Copy the `.lua` files on to `/modules/lua` Or Copy the `.js` files on to **`modules/js`** folder in your project.
    2.  Run the `.sql` scripts in the Sync database to create respective tables.
8.  Create client application
    1.  ORM API Usage
        
        Refer to `VoltMX Foundry Sync Client ORM API` document, for more details about ORM API usage available at [http://developer.voltmx.com/Sync](http://developer.voltmx.com/Sync)
        
    2.  Auto Generate UI CRUD Forms Using IDE
        
        Refer to `VoltMX Foundry Sync Generate Forms`video for a demo available at [http://developer.voltmx.com/Sync](http://developer.voltmx.com/Sync)
        
9.  Deploy SyncConfig
    1.  To deploy the `SyncConfig` file and accomplish assignments.
        
        Refer to _VoltMX Foundry Sync Management Console User Guide_ document, for more details about deploying `SyncConfig` file, available at [http://developer.voltmx.com/Sync](http://developer.voltmx.com/Sync)
        
    2.  Open **Management Console** and go to **Applications** tab, and upload the `SyncConfig.xml` file.
    3.  Accomplish assignments in the Management Console.
        1.  Assign a Device to a User
        2.  Assign the User to a Group
        3.  Assign the Application to the Group
10.  Authentication details
    1.  Provide authentication details in your client project.
11.  Build the Application, deploy and run.
12.  Initialize Sync to create local device database.
13.  Start Sync Session to download the initial data from Enterprise Datasource.
14.  Client side CRUD Operations.
    1.  Perform create, update, delete, read operations on the SyncObjects.
15.  Upload client changes to Enterprise Datasource.
    1.  Start Sync Session to upload the changes to the Enterprise Datasource.
