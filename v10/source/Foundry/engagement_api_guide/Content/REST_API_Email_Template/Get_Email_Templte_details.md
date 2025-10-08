
# Get Email Template Details by ID

The **Get Email Template Details by ID** API accepts the email template ID as an input parameter and provides email message details matching the template ID.

## URL

The HTTP URL for Get Email Template details by ID API is:

```
http://<host>:<port>/api/v1/templates/emails/<id>
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter    | Type   | Description                                                 |
| ------------------- | ------ | ----------------------------------------------------------- |
| id                  | long   | The unique ID assigned to a template                        |
| templateName        | string | Unique name assigned to a template                          |
| mailSubject         | string | Email title                                                 |
| templateType        | string | Template type as basic or code a template                   |
| mailContent         | string | Email content: It can include images and text               |
| lastModifiedDateStr | string | Date on which the email template was last modified          |
| lastModifiedBy      | string | A user name that shows who last modified the email template |
| createdDateStr      | string | Date on which the email template is created                 |
| createdBy           | string | A user name that shows who created the email template       |

## Sample Response

```
{
"id" : 4,
"templateName" : "ShopClues",
"mailSubject" : "Online Sale",
"templateType" : "Code a Template",
"mailContent" : "Happy Weekend Sale",
"lastModifiedDateStr" : "08/23/2016 12:48:22 PM IST",
"lastModifiedBy" : "admin",
"createdDateStr" : "08/23/2016 12:48:22 PM IST",
"createdBy" : "admin"
}
```

## Response Status

| Code       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| Status 200 | Email template JSON                                                          |
| Status 400 | Invalid email template ID provided or no email template found with given ID" |
| Status 500 | Server failure to process request                                            |
