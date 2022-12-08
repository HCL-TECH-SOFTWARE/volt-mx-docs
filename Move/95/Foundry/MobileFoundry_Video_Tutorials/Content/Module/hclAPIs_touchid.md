     

VoltMX Iris Tutorials

VoltMX APIs - Touch ID API
------------------------

1\. Link the Touch ID feature to your form
------------------------------------------

![](../Resources/Images/TID_1.png)

1.  Drag a button widget for invoking for invoking touch ID functionality.
    
2.  Add an onClick action to the button widget.  
      
      
    
3.  Through action editor, invoke the function that you will add as part of the next step.
    

2\. Implement the JavaScript code using the Touch ID APIs
---------------------------------------------------------

![](../Resources/Images/TID_2.png)

1.  Invoke the API to check if the Touch ID is enabled.
    
2.  If Touch ID is enabled, call the authentication API to invoke the Touch ID prompt.  
      
      
    
3.  The call back function of the Authenticate API, where you will implement the logic for the authentication success and failure scenarios.
    

3\. Application preview when the authentication API is invoked.
---------------------------------------------------------------

![](../Resources/Images/TID_3.png)

1.  Configure the expression for the If condition. If the Widget Property confirmpasswordtxt.text is Not Equal to passwordtxt.text.
    
2.  In the Action Editor that opens up, click on If Condition listed under the Conditions group.  
      
    
3.  An If condition is added to the action sequence.
