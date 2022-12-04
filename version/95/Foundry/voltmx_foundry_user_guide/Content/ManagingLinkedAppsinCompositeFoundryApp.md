  

Managing Linked Apps in a Composite Foundry App
----------------------------------------------

VoltMX Foundry supports Manage Linked Apps (app modularity) feature that allows linking one ore more Foundry apps into another Foundry apps - composite apps. The services of the linked apps will be accessible to the client applications mapped to the composite app.

The Locking of an app helps to improve the Foundry app development aspects as follows:

**Use case**: When partners build vertical-based solutions like Infinity, currently the Client and Foundry applications are shared with customers. Customers make changes to the application to meet their business requirements. When Infinity releases a new version, customers are expected to upgrade the entire new version, which is time-consuming and is error-prone.

By using the Managing Linked Apps functionality, you can clearly demarcate the base functionality of Infinity project into smaller components and by linking of them into to a Foundry app. Then, based on the customer’s requirement, the required modules can be combined together to form a functional app.

The modularity angle of Infinity projects requires us to think of breaking up a VoltMX project into multiple smaller components, each around a particular feature. Then, based on the customer’s requirement, the required modules can be combined together to form a functional app.

The customer would also be able to then upgrade only a certain modules, if they wish to do so

The app modularity of Foundry apps involves the following three aspects in it.

1.  Dividing a Foundry app into smaller apps.
    *   These are called Micro apps (modules/child apps).
    *   A Micro App - An application fulfilling a single module of a feature. A micro app should be able to work as an independent app, for example, a Iris application can link to the micro app.
    *   Each micro app is capable of serving a specified business domain or functionality.
2.  Linking the child Foundry apps to another Foundry app (composite/parent app).
    *   Composite App - A collection of micro apps, where each app is allowed to be accessed using the composite apps app key, secret.
    *   Functionally, a composite app is a regular Foundry app, with the additional information about a list of other Foundry apps that are linked to it.
    *   Composite apps allow multiple micro apps to be added and removed from them.
    *   Currently only 1 level of app linkage. This implies that micro apps can be linked into composite apps, but a composite app (containing a linked micro app) cannot be linked into another composite app.
        
        The apps linked to a Foundry app can be controlled from a new **Manage Linked Apps** page that lists the apps presently linked to the app, and also allows you to link in more apps, or unlink existing apps.
        
3.  Publish Composite apps: During Composite app publish, you can publish only the composite app or composite app + all dependent micro apps separately,

#4 Service doc of Composite app shall reflect the services of composite app + dependent micro apps - i.e. services of micro apps can now be invoked via App key/ secret of composite app

The Locking of an app helps to improve the Foundry app development aspects as follows:

Extensibility:

\-----

*   Micro apps, composite apps are all foundry apps, with certain conditions.

The following sections detail you with more information on Lock App functionality:

*   Linking and Unlinking Child Apps to a Composite Foundry App
*   Publishing Foundry Composite Apps
    *   Direct Publishing Foundry Composite Apps
    *   Publishing Parent App and the Linked Child Apps Independently a Composite Foundry App
    *   Publishing Only Parent App of a Composite Foundry App

### Linking and Unlinking Child Apps to a Composite Foundry App

Only a user with an Owner role can lock Foundry apps. When a Foundry app is locked, the base app configurations are set to read-only, including some that are replaceable.

To lock an app, follow these steps:

1.  Log in to the Foundry Console with user credentials that have an Owner role.
2.  In the **Apps** page, hover your cursor over the App menu button of the app and then click **Manage Linked Apps**.
    
    ![](Resources/Images/AppLockinApps.png)
    
    You can access the Export Locked App option within the app when the app is selected.  
    ![](Resources/Images/AppLockinApp.png)
    
3.  In the **Manage Linked Apps** page that appears, click **Add** button.
    
    ![](Resources/Images/ManageLinkedAppspage.png)
    
4.  Click **Add**. The **Existing Apps** dialog appears with the list of existing apps.
    
    ![](Resources/Images/ManageLinkedAppspage-ExistingApps.png)
    
    1.  Select the check box for required app/s and the version.
    2.  Click **LINK**.
    3.  In the **Linked Apps** dialog that appears with the apps linked status, click **CLOSE**.
    
    All the linked apps are displayed in the **Manage Linked Apps** page. The following sections detail how to publish a composite app and linked child apps.
    
    To unlink the linked apps, select the check box for the app in the **Manage Linked Apps** page and click the **Unlink**.
    

### 

Publishing a Foundry Composite Apps
----------------------------------

### Direct Publishing Foundry Composite Apps

The composite app and the linked apps are not published. In this case, you may want to publish the parent app as well as linked apps for the first time.

1.  Navigate to your composite app in Foundry Console.
2.  Click **Publish** tab.
3.  Select an environment.
4.  Click **PUBLISH.**

The follow table details a sample parent and the linked apps, and the result of the direct publish:

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');width: 1000px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 283px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 242px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 475px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="background-color: #add8e6;text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1"><p>Sample Parent/Composite Foundry App has child apps with versions</p></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="background-color: #add8e6;text-align: center;">Direct App Publishing</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="background-color: #add8e6;text-align: center;">Result of direct publish</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1" style="font-weight: normal;"><p style="font-weight: normal;">CompositeApp V1.0</p><ul style="font-weight: bold;"><li style="font-weight: normal;">micro1 V1.0</li><li style="font-weight: normal;">micro2 V1.0</li><li style="font-weight: normal;">micro3 V1.0</li></ul></td><td class="TableStyle-Basic-BodyB-Column1-Body1">&nbsp;</td><td class="TableStyle-Basic-BodyA-Column1-Body1"><ul><li>The entire composite app and child apps are published for full app publish whenever direct publish is performed for the parent app.<p>For example: <code class="codefirst">CompositeApp V1.0 -&gt;(micro1 V1.0, micro2 V1.0, micro3 V1.0)</code></p></li></ul></td></tr></tbody></table>

### Publishing Parent App and the Linked Child Apps Independently of a Composite Foundry App

The composite has modifications to the parent app as well as child apps. In this case, you may want to publish parent app changes and already published linked apps.

1.  Navigate to your composite app in Foundry Console.
2.  Click **Publish** tab.
3.  Select an environment.
4.  Click **PUBLISH.**
5.  In the **App Configuration > Publish Method** select **Full** or **Incremental**.
6.  Select the **Publish Linked Apps** check box to include linked child apps for publishing, based on the each linked app Publish Method configuration.
    
    For example, the **Publish Method** is set to **Incremental** in the linked child app (micro1). So when the **Publish Linked Apps** check box is selected, the micro1 app is published for delta publish.
    
    ![](Resources/Images/Publish methods and selected linked apps.png)
    
7.  Click **SAVE & PUBLISH**.

The follow table details a sample parent and the linked apps, and the result of the publish with linked apps:

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');width: 1000px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 283px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 242px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 475px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="background-color: #add8e6;text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1"><p>Sample Composite Foundry App has <b>modified</b> child apps with versions and <b>newly added</b> child apps.</p></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="background-color: #add8e6;text-align: center;">Publish with Linked Apps</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="background-color: #add8e6;text-align: center;">Result of publish with linked apps</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p style="font-weight: normal;">CompositeApp V1.0</p><ul><li style="font-weight: normal;">micro1 V1.0 (Incremental)</li><li><p>micro2 V1.0 (Incremental)</p></li><li>micro3 V1.0 (Full)</li><li><p>micro4 V1.0 (new app)</p><p>&nbsp;</p></li></ul></td><td class="TableStyle-Basic-BodyB-Column1-Body1"><ul><li>Publish &amp; Reconfigure &gt; Publish Method and</li><li>Publish Linked Apps option is selected to include micro apps publish method options for publishing.</li></ul></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p><code class="codefirst">CompositeApp V1.0 -&gt;(micro1 V1.0, micro2 V1.0, micro3 V1.0, micro4 V1.0)</code></p><ul><li><b>Parent app</b> will be published based on the option selected in the Publish Method specific to the parent app.<p>For example:</p><ul><li>CompositeApp V1.0<br>The parent app is published for Full Publish.</li></ul></li><li><b>Published linked child apps</b> which are already published and have been modified will be published.<p class="Important" madcap:autonum="<b><i><span style=&quot;color: #ff6600;&quot; class=&quot;mcFormatColor&quot;>Important: </span></i></b>">The Publish Method option set for each of the linked apps is considered for publishing.</p><p>For example: The following childs apps <b>are published</b> either for Full or Delta publish:</p><ul><li>micro1 V1.0 (app is published for Delta publish)</li><li>micro2 V1.0 (app is published for Delta publish)</li><li>micro3 V1.0 (app is published for Full publish)</li></ul></li><li><b>Newly linked child apps</b> which are not published will also be published for Full app publish by default.<p>For example: micro4 V1.0</p></li></ul></td></tr></tbody></table>

### Publishing Only Parent App of a Composite Foundry App

The composite has modifications to the parent app as well as child apps. In this case, you may want to publish parent app changes and not already published linked apps.

1.  Navigate to your composite app in Foundry Console.
2.  Click **Publish** tab.
3.  Select an environment.
4.  Click **CONFIGURE & PUBLISH.**
5.  In the **App Configuration > Publish Method** select **Full** or **Incremental**.
6.  Clear the **Publish Linked Apps** check box.
    
    ![](Resources/Images/Publish methods and Not selected linked apps.png)
    
7.  Click **SAVE & PUBLISH**.

*   Publish & Reconfigure > Publish Method
*   Publish Linked Apps option is not selected to exclude micro apps publish method options for publishing.

The follow table details a sample parent and the linked apps, and the result of the publish without linked apps:

<table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/Basic.css');width: 1000px;" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 244px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 281px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 475px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td style="background-color: #add8e6;text-align: center;" class="TableStyle-Basic-BodyE-Column1-Body1"><p>Sample Composite Foundry App has <b>modified</b> child apps with versions and <b>newly added</b> child apps.</p></td><td class="TableStyle-Basic-BodyE-Column1-Body1" style="background-color: #add8e6;text-align: center;">Publish without linked apps</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="background-color: #add8e6;text-align: center;">Result of publish without linked apps</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1"><p style="font-weight: normal;">CompositeApp V1.0</p><ul><li style="font-weight: normal;">micro1 V1.0</li><li><p>micro2 V1.0 (Incremental)</p></li><li>micro3 V1.0 (Full)</li><li><p>micro4 V1.0 (new app)</p></li></ul></td><td class="TableStyle-Basic-BodyB-Column1-Body1"><p>&nbsp;</p></td><td class="TableStyle-Basic-BodyA-Column1-Body1"><p><code class="codefirst">CompositeApp V1.0 </code>-&gt;(micro1 V1.0, micro2 V1.0, micro3 V1.0, <code class="codefirst">micro4 V1.0</code>)</p><ul><li><b>Parent app</b> will be published based on the option selected in the Publish Method specific to the parent app.<p>For example: CompositeApp V1.0 (Full publish).<br>The parent app is published for Full Publish.</p></li><li><b>Newly linked child apps</b> which are not published will also be published for Full app publish by default.<p>For example: micro4 V1.0</p><div class="Important" madcap:autonum="<b><i><span style=&quot;color: #ff6600;&quot; class=&quot;mcFormatColor&quot;>Important: </span></i></b>">The new linked apps, which are not published, will always be published by default.<br></div></li><li><p><b>Linked child apps</b> which are already published and have been modified will <b>not</b> be published.<br></p><p class="Important" madcap:autonum="<b><i><span style=&quot;color: #ff6600;&quot; class=&quot;mcFormatColor&quot;>Important: </span></i></b>">The Publish Method option set for each of the linked apps are not considered for publishing.</p><p>For example: The following childs are <b>never published</b> either for Full or Delta publish in this case.</p><ul><li>micro1 V1.0, micro2 V1.0, micro3 V1.0</li></ul></li></ul></td></tr></tbody></table>

###
