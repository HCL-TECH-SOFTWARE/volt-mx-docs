

Authenticate
------------

This end-point allows the user (or) you to log on to the SaaSFoundation service. User must provide valid credentials for successful authentication. The credentials will be sent to the end-point as header parameters. SaaSFoundation service will use the credentials to authenticate against the LOB system identified with <tenant-name> that is available in the URL. In case of successful login, session\_token will be sent in the response. This session\_token should be sent as header parameter for metadata end-point for performing CRUD operations.

### Description/Use case

Enter content

### URL

The HTTP URL to authenticate is:

http://<tenant-name>.<subdomain>:<port>/SaaSFoundationWS/authenticate

### Method

GET

### Header

The **expected** header param is "username" and "password". The payload's request header includes "Content-Type" for JSON as “**application/json**".

### Input parameters

Not applicable?

### Sample payload

Not applicable?

### Sample response

A message that the authentication is successful. Show the message.

### Response status

<table style="width: 100%;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Code</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Status</td><td class="TableStyle-Basic-BodyD-Column1-Body1"><span style="color: #ff0000;">Application created successfully</span></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Status 404</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Not found. Will be displayed if the authentication fails.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Status 400</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Invalid request format</td></tr></tbody></table>
