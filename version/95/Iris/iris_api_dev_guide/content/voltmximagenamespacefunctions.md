                            


voltmx.image Namespace
====================

The voltmx.image namespace provides the following API elements:

*   [Constants](#constants)
*   [Functions](#functions)

Constants
---------

The voltmx.image namespace provides the following constant:

 
<details close markdown="block"><summary>Image Format Constants</summary> 

* * *

The following constants are used to specify the format of an Image widget's bitmap.

| Constant | Description |
| --- | --- |
| voltmx.image.ENCODE\_JPEG | The bitmap is in JPEG format. |
| voltmx.image.ENCODE\_PNG | The bitmap is in PNG format. |

</details>

Functions
---------

The voltmx.image namespace provides the following functions:

 
<details close markdown="block"><summary>voltmx.image.createImage Function</summary> 

* * *

Creates an Image. This function has three overloads.

<b>Syntax</b>

```

voltmx.image.createImage(rawBytes);

voltmx.image.createImage(  
    bundledImageFileName);

voltmx.image.createImage(  
    Image);
```

<b>Input Parameters</b>

Any one of the following parameters can be passed in the function.

| Parameter | Description |
| --- | --- |
| rawBytes | A RawBytes object containing the image's bitmap. |
| bundledImageFileName | A string containing the file name of the bitmap to use for the image. |
| Image | An Image widget containing the bitmap to use for the Image being created. |

 

<b>Example</b>

```
var imgBright = voltmx.image.createImage(this.imageBytes);
```

<b>Return Values</b>

This function returns an image object with its associated bitmap.

<b>Remarks</b>

If your app creates an Image from a RawBytes object, it should not make copies of the Image by creating it again from the initial RawBytes object. Creating multiple Image objects from the same RawBytes object results in undefined behavior. Rather than copying the RawBytes object into multiple Image objects, your app can make further copies by calling this function and passing it the Image object created in the first call to this function.

If your app creates an image from a bundled file, the file specified by the _bundledImageFileName_ parameter can be in the GIF, an animated GIF, a JPEG, or PNG file format.

<b>Platform Availability</b>

Available on iOS and Android.

 </details>
<details close markdown="block"><summary>voltmx.image.createImageFromSnapShot Function</summary> 

* * *

Creates an Image by taking a snapshot of a widget.

<b>Syntax</b>

```

voltmx.image.createImageFromSnapShot(widget);
```

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| widget | The widget that this function takes a snapshot of. The snapshot is used for the bitmap of the Image created by the function. |

 

<b>Example</b>

```
var imgBlurBg = voltmx.image.createImageFromSnapShot(frmHome.widget1);
```

<b>Return Values</b>

This function returns an Image that contains a snapshot of the widget passed in through the _widget_ parameter.

<b>Remarks</b>

When the image source is snapshot, the source is device screen, which is having twice the density of actual image, so the scale factor of image will be twice the image size because of the retina display of device.

<b>Platform Availability</b>

Available on iOS and Android.

</details>
<details close markdown="block"><summary>cropImageInTiles Function</summary> 

* * *

Crops the bitmap in an Image object and returns it as an array of tiles.

<b>Syntax</b>

```

voltmx.image.cropImageInTiles(image,xTiles,yTiles);
```

<b>Input Parameters</b>

| Parameter | Description |
| --- | --- |
| image | The Image object containing the bitmap to be cropped. |
| xTiles | The number of equally-sized tiles that can be created in the x direction. |
| yTiles | The number of equally-sized tiles that can be created in the x direction. |

 

<b>Example</b>

```
var img = voltmx.image.createImage(rawB); // Here rawB is the rawBytes of the image 
var imageArray = voltmx.image.cropImageInTiles(img, 10, 20);

```

<b>Return Values</b>

This function returns an array of Image widgets that were created from tiles of the bitmap in the Image object in the _image_ parameter.

<b>Platform Availability</b>

Available on iOS and Android.

</details>
<details close markdown="block"><summary>cropImageInTilesForRects Function</summary> 

* * *

Crops portions of an Image widget's bitmap to a set of rectangles and returns an array of Image widgets containg the cropped bitmaps.

<b>Syntax</b>

```

voltmx.image.cropImageInTilesForRects(  
    image,  
    \[ \[x,y,w,h\],\[x1,y1,w1,h1\],... \]);
```

<b>Parameters</b>

| Parameter | Description |
| --- | --- |
| image | An Image widget containing the bitmap to be cropped. |
| \[ \[x,y,w,h\],\[x1,y1,w1,h1\],... \] | An array of rectangles specified as the (x,y) coordinates of the upper left corner and the height and width of the rectangle. Each rectangle in this array must be an array of four integers. |

 

<b>Example</b>

```
function getImageFromLocalStorage(imageName) {
    var img = voltmx.image.createImage(imageName);
    return img;
}

/*var clippingRects = [
        [10, 12, 50, 100],
        [30, 45, 10, 200],
        [300, 100, 200, 10];*/
function cropImageToTilesFromRects(clippingRects, localImage, FormToaddImage) {
    try {
        var img = getImageFromLocalStorage(localImage);
        var imageArray = voltmx.image.cropImageInTilesForRects(img, clippingRects);
        for (var j = 0; j < imageArray.length; j++) {
            var imgW = createImageWidget(imageArray[j]);
            FormToaddImage.add(imgW);
        }
        FormToaddImage.forceLayout();
    } catch (err) {
        alert(err);
    }
}
```

<b>Return Values</b>

This function returns an array of Image widgets that contain the bitmap information from the bitmap in the Image widget passed through the _image_ parameter.

<b>Remarks</b>

This method iterates through an array of rectangles and uses each rectangle to obtain a cropped version of the bitmap associated with the Image widget in the _image_ parameter. The original bitmap is not changed. It then creates an Image widget from each cropped bitmap and collects then into an array of Image widgets. It then returns the array of Image widgets.

<b>Platform Availability</b>

Available on iOS and Android.

</details>

![](resources/prettify/onload.png)
