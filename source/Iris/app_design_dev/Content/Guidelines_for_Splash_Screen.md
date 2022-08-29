                           

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.md) > [UI Guidelines](UI_Guidelines.md) > [Guidelines for Splash Screen](#guidelines-for-splash-screen) > Guidelines for configuring splash screen for iOS applications

### Guidelines for Splash Screen

When the system launches an app, it temporarily displays a static launch image on the screen. Your app should provide this image, with the image contents usually containing a pre-rendered version of your app’s default user interface.

*   The purpose of splash screen is to give the user immediate indication that the app is being launched. It also gives your application, time to initialize itself and prepare its initial set of views for display. When your app is ready to run, the system removes the image and displays your application’s home screen.
*   Splash screen should occupy the complete device screen. No Black or white Borders should be present at the top/bottom/sides of the splash screen.
*   No Header Box should be present at the Splash Screen unless specified otherwise.
*   Should be docked (Splash Screen should not move when application is in loading state).
*   Should be consistent with the requirements in terms of Application Name Logo, Version Number and a Trade Mark Symbol.
*   A video can be configured as a splash screen, which will be played while the application is getting initialized.

### Guidelines for Configuring Splash Screen for iOS Applications

  
| Image | Device | Resolution | Image Name |
| --- | --- | --- | --- |
| Splash Screen image (required) | iPhone 3 (Portrait) | 320 x 480 pixels | Default\_Portrait\_iPhone.png |
|^^| iPhone 3 (Landscape) | 480 x 320 pixels | Default\_Portrait\_iPhone@2x.png |
| Splash Screen image (required) | iPhone 4 (Portrait) | 640 x 960 pixels (@2x) | Default.png |
|^^| iPhone 4 (Landscape) | 960 x 640 pixels (@2x) | Default@2x.png |
| Splash Screen image (required) | iPhone 5 (Portrait) | 640 x 1136 pixels (@2x) | Default\_568h@2x.png |
|^^| iPhone 5 (Landscape) | 1136 x 640 pixels (@2x) | Default\_568h.png |
| Splash Screen image (required) | iPhone6(Portrait) | 750 x 1334 pixels (@2x) | Default\_667h@2x.png |
|^^| iPhone6(Landscape) | 1334 x 750 pixels (@2x) | Default-Portrait\_736h@3x.png |
| Splash Screen image (required) | iPhone 6 plus (Portrait) | 1242 x 2208 pixels (@3x) | Default\_667h.png |
|^^| iPhone 6 plus (Landscape) | 2208 x 1242 pixels (@3x) | Default\_Landscape\_736h@3x.png |
| Splash Screen image (required) | iPad (portrait) | 768 x 1004 pixels | Default\_Portrait.png |
|^^|^^| 1536 x 2008 pixels (@2x) | Default\_Portrait@2x.png |
| Splash Screen image (required) | 9.7 inch iPad Pro, iPod Air 4, iPod Mini 2 | 1536 x 2048 |   |
|   |   | 2048 x 1536 |   |
| Splash Screen image (required) | iPad (Landscape) | 1024 x 748 pixels | Default\_Landscape.png |
|^^|^^| 2048 x 1496 pixels (@2x) | Default\_Landscape@2x.png |

**For more information see**: [http://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/IconsImages/IconsImages.html#//apple\_ref/doc/uid/TP40006556-CH14-SW1.](http://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/IconsImages/IconsImages.html)

### Guidelines for Configuring Splash Screen for Android Applications

*   Use a background color around the image so the image appears stretched. (for example, if the image is white near the edges, use a white background). It looks better if there is not an obvious border around the image and it fades into a background.
*   Always include portrait and landscape versions of the images.

  
| Display | Orientation | Resolution | Image Name |
| --- | --- | --- | --- |
| LDPI (low) ~120dpi | Portrait | 200 x 320 pixels | ldpi\_portrait.png |
|^^| Landscape | 320 x 200 pixels | ldpi\_landscape.png |
| MDPI (medium) ~160dpi | Portrait | 320 x 480 pixels | mdpi\_portrait.png |
|^^| Landscape | 480 x 320 pixels | mdpi\_landscape.png |
| HDPI (high) ~240dpi | Portrait | 480 x 720 pixels | hdpi\_portrait.png |
|^^| Landscape | 720 x 480 pixels | hdpi\_landscape.png |
| XHDPI (extra-high) ~320dpi | Portrait | 640 x 960 pixels | xhdpi\_portrait.png |
|^^| Landscape | 960 x 640 pixels | xhdpi\_landscape.png |
| XXHDPI (extra-extra-high) ~480dpi | Portrait | 960 x 1440 pixels | xxhdpi\_portrait.png |
|^^| Landscape | 1440 x 960 pixels | xxhdpi\_landscape.png |
| XXXHDPI (extra-extra-extra-high) ~640dpi | Portrait | 1280 x 1920 pixels | xxxhdpi\_portrait.png |
|^^| Landscape | 1920 x 1280 pixels | xxxhdpi\_landscape.png |

**For more information see**: [http://developer.android.com/guide/practices/screens\_support.html](http://developer.android.com/guide/practices/screens_support.html)


### Guidelines for Configuring Splash Screen for Windows Applications

For splash screen, image resolutions are provided in the following table. In Volt MX Iris, splash screen images must be placed in `resources` folder .

*   There is no support for Windows splash screen in landscape mode.

  
| Image format | Resolution | Image Name |
| --- | --- | --- |
| WVGA | 480 × 800 | SplashScreenImage.screen\_WVGA.png |
| WXGA | 768 × 1280 | SplashScreenImage.screen\_WXGA.png |
| 720p  | 720 x 1280 | SplashScreenImage.screen\_720p.png |

**For more information see**:  
[https://msdn.microsoft.com/en-us/library/windows/apps/ff769511(v=vs.105).aspx](https://msdn.microsoft.com/en-us/library/windows/apps/ff769511(v=vs.105).aspx)
