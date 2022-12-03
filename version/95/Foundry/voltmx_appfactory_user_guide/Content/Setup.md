                           

Creating an App Factory project
===============================

App Factory uses a job process to perform tasks such as creating new projects and running tests cases. After you sign in to App Factory, the console displays an overview of all the configured jobs. The Volt MX cloud account name is displayed on the upper-right corner. You can sign-out of the console by clicking **log out**.

The left panel displays actions that you can perform by using jobs. Additionally, there are quick links that you can follow to access documentation, or to create a new project. Below the left panel, you can view the jobs that are currently in the **Build Queue**. You can also view a list of nodes where jobs should be executed (Build Executor Status).

The main panel of the console displays a list of projects, in which you can view the status indicator of a folder or a job. The columns display a weather icon, the name of the project, the date on which the last build succeeded, the date on which the last build failed, and the duration of the last build.

The weather icon specifies the stability of the project. The weather icon can display the following statuses.

*   **Sun with a cloud**: Specifies that the project is healthy and is working properly
*   **Cloud with rain**: Specifies that the project continues to fail
*   **Cloud with a single drop**: Specifies that the project has started failing

![](Resources/Images/MyAppFactory_Projects.png)

> **Note:**  
While creating a project, you can select Iris, Foundry, or both. If you create a new project with the same name as an existing project, App Factory overrides the structure of the existing project.  
  
HCL recommends that you use the override only for Iris projects, and not for Foundry projects. For more information, refer to the [Known Issues](Known_Issues.md#Upgrading).  

To set up an app for the first time in App Factory Console, follow these steps:

1.  Open the **App Factory Console** in a web browser, and then sign-in by using your Volt MX cloud credentials.  
    If you do not have a Volt MX cloud account, contact your administrator to get access to App Factory and the Volt MX cloud.
2.  Click **New App Factory Project** link in the left panel. The **New App Factory Project** page appears.
    
3.  Configure the project parameters. For more information about the parameters, refer to the following sections.
    
    [![](Resources/Images/NewProject_V9SP2_thumb_750_0.png)](Resources/Images/NewProject_V9SP2.png)
    
    <table style="mc-table-style: url('Resources/TableStyles/Basic.css');width: 70%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 25%;"> <col class="TableStyle-Basic-Column-Column1" style="width: 45%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><b>PROJECT_NAME</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">Specifies the name of the Iris project. The project name can be alphanumeric, and must include a minimum of 4 characters and a maximum of 17 characters. The project name should start with an alphabet.</td></tr></tbody></table>
    
4.  Click **BUILD**.

<table style="width: 80%;border-left-style: none;border-left-width: 0pt;border-left-color: #ccc;border-right-style: none;border-right-width: 0pt;border-right-color: #ccc;border-top-style: none;border-top-width: 0pt;border-top-color: #ccc;border-bottom-style: none;border-bottom-width: 0pt;border-bottom-color: #ccc;"><colgroup><col> <col></colgroup><tbody><tr style="border: none;"><td style="text-align: left;vertical-align: top;padding-left: 5px;padding-right: 5px;padding-top: 5px;padding-bottom: 5px;border-left-style: none;border-left-width: 0px;border-left-color: #fff;border-right-style: none;border-right-width: 0px;border-right-color: #fff;border-top-style: none;border-top-width: 0px;border-top-color: #fff;border-bottom-style: none;border-bottom-width: 0px;border-bottom-color: #bbb;"><img src="Resources/Images/Build_History.png" style="border-left-style: solid;border-left-width: 1px;border-left-color: #dcdcdc;border-right-style: solid;border-right-width: 1px;border-right-color: #dcdcdc;border-top-style: solid;border-top-width: 1px;border-top-color: #dcdcdc;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;"></td><td style="text-align: left;vertical-align: top;padding-left: 5px;padding-right: 5px;padding-top: 5px;padding-bottom: 5px;border-left-style: none;border-left-width: 0px;border-left-color: #fff;border-right-style: none;border-right-width: 0px;border-right-color: #fff;border-top-style: none;border-top-width: 0px;border-top-color: #fff;border-bottom-style: none;border-bottom-width: 0px;border-bottom-color: #bbb;">A new project with a specified PROJECT_NAME is created. In the <b>Build History</b>, you can find the status of the last triggered build. If the job status indicator is a green tick, the job is successful. If the job status indicator is a red circle, then the job did not pass.</td></tr></tbody></table>

After the job execution is complete, the project is created and can be viewed on the landing page of App Factory.

![](Resources/Images/AppCreatedView.png)
