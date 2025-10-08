                           


Overview
========

This QuickStart Guide provides deep dive instructions to configure, build and run a demo application on an Android device using Volt MX Studio. In this guide you will download, install and run a sample messaging demo application using the user generated Google Cloud Messaging (GCM) key. The guide will also provide instructions to install and configure the sample messaging application on a separate instance of a VMS server that has been set up for the user. The installed application will subscribe to the messaging server instance and will receive ad hoc push/email/SMS notifications.

This guide assumes the following:

1.  You have already requested for an instance of a messaging server and have access to it.
2.  You have already installed the Android SDK and Volt MX Studio.

Below are the steps we will cover in detail:

1.  Creating the Global Cloud Messaging (GCM) certificate that is needed to send push notifications for Android devices.
2.  Downloading and configuring the messaging demo client application using Volt MX Studio. 
3.  Installing the configured client application on an Android device.
4.  Configuring the messaging demo application on the messaging server using the console.
5.  Configuring the SMS Provider and SMTP server details on the Foundry Messaging Server to send ad hoc notifications.
6.  Using the messaging client demo application to subscribe and receive ad hoc email, SMS and Push notifications.
7.  Sending the ad hoc email, SMS and push notification to subscribers via the Foundry Messaging Server. This involves creating the segment and sending the ad hoc notifications to individual subscribers and groups of subscribers (segments).
