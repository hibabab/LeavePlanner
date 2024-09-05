export interface LeaveRequest {

    requestId: number;
    employeeId: number;
    employeeName: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    reasonForLeave: string;
    requestDate: Date;
    approvalStatus: 'Pending' | 'Approved' | 'Rejected';
    approvedBy?: string;
    approvalDate?: Date;
    
  }
  

