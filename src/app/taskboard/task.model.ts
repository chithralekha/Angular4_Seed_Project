import { DueStatus } from './duestatus.model';
import { TaskState } from './taskstate.model';
export class Task {
  public id: number;
  public workingSetId: number;
  public controlId: number;
  public code: string;
  public title: string;
  public due : Date;
  public dueStatus : DueStatus;
  public taskState : TaskState;
  public responsibleUser : string;
  public controlSetIdMembership : number[];

  constructor(id:number, workingSetId:number, controlId: number, code:string, title:string, due:Date, dueStatus:DueStatus, taskState:TaskState,responsibleUser:string
  , controlSetIdMembership:number[]) {
    this.id =id;
    this.workingSetId = workingSetId;
    this.controlId = controlId;
    this.code = code;
    this.title = title;
    this.due = due;
    this.dueStatus = dueStatus;
    this.taskState = taskState;
    this.responsibleUser = responsibleUser;
    this.controlSetIdMembership = controlSetIdMembership;
  }
}