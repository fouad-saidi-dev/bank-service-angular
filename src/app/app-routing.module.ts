import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppBarComponent} from "./components/app-bar/app-bar.component";
import {ListTransferComponent} from "./components/transfer/list-transfer/list-transfer.component";
import {ListBeneficiaryComponent} from "./components/beneficiaries/list-beneficiary/list-beneficiary.component";
import {NewBeneficiaryComponent} from "./components/beneficiaries/new-beneficiary/new-beneficiary.component";
import {NewTransferComponent} from "./components/transfer/new-transfer/new-transfer.component";
import {RagChatComponent} from "./components/chat-bot/rag-chat/rag-chat.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: "admin", component: AppBarComponent,
    children: [
      {path: "transfers", component: ListTransferComponent},
      {
        path: "beneficiaries", component: ListBeneficiaryComponent,
      },
      {
        path: "new-beneficiary", component: NewBeneficiaryComponent,
      },
      {
        path: "new-beneficiary/:id", component: NewBeneficiaryComponent,
      },
      {
        path: "new-transfer", component: NewTransferComponent,
      },
      {
        path: "edit-transfer/:id", component: NewTransferComponent,
      },
      {
        path: "chat-bot", component: RagChatComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
