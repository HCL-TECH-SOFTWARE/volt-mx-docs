# Preface

As part of the Volt MX Foundry product, you can also configure a set of automated app events.

Support for rich Volt MX Application Performance Monitoring (also referred as Volt MX APM) scenarios enable developers to easily track usage patterns across an entire user journey. Volt MX also supports auto-capture app events to support journey analysis and supply reports for event analysis. You can auto capture JavaScript and Native Layer Exceptions and Crashes.

Volt MX APM also provides the required support for integrating with multiple third party APM solutions such as Crittercism.

*   **Crittercism** - Crittercism helps you deliver an exceptional mobile experience to every user. Find out how our industry leading solution can start stabilizing your app and prevent lost revenue due to downtime.

Following are the auto reported events supported by Volt MX APM:

*   FormEntry – when preshow event is triggered
*   FormExit – when formHide event is triggered
*   Button Click – when onTouchEnd or onClick event is triggered
*   ServiceRequest - When service request is triggered or any other network call is invoked from the app.
*   ServiceResponse – When response arrives for service request or any other network call is invoked from the app.
*   Gesture – <span></span> when a gesture event is triggered. This will tracked only for a widget that has a function configured to act on that gesture.  
    The subtype will follow the patternGESTURETYPE_NUMBEROFINPUTS_DIRECTION. For example a two finger tap would be TAP_2 and a three finger swipe would be SWIPE_3_RIGHT.
*   Orientation – when the device orientation change event is triggered. The subtype must be one of PORTRAIT_TO_LANDSCAPE or LANDSCAPE_TO_PORTRAIT where the new orientation of the device that caused the trigger is indicated last.

>   **_Note:_** The developer must register at [manage.hclvoltmx.com](https://manage.hclvoltmx.com/) to access the Custom Metrics page.



This document describes the automated events and their use.

## <a name="Typograp"></a>Formatting Conventions in This Guide

The following formatting conventions are used throughout the document:

<details close markdown="block"><summary>Click here</summary>
<table>
<tr>
<th>Conventions</th>
<th>Explanation</th>
</tr>
<tr>
<td><code>Monospace</code></td>
<td>
<ul>
<li>User input text, system prompts, and responses</li>
<li>File path</li>
<li>Commands</li>
<li>Program code</li>
<li>File names</li>
</ul>
</td>
</tr>
<tr>
<td><em>Italic</em></td>
<td>
<ul>
<li>Emphasis</li>
<li>Names of books and documents</li>
<li>New terminology</li>
</ul>
</td>
</tr>
<tr>
<td><strong>Bold</strong></td>
<td>
<ul>
<li>Windows</li>
<li>Menus</li>
<li>Buttons</li>
<li>Icons</li>
<li>Fields</li>
<li>Tabs</li>
<li>Folders</li>
</ul>
</td>
</tr>
<tr>
<td>
<a href="#">URL</a>
</td>
<td>
<ul>
Active link to a URL.
</ul>
</td>
</tr>
<tr>
<td>
<blockquote>
<em>Note:</em>
</blockquote>
</td>
<td>
<ul>
Provides helpful hints or additional information.
</ul>
</td>
</tr>
<tr>
<td>
<blockquote style="color:orange;">
<em>Important:</em>
</blockquote>
</td>
<td>
<ul>
Highlights actions or information that might cause problems to systems or data
</ul>
</td>
</tr>
</table>  
</details>  


## Contact Us  

For technical questions, documentation queries or to report issues with the Volt MX product line, contact us at <a href="https://support.hcltechsw.com/csm">https://support.hcltechsw.com/csm</a> .



<!-- We welcome your feedback on our documentation. Write to us at [techpubs@voltmx.com](mailto:techpubs@voltmx.com?subject=Documentation Feedback). For technical questions, suggestions, and comments, or to report problems on VoltMX's product line, contact [support@voltmx.com](mailto:support@voltmx.com). -->

<!-- For technical questions, suggestions and comments, or to report problems on the Volt MX product line, contact [support.hcltechsw.com](https://support.hcltechsw.com/). -->