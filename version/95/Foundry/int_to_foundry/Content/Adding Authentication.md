

Adding Authentication
=====================

In this module, you'll learn how to add a secure login to your application. You can secure your application’s data with a range of authentication providers pre-built into VoltMX Foundry, or connect your own authentication mechanism by configuring a Custom Identity provider.

In this module, you will learn the following:

![](Resources/Images/addauth.png)

Understanding Identity
----------------------

VoltMX Foundry lets you add an authentication layer to your application and control it right from your console. Authentication modes can be controlled from the **Identity** section of your VoltMX Foundry application. As the name suggests, it lets you identify valid users and block intruders.

We support a wide range of Enterprise level connectors and popular Social Identity providers, easily configurable in your VoltMX Foundry console.

### Identity providers supported by VoltMX Foundry

Configuring Identity services in your app eliminates the hassle of coding backend specific authentication mechanisms into your mobile app, and moves the required logic into VoltMX Foundry console. Your app simply needs to invoke a VoltMX Foundry Identity API, and the Identity service hosted on VoltMX Foundry will take care of authenticating your credentials with the chosen backend.

![](Resources/Images/entide.png)

**What VoltMX Foundry does, is the following**:

*   Accepts user credentials and name of Identity service to use for login authentication.
*   Invokes the configured backend with user credentials and retrieves authentication tokens from the backend.
*   Creates a new token such as **MFToken**, and sends it across to the **Mobile Application**.
*   All the following requests from the device send the MFToken to VoltMX Foundry, and VoltMX Foundry adds the corresponding backend tokens to each request.

The video familiarize you with VoltMX Identity and Security features.

### Configuring an Identity Provider

To configure an **Identity** provider for your VoltMX Foundry application, open your VoltMX Foundry application, and navigate to the **Identity** section.

You can choose to:

*   Create a new Identity service from the available adaptors.
    
    OR
    
*   Use one of the adapters configured by other users of your VoltMX Foundry console.

This video will run you through configuring VoltMX Foundry Identity services, connecting to `Google OAuth` as a backend service.

### Getting the best results from your Identity Services

As a bonus to help you on your VoltMX Foundry journey, we have made tweaks on top of standard authentication mechanisms to get you the smoothest and most fruitful user experience. You can:

*   Maintain your own list of user credentials using VoltMX UserStore.
*   Link your Identity services to allow an enhanced Single Sign on experience.
*   Use enhanced profile and user specific information from your login authenticator in the rest of your services with our security filters.

#### Single SignOn Features

With the SSO feature on Identity services, you can link multiple Identity services together. Once Identity’s SSO feature is enabled, multiple mobile applications running on a single device will reuse security tokens from the active session in the device. The feature allows you to deploy multiple applications on a device and eliminates the need for the user to login from each app. For more information, refer to demo video: Single Sign- On for Mobile Apps

#### VoltMX Userstore

Using VoltMX UserStore, you can start adding application users without even setting up a backend authentication mechanism. VoltMX UserStore is a built-in Identity service on VoltMX Foundry. To start using VoltMX UserStore for authentication, use the **Use Existing** button in the **Identity** and select **VoltMX User Repository**. VoltMX UserStore service will be added into your application. Add users to the userstore to complete your process. Publish the service and modify your client-side code to invoke the Identity API from your mobile application to start using this Userstore.

#### Add a user to VoltMX User Repository

The following image displays how to add a user in VoltMX User Repository.

![](Resources/Images/addauserinvoltmxstore.png)

Using Identity Session Data in Integration Services
---------------------------------------------------

Consider a scenario where an organization such as **Sellscart Inc**. wants to provide records based on the access rights of a user logged in. To fulfill this, the Sellscart Admin adds a field named as `permissions` in the **Login** mechanism. The subsequent requests require a user to provide the `permissions` value, before the right set of records is returned. Using the identity security field, the scenario can be handled with absolutely no change in the client’s mobile code.

VoltMX Foundry allows you to choose the response fields from the Identity service that you wish to use in further service requests, and add them into your request body automatically. This feature reduces unnecessary code additions into your client app as well as adds a level of protection to your service calls, by restricting any sensitive authentication data from being sent to the client device.

#### How can I use this feature?

While creating a service request, create a request parameter with `Value` field set to `identity`. Provide the path to your identity parameter using a dot notation.

For example, if your Identity service response is :

```
{
	"profile": {
		"email": "john.smith@voltmx.com",
		"userid": "107616287583430495861",
		"firstname": "John",
		"lastname": "Smith"
	}
}
```

To access the firstname, use `profile.firstname` in the field provided.

Using your new Identity Service in a Mobile Application
-------------------------------------------------------

Now that your application is secured, add the code snippet for calling the identity service into your client side application, you are ready to go!  
VoltMX Foundry makes it easy to get your application code ready to go by providing a code snippet for each service you create. To access the code snippet for your service, use the service menu for the service, and choose `Sample code`. We provide sample code for use in all supported SDKs, including VoltMX Iris, iOS, Android and PhoneGap.

**Exercise:**  
\- Extend the authentication process for the News and Weather application by adding Facebook integration into your application.  
\- If you face any issues completing this exercise, take a sneak peek at the updated News and Weather application available [here](https://github.com/voltmx/News-and-Weather).

For more information, refer to [Identity Services](https://docs.voltmx.com/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.md#Identity.html).
