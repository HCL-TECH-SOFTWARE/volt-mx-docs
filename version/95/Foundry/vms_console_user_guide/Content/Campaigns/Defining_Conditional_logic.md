                            

Defining Conditional Logic
==========================

A segment definition is a combined condition derived from different conditions that you added for audience attributes.

> **_Important:_** At least one segment definition has to be validated properly to add a campaign successfully.  
Once a segment definition is validated successfully, the system displays the actual number of audience members that is derived from different conditions based on one or more segments.  
  
For example,     ![](../Resources/Images/Segments/Audience Members from seg def.png)  

Five logic buttons can be used while applying segment definition for campaigns. They are "AND", "OR", "(",   ")", and "Delete".  
![](../Resources/Images/Campaigns/Segment Definition for campaigns.png)

> **_Important:_** Six logic buttons can be used while applying _segment definition for segments_. They are "AND", "OR", "NOT", "(", ")", and "Delete".  
  
![](../Resources/Images/Segments/Segment Definition.png)

  
Follow the order of operation to calculate the conditional logic for Segment definition:

1.  Do things in Brackets First.
2.  Otherwise just go left to right.

To define the conditional logic, follow these steps:

1.  In the **Add Segment** screen, navigate to the **Add Audience Member to Segment section**.
2.  Click one of the condition numbers from the **Condition No.** column that you want to use it for segment definition. The system inserts the condition number for the audience member attribute in the **Segment Definition** area.
3.  Click the logic button to apply the conditional logic. The system inserts the logic button next to the condition number in the **Segment Definition** area. You can click any one of the six logic buttons as required, for example, the "AND", "OR", "(", ")", or "Delete"
    
    > **_Note:_** Repeat the step 2 through step 3 to complete your conditional logic if required.
    
    > **_Important:_** You can delete any elements inserted in the Segment Definition window by clicking the **Delete** logic button. The system deletes the elements from right to left order.
    
4.  Click the **Validate** button. The system validates whether the conditional logic follows the BODMAS (Brackets Of Division Multiplication Addition Subtraction) rule of selection, and displays the confirmation message if the logic is correct. It states that the validation is successful.
5.  If conditional logic is not used correctly and you click the **Validate** button, system displays the error notification, informing that the segment criterion is invalid.
