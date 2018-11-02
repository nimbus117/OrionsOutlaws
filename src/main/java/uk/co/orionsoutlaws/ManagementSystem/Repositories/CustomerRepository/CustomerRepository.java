package uk.co.orionsoutlaws.ManagementSystem.Repositories.CustomerRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository <Customer, Long> {

}
