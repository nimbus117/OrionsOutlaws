package uk.co.orionsoutlaws.ManagementSystem.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository.BountyRepository;

import java.util.List;

@RestController
@RequestMapping(value = "/bounties")
public class BountyController {
    @Autowired
    BountyRepository bountyRepository;

    @GetMapping(value = "/search/{searchString}")
    public List<Bounty> getAllBySearchString(@PathVariable String searchString) {
        return bountyRepository.getAllBySearchString(searchString);
    }
}
