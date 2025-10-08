                             

Support for ODATA Methods (substringof and indexof)
---------------------------------------------------

A URL with a $filter query (for RDBMS/ business adapter) identifies a subset of the entries from the collection of entries identified by the expression of the URL. The subset is determined by selecting only the entries that satisfy the predicate expression specified by the query option.

```
 $filter=expression
```

The expression language that is used in $filter operators are limited across business adapters. The values can be strings enclosed in single quotes, numbers, Boolean values (such as true or false), and nested values.

$filter for RDBMS connector supports the following string methods.

*  [ODATA V2 Methods](#odata-v2-methods)



ODATA V2 Methods
-----------------

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



