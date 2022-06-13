---
layout: "documentation"
category: "offline_objects_releasenotes"
---
                            
Offline Objects Release Notes: Introduction

Introduction
============

The Offline Objects feature enables you to download objects data from a Mobilefoundry object service into a mobile device. This downloaded data can be used while the device doesn’t have network connectivity and can be synced later with the Mobilefoundry object services backend. The Offline Objects feature uses the OData protocol, an open-sourced protocol to connect directly with object services without the need of another sync server in the middle. A user can use the Offline Objects feature with apps created using Volt MX Iris as well as apps that are developed natively. Offline Objects provide advanced object syncing capabilities. They are:

*   Data download support at an Object level. This enables an app developer to decide when to download data for certain objects. This capability reduces the chances of an object data download failure in the middle of a sync process in case one of the objects contains a large amount of data.
*   Data download support at object service level. This enables an app developer to download data for an object service in one go.
*   Sync in offline objects happens in the background. This feature enables a user to trigger multiple syncs in parallel. The Offline objects feature brings multi-threading, augmented performance, ease of issue diagnosing and many more features to your apps.
