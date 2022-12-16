                          

KSLint
======

While executing an application, there are ample chances of running into errors. Debugging and fixing the errors consume a lot of time. Instead of using debuggers, you can use Linters. They help developers to identify bugs such as typos, undeclared variables, calling undeclared functions and much more while writing a code. Linters play a significant role in reducing errors, improving the quality of the source code, and accelerating app development.

A linter is a tool that analyzes source code, and flags syntax errors and potential run-time errors. Linters such as JSLint and JSHint have default rules to verify across the JavaScript code and identify errors in the code. However, with ESLint users can configure the default set of rules and write their own linting rules alongside the built-in rules. ESLint has been customized and enhanced to KSLint to work well with the Volt MX Iris framework.

KSLint, also known as VoltMXScript Lint is a linter plugin that is used for JavaScript code. Using KSLint, users can perform the following tasks:

*   [Configure default rules](#configure-default-rules)
*   [Write custom rules](#write-custom-rules)

Configure Default Rules
-----------------------

KSLint has predefined set of code rules based on which the source code is verified. If any of the rules are violated in the code, a configured error message or a warning appears. Users can enable or disable the default rules and change the configuration of the rules to warnings or errors.

To configure the KSLint rules, follow these steps:

1.  From the left navigation bar, select the Volt MX IQ icon.  
    The **VoltMX IQ** chat window appears.
2.  Type a command to see the lint configurations.  
    For example: change linting rules, set lint configuration  
    Volt MX IQ prompts for the scope of lint configurations.  
    
    ![](Resources/Images/IQKSLint.PNG)
    
3.  Select the scope of the lint configurations to any of the following:
    
    *   **Project:** Applies the lint configurations to the current project only.
    *   **Workspace:** Applies the lint configurations to all the projects inside the workspace.
        
    
    A **Lint configurations** window appears.
    
    ![](Resources/Images/LintConfig_824x494.png)
    
4.  In the **Rules** tab, click the arrow icon beside a rule and select any of the following:
    *   **Turn Off:** Disables the specific rule and therefore no error or warning is displayed in Iris
    *   **Warning:** Displays warning symbol when the specified rule is violated
    *   **Error:** Displays an error symbol when the specified rule is violated
5.  In the **Environments** tab, enable the required JavaScript libraries or packages.  
    ![](Resources/Images/LintConfigEnvironments_822x492.png)
6.  Click **Done**.

You have successfully configured the default KS Lint rules.

Write Custom Rules
------------------

Using KSLint, users can also write custom rules. Users can create the custom rules using code. These rules can be made applicable to a specific project or to all the projects in a workspace.

To add custom code rules to lint configurations in your project, follow these steps:

1.  Navigate to the project folder in your Iris workspace.  
    For example, C:\\Users\\User1\\VoltMX Iris\\voltmxworkspace\\EmployeeDirectory  
    
    > **_Note:_** If you want to apply custom rules to all the projects in your Iris workspace, navigate to the Workspace folder.  
    for example, C:\\Users\\User1\\VoltMX Iris\\voltmxworkspace
    
2.  Create a new folder with the name **.kslint**.
3.  In the folder, create a new file **lintrules.js**.
4.  Enter code in the file defining your custom rules. The custom rules must be defined in the following code format:
    
```
((function(mod) {
            if (typeof exports == "object" & amp; & amp; typeof module == "object") // CommonJS
                module.exports = mod();
            else if (typeof define == "function" & amp; & amp; define.amd) // AMD
                return define([], mod);
            else // Plain browser env
                return mod();
        })(function() {
    
            return {
                //Write your dictionary of rules here
            }
        })
```
    
5.  Save the file.
6.  Restart Iris, if you already have Iris open.

You have successfully added the custom rules to the KS Lint configurations.

Here is an example of a custom rule that you can copy and paste in your project folder and see how it works. In this example, the code defines a new rule that every private function must be prefixed with \_.

```
(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        module.exports = mod();
    else if (typeof define == "function" && define.amd) // AMD
        return define([], mod);
    else // Plain browser env
        return mod();
})(function() {

    return {
        "no-private-function-without-_": {
            meta: {
                type: "problem",

                docs: {
                    description: "The private function must be prefixed with '_'",
                    category: "Possible Errors",
                    recommended: true,
                    url: ""
                },
                schema: [], // no options
                severity: 2,
                fixable: true
            },
            create: context = & gt; {
                return {
                    FunctionDeclaration: node = & gt; {

                        if (node.id.name[0] !== '_') {

                            context.report({
                                node: node.id,
                                message: \`Private

                                function must be prefixed with '_'\`,
                                fix: function(fixer) {
                                    return fixer.insertTextBefore(node.id, '_');
                                }
                            })
                        }
                    }
                };
            }
        }
    }
})
```
