

# Deployment Debug Tool for Volt MX Foundry

The deployment debug tool verifies on-premises and container installations of Volt MX Foundry. The tool scans the installation directory for any configurations or settings that can cause issues. The tool also checks the health of the installed components and provides debug logs.

## <a name="Prerequisites"></a>Prerequisites

*   An on-premises or container installation of Volt MX Foundry
*   The installation directory must be accessible by the tool
*   The user must have sudo permissions

## <a name="Run"></a>Run the Debug Tool

To run the tool and debug the Foundry installation, follow these steps:

1.  Extract the Foundry installer zip file and navigate to the extracted folder.
2.  Copy the `FoundrySetupDebugging.sh` file to your installation directory.
3.  Open a terminal window and run the following command:

    <pre><code style="display:block;background-color:#eee;">sudo sh FoundrySetupDebugging.sh</code></pre>

   Type the password for your user account, if required.

After you run the command, the tool checks the health and status of the Foundry Components. If any errors occur, they are displayed on the console.

After debugging is complete, the tool generates debug logs at the following path:  
`/tmp/FoundryLogs.zip`

