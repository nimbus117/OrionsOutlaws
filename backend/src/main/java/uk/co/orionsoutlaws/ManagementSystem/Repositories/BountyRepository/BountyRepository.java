package uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Projections.EmbedCustomer;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BountyRepository extends JpaRepository<Bounty, Long>, BountyRepositoryCustom {
}
