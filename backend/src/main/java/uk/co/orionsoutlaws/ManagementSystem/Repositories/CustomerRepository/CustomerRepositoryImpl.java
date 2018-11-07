package uk.co.orionsoutlaws.ManagementSystem.Repositories.CustomerRepository;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class CustomerRepositoryImpl implements CustomerRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Customer> getAllBySearchString(String searchString) {
        List<Customer> results = null;
        String matchString = "%" + searchString + "%";

        Session session = entityManager.unwrap(Session.class);
        try {

            Criteria cr = session.createCriteria(Customer.class);
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
