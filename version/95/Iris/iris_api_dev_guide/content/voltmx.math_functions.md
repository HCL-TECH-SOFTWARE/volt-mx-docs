                            


math Namespace
==============

The math namespace contains the following API elements to help you include common mathematical tasks in your apps.

Functions
---------

The math namespace provides the following functions.


<details close markdown="block"><summary>math.floor</summary>

This API converts a float value to an integer. The converted integer value is always the integer part of the specified float number (number before the decimal).

### Syntax
```

Math.floor()
```
### Return Values

| Return Value | Description |
| --- | --- |
| integer \[Number\] | The return value is an integer |

### Example

```

onclickfloor: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.floor(a);
  alert("The converted value is " +b );
},
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>math.max</summary>

This API returns the maximum value among the arguments.

### Syntax
```

Math.max(x,y)
```

### Return Values
  
| Return Value | Description |
| --- | --- |
| Maximum Value \[Number\] | The return value is the maximum value among all the arguments |

### Example

```

onclickfloor: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.floor(a);
  alert("The converted value is " +b );
},
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>math.min</summary>

This API returns the minimum value among the arguments.

### Syntax
```

Math.min(x,y,x,...n)
```

### Return Values

| Return Value | Description |
| --- | --- |
| Minimum Value \[Number\] | The return value is the minimum value among all the arguments |

### Example

```
 
onclickmin: function(){
    var a=this.view.tbxNumber1.text;
    var b=this.view.tbxNumber2.text;
    var c=Math.min(a,b);
     alert("The minimum value is " +c); 
  },
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>math.pi</summary>

This API returns the value of pi.

> **_Note:_** _math.pi_ is not a function, but a property in math namespace.

### Syntax
```
 
Math.PI
```

### Input Parameters

None.

### Return Values

| Return Value | Description |
| --- | --- |
| value of pi \[Number\] | Value of pi is returned |

### Example

```

onclickpi: function(){
  var pi= Math.PI;  
  alert("The pi value is " +pi );
},
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>math.pow</summary>

This API raises the first parameter to the power of the second parameter and returns the result.

### Syntax
```

Math.pow(x,y)
```

### Return Values

| Return Value | Description |
| --- | --- |
| xy | Raises the first parameter to the power of the second parameter |

### Implementation Details

It is advisable to use the expression x^y as it is much faster when compared to this API.

### Example

```
 
onclickpow: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.pow(a,2);  
  alert("The Squared value is " +b );
    },
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>math.random</summary>

This API generates pseudo-random numbers which are uniformly distributed. This API generates a real number between 0 and 1.

### Syntax

Math.random()

### Return Values

  
| Return Value | Description |
| --- | --- |
| pseudo-random number \[Number\] | A pseudo-random number between the value 0 and 1 is generated |

### Example

```

onclickRandom: function(){
    var random= Math.random();
    alert("The random number is " +random);
  }
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>math.sqrt</summary>

This API returns the square root of the given number.

### Syntax

Math.sqrt()

### Return Values

| Return Value | Description |
| --- | --- |
| square root \[Number\] | The square root of the number is returned |
| nan (not a number) | This value is returned when the input parameter is a negative number |

### Example

```

onclicksqrt: function(){
  var a= this.view.tbxOperations.text;
  var b= Math.sqrt(a);  
  alert("The square root value is " +b );
},
```

### Platform Availability

Available on all platforms.

* * *

</details>
<details close markdown="block"><summary>Common Example</summary>

```

var ans = Math.max(10, 20);
var sqrt_num = Math.sqrt(4);
var round_off = Math.floor(2.3);
voltmx.print(Math.PI);
voltmx.print(Math.random);
voltmx.print(Math.pow(2, 3));
voltmx.print(Math.min(10, 20));
```

* * *
</details>
![](resources/prettify/onload.png)
