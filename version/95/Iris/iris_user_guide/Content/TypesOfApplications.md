                          


Types of Applications
=====================

In Volt MX Iris, you can create several different types of digital application projects.

You can create, build, and deploy applications using various approaches. At one extreme, you can use a given platform’s native SDK, while at the other extreme, you can use traditional web technologies. And in between these extremes, you can use a combination of the two. The build and deployment modes available in Volt MX Iris are as follows:

*   **Native.** Representing one extreme, these applications reside on the device, where all the forms and user interface (UI) definitions of the widgets are packaged along with the application.
*   **Hybrid.** These applications are a variant of native applications, where the layout, rather than being rendered by native SDK widgets, is rendered using a native shell provided by the respective platforms (_WKWebView_ for iPhone and _WebView_ for Android). The native SDK is invoked only for native device features like Camera, Contacts, and so on. Hybrid applications are supported only on the iPhone and Android platforms.
*   **Single Page Application ](SPA).** With these web applications, all the.md, CSS, and JavaScript is retrieved with a single page load. The page does not automatically reload during user interaction with the application or control the transfer to another page. Once loaded, the application requires server interaction only for data retrieval. Unlike a traditional mobile web application, the native browser on the device executes all the application logic locally, including validations, UI rules (hiding or showing fields), form transitions/navigations, and so on. In a SPA, all the application screens are expressed as a JavaScript model/CSS (unlike JSP, or ASPX in a typical Mobile Web application). This JavaScript model is downloaded to the client-side with the first page download and resides on the client for the life of the session. SPA also supports Internet Explorer 10 from release 5.5 onwards.
*   **Desktop Web.** These run on a desktop web browser. The supported browsers include Firefox 3.6 and above, Internet Explorer 8 and above, Safari, and Chrome. Desktop Web applications can only be built for JavaScript projects.

The characteristics of each of the application types are summed up in the following table.  
 

  
|**Characteristics** ||  **Application Type** |||
| --- | --- | --- | --- | --- |
|| **Native** | **Hybrid**  | **SPA** | **Desktop Web** |
| Is available as a natively deployable package (.app , .apk, .bar, .xap, and .ipa) | Yes | Yes | No | No |   
| Uses the native widgets, such as the title bar, application menu, ListView, TableView, Search bar, and so on. | Yes | No | No | No |
| Has access to native device functions like GPS, Camera, Contacts, Accelerometer, Encryption libraries ](and thousands of other native SDK functions) | Yes | [Yes]( "Native SDK functions are accessed using JavaScript bindings." ) | [Yes]( "Only the APIs exposed and implemented as part of the.md5 specification." ) | [Yes]( "Only GPS is supported." ) |
| Can be distributed through the app stores (Apple App Store, Google Play, and Windows Phone App Marketplace) | Yes | Yes | No | No |
| UI elements (forms, images, and internationalization content) are packaged along with the application | Yes | Yes | No | No |
| Server access only for downloading data | Yes | Yes | [Yes]( "After the first page is downloaded, the application accesses the server only to fetch business data." ) |  |
