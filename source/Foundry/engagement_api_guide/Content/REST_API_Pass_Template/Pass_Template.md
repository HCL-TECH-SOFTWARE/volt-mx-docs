                           


Pass Template
=============

Volt MX  Foundry Engagement Services supports Passbook feature of iOS.The passbooks allow users to easily create, distribute, update and manage content for Apple Passbook. A passbook can be used with campaigns, events or push messages. For all the functionalities available under Passbook Template section under Settings > Templates, following REST APIs are provided.

*   [Create Pass Template](Create_Pass_Template.md)
*   [Create Pass Template with Upload Images](Create_Pass_Template_with_upload_images.md)
*   [Delete Pass Template](Delete_Pass_Template.md)
*   [Export Pass Templates](Export_Pass_Templates.md)
*   [Get All Pass Templates](Get_All_Pass_Templates.md)
*   [Get Pass Template by ID](Get_Pass_Template_By_Id.md)
*   [Import Pass Templates](Import_Pass_Templates.md)
*   [Modify Pass Template by ID](Modify_Pass_Template_By_Id.md)
*   [Modify Pass Template by ID with Upload Images](Modify_Pass_Template_By_Id_with_upload_images.md)

Common Input/Output Parameters
------------------------------

The following tables lists standard output parameters that are common to all the Pass Template APIs.

### passtemplates

  
| Parameter | Level- Two | Level - Three | Level - Four | Type | Description |
| --- | --- | --- | --- | --- | --- |
| passtemplates |   |   |   |   | An array of passtemplates objects |
|   | basicDetails |   |   |   | An array of basicDetails objects |
|   |   | passType |   | string | Pass type as boarding, coupon, event ticket, membership or store card |
|   |   | passTypeIdentifier |   | string | This is the identifier of the Pass. It’s similar to the bundle identifier in an iOS app |
|   |   | passSerialNumberType |   | alphanumeric | Pass serial number can be auto generated or entered at the pass creation. The serial number is a string that uniquely recognizes the pass within the scope of its pass type. |
|   |   | passSerialNumber |   | long | Unique serial number assigned to a pass |
|   |   | groupIdentifier |   | string | Based on your requirement as a pass sender, you can define a group name.This option is applicable only for the Boarding pass and the event passes |
|   |   | appLaunchURL |   | string | URL, which need to be passed to the associated app when launching it |
|   |   | ituneIdentifiers |   | string | iTunes Store item identifiers for the associated app. |
|   |   | eventTicketType |   | string | Type of pass as Boarding, Coupon, Event Ticket, Membership and Store Card |
|   |   | webServiceUrl |   | string | When a pass is added to Passbook the iPhone will call the webServiceURL |
|   |   | customJsonData |   | string | Custom JSON Data pertains to customer information for companion apps. This data is not displayed to the user. |
|   |   | timezone |   | string | Based on location selected time zone |
|   |   | organizationName |   | string | Organization that issues the pass type |
|   |   | description |   | string | Pass description |
|   | appearance |   |   |   | An array of appearance objects |
|   |   | bgColor |   | alphanumeric | Selected color value from the color palette |
|   |   | labelColor |   | alphanumeric | Selected color value from the color palette for label |
|   |   | valueColor |   | alphanumeric | Selected color value from the color palette for text |
|   |   | suppressStripShine |   | boolean | If shining effect from the uploaded image is removed or not |
|   |   | images |   |   | An array of images objects |
|   |   |   | imageType | string | Image type as Icon, Logo or Footer |
|   |   |   | url | string | It can be URL or image path to procure the image |
|   | frontLayout |   |   |   | An array of frontLayout objects |
|   |   | logoText |   | string | Logo description |
|   |   | headerFields |   |   | An array of headerFields objects |
|   |   |   | label | string | Header label value |
|   |   |   | data | string | Text value assigned to a label |
|   |   |   | dataType | string | Data Type as text, number, currency, date, date and time |
|   |   |   | numberFormat | string | Number format as decimal, percentage, scientific or spell out |
|   |   |   | currency | string | Currency type like EUR (euro) |
|   |   |   | dateTimeFormat | string | dateTimeFormat as short, medium, long, full or none |
|   |   |   | displayRelatively | boolean | If the date is displayed on a pass is according to local time zone or not |
|   |   |   | ignoreTimezone | boolean | If time zone option is ignored or not |
|   |   |   | alignment | string | Text alignment as left, right or center |
|   |   |   | autolink | string | Define what type of data has to be auto linked. By default, all are auto inked |
|   |   |   | key | string | Key value assigned to change message text |
|   |   |   | changeMessage | string | New text to appear in the pass message |
|   |   | primaryFields |   |   | An array of primaryFields objects |
|   |   |   | label | string | Text value assigned to a label |
|   |   |   | fieldType | string | Type of field |
|   |   |   | data | string | Text message |
|   |   |   | dataType | string | Data Type as text, number, currency, date, date and time |
|   |   |   | numberFormat | string | Number format as decimal, percentage, scientific or spell out |
|   |   |   | currency | string | Currency type like EUR (euro) |
|   |   |   | dateTimeFormat | string | dateTimeFormat as short, medium, long, full or none |
|   |   |   | displayRelatively | boolean | If true the label’s value is displayed as a relative date; otherwise, it is displayed as an absolute date |
|   |   |   | ignoreTimezone | boolean | If time zone option is ignored or not |
|   |   |   | alignment | string | Text alignment as left, right or center |
|   |   |   | autolink | string | Define what type of data has to be auto linked. By default, all are auto inked |
|   |   | auxiliaryFields |   |   | An array of auxiliaryFields objects |
|   |   |   | label | string | Text value assigned to a label |
|   |   |   | fieldType | string | Type of field |
|   |   |   | data | string | Text message |
|   |   |   | dataType | string | Data Type as text, number, currency, date, date and time |
|   |   |   | numberFormat | string | Number format as decimal, percentage, scientific or spell out |
|   |   |   | currency | string | Currency type like EUR (euro) |
|   |   |   | dateTimeFormat | string | dateTimeFormat as short, medium, long, full or none |
|   |   |   | displayRelatively | boolean | If true the label’s value is displayed as a relative date; otherwise, it is displayed as an absolute date |
|   |   |   | ignoreTimezone | boolean | If time zone option is ignored or not |
|   |   |   | alignment | string | Text alignment as left, right or center |
|   |   |   | autolink | string | Define what type of data has to be auto linked. By default, all are auto inked |
|   |   |   | key |   |   |
|   |   | secondaryFields |   |   | An array of secondaryFields objects |
|   |   |   | label | string | Text value assigned to a label |
|   |   |   | fieldType | string | Type of field |
|   |   |   | data | string | Text message |
|   |   |   | dataType | string | Data Type as text, number, currency, date, date and time |
|   |   |   | numberFormat | string | Number format as decimal, percentage, scientific or spell out |
|   |   |   | currency | string | Currency type like EUR (euro) |
|   |   |   | dateTimeFormat | string | dateTimeFormat as short, medium, long, full or none |
|   |   |   | displayRelatively | boolean | If true the label’s value is displayed as a relative date; otherwise, it is displayed as an absolute date |
|   |   |   | ignoreTimezone | boolean | If time zone option is ignored or not |
|   |   |   | alignment | string | Text alignment as left, right or center |
|   |   |   | autolink | string | Define what type of data has to be auto linked. By default, all are auto inked |
|   |   | barcodeDetails |   |   | An array of barcodeDetails objects |
|   |   |   | barcodeType | alphanumeric | The barcode type can be PDF417, or QR code |
|   |   |   | embeddedMessageType | alphanumeric | It can be:- pass serial number- pass unique ID-encoded URL to update the pass |
|   |   |   | message | string | pass message |
|   |   |   | alternativeTextType | string | It can be: - pass serial number- pass unique ID- message string |
|   |   |   | alternateText | string | This is the text that appears below the barcode. This is useful, if your establishment does not have the facility to scan barcodes |
|   |   |   | embeddedFormat | int | Text encoding to convert the message from a string to a data representation to render the barcode. The value is typically iso- 8859-1 |
|   | backLayout |   |   |   | An array of backLayout objects |
|   |   | fields |   |   | An array of fields objects |
|   |   |   | label | string | A label to appear on pass backside |
|   |   |   | dataType | string | Data Type as text, number, currency, date, date and time |
|   |   |   | numberFormat | string | Number format as decimal, percentage, scientific or spell out |
|   |   |   | currency | string | Currency type like EUR (euro) |
|   |   |   | dateTimeFormat | string | dateTimeFormat as short, medium, long, full or none |
|   |   |   | displayRelatively | boolean | If true the label’s value is displayed as a relative date; otherwise, it is displayed as an absolute date |
|   |   |   | ignoreTimezone | boolean | If time zone option is ignored or not |
|   |   |   | alignment | string | Text alignment as left, right or center |
|   |   |   | autolink |   | What type of data has to be auto linked. By default, all are auto inked |
|   | passRelevance |   |   |   | An array of passRelevance objects |
|   |   | relevantDate |   | string | Displayed date according to location |
|   |   | ignoreTimezone |   | boolean | If the current time zone is ignored or not |
|   |   | relevantLocations |   | string | Each time the user wakes their device, Passbook checks the relevance of passes and any relevant pass is displayed on the Lock Screen. |
|   |   | relevantBeacons |   | string | The text to be displayed on the lock-screen when the pass is relevant to the location. |
|   |   | maxDistance |   | long | The maximum distance in meters for the selected location. |
|   | passRules |   |   |   | An array of passRules objects |
|   |   | stopAfter |   | string | The pass is not issued after a certain date |
|   |   | expiryDate |   | string | The pass expires after a certain date |
|   |   | voided |   | string | Once a pass expires, a notification is sent to the user that after a certain date the pass is expired. |
|   |   | dateRestriction |   | string | The pass can be permanently available or not issued after a certain date |
|   | languageDetails |   |   |   | An array of languageDetails objects |
|   |   | originalFields |   | string | Pass text in default selected language |
|   |   | languageEntries |   |   | An array of added languageEntries Objects |
|   |   |   | Data |   | An array of added translated text in local languages |
|   |   |   | images |   | An array of selected images associated with local language text |
|   |   |   | language | string | Added languages |
|   |   |   | passLanguage | string | Default pass language |
