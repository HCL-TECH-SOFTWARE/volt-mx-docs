---
layout: "documentation"
category: "voltmx_sync_cloud_and_on_premises_design_guidelines"
---
                           

Using Filters
=============

You may use client filters to ensure that the data downloaded to the device is optimized for the user.

Every user often deals with few thousands of records while the enterprise backend stores millions of records of all users. In such a scenario, it is important that every device has only the data the user is interested in.

Client filters enable the Volt MX Foundry Sync Server to filter data specific to the user before sending the response. For Database DataSource, these filters form the part of WHERE clauses and UNION queries when selecting the data for each table. For other DataSources, these are passed as input parameters to the Service Endpoints.

Similarly we have server filters. You may use server filters to filter the data coming to Sync server from backend.
