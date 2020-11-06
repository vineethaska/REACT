package demo;
import java.util.ArrayList;


public class demo {
	public static void main(String[] args) {
		Employee e1=new Employee();
		System.out.println(e1);
		
		Employee e2=new Employee(101,"Eshan",10000,new Address("Pune","MH","504","304"));
		System.out.println(e2);
		
		
		ArrayList<Employee> eList=new ArrayList<Employee>();
		eList.add(new Employee(102,"Tannu",10000,new Address("Pune","MH","504","54")));
		eList.add(new Employee(103,"Chinku",200030,new Address("Hyd","AP","304","334")));
		eList.add(new Employee(104,"Pappu",43000,new Address("Chennai","TN","304","504")));
		eList.add(new Employee(105,"Channu",340000,new Address("Mumbai","MH","204","604")));
		eList.add(new Employee(106,"Mannu",340000,new Address("Pune","MH","404","504")));
		
		for (Employee employee : eList) {
			System.out.println(employee);
		}
		
	}
}
