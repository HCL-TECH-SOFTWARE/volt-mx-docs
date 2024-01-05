                          


Client Actions
--------------

> **_Note:_** Client actions are only supported for Apple Watch on V9 Servicepack 5 Fixpack 15 or later.

From the Client section of the list of actions available along the left column of the Action Editor, you can add any of the following four actions. Click an action for instructions on how to add it to an action sequence.

  
| Action | Property |
| --- | --- |
| [Send SMS](#send-sms) | Sends a text message. |
| [Send Email](#send-email) | Sends an email. (Not supported for Apple Watch) |
| [Get Local Storage](#get-local-storage) | Returns a structured clone of the current value associated with the given key. If the given key does not exist in the list associated with the object then this method returns null. |
| [Set Local Storage](#set-local-storage) | Creates a structured clone of the given value, assigning it to the given key. |
| [Open URL](#open-url) | Opens a web page. (Not supported for Apple Watch) |
| [Phone Call](#phone-call) | Make calls to other numbers without leaving the application.(For Apple Watch, a pivot to the Phone app on the watch is made) |
| [Show Alert](#show-alert) | Displays an alert message to the user. Alerts can be one of three types: **Confirmation**: A confirmation message with Yes and No options appears on the screen. **Error**: An error message appears on the screen. **Info**: An informative message appears on the screen. This message can function as either a warning or a success message. All the alerts are modal in nature. That is, the user cannot proceed with other UI operations until the alert is dismissed. |

### Send SMS

To configure an action that sends an SMS message, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Send SMS** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, in the **Send SMS to number** text field, enter the phone number to where you want the SMS message sent.
4.	In the **SMS Content** text field, enter the text of the message you want sent.
5.	Click **Save** to save the action sequence and close the Action Editor window.


### Send Email

To configure an action that sends an email message, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Send Email** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, enter the appropriate values for the following:   

    | Field | Description |
    | --- | --- |
    | To | 	The email address of the recipient or recipients (separated by semicolons) that the email message is being sent to. |
    | Cc | 	The email address of the recipient or recipients that are to receive a "carbon copy" of the email message being sent. |
    | Bcc | 	The email address of the recipient or recipients that are to receive a "blind carbon copy" of the email message being sent (i.e. the other recipients of the email message are not able to see that the Bcc recipients are included). |
    | Subject | 	The text that you want to appear in the subject line of the email message. |
    | HTML Formatted Body |  Check this check box if the body of your email message includes HTML code, otherwise, the email message is sent using simple text formatting. **_Note:_** If you check the HTML Formatted Body check box, you must ensure that the HTML code that you use in the body of your email message is correct. Otherwise, your message may not display correctly. |
    | Body | 	The text that you want to appear in the body of the email message. This text appears in simple text format unless you check the **HTML Formatted Body** check box and format the body with correct HTML code. |  
    
4.	Click **Save** to save the action sequence and close the Action Editor window.

<!-- ### Pop up behavior (Display, Anchor, Dismiss)

To add behaviors to a Pop-up in an action sequence, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click one of the three Pop-up actions from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, select the popup that the navigational action applies to.
4.  Save the action by pressing **Ctrl+S**. -->

### Get Local Storage

To define an action sequence to get the local storage, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Get Local Storage** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, in the **Key** field, you can either select `Set` and enter a value for the key, or select `Choose` and select a key from a list of existing variables.
4.	In the **Assign To** list, select the variable to assign the value associated with the key. To do so, you can either select `Set` and enter a variable name, or select `Choose`and select a value from a list of existing variables. 
5.	Click **Save** to save the action sequence and close the Action Editor window.


### Set Local Storage

To define an action sequence to set the local storage, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Set Local Storage** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, in the **Key** field, you can either select `Set` and enter a name for the key, or select `Choose` and select a key from a list of existing variables.
4.	In the Value field, you can either select `Set` and enter a value, or select `Choose` and select a value from a list of existing variables. If you select set, select a data type for the value from the list, either String, Number, or Boolean. Then, enter a value in the text box provided below the type field.
5.	Click **Save** to save the action sequence and close the Action Editor window.


### Open URL

To configure an action that opens a URL, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Open URL** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, in the **URL to Open** text box, enter the URL that you want to open.
4.	Click **Save** to save the action sequence and close the Action Editor window.


### Phone Call

To configure an action that places a Phone Call, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Phone Call** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, in the **Phone Number** field, you can either select `Set` and enter the phone number to which you want to place a call, or select `Choose` and select an existing phone number from the list of variables.
4.	Click **Save** to save the action sequence and close the Action Editor window.


### Show Alert

To configure an action that shows an alert, do the following:

1.	From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.	From the list of actions available along the left column of the Action Editor, click **Show Alert** from the Client section. The action is added to the action sequence and is the current action of focus.
3.	In the properties pane of the Action Editor, enter the appropriate values for the following:  


    | Field | Description |
    | --- | --- |
    | Alert Type | 	From the Alert Type drop-down list, select either **Confirmation, Error**, or **Info**. |
    | Alert Title | 		The text that the user will see in the title bar of the alert. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the Alert Title i18n drop-down list (i18n localization for Alert Title is not supported for Apple Watch). |
    | Yes Label | 	The button text that the user will see to accept the information of the alert, commonly configured as Yes or OK. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the Yes Label i18n drop-down list (i18n localization for Yes Label is not supported for Apple Watch). |
    | No Label | 		The button text that the user will see to reject the information of the alert, commonly configured as No or Cancel. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the No Label i18n drop-down list (i18n localization for No Label is not supported for Apple Watch). |
    | Alert Icon | 	If you want an icon to accompany the alert message, click **Browse**, select the .png format image you want to use (or provide a URL to an externally located image), and then click **OK** (not supported for AppleWatch). |
    | Icon Position | 	If an icon is accompanying the alert message, use this dropdown to select whether the icon appears on the left or right of the alert (not supported for AppleWatch). |    
    | Message Type | 	From the Message Type drop-down list, select either **Constant** or **Expression**. |
    | Alert Message | 		The body of the alert, informing users of what you want them to know. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the Alert Message i18n drop-down list (i18n localization for Alert Message is not supported for Apple Watch). |

4.	Click **Save** to save the action sequence and close the Action Editor window.


