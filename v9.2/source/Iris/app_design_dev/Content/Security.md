                          

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.md) > Device-side Security Guidelines

Device-side Security Guidelines
-------------------------------

This section explains a few guidelines to be followed for Device-side security.

*   For financial applications, all service calls should be marked as _secure_ unless there is a specific requirement to use non-secure calls (by selecting _Secure_ checkbox in service call invoker for Native Applications or the Secure property in the form for Mobile Web applications).
*   Avoid storing personal information or sensitive data in the device datastore. In case, the application demands such information to be stored in the device, appropriate (TripleDes, RSA PKI, and other cryptography APIs) encryption mechanism should be adopted.
*   Enable basic authentication on the VoltMXMiddleware Server environment to avoid unauthorized access. An option is provided by Volt MX Platform for the service calls between device and Volt MX Foundry.
*   Enable _SecureSubmit_ property for all the forms where the user needs to enter sensitive data.
