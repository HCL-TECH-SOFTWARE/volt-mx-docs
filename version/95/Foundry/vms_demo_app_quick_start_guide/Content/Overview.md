                           

Demo App QuickStart Guide (for Android Devices): Overview

Overview
========

With **VoltMX Foundry Engagement Services**, you can send notifications to subscribed applications. The notifications can be sent by any one of the options below:

*   Messages to subscribers or segments that are associated with applications: Engagement services feature allows you to send notifications to individual subscribers or to segments (group of subscribers) that are subscribed to an application. For example, sending push message to either all subscribers or segments.
*   **Location based Notifications**: The geoboundaries feature of the Engagement server allows you to send location based notifications with or without the Engagement server being involved.
*   Campaign messages to subscribed applications: The Engagement server allows you to set up campaigns. Notification messages can be associated to campaigns, which in turn are associated with applications. For example: a user might send festive seasonal sales messages to a group that matches specific conditions (for example, marital status, income, and education) for a particular period.
*   Event messages to subscribed applications:The user can set up events in the engagement server which can be invoked by an external system when certain events occur. Such events can be configured to send various notifications such as push,email, and SMS when invoked.

The Quick Start Guide explains installation and execution of a sample Engagement application on an Android device. The installed application subscribes to the Engagement server instance and can receive the push, email and SMS notifications. For example an event titled as **Low Balance Event** can be created and saved in the Engagement server. This event can be set up to send a low balance notification( such as a push message) when invoked by an external system.

We assume that you have access to the Engagement server on cloud and are provisioned to use it. We also assume that you have a **GCM/FCM** key that is associated with the sender ID that can be used with this demo application.

The Quick Start Guide comprises five sections:

1.  Configuring the email and SMS provider using Engagement Console.
2.  Configuring the **Security Settings** of the Engagement server instance.
3.  Downloading and configuring the Engagement demo client application on an Android device.
4.  Configuring the Engagement demo application using the Engagement Console.
5.  Sending Adhoc email, SMS, and push notifications.
