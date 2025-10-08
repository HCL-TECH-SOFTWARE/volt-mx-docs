                            

Volt MX  Application Design and Development Guidelines: Accessibility Compliance Guidelines-Introduction

Overview
========

In software application development, 508 Compliance is also referred to as accessibility. For example, people with impaired vision must be able to use software with the help of touch gestures, that is designed to run on a system that has a keyboard. The result of performing a function is read out using the screen reading technology.

> **_Note:_** The screen-reading capabilities of the different assistive technologies may vary and may not produce the same results.

Web Content Access Guidelines (WCAG)
------------------------------------

Drafted as a 1986 amendment to the Rehabilitation Act of 1973, Section 508 was originally intended to address the workplace needs of disabled workers in the electronics and information technology fields. That measure was replaced in 1998 by the Federal Electronic and Information Technology Accessibility and Compliance Act, which requires that all electronic and IT products and services offered by federal agencies be accessible to people with disabilities. A “refresh” of Section 508 took effect in 2018 and sought to bring American standards more in line with international accessibility efforts such as the World Wide Web Consortium’s Web Content Access Guidelines 2.0 (WCAG 2.0).

The World Wide Web Consortium (W3C) is an international consortium where Member organizations, a full-time staff, and the public work together to develop Web standards. W3C primarily pursues its mission through the creation of Web standards and guidelines designed to ensure long-term growth for the Web. To learn more about the World Wide Web Consortium, refer [About W3C](http://www.w3.org/Consortium/).

W3C’s Web Accessibility Initiative (WAI) brings together individuals and organizations from around the world to develop strategies, guidelines, and resources to help make the Web accessible to people with disabilities. To learn more about Web Accessibility Initiative, refer [WAI website](http://www.w3.org/WAI/).

WCAG Principles
---------------

WCAG 2.0 compliance requires the applications to adhere to the following four principles:

*   **Perceivable** - Information and user interface components must be presentable to users in ways they can perceive.
    
    This means that users must be able to perceive the information being presented. (It can't be invisible to all their senses).
    
*   **Operable** - User interface components and navigation must be operable.
    
    This means that users must be able to operate the interface. (The interface cannot require interaction that a user cannot perform).
    
*   **Understandable** - Information and the operation of user interface must be understandable.
    
    This means that users must be able to understand the information as well as the operation of the user interface. (The content or operation cannot be beyond their understanding).
    
*   **Robust** - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.
    
    This means that users must be able to access the content as technologies advance. (As technologies and user agents evolve, the content should remain accessible.)
    

Best Practices
--------------

The assistive technology (AT) for iPhone and Android platforms has built-in programs that support accessibility when enabled on devices. Browser-based platforms use the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) framework. The WAI-ARIA framework enables you to add attributes to identify features for user interaction, map controls, events, and APIs used in a rich Internet application.

The following table maps different platforms and their assistive technology:

  
| Platform | Assistive Technology |
| --- | --- |
| [iOS](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/index.md) | VoiceOver |
| [Android](http://developer.android.com/guide/topics/ui/accessibility/index.html) | TalkBack |
| [SPA](http://www.w3.org/WAI/) | WAI-ARIA |


