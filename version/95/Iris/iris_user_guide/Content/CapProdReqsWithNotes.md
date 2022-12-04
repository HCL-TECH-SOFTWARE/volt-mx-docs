                          


Capture Product Requirements with Review Notes
==============================================

Using the Review Notes feature in Volt MX Iris, you can capture feedback from users who are evaluating your app design. Such requirements capturing helps ensure that the design of your app successfully meets the requirements of potential users. The Review Notes feature supports rich text formatting such as font type and size, paragraph alignment, numbered and bulleted lists, block quotes, and even tables. There’s no size limit to the notes, and you can carry on conversation threads with as many users as want to participate. A note can be associated with a widget, a form, or even an entire project, and when you add a note, a numbered badge is associated with that element of the app’s user interface on the Iris Canvas so that you can easily see what parts of the app have been commented on. You can turn the badges on and off so that they don’t interfere with your previewing the app, and comments can be marked as either New or Resolved so that you can keep track of what’s been acted upon.

> **_Note:_** To use Review Notes among multiple people, you need to share the project. For information on how to do so, see [Share a Project](../../../Iris/iris_app_viewer/Content/ViewAndCollabOnProject.md).

For information on using Review Notes, click any of the following topics:

[Add a Review Note](#add-a-review-note)

[Format a Review Note](#format-a-review-note)

[Undo and Redo an Action](#undo-and-redo-an-action)

[Review and Reply to Review Notes](#review-and-reply-to-review-notes)

[View Multiple Review Notes at Once](#view-multiple-review-notes-at-once)

[Edit Review Notes](#edit-review-notes)

[Search Review Notes](#search-review-notes)

[Expand and Collapse a Review Note](#expand-and-collapse-a-review-note)

[Reorder Review Notes](#reorder-review-notes)

[Hide and Display Review Note Badges](#hide-and-display-review-note-badges)

[Delete a Review Note](#delete-a-review-note)

[Additional Information about Review Notes](#additional-information-about-review-notes)

Add a Review Note
-----------------

To add a Review Note in Volt MX Iris, do the following:

1.  On the Project Explorer, click the Project tab.
2.  On the Project tab, select the item you want to add a note to. This item is now the item of focus on the Iris Canvas.
3.  In the **Properties** section, click the **Review** tab.
4.  Start entering your review comments.  
    You can format text by using the rich text controls located above the note's text field. Some text may need to be selected first before you apply certain kinds of formatting.
5.  When you're finished, click anywhere outside the text field. A badge is assigned to the note, which appears in the upper right corner of the item on the Iris Canvas. Widget badges are orange with white numbers while form badges are blue with a white uppercase "F".

Format a Review Note
--------------------

You format the text of a Review Note by using the rich text controls located above the note's text field. Some text may need to be selected first before you apply certain kinds of formatting. The following table lists the kinds of formatting available.

<table style="width: 100%;mc-table-style: url('Resources/TableStyles/2015DefinitiveBasicTable.css');" class="TableStyle-2015DefinitiveBasicTable" cellspacing="0"><colgroup><col class="TableStyle-2015DefinitiveBasicTable-Column-Column1" style="width: 131px;"> <col class="TableStyle-2015DefinitiveBasicTable-Column-Column1"></colgroup><tbody><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1" style="font-weight: bold;">Type of Formatting</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1" style="font-weight: bold;">Description</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Font Name</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the selected text or text that follows the insertion point with the font typeface that you select from the Font drop-down list. The available typefaces are as follows: <span style="font-family: Arial;">Arial</span>, <span style="font-family: 'Comic Sans MS';">Comic Sans MS</span>, <span style="font-family: 'Courier New';">Courier New</span>, <span style="font-family: Georgia;">Georgia</span>, <span style="font-family: 'Lucida Sans Unicode';">Lucida Sans Unicode</span>, <span style="font-family: Tahoma;">Tahoma</span>, <span style="font-family: 'Times New Roman';">Times New Roman</span>, <span style="font-family: 'Trebuchet MS';">Trebuchet MS</span>, and <span style="font-family: Verdana;">Verdana</span>.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Font Size</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the selected text or text that follows the insertion point with the font size that you select from the Font Size drop-down list. The available font sizes range from 8 point to 72 point.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Font Formatting</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the selected text or text that follows the insertion point with the font formatting that you select. The available font formatting includes Bold, Italic, Underlined, Font Color, and Font Background Color.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Alignment</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the paragraph that the insertion point is currently in with the Alignment that you select. The available paragraph alignment options include Left-aligned, Centered, Right-aligned, and Justified.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Lists</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the paragraph that the insertion point is currently in with the List Type that you select. You can create either a numbered list or a bulleted list.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Indent Level</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the paragraph that the insertion point is currently in with the Indent Level that you select. You can either increase the Indent Level of a paragraph or decrease it.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Block Quote</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Formats the paragraph that the insertion point is currently in as a Block Quote, which sets it off uniquely from the text around it. The Block Quote button acts as a toggle, so to remove the Block Quote formatting, click the Block Quote button again.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyE-Column1-Body1">Remove Formatting</td><td class="TableStyle-2015DefinitiveBasicTable-BodyD-Column1-Body1">Removes paragraph-level formatting from the paragraph that the insertion point is currently in, or removes font-level formatting from the selected text.</td></tr><tr class="TableStyle-2015DefinitiveBasicTable-Body-Body1"><td class="TableStyle-2015DefinitiveBasicTable-BodyB-Column1-Body1">Table</td><td class="TableStyle-2015DefinitiveBasicTable-BodyA-Column1-Body1">Opens the Table Properties dialog box where you specify the number of rows and columns you want the table to have. You can also specify the percentage of the width of the text field you want the table to take up, specify the height, and indicate whether the table has a header, as well as setting the alignment, the cell spacing, and the cell padding. You can also create a caption for the table and a summary.</td></tr></tbody></table>

Undo and Redo an Action
-----------------------

You can undo the most recent instance of typing in the Review Note field, and redo the last action that you undid. To do so, do the following:

*   To undo your last Review Note action, click the **Edit** menu, and then click **Undo**.
*   To redo the Review Note action that you just undid, click the **Edit** menu, and then click **Redo**.

Review and Reply to Review Notes
--------------------------------

With Review Notes, multiple users can review a project and provide input. You can also add your own comments to an existing note.

### View Multiple Review Notes at Once

To view multiple Review Notes at once, do the following:

1.  On the Project Explorer, click the Project tab.
2.  On the Project tab, select the parent that contains the items that have Review Notes. For instance, if a number of widgets have Review Notes associated with them, click the parent of those widgets.
3.  On the Properties Pane, click the Review tab, and then click **Notes**.

All the Review Notes for the widgets in the parent you selected are displayed.

Edit Review Notes
-----------------

To edit a Review Note, do the following:

1.  On the **App** canvas, click the Badge of the Review Note you want to edit. The note displays on the Review tab of the Properties pane.
2.  Click the text field of the note. Doing so displays the rich text controls, and the insertion point begins blinking in the text field, indicating that you can begin editing.

Search Review Notes
-------------------

To search Review Notes, do the following:

1.  On the Project Explorer, click the Project tab.
2.  On the Project tab, select the parent that contains the items that have Review Notes. For instance, if a number of widgets have Review Notes associated with them, click the parent of those widgets.
3.  On the Properties Pane, click the Review tab, and then click **Notes**.
4.  At the top of the Review tab, in the Search box, type the text you want to search for.

All text that matches your search term or phrase is highlighted in yellow in the Review Notes.

Expand and Collapse a Review Note
---------------------------------

As the number of Review Notes increases and each note grows in length, the list can become unwieldy. To mitigate this, you can collapse individual Review Notes so that only their title bar displays.

*   To collapse a Review Note, click the minus icon located near the right edge of the Review Note's title bar. The icon changes from a minus to a plus.
*   To expand a collapsed Review Note, click the plus icon located near the right edge of the Review Note's title bar.

Reorder Review Notes
--------------------

You can change the order that the Review Notes are listed in so that you can move more important notes up and less important notes down.

To reorder review notes, do the following:

1.  Display multiple Review Notes at once by following the instructions for View Multiple Review Notes at Once.
2.  Hover the cursor over the title bar of the Review Note you want to move until the cursor becomes a four-headed arrow.
3.  Click and drag the Review Note to a new location in the order of Review Notes.

Hide and Display Review Note Badges
-----------------------------------

There may be instances when you do not want to display the Review Notes Badges, such as when you are using the Functional Preview feature, or are simply wanting to see the app as a user would see it. To accommodate this need, you can turn off Review Notes Badges.

To turn Review Notes Badges on and off, do the following:

*   To turn off Review Notes Badges, on the toolbar of the Iris Canvas, click the Badges switch so that the toggle is on the left side of the switch.
*   To turn on Review Notes Badges, on the toolbar of the Iris Canvas, click the Badges switch so that the toggle is on the right side of the switch.

Delete a Review Note
--------------------

To delete a Review Note, click the trashcan icon located at the right edge of the Review Note's title bar.

Additional Information about Review Notes
-----------------------------------------

The following are additional facts about Review Notes.

*   Each widget can have only one note, but that note can have as many replies as are needed.
*   If you need more room to display a note, you can increase the width of the Properties pane.
*   When you fork a form, all Review Notes of that form are also added to the forked form. There is no linkage back to the original form’s Review Notes.
*   If a project containing notes is imported into Volt MX Iris, these notes appear on the Review tab of the Properties pane.
*   If a component or master has a Review Note, that one note applies regardless of what platform or channel you select for that component or master; changing the platform or channel does not change the note.
*   When a widget with a Review Note is added to a collection, the Review Note associated with the widget is not copied into the collection.
