import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transfer} from "../models/transfer.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  urlService = "transfer-service/apiRest/transfers";
  constructor(private http: HttpClient) { }

  public getTransferList() : Observable<Array<Transfer>>{
    return this.http.get<Array<Transfer>>(`${environment.baseUrl}${this.urlService}`);
  }

  public saveTransfer(transfer:Transfer) : Observable<Transfer>{
    return this.http.post<Transfer>(`${environment.baseUrl}${this.urlService}`,transfer);
  }
}
