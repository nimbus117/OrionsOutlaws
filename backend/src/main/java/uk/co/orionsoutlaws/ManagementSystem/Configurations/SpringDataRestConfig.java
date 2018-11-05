package uk.co.orionsoutlaws.ManagementSystem.Configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;


@Configuration
    public class SpringDataRestConfig extends RepositoryRestConfigurerAdapter {


        @Override
        public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
            config.exposeIdsFor(Hunter.class, Bounty.class, Assignment.class, Customer.class);
        }
    }

