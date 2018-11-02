package uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;

@Repository
public interface BountyRepository extends JpaRepository<Bounty, Long> {
}
