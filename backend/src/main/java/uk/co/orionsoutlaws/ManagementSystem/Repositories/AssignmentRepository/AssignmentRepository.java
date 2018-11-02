package uk.co.orionsoutlaws.ManagementSystem.Repositories.AssignmentRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
