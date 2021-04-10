---
layout: "documentation"
category: "iris_rel_notes"
---
                         

Limitations and Known Issues in V9 (M1 and M2)
==============================================

In this release, the following are the limitations in the V9 release of Volt MX Iris

 

Android
-------

With the introduction of Android X packages, android.support is now deprecated.

All references to android.support made through NFIs, Android Manifest tag entries in Iris, Cordova and Reactnative entries must be replaced with androidx references manually, and the application must be rebuilt. This issue occurs due to an Android Build tools [issue](https://issuetracker.google.com/issues/122273720).
