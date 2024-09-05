import { Component } from '@angular/core';
import { LeaveRequest } from '../Interface/leave-request';

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrl: './request-approval.component.css'
})
export class RequestApprovalComponent {
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

}
