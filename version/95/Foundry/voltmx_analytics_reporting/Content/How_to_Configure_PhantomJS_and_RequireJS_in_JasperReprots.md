How to Configure Chromium JS Engine to Download Reports in PDF Format - JasperReports Server V 7.9.2                         
-----------------------------------------------------------------------------------------------------
If you are using JasperReports Server V7.9.2, to download/export reports in PDF format, you must need to configure the Chromium JavaScript engine into the JasperReports Server.

Specify the chrome.path configuration property in the location for Chromium JavaScript engine to support the Chromium configuration.

Example Path: chrome.path = C:\\\Program <br> 
Files(x86)\\\Google\\\Chrome\\\Application\\\chrome.exe

For information about configuring Chromium in JasperReports Server, see the TIBCO JasperReports Server Administrator Guide ([https://community.jaspersoft.com/documentation/tibco-jasperreports-server-community-project-installation-guide/v780/selecting-0](https://community.jaspersoft.com/documentation/tibco-jasperreports-server-community-project-installation-guide/v780/selecting-0))



How to Configure PhantomJS and RequireJS in JasperReports Server
-----------------------------------------------------------------------

If you are using JasperReports Server V7.1, to download reports in PDF format, you must need to configure the PhantomJS and RequireJS in to the JasperReports Server.

1.  Download version of PhantomJS and RequireJS script files in to the Jasper Installation location.
    *   Download PhantomJS from [http://phantomjs.org/download](http://phantomjs.org/download). (phantomjs-2.1.1)
    *   Download RequireJS from [https://requirejs.org/docs/download.html](https://requirejs.org/docs/download.html) (require.js 2.3.6)
2.  Navigate to the `<Jasper Installation Location>\apache-tomcat\webapps\jasperserver-pro\WEB-INF\classes` and open the `jasperreports.properties` file.
3.  In the `jasperreports.properties`, do the following:
    *   replace the `%%PHANTOMJS_PATH%` with the phantomjs path
    *   replace the `%%REQUIREJS_PATH%` with the requirejs path
