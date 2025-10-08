                         


How to Configure PhantomJS and RequireJS in to the JasperReports Server
-----------------------------------------------------------------------

If you are using JasperReports Server V7.1, to download reports in PDF format, you must need to configure the PhantomJS and RequireJS in to the JasperReports Server.

1.  Download version of PhantomJS and RequireJS script files in to the Jasper Installation location.
    *   Download PhantomJS from [http://phantomjs.org/download](http://phantomjs.org/download). (phantomjs-2.1.1)
    *   Download RequireJS from [https://requirejs.org/docs/download.html](https://requirejs.org/docs/download.md) (require.js 2.3.6)
2.  Navigate to the `<Jasper Installation Location>\apache-tomcat\webapps\jasperserver-pro\WEB-INF\classes` and open the `jasperreports.properties` file.
3.  In the `jasperreports.properties`, do the following:
    *   replace the `%%PHANTOMJS_PATH%` with the phantomjs path
    *   replace the `%%REQUIREJS_PATH%` with the requirejs path
