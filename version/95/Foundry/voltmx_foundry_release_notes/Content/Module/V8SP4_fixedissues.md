                           

Fixed Issues in V8 SP4
======================

Engagement
----------

*   Miscellaneous bug fixes.

Identity
--------

*   Fixed an issue where a Token Expired exception occurs while using a native application continuously for more than 15-20 minutes.
*   Fixed an issue where calling services from the Admin Console causes an error at the Gateway if the token did not contain app attributes. The service now populates the token with mock app attributes if there is no app associated with it. These attributes are only used to populate the metrics data and does not cause other issues.
*   Even after you have logged out of the application, the Claims token works until the cache expires.
*   The INTEGRITY\_KEY header must be added to Response when the integrity header value in the Request passes the validation.
*   Updated the bouncycastle to `1.59` and xmlsec to `1.5.6` due to security recommendations.
*   The **HttpOnly** parameter is missing in a few authService cookies.
