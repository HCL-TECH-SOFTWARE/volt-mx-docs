---
title: Moving from Temenos Quantum to HCL Volt MX 
layout: documentation
has_children: false
order: 2
---

Moving from Temenos Quantum to HCL Volt MX
==========================================

Learn about key differences between Quantum and Volt MX, including revised naming, differences in component support, migration advice, and more.

Unsupported or Deprecated Features
----------------------------------

- This release of Volt MX does not support the creation of Windows native apps.
- Volt MX Legacy Sync is deprecated in favor of Offline Objects. You cannot use Legacy Sync when creating a new app, but it is still supported in existing apps. For more information, see [Using Volt MX Legacy Sync with Foundry](Foundry/voltmx_legacy_sync_with_foundry/Content/legacy_sync_with_foundry.html).

Migration
---------

Product names, API namespaces, and other terms have changed.

  - If you are migrating an application to Volt MX, you must replace any references to Kony headers in Fabric (now Foundry) services, pre/post-processor, or custom code with Voltmx headers. (Replace "X-Kony-" with "X-Voltmx-".)
  - Recompile apps that use the native function SDK APIs for iOS, Android, and Windows to use the new SDK with updated Voltmx headers.
  - If the app is using pre/post compile tasks and if those are using “kony” namespaced js files, they should be updated with “voltmx” namespaced js files.

Refer to the following table for details.

**Product names**

<table>
  <thead>
    <tr>
      <th>New Terms (Volt MX)</th>
      <th>Old Terms (Temenos)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Volt MX</td>
      <td>Quantum</td>
    </tr>
    <tr>
      <td>Iris</td>
      <td>Visualizer</td>
    </tr>
    <tr>
      <td>Foundry</td>
      <td>Mobile Fabric</td>
    </tr>
    <tr>
      <td>Foundry</td>
      <td>Fabric</td>
    </tr>
    <tr>
      <td>Flare</td>
      <td>Nitro</td>
    </tr>
  </tbody>
</table>

**API namespaces**

This table shows the new Volt MX APIs namespaces versus the old Temenos APIs namespaces, along with examples. The new namespaces are used throughout this documentation; however, if you use a Temenos branded version older than 9.2, you must keep using the old Temenos namespaces.

<table>
  <thead>
    <tr>
      <th>New Namespace (Volt MX)</th>
      <th>Old Namespace (Temenos)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>voltmx</td>
      <td>kony</td>
    </tr>
    <tr>
      <td>com.hcl.voltmx</td>
      <td>com.konylabs</td>
    </tr>
    <tr>
      <td>com.hcl.voltmx</td>
      <td>com.kony</td>
    </tr>
    <tr>
      <td>com.voltmx \*</td>
      <td>com.kony</td>
    </tr>
    <tr>
      <td>VMXMetricsService</td>
      <td>KNYMetricsService</td>
    </tr>
    <tr>
      <td>VMXFoundry</td>
      <td>KNYMobileFabric</td>
    </tr>
    <tr>
      <td>voltmx.sdk.VMXObjSvc</td>
      <td>kony.sdk.KNYObjSvc</td>
    </tr>
    <tr>
      <td>voltmx.sdk.VMXObj</td>
      <td>kony.sdk.KNYObj</td>
    </tr>
    <tr>
      <td>VoltMXApp</td>
      <td>KonyApp</td>
    </tr>
    <tr>
      <td>VoltMXUtil</td>
      <td>KonyUtil</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td> </td>
    </tr>
    <tr>
      <td>voltmx.ui.Alert</td>
      <td>kony.ui.Alert</td>
    </tr>
    <tr>
      <td>voltmx.os.deviceInfo</td>
      <td>kony.os.deviceInfo</td>
    </tr>
    <tr>
      <td>com.hcl.voltmx.middleware.api</td>
      <td>com.konylabs.middleware.api</td>
    </tr>
    <tr>
      <td>com.hcl.voltmx.middleware.dataobject</td>
      <td>com.konylabs.middleware.dataobject</td>
    </tr>
    <tr>
      <td>VMXFoundry.OfflineObjects.drop</td>
      <td>KNYMobileFabric.OfflineObjects.drop</td>
    </tr>
  </tbody>
</table>

\* Beacon API. Requires rebuilding/conversion to NFI

**Other**

This table shows new Volt MX terms versus old Temenos terms.

<table>
  <thead>
    <tr>
      <th>New Terms (Volt MX)</th>
      <th>Old Terms (Temenos)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>vfcli.jar</td>
      <td>mfcli.jar</td>
    </tr>
    <tr>
      <td>iris</td>
      <td>viz</td>
    </tr>
    <tr>
      <td>Iris</td>
      <td>Viz</td>
    </tr>
  </tbody>
</table>

