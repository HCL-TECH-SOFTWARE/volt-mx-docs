                          

Create an iOS Application Extension
-----------------------------------

An iOS application extension lets you extend custom functionality and content beyond your application, making it available to users while they are interacting with other applications or the iOS system. For example, your application could appear as a widget on the iOS Today screen, or you could add a custom interface for your application's notifications.

You create an iOS application extension in Volt MX Iris using a custom App Extension project. You can use the **New Project** wizard to create a custom iOS application extension project, a custom Volt MX Iris Reference Architecture project, a custom Free Form JavaScript project, or a project that is built from sample applications and components. For information on the different types of Volt MX Iris projects, see [Types of Projects](TypesOfProjects.md).

To create a new custom iOS application extension, follow these steps: 

1.  On the **File** menu, click **New Project** to open the **Start a New Project** screen of the **New Project** wizard.
2.  Select **Create Custom App**, and then click **Choose**. Volt MX Iris opens the **Project Type** screen of the **New Project** wizard.
3.  In the **Project Name** text box, enter a name for your application extension project.

*   A project name should contain fewer than 18 characters. You cannot use any special characters or spaces in the project name.
*   A project name can be alphanumeric. However, the first character of a project must be an alphabet.
*   Do not use any of the following reserved keywords as a project name: authService, workspace, mfconsole, vpns, middleware, accounts, syncservice, syncconsole, services, admin, middleware, and appdownload.

7.  Select **App Extension**, and then click **Next** to open the **Choose App Extension Type** dialog box.  
    
    You can create any of the following types of extensions:
    
    *   **Action Extension**. An Action extension manipulates or views content originating in a host application. For example, an Action extension might let a user edit an image in a document viewed in a text editor, or view a selected item in a different format or language.
    *   **iMessage**. An iMessage extension interacts with the Messages application. For example, an iMessage extension could let users create and share content, add stickers, or make payments without leaving their conversations.
    *   **Intents**. An Intents extension handles tasks related to supporting Siri integration with your application. Siri and Maps interact with your application through the Intents extension. The Intents extension directs Siri to the objects capable of responding to user requests.
    *   **Intents UI**. An Intents UI extension customizes the Siri or Maps interface after handling a task related to supporting Siri integration with your application.
    *   **Notification Content**. A Notification Content extension handles tasks that your application can perform in response to a delivered notification.
    *   **Share Extension**. A Share extension posts to a sharing web site, or shares content with others. A Share extension gives users a convenient way to share content with other entities, such as social sharing websites or upload services. For example, in an application that includes a Share button, a user could choose a Share extension that represents a social sharing website and then use it to post a comment or other content.
    *   **Today Extension**. A Today extension gets a quick update or performs a quick task in the Today view of Notification Center. For example, a user could check current stock prices or weather conditions, see the current day’s schedule, or mark a current task item as done.

1.  Select an extension type, and then click **Add** to open the **Configure App Extension** dialog box.

1.  Enter a display name, and then click **Finish**.

By default, Volt MX Iris creates folders for modules and resources, and an _Info.plist_ information property list file. You can use the code editor to make changes to the plist xml.

If necessary, you can import or add a native functions module to the project by selecting **Manage Native Functions** from the **Edit** menu.

For information on the iOS application extension programming interface, see [App Extension API for iOS](../../../Iris/iris_api_dev_guide/content/app-extension-ios.md).

For information about creating a project from sample applications and components, see [Create a Project from Sample Applications and Components](CreateFromSampleApp.md). For information about creating a custom Volt MX Iris Reference Architecture project, see [Create a Volt MX Iris Reference Architecture Project](CreateKRAProject.md). For information about creating a custom free form JavaScript project, see [Create a Free Form JavaScript Project](CreateNewProject.md).

  
| Rev | Author | Edits |
| --- | --- | --- |
| 8.0 | SHS | SHS |
| 7.3 | SHS | SHS |
