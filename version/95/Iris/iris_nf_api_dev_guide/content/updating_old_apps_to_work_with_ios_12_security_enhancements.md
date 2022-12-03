# Updating Old Apps to Work with iOS 12 Security Enhancements

If your apps are developed with a version prior to Volt MX Iris 7.2, your apps will run into security issues on iOS 12\. To resolve the security issues, you must update your old Apps and use Native Function APIs.

If your apps were developed with Volt MX Iris 7.2 and above, go to the [iOS Quick Start Guide](ios_quickstart.md) section.

You must declare the native bindings that you wish to use in an [Information Property List](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.md) (Info.plist) file attached to your app.

For example, for HealthKit the following keys would need to be added:

*   NSHealthShareUsageDescription
*   NSHealthUpdateUsageDescription

The complete list of keys can be found in Apple documentation here:

*   [Information Property List Key Reference](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.md#//apple_ref/doc/uid/TP40009251-SW1)

## Procedure

1.  Navigate to the root of your project.
2.  Navigate to the `Content\Resources\subdirectory`.
3.  In the directory create a text file called: “`infoplist_configuration.json.`”
4.  Open the text file in a text editor and add the appropriate keys for the Native APIs used by your app. For example, the keys mentioned above would look like this:

    <pre><code style="display:block;background-color:#eee;">{
      "NSHealthShareUsageDescription": "",   
      "NSHealthUpdateUsageDescription": "",
    }</code></pre>

6.  On building the application, the `.json file` will be packaged in the generated `.KAR file`.

7.  On extraction of the .`KAR` file, the keys are added to the `Info.plist file.`
