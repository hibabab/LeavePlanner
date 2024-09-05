import { Component } from '@angular/core';
import { LeaveRequest } from '../../Interface/leave-request';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'] // Fixed the property name to 'styleUrls'
})
export class RequestListComponent {
  isModalOpen = false;
  Requests: LeaveRequest[] = [];

  constructor() {
    // Initialize leave requests here
    this.initializeRequests();
  }

  initializeRequests() {
    const newRequest: LeaveRequest = {
      requestId: 1,
      employeeId: 123,
      employeeName: 'John Doe',
      startDate: '2024-09-10',
      endDate: '2024-09-15',
      totalDays: 6,
      reasonForLeave: 'Vacation',
      requestDate: new Date(),
      approvalStatus: 'Pending'
    };
  
    const anotherRequest: LeaveRequest = {
      requestId: 2,
      employeeId: 456,
      employeeName: 'Jane Smith',
      startDate: '2024-09-20',
      endDate: '2024-09-25',
      totalDays: 6,
      reasonForLeave: 'Family emergency',
      requestDate: new Date(),
      approvalStatus: 'Pending'
    };
  
    this.Requests.push(newRequest, anotherRequest);
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
      this.Requests.splice(index,1);
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
