                           

Volt MX  Foundry V8 SP1 Hotfix 8.1.1.6
=================================

Integration Server
------------------

#### Fixed Issues

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 130px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 704px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Problem</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">Null pointer exception in mapper, when null arguments are passed to JavaScript mapper function. Admin log generation issue. App publish failure issue when vast service def is published. (Async publish is broken due to third party (spring) jar upgrades).</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Solution</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: normal;">Added support for Volt MX Foundry 8.1 Integration Server upgrade installation. <b>Upgrade Instructions:</b> <b>For Cloud</b>: Raise a cloud upgrade request. <b>For On-Premises</b>: Follow the below steps:<ol>Download Volt MX Foundry 8.1.1.6 Integration Server artifacts from <a href="http://download.voltmx.com/onpremise/mobilefoundry/server/8.1.1.6/mf-integrationserver-8.1.1.6.zip">http://download.voltmx.com/onpremise/mobilefoundry/server/8.1.1.6/mf-integrationserver-8.1.1.6.zip</a>Extract the <span style="font-family: monospace;">mf-integrationserver-8.1.1.6.zip</span>, you will find the following war files in the middleware folder:admin.warservices.warmiddleware.warTake a backup of existing war files and replace them with the downloaded war files in your Web (or) Application Server. Restart the server.</ol></td></tr></tbody></table>
