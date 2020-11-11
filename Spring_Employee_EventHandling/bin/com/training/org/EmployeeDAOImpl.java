package com.training.org;

import org.springframework.stereotype.Repository;

@Repository ("employeeDao")
public class EmployeeDAOImpl implements EmployeeDAO
{
    public EmployeeDTO createNewEmployee()
    {
        EmployeeDTO e = new EmployeeDTO();
        e.setId(1);
        e.setFirstName("Eshan");
        e.setLastName("Madake");
        return e;
    }
     
    public void initBean() {
        System.out.println("Init Bean for : EmployeeDAOImpl");
    }
     
    public void destroyBean() {
        System.out.println("Init Bean for : EmployeeDAOImpl");
    }
}