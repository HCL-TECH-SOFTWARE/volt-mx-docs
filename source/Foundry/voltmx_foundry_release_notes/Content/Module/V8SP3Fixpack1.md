                          

Volt MX  Foundry V8 SP3 Fix Pack 1
=============================

Fixed Issues
------------

### Console

*   Fixed an issue where the JavaScript file upload fails in newer versions of Google Chrome ( > V68).
*   Added support to generate Output Parameters for SOAP service response from the TREE view.
*   Bug fixes.

### Identity

*   Fixed an issue where a Token Expired exception occurs while using a native application continuously for more than 15-20 minutes. The application now marks the session as accessed, and re-sends the authentication token to update and extend the duration of the session.
*   Fixed an issue where calling services from the Admin Console caused an error at the Gateway if the token did not contain app attributes. The service now populates the token with mock app attributes if there is no app associated with it. These attributes are only used to populate the metrics data and do not cause other issues.

### Integration

*   Fixed an issue where deployment of `apps.war`  fails in WebLogic.
*   Fixed an issue where Admin Console test did not honor proxy settings or restrictions.
*   Fixed an issue where throttling changes from Admin Console did not reflect on the service call.
*   Added support to display the default cache expiry time in the Admin Console UI.

### Installer

*   Fixed an issue where the ActiveMQ service fails to start post installation on a machine without Java, when either Tomcat or Standalone JBoss is chosen as the application server. The ActiveMQ service now uses the same Java as that of the installed Tomcat or JBoss Server (Java present in the installation directory).

### Patch Installer

*   Added support for ActiveMQ on `admin.war` and `services.war`.
