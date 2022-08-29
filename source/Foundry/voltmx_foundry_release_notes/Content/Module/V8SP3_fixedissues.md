                          

Fixed Issues in V8 SP3
======================

Engagement
----------

**On-Premise:**

Internal bug fixes.

**Cloud:**

*   Performance Enhancements in `Cancel Message` Flow.
*   Performance Enhancements in `Push Message Status` screen and `Users` or `Subscriptions` screen.
*   Performance Enhancements for `Segmentation` with `Geo-location`.
*   Bug fixes.

Installer
---------

*   Startup of the AuthService component fails on WebSphere v9.
*   The service run-time invocation of MySQL RDBMS fails if the selected Volt MX Foundry database during installation is other than MySQL. The issue occurred when the App Server selected during installation was other than the standalone JBoss and Tomcat that come bundled with the Installer.
*   If you choose the user-defined tablespace in Windows Installer, the database schema is still created in the default tablespace.
