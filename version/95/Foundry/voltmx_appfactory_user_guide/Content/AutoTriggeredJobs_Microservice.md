# Scheduling a Microservice job

App Factory provides the ability to create triggers, which are specialized jobs that are used to automate and run tasks for your projects.

Consider a scenario in which a developer wants to implement a nightly build system. The administrator can create a scheduler that runs the build jobs for the app at a specified time (such as 12AM) everyday.

Every Microservice project contains a folder called **Triggers**. The Triggers folder contains a job called **createConfigureMSTrigger**, and two sub-folders called **schedulers** and **watchers** (to store the created jobs).

## <a name="AppFactory"></a>Configuring a Scheduler Job in App Factory

1.  From your project folder, navigate to **Triggers**.  
    ![](Resources/Images/Microservices_Triggers.png)
2.  In the **Triggers** folder, click the **build** icon for the **createConfigureMSTrigger** job.  
    Alternatively, select the **createConfigureMSTrigger** job, and then select the **Build with Parameters** option from the left panel.
3.  For the CRON_SCHEDULE parameter, type a Cron expression that corresponds to the time at which the build job must be triggered.  
    For information about cron expressions, refer to [Cron](https://en.wikipedia.org/wiki/Cron).
4.  Configure the other parameters based on the build settings that you want to configure for the scheduler or nightly build. For more information about the parameters, refer to [Running the ConfigureMS job](ConfigureMS_Job.md).
5.  After you configure the parameters, click **BUILD**.

The **createConfigureMSTrigger** job then creates a scheduler job in the **Schedulers** folder. The job is launched based on the time that is set by the CRON_SCHEDULE expression with the usual flow of [Running the ConfigureMS job](ConfigureMS_Job.md).

![](Resources/Images/Foundry_scheduler.png)