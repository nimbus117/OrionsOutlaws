package uk.co.orionsoutlaws.ManagementSystem.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.CustomerRepository.CustomerRepository;

import java.util.List;

@RestController
@RequestMapping(value="/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/search/{searchString}")
    public List<Customer> getAllBySearchString(@PathVariable String searchString) {
        return customerRepository.getAllBySearchString(searchString);
    }



}
