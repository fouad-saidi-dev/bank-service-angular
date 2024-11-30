import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-transfer-dialog',
  templateUrl: './transfer-dialog.component.html',
  styleUrl: './transfer-dialog.component.css'
})
export class TransferDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
