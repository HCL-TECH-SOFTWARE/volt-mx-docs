                              


VoltMXDataMapper
==============

A VoltMXDataMapper class helps update UI widgets on an Apple Watch application. This class accepts a dictionary of information and automatically maps the dictionary contents on to the widget properties when the dictionary follows a pre-defined format. Typically, this dictionary is the response data received from a phone application using VoltMXWatchKitUtil APIs. The class has the following APIs:

*   initWithObject: This API helps initialize VoltMXDataMapper object. This API accepts an object that manages UI widgets (an object of WKInterfaceController class) as a parameter to map the widget properties with the dictionary contents.
    
    > **_Note:_** If you initialize VoltMXDataMapper object using the init function, an exception will result.
    
*   updateWidgetPropertiesFromDictionary: This API updates the widget properties with the input dictionary contents. This API relies on outlets (properties) defined in the controller object to map the dictionary contents. The keys in the dictionary are the names of the outlets in the object passed as a parameter in VoltMXDataMapper object creation. The values must be the dictionary with keys as properties of outlets and their corresponding values.
    
    > **_Note:_** Some widgets can accept string also as a value.
    

### Sample code to create object and updating the properties

```
//Sample code
VoltMXDataMapper *dataMapper = [[VoltMXDataMapper alloc] initWithObject:self];//Here self is the InterfaceController
[dataMapper updateWidgetPropertiesFromDictionary:aDictioanry];

```

The followingare the widgets supported by VoltMXDataMapper class:

*   [Button](#button)
*   [Date](#date)
*   [Group](#group)
*   [Image](#image)
*   [Label](#label)
*   [Map](#map)
*   [Switch](#switch)
*   [Separator](#separator)
*   [Slider](#slider)
*   [Timer](#timer)
*   [Table](#table)

Button
------

This widget (an instance of WKInterfaceButton class) represents a tappable area on the watch screen. A button supports actions that help invoke a method. For example, when you tap on the watch screen, an action associated with the button gets invoked. A button can be enabled or disabled dynamically. You can assign the styles for a title using attributed title.

You cannot add a Button widget to the following forms:

*   Notification Static
*   Notification Dynamic
*   Glances

Properties

The followingare the properties of the Button Widget.

  
| Property | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| backgroundColor | A string that specifies the background color of the button. | Yes |
| backgroundImage | A string that specifies the background image name for the button. | Yes |
| color | The color to apply to the button’s title. | No |
| enabled | A Boolean value that indicates whether the button is enabled. The default is true. | Yes |
| font | The font to apply to the button’s title. | Yes |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially. | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| id | A string containing a unique identifier for the button. | No |
| image | A string containing the name of the image to use for the button. | Yes |
| installed | A Boolean value that indicates whether the item is rendered for the current device | No |
| mode | The image scaling mode to be used for the button’s image. | No |
| opacity | A numeric value that specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value. | Yes |
| render | A Boolean value that specifies whether the button will be rendered. | No |
| title | A string that specifies the title of the button. | Yes |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| visible | A value that specifies whether the button is visible. It accepts a Boolean value in a case-sensitive string or nonstring formats such as "true" / "false" or true/false. You can also specify 0 for true or 1 for false. | Yes |
| widgetAlignment | Indicates how a widget is to be anchored with respect to its parent. | No |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

Event

The button widget provides the following event.

  
| Event | Description |
| --- | --- |
| onClick | Triggered when the button is clicked by the user. |

Example

```
//Defining the button properties.
    "button": {
        "title": "button title",
        "backgroundColor": "#654321",
        "backgroundImage": "image"
    }

// You can also configure the button using the string.

        "button": "buttonName"
```

> **_Note:_** Images must be placed in the "ImageAssests" folder, and the image name must be specified as values in a dictionary. By default, images have a higher priority than color. If the specified image name is not found, then the color is applied.

Date
----

This widget (an instance of WKInterfaceDate class) displays the date or time on the watch screen. A date can be configured by time zone and calendar. You can dynamically change the color of the date. The iOS-supported calendar and time zones must be specified as string.

The followingare the supported calendar formats:

*   GregorianCalendar
*   BuddhistCalendar
*   ChineseCalendar
*   CopticCalendar
*   EthiopicAmeteMihretCalendar
*   EthiopicAmeteAlemCalendar
*   HebrewCalendar
*   ISO8601Calendar
*   IndianCalendar
*   IslamicCalendar
*   IslamicCivilCalendar
*   IslamicTabularCalendar
*   IslamicUmmAlQuraCalendar
*   JapaneseCalendar
*   PersianCalendar
*   RepublicOfChinaCalendar

Properties

The followingare the properties of Date Widget.

  
| Property | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| calendar | A string that specifies the type of calendar to use. | Yes |
| contentAlignment | A value that specifies the alignment of the content. Can be set to one of the following: Left, Right, Center, Justify. | No |
| date | The date information to display. The date options correspond to the values of the NSDateFormatterStyle type defined in the Apple documentation. kCFDateFormatterNoStyle, kCFDateFormatterShortStyle, kCFDateFormatterMediumStyle, kCFDateFormatterLongStyle, kCFDateFormatterFullStyle | No |
| format | A selector for choosing between standard and custom formats. For standard formats, you use the Date and Time attributes to configure the information you want to display. Changing the value of this attribute to Custom lets you configure the date exactly the way you want based on the format options. | No |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially. | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| id | A string containing a unique identifier for the widget. | No |
| installed | A Boolean value that indicates whether the item is rendered for the current device | No |
| opacity | A numeric value that specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value. | Yes |
| preview | A preview of what the date and time will look like. | No |
| render | A Boolean value that specifies whether the widget will be rendered. | No |
| textColor | A hexadecimal string that specifies the color of the date. | No |
| time | The time information to display. The time options correspond to the values of the NSDateFormatterStyle type | No |
| timeZone | A string that specifies the time zone for the date. | Yes |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| visible | A value that specifies whether the item is visible. It accepts a Boolean value in a case-sensitive string or nonstring formats such as "true" / "false" or true/false. You can also specify 0 for true or 1 for false. | Yes |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

Example

```
//Defining the date properties.
        "date": {
            "textColor": "#123456",
            "timeZone": "Asia/Kolkata",
            "calendar": "IndianCalendar"
        }


```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Group
-----

This widget (an instance of WKInterfaceGroup class) helps group one or more widgets. The group acts as a container. Configure a group by setting image, color, and cornerRadius.

You can add the Group widget to the following forms:

*   App forms
*   Glance Forms
*   Notification Static Notification Dynamic

Properties

The followingare the properties of the Group Widget.

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| animate | A Boolean value indicating whether the background image can be animated. Set the value to Yes to configure the animation parameters, including its duration (in seconds) and whether it starts immediately when the parent interface controller appears onscreen. Animations started at load time run continuously in a loop. | No |
| background | A string containing the name of the image to use for the image that is displayed behind the group’s items. | Yes |
| backgroundColor | A string that specifies the background color of the widget. | Yes |
| backgroundImage | A string that specifies the background image name for the button. | Yes |
| border | The border style for the group. | No |
| bottom | The number of pixels to pad on the bottom of the widget. | No |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| id | A string containing a unique identifier for the widget. | No |
| insets | The amount of space (in points) to insert between the edges of the group and its parent container. Selecting Custom lets you specify different values for the top, bottom, left, and right edges. | Yes |
| layout | A value that specifies how items in the group are laid out. Can be set to FlowHorizontal or FlowVertical. | No |
| left | The number of pixels to pad on the left side of the widget. | No |
| mode | The content mode for the group’s background image. Use this option to specify whether the image is scaled or pinned to a particular edge of the group. | No |
| opacity | A numeric value that specifies the opacity of the widget. The value of this property must be in the range 0.0 (transparent) to 1.0 (opaque). Any values outside this range are fixed to the nearest minimum or maximum value. | Yes |
| radius | The corner radius to apply to the group’s rectangle. Content inside the group is clipped to the corner radius. If you do not specify a custom value, WatchKit applies a 6-point radius by default. | Yes |
| render | A Boolean value that specifies whether the widget will be rendered. | No |
| right | The number of pixels to pad on the right side of the widget. | No |
| spacing | Additional spacing (in points) to include between items in the group. | No |
| top | The number of pixels to pad on the top of the widget. | No |
| visible | A value that specifies whether the item is visible. It accepts a Boolean value in a case-sensitive string or nonstring formats such as "true" / "false" or true/false. You can also specify 0 for true or 1 for false. | Yes |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

Example

```
//Defining the group properties.
        "group": {
            "backgroundColor": "#123456",
            "backgroundImage": "image",
            "cornerRadius": "2.0"
        }
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Image
-----

The Image widget (an instance of WKInterfaceImage class) is non-interactive widget that you can use to display a bitmapped image on the watch. The Image widget can display either a single image or sequence of images to play an animation.

> **_Note:_** Images must be present in the ImageAssests folder.

  
Supported Image formats:

All the image formats supported by iOS. Preferabley PNG or JPEG. Other supported formats can introduce performance issues.

File Naming conventions

Single image: <imagename><extension>

Ex: sample.png

Image sequence : <imagename><sequencenumber><extension>

Ex: sample1.png, sample2.png, sample3.png…etc

  
Properties

The followingare the properties of the Image Widget.

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| animate | A Boolean value indicating whether the image can be animated. Set the value to Yes to configure the animation parameters, including its duration (in seconds) and whether it starts immediately when the parent interface controller appears onscreen. Animations started at load time run continuously in a loop. | No |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| imageName | The name of the image to be displayed. This image must be in the WatchKit app’s bundle. | Yes |
| installed | Indicates whether the item is rendered for the current device | No |
| mode | The content mode for the image. This mode defines how the image scales or fills the image area. | No |
| tint | The color applied to a template image. | Yes |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

Example

```
//Defining the image properties.
        "image": {
            "imageName": "imageName",
            "tintColor": "#654321"
        } 

// You can also configure the Image using the string.
            "image": "imageName"
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Label
-----

This widget (an instance of WKInterfaceLabel class) displays text on the watch screen. The text is displayed using the system default font, scale, and alignment. To use custom values for text, use attributed text. The default label color is white.

The following are the properties of the Label Widget:

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| alignment | The alignment of the text within its bounding rectangle. Use this attribute to align text when the width of the label is greater than the width of the text itself. | No |
| alpha | The opacity of the label. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| font | The font information to be applied to the text. You can specify one of the predefined styles or provide custom style information. For custom fonts, you must include the font in your WatchKit app bundle. You can also apply font information when using the methods for setting attributed text. | No |
| height | The height of the label. Specify a fixed height or set the value of the label to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the label is hidden initially. | Yes |
| horizontal | The horizontal alignment of the label. Use this attribute to configure the horizontal position of the label relative to its immediate parent. | No |
| installed | Indicates whether the label is rendered on the current device. | No |
| lines | The maximum number of lines to allow for the label text. Text that does not fit on the specified number of lines is truncated. | No |
| minScale | The amount by which the font may be scaled to accommodate text. Values must be 1.0 or less. Specifying a value of 0 causes WatchKit to use the default scaling behavior, which allows scaling to 0.8 of the original font size. | No |
| text | The text to be displayed. | Yes |
| textColor | The color of the label's text. | Yes |
| vertical | The vertical alignment of the label. Use this attribute to configure the vertical position of the labelrelative to its immediate parent. | No |
| width | The width of the label. Specify a fixed width or set the value of the label to be a percentage of its container’s width. | Yes |

  
Example

```
//Defining the label properties.
    "label": {
        "text": "labelName",
        "textColor": "#5236ce"
    }

// You can configure the text using the string.

        "label": "labelName"
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Map
---

This widget (an instance of WKInterfaceMap class) displays the map on the watch screen. You must configure the map dynamically. A map can have more than one annotation.

Properties

The following are the properties of the Map Widget:

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| annotation | An array of dictionaries that specifies the text to be displayed on the screen. The dictionary contains the following structure. location: An array of two double values that specifies the location. This property is mandatory. The double values must be in the following format.lat: Specifies the latitude value.long: Specifies the longitude value. imageName: A string that specifies the image for annotation. offset: An array of two floating point values that specify the offset distance for annotation. pinColor: The color of the pin on the map. Can be set to red, green, and purple. If the pinColor is not specified, by default red is configured. All other colors are not supported. remove: A Boolean value as a string or number. This property removes all annotations. It accepts a boolean value in case-sensitive string or nonstring formats such as "true" / "false" or true/false. You can also specify 0 for true or 1 for false.   | Yes |
| enabled | A Boolean value that indicates whether the map is enabled. The default is true. | Yes |
| height | The height of the map object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| id | A string containing a unique identifier for the map. | No |
| mapRect | An array of four double values that specifies the two-dimensional map projection. The array must be in the following format. x: Specifies the location of the point along the x-axis of the map. y: Specifies the location of the point along the y-axis of the map. width: Specifies the width of the map. height: Specifies the height of the map. | No |
| region | An array of four double values that specifies the values as an array with the following properties. You must provide the values in two-digit numbers. latitude: Specifies the latitude value. longitude: Specifies the longitude value spanNorth: Specifies the vertical span representing the amount of map to display. spanSouth: Specifies the horizontal span representing the amount of map to display. | Yes |
| textColor | The default color of the text. | Yes |
| widgetAlignment | Indicates how a widget is to be anchored with respect to its parent. | No |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

  
Important details about the preceding properties:

*   For annotation you can specify either imageName and offset or pinColor. The behavior is undefined if you specify imageName and pinColor.
*   The offset must be configured to display the custom pin. If the pin image name is not specified, then the red pin is used.
*   The offset (with image) takes precedence over pinColor.
*   The remove property accepts a boolean value. If remove is true, then all annotations are deleted.

Example

```
//Defining the map properties.
"map": {
    "mapRect": [10.22, 10.33, 20, 20],
    "region": [17.323244, -1.89893, 1, 1],
    "annotation”:[ {
        "location": [17.23456, -1.89893],
        "imageName": "image", //optional by default red color pin is used
        "offset": [1.2, 3.4],
    },
    {
        "location": [17.323244, -1.98765],
        "pinColor": "purple"
        "remove": "yes" //Removes all annotations
    }
]
}
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Separator
---------

This widget (an instance of WKInterfaceSeparator class) helps separate the widgets. You can assign a color to a separator.

The following are the properties of the Separator Widget:

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| color | The default color of the separator. | Yes |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially. | Yes |
| horizontal | The horizontal alignment of the separatpr. Use this attribute to configure the horizontal position of the separator relative to its immediate parent. | No |
| installed | Indicates whether the item is rendered for the current device. | No |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| visible | A Boolean value that specifies the visibility of the separator.  Accepts a Boolean value in case-sensitive string, nonstring, or numeric formats. As a string, your app can set this property to "true" or "false". Alternatively, it can use the values true and false. If you choose a numeric format, specify 0 for true and 1 for false. | Yes |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

  
Example

```
//Defining the separator properties.
			"Separator": {
			"color": "5236ce",
			}
		
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Slider
------

This widget (an instance of WKInterfaceSlider class) selects a value from a defined range of values by using the minus and plus signs on the slider. The value is incremented using a float value form 0 to 1.0. A slider can be enabled or disabled dynamically.

Properties

The following are the properties of the Slider Widget.

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| color | A hexadecimal string that specifies the color of the slider. | Yes |
| continuous | The display style for the slider. When enabled, the slider value displays its value using a solid bar. When disabled, the slider displays its value using discrete steps. | No |
| enabled | A value that specifies whether the slider is enabled. It accepts a Boolean value in a case-sensitive string or nonstring formats such as "true" / "false" or true/false. You can also specify 0 for true or 1 for false. | Yes |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially. | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| installed | A Boolean value that indicates whether the item is rendered for the current device. | No |
| maxImage | The name of the image to display next to the maximum value of the slider. This image must be bundled with your WatchKit app. | No |
| maximum | The largest numerical value allowed by the slider. | No |
| minImage | The name of the image to display next to the minimum value of the slider. This image must be bundled in the WatchKit app. | No |
| minimum | The smallest numerical value allowed by the slider. | No |
| numberOfSteps | A positive integer as a string or number that specifies the number of steps between the minimum and maximum values. The slider uses the number of steps to determine how much to increment or decrement the value when the user interacts with the slider controls. | No |
| value | A positive float value as a string or number that specifies the value of the slider. | Yes |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| visible | A Boolean value that specifies the visibility of the separator.  Accepts a Boolean value in case-sensitive string, nonstring, or numeric formats. As a string, your app can set this property to "true" or "false". Alternatively, it can use the values true and false. If you choose a numeric format, specify 0 for true and 1 for false. | Yes |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

> **_Note:_** The behavior is undefined if you assign negative values to the _numberOfSteps_ and _value_ properties.

Example

```
//Defining the slider properties.
    "slider": {
        "value": ".25",
        "numberOfSteps": "10",
        "color": "#5236ce",
        "enabled": "yes"
    } 
// You can configure the slider using the string.

        "slider": ".5"
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Switch
------

This widget (an instance of WKInterfaceSwitch class) displays a toggle button on the watch screen.

The following are the properties of the Switch Widget.

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| color | A hexadecimal value contained in a number or a string that specifies the color of the switch. | Yes |
| enabled | A value that specifies whether the slider is enabled. It accepts a Boolean value in a case-sensitive string or nonstring formats such as "true" / "false" or true/false. You can also specify 0 for true or 1 for false. | Yes |
| font | The font information to be applied to the title string. You can specify one of the predefined styles or provide custom style information. | No |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially. | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| installed | Indicates whether the item is rendered for the current device | No |
| state | A Boolean value that specifies the state of the switch. Accepts a Boolean value in a case-sensitive string, nonstring, or numeric formats. As a string, your app can set this property to "true" or "false". Alternatively, it can use the values true and false. If you choose a numeric format, specify 0 for true and 1 for false. False indicates that the switch is off, while true specifies that it is on. | Yes |
| tint | A hexadecimal value contained in a number or a string that specifies the color of the switch when it is on. | Yes |
| title | The string to be displayed next to the switch. | No |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| visible | A Boolean value that specifies the visibility of the separator. Accepts a Boolean value in case-sensitive string, nonstring, or numeric formats. As a string, your app can set this property to "true" or "false". Alternatively, it can use the values true and false. If you choose a numeric format, specify 0 for true and 1 for false. | Yes |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

  
Example

```
//Defining the switch properties.
			"Switch": {
			"title": "switchName",
			"color": "5236ce",
			"state": "no",
			            "enabled": "yes"
			}

			// You can configure the switch using the string.
		"Switch": "SwitchName"
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Timer
-----

This widget (an instance of WKInterfaceTimer class) acts as a countdown timer. There is no delegate for the timer. To know when the timer reaches zero, you need to run a separate timer next to the timer. A timer can be stopped or started, and the countdown is automatically calculated from the date. The counting starts when the timer reaches zero.

The following are the properties of the Timer Widget:

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| action | A string containing “start” or “stop”. | Yes |
| alpha | The opacity of the object. A value of 1.0 represents fully opaque and a value of 0.0 represents fully transparent. | Yes |
| date | A string containing the date and time in the format “mm/dd/yyyy hh:mm ap” where mm is the month, dd is the day, yyyy is the year, hh is the hour, mm is the minutes, and ap is am or pm. | Yes |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially. | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| installed | Indicates whether the item is rendered for the current device | No |
| textColor | A hexadecimal value contained in a number or a string that specifies the color of the switch. | Yes |
| visible | A Boolean value that specifies the visibility of the separator.  Accepts a Boolean value in case-sensitive string, nonstring, or numeric formats. As a string, your app can set this property to "true" or "false". Alternatively, it can use the values true and false. If you choose a numeric format, specify 0 for true and 1 for false. | Yes |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

  

Example

```
//Defining the timer properties.
        "time": {
            "date": "12/30/2015 10:30 am", //mm/dd/yyyy hh:mm a
            "textColor": "#123456",
            "action": "start"
        }
```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.

Table
-----

This widget (an instance of WKInterfaceTable class) represents a single-column table. The table represents a dictionary containing a controller for row and data dictionary for each widget. Each row in a table is a class that is a subclass of the NSObject and contains outlets. To initialize a group of rows simultaneously, use the key "rows". To insert rows at a given position or delete a specific row with the specified indices, use the key "rowActions."

The followingare the updatable properties of the Table Widget:

  
| Attribute | Description | Modifiable at Runtime |
| --- | --- | --- |
| height | The height of the object. Specify a fixed height or set the value of the object to be a percentage of its container’s height. | Yes |
| hidden | Indicates whether the item is hidden initially | Yes |
| horizontal | The horizontal alignment of the item. Use this attribute to configure the horizontal position of the item relative to its immediate parent. | No |
| installed | Indicates whether the item is rendered for the current device. | No |
| rows | The number of row controllers supported by the table. Change the value to add or remove new row controller objects to the storyboard file. | Yes |
| vertical | The vertical alignment of the item. Use this attribute to configure the vertical position of the item relative to its immediate parent. | No |
| width | The width of the object. Specify a fixed width or set the value of the object to be a percentage of its container’s width. | Yes |

  

> **_Note:_** The index value ranges from zero to the number of rows in a table.

  
Example

```
//Inserting two rows in a table."table": {
    "data": {
        "controller": "RowController",
        "rows": [{
                "button": "buttonName",
                "label": "labelName"
            }, //row
            {
                "button": "buttonName2",
                "label": "labelName2"
            }, //row
        ]
    }
}
```
```
//Insert and remove two rows in a table."table": {
  "data": {
    "controller": "RowController",
      "rowActions": {
        "insert": \[{
          "index": 0,
          "data": {
            "button": "buttonName3",
            "label": "labelName3"
          }
        }\],
          "remove": \[1\]
      }
  }


```

> **_Note:_** The order of the keys is not mandatory. You can use only the required key-value pairs.
