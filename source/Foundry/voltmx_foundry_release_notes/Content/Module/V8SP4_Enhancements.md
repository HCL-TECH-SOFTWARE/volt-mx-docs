                           

Performance Enhancements in V8 SP4
==================================

Console and Runtime
-------------------

*   Enhanced delete operation in Object and Integration services to include filter-based deletions.
*   Enhanced the performance of trace logs and added the ability to auto-delete logs older than a certain time, and manually delete logs based on time.  
    For more information on this feature, click [here](../../../../Foundry/vmf_integrationservice_admin_console_userguide/Content/Trace_Logs.md#clear).
*   Enhanced Logs UI in the Admin Console.

Engagement
----------

*   Performance Enhancements in Cancel Message Flow.
*   Optimizations in Push Message Archival.
*   Optimizations in Daily Subscribers Report in Dashboard.
*   Enhanced overall stability.

Identity
--------

*   Enhanced support for identity reconfiguration to allow reuse of the same Identity service with configuration changes across different clouds.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/ServiceReconfig.md).
*   Enhanced custom Identity service by providing a hook-in that is invoked after the creation of an identity session.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/Identity8_VoltMX_Custom.md).
*   Built-in user store has been enhanced by adding a new feature called access levels.  
    For more information on this feature, click [here](../../../../Foundry/voltmx_foundry_user_guide/Content/UserRepositoryIdentityService.md).

Offline Objects
---------------

*   Enhanced support for Web channel.
*   Enhanced download performance based on criteria.

App Factory
-----------

*   Enhanced Device Farm efficiency by using custom build mode up to 50%.
*   In Build Results Email Notifications, KAR file link is added as an artifact for the iOS channels builds. This artifact is shared if the build fails during IPA generation in CI pipeline. This helps you test the KAR file locally for debugging iOS build failures. KAR artifact is displayed only if the IPA build fails and KAR build succeeds.
*   The Foundry environment details that you selected during the build trigger event are included in Build Results Email Notifications. This helps you to track the environment that you have selected for a specific build.
*   Provided an option to download Console logs for a build.
    
    *   Navigate to **Project** > **Iris** > **Builds** > **buildIrisApp** (or **Channels > specific job**) > **select specific build** > **Console Output** > **View as plain text**. Right click and select Save as to download the Console log for a specific build.
    *   Similarly, Navigate to **Project** > **Iris** > **Tests** > **runTests** (or **Channels > specific job**) > **select specific build** > **Console Output** > **View as plain text**. Right click and select Save as to download the Console log for a specific test build.  
        
    
    These log files are also present in the `MustHave.zip`. If the build fails, the link to download the MustHaves is present under the **build-ID** in the Build History section.
