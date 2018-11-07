package uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class BountyRepositoryImpl implements BountyRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Bounty> getAllBySearchString(String searchString) {
        List<Bounty> results = null;
        String matchString = "%" + searchString + "%";

        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Bounty.class);
            cr.add(Restrictions.like("targetName", matchString));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }
}
