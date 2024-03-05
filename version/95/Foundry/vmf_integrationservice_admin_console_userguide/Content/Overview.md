# Preface

Volt MX Foundry Integration Service App Services portal helps you to test different services created in Volt MX Foundry Console, generate application reports, delete an application and application's services, and configure settings.

Different services available in App Services are Web Apps, Integration Services, Object Services and Orchestration services.

The services are created and published in Volt MX Foundry Console. The published services are displayed in App Services under the respective tabs. The displayed services are tested in App Services before publishing to the website.

You can perform a health check to validate the performance of the server and generate different types of reports. You can trace the logging of the server and find the environment details on which the Volt MX server is installed.

**Volt MX Foundry Integration Service**

The existing on-premises Volt MX Foundry Integration Service supports the feature of outputting a message to a JMS queue for each service request. Volt MX provides a log deamon Java process which will read from the JMS queue and insert the data into the Volt MX Foundry Integration Service database. A customer can query the data directly or use a `reporting.war` file provided by Volt MX which connects to the data and provides a visual representation of the data.

One key feature added for Volt MX Cloud analytics is a client side library which resides in the app binary that manages the sessionID of the application. The library contains the business logic to generate a sessionID and rotate the sessionID if the app is closed or if the app is idle for more than thirty minutes.

Another key feature added for Volt MX Cloud analytics is a client side API to set the Volt MX User ID. This value is then set to the Volt MX Foundry Integration Service and associated to the session. This enabled the Volt MX Cloud analytics to also accurately track unique users based on userID defined by the developer. This enables extremely accurate user tracking for apps running on the Volt MX Cloud that aligns with your business definition and charging definition of app users.

<!-- **Volt MX Foundry Sync**

The existing on-premise Volt MX Foundry Sync server does not output analytics to a JMS queue. Instead, Volt MX Foundry Sync server maintains its own database and exposes usage reports within the Volt MX Foundry Sync Console.

With cloud enabled for Volt MX Foundry Sync, a new capability is added to output a message to a JMS queue on every request and to output a daily summary email of current Volt MX Foundry Sync usage that included the number of apps, users and devices being serviced. These messages are only generated when Volt MX Foundry Sync is running in the Volt MX Cloud.

It is not in currently in scope to support the Volt MX Foundry Sync metrics created for Volt MX Cloud in an on-premise configuration at this time. However, the on-premise metrics database design should consider this future requirement. -->

## <a name="Scope"></a>Purpose

This document explains the terms and concepts in the Volt MX Foundry Integration Service App Services, the procedure to test the services created and published in Volt MX Foundry Console and also provides procedural information to perform various tasks in the Volt MX Visualizer.

The document describes the different types of reports that can be generated and the settings that can be done to the logs.

## <a name="Intended"></a>Intended Audience

The document is targeted to the Admin who wants to test the services created in the Volt MX Foundry Console and the developers who will use the IDE to write and develop applications.

## <a name="Typograp"></a>Formatting Conventions

The following are the formatting conventions used throughout the document:


<details close markdown="block"><summary>Click here</summary>
    
<table>
<tr>
<th>Conventions</th>
<th>Explanation</th>    
</tr>
<tr>
<td>
<tt>Monospace</tt>
</td>
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
<td>
<em>Italic</em>
</td>
<td>
<ul>
<li>Emphasis</li>
<li>Names of books and documents</li>
<li>New terminology</li>
</ul>
</td>
</tr>

<tr>
<td>
<strong>Bold</strong>
</td>
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
<a href="">URL</a>
</td>
<td>
<p></p>
<p>Active link to a URL.</p>
<p></p>
</td>
</tr>

<tr>
<td>
<blockquote><em>Note</em></blockquote>
</td>
<td>
<p></p>
<p>Provides helpful hints or additional information.</p>
<p></p>
</td>
</tr>

<tr>
<td style="color:red;">
<strong><em>Important</em></strong>
</td>
<td>
<p></p>
<p>Highlights actions or information that might cause problems to systems or data.</p>
<p></p>
</td>
</tr>
</table>
    
</details>


## <a name="Contact"></a>Contact Us

We welcome your feedback on our documentation. Write to us at [techpubs@voltmx.com](mailto:techpubs@voltmx.com?subject=Documentation Feedback). For technical questions, suggestions, comments, or to report problems on VoltMX's product line, contact [productsupport@voltmx.com](mailto:productsupport@voltmx.com).