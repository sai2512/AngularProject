import { Member } from "./member";

export interface Model {
    ids: string[];
    // [MaratalStatus.MARRIED]: boolean;
    // [MaratalStatus.UNMARRIED]: boolean;
    members: Member[];

}


export enum MaratalStatus {
    MARRIED = 'MARRIED',
    UNMARRIED = 'UNMARRIED'
}
