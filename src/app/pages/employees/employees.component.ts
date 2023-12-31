import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  employee:Employee=new Employee();
  employees!: Employee[];
  from: any;
  showAdd !: boolean;
  showUpdate !: boolean; 
  constructor(private employeeService:EmployeeService) {}
  ngOnInit(): void {
    this.getEmployees();
    }
onUpdate(arg0: number) {
    this.employees.forEach((item)=>{
      if (item.id == arg0){
        item.name = this.employee.name;
        item.email = this.employee.email;
        item.phone = this.employee.phone;
      }

    }
    )
}
  
editData(arg0: number) {
  this.showAdd = false;
  this.showUpdate = true;
Object.assign(this.employee,this.employeeService.getEmployee(arg0));
}
id!: number;
Employee: Employee ={
  id: 0,
  name: '',
  email:'',
  phone:0,
  
};
clickAddEmployee(){
  this.from.value.reset();
  this.showAdd = true;
  this.showUpdate = false;
}
onSubmit(from: NgForm) {
  let employee: Employee = {
    id: from.value.id,
    name : from.value.name,
    email: from.value.email,
    phone: from.value.phone
  } 
  this.employeeService.onSum(employee);
}

 
    
    
    getEmployees(){
      this.employees=this.employeeService.getEmployees();     
  }
  ondelete(id:Number){
    this.employeeService.ondelete(id);
}

}


  
  







 

 
 
 
  

