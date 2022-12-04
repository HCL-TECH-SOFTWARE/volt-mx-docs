                          


Volt MX  IQ
==========

Volt MX  IQ is a chatbot designed to help Volt MX Iris users through their journey to create applications for various channels on Volt MX AppPlatform. The chatbot can assist users in various ways: building a binary, importing projects, searching for help materials on Volt MX Base Camp in a single query, and more.

Volt MX  IQ interacts with users and provides answers for some FAQs. This chatbot can answer casual queries such as "how to upgrade Iris?" and "what is my Iris version?". Using Volt MX IQ, users can also get information such as the version of Iris and Foundry that is installed on their system.

The chatbot also helps users in optimization, translation, and in helping them complete many more time-consuming tasks with ease. It uses advanced AI algorithms to provide the best-suited recommendations that enhance users’ app-building experience.

> **_Important:_** Users must have an internet connection for Volt MX IQ to work. If the network connectivity is lost after launching Volt MX IQ, users must reconnect to the internet and then click the Refresh icon in the chat window.

Enable Volt MX IQ
-----------------

The Volt MX IQ feature is available by default for all Volt MX Developers and users who are **Early adopters** of Volt MX Iris.

Non-VoltMX users (who are not Early adopters) can enable the Volt MX IQ feature manually. To do so, follow these steps:

1.  Open the Iris configuration file that is located at: **<installation>\\install\_config.js**
    
2.  Search for the **enableIQChat** key. If `exports.enableIQChat!=1` or `exports.enableIQChat=null` is already available, modify it to `exports.enableIQChat=true`. Otherwise add the `exports.enableIQChat=true` entry.
    
    > **_Note:_** To disable Volt MX IQ, modify `exports.enableIQChat=true` to `exports.enableIQChat!=1`.
    
3.  Save and close the **install\_config.js** file.
    
4.  Restart Volt MX Iris.
    
    The Volt MX IQ icon appears at the lower-left corner of Iris.
    
    ![](Resources/Images/VoltMXIQIcon.PNG)
    

Interact with Volt MX IQ
------------------------

In Volt MX Iris, you can find the Volt MX IQ icon at the lower-left corner of the canvas. When you click on the icon, a chat window opens; using which you can start interacting with Volt MX IQ.

To open the Volt MX IQ, follow these steps:

1.  Open Volt MX Iris.
2.  From the left navigation bar, click on the Volt MX IQ icon.  
    The Volt MX IQ chat window is displayed.
3.  Enter your query into the chat box. Volt MX IQ then provides an appropriate response.

![](Resources/Images/IQ1__002_.gif)

Volt MX  IQ responds in different ways based on the type of query entered in the chat box. The types of responses of Volt MX IQ when you enter a query are as follows:

*   Provides an appropriate response in the chat window.
*   Performs action on Volt MX Iris.
*   Prompts for more information. In this case, Volt MX IQ requires more information to provide the appropriate response for your query. If you do not want to continue the conversation, you can enter **cancel** in the chat box.

> **_Note:_** In Volt MX Iris, you can move or resize the Volt MX IQ chat window. Drag the lower-right part of the chat window to resize it.  
You can also move the Volt MX IQ chat window out of Volt MX Iris. Click the pop-out icon at the upper-right corner of the chat window to move it out of Volt MX Iris. In the popped-out window, you can click the pop-in icon at the upper-right corner of the chat window to move it inside the Volt MX Iris.

Capabilities of Volt MX IQ
--------------------------

Volt MX  IQ can perform the following tasks:

*   [Design Suggestions](#Pattern)
*   [Generic search](#generic-search)
    
    *   [Search from HCL Forge](#search)
    *   [Search from Volt MX Base Camp](#base-camp-search)
    *   [Search from YouTube](#youtube-search)
    *   [Search from Hike Catalog](#hike-search)
*   [Translate project to different languages](#translation)
    
*   [Iris actions](#iris-actions)
    
    *   [Clean up project](#project-clean-up)
        
    *   [Import/ Export project (Local/ Cloud)](#import-and-export-project-local-cloud)
        
    *   [Import components (Local/ Cloud)](#import-component-local-cloud)
    *   [Run project](#run-project)
        
    *   [Build project](#build-project)
        
    *   [Test Project](#test-project)
    *   [Analyze Project](#analyze-project)

### Volt MX IQ Design Suggestions

The Volt MX IQ Design Suggestions feature assists you to develop applications faster. Volt MX IQ predicts the UI of your form and recommends relevant designs. These predictions can help you to reuse existing components and designs, without having to create them from scratch.

For instance, if you design a form with two TextBox widgets, and one Button widget, Volt MX IQ predicts that you could be creating a Login form and recommends designs such as the [Login](https://marketplace.hclvoltmx.com/items/login-advanced?search=login) component from [HCL Forge](https://marketplace.hclvoltmx.com/) .

Furthermore, Volt MX IQ can detect duplicate designs in your project. To fetch the duplicates of a design, type a command, such as “identify duplicates”, in the Volt MX IQ chat window and press Enter. A list of duplicate design groups is displayed in the Volt MX IQ Design Suggestions window. You can then view each duplicate design and copy it to a form.

#### Interact with Volt MX IQ Design Suggestions

While you are designing a form, Volt MX IQ compares the UI of the form with the existing designs from the current project and HCL Forge . Volt MX IQ then generates a list of recommended designs based on the visual, textual, and widget hierarchical similarities of the designs.

> **_Note:_** For Volt MX IQ to show design suggestions for a form, you must add at least three widgets to the form.

![](Resources/Images/PRShowPattern.gif)

When similar designs are detected in the current project or in HCL Forge , a Volt MX IQ bubble appears on the lower-left corner of the screen. The bubble provides the following options:

*   **Yes:** Enables you to view a list of design suggestions in the **VoltMX IQ Design Suggestions** window.
*   **Pause:** Enables you to pause the design suggestions for an hour.
*   **Turn Off Suggestions:** Enables you to disable the design suggestions until they are re-enabled.

Here is the list of sources from which you receive the suggestions:

*   [Current project](#CurrentProject)
*   [HCL Forge](#Marketplace)
*   [VoltMX IrisLibrary](#Library)

**Designs from the Current Project**

You can perform the following actions on a design suggestion from the current project:

*   **Navigate:** Navigates you to the location of the design in the project.
    
    ![](Resources/Images/PRNavigate.gif)
    
*   **Copy:** Copies the design to the clipboard.
    
*   **Convert to component:** Enables you to convert a design suggestion into a component without contract, and imports it into the project.
    
    ![](Resources/Images/PGReplace.gif)
    

**Components from HCL Forge**

You can perform the following actions on a design suggestion from HCL Forge :

*   **View:** Opens the component in HCL Forge and displays details of the component.
    
    ![](Resources/Images/PRView.gif)
    
*   **Download:** Downloads the component into your local system.
    
    > **_Note:_** Volt MX IQ Design Suggestions is an offline feature. However, you must have an active Internet connection to download a recommended HCL Forge component.
    

**Designs from Default Library**

You can perform the following action on a design suggestion from the Default library:

*   **View:** Displays the suggested design in the **Default Library** section of Iris.

#### Enable/ Disable Design Suggestions

In Iris, you can enable or disable the design suggestions from the main menu directly. To do so, follow these steps:

1.  From the main menu, click **Help**.
2.  If you've paused or turned off design suggestions, you will see **Enable Design Suggestions**. Click **Enable Design Suggestions** to fetch the design suggestions for the current form.  
      
    If the design suggestions is already enabled, you will see **Disable Design Suggestions**. Click **Disable Design Suggestions** to stop the design suggestions from being displayed.

You can also enable or disable the design suggestions by using a command in the Volt MX IQ chat window. For example, you can enter commands such as stop design suggestions, or turn on suggestions.

![](Resources/Images/GIFS/DS_enableDisable.gif)

### Generic Search

The Generic search functionality helps you fetch data from HCL Forge , Base Camp, and YouTube, based on the availability of results.

Here are some generic search queries:

*   Segment
*   What is DBX?
*   How to integrate FFI?

#### HCL Forge Search

The HCL Forge search feature is integrated with Volt MX IQ. Using the bot, you can search for components from HCL Forge , and import those components into your Iris project.

To fetch results exclusively from HCL Forge , enter @marketplace <Text query to search in HCL Forge >

![](Resources/Images/IQ2.gif)

Here are a few HCL Forge search queries:

*   @markerplace Placelocator
*   @marketplace login
*   @marketplace Rangeslider

#### Volt MX Base Camp Search

The Volt MX Base Camp search functionality is integrated with Volt MX IQ. Using the bot, you can search for articles and documents in Base Camp. The bot shows a list of articles that are related to your query.

To fetch results exclusively from Volt MX Base Camp, enter @basecamp <Text query to search in Base Camp>

Some Base Camp search queries are as follows:

*   @basecamp NFI examples
*   @basecamp error in importing component
*   @basecamp what is preprocessor?

#### YouTube Search

The search in the Volt MX YouTube channel is integrated with Volt MX IQ. Using the bot, you can search for any videos on the Volt MX YouTube channel.

To fetch results exclusively from YouTube, enter @youtube <Text query to search in YouTube>

Here are a few YouTube search queries:

*   @youtube banking
*   @youtube javascript
*   @youtube creating a component

#### Hike Search

Using Volt MX IQ, you can search for any hike that is available in the hike catalog. When you type a query in the Volt MX IQ chat window, you will see a list of related hikes under the HIKES tab.

Each result displays basic information of a hike such as the name, number of steps, and a **PLAY HIKE** button. You can click **PLAY HIKE** to open the hike in Volt MX Iris.

To fetch results exclusively from the hike catalog, type @Hikes < Text query to search in Hike Catalog >

For example:

*   @hikes Creating a component
    
*   @hikes Action editor
    
*   @hikes Identity services
    

### Translation

Volt MX  IQ helps you translate an application into different languages by using the Google translate API. During translation, the text in an application is converted into equivalent i18n keys in the target language. The properties of widgets that are set through the Properties panel and through code are translated.

Default locale is the language that is displayed in an app when the app is launched during run time. You can configure or modify the default locale of an app from the Project Settings of Iris. If the default locale is not set already, Volt MX IQ updates the default locale to the language that you want to translate your app into.

From V9 SP1 GA, Volt MX IQ supports all locales supported by Google Translate. For the locales that are not directly supported by Iris, Google Translate is used for the translation internally, and the locale is added as a custom locale. Iris supports all the locales that are supported by Google Translate except Hebrew and Serbo-Croatian.

Translation can be done in two ways:

*   **Specify the target language:** You can specify the target language directly in your query.
*   **Bot prompts the language:** You can enter your query to translate the project without specifying the target language.

![](Resources/Images/IQ4__002_.gif)

Here are a few queries about translation:

*   Can you translate this app to German?
*   Translate this app to Spanish
*   Localize to Spanish
*   Can you translate this app?
*   Translate my app

### Iris Actions

Volt MX  IQ helps you save time by triggering small actions on Volt MX Iris, using commands in the bot. For the list of Iris actions that are supported on Volt MX IQ, refer [Iris actions.](VoltMXIQCommands.md)

Following are a few Iris actions.

#### Project Clean Up

Cleaning unused skins and actions from a Iris project improves the performance of Volt MX Iris at run time. Using Volt MX IQ, you can clean up the unused skins and actions from Iris project. It also gives the count of unused or duplicate elements, and provides an option to delete them.

Some queries about project clean up are as follows:

*   Clean my project
*   Sanitize my project
*   Project clean up
*   Clean unused items

#### Import and Export Project (Local/ Cloud)

The bot helps you import and export projects into Volt MX Iris.

*   **Import Project:** You can import the projects that are stored in the local storage or on the cloud. When you import a local project, the bot shows a list of related local projects in the file explorer. You can select the project that you want to import. When you import a cloud project, the cloud account window appears. You can then select the cloud project that you want to import.
*   **Export Project:** You can export a project to the local storage or to the cloud. When you export project locally, the current Iris project is zipped and stored in the local storage. When you export project to cloud, the current project is shared to cloud.

Here are a few queries about importing a project:

*   Import project from cloud
*   Import project from local
*   Import project
*   Export project

#### Import Component (Local/ Cloud)

You can import the following types of components into Volt MX Iris:

*   **Local components:** These components are imported from the local storage. When you import a local component, the bot shows you a list of components in the file explorer. You can then select the component that you want to import.
*   **Cloud components:** These components are imported from HCL Forge . When you search for a component from cloud, the HCL Forge window appears. You can search for a component and import the component from the HCL Forge window.

Here are a few queries on importing components:

*   Import local component
*   Import component
*   Import component from cloud

#### Run Project

Using the bot, you can run your current project. The bot helps you generate a live preview by triggering the action directly on Iris.

Some queries about running the project are as follows:

*   Run for iPhone
*   Run for Android
*   Run for web and Android

#### Build Project

Volt MX  IQ helps you build the current project for a required platform. You can generate the binaries by entering a build command in the bot. The bot triggers the build action directly on Iris.

Here are the queries on building your project for various platforms:

*   Build project
*   Build for Android
*   Build for iPhone
*   Build for Android tablet
*   Build project for iPad
*   Build for Android SPA
*   Build my project for iPhone SPA
*   Build for iPad SPA
*   Build project for Android tablet SPA
*   Build for Windows tablet
*   Build project for Windows tablet SPA
*   Build for Windows
*   Build for Windows SPA
*   Build for Desktop Web
*   Build for Desktop Kiosk

#### Test Project

Using Volt MX IQ, you can create new and open existing **Test Cases**, **Test Suites** and **Test Plans**. You can also run the **Test** **Suites** for a specific channel. When you provide any command to the bot, it will open the corresponding window inside the Volt MX Iris. Once the window is open, you can perform the tasks such as run, record, rename, play and save.

Here are the commands related to Test Cases that you can provide the bot.

*   create test-case
*   open test-case /<name of the test case.js file>
*   open test-case for mobile /<name of the test case.js file>
*   open test-case for tablet /<name of the test case.js file>
*   open test-case for desktopweb /<name of the test case.js file>
*   open test-case for SPA /<name of the test case.js file>

Here are the commands related to Test Suites that you can provide the bot. You must provide the channel for which you are testing while running these commands.

*   create test-suite
*   open test-suite for mobile /<name of the test suite.js file>
    
*   open test-suite for tablet /<name of the test suite.js file>
*   open test-suite for desktopweb /<name of the test suite.js file>
    
*   open test-suite for SPA /<name of the test suite.js file>
    
*   run test-suite for mobile /<name of the test suite.js file>
    
*   run test-suite for tablet /<name of the test suite.js file>
*   run test-suite for desktopweb /<name of the test suite.js file>
*   run test-suite for SPA /<name of the test suite.js file>

Here are the commands related to Test Plans that you can provide the bot. You must provide the channel for which you are testing while running these commands.

*   create test-plan
*   open test-plan for mobile /<name of the test plan.js file>
    
*   open test-plan for tablet /<name of the test plan.js file>
*   open test-plan for desktopweb /<name of the test plan.js file>
    
*   open test-plan for SPA /<name of the test plan.js file>
    

#### Analyze Project

Using Volt MX IQ bot, you can open the AI Assisted Development window to analyze and scan your project for any unused resources, skins, and widgets. You can also increase the performance of your application and check the fonts used throughout the application.

For more information on AI Assisted Development, click [here](AIAssisted.md#ai-assisted-development).

Here are the commands you can use to open the AI Assisted Development window.

*   Launch AI Assisted Development
*   Launch Cop
*   Launch Volt MX cop
*   Open AI Assisted Development
*   Open Cop
*   Open Volt MX cop

You can also open the AI Assisted Development window to display specific rule categories such as, Best Practices, Performance, and Style Guide. Here are the commands you can use to open the the AI Assisted Development window to specific categories.

*   Analyze <rule category>
*   Open <rule category>
*   Run <rule category>
