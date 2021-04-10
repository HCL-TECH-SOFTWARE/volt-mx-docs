---
layout: "documentation"
category: "voltmx_foundry_linux_install_guide"
---
                          


Prerequisites to Upgrade from Foundry 7.x to Foundry 8.x
======================================================

While upgrading from Foundry 7.x to Foundry V8.x, follow these steps:

Remove the version\_rank column from the schema\_version table in the idglobaldb by passing the following queries before the upgrade.

*   **Oracle**
    
    {% highlight voltMx %}DROP INDEX "schema_version_ir_idx";
    DROP INDEX "schema_version_vr_idx";
    ALTER TABLE "schema_version" DROP constraint "schema_version_pk" drop index;
    ALTER TABLE "schema_version" DROP COLUMN "version_rank";
    ALTER TABLE "schema_version" modify("version" null);
    ALTER TABLE "schema_version" add constraint "schema_version_pk" primary key("installed_rank");
    {% endhighlight %}
*   **MySQL**
    
    {% highlight voltMx %}ALTER TABLE schema_version DROP INDEX schema_version_vr_idx;
    ALTER TABLE schema_version DROP INDEX schema_version_ir_idx;
    ALTER TABLE schema_version DROP PRIMARY KEY;
    ALTER TABLE schema_version DROP COLUMN version_rank;
    ALTER TABLE schema_version CHANGE version version VARCHAR(50);
    ALTER TABLE schema_version ADD PRIMARY KEY (installed_rank);		
    {% endhighlight %}
*   **MS SQL Server**
    
    {% highlight voltMx %}DROP INDEX [schema_version_ir_idx] ON [dbo.schema_version]
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
    {% endhighlight %}
