package uk.co.orionsoutlaws.ManagementSystem.Projections;

import org.springframework.data.rest.core.config.Projection;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;

import java.util.List;

@Projection(name = "embedBounty", types = Customer.class)
public interface EmbedBounty {
    long getId();
    String getName();
    int getAccount();
    String getEmailAddress();
    List<Bounty> getBounties();

}
