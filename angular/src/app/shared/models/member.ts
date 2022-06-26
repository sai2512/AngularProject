import { Address } from './address'
import { MaratalStatus } from './model';

export interface Member {
   id: number;
   firstName: string;
   lastName: string;
   education: string;
   occupation: string;
   address: Address;
   spouse: string;
   maratalStatus: MaratalStatus;
}
