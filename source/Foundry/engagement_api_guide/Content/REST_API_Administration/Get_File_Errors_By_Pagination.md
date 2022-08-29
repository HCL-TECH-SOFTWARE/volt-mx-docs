
# Get File Errors by Pagination

The **Get File Errors by Pagination** API accepts start and pageSize as input parameters and returns error details like total number of file errors and arrays of error messages. The pageSize represents the maximum number of error messages for which the details are to be returned. If the start is specified, the number of error messages that are returned are from start position to pageSize value. For example: if the start is zero and pageSize is five, then six error messages from position zero to five are returned.

The responses returned are not ordered by the date when the error message was generated.

## Use Case

The file ID that is needed to invoke this API can be retrieved from the console of the engagement server.

To retrieve the file ID from console, click on Settings > Status > File Status list view > Select the required file ID under Upload ID column. Here file ID is referred as Upload ID.

## URL

The HTTP URL for **Get File Errors by Pagination** API is:

```
http://<<host>>:<<port>>/api/v1/batchinfo/errors/{id}?start=0&pageSize=20
```

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter | Level-Two    | Type   | Description                                                                                |
| ---------------- | ------------ | ------ | ------------------------------------------------------------------------------------------ |
| total            |              | long   | Displays the total number of files for which the error information is returned.            |
| Errors           |              |        | Displays an array of error messages                                                        |
|                  | id           | long   | A unique ID assigned to the file                                                           |
|                  | errorMessage | string | An error message with an audience member details such as name, email ID, and mobile number |

## Sample Response

```
 {
"Errors": [{
"id": 50,
"errorMessage": "Line 2,Ajay,Kumar,ajay.kumar@gmail.com,9348092200,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 51,
"errorMessage": "Line 3,Deepak ,Seth,deepak.seth@gmail.com,9448092200,India,Telangana,
Email is being used for one of the audience members.
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 52,
"errorMessage": "Line 4,Rajan,Sundaram,rajan.sundaram@gmail.com,9548092200,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 53,
"errorMessage": "Line 5,Latha,Ganesh,latha.ganesh@gmail.com,9648092200,India,Telangana,
Email is being used for one of the audience members.
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 54,
"errorMessage": "Line 6,Vivek,Sharma,vivek.sharma@gmail.com,9748092200,India,Telangana,
Email is being used for one of the audience members.
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 55,
"errorMessage": "Line 7,Manohar,Deepak,manohar.deepak@gmail.com,9848092200,India,Telangana,
Email is being used for one of the audience members.
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 56,
"errorMessage": "Line 8,Susan,Simon,susan.simon@gmail.com,9948092200,India,Telangana,Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 57,
"errorMessage": "Line 9,Mital,Ghosh,mital.ghosh@gmail.com,9148092200,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 58,
"errorMessage": "Line 10,Swapnil,Joshi,swapnil.joshi@gmail.com,9348092201,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 59,
"errorMessage": "Line 11,David,Brown,david.brown@gmail.com,9348092202,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 60,
"errorMessage": "Line 12,Stephen,Winconsin,stephen.winconsin@gmail.com,9348092203,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 61,
"errorMessage": "Line 13,Mrunal,Deshpande,mrunal.deshpande@gmail.com,9348092204,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 62,
"errorMessage": "Line 14,Jaideep,Mukarjee,jaideep.mukarjee@gmail.com,9348092205,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 63,
"errorMessage": "Line 15,Nandan,Nilkeni,nandan.nilkeni@gmail.com,9348092206,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 64,
"errorMessage": "Line 16,Shambhavi,Shenoy,shambhavi.shenoy@gmail.com,9348092207,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 65,
"errorMessage": "Line 17,Brajesh,Mishra,brajesh.mishra@gmail.com,9348092208,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 66,
"errorMessage": "Line 18,Rehan,Iris,rehan.iris@gmail.com,9348092209,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 67,
"errorMessage": "Line 19,Sunidhi,Chauhan,sunidhi.chauhan@gmail.com,9348092210,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 68,
"errorMessage": "Line 20,Sragam,Parekh,sragam.parekh@gmail.com,9348092211,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}, {
"id": 69,
"errorMessage": "Line 21,Deepak ,Chary,deepak.chary@gmail.com,9348092212,India,Telangana,
Mobile number should have '+' prefix followed by country code and 10 digit number "
}],
"total": 24
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Array of error information        |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server failure to process request |
