package uk.co.orionsoutlaws.ManagementSystem.Models;

import uk.co.orionsoutlaws.ManagementSystem.Components.Gmail;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "assignments")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "bounty_id", nullable = false)
    private Bounty bounty;

    @JsonIgnoreProperties("hunters")
    @ManyToOne
    @JoinColumn(name = "hunter_id", nullable = false)
    private Hunter hunter;

    @Column(name = "date_assigned")
    private String dateAssigned;

    public Assignment() {
    }

    public Assignment(Bounty bounty, Hunter hunter, String dateAssigned) {
        this.bounty = bounty;
        this.hunter = hunter;
        this.dateAssigned = dateAssigned;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Bounty getBounty() {
        return bounty;
    }

    public void setBounty(Bounty bounty) {
        this.bounty = bounty;
    }

    public Hunter getHunter() {
        return hunter;
    }

    public void setHunter(Hunter hunter) {
        this.hunter = hunter;
    }

    public String getDateAssigned() {
        return dateAssigned;
    }

    public void setDateAssigned(String dateAssigned) {
        this.dateAssigned = dateAssigned;
    }

    public void sendEmailNotification() {
        String subject = "New Assignment: " + bounty.getTargetName();
        String body = "<p>For the attention of " + hunter.getName() + "</p>" +
                "<ul>" +
                    "<li>Target Name: " + bounty.getTargetName() + "</li>" +
                    "<li>Reward: " + bounty.getReward() + "</li>" +
                    "<li>Last Known Location: " + bounty.getLastKnownLocation() + "</li>" +
                    "<li>Customer: " + bounty.getCustomer().getName() + "</li>" +
                    "<li>Customer Email: " + bounty.getCustomer().getEmailAddress() + "</li>" +
                "</ul>";

        try {
            Gmail email = new Gmail(hunter.getEmailAdress(), subject, body);
            email.send();
        } catch (java.lang.Exception ex) {System.out.println("Gmail error: " + ex.getMessage());}
    }
}
