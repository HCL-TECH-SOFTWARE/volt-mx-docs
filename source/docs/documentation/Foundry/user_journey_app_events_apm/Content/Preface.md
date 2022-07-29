---
layout: "documentation"
category: "user_journey_app_events_apm"
---
                            

Preface
=======

As part of the Volt MX Foundry product, you can also configure a set of automated app events.

Support for rich Volt MX Application Performance Monitoring (also referred as Volt MX APM) scenarios enable developers to easily track usage patterns across an entire user journey. Volt MX also supports auto-capture app events to support journey analysis and supply reports for event analysis. You can auto capture JavaScript and Native Layer Exceptions and Crashes.

Volt MX  APM also provides the required support for integrating with multiple third party APM solutions such as Crittercism.

*   **Crittercism** - Crittercism helps you deliver an exceptional mobile experience to every user. Find out how our industry leading solution can start stabilizing your app and prevent lost revenue due to downtime.

Following are the auto reported events supported by Volt MX APM:

*   FormEntry – when preshow event is triggered
*   FormExit – when formHide event is triggered
*   Button Click – when onTouchEnd or onClick event is triggered
*   ServiceRequest - When service request is triggered or any other network call is invoked from the app.
*   ServiceResponse – When response arrives for service request or any other network call is invoked from the app.
*   Gesture – when a gesture event is triggered. This will tracked only for a widget that has a function configured to act on that gesture.  
    The subtype will follow the pattern GESTURETYPE\_NUMBEROFINPUTS\_DIRECTION. For example a two finger tap would be TAP\_2 and a three finger swipe would be SWIPE\_3\_RIGHT.
*   Orientation – when the device orientation change event is triggered. The subtype must be one of PORTRAIT\_TO\_LANDSCAPE or LANDSCAPE\_TO\_PORTRAIT where the new orientation of the device that caused the trigger is indicated last.

> **_Note:_** The developer must register at [manage.hclvoltmx.com](https://manage.hclvoltmx.com/) to access the Custom Metrics page.

This document describes the automated events and their use.

Formatting Conventions in This Guide
------------------------------------

The following formatting conventions are used throughout the document:


<details close markdown="block"><summary>Click here</summary>

  
| Convention | Explanation |
| --- | --- |
| Monospace | User input text, system prompts, and responses File path Commands Program code File names |
| _Italic_ | Emphasis Names of books and documents New terminology |
| **Bold** | Windows Menus Buttons Icons Fields Tabs |
| [URL](##) | Active link to a URL |
| > **_Note:_**   | Provides helpful hints or additional information |
| > **_Important:_**   | Highlights actions or information that might cause problems to systems or data |

</details>
Contact Us
----------

We welcome your feedback on our documentation. Email us at [techpubs@voltmx.com](mailto:techpubs@voltmx.com?subject=Documentation Feedback).

For technical questions, suggestions and comments, or to report problems on the Volt MX product line, contact [productsupport@voltmx.com](mailto:productsupport@voltmx.com).
