                           

[![](Resources/Images/pdf.png)](http://docs.voltmx.com/8_x_PDFs/messaging/voltmx_foundry_engagement_services_quick_start_guide_build_sample_app_apple_ios.pdf "VoltMX Foundry Engagement Services Quick Start Guide – Building a Sample App – Apple iOS")

Overview
========

This QuickStart Guide provides deep-dive instructions to configure, build and run a messaging demo application on an iOS device. In this guide you will install and run the sample messaging demo application using the user generated Apple Push Notification (APNS) certificate. The guide explains how to install and configure the sample messaging demo application on a separate instance of a Foundry Messaging Server. The installed application will subscribe to the messaging server instance and will receive the ad hoc push/email/SMS notifications.

This guide assumes the following:

*   You have requested an instance of a Foundry Messaging Server and have access to it.
*   You have installed Xcode and Volt MX Studio.

Here are the steps that will be covered in detail in this guide:

1.  Create the Apple Push Notification Service (APNS) certificate that is needed to receive push notifications on iOS devices.
2.  Generate of the provisioning profile needed to install the application on iOS devices.
3.  Download and configure the messaging client application using Volt MX Studio. 
4.  Install the configured client application on an iOS device.
5.  Configure the messaging demo application on the messaging server using the console.
6.  Configure the SMS provider and SMTP server details on the messaging server to send the ad hoc notifications.
7.  Use the messaging client demo application to subscribe and receive ad hoc email, SMS and push notifications.
8.  Send the ad hoc email, SMS and push notification to the subscribers via the messaging server. This involves creating the segment and sending the ad hoc notifications to individual subscribers and group of subscribers (segments).
