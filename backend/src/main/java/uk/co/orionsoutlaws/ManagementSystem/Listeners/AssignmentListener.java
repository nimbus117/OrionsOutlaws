package uk.co.orionsoutlaws.ManagementSystem.Listeners;

import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;

import javax.persistence.PrePersist;

public class AssignmentListener {
    @PrePersist
    public void sendNewAssignMentEmail(final Assignment reference) {
        reference.sendEmailNotification();
    }
}
