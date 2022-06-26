import { Address } from './address'

export interface Member {
   id: number;
   firstName: string;
   lastName: string;
   education: string;
   occupation: string;
   address: Address;
}
