import {Transfer} from "./transfer.model";

export interface Beneficiary{
  id:String;
  firstName:String;
  lastName:String;
  rib:String;
  beneficiaryType:String;
  transferList:Transfer[]
}
