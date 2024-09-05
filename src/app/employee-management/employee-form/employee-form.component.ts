import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../Interface/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee:Employee = {} as Employee; 
  
  
  
  @Output() closeModal = new EventEmitter<void>();
 
  


onClose() {
 this.closeModal.emit();
}

  

}
