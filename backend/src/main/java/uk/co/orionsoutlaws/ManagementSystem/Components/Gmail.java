package uk.co.orionsoutlaws.ManagementSystem.Components;
import org.apache.commons.mail.*;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.URL;
import java.util.ArrayList;

public class Gmail {
    HtmlEmail email;
    ArrayList<String> credentials = new ArrayList<>();

    public Gmail(String to, String subject, String body) throws Exception {

        String fileName = "email_credentials.txt";
        String line = null;

        try {
            FileReader fileReader = new FileReader(fileName);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            while ((line = bufferedReader.readLine()) != null) {
                credentials.add(line);
            }
        } catch (  FileNotFoundException exception) {
            exception.printStackTrace();
        }

        email = new HtmlEmail();
        email.setHostName("smtp.googlemail.com");
        email.setSmtpPort(465);
        email.setAuthenticator(new DefaultAuthenticator(credentials.get(0), credentials.get(1)));
        email.setSSLOnConnect(true);
        email.setFrom(credentials.get(0));
        email.setSubject(subject);
        email.addTo(to);

        URL url = new URL("http://www.nimbus117.co.uk/other/orionsoutlaws/logo.png");
        String cid = email.embed(url, "Orion's Outlaws Logo");
        String msg = "<html><img src=\"cid:"+cid+"\"height=\"80\" width=\"auto\" >"+body+"</html>";
        email.setHtmlMsg(msg);
    }

    public void send() throws Exception{
        email.send();
    }
}
