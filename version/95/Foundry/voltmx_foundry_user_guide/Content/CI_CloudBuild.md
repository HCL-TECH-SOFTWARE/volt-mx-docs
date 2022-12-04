                             

User Guide: [VoltMX Foundry Command Line Utility - Continuous Integration](CI_Foundry.md) > CI Cloud Build

Continuous Integration for Cloud Build
--------------------------------------

Build is a command introduced in MFCLI V8 SP4. You can use the command to build and generate native app binaries for the selected native platforms. The Build command helps you build native client binaries on Cloud.

### build command

To build and generate native client binaries on a Cloud (manage.hclvoltmx.com) environment

```
 
  java -jar mfcli.jar build -u <user> -p <password> -t <account id> -e <environment name> -pp <properties path> -sp <src-code path> -od <output directory> [ -pt <timeout in seconds>]
    
java -jar mfcli.jar build -u abc@voltmx.com -p password -t 100054321 -e MyEnv -pp "D:\WorkDir\prop.json" -sp "D:\WorkDir\src.zip" -od "D:\WorkDir\output" -pt 20
```

*   The following arguments are supported for the build command:
```
 `build`   Command to build Iris apps for different channels.  
      
    Usage: Run the self-executable JAR with relevant arguments.  
      Options:
          -t, --account
           9 digit id of the Volt MX Cloud account (visible in top right corner in Console) for e.g. 100054321. Not relevant for an on-premise installation.
        -e, --environment
           Name of the environment to use for building.
        -mpt, --max-poll-timeout
           Timeout in minutes to be used to stop polling after given minutes.
           Default: 30
        --mfa
           If specified, multi-factor authentication is enabled. The secret key for multi-factor authentication required for generating one time password (OTP) needs to be specified in the properties file.
           Default: false
      * -od, --out-dir
           Output directory where the build artifacts should be saved.
        -p, --password
           Password for the Volt MX user. This could be plain text or, encrypted using 'encrypt' command. This is mandatory.
        -pt, --poll-timeout
           Timeout in seconds to be used for polling build status.
           Default: 30
      * -pp, --props-path
           Path to the .json file which will be used as payload.
      * -sp, --src-path
           Path to the source code zip.
        -u, --user
           Volt MX user required for authentication, for e.g. abc@voltmx.com. This is mandatory.
    
```

### Additional commands supported for Build command

You can perform individual stages of build process by using the following sub-commands of the build command:

```
     `build-cancel`       Command to cancel build for iris project
    `build-download`     Command to download artifacts for given build
    `build-status`       Command to check build status or fetch status url for given build
    `build-trigger`      Command to trigger build for iris project
    `build-upload`       Command to upload iris project for build
```

#### 1\. build-upload command

To upload artifacts from a local path to a workspace, run the following build command:

```
 java -jar mfcli.jar build-upload -u <user> -p <password> -t <account id> -e <environment name> -sp <src-code path> -pp <props path>
```
```
 For example:  
  
java -jar mfcli.jar build-upload -u abc@voltmx.com -p password -t 100054321 -e MyEnv -sp "D:\\WorkDir\\src.zip" -pp "D:\\WorkDir\\prop.json"
```

#### 2\. build-trigger command

To start build binaries, run the following build command:

```
 java -jar mfcli.jar build-trigger -u <user> -p <password> -t <account id> -e <environment name> -bid <build identifier> -pp <props path>
```
```
 
For example:  
  
java -jar mfcli.jar build-trigger -u abc@voltmx.com -p password -t 100054321 -e MyEnv -bid sample-guid -pp "D:\\WorkDir\\prop.json"
```

#### 3\. build-download command

After a client binary is uploaded, to download artifacts to your local system, run the following build-download command:

```
 java -jar mfcli.jar build-download -u <user> -p <password> -t <account id> -e <environment name> -dl <download link> -od <out dir path> -f <file name> [ --relative ]
```
```
 For example:  
  
java -jar mfcli.jar build-download -u abc@voltmx.com -p password -t 100054321 -e MyEnv -od "D:\\WorkDir\\src.zip" -dl "http://example.com/" -f Demo.apk --relative

```

*   The following are additional arguments you must pass with build-download command:
```
 
      * -dl, --download-link
           Link of the file to be download.
        -e, --environment
           Name of the environment used for building.
      * -f, --file-name
           Name for the file to be saved as, after downloading.
        --mfa
           If specified, multi-factor authentication is enabled. The secret key for multi-factor authentication required for generating one time password (OTP) needs to be specified in the properties file.
           Default: false
      * -od, --out-dir
           Path to the directory where downloaded files will be kept.
        -p, --password
           Password for the Volt MX user. This could be plain text or, encrypted using
           'encrypt' command. This is mandatory.
        --relative
           Flag to indicate, whether download link is relative or actual.
           Default: false
```

#### build-status command

To view an app build progress during any of the stages, run the following build command:

```
 java -jar mfcli.jar build-status -u <user> -p <password> -t <account id> -u <user> -p <password> -t <account id> -e <environment name> -bid <build identifier> -ps -pt <timeout in seconds>

```
```
 For example:  
java -jar mfcli.jar build-status -u abc@voltmx.com -p password -t 100054321 -u abc@voltmx.com -p password -t 100054321 -e MyEnv -bid sample-guid -ps -pt 30
```

*   The following are additional arguments you must pass with build-status command:
```
 * -bid, --build-identifier  
    Build identifier for the build obtained via build-upload command.  
      
    \-e, --environment  
    Name of the environment which was used for building.  
      
    \-ps, --poll-status  
    Flag to poll the status url as well after fetching.  
    Default: false  
      
    \-pt, --poll-timeout  
    Timeout in seconds to be used for polling build status.  
    Default: 30
```

#### build-cancel command

To cancel an app build process during any of the stages, run the following build command:

```
 
  java -jar mfcli.jar build-cancel -u <user> -p <password> -t <account id> -e <environment name> -qid <queue id>
```
```
 For example:
  java -jar mfcli.jar build-cancel -u abc@voltmx.com -p password -t 100054321 -e MyEnv -qid sample-queue-id
```

*   The following are additional arguments you must pass with build-cancel command:
```
 * -qid, --queue-id  
    Queue identifier for the build obtained via build-trigger command.
```
