---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


media Properties
================

The media object provides the following properties.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[data](javascript:void(0);) 

* * *

Holds the data object that contains the sound associated with the media object.

Syntax

data

Example

{% highlight voltMx %}var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The data inside the media object is:" + mediaObj.data);

{% endhighlight %}

Type

JavaScript object.

Read/Write

Read only.

Platform Availability

Windows10, Android, iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[duration](javascript:void(0);) 

* * *

Contains the duration of the audio in seconds.

Syntax

duration

Example

{% highlight voltMx %}var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The duration of the media is:" + mediaObj.duration);

{% endhighlight %}

Type

Number

Read/Write

Read only.

Platform Availability

Windows10, Android, iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[isPlaying](javascript:void(0);) 

* * *

This property contains a Boolean value that indicates whether or not the audio is currently playing.

Syntax

isPlaying

Example

{% highlight voltMx %}var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The media is being played now or not:" + mediaObj.isPlaying);
{% endhighlight %}

Type

Boolean

Read/Write

Read only

Platform Availability

Windows10, Android, iOS

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[volume](javascript:void(0);) 

* * *

Contains the current volume level.

Syntax

volume

Example

{% highlight voltMx %}var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The volume of the media is:" + mediaObj.volume);
{% endhighlight %}

Type

Double

Read/Write

Read+Write

Remarks

Use this property to read the current volume level or set a new volume level for playing back the audio file. Valid values for this property range from 0.0 to 1.0 inclusive.

Platform Availability

Windows10, Android, iOS

* * *

![](resources/prettify/onload.png)
