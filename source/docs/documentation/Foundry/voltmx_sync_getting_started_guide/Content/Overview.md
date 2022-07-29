---
layout: "documentation"
category: "voltmx_sync_getting_started_guide"
---
                     


Preface
=======

Volt MX  Foundry Sync is a comprehensive synchronization platform that enables developers to add synchronization capabilities to mobile applications. Volt MX Foundry Sync solves the problem of synchronizing any type of data in any relational database management store using any protocol over any topology. Fundamental to Volt MX Foundry Sync, is the ability to support offline and collaboration of data between devices to server.

Some of the fundamental features of Volt MX Foundry Sync are:

*   Bi-direction synchronization (changes can happen on both client and server)
*   Incremental download (only the data changed on the server from the last time the device synced with the server should be sent to the client)
*   Incremental upload (only the data changed on the client from the last time the device synced with the server should be sent to the server)
*   Conflict resolution (same data set updated by the client and the server at the same time)
*   Define a unit of synchronization similar to a Business Object / Data Object
*   Access to the enterprise backend data using existing interfaces like Web Services
*   Keep track of objects in a client device so that only you can download the difference between the client device and a backend system to the device (Delta synchronization)
*   Allow to define rules for selecting object instances to be downloaded to a client device (Filtering)
*   Provide a framework so that an application developer does not need to deal with the complexity of data synchronization
*   Provide tools to monitor, process and log/archive synchronization messages

Data synchronization can periodically take information stored in the client database (such as SQLite) and synchronize changes with a server database (such as Oracle Database Server). The advantage of a synchronization-based solution is that users need not require to have a constant network connection to access their information. Since their data is stored locally they are given constant access to their data while offloading processing requirements from the central database. Furthermore, the user is no longer limited by the network speed and can now access the data at the speed of the device.

![](Resources/Images/data_sync_framework.png)

> **_Note:_** The term Volt MX Sync / Volt MX Sync Server is changed to Volt MX Foundry Sync. This implies to all the images, text and also the cross-references in this document.

Purpose
-------

This document helps you familiarize with Volt MX Foundry Sync and provide procedural information to install and configure the framework, and use the various features that sync offers.

Intended audience
-----------------

This document is intended for developers and administrators who use Volt MX Foundry Sync.

Formatting Conventions
----------------------

The following typographical conventions are used throughout the document:

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)Click here  
](javascript:void(0);)

  
| Convention | Explanation |
| --- | --- |
| Monospace | User input text, system prompts, and responses File path Commands Program code File Names. |
| _Italic_ | Emphasis Names of books, and documents New terminology. |
| **Bold** | Windows Menus Buttons Icons Fields Tabs. |
| [URL](##) | Active link to a URL |
| Note | Provides helpful hints or additional information |
| Important | Highlights actions or information that might cause problems to systems or data |

Contact us
----------

We welcome your feedback on our documentation. Write to us at [techpubs@voltmx.com](mailto:techpubs@voltmx.com?subject=Documentation Feedback).For technical questions, suggestions, comments, or to report problems on VoltMX's product line, contact [support@voltmx.com](mailto:productsupport@voltmx.com).
