                         


Glances
=======

A glance is a supplemental way for a user to view important information from the app. When you click on a glance of an app, the relevant app appears on your screen. For example. a glance might inform you of an upcoming meeting. Each glance is divided into Upper Glance and Lower Glance. The Upper Glance covers the top half of a watch and the lower glance covers the bottom half of a watch. Volt MX Iris supports only one Glance for each app. It is not mandatory for an app to have a glance.

To add a Glance in Volt MX Iris, do the following:

1.  Expand the **Watch** channel and hover on **Glance** to display a drop-down arrow.
2.  Click the drop-down arrow and click **New Glance**. A new Glance is created. The system assigns a unique name to this Glance.
3.  If you want, rename the notification by clicking the drop-down arrow next to the Glance and then clicking **Rename**. The Glance name becomes an editable text field. Rename the Glance and then press **Enter** on your keyboard.
    
    > **_Note:_** When a Glance is added to a Watch, the Upper Glance and Lower Glance are created automatically.
    

The following widgets are supported on a Glance:

<table style="margin-left: 0;margin-right: auto;width: 40%;"><colgroup><col style="width: 45px;"> <col style="width: 45px;"> <col style="width: 45px;"> <col style="width: 45px;"></colgroup><tbody><tr><td data-mc-conditions="Default.DoNotPublish"><a href="WatchGroupWidget.html">Group</a></td><td data-mc-conditions="Default.DoNotPublish"><a href="WatchDateWidget.html">Date</a></td><td data-mc-conditions="Default.DoNotPublish"><a href="Image2.html">Image2</a></td><td data-mc-conditions="Default.DoNotPublish"><a href="Label.html">Label</a></td></tr><tr><td data-mc-conditions="Default.DoNotPublish"><a href="WatchLineWidget.html">Line</a></td><td data-mc-conditions="Default.DoNotPublish"><a href="WatchTimerWidget.html">Timer</a></td><td data-mc-conditions="Default.DoNotPublish"><a href="Map.html">Map</a></td><td data-mc-conditions="Default.DoNotPublish">&nbsp;</td></tr></tbody></table>

Look
----

On the Look tab, you set properties that control the way a Glance appears on an app. The following are the major properties you can condition on this tab:

*   Specify a name for the Glance.
*   Choose the platforms on which a widget should be rendered.

Action
------

On this tab, you define the events that are executed when an action is run. For a notification, you can run the following actions:

*   onInit: This action allows you initialize your interface controller.
*   onWillActivate: This action lets you know that your interface will soon be visible to the user. Use this method only to make small changes to your interface. For example, you might use this method to update a label based on new data.
*   onDidDeactivate: This action allows you to clean up your interface and put it into a quiescent state. For example, use this method to invalidate timers and stop animations.
*   onAwake: This action is called to let you know that the interface controller’s contents are onscreen.
*   didAppear This action is invoked to let you know that the content from the form is now onscreen.
*   interfaceDidScrollToTop - This action is invoked when the user performs a scroll-to-top gesture and the scrolling animation has finished.For example, tapping the status bar.
*   interfaceOffsetDidScrollToTop - This action is invoked to let you know that the user has scrolled to the top of the interface and the scrolling animation is completed by the interface controller.
*   interfaceOffsetDidScrollToBottom – This action is invoked to let you know that the user has scrolled to the bottom of the interface and that the scrolling animation is completed by the interface controller.

For more information on using these actions, see [Add Actions](working_with_Action_Editor.md).
