package uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class HunterRepositoryImpl implements HunterRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Hunter> getAllBySearchString(String searchString) {
        List<Hunter> results = null;
        String matchString = "%" + searchString + "%";

        Session session = entityManager.unwrap(Session.class);
        try {

            Criteria cr = session.createCriteria(Hunter.class);
            cr.add(Restrictions.like("name", matchString).ignoreCase());
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }
}
