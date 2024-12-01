import {Component, OnInit} from '@angular/core';
import {ChatBotService} from "../../../services/chat-bot.service";

@Component({
  selector: 'app-rag-chat',
  templateUrl: './rag-chat.component.html',
  styleUrl: './rag-chat.component.css'
})
export class RagChatComponent implements OnInit{

  question: string="";
  messages: { type: string; text: string }[] = [];
  isLoading: boolean=false;
  constructor(private chatBotService:ChatBotService) {
  }
  ngOnInit(): void {
  }
  sendMessage() {
    this.messages.push({ type: 'user', text: this.question });

    this.isLoading = true;
    this.chatBotService.sendMessage(this.question).subscribe({
      next:(resp:String)=>{
        console.log("Response ===>> ",resp)
        this.messages.push({ type: 'bot', text: `${resp}` });
        this.isLoading = false;
        this.question = '';
      },
      error:(err)=>{
        console.log("Error: ",err)
        this.messages.push({
          type: 'bot',
          text: 'An error occurred. Please try again.'
        });
      }
    })
  }
}
