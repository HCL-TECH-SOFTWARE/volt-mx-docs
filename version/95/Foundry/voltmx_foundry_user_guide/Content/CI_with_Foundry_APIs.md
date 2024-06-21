                              

User Guide: [VoltMX Foundry Command Line Utility - Continuous Integration](CI_Foundry.md) > Continuous Integration with Foundry APIs

Continuous Integration with Volt MX Foundry APIs
-----------------------------------------------

In the section, you can learn about the Continuous Integration (CI) capabilities by using APIs supported by Volt MX Foundry. Without using Volt MX Foundry Console, developers can automate the process of importing an app, exporting an app, and publishing an app by using APIs supported in CI. The details of the APIs are captured in the subsequent sections.

The following are two ways of publishing apps in Volt MX Foundry:

*   Using [Publish Apps in Volt MX Foundry Console](Publish.md).
*   Using script by calling publish APIs through a command line interface (CLI) - for example, cURL or a .Java file.
    
    > **_Note:_**  cURL - a command line tool for getting or sending files using URL syntax. The user guide uses the cURL command to represent a mobile device making HTTPS API calls to a Volt MX Foundry environment. cURL is typically pre-installed on Linux and Mac systems. For Windows, go to [http://curl.haxx.se/download.html](http://curl.haxx.se/download.html), download cURL, and the SSL libraries required to connect to HTTPS URLs. For cURL commands and documentation, refer to [http://curl.haxx.se/docs/](http://curl.haxx.se/docs/)
    
    > **_Important:_**  All the publish APIs in this section are auth protected.
    

The following APIs are supported for continuous integration of an app:

1.  [Fetch the Auth Token - Get Authentication Token Information via API](#fetch-the-auth-token)
2.  [Export and App - Export the Volt MX Foundry App From Console via API](#export-an-app)
3.  [Import an App - Import a Volt MX Foundry App (.zip file) via API](#import-an-app)
4.  [Publish via API](#publish-via-apis)

### **Fetch the Auth Token**

To fetch the claims token, invoke the Auth service login API and extract the “claims\_token”.”value” from the response.

The API helps you log in as a management user and get back session token that can be used for invoking management APIs.

A successful response includes a session token.

If a user's credentials are incorrect, the log-in fails, and the system generates an HTTP 401 error.

**Signature**

```
 https://accounts.auth.voltmxcloud.com/login
```

**Sample cURL Script**

```
 
token="$(curl -H "Accept: application/json" --data "userid=[abc@voltmx.com]&password=[pwd]" -X POST "https://accounts.auth.voltmxcloud.com/login" | awk -F 'claims_token.*?value":"' '{print $2}' | awk -F '",' '{print $1}')"

```

**Method**

POST

**Request Headers**

Form post parameters

*   userid={user id}
*   password={password}

**Sample Response:**

```
 Login Success Response (HTTP Response Code 200 OK):
{
    "profile": {
        "email": "",
        "userid": "",
        "firstname": "",
        "lastname": ""
    },
    "refresh_token": "{refresh_token}", 
    "claims_token": {
        "value": "{session_token}",
        "exp": 1402941484000 /* expiry time of session in seconds since epoch */
    }
}

Sample error response: (HTTP Response Code 401 Unauthorized):
{
    "domain": "AUTH",
    "code": -4,
    "mfcode": "Auth-4",
    "message": "Invalid User Credentials",
    "details": {
        "message": "Invalid User Credentials",
        "errcode": 0,
        "errmsg": "Invalid User Credentials"
    },
    "requestid": "77cf1b1b-3bc5-4d73-84ec-806dcd60cf56",
    "httpstatus": "Unauthorized"
}

```

### **Export an App**

The Apps Export API helps you export all the services and properties of Volt MX Foundry custom application from a specified workspace.

When you call the Apps Export API, the system exports the application in [Export app structure](Export-Import_Apps.md#folder-structure-of-an-exported-app).

**Signature**

```
 https:// {workspaceid}.workspace.voltmxcloud.com/api/v1/ws/{workspaceid}/apps/export?appName={appName}
```

**Sample cURL Script**

```
 
token="$(curl -H "Accept: application/json" --data "userid=[abc@voltmx.com]&password=[pwd]" -X POST "https://accounts.auth.voltmxcloud.com/login" | awk -F 'claims_token.*?value":"' '{print $2}' | awk -F '",' '{print $1}')"
```

**Method**

GET

**Request Query Parameters (Mandatory)**

*   workspaceid : The accounts that can be accessed by a user are listed in the top right corner of Volt MX Foundry Console. The workspaceid is the account ID that corresponds to the selected account.
*   appName : { Name of the Volt MX Foundry custom application that a user wants to export}

**Request Headers Parameters (Mandatory)**

X-VoltMX-Authorization : {Auth Service Token}

**Response:**

*   **Sample Success Response**:
```
HTTP 200 OK
```
*   **Sample Success Response Body**:
<code>The export API returns a zip stream that can be converted to a required .zip file. For more details, refer to <a href="Export-Import_Apps.html#folder-structure-of-an-exported-app">Export app structure</a></code>

*   **Sample Failure Response - if a user does not have access to the workspace**:
```
HTTP 401 Unauthorized
```

*   **Sample Failure Response - if export failed due to an internal failure**:
```
HTTP 500 Internal Server Error
```
*   **Failure Response Body Format**:
```
{ 
"domain": "WAAS" 
"code": [error-code], /* a number/string based on the domain */ 
"message": "Message", 
"details": [Details of Error Message], 
"httpstatus": "[Http Status String]" 
}  

```
*   **Example Failure Response Body**:
```
{
    "domain": "WAAS",
    "code": -9,
    "message": "Invalid App Credentials",
    "details": {
        "message": "Invalid App Credentials",
        "errcode": 0,
        "errmsg": null
    },
    "httpstatus": "Unauthorized"
}

```

### **Import an App**

The App Import API in Workspace service imports the App configuration in the package in a zip file (application zip). An application zip has app configuration, services, and messaging configuration. While importing, if these details are already present in the app, these details will be updated. Otherwise, these details are created.

**Signature**

```
 https:// {workspaceid}.workspace.voltmxcloud.com/api/v1/ws/{workspaceid}/apps/import?appName={appName}
```

**Sample cURL Script**

```
 
curl -F "appZip=@C:/Users/KH1895/Desktop/file.zip" -H "X-VoltMX-Authorization:[auth token]" -X POST " https:// [workspaceid].workspace.voltmxcloud.com/api/v1/ws/[workspaceid]/apps/import"

curl -F "appZip=@C:/Users/KH1895/Desktop/file.zip" -H "X-VoltMX-Authorization:[auth token]" -X POST " https:// [workspaceid].workspace.voltmxcloud.com/api/v1/ws/[workspaceid]/apps/import?appName=[app name]&suppressWarnings=true"

```

**Method**

POST

**Request Query Parameters (Mandatory)**

*   workspaceid : The accounts that can be accessed by a user are listed in the top right corner of Volt MX Foundry Console. The Account ID corresponds to the selected account.

Request Query Parameters (Optional)

*   appName : Name of the Volt MX Foundry custom application the user wants to create or update.
*   suppressWarnings : When importing apps with identity services, the identity services are not imported if `suppressWarnings` flag is not set. The required services must be first created or updated manually and then the app needs to be imported. The query param must be set to true (suppressWarnings=true) when importing apps. When `suppressWarning` is true and if an identity provider exists in the workspace, the existing provider is linked to the app. Otherwise, the import fails.

**Request Headers (Mandatory)**

X-VoltMX-Authorization : {Auth Service Token}

**Request Body**

```
 Content-Type : multipart/form-data
{
   "appZip" : < Zip file content of the app. The zip file needs to be in this format >
}

```

**Response**

*   **Sample Success Response**:
```
 HTTP 200 OK
```
*   **Sample Success Response Body**:
    
    Returns the details of an app that is imported into the workspace in the following format:
    
```
 appBaseUrl - <baseurl>/api/v1/ws/{workspace id}/apps/{app id}  
      
    { 
         "id": "<app id>",
          "type": "<type of app>",
           "name": "<app name>",
           "icon": "<app icon>",
            "description": "<app description>",
            "created_at": "<time of creation of app>", 
            "created_by": "<puid of the owner who created the app>", 
            "updated_at": "<time of updation of app>",
            "updated_by": "<puid of the owner who updated the app>", 
            "_links":
             { 
                 …
             } 
    }
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```
*   **Sample Failure Response - if export failed due to an internal failure**:
```
 HTTP 500 Internal Server Error
```
*   **Failure Response Body Format**:
```
 { 
    "domain": "WAAS" 
    "code": [error-code], /* a number/string based on the domain */ 
    "message": "Message", 
    "details": [Details of Error Message], 
    "httpstatus": "[Http Status String]" 
    }
    
```

*   **Example Failure Response Body**:
```
 {
        "domain": "WAAS",
        "code": -9,
        "message": "Invalid App Credentials",
        "details": {
            "message": "Invalid App Credentials",
            "errcode": 0,
            "errmsg": null
        },
        "httpstatus": "Unauthorized"
    }
    
```

### **Publish via APIs**

Publishing a Volt MX Foundry app is a multi-step workflow. During publishing an app, the `next_step` object in the response of the publish API decides whether the next step to be executed.

1.  [Fetch Environment GUID of an Environment via API](#fetch-environment-globally-unique-identifier-guid)
2.  [Fetch App ID of the Imported Volt MX Foundry App via API](#fetch-app-globally-unique-identifier-guid)
3.  [Publish a Volt MX Foundry App via API](#publish-a-foundry-app-via-api)
    
    *   [Initiate Publish](#initiate-publish)
    *   [Continue Publish](#continue-publish)
4.  [Unpublish a Volt MX Foundry App via API](#unpublish)
    
    *   [Initiate Unpublish](#initiate-unpublish)
    *   [Continue Unpublish](#continue-unpublish)

#### Fetch Environment Globally Unique Identifier (GUID)

To publish or unpublish an app to or from an environment, the environment must be uniquely identified through a GUID. To retrieve a GUID of an environment, call the following API and extract the “environment\_guid” of the relevant one.

The API fetches the details of the environments that a user can access.

The `environment_guid` value retrieved from the response of the API and will be used for publishing or unpublishing an app.

**Signature**

```
 https://manage.hclvoltmx.com/api/v1_0/environments
```

**Method**

GET

**Request Headers Parameters (Mandatory)**

*   X-VoltMX-Authorization : {Auth Service Token}
*   Accept : {application/json}

**Response:**

*   **Sample Success Response**:
```
 HTTP 200 OK
```
*   **Sample Success Response Body**:
```
 [
        {
            "environment_guid": "b8ee8e32-ca1e-471d-b737-cf792b182712",
            "name": "mbaas",
            …
        },
        {
            "environment_guid": "60ebcf2f-e327-492e-92ae-e5914ecfeeed",
            "name": "reconfig",
            …
        },
        …
    ]
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```

#### Fetch App Globally Unique Identifier (GUID)

This API fetches the list of apps.

**Signature**

```
 https://{workspaceid}.workspace.voltmxcloud.com/api/v1/ws/{workspaceid}/apps
```

**Method**

GET

**Request Query Parameters (Mandatory)**

*   workspaceid : The accounts that can be accessed by a user are listed in the top right corner of Volt MX Foundry Console. The Account ID corresponds to the selected account.

Request Headers Parameters (Mandatory)

*   X-VoltMX-Authorization : {Auth Service Token}
*   Accept : {application/json}

**Response:**

*   **Sample Success Response**:
```
 HTTP 200 OK
```
*   **Sample Success Response Body**:
```
 Returns list of Volt MX Foundry custom apps in the specified workspace.  
    {
     [
      { 
           "id": "<app id>",
           "type": "<type of app>",
           "name": "<app name>",
           "description": "<app description>",
            "created_at": "<time of creation of app>", 
            "created_by": "<puid of the owner who created the app>", 
            "updated_at": "<time of updation of app>",
            "updated_by": "<puid of the owner who updated the app>", 
            "_links":
             { 
                  …
             } 
        }
      ],
      "count": "< number of custom Volt MX Foundry apps returned in this API call >",
      "page": < page number >,
      "_links": {
              …
        },
        "totalcount": "< total number of custom Volt MX Foundry apps in the workspace >",
        "pagesize": <page size>
    }
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```

*   **Sample Failure Response - if export failed due to an internal failure**:
```
 HTTP 500 Internal Server Error
```
*   **Failure Response Body Format**:
```
 {
    "domain": "WAAS" 
    "code": [error-code], /* a number/string based on the domain */ 
    "message": "Message", 
    "details": [Details of Error Message], 
    "httpstatus": "[Http Status String]" 
    } 
    
```
*   **Example Failure Response Body**:
```
 {
        "domain": "WAAS",
        "code": -9,
        "message": "Invalid App Credentials",
        "details": {
            "message": "Invalid App Credentials",
            "errcode": 0,
            "errmsg": null
        },
        "httpstatus": "Unauthorized"
    }
    
```

#### Publish a Volt MX Foundry App via API

#### Initiate Publish

The API helps you start publishing the services inside the application to an environment with the environment  `id {env_guid}`  that you received. For more details on how to get the environment  `ID`, refer to [Fetch Environment GUID](#fetch-environment-globally-unique-identifier-guid).

When you call this API, the system starts publishing the app, and locks the app from publishing by different users until the publish completes or fails.

**Signature**

```
 https://api.voltmx.com/api/v1_0/environments/{env_guid}/publish
```

**Method**

POST

**Request Headers (Mandatory)**

*   X-VoltMX-Authorization : {Auth Service Token}
*   Content-Type : {application/json or application/x-www-form-urlencoded}
*   Accept : {application/json}
*   Referer : [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/) (The refer generates the URL required for next step of publishing.)
    

**Request Headers (Optional)**

*   X-VoltMX-RequestId : {Request Id}
*   X-HTTP-Method-Override

**Request Body**

```
 Mandatory  
  
app_id : Id of the Application to be published. For details on how to fetch the app id, refer to [Fetch App ID](#fetch-app-globally-unique-identifier-guid)
```
```
 
Optional  
  
action : release\_lock (This action releases the previous locks on the app before attempting publish). If the action parameter is not provided, the value will be set to start by default.
```

**Response**

*   **Sample Success Response**:
```
 HTTP 201 CREATED
```

*   **Sample Success Response Headers**:
```
 “Set-Cookie” : “<Cookies value>”
```

*   **Sample Success Response Body**:
```
 
    {
    	“_links” : {
    		“self” : {
    			“href” : “https://accounts.voltmx.com/api/v1_0/environments/env_guid/publish/apps/{publish_id}”
    		}
    	}
    	"status" : true,
    	"message" : "Success",
    	"publish_id" : "<GUID>",
    	"next_step" : true,
    	"next_step_description" : "<Message>"
    }
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```
*   **Sample Failure Response - if export failed due to an internal failure**:
```
 HTTP 500 Internal Server Error
```
*   **Sample Failure Response Body**:
```
 {
    "domain": "accounts"
    "mfcode": [error-code], /* a number/string based on the domain */
    "message": "Message",
    "details": [Details of Error Message],
    	"requestid": “Request Id”
    "httpstatus": "[Http Status String]"
    }
    
```
    
> **_Note:_**  After a successful response from the initiate publish operation API, users must call the following PUT request. The PUT API should contain a header `Cookie` with the value from `Set-Cookie` header of the API response.
    

#### Continue Publish

The API helps you continue publishing the services inside the application to an environment with the `id {env_guid}`  a user can access. For more details on how to get the `id {env_guid}`, refer to [Fetch Environment GUID](#fetch-environment-globally-unique-identifier-guid).

**Signature**

```
 https://api.voltmx.com/api/v1_0/environments/{env_guid}/publish/{publish_id}
```

**Method**

PUT

**Request Headers (Mandatory)**

*   X-VoltMX-Authorization : {Auth Service Token}
*   Content-Type : {application/json or application/x-www-form-urlencoded}
*   Accept : {application/json}
*   **Cookie : {Value from Set-Cookie header in the response of POST /publish API}  
    **You can get the set-cookie header from the Initiate Publish APIs
*   Referer : [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/) (The refer generates the URL required for next step of publishing.)

**Request Headers (Optional)**

*   X-VoltMX-RequestId : {Request Id}
*   X-HTTP-Method-Override

**Request Body**

```
 
Optional  
  
action : cancel  | continue ( Default value is “continue” )
```

**Response**

*   **Sample Success Response**:
```
 HTTP 200 OK
```

*   **Sample Success Response Body**:
```
 
    {
    	“_links” : {
    		“self” : {
    			“href” : “https://accounts.voltmx.com/api/v1_0/environments/env_guid/publish/apps/{publish_id}”
    		}
    	}
    	"status" : true,
    	"message" : "Success",
    	"publish_id" : "<GUID>",
    	"next_step" : true,
    	"next_step_description" : "<Message>"
    }
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```
*   **Sample Failure Response - if export failed due to an internal failure**:
```
 HTTP 500 Internal Server Error
```
*   **Sample Failure Response Body**:
```
 
    {
    "domain": "accounts"
    "mfcode": [error-code], /* a number/string based on the domain */
    "message": "Message",
    "details": [Details of Error Message],
    	"requestid": “Request Id”
    "httpstatus": "[Http Status String]"
    }
    
```

### Unpublish

Similar to publish, unpublishing of a Volt MX Foundry app is a multi-step workflow. During unpublishing an app, the `next_step` object in the response of the unpublish API decides whether the next step to be executed.

#### Initiate Unpublish

**Signature**

```
 https://api.voltmx.com/api/v1_0/environments/{env_guid}/unpublish
```

**Method**

POST

**Request Headers (Mandatory)**

*   X-VoltMX-Authorization : {Auth Service Token}
*   Content-Type : {application/json or application/x-www-form-urlencoded}
*   Accept : {application/json}
*   Referer : [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/) (The refer generates the URL required for next step of unpublishing.)

**Request Headers (Optional)**

*   X-VoltMX-RequestId : {Request Id}
*   X-HTTP-Method-Override

**Request Body**

```
 
Mandatory  
  
app_id : Id of the Application to be published. For details on how to fetch the app id, refer to [Fetch App ID](#fetch-app-globally-unique-identifier-guid)
```
```
 
Optional  
  
action : release\_lock (This action releases the previous locks on the app before attempting publish). If the action parameter is not provided, the value will be set to unpublish by default.
```

**Response**

*   **Sample Success Response**:
```
 HTTP 201 CREATED
```

*   **Sample Success Response Headers**:
```
 “Set-Cookie” : “<Cookies>”
```

*   **Sample Success Response Body**:
```
 
    {
    	“_links” : {
    		“self” : {
    			“href” : “https://accounts.voltmx.com/api/v1_0/environments/env_guid/unpublish/apps/{publish_id}”
    		}
    	}
    	"status" : true,
    	"message" : "Success",
    	"publish_id" : "<GUID>",
    	"next_step" : true,
    	"next_step_description" : "<Message>"
    }
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```
*   **Sample Failure Response - if export failed due to an internal failure**:
```
 HTTP 500 Internal Server Error
```
*   **Sample Failure Response Body**:
```
 
    {
    "domain": "accounts"
    "mfcode": [error-code], /* a number/string based on the domain */
    "message": "Message",
    "details": [Details of Error Message],
    	"requestid": “Request Id”
    "httpstatus": "[Http Status String]"
    }
```
    
> **_Note:_**  After a successful response from the initiate unpublish operation API, users must call the following "PUT" API. The PUT API should contain a header `Cookie` with the value from the `Set-Cookie` header of the API response.
    

#### Continue Unpublish

The API helps you to continue unpublishing the services inside the application to an environment with the `id {env_guid}` that the user can access. For more details on how to get the  `id {env_guid}`, refer to [Fetch Environment GUID](#fetch-environment-globally-unique-identifier-guid).

**Signature**

```
 https://api.voltmx.com/api/v1_0/environments/{env_guid}/unpublish/{publish_id}
```

**Method**

PUT

**Request Headers (Mandatory)**

*   X-VoltMX-Authorization : {Auth Service Token}
*   Content-Type : {application/json or application/x-www-form-urlencoded}
*   Accept : {application/json}
*   Cookie : {Value from Set-Cookie header in the response of POST /unpublish API}
*   Referer : [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com/) (The refer generates the URL required for next step of unpublishing.)

**Request Headers (Optional)**

*   X-VoltMX-RequestId : {Request Id}
*   X-HTTP-Method-Override

**Request Body**

```
 
Optional  
  
action : cancel  | continue ( Default value is “continue” )
```

**Response**

*   **Sample Success Response**:
```
 HTTP 200 OK
```

*   **Sample Success Response Body**:
```
 
    {
    	“_links” : {
    		“self” : {
    			“href” : “https://accounts.voltmx.com/api/v1_0/environments/env_guid/unpublish/apps/{publish_id}”
    		}
    	}
    	"status" : true,
    	"message" : "Success",
    	"publish_id" : "<GUID>",
    	"next_step" : true,
    	"next_step_description" : "<Message>"
    }
    
```
*   **Sample Failure Response - if a user does not have access to the workspace**:
```
 HTTP 401 Unauthorized
```
*   **Sample Failure Response - if export failed due to an internal failure**:
```
 HTTP 500 Internal Server Error
```
*   **Sample Failure Response Body**:
```
 
    {
    "domain": "accounts"
    "mfcode": [error-code], /* a number/string based on the domain */
    "message": "Message",
    "details": [Details of Error Message],
    	"requestid": “Request Id”
    "httpstatus": "[Http Status String]"
    }
```
