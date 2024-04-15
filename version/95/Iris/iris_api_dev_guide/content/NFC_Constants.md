                            
NFC Constants
=============

The voltmx.nfc namespace provides the below data type constants and error constants.

**Data Types constants**

Below are the constants to identify the type of data in the NFC tag.

| Data Type | Description |
| --- | --- |
| voltmx.nfc.DATATYPE_TEXT | Constant for the data MIME text/plain type.|
| voltmx.nfc.DATATYPE_URI | Constant for the data of type URI.|
| voltmx.nfc.DATATYPE_MEDIA| Constant for the data of type Mime Media.|
| voltmx.nfc.DATATYPE_UNKNOWN| Constant for the unrecognized data. The data type which is not supported will be mapped to this constant.|

## Error Constants


| Error | Description |
| --- | --- |
| voltmx.nfc.ERROR_TIMEOUT | This error will be thrown in error callback of scanTag Api when the no tag has been detected within the timeout.|
| voltmx.nfc.ERROR_USER_CANCELLED| Error constant to indicate that user has cancelled the current scan. This will be thrown in error callback during the call to scanTag API.|
| voltmx.nfc.ERROR_TERMINATED | Error constant to indicate that the read or write operation has been terminated due to the disconnection of the current NFC tag.|
| voltmx.nfc.ERROR_UNSUPPORTED_TAG | Error constant to indicate that the tag type is not supported.|
| voltmx.nfc.ERROR_NO_TAG | Error constant to indicate that the tag is not present for read or write operation.|
| voltmx.nfc.ERROR_READ_ONLY_TAG| Error constant to indicate that the current tag is read-only tag while performing the write operation on tag and data cannot be written to the tag.|
| voltmx.nfc.ERROR_TAG_CAPACITY_EXCEEDED| Error constant to indicate that the data cannot be written to the tag because the data size is more than the tag size limit.|
| voltmx.nfc.ERROR_DATA_TYPE_NOT_SUPPORTED| Error constant to indicate that the data attempted to write in the tag is not supported.|
| voltmx.nfc.ERROR_UNKNOWN| Unknown error during the scan, read or write operation.|

