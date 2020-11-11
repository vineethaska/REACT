package com.training.org;
import java.util.Iterator;
import java.util.List;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class MyMain {
    public static void main(String[] args) {
        ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentJDBCTemplate studentJDBCTemplate=(StudentJDBCTemplate)context.getBean("studentJDBCTemplate");
        System.out.println("--CREATE RECORD----");
        studentJDBCTemplate.create(101, "Eshan", 23);
        
        List<Student> student=studentJDBCTemplate.listStudent();
        for (Student student2 : student) {
            System.out.print("\nID :- "+student2.getId());
            System.out.print("NAME:- "+student2.getName());
            System.out.print("AGE:- "+student2.getAge());
        }
    }
}