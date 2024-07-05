 

VoltMX Identity Service Error Codes
=================================

The following are the error codes for VoltMX Identity services. Each error code table consists of the error message, description of the error, severity, way to reproduce the error, error resolution and point of contact.

 
| \-1:FAILURE\_UNCATEGORIZED ||
|-|-|
| **MESSAGE** | Uncategorized Failure |
| **DESCRIPTION** | The error/failure is not available in the error/failure list |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | Review the scenario and verify all the details |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-2:FAILURE\_INVALID\_TENANT ||
|-|-|
| **MESSAGE** | Invalid Auth Service Tenant |
| **DESCRIPTION** | The tenant information is wrong. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | The exception occurs when other internal components (like middleware, portal etc.) try to communicate with Auth that provides wrong tenant details. |
| **RESOLUTION** | Verify environment configurations |
| **POINT OF CONTACT** | NA |

* * *

 
| \-3:FAILURE\_INVALID\_CREDENTIALS ||
|-|-|
| **MESSAGE** | Invalid User/App Credentials |
| **DESCRIPTION** | The error is thrown when the username/password or app key/secret provided is wrong. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide invalid username/password or app key/secret |
| **RESOLUTION** | Provide valid username/password or app key/secret |
| **POINT OF CONTACT** | NA |

* * *

 
| \-4:FAILURE\_INVALID\_USER\_CREDENTIALS ||
|-|-|
| **MESSAGE** | Invalid User Credentials |
| **DESCRIPTION** | The error is thrown when the user name or password provided is wrong |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Provide invalid credentials |
| **RESOLUTION** | Provide valid credentials |
| **POINT OF CONTACT** | NA |

* * *

 
| \-5:FAILURE\_INVALID\_TOKEN ||
|-|-|
| **MESSAGE** | Token invalid |
| **DESCRIPTION** | Wrong token is passed while invoking a service |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Invoke a service with wrong token |
| **RESOLUTION** | Use valid token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-6:FAILURE\_EXPIRED\_TOKEN ||
|-|-|
| **MESSAGE** | Token expired |
| **DESCRIPTION** | Expired token is passed while invoking Auth service |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Invoke service with expired token |
| **RESOLUTION** | Use non-expired token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-7:FAILURE\_INVALID\_PROVIDER ||
|-|-|
| **MESSAGE** | Invalid Provider |
| **DESCRIPTION** | The exception occurs when a wrong Provider name is specified in Login Request |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Specify wrong Provider name in Log-in Request |
| **RESOLUTION** | Enter a valid Provider name |
| **POINT OF CONTACT** | NA |

* * *

 
| \-8:FAILURE\_USER\_NOT\_ACTIVE ||
|-|-|
| **MESSAGE** | This User is currently inactive |
| **DESCRIPTION** | The exception Occurs when log-in request is made with a user who is inactive |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Make log-in request with inactive user |
| **RESOLUTION** | Convert user to active or try login with active user |
| **POINT OF CONTACT** | NA |

* * *

 
| \-9:FAILURE\_INVALID\_APP\_CREDENTIALS ||
|-|-|
| **MESSAGE** | Invalid App Credentials |
| **DESCRIPTION** | The exception occurs when a user tries to fetch applications by providing wrong details (App key or App secret or App Id) |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Fetch applications by providing wrong details (App key or App secret or App Id) |
| **RESOLUTION** | Verify App key (or) App secret (or) App Id used in fetching applications |
| **POINT OF CONTACT** | NA |

* * *

 
| \-12:FAILURE\_UNSUPPORTED ||
|-|-|
| **MESSAGE** | Unsupported Operation |
| **DESCRIPTION** | The exception occurs when a user:<br>*   Attempts to refresh back end token but provider does not allow it<br>*   Attempts decoding the install info of JWT On-premise<br>*   Attempts to create license info for JWT api On-premise<br>*   Requests unsupported operation on License. (Supported operations:activate, check and update)<br>*   Attempts to exchange license claims on cloud|
| **SEVERITY** | HIGH ||
| **REPRODUCE THE ERROR** | *   Try to refresh backend token<br>*   Try to decode install info of JWT On-premise<br>*   Try to create a license info for JWT api On-premise<br>*   Request unsupported operation on License.<br>*   Try to exchange license claims on cloud.<br>|
| **RESOLUTION** | Stop requesting above unsupported operations |
| **POINT OF CONTACT** | NA |

* * *

 
| \-13:FAILURE\_INVALID\_GRANT\_TYPE ||
|-|-|
| **MESSAGE** | Invalid Grant Type |
| **DESCRIPTION** | The exception occurs when a user attempts to authenticate by providing invalid grant type. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Attempt to authenticate by providing invalid grant type |
| **RESOLUTION** | Provide valid grant type (CLIENT\_CREDENTIALS/ EXTENSION/ PASSWORD) |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-14:FAILURE\_EXTERNAL\_IDP ||
|-|-|
| **MESSAGE** | Configured IdP Service Unavailable |
| **DESCRIPTION** | The exception occurs when an application fails to fetch the user profile from OAuth2 backend. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Fetch user profile data using invalid token. |
| **RESOLUTION** | Use valid token to fetch user profile from OAuth2 backend |
| **POINT OF CONTACT** | NA |

* * *

 
| \-15:FAILURE\_NO\_SYSTEM\_CLAIMS ||
|-|-|
| **MESSAGE** | Error Reading System Claims |
| **DESCRIPTION** | The exception occurs when null Access control information is received after exchanging OrgAuth or LicenseAuth claims |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Exchange a claim which gives null Access control information |
| **RESOLUTION** | Exchange a proper claim |
| **POINT OF CONTACT** | NA |

* * *

 
| \-17:FAILURE\_INVALID\_OPERATION ||
|-|-|
| **MESSAGE** | Invalid Operation |
| **DESCRIPTION** | The exception occurs while exchanging rolens for accounts.auth tenant |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-18:FAILURE\_USER\_NOT\_AUTHORIZED\_FOR\_TENANT ||
|-|-|
| **MESSAGE** | User not authorized for tenant |
| **DESCRIPTION** | The exception occurs when a user does not have the permission to request operation on a resource. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Perform an operation on a resource when a user does not have access rights. |
| **RESOLUTION** | Grant access rights to the user on a resource. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-19:FAILURE\_MALFORMED\_INPUT ||
|-|-|
| **MESSAGE** | Malformed input |
| **DESCRIPTION** | The exception occurs on finding malformed input while validating and decoding the install Info JWT. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-20:FAILURE\_EXTERNAL ||
|-|-|
| **MESSAGE** | Failure from external IdP |
| **DESCRIPTION** | The exception occurs:<br>*   While parsing response from Custom IdP Provider<br>*   While refreshing access token with IdP provider<br>*   During token exchange with IdP provider|
| **SEVERITY** | HIGH ||
| **REPRODUCE THE ERROR** | Pass an invalid auth code / refresh token to IdP provider |
| **RESOLUTION** | Use valid auth code / refresh token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-23:FAILURE\_NO\_TOKEN\_FOUND ||
|-|-|
| **MESSAGE** | No tokens were found |
| **DESCRIPTION** | The exception occurs when no data is found for a given provider in session object for given Session Id. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | NA |

* * *

 
| \-25:FAILURE\_EXCEPTION ||
|-|-|
| **MESSAGE** | Exception occurred |
| **DESCRIPTION** | The exception occurs when something goes wrong while:<br>*   Creating either a User Profile or a Claims Token<br>*   Fetching user profile (or) provider details (or) tenant properties<br>|
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | Verify tenant / provider / user details |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-26:FAILURE\_PROVIDER\_EXIST\_FOR\_APP ||
|-|-|
| **MESSAGE** | Providers exist for app, please pass provider and user credentials info |
| **DESCRIPTION** | The exception occurs when something goes wrong while dealing with claims token. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Use wrong provider details or user credential info. |
| **RESOLUTION** | Verify provider details and user credential info. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-27:FAILURE\_PROVIDER\_NOT\_EXIST\_IN\_APP\_SERVICES ||
|-|-|
| **MESSAGE** | Given provider does not exist in app services. |
| **DESCRIPTION** | The exception occurs while fetching services with invalid provider details. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Fetch services with invalid provider details. |
| **RESOLUTION** | Check if provider is attached to App. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-28:FAILURE\_CONSTRAINTS\_VALIDATION ||
|-|-|
| **MESSAGE** | Constraints validation Failed |
| **DESCRIPTION** | The exception occurs when something goes wrong while creating an app or a service. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Try to create:<br>*   An app with invalid ID/Name/Desc<br>*   A service with invalid service name|
| **RESOLUTION** | Provide valid details for app/service |
| **POINT OF CONTACT** | NA |

* * *

 
| \-31:FAILURE\_GATEWAY\_ERR\_TOKEN\_DESER ||
|-|-|
| **MESSAGE** | Invalid Token:De-serialization error |
| **DESCRIPTION** | The exception occurs when something goes wrong during token validation |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Use an invalid token to invoke service |
| **RESOLUTION** | Use a valid token to invoke service |
| **POINT OF CONTACT** | NA |

* * *

 
| \-32:FAILURE\_GATEWAY\_METADATA\_ERR ||
|-|-|
| **MESSAGE** | Token Validation Error:Could not get metadata. |
| **DESCRIPTION** | The exception occurs when something goes wrong while invoking a service that passes some token. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Use invalid token while invoking services |
| **RESOLUTION** | Use a valid token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-35:FAILURE\_GATEWAY\_TOKEN\_EXPIRED ||
|-|-|
| **MESSAGE** | Invalid Token:Token Expired |
| **DESCRIPTION** | The exception occurs when something goes wrong while invoking an auth service by passing some token. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Invoke a service with an expired token |
| **RESOLUTION** | Use a valid token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-36:FAILURE\_GATEWAY\_ISSUER\_NOT\_TRUSTED ||
|-|-|
| **MESSAGE** | Invalid Token:Issuer not trusted for tenant <tenant>, Token Issuer:< Token Issuer >, Trusted Issuer is <Trusted issuer> |
| **DESCRIPTION** | The exception occurs if the token issuer is not trusted |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Try to get token from an untrusted issuer. |
| **RESOLUTION** | Get token from a trusted issuer (i.e. the trusted auth tenant). |
| **POINT OF CONTACT** | NA |

* * *

 
| \-37:FAILURE\_GATEWAY\_GET\_TRUSTED\_AUTH\_TOKEN ||
|-|-|
| **MESSAGE** | Exception in getting Get Trusted Auth Token |
| **DESCRIPTION** | The exception occurs while checking permissions on URL/Resource (http://\*\*\*/serivices/<service\_id>/<operation\_id>). |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-40:FAILURE\_GATEWAY\_INVALID\_RES\_PATH ||
|-|-|
| **MESSAGE** | InvalidResourcePath:null or empty resource path |
| **DESCRIPTION** | The exception occurs if the gateway lib receives invalid resource URL (from middleware/Sync) while checking permission of resource. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-41:FAILURE\_GATEWAY\_INVALID\_RESOURCE ||
|-|-|
| **MESSAGE** | Invalid resource namespace/path. |
| **DESCRIPTION** | The exception occurs if the gateway lib receives invalid name space for a resource while checking resource permission. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-42:FAILURE\_GATEWAY\_INVALID\_AUTH\_URL ||
|-|-|
| **MESSAGE** | Auth Service Endpoint not set properly. Input:%s |
| **DESCRIPTION** | The exception occurs when gateway lib receives an invalid Auth URL (from middleware/Sync). |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-43:FAILURE\_GATEWAY\_INVALID\_TENANT ||
|-|-|
| **MESSAGE** | Tenant Name is null or empty. |
| **DESCRIPTION** | The exception occurs when gateway lib receives tenant ID as null or empty (from middleware/Sync). |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA. |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-44:FAILURE\_GATEWAY\_INVALID\_MAP ||
|-|-|
| **MESSAGE** | Params map is null. |
| **DESCRIPTION** | The exception occurs when gateway lib receives invalid gateway parameters (from middleware /Sync) |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-45:FAILURE\_GATEWAY\_INVALID\_ACCOUNT\_ID ||
|-|-|
| **MESSAGE** | Account ID is null or empty |
| **DESCRIPTION** | The exception occurs when gateway lib receives invalid account ID in gateway parameters (from middleware/Sync) |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA (Internal error) |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-47:FAILURE\_GATEWAY\_TIMEOUT ||
|-|-|
| **MESSAGE** | Back end service request timed out |
| **DESCRIPTION** | Auth did not receive response from back end in defined time.<br>The exception occurs when Auth requests for:<br>*   Getting roles of users in accounts<br>*   Exchanging claims token with back-end (Salesforce/Google/Microsoft AD etc.)<br>*   Getting back-end token (Salesforce/Google/Microsoft AD etc.)<br>*   Importing users/groups from AD|
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | When Auth invokes a request to backend, delay the response from back end. |
| **RESOLUTION** | Make sure back end server responds in defined time |
| **POINT OF CONTACT** | NA |

* * *

 
| \-48:FAILURE\_BAD\_REQUEST ||
|-|-|
| **MESSAGE** | Invalid input |
| **DESCRIPTION** | The exception occurs if the request sent by the client (mf console/accounts) to the Auth is malformed. Request could be to create/update/delete app/role/provider/environment/tenant properties etc. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Send request to Auth to create/update/delete:<br>*   App with invalid app ID<br>*   Role with invalid role ID<br>*   Provider with invalid provider ID/Name etc.|
| **RESOLUTION** | Check request parameters |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-49:FAILURE\_GATEWAY\_UNAUTHORIZED ||
|-|-|
| **MESSAGE** | User is unauthorized to perform the operation |
| **DESCRIPTION** | The exception occurs when gateway lib receives request for backend:<br>*   Log-in with invalid credentials<br>*   Metadata with invalid issuer uri/tenant context|
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Send request to gateway with invalid data to login or fetch meta-data from backend. |
| **RESOLUTION** | Verify credentials or issuer uri or tenant details etc. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-50:FAILURE\_PROVIDER\_COMMUNICATION ||
|-|-|
| **MESSAGE** | Error communicating with provider |
| **DESCRIPTION** | The exception occurs when something goes wrong while authenticating user against a Provider. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Configure provider with wrong settings |
| **RESOLUTION** | Verify provider configurations |
| **POINT OF CONTACT** | NA |

* * *

 
| \-51:FAILURE\_ADMISSION\_DISALLOWED ||
|-|-|
| **MESSAGE** | User creation disallowed by Provider Admission Policy |
| **DESCRIPTION** | For on-premise setup, user creation/updating failed post successful accounts.auth login because AdmissionType is Post\_Login and ProviderAdmissionPolicy is pre\_login\_approval\_needed |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-52:FAILURE\_GATEWAY\_ERR\_GET\_SECURITY\_ATTRIBUTES ||
|-|-|
| **MESSAGE** | Exception in fetching security attributes |
| **DESCRIPTION** | The exception occurs when gateway lib receives request to fetch security attributes with invalid Auth token. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Fetch security attributes with an invalid Auth token |
| **RESOLUTION** | Pass a valid Auth token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-53:FAILURE\_GATEWAY\_ERR\_GET\_USER\_ATTRIBUTES ||
|-|-|
| **MESSAGE** | Exception in fetching user attributes. |
| **DESCRIPTION** | The exception occurs when gateway lib receives request to fetch user attributes with invalid Auth token. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Fetch user attributes with an invalid Auth token |
| **RESOLUTION** | Pass a valid Auth token |
| **POINT OF CONTACT** | NA |

* * *

 
| \-55:FAILURE\_SESSION\_INVALID ||
|-|-|
| **MESSAGE** | Session Invalid. |
| **DESCRIPTION** | The exception occurs when session data is not retrieved for a given session ID from backend. (backend could be accounts as well). |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Make a request to fetch session data with invalid session (expired) |
| **RESOLUTION** | Pass a valid session ID |
| **POINT OF CONTACT** | NA |

* * *

 
| \-56:FAILURE\_BACKEND\_TOKENS\_TOO\_LARGE ||
|-|-|
| **MESSAGE** | Back-end Token(s) are too large. |
| **DESCRIPTION** | The exception occurs in backend response if the size of User Data/User Attributes/Security Attributes is > 64 kb. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Request the back-end to fetch User Data/User Attributes/Security Attributes with size >64 kb |
| **RESOLUTION** | Make sure that backend does not fetch User Data/User Attributes/Security Attributes with size >64 kb |
| **POINT OF CONTACT** | NA |

* * *

 
| \-57:FAILURE\_GATEWAY\_ERR\_GET\_PROFILE ||
|-|-|
| **MESSAGE** | Exception in fetching User Profile. |
| **DESCRIPTION** | Failed to fetch user profile because the token has expired (or invalid token issuer url). |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Fetch user profile with invalid token/issuer URL |
| **RESOLUTION** | Verify token/issuer URL |
| **POINT OF CONTACT** | NA |

* * *

 
| \-58:FAILURE\_GATEWAY\_ERR\_LOGIN ||
|-|-|
| **MESSAGE** | Log-in failure. |
| **DESCRIPTION** | Log-in request made to the gateway lib fails due to invalid login parameters (APP\_KEY/ APP\_SECRET/USERID/PASSWORD/PROVIDERID). |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Make login request to gateway lib with invalid login parameters. |
| **RESOLUTION** | Verify login parameters. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-59:FAILURE\_GATEWAY\_ERR\_LOGOUT ||
|-|-|
| **MESSAGE** | Log-out failure. |
| **DESCRIPTION** | Log-out request made to gateway lib fails due to invalid Auth token. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Make log-out request to gateway lib with invalid token. |
| **RESOLUTION** | Verify Auth token. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-60:FAILURE\_GATEWAY\_INVALID\_RES\_PERM ||
|-|-|
| **MESSAGE** | Invalid resource permission. |
| **DESCRIPTION** | The exception occurs when client makes a request (tid.svctype/myresources/myresource1) to Gateway lib to access a resource. Gateway lib validates if the resources are permitted to give access. If the validation fails, then the error occurs. Requested permission can be GET/PUT/POST etc. or even custom permission such as Manage/Customize. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Access a resource which has no access permissions . |
| **RESOLUTION** | Provide access permissions. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-62:FAILURE\_COMMUNICATION\_ACTIVE\_DIRECTORY ||
|-|-|
| **MESSAGE** | Could not connect to Active directory. |
| **DESCRIPTION** | The exception occurs when AD is down, but the user tries to authenticate against it. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Bring AD down and try to authenticate. |
| **RESOLUTION** | Make sure AD is up and running. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-63:FAILURE\_INVALID\_DOMAIN ||
|-|-|
| **MESSAGE** | Invalid Active Directory Domain. |
| **DESCRIPTION** | The exception occurs if the configuration of AD domain name is wrong. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Use wrong domain name while configuring AD |
| **RESOLUTION** | Provide correct AD domain name |
| **POINT OF CONTACT** | NA |

* * *

 
| \-64:FAILURE\_SSO\_NOT\_ENABLED\_FOR\_APP\_PROVIDER ||
|-|-|
| **MESSAGE** | SSO is not enabled for app on associated provider. |
| **DESCRIPTION** | The exception occurs when a user tries to perform SSO login when SSO is not enabled for the app. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Try to do SSO login when SSO is not enabled for the app. |
| **RESOLUTION** | Enable SSO for the app. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-65:FAILURE\_INVALID\_INPUT ||
|-|-|
| **MESSAGE** | Some of the input parameters provided are invalid. |
| **DESCRIPTION** | The exception occurs when invalid input parameter is passed while:<br>*   Fetching Auth Provider details using provider name<br>*   Changing password (if new password does not match with regular strong password constraints)<br>*   Fetching Account Users if account GUID passed as null|
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Pass invalid input parameters while fetching Account users/ Auth Provider details/ changing password. |
| **RESOLUTION** | Make sure valid input parameters are passed |
| **POINT OF CONTACT** | NA |

* * *

 
| \-67:FAILURE\_NO\_USER ||
|-|-|
| **MESSAGE** | No users found |
| **DESCRIPTION** | User is inactive/unavailable in AD, but tried to authenticate with the same user details. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Try to authenticate using inactive/deleted user in AD. |
| **RESOLUTION** | Activate the user in AD. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-68:FAILURE\_TOKEN\_ENDPOINT\_OAUTH2 ||
|-|-|
| **MESSAGE** | "Failed while invoking token endpoint." + "Recheck token endpoint, Client Authentication scheme and client secret" |
| **DESCRIPTION** | The exception occurs while fetching OAUTH2 token. OAUTH2 endpoint is down (or) invalid client secret (or) client authentication scheme constraints. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Fetch token by bringing down OAUTH2 endpoint or using invalid client secret/ authentication scheme |
| **RESOLUTION** | Verify client secret, authentication scheme, and endpoint connectivity. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-69:FAILURE\_PROFILE\_ENDPOINT\_OAUTH2 ||
|-|-|
| **MESSAGE** | "Failed while invoking profile endpoint. " + "Please check its reachable and access is allowed in the OAuth app". |
| **DESCRIPTION** | The exception occurs while fetching profile information. Either the profile endpoint is down or an invalid OAuth token was used. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Fetch profile info by bringing down the profile endpoint or using invalid oauth token. |
| **RESOLUTION** | Verify oauth token and profile endpoint. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-70:FAILURE\_MULTIPLE\_USERS ||
|-|-|
| **MESSAGE** | Multiple users with same user name are found. |
| **DESCRIPTION** | The exception occurs if multiple users are found for a given user name in AD. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Create multiple users with same user name in AD and try to login with that user name. |
| **RESOLUTION** | Make sure that only one user is available in AD for a given user name. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-71:FAILURE\_INVALID\_PROVIDER\_OR\_CREDENTIALS ||
|-|-|
| **MESSAGE** | Invalid Provider Configuration or User Credentials. |
| **DESCRIPTION** | The exception occurs when a user tries to login against Salesforce endpoint either due to invalid credentials or wrong provider configuration. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Log-in to Salesforce endpoint with invalid credentials or wrong provider configuration. |
| **RESOLUTION** | Check provider configuration and user credentials |
| **POINT OF CONTACT** | NA |

* * *

 
| \-72:FAILURE\_INVALID\_CREDENTIALS\_AD ||
|-|-|
| **MESSAGE** | Wrong Username/Password is provided for AD connection. |
| **DESCRIPTION** | The exception occurs when a user logs in to AD with wrong username/password. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Log-in to AD with wrong user credentials. |
| **RESOLUTION** | Use valid user credentials. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-73:FAILURE\_INVALID\_CREDENTIALS\_OPENLDAP ||
|-|-|
| **MESSAGE** | Wrong Username/ Password is provided for OpenLDAP connection |
| **DESCRIPTION** | The exception occurs when a user logs in to OpenLDAP endpoint using wrong username/password. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Log-in to Open LDAP endpoint using wrong user credentials |
| **RESOLUTION** | Use valid user credentials |
| **POINT OF CONTACT** | NA |

* * *

 
| \-74:FAILURE\_INVALID\_CONFIGURATION\_AD ||
|-|-|
| **MESSAGE** | Cannot connect to AD. Please ensure correct URL and correct distinguished name are provided for the domain. |
| **DESCRIPTION** | The exception occurs when a user logs in to AD using either invalid URL or domain name. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Log-in to AD with invalid URL or domain name. |
| **RESOLUTION** | Use valid URL and domain name |
| **POINT OF CONTACT** | NA |

* * *

 
| \-75:FAILURE\_INVALID\_CONFIGURATION\_OPENLDAP ||
|-|-|
| **MESSAGE** | Cannot connect to OpenLDAP. Please ensure correct URL, DN, and Federation ID are provided for the domain. |
| **DESCRIPTION** | The exception occurs when a user logs in to OpenLDAP using either invalid URL, domain name, or federation ID. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Log-in to AD using invalid URL, domain name, or federation ID |
| **RESOLUTION** | Use correct URL, domain name, and federation ID. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-76:FAILURE\_INTERNAL\_EXCEPTION\_AD ||
|-|-|
| **MESSAGE** | Internal exception occurred while authenticating to AD. |
| **DESCRIPTION** | The exception occurs when something goes wrong internally while authenticating with AD. The error does not fall under FAILURE\_INVALID\_CREDENTIALS\_AD and FAILURE\_INVALID\_CONFIGURATION\_AD. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-77:FAILURE\_INTERNAL\_EXCEPTION\_OPENLDAP ||
|-|-|
| **MESSAGE** | Internal exception occurred while authenticating to OpenLDAP. |
| **DESCRIPTION** | The exception occurs when something goes wrong internally while authenticating with OpenLDAP. The error does not fall under FAILURE\_INVALID\_CREDENTIALS\_OPENLDAP and FAILURE\_INVALID\_CONFIGURATION\_OPENLDAP. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | NA |

* * *

 
| \-80:FAILURE\_INVALID\_DN ||
|-|-|
| **MESSAGE** | Unable to parse DN or Invalid Domain |
| **DESCRIPTION** | The exception occurs when something goes wrong while making test connection against LDAP endpoint due to invalid domain name. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Provide invalid domain name while authenticating against LDAP endpoint. |
| **RESOLUTION** | Verify domain name. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-81:FAILURE\_TEST\_CONNECTION\_NOT\_SUPPORTED ||
|-|-|
| **MESSAGE** | Test Connection is not supported for this provider. |
| **DESCRIPTION** | In VoltMX Foundry console, while defining identity service, user can test connection. The error occurs if the backend does not allowed the user to test connection. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | NA |

* * *

 
| \-82:FAILURE\_DIAGNOSTICS ||
|-|-|
| **MESSAGE** | Error in collecting diagnostic information. |
| **DESCRIPTION** | The exception occurs when something goes wrong while collecting the diagnostic data like timestamp, OS, CPU, free memory, processor count, Java details, time zone, and MF version etc. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | NA |

* * *

 
| \-83:FAILURE\_AUTHORIZATION\_CODE\_MISSING ||
|-|-|
| **MESSAGE** | Authorization code is missing in request body. |
| **DESCRIPTION** | The exception occurs in OAuth2.0 flow, if authorization code is missing in a request sent by client to the Authorization server to get access token. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Get access token without passing authorization code. |
| **RESOLUTION** | Pass authorization code. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-84:FAILURE\_REFRESH ||
|-|-|
| **MESSAGE** | Failed to refresh the token. Check if refresh is supported by backend. |
| **DESCRIPTION** | The exception occurs when something goes wrong while refreshing/fetching the access token using the refresh token. The refresh token is invalid or backend does not support refresh. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Try to refresh/fetch the access token using invalid refresh token. |
| **RESOLUTION** | Use valid refresh token. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-86:FAILURE\_LICENSE\_NOT\_ACTIVATED ||
|-|-|
| **MESSAGE** | License is not activated. |
| **DESCRIPTION** | The exception occurs when account invokes license APIs but the license is not activated. |
| **SEVERITY** | CRITICAL |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-87:FAILURE\_LICENSE\_ALREADY\_ACTIVATED ||
|-|-|
| **MESSAGE** | License is already activated. Cannot activate more than once. |
| **DESCRIPTION** | The exception occurs when a user tries to activate the license that is already activated. |
| **SEVERITY** | LOW |
| **REPRODUCE THE ERROR** | Try to activate the license which is already activated. |
| **RESOLUTION** | Do not try to activate the license which is already activated. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-88:FAILURE\_LICENSE\_PUBLIC\_KEY\_ABSENT\_IN\_REQUEST ||
|-|-|
| **MESSAGE** | No public key found in the request. |
| **DESCRIPTION** | The exception occurs when an account invokes license API without providing the public key. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-89:FAILURE\_LICENSE\_INFO\_ABSENT\_IN\_REQUEST ||
|-|-|
| **MESSAGE** | No license info found in request. |
| **DESCRIPTION** | The exception occurs when an account invokes license API without providing the license information. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-90:FAILURE\_LICENSE\_TAMPERED\_KEY ||
|-|-|
| **MESSAGE** | Public key is found to be tampered. |
| **DESCRIPTION** | The exception occurs when an account invokes license API with a tampered public key. |
| **SEVERITY** | CRITICAL |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-91:FAILURE\_LICENSE\_TAMPERED\_DATA ||
|-|-|
| **MESSAGE** | License data is found to be tampered |
| **DESCRIPTION** | The exception occurs when an account invokes license API with tampered license information. |
| **SEVERITY** | CRITICAL |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-92:FAILURE\_LICENSE\_NOT\_FOUND ||
|-|-|
| **MESSAGE** | License info is not found |
| **DESCRIPTION** | The exception occurs if publish Meta is not present (happens when upgraded from 7.2) in license app or the license app does not exist (happens when upgraded from 7.1 or earlier). |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-93:FAILURE\_NO\_SSO\_PROFILE ||
|-|-|
| **MESSAGE** | Linking identities failed due to null session puid. Check if the SSO provider %s has enabled user profile. |
| **DESCRIPTION** | The exception occurs in linked identity SSO flow when one of the providers has profile endpoint type as none. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | In linked identity SSO flow, disable profile access in one of the providers. |
| **RESOLUTION** | Check if profile access is enabled in all providers. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-94:FAILURE\_INVALID\_EXTERNAL\_PROVIDER ||
|-|-|
| **MESSAGE** | "Provider config invalid. Check that provider %s is of type OAuth2, has profile" + "enabled and email attribute is configured." |
| **DESCRIPTION** | The exception occurs while accessing user profile data. Either the provider is not allowed for external authentication (or) no profile is configured (or) no email attribute selector is configured. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Try to access user profile data when the provider is not allowed for external authentication (or) no profile is configured (or) no email attribute selector is configured. |
| **RESOLUTION** | Make sure the provider is allowed for external authentication, profile is configured, and email attribute selector is configured. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-95:FAILURE\_LICENSE\_INFO\_TAMPERED\_IN\_REQUEST ||
|-|-|
| **MESSAGE** | License Info tampered in request. |
| **DESCRIPTION** | The exception occurs when the license data is tampered in the request made to access license API in order to activate/update/get license info |
| **SEVERITY** | CRITICAL |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-96:FAILURE\_MISSING\_EXTENSION\_GRANT\_TYPE ||
|-|-|
| **MESSAGE** | Missing extension grant type value. |
| **DESCRIPTION** | The exception occurs after setting the extension grant type to OAuth2ProviderConfig object when extension grant type is configured as none. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Authenticate against OAuth2.0 by providing extension grant type as none. |
| **RESOLUTION** | Verify and provide valid extension grant type. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-97:FAILURE\_INSUFFICIENT\_PRIVILEGE ||
|-|-|
| **MESSAGE** | User has insufficient privilege for this operation. |
| **DESCRIPTION** | The exception occurs when setup API is invoked by a user who does not have appropriate role for performing the action. |
| **SEVERITY** | MEDIUM |
| **REPRODUCE THE ERROR** | Set the user role as not allowed to invoke setup API. |
| **RESOLUTION** | Give permission to the user to invoke setup API. |
| **POINT OF CONTACT** | NA |

* * *

 
| \-98:FAILURE\_ACCOUNT\_USERS ||
|-|-|
| **MESSAGE** | Failure occurred while fetching users of account. |
| **DESCRIPTION** | The exception occurs on failing to fetch users of an account with the given guid. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-99:FAILURE\_INVALID\_JWT\_SIGNATURE ||
|-|-|
| **MESSAGE** | JWT Signature validation failed. |
| **DESCRIPTION** | The exception occurs when something goes wrong while verifying token string signature and decoding it. Account passes the token to activate and update the license on cloud. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-100:FAILURE\_GATEWAY\_FETCH\_LICENSE\_MAP ||
|-|-|
| **MESSAGE** | Failure occurred while fetching license map. |
| **DESCRIPTION** | The exception occurs when something goes wrong while fetching the license data from gateway lib. The HTTP status will not be 200 or 401. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | NA |
| **RESOLUTION** | NA |
| **POINT OF CONTACT** | VOLTMX |

* * *

 
| \-101:FAILURE\_LICENSE\_RECIPIENT\_CERT\_ABSENT\_IN\_REQUEST ||
|-|-|
| **MESSAGE** | No recipient cert found in request |
| **DESCRIPTION** | Recipient cert is not found in the request made to fetch license. |
| **SEVERITY** | HIGH |
| **REPRODUCE THE ERROR** | Send request (missing recipient cert) to fetch license . |
| **RESOLUTION** | Make sure recipient cert is available in request. |
| **POINT OF CONTACT** | NA |
