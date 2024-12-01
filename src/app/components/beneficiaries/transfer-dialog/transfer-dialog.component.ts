import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfer-dialog',
  templateUrl: './transfer-dialog.component.html',
  styleUrl: './transfer-dialog.component.css'
})
export class TransferDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router:Router) {}

  saveTransfer() {
    this.router.navigate(['/admin/new-transfer'])
  }

  goToTransfer(beneficiaryId: string) {
    this.router.navigateByUrl(`/admin/new-transfer/${beneficiaryId}`)
  }
}
