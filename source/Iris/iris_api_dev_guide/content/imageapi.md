                            

You are here: Image API

Image API
=========

The Image API provides your app with image processing tools. By using the Image API, you can scale them, compress them, apply filters to them, and so forth. Your app can use Image objects on Image and Button widgets.

The Image API enables you to create Image objects that store bitmap data from GIF, animated GIF, JPEG, and PNG files. Image objects can then be applied to widgets and used for button background, form backgrounds, and more.

Your app can also create Filter objects that are used to apply visual filters, such as brightening an image or giving an embossed look to bitmap images that your app uses. The following example demonstrates how an app might apply a filter to an image and apply the image to a form.

```
var filter = voltmx.filter.createFilter();
var img = voltmx.image.createImage("catpng.png");

filterData = {
    "filterName": voltmx.filter.HUE_ADJUST,
    "inputImage": img,
    "inputAngle": angle
};
filter.applyFilter(filterData);

var imageObj = filter.getOutputImage();
frm.image2.rawBytes = imageObj.getImageAsRawBytes();
```

As of version 9.2 of Volt MX Iris, the Image API supports SVG vector images. Vector images enable your app to zoom in on images without losing image quality. They also enable your app to use the same image files across multiple devices without a degradation of the image's appearance.

To supply a SVG file to your app, you must first embed it inside a PDF. You can then include the PDF in your app's bundle.

It is important to note that iOS does not provide native SVG support. iOS requires that you supply PNG bitmaps with multiple resolutions of all of your icons. If you use an SVG file for an icon, the system generates different PNG bitmaps at the required resolutions automatically.

All other hardware platforms support SVG files natively, so bitmaps are not generated for icon files on those platforms.

The Image API provides you with the following namespaces and API elements:

*   [image Object](image_methods.md)

| Method | Description |
| --- | --- |
| [compress](image_methods.md#compress) | Compresses an image by the specified compression ratio. |
| [cropToRect](image_methods.md#Crp2Rect) | Crops the bitmap contained by the Image object to the size of the input rectangle. |
| [findImageInGallery](image_methods.md#findImageInGallery) | Searches for and retrieves and image in the device's gallery of pictures. |
| [getImageAsRawBytes](image_methods.md#ImgRaw) | Retrieves the image height as an integer. |
| [getImageHeight](image_methods.md#ImgHeight) | Retrieves the image height as an integer. |
| [getImageWidth](image_methods.md#ImgWidth) | Retrieves the image width as an integer. |
| [releaseImage](image_methods.md#releaseImage) | Removes the internal image from the image object. |
| [rotate](image_methods.md#rotate) | Rotates an imageObject either in a clockwise or counter-clockwise manner, depending on the specified rotation degree. |
| [scale](image_methods.md#scale) | Scales the bitmap in the current Image object to a larger or smaller size. |
| [writeToMediaGallery](image_methods.md#writeToMediaGallery) | Writes an image to device's media gallery. |

 

*   [filter Object](voltmxfilterfilterobjmethods.md)

| Method | Description |
| --- | --- |
| [applyFilter](voltmxfilterfilterobjmethods.md#applyFil) | Applies a filter to an Image object. |
| [clearFilterData](voltmxfilterfilterobjmethods.md#clearFtr) | Clears all of the data stored in a filter. |
| [getOutputImage](voltmxfilterfilterobjmethods.md#getImg) | Gets the image that results from applying the filter. |

 

*   [](voltmxfilternamespace.md)[voltmx.filter Namespace](voltmxfilterconstants.md)[](voltmxfilterfunctions.md#crtFiltr)

| Function | Description |
| --- | --- |
| [voltmx.filter.createFilter](voltmxfilterconstants.md#crtFiltr) | Creates a new filter object for use with the Image widget. |

 

*   [voltmx.image Namespace](voltmximagenamespacefunctions.md)

| Function | Description |
| --- | --- |
| [voltmx.image.createImage](voltmximagenamespacefunctions.md#crtImg) | Creates an Image. This function has three overloads. |
| [voltmx.image.createImageFromSnapShot](voltmximagenamespacefunctions.md#imgSnap) | Creates an Image by taking a snapshot of a widget. |
| [voltmx.image.cropImageInTiles](voltmximagenamespacefunctions.md#CrpTiles) | Crops the bitmap in an Image object and returns it as an array of tiles. |
| [voltmx.image.cropImageInTilesForRects](voltmximagenamespacefunctions.md#CrpTRect) | Crops portions of an Image widget's bitmap to a set of rectangles and returns an array of Image widgets containg the cropped bitmaps. |

 

To generate an image from raw bytes, bundled files, or image widget; use the [voltmx.image.createImage](voltmximagenamespacefunctions.md#crtImg) function. After you create an image, you can crop the image using the [voltmx.image.cropImageInTiles](voltmximagenamespacefunctions.md#CrpTiles) and the [voltmx.image.cropImageInTilesForRects](voltmximagenamespacefunctions.md#CrpTRect) functions.

To apply visual filters such as brightening an image or giving it an embossed look, create a filter object by using the [voltmx.filter.createFilter](voltmxfilterconstants.md#crtFiltr) function. You can then apply a filter to an image object by using the [applyFilter](voltmxfilterfilterobjmethods.md#applyFil) method. To view the filtered image, use the [getOutputImage](voltmxfilterfilterobjmethods.md#getImg) method. If you want to remove the filter, use the [clearFilterData](voltmxfilterfilterobjmethods.md#clearFtr) method.

To view the functionality of the Image API in action, download the sample application from the link below. Once the application is downloaded, build and preview the application using the Volt MX App.  

[![](resources/images/download_button_08__002__236x35.png)](https://github.com/HCL-TECH-SOFTWARE/volt-mx-samples/tree/main/ImageFilter)

![](resources/prettify/onload.png)
