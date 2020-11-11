import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class MainApp {
   public static void main(String[] args) {
      ConfigurableApplicationContext context = 
      new ClassPathXmlApplicationContext("ApplicationContext.xml");
      // Let us raise a start event.
      CustomEventPublisher cvp = (CustomEventPublisher)context.getBean("customEventPublisher");
      cvp.publish();
      cvp.publish();
      cvp.publish();
	  
      
   }
}