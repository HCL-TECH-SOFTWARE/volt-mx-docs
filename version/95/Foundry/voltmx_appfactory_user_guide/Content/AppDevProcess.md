                         

App development process
=======================

### Access the Volt MX Environment

In order to access the Volt MX Environment, send a request to the administrator to add you as a developer to App Factory. The administrator adds a new user to Foundry and assigns the user the role of a developer. After you are added as a developer to Foundry, you receive an email from Foundry that states that you can now develop apps.

### Run Volt MX Iris

All developers receive an email invitation to the Volt MX Foundry cloud. Click the link within the email to access the sign-in screen. Once you sign-in to the Volt MX Foundry, you can download and install Iris. In Iris, create a new project or check-out an existing project from GitHub. After incorporating the changes, check-in the project to GitHub.

### Schedule a Build

In general, a developer and/or designer schedule a build. Optionally, an administrator can schedule a build. A nightly build is an example of one such build schedule.

To perform a build, the administrator signs-in to the App Factory console and clicks the link to schedule a job. The administrator picks the channels, environment, and other build parameters to schedule a job. The administrator then picks the days and the time for the build. After the selection is complete, the job is scheduled to run. When the scheduler starts a build process, it sends the results to an email distribution list that is selected by the administrator.

### Trigger a Build

A developer performs check-in into the source control after completing a feature or making changes to a project. At this juncture, the developer triggers a build for the project. The administrator allows web-hooking at source control. The administrator then signs-in to App Factory Console and creates a watcher. The watcher identifies the changes that occur in the source control. After the build is triggered, the watching job runs and sends the results to an email distribution list that is selected by the administrator.

### Build an App

A developer completes a feature and checks the changes into source control. The developer then signs-in to App Factory and opens the build screen to perform a build. From the build screen, the developer chooses the environment and the designated channels (iOS and Android) on which they want to build the app. The developer can also run test scripts on the build. The developer submits the build job to the App Factory CI and/or CD runtime. The runtime compiles the app and sends the developer an email when the build is complete.

### Test an App

If the build is successful, the runtime executes the test scripts. After the tests are complete, the developer receives an email with the test results.

### Review Results

The developer can review the email results or open testing console at App Factory to review the test results. The developer can compare the test results to previous runs or download the binaries used during the testing process.

The App Factory users can also execute the following additional steps on demand:

**Scheduling Tests**

In general, the developer and/or designer schedules the tests. However, an administrator can choose the option to schedule tests. For example, test schedule is a nightly test run on an extended list of devices. The administrator must create a test job scheduler from the App Factory console.

The administrator picks the app binaries, test binaries, and the list of devices to schedule and executes the tests. The administrator then picks the days and times to perform the test. After the selection is done, the job is scheduled to run. When the scheduler starts a test process, it sends the results to an email distribution list that is selected by the administrator.

**Triggering Tests**

A quality engineer needs to launch **Testing an App** to check-in additional tests to source control. An administrator allows web-hooking at source control. Following which the administrator signs-in to the App Factory and creates watcher which tracks any new changes that happen in the source control. After the trigger occurs, the watching job starts to run and send the results to an email distribution list that is selected by the administrator.

**Publishing a Foundry App**

An administrator can publish a Foundry app to Volt MX Cloud by accessing App Factory console. The administrator must upload Foundry app from the source control to the Volt MX Cloud as an initial step. The administrator runs import job on the Volt MX Cloud for the upload activity. Following which the administrator launches publish job. This deploys the already uploaded Foundry app to the Volt MX environment. Once publish job finishes the execution, a developer can use the Foundry app endpoint with given app key and secret.
