                              

User Guide: [Identity](Identity.md) > How to Enable Multi-Factor Authentication

How to Enable Multi-Factor Authentication
=========================================

Volt MX  Foundry provides the ability to use Multi-factor authentication (MFA) to allow an additional layer of security for all user profiles associated with a Volt MX Foundry account. MFA requires each user to provide a secondary email address or phone number, which is associated with their profile. When a user logs in, a validation code is sent to the email or phone number, which the user must provide in addition to their other login credentials.

Each user can enable MFA on their profile individually, or an admin can enable MFA across all user profiles associated with the account. If enabled by the admin, each user associated with that account will need to activate MFA in their profile to continue to have access to the account.

> **_Important:_** MFA option is available only for users who have Admin and Owner roles in Foundry. MFA is applicable for AWS Cloud only.

Enabling Mutli-Factor Authentication for all Users
--------------------------------------------------

To enable multi-factor authentication for all users, do the following:

1.  From the left pane, select **Settings**.
2.  At the top of the Settings page, select **User Authentication**, and then select **Multi-Factor Authentication**.
3.  Next to **Do you require multi-factor authentication**, select **Yes**.

Disabling Mutli-Factor Authentication for all Users
---------------------------------------------------

To disable multi-factor authentication for all users, do the following:

1.  From the left pane, select **Settings**.
2.  At the top of the Settings page, select **User Authentication**, and then select **Multi-Factor Authentication**.
3.  Next to **Do you require multi-factor authentication**, select **No**.

Configuring a User Profile for Multi-factor Authentication
----------------------------------------------------------

To enable MFA for your user profile, do the following:

1.  From your user profile, select **Settings**.
2.  Select the **MFA** tab.
3.  Under Virtual MFA applications, review the list of virtual multi-factor authenticator apps and verify that your secondary device has an appropriate virtual MFA installed.
4.  Click **Activate MFA**.
5.  In Activate MFA, under **Phone Number**, type in your phone number.
6.  Under **Secondary Email**, type your secondary email address, and then click **Send Link**.
7.  Under **Enter Validation Code**, type the validation code you received in your email, and then click **Verify**.
8.  Click **Next**.
9.  If your secondary device can scan QR Codes, scan the QR Code displayed, enter the two authentication codes, and then click **Activate**.
10.  If your device cannot scan QR Codes, select **Manual Configuration**. On your secondary device, enter the secret key that is provided, and then click **Activate**.

Disabling Multi-factor Authentication on a User Profile
-------------------------------------------------------

Users can choose to deactivate MFA at any time in their user profile settings.

> **_Important:_** If the administrator has enabled MFA across all user profiles associated with an account, then the user will lose access to the account unless they re-enable MFA.

To disable MFA for your user profile, do the following:

1.  From your user profile, select **Settings**.
2.  Select the **MFA** tab.
3.  Click **Deactivate MFA**.
4.  Click **Deactivate**.

> **_Note:_** After MFA has been deactivated, you will be prompted to log out and then log back in to your account.
