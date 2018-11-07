package uk.co.orionsoutlaws.ManagementSystem.Repositories.CustomerRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;
import uk.co.orionsoutlaws.ManagementSystem.Projections.EmbedBounty;


@RepositoryRestResource(excerptProjection = EmbedBounty.class)
public interface CustomerRepository extends JpaRepository <Customer, Long> {

}
