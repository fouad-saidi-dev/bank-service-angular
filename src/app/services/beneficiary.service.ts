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

  public saveBeneficiary(beneficiary:Beneficiary):Observable<Beneficiary> {
    return this.http.post<Beneficiary>(`${environment.baseUrl}${this.serviceUrl}`,beneficiary);
  }

  public getBeneficiary(id:string):Observable<Beneficiary>{
    return this.http.get<Beneficiary>(`${environment.baseUrl}${this.serviceUrl}/${id}`)
  }

  public updateBeneficiary(id:string,beneficiary:Beneficiary):Observable<Beneficiary>{
    return this.http.put<Beneficiary>(`${environment.baseUrl}${this.serviceUrl}/${id}`,beneficiary);
  }
}
