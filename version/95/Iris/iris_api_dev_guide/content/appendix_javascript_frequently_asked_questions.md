                            

You are here: Appendix: JavaScript FAQ

Appendix: JavaScript FAQ
========================

Can I use the standard JavaScript features like prototypes, "this", function semantics, or do I have to use a "restricted JavaScript"?

Yes, the JavaScript runtime environment embedded by the Volt MX platform is ECMA 262 compliant. So all the standard JavaScript features are available out of the box. All the custom Functions and Objects defined by the developer have access to standard JavaScript features. Though the JavaScript Objects/Functions created/defined by the Volt MX APIs adhere to this specification there are some known limitations that one must be aware of. These limitations mostly arise from the limitations posed by the JavaScript runtime environment when invoking native SDK APIs (defined in a different language). These limitations have been captured under the sections "[JavaScript Function Semantics](js_function_semantics.md)" and "[JavaScript Object Semantics](js_object_semantics_new.md)".

* * *

What are the different JavaScript runtime environments that Volt MX platform bundles for each of the Mobile platforms?

<table class="TableStyle-Basic" cellspacing="0" style="mc-table-style: url('resources/tablestyles/basic.css');"><colgroup><col class="TableStyle-Basic-Column-Column1"> <col class="TableStyle-Basic-Column-Column1" style="width: 344px;"> <col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Platform</th><th class="TableStyle-Basic-BodyE-Column1-Body1">Supported Version</th><th class="TableStyle-Basic-BodyD-Column1-Body1">JavaScript Engine</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">iOS</td><td class="TableStyle-Basic-BodyE-Column1-Body1">4.0 and above</td><td class="TableStyle-Basic-BodyD-Column1-Body1">JS Core</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Android</td><td class="TableStyle-Basic-BodyE-Column1-Body1">2.1 and above</td><td class="TableStyle-Basic-BodyD-Column1-Body1">Google V8 (via NDK)</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">MobileWeb</td><td class="TableStyle-Basic-BodyE-Column1-Body1">All</td><td class="TableStyle-Basic-BodyD-Column1-Body1">---</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">SPA</td><td class="TableStyle-Basic-BodyE-Column1-Body1">iOS, Android, Windows</td><td class="TableStyle-Basic-BodyD-Column1-Body1">JS engine embedded in the browser</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Windows</td><td class="TableStyle-Basic-BodyB-Column1-Body1">10 and later</td><td class="TableStyle-Basic-BodyA-Column1-Body1">Chakra</td></tr></tbody></table>

* * *

Are there any JavaScript constraints or cross platform nuances that I should be aware of when developing on Volt MX platform ?

Yes, even though Volt MX platform bundles or uses widely used JavaScript runtime environment, there are some JavaScript APIs that don't work consistently across the JavaScript runtime environments. Below are some of the JavaScript operators and semantics that can result in inconsistent experience across runtimes and should be avoided:

*   _typeof_ operator for the Objects created and returned by the Volt MX APIs
*   _instanceof_ operator for the Objects created and returned by the Volt MX APIs

* * *

I like that Volt MX now supports JavaScript. Can I pick a JavaScript based 3rd party library and include it in my project codebase ?

Yes, you can integrate any Javascript library which is purely written in Javascript language without any native, browser dependencies. In case the JavaScript library depends upon a browser DOM then it would only work on the SPA channel.

* * *

I see some of the widgets like Form and Image have got a "2" as suffix when creating the widget. For instance, when creating the form we have to say com.voltmx.ui.Form2. Why do we need to have "2" as suffix for these widgets ?

When drafting the specifications for the JavaScript APIs there was a conscious effort to ensure common cross platform behavior of some of the widgets. We realized that unless we break some backward compatibility the widget behavior cannot be made consistent across platforms. Hence Volt MX came with new API definitions for these widgets with the intention to consolidate the cross platform behavior. A version "2" of these widgets was introduced.

* * *

So in general is it recommended to use voltmx.ui.Image2 or voltmx.ui.Image, should I use the version "2" of the widgets or their original version ?

For better cross platform behavior we recommend you to use the voltmx.ui.Image2 widget wherever possible. The original version of the widgets have been retained only for backward compatibility.

* * *

Can I use Octal literals in my JavaScript Code?

Octal literals should be avoided in JavaScript Code. Numbers prefixed with 0 will be treated as octal numbers by most of the Javascript Engines but some throw an exception. If you want to parse the octal number from a string variable, use _parseInt_ with _radix_ parameter.

* * *

![](resources/prettify/onload.png)
