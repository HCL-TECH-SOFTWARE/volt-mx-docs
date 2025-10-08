                            

You are here: Live Tiles API

Live Tiles API
==============

Live Tiles enable you to represent an application as a tile on the home screen of your device. You can launch an application using a Live Tile. Besides the primary live tiles, you can also create a secondary live tile to pin specific content of an app and deep-link to specific page of the app.

Using the Live Tiles API, you can configure the primary and secondary tiles for an application. The Live Tiles API uses `voltmx.application Namespace` and the following API elements.

  
| Function | Description |
| --- | --- |
| [voltmx.application.setAppTile](voltmx.application_functions_livetiles.md#setappti) | Sets the data for an application tile. If the user chooses to pin the application tile, the data set is visible. |
| [voltmx.application.setSecondaryTile](voltmx.application_functions_livetiles.md#setsecon) | Enables you to create or update data for a secondary tile for an application. |
| [voltmx.application.removeSecondaryTile](voltmx.application_functions_livetiles.md#removese) | Enables you to remove and unpin a specified secondary tile which was created earlier. |

 

Set the data for a primary app tile by using the [voltmx.application.setAppTile](voltmx.application_functions_livetiles.md#setappti) function. To pin a frequently used area of an application, create a secondary app tile by using the [voltmx.application.setSecondaryTile](voltmx.application_functions_livetiles.md#setsecon) function. If you want to remove and unpin a secondary application tile, use the [voltmx.application.removeSecondaryTile](voltmx.application_functions_livetiles.md#removese) function.

![](resources/prettify/onload.png)
