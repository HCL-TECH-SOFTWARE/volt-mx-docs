                         

You are here: Appendix F: Support for iPhone X

Support for iPhone X
====================

iPhone X comes with a super retina edge to edge display with 458 PPI. It comes with a device height of 812, width of 375 and a screen resolution of 2436×1125 (@3X). In iPhone X, Face ID replaces the Touch ID authentication.

> **_Note:_** For information about how to detect whether an iPhone device supports either the Touch ID or Face ID feature, refer the [getBiometryType API](../../../Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.md#biometryofDevice).

Prerequisites
-------------

*   You must have Xcode 9.0.1 to test the applications on iPhone X simulator.

Requirements
------------

**To provide support for iPhone X on Volt MX Iris, do the following**:

*   **Provide a 3X splash image**: Current Apps which do not have a 3X splash image, will not be able to fill the complete screen, from edge to edge in iPhone X. Splash screen with name splashscreen-812h@3x.png with a resolution of 1125 By 2436 should be provided for iPhone X.
*   **Provide a 2×1 splash video**: Current Apps which do not have a splash video of the resolution 2×1, will not fit-to-screen in iPhone X. Splash video with name splashvideo-2x1.mp4 should be provided for iPhone X. This ensures that the video will fit-to-screen and will not extend in the AVKit safe area. For details on AVKit Safe Area, refer to [Human Interface Guidelines for iPhone X](https://developer.apple.com/ios/human-interface-guidelines/overview/iphone-x/).
*   **Add NSFaceIDUsageDescription in the infoplist\_configuration.json**: You must add the **NSFaceIDUsageDescription** (Privacy - Face ID Usage Description) key in the configuration file for the Face ID to work. Navigation path: `projectname/resources/common/infoplist_configuration.json`. If you do not perform the above step, the app will crash. See [Apple's documentation](https://developer.apple.com/iphone/) for more information.

Limitations
-----------

*   When using Face ID on Xcode 9.0.1 simulator, authentication will fail every other time, and an error message Lost connection to coreauthd appears. This is a limitation from Apple. For more information, refer [https://openradar.appspot.com/34769844](https://openradar.appspot.com/34769844) and [https://github.com/lionheart/openradar-mirror/issues/18536](https://github.com/lionheart/openradar-mirror/issues/18536)

Related API Documentation
-------------------------

*   **Home Indicator Auto Hide**: See **prefersHomeIndicatorAutoHidden** in [setApplicationBehaviour function](../../../Iris/iris_api_dev_guide/content/voltmx.application_functions.md#voltmx.app5).
*   [Get Biometric Type](../../../Iris/iris_api_dev_guide/content/voltmx.localauthentication_functions.md#biometryofDevice)
