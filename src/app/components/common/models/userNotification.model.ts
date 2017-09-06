import {RaciRole} from './raciRole.model';

export class UserNotification {
    public raciRole : RaciRole;
    public taskCreatedNotifyByEmail : boolean;
    public taskCreatedNotifyByText : boolean;
    public taskStartedNotifyByEmail : boolean;
    public taskStartedNotifyByText : boolean;
    public taskCompletedNotifyByEmail : boolean;
    public taskCompletedNotifyByText : boolean;
    public taskInJeopardyNotifyByEmail : boolean;
    public taskInJeopardyNotifyByText : boolean;
    public taskOverdueNotifyByEmail : boolean;
    public taskOverdueNotifyByText : boolean;
    public incidentReportCreatedNotifyByEmail : boolean;
    public incidentReportCreatedNotifyByText : boolean;

    constructor(raciRole: RaciRole, taskCreatedNotifyByEmail : boolean, taskCreatedNotifyByText: boolean, taskStartedNotifyByEmail: boolean, 
    taskStartedNotifyByText: boolean, taskCompletedNotifyByEmail: boolean,
    taskCompletedNotifyByText:boolean, taskInJeopardyNotifyByEmail:boolean, taskInJeopardyNotifyByText:boolean, taskOverdueNotifyByEmail:boolean, 
    taskOverdueNotifyByText: boolean, incidentReportCreatedNotifyByEmail:boolean,
     incidentReportCreatedNotifyByText:boolean ) {
         this.raciRole = raciRole;
         this.taskCreatedNotifyByEmail = taskCreatedNotifyByEmail;
         this.taskCompletedNotifyByText = taskCreatedNotifyByText;
         this.taskStartedNotifyByEmail = taskStartedNotifyByEmail;
         this.taskStartedNotifyByText = taskStartedNotifyByText;
         this.taskCompletedNotifyByEmail = taskCompletedNotifyByEmail;
         this.taskCompletedNotifyByText = taskCompletedNotifyByText;
         this.taskInJeopardyNotifyByEmail = taskInJeopardyNotifyByEmail;
         this.taskInJeopardyNotifyByText = taskCompletedNotifyByText;
         this.taskOverdueNotifyByEmail = taskOverdueNotifyByEmail;
         this.taskOverdueNotifyByText = taskCompletedNotifyByText;
         this.incidentReportCreatedNotifyByEmail = incidentReportCreatedNotifyByEmail;
         this.incidentReportCreatedNotifyByText = incidentReportCreatedNotifyByText;
     }
}