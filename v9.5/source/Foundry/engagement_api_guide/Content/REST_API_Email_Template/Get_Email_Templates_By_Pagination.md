
# Get Email Templates by Pagination

The **Get Email Templates by Pagination** API accepts start and pageSize as input parameters and returns all the email template details. The pageSize represents the maximum number of the email templates for which the details are to be returned. If the start is specified, the number of the email templates that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six email templates from position zero to five are returned.

## URL

The HTTP URL for Get Email Templates by Pagination API is:

```
http://<host>:<port>/api/v1/templates/emails?start=0&pageSize=10
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two         | Type   | Description                                                 |
| ---------------- | ------------------- | ------ | ----------------------------------------------------------- |
| total            |                     | long   | Total number of email templates                             |
| mailTemplates    |                     |        | An array of mailTemplates objects                           |
|                  | id                  | long   | Unique ID assigned to the email template                    |
|                  | templateName        | string | Email template name                                         |
|                  | mailSubject         | string | Email title                                                 |
|                  | templateType        | string | Template type as basic or code a template                   |
|                  | mailContent         | string | Email content: It can include images and text               |
|                  | lastModifiedDateStr | string | Date on which the email template was last modified          |
|                  | lastModifiedBy      | string | A user name that shows who last modified the email template |
|                  | createdDateStr      | string | Date on which the email template is created                 |
|                  | createdBy           | string | A user name that shows who created the email template       |

## Sample Response

```
{
"mailTemplates" : [ {
"id" : 1,
"templateName" : "Flipkart shopping sale",
"mailSubject" : "Flipkart shopping sale",
"templateType" : "Basic",
"mailContent" : "

<style>div#pagediv { background-color:#f6f5f5; }</style>
<div id=\"pagediv\" style=\"background-color:#f6f5f5;padding:10px 5px;\">
    <div id=\"preheaderdiv\" style=\"background-color :none;color:#7CA9E4;font-family: Arial;font-size: 14px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
    <div id=\"headerdiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 22px;line-height: normal;text-align: center;margin:10px 5px;\"></div>
    <div id=\"bodydiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 14px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
    <div id=\"footerdiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 12px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
</div>",
    "lastModifiedDateStr" : "06/29/2016 01:33:49 PM IST",
    "lastModifiedBy" : "admin",
    "createdDateStr" : "06/29/2016 01:33:49 PM IST",
    "createdBy" : "admin"
  }, {
    "id" : 2,
    "templateName" : "Amazon online books sale",
    "mailSubject" : "Amazon online books sale",
    "templateType" : "Basic",
    "mailContent" : "
<style>div#pagediv { background-color:; }</style>
<div id=\"pagediv\" style=\"background-color:;padding:10px 5px;\">
    <div id=\"preheaderdiv\" style=\"background-color :none;color:#7CA9E4;font-family: Arial;font-size: 14px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
    <div id=\"headerdiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 22px;line-height: normal;text-align: center;margin:10px 5px;\"></div>
    <div id=\"bodydiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 14px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
    <div id=\"footerdiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 12px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
</div>",
    "lastModifiedDateStr" : "06/29/2016 01:34:22 PM IST",
    "lastModifiedBy" : "admin",
    "createdDateStr" : "06/29/2016 01:34:22 PM IST",
    "createdBy" : "admin"
  }, {
    "id" : 3,
    "templateName" : "eBay summer sale 2016",
    "mailSubject" : "eBay summer sale 2016",
    "templateType" : "Basic",
    "mailContent" : "
<style>div#pagediv { background-color:; }</style>
<div id=\"pagediv\" style=\"background-color:;padding:10px 5px;\">
    <div id=\"preheaderdiv\" style=\"background-color :none;color:#7CA9E4;font-family: Arial;font-size: 14px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
    <div id=\"headerdiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 22px;line-height: normal;text-align: center;margin:10px 5px;\"></div>
    <div id=\"bodydiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 14px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
    <div id=\"footerdiv\" style=\"background-color :none;color:none;font-family: Arial;font-size: 12px;line-height: normal;text-align: left;margin:10px 5px;\"></div>
</div>",
    "lastModifiedDateStr" : "06/29/2016 01:34:47 PM IST",
    "lastModifiedBy" : "admin",
    "createdDateStr" : "06/29/2016 01:34:47 PM IST",
    "createdBy" : "admin"
  }, {
    "id" : 4,
    "templateName" : "ShopClues",
    "mailSubject" : "Online Sale",
    "templateType" : "Code a Template",
    "mailContent" : "Happy Weekend Sale",
    "lastModifiedDateStr" : "08/23/2016 12:48:22 PM IST",
    "lastModifiedBy" : "admin",
    "createdDateStr" : "08/23/2016 12:48:22 PM IST",
    "createdBy" : "admin"
  } ],
  "total" : 4
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of email templates          |
| Status 400 | No mail templates found           |
| Status 500 | Server failure to process request |
