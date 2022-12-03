                            

voltmx.todayExtension Functions
=============================

The voltmx.todayExtension namespace contains the following functions.

<details close markdown="block"><summary>voltmx.todayExtension.setExtensionsCallbacks Function</summary> 

* * *

Sets a Today Extension with callbacks for app extension state changes.

### Syntax

```

voltmx.todayExtension.setExtensionsCallbacks(  
    callbacks);
```

### Input Parameters

**_callbacks_**

Contains an object with key-value pairs where the key specifies the extension state and value as a callback function. The following are the possible extension states.

 | Constant | Description |
 | --- | --- |
 | beginRequestWithExtensionContext | The user has selected the action. |
 | loadView | Loads a view that the controller manages. |
 | viewDidAppear | A view was just displayed. |
 | viewWillAppear | A view is about to be displayed. |
 | viewDidDisappear | A view just removed from the view heirarchy. |
 | viewWillDisappear | A view is about to be removed from the view hierarchy. |
 | widgetActiveDisplayModeDidChangeWithMaximumSize | The active display mode has changed. |
 | widgetPerformUpdate | It is time for the widget to update its state |


### Example: loadView

```

function loadView()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"loadView": loadView});

```

### Example: viewDidAppear

```

function viewDidAppear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewDidAppear": viewDidAppear});

```

### Example: viewWillAppear

```

function viewWillAppear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewWillAppear": viewWillAppear});

```

### Example: viewDidDisappear

```

function viewDidDisappear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewDidDisappear": viewDidDisappear});
```

### Example: viewWillDisappear

```

function viewWillDisappear()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"viewWillDisappear": viewWillDisappear});
```

### Example: widgetActiveDisplayModeDidChangeWithMaximumSize

```

function widgetActiveDisplayModeDidChangeWithMaximumSize(var var displayMode,var maxsize)	
{
    var preferredContentSize;

    if(activeDisplayMode == NCWidgetDisplayModeCompact)
    {
        preferredContentSize = {width: maxsize.CGSizeValue.width,height:300};
    }
    else
    {
        preferredContentSize = {width: maxsize.CGSizeValue.width,height:800};
    }
    return preferredContentSize;
}

voltmx.todayExtension.setExtensionsCallbacks ({"widgetActiveDisplayModeDidChangeWithMaximumSize": widgetActiveDisplayModeDidChangeWithMaximumSize});
```

### Example: widgetPerformUpdate

```

function widgetPerformUpdate()
{
    // Native Function API code
}

voltmx.todayExtension.setExtensionsCallbacks ({"widgetPerformUpdate": widgetPerformUpdate });
```

### Return Values

None.

* * *

![](resources/prettify/onload.png)
