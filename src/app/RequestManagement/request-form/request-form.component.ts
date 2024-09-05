import { Component, EventEmitter, Output } from '@angular/core';
import { LeaveRequest } from '../../Interface/leave-request';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css'
})
export class RequestFormComponent {
  request:LeaveRequest = {} as LeaveRequest; 
  
  
  
  @Output() closeModal = new EventEmitter<void>();
 
  


onClose() {
 this.closeModal.emit();
}

  
 // Holds the current date in ISO format for comparison
 today: string = new Date().toISOString().split('T')[0];

 



 // Handles the submission of the task form
 /*addOrEdit(): void {
  
    
       if (this.Test) {
         this.TaskService.updateTask(this.Task);
        
     } else {
         this.TaskService.addTask(this.Task);
     
         this.resetTask();
      
     }
     
   this.onClose()
 }
 
 */
 
 isDateInPast(date: string): boolean {
   return new Date(date) < new Date(this.today);
 }
 

 isStartDateAfterEndDate(startDate: string, deadline: string): boolean {
   const start = new Date(startDate);
   const end = new Date(deadline);
   return start > end;
 }
}









