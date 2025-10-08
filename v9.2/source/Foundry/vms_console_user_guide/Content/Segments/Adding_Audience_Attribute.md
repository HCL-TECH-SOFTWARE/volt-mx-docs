                            

Adding Audience Attributes to a Segment
=======================================

The **Add Audience Member to Segment** grid displays all the added audience attributes that are used to define a segment definition.

While adding **Audience Attributes** to a segment, you need to validate two types of conditions:

*   Adding audience attributes to create a condition, for example, you compare an audience attribute with a value by using a specified operator such as Contains, Equal, or NotEqual.
    
    ![](../Resources/Images/Segments/Operators.png)
    
*   Validating segment definitions, for example, you validate different conditions by using different logic buttons such as AND, OR.  
    ![](../Resources/Images/Segments/Logic buttons.png)  
    

To add an audience attribute to segments, follow these steps:

1.  Navigate to the **Add Audience Member to Segment** section.
2.  Click the **Add Audience Attribute**.
    
    The system adds the new attribute row along with the subsequent number generated under the **Condition No** column in the grid.
    
    > **_Note:_** The Condition Number is the reference to entire row of the added audience member attributes in the grid .
    
    ![](../Resources/Images/Segments/Adding audience attributes row.png)
    
    > **_Note:_** You can delete more than one added audience attributes. To delete an attribute row, select the check box you want to delete, and then click the **Remove** button.
    
3.  Under the **Audience Member Attribute** column, select the attribute from the drop-down list.  
    ![](../Resources/Images/Segments/Audience Member Attributes drop down list.png)  
    
    > **_Note:_** You can select any one of the audience member attributes as required, for example, the First Name, Last Name, Email, or Location.  
    
    > **_Important:_** If you have selected the Audience Member Attribute as the **Location**, the system inserts the **Map Location** value in the **Value** column that you have to configure. For more details, refer [Miscellaneous> Geo Location](../Geolocation/Geo_Location.md)
    
    > **_Note:_** A user should not create multiple locations with same location name with in the same segment.
    
4.   Under the **Operator** column, select the operator from the drop-down list.  
    Operators help you to match the values with the attribute names. For example, you want to ensure that an attribute contains text and that should match with the value entered in the value column. There are three different operators you can use to conditionalize attributes.  
    
    > **_Note:_** You can select any one of the operators as required, for example, the Contains, Equal, or Not Equal  
    
5.  Enter the value in the **Value** field.
6.  Click the **Validat**e button.
    
    System displays the **Notification**, informing that validation is successful.
    
7.  Click **OK** to continue.
    
    System displays the **Add Segment** screen.
