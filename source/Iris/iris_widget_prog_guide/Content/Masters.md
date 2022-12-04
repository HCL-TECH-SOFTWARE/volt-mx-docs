                              


Masters
=======

Masters enable you to package reusable functionality into a single modular unit. You can insert widgets inside of masters, and the widgets can respond to all the events that they normally do. With masters, you can build modular units of highly reusable code that is portable across multiple apps. For detailed information on masters, please see [Using Masters](../../../Iris/iris_widget_prog_guide/Content/Masters.md) in the [VoltMX Iris User Guide](../../../Iris/iris_user_guide/Content/Introduction.md).

Masters are based on the [flexContainer](FlexContainer.md) widget. To turn a flexContainer into a master, simply set it's `isMaster` property to `true`. The master serves as a container for other widgets, just like a normal flexForm. Any widget that can be used in a flexForm can be used in a master.

For example, you can create a master that provides apps with the ability to log into certain types of web sites or specific web services. Once created, you can simple drag and drop this functionality into any app you create.

The easiest way to create masters is to build them interactively in Volt MX Iris as you build your app. However, you can also instantiate masters using the flexContainer's constructor and then set the flex form's `isMaster` property to `true`.

Masters support lifecycle events just like regular flexContainers.

