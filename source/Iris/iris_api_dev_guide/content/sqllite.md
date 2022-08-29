                            

You are here: Appendix: SQLite

Appendix: SQLite
================

SQLite is a database engine packaged along with the native sdk. This section comprises the following:

*   [SQLite characteristics](#sqlite-characteristics)
*   [SQLite Column Types](#sqlite-column-types)
*   [Type Affinity](#type-affinity)
*   [Determination of Column Affinity](#determination-of-column-affinity)
*   [Affinity Name JavaScript Example](#affinity-name-example)
*   [Column Affinity Behavior JavaScript Example](#column-affinity-behavior-example)

SQLite Characteristics
----------------------

SQLite has the following characteristics:

*   It is embedded with the native sdk.
*   It is ACID-compliant (atomicity, consistency, isolation, durability).
*   It is weakly-typed i.e, any object can be stored in any column, regardless of how that column was declared. For example you can insert a string into a database column of type integer
*   It does not officially support foreign key constraints, although triggers can be used as a workaround.
*   It does not support RIGHT OUTER JOINs.

SQLite Column Types
-------------------

Most databases use strong, static column typing which means that the elements of a column can only hold values compatible with the defined type of a column. SQLite utilizes a dynamic typing technique known as manifest typing. For each row value, manifest typing records the value's type along with the value data. This allows nearly any element of any row to hold almost any type of value. In the strictest sense, SQLite supports only five concrete datatypes. These are known as storage classes, and represent the different ways SQLite stores data on disk.

Every value has one of these five native storage classes:

*   **NULL**: NULL is considered its own distinct type. A NULL type does not hold a value. Literal NULLs are represented by the keyword NULL.
*   **Integer**: A signed integer number. Integer values are variable length, being 1, 2, 3, 4, 6, or 8 bytes in length, depending on the minimum size required to hold the specific value. Integer have a range of 9,223,372,036,854,775,808 to +9,223,372, 036,854,775,807, or roughly 19 digits. Literal integers are represented by any bare series of numeric digits (without commas) that does not include a decimal point or exponent.
*   **REAL**: The value is a floating-point number, stored as an 8-byte value in the processor's native format. For most modern processors, this is an IEEE 754 double-precision number. Literal floating-point numbers are represented by any bare series of numeric digits that include a decimal point or exponent.
*   **Text**: A variable-length string, stored using the database encoding (UTF-8, UTF-16BE, or UTF-16LE). Literal text values are represented using character strings in single quotes.
*   **BLOB**: A length of raw bytes, copied exactly as provided. Literal BLOBs are represented as hexadecimal text strings preceded by an x. For example, the notation x'1234ABCD' represents a 4-byte BLOB. BLOB stands for Binary Large OBject. SQLite text and BLOB values are always variable length. The maximum size of a text or BLOB value is limited by a compile-time directive. The default limit is exactly one billion bytes, or slightly less than a full gigabyte. The maximum value for this directive is two gigabytes.

Type Affinity
-------------

The elements of most columns can hold any value type, the "type" of a column could be misleading. Rather than being an absolute type,like most databases, an SQLite column type (as defined in CREATE TABLE) becomes more of a suggestion than a hard and fast rule. This is known as type affinity, and essentially represents a desired category of type. Each type affinity has specific rules about what types of values it can store, and how different values will be converted when stored in that column. Generally, type affinity will cause conversion or migration of types only if it can be done without losing data or precision.

Each table column must have one of five type affinities:

*   **Text**: A column with a text affinity will only store values of type NULL, text, or BLOB. If you attempt to store a value with a numeric type (float or integer) it will be converted into a text representation before being stored as a text value type.
*   **Numeric**: A column with a numeric affinity will store any of the five types. Values with integer and float types, along with NULL and BLOB types, are stored without conversion. Any time a value with a text type is stored, an attempt is made to convert the value to a numeric type (integer or float). Assuming the conversion works, the value is stored in an appropriate numeric type. If the conversion fails, the text value is stored without any type of conversion.
*   **Integer**: A column with an integer affinity works essentially the same as a numeric affinity. The only difference is that any value with a float type that lacks a fractional component will be converted into an integer type.
*   **Real**: A column with REAL affinity behaves like a column with NUMERIC affinity except that it forces integer values into floating point representation.
*   **None**: A column with a none affinity has no preference over storage class. Each value is stored as the type provided, with no attempt to convert anything.

Determination Of Column Affinity
--------------------------------

Since type affinities are not part of the SQL standard, SQLite has a series of rules that attempt to map traditional column types to the most logical type affinity. The type affinity of a column is determined by the declared type of the column, according to the following rules (substring matches are case-insensitive):

1.  If no column type was given, then the column is given the none affinity.
2.  If the column type contains the substring "INT," then the column is given the integer affinity.
3.  If the column type contains any of the substrings "CHAR," "CLOB," or "TEXT," then the column is given the text affinity.
4.  If the column type contains the substring "BLOB," then the column is given the none affinity.
5.  If the column type contains any of the substrings "REAL," "FLOA," or "DOUB," then it is given the float real affinity.
6.  If no match is found, the column is assigned the numeric affinity.

As implied by the first rule, the column type is completely Optional. SQLite will allow you to create a table by simply naming the columns, such as CREATE TABLE t ( i, j,k);. You'll also notice that there isn't any specific list of column types that are recognized. You can use any column type you want, even making up your own names. This might sound a bit fast and loose for a typing system, but it works out quite well. By keying off specific substrings, rather than trying to define specific types, SQLite is able to handle SQL statements (and their database-specific types) from just about any database, all while doing a pretty good job of mapping the types to an appropriate affinity. Note that a declared type of "FLOATING POINT" would give INTEGER affinity, not REAL affinity, due to the "INT" at the end of "POINT". And the declared type of "STRING" has an affinity of NUMERIC, not TEXT.

Affinity Name Example
---------------------

The following table shows how many common datatype names from more traditional SQL implementations are converted into affinities by the six rules of the previous section.

  
| JavaScript Example Typenames From The CREATE TABLE Statement or CAST Expression | Resulting Affinity | Rule Used To Determine Affinity |
| --- | --- | --- |
| INT, INTEGER, TINYINT, SMALLINT, MEDIUMINT, BIGINT, UNSIGNED BIG INT, INT2, INT8 | INTEGER | 2 |
| CHARACTER(20), VARCHAR(255), VARYING CHARACTER(255), NCHAR(55), NATIVE CHARACTER(70), NVARCHAR(100), TEXT, CLOB | TEXT | 3 |
| BLOB _no datatype specified_ | NONE | 1,4 |
| REAL, DOUBLE, DOUBLE PRECISION, FLOAT | REAL | 5 |
| NUMERIC, DECIMAL(10,5) , BOOLEAN, DATE, DATETIME | NUMERIC | 6 |

Column Affinity Behavior Example
--------------------------------

<pre><code style="display:block;background-color:#eee;">
CREATE TABLE t1(
t TEXT, -- text affinity by rule 3
nu NUMERIC, -- numeric affinity by rule 6
i INTEGER, -- integer affinity by rule 2
r REAL, -- real affinity by rule 5
no BLOB -- no affinity by rule 1,4
);

-- Values stored as TEXT, INTEGER, INTEGER, REAL, TEXT.
INSERT INTO t1 VALUES('500.0', '500.0', '500.0', '500.0', '500.0');
SELECT typeof(t), typeof(nu), typeof(i), typeof(r), typeof(no) FROM t1;
4
text|integer|integer|real|text

-- Values stored as TEXT, INTEGER, INTEGER, REAL, REAL.
DELETE FROM t1;
INSERT INTO t1 VALUES(500.0, 500.0, 500.0, 500.0, 500.0);
SELECT typeof(t), typeof(nu), typeof(i), typeof(r), typeof(no) FROM t1;
text|integer|integer|real|real

-- Values stored as TEXT, INTEGER, INTEGER, REAL, INTEGER.
DELETE FROM t1;
INSERT INTO t1 VALUES(500, 500, 500, 500, 500);
SELECT typeof(t), typeof(nu), typeof(i), typeof(r), typeof(no) FROM t1;
text|integer|integer|real|integer

-- BLOBs are always stored as BLOBs regardless of column affinity.
DELETE FROM t1;
INSERT INTO t1 VALUES(x'0500', x'0500', x'0500', x'0500', x'0500');
SELECT typeof(t), typeof(nu), typeof(i), typeof(r), typeof(no) FROM t1;
blob|blob|blob|blob|blob

-- NULLs are also unaffected by affinity
DELETE FROM t1;
INSERT INTO t1 VALUES(NULL,NULL,NULL,NULL,NULL);
SELECT typeof(t), typeof(nu), typeof(i), typeof(r), typeof(no) FROM t1;
null|null|null|null|null
</code></pre>

> **_Note:_** Columns of type INTEGER PRIMARY KEY may only hold a 64-bit signed integer. An error will result if you try to put anything other than an integer into an INTEGER PRIMARY KEY column.

![](resources/prettify/onload.png)
