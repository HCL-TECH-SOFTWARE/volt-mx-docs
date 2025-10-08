                             

You are here: Bookmark and Refresh API

Bookmark and Refresh API
========================

Generally, app users access certain pages of a Desktop Web application more frequently than other pages. As a result, app users would want to bookmark a page to access it easily.

Volt MX  Iris provides the Bookmark and Refresh API for Desktop Web apps, which enables the developer to add some context information to the URL. Using the context added to URL, the app user is taken to the appropriate page of the application instead of always redirecting to the home page. When the app user bookmarks or shares a page, the URL carries necessary parameters to render the application accordingly.

An example of the URL in the Desktop web application built on Volt MX Iris would be:

http://xyz.voltmx.com/kdw/#frm1

The Bookmark and Refresh API uses `voltmx.application Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.application.addBMState](voltmx.application_functions_bookmarkrefreshapi.md#addBM) | Adds a specified key and value to the parameter list of the URL of the form. |
| [voltmx.application.getBMState](voltmx.application_functions_bookmarkrefreshapi.md#getBM) | Retrieves the list of parameters attached to a URL using the above add, set APIs. |
| [voltmx.application.removeBMState](voltmx.application_functions_bookmarkrefreshapi.md#remvBM) | Removes a specified key from the parameter list of the URL of the form. |
| [voltmx.application.resetBMState](voltmx.application_functions_bookmarkrefreshapi.md#resetBM) | Resets the state associated with the URL of a form. |
| [voltmx.application.setBMState](voltmx.application_functions_bookmarkrefreshapi.md#setBM) | Sets the bookmark state to the URL. |

 

Add the specified key value pairs to the application URL by using the [voltmx.application.addBMState](voltmx.application_functions_bookmarkrefreshapi.md#addBM) function. To add a JSON object containing key value pairs, use the [voltmx.application.setBMState](voltmx.application_functions_bookmarkrefreshapi.md#setBM) function. Once the context information is added to the URL, you can store the information in the browser.

You can then retrieve the key value pairs by using the [voltmx.application.getBMState](voltmx.application_functions_bookmarkrefreshapi.md#getBM) function.

If you want to delete the key value pairs from the URL, use the [voltmx.application.removeBMState](voltmx.application_functions_bookmarkrefreshapi.md#remvBM) function. To remove the JSON object containing the key value pairs, use the [voltmx.application.resetBMState](voltmx.application_functions_bookmarkrefreshapi.md#resetBM) function.

To view the functionality of the Bookmark and Refresh API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/BookmarkAPI)

![](resources/prettify/onload.png)
