                              


SlidingContainer Events
=======================

The SlidingContainer Widget has the following events associated with it.

* * *


<details close markdown="block"><summary>commandPanelClosed Event</summary>

* * *

The event is invoked by the platform when the command panel is closed.

### Syntax

```

commandPanelClosed()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the commandPanelClosed event callback to a SlidingContainer widget.
frmSlidingC.mySlidingC.commandPanelClosed=commandPanelClosedCallBack;
function commandPanelClosedCallBack(){
  //Write your logic here.
 }

```

### Platform Availability

Windows

* * *

</details>
<details close markdown="block"><summary>commandPanelClosing Event</summary>

* * *

The event is invoked by the platform when the command panel is about to close.

### Syntax

```

commandPanelClosing()
```

### Read/Write

Read + Write

### Example

```

//Sample code to set the commandPanelClosing event callback to a SlidingContainer widget.
frmSlidingC.mySlidingC.commandPanelClosing=commandPanelClosingCallBack;
function commandPanelClosingCallBack(){
  //Write your logic here.
 }

```

### Platform Availability

Windows

* * *

</details>

