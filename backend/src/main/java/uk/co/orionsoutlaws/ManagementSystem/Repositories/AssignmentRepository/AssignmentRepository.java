package uk.co.orionsoutlaws.ManagementSystem.Repositories.AssignmentRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;
import uk.co.orionsoutlaws.ManagementSystem.Projections.EmbedHunter;

@RepositoryRestResource(excerptProjection = EmbedHunter.class)
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
