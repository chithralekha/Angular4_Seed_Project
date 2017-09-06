export class DefinitionSource {
    public code:string;
    public id: number;
    public magpieCoreDefinitionSourceGuid : string;
    public source : string;

constructor(code: string, id: number,magpieCoreDefinitionSourceGuid: string, source: string ) {
    this.code = code;
    this.id = id;
    this.magpieCoreDefinitionSourceGuid = magpieCoreDefinitionSourceGuid;
    this.source = source;
}
}