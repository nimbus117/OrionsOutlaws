package uk.co.orionsoutlaws.ManagementSystem.Components;
import org.apache.commons.mail.*;

public class Gmail {
    Email email;

    public Gmail(String to, String subject, String body) throws Exception {

        email = new SimpleEmail();
        email.setHostName("smtp.googlemail.com");
        email.setSmtpPort(465);
        email.setAuthenticator(new DefaultAuthenticator("", ""));
        email.setSSLOnConnect(true);
        email.setFrom("");
        email.setSubject(subject);
        email.setMsg(body);
        email.addTo(to);
    }

    public void send() throws Exception{
        email.send();
    }
}
