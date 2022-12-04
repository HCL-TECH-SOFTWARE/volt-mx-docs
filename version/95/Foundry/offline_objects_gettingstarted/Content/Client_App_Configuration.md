
Configuring Client Application
==============================

To configure Offline Objects in Volt MX Iris, follow these steps.

1.  Start Volt MX Iris.
2.  Create a project.
3.  Sign in to your Foundry account.
4.  On the upper-right corner of the screen, select **Data & Services**. Click the contextual menu icon ![](Resources/Images/ContextualMenu.PNG) to select **Link to Existing App** option from the list.
    
    ![](Resources/Images/Options.png)  
    
5.  Select **Link to Existing App**. The **VoltMX Foundry Applications** page opens with a list of applications.
6.  Click Associate against the app that you want to link. The Foundry application is now linked to your Iris project.
7.  Enable the Offline Objects feature for the respective platforms. To do so, go to **Project** > **Settings**, and select the Offline Objects check box for the respective platforms.
    
    > **_Note:_** For Android and iOS platforms, the offline objects feature is enabled, by default.
    
    *   **Windows**
        
        ![](Resources/Images/Windows_629x376.png)
        
    *   **Adaptive Web**
        
        ![](Resources/Images/Mobile-Web_631x381.png)
        
    *   **Responsive Web**
        
        ![](Resources/Images/Desktop-Web_628x378.png)
        
8.  Now, set up the app supporting offline objects. To do so, under the Project tab, right-click Modules to select **New JS Module** from the list. The Module.js tab appears. Copy the following code in the Module.js tab.


    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">{
            
            function onSetupSuccess() {
                alert("Setup Success");
            }
            
            function onSetupFailed() {
                alert("Setup Failed");
            }
            
            function setupSync() {
                VMXFoundry.OfflineObjects.setup(options, onSetupSuccess, onSetupFailed);
            }  
            
    }</code></pre></figure>

9. Create the required UI and assign the respective actions to the UI elements.
10. Set the user action to sync data. You can do this through the following ways.
	-  **Define a process**
	-  **Invoke a method on a button click**
	-  **Object Models**


> **_Note:_** You can also generate the Object Models' code to use in the client application. For more information about integrating offline objects with generated object models, click [here](../../../Foundry/offline_objects_user_guide/Content/Offline_Objects_with_Generated_Object_Models.md).  

In the case of object models, make sure to change the parameters’ status from **online** to **offline**.
