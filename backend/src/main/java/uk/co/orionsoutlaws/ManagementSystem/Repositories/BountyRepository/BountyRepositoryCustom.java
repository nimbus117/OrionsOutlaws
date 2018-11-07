package uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository;

import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;

import java.util.List;

public interface BountyRepositoryCustom {
    List<Bounty> getAllBySearchString(String searchString);
}
