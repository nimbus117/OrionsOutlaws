package uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;

@RepositoryRestResource
public interface HunterRepository extends JpaRepository<Hunter, Long>, HunterRepositoryCustom{
}
