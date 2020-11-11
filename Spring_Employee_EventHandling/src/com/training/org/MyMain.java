package com.training.org;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class MyMain {
   public static void main(String[] args) {
      ConfigurableApplicationContext context = 
      new ClassPathXmlApplicationContext("ApplicationContext.xml");
      
      EmployeeController controller=context.getBean(EmployeeController.class);
      controller.createNewEmployee();    
   }
}