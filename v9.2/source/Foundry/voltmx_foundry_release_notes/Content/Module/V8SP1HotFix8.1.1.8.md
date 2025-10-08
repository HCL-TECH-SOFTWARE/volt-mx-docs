                           

Volt MX  Foundry V8 SP1 Hotfix 8.1.1.8
=================================

Integration Server
------------------

### Fixed Issues

<table style="width: 100%;margin-left: 0;margin-right: auto;mc-table-style: url('../Resources/TableStyles/Basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1" style="width: 130px;"> <col class="TableStyle-Basic-Column-Column1" style="width: 704px;"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">Problem</td><td class="TableStyle-Basic-BodyD-Column1-Body1" style="font-weight: normal;">XPath evaluation takes a longer time when the size of the response payload is more than 4MB.</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">Solution</td><td class="TableStyle-Basic-BodyA-Column1-Body1" style="font-weight: normal;">Optimized the XPath evaluation by considering the required nodes rather than the complete DOM (Document Object Model). <b>Upgrade Instructions:</b> <b>For Cloud</b>: Raise a cloud upgrade request. <b>For On-Premises</b>: Follow the below steps:<ol>Download Volt MX Foundry 8.1.1.6 Integration Server artifacts from <a href="http://download.voltmx.com/onpremise/mobilefoundry/server/8.1.1.8/mf-integrationserver-8.1.1.8.zip">http://download.voltmx.com/onpremise/mobilefoundry/server/8.1.1.8/mf-integrationserver-8.1.1.8.zip</a>Extract the <span style="font-family: monospace;">mf-integrationserver-8.1.1.8.zip</span>, you will find the following war files in the middleware folder:admin.warservices.warmiddleware.warTake a backup of the existing war files and replace them with the downloaded war files in your Web (or) Application Server. Restart the server.</ol></td></tr></tbody></table>
