package uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;

@Repository
public interface HunterRepository extends JpaRepository<Hunter, Long> {
}
