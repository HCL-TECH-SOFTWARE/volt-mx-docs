
User Guide: Benefits of using Volt MX Identity

# Identity

Volt MX Foundry identity services help you secure your application by adding an authentication layer.

You can set up an identity service based on the type of the users who are allowed to access your application. To restrict access to your company's internal audience, use Microsoft Active Directory authentication. To allow access of your application to a larger audience, you can use enterprise identity providers (Microsoft Active Directory, Volt MX SAP Gateway, Open LDAP, OAuth 2.0, Salesforce, Custom Identity Service, SAML 2.0, Siteminder ) and social identity providers (Google, Linkedin, Instagram, Amazon, Microsoft, Yahoo, BOX, Facebook.)

## Benefits of using Volt MX Identity

- Volt MX Foundry’s Identity Service User Interface eliminates coding backend authentication mechanisms into your app.
- All the auth token handling is done at Volt MX Foundry layer to make applications more secure.

## Workflow of Volt MX Identity Services

The following workflow describes the various stages of Identity services:

![](Resources/Images/VoltMXIdentityWorkflow_677x313.png)

## Supported Identity Providers

Volt MX Foundry Identity Services support connectivity to the following different identity providers.

<table>
  <tr>
    <th>Enterprise Identity Providers</th>    
    <th>Social Identity Providers <br>(OAuth 2.0)</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li><a href="Identity2_MS_AD.html#microsoft-active-directory-identity-service">Microsoft Active Directory</a></li>        
        <li><a href="Identity3_Salesforce.html#salesforce-identity-service">Salesforce</a></li>        
        <li><a href="Identity4_LDAP.html#open-ldap-identity-service">Open LDAP</a></li>        
        <li><a href="Identity5_SAML.html#saml-2-0-identity-service">SAML 2.0</a></li>        
        <li><a href="Identity6_SiteMinder.html#siteminder-identity-service">Siteminder</a></li>        
        <li><a href="Identity7_VoltMX_SAP.html#sap-gateway-identity-service">VoltMX SAP Gateway</a><br>Only available if you have SAP Gateway services in your account</li>        
        <li><a href="Identity12_VoltMXUR.html#user-repository-identity-service">VoltMX User Repository (User Store)</a>
          <br/>(Support is deprecated from V8 SP4 AprilFP onwards)
          <br/>(The Volt MX User Repository identity service is available in every Volt MX Foundry account by default. You are allocated only a single instance of the Volt MX User Repository for a single Volt MX Foundry account. Volt MX User Repository stores meta-data of all users in the account, such as Email, First Name, Last Name, and Password, and Groups.)
        </li>        
        <li><a href="UserRepositoryIdentityService.html">User Repository Identity Service</a>
          <br/>(You are allocated to create multiple instances in a one Volt MX Foundry Account. User Repository stores meta-data of users in the account, such as Email, First Name, Last Name, and Password, and Groups.)
        </li>        
        <li><a href="Identity8_VoltMX_Custom.html#custom-identity-service">Volt MX Custom Identity Service</a></li>        
        <li><a href="Identity9_Facebook.html#facebook-identity-service">Facebook</a></li>        
        <li><a href="Identity10_VoltMX_OAuth2.html#foundry-oauth-2-0-identity-service">Volt MX Foundry OAuth 2.0</a></li>        
        <li><a href="Identity11_OAuth.html#oauth-provider-identity-service">OAuth Provider</a></li>        
        <li><a href="Overview_AppSSO.html#AppSSOoverview">Application SSO</a></li>
      </ul>
    </td>    
    <td>
      <ul>
        <li><a href="Identity13_Social.html#social-identity-providers">Social identity providers</a>, including:<br/>
         <br/> Google <br/>         
          <br/> Linkedin <br/>         
          <br/> Instagram <br/>         
          <br/> Amazon <br/>         
          <br/> Microsoft <br/>         
          <br/> Yahoo <br/>         
          <br/> BOX <br/>         
          <br/> Facebook <br/>
        </li>
      </ul>
    </td>
  </tr>
</table>
