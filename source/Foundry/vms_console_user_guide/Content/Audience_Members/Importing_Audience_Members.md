                             

Importing Audience Members
==========================

You can add audience members into Volt MX Foundry Engagement Services at a time by using the **Import Audience** button.

To import audience members, follow these steps:

1.  In the **Audience Members** screen, click the **Import Audience** button. The **Import Audience** drop-down window appears. 
    
    > **_Important:_** You can import any number of audience members either by using the sample template provided in **.CSV** format or similar to the **.CSV** file including all the mandatory field names as displayed in the **Required\*** field .  
    
    ![](../Resources/Images/Audience Members/Import audience.png)
    
2.  If you want to use the sample template, follow these steps, else go to step 3:
    1.  **Sample File**: Click the link **Click here to download a sample import audience file**. The **sample.CSV** file is downloaded into your local system.
    2.  Navigate to the **sample.CSV** file and fill details. Once you fill the details, save the file with a new name for example, audience members.csv and close the file.
        
        Data entered in your **.CSV** file should have the mandatory fields as displayed in the Required field. For example, First Name, Last Name, Email, Mobile Number.You can use alphanumeric and special characters to fill the data.
        
3.  **Delimiter Type**: Select the type of delimiter from the **Delimiter Type** drop-down list based on your excel file, such as comma (,), hyphen (-), dot (.) , semi colon (;) or PIPE. By default, it is set to Comma.
    
    ![](../Resources/Images/Audience Members/Modify audience memebrs_delimeter Type.png)
    
4.  **Ignore Header**: Click the **Ignore Header** check box, if you wish the header row of the **.CSV** file to be ignored.  
    
5.  **Upload File**: Click the **Browse** button to locate your .CSV file, and click the **Open** button.Once you upload the .CSV file, the system displays the name of the .CSV file. For example, **Audience members list.csv**. By default, the status is set to No file selected.  
    
    > **_Important:_** To check whether details in the uploaded .CSV are conforming to the template or mandatory fields, you have to validate the .CSV file.  
    
6.  Click the **Validate and Upload** button. The system validates your **.CSV** file and displays either success or failure message based on the filled details.
7.  If the file upload is successful, system displays the confirmation message with assigned request id.
    
    > **_Note:_** If you see any error notifications, you need to correct those fields in your .CSV file and validate it again.You may encounter following error messages:  
      
    1.  If the selected file format is not correct, then system displays the warning message informing to choose a valid file to upload data.  
      
    2\. If few of the required attributes (in header) are missing in the uploaded file then system displays the warning message informing to check if the delimiter and the selected delimiter types are missing.  
      
    3\. If file is uploaded with errors, then system displays a warning message informing to download the  file with error messages.
    
    Once the validation is successful, the audience members details are displayed in the **Audience Members** gird list.
    
8.  Click the **Cancel** button to exit from the window without saving any information.
