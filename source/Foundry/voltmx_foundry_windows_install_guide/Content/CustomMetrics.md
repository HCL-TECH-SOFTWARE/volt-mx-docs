                         


Upgrading Custom Metrics Component
==================================

The **custom\_metrics\_master** table has been made independent by adding the application related columns in the **custom\_metrics\_master** table itself for better performance. These columns are available as part of the **middleware\_requests** table.To have the data for these new fields for the existing records in the **custom\_metrics\_master** table, migrate the data from the **middleware\_requests** table. To do so, follow these steps.

1.  Connect to reports DB and check if the **MIGRATEDATATOCMMTABLE** procedure is created. It is created when Volt MX Foundry V9 is installed or an older version of Volt MX Foundry is upgraded to V9.
2.  Execute the following procedures for the Foundry database that you have installed.
    
    *   **MySQL**: CALL MIGRATEDATATOCMMTABLE();
    *   **Oracle**: EXECUTE MIGRATEDATATOCMMTABLE;
    *   **SQL Server**: EXEC MIGRATEDATATOCMMTABLE;
    
    This procedure migrates the data for new columns of existing rows in the custom\_metrics\_master table. To do this, it creates an intermediate table.
    
3.  After the procedure is executed for one of the rows in the custom\_metrics\_master table, check if the data is populated for the new columns.

> **_Note:_** You can now create the custom reports by pulling the columns from the Custom Metrics view itself. If you do not migrate the data, the data for the new columns will not be available.

For more information about custom metrics, refer to [Custom Metrics](../../../Foundry/custom_metrics_and_reports/Content/CustomMetrics.md#custom-metrics).
