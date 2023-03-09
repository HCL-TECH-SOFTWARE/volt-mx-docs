                          


Migrate a Project from an Earlier Version of Visualizer to Iris
------------------------------------------------------------------


Visualizer to Iris migration
-----------------------------

Users from Visualizer 8.4 classic, Viz 9.1, 9.2 can seamlessly migrate to Volt MX 9.5 and continue developing their custom apps. All of the existing projects from Quantum into Volt MX 9.5 and can build their apps for various custom channels.  


**Temenos Viz version**

The version of 9.2 Temenos Quantum Visualizer should not be greater than the latest fixpack delivered by HCL Volt MX. You can find this code level for 9.2 only here
[support hcltechsw com](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0094476)



Users using Visualizer need to install HCL Volt MX Iris from the download link [FNO Volt MX Iris Installer](https://id.hcltechsw.com/login/login.htm?fromURI=%2Fapp%2Fhclcust_licensedownloadportal_1%2Fexk8jshjulHatp2g8357%2Fsso%2Fsaml%3FSAMLRequest%3DhZLNbtswEIRfReDdoiT%252FgrANKFaMGkiLwGlz6MUgqFXFlCJZ7ip2376UjLTJxT0RGM5w9xtwjbIzXpQ9tfYIv3pASi6dsSjGiw3rgxVOokZhZQcoSImn8vODKNJM%252BODIKWfYu8jthESEQNpZlhyqDTstZvPpbJktdovV7L7ar%252FbLfZFnZVXe3S2z3fyeJc8QMPo3LMZjCLGHg0WSlqKUFcUkW0zyxdc8E7NMFNPvLKkig7aSxlRL5FFwruu0VYZAtXhOleu49J5HRfVIJ6MVWITana1xsvYukDSnnMPl5%252BoF25fefJLkix%252Br6XzJER0fQFmyczE07HGLWF1NQvUhxHOiOx%252FHaWLJ3gUFY%252FEb1kiDMOA9xob0K%252FxVyrfChmF9B%252BEJwmtc99vx4R9c5EDX0FkGSBsDFwvkPISxAhxpOzDGWe4d0hHQDzux7XrAEGOlYfvfN9b8vX19%252FTdfIu%252BhenQR6fcA1MkbdeRpPiq6njSjVfQWPSjdaKgjalzxvAsgKeJT6IHx7XXox%252F%252B5%252FQM%253D%26RelayState%3D%252Fflexnet%252Foperationsportal%252Flogon.do%253Fauthtype%253Dexternal%26SigAlg%3Dhttp%253A%252F%252Fwww.w3.org%252F2001%252F04%252Fxmldsig-more%2523rsa-sha256%26Signature%3DIP7zwsxW18AMw3uB3FICUVlVh%252BD%252BErbdygr1OsHzRn6UzHG%252BlI0%252FrKLS1FTm%252B3cT%252B9Nx40bI3tuvrYKYEqM5LJb0aXokG%252Fk322k4dv8VI%252BDOAgh2HRkPmadYudAObeuEywnWJZgoQPIAM4z1%252BjcdYIneygsGXAB0Hgz9DIn%252FmVYpPfNHI%252FY%252B8UvrCwzThZbnPmA92%252FyqWPE%252FsjEhm6b06Tj66MikbtLQUxoFjSmkWd%252FNuVJqj3Dtkbbo8PFiaBePHPLpq1zHCjmqduEROXO%252FdVl%252BrZPM514ek3ouPWMKbt97j2lNTFksC7sTCjVnpJdtoRNllseKrjyvMZco2BvSHQ%253D%253D)


**Re-import projects**

All the projects from Visualizer to be re-imported into Volt MX Iris. Existing Visualizer projects can be imported into Volt MX 9.5 Iris and user can continue developing/building for different channels.

**Deprecated widgets**

If the projects contain any of the deprecated widgets like HBox/VBox etc, they need to be taken care of manually before importing to Volt MX 9.5 Iris (same behaviour as Quantum 9.2 Visualizer
[Deprecated Widgets](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_widget_prog_guide/Content/Deprecated.md)

**Revised project configuration files**

When existing projects from Quantum Visualizer to Volt MX are imported to Iris there can be some modifications done (during the import process by Iris) on the project source files(json files in general), which need to be committed to the source control where the project source is maintained.


**X-Kony references to X-Voltmx**

If there are any references of X-Kony in any of the modules/actions, they should be manually changed to X-Voltmx. 

**App viewer**

HCL Volt MX released Volt MX specific app viewer to both Android & iOS stores. Customers to visualize their apps during development phase should get "HCL Volt MX Appviewer" from respective stores.