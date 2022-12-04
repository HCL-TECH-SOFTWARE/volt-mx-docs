                             

Support for ODATA Methods (substringof and indexof)
---------------------------------------------------

A URL with a $filter query (for RDBMS/ business adapter) identifies a subset of the entries from the collection of entries identified by the expression of the URL. The subset is determined by selecting only the entries that satisfy the predicate expression specified by the query option.

```
 $filter=expression
```

The expression language that is used in $filter operators are limited across business adapters. The values can be strings enclosed in single quotes, numbers, Boolean values (such as true or false), and nested values.

$filter for RDBMS connector supports the following string methods from release V8 SP4.

*   startswith
*   endswith
*   tolower
*   toupper
*   substringof

### startswith

This string function filters all the records that starts with doe in the lastname column of the table.

**API Usage**

```
 $filter=startswith('colname', 'expression') eq [true|false]
```

Example

```
 startswith('lastname','doe') eq true
```

endswith
--------

This string function filters all the records that ends with `hon` in `firstname` column of the table.

API Usage

```
 $filter=endswith('colname', 'expression') eq [true|false]
```

Example

```
 endswith('firstname', 'hon') eq true
```

substringof
-----------

This string function filters all the records that contain with `gmail` in `email` column of the table.

API Usage

```
 $filter=substringof('colname', 'expression') eq [true|false]
```

Example

```
 substringof('email', 'gmail') eq true
```

tolower
-------

The string filters all the records by matching the exact value with all the values present in the column after changing them to lower case.

API Usage

```
 $filter=tolower('colname') eq 'value'
```

Example

```
 $filter=tolower('name') eq 'alfreds futterkiste'
```

toupper
-------

This string function filters all the records by matching the exact value with all the values present in the column after changing them to uppercase.

API Usage

```
 $filter=toupper('colname') eq 'value'
```

Example

```
 $filter=toupper('name') eq 'ALFREDS FUTTERKISTE'
```
