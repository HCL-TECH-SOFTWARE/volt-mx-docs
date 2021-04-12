---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            


Filter Object
=============

The filter object enables your app to apply filters to the bitmaps contained in Image widgets. This section discusses the filter object for the following item:

Methods
-------

The filter object contains the following methods.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[applyFilter Method](javascript:void(0);) 

* * *

This method applies a filter to an Image object.

Syntax

filter.applyFilter(  
    dictionary)

Input Parameters

| Parameter | Description |
| --- | --- |
| dictionary | A dictionary of attributes that contains the name of the filter and the filter's supporting data. |

 

Example

{% highlight voltMx %}//By using the below function, you can add a cartoon filter over your image.
  createFilterForiOS: function(){
 
  var imgBright =  voltmx.image.createImage(this.imageBytes);
  var filterobj =  voltmx.filter.createFilter();
  var filterData = {
    "filterName": voltmx.filter.COMIC_EFFECT,
    "inputImage": imgBright,
  };
  filterobj.applyFilter(filterData);
  var imageObj = filterobj.getOutputImage();
  this.view.imgBrite.rawBytes = imageObj.getImageAsRawBytes();
  this.view.forceLayout();
  }
{% endhighlight %}

Return Values

None.

Remarks

For information about the available filters and their required supporting data, please see the [constants](voltmxfilterconstants.html) in the [voltmx.filter namespace](voltmxfilternamespace.html).

The following filters change the dimensions of the Image object.

*   GaussianBlur
*   BoxBlur
*   DiskBlur
*   MotionBlur
*   ZoomBlur
*   BumpDistortion
*   CircularWrap
*   AffineTransform

Platform Availability

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[clearFilterData Method](javascript:void(0);) 

* * *

Clears all of the data stored in a filter.

Syntax

filter.clearFilterData()

Example

{% highlight voltMx %}var filterObj = voltmx.filter.createFilter();
filterObj.clearFilterData();

{% endhighlight %}

Input Parameters

None.

Return Values

None.

Platform Availability

Available on all platforms.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[getOutputImage Method](javascript:void(0);)

* * *

Gets the image that results from applying the filter.

Syntax

filter.getOutputImage()

Example

{% highlight voltMx %} var imgBright =  voltmx.image.createImage(this.imageBytes);
  var filterobj =  voltmx.filter.createFilter();
  var filterData = {
    "filterName": voltmx.filter.COMIC_EFFECT,
    "inputImage": imgBright,
  };
  filterobj.applyFilter(filterData);
  var imageObj = filterobj.getOutputImage();//displays 
  
{% endhighlight %}

Input Parameters

None.

Return Values

The image that results from applying the filter.

Remarks

IF the output image is not yet available, this method throws an exception.

Platform Availability

Available on all platforms.

* * *

![](resources/prettify/onload.png)
