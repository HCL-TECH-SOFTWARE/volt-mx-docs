
# Get File Errors by Pagination

The **Get File Errors by Pagination** API accepts Start and pageSize as input parameters and returns all file errors details like total number of errors.

## URL

The HTTP URL for Get File Errors by Pagination API is:

```
http://<<host>>:<<port>>/api/v1/batchinfo/errors/{id}?start=0&pageSize=20
```

## Method

GET

## Input Parameters

The following fields are input parameters:

| Input Parameter | Type | Description                   |
| --------------- | ---- | ----------------------------- |
| start           | long | Start index of the element    |
| pageSize        | long | Number of elements for a page |

## Sample Response

```
{
   "total": 1,
   "Errors": [
{
   "id": 10023,
   "errorMessage": "Line 1,karthik,gaddam,raj.hikfg.sri@gmail.com,+919440153678,Email is being used for one of the audience members. Audience member already exists with this Mobile. "           
}
]
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of error info               |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
