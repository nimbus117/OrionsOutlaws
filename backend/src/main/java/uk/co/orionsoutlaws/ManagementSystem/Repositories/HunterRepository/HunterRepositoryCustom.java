package uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository;

import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;

import java.util.List;

public interface HunterRepositoryCustom {
    public List<Hunter> getAllBySearchString(String searchString);
}
