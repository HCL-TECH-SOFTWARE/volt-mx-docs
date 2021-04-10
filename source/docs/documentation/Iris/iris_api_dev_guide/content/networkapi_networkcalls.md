---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Network Calls
=============

Any network call goes through the following phases:

*   Phase 1: preparing network request.
*   Phase 2: making a network connection.
*   Phase 3: handling the returned response.

{% include youtube.html id='ea1V9iEuRjc' %}

> **_Note:_** All network APIs use the _post_ method to fetch data from a specified URL. The post method is not configurable.

On all Apple platforms (iOS, OS X, etc), Apple requires that all apps use App Transport Security (ATS) for all network calls. As a result, all calls should use HTTPS rather than HTTP as the transport protocol. Apps developed with Volt MX for Apple platforms have ATS enabled by default. Attempts to manually bypass ATS result in an exception being thrown.

For more information about ATS, please see the [Apple Documentation](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW35).

