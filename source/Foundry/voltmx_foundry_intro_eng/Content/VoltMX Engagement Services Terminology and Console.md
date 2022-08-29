                           


Volt MX  Engagement Services Terminology and Console
================================================

In this section, we will cover the terminology used with the Engagement Server and also various features of Volt MX Engagement Services console. It is assumed that you already have access to a trial account of Volt MX Foundry which has Volt MX Engagement Services provisioned.

Terminology - Volt MX Engagement Services
--------------------------------------

In this section, you will learn the Engagement Services terminology and their definitions.

### User

A user in the Engagement Server is an entity that has a set of associated attributes. The attributes of a user would be first name, last name, mobile number, County, and state. A user could be user of an application to whom messages can be sent.

### Application

An application in Volt MX Engagement is needed for the subscriptions to be created. A subscription in the Engagement Server is associated with an application and a device. So, for one application you could have multiple device subscriptions.

### Subscription

A subscription in the Engagement Server is an entity that is uniquely identified by an application and a device for which it is created. A subscription for an application and a device is needed to be able to send a push notification.

Though the Engagement Server can contain users without any subscribers and vice versa, a subscription is usually tied to a user using a `reconciliation key`. This key by default is the email address of the user.

### Message Notification Channels

These are different channels through which notifications can be sent from the Engagement Server. Currently SMS, email, push, and pass (for iOS devices only) are the notification channels supported by the Engagement Server. You can send SMS, emails, and passes (for iOS devices only) to the active users from the Engagement Server. You do not need subscriptions to be created to send these notifications.You will need applications and subscription for those to be created first before you can send any push messages through the Engagement Server.

### Engagement Types

These refer to various Engagement modes through, which notifications can be sent to users or subscriptions. You can use each of the Engagement channel types mentioned below to send email, push, SMS, or pass notifications. The various Engagement options available include:

#### Ad hoc Notifications

These are onetime notifications that can be sent to users. For example, when a system will be brought down for maintenance.

#### Campaign Notifications

These are scheduled notifications that are sent to a user segment. For example, sending a 10% discount coupons to users in a zip code from November 15 to November 30.

#### Event Notifications

Events in the Engagement Server are invoked by an external system and are set up to send out notifications when invoked. For example, a low balance event that could be invoked by a banking system to let the customer know of a low balance.

> **_Important:_** For more information refer this video:
