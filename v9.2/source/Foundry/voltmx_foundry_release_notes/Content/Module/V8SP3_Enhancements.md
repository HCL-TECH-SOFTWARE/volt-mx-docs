                          

Performance Enhancements in V8 SP3
==================================

Console and Runtime
-------------------

*   Number of WebApps allowed in a Foundry application is limited to improve the performance of the Console.

App Factory
-----------

*   Environment Variables for CustomHooks

Environment variables represent values that are used by project build, and these variables are dynamically populated at run-time for the CustomHook ANT and Maven runs. You can use these environment variables in CustomHook programs to refer any build such as, project identities, build parameters, binaries, iOS Workspace, and so on. This enhancement helps you to further extend your CustomHook programs to work for wider functionality. 

*   **App versioning for iOS native builds**
    
    Now, App Factory has extended its support in build parameters to choose your own App Version, while building iOS binaries. With this feature, you can build applications for both Android and iOS platforms with different versions. You can also pick the same app and publish it to TestFlight and App Stores. (App Factory automatically takes care of updating CFBundleVersion at Xcode build time to build the app with the specified App Version)
    
*   **App Factory projects default view**
    
    Now App Factory has the option to display all the projects created under your environment as visible for everyone. This helps to know the number of projects running under an environment along with the project name. Only the primary owners of the project will have the rights to build the project. All other users will have access to view the project, browse through build logs, and so on, but they will not have the required rights to build the project.
