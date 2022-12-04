  

VoltMX supports the following channels for Windows platform.

*   [Windows Phone 7.5](#windows-phone-7-5)
*   [Windows Phone 8](#windows-phone-8)
*   [Windows Phone 8.1 Silverlight](#windows-phone-8-1-silverlight)
*   [Windows Desktop/Kiosk - WPF Applications](#windows-desktop-kiosk-wpf-applications)
*   [Windows 8](#windows-8)
*   [Windows 8.1 Update](#windows-8-1-update)
*   [Windows 8.1 (Phone and Tablet) XMAL - Universal App](#windows-8-1-phone-and-tablet-xmal-universal-app)

### Windows Phone 7.5

This is a mobile platform and the Forms are created under “mobile” section in VoltMX Studio. This platform is also known as “Mango”. Mango is the Microsoft internal codename for this project.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 193px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 426px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1">Windows Phone 7.5 SDK, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Silverlight for Windows Phone</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM Engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua and Jurassic for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output Binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering <madcap:change madcap:changes="27">p</madcap:change><madcap:change madcap:changes="28">P</madcap:change>lugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body2">winmobile_custom_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WIN-GA-</b>&lt;release number&gt; (for example: WIN-GA-5.5.4 and WIN-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment Modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Phone Marketplace and MDM <madcap:change madcap:changes="16">s</madcap:change><madcap:change madcap:changes="17">S</madcap:change>olution</td></tr></tbody></table>

Sync Support and SkySync Support are Not Supported.

#### Compatibility Matrix

  
| VoltMX Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | Yes | No |
| 5.0 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |

Below is the development environment and runtime environment compatibility matrix for releases:

   
|   | App created with VoltMX Studio running on Windows 7 OS | App created with VoltMX Studio running on Windows 8 OS | App created with VoltMX Studio running on Windows 8.1 OS |
| --- | --- | --- | --- |
| Application deployment on any WP7.5 emulator running on Windows 7 OS | Yes | Yes | Yes |
| Application deployment on any WP7.5 emulator running on Windows 8 OS | Yes | Yes | Yes |
| Application deployment on any WP7.5 emulator running on Windows 8.1 OS | Yes | Yes | Yes |
| Application deployment on any WP8 emulator running on any Windows OS | Yes | Yes | Yes |
| Application deployment on any WP8.1 emulator running on any Windows OS | No | No | No |
| Windows Phone 7.5 Device | Yes | Yes | Yes |
| Windows Phone 8 Device\* | Yes | Yes | Yes |
| Windows Phone 8.1 Device | No | No | No |

**Yes**: Application successfully deploys and works;  **No**: Application will not be deployed; \*: Microsoft ensures to run all WP7.5 apps on WP8.

### Windows Phone 8

This is a mobile platform and the Forms are created under “mobile” section in VoltMX Studio.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_3"><span class="span_4">Software</span><span class="span_4"> used by platform</span></p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3">Windows Phone 8 SDK, Visual Studio 2012 and Blend</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_3"><span class="span_4">Platform </span><span class="span_4">Development Language</span></p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">C# and XAML</p></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_4">Runtime</p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3">Silverlight for Windows Phone</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_4">VM Engines</p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">Lua VM for Lua; <span class="span_4">Web Browser control as java script interpreter</span> for JavaScript</p></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_4">Output Binary type</p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3">XAP</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_4">Engineering <madcap:change madcap:changes="27">p</madcap:change><madcap:change madcap:changes="28">P</madcap:change>lugin name</p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">Windowsphone8_plugin</p></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><p class="p_4">Marketing plugin name</p></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><p class="p_3"><b>WP8-GA-</b>&lt;release number&gt; (Ex: WP8-GA-5.0.20 and WP8-GA-5.6.2)</p></td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><p class="p_4">Deployment Modes</p></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><p class="p_3">Windows Phone Marketplace or MDM <madcap:change madcap:changes="16">s</madcap:change><madcap:change madcap:changes="17">S</madcap:change>olution</p></td></tr></tbody></table>

#### Sync Support

 
| IDE plugin | Windows Phone 8 plugin |
| --- | --- |
| IDE 5.0 | WP8-GA-5.0.11 |
| IDE 5.5 | WP8-GA-5.5.0 |
| IDE 5.6 | WP8-GA-5.6.0 |

#### SkySync Support

 
| IDE plugin | Windows Phone 8 plugin |
| --- | --- |
| IDE 5.0 | WP8-GA-5.0.18 |
| IDE 5.5 | WP8-GA-5.5.3 |
| IDE 5.6 | WP8-GA-5.6.0 |

#### Compatibility Matrix

  
| VoltMX Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | No | No |
| <=5.0.3 | No | No |
| \>=5.0.4 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |

Below is the development environment and runtime environment compatibility matrix for above supported releases:

   
|   | App created with VoltMX Studio running on Windows 7 OS | App created with VoltMX Studio running on Windows 8 OS | App created with VoltMX Studio running on Windows 8.1 OS |
| --- | --- | --- | --- |
| Application deployment on any WP8 emulator running on Windows 7 OS | N/A | N/A | N/A |
| Application deployment on any WP8 emulator running on Windows 8 OS | Yes | Yes | Yes |
| Application deployment on any WP8 emulator running on Windows 8.1 OS | Yes | Yes | Yes |
| Application deployment on any WP7.5 emulator running on any Windows OS | N/A | N/A | N/A |
| Application deployment on any WP8.1 emulator running on any Windows OS\* | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* |
| Windows Phone 7.5 Device | N/A | N/A | N/A |
| Windows Phone 8 Device | Yes | Yes | Yes |
| Windows Phone 8.1 Device | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* | Yes for Lua/ No for JavaScript\* |

Yes: Application successfully deploys and works;  N/A: Emulator (with SDK) will not install hence not applicable;  Yes/No\*: Microsoft claims that all Windows Phone 8 apps seamlessly works fine on Windows Phone. 8.1. For Dev language as JavaScript, because of known issue, VoltMX apps built for WP8 will not work on WP8.1. Apps will work fine on WP8.1 built by choosing Dev language as LUA;  **No**: Application will not be deployed.

### Windows Phone 8.1 Silverlight

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 231px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 393px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows Phone 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Silverlight for Windows Phone</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM Engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; JSCore for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output Binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering <madcap:change madcap:changes="28">P</madcap:change><madcap:change madcap:changes="27">p</madcap:change>lugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windowsphone8_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WP8-GA-</b>&lt;release number&gt; (Ex: WP8-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment Modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Phone Marketplace or MDM <madcap:change madcap:changes="17">S</madcap:change><madcap:change madcap:changes="16">s</madcap:change>olution</td></tr></tbody></table>

#### Sync Support

 
| IDE plugin | Windows Phone 8.1 plugin |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WP8-GA-5.6.2 |

#### SkySync Support

 
| IDE plugin | Windows Phone 8.1 plugin |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WP8-GA-5.6.2 |

#### Compatibility Matrix

  
| VoltMX Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes | Yes |

Below is the development environment and runtime environment compatibility matrix for above supported releases.

   
|   | App created with VoltMX Studio running on Windows 7 OS | App created with VoltMX Studio running on Windows 8 OS | App created with VoltMX Studio running on Windows 8.1 OS |
| --- | --- | --- | --- |
| Application deployment on any WP8.1 emulator on Windows 7 OS | N/A | N/A | N/A |
| Application deployment on any WP8.1 emulator on Windows 8 OS | N/A | N/A | N/A |
| Application deployment on any WP8.1 emulator on Windows 8.1 OS | Yes | Yes | Yes |
| Application deployment on any WP7.5 emulator running on any Windows OS | N/A | N/A | N/A |
| Application deployment on any WP8 emulator running on any Windows OS\* | N/A | N/A | N/A |
| Windows Phone 7.5 Device | No | No | No |
| Windows Phone 8 Device | No | No | No |
| Windows Phone 8.1 Device\* | Yes | Yes | Yes |

Yes: Application successfully deploys and works;  N/A: Emulator (with SDK) will not install hence not applicable;  No: Application cannot be deployed.

### Windows Desktop/Kiosk – WPF applications

The apps built for this platform works on Windows 7 and Windows 8/8.1. Forms are created under “desktop” section in VoltMX Studio.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>.net Framework 4.0, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>WPF</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM Engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><a href="#WD2" class="Hyperlink">See below</a></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output Binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>EXE (in Debug mode) and MSI (in Release mode)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering <madcap:change madcap:changes="28">P</madcap:change><madcap:change madcap:changes="27">p</madcap:change>lugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windowsdesktop_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>KIOSK-GA-</b>&lt;release number&gt; (Ex: KIOSK-GA-5.0.31 and KIOSK-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment Modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>MSI package distribution and installation</td></tr></tbody></table>

#### VM Engines

  
| Release | JavaScript Engine | Lua Engine |
| --- | --- | --- |
| All 5.0 and 5.5 releases | Jurassic ([https://jurassic.codeplex.com/](https://jurassic.codeplex.com/) ) | Lua VM |
| 5.6 and 5.6.1 | Web Browser control as JjavaS script interpreter | Lua VM |
| 5.6.2 | V8.Net ([https://v8dotnet.codeplex.com/](https://v8dotnet.codeplex.com/) ) | Lua VM |

#### Sync Support

 
| IDE plugin | Windows desktop/ kiosk plugin |
| --- | --- |
| IDE 5.0 | KIOSK-GA-5.0.25 |
| IDE 5.5 | KIOSK-GA-5.5.0 |
| IDE 5.6 | KIOSK-GA-5.6.0 |

#### SkySync Support

 
| IDE plugin | Windows desktop/ kiosk plugin |
| --- | --- |
| IDE 5.0 | KIOSK-GA-5.0.29 |
| IDE 5.5 | KIOSK-GA-5.5.3.1 |
| IDE 5.6 | KIOSK-GA-5.6.0 |

#### Compatibility Matrix

  
| VoltMX Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.0.24 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |

Below is the development environment and runtime environment compatibility matrix for above supported releases:

    
|   |   | Any Desktop/Laptop/Kiosk running with OS |
| --- | --- | --- |
| Windows 7 | Windows 8 | Windows 8.1 |
| --- | --- | --- |
| VoltMX Studio running on | Windows 7 OS | Yes | Yes | Yes |
| Windows 8 OS | Yes | Yes | Yes |
| Windows 8.1 OS | Yes | Yes | Yes |

**Yes**: Application successfully deploys and works;   **No**: Application will not be deployed.

### Windows 8

These are typical Store apps and Forms are created under “tablet” section in VoltMX Studio.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 8 SDK, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM Engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">Web Browser control as java script interpreter</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output Binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering <madcap:change madcap:changes="28">P</madcap:change><madcap:change madcap:changes="27">p</madcap:change>lugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windows8_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WIN8-GA-</b>&lt;release number&gt; (Ex: WIN8-GA-5.0.20 and WIN8-GA-5.6.1)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment Modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM <madcap:change madcap:changes="16">s</madcap:change><madcap:change madcap:changes="17">S</madcap:change>olution</td></tr></tbody></table>

#### Sync Support

 
| IDE plugin | Windows 8 plugin |
| --- | --- |
| IDE 5.0 | WIN8-GA-5.0.11 |
| IDE 5.5 | WIN8-GA-5.5.0 |
| IDE 5.6 | WIN8-GA-5.6.0 |

#### SkySync Support

 
| IDE plugin | Windows 8 plugin |
| --- | --- |
| IDE 5.0 | WIN8-GA-5.0.18 |
| IDE 5.5 | WIN8-GA-5.5.3.1 |
| IDE 5.6 | WIN8-GA-5.6.0 |

#### Compatibility Matrix

  
| VoltMX Studio Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| \>=5.0.2 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | No | No |

#### Interim plugin to support Windows 8.1

1.  As per Microsoft, applications built for Windows 8 works fine on Windows 8.1 Update. But there are certain controls like Map that will have issues at runtime (because of Microsoft Known issue). To solve this, app developers will have to build for Windows 8.1 Update. VoltMX Supports Windows 8.1 in WIN8-GA-5.5.5.3. This plugin works only with IDE 5.5 plugin.

1.  If WIN8-GA-5.5.5.3 plugin is consumed with VoltMX Studio on Windows 8 OS, the output binaries will be generated only for Windows 8.
2.  If WIN8-GA-5.5.5.3 plugin is consumed with VoltMX on Windows 8.1 Update OS, the output binaries will be generated for both Windows 8 and Windows 8.1 Update (This binary will solve the above mentioned control related issues).

Below is the development environment and runtime environment compatibility matrix for above supported releases:

    
| VoltMX Studio installed oOn | Build option in VoltMX Studio build screen | Deploy application on | Install from Sstudio | Install manually from zip file in output folder |
| --- | --- | --- | --- | --- |
| Windows 8.1 (32 bit) (Only with Windows plugin WIN8-GA-5.5.5.3) | x86 | Windows 8 (32 bit) | Yes | Yes |
| x86 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| x64 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| ARM | Windows 8 ARM  (MS Ssurface) | N/A | Yes |
| x86 | Windows 8.1 (32 bit) | Yes (Windows 8 appx will be installed ) | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| x86 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| ARM | Windows 8.1 ARM  (MS sSurface) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| Windows 8.1 (64 bit) (Only with Windows plugin WIN8-GA-5.5.5.3) | x86 | Windows 8 (32 bit) | N/A | Yes |
| x86 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| x64 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| ARM | Windows 8 ARM  (MS sSurface) | N/A | Yes |
| x86 | Windows 8.1 (32 bit) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| x86 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | Yes (Windows 8 appx will be installed ) | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | Yes (Windows 8 appx will be installed ) | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes (either of the Windows 8.0 or Windows 8.1 appx  can be deployed) |
| Windows 8 (32 bit) | x86 | Windows 8 (32 bit) | Yes | Yes |
| x86 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| x64 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| ARM | Windows 8 ARM  (MS Ssurface) | N/A | Yes |
| x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 8 (64 bit) | x86 | Windows 8 (32 bit) | N/A | Yes |
| x86 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| x64 | Windows 8 (64 bit) / (Mac-parallel-windows8) | Yes | Yes |
| ARM | Windows 8 ARM  (MS Ssurface) | N/A | Yes |
| x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 8 (x64) on Mac (Parallel combo) | x86 | Windows 8 (32 bit) | N/A | Yes |
| x86 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Yes |
| x64 | Windows 8 (64 bit) / (Mac-parallel-windows8) | Yes | Yes |
| ARM | Windows 8 ARM  (MS Ssurface) | N/A | Yes |
| x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 7 (x86/x64) | x86 | Windows 8 (32 bit) | N/A | Yes |
| x86 | Windows 8 (64 bit) / (Mac-Pparallels\-Wwindows8) | N/A | Yes |
| x64 | Windows 8 (64 bit) / (Mac-parallel-windows8) | N/A | Will not work |
| ARM | Windows 8 ARM  (MS Ssurface) | N/A | Yes |
| x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
|   | ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |

### Windows 8.1 Update

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 194px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 418px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM Engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">JSCore</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output Binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering <madcap:change madcap:changes="28">P</madcap:change><madcap:change madcap:changes="27">p</madcap:change>lugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>windows8_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span><b>WIN8-GA-</b>&lt;release number&gt; (Ex: WIN8-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment Modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM <madcap:change madcap:changes="16">s</madcap:change><madcap:change madcap:changes="17">S</madcap:change>olution</td></tr></tbody></table>

#### Sync Support

 
| IDE plugin | Windows 8.1 plugin |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WIN8-GA-5.6.2 |

#### SkySync Support

 
| IDE plugin | Windows 8.1 plugin |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WIN8-GA-5.6.2 |

#### Compatibility Matrix

  
| VoltMX Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes | Yes |

Windows 8.1 Update platform support is added in 5.6.2. Appx generated for Windows 8.1 update will not be deployed on Windows 7 or Windows 8. It can only be deployed on Windows 8.1 Update. Below is the development environment and runtime environment compatibility matrix for release 5.6.2.

    
| VoltMX Studio installed oOn | Build option | Deploy application on | Install from Sstudio | Install manually from output folder |
| --- | --- | --- | --- | --- |
| Windows 8.1 (x86) | x86 | Windows 8.1 (32 bit) | Yes | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-pParallels\-Wwindows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS sSurface) | N/A | Yes |
| Windows 8.1 (x64) | x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | Yes | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | Yes | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 8.1 (x64) on Mac (Parallel combo) | x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | Yes | Yes |
| ARM | Windows 8.1 ARM  (MS sSurface) | N/A | Yes |
| Windows 8 (x86) | x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 8 (x64) | x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 8 (x64) on Mac (Parallel combo) | x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |
| Windows 7 | x86 | Windows 8.1 (32 bit) | N/A | Yes |
| x86 | Windows 8.1 (64 bit) / (Mac-Pparallels\-Wwindows8.1) | N/A | Yes |
| x64 | Windows 8.1 (64 bit) / (Mac-parallel-windows8.1) | N/A | Yes |
| ARM | Windows 8.1 ARM  (MS Ssurface) | N/A | Yes |

### Windows 8.1 (Phone and Tablet) XMAL - Universal App

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 197px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 387px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM Engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">JSCore</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output Binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engineering <madcap:change madcap:changes="29">P</madcap:change><madcap:change madcap:changes="30">p</madcap:change>lugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body2">windows81_plugin</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Marketing plugin name</td><td class="TableStyle-maintree-BodyD-Column1-Body1">WIN81-GA-&lt;release number&gt; (Ex: WIN81-GA-6.0.20)?</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Deployment Modes</td><td class="TableStyle-maintree-BodyD-Column1-Body2">Windows Phone Marketplace (only phone apps), Windows Store Marketplace (phone/tablet Store apps) and MDM <madcap:change madcap:changes="16">s</madcap:change><madcap:change madcap:changes="17">S</madcap:change>olution</td></tr></tbody></table>

#### Compatibility Matrix

  
| VoltMX Version | Lua Support | JS Support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes? | Yes? |

None of the existing releases (<=5.6.2) will support this new platform.

Windows 8.1 (Phone & Tablet) Universal app platform support will be added in 6.0.

Development and runtime environment scope is yet to be defined.
