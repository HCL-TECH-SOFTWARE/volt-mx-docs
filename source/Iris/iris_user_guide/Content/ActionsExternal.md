                          


Client Actions
--------------

From the Client section of the list of actions available along the left column of the Action Editor, you can add any of the following four actions. Click an action for instructions on how to add it to an action sequence.

  
| Action | Property |
| --- | --- |
| [Send SMS](#send-sms) | Sends a text message. |
| [Send Email](#send-email) | Sends an email message. |
| [Anchor Popup](#pop-up-behavior-display-anchor-dismiss) | Anchors a pop-up to the form from where the pop-up is called. |
| [Dismiss Popup](#pop-up-behavior-display-anchor-dismiss) | Closes a pop-up. |
| [Display Popup](#pop-up-behavior-display-anchor-dismiss) | Opens a pop-up. |
| [Get Local Storage](#get-local-storage) | Returns a structured clone of the current value associated with the given key. If the given key does not exist in the list associated with the object then this method returns null. |
| [Set Local Storage](#set-local-storage) | Creates a structured clone of the given value, assigning it to the given key. |
| [Open URL](#open-url) | Opens a web page. |
| [Phone Call](#phone-call) | Make calls to other numbers without leaving the application. |
| [Show Alert](#show-alert) | Displays an alert message to the user. Alerts can be one of three types: **Confirmation**: A confirmation message with Yes and No options appears on the screen. **Error**: An error message appears on the screen. **Info**: An informative message appears on the screen. This message can function as either a warning or a success message. All the alerts are modal in nature. That is, the user cannot proceed with other UI operations until the alert is dismissed. |

### Send SMS

To configure an action that sends an SMS message, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Send SMS** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the **Send SMS to number** text field, enter the phone number to where you want the SMS message sent.
4.  In the **SMS Content** text field, enter the text of the message you want sent.
5.  Save the action by pressing Ctrl+S.

### Send Email

To configure an action that sends an email message, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Send Email** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, enter the appropriate values for the following:

  <table style="width: 100%;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');mc-table-style-original: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 167px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1"><b>Field</b></td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1"><b>Description</b></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">To</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The email address of the recipient or recipients (separated by semicolons) that the email message is being sent to.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Cc</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The email address of the recipient or recipients that are to receive a "carbon copy" of the email message being sent.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Bcc</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The email address of the recipient or recipients that are to receive a "blind carbon copy" of the email message being sent (i.e. the other recipients of the email message are not able to see that the Bcc recipients are included.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Subject</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The text that you want to appear in the subject line of the email message.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">HTML Formatted Body</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Check this check box if the body of your email message includes HTML code, otherwise, the email message is sent using simple text formatting. <span class="autonumber"><span><b><i><span style="color: #0a9c4a;" class="mcFormatColor">Note: </span></i></b></span></span>If you check the <b>HTML Formatted Body</b> check box, you must ensure that the HTML code that you use in the body of your email message is correct. Otherwise, your message may not display correctly.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">Body</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">The text that you want to appear in the body of the email message. This text appears in simple text format unless you check the <b>HTML Formatted Body</b> check box and format the body with correct HTML code.</td></tr></tbody></table>

Save the action by pressing Ctrl+S.

### Pop up behavior (Display, Anchor, Dismiss)

To add behaviors to a Pop-up in an action sequence, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click one of the three Pop-up actions from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, select the popup that the navigational action applies to.
4.  Save the action by pressing **Ctrl+S**.

### Get Local Storage

To define an action sequence to get the local storage, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Get Local Storage** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the **Key** field, you can either select `set` and enter a value for the key, or select `choose` and select a key from a list of existing keys.
4.  In the **Assign To** list, select the variable to assign a value associated with the key. To do so, you can either select `set` and enter a value for the key, or select `choose` and select a key from a list of existing keys.
Save the action by pressing **Ctrl+S**.

### Set Local Storage

To define an action sequence to set the local storage, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Set Local Storage** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the **Key** field, you can either select `set` and enter a name for the key, or select `choose` and select a key from a list of existing keys.
4.  In the Value field, you can either select `set` and enter a value for the key, or select `choose` and select a value from a list of existing keys.
If you select set, select a data type for the value from the list, either String, Number, or Boolean. Then, enter a value for the key in the text box provided below the type field.5.  Save the action by pressing **Ctrl+S**.

### Open URL

To configure an action that opens a URL, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Open URL** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the URL to Open text box, enter the URL that you want to open.
4.  Save the action by pressing Ctrl+S.

### Phone Call

To configure an action that places a Phone Call, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Phone Call** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, in the **Phone Number** field, you can either select `set` and enter the phone number to which you want to place a call, or select `choose` and select an existing phone number from the list.
4.  Save the action by pressing Ctrl+S.

### Show Alert

To configure an action that shows an alert, do the following:

1.  From the Project tab of the Project Explorer, select the widget you want to apply the action to. Once it’s highlighted on the Iris Canvas, right-click it, and then select one of the action sequences, such as onTouchStart. Doing so opens the Action Editor and creates an action sequence for you to configure.
2.  From the list of actions available along the left column of the Action Editor, click **Show Alert** from the Client section. The action is added to the action sequence and is the current action of focus.
3.  In the properties pane of the Action Editor, enter the appropriate values for the following:

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');mc-table-style-original: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 167px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1"><b>Field</b></td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1"><b>Description</b></td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Alert Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">From the Alert Type drop-down list, select either <b>Confirmation</b>, <b>Error</b>, or <b>Info</b>.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Alert Title</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The text that the user will see in the title bar of the alert. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the Alert Title i18n drop-down list.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Yes Label</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The button text that the user will see to accept the information of the alert, commonly configured as <i>Yes</i> or <i>OK</i>. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the Yes Label i18n drop-down list.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">No Label</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">The button text that the user will see to reject the information of the alert, commonly configured as <i>No</i> or <i>Cancel</i>. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the No Label i18n drop-down list.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Alert Icon</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">If you want an icon to accompany the alert message, click <b>Browse</b>, select the <madcap:conditionaltext data-mc-conditions="Default.Iris7-2,Default.Iris7-1-1Only,Default.Iris7-1Only,Default.Iris7-2Only,Default.Iris7Only">.png format </madcap:conditionaltext>image you want to use (or provide a URL to an externally located image), and then click <b>OK</b>.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Message Type</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">From the Message Type drop-down list, select either <b>Constant</b> or <b>Expression</b>.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">Alert Message</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">The body of the alert, informing users of what you want them to know. Alternately, if you are localizing the app and have set up an internationalization (i18n) key for this value, select the key you want from the Alert Message i18n drop-down list.</td></tr></tbody></table>

Save the action by pressing Ctrl+S.
