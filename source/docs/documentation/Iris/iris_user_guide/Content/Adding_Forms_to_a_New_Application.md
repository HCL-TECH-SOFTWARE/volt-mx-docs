---
layout: "documentation"
category: "iris_user_guide"
---
                         


Create Screens
==============

In Volt MX Iris, you build screens using forms that you populate with widgets such as buttons, text fields, labels, and the like. Any given screen that the user sees is the result of a form, and your application can consist of as many or as few forms as it needs. To have the app move from one form to another, you associate that action with a particular widget, such as a button.

You can use a form across multiple [platformsThe operating system of a given device. iOS and Android are examples of platforms.](javascript:void(0);), and you can adapt a form created for one [channelDevice types available within a given platform. These include mobile (i.e. phone), tablet, and desktop.](javascript:void(0);) for use on other channels. For information on creating forms for Apple Watch, see [Apple Watch](Watch.html).

> **_Note:_** In Volt MX Studio 6.5, you could port a project from one platform to another, and to channels within the target platform. However, issues would arise due to the wide variations in form factors from one platform and channel to another. In Volt MX Iris, universality across platforms and channels is achieved through the use of components and masters; platform porting is not supported in Volt MX Iris. For more information, see Working with Components, HCL Forge , and Masters. .

To add a form to your application, do the following:

1.  On the Project Explorer, click the **Project** tab.
2.  Expand the channel you want to create the form for, either Mobile, Tablet, Watch, or Desktop.
3.  Hover over **Forms**, click its context menu arrow, select **New Form**, and then click **Flex Form**. A new form is added to the **Project** tab, and becomes the form of focus on the Iris Canvas.

> **_Note:_** Do not select **VBox Form** from the **New Form** menu. This is used only for legacy applications that were created in Volt MX Studio 6.0 and earlier.

5.  To rename the form, on the **Look** tab of the Properties Pane, type the new name in the ID text box. The form name cannot have any spaces.
