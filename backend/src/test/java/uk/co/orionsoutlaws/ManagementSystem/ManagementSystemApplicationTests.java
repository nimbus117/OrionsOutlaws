package uk.co.orionsoutlaws.ManagementSystem;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import uk.co.orionsoutlaws.ManagementSystem.Enums.HunterStatus;
import uk.co.orionsoutlaws.ManagementSystem.Components.Gmail;

import uk.co.orionsoutlaws.ManagementSystem.Models.Assignment;
import uk.co.orionsoutlaws.ManagementSystem.Models.Bounty;
import uk.co.orionsoutlaws.ManagementSystem.Models.Customer;
import uk.co.orionsoutlaws.ManagementSystem.Models.Hunter;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.AssignmentRepository.AssignmentRepository;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.BountyRepository.BountyRepository;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.CustomerRepository.CustomerRepository;
import uk.co.orionsoutlaws.ManagementSystem.Repositories.HunterRepository.HunterRepository;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ManagementSystemApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	BountyRepository bountyRepository;

	@Autowired
	HunterRepository hunterRepository;

	@Autowired
	AssignmentRepository assignmentRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void testAllClasses() {
	    Customer customer = new Customer("Jaba", 1000, "jaba@hutt.tat");
		customerRepository.save(customer);

	    Bounty bounty = new Bounty("Han", 100, -1.976460, 281.694603, "", customer);
	    bountyRepository.save(bounty);

	    Hunter hunter = new Hunter("Dog", "dog@wehuntu.com", 100, "", HunterStatus.ALIVE);
	    hunterRepository.save(hunter);

		Assignment assignment = new Assignment(bounty, hunter,"Nov 07 2018");
		assignmentRepository.save(assignment);
	}

	@Test
	public void hunterHasHunterStatus(){
		Hunter hunter = new Hunter("Dog", "dog@wehuntyou.com", 100, "",HunterStatus.ALIVE);
		assertEquals(HunterStatus.ALIVE, hunter.getHunterStatus());
	}

	@Test
	public void bountyHasTargetName(){
		Customer customer = new Customer("Jaba", 1000, "jaba@hutt.tat");
		Bounty bounty = new Bounty("Han", 100, -1.976460, 281.694603, "", customer);
		assertEquals("Han", bounty.getTargetName());

	}
}
