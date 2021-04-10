---
layout: "documentation"
category: "iris_rel_notes"
---
                         

Limitations and Known Issues in V9-Preview
==========================================

Following are the limitations in the V9 release of Volt MX Iris

 

Android
-------

### Deprecated widgets

If an app contains deprecated widgets, when a user tries to launch the app, an exception appears and the app does not launch.

### Limitation with 32-bit Architecture Support on Mac OS Catalina

While building an app, if the **Support for 32-bit devices** option is enabled, build issues may occur. For information on how to resolve these build issues, refer [MacOS Catalina issues](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083360).

### Heap size issue

Depending on the available RAM, you can increase the heap size of the Android build by adding any of the following entries in gradle.properties entries:

*   `org.gradle.jvmargs=-Xmx2048m`
*   `org.gradle.jvmargs=-Xmx4096m`

For more information, refer [gradle entries]({{ site.baseurl }}/docs/documentation/Iris/iris_user_guide/Content/Native_App_Properties.html#GradleEntries).
