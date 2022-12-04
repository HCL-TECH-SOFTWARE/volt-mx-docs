                            

You are here: Appendix: General FAQ

Appendix: General FAQ
=====================

This appendix explains a few frequently asked questions (FAQs).

Network Calls
-------------

Can I cancel synchronous network calls?

Canceling synchronous network calls in not a cross platform feature. iPhone platform provides provide a means of canceling synchronous network calls, which is very specific to those platforms.

For example, on iPhone, the developer can choose to show the Cancellation popup. If this option is available, the cancel option pops up from the bottom of the screen allowing the developer to cancel the synchronous service call.

* * *

Can I handle the logic that needs to be executed when a synchronous network call is canceled?

Yes. When a network call is canceled, an error is thrown with _opstatus_ 1021. Because cancellation of synchronous calls is not cross platform, ensure that any logic that is written to handle 1021 _opstatus_ does not have any business logic but displays a proper message to the user.

* * *

Is blocking the UI still an option that I can choose while making a synchronous network call?

The _isBlocking_ parameter is not considered by platforms (except for iPhone). Only way to block the user interface is by explicitly using `showLoadingScreen` API supported by Volt MX Platform.

* * *

What is the advantage of asynchronous network calls compared to the synchronous network calls?

Any network call goes through the following phases:

> 1.  Phase 1: preparing network request
> 2.  Phase 2: making a network connection and wait for response
> 3.  Phase 3: handle the returned response.

In case of synchronous calls, user clicks and touches on any widget of the form are ignored until network call finishes all the three phases. In case of asynchronous network calls, users can execute any logic while the network is busy waiting for the response.

Phase 1 and Phase 2 are handled by Volt MX Platform and Phase 3 a callback function is executed (the function that is passed to the asynchronous network call).

* * *

What are the important considerations for using Asynchronous network calls?

Volt MX  Platform runs all the functions attached to the widgets and the callback for asynchronous network call in a single thread except for some of the system events.

The callback function is queued if any of the functions are in execution. This may lead to the order of execution issues.

Because the user can execute any other functions while waiting for the response of the network call, this may lead to the order of execution issues.

For example, user is performing account deletion logic by invoking a network call asynchronously. During the same time, user may end up updating the same account by executing another network call or a function. This could lead to erroneous data.

For example, user is performing the retrieval of accounts through asynchronous network call and if the user moves to the functionality that depends on the availability of the accounts, then application should display the appropriate message or block the UI till account retrieval is completed.

* * *

When to use asynchronous network calls?

In general, asynchronous calls should be preferred over synchronous calls in all situations. However, user should be aware that order of execution issues may creep in and handle such situations.

When you want to make network calls as part of the following events, use asynchronous network calls:

> *   pre-appinit
> *   post-appinit
> *   transactionalDataLoad
> *   onIdleTimeout
> *   onBackground
> *   onForeground
> *   appmenuevents.

* * *

How to handle error codes thrown by the network calls?

Define handlers for all the error codes including the generic error code. If a particular platform cannot distinguish an error case specifically, the platform throws a generic error.

* * *

Can I click/touch the widgets on a form and trigger an action when a function is getting executed?

No. As explained earlier, because executing the logic corresponding to touches/gestures on the form is run in a single thread.

* * *

Are the asynchronous callbacks (associated with asynchronous network call) executed when a function is under execution?

Yes. All Asynchronous callbacks are queued and executed on the main thread. Hence the callbacks are always guaranteed for execution when the current thread completes its current job.

* * *

Can I control the timeout of a network call?

No. Volt MX Platform does not support changing the timeout period. The default timeout period is 3 minutes.

* * *

Can I make the network calls outside the Volt MX Application Server?

No. Volt MX Platform does not support making network calls outside the Volt MX Application Server.

* * *

Are the network calls authenticated against the Volt MX Application Server?

Yes. The basic form based authentication is used between devices and the Volt MX Application Server. The relevant authentication headers are added to the application code in a transparent way.

* * *

Can the platform support un-trusted certificates when making HTTPS network calls ?

Apple does not allow usage of the private APIs (used to support un-trusted certificates) in the applications as part of application certification process. In platforms like Android, though there are ways to allow un-trusted certificates it is not guaranteed across the family of Android devices. Using un-trusted certificates also leads to security issues. Hence, on Volt MX Platform use of valid and trusted certificates is mandatory for secure (HTTPS) communication.

* * *

What are the certificates that are treated as trusted and work cross-platform?

iPhone

[http://support.apple.com/kb/HT3580](https://discussions.apple.com/thread/2681215)

[http://support.apple.com/kb/HT4415](https://discussions.apple.com/thread/3336519).

Android

Only the certificates issued by CA that are bundled with the application.

For more certificates, see [http://www.microsoft.com](http://www.microsoft.com/).

For uniform cross-platform behavior, select a trusted root certificate which works across the devices.

* * *

How do I disable the widgets (such as text box, text area) or the complete form while a network call is in progress ?

You have the following options:

> *   Use the window.showloadingscreen API to block the UI while the network call is in progress.
> *   Use widget.setenabled method to disable the widgets one after the other. But in this approach, you must remember to enable the widgets after the completion of the network call.

form.destroy API
----------------

When I invoke form.destroy API, will I lose the widgets and data associated with the widgets also?

Yes. When `form.destroy` is invoked, complete form along with its widgets and data associated with the widgets will be lost. It is the developer's responsibility to save any critical, easily non-reproducible data using `ds.save` before invoking `form.destroy` API.

* * *

Can I access the form that was destroyed?

Yes. If you access the form that was destroyed, either by calling form.show or by accessing the widgets on the form or by accessing the properties of the form, the form will undergo through the entire form lifecycle.

* * *

![](resources/prettify/onload.png)
