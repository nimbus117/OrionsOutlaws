package uk.co.orionsoutlaws.ManagementSystem;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ManagementSystemApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Test
	public void testAllClasses() {
	    Customer customer = new Customer("Jaba", 1000, "jaba@hutt.tat");
	}
}
