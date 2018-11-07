package uk.co.orionsoutlaws.ManagementSystem.Components;
import org.apache.commons.mail.*;

import java.net.URL;

public class Gmail {
    HtmlEmail email;

    public Gmail(String to, String subject, String body) throws Exception {

        String emailAdr = "orionsoutlaws@gmail.com";
        String password = "";

        email = new HtmlEmail();
        email.setHostName("smtp.googlemail.com");
        email.setSmtpPort(465);
        email.setAuthenticator(new DefaultAuthenticator(emailAdr, password));
        email.setSSLOnConnect(true);
        email.setFrom(emailAdr);
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
