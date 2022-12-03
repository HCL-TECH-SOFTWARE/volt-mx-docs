                         


Android USB Debugging on Windows 10
===================================

You can debug your Android app on an Android device using the USB. To debug an Android app on Windows 10, do the following:

*   [Enable USB debugging on your Android phone](#enable-usb-debugging-on-your-android-phone)
*   [Install Java SE SDK 8 update 152](#install-java-se-sdk-8-update-152)
*   [Configure Android SDK](#configure-android-sdk)
*   [Configure Google Chrome for debugging](#configure-google-chrome-for-debugging)

Enable USB debugging on your Android phone
------------------------------------------

On Android 4.1 and lower, the Developer options screen is available by default. On Android 4.2 and higher, do the following:

1.  Open the **Settings** app.
2.  Select **System**.
3.  Scroll to the bottom and select **About phone**.
4.  Scroll to the bottom and tap **Build number** 7 times.
5.  Return to the previous screen to find **Developer options** near the bottom.
6.  Scroll down and enable **USB debugging**.

Install Java SE SDK 8 update 152
--------------------------------

Install Java SE SDK 8 update 152, click [Java SE SDK 8 Update 152](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and follow the instructions on your Windows 10 machine.

Configure Android SDK
---------------------

To download and configure Android SDK on your Windows 10 computer, do the following:

Ensure that the same Android SDK version is used in Iris.

1.  Download the Android Studio .
    1.   Click [sdk-tools-windows-3859397.zip](https://dl.google.com/android/repository/sdk-tools-windows-3859397.zip) to download the Android SDK Command line tool for Windows.
    2.  Extract the downloaded content to **C:\\Users\\USERNAME\\AppData\\Local\\Android**.
    3.  Navigate to **C:\\Users\\USERNAME\\.android** and create an empty file named **repositories.cfg**.
2.  Install the Android SDK platform tool.
    1.  Navigate to **C:\\Users\\USERNAME\\AppData\\Local\\Android\\tools\\bin**
    2.  Open a command window (Shift-Right click, Open Powershell window here, type `cmd` in the Powershell window).
    3.  Run the command `sdkmanager platform-tools` to install the Android SDK platform tools.
3.  List the Android devices connected to the Windows 10 PC.
    1.  Navigate to **C:\\Users\\USERNAME\\AppData\\Local\\Android\\platform-tools**.
    2.  Open a command window.
    3.  Run `adb devices -l` to list the Android devices connected to the Windows 10 PC.
4.  Connect to the Android device.
    1.  Navigate to **C:\\Users\\USERNAME\\AppData\\Local\\Android\\tools**
    2.  Run `monitor.bat` and click on the connected device.

Ensure that your environment variables are set correctly from [here](SUG_Android.md#manually-set-the-android-environment-variables).

Now your Android device is successfully connected to your Windows 10 PC and can be used to debug your application in Volt MX Iris.

> **_Important:_** Before you do start debugging your Android app on the Windows 10 machine, ensure that Google Chrome is version 62 or earlier. Debugging will not work with version 63 and later.

Configure Google Chrome for debugging
-------------------------------------

To configure Google Chrome for Android USB debugging, do the following:

1.  Download Chrome version 61 from [https://www.slimjet.com/chrome/google-chrome-old-version.php](https://www.slimjet.com/chrome/google-chrome-old-version.php)
2.  Uninstall the current version of Chrome.
3.  Stop all Google Processes in Task Manager.
4.  Disable Google Update from the Windows Startup.
5.  Stop the Google Update Services.
6.  Erase the directory **Update in C:\\Program Files (x86)\\Google**.
7.  Install Chrome 61 from the **Downloads** directory.
8.  Quit Google Chrome 61 as it starts.
9.  If Google Chrome has already started, it will begin the auto-update. In that case:
    1.  Exit Google Chrome
    2.  Navigate to **C:\\Program Files (x86)\\Google\\Chrome\\Application** and delete the file **update\_chrome.exe**.
    3.  Erase the directory Update in **C:\\Program Files (x86)\\Google**.
10.  Start Google Chrome 61 and check the version.
11.  To disable Google Chrome automatic updates if they are re-enabled, change the following registry key: Set **HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Policies\\Google\\Update\\AutoUpdateCheckPeriodMinutes to the REG\_DWORD** value to **0**.
12.  See [https://support.google.com/chrome/a/answer/6350036#Policies](https://support.google.com/chrome/a/answer/6350036#Policies) for more information about disabling Google Chrome automatic updates.
