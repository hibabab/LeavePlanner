import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Employee } from '../Interface/employee';
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent {
  isModalOpen = false;
  Employees: Employee[] = [];

  constructor() {
    // Initialize leave requests here
    this.initializeRequests();
  }

  initializeRequests() {
    const newEmployee: Employee = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      position: 'Software Engineer',
      department: 'IT',
      hireDate: '2022-01-15',
      salary: 50000,
     
      leaveBalance: 15
    };
    
    const anotherEmployee: Employee = {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      position: 'HR Manager',
      department: 'Human Resources',
      hireDate: '2021-03-20',
      salary: 60000,
    
      leaveBalance: 20
    };
  
    this.Employees.push(newEmployee, anotherEmployee);
  }
  deleteRequest(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this task permanently?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      this.Employees.splice(index,1);
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'The task has been deleted.', 'success');
      }
    });
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}



