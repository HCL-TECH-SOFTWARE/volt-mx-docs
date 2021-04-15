---
layout: "documentation"
category: "iris_api_dev_guide"
---

media Properties
================

The media object provides the following properties.

<details close markdown="block"><summary>data</summary> 

* * *

Holds the data object that contains the sound associated with the media object.

### Syntax

{% highlight VoltMx %}
data
{% endhighlight %}

### Example

{% highlight voltMx %}
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The data inside the media object is:" + mediaObj.data);
{% endhighlight %}

### Type

JavaScript object.

### Read/Write

Read only.

### Platform Availability

Windows10, Android, iOS

* * *

</details>
<details close markdown="block"><summary>duration</summary> 

* * *

Contains the duration of the audio in seconds.

### Syntax

{% highlight VoltMx %}
duration
{% endhighlight %}

### Example

{% highlight voltMx %}
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The duration of the media is:" + mediaObj.duration);
{% endhighlight %}

### Type

Number

### Read/Write

Read only.

### Platform Availability

Windows10, Android, iOS

* * *

</details>
<details close markdown="block"><summary>isPlaying</summary> 

* * *

This property contains a Boolean value that indicates whether or not the audio is currently playing.

### Syntax

{% highlight VoltMx %}
isPlaying
{% endhighlight %}

### Example

{% highlight voltMx %}
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The media is being played now or not:" + mediaObj.isPlaying);
{% endhighlight %}

### Type

Boolean

### Read/Write

Read only

### Platform Availability

Windows10, Android, iOS

* * *

</details>
<details close markdown="block"><summary>volume</summary> 

* * *

Contains the current volume level.

### Syntax

{% highlight VoltMx %}
volume
{% endhighlight %}

### Example

{% highlight voltMx %}
var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The volume of the media is:" + mediaObj.volume);
{% endhighlight %}

### Type

Double

### Read/Write

Read+Write

### Remarks

Use this property to read the current volume level or set a new volume level for playing back the audio file. Valid values for this property range from 0.0 to 1.0 inclusive.

### Platform Availability

Windows10, Android, iOS

* * *

![](resources/prettify/onload.png)
</details>