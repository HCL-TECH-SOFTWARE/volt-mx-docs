     

Device Categorization for Server-Side Mobile Web
================================================

 

VoltMX Studio categorizes devices into different categories based on supported browser features:

| Device Category | Browser Feature | Sample Devices |
| --- | --- | --- |
| Basic devices | 
1.  XHTML-MP 1.0 compliant
2.  No JS support
3.  CSS 1.0 or 2.0

 | 

1.  BlackBerry devices with OS < 4.6 (Pearl)
2.  Windows Mobile 6.0 and 6.5
3.  Nokia non-Webkit browser devices

 |
| Basic devices with JavaScript (BJS) | 

1.  XHTML-MP 1.0 compliant
2.  Limited JS support
3.  CSS 1.0 or 2.0

 | 

1.  BlackBerry devices with OS >= 4.6 (Strom, Bold, Curve )
2.  Windows Mobile 7
3.  Nokia devices with Webkit 413

 |
| Advanced Devices ](Devices supporting advanced JS &.md but not HTML5) | 

1.  XHTML – MP 1.0 Compliant
2.  Full JS Support
3.  CSS Support > 2.0

 | 

1.  Palm Web OS
2.  Nokia devices with Webkit 525 and above

 |
| HTML5 devices ](devices supporting.md5 Spec) | 

1.  HTML5 compliant
2.  Full JS support
3.  CSS support 3.0
4.  Support for Touch

 | 

1.  iPhone OS
2.  Android
3.  BlackBerry 6.0 and above (only Touch devices)

 |
| HTML5 Non Touch](NTH) (devices supporting.md5 spec but non-touch) | 

1.  HTML5 compliant
2.  Full JS support
3.  CSS support 3.0
4.  Support for Touch

 | 

1.  Blackberry 7.0 (non-touch devices)
2.  Windows Mango 7.5

 |

The (traditional) server side Mobile Web platform does not support the tablet form factors (iPad, Android Tab, and Playbook).

Only WebKit-based browsers are supported for the server-side mobile web and SPA HTML5 category. Because Firefox and Opera are not WebKit-based, they are not supported by SPA but are supported by Desktop Web.

Disclaimers:

1.  VoltMX Studio categorizes devices as Basic, BJS, Advanced, HTML5, and NTH based on the combination of markup support, JavaScript, and CSS spec support on the device browsers.
2.  VoltMX Studio generates standard compliant markup. Based on the browser implementations, the ouput may render differently on different browsers.
3.  Support for JavaScript on devices is directly dependent on the JavaScript engines embedded with the browsers.
4.  VoltMX Studio supports CSS2 and CSS3. Depending on the browser implementations, the rendering of the CSS may differ from browser to browser within the same family.
5.  VoltMX Studio uses the standards compliant GeoLocation API. Support for GPS depends on the GeoLocation API implemented by the browsers.
6.  VoltMX Studio is dependent on Google Maps to provide static and interactive maps. Apps using Google Maps should refer to the licensing requirements of Google.
