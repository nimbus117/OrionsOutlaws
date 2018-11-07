package uk.co.orionsoutlaws.ManagementSystem.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository.BountyRepository;


@RestController
@RequestMapping(value = "/bounties")
public class BountyController {
    @Autowired
    BountyRepository bountyRepository;
}
