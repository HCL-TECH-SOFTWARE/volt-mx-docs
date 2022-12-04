                         

Custom Test Environment Run (Raw Mode)
======================================

AWS Device farm offers two types of environments to run the tests.

*   Standard Test Environment.
*   Custom Test Environment

**Standard Test Environment** - When you run a test in the standard environment, Device Farm provides detailed logs and reporting for every case in your test suite. You can view the performance data, videos, screenshots, and logs for each test to identify and fix issues in your app.

In **Standard Test Environment** all the tests are run independently and TestNG annotations are not supported.

> **_Note:_** As Device Farm provides granular reporting in the **Standard Test Environment**, test execution time can be longer than that of tests that are run locally.  
  
For faster execution time, run your tests in a **Custom Test Environment**.

**Custom Test Environment** - When you customize the test environment, you can specify the commands to be run by the Device Farm to execute your tests. Running a test on a Custom Test Environment ensures that tests on Device Farm run similar to the tests run on your local machine.

When you run tests in a Custom Test Environment, you do not get the granular reports for each test case.

In a custom test environment, you can select the Appium version to run your test. All the TestNG annotations including grouping and parallel tests/methods are supported.

> **_Note:_** The default Appium version for AWS Custom Test Environment run is 1.7.2 and is pre-installed in the environment.
