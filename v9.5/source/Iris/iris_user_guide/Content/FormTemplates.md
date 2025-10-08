                          


Form Template
-------------

The Form Template feature of Volt MX Iris provides an easy way to reuse a format of a Form across the project. Templates provide an easy way to display the same UI pattern across multiple Forms, platforms, and projects.

For example, you can create a Template for a basic Login Form that has two TextBox widgets for the Username and Password fields, and a Login Button. You can reuse this template across multiple Forms and add customizations based on the requirements.

To design a Form Template, follow these steps:

1.  Navigate to the **Project Explorer** of the Volt MX Iris project.
2.  Navigate to a channel and Create a **New Form**.
3.  Create the base design for the Form Template by adding widgets to the Form, as required.
4.  From the **Project Explorer**, right-click the form, and select **Add to Collection** form the Context menu.
5.  Select the Library and Collection that you want to add the Form Template to.  
    Alternatively, you can also create a New Library or Collection for the Form Template.
6.  The Form appears in the **My Libraries** > **Collections** section of Volt MX Iris.  
    You can drag and drop the Template from the My Libraries > Collections section onto a Form to use it.

To use a Form Template, follow these steps:

1.  Navigate to the **Project Explorer** of the Volt MX Iris project.
2.  Navigate to a desired channel and right-click **Forms**.
    
    > **_Note:_** Ensure that you have created the Form Template for the same channel.
    
3.  From the context menu that appears, select **New Form from Template**.
    
    > **_Note:_** Ensure that the Collection in which the Form Template is present is displayed in the My Libraries section.
    
4.  Navigate to the Collection in which the Form Template is present and select the required template.
5.  A new Form appears in on the Canvas and in the Project Explorer with the name CopyForm.  
    This new Form is created with the specified template.
