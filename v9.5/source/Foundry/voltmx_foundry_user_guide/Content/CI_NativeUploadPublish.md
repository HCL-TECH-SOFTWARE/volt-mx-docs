                             

User Guide: [VoltMX Foundry Command Line Utility - Continuous Integration](CI_Foundry.md) > CI\_NativeBinary Upload and Publish

Continuous Integration for Binary-Upload and Native-Publish
-----------------------------------------------------------

Binary-upload and Native-publish commands are introduced in MFCLI V8 SP4.

*   `binary-upload` command uploads a client binary to Volt MX Foundry. Supported platforms for client binaries are ios\_phone, ios\_tablet, android\_phone, android\_tablet, windows\_phone, and web\_phone.
*   `native-publish` command publishes the native binaries to the environment.

### binary-upload command

*   To upload a native client binary to a Cloud (manage.hclvoltmx.com) environment
```
 java -jar mfcli.jar binary-upload -u <user> -p <password> -t <account id> -a <app name> [-v <app version>] -bp <Path to binary> -plat <platform name> --binary-version <Binary version> --description <Description> --display-name <Display Name> --appIcon <Path to app icon> [-ssdirpath <Path to screenshots directory>] [--upgradable]
```
```
 For example:  
      
        java -jar mfcli.jar binary-upload -u abc@voltmx.com -p password -t 100054321 -a MyApp -v 1.0 -bp "D:\\\\WorkDir\\\\iosClient.ipa" -plat ios\_phone --binary-version 1.0.2 --description "This is iphone binary" --display-name "sampleDisplayName" --appIcon "D:\\\\WorkDir\\\\icon1.png" -ssdirpath "D:\\\\WorkDir\\\\screenshotsDir" \--upgradable
```

*   **To upload a native client binary to an on premise installation**
```
 java -jar mfcli.jar binary-upload -u <user> -p <password> -au <Identity URL> -cu <Console URL> -a <app name> [-v <app version>] -bp <Path to binary> -plat <platform name> --binary-version <Binary version> --description <Description> --appIcon <Path to app icon> [-ssdirpath <Path to screenshots directory>] [--upgradable]
```
```
 
    For example:  
       java -jar mfcli.jar binary-upload -u abc@voltmx.com -p password -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081 -a MyApp -v 1.0 -bp "D:\\\\WorkDir\\\\iosClient.ipa" -plat ios\_phone --binary-version 1.0.2 --description "This is iphone binary" --display-name "sampleDisplayName" --appIcon "D:\\\\WorkDir\\\\icon1.png" -ssdirpath "D:\\\\WorkDir\\\\screenshotsDir" \--upgradable
```
    *   The following arguments are supported for the binary-upload command:
```
 For example, to get summary help on all the commands,  
        java -jar mfcli.jar help binary-upload  
          
        Usage: Run the self-executable JAR with relevant arguments.   
          Options:
              -t, --account
               9 digit id of the Volt MX Cloud account (visible in top right corner in Console) for e.g. 100054321. Not relevant for an on-premise installation.
          * -a, --app
               Name of the app to which binary to be uploaded.
            --appIcon
               Path to app icon
          * -bp, --binary-path
               Path to the client binary file .ipa or .apk
          * --binary-version
               The version of the client binary.
               Default: 1.0.0  
            --channels
               Comma separated channel names of web build. Valid values are web_phone,web_tablet,responsive_web
            -cu, --console
               URL of Volt MX Foundry Console (without context path), relevant for on-premise installation only. For e.g. http://10.10.24.78:8081
          * --description
               Description of client binary.  
          --display-name
               Display name of client binary.
            -au, --identity
               URL of Volt MX Foundry Identity Services (without context path), relevant for on-premise installation only. For e.g. http://10.10.24.79:8080
            --mfa
               If specified, multi-factor authentication is enabled. The secret key for multi-factor authentication required for generating one time password (OTP) needs to be specified in the properties file.
               Default: false
            -p, --password
               Password for the Volt MX user. This could be plain text or, encrypted using 'encrypt' command. This is mandatory.
          * -plat, --platform
               The platform of the client binary.
               Possible Values: [ios_phone, ios_tablet, android_phone, android_tablet, windows_phone, web_phone]
            -ssdirpath, --screenshot-directory-path
               Path to the screenshots folder.  
         --upgradable 
               If true, marks the binary as upgradable in EAS
               Default: false  
          
            -u, --user
               Volt MX user required for authentication, for e.g. abc@voltmx.com. This is mandatory.
            -v, --version
               The app version for which the binary to be uploaded.
               Default: 1.0 
```

### native-publish command

The native-publish command helps you publish the native client binaries to the environment.

*   To publish native client binaries to a Cloud (manage.hclvoltmx.com) environment
```
 java -jar mfcli.jar native-publish -u <user> -p <password> -t <account id> -a <app name> [-v <app version>] -e <environment name> -cbmeta <client binary meta>
```
```
 For example:  
      
        java -jar mfcli.jar native-publish -u abc@voltmx.com -p password -t 100054321 -a MyApp -v 2.0 -e MyEnv -cbmeta "{"ios\_phone" : 1.2.1, "android\_phone" : 1.2.0}"
```
*   To publish native client binaries to an on premise installation
```
 java -jar mfcli.jar native-publish -u <user> -p <password> -au <Identity URL> -cu <Console URL> -a <app name> [-v <app version>] -e <environment name> -cbmeta <client binary meta>
```
```
 For example:  
      
        java -jar mfcli.jar native-publish -u abc@voltmx.com -p password -au http://10.10.24.79:8080 -cu http://10.10.24.78:8081 -a MyApp -v 2.0 -e MyEnv -cbmeta "{"ios\_phone" : 1.2.1, "android\_phone" : 1.2.0}"
```
    *   The following arguments are supported for the native-publish command:
```
 For example, to get summary help on all the commands,  
        java -jar mfcli.jar help native-publish  
          
        Usage: Run the self-executable JAR with relevant arguments.   
          Options:
              -t, --account
               9 digit id of the Volt MX Cloud account (visible in top right corner in Console) for e.g. 100054321. Not relevant for an on-premise installation.
          * -a, --app
               Name of the app to be published/unpublished.
          * -cbmeta, --clientbinary-meta
               Json string of native channel name vs binary version
            -cu, --console
               URL of Volt MX Foundry Console (without context path), relevant for on-premise installation only. For e.g. http://10.10.24.78:8081
          * -e, --environment
               Name of the environment to publish to/unpublish from.
            -au, --identity
               URL of Volt MX Foundry Identity Services (without context path), relevant for on-premise installation only. For e.g. http://10.10.24.79:8080
            --mfa
               If specified, multi-factor authentication is enabled. The secret key for multi-factor authentication required for generating one time password (OTP) needs to be specified in the properties file.
               Default: false
            -p, --password
               Password for the Volt MX user. This could be plain text or, encrypted using 'encrypt' command. This is mandatory.
            --release-lock
               Forcibly release lock taken by previous operation (use with caution) when doing a publish/unpublish.
               Default: false
            -u, --user
               Volt MX user required for authentication, for e.g. abc@voltmx.com. This is mandatory.  
            --verbose
               If specified, prints details of all steps.
               Default: false
            -v, --version
               Version of the app to be published/unpublished.
               Default: 1.0
```
