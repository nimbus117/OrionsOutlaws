package uk.co.orionsoutlaws.ManagementSystem.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/customers")

public class CustomerController {
    @Autowired
    CustomerController customerRepository;


}
