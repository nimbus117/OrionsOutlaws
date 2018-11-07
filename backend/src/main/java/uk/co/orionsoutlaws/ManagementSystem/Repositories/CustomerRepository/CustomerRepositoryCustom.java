package uk.co.orionsoutlaws.ManagementSystem.Repositories.CustomerRepository;

import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;

import java.util.List;

public interface CustomerRepositoryCustom {
    List<Customer> getAllBySearchString(String searchString);
}
