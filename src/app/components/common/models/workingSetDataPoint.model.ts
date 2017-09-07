export class WorkingSetDataModel {
    public workingSetId : number;
    public controlSetId : number;
    public timestamp : string;
    public totalTasks : number;
    public totalNew : number;
    public totalInProgress : number;
    public totalInJeopardy : number;
    public totalOverdue : number;
    public totalCompleted : number;
    public totalOnTime : number;
    public compliancePercent : number;

    constructor( 
     workingSetId : number,
     controlSetId : number,
     timestamp : string,
     totalTasks : number,
     totalNew : number,
     totalInProgress : number,
     totalInJeopardy : number,
     totalOverdue : number,
     totalCompleted : number,
     totalOnTime : number,
     compliancePercent : number,
    ) {
         this.workingSetId = workingSetId;
         this.controlSetId = controlSetId;
         this.timestamp = timestamp;
         this.totalTasks = totalTasks;
         this.totalNew = totalNew;
         this.totalInProgress = totalInProgress;
         this.totalInJeopardy = totalInJeopardy;
         this.totalOverdue = totalOverdue;
         this.totalCompleted = totalCompleted;
         this.totalOnTime = totalOnTime;
         this.compliancePercent = compliancePercent;

    }  
}