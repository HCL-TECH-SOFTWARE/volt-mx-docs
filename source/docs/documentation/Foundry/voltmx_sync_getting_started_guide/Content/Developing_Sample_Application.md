---
layout: "documentation"
category: "voltmx_sync_getting_started_guide"
---
                    

Developing a Sample Application
===============================

> **_Note:_** For detailed information, see _Generate Application Forms_ section in _VoltMX Foundry Sync Developing Offline Applications_ document and _VoltMX Foundry Sync ORM API Guide_ available at [VoltMX On-Premises Documentation Library]({{ site.baseurl }}/docs/documentation/voltmxonpremises/).

Troubleshooting
---------------

*   **Direct Access to the SQLite database**
    *   iPhone([http://blog.chrismiles.info/2011/07/core-data-debugging-with-sqlite.html](http://blog.chrismiles.info/2011/07/core-data-debugging-with-sqlite.html))
        *   Open Terminal and run "sqlite3" pasting in the store path as argument.
            
        *   $ sqlite3 "/Users/chris/Library/Application Support/iPhone Simulator/4.3.2/Applications/22CD429E-ADD2-4AAA-9C9E-5E57828A6FF8/Documents/OrganisingCoreData.sqlite"
            
            \-- Loading resources from /Users/chris/.sqliterc
            
        *   SQLite version 3.6.12
        *   Enter ".help" for instructions
        *   Enter SQL statements terminated with a ";"
        *   sqlite> .tables
    *   Android ([http://developer.android.com/guide/developing/tools/adb.html#sqlite](http://developer.android.com/guide/developing/tools/adb.html#sqlite))
        *   $ adb -s emulator-5554 shell
            
        *   \# sqlite3
            
            /data/data/com.example.google.rss.rssexample/databases/rssitems.db
            
        *   SQLite version 3.3.12
            
        *   Enter ".help" for instructions
            
        *   .... enter commands, then quit...
            
        *   sqlite> .exit
            

References
----------

For more information on developing a sample application, visit the following links at [VoltMX Cloud Documentation Library](https://basecamp.hcl.com/s/voltmx-documentation?index=19).

*   Design Guidelines
*   Server Planning Guide
*   Console User Guide.
