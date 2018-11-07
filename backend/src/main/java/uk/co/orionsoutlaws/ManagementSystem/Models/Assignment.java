package uk.co.orionsoutlaws.ManagementSystem.Models;

import uk.co.orionsoutlaws.ManagementSystem.Components.Gmail;

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

    @ManyToOne
    @JoinColumn(name = "hunter_id", nullable = false)
    private Hunter hunter;

    @Column(name = "date_assigned")
    private LocalDateTime dateAssigned;

    public Assignment() {
    }

    public Assignment(Bounty bounty, Hunter hunter) {
        this.bounty = bounty;
        this.hunter = hunter;
        dateAssigned = LocalDateTime.now();
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

    public LocalDateTime getDateAssigned() {
        return dateAssigned;
    }

    public void setDateAssigned(LocalDateTime dateAssigned) {
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
