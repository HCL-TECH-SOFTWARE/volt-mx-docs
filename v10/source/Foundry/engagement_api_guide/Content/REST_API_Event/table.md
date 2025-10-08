                           

passTemplateData

  
| Output Parameter (Level- One) | Second level | Third level | Required | Type | Description |
| --- | --- | --- | --- | --- | --- |
| eventPass |   |   |   |   | An array of event pass objects |
|   | passName |   | Yes | string | Name of the pass |
|   | passType |   | Yes | string | Type of the pass such as boarding or coupon |
|   | passIntegrationConfig |   |   |   | An array of passIssueNotificationDetails objects |
|   |   | passIssueNotificationDetails-enabled (Yes)-messageContent (Yes)-subject (Yes)-senderName (Optional)-senderEmail (Optional) |   |   | An array of passIssueNotificationDetails objects |
|   |   |   | channel | Yes |   |
|   | passContent |   |   |   | An array of passContent objects |
|   |   | basicDetails-passTypeIdentifier: (string)(Yes)-passSerialNumber : (int)(Optional)-groupIdentifier: (string) (Optional)-appLaunchURL: URL, (Optional)-description (Yes)-passSerialNumberType (Yes)-eventTicketType (Optional)-customJsonData (Optional) |   |   | An array of basicDetails objects: |
|   |   | basicDetails (continued) -ituneIdentifiers : (int) (Optional)-webServiceUrl: (URL) -timeZone: (string)-passType: (string) -organizationName: (string) -description: (string)-passSerialNumberType: (int) -eventTicketType: (string) -customJsonData: An array |   |   |   |
|   |   | appearance -bgColor: (alphanumeric) -labelColor: (string) -valueColor: (string)-suppressStripShine: (boolean)-images: (An array of image objects |   |   | An array of appearance objects |
|   |   | frontLayout:-logoText-headerFields: (An array of headerFields objects)-primaryFields: (An array of primaryFields objects)-auxiliaryFields: (An array of auxillaryFields objects)-secondaryFields: (An array of secondaryFields objects)-barcodeDetails: (An array of barcodeDetails objects)-transitType |   |   | An array of frontLayout objects |
|   |   | backLayout-fields: (An array of fields objects)-enableAutoUpdates: booleaan value |   |   | An array of backLayout objects |
|   |   | passRelevance-relevantDate-ignoreTimezone-relevantLocations-relevantBeacons-maxDistance |   |   | An array of passRelevance objects |
|   |   | passRules: -stopAfter-expiryDate:-voided-dateRestriction |   |   | An array of passRules |
|   |   | languageDetails:-originalFields-languageEntries-passLanguage |   |   | An array of languageDetails objects |
|   |   | passIntegrationData:-passIssueNotificationDetails (An array of passIssueNotificationDetails objects) |   |   | An array of passIntegrationData objects |
