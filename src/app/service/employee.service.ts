import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  
    employees: Employee[]=[
   {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    phone: 345445,
   },
   {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: 345445,
   }
   ];
   constructor() {
    this.getEmployees
   }
   
   getEmployees(){
    return this.employees; 
   }
   onSum(employee:Employee){
    this.employees.push(employee);
   }


    
    
    getEmployee(id: Number){
      return this.employees.filter(employee => employee.id === id)[0];
      }
      addEmployee(employee: Employee):void{
        this.employees.push(employee);
        }
        onUpdate(employee: Employee){
          const index = this.employees.findIndex(emp => emp.id ===
            employee.id);
            this.employees[index] = employee;
            }
            ondelete(id: Number){
              const index = this.employees.findIndex(emp => emp.id ===
                id);
                this.employees.splice(index, 1);
                }
              }
  

 