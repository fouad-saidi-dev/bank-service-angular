import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TransferService} from "../../../services/transfer.service";
import {ActivatedRoute} from "@angular/router";
import {Transfer} from "../../../models/transfer.model";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrl: './new-transfer.component.css'
})
export class NewTransferComponent implements OnInit{

  transferForm!: FormGroup;
  transferId!:number;
  constructor(private formBuilder:FormBuilder,
              private transferService:TransferService,
              private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.transferId=this.route.snapshot.params['id']
    this.transferForm = this.formBuilder.group({
      id:this.formBuilder.control(''),
      beneficiaryId:this.formBuilder.control(''),
      sourceRib:this.formBuilder.control(''),
      amount:this.formBuilder.control(''),
      description:this.formBuilder.control(''),
      date:this.formBuilder.control(''),
      type:this.formBuilder.control(''),
    })
  }

  saveTransfer() {
    let transfer:Transfer=this.transferForm.value
    console.log("Transfer Data ===>> ",transfer)
    // this.transferService.saveTransfer(transfer).subscribe({
    //   next:(tr)=>{
    //     console.log("Transfer ==> ",tr)
    //   },
    //   error:(err)=>{
    //     console.log("Error Transfer ==> ",err)
    //   }
    // })
  }

  onCancel() {
    this.transferForm.reset()
  }
}
