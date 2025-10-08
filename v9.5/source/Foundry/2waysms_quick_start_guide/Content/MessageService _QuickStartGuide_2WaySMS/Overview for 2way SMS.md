                          

2 Way SMS Quick Start Guide: Overview

Overview
========

You engage in conversation with customers by sending and receiving an SMS message. To run a 2-way SMS service, users need to receive inbound SMS messages using the short codes and the long codes. You need to set the short codes and the long codes by gateway and SMS API providers, such as Nexmo, Twilio, and Clickatell.

The QuickStart guide explains how to set up Engagement services to send 2-way SMS.

The guide assumes:

1.  The user has access to the Engagement server on the cloud and provisioned to use the cloud.
2.  The user has account set up with one or more of the SMS API providers (Nexmo, Twilio, and Clickatell) and purchased the long and short codes. For more information, refer to:
    
    [https://www.nexmo.com/](https://www.nexmo.com/)
    
    [https://www.twilio.com/](https://www.twilio.com/)
    
    [https://www.clickatell.com/](https://www.clickatell.com/)
    

The following steps are explained in the document:

1.  Configuring the SMS settings of the Engagement server to send and receive 2-way SMS messages.
2.  Triggering an ad hoc SMS message using the long code you received from the providers.
3.  Receiving an inbound message from the user, routing it to the server hosting the service and returning the response message back to the user.
4.  A backend REST service is setup to accept the request from Engagement server and provide the response.
    
    For more information on how to add 2-way SMS functionality to your Volt MX Foundry Engagement server, see [video tutorial](https://youtu.be/cxj8NkkENws)
