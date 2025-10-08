                           

Volt MX  Application Design and Development Guidelines: [Accessibility (508 Compliance)](Accessibility_Overview.md) > Accessibility Compliance Guidelines for Web

Web Accessibility
=================

The Web offers the possibility of unprecedented access to information and interaction for many people with disabilities. The Web is an increasingly important resource in many aspects of life: education, employment, government, commerce, health care, recreation, and more. It is essential that the Web be accessible in order to provide equal access and equal opportunity to people with diverse abilities. Access to information and communications technologies, including the Web, is defined as a basic human right in the United Nations Convention on the Rights of Persons with Disabilities (UN CRPD).

WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies. Currently, certain functionality used in Web sites is not available to some users with disabilities, especially people who rely on screen readers and people who cannot use a mouse. WAI-ARIA addresses these accessibility challenges, for example, by defining new ways for functionality to be provided to assistive technology. With WAI-ARIA, developers can make advanced Web applications accessible and usable to people with disabilities.

More specifically, WAI-ARIA provides a framework for adding attributes to identify features for user interaction, how they relate to each other, and their current state. WAI-ARIA describes new navigation techniques to mark regions and common Web structures as menus, primary content, secondary content, banner information, and other types of Web structures. For example, with WAI-ARIA, developers can identify regions of pages and enable keyboard users to easily move among regions, rather than having to press Tab many times.

Essential Components of Web Accessibility
-----------------------------------------

It is essential that several different components of web development and interaction work together in order for the web to be accessible to people with disabilities. These components include:

*   **Content** - the information in a web page or web application, including:
*   **Natural information** such as text, images, and sounds
*   **Code or markup** that defines structure, presentation, etc.
*   **Web browsers**, **media players**, and other “user agents”
*   **Assistive Technology**, in some cases - screen readers, alternative keyboards, switches, scanning software, etc.
*   **Users’ knowledge**, experiences, and in some cases, adaptive strategies using the web
*   **Developers** - designers, coders, authors, etc., including developers with disabilities and users who contribute content
*   **Authoring tools** - software that creates websites
*   **Evaluation tools** - web accessibility evaluation tools, HTML validators, CSS validators, etc.

When accessibility features are effectively implemented in one component, the other components are more likely to implement them.

Evaluating Web Accessibility
----------------------------

While developing or redesigning a website, evaluate accessibility issues early and throughout the development process, when it is easier to address them. Simple steps, such as changing settings in a browser, can help you evaluate some aspects of accessibility. Comprehensive evaluation to determine if a website meets all accessibility guidelines takes more effort.

There are evaluation tools that help with evaluation. However, no tool alone can determine if a site meets accessibility guidelines. Knowledgeable human evaluation is required to determine if a site is accessible. Refer [Evaluation tools](https://www.w3.org/WAI/ER/tools/) for a list of Web Accessibility Evaluation tools approved by WAI.

If you want to get a general sense of how a web page addresses a few accessibility issues, refer [Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/). The Easy Checks cover just a few accessibility issues and are designed to be quick and easy, rather than definitive. A web page could seem to pass these checks, yet still have significant accessibility barriers. More robust assessment is needed to evaluate accessibility comprehensively.

[Website Accessibility Conformance Evaluation Methodology (WCAG-EM)](https://www.w3.org/WAI/eval/report-tool/#/) is an approach for determining how well a website conforms to Web Content Accessibility Guidelines (WCAG).

> **_Note:_** WCAG-EM is a supporting resource for the WCAG standard; it does not define additional WCAG requirements.
