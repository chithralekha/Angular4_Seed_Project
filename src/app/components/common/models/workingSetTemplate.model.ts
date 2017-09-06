import {User} from './user.model';
import {ControlSet} from './controlSet.model';

export class WorkingSetTemplate {
    public workingSetTemplateId: number;
    public workingSetTemplateGuid : string;
    public name : string;
    public createdByUser : User;
    public created : Date;
    public controlSets : ControlSet[];

    constructor(
     workingSetTemplateId: number,
     workingSetTemplateGuid : string,
     name : string,
     createdByUser : User,
     created : Date,
     controlSets : ControlSet[]) {
        this.workingSetTemplateId = workingSetTemplateId;
        this.workingSetTemplateGuid = workingSetTemplateGuid;
        this.name = name;
        this.createdByUser = createdByUser;
        this.created = created;
        this.controlSets = controlSets;

    }
}