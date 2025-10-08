                            

com.voltmx.AddPassesViewController
================================

The AddPassesViewController object provides a view to add passes to the user’s library of passes.

The com.voltmx.AddPassesViewController class has the following methods:

*   [dismissAnimated](com.voltmx_objects_addpassesviewcontroller_methods.md#getAccur)
*   [getLocalizedDescription](com.voltmx_objects_addpassesviewcontroller_methods.md#getMajor)
*   [getLocalizedName](com.voltmx_objects_addpassesviewcontroller_methods.md#getLocal)
*   [getLocalizedValueForKeyForDeviceLocale](com.voltmx_objects_addpassesviewcontroller_methods.md#getMinor)
*   [getOrganizationName](com.voltmx_objects_addpassesviewcontroller_methods.md#getProxi)
*   [getPassTypeIdentifier](com.voltmx_objects_addpassesviewcontroller_methods.md#getProxi2)
*   [getPassURL](com.voltmx_objects_addpassesviewcontroller_methods.md#getPassURL)
*   [getSerialNumber](com.voltmx_objects_addpassesviewcontroller_methods.md#replaceP)
*   [getUserInfo](com.voltmx_objects_addpassesviewcontroller_methods.md#getUserI)

Here is an example for creating a AddPassesViewController with callbacks:

var AddPassesViewController1 = new com.voltmx.AddPassesViewController(an, statusCallback);

Input Parameters

*   _an_ \[Array\] - Optional
    
    > **_Note:_** Respects only first pass in the array if the iOS is below 7.0.
    
*   _statusCallback_ \[Function\] - Optional
    
    callback to get the status of adding passes view controller.
    
    *   _status_ \[String\] - status of the AddPassesViewController.

### Return Values

Object - com.voltmx.AddPassesViewController

