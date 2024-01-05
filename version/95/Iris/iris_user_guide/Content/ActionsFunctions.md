                         


Functions Actions
-----------------

From the Functions section of the list of actions available along the left column of the Action Editor, you can add any of the following four actions. Click an action for instructions on how to add it to an action sequence.

  
| Action | Description |
| --- | --- |
| [Add Snippet](#add-snippet) | Opens the code editor where you can write or paste a JavaScript code snippet for use within an action sequence. (Not supported for Apple Watch – See Add Swift Snippet for Apple Watch Equivalent) |
| [Add Swift Snippet](#add-swift-snippet) | Available only for the Apple Watch channel. Opens the code editor where you can write or paste a Swift code snippet for use within an action sequene. To create snippets for watchOS, you must use Swift; watchOS does not support JavaScript. |
| [Call](#call-action) | Calls the action of your choosing from a list of available actions. To use this feature, you have to have already set up at least one action in the Project Explorer, on the Project tab, under the Actions section. (Free Form JavaScript projects only) |
| [Invoke Function](#invoke-function) | Invokes the function of your choosing from a list of available functions. (Not supported for Apple Watch) |

### Add Snippet

To add a code snippet, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Add Snippet** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the code editor, enter the JavaScript code that you want to add, or paste it in from another source by pressing  **Ctrl+V**.
4.	Click **Save** to save the action sequence.


### Add Swift Snippet

To add a swift code snippet, do the following:

1.	From the Project tab of the Project Explorer, select the Apple Watch widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onInit. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Add Swift Snippet** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, in the code editor, enter the swift code that you want to add, or paste it in from another source by pressing **Ctrl+V**.
4.	Click **Save** to save the action sequence.


### Call Action

To use this feature, you have to have already set up at least one action in the Project Explorer, on the Project tab, under the Actions section.

Once you have configured the Call Action function, you can navigate to and edit the source action that the function is calling.

To call an action, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Call** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, from the Action Type drop-down list box, select the action you want to call.
4.	Click **Save** to save the action sequence.

To edit the source action that the function is calling, do the following:

1.	In the Project Explorer, on the Project tab, under the Actions section, double click on the action you wish to edit. The action opens in the Action Editor.
2.	Make the desired changes, and click **Save** to save the Action.


### Invoke Function

To invoke a function, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Invoke Function** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, from the **Function Name** list box, select the function you want to invoke.
4.	To locate the function you've chosen in the code, click **Navigate to Definition**. Volt MX Iris opens the asset that contains the function to the line number where the function begins.
5.	If the selected function has any parameters, you can edit them in the **Input Parameters** section.
6.	Click **Save** to save the action sequence.

