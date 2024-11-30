import {Beneficiary} from "./beneficiary.model";

export interface Transfer {
  id: number;
  beneficiaryId: String;
  sourceRib: String;
  amount: number;
  description: String;
  date: Date;
  type: String;
  beneficiary:Beneficiary
}
