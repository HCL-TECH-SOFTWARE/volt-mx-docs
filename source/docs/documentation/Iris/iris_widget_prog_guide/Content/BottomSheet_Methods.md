---
layout: "documentation"
category: "iris_widget_prog_guide"
---
                               


BottomSheet Methods
===================

The namespace for the BottomSheet widget is **mBottomSheetObject**. It contains the following methods:

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[destroy Method](javascript:void(0);)

* * *

Ensures that the garbage collection process of a BottomSheet occurs, and the data of the BottomSheet is wiped out. So, the next time a BottomSheet is displayed, a new instance of the BottomSheet is created.

Syntax

destroy()

Example

{% highlight voltMx %}var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Destroying a widget using destroy method.
testForm.mBottomSheetObject.destroy();
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[dismiss Method](javascript:void(0);)

* * *

Dismisses a BottomSheet widget for users.

Syntax

dismiss()

Example

{% highlight voltMx %}var mBottomSheetObject= new voltmx.ui.BottomSheet({});
//Dismissing a widget using dismiss method.
testForm.mBottomSheetObject.dismiss();
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[show Method](javascript:void(0);)

* * *

Displays a BottomSheet widget for users.

Syntax

show()

Example

{% highlight voltMx %}var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Showing a widget using show method.
testForm.mBottomSheetObject.show();
{% endhighlight %}

**Platform Availability**

*   Android

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[setState Method](javascript:void(0);)

* * *

Sets the state of a BottomSheet widget as Expanded or Collapsed.

Syntax

setState()

Constants

*   BOTTOM\_SHEET\_STATE\_EXPANDED
*   BOTTOM\_SHEET\_STATE\_COLLAPSED

Example

{% highlight voltMx %}
var mBottomSheetObject = new voltmx.ui.BottomSheet({});
//Collapsing a bottomSheet widget using setState method.
mBottomSheetObject.setState(constants.BOTTOM_SHEET_STATE_COLLAPSED);
{% endhighlight %}

**Platform Availability**

*   Android

* * *

