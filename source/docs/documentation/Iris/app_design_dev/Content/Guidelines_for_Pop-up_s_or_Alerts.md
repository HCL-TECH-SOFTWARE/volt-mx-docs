---
layout: "documentation"
category: "app_design_dev"
---
                          

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.html) > [UI Guidelines](UI_Guidelines.html) > Guidelines for Pop-Up's or Alerts

Guidelines for Pop-ups or Alerts
--------------------------------

Following are the guidelines for pop-ups or alerts.

*   Use native alerts to the extent possible (as the color scheme of native alert is dependent on device theme and will vary when the user changes the device theme), to give a more consistent (native) behavior of the application.
*   While designing a custom pop-up, make sure that
    *   It is aligned properly at the center of the screen.
    *   Define the pop-up as a modal or non-modal, based on the use case. Use the modal pop-up when it is required to block the user, until the user responds to the pop-up.
*   It is not recommended to open a new alert from within the handler of one alert.
*   It is recommended to configure the “inTransition”, “outTransition”, and “transperancyBehindPopup” properties of a pop-up accordingly to the use case.
