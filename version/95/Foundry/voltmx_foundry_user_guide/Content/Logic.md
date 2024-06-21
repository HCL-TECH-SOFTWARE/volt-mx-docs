# <madcap:keyword term="Node.js">Logic - API Management</madcap:keyword>

The logic services feature in <madcap:variable name="MyVariables.VoltMX">Foundry helps you import and integrate Node.js services (APIs) directly into <madcap:variable name="MyVariables.VoltMX">Foundry for developing server-side and networking applications. You can now enhance the capability of your <madcap:variable name="MyVariables.VoltMX">Foundry applications by adding custom services that are created within Node.js packages/projects. Node.js is an open-source and cross-platform runtime environment. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on Mac OS, Microsoft Windows, and Linux. Node.js also provides a rich library of JavaScript modules that simplify the development of web applications using Node.js. Currently, <madcap:variable name="MyVariables.VoltMX">Foundry supports Node.js V6.2.2 or above.</madcap:variable></madcap:variable></madcap:variable></madcap:variable>

## <a name="Node.js"></a>Node.js Package Structure

A Node.js package contains the following folders and files.

**Swagger.json:**

*   The Swagger.json file includes all paths for services / APIs of the Node.js package.
*   The `host` key should be present and hostname should be **localhost** and port value must be within **9000 - 10000.**
*   The `basePath` key should be present and value should with `/services/` and followed by user app base path.
*   The `mfidentitylevel`, which is optional, is used to enable auth protection for the resources. Possible values are: `public`, `protected`, and `anonymous`.

The following is a sample code for swagger.json.

<pre><code>
 {
  "info": {
    "title": "VoltMX Foundry Logic (Node.js) sample application for managing Contacts",
    "version": "1.0.0",
    "description": "This sample application demonstrates use of Logic (Node.js) app in VoltMX Foundry"
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
</code></pre>


**Package.json:**

*   The Package.json file contains Node.js module dependencies.

*   The script `start` key must be present. VoltMX Foundry logic services uses the start key to start the user app. The following is a sample code for package.json.

    <pre><code>
        {
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
    </code></pre>


### <a name="UserApp"></a>Sample Node.js Package Structure

User app: A user app is built on express JS. The following is a sample folder structure of a user app (Node.js package).

<pre><code>
 Sample_USERAPP
├───bin
     |_www
├───public
├───routes
      |_ contact.js (Add your routes by adding new JS file here if you are using VoltMX Foundry sample app)│
      
├───views
├───app.js
├───package.json
├───swagger.json
</code></pre>


## <a name="How"></a>How Node.js Works in <madcap:variable name="MyVariables.VoltMX">Foundry</madcap:variable>

1.  Once you build a node.js package (in a .zip file), you need to import the package file into <madcap:variable name="MyVariables.VoltMX">Foundry Console.</madcap:variable>
2.  Publish the Node.js package into the Node.js runtime server through the console.

    Node.js services published from the package are available in the **<madcap:variable name="MyVariables.VoltMX">Foundry Console > Apps > Configure Services > Logic</madcap:variable>** tab.

3.  You can then integrate/associate services created in Node.js packages to <madcap:variable name="MyVariables.VoltMX">Foundry applications.</madcap:variable>
4.  Finally, the app needs to be published by selecting a Node.js environment.

Ensure that your package details (files and folders) are zipped in the root of the .zip file.

## <a name="Benefits"></a>Benefits of Node.js App Development

The logic services feature offers the following advantages for quickly mobilizing Node.js services in <madcap:variable name="MyVariables.VoltMX">Foundry for building apps:</madcap:variable>

*   Logic services exposes services created in Node.js helps you use custom Node.js services for building mobile apps.
*   Integrate custom services (APIs) created in Node.js language directly into <madcap:variable name="MyVariables.VoltMX">Foundry apps, and develop server-side and networking applications.</madcap:variable>
*   Protect Node.js services (APIs) by setting security levels that control <madcap:variable name="MyVariables.VoltMX">Foundry Identity services for authentication of apps users.</madcap:variable>
*   Build scalable network applications using Node.js technology in <madcap:variable name="MyVariables.VoltMX">Foundry apps.</madcap:variable>
*   Node.js supports a non-blocking input/output model that makes it lightweight and efficient.

## <a name="Use"></a>Use Cases

*   For **creating real-time web apps**: Node.js technology improves the performance and development of web apps.
*   For **creating Web sites**: Node.js technology helps you share code between the browser and the back end.

## <a name="NodeJS_Limits"></a>Limitations

Read the following limitations for Node.js services before associating the services with <madcap:variable name="MyVariables.VoltMX">Foundry apps.</madcap:variable>

*   Currently, one Node.js package for one user is allowed.
*   Logic services tab support is available only for <madcap:variable name="MyVariables.VoltMX">Cloud.</madcap:variable>

## <a name="Prerequi"></a>Prerequisites

*   Always use the `npm install save` option to install any modules.

    For example, to add the package in dependencies, follow the commands:

    `npm install --save my_dep`

    or

    `npm install -S my_dep`

    The above commands ensure that all the dependencies are updated to `package.json` file.

*   Ensure that your package details (files and folders) are zipped in the root of the .zip file.
*   Ensure the port specified in swagger.json range starts from 9000 to 10000\.
*   Ensure that the port in swagger.json should match with the one specified in the application code.

*   Avoid the `npm_modules` folder in the final .zip file, which you want to upload to <madcap:variable name="MyVariables.VoltMX">Foundry. The `npm_module` folder increases unnecessary package file size.

     The user app should not depend on PORT environment variable. By default, if you are using **express-generator** to generate an express basic project, the `bin/www` folder will have a PORT environment variable to refer to port value. In the `bin/www` folder, use port number directly.  

    For example,  

    `var port = normalizePort(process.env.PORT || '3000');`

    will become  

    `var port = normalizePort('9000');`

    </madcap:variable>

## <a name="Logging"></a>Logging Service Support for User App

The following sample code is to enable logging in the user apps. Using the mflogger, the user app logs can also be captured.

<pre><code>
 let mflogger;
// VoltMX logger to capture application logs to display using logging service
try {// The following require statement imports the admin app's logging service into the user app through which user can capture logs.mflogger = require(process.env.KONY_LOGIC_LOGGER);} catch(e) {// If the above statement fails, all the user app logs are captured in the default console output.mflogger = console;
}  
</code></pre>

Use the `mflogger` instance for logging in the user app. Supported logging methods: `debug`, `info`, `warn`, and `error`.

`mflogger.info('Message to log ...');`

## <a name="NodeJSTroubleshooting"></a>Troubleshooting

**Unauthorized**: If you see the following message indicates that your endpoint resource is protected by <madcap:variable name="MyVariables.VoltMX">Foundry identity services configured for your application. So you need to generate <madcap:variable name="MyVariables.VoltMX">Foundry login token and provide it as part of header with name as `X-VoltMX-Authorization`</madcap:variable></madcap:variable>

<pre><code>
 {
    "message": "Authentication failed"
 } 
</code></pre>

**Error**: If you see the following error, unpublish the user package from the **API Management > Logic** tab, and re-publish it.

<pre><code>
 {
    "error": "Connection error."
 }  
</code></pre>

For technical questions, suggestions, and comments, or to report problems on <madcap:variable name="MyVariables.VoltMX">product line, contact [support@voltmx.com](mailto:productsupport@voltmx.com).</madcap:variable>


## <a name="Node.js2"></a>Node.js Services Integration in <madcap:variable name="MyVariables.VoltMX">Foundry</madcap:variable>

Node.js services integration in <madcap:variable name="MyVariables.VoltMX">Foundry apps involves the following two steps:</madcap:variable>

1.  [How to Publish Node.js Package into Node.js Runtime Server in API Management](Logic_Publish_API_Management.htm). This section details how to import a Node.js package into <madcap:variable name="MyVariables.VoltMX">Foundry Console and publish the package to the Node.js Runtime Server.</madcap:variable>
2.  [How to Integrate Node.js Services into <madcap:variable name="MyVariables.VoltMX">Foundry Apps</madcap:variable>](Logic_in_Apps.htm#NodeJSMFpublish). This section details how to integrate Node.js services to <madcap:variable name="MyVariables.VoltMX">Foundry apps.</madcap:variable>


