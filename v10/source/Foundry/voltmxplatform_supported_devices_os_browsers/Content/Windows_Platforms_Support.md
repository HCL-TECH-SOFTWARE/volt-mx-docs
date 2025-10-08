                            
### Windows Desktop

The apps built for this platform work on Windows 7, Windows 8/8.1, and Windows 10.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1"> <col class="TableStyle-maintree-Column-Column1"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Software used by platform</td><td class="TableStyle-maintree-BodyD-Column1-Body1">.net Framework 4.0, Visual Studio 2012 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Platform Development Language</td><td class="TableStyle-maintree-BodyD-Column1-Body2">C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1">WPF</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><a href="#WD2" class="Hyperlink selected">See below</a></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1">EXE (in Debug mode) and MSI (in Release mode)</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><b>KIOSK-GA-</b>&lt;release number&gt; (Example: KIOSK-GA-5.0.31 and KIOSK-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body1">MSI package distribution and installation</td></tr></tbody></table>

#### VM Engines

  
| Release | JavaScript Engine | Lua Engine |
| --- | --- | --- |
| All 5.0 and 5.5 releases | Jurassic ([https://jurassic.codeplex.com/](https://github.com/paulbartrum/jurassic) ) | Lua VM |
| 5.6 and 5.6.1 | Web Browser control as JavaScript interpreter | Lua VM |
| 5.6.2 and above | V8.Net ([https://v8dotnet.codeplex.com/](https://github.com/rjamesnw/v8dotnet) ) | Lua VM |
| 6.0 and above | V8.Net ([https://v8dotnet.codeplex.com/](https://github.com/rjamesnw/v8dotnet) ) | Lua VM |
| 8.0 and above | Chakra engine | N/A |

#### Sync Support

  
| IDE plug-in | Windows desktop/kiosk plug-in |
| --- | --- |
| IDE 5.0 | KIOSK-GA-5.0.25 |
| IDE 5.5 | KIOSK-GA-5.5.0 |
| IDE 5.6 | KIOSK-GA-5.6.0 |
| IDE 6.0 | KIOSK-GA-6.0.0 |
| IDE 6.5 | KIOSK-GA-6.5.0 |
| IDE 7.0 | KIOSK-GA-7.0.0 |

#### SkySync Support

  
| IDE plug-in | Windows desktop/kiosk plug-in |
| --- | --- |
| IDE 5.0 | KIOSK-GA-5.0.29 |
| IDE 5.5 | KIOSK-GA-5.5.3.1 |
| IDE 5.6 | KIOSK-GA-5.6.0 |
| IDE 6.0 | KIOSK-GA-6.0.0 |
| IDE 6.5 | KIOSK-GA-6.5.0 |
| IDE 7.0 | KIOSK-GA-7.0.0 |

#### Compatibility Matrix

  
| Volt MX IrisWindows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.0.24 | Yes | Yes |
| 5.5 | Yes | Yes |
| 5.6 | Yes | Yes |
| 5.6.2 | Yes | Yes |
| 6.0 | Yes (Upgraded Apps) | Yes |
| 6.5 | No | Yes |
| 7.0 | No | Yes |

  
The following are the development and runtime environment compatibility matrices for the above supported releases:

  
| Volt MX Iris running on | Any Desktop/Laptop/Kiosk running with OS |||   |
| --- | --- | --- | --- | --- |
| Windows 7 | Windows 8 | Windows 8.1 | Windows 10 |
| --- | --- | --- | --- |
| Windows 7 OS | Yes | Yes | Yes | Yes |
| Windows 8 OS | Yes | Yes | Yes | Yes |
| Windows 8.1 OS | Yes | Yes | Yes | Yes |
| Windows 10 OS | Yes | Yes | Yes | Yes |

**Yes**: Application successfully deploys and works;   **No**: Application will not be deployed.

### Windows 8.1 Tablet

These are Windows Store apps. Forms are created under the **tablet** section in Volt Iris.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 194px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 418px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 8.1 SDK, Visual Studio 2013 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">VM engines</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>Lua VM for Lua; <span class="span_4">JSCore</span> for JavaScript</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span><b>WIN8-GA-</b>&lt;release number&gt; (Example: WIN8-GA-5.6.2)</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM solution</td></tr></tbody></table>

#### Sync Support

  
| IDE plug-in | Windows 8.1 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WIN8-GA-5.6.2 |
| IDE 6.0 | WIN8-GA-6.0.0 |
| IDE 6.5 | WIN8-GA-6.5.0 |
| IDE 7.0 | WIN8-GA-7.0.0 |

#### SkySync Support

  
| IDE plug-in | Windows 8.1 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | WIN8-GA-5.6.2 |
| IDE 6.0 | WIN8-GA-6.0.0 |
| IDE 6.5 | WIN8-GA-6.5.0 |
| IDE 7.0 | WIN8-GA-7.0.0 |

#### Compatibility Matrix

  
| Volt MX Iris Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | Yes | Yes |
| 6.0 | Yes (Upgraded Apps) | Yes |
| 6.5 | No | Yes |
| 7.0 | No | Yes |

Windows 8.1 update platform support is added in 5.6.2. APPX package file generated for Windows 8.1 update will not be deployed on Windows 7 or Windows 8. The APPX file can only be deployed on Windows 8.1 update.

The following are the development and runtime environment compatibility matrices for release 5.6.2.

  
| Volt MX Iris on | Build option | Deploy application on | Install from Iris | Install manually from output folder |
| --- | --- | --- | --- | --- |
| Windows 8.1 (x86) | x86 | Windows 8.1 (32-bit) | Yes | Yes |
|^^| x86 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| x64 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8.1 (x64) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
|^^| x86 | Windows 8.1 (64-bit) | Yes | Yes |
|^^| x64 | Windows 8.1 (64-bit) | Yes | Yes |
|^^| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (x86) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
|^^| x86 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| x64 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 8 (x64) | x86 | Windows 8.1 (32-bit) | N/A | Yes |
|^^| x86 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| x64 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |
| Windows 7 | x86 | Windows 8.1 (32-bit) | N/A | Yes |
|^^| x86 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| x64 | Windows 8.1 (64-bit) | N/A | Yes |
|^^| ARM | Windows 8.1 ARM  (MS Surface) | N/A | Yes |

### Windows 10 Tablet

These are Windows Store apps. Forms are created under the **tablet** section in Volt Iris.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 194px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 418px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 10 SDK, Visual Studio 2015 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engine</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">Chakra</span></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span><b>WIN10-GA-</b>&lt;release number&gt; (Example: WIN10-GA-7.0.0)</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM solution</td></tr></tbody></table>

#### Sync Support

  
| IDE plug-in | Windows 10 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | No |
| IDE 6.0 | No |
| IDE 6.5 | No |
| IDE 7.0 | WIN10-GA-7.0.0 |

#### SkySync Support

  
| IDE plug-in | Windows 10 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | No |
| IDE 6.0 | No |
| IDE 6.5 | No |
| IDE 7.0 | WIN10-GA-7.0.0 |

#### Compatibility Matrix

  
| Volt MX Iris Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | No | No |
| 6.0 | No | No |
| 6.5 | No | No |
| 7.0 | No | Yes |

### Windows 10 Mobile

These are Windows Store apps. Forms are created under the **mobile** section in Volt Iris.

#### Environment

<table class="TableStyle-maintree" cellspacing="0" style="mc-table-style: url('Resources/TableStyles/maintree.css');"><colgroup><col class="TableStyle-maintree-Column-Column1" style="width: 194px;"> <col class="TableStyle-maintree-Column-Column1" style="width: 418px;"></colgroup><tbody><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1"><span class="span_4">Software</span><span class="span_4"> used by platform</span></td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows 10 SDK, Visual Studio 2015 and Blend</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2"><span class="span_4">Platform </span><span class="span_4">Development Language</span></td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span>C# and XAML</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Runtime</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>XAML and WINRT</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Engine</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">Chakra</span></td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Output binary type</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>APPX or ZIP</td></tr><tr class="TableStyle-maintree-Body-Body2"><td class="TableStyle-maintree-BodyE-Column1-Body2">Marketing plug-in name</td><td class="TableStyle-maintree-BodyD-Column1-Body2"><span class="span_4">&nbsp;</span><b>WIN10-GA-</b>&lt;release number&gt; (Example: WIN10-GA-7.0.0)</td></tr><tr class="TableStyle-maintree-Body-Body1"><td class="TableStyle-maintree-BodyE-Column1-Body1">Deployment modes</td><td class="TableStyle-maintree-BodyD-Column1-Body1"><span class="span_4">&nbsp;</span>Windows Store Marketplace or MDM solution</td></tr></tbody></table>

#### Sync Support

  
| IDE plug-in | Windows 10 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | No |
| IDE 6.0 | No |
| IDE 6.5 | No |
| IDE 7.0 | WIN10-GA-7.0.0 |

#### SkySync Support

  
| IDE plug-in | Windows 10 plug-in |
| --- | --- |
| IDE 5.0 | No |
| IDE 5.5 | No |
| IDE 5.6 | No |
| IDE 6.0 | No |
| IDE 6.5 | No |
| IDE 7.0 | No |
| IDE 7.1 | WIN10-GA-7.0.0 |

#### Compatibility Matrix

  
| Volt MX Iris Windows plug-in | Lua support | JavaScript support |
| --- | --- | --- |
| 4.1 | No | No |
| 5.0 | No | No |
| 5.5 | No | No |
| 5.6 | No | No |
| 5.6.2 | No | No |
| 6.0 | No | No |
| 6.5 | No | No |
| 7.0 | No | No |
| 7.1 | No | Yes |
| 8.0 | No | Yes |
