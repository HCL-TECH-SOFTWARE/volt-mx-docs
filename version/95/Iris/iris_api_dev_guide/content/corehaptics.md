                            

Core Haptics API
================

Haptic technology is the science of transmitting and understanding tactile information through interfaces. Using Haptic feedback, developers can make the app communicate with the users by using the touch interface to send signals, such as taps or vibrations.

The Core Haptics API allows developers to incorporate custom haptic feedback for applications. The Core Haptics APIs can be used to engage users physically, by implementing tactile feedback that gets attention and reinforces actions. Using the Core Haptics API, developers can define haptic patters such as Transient haptics (such as taps on the screen) and Continuous haptics (such as long vibrations).

The Core Haptics API uses the `voltmx.haptics Namespace` and has the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.haptics.isDeviceCompatible](voltmx.haptics.md#isDeviceCompatible) | Checks if the device is compatible to use core haptics. |
| [voltmx.haptics.HapticsObj.play](voltmx.haptics.md#HapticsObj.play) | Generates and performs the customized haptic feedback. |

 

Check whether the device that you are using is compatible to implement haptic feedback by using the [voltmx.haptics.isDeviceCompatible](voltmx.haptics.md#isDeviceCompatible) function. By using the [voltmx.haptics.HapticsObj.play](voltmx.haptics.md#HapticsObj.play) function, you can pass the parameters that perform a customized haptic feedback interaction.

![](resources/prettify/onload.png)
