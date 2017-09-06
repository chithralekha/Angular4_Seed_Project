import {RoleType} from './roleType.model';
export class Role {
    public id : number;
    public name : string;
    public roleType : RoleType;

constructor(id: number, name: string, roleType: RoleType) {
    this.id = id;
    this.name = name;
    this.roleType = roleType;
}
}