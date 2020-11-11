package com.training.org;

import org.springframework.context.ApplicationListener;

public class UserEventsProcessor implements ApplicationListener<EmployeeEvent> {
    public void onApplicationEvent(EmployeeEvent event) 
    {
        EmployeeEvent employeeEvent = (EmployeeEvent) event;
 
        System.out.println("Employee " + employeeEvent.getEventType() 
                          + " with details : " + employeeEvent.getEmployee());
 
        // Do more processing as per application logic
    }
}