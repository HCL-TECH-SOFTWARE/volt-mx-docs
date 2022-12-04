                          


Prerequisites for Upgrade from Foundry 7.x to Volt MX Foundry 8.x
==================================================================

While upgrading from Foundry 7.x to Foundry V8.x. Follow these steps:

Remove the version\_rank column from the schema\_version table in the authglobaldb by passing the following queries before the upgrade.

*   **Oracle**
    
```
DROP INDEX "schema_version_ir_idx";
    DROP INDEX "schema_version_vr_idx";
    ALTER TABLE "schema_version" DROP constraint "schema_version_pk" drop index;
    ALTER TABLE "schema_version" DROP COLUMN "version_rank";
    ALTER TABLE "schema_version" modify("version" null);
    ALTER TABLE "schema_version" add constraint "schema_version_pk" primary key("installed_rank");
```
*   **MySQL**
    
```
ALTER TABLE schema_version DROP INDEX schema_version_vr_idx;
    ALTER TABLE schema_version DROP INDEX schema_version_ir_idx;
    ALTER TABLE schema_version DROP PRIMARY KEY;
    ALTER TABLE schema_version DROP COLUMN version_rank;
    ALTER TABLE schema_version CHANGE version version VARCHAR(50);
    ALTER TABLE schema_version ADD PRIMARY KEY (installed_rank);		
```
*   **MS SQL Server**
    
```
DROP INDEX [schema_version_ir_idx] ON [dbo.schema_version]
    GO
    DROP INDEX [schema_version_vr_idx] ON [dbo.schema_version]
    GO
    ALTER TABLE [dbo.schema_version] DROP CONSTRAINT [schema_version_pk]
    GO
    ALTER TABLE [dbo.schema_version] DROP COLUMN [version_rank]
    GO
    ALTER TABLE [dbo.schema_version] ADD CONSTRAINT [schema_version_pk] PRIMARY KEY CLUSTERED ([installed_rank])
    GO
    ALTER TABLE [dbo.schema_version] ALTER COLUMN version nvarchar(50) NULL
    GO
```
