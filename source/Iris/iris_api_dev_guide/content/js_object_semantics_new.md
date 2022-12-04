                               

JavaScript Object Semantics
===========================

> **_Note:_** The Objects and Widgets that Volt MX Iris APIs create and return, acts as first class JavaScript object with the exceptions mentioned in the section.

Limitations mentioned in this section are not applicable for the user defined custom JavaScript objects. But it is important to be aware of these limitations in order to write a uniform, consistent codebase, which treats custom JavaScript objects and JavaScript objects that Volt MX API returns similarly.

This section covers the following topics:

*   [Prototype Inheritance](#prototype-inheritance)
*   [Enumerating Properties](#enumerating-properties)
*   [Associative arrays](#associative-arrays)
*   [Functions Inside the JavaScript Object](#functions-inside-the-javascript-object)
*   [Adding Properties and Methods Dynamically](#adding-properties-and-methods-dynamically)
*   [toString() method](#method)
*   [this keyword](#keyword)
*   [Instanceof and typeof](#typeof)
*   [Unsupported Methods](#unsupported-methods)
*   [Unsupported Properties](#unsupported-properties)

Prototype Inheritance
---------------------

JavaScript's prototype mechanism simplifies the process of adding custom properties and methods to all instances of an object.

```
**function Person(firstname,lastname,age,eyecolor)**  
{
	 this.firstname=firstname;  
	this.lastname=lastname;  
	this.age=age;  
	this.eyecolor=eyecolor;  
}  
**//create an instance object of person  
**var myFather=new Person("John","Doe",50,"blue");  
**//custom property added to person object**  
myFather.profession="CEO";
```

In the above code, "profession" is a custom property added to _person_ object instance and with this way the property exists only for that instance of the object. For other instances of the person object, say `myMother.profession` would return as "undefined".

```
myFather.prototype.profession="CEO";
```

In the above code, the keyword "prototype" just before the custom property will make the property exist in all instances of an object.

> **_Note:_** None of the objects and widgets that Volt MX Iris APIs return can be inherited through prototypical inheritance. Doing so may lead to unexpected results and behavior is undefined.

However the custom JavaScript objects that developers write are expected to have support for prototype property, allowing developers to use inheritance for the custom JavaScript objects that they author.

Enumerating Properties
----------------------

Any JavaScript object can be iterated for its properties as below:

```
var obj = { key1: 12, key2: "Jim"};  
for (prop in obj) 
{  
	alert(prop + ' = ' + obj[prop]);  
}
```

Any of the objects and widgets that Volt MX JavaScript APIs return can be iterated as above. When container widgets such as box, form, scrollbox are iterated, it should list out not only its own properties but also list out the child widgets like they were directly the properties of the container widgets.

Associative arrays
------------------

In JavaScript, objects are also associative arrays (or hashes). For example, in the below code:

```
var obj = { key1: 12, key2: "Jim"};  
obj.key1 // is one way to access the property  
obj['key1'] //is associative array of accessing the properties.
```

Properties of the any of the objects and widgets that Volt MX JavaScript APIs return can be accessed in both the above styles.

Functions Inside the JavaScript Object
--------------------------------------

JavaScript Objects is a collection of properties. These properties can either be primitive data types, other objects, or functions.

```
var obj = { key1: 12, key2: "Tom",  
doubleKey1 : function()  
 {  
 "return key1 * 2"  
 }  
};
```

Now doubleKey1 is a function that can be invoked as:

```
obj.doubleKey1();
```

Developers can have the functions inside the JavaScript object as needed and even pass it to the Volt MX Iris APIs as demanded and required by the Volt MX Iris APIs.

Adding Properties and Methods Dynamically
-----------------------------------------

> **_Note:_** All the JavaScript objects that are created or returned from Volt MX Iris APIs do not allow dynamically adding, removing properties and methods. If the developer chooses to do so, the behavior is undefined.

Dynamically adding, removing properties and methods are possible only for the user defined custom JavaScript Objects.

For example, the below code will work only for user defined JavaScript objects, but not for the objects that Volt MX API returns.

```
var obj = { key1: 12, key2: "Tom"};  
delete obj.key1;
```

_toString()_ method
-------------------

All the JavaScript Objects created and returned through Volt MX Iris APIs will respond to _toString_ method by returning the stringfied JSON representation of the object.

> **_Note:_** If JavaScript Object returned by Volt MX Iris APIs contain any methods, then both the method and corresponding key are ignored in having them in the JSON representation returned by the _toString_.

User defined JavaScript objects will have default implementation of _toString_ method unless the _toString_ method is redefined to return the strings appropriately.

_this_ keyword
--------------

JavaScript has a different concept of what the special name **this** refers to than most other programming languages do. **this** always refers to the "owner" of the function we're executing, or rather, to the object that a function is a method of. In general, the object bound to this in the current scope is determined by how the current function was called, it can't be set by assignment during execution, and it can be different each time the function is called.

The link below helps you to understand how _"this"_ behaves in different contexts.

[https://developer.mozilla.org/en/JavaScript/Reference/Operators/this](https://developer.mozilla.org/en/JavaScript/Reference/Operators/this)

Volt MX  platform ensures that in the event callbacks or event handlers, "**this**" always refers to the widget that raised the event. In the example below "**this**" is referring to the button (with id foo) as it is the button that would be calling the onClick callback when the event occurs.

```
function handleClick(button)
{
    print(this.id); // will print foo as "this" is referring to the button that raised the event.
}

var button = new voltmx.ui.Button({"id":"foo",onClick=handleClick},{}, {});

```

_instanceof_, typeof
--------------------

_instanceof_ operator should work on all custom JSObjects and also the objects that platform returns.

_typeof_ operator will not distinguish custom voltmx objects and when used, it returns only an object.

For example, the following is a valid statement:

```
function testInstanceOfandTypeOf()
{
    var color1 = new String("green");
    var res1 = color1 instanceof String; // returns true  because instance of checks for the object type
    var color2 = "coral"; //no type specified
    var res2 =color2 instanceof String; // returns false (color2 is not a String object)
    var res3 =  typeof color1; //typeof returns a string representing the type of its operand.
    var res4 = typeof typeof color1 ;
    alert("res1 :"+res1 +"\n res2 :"+res2 +"\nres3 :" +res3 + "\nres4 :" + res4);
}

```

Unsupported Methods
-------------------

The following methods of the JavaScript Object are not supported by the JavaScript objects that are created and returned by Volt MX Iris APIs.

*   toLocaleString
*   valueOf
*   hasOwnProperty
*   isPrototypeOf

> **_Note:_** User defined JavaScript objects will still respond to the above, but it is recommended not to use these methods for a uniform cross-platform behavior.

Unsupported Properties
----------------------

Following properties of the JavaScript Object are not supported by the JavaScript objects that are created and returned by Volt MX Iris APIs.

*   constructor

> **_Note:_** User defined JavaScript objects will still respond to the above, but it is recommended not to use these methods for a uniform cross-platform behavior.

![](resources/prettify/onload.png)
