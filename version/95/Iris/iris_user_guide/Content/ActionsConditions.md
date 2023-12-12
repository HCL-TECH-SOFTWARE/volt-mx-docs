                         


Condition Actions
-----------------

> **_Note:_** Condition actions are only supported for Apple Watch on V9 Servicepack 5 Fixpack 15 or later.

The behaviors that you can assign are as follows:

  
| Action | Property |
| --- | --- |
| **If Condition** | Specifies an action to be executed when one or more conditions are satisfied. |
| **Else If Condition** | Specifies an action to be executed when one or more conditions are satisfied (when the If Condition was not satisfied). |
| **Else Condition** | Specifies an action to be executed when an **If** or **Else If** condition is not satisfied. |
| **Channel Condition** | Specifies for which channels an action is executed. (Not supported for Apple Watch) |

To add conditional behavior (if condition, or elseif condition, or else condition, or channel condition) to an action sequence, do the following:

1.  From the **Project** tab of the Project Explorer, select the widget you want to apply the action to.    
    The widget is highlighted on the Iris Canvas.
2.  Right-click the widget and then select one of the actions for example, onTouchStart.  
    The Action Editor window opens and an action sequence is created.
3.  From the **Condition** section along the left column of the Action Editor, click one of the four types of conditions.  
    The action is added to the action sequence and is the current action of focus.
4.  In the properties pane of the Action Editor, set the conditions that you want to be met. To add additional conditions, click the green + icon. To delete a condition, click its corresponding red x icon.
5.  Add the action or actions that you want to carry out when the condition is met by locating and clicking the action from the list of actions available along the left column of the Action Editor.  
    To subordinate the action under the conditional statement, right-click the action you just added, and then click **Indent In**.
6.  Repeat steps 2 through 4 for any other general behavior that you want to associate with the action sequence.
7.  Click **Save** to save the action sequence, and close the Action Editor window.
