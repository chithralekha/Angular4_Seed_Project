import {ControlPriority} from './controlPriority.model';
import {DefinitionSource} from './definitionsource.model';

export class Control {
    public code : string;
    public controlPriority : ControlPriority;
    public definitionSource : DefinitionSource ;
    public id : number;
    public magpieCoreControlGuid : string;
    public title : string;
    public weight : number;

    constructor(code:string, controlPriority:ControlPriority, definitionSource: DefinitionSource, id: number, magpieCoreControlGuid : string, title: string, weight: number) {
        this.code = code;
        this.controlPriority = controlPriority;
        this.definitionSource = definitionSource;
        this.id = id;
        this.magpieCoreControlGuid = magpieCoreControlGuid;
        this.title = title;
        this.weight = weight;
    } 
}