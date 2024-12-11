import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  urlService:string="chat-bot-service/chat/ask"
  constructor(private http:HttpClient) { }

  public sendMessage(question:string):Observable<String>{
    const url = `${environment.baseUrl}${this.urlService}?qst=${encodeURIComponent(question)}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
