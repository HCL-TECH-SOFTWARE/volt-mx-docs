
You are here: Getting Claims Token for User Authentication

# Invoking REST APIs in Java

This section describes how to write a sample Java application to invoke Engagement Services REST APIs. You can perform following tasks:

- [Getting Claims Token for User Authentication](#getting-claims-token-for-user-authentication)
- [Triggering Push Message](#triggering-push-message)
- [Triggering SMS Message](#triggering-sms-message)
- [Triggering Email Message](#triggering-email-message)
- [Triggering Event](#triggering-event)
- [Creating a new User](#creating-a-new-user)
- [Sending Bulk Push](#sending-bulk-push)

## Getting Claims Token for User Authentication

This is a sample code snippet to get claims token for user authentication using Engagement Server MBaaS Authentication REST API.

```
public static String getClaimsToken() throws ClientProtocolException,
IOException {
String baseUri = "your mobile foundry server uri such as http://localhost:8080";
String userId = "your-userid";
String password = "your-password";
String claimsToken = null;
CloseableHttpClient httpclient = HttpClients.createDefault();
HttpPost post = new HttpPost(baseUri + "/authService/accounts/login");
List < NameValuePair > nvps = new ArrayList < NameValuePair > ();
nvps.add(new BasicNameValuePair("userid", userId));
nvps.add(new BasicNameValuePair("password", password));
post.setEntity(new UrlEncodedFormEntity(nvps));
CloseableHttpResponse httpResponse = httpclient.execute(post);
String response = EntityUtils.toString(httpResponse.getEntity());
ObjectMapper objectMapper = new ObjectMapper();
JsonNode jsonRootNode = objectMapper.readTree(response);
Iterator < Entry < String,
JsonNode >> jsonFieldsIter = jsonRootNode.fields();
while (jsonFieldsIter.hasNext()) {
Entry < String,
JsonNode > field = jsonFieldsIter.next();
if (field.getKey().equals("claims_token")) {
claimsToken = field.getValue().get("value").asText();
}

    }
    return claimsToken;

}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)

## Triggering Push Message

This is a sample code snippet to trigger a push message using Engagement Server Push Message REST API. The API request requires user authentication.

```
public static void triggerPush() throws ClientProtocolException,
IOException {
String baseUri = "mf server uri like http://localhost:8080";
String claimsToken = getClaimsToken();
CloseableHttpClient httpclient = HttpClients.createDefault();
String pushPayload = "{\"messageRequest\":{\"appId\":\"AppForAll1\",\"global\":{},\"messages\":{\"message\":{\"expiryTimestamp\":\"0\",\"overrideMessageId\":\"0\",\"startTimestamp\":\"0\",\"type\":\"PUSH\",\"subscribers\":{\"subscriber\":{\"ksid\":\"6774269470424397963\"}},\"platformSpecificProps\":{},\"content\":{\"mimeType\":\"text/plain\",\"priorityService\":\"false\",\"data\":\"Test Message\"}}}}}";
HttpPost post = new HttpPost(baseUri + "/vpns/api/v1/messages/push");
post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json;charset=UTF-8");
post.setHeader("X-VoltMX-Authorization", claimsToken);
post.setEntity(new StringEntity(pushPayload));
CloseableHttpResponse httpResponse = httpclient.execute(post);
String response = EntityUtils.toString(httpResponse.getEntity());
System.out.println(response);

}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)  
> To get claims token, [click here](#getting-claims-token-for-user-authentication)

## Triggering SMS Message

This is a sample code snippet to trigger a SMS message using Engagement Server SMS Message REST API. The API request requires user authentication.

```
public static void triggerSms() throws ClientProtocolException,
IOException {
String baseUri = "mf server uri like http://localhost:8080";
String claimsToken = getClaimsToken();
CloseableHttpClient httpclient = HttpClients.createDefault();
String smsPayload = "{\"smsServiceRequest\": { \"messages\": {\"message\": {\"startTimestamp\": \"0\",\"expiryTimestamp\": \"0\",\"priorityService\": \"true\",\"recipients\": {\"recipient\": { \"id\": \"1\" } }, \"content\": \"Test SMS\" } } }}";
HttpPost post = new HttpPost(baseUri + "/vpns/api/v1/messages/sms");
post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json;charset=UTF-8");
post.setHeader("X-VoltMX-Authorization", claimsToken);
post.setEntity(new StringEntity(smsPayload));
CloseableHttpResponse httpResponse = httpclient.execute(post);
String response = EntityUtils.toString(httpResponse.getEntity());
System.out.println(response);

}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)  
> To get claims token, [click here](#getting-claims-token-for-user-authentication)

## Triggering Email Message

This is a sample code snippet to trigger an Email message using Engagement Server Email Message REST API. The API request requires user authentication.

```
public static void triggerEmail() throws ClientProtocolException,
IOException {
String baseUri = "mf server uri like http://localhost:8080";
String claimsToken = getClaimsToken();
CloseableHttpClient httpclient = HttpClients.createDefault();
String emailPayload = "{ \"emailServiceRequest\": { \"emails\": { \"email\": {\"recipients\": { \"recipient\": [ {\"id\": \"1\",\"type\": \"TO\"}]},\"copyTo\":\"\",\"senderEmail\": \"xxxx@xxxx.com\",\"senderName\": \"xxxx\",\"subject\": \"Sample subject\",\"content\": \"sample content\",\"priority\":\"true\",\"startTimeStamp\":\"0\",\"endTimeStamp\": \"0\" }}}}";
HttpPost post = new HttpPost(baseUri + "/vpns/api/v1/messages/email");
post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json;charset=UTF-8");
post.setHeader("X-VoltMX-Authorization", claimsToken);
post.setEntity(new StringEntity(emailPayload));
CloseableHttpResponse httpResponse = httpclient.execute(post);
String response = EntityUtils.toString(httpResponse.getEntity());
System.out.println(response);

}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)  
> To get claims token, [click here](#getting-claims-token-for-user-authentication)

## Triggering Event

This is a sample code snippet to trigger an event using Engagement Server Trigger an Event REST API. The API request requires user authentication.

```
public static void triggerEvent() throws ClientProtocolException,
IOException {
String baseUri = "mf server uri like http://localhost:8080";
String claimsToken = getClaimsToken();
CloseableHttpClient httpclient = HttpClients.createDefault();
String payload = "{ \"event\": { \"eventid\": \"6910470800875022349\", \"message\": { \"subscribers\": { \"subscriber\": [ { \"ksid\": \"6910442844732144951\"} ] }, \"content\": { \"mimeType\": \"text/plain\", \"priorityService\": \"false\", \"eventNamePairs\": { \"key\": [ { \"name\": \"KeyName\", \"content\": \"key value\" } ] } } } } }";
HttpPost post = new HttpPost(baseUri + "/vpns/api/v1/events/push");
post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json;charset=UTF-8");
post.setHeader("X-VoltMX-Authorization", claimsToken);
post.setEntity(new StringEntity(payload));
CloseableHttpResponse httpResponse = httpclient.execute(post);
String response = EntityUtils.toString(httpResponse.getEntity());
System.out.println(response);

}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)  
> To get claims token, [click here](#getting-claims-token-for-user-authentication)

Creating a new User

---

This is a sample code snippet to create a user using Engagement Server Create User REST API. The API request requires user authentication.

```
public static void createAudience() throws ClientProtocolException,
IOException {
String baseUri = "mf server uri like http://localhost:8080";
String claimsToken = getClaimsToken();
CloseableHttpClient httpclient = HttpClients.createDefault();

    String payload = "{\"firstName\" : \"FNTest\", \"lastName\" : \"LNTest\",\"email\" : \"testemail@test1234.com\",\"active\" : true,\"mobileNumber\":\"918238283235\",\"country\" :\"United States\",\"state\" : \"California\"}";
    HttpPost post = new HttpPost(baseUri + "/vpns/api/v1/audience");
    post.setHeader(HttpHeaders.CONTENT_TYPE, "application/json;charset=UTF-8");
    post.setHeader("X-VoltMX-Authorization", claimsToken);
    post.setEntity(new StringEntity(payload));
    CloseableHttpResponse httpResponse = httpclient.execute(post);
    String response = EntityUtils.toString(httpResponse.getEntity());
    System.out.println(response);

}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)  
> To get claims token, [click here](#getting-claims-token-for-user-authentication)

## Sending Bulk Push

This is a sample code snippet to send push messages using Engagement Server Bulk Push REST API. The API request requires user authentication.

```
public static void bulkPush() throws ClientProtocolException, IOException {
String baseUri = "your mobile foundry server uri such as http://localhost:8080";
String claimsToken = getClaimsToken();
CloseableHttpClient httpclient = HttpClients.createDefault();
//String payload = "{\"firstName\" : \"FNTest\", \"lastName\" : \"LNTest\",\"email\" : \"testemail@test123.com\",\"active\" : true,\"mobileNumber\":\"918238283234\",\"country\" :\"United States\",\"state\" : \"California\"}";
HttpPost post = new HttpPost(baseUri + "/vpns/api/v1/bulkmessage?DELIMITER=,&SOURCE_FORMAT=APP_ID,SUBSCRIBERS_KSID,MESSAGE_DATA&IGNORE_ROW=false");
post.setHeader("X-VoltMX-Authorization", claimsToken);
FileBody file = new FileBody(new File("C:\\test\\Bulk.csv"));
HttpEntity reqEntity = MultipartEntityBuilder.create().addPart("uploadFile", file).build();
post.setEntity(reqEntity);
CloseableHttpResponse httpResponse = httpclient.execute(post);
String response = EntityUtils.toString(httpResponse.getEntity());
System.out.println(response);
}
```

> **_Note:_**  
> For dependencies, [click here](pom.xmlfile.md)  
> To get claims token, [click here](#getting-claims-token-for-user-authentication)
