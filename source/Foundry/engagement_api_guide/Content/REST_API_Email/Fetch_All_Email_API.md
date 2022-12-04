
# Fetch All Email API

The **Fetch All Email API** API accepts the Email ID or User ID as an input parameter and returns all the sent email messages details.

## URL

The HTTP URL for **Fetch All Email** API is:

```
http://<host or ip>:<port>/api/v1/email/fetch
```

> **_Note:_** This is not a secure API and no credentials are needed to invoke this API.

## Method

POST

## Header

The payload's request header includes Content-Type as application/json;charset=UTF-8.

## Input Parameters

The following fields are input parameters:

| Input Parameter | Required | Type   | Description                  |
| --------------- | -------- | ------ | ---------------------------- |
| emailId         | Yes      | string | Email ID of the user         |
| id              | Yes      | long   | Unique ID assigned to a user |

## Sample Request

### With email ID

```
{  
   "emailId":"sampleuser@sample.com"  
}

```

### With ID

```
{  
   "id":"xx"  
}

```

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level- Two | Type   | Description                                                            |
| ---------------- | ---------- | ------ | ---------------------------------------------------------------------- |
| unreadEmails     |            | long   | The total number of emails as unread                                   |
| totalEmails      |            | long   | The total number of emails                                             |
| openedEmails     |            | long   | The total number of emails as opened                                   |
| Emails           |            |        | An array of Emails objects                                             |
|                  | fetchId    | long   | The unique fetch ID assigned to an email                               |
|                  | subject    | string | Email subject text                                                     |
|                  | content    | string | Email content text                                                     |
|                  | status     | string | The current status of email s submitted, cancelled, opened or rejected |

## Sample Response

```
{
"unreadEmails": 2,
"totalEmails": 2,
"openedEmails": 0,
"Emails": [
{
"fetchId": "7129463178641309424",
"subject": "Online Sale",
"content": "Happy Weekend Sale",
"status": "Submitted"
},
{
"fetchId": "6791140933766021031",
"subject": "Flipkart shopping sale",
"content": "",
"status": "Submitted"
}
]
}
```

## Response Status

| Code       | Description                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| Status 200 | Submitted                                                                                                               |
| Status 400 | Invalid Request. Request method not allowedNo audience found with the given email IDNo audience found with the given id |
| Status 401 | Unauthorized request                                                                                                    |
| Status 500 | Server failure to process request                                                                                       |
