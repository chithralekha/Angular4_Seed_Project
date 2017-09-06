export class PhoneCarrier {
    public id : number;
    public carrier : string;
    public emailForTexts : string;

    constructor( id: number, carrier: string, emailForTexts: string) {
        this.id = id;
        this.carrier = carrier;
        this.emailForTexts = emailForTexts;
    }
}