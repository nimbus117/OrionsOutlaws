package uk.co.orionsoutlaws.ManagementSystem.Projections;

import org.springframework.data.rest.core.config.Projection;
import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;

import java.time.LocalDateTime;

@Projection(name="embedHunter", types= Assignment.class)
public interface EmbedHunter {

    long getId();
    Hunter getHunter();
    Bounty getBounty();
    LocalDateTime getDateAssigned();

}
