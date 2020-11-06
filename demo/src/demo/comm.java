package demo;
public class comm extends Employee {
	private Integer sales;
	private double commision;
	private double netSalary;
	
	public comm(Integer empId, String name, double salary, Address address, Integer sales) {
		super(empId,name,salary,address);
		this.sales=sales;
	}
	
	public void calculateSalary(){
		if (sales < 5000) {
			commision = 0.02;
			netSalary = getSalary() + commision;
		}
		else if (sales >= 5000 && sales < 10000) {
			commision = 0.05;
			netSalary = getSalary() + commision;
		}
		else if (sales >= 10000 && sales < 15000) {
			commision = 0.07;
			netSalary = getSalary() + commision;
		}
		else if (sales >= 15000 ) {
			commision = 0.10;
			netSalary = getSalary() + commision;
		}
		System.out.println(netSalary);
	}
	
	@Override
	public String toString() {
		return "SalesEmployee [sales=" + sales + ", commision=" + commision + ", netSalary=" + netSalary + "]";
	}
	
	
	
}