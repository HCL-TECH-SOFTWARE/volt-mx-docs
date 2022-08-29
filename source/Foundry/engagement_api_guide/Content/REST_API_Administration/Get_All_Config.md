
# Get All Config

The **Get All Config** API fetches complete Engagement Services configuration details.

## URL

The HTTP URL for Get All Config API is

```
http://<host>:<port>/api/v1/config
```

This service implements Gateway Filter for Authentication/Basic Authentication to authenticate access of the service by a user.

## Method

GET

## Output Parameters

The following fields are output parameters:

| Output Parameter                          | Type         | Description                                                                                               |
| ----------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------- |
| encrypt.token                             | alphanumeric | Token based user authentication                                                                           |
| apple.notification.keymanager.algorithm   | aplhanumeric | Apple cloud configuration Property enabled for Tomcat, Weblogic and JBoss servers                         |
| smpp.request.expirationTime               | long         | Expiration job frequency in minutes - one hour.Nexmo and Clickatell keep alive job frequency in seconds   |
| apple.feedback.server.port                | long         | Apple cloud configuration. Feedback server port number                                                    |
| http.idle.connection.timeout              | long         | http client connection configuration                                                                      |
| smpp.nexmo.enquiretask.interval           | long         | SMPP ConfigurationNexmo keep alive job frequency in seconds                                               |
| threadCount.minimum                       | long         | Push message job thread pool properties                                                                   |
| thread.ttl                                | long         | Push message job thread pool properties                                                                   |
| http.max.connections                      | long         | http client connection configuration                                                                      |
| apple.dev.feedback.server.host            | URL          | Apple cloud configuration for Apple sandbox cloud connectivity                                            |
| feedback.execution.hour                   | long         | Feedback Job interval in hours                                                                            |
| apple.notification.trustmanager.algorithm | string       | Properties enabled for IBM WebSphere application server.                                                  |
| apple.dev.feedback.server.port            | long         | Configured for Apple sandbox cloud connectivity                                                           |
| push.attempts.maximum                     | long         | Push message job configuration properties. Defined maximum push message attempts                          |
| blackberry.qualityofservice               | string       | Possible values for black berry quality of service \[CONFIRMED,PREFERCONFIRMED,UNCONFIRMED,NOTSPECIFIED\] |
| blackberry.acknowledgement.listener.port  | long         | BlackBerry cloud configuration. Acknowledgement listener port number                                      |
| apple.dev.notification.server.host        | string       | Configuration for Apple production cloud connectivity                                                     |
| apple.notification.keystore.type          | aphanumeric  | Apple cloud configuration.                                                                                |
| windows8.authentication.url               | string       | Property configured for Windows cloud connectivity                                                        |
| varchar.size                              | long         | Engagement Services push configuration                                                                    |
| job.stalemessages.schedule                | long         | Engagement Services push configurationStale message job internal in seconds                               |
| apple.notification.server.host            | string       | Configuration for Apple production cloud connectivity                                                     |
| blackberry.notification.server.url        | string       | Configuration for BlackBerry cloud connectivity                                                           |
| http.pool.max.threads                     | long         | http client connection configuration                                                                      |
| push.character.encode                     | alphanumeric | Push message job configuration properties                                                                 |
| http.connection.timeout                   | long         | Http client connection configuration                                                                      |
| smpp.expirationtask.interval              | long         | Expiration job frequency in minutes- one hour                                                             |
| android.notification.server.url           | string       | Configuration for Android C2DM cloud connectivity                                                         |
| apple.feedback.server.host                | string       | Configuration for Apple production cloud connectivity                                                     |
| threadCount.maximum                       | long         | Push message job thread pool properties                                                                   |
| monitor.schedule                          | long         | Push Message Job interval in seconds                                                                      |
| batchUpdate.size                          | long         | Push Message Job configuration properties                                                                 |
| apple.notification.server.port            | long         | Configured for Apple production cloud connectivity                                                        |
| jpush.notification.test.server.url        | string       | Jpush notification URL                                                                                    |
| smpp.request.throttleDelay                | long         | SMPP request throttle delay in seconds                                                                    |
| android.notification.server.gcm.url       | string       | Configured for Android GCM cloud connectivity                                                             |
| smpp.clickatell.enquiretask.interval      | long         | SMPP ConfigurationClickatell keep alive job frequency in seconds                                          |
| jpush.notification.server.url             | string       | JPush notification URL                                                                                    |
| audit.enabled                             | boolean      | If auditing for subscription is enabled or not                                                            |
| apple.dev.notification.server.port        | long         | Configured for Apple sandbox cloud connectivity                                                           |
| fetch.size                                | long         | Push Message Job configuration properties                                                                 |

## Sample Response

```
{
"encrypt.token" : "#VPNSRANDOMNUMBER",
"apple.notification.keymanager.algorithm" : "sunx509",
"smpp.request.expirationTime" : "60",
"apple.feedback.server.port" : "2196",
"http.idle.connection.timeout" : "30000",
"smpp.nexmo.enquiretask.interval" : "20",
"threadCount.minimum" : "1",
"thread.ttl" : "5000",
"http.max.connections" : "30",
"apple.dev.feedback.server.host" : "feedback.sandbox.push.apple.com",
"feedback.execution.hour" : "24",
"test1" : "test1",
"apple.notification.trustmanager.algorithm" : "sunx509",
"apple.dev.feedback.server.port" : "2196",
"push.attempts.maximum" : "10",
"blackberry.qualityofservice" : "UNCONFIRMED",
"blackberry.acknowledgement.listener.port" : "8888",
"apple.dev.notification.server.host" : "gateway.sandbox.push.apple.com",
"apple.notification.keystore.type" : "PKCS12",
"windows8.authentication.url" : "https://login.live.com/accesstoken.srf",
"varchar.size" : "4000",
"job.stalemessages.schedule" : "18000 ",
"apple.notification.server.host" : "gateway.push.apple.com",
"blackberry.notification.server.url" : "https://pushapi.eval.blackberry.com/mss/PD_pushRequest",
"http.pool.max.threads" : "20",
"push.character.encode" : "UTF-8",
"http.connection.timeout" : "60000",
"smpp.expirationtask.interval" : "60",
"android.notification.server.url" : "https://android.apis.google.com/c2dm/send",
"apple.feedback.server.host" : "feedback.push.apple.com",
"threadCount.maximum" : "10",
"test2" : "test2",
"monitor.schedule" : "15",
"batchUpdate.size" : "1000",
"apple.notification.server.port" : "2195",
"jpush.notification.test.server.url" : "https://api.jpush.cn/v3/push/validate",
"smpp.request.throttleDelay" : "10",
"android.notification.server.gcm.url" : "https://android.googleapis.com/gcm/send",
"smpp.clickatell.enquiretask.interval" : "55",
"jpush.notification.server.url" : "https://api.jpush.cn/v3/push",
"audit.enabled" : "false",
"apple.dev.notification.server.port" : "2195",
"fetch.size" : "1500"
}
```

## Response Status

| Code       | Description                       |
| ---------- | --------------------------------- |
| Status 200 | Config resource details           |
| Status 400 | Invalid request format            |
| Status 401 | Unauthorized request              |
| Status 500 | Server faliure to process request |
