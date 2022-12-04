                         


Data Provider
-------------

With the DataProvider interface, you can customize how you establish a connection and generate a response to a third party service. By reading the service definition, DataProvider forms the request metadata and then parses the response as per the service definition. The _DataProvider.execute()_ method is implemented such that after execution, the _DataControllerResponse object_ is populated with the response, CharacterEncoding, and status code.

### Sample Data Provider

The following is a sample DataProvider file.

```
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.hcl.voltmx.middleware.common.DataProvider;
import com.hcl.voltmx.middleware.controller.DataControllerRequest;
import com.hcl.voltmx.middleware.controller.DataControllerResponse;
import com.hcl.voltmx.middleware.exceptions.ConnectorException;
public class SampleDataProvider implements DataProvider {@
    Override
    public void execute(String arg0, DataControllerRequest arg1,
        DataControllerResponse DCresponse, String arg3, Map < String, String > arg4,
        List < File > arg5, HashMap arg6) throws ConnectorException {
        System.out.println(":::::::entered:::SAMPLE DATAPROVIDER:");
        System.out.println(":::::::DataController Request::::" + arg1.toString());
        System.out.println(":::::::DataController Request::::" + arg0.toString());
        //System.out.println(":::::::DataController Request::::"+arg3.toString());
        //Respose generation
        String xmlResult = "" +
            "<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
            "<soap:Body>" +
            "<AllPlayerNamesResponse xmlns:m=\"http://footballpool.dataaccess.eu\">" +
            "<AllPlayerNamesResult>" +
            "<tPlayerNames>" +
            "<iId>1434</iId>" +
            "<sName>Lucas Barrios</sName>" +
            "<sCountryName>Winner SF-II</sCountryName>" +
            "<sCountryFlag>http://footballpool.dataaccess.eu/images/flags/</sCountryFlag>" +
            "</tPlayerNames>" +
            "<tPlayerNames>" +
            "<iId>715</iId>" +
            "<sName>Alexander Frei</sName>" +
            "<sCountryName>Winner SF-II</sCountryName>" +
            "<sCountryFlag>http://footballpool.dataaccess.eu/images/flags/</sCountryFlag>" +
            "</tPlayerNames>" +
            "</AllPlayerNamesResult>" +
            "</AllPlayerNamesResponse>" +
            "</soap:Body>" +
            "</soap:Envelope>";
        //Data Response setting
        DCresponse.setResponse(xmlResult);

        DCresponse.setCharsetEncoding("UTF-8");

        DCresponse.setStatusCode(200);
        //System.out.println(":::::::DataController Request::::"+DCresponse.toString());
    }
}

```
