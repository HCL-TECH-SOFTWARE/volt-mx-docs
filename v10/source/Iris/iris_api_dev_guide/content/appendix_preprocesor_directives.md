                            

You are here: Appendix: Preprocessor Directives

Appendix: Preprocessor Directives
=================================

Preprocessor directives are handled by the compiler's preprocessor. before the program is actually compiled for the target platform. Preprocessor directives start with the pound sign (#), and all preprocessor directives are processed before anything else in the source file. After the substitutions are performed, the program is bundled with the native executable.

Preprocessor directives are stored in comments, so they all begin with the symbols //#. For example, you can define an identifier as follows.

//# define MY\_IDENTIFIER

Because Volt MX Iris sees statements starting with the characters //# as preprocessor directives, it will report an error if your source code uses the characters //# as something other than a preprocessor directive.

Volt MX  Iris supports the following preprocessor directives.

| Preprocessor Directive | Description |
| --- | --- |
| //#define <identifier> | Defines an identifier. |
| //#else | Provides an alternative block of code to parse on #ifdef or #ifndef statements. |
| //#elseif | Conditionally provides an alternative block of code to parse on on #ifdef or #ifndef statements. |
| //#endif | Closes a code block on #ifdef or #ifndef statements. |
| //#ifdef <identifier> | Tests whether an identifier is defined. If it is, the statements in the code block are parsed until either an #endif, #else, or #elseif directive is reached. If the identifier is not found and there is no #else or #elseif, no statements in the code block are parsed. |
| //#ifndef <identifier> | Tests whether an identifier is not defined. If it is not, the statements in the code block are parsed until either an #endif, #else, or #elseif directive is reached. If the identifier is found and there is no #else or #elseif, no statements in the code block are parsed. |
| //#undef <identifier> | Removes an identifier that was previously defined, If the identifier is not found, this statement does nothing. |

![](resources/prettify/onload.png)
