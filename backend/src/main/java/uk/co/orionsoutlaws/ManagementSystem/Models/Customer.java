package uk.co.orionsoutlaws.ManagementSystem.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private int account;

    @Column(name = "email_address")
    private String emailAddress;

    @JsonIgnoreProperties("customers")
    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private List<Bounty> bounties;

    public Customer(String name, int account, String emailAddress) {
        this.name = name;
        this.account = account;
        this.emailAddress = emailAddress;
        bounties = new ArrayList<>();
    }

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAccount() {
        return account;
    }

    public void setAccount(int account) {
        this.account = account;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public List<Bounty> getBounties() {
        return bounties;
    }

    public void setBounties(ArrayList<Bounty> bounties) {
        this.bounties = bounties;
    }

    public void debitAccount(int amount) {
        this.account -= amount;
    }
}
