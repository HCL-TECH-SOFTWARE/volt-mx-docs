                           


License Activation Guidelines
=============================

To activate a Volt MX Foundry on-premise license, you must have a Volt MX Cloud account and must be a part of an account which has an on-prem Volt MX Foundry license or paid Volt MX Foundry Cloud based on the installation type.

This section contains license activation guidelines for the following install types:

*   [Production Installation](#production-installation)
*   [Development / Non-Production Installation](#development-non-production-installation)

Production Installation
-----------------------

License activation guidelines for Production type installation are as follows:

*   The Cloud account must have a Volt MX Foundry License Cloud with "onprem\_prod" source to activate a production license.
*   The end date of the Volt MX Foundry License Cloud subscription must be greater than the current date.
*   The Owner / Admin of the Cloud account can activate the production license. The members of the Cloud account can activate the production license if they have explicit access to the Volt MX Foundry License Cloud.
*   Activation:
    *   The Volt MX Foundry Identity account tenant must be accessible on the internet. The Cloud license activation screen displays the Identity tenant configured in on-premise console.  
        **Ex: https:voltmxfoundry.mycompany.com/authService**.
    *   Cloud license activation flow appends “/accounts” to the Identity URL .  
        **Ex: https:voltmxfoundry.mycompany.com/authService/accounts**  
        The URL must be accessible on the public internet for license activation to work. The response of the URL should be “Welcome to Test Auth Service”.
    *   The JSON license returned to the on-premise console after successful license activation is valid for 30 days. There will be a heartbeat call to the Volt MX Foundry production system after an every interval of 7 days by the Cloud Orchestration system which increases the JSON license validity to another 30 days.
    *   A Volt MX Foundry production setup, which has no issues with the Identity URL being accessible on the public internet, will not receive any license expiry notifications until the end of the subscription because the heartbeat calls ensure the license validity.

Development / Non-Production Installation
-----------------------------------------

License activation guidelines for Development / Non-Production type installation are as follows:

*   The Cloud account must have a Volt MX Foundry License Cloud with "onprem\_prod" source or a paid Volt MX Foundry Cloud to activate a Development / Non-Production license.
*   A user with any role (Owner / Admin / Members) in the Cloud can activate the license. Cloud users do not need explicit access to the production License Cloud.
*   The JSON license returned to the on-premise console after successful license activation is valid for 90 days. After 90 days, the top pane of the console displays a message which prompts users to re-validate the license. After re-validation, Volt MX provides another license with 90 days validity.
*   A user cannot re-validate the license against the respective Cloud if the subscription of production Volt MX Foundry license Cloud or paid Volt MX Foundry Cloud expires.

[Open topic with navigation](../Content/MFactivationGuidelines.md)

Comments

[Reply](#)

 

</div> <input class="comment-submit" type="button" value="Submit" > </div> </div> </body> <.html></x-turndown>
