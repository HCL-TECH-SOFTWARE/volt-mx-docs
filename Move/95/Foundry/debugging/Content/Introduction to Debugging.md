

Introduction to Debugging
=========================

While working with any software solution as you build and expand your services, you may run into several problems that you need to analyse and fix. We have tried to make this process simple for you, by providing a wide range of debugging mechanisms.

VoltMX Foundry provides three options to debug your application:

![](Resources/Images/VariousDebugOps.JPG)

Through this course, we will understand each mechanism with more details.

To understand this course better, we will try to explain each debugging option in detail by creating a simple **Book Store Management** application.

The main features of the application include:

*   Allow customers to orders a book, and track it.
*   Verify the number of books in the stock.
*   Track activities performed by the Store staff.
*   The planned application flow is as below :

A customer logs on to the website of the bookstore and submits an order for the required book. The system uses a web service to address this inquiry and to verify if the quantity currently in stock is sufficient to process the requested order. If the requested book is available in the inventory, the system generates a quotation that shows the price and other cost-related details of the book. Upon receiving payment, the item is dispatched with the billing address and other necessary details. Each action performed by the staff in the process of dispatching the order to the customer uses a web service. Take a look at the flow diagram below to understand this application better:

![](Resources/Images/Scenario_Image.png)

Using VoltMX Foundry, the Administrator for this application will be able to monitor all services in this application, and resolve problems quickly.

We have created this sample VoltMX Foundry application for you to play around with. You can download the application and import in into your VoltMX Foundry instance to get a hands-on feel of this course.

To handle book title searches, we have used an API provided by The NewYork Times as a [OpenAPI service in the Integration Services page](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/voltmxfoundry/voltmx_foundry_user_guide/Default.html#Services.md). You can refer the API spec [here](https://developer.nytimes.com/books_api.json#/Documentation).

The **Inventory Management** for the **Book Store** is handled by a **Storage Object** service in VoltMX Foundry. You can learn more about Storage services [here](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/mobilefoundry/voltmx_mobilefoundry_user_guide/Default.html#Objectservices.md#Storage_Object_Service?TocPath=Features|Object_Services|_____9).

The rest of this course will walk you thru debugging various facets of developing this application.

For more information, refer [How to Debug in VoltMX AppPlatform Tech Talk](https://basecamp.voltmx.com/s/article-detail/a046A00000Di50pQAB/tech-talk-how-to-debug-in-voltmx-app-platform)
