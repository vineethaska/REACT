import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

//package;

public class MainFile {
	public static void main(String[] args) {
		
		//Resource resource=new ClassPathResource("applicationContext.xml");
		//BeanFactory factory=new XmlBeanFactory(resource);
		//ApplicationContext context =   
		//		    new ClassPathXmlApplicationContext("applicationContext.xml"); 
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		Employee e1=(Employee)context.getBean("empBean");
		System.out.println(e1);
		Address a1 = (Address)context.getBean("addBean");
		
		System.out.println(a1);
		
		
	}
}
