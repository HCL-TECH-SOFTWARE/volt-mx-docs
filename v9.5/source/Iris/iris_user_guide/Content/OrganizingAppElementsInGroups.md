                          


Organizing and Moving Application Elements
==========================================

As you add forms, modules, and other items to your application, you may want to organize related application elements into groups, or copy and move them. You can create application groups for related forms and other elements, then drag and drop forms and elements from one application group to another, or copy individual application element to the Clipboard library.

You can then move application elements to an application group or collection, or export them. You can also save an application group to a collection, or export and import application groups between projects.

In addition to including forms, modules, and related elements in your project, you can make a variety of related resources such as test scripts, specifications, and HTML files available in your project by adding them to the **Other Resources** folder in Project Explorer.

The following topics provide additional information about using application groups, the Clipboard library, and the **Other Resources** folder:

*   [Create an Application Group](#create-an-application-group)
*   [Add an Application Group to a Collection](#add-an-application-group-to-a-collection)
*   [Hide an Application Group in the Project](#hide-an-application-group-in-the-project)
*   [Exclude an Application Group from the Build Process](#exclude-an-application-group-from-the-build-process)
*   [Copy an Application Element to the Clipboard Library](#copy-an-application-element-to-the-clipboard-library)
*   [Export and Import an Application Group](#export-and-import-an-application-group)
*   [Adding Other Resources to Your Project](#adding-other-resources-to-your-project)

Create an Application Group
---------------------------

You can create a new application group for mobile, tablet, desktop or watch channels. Volt MX Iris automatically creates an a group with the same name for the form's associated modules and controllers.

To create an application group in a Volt MX Iris Reference Architecture project:

1.  In Project Explorer, expand the **Mobile**, **Tablet**, **Desktop**, or **Watch** node where you want to add the application group.
2.  Right-click the **Forms** node or an existing application group, and select **New Group**. Volt MX Iris creates a new application group within the **Forms** node or application group, and adds a corresponding group to the **Controllers** node.

For mobile, tablet, and desktop channels, Volt MX Iris also adds a corresponding group to the **require** folder of the **Modules** node. For the watch channel, Volt MX Iris adds a corresponding group to the **Watch** folder of the **Modules** node.

You can nest application groups and include a variety of elements within the group, including forms and components. You can also move elements between groups by dragging and dropping them from one group to another.

To create an application group in a Free Form JavaScript project:

1.  In Project Explorer, expand the **Mobile**, **Tablet**, **Desktop**, or **Watch** node where you want to add the application group.
2.  Right-click the **Forms** node or an existing application group, and select **New Group**. Volt MX Iris creates a new application group within the **Forms** node or application group, and adds a corresponding group to the **Modules** node. For the watch channel, Volt MX Iris adds the corresponding group to the **Watch** folder of the **Modules** node.

You can nest application groups and include a variety of elements within the group, including forms and components. You can also move elements between groups by dragging and dropping them from one group to another.

Add an Application Group to a Collection
----------------------------------------

Once you have created an application group, you can make it available to all of your application projects by adding it to a collection.

To add an application group to a collection:

1.  In Project Explorer, right-click the application group that you want to add to a collection, and hover over **Add to Collection**.
2.  Hover over the library that contains the collection, and click the collection where you want to save the component. If the library or collection does not exist, you can create the library or collection.

If any elements of the application included bundled services, Volt MX Iris prompts you to select and package the services. When you use the application group in an application, Volt MX Iris adds the services to the application.

Hide an Application Group in the Project
----------------------------------------

In situations where you do not want to provide developers with the ability to customize app groups, you can hide app groups from appearing in the Project Explorer in the Design View and in the App Storyboard.

To hide app groups from the project at the channel level, follow these steps:

1.  In the Project Explorer, right-click the Channel (**Mobile**, **Tablet**, **Responsive Web/Desktop**, or **Watch**) for which you want to hide the app groups.
2.  From the context menu that appears, click **App Group Configuration**.  
    The **App Group Configuration** dialog box appears.
3.  Select the **Hide in Project** check box for the Application Groups that you want to hide.

     > **_Note:_**  
     > *   The **App Group Configuration** dialog box displays a list of all the available app groups in the project.
     > *   For nested app groups, if you hide the parent app group, the child app groups are also hidden from the project.
     > *   Clear the **Hide in Project** check box to show the application groups in the project.
     > *   To hide all available app groups, select the **Hide in Project** check box in the header of the **App Group Configuration** dialog box. To show all available app groups, clear the **Hide in Project** check box in the header of the **App Group Configuration** dialog box.

4.  Click **Save**.  
    The selected Application Groups are hidden from the Project Explorer and the Storyboard view.

Alternatively, you can perform the following actions to hide application groups in the project at the app group level:

5.  From the Project Explorer, expand the **Mobile**, **Tablet**, **Desktop**, or **Watch** channel, and expand the **Forms** node.
6.  Right-click the application group that you want to hide, and select **Hide**.  
    The selected Application Group is hidden from the Project Explorer and the Storyboard view.

Exclude an Application Group from the Build Process
---------------------------------------------------

Excluding application groups from the build process improves the performance of the build. Ensure that the app groups that you exclude from the build process are self-sufficient.

To exclude app groups from the build process at the channel level, follow these steps:

1.  In the Project Explorer, right-click the Channel (**Mobile**, **Tablet**, **Responsive Web/Desktop**, or **Watch**) for which you want to exclude the app groups.
2.  From the context menu that appears, click **App Group Configuration**.  
    The **App Group Configuration** dialog box appears.
3.  Select the **Exclude from Build** check box for the application groups that you want to exclude from the build process.

    > **_Note:_**
    > *   The **App Group Configuration** dialog box displays a list of all the available app groups in the project.
    > *   For nested app groups, if you exclude the parent app group, the child app groups are also excluded from the build process.
    > *   To exclude all available app groups, select the **Exclude from Build** check box in the header of the **App Group Configuration** dialog box.

4.  Click **Save**.  
    The selected application groups are excluded from the build process.

> **_Note:_** If you want to include app groups that were previously excluded from the build process, clear the ******Exclude from Build****** check box. To include all available app groups, clear the **Exclude from Build** check box in the header of the **App Group Configuration** dialog box.

Alternatively, you can perform the following actions to exclude or include application groups in the build process at the app group level:

*   **Exclude app groups from the build process**:
    1.  From the Project Explorer, expand the **Mobile**, **Tablet**, **Desktop**, or **Watch** channel, and expand the **Forms** node.
    2.  Right-click the application group that you want to exclude from the build process, and select **Exclude from Build**.
*   **Include app groups in the build process**:
    1.  From the Project Explorer, expand the **Mobile**, **Tablet**, **Desktop**, or **Watch** channel, and expand the **Forms** node.
    2.  Right-click the application group that you want to include in the build process, and select **Include in Build**.

Copy an Application Element to the Clipboard Library
----------------------------------------------------

You can make an individual application element available to other application projects by copying it to the built-in Clipboard library. You can copy a single form, multiple forms, components, code modules, and masters created in earlier versions of Volt MX Iris. When you copy forms, any associated templates or controller modules are copied with them.

Once you have copied an application element to the Clipboard library, you can insert it into an application group, move it to a collection, or export it to your computer, network, or the cloud.

> **_Note:_** There are some restrictions on what can be copied to the Clipboard library, depending on the type of application project. When you copy an application element to the Clipboard library from a Volt MX Iris Reference Architecture project, you cannot insert into or move it to a Free Form JavaScript project. Also, when you copy a form from a Free Form JavaScript project to the Clipboard library, named actions and popups are not included. For more information on types of Volt MX custom application projects, see [Types of Projects](TypesOfProjects.md).

To copy an application element to the Clipboard library:

1.  In Project Explorer, right-click the form, component, template, or code module, and then select **Copy to Clipboard Library**. Volt MX Iris displays the **Create New Library Component** dialog box.
2.  In the **Create New Library Component** dialog box, specify a name and description for the application element, and then click **OK**. Volt MX Iris adds the application element to the Clipboard library in Library Explorer.

To insert an application element in the Clipboard library into an application group:

1.  In Library Explorer, select the My Libraries tab and navigate to the Clipboard library.
2.  For a form, application group, or component, right-click the application element and then hover over **Insert Into**. For a code module, right-click the application element and then hover over **Merge Into**.
3.  Select the application group where you want the application element to be inserted. Volt MX Iris inserts the application element into the application group.

To move an application element in the Clipboard library to a collection:

1.  In Library Explorer, select the My Libraries tab and navigate to the Clipboard library.
2.  Right-click the application element, and then hover over **Move To**.
3.  Select the library and collection where you want the application element to be moved. Volt MX Iris moves the application element to the collection.

To export an application element in the Clipboard library to your computer, network, or the cloud:

1.  In Library Explorer, select the My Libraries tab and navigate to the Clipboard library.
2.  Right-click the application element, and then hover over **Export**. Volt MX Iris displays the **Save As** dialog box.
3.  Navigate to the location where you want to export the application element, and then click **Save**. Volt MX Iris exports the application group to that location.

Export and Import an Application Group
--------------------------------------

You can share application groups between projects without adding them to a collection by exporting and importing them. For example, if you have created an application group in your project and want to use it in a different project, you can export it to your computer, network, or the cloud, and then import it into another project.

To export an application group:

1.  In Project Explorer, right-click the application group, and then select **Export**. Volt MX Iris displays the **Save As** dialog box.
2.  Navigate to the location where you want to export the component, and then click **Save**. Volt MX Iris exports the application group to that location.

The exported application group includes all forms and corresponding modules associated with the application group, including any nested folders.

To import an application group:

1.  In Project Explorer, expand the **Mobile**, **Tablet**, **Desktop**, or **Watch** node where you want to add the application group.
2.  Right-click the **Forms** node or an existing application group, and select **Import**. Volt MX Iris displays the **Import Forms** dialog box.
3.  Click **Browse** to navigate to the location of the application group, select the application group, and then click **Import**. Volt MX Iris adds the application group and its associated application items to your project.

The imported application group includes all forms and corresponding modules associated with the application group, including any nested folders.

Adding Other Resources to Your Project
--------------------------------------

In addition to including forms, modules, and related elements in your project, you can add a variety of related resources such as test scripts, specifications, and HTML files. These resources are listed in the **Other Resources** folder in Project Explorer.

To add resource files to your project:

1.  In Project Explorer, right-click the **Other Resources** folder and select **Resource Location**. Volt MX Iris opens the **otherresources** folder on your computer.
2.  Drag and drop the files you want to add to the project to the **otherresources** folder.
3.  To view the list of resource files in Volt MX Iris, right-click the **Other Resources** folder and select **Refresh**.

To view or edit a resource file in Volt MX Iris:

1.  In Project Explorer, open the **Other Resources** folder.
2.  Select the file name, or right-click the file name and select **Open**. Volt MX Iris displays the file in an editable window for the following file types:
    
    *   Text (.txt)
        
    *   Gherkin (.feature)
        
    *   JSON (.json)
        
    *   XML (.xml)
        
    *   Java (.java)
        
    *   Python (.py, .pw)
        
    *   HTML ](.html, .md)
        
    *   Javascript (.js)
        
    *   CSS (.css)
        
    *   Swift (.swift)
        
    *   Plist (.plist)
        
    
    Volt MX Iris opens files with other file types using the default application associated with the file type.
