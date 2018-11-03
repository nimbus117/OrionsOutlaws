package uk.co.orionsoutlaws.ManagementSystem.Models;


import uk.co.orionsoutlaws.ManagementSystem.Components.Gmail;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

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

    public void sendEmailNotification() {
        String subject = "New Target: " + bounty.getTargetName();
        String body = String.format("For the attention of %s\n\nTarget Name: %s\nReward: %s\nCustomer: %s\nLast Known Location: %s;",
                hunter.getName(),
                bounty.getTargetName(),
                bounty.getReward(),
                bounty.getCustomer().getName(),
                bounty.getLastKnownLocation());

        try {
            Gmail email = new Gmail(hunter.getEmailAdress(), subject, body);
            email.send();
        } catch (java.lang.Exception ex) {System.out.println("Gmail error");}
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
}