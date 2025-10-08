
media Properties
================

The media object provides the following properties.

<details close markdown="block"><summary>data</summary> 

* * *

Holds the data object that contains the sound associated with the media object.

### Syntax

```

data
```

### Example

```

var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The data inside the media object is:" + mediaObj.data);
```

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

```

duration
```

### Example

```

var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The duration of the media is:" + mediaObj.duration);
```

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

```

isPlaying
```

### Example

```

var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The media is being played now or not:" + mediaObj.isPlaying);
```

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

```

volume
```

### Example

```

var theFile = new voltmx.io.File("MyAudioFile.mp3");
var mediaObj = voltmx.media.createFromFile(theFile);
voltmx.print("The volume of the media is:" + mediaObj.volume);
```

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