                          

Troubleshooting
===============

This section contains about troubleshooting issues in the build and test process in the App Factory console by using Jenkins interface. For more information, refer to the following sections.

Downloading Log Files
---------------------

When a build fails, App Factory gathers the required logs and environment details in a zip file. To get help in resolving the build issues, you can download the log files and raise a support ticket with the Volt MX Support team. With the logs files and details, the Volt MX Support team can debug the problem and provide a solution.

Alternatively, you can extract the zip file to look for the captured data and find the reason for the build failures.

To download the log files, follow these steps.

1.  From the **Iris** folder of your project, navigate to the **Builds** sub-folder.
2.  Select the **buildIrisApp** job.
    
    ![](Resources/Images/Iris_Builds.png)
    
3.  From the **buildIrisApp** page, navigate to the failed stage.
    
    You can view the status of the build from the **Build History** section in the left pane.
    
    ![](Resources/Images/buildiris_Screenshot_Doc.png)
    
4.  For the failed build, click **Logs**. A zip file is generated and downloaded on to your local system.
5.  Extract the zip file and view the logs that are generated for the job.

The individual logs that are related to the channel builds are part of the parent zip file (buildIris). You can view the following build logs that resulted in the failure of the job.

![](Resources/Images/Zip_extract.bmp)

The **MustHaves** zip file in the folder is the channel on which the project is built. The zip contains the following log files.

![](Resources/Images/Must_Haves.png)

> **_Note:_** All the sensitive information (such as passwords) is displayed as \*.

Debugging Build Failure
-----------------------

As an administrator, you can view the build stages and find the cause for the build failure. You can then review the parameters or take appropriate action to recover the build.

For example, to debug a build failure by using the stage view, follow these steps.

1.  From the **Iris** folder of your project, navigate to the **Builds** sub-folder.
2.  Select the **buildIrisApp** job.

![](Resources/Images/Iris_Builds.png)

4.  On the **buildIrisApp** job page, navigate to the failed stage.
    
    ![](Resources/Images/TS_BuildFailView.png)
    
5.  Point to the failed stage, and then click **Logs**.

![](Resources/Images/TS_UnstableBuildLog.png)

7.  Navigate to the **Building KitchenSinkApp** link.

![](Resources/Images/TS_StageLogKitchenSink.png)

9.  Expand the **Building KitchenSinkApp** group, and then navigate to the failed build job.

![](Resources/Images/TS_StageLogKitchenSinkExpand.png)

11.  For the selected job, find the stage that failed.

![](Resources/Images/TS_BuildiOS.png)

13.  Point to the failed stage, and then click **Logs**.

![](Resources/Images/TS_BuildiOSFailStage.png)

15.  Explore the log details and find the reason for failure.

![](Resources/Images/TS_StageLogiOSBuildIPA.png)

17.  Find the error message that is printed. For example:  
```
01:55:50 Failed to create IPA file - Navigate to the step above and expend it to look for error of IPA generation
```
    
    ![](Resources/Images/TS_StageLogiOSBuildIPA1.png)
    
18.  Based on the error, take the appropriate action.

In case, if the error message does not show excessive information, an administrator can navigate to raw console log of a job that fails. There are several options to display **Console Output**. At first, the administrator can navigate to a job and select **Console Output** from drop-down menu under specific job id.

![](Resources/Images/TS_SelectConsoleOutput.png)

Administrator can now pick the specific job to open and select Console Log form the left panel.

![](Resources/Images/TS_ConsoleOutput.png)

After the Console Output in the last buildIrisApp job is run, administrator can scroll down to the status of jobs were launched by the buildIrisApp job. There are two failed jobs for iOS Mobile and Tablet natives. An administrator can open Console Output of any of jobs listed in the log below by hovering mouse over job id and opening Console Output in the drop-down menu.

![](Resources/Images/TS_ConsoleOutputJobID.png)

![](Resources/Images/TS_ConsoleOutputJobID1.png)

When the administrator opens Console Output, he/she may look for failure and warning messages related to a stage and a step particular in the build log.

Debugging Build Failure (Alternative Option)
--------------------------------------------

1.  From the Iris folder, navigate to Facade job.

![](Resources/Images/Iris_Builds.png)

3.  Select the build that is unstable or has failed.
4.  From the context-based options, select the **Pipeline Steps**.

![](Resources/Images/TS_BuildHistoryPipeline.png)

6.  Scroll down and find the unstable or failed stage.

![](Resources/Images/TS_PipelineLog.png)

8.  Open the Log console, and then click the **Starting building** link.

![](Resources/Images/TS_StartingBuild.png)

10.  From the left panel, select **Pipeline Steps**.

![](Resources/Images/TS_PipelineSteps.png)

12.  Find the failed stage.

![](Resources/Images/TS_NavigateFailedStage.png)

14.  Open the Console Log, and then find the reason for failure.

![](Resources/Images/TS_FailureLogTrack.png)

16.  Based on the error, take appropriate actions.
