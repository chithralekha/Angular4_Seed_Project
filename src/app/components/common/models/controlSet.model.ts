import {ControlSetClassification} from './controlSetClassification.model';
import {DefinitionSource} from './definitionsource.model';
import {Control} from'./control.model';

export class ControlSet {
    public code : string;
    public control : Control;
    public controlSetClassification : ControlSetClassification ;
    public definitionSource : DefinitionSource ;
    public id : number;
    public magpieCoreControlSetGuid : string;
    public title : string;
    public version : string;
    public controlSetCompliance : number;

    constructor(code: string, control: Control, controlSetClassification: ControlSetClassification, definitionSource : DefinitionSource, 
    id: number, magpieCoreControlSetGuid: string, title: string, version :string, controlSetCompliance : number)  {
   this.code = code;
   this.control = control;
   this.controlSetClassification = controlSetClassification;
   this.definitionSource = definitionSource;
   this.id = id;
   this.magpieCoreControlSetGuid = magpieCoreControlSetGuid;
   this.title = title;
   this.version = version;
   this.controlSetCompliance = controlSetCompliance;
    }
}