                           

Custom Hooks for Iris jobs
================================

Custom Hooks are custom pipelines that run at certain [stages](#stages) of the build flow in App Factory. You can define a custom logic as an [Ant](https://ant.apache.org/) script or a [Maven](https://maven.apache.org/) script.

To access Custom Hooks for Iris, navigate to the **Custom Hooks** sub-folder from the **Iris** folder of your project.

[![](Resources/Images/customhooks_folder_thumb_600_0.png)](Resources/Images/customhooks_folder.png)

The **Custom Hooks Management Console** opens when you click the **Custom Hooks** folder.

[![](Resources/Images/customhooks_console_thumb_600_0.png)](Resources/Images/customhooks_console.PNG)

Custom Hooks Management Console
-------------------------------

> **_Important:_** To run custom hooks, make sure that you have a custom hook archive. For more information, refer to [Custom Hooks](CustomHooks.md).

The **Custom Hooks Management Console** is a dashboard that you can use to manage your Custom Hooks. The console shows **Hook Points** that specify the stages at which the parent job (buildIrisApp) runs the given hooks.

There are **three** hook points, or stages, in the build flow.

*   **Pre-Build** - Runs the Custom Hooks after the initiation of the **CI** process and before the **Build** process.
*   **Post-Build** - Runs the Custom Hooks after the **Build** process and before the **Test** process.
*   **Post-Test** - Runs the Custom Hooks after the **Test** process and before the **Deployment** process.

![](Resources/Images/customhooks_stages_548x165.png)

### Creating a Custom Hook

1.  On the **Custom Hooks Management Console**, for the [stage](#stages) at which you want to run your Custom Hook, click **Upload**. The **\_createCustom Hook page** opens.  
    ![](Resources/Images/customhooks_create_643x373.png)
2.  Configure the parameters that are required to create a custom hook. For more information about the parameters, refer to the following table.  
    
    <table style="mc-table-style: url]('Resources/TableStyles/Basic.css');width: 90%;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 20%;"><col class="TableStyle-Basic-Column-Column1" style="width: 70%;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Parameter</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Description</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><b>HOOK_NAME</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the name that is displayed in the respective hook point.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="Hook_Channel"></a><b>HOOK_CHANNEL</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the channel on which you want to run your Custom Hook. This includes both Native and SPA channels.The Hook Channel parameter is set to <b>ALL</b> by default.<img src="Resources/Images/customhooks_channel.png" style="border-left-style: solid;border-left-width: 1px;border-right-style: solid;border-right-width: 1px;border-top-style: solid;border-top-width: 1px;border-bottom-style: solid;border-bottom-width: 1px;">The IPA_STAGE for iOS platforms is the stage that generates the KAR file for iOS&nbsp;builds. At this stage, you can include iOS&nbsp;specific hooks, such as hooks for Xcode settings.<span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>Currently, you can only select one Hook Channel. If you want to run the same hook for multiple channels, you need to create multiple Custom Hooks with the same <b>Hook Archive</b>.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="action"></a><b>BUILD_ACTION</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the type of script you want to run for the Custom Hook.You can run an Ant&nbsp;script or a Maven script. The Build Action parameter is set to <b>Execute Ant</b> by default.<img src="Resources/Images/customhooks_action.png" style="border-left-style: solid;border-left-width: 1px;border-right-style: solid;border-right-width: 1px;border-top-style: solid;border-top-width: 1px;border-bottom-style: solid;border-bottom-width: 1px;"></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="archive"></a><b>HOOK_ARCHIVE_FILE</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">Specifies the archive file for the Custom Hook. For more information, refer to <a href="CustomHooks.html">Custom Hooks</a>.To upload an archive file, click <b>Choose File</b>, and then select the custom hook zip file from the file explorer.<img src="Resources/Images/customhooks_archive.PNG" style="border-left-style: solid;border-left-width: 1px;border-left-color: ;border-right-style: solid;border-right-width: 1px;border-right-color: ;border-top-style: solid;border-top-width: 1px;border-top-color: ;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: ;"></td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1"><a name="script"></a><b>SCRIPT_ARGUMENTS</b></td><td class="TableStyle-Basic-BodyD-Column1-Body1">This text field specifies the arguments you want to pass to the Custom Hook Script. These arguments are specific the <b>targets</b> or <b>goals</b> for the script. If you leave the Script Arguments empty, the Custom Hook script will only execute the default goals.<img src="Resources/Images/customhooks_args1_572x78.png" style="border-left-style: solid;border-left-width: 1px;border-left-color: ;border-right-style: solid;border-right-width: 1px;border-right-color: ;border-top-style: solid;border-top-width: 1px;border-top-color: ;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: ;width: 572;height: 78;"><span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>The arguments must be separated by using <b>space</b>, and must be in the order in which you want to execute them.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><a name="propagate"></a><b>PROPAGATE_BUILD_STATUS</b></td><td class="TableStyle-Basic-BodyA-Column1-Body1">This check-box specifies whether the <b>parent job</b> should <b>fail</b> if the Custom Hook execution fails. This check-box is <b>enabled</b> by default.<img src="Resources/Images/customhooks_propagate.PNG" style="border-left-style: solid;border-left-width: 1px;border-left-color: ;border-right-style: solid;border-right-width: 1px;border-right-color: ;border-top-style: solid;border-top-width: 1px;border-top-color: ;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: ;"></td></tr></tbody></table>
    
3.  After you configure the parameters, click **Build**.

> **_Note:_** For information on **Environment Specific Variables in Volt MX Iris App**, [click here](Environment_Variables_in_CustomHooks.md).

### Configuring Custom Hooks

After you build the Custom Hooks, you can configure them from the **Custom Hooks Management Console**. You can add upto **five** Custom Hooks in every stage.

![](Resources/Images/customhooks_config1_568x360.png)

Any Custom Hook that you create is set **disabled** by default. You need to manually enable the hooks from the Console to run them during the build process.

You can perform the following tasks from the Custom Hooks Management Console.

*   You can **enable** a hook by clicking the **tick** icon.
*   You can **edit** a Custom Hook by clicking the **Edit** icon.
*   You can **disable** an enabled Custom Hook by clicking the **Disable** icon.
*   You can **delete** a disabled hook by clicking the **bin** icon.  
    *   If you **delete** a Custom Hook from the console, it will be deleted **permanently**.
    *   You can only delete **disabled** hooks. To delete an **enabled** hook, you need to disable the hook first.

![](Resources/Images/customhooks_config2.PNG)

*   You can **drag and drop** the enabled hooks to change their order of execution.
    

![](Resources/Images/customhooks_drag_239x322.png)

> **_Note:_** The **Edit** and **Disable** buttons are displayed when you hover your cursor over a Custom Hook.  
![](Resources/Images/customhooks_config_enabled_234x302.png)

### Editing a Custom Hook

To edit a custom hook from the Custom Hook Management Console, click the **edit** icon for the Custom Hook that you want to update. The **\_updateCustom Hook** page opens

You can configure the parameters based on your requirements. For more information about the parameters, refer to [Creating a Custom Hook](#creating-a-custom-hook).

![](Resources/Images/customhooks_update_674x391.png)

### Enabling Custom Hooks in Iris Jobs

To run Custom Hooks as part of the **buildIrisApp** job, enable the RUN\_CUSTOM\_HOOKS build parameter.

![](Resources/Images/customhooks_irisbuild_673x140.png)

If you disable RUN\_CUSTOM\_HOOKS in the build parameters, the **buildIrisApp** job will not run any Custom Hooks. You can choose which Custom Hooks to run from the Custom Hooks Management Console.

### Custom Hook Stages in Stage View

When you enable a Custom Hook in a parent job, the Custom Hook stages also show up in the parent job's **Stage View**.

![](Resources/Images/customhooks_buildstages_680x123.png)

If you enabled **PROPAGATE\_BUILD\_STATUS** in the [Hook Parameters](#Creating) and your Custom Hook fails to execute, then the you will see a failure message in the parent job's stage view.
