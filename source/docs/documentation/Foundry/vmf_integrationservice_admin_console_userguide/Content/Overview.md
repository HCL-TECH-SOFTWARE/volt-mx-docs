---
layout: "documentation"
category: "vmf_integrationservice_admin_console_userguide"
---
                            

Preface
=======

Volt MX  Foundry Integration Service App Services portal helps you to test different services created in Volt MX Foundry Console, generate application reports, delete an application and application's services, and configure settings.

Different services available in App Services are Web Apps, Integration Services, Object Services and Orchestration services.

The services are created and published in Volt MX Foundry Console. The published services are displayed in App Services under the respective tabs. The displayed services are tested in App Services before publishing to the website.

You can perform a health check to validate the performance of the server and generate different types of reports. You can trace the logging of the server and find the environment details on which the Volt MX server is installed.

**VoltMX Foundry Integration Service**

The existing on-premises Volt MX Foundry Integration Service supports the feature of outputting a message to a JMS queue for each service request. Volt MX provides a log deamon Java process which will read from the JMS queue and insert the data into the Volt MX Foundry Integration Service database. A customer can query the data directly or use a `reporting.war` file provided by Volt MX which connects to the data and provides a visual representation of the data.

One key feature added for Volt MX Cloud analytics is a client side library which resides in the app binary that manages the sessionID of the application. The library contains the business logic to generate a sessionID and rotate the sessionID if the app is closed or if the app is idle for more than thirty minutes.

Another key feature added for Volt MX Cloud analytics is a client side API to set the Volt MX User ID. This value is then set to the Volt MX Foundry Integration Service and associated to the session. This enabled the Volt MX Cloud analytics to also accurately track unique users based on userID defined by the developer. This enables extremely accurate user tracking for apps running on the Volt MX Cloud that aligns with your business definition and charging definition of app users.

Purpose
-------

This document explains the terms and concepts in the Volt MX Foundry Integration Service App Services, the procedure to test the services created and published in Volt MX Foundry Console and also provides procedural information to perform various tasks in the Volt MX Iris.

The document describes the different types of reports that can be generated and the settings that can be done to the logs.

Intended Audience
-----------------

The document is targeted to the Admin who wants to test the services created in the Volt MX Foundry Console and the developers who will use the IDE to write and develop applications.

Formatting Conventions
----------------------

The following are the formatting conventions used throughout the document:


<details close markdown="block"><summary>Click here</summary>

  
| Conventions | Explanation |
| --- | --- |
| Monospace | User input text, system prompts, and responses File path Commands Program code File names. |
| _Italic_ | Emphasis Names of books and documents New terminology. |
| **Bold** | Windows Menus Buttons Icons Fields Tabs Folders. |
| [URL](##) | An active link to an URL. |
| > **_Note:_**   | Provides helpful hints or additional information. |
| > **_Important:_**   | Highlights actions or information that might cause problems to systems or data. |

</details>
Contact Us
----------

We welcome your feedback on our documentation. Write to us at [techpubs@voltmx.com](mailto:techpubs@voltmx.com). For technical questions, suggestions, comments, or to report problems on VoltMX's product line, contact [support@voltmx.com](mailto:support@voltmx.com).
