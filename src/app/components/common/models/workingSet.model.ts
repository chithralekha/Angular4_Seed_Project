import {User} from './user.model';

export class WorkingSet {
    public id : number;
    public workingSetGuid : string;
    public name : string;
    public description : string;
    public deployed : Date;
    public deployedByUser : User;
    public workingSetCompliance : number;
    public workingSetTemplate : string;
    public workingSetDataPoint : string;
    public users : User[];

    constructor(id : number,
     workingSetGuid : string,
     name : string,
     description : string,
     deployed : Date,
     deployedByUser : User,
     workingSetCompliance : number,
     workingSetTemplate : string,
     workingSetDataPoint : string,
     users : User[]) {
         this.id = id;
         this.workingSetGuid = workingSetGuid;
         this.name = name;
         this.description = description;
         this.deployed = deployed;
         this.deployedByUser = deployedByUser;
         this.workingSetCompliance = workingSetCompliance;
         this.workingSetTemplate = workingSetTemplate;
         this.workingSetDataPoint = workingSetDataPoint;
         this.users = users;
         
     }
}