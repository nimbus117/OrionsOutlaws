package uk.co.orionsoutlaws.ManagementSystem.Listeners;

import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;

import javax.persistence.PreUpdate;
import java.util.List;

public class BountyListener {
    @PreUpdate
    public void transferFundsOnComplete(final Bounty reference) {
        if (reference.isCompleted()) {
            int reward = reference.getReward();
            reference.getCustomer().debitAccount(reward);
            List<Assignment> assignments = reference.getAssignments();
            int count = assignments.size();
            int share = reward / count;
            System.out.println(share);
            for (Assignment a : assignments) {
                Hunter hunter = a.getHunter();
                hunter.payHunter(share);
            }
        }
    }
}
