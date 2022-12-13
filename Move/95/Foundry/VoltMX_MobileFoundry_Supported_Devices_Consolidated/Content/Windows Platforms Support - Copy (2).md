  

### Windows Phone 7.5

This is a mobile platform, and the forms are created under the **mobile** section in [VoltMX Studio](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/Default.html#../Subsystems/Studio_User_Guide/content/adding_forms_to_a_new_application.md#Adding?TocPath=VoltMX Studio|Studio User Guide|Working with Applications|Adding Forms to an Application|_____1). This platform is also known as “Mango”. Mango is the Microsoft internal codename for this project.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 193px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 426px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1">Windows Phone 7.5 SDK, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Silverlight for Windows Phone</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua and Jurassic for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAP</td></tr><tr class="TableStyle-maintree-Body-Body2" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2">winmobile_custom_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WIN-GA-</b>&lt;release number&gt; (for example: WIN-GA-5.5.4 and WIN-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Phone Marketplace and MDM solution</td></tr></tbody></table>

Windows Phone 7.5 does not support Sync and SkySync.

#### Compatibility Matrix

  
| VoltMX Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | Yes | No |
| 5.0 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |

  
The following are the development and runtime environment compatibility matrixes for the above releases:

   
| Emulator / Device | App created with VoltMX Studio running on Windows 7 OS | App created with VoltMX Studio running on Windows 8 OS | App created with VoltMX Studio running on Windows 8.1 OS |
| --- | --- | --- | --- |
| Application deployment on any Windows Phone 7.5 emulator running on Windows 7 OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 7.5 emulator running on Windows 8 OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 7.5 emulator running on Windows 8.1 OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 8 emulator running on any Windows OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 8.1 emulator running on any Windows OS | No | No | No |
| Windows Phone 7.5 Device | Yes | Yes | Yes |
| Windows Phone 8 Device\* | Yes | Yes | Yes |
| Windows Phone 8.1 Device | No | No | No |

**Yes**: Application successfully deploys and works;  **No**: Application will not be deployed; \*: Microsoft ensures to run all Windows Phone 7.5 apps on Windows Phone 8.

### Windows Phone 8

This is a mobile platform, and the forms are created under the **mobile** section in [VoltMX Studio](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/Default.html#../Subsystems/Studio_User_Guide/content/adding_forms_to_a_new_application.md#Adding?TocPath=VoltMX Studio|Studio User Guide|Working with Applications|Adding Forms to an Application|_____1).

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_3"><span class="span_4">Software</span><span class="span_4"> used by platform</span></p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3">Windows Phone 8 SDK, Visual Studio 2012 and Blend</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_3"><span class="span_4">Platform </span><span class="span_4">Development Language</span></p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">C# and XAML</p></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_4">Runtime</p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3">Silverlight for Windows Phone</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_4">VM engines</p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">Lua VM for Lua; <span class="span_4">Web Browser control as JavaScript interpreter</span> for JavaScript</p></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_4">Output binary type</p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3">XAP</p></td></tr><tr class="TableStyle-maintree-Body-Body2" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_4">Engineering plug-in name</p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">Windowsphone8_plugin</p></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_4">Marketing plug-in name</p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3"><b>WP8-GA-</b>&lt;release number&gt; (Ex: WP8-GA-5.0.20 and WP8-GA-5.6.2)</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_4">Deployment modes</p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">Windows Phone Marketplace or MDM solution</p></td></tr></tbody></table>

#### Sync Support

 
| IDE plug-in | Windows Phone 8 plug-in |
| --- | --- |
| IDE 5.0 | WP8-GA-5.0.11 |
| IDE 5.5 | WP8-GA-5.5.0 |
| IDE 5.6 | WP8-GA-5.6.0 |

#### SkySync Support

 
| IDE plug-in | Windows Phone 8 plug-in |
| --- | --- |
| IDE 5.0 | WP8-GA-5.0.18 |
| IDE 5.5 | WP8-GA-5.5.3 |
| IDE 5.6 | WP8-GA-5.6.0 |

#### Compatibility Matrix

  
| VoltMX Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0.3 or less | No | No |
| 5.0.4 or later | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |

  
The following are the development and runtime environment compatibility matrixes for the above supported releases:

   
| Emulator/Device | App created with VoltMX Studio running on Windows 7 OS | App created with VoltMX Studio running on Windows 8 OS | App created with VoltMX Studio running on Windows 8.1 OS |
| --- | --- | --- | --- |
| Application deployment on any Windows Phone 8 emulator running on Windows 7 OS | N/A | N/A | N/A |
| Application deployment on any Windows Phone 8 emulator running on Windows 8 OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 8 emulator running on Windows 8.1 OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 7.5 emulator running on any Windows OS | N/A | N/A | N/A |
| Application deployment on any Windows Phone 8.1 emulator running on any Windows OS\* | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* |
| Windows Phone 7.5 Device | N/A | N/A | N/A |
| Windows Phone 8 Device | Yes | Yes | Yes |
| Windows Phone 8.1 Device | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* |

Yes: Application successfully deploys and works;  N/A: Emulator (with SDK) will not install and is not applicable;  Yes/No\*: Microsoft states that all Windows Phone 8 apps work seamlessly on Windows Phone 8.1. For a programming language such as JavaScript, because of known issue, VoltMX apps built for Windows Phone 8 will not work on Windows Phone 8.1. The apps will work fine on Windows Phone 8.1 built by choosing Dev language as LUA;  **No**: Application will not be deployed.

### Windows Phone 8.1 Silverlight

This is a mobile platform and the forms are created under the **mobile** section in [VoltMX Studio](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/Default.html#../Subsystems/Studio_User_Guide/content/adding_forms_to_a_new_application.md#Adding?TocPath=VoltMX Studio|Studio User Guide|Working with Applications|Adding Forms to an Application|_____1).

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 231px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 393px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows Phone 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Silverlight for Windows Phone</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; JSCore for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAP</td></tr><tr class="TableStyle-maintree-Body-Body2" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windowsphone8_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WP8-GA-</b>&lt;release number&gt; (Ex: WP8-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Phone Marketplace or MDM solution</td></tr></tbody></table>

#### Sync Support

 
| IDE plug-in | Windows Phone 8.1 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WP8-GA-5.6.2 |

#### SkySync Support

 
| IDE plug-in | Windows Phone 8.1 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WP8-GA-5.6.2 |

#### Compatibility Matrix

  
| VoltMX Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes | Yes |

  
The following are the development and runtime environment compatibility matrixes for the above supported releases.

   
| Emulator/Device | App created with VoltMX Studio running on Windows 7 OS | App created with VoltMX Studio running on Windows 8 OS | App created with VoltMX Studio running on Windows 8.1 OS |
| --- | --- | --- | --- |
| Application deployment on any Windows Phone 8.1 emulator on Windows 7 OS | N/A | N/A | N/A |
| Application deployment on any Windows Phone 8.1 emulator on Windows 8 OS | N/A | N/A | N/A |
| Application deployment on any Windows Phone 8.1 emulator on Windows 8.1 OS | Yes | Yes | Yes |
| Application deployment on any Windows Phone 7.5 emulator running on any Windows OS | N/A | N/A | N/A |
| Application deployment on any Windows Phone 8 emulator running on any Windows OS\* | N/A | N/A | N/A |
| Windows Phone 7.5 Device | No | No | No |
| Windows Phone 8 Device | No | No | No |
| Windows Phone 8.1 Device\* | Yes | Yes | Yes |

Yes: Application successfully deploys and works;  N/A: Emulator (with SDK) will not install and is not applicable;  No: Application cannot be deployed.

### Windows Desktop/Kiosk – WPF applications

The apps built for this platform works on Windows 7 and Windows 8/8.1. Forms are created under the **desktop** section in [VoltMX Studio](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/Default.html#../Subsystems/Studio_User_Guide/content/adding_forms_to_a_new_application.md#Adding3?TocPath=VoltMX Studio|Studio User Guide|Working with Applications|Adding Forms to an Application|_____3).

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>.net Framework 4.0, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>WPF</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><a href="#WD2" class="Hyperlink">See below</a></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>EXE (in Debug mode) and MSI (in Release mode)</td></tr><tr class="TableStyle-maintree-Body-Body2" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windowsdesktop_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>KIOSK-GA-</b>&lt;release number&gt; (Ex: KIOSK-GA-5.0.31 and KIOSK-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>MSI package distribution and installation</td></tr></tbody></table>

#### VM Engines

  
| Release | JavaScript Engine | Lua Engine |
| --- | --- | --- |
| All 5.0 and 5.5 releases | Jurassic ([https://jurassic.codeplex.com/](https://jurassic.codeplex.com/) ) | Lua VM |
| 5.6 and 5.6.1 | Web Browser control as JavaScript interpreter | Lua VM |
| 5.6.2 | V8.Net ([https://v8dotnet.codeplex.com/](https://v8dotnet.codeplex.com/) ) | Lua VM |

#### Sync Support

 
| IDE plug-in | Windows desktop/kiosk plug-in |
| --- | --- |
| IDE 5.0 | KIOSK-GA-5.0.25 |
| IDE 5.5 | KIOSK-GA-5.5.0 |
| IDE 5.6 | KIOSK-GA-5.6.0 |

#### SkySync Support

 
| IDE plug-in | Windows desktop/kiosk plug-in |
| --- | --- |
| IDE 5.0 | KIOSK-GA-5.0.29 |
| IDE 5.5 | KIOSK-GA-5.5.3.1 |
| IDE 5.6 | KIOSK-GA-5.6.0 |

#### Compatibility Matrix

  
| VoltMX Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.0.24 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |

  
The following are the development and runtime environment compatibility matrixes for the above supported releases:

   
| VoltMX Studio running on | Any Desktop/Laptop/Kiosk running with OS |
| --- | --- |
| Windows 7 | Windows 8 | Windows 8.1 |
| --- | --- | --- |
| Windows 7 OS | Yes | Yes | Yes |
| Windows 8 OS | Yes | Yes | Yes |
| Windows 8.1 OS | Yes | Yes | Yes |

**Yes**: Application successfully deploys and works;   **No**: Application will not be deployed.

### Windows 8

These are Windows Store apps. Forms are created under the **tablet** section in [VoltMX Studio](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/Default.html#../Subsystems/Studio_User_Guide/content/adding_forms_to_a_new_application.md#Adding2?TocPath=VoltMX Studio|Studio User Guide|Working with Applications|Adding Forms to an Application|_____2).

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 8 SDK, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">Web Browser control as java script interpreter</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windows8_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WIN8-GA-</b>&lt;release number&gt; (Ex: WIN8-GA-5.0.20 and WIN8-GA-5.6.1)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM solution</td></tr></tbody></table>

#### Sync Support

 
| IDE plug-in | Windows 8 plug-in |
| --- | --- |
| IDE 5.0 | WIN8-GA-5.0.11 |
| IDE 5.5 | WIN8-GA-5.5.0 |
| IDE 5.6 | WIN8-GA-5.6.0 |

#### SkySync Support

 
| IDE plug-in | Windows 8 plug-in |
| --- | --- |
| IDE 5.0 | WIN8-GA-5.0.18 |
| IDE 5.5 | WIN8-GA-5.5.3.1 |
| IDE 5.6 | WIN8-GA-5.6.0 |

#### Compatibility Matrix

  
| VoltMX Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.0.2 or later | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | No | No |

#### Interim plug-in to support Windows 8.1

*   According to Microsoft, applications built for Windows 8 work fine on Windows 8.1 Update. However, there are certain controls like Map that will have issues at runtime because of Microsoft known issues. To solve this, app developers need to build for the Windows 8.1 update. VoltMX supports Windows 8.1 in WIN8-GA-5.5.5.3. This plug-in works only with IDE 5.5 plug-in.
*   If WIN8-GA-5.5.5.3 plug-in is used with VoltMX Studio on Windows 8 OS, the output binaries will be generated only for Windows 8.
    
*   If WIN8-GA-5.5.5.3 plug-in is used with VoltMX Studio on Windows 8.1 Update OS, the output binaries will be generated for both Windows 8 and Windows 8.1 Update (This binary will solve the above mentioned control related issues).

The following are the development and runtime environment compatibility matrixes for the above supported releases:

    
| VoltMX Studio on | Build option in VoltMX Studio build screen | Deploy application on | Install from VoltMX Studio | Install manually from zip file in output folder |
| --- | --- | --- | --- | --- |
| Windows 8.1 (32-bit) (Only with Windows plug-in WIN8-GA-5.5.5.3) | x86 | Windows 8 (32-bit) | Yes | Yes |
| x86 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| ARM | Windows 8 ARM  (MS Surface) | N/A | Yes |
| x86 | Windows 8.1 (32-bit) | Yes (Windows 8 APPX will be installed) | Yes (either of the Windows 8.0 or Windows 8.1 APPX  can be deployed) |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| Windows 8.1 (64-bit) (Only with Windows plug-in WIN8-GA-5.5.5.3) | x86 | Windows 8 (32-bit) | N/A | Yes |
| x86 | Windows 8 (64-bit)/ (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| ARM | Windows 8 ARM  (MS Surface) | N/A | Yes |
| x86 | Windows 8.1 (32-bit) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | Yes (Windows 8 APPX will be installed) | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | Yes (Windows 8 APPX will be installed) | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 APPX can be deployed) |
| Windows 8 (32-bit) | x86 | Windows 8 (32-bit) | Yes | Yes |
| x86 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| ARM | Windows 8 ARM  (MS Surface) | N/A | Yes |
| x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.2) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (64-bit) | x86 | Windows 8 (32-bit) | N/A | Yes |
| x86 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | Yes | Yes |
| ARM | Windows 8 ARM  (MS Surface) | N/A | Yes |
| x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (x64) on Mac (Parallel combo) | x86 | Windows 8 (32-bit) | N/A | Yes |
| x86 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8 (64-bit)/ (Mac-Parallels-Windows8) | Yes | Yes |
| ARM | Windows 8 ARM  (MS Surface) | N/A | Yes |
| x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 7 (x86/x64) | x86 | Windows 8 (32-bit) | N/A | Yes |
| x86 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Yes |
| x64 | Windows 8 (64-bit) / (Mac-Parallels-Windows8) | N/A | Will not work |
| ARM | Windows 8 ARM  (MS Surface) | N/A | Yes |
| x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |

### Windows 8.1 Update

These are Windows Store apps. Forms are created under the **tablet** section in [VoltMX Studio](http://opensource.voltmxtechsw.com/volt-mx-docs/voltmxlibrary/Default.html#../Subsystems/Studio_User_Guide/content/adding_forms_to_a_new_application.md#Adding2?TocPath=VoltMX Studio|Studio User Guide|Working with Applications|Adding Forms to an Application|_____2).

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 194px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 418px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">JSCore</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2" madcap:conditions="Default.Not Ready for Publish"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windows8_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WIN8-GA-</b>&lt;release number&gt; (Ex: WIN8-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM solution</td></tr></tbody></table>

#### Sync Support

 
| IDE plug-in | Windows 8.1 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WIN8-GA-5.6.2 |

#### SkySync Support

 
| IDE plug-in | Windows 8.1 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WIN8-GA-5.6.2 |

#### Compatibility Matrix

  
| VoltMX Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes | Yes |

Windows 8.1 update platform support is added in 5.6.2. APPX package file generated for Windows 8.1 update will not be deployed on Windows 7 or Windows 8. The APPX file can only be deployed on Windows 8.1 Update.

The following are the development and runtime environment compatibility matrixes for release 5.6.2.

    
| VoltMX Studio on | Build option | Deploy application on | Install from Studio | Install manually from output folder |
| --- | --- | --- | --- | --- |
| Windows 8.1 (x86) | x86 | Windows 8.1 (32-bit) | Yes | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8.1 (x64) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | Yes | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | Yes | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8.1 (x64) on Mac (Parallel combo) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | Yes | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (x86) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (x64) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (x64) on Mac (Parallel combo) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 7 | x86 | Windows 8.1 (32-bit) | N/A | Yes |
| x86 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64-bit) / (Mac-Parallels-Windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |

### Windows 8.1 (Phone and Tablet) XMAL - Universal App

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');" madcap:conditions="Default.Not Ready for Publish"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 197px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 387px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">&nbsp;</span>Windows 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1" madcap:conditions="Default.Not Ready for Publish">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2" madcap:conditions="Default.Not Ready for Publish">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">JSCore</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1" madcap:conditions="Default.Not Ready for Publish">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1" madcap:conditions="Default.Not Ready for Publish"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2" madcap:conditions="Default.Not Ready for Publish">Engineering plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2" madcap:conditions="Default.Not Ready for Publish">windows81_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1" madcap:conditions="Default.Not Ready for Publish">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body1" madcap:conditions="Default.Not Ready for Publish">WIN81-GA-&lt;release number&gt; (Ex: WIN81-GA-6.0.20)?</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2" madcap:conditions="Default.Not Ready for Publish">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2" madcap:conditions="Default.Not Ready for Publish">Windows Phone Marketplace (only phone apps), Windows Store Marketplace (phone/tablet Store apps) and MDM solution</td></tr></tbody></table>

#### Compatibility Matrix

  
| VoltMX Version | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes? | Yes? |

  
None of the existing releases (5.6.2 or less) will support this new platform.

Windows 8.1 (Phone and Tablet) Universal app platform support will be added in 6.0.

Development and runtime environment scope is yet to be defined.
