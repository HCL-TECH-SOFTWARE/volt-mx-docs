---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Functions
=========

The Live Tiles API contains the following functions, which are part of the [voltmx.application Namespace](voltmx.application_functions.html).

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.setAppTile](javascript:void(0);)

* * *

This API enables you to set the data for an application tile. If the user chooses to pin the application tile, the data set is visible. For more information on pinning a tile, refer [http://www.microsoft.com/windowsphone/en-us/howto/wp7/start/move-or-delete-tile-on-start.aspx](http://www.microsoft.com/windowsphone/en-us/howto/wp7/start/move-or-delete-tile-on-start.aspx).

Syntax

voltmx.application.setAppTitle([tileTemplateType](#tileTemplateType), [tileTemplateData](#tileTemplateData))  

setapptile([tileTemplateType](#tileTemplateType), [tileTemplateData](#tileTemplateData))

Input Parameters for Windows 10

  
| Parameter | Description |
| --- | --- |
| tileTemplateType \[String\] - Mandatory | tileTemplateType is a string describing which tile template to use. Refer the [tile template catalog](http://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh761491.aspx) for the list of supported tile templates |
| tileTemplateData \[Array\] - Optional | tileTemplateData is an array of data for the tile, according to the tileTemplateType being used. The [tile template catalog](http://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh761491.aspx). contains details of the data required for each tile template. |

 

Example

{% highlight voltMx %}voltmx.application.setAppTile("TileSquareBlock", ["Hello", "World!"] );
{% endhighlight %}

Return Values

None

UI Behavior - Windows 10

The title and the display name of the tile will be displayed in white or black depending on the setting in Volt MX Irisand this behavior cannot be changed even if the user sets a different theme or a background image. Unlike Mango, tiles cannot be flipped on Windows 10. The tile can be updated dynamically in Windows 10.

![](resources/images/live_tile_win8_142x141.png)

Platform Availability

Available on Windows.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.setSecondaryTile](javascript:void(0);)

* * *

This function enables you to create or update data for a secondary tile for an application. For more information about secondary tiles, refer [Secondary tiles](http://msdn.microsoft.com/en-us/library/windows/apps/hh465372.aspx).

Syntax

voltmx.application.setSecondaryTile([id](#id2), [shortname](#title), [displayname](#displayname), [imagename](#imagename))  

setSecondaryTile([id](#id2), [shortname](#title), [displayname](#displayname), [imagename](#imagename))

Input Parameters for Windows 10

  
| Parameter | Description |
| --- | --- |
| id \[String\] - Mandatory | Unique identifier of the secondary tile. |
| shortname \[String\] - Mandatory | A short name displayed directly on the tile. Anything over 40 characters will be truncated. The user has the option to change this value as part of the pinning process. |
| displayname\[String\] - Optional | The text specified here is displayed when you hover over the tile. There is no restriction on the display name length or the characters that it can contain. |
| imagename \[String\] - Optional | Name of the image to be displayed on the tile. |

 

Example

{% highlight voltMx %}//Setting a secondary tile for an application with tile id myTile1.
voltmx.application.setSecondaryTile("myTile1", "title text", "display name", "orange.png");
{% endhighlight %}

Return Values

None

UI Behavior - Windows 10

The title and the display name of the tile will be displayed in white or black depending on the setting in Volt MX Irisand this behavior cannot be changed even if the user sets a different theme or a background image. Unlike Mango, tiles cannot be flipped on Windows 10. The tile can be updated dynamically in Windows 10.

![](resources/images/live_tile_win8_142x141.png)

Platform Availability

Available for Windows.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.application.removeSecondaryTile](javascript:void(0);)

* * *

This API enables you to remove and unpin a specified secondary tile which was created earlier.

Syntax

voltmx.application.removeSecondaryTile([id](#id2))

Input Parameters

  
| Parameter | Description |
| --- | --- |
| id \[String\] - Mandatory | Unique identifier of the secondary tile |

 

**Example**

{% highlight voltMx %}voltmx.application.removeSecondaryTile("12345");
{% endhighlight %}

Return Values

None

Platform Availability

Available on Windows.

* * *

![](resources/prettify/onload.png)
