import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Beneficiary} from "../models/beneficiary.model";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  serviceUrl: string = "beneficiary-service/apiRest/beneficiaries";
  constructor(private http: HttpClient) { }

  public getBeneficiaryList() : Observable<Array<Beneficiary>>{
    return this.http.get<Array<Beneficiary>>(`${environment.baseUrl}${this.serviceUrl}`);
  }

}
