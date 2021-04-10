---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Identity Hotfix 9.1.0.3
======================================

Enhancements
------------

*   Added support for `refresh_token` grant type in the OAuth Identity provider.
    
    The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired. This allows clients to continue to have a valid access token without further interaction with the user.
    
    For using this feature you must upgrade to SDK plugin version V9 ServicePack1 Fixpack 14.
    
    For more information you can refer to [VoltMX Foundry OAuth 2.0 Identity Service]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.html#foundry-oauth-2-0-identity-service) and [Invoking an Identity Service]({{ site.baseurl }}/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/VoltMXStudio/Invoking_Identity_Service_Iris.html#Re).
