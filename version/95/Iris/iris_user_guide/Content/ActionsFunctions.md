                         


Functions Actions
-----------------

From the Functions section of the list of actions available along the left column of the Action Editor, you can add any of the following four actions. Click an action for instructions on how to add it to an action sequence.

  
| Action | Description |
| --- | --- |
| [Add Snippet](#add-snippet) | Opens the code editor where you can write or paste a code snippet for use within a function. |
| [Add Swift Snippet](#AddSwiftSnippet) | Available only for the Watch channel. Opens the code editor where you can write or paste a Swift code snippet for use within a function. To create action sequences for watchOS, you must use Swift; watchOS does not support JavaScript. |
| [Call Actions](#call-action) | Calls the action of your choosing from a list of available actions. To use this feature, you have to have already set up at least one action in the Project Explorer, on the Project tab, under the Actions section. |
| [Invoke Function](#invoke-function) | Invokes the function of your choosing from a list of available functions. |

### Add Snippet

To add a code snippet, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Add Snippet** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the code editor, enter the code that you want to add, or paste it in from another source by pressing **Ctrl+V**.
4.  Save the action by pressing **Ctrl+S**.

### Call Action

To use this feature, you have to have already set up at least one action in the Project Explorer, on the Project tab, under the Actions section.

Once you have configured the Call Action function, you can navigate to and edit the source action that the function is calling.

To call an action, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Call Action** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.  In the bottom pane of the Action Editor, from the Action Type drop-down list box, select the action you want to call.
4.  Save the action by pressing **Ctrl+S**.

To edit the source action that the function is calling, do the following:

1.  Open the action sequence that has the Call Action function.
2.  Right-click the Call Action function, and then click **Edit Source Action**. The action opens in the Action Editor.

### Invoke Function

With the Invoke Function action, you choose the function you want to invoke from the Function Name list. To locate in the code the function you're invoking, you use the Navigate to Definition feature.

To invoke a function, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Invoke Function** from the Functions section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, from the **Function Name** list box, select the function you want to invoke.
4.  To locate the function you've chosen in the code, click **Navigate to Definition**. Volt MX Iris opens the asset that contains the function to the line number where the function begins.
5.  Save the action by pressing **Ctrl+S**.
