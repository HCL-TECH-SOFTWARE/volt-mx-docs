                          

Volt MX  Application Design and Development Guidelines: [Application Development Guidelines](Application_Development_Guidelines_Overview.md) > Coding Standards

Coding Standards
----------------

*   JavaScript is case sensitive.

*   Do not use JavaScript reserved keywords for variable names.
*   Properties and methods:
    
    *   Private properties, variables, and methods (in files or classes) should be named with a trailing underscore.
    
    *   Protected properties, variables, and methods should be named without a trailing underscore (like public ones).
*   Method and function parameters:
    *   Optional function arguments start with opt\_.
    *   Functions that take a variable number of arguments should have the last argument named var\_args. You may not refer to var\_args in the code; use the arguments array.
    *   Optional and variable arguments can also be specified in @param annotations. Although either convention is acceptable to the compiler, using both together is preferred.
*   Getters and Setters
    *   Getters and Setters for properties are discouraged. However, if they are used, then getters must not change observable state.
```
/**   
    * WRONG -- Do NOT do this.   
    */   
    var foo = { get next() { return this.nextId++; } };   
    };
```

*   Accessory functions
    *   Getters and setters methods for properties are not required. However, if they are used, then getters must be named getFoo() and setters must be named setFoo(value). (For Boolean getters, isFoo() is also acceptable, and often sounds more natural.)

*   Namespaces
    
    *   JavaScript has no inherent packaging or name-spacing support.
    
    *   Global name conflicts are difficult to debug, and can cause intractable problems when two projects try to integrate. In order to make it possible to share common JavaScript code, we've adopted conventions to prevent collisions.
*   Use namespaces for global code
    *   Always prefix identifiers in the global scope with a unique pseudo namespace related to the project or library. If you are working on "Project Sloth", a reasonable pseudo namespace would be sloth.\*.
```
var sloth = {};   
    sloth.sleep = function() {   
    ...   
    };
```  
    Many JavaScript libraries, including the Closure library and Dojo toolkit give you high-level functions for declaring your namespaces. Be consistent about how you declare your namespaces.
```
goog.provide('sloth');   
    sloth.sleep = function() {   
    ...   
    };
```
*   Respect namespace ownership
    *   When choosing a child-namespace, make sure that the owners of the parent namespace know what you are doing. If you start a project that creates hats for sloths, make sure that the Sloth team knows that you're using sloth.hats.

*   Use different namespaces for external code and internal code
    
    *   External code is the code that comes from outside your codebase, and is compiled independently.
    
    *   Internal and external names should be kept strictly separate. If you're using an external library that makes things available in foo.hats.\*, your internal code should not define all its symbols in foo.hats.\*.
```
foo.require('foo.hats');   
    /**   
    * WRONG -- Do NOT do this.   
    * @constructor   
    * @extend {foo.hats.RoundHat}   
    */   
    foo.hats.BowlerHat = function() {   
    };
```*   If you need to define new APIs on an external namespace, you should explicitly export the public API functions, and only those functions.
    
    *   Your internal code should call the internal APIs by their internal names, for consistency and so that the compiler can optimize them better.
```
foo.provide('googleyhats.BowlerHat');   
    foo.require('foo.hats');   
    /**   
    * @constructor   
    * @extend {foo.hats.RoundHat}   
    */   
    googleyhats.BowlerHat = function() {   
    ...   
    };   
    goog.exportSymbol('foo.hats.BowlerHat', googleyhats.BowlerHat) 
```

*   Use different namespaces for external code and internal code
    
    *   External code is the code that comes from outside your codebase, and is compiled independently.
    
    *   Internal and external names should be kept strictly separate. If you're using an external library that makes things available in foo.hats.\*, your internal code should not define all its symbols in foo.hats.\*.
```
foo.require('foo.hats');   
    /**   
    * WRONG -- Do NOT do this.   
    * @constructor   
    * @extend {foo.hats.RoundHat}   
    */   
    foo.hats.BowlerHat = function() {   
    };
```*   If you need to define new APIs on an external namespace, you should explicitly export the public API functions, and only those functions.
    
    *   Your internal code should call the internal APIs by their internal names, for consistency and so that the compiler can optimize them better.
```
foo.provide('googleyhats.BowlerHat');   
    foo.require('foo.hats');   
    /**   
    * @constructor   
    * @extend {foo.hats.RoundHat}   
    */   
    googleyhats.BowlerHat = function() {   
    ...   
    };   
    goog.exportSymbol('foo.hats.BowlerHat', googleyhats.BowlerHat) 
```
*   Alias long type names to improve readability
    
    *   Use local aliases for fully-qualified types if doing so improves readability. The name of a local alias should match the last part of the type.
```
/**   
    * @constructor   
    */   
    some.long.namespace.MyClass = function() {   
    };   
    /**   
    * @param {some.long.namespace.MyClass} a   
    */   
    some.long.namespace.MyClass.staticHelper = function(a) {   
    ...   
      
    };   
    myapp.main = function() {   
    var MyClass = some.long.namespace.MyClass;   
    var staticHelper = some.long.namespace.MyClass.staticHelper;   
    staticHelper(new MyClass());   
    }; 
```
    
    *   Do not alias namespaces.
```
myapp.main = function() {   
    var namespace = some.long.namespace;   
    namespace.MyClass.staticHelper(new namespace.MyClass());   
    };   
    Avoid accessing properties of an aliased type, unless it is an enum.   
    /** @enum {string} */   
    some.long.namespace.Fruit = {   
    APPLE: 'a',   
    BANANA: 'b'  
    };   
    myapp.main = function() {   
    var Fruit = some.long.namespace.Fruit;  
    switch (fruit) {  
    case Fruit.APPLE:   
    ...   
    case Fruit.BANANA:   
    ...   
    }  
    };
```
```
myapp.main = function() {  
    var MyClass = some.long.namespace.MyClass;  
    MyClass.staticHelper(null);  
    };
```
    
    *   Never create aliases in the global scope. Use them only in function blocks.
*   Alias long type names to improve readability
    
    *   Use local aliases for fully-qualified types if doing so improves readability. The name of a local alias should match the last part of the type.
```
/**   
    * @constructor   
    */   
    some.long.namespace.MyClass = function() {   
    };   
    /**   
    * @param {some.long.namespace.MyClass} a   
    */   
    some.long.namespace.MyClass.staticHelper = function(a) {   
    ...   
      
    };   
    myapp.main = function() {   
    var MyClass = some.long.namespace.MyClass;   
    var staticHelper = some.long.namespace.MyClass.staticHelper;   
    staticHelper(new MyClass());   
    }; 
```
    
    *   Do not alias namespaces.
```
myapp.main = function() {   
    var namespace = some.long.namespace;   
    namespace.MyClass.staticHelper(new namespace.MyClass());   
    };   
    Avoid accessing properties of an aliased type, unless it is an enum.   
    /** @enum {string} */   
    some.long.namespace.Fruit = {   
    APPLE: 'a',   
    BANANA: 'b'  
    };   
    myapp.main = function() {   
    var Fruit = some.long.namespace.Fruit;  
    switch (fruit) {  
    case Fruit.APPLE:   
    ...   
    case Fruit.BANANA:   
    ...   
    }  
    };
```
```
myapp.main = function() {  
    var MyClass = some.long.namespace.MyClass;  
    MyClass.staticHelper(null);  
    };
```
    
    *   Never create aliases in the global scope. Use them only in function blocks.
*   Alias long type names to improve readability
    
    *   Use local aliases for fully-qualified types if doing so improves readability. The name of a local alias should match the last part of the type.
```
/**   
        * @constructor   
        */   
        some.long.namespace.MyClass = function() {   
        };   
        /**   
        * @param {some.long.namespace.MyClass} a   
        */   
        some.long.namespace.MyClass.staticHelper = function(a) {   
        ...   
          
        };   
        myapp.main = function() {   
        var MyClass = some.long.namespace.MyClass;   
        var staticHelper = some.long.namespace.MyClass.staticHelper;   
        staticHelper(new MyClass());   
        }; 
```
    
    *   Do not alias namespaces.
```
myapp.main = function() {   
    var namespace = some.long.namespace;   
    namespace.MyClass.staticHelper(new namespace.MyClass());   
    };   
    Avoid accessing properties of an aliased type, unless it is an enum.   
    /** @enum {string} */   
    some.long.namespace.Fruit = {   
    APPLE: 'a',   
    BANANA: 'b'  
    };   
    myapp.main = function() {   
    var Fruit = some.long.namespace.Fruit;  
    switch (fruit) {  
    case Fruit.APPLE:   
    ...   
    case Fruit.BANANA:   
    ...   
    }  
    };
```
```
myapp.main = function() {  
    var MyClass = some.long.namespace.MyClass;  
    MyClass.staticHelper(null);  
    };
```
    
    *   Never create aliases in the global scope. Use them only in function blocks.

Usage of Global and Local Variables
-----------------------------------

*   A variable declared (using var) within a JavaScript function becomes local and can only be accessed from within that function.
*   If you fail to specify “var”, the variable gets placed in the global context, potentially clobbering existing values. Also, if there is no declaration, it is hard to tell in what scope a variable lives (for example: It could be in the Document or Window just as easily as in the local scope). So always declare with “var”.
*   Use locals rather than globals whenever possible.
```
//var x = 0 – do not declare variables outside functions //unless required.   
function count(){   
var x = 0   
x = x + 1   
voltmx.print(x)   
}
```*   Global variables have application scope and they are not garbage collected unless explicitly cleared or application exits. Set global variables to null after the usage is completed (equivalent to “null” in Java)
```
gblTempVar = null;
```*   Widgets have a lot of metadata associated with them and consume a lot more memory to hold the same amount of data than a global variable.
    
    *   For example, voltmx.store.setItem and voltmx.store.getItem result in disk I/O and definitely has much more performance impact than accessing an in memory variable.
    
    *   Do not use setItem / getItem or hidden widgets as replacement for global variables.

*   Define all the global variables using the global variables section of services tab so that it is easier to keep a track of them.
    
    *   If you want to read a key from a JSON object more than once, it is better to read that key in a local variable then use it.
    
    *   Have a look at the following code snippet:
```
function validate(){   
if (v["headerdesc2"] ~= ""){   
innerTable["desc2"] = v["headerdesc2"]   
}else{   
innerTable["desc2"] = ""   
}   
}   
Better Approach –   
function validate(){   
var headerValue = v["headerdesc2"]   
if (headerValue ~= null and headerValue ~= "" ){   
innerTable["desc2"] = headerValue   
}else{   
innerTable["desc2"] = ""   
}   
}
```

File Names
----------

The following file naming conventions must be followed as best practices: 

*   File names should be all lowercase in order to avoid confusion on case-sensitive platforms.
*   File names should end in .js, and should contain no punctuation except for - or \_ (prefer - to \_).

### Readability

*   Use Javadoc-like style for commenting.
```
Example 1:  
         --[[  
               *****************************************************  
               *	Name    : validateAddress  
               *	Name    : validateAddress  
               *	Author  : Author name  
               *	Date    : 27/05/2010  
               *	Purpose : Deletes the session  
               *	Input	: @param id Session identification.  
               *****************************************************  
    –]  
      
    function delete (id)  
               remove (filename (id))  
    end
```
*   Provide a comment whenever a construct ends.  
```
for i,v in ipairs(t) do
        if type(v) == "string" then
          ...lots of code here...
        end -- if 
    end -- for  
    
```
*   Use proper indentation for debugging.
*   Use tab indentation for logical blocks.
```
function makeARemoteDeposit()
             local rdcStore = globalStore[ “RDC_STORE” ] 
             local amount = frmRDCRecap.txtrecapdepamtvalue.text
             if(string.len(amount) ==0) then
                       widget.setvisiblility(frmRDCRecap.hboxErrorlist,true)
                       return false
             end
    end
    
```
*   Write proper documentation and comments for each function/module and for typical logic in functions
*   All wrapped lines must be indented either left to the expression or above or indented four spaces, except for array and object initializations and passing anonymous functions.

> **_Note:_** Two space indentation must not be used.

```
function sample {   
someWonderfulHtml = '' +   
getEvenMoreHtml(val1,val2,   
evenMoreParams, 'a duck',   
true, 72,   
slightlyMoreMonkeys(0xfff)) +   
'';   
if (searchableColl(allYourStuff).contains(theStuffYouWant) &&   
!ambientNotification.isActive() &&   
(client.isAmbientSupported() ||   
client.alwaysTryAmbientAnyways())) {   
ambientNotification.activate();   
}   
}
```

### Common mistakes

Following is a list of common mistakes to take care of: 

*   Do not have cyclic references between JSON objects (Two JSON objects having reference to each other) as it makes garbage collection difficult.
*   Perform checks for null (for example: variables, mapping segment data etc) and empty string always before doing any operation on any user input data. This ensures that unexpected results / app crashes are avoided.
```
var myData = voltmx.store.getItem("friends")
    		if(myData ~= null) {  
    		// do something
    		}
```
```
local myData = ds.read("friends")
    		if(myData ~= nil) then
    			-- do something
    		end 
```
*   Do not just define strings to null. Initialize strings to either " or ''. If you initialize strings to null, JavaScript will treat it as string value "null" and all the operations performed on this variable will get effected.
```
var name;
var x = null;

x  = x + " Bentley Azure"
document.write(x); 	  //null Bentley Azure 
document.write(name);  // undefined 

results in 
null Bentley Azure
undefined

```*   When validating the input, be careful with blank spaces and trim the string.
    
```
var holdername = string.trim(frmmCrdtCard.txtcardname.text)
    	if holdername == null or holdername.length == 0 then
    	displayAlertMsg("","Please enter card holder name.",frmmCrdtCard)
    		clearCardNoAndSecCode(frmmCrdtCard)
    		return false
    	end 
    
```
    
    **Better approach**: _voltmx.string.trim()_ will delete the leading and trailing blank spaces of the string.
    
```
**var** holdername = string.trim(frmmCrdtCard.txtcardname.text)   
    **if** holdername == null or holdername.length == 0 then   
    displayAlertMsg("","Please enter card holder name.",frmmCrdtCard) clearCardNoAndSecCode(frmmCrdtCard)   
    return false   
    end
```
    
*   Have a look at this code snippet:
    
```
var termsDetails = {}
    	for(v in resulttable["termsset"]){
    		var innerTable = { termhdr = 
    			resulttable["termsset"][v].heading, 						para1 = resulttable["termsset"][v].p1}
    		if(resulttable["termsset"][v].p2 ~= ""){
    			innerTable["para2"] =   
    resulttable["termsset"][v].p2
    		}else{
    			innerTable["para2"] = ""
    		}
    .	
    .
    if (resulttable["termsset"][v].p16 ~= "" ){
    			innerTable["para16"] =   
    resulttable["termsset"][v].p16
    		}else{
    			innerTable["para16"] = ""
    		}
    		termsDetails.push(innerTable)
    	}
    	frmTktTermsCond. segTerms .setdata(termsDetails)
    
```
    
    **Better Approach**: For improving the readability and code compactness, you can write the above code as a lengthy one. Following is an example of lengthy code:
    
```
 var termsDetails = {};
    	var termSetList = resulttable["termsset"];
    	for (v in termSetList) {
    		var termSet = termSetList[v];
    		var innerTable = {termhdr = termSet.heading}
    		for (var idx=1; idx <= 16; idx++){
    			var rsKeyVal = termSet["p" .. idx]
    			var seguiKey = "para" .. idx
    			if(rsKeyVal ~= null and   
    rsKeyVal.length ~= 0) {
    				innerTable[seguiKey] = rsKeyVal
    			}else{
    				innerTable[seguiKey] = ""
    			}
    		}
    	termsDetails.insert(innerTable)
    	}
    	frmTktTermsCond.segTerms.setdata(termsDetails)	
    
```
*   If the function returns a value, do not have multiple return statements. Instead, build logic in such a way that you have only one return at the end of the function.
```
function getDeepLink(table){
    	var finalForm = frmLanding
    	if (table ~= null and table.length ~= 0){
          if (table.showscreen ~= null and table.showscreen ~= ""){ 
    		for (v in table) { 
    			if (v == "cars" ) {
    				finalForm = frmCarSearch
    		  	  }else{
    			  if (v == "hotels" )
    				finalForm = frmHotelSearch
    			  }
    		    }
    		}
    	 }
    	 return finalForm
     }
    
```
*   If you are calling _voltmx.os.toNumber()_, ensure that the string you are passing to the function is a number string that is "5", "3443". Else you will get run-time exceptions.
```
Example: voltmx.os.toNumber("34B") --> runtime exception   
voltmx.os.toNumber("55") --> 55 (number is obtained!)
```*   **Best practice**: To avoid run-time exceptions, always use the logic as explained in the following code: 
```
 var inputstring = "34B"   
 if(voltmx.string.isNumeric(inputstring){   
       var inputNum = voltmx.os.toNumber(inputstring);   
       -- now proceed with functionality   
 }
```*   Avoid writing code outside function blocks. Since Volt MX platform does not guarantee a specific order of loading JavaScript files, code written outside function blocks can lead to undefined errors.
    *   Write code in function blocks and invoke the same through one of the application initialization callbacks (preappinit , appinit etc).

*   The name of the form and the module file should not be the same. Since all the files are flattened when packed into a deployable binary, name clashes should be avoided.

### General Guidelines

The following general guidelines must be followed as best practices:

*   Write logically related functions (functions related to a specific functionality) within a single module. For example, write all the account summary related functions within accSummary.lua or accSummary.js module.
    
*   Do the necessary validations in Lua JavaScript before making network calls. For example, check if the text box has data before invoking a service.
    
*   Avoid code duplication by writing reusable functions which can be shared across modules/applications.
    
*   Write smaller functions (maximum with hundred lines of code) instead of huge monolithic spaghetti code.
    
*   Write generalized functions for the tasks that are repetitive across the application.
    
*   Avoid function calls or expressions (which give the same value in the loops) as these will slow down the loop.
    
```
**For example**:  
    a = 10; 
    b = 20; 
    i = 0; 
    while(true) 
    ...{ 
    ......if (sum(a,b) < i) 
    ......break; 
    ......i++; 
    ...} 
    //The right way is 
    a = 10; 
    b = 20; 
    c = sum(a,b) 
    i = 0; 
    while(true) 
    ...{ 
    ......if (c < i) 
    ......break; 
    ......i++; 
    ...}
```
*   As a good practice, keep the name of input and output variables in either lowercase or uppercase. Do not mix both the cases. As Lua JavaScript are case sensitive, this helps in making the development easy and also minimizes the errors.
