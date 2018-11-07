package uk.co.orionsoutlaws.ManagementSystem.Projections;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;
import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;

import java.util.List;

@Projection(name="embedCustomers", types = Bounty.class)
public interface EmbedCustomer {
    long getId();
    String getTargetName();
    int getReward();
    boolean getCompleted();
    double getLastKnownLat();
    double getLastKnownLong();
    String getImagePath();
    Customer getCustomer();
    List<Assignment> getAssignments();


}
