package uk.co.orionsoutlaws.ManagementSystem.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository.HunterRepository;


@RestController
@RequestMapping(value="/hunters")

public class HunterController {

    @Autowired
    HunterRepository hunterRepository;
}
