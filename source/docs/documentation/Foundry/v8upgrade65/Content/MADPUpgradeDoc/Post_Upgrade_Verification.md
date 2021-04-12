---
layout: "documentation"
category: "v8upgrade65"
---
                          

[![](../Resources/Images/pdf.png)](http://docs.voltmx.com/voltmxlibrary/beta/v8upgrade65.pdf "VoltMX Foundry UpgradeHUB Guide")

Post-upgrade Verification
=========================

Post the upgrade, the application structure must include the following changes in the project folder:

*   Project Properties.xml is under the project folder along with a new file called projectproperties.json.
*   Forms, popups, and templates are stored in JSON format under their respective form/popup/template name folders. Unlike in Legacy Studio, all these files are in JSON format and include the individual widgets as separate JSON files within the folder.

*   Events associated with widgets are now stored in the studioactions folder, again in JSON format. 
*   All the resources' structure remains the same as the 6.x project structure.  This includes images, fonts, i18nkeys, custom libraries, and custom widgets.
*   Skins are now stored in the **Themes** folder in JSON format.
