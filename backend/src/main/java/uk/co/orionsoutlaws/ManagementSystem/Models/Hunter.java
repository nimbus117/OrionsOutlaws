package uk.co.orionsoutlaws.ManagementSystem.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;
import uk.co.orionsoutlaws.ManagementSystem.Enums.HunterStatus;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "hunters")
public class Hunter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column(name ="email_address")
    private String emailAdress;

    @Column
    private int wallet;

    @Column(name = "image_path")
    private String imagePath;


    @Column
    private HunterStatus hunterStatus;

    @JsonIgnore
    @OneToMany(mappedBy = "hunter")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Assignment> assignments;

    public Hunter(String name, String emailAdress, int wallet, String imagePath, HunterStatus hunterStatus) {
        this.name = name;
        this.emailAdress = emailAdress;
        this.wallet = wallet;
        this.imagePath = imagePath;
        this.hunterStatus = hunterStatus;
        assignments = new ArrayList<>();
    }

    public Hunter() {
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

    public String getEmailAdress() {
        return emailAdress;
    }

    public void setEmailAdress(String emailAdress) {
        this.emailAdress = emailAdress;
    }

    public int getWallet() {
        return wallet;
    }

    public void setWallet(int wallet) {
        this.wallet = wallet;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public HunterStatus getHunterStatus() {
        return hunterStatus;
    }

    public void setHunterStatus(HunterStatus hunterStatus) {
        this.hunterStatus = hunterStatus;
    }

    public List<Assignment> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<Assignment> assignments) {
        this.assignments = assignments;
    }

    public void payHunter(int amount) {
        this.wallet += amount;
    }
}
