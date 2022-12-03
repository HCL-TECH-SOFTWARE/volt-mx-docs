                            


You are here: Custom Metrics APIs

Custom Metrics APIs for Volt MX Server
======================================

This section contains Javadoc information about classes. Classes define the API required for sending custom metrics from Volt MX Server. These classes are as follows:

*   [com.hcl.voltmx.middleware.metrics.VoltMXCustomMetricsDataSet](#comhclvoltmxmiddlewaremetricsvoltmxcustommetricsdataset)
*   [com.hcl.voltmx.middleware.metrics.VoltMXCustomMetrics](#comhclvoltmxmiddlewaremetricsvoltmxcustommetrics)
*   [MetricsException](#metricsexception)

### com.hcl.voltmx.middleware.metrics.VoltMXCustomMetricsDataSet
--------------------------------------------------------

The **com.hcl.voltmx.middleware.metrics.VoltMXCustomMetricsDataSet** class contains methods required for setting custom metrics. To enable custom metrics from server, the following methods are available.

*   [setMetricsString](#setmetricsstring)
*   [setMetricsBoolean](#setmetricsboolean)
*   [setMetricsLong](#setmetricslong)
*   [setMetricsDouble](#setmetricsdouble)
*   [setMetricsDate](#setmetricsdate)
*   [setMetricsTimestamp](#setmetricstimestamp)
*   [getMetricsMap](#getmetricsmap)
*   [get](#get)
*   [remove](#remove)
*   [toString](#tostring)

### setMetricsString

This method is used to set custom metrics for the data type, string.

#### Signature

```
public void setMetricsStrting(String key,String value)
```

throws MetricsException

#### Input Parameters

key

value

#### Return Values

Void

Can throw **metricsException**.

#### Java Example

```
metricsDataset.setMetricsString("Product Name", "Dell Vostro");
```

### setMetricsBoolean

This method is used to set custom metric for the data type, boolean. This method takes either true or false as values.

#### Signature

```
public void setMetricsBoolean(String key,boolean value)
```

#### Input Parameters

key

value

#### Return Values

Void

#### Java Example

```
metricsDataset.setMetricsBoolean("On Sale", true);
```

### setMetricsLong

This method is used to set custom metric for the data type, long.

#### Signature

```
public void setMetricsLong(String key,long value)
```

#### Input Parameters

key

value

#### Return Values

Void

#### Java Example

```
metricsDataset.setMetricsLong("Product ID", 395923);
```

### setMetricsDouble

This method is used to set custom metric for the data type, double.

#### Signature

```
public void setMetricsDouble(String key,double value)
```

#### Input Parameters:

key

value

#### Return Values

Void

#### Java Example

```
metricsDataset.setMetricsDouble("Product Price", 399.90);
```

### setMetricsDate

This method is used to set custom metric for the data type, date. It takes Date Object as input. The Data Object format should be **yyyy-MM-dd**'.

#### Signature

```
public void setMetricsDate(String key,Date date)
```

throws MetricsException

#### Input Parameters:

key - String

value - Date

#### Return Values

Void

Can throw metricsException.

#### Java Example

```
metricsDataset.setMetricsDate("On Sale Date", "2012-10-20");
```

### setMetricsDate

This method is used to set custom metric for the data type, date. The input takes date value as a string and the date value format should be **yyyy-MM-dd**.

#### Signature

```
public void setMetricsDate(String key,String val)
```

throws MetricsException

#### Input Parameters

key - String

value - String, Date value in string

#### Return Values

Void.

Can throw metricsException.

#### Java Example

```
metricsDataset.setMetricsDate("On Sale Date", "2012-10-20");
```

### setMetricsDate

This method is used for setting custom metric for the data type, date. This method takes date and format as a string and evaluates the date value with the given format. Input takes date value as a string and the date value format should be **yyyy-MM-dd**.

#### Signature

```
public void setMetricsDate(String key,String dateStr,String format)
```

throws MetricsException

#### Input Parameters:

key - key

value - date as string

format - date pattern

timezone - optional parameter

#### Return Values

Void

Can throw metricsException.

#### Java Example

```
metricsDataset.setMetricsDate("On Sale Date", "2012-10-10", "yyyy-MM-dd");
```

### setMetricsTimestamp

This method is used to set custom metric for the data type, timestamp. This method takes value as a string and evaluates with any one of the following formats:

*   yyyy-MM-dd hh:mm:ss
*   yyyy-mm-dd hh:mm:ssz
*   yyyy-mm-dd hh:mm:ss+hh:mm
*   yyyy-mm-dd hh:mm:ss-hh:mm

\<ts\>- timestamp in UTC. Timestamp value.

\<ts\>z - timestamp in UTC. Timestamp in above format + lower case z.

\<ts\>+hh:mm - timestamp in UTC + positive offset in hours and minutes, separated by colon.

\<ts\>-hh:mm -timestamp in UTC + negative offset in hours and minutes separated by colon.

> **_Note:_** \<ts\> = yyyy-mm-dd hh:mm:ss

For example,

"2014-04-15 13:02:55"

"2014-04-15 13:02:55z"

"2014-04-15 13:02:55+05:30"

"2014-04-15 13:02:55-05:30"

#### Signature

```
public void setMetricsTimestamp(String key,String value)
```

throws MetricsException

#### Input Parameters:

key

value

#### Return Values

Void

Can throw metricsException.

#### Java Example

```
metricsDataset.setMetricsTimestamp("Promo start time", "2012-10-10 09:00:00", "yyyy-MM-dd");
```

### setMetricsTimestamp

This method is used to set custom metric for the data type, timestamp. This method takes value as a string and evaluates with any one of the following time stamp patterns:

*   yyyy-MM-dd hh:mm:ss
*   yyyy-mm-dd hh:mm:ssz
*   yyyy-mm-dd hh:mm:ss+hh:mm
*   yyyy-mm-dd hh:mm:ss-hh:mm

#### Signature

```
public void setMetricsTimestamp(String key,String value,String pattern)
```

throws MetricsException

#### Input Parameters:

key

value

pattern

#### Return Values

Void

Can throw metricsException.

#### Java Example

```
metricsDataset.setMetricsTimestamp("Promo end time", "2012-10-10 17:00:00");
```

### getMetricsMap

This method returns custom metrics as a Hashmap.

#### Signature

```
protected Map<String,Object> getMetricsMap()
```

#### Input Parameters:

None

#### Return Values

Map

### get

This method retrieves value with the key in the current request scope.

#### Signature

```
public Object get(String key)
```

#### Input Parameters:

key

#### Return Values

If the key exists, returns value as an object. If the key does not exist, returns null.

### Remove

This method removes key and value from metrics in the current request scope.

#### Signature

```
public boolean remove(String key)
```

#### Input Parameters:

key

#### Return Values

True if successfully removed, otherwise returns false.

### toString

This method retrieves entire custom metrics as a json string.

#### Signature

```
public String toString()
```

Overrides:

toString in class Object

#### Return Values

None

### com.hcl.voltmx.middleware.metrics.VoltMXCustomMetrics
-------------------------------------------------

The **com.hcl.voltmx.middleware.metrics.VoltMXCustomMetrics** class contains methods required for adding and getting customMetrics. These methods can be added to Preprocessor and PostProcessor class by the App developer to send custom metrics. Custom metrics is converted into a JSON string before sending it to the back end for processing.

The com.hcl.voltmx.middleware.metrics.VoltMXCustomMetrics class has the following methods:

*   [addCustomMetrics](#addcustommetrics)
*   [getCustomMetrics](#getcustommetrics)
*   [getCustomMetricsJSON](#getcustommetricsjson)
*   [clearCustomMetrics](#clearcustommetrics)

### addCustomMetrics

This method takes VoltMXCustomMetricsDataSet object and adds as a json string.

#### Signature

```
public void addCustomMetrics(VoltMXCustomMetricsDataSet metricsDataSet)
```

#### Input Parameters

metricsDataSet

#### Return Values

None

### getCustomMetrics

This method returns all VoltMXCustomMetricsDataSet objects that were added using addCustomMetrics method.

#### Signature

```
public List<VoltMXCustomMetricsDataSet> getCustomMetrics()
```

throws MetricsException

#### Input Parameters

None

#### Return Values

Void

Can throw metricsException.

### getCustomMetricsJSON

This method returns custom metrics as a JSONArray string.

#### Signature

```
public String getCustomMetricsJSON()
```

#### Input Parameters

None

#### Return Values

String

### clearCustomMetrics

This method clears all custom metrics in the current request scope.

#### Signature

```
public boolean clearCustomMetrics()
```

#### Input Parameters

None

#### Return Values

None

MetricsException
----------------

**MetricsException** is a class that occurs if an exception takes place while processing metrics data. Various validation scenarios are as follows.

```
metrics_dateparse_error = The date string you provided does not match the format provided value as <format>. Not able to parse date.
```
```
metrics\_ts\_error = The timestamp string you provided does not match the default format of yyyy-mm-dd hh:mm:ss, yyyy-mm-dd hh:mm:ssz, yyyy-mm-dd hh:mm:ss+hh:mm, or yyyy-mm-dd hh:mm:ss-hh:mm. Not able to parse timestamp.
```
```
metrics\_tsparse\_error = The timestamp string you provided does not match the format provided value as <format>. Not able to parse timestamp.
```
```
metrics\_notnull\_error = Cannot be added to custom metrics as null is not a valid value.
```
```
metrics\_date\_null\_error = The date/timestamp value cannot be null.
```
```
metrics\_error = Please pass the valid value.
```
