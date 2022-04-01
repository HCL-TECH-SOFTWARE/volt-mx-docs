---
layout: "documentation"
category: "voltmx_foundry_user_guide"
---
                              

User Guide: [APIs in API Management](API_Management.html) > How Node.js works in Foundry

Logic - API Management
======================

The logic services feature in Volt MX Foundry helps you import and integrate Node.js services (APIs) directly into Volt MX Foundry for developing server-side and networking applications. You can now enhance the capability of your Volt MX Foundry applications by adding custom services that are created within Node.js packages/projects. Node.js is an open-source and cross-platform runtime environment. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on Mac OS, Microsoft Windows, and Linux. Node.js also provides a rich library of JavaScript modules that simplify the development of web applications using Node.js. Currently, Volt MX Foundry supports Node.js V6.2.2 or above.

Node.js Package Structure
-------------------------

A Node.js package contains the following folders and files.

**Swagger.json:**

*   The Swagger.json file includes all paths for services / APIs of the Node.js package.
*   The `host` key should be present and hostname should be **localhost** and port value must be within **9000 - 10000.**
*   The `basePath` key should be present and value should with `/services/` and followed by user app base path.
*   The `mfidentitylevel`, which is optional, is used to enable auth protection for the resources. Possible values are: `public`, `protected`, and `anonymous`.

The following is a sample code for swagger.json.

{% highlight voltMx %} {
  "info": {
    "title": "VoltMX Foundry Logic (Node.js) sample application for managing Contacts",
    "version": "1.0.0",
    "description": "This sample application demonstrates use of Logic (Node.js) app in Volt MX Foundry"
  },
  "host": "localhost:9000", "basePath": "/services/mailapp",
  "swagger": "2.0",
  "paths": {
    "/api/v1/contact": {
      "post": {
        "tags": [
          "Contacts"
        ],
        "description": "Contact Details object",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Details",
            "description": "Contact Details",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Contact Details"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully created"
          }
        },
        "mfidentitylevel": "public"
      }
    }
  },
  "definitions": {
    "Contact Details": {
      "properties": {
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "rollNumber": {
          "type": "string"
        },
        "mobileNumber": {
          "type": "string"
        }
      }
    }
  },
  "responses": {},
  "parameters": {},
  "securityDefinitions": {},
  "tags": []
}
{% endhighlight %}

**Package.json:**

*   The Package.json file contains Node.js module dependencies.
*   The script `start` key must be present. Volt MX Foundry logic services uses the start key to start the user app. The following is a sample code for package.json.

{% highlight voltMx %} {
  "name": "Sample_USERAPP",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "hjs": "~0.0.6",
    "less-middleware": "1.0.x",
    "mfgateway": "^1.0.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0",
    "swagger-jsdoc": "^1.3.0"
  }
}

{% endhighlight %}

### Sample Node.js Package Structure

User app: A user app is built on express JS. The following is a sample folder structure of a user app (Node.js package).

{% highlight voltMx %} Sample_USERAPP
├───bin
     |_www  
│
├───public  
├───routes
      |_ contact.js (Add your routes by adding new JS file here if you are using Volt MX Foundry sample app)  
│  
├───views  
├───app.js
├───package.json
├───swagger.json
{% endhighlight %}

How Node.js Works in Volt MX Foundry
-----------------------------------

1.  Once you build a node.js package (in a .zip file), you need to import the package file into Volt MX Foundry Console.
2.  Publish the Node.js package into the Node.js runtime server through the console.
    
    Node.js services published from the package are available in the **VoltMX Foundry Console > Apps > Configure Services**.
    
3.  You can then integrate/associate services created in Node.js packages to Volt MX Foundry applications.
4.  Finally, the app needs to be published by selecting a Node.js environment.

> **_Important:_** Ensure that your package details (files and folders) are zipped in the root of the .zip file.

Benefits of Node.js App Development
-----------------------------------

The logic services feature offers the following advantages for quickly mobilizing Node.js services in Volt MX Foundry for building apps:

*   Logic services exposes services created in Node.js helps you use custom Node.js services for building mobile apps.
*   Integrate custom services (APIs) created in Node.js language directly into Volt MX Foundry apps, and develop server-side and networking applications.
*   Protect Node.js services (APIs) by setting security levels that control Volt MX Foundry Identity services for authentication of apps users.
*   Build scalable network applications using Node.js technology in Volt MX Foundry apps.
*   Node.js supports a non-blocking input/output model that makes it lightweight and efficient.

Use Cases
---------

*   For **creating real-time web apps**: Node.js technology improves the performance and development of web apps.
*   For **creating Web sites**: Node.js technology helps you share code between the browser and the back end.
    

Limitations
-----------

Read the following limitations for Node.js services before associating the services with Volt MX Foundry apps.

*   Currently, one Node.js package for one user is allowed.
*   Logic services tab support is available only for Volt MX Cloud.

Prerequisites
-------------

*   Always use the `npm install save` option to install any modules.
    
    For example, to add the package in dependencies, follow the commands:
    
    {% highlight voltMx %} npm install --save my_dep
    {% endhighlight %}
    
    or
    
    {% highlight voltMx %} npm install -S my_dep
    {% endhighlight %}
    
    The above commands ensure that all the dependencies are updated to `package.json` file.
    
*   Ensure that your package details (files and folders) are zipped in the root of the .zip file.
*   Ensure the port specified in swagger.json range starts from 9000 to 10000.
*   Ensure that the port in swagger.json should match with the one specified in the application code.

*   Avoid the `npm_modules` folder in the final .zip file, which you want to upload to Volt MX Foundry. The `npm_module` folder increases unnecessary package file size.
    
    > **_Important:_**  The user app should not depend on PORT environment variable. By default, if you are using **express-generator** to generate an express basic project, the `bin/www` folder will have a PORT environment variable to refer to port value. In the `bin/www` folder, use port number directly.  
      
    For example,  
    
    {% highlight voltMx %} `var port = normalizePort(process.env.PORT || '3000');`   
    
    {% endhighlight %}
    
    will become  
      
    `var port = normalizePort('9000');`
    

Logging Service Support for User App
------------------------------------

The following sample code is to enable logging in the user apps. Using the mflogger, the user app logs can also be captured.

{% highlight voltMx %} let mflogger;

// Volt MX logger to capture application logs to display using logging service
try {  
// The following require statement imports the admin app's logging service into the user app through which user can capture logs.  
mflogger = require(process.env.VOLTMX_LOGIC_LOGGER);  
} catch(e) {  
// If the above statement fails, all the user app logs are captured in the default console output.  
mflogger = console;
}  
{% endhighlight %}

Use the `mflogger` instance for logging in the user app. Supported logging methods: `debug`, `info`, `warn`, and `error`.

{% highlight voltMx %} mflogger.info('Message to log ...');
{% endhighlight %}

Troubleshooting
---------------

**Unauthorized**: If you see the following message indicates that your endpoint resource is protected by Volt MX Foundry identity services configured for your application. So you need to generate Volt MX Foundry login token and provide it as part of header with name as `X-VoltMX-Authorization`

{% highlight voltMx %} {
    "message": "Authentication failed"
} 
{% endhighlight %}

**Error**: If you see the following error, unpublish the user package from the **API Management**, and re-publish it.

{% highlight voltMx %} {
    "error": "Connection error."
}  
{% endhighlight %}

For technical questions, suggestions, and comments, or to report problems on HCL product line, contact [support@voltmx.com](mailto:support@voltmx.com).
