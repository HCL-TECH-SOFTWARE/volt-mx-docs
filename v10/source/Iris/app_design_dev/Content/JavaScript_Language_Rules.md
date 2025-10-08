                          

Volt MX  Application Design and Development Guidelines: [Application Development Guidelines](Application_Development_Guidelines_Overview.md) > Basics of JavaScript

Basics of JavaScript
--------------------

Following are the Basics of JavaScript.

### Function declaration within blocks

While most of the script engines support Function Declarations within blocks, it is not part of ECMAScript. Worse implementations are inconsistent with each other and with future ECMAScript proposals. ECMAScript only allows for Function Declarations in the root statement list of a script or function. Instead use a variable initialized with a Function Expression to define a function within a block.

```
**Example:**
if (x) {
  var foo = function() {}
}
Do not do as below:
if (x) {
  function foo() {}
}

```

If a widget is never shown on a specific platform, set the Render flag to false for that specific platform. Also, do not access that particular widget in that specific platform as it results in a null pointer exception.

### Standard features

For maximum portability and compatibility, always prefer standards features over non-standard features (for example: _string.charAt(3)_ over _string\[3\]_ and element access with DOM functions instead of using an application-specific shorthand).

### Closures

ECMAScript (JavaScript) allows inner functions; function definitions and function expressions that are inside the function bodies of other functions. And those inner functions are allowed access to all of the local variables, parameters and declared inner functions within their outer functions.

A closure is formed when one of those inner functions is made accessible outside of the function in which it was contained, so that it may be executed after the outer function has returned. At which point it still has access to the local variables, parameters and inner function declarations of its outer function. Those local variables, parameters and function declarations (initially) have the values that they had when the outer function returned and may be interacted with by the inner function.

One thing to keep in mind, however, is that a closure keeps a pointer to its enclosing scope. As a result, attaching a closure to a DOM element can create a circular reference and thus, a memory leak. For example, observe the following code:

```
function foo(element, a, b) {   
element.onclick = function() { /* uses a and b */ };   
}
```

The function closure keeps a reference to element, a, and b even if it never uses element. Since element also keeps a reference to the closure, we have a cycle that would not be cleaned up by garbage collection. In these situations, the code can be structured as follows:

```
function foo(element, a, b) {   
element.onclick = bar(a, b);   
}   
  
function bar(a, b) {   
return function() { /* uses a and b */ }   
}
```

### with() {}

Using “with” clouds the semantics of your program. Because the object of the “with” can have properties that collide with local variables, it can drastically change the meaning of your program. For example, check the following piece of code:

```
with (foo) {   
 var x = 3;   
 return x;  
}
```

The local variable x could be clobbered by a property of foo and perhaps it even has a setter, in which case assigning 3 could cause lots of other code to execute. Hence don't use with.

### for-in loop

Recommended only for iterating over keys in an object/map/hash.

The 'for-in' loops are often incorrectly used to loop over the elements in an Array. This is however very error prone because it does not loop from 0 to length - 1 but overall the present keys in the object and its prototype chain. Here are a few cases where it fails:

```
function printArray(arr) {
  for (var key in arr) {
    print(arr[key]);
  }
}

printArray([0,1,2,3]);  // This works.
var a = new Array(10);
printArray(a);  // This is wrong.
a = document.getElementsByTagName('*');
printArray(a);  // This is wrong.
a = [0,1,2,3];
a.buhu = 'wine';
printArray(a);  // This is wrong again.
a = new Array;
a[3] = 3;
printArray(a);  // This is wrong again.

```

Always use normal for loops when using arrays.

```
function printArray(arr) {   
var l = arr.length;   
for (var i = 0; i < l; i++) {   
print(arr[i]);   
 }   
}
```

### Associative Arrays

Never use Array as a map/hash/associative array.

Associative Arrays are not allowed... more precisely you are not allowed to use non-number indexes for arrays. If you need a map/hash use Object instead of Array in these cases because the features that you want are actually features of Object and not of Array. Array just happens to extend Object (like any other object in JAVASCRIPT and therefore you might as well have used Date, RegExp or String).

### Multiline string literals

The following code explains bad string literals.

```
var myString = 'A rather long string of English text, an error message \   
actually that just keeps going and going -- an error \   
message to make the Energizer bunny blush (right through \   
those Schwarzenegger shades)! Where was I? Oh yes, \   
you\'ve got an error and all the extraneous whitespace is \   
just gravy.  Have a nice day.'; 
```

The white space at the beginning of each line cannot be safely stripped at compile time; white space after the slash will result in tricky errors; and while most script engines support this, it is not part of ECMAScript.

Use string concatenation instead:

```
var myString = 'A rather long string of English text, an error message ' +   
'actually that just keeps going and going -- an error ' +   
'message to make the Energizer bunny blush (right through ' +   
'those Schwarzenegger shades)! Where was I? Oh yes, ' +   
'you\'ve got an error and all the extraneous whitespace is ' +   
'just gravy.  Have a nice day.';
```

### Array and Object literals

Use Array and Object literals instead of Array and Object constructors.

Array constructors are error-prone due to their arguments.

```
// Length is 3.   
var a1 = new Array(x1, x2, x3);   
// Length is 2.   
var a2 = new Array(x1, x2);   
// If x1 is a number and it is a natural number the length will be x1.   
// If x1 is a number but not a natural number this will throw an exception.   
// Otherwise the array will have one element with x1 as its value.   
var a3 = new Array(x1);   
// Length is 0.   
var a4 = new Array();
```

Because of this, if someone changes the code to pass one argument instead of two arguments, the array might not have the expected length. To avoid these kinds of cases, always use the more readable array literal.

```
var a = [x1, x2, x3];   
var a2 = [x1, x2];   
var a3 = [x1];   
var a4 = [];
```

Object constructors don't have the same problems, but for readability and consistency object literals should be used.

```
var o = new Object();   
var o2 = new Object();   
o2.a = 0;   
o2.b = 1;   
o2.c = 2;   
2['strange key'] = 3;
```

Should be written as:

```
var o = {};   
var o2 = {   
a: 0,   
b: 1,   
c: 2,   
'strange key': 3   
};
```

### Eval()

Do not use eval() function as it can lead to security issues in the form of code injections.
