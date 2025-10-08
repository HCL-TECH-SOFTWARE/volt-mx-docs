                           


Importing SMS Templates
=======================

You can add SMS templates into Volt MX Engagement services by using the **Import Template** button. The feature helps you do a bulk import of SMS templates.

To import SMS templates, follow these steps:

1.  On the **Templates** page, click **Import Template.**
    
    The **Select Template to Import** window appears.
    
    ![](../Resources/Images/Settings/Templates/smstemplate/importsms_580x195.png)
    
2.  Click Choose File to select the templates zip file from your system.
    
    ![](../Resources/Images/Settings/Templates/smstemplate/importsms2_583x64.png)
    
3.  ****Import Type**:** Select the desired option from the drop-down list. There are three options to import SMS templates in bulk.
    
    *   **Insert Only**: By default, the **Import Type** option is set to **Insert Only**. The option reads the data in the file and inserts SMS templates in the Engagement server. If insert fails, the system displays an error.
    *   **Update/Insert**: The option reads the data in the file and tries to update each record first. If the record update fails, the system inserts the new records.
    *   **Delete All and Insert**: The option deletes existing SMS templates data and inserts new data in the Engagement server. As a prerequisite, you need to take backup of your data before selecting the option.
    
    ![](../Resources/Images/Settings/Templates/smstemplate/importsms3_580x194.png)
    
    If the file upload is successful, the system displays the confirmation message that the file uploaded successfully and import is underway. The system also displays the assigned request ID. The uploaded SMS message templates appears in the SMS Template list-view on the Templates page.
    

File Status
-----------

You can use the request ID supplied with the confirmation message to view the current status of the uploaded **SMS** message template files under the **Settings** > **Status** section.

![](../Resources/Images/Settings/Templates/smstemplate/statussms_619x159.png)

If the template files are not uploaded successfully, you can view the file status as bad data under the **Status** column. Hover the mouse over bad data to view the error message. Based on the error message, you can take the necessary action and import the **SMS** message templates successfully.
