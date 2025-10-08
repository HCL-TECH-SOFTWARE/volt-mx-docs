
# Get All Push Message Templates

The Get All Push Message Templates API fetches all the information about push message templates.

## URL

The HTTP URL for **Get All Push Message Templates** is:

```
http://<host>:<port>/api/v1/templates/pushtemplate
```

The Get All Push Message Templates API implements the Gateway Filter for Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level – Two         | Type   | Description                                           |
| ---------------- | ------------------- | ------ | ----------------------------------------------------- |
| total            |                     | long   | Displays the total number of push message templates   |
| pushTemplates    |                     |        | An array of pushTemplates objects                     |
|                  | id                  | long   | A unique ID assigned to a push message template       |
|                  | templateName        | string | Name of a push message template                       |
|                  | templateTitle       | string | Title of the template                                 |
|                  | templateType        | string | Type of the template. It can either be BASIC or RICH. |
|                  | template            | string | Displays a text message                               |
|                  | lastModifiedDateStr | string | When a template was last modified                     |
|                  | lastModifiedBy      | string | The user who last modified a push message template    |
|                  | createdDateStr      | string | The date on which the template was created            |
|                  | createdBy           | string | The user who created the push message template        |

## Sample Response

```
{
"total" : 2,
"pushTemplates" : [ {
"id" : 1,
"templateName" : "xxxxxxxxxxxxx",
"templateTitle" : "",
"templateType" : "BASIC",
"template" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"lastModifiedDateStr" : "11/05/2015 04:26:15 AM EST",
"lastModifiedBy" : "xxxxx",
"createdDateStr" : "11/05/2015 04:26:10 AM EST",
"createdBy" : "xxxx"
}, {
"id" : 2,
"templateName" : "xxxxxxx",
"templateTitle" : "xxxxxx",
"templateType" : "RICH",
"template" : "xxxxxxxxxxxxxxxxxxxx",
"lastModifiedDateStr" : "11/05/2015 04:26:15 AM EST",
"lastModifiedBy" : "xxxx",
"createdDateStr" : "11/05/2015 04:26:10 AM EST",
"createdBy" : "xxxxxx"
} ]
}

```

## Response Status

| Code       | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| Status 200 | Array of push message template details                                    |
| Status 400 | Invalid Push Template ID provided or No push template found with given ID |
| Status 401 | Unauthorized request                                                      |
| Status 500 | Server failure to process request                                         |
