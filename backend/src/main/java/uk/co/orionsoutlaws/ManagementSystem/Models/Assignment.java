package uk.co.orionsoutlaws.ManagementSystem.Models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

    @JsonIgnoreProperties("hunters")
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
}
