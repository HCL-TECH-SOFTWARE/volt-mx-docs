                        

   

Google Maps Android v1 API (Deprecated)
=======================================

**Note**: Version 1 of the Google Maps Android API as been officially deprecated as of December 3rd, 2012. This means that from March 3rd, 2013 you will no longer be able to request an API key for this version. No new features will be added to Google Maps Android API v1. However, apps using v1 will continue to work on devices. Existing and new developers are encouraged to use Google Maps Android API v2. Please refer [THIS SITE](http://stagedeveloper.voltmx.com/maps/documentation/android/) for more details.

  

VoltMX is already working on bringing the Maps V2 API into the VoltMX platform. This we are targeting for 5.5 release which most likely available by First week of April. We recommend you to get the Google Map android key for V1 before March 3rd for the production key.  
  
Few things to note about Maps V2 API:  
  

*   It is supported only from Android OS version 2.2 and above.
  
*   That means, your applications maps feature will work only from 2.2 and above.
  
*   You must be setting the min SDK version in the application properties as Android 2.2.
  

  
  

So, What's Next? / FAQ
======================

  

*   When VoltMX is going to support Version 2 Google Map APIs ?
*   VoltMX is planning to provide support for V2 google maps from VoltMX version 5.5 and 5.0.x higher versions. The target for 5.5 VoltMX release is likely to be happen by First week of April.
  

*   What will happen to the applications running with V1 keys ?
*   Please note that, Google is only stopping issuing the new keys for V1, but the applications which are already consumed the V1 key will continue to work on devices. So, if you can get the V1 key before hand, your application can target devices running 2.1 as well (this is the minimum android OS version VoltMX is supporting in 5.0.x GA).
  

*   is VoltMX still going to support google maps V1?
*   VoltMX is planning to provide support for both V1 and V2 google maps. That means, if the app is configured with both V1 and V2 keys, the application will run with V1 maps on 2.1 devices and with V2 maps on or above 2.2 devices.
  

*   is VoltMX still going to support existing apps running with V1 Maps after VoltMX 5.5 release?
*   Yes. Existing apps which are configured only with V1 key will continue to run even after consuming VoltMX 5.5 GA.
  

*   What will happen to apps running with V1 Maps on 2.1 Android OS version devices?
*   Apps which are configured only with V2 key, the map widget will work only on or above 2.2 devices only. Application can disable the maps feature when running on 2.1 devices or provide alternate solution for 2.1 devices or simply restrict the application to install on 2.2 and above devices by setting min SDK version to 2.2 in application properties.
  

 [![](AndroidV1Maps_files/uweb-o14.gif) Edit](http://stagedeveloper.voltmx.com/twiki/bin/edit/Portal/AndroidV1Maps?t=1362554842;nowysiwyg=0 "Edit this topic text") | [Attach](http://stagedeveloper.voltmx.com/twiki/bin/attach/Portal/AndroidV1Maps "Attach an image or document to this topic") | [Print version](http://stagedeveloper.voltmx.com/twiki/bin/view/Portal/AndroidV1Maps?cover=print%25QUERYPARAMSTRING%25 "Printable version of this topic") | [History](http://stagedeveloper.voltmx.com/twiki/bin/rdiff/Portal/AndroidV1Maps?type=history "View total topic history"): %REVISIONS% | [Backlinks](http://stagedeveloper.voltmx.com/twiki/bin/oops/Portal/AndroidV1Maps?template=backlinksweb "Search the Portal Web for topics that link to here") | [Raw View](http://stagedeveloper.voltmx.com/twiki/bin/view/Portal/AndroidV1Maps?raw=on "View raw text without formatting") | [Raw edit](http://stagedeveloper.voltmx.com/twiki/bin/edit/Portal/AndroidV1Maps?t=1362554842;nowysiwyg=1 "Raw Edit this topic text") | [More topic actions](http://stagedeveloper.voltmx.com/twiki/bin/oops/Portal/AndroidV1Maps?template=oopsmore&param1=2&param2=2 "Delete or rename this topic; set parent topic; view and compare revisions")[History](http://stagedeveloper.voltmx.com/twiki/bin/rdiff/Portal/AndroidV1Maps?type=history "View total topic history"): %REVISIONS% | 

    

<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" valign="middle" width="320"><a href="http://stagedeveloper.voltmx.com/" class="Logo" style="position:relative;left:-35px;"><img src="AndroidV1Maps_files/voltmx_dev_logo1.png"></a></td><td align="right"><div class="twTopMenuTab" style="float:right;margin-top:5px;font-weight:bold;"><ul><li>Srinivasachary <img src="AndroidV1Maps_files/menu-down.gif" alt="Menu dropdown" title="Menu dropdown" border="0" height="16" width="14"><ul><li><a href="http://stagedeveloper.voltmx.com/ChangePassword" target="_top">ChangePassword</a></li><li><a href="http://stagedeveloper.voltmx.com/twiki/bin/view/Portal/DeveloperPortal?logout=1" target="_top">Log Out</a></li></ul></li></ul><p></p><p></p></div><span class="ctcmenu"><a href="http://www.voltmx.com/" target="_blank">VoltMX.com</a> | <a href="http://www.voltmx-solutions.com/" target="_blank">Blog</a> | <a href="http://www.voltmx.com/about-us/contact-us" target="_blank">Contact Us</a> | <a href="mailto:portal_admin@voltmx.com">Feedback</a>|</span></td></tr></tbody></table>

<table style="position:relative;background-color:#fff" align="left" border="0" cellpadding="0" cellspacing="0" height="60" width="1000"><tbody><tr><td id="nav" align="left" valign="middle"><ul><li class="first"><a href="http://stagedeveloper.voltmx.com/DeveloperPortal#" style="font-size:13px;">HOME</a></li><li id="click_here"><a href="#" style="font-size:13px;">PRODUCTS</a><div id="submenu" style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#3399FF;display:none;position:absolute;background-color:#fff"><p style="text-align:left;padding:15px 0 10px 0"><a href="http://stagedeveloper.voltmx.com/Platform" style="font-size:13px;font-weight:normal;">VOLTMX</a></p><p style="text-align:left;padding:5px 0 10px 0"><a href="http://stagedeveloper.voltmx.com/MobileApplicationManagement" style="font-size:13px;font-weight:normal;">MOBILE APP MANAGEMENT</a></p><p style="text-align:left;padding:5px 0 10px 0"><a href="http://stagedeveloper.voltmx.com/Sync" style="font-size:13px;font-weight:normal;">SYNC FRAMEWORK</a></p></div><p></p></li><li><a href="http://stagedeveloper.voltmx.com/VoltMXReleases" style="font-size:13px;">DOWNLOAD</a></li><li><a href="http://stagedeveloper.voltmx.com/VoltMXDocuments" style="font-size:13px;">DOCUMENTATION</a></li><li><a href="http://stagedeveloper.voltmx.com/ProductRoadMap" style="font-size:13px;">ROADMAP</a></li><li><a href="http://stagedeveloper.voltmx.com/HowToAll" style="font-size:13px;">VIDEOS</a></li><form id="forumform" name="forumform" action="http://stagedeveloper.voltmx.com/voltmxforum/login-new2.php" method="post"><input name="crypttoken" value="0846de2502d31cc3ae9e08fb5f493e38" type="hidden"> <input id="loginemail" name="fsessionid" value="5372696E6976617361636861727920446F74204D7574756B756C6F6A75204174204B6F6E7920446F7420436F6D2E3032323230363033" type="hidden"><li id="forumlink" class="newlink" style="font-size: 13px; color: rgb(119, 119, 119); margin-left: 10px;">FORUM</li></form><li><a href="http://stagedeveloper.voltmx.com/VoltMXSupport" style="font-size:13px;">SUPPORT</a></li></ul></td></tr></tbody></table>

![](AndroidV1Maps_files/spacer.gif)

*    [![](AndroidV1Maps_files/uweb-o14.gif) Edit](http://stagedeveloper.voltmx.com/twiki/bin/edit/Portal/AndroidV1Maps?t=1362554846;nowysiwyg=0 "Edit this topic text")
*   [Attach](http://stagedeveloper.voltmx.com/twiki/bin/attach/Portal/AndroidV1Maps "Attach an image or document to this topic")

![](AndroidV1Maps_files/spacer.gif)
