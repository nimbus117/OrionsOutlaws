package uk.co.orionsoutlaws.ManagementSystem.Controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository.HunterRepository;

import java.util.List;


@RestController
@RequestMapping(value="/hunters")
public class HunterController {

    @Autowired
    HunterRepository hunterRepository;

    @GetMapping(value = "/search/{searchString}")
    public List<Hunter> getAllBySearchString(@PathVariable String searchString) {
        return hunterRepository.getAllBySearchString(searchString);
    }

  }



