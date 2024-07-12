                             

Support for ODATA Methods (substringof and indexof)
---------------------------------------------------

A URL with a $filter query (for RDBMS/ business adapter) identifies a subset of the entries from the collection of entries identified by the expression of the URL. The subset is determined by selecting only the entries that satisfy the predicate expression specified by the query option.

```
 $filter=expression
```

The expression language that is used in $filter operators are limited across business adapters. The values can be strings enclosed in single quotes, numbers, Boolean values (such as true or false), and nested values.

$filter for RDBMS connector supports the following string methods.

*  [ODATA V2 Methods](#odata-v2-methods)


*  [ODATA V4 Methods](#odata-v4-methods)

ODATA V2 Methods
---------

### startswith


String function to filters all the records where column starts with provided String.

**API Usage**

```
 $filter=startswith('colname', 'expression') eq [true|false]
```

Example

Below syntax filters all the records where `lastname` startswith `doe`.

```
 startswith('lastname','doe') eq true
```

### endswith


String function to filters all the records where column endswith provided String.

API Usage

```
 $filter=endswith('colname', 'expression') eq [true|false]
```

Example

Below syntax filters all the records where `firstname` endswith `hon`.

```
 endswith('firstname', 'hon') eq true
```

### substringof


String function to filters all the records where column contains provided String.

API Usage

```
 $filter=substringof('colname', 'expression') eq [true|false]
```

Example

Below syntax filters all the records where `email` contains `gmail`.

```
 substringof('email', 'gmail') eq true
```

### tolower


String filters all the records by matching the exact value with all the values present in the column after changing them to lower case.

API Usage

```
 $filter=tolower('colname') eq 'value'
```

Example

Below syntax filters all the records where `name` equals to  `alfreds futterkiste`.

```
 $filter=tolower('name') eq 'alfreds futterkiste'
```

### toupper


String function filters all the records by matching the exact value with all the values present in the column after changing them to uppercase.

API Usage

```
 $filter=toupper('colname') eq 'value'
```

Example

Below syntax filters all the records where `name` equals to  `ALFREDS FUTTERKISTE`.

```
 $filter=toupper('name') eq 'ALFREDS FUTTERKISTE'
```

ODATA V4 Methods
---------

### in


**A**. 'in' with eq(equals) verb:

This 'in' operator filter all the records that equals the list of values in the column of the table.
Syntax rules are comma separated list of values without spaces and enclosed in parentheses(). Don't use square brackets [] or braces {}.

API Usage

```
 $filter=colname eq in ('value','value')
```

Example

```
 Name eq in ('Milk','Cheese')
```

**B**. 'in' with ne(not equals) verb:

This 'in' operator filter all the records that not equals the list of values in the column of the table.
Syntax rules are comma separated list of values without spaces and enclosed in parentheses(). Don't use square brackets [] or braces {}.

API Usage

```
 $filter=colname ne in ('value','value')
```

Example

```
 Name ne in ('butter','bread')
```
**C**. 'in' with possible pair values verb:
 
This 'in' operator checks whether a pair of columns has one of several possible pair values. If a pair matches the values in the column, gets the respone.Syntax rules are comma separated list of values without spaces and enclosed in square brackets []. Max 30 colnames are allowed.
 
API Usage
 
```
$filter=[colname,colname,..] in [['value1','value3'],['value1','value4'],..]
```
 
Example
 
```
[FirstName,LastName] in [['John','Doe'],['Jane','Smith']]
```


### startswith


String function to filter all the records where column startswith provided String. 

API Usage

```
 $filter=startswith('colname','expression')
```

Example

Below syntax filter all the records where `firstname` startswith `nas`.

```
 startswith('firstname','nas')
```

### not startswith


String function to filter all the records where column does not startswith provided String.

API Usage

```
 $filter=not startswith('colname','expression')
```

Example

Below syntax filter all the records where `lastname` does not startswith `daq`.

```
 not startswith('lastname','daq')
```

### endswith


String function to filter all the records where column endswith provided String.

API Usage

```
 $filter=endswith('colname','expression')
```

Example

Below syntax filter all the records where `firstname` endswith `nse`.

```
 endswith('firstname','nse')
```

### not endswith

String function to filter all the records where column does not endswith provided String.

API Usage

```
 $filter=not endswith('colname','expression')
```

Example

Below syntax filter all the records where `firstname` does not endswith `dow`.

```
 not endswith('firstname','dow')
```

### length

Length function to fillter all the records where column lenght equals to value. 

API Usage

```
 $filter=length(colname) eq value
```

Example

Below syntax filter all the records where `Name` lenght eq `19`.

```
 length(Name) eq 19
```

### Date and Time


Date-time filters operates on date type column value. Column would contain date/time data. Filters will compare date/time fields to provided value and returns matched records 

###  year 

API Usage

```
 $filter=year('colname') eq value
```

Example

Below syntax filter all the records where `year(BirthDate)` eq `1999`.

```
 year(BirthDate) eq 1999
```

### month

API Usage

```
 $filter=month('colname') eq value
```

Example

Below syntax filter all the records where `month(BirthDate)` eq `5`.

```
 month(BirthDate) eq 5
```
### day

API Usage

```
 $filter=day('colname') eq value
```

Example

Below syntax filter all the records where `day(BirthDate)` eq `5`.

```
 DAY(BirthDate) eq 5
```

### hour

API Usage

```
 $filter=hour('colname') eq value
```

Example

Below syntax filter all the records where `hour(BirthDate)` eq `10`.

```
 hour(BirthDate) eq 10
```
### minute

API Usage

```
 $filter=minute('colname') eq value
```

Example

Below syntax filter all the records where `minute(BirthDate)` eq `45`.

```
 minute(BirthDate) eq 45
```

### second

API Usage

```
 $filter=secound('colname') eq value
```

Example

Below syntax filter all the records where `second(BirthDate)` eq `40`.

```
 second(BirthDate) eq 40
```

### Data comparison filters 


 Filters to list all the recodrs where post rounding the column value is equal to provided number.

### Ceiling 
 
  API Usage

```
 $filter=ceiling(colname) eq value
```

Example

Below syntax filter all the records where `ceiling` rounds upto `32`.
 
### Floor
 
 API Usage

```
 $filter=ceiling(colname) eq value
```

Example

Below syntax filter all the records where `ceiling` rounds upto `32`.


### Round 

API Usage

```
 $filter=round(colname) eq value
```

Example

Below syntax filter all the records where `round` rounds to  `32`.

```
 round(Freight) eq 32
```

### trim


Trim function to filter all the records where column name with leading and trailing whitespace.


API Usage

```
 $filter=trim(colname) eq colname
```

Example

Below syntax filter all the records where trim gives CompanyName without leading or trailing whitespace characters.

```
 trim(CompanyName) eq CompanyName
```

### indexof

The indexof function to fillter all the records where parameter values returns the zero-based character position of the first occurrence of the second parameter in the first parameter, or -1 if the first parameter does not contain the second parameter. 

API Usage

```
 $filter=indexof('colname','expression') eq value
```

Example

Below syntax filters all the records where `Name` containing 'lfreds' starting at the second character.

```
 indexof(Name,'lfreds') eq 1
```
Note : As of now it is supported only in the MySQL and in the Oracle backend databases.


