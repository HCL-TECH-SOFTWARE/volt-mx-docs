---
layout: "documentation"
category: "voltmx_foundry_release_notes"
---
                           

Volt MX  Foundry Installer Hotfix 9.0.0.2 (On-Premises)
=====================================================

Known Issues
------------

*   While installing the Volt MX Foundry Single Container Solution using Docker the following flyway error is displayed on the console.{% highlight voltMx %}java.sql.SQLSyntaxErrorException: (conn=741447) Table '<console_db_name>.flyway_schema_history' doesn't exist
    {% endhighlight %}
    
    This error can be ignored as it does not cause any issues in the functionality of the product.
