                          

Volt MX  Messaging Service
======================

Volt MX  Messaging Services (VMS) provides generic push notifications service that allows you to send push notifications to mobile devices running different platforms (for example iPhone, Android, BlackBerry, and Windows.)

New Features
------------

The following are the key features introduced in **VoltMX Messaging Service 5.6.2 GA**:

1.  Short Message Service (SMS) channel
    1.  SMS channel is added to delivery channel in VMS that already has the PUSH channel.
    2.  Ability to send adhoc and scheduled SMS.
    3.  Ability to send SMS to specific audience using segmentation and also the flexibility to use existing segments (created for PUSH) for SMS messages.
    4.  Integrated SMS to VMS Campaign Management. SMS messages can be added to running campaigns, which allows a user to deliver PUSH and SMS communications in one attempt.
    5.  Ability to use SMS with Event Management.
    6.  Ability to support multiple SMS Gateways:
        1.  Twilio
        2.  Nexmo
        3.  Clickatell
    7.  Ability to broadcast SMS for all users in a single request.
    8.  Detailed graphical reports about SMS sent and opened.
2.  Email Channel
    1.  The email channel is added to the delivery channel in VMS that already has the PUSH channel.
    2.  Ability to send adhoc and scheduled emails.
    3.  Ability to send emails to specific audience using segmentation and also the flexibility to use existing segments (created for PUSH) for email messages.
    4.  Integrated emails to VMS Campaign Management. Emails can be added to running campaigns, which allows a user to deliver PUSH, SMS, and email communications in one attempt.
    5.  Ability to use emails with Event Management.
    6.  Ability to broadcast emails for all users in a single request.
    7.  Detailed graphical reports about emails sent and opened.
3.  Geolocation updates. Geolocation is disintegrated with segments that allow creation of geofences and can be mapped to segment criteria.
4.  Minor UI changes for better accessibility.
5.  Bug fixes.

Known Issues
------------

List of know issues in **VoltMX Messaging Service 5.6.2 GA**:

  
| Defect ID | Description | Platform / Component |
| --- | --- | --- |
| DEF232 | Not able to type in Template box after selecting Personalization attribute | VMS |
| DEF416 | Proper error message should display when user sends Invalid Push Message Payload through service | VMS |
| DEF359 | Getting "invalid Request", when the user tries to save some data in a form from which a new tab has been opened | VMS |
| DEF296 | While creating basic email template with text content having lengthy lines in Body / Header, text exceeds the layout border in the UI | VMS |
| DEF 298 | Plain Text tab is not working properly and the UI gets disturbed if in code a template of type email, large HTML content is entered | VMS |
| DEF427 | VMS server behind proxy is not working through installer with Jboss 6.2 out of the box. Need to manually add proxy-port=”port-number” under both http and https connector tags in standlone.xml to make it work | VMS |
| DEF237 | Reports UI issues: Number of pushes opened and targeted audience members are both squeezed in a small area towards the ends; user needs to hover using mouse to view the text. if no data exists a message such as "No data found" or something similar can be displayed instead of blank spaces | VMS |
